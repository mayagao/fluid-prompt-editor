import React, { useCallback, useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import type {
  EditorProps,
  EditorState,
  Block as BlockType,
  CursorPosition,
  TextBlock,
  MentionBlock,
} from "@/types/editor";
import type { Reference } from "@/types/reference";
import Block from "./Block";
import { Position } from "@/types/shared";
import PrimitiveSelector from "@/components/PrimitiveSelector";

const createTextBlock = (content: string = ""): TextBlock => {
  const id = uuidv4();
  return {
    id,
    type: "text",
    content,
  };
};

const createMentionBlock = (path: string[] = []): MentionBlock => ({
  id: uuidv4(),
  type: "mention",
  state: "searching",
  path,
  searchQuery: "",
  level: 1,
  selections: {},
});

const initialEditorState: EditorState = {
  blocks: [createTextBlock()],
  cursor: { blockIndex: 0, offset: 0 },
  selection: null,
};

export default function Editor({
  initialValue = initialEditorState,
  onChange,
  onSubmit,
}: EditorProps) {
  const [state, setState] = useState<EditorState>(initialValue);
  const [cachedValue, setCachedValue] = useState<EditorState>(initialValue); // Cache the editor value
  const editorRef = useRef<HTMLDivElement>(null);
  const [showPrimitiveSelector, setShowPrimitiveSelector] = useState(false);
  const [primitivePosition, setPrimitivePosition] = useState<Position>({
    top: 0,
    left: 0,
  });
  const [isFocused, setIsFocused] = useState(false); // Add focus state

  // Handle segment highlights
  const [highlightedSegments, setHighlightedSegments] = useState<{
    [blockId: string]: number | null;
  }>({});

  const updateState = useCallback(
    (updater: EditorState | ((prev: EditorState) => EditorState)) => {
      setState(updater);
      if (typeof updater === "function") {
        const newState = updater(state);
        onChange?.(newState);
        setCachedValue(newState); // Cache the updated value
      } else {
        onChange?.(updater);
        setCachedValue(updater); // Cache the updated value
      }
    },
    [onChange, state]
  );

  const getCurrentSearchQuery = useCallback((currentState: EditorState) => {
    const currentBlock = currentState.blocks[currentState.cursor.blockIndex];
    if (currentBlock.type === "mention" && currentBlock.state === "searching") {
      return currentBlock.searchQuery;
    }
    return "";
  }, []);

  const handleSegmentHighlight = useCallback(
    (blockId: string, segmentIndex: number) => {
      setHighlightedSegments((prev) => {
        const newHighlighted = { ...prev };
        // If segmentIndex is -1, clear the highlight
        if (segmentIndex === -1) {
          delete newHighlighted[blockId];
        } else {
          newHighlighted[blockId] = segmentIndex;
        }
        return newHighlighted;
      });
    },
    []
  );

  // Add this function to force reset the popover to match pill state
  const resetPrimitiveSelectorToMatchPillState = useCallback(
    (mentionBlock: MentionBlock) => {
      if (!editorRef.current) return;

      const rect = editorRef.current.getBoundingClientRect();
      const lineHeight = 20;
      const charWidth = 8;

      // Position based on level
      if (mentionBlock.level === 1) {
        // Repository selection
        setPrimitivePosition({
          top: rect.top,
          left: rect.left + 10, // Just after @
        });
      } else if (mentionBlock.level === 2) {
        // Category selection
        const repoName = mentionBlock.selections.repository?.name || "";
        setPrimitivePosition({
          top: rect.top,
          left: rect.left + repoName.length * charWidth + 20,
        });
      } else if (mentionBlock.level === 3) {
        // Item selection
        const repoName = mentionBlock.selections.repository?.name || "";
        const catName = mentionBlock.selections.category?.name || "";
        setPrimitivePosition({
          top: rect.top,
          left:
            rect.left + (repoName.length + catName.length + 2) * charWidth + 20,
        });
      }
    },
    [editorRef]
  );

  const handleSegmentDelete = useCallback(
    (blockId: string, segmentIndex: number) => {
      updateState((currentState: EditorState): EditorState => {
        const { blocks } = currentState;
        const blockIndex = blocks.findIndex((block) => block.id === blockId);
        if (blockIndex === -1) return currentState;

        const currentBlock = blocks[blockIndex];
        if (currentBlock.type !== "mention") return currentState;

        const newBlocks = [...blocks];

        // Handle deletion based on segment index
        if (segmentIndex === 0) {
          // Delete the entire pill if deleting the repository
          newBlocks.splice(blockIndex, 1);
        } else if (segmentIndex === 1) {
          // Remove category and item, keep just repository
          // Reset to searching state at level 2
          const updatedBlock: MentionBlock = {
            ...currentBlock,
            selections: {
              repository: currentBlock.selections.repository,
            },
            selectedItem: {
              title: currentBlock.selections.repository?.name,
              type: "codebase",
              repository: currentBlock.selections.repository?.value,
            },
            state: "searching" as const, // Explicit type for state
            level: 2, // Reset to level 2 (category selection)
            searchQuery: "", // Clear search query
          };

          newBlocks[blockIndex] = updatedBlock;

          // Reset highlighted segments
          setHighlightedSegments((prev) => {
            const newHighlighted = { ...prev };
            newHighlighted[blockId] = 0; // Highlight the repository segment
            return newHighlighted;
          });

          // Explicitly reset PrimitiveSelector to match updated pill state
          resetPrimitiveSelectorToMatchPillState(updatedBlock);
          setShowPrimitiveSelector(true);

          return {
            ...currentState,
            blocks: newBlocks,
            cursor: {
              blockIndex: blockIndex,
              offset: 0,
            },
          };
        } else if (segmentIndex === 2) {
          // Remove only the item
          newBlocks[blockIndex] = {
            ...currentBlock,
            selectedItem: {
              title: `${currentBlock.selections.repository?.name}/${currentBlock.selections.category?.name}`,
              type: currentBlock.selectedItem?.type || "codebase",
              repository: currentBlock.selectedItem?.repository,
              category: currentBlock.selectedItem?.category,
            },
          };
        }

        return {
          ...currentState,
          blocks: newBlocks,
        };
      });
    },
    [updateState, resetPrimitiveSelectorToMatchPillState]
  );

  const handleSegmentSelect = useCallback(
    (blockId: string, segmentIndex: number) => {
      updateState((currentState: EditorState): EditorState => {
        const { blocks } = currentState;
        const blockIndex = blocks.findIndex((block) => block.id === blockId);
        if (blockIndex === -1) return currentState;

        const currentBlock = blocks[blockIndex];
        if (currentBlock.type !== "mention") return currentState;

        const newBlocks = [...blocks];
        newBlocks[blockIndex] = {
          ...currentBlock,
          selectedSegment: segmentIndex,
        };

        return {
          ...currentState,
          blocks: newBlocks,
        };
      });
    },
    [updateState]
  );

  const handleBlockFocus = useCallback(
    (blockId: string) => {
      updateState((currentState: EditorState): EditorState => {
        const { blocks } = currentState;
        const blockIndex = blocks.findIndex((block) => block.id === blockId);
        if (blockIndex === -1) return currentState;

        const newBlocks = [...blocks];

        // Reset other blocks' focus state
        newBlocks.forEach((block, idx) => {
          if (block.id !== blockId && block.type === "mention") {
            newBlocks[idx] = {
              ...block,
              isFocused: false,
            };
          }
        });

        // Set this block as focused if it's a mention block
        const currentBlock = newBlocks[blockIndex];
        if (currentBlock.type === "mention") {
          newBlocks[blockIndex] = {
            ...currentBlock,
            isFocused: true,
          };
        }

        return {
          ...currentState,
          blocks: newBlocks,
          cursor: {
            blockIndex,
            offset: 0,
          },
        };
      });
    },
    [updateState]
  );

  const handleBlockSelect = useCallback(
    (blockId: string) => {
      updateState((currentState: EditorState): EditorState => {
        const { blocks } = currentState;
        const blockIndex = blocks.findIndex((block) => block.id === blockId);
        if (blockIndex === -1) return currentState;

        const newBlocks = [...blocks];

        // Reset other blocks' selection state
        newBlocks.forEach((block, idx) => {
          if (block.id !== blockId && block.type === "mention") {
            newBlocks[idx] = {
              ...block,
              isSelected: false,
            };
          }
        });

        // Toggle this block's selection state if it's a mention block
        const currentBlock = newBlocks[blockIndex];
        if (currentBlock.type === "mention") {
          newBlocks[blockIndex] = {
            ...currentBlock,
            isSelected: !currentBlock.isSelected,
          };
        }

        return {
          ...currentState,
          blocks: newBlocks,
        };
      });
    },
    [updateState]
  );

  const handleSegmentBackspace = useCallback(
    (blockId: string, segmentIndex: number) => {
      updateState((currentState: EditorState): EditorState => {
        const { blocks, cursor } = currentState;

        // Find the block
        const blockIndex = blocks.findIndex((block) => block.id === blockId);
        if (blockIndex === -1) return currentState;

        const currentBlock = blocks[blockIndex];
        if (currentBlock.type !== "mention") return currentState;

        const newBlocks = [...blocks];

        // Handle backspace based on segment index
        if (segmentIndex === 0) {
          // Delete the entire pill if we're backspacing at the repository level
          newBlocks.splice(blockIndex, 1);

          // Reset highlighted segments and close popover
          setHighlightedSegments((prev) => {
            const newHighlighted = { ...prev };
            delete newHighlighted[blockId];
            return newHighlighted;
          });

          // Close the popover
          setShowPrimitiveSelector(false);

          // If there's a previous block, put cursor at the end of it
          if (blockIndex > 0) {
            const prevBlock = blocks[blockIndex - 1];
            return {
              ...currentState,
              blocks: newBlocks,
              cursor: {
                blockIndex: blockIndex - 1,
                offset:
                  prevBlock.type === "text" ? prevBlock.content.length : 0,
              },
            };
          }
          // If there's a next block, put cursor at beginning
          else if (blockIndex < blocks.length - 1) {
            return {
              ...currentState,
              blocks: newBlocks,
              cursor: {
                blockIndex: blockIndex,
                offset: 0,
              },
            };
          }
          // Otherwise add a text block
          else {
            newBlocks.push(createTextBlock());
            return {
              ...currentState,
              blocks: newBlocks,
              cursor: {
                blockIndex: blockIndex,
                offset: 0,
              },
            };
          }
        } else if (segmentIndex === 1) {
          // Remove category and item, keep just repository
          // Reset to searching state at level 2
          const updatedBlock: MentionBlock = {
            ...currentBlock,
            selections: {
              repository: currentBlock.selections.repository,
            },
            selectedItem: {
              title: currentBlock.selections.repository?.name,
              type: "codebase",
              repository: currentBlock.selections.repository?.value,
            },
            state: "searching" as const, // Explicit type for state
            level: 2, // Reset to level 2 (category selection)
            searchQuery: "", // Clear search query
          };

          newBlocks[blockIndex] = updatedBlock;

          // Reset highlighted segments
          setHighlightedSegments((prev) => {
            const newHighlighted = { ...prev };
            newHighlighted[blockId] = 0; // Highlight the repository segment
            return newHighlighted;
          });

          // Explicitly reset PrimitiveSelector to match updated pill state
          resetPrimitiveSelectorToMatchPillState(updatedBlock);
          setShowPrimitiveSelector(true);

          return {
            ...currentState,
            blocks: newBlocks,
            cursor: {
              blockIndex: blockIndex,
              offset: 0,
            },
          };
        } else if (segmentIndex === 2) {
          // Remove item, keep repository and category
          // Reset to searching state at level 3
          const updatedBlock: MentionBlock = {
            ...currentBlock,
            state: "searching" as const, // Explicit type for state
            level: 3, // Reset to level 3 (item selection)
            searchQuery: "", // Clear search query
            selectedItem: {
              title: `${currentBlock.selections.repository?.name}/${currentBlock.selections.category?.name}`,
              type: currentBlock.selectedItem?.type || "codebase",
              repository: currentBlock.selectedItem?.repository,
              category: currentBlock.selectedItem?.category,
            },
          };

          newBlocks[blockIndex] = updatedBlock;

          // Reset highlighted segments
          setHighlightedSegments((prev) => {
            const newHighlighted = { ...prev };
            newHighlighted[blockId] = 1; // Highlight the category segment
            return newHighlighted;
          });

          // Explicitly reset PrimitiveSelector to match updated pill state
          resetPrimitiveSelectorToMatchPillState(updatedBlock);
          setShowPrimitiveSelector(true);

          return {
            ...currentState,
            blocks: newBlocks,
            cursor: {
              blockIndex: blockIndex,
              offset: 0,
            },
          };
        }

        return currentState;
      });
    },
    [updateState, editorRef, resetPrimitiveSelectorToMatchPillState]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      e.preventDefault();

      updateState((currentState: EditorState): EditorState => {
        const { blocks, cursor } = currentState;
        const currentBlock = blocks[cursor.blockIndex];

        // Handle special keys
        switch (e.key) {
          case "Enter": {
            if (currentBlock.type === "text") {
              const beforeText = currentBlock.content.slice(0, cursor.offset);
              const afterText = currentBlock.content.slice(cursor.offset);

              const newBlock = createTextBlock(afterText);
              const newBlocks = [...blocks];

              // Update current block with content before cursor
              newBlocks[cursor.blockIndex] = {
                ...currentBlock,
                content: beforeText,
              };

              // Insert new block after current
              newBlocks.splice(cursor.blockIndex + 1, 0, newBlock);

              // Only update state, don't trigger resource updates here
              return {
                ...currentState,
                blocks: newBlocks,
                cursor: {
                  blockIndex: cursor.blockIndex + 1,
                  offset: 0,
                },
              };
            }
            return currentState;
          }

          case "ArrowLeft": {
            if (cursor.offset > 0) {
              return {
                ...currentState,
                cursor: {
                  ...cursor,
                  offset: cursor.offset - 1,
                },
              };
            } else if (cursor.blockIndex > 0) {
              const prevBlock = blocks[cursor.blockIndex - 1];
              return {
                ...currentState,
                cursor: {
                  blockIndex: cursor.blockIndex - 1,
                  offset:
                    prevBlock.type === "text" ? prevBlock.content.length : 0,
                },
              };
            }
            return currentState;
          }

          case "ArrowRight": {
            const maxOffset =
              currentBlock.type === "text"
                ? currentBlock.content.length
                : currentBlock.state === "searching"
                ? currentBlock.path.join("/").length +
                  currentBlock.searchQuery.length +
                  1
                : 0;

            if (cursor.offset < maxOffset) {
              return {
                ...currentState,
                cursor: {
                  ...cursor,
                  offset: cursor.offset + 1,
                },
              };
            } else if (cursor.blockIndex < blocks.length - 1) {
              return {
                ...currentState,
                cursor: {
                  blockIndex: cursor.blockIndex + 1,
                  offset: 0,
                },
              };
            }
            return currentState;
          }

          case "Backspace": {
            // If cursor is at the beginning of a block and there's a completed mention pill before it
            if (cursor.offset === 0 && cursor.blockIndex > 0) {
              const prevBlock = blocks[cursor.blockIndex - 1];

              // If the previous block is a completed mention pill
              if (
                prevBlock.type === "mention" &&
                prevBlock.state === "completed"
              ) {
                // If already highlighted, delete it completely
                if (prevBlock.highlighted) {
                  const newBlocks = [...blocks];
                  newBlocks.splice(cursor.blockIndex - 1, 1);

                  return {
                    ...currentState,
                    blocks: newBlocks,
                    cursor: {
                      blockIndex: cursor.blockIndex - 1,
                      offset: 0,
                    },
                  };
                } else {
                  // First backspace just highlights the mention pill
                  const newBlocks = [...blocks];
                  newBlocks[cursor.blockIndex - 1] = {
                    ...prevBlock,
                    highlighted: true,
                  };

                  return {
                    ...currentState,
                    blocks: newBlocks,
                    cursor: {
                      blockIndex: cursor.blockIndex,
                      offset: 0,
                    },
                  };
                }
              }
            }

            // Handle backspace in mention block that's in searching state
            if (
              currentBlock.type === "mention" &&
              currentBlock.state === "searching"
            ) {
              // If at level 1 and no search query, delete the entire mention block
              if (currentBlock.level === 1 && !currentBlock.searchQuery) {
                const newBlocks = [...blocks];
                newBlocks.splice(cursor.blockIndex, 1);
                setShowPrimitiveSelector(false);

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    blockIndex: Math.max(0, cursor.blockIndex - 1),
                    offset: 0,
                  },
                };
              }
              // If there's a search query, just delete from it
              else if (currentBlock.searchQuery) {
                const newBlocks = [...blocks];
                newBlocks[cursor.blockIndex] = {
                  ...currentBlock,
                  searchQuery: currentBlock.searchQuery.slice(0, -1),
                };

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    ...cursor,
                    offset: Math.max(0, cursor.offset - 1),
                  },
                };
              }
            }

            // Normal backspace behavior for text within a block
            if (cursor.offset > 0 && currentBlock.type === "text") {
              const newContent =
                currentBlock.content.slice(0, cursor.offset - 1) +
                currentBlock.content.slice(cursor.offset);

              const newBlocks = [...blocks];
              newBlocks[cursor.blockIndex] = {
                ...currentBlock,
                content: newContent,
              };

              return {
                ...currentState,
                blocks: newBlocks,
                cursor: {
                  ...cursor,
                  offset: cursor.offset - 1,
                },
              };
            }

            return currentState;
          }

          case "@": {
            const rect = editorRef.current?.getBoundingClientRect();
            if (rect) {
              const lineHeight = 20; // Approximate line height
              const charWidth = 8; // Approximate character width

              setPrimitivePosition({
                top: rect.top + cursor.blockIndex * lineHeight,
                left: rect.left + cursor.offset * charWidth,
              });
              setShowPrimitiveSelector(true);

              // Split current block if it's a text block
              if (currentBlock.type === "text") {
                const beforeText = currentBlock.content.slice(0, cursor.offset);
                const afterText = currentBlock.content.slice(cursor.offset);

                const newBlocks = [...blocks];
                newBlocks[cursor.blockIndex] = createTextBlock(beforeText);
                newBlocks.splice(
                  cursor.blockIndex + 1,
                  0,
                  createMentionBlock()
                );
                if (afterText) {
                  newBlocks.splice(
                    cursor.blockIndex + 2,
                    0,
                    createTextBlock(afterText)
                  );
                }

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    blockIndex: cursor.blockIndex + 1,
                    offset: 1, // After the @ symbol
                  },
                };
              } else if (
                currentBlock.type === "mention" &&
                currentBlock.state === "completed"
              ) {
                // If we're in a completed mention block, create a new mention block after it
                const newBlocks = [...blocks];
                newBlocks.splice(
                  cursor.blockIndex + 1,
                  0,
                  createMentionBlock()
                );

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    blockIndex: cursor.blockIndex + 1,
                    offset: 1, // After the @ symbol
                  },
                };
              }
            }
            return currentState;
          }

          case "Delete": {
            // If cursor is on a mention pill
            if (currentBlock.type === "mention") {
              const blockId = currentBlock.id;
              const highlightedSegment = highlightedSegments[blockId];

              // For completed mention pills with highlighted segments
              if (
                currentBlock.state === "completed" &&
                highlightedSegment !== undefined &&
                highlightedSegment !== null
              ) {
                const newBlocks = [...blocks];

                // Get the segments that make up the pill
                const segments = [];
                if (currentBlock.selections.repository) {
                  segments.push({
                    type: "repository",
                    data: currentBlock.selections.repository,
                  });
                }
                if (currentBlock.selections.category) {
                  segments.push({
                    type: "category",
                    data: currentBlock.selections.category,
                  });
                }
                if (currentBlock.selectedItem?.item) {
                  segments.push({
                    type: "item",
                    data: currentBlock.selectedItem.item,
                  });
                }

                // If highlighted segment is the repository (first segment)
                if (highlightedSegment === 0) {
                  // Delete the entire pill
                  newBlocks.splice(cursor.blockIndex, 1);

                  // Reset highlighted segments
                  setHighlightedSegments((prev) => {
                    const newHighlighted = { ...prev };
                    delete newHighlighted[blockId];
                    return newHighlighted;
                  });

                  // Close any open popover
                  setShowPrimitiveSelector(false);

                  // If there's a next block, put cursor at beginning, otherwise add a text block
                  if (cursor.blockIndex < blocks.length - 1) {
                    return {
                      ...currentState,
                      blocks: newBlocks,
                      cursor: {
                        blockIndex: cursor.blockIndex,
                        offset: 0,
                      },
                    };
                  } else {
                    newBlocks.push(createTextBlock());
                    return {
                      ...currentState,
                      blocks: newBlocks,
                      cursor: {
                        blockIndex: cursor.blockIndex,
                        offset: 0,
                      },
                    };
                  }
                }
                // If highlighted segment is the category (second segment)
                else if (highlightedSegment === 1) {
                  // Remove category and item, return to searching state
                  const updatedBlock: MentionBlock = {
                    ...currentBlock,
                    selections: {
                      repository: currentBlock.selections.repository,
                    },
                    selectedItem: {
                      title: currentBlock.selections.repository?.name,
                      type: "codebase",
                      repository: currentBlock.selections.repository?.value,
                    },
                    state: "searching" as const,
                    level: 2,
                    searchQuery: "",
                  };

                  newBlocks[cursor.blockIndex] = updatedBlock;

                  // Reset highlighted segments
                  setHighlightedSegments((prev) => {
                    const newHighlighted = { ...prev };
                    delete newHighlighted[blockId];
                    return newHighlighted;
                  });

                  // Update popover
                  resetPrimitiveSelectorToMatchPillState(updatedBlock);
                  setShowPrimitiveSelector(true);

                  return {
                    ...currentState,
                    blocks: newBlocks,
                    cursor: {
                      blockIndex: cursor.blockIndex,
                      offset: 0,
                    },
                  };
                }
                // If highlighted segment is the item (third segment)
                else if (highlightedSegment === 2) {
                  // Remove item, return to searching state for item selection
                  const updatedBlock: MentionBlock = {
                    ...currentBlock,
                    selectedItem: {
                      title: `${currentBlock.selections.repository?.name}/${currentBlock.selections.category?.name}`,
                      type: currentBlock.selectedItem?.type || "codebase",
                      repository: currentBlock.selectedItem?.repository,
                      category: currentBlock.selectedItem?.category,
                    },
                    state: "searching" as const,
                    level: 3,
                    searchQuery: "",
                  };

                  newBlocks[cursor.blockIndex] = updatedBlock;

                  // Reset highlighted segments
                  setHighlightedSegments((prev) => {
                    const newHighlighted = { ...prev };
                    delete newHighlighted[blockId];
                    return newHighlighted;
                  });

                  // Update popover
                  resetPrimitiveSelectorToMatchPillState(updatedBlock);
                  setShowPrimitiveSelector(true);

                  return {
                    ...currentState,
                    blocks: newBlocks,
                    cursor: {
                      blockIndex: cursor.blockIndex,
                      offset: 0,
                    },
                  };
                }
              }
              // For searching state - implement highlighting and deletion for in-progress pills
              else if (currentBlock.state === "searching") {
                // If a segment is already highlighted, delete it
                if (currentBlock.highlighted) {
                  // If at level 1 (repository selection), delete the entire pill
                  if (currentBlock.level === 1) {
                    const newBlocks = [...blocks];
                    newBlocks.splice(cursor.blockIndex, 1);

                    // If there's a next block, put cursor at beginning, otherwise add a text block
                    if (cursor.blockIndex < blocks.length - 1) {
                      return {
                        ...currentState,
                        blocks: newBlocks,
                        cursor: {
                          blockIndex: cursor.blockIndex,
                          offset: 0,
                        },
                      };
                    } else {
                      newBlocks.push(createTextBlock());
                      return {
                        ...currentState,
                        blocks: newBlocks,
                        cursor: {
                          blockIndex: cursor.blockIndex,
                          offset: 0,
                        },
                      };
                    }
                  }
                  // If at level 2 (category selection), go back to level 1
                  else if (currentBlock.level === 2) {
                    const newBlocks = [...blocks];
                    newBlocks[cursor.blockIndex] = {
                      ...currentBlock,
                      level: 1,
                      searchQuery: "",
                      selections: {},
                      highlighted: false,
                    };
                    return {
                      ...currentState,
                      blocks: newBlocks,
                    };
                  }
                  // If at level 3 (item selection), go back to level 2
                  else if (currentBlock.level === 3) {
                    const newBlocks = [...blocks];
                    newBlocks[cursor.blockIndex] = {
                      ...currentBlock,
                      level: 2,
                      searchQuery: "",
                      selections: {
                        repository: currentBlock.selections.repository,
                      },
                      highlighted: false,
                    };
                    return {
                      ...currentState,
                      blocks: newBlocks,
                    };
                  }
                }
                // First delete - just highlight the current level
                else {
                  const newBlocks = [...blocks];
                  newBlocks[cursor.blockIndex] = {
                    ...currentBlock,
                    highlighted: true,
                  };
                  return {
                    ...currentState,
                    blocks: newBlocks,
                  };
                }
              }
            }

            // Default delete behavior for text blocks
            if (currentBlock.type === "text") {
              if (cursor.offset < currentBlock.content.length) {
                // Delete character after cursor
                const newContent =
                  currentBlock.content.slice(0, cursor.offset) +
                  currentBlock.content.slice(cursor.offset + 1);

                const newBlocks = [...blocks];
                newBlocks[cursor.blockIndex] = {
                  ...currentBlock,
                  content: newContent,
                };

                return {
                  ...currentState,
                  blocks: newBlocks,
                };
              } else if (cursor.blockIndex < blocks.length - 1) {
                // At the end of text block, merge with next block if it's text
                const nextBlock = blocks[cursor.blockIndex + 1];
                if (nextBlock.type === "text") {
                  const newBlocks = [...blocks];
                  newBlocks[cursor.blockIndex] = {
                    ...currentBlock,
                    content: currentBlock.content + nextBlock.content,
                  };
                  newBlocks.splice(cursor.blockIndex + 1, 1);

                  return {
                    ...currentState,
                    blocks: newBlocks,
                  };
                }
              }
            }

            return currentState;
          }

          default: {
            if (e.key.length === 1) {
              // Regular character input
              if (currentBlock.type === "text") {
                const newContent =
                  currentBlock.content.slice(0, cursor.offset) +
                  e.key +
                  currentBlock.content.slice(cursor.offset);

                const newBlocks = [...blocks];
                newBlocks[cursor.blockIndex] = {
                  ...currentBlock,
                  content: newContent,
                };

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    ...cursor,
                    offset: cursor.offset + 1,
                  },
                };
              } else if (
                currentBlock.type === "mention" &&
                currentBlock.state === "searching"
              ) {
                const newBlocks = [...blocks];
                newBlocks[cursor.blockIndex] = {
                  ...currentBlock,
                  searchQuery: currentBlock.searchQuery + e.key,
                };

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    ...cursor,
                    offset: cursor.offset + 1,
                  },
                };
              }
            }
            return currentState;
          }
        }
      });
    },
    [
      updateState,
      highlightedSegments,
      editorRef,
      resetPrimitiveSelectorToMatchPillState,
    ]
  );

  const handleBlockClick = useCallback(
    (blockIndex: number, e: React.MouseEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const charWidth = 8; // Approximate character width
      const offset = Math.round(clickX / charWidth);

      updateState(
        (currentState: EditorState): EditorState => ({
          ...currentState,
          cursor: {
            blockIndex,
            offset: Math.min(
              offset,
              currentState.blocks[blockIndex].type === "text"
                ? currentState.blocks[blockIndex].content.length
                : 0
            ),
          },
        })
      );

      // Set focus when clicking on a block
      setIsFocused(true);
    },
    [updateState]
  );

  const handlePrimitiveSelect = useCallback(
    (selectedValue: any) => {
      updateState((currentState: EditorState): EditorState => {
        const { blocks, cursor } = currentState;
        const currentBlock = blocks[cursor.blockIndex];

        if (
          currentBlock.type === "mention" &&
          currentBlock.state === "searching"
        ) {
          const newBlocks = [...blocks];

          switch (currentBlock.level) {
            case 1: {
              // Selected a repository - move to level 2 for category selection
              newBlocks[cursor.blockIndex] = {
                ...currentBlock,
                level: 2,
                searchQuery: "",
                selections: {
                  repository: {
                    name: selectedValue.name,
                    value: selectedValue,
                  },
                },
              };

              // Reset any highlighted segments
              setHighlightedSegments((prev) => {
                const newHighlighted = { ...prev };
                delete newHighlighted[currentBlock.id];
                return newHighlighted;
              });

              return {
                ...currentState,
                blocks: newBlocks,
                cursor: {
                  ...cursor,
                  offset: 0,
                },
              };
            }

            case 2: {
              if (selectedValue === "Codebase") {
                // Complete the mention with repository + codebase
                const repo = currentBlock.selections.repository;
                if (!repo) return currentState;

                newBlocks[cursor.blockIndex] = {
                  ...currentBlock,
                  state: "completed",
                  selectedItem: {
                    title: `${repo.name}/codebase`,
                    type: "codebase",
                    repository: repo.value,
                  },
                };
                // Add a new text block after
                newBlocks.splice(cursor.blockIndex + 1, 0, createTextBlock());
                setShowPrimitiveSelector(false);

                // Reset highlighted segments
                setHighlightedSegments((prev) => {
                  const newHighlighted = { ...prev };
                  delete newHighlighted[currentBlock.id];
                  return newHighlighted;
                });

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    blockIndex: cursor.blockIndex + 1,
                    offset: 0,
                  },
                };
              } else {
                // Selected a category, move to level 3 for item selection
                newBlocks[cursor.blockIndex] = {
                  ...currentBlock,
                  level: 3,
                  searchQuery: "",
                  selections: {
                    ...currentBlock.selections,
                    category: {
                      name: selectedValue,
                      value: selectedValue,
                    },
                  },
                };

                // Reset highlighted segments
                setHighlightedSegments((prev) => {
                  const newHighlighted = { ...prev };
                  delete newHighlighted[currentBlock.id];
                  return newHighlighted;
                });

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    ...cursor,
                    offset: 0,
                  },
                };
              }
            }

            case 3: {
              // Complete the mention with full path
              const { repository, category } = currentBlock.selections;
              if (!repository || !category) return currentState;

              newBlocks[cursor.blockIndex] = {
                ...currentBlock,
                state: "completed",
                selectedItem: {
                  title: `${repository.name}/${category.name}/${selectedValue.title}`,
                  type: category.name.toLowerCase(),
                  repository: repository.value,
                  category: category.value,
                  item: selectedValue,
                },
              };
              // Add a new text block after
              newBlocks.splice(cursor.blockIndex + 1, 0, createTextBlock());
              setShowPrimitiveSelector(false);

              // Reset highlighted segments
              setHighlightedSegments((prev) => {
                const newHighlighted = { ...prev };
                delete newHighlighted[currentBlock.id];
                return newHighlighted;
              });

              return {
                ...currentState,
                blocks: newBlocks,
                cursor: {
                  blockIndex: cursor.blockIndex + 1,
                  offset: 0,
                },
              };
            }
          }
        }
        return currentState;
      });
    },
    [updateState]
  );

  // Handle focus and blur events
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Focus management
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (editorRef.current && !editorRef.current.contains(e.target as Node)) {
        setShowPrimitiveSelector(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleGlobalClick);
    return () => document.removeEventListener("mousedown", handleGlobalClick);
  }, []);

  // Load cached value when component initializes
  useEffect(() => {
    if (initialValue !== initialEditorState) {
      setCachedValue(initialValue);
    }
  }, [initialValue]);

  // Add a global key event listener to help debug the backspace issue
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Find any pill that is currently highlighted
      const highlightedBlockIds = Object.keys(highlightedSegments);

      if (e.key === "Backspace" && highlightedBlockIds.length > 0) {
        const blockId = highlightedBlockIds[0];
        const segmentIndex = highlightedSegments[blockId];

        // Only handle if there's a valid segment highlighted
        if (segmentIndex !== null && segmentIndex >= 0) {
          // This is a fallback in case the SubPill's keydown event doesn't work
          e.preventDefault();
          e.stopPropagation();
          handleSegmentBackspace(blockId, segmentIndex);
        }
      } else if (e.key === "Escape") {
        // Close the popover when escape is pressed
        setShowPrimitiveSelector(false);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [highlightedSegments, handleSegmentBackspace]);

  // Update the component to monitor pill state and popover state
  useEffect(() => {
    // Find any active mention pill that's in searching state
    if (showPrimitiveSelector && state.blocks.length > 0) {
      const currentBlock = state.blocks[state.cursor.blockIndex];

      if (
        currentBlock.type === "mention" &&
        currentBlock.state === "searching"
      ) {
        // Check if pill level and popover content match
        // If we have a repository selected but no category, ensure we're showing category options
        if (
          currentBlock.selections.repository &&
          !currentBlock.selections.category &&
          currentBlock.level === 2
        ) {
          // Position properly for category selection
          if (editorRef.current) {
            const rect = editorRef.current.getBoundingClientRect();
            const lineHeight = 20;
            const charWidth = 8;

            setPrimitivePosition({
              top: rect.top + state.cursor.blockIndex * lineHeight,
              left:
                rect.left +
                (currentBlock.selections.repository.name.length || 0) *
                  charWidth +
                20,
            });
          }
        }

        // Similarly for item selection
        if (
          currentBlock.selections.repository &&
          currentBlock.selections.category &&
          currentBlock.level === 3
        ) {
          // Position properly for item selection
          if (editorRef.current) {
            const rect = editorRef.current.getBoundingClientRect();
            const lineHeight = 20;
            const charWidth = 8;
            const repoLength =
              currentBlock.selections.repository.name.length || 0;
            const catLength = currentBlock.selections.category.name.length || 0;

            setPrimitivePosition({
              top: rect.top + state.cursor.blockIndex * lineHeight,
              left: rect.left + (repoLength + catLength + 2) * charWidth + 20,
            });
          }
        }
      }
    }
  }, [showPrimitiveSelector, state.blocks, state.cursor.blockIndex]);

  return (
    <div
      className={`border rounded-lg p-4 focus:outline-none ${
        isFocused ? "ring ring-blue-300 border-blue-300" : "border-gray-300"
      }`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={editorRef}
    >
      <div className="relative min-h-[100px]">
        {state.blocks.map((block, index) => (
          <div key={block.id} className="my-1 flex flex-wrap">
            <Block
              block={block}
              isActive={index === state.cursor.blockIndex}
              cursorOffset={
                index === state.cursor.blockIndex ? state.cursor.offset : null
              }
              onClick={(e) => handleBlockClick(index, e)}
              onSegmentHighlight={handleSegmentHighlight}
              onSegmentDelete={handleSegmentDelete}
              onSegmentSelect={handleSegmentSelect}
              onSegmentBackspace={handleSegmentBackspace}
              onFocus={handleBlockFocus}
              onSelect={handleBlockSelect}
            />
          </div>
        ))}
      </div>

      {showPrimitiveSelector && (
        <PrimitiveSelector
          isOpen={showPrimitiveSelector}
          position={{
            anchor: primitivePosition,
            content: {
              top: primitivePosition.top + 50,
              left: primitivePosition.left + 12,
            },
          }}
          query={getCurrentSearchQuery(state)}
          onClose={() => setShowPrimitiveSelector(false)}
          onSelect={handlePrimitiveSelect}
        />
      )}
    </div>
  );
}
