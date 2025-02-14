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
import BlockComponent from "./Block";
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
  const editorRef = useRef<HTMLDivElement>(null);
  const [showPrimitiveSelector, setShowPrimitiveSelector] = useState(false);
  const [primitivePosition, setPrimitivePosition] = useState<Position>({
    top: 0,
    left: 0,
  });

  const updateState = useCallback(
    (updater: EditorState | ((prev: EditorState) => EditorState)) => {
      setState(updater);
      if (typeof updater === "function") {
        onChange?.(updater(state));
      } else {
        onChange?.(updater);
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
            if (cursor.offset > 0) {
              if (currentBlock.type === "text") {
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
              // Handle backspace in mention block
              if (
                currentBlock.type === "mention" &&
                currentBlock.state === "searching"
              ) {
                if (currentBlock.searchQuery.length > 0) {
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
                      offset: cursor.offset - 1,
                    },
                  };
                } else if (currentBlock.path.length > 0) {
                  const newPath = [...currentBlock.path];
                  newPath.pop();
                  const newBlocks = [...blocks];
                  newBlocks[cursor.blockIndex] = {
                    ...currentBlock,
                    path: newPath,
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
              }
            } else if (cursor.blockIndex > 0) {
              // Merge with previous block if possible
              const prevBlock = blocks[cursor.blockIndex - 1];
              if (prevBlock.type === "text" && currentBlock.type === "text") {
                const newBlocks = [...blocks];
                newBlocks[cursor.blockIndex - 1] = {
                  ...prevBlock,
                  content: prevBlock.content + currentBlock.content,
                };
                newBlocks.splice(cursor.blockIndex, 1);

                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    blockIndex: cursor.blockIndex - 1,
                    offset: prevBlock.content.length,
                  },
                };
              }
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
    [updateState]
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
              // Selected a repository
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
                return {
                  ...currentState,
                  blocks: newBlocks,
                  cursor: {
                    blockIndex: cursor.blockIndex + 1,
                    offset: 0,
                  },
                };
              } else {
                // Selected a category, move to level 3
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

  // Focus management
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (editorRef.current && !editorRef.current.contains(e.target as Node)) {
        setShowPrimitiveSelector(false);
      }
    };

    document.addEventListener("mousedown", handleGlobalClick);
    return () => document.removeEventListener("mousedown", handleGlobalClick);
  }, []);

  return (
    <div
      ref={editorRef}
      className="w-full min-h-[200px] p-4 rounded-lg border border-gray-200 bg-white focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {state.blocks.map((block, index) => (
        <BlockComponent
          key={block.id}
          block={block}
          isActive={index === state.cursor.blockIndex}
          cursorOffset={
            index === state.cursor.blockIndex ? state.cursor.offset : null
          }
          onClick={(e: React.MouseEvent) => handleBlockClick(index, e)}
        />
      ))}

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
