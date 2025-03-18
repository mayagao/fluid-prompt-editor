import React, { useState, useEffect } from "react";
import type {
  Block,
  TextBlock,
  MentionBlock,
  CursorPosition,
} from "@/types/editor";
import { SubPill, PillPath } from "./SubPill";
import { RepoIcon } from "@primer/octicons-react";
import { getCategoryIcon } from "./icons";

interface BlockProps {
  block: Block;
  isActive: boolean;
  cursorOffset: number | null;
  onClick: (e: React.MouseEvent) => void;
  onSegmentHighlight?: (blockId: string, segmentIndex: number) => void;
  onSegmentDelete?: (blockId: string, segmentIndex: number) => void;
  onSegmentSelect?: (blockId: string, segmentIndex: number) => void;
  onSegmentBackspace?: (blockId: string, segmentIndex: number) => void;
  onFocus?: (blockId: string) => void;
  onSelect?: (blockId: string) => void;
}

const TextBlockComponent: React.FC<
  { block: TextBlock } & Omit<BlockProps, "block" | "onSegmentHighlight">
> = ({ block, isActive, cursorOffset, onClick }) => {
  return (
    <span className="relative inline" onClick={onClick}>
      {block.content}
      {isActive && cursorOffset !== null && (
        <span
          className="absolute w-[2px] h-[1.2em] bg-black animate-blink"
          style={{
            left: `${cursorOffset * 8}px`,
            top: "0.1em",
          }}
        />
      )}
    </span>
  );
};

const MentionBlockComponent: React.FC<
  { block: MentionBlock } & Omit<BlockProps, "block">
> = ({
  block,
  isActive,
  cursorOffset,
  onClick,
  onSegmentHighlight,
  onSegmentDelete,
  onSegmentSelect,
  onSegmentBackspace,
  onFocus,
  onSelect,
}) => {
  // Track which segment is highlighted (0 = repository, 1 = category, 2 = item)
  const [highlightedSegment, setHighlightedSegment] = useState<number | null>(
    null
  );

  // Update highlightedSegment when block changes
  useEffect(() => {
    if (block.highlighted && block.state === "searching") {
      // Only highlight first segment when in searching state
      setHighlightedSegment(block.level > 1 ? block.level - 2 : 0);
    } else if (!block.highlighted) {
      setHighlightedSegment(null);
    }
  }, [block.highlighted, block.state, block.level]);

  // Handle block click
  const handleBlockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onFocus) {
      onFocus(block.id);
    }
    if (onSelect) {
      onSelect(block.id);
    }
    onClick(e);
  };

  // Determine which segment should be highlighted based on the current level
  const getActiveSegmentIndex = () => {
    if (block.state === "searching") {
      // For searching state, highlight the previous level
      return block.level > 1 ? block.level - 2 : null;
    }
    return null;
  };

  const getPlaceholderText = () => {
    switch (block.level) {
      case 1:
        return "select repository";
      case 2:
        return "select category or search anything";
      case 3:
        return "select item";
      default:
        return "";
    }
  };

  const handleSegmentClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    // Toggle highlight
    const newHighlightedSegment = index === highlightedSegment ? null : index;
    setHighlightedSegment(newHighlightedSegment);

    if (onSegmentHighlight) {
      onSegmentHighlight(
        block.id,
        newHighlightedSegment !== null ? newHighlightedSegment : -1
      );
    }
    if (onSegmentSelect && newHighlightedSegment !== null) {
      onSegmentSelect(block.id, newHighlightedSegment);
    }
  };

  const handleSegmentDelete = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSegmentDelete) {
      onSegmentDelete(block.id, index);
    }
  };

  const handleSegmentBackspace = (index: number) => {
    if (onSegmentBackspace) {
      onSegmentBackspace(block.id, index);
    }
  };

  const renderContent = () => {
    // For completed mention pills, show as a series of segments
    if (block.state === "completed" || block.state === "editing") {
      const segments = [];

      // Always include repository with its icon
      if (block.selections.repository) {
        segments.push({
          type: "repository" as const,
          text: block.selections.repository.name,
          icon: <RepoIcon />,
          data: block.selections.repository.value,
        });
      }

      // Include category if selected, with icon only (no text)
      if (block.selections.category) {
        const categoryName = block.selections.category.name;
        segments.push({
          type: "category" as const,
          text: "", // No text, just icon
          icon: getCategoryIcon(categoryName),
          data: block.selections.category.value,
        });
      }

      // Include item if selected
      if (block.selectedItem && block.selectedItem.type !== "codebase") {
        const itemTitle = block.selectedItem.title?.split("/").pop() || "";
        if (itemTitle) {
          segments.push({
            type: "item" as const,
            text: itemTitle,
            data: block.selectedItem.item,
          });
        }
      }

      return (
        <span className="flex items-center">
          <PillPath
            segments={segments}
            highlightedIndex={highlightedSegment}
            onSegmentClick={handleSegmentClick}
            onSegmentDelete={
              block.state === "editing" ? handleSegmentDelete : undefined
            }
            onSegmentBackspace={
              block.state === "editing" ? handleSegmentBackspace : undefined
            }
            isEditing={block.state === "editing"}
            isSelected={block.isSelected}
          />
        </span>
      );
    }

    // For searching state, show appropriate UI based on level
    if (block.state === "searching") {
      const segments = [];

      // Add repository segment if we have one
      if (block.selections.repository) {
        segments.push({
          type: "repository" as const,
          text: block.selections.repository.name,
          icon: <RepoIcon size={16} />,
          data: block.selections.repository.value,
        });
      }

      return (
        <span className="flex items-center">
          {block.level === 1 ? (
            <span className={isActive ? "rounded px-1" : ""}>@</span>
          ) : null}
          {segments.length > 0 && (
            <PillPath
              segments={segments}
              highlightedIndex={null}
              onSegmentClick={() => {}}
              isEditing={false}
            />
          )}
          <span className="relative ml-1">
            <span className="relative">
              {block.searchQuery}
              {isActive && cursorOffset !== null && (
                <>
                  <span
                    className="absolute w-[2px] h-[1.2em] bg-black animate-blink"
                    style={{
                      left: `${(cursorOffset - 1) * 8}px`,
                      top: "0.1em",
                    }}
                  />
                  {!block.searchQuery && (
                    <span className="text-gray-400 ml-0.5">
                      {getPlaceholderText()}
                    </span>
                  )}
                </>
              )}
            </span>
          </span>
        </span>
      );
    }

    return null;
  };

  return (
    <span
      className={`relative inline-flex text-gray-700 text-sm items-center rounded-md py-0.5 px-1.5 cursor-pointer transition-colors ${
        block.isSelected || block.highlighted
          ? "bg-blue-100 border border-blue-500"
          : block.isFocused
          ? "bg-gray-50 border border-gray-200"
          : block.state === "searching"
          ? "bg-gray-100 border border-gray-100"
          : "bg-transparent border border-transparent hover:bg-gray-50 hover:border-gray-200"
      }`}
      onClick={handleBlockClick}
    >
      {renderContent()}
    </span>
  );
};

export default function Block({
  block,
  isActive,
  cursorOffset,
  onClick,
  onSegmentHighlight,
  onSegmentDelete,
  onSegmentSelect,
  onSegmentBackspace,
  onFocus,
  onSelect,
}: BlockProps) {
  switch (block.type) {
    case "text":
      return (
        <TextBlockComponent
          block={block}
          isActive={isActive}
          cursorOffset={cursorOffset}
          onClick={onClick}
        />
      );
    case "mention":
      return (
        <MentionBlockComponent
          block={block}
          isActive={isActive}
          cursorOffset={cursorOffset}
          onClick={onClick}
          onSegmentHighlight={onSegmentHighlight}
          onSegmentDelete={onSegmentDelete}
          onSegmentSelect={onSegmentSelect}
          onSegmentBackspace={onSegmentBackspace}
          onFocus={onFocus}
          onSelect={onSelect}
        />
      );
    default:
      return null;
  }
}
