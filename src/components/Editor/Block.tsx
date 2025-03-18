import React, { useState, useEffect } from "react";
import type {
  Block,
  TextBlock,
  MentionBlock,
  CursorPosition,
} from "@/types/editor";
import { SubPill, PillPath } from "./SubPill";

interface BlockProps {
  block: Block;
  isActive: boolean;
  cursorOffset: number | null;
  onClick: (e: React.MouseEvent) => void;
  onSegmentHighlight?: (blockId: string, segmentIndex: number) => void;
  onSegmentDelete?: (blockId: string, segmentIndex: number) => void;
  onSegmentSelect?: (blockId: string, segmentIndex: number) => void;
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
  onFocus,
  onSelect,
}) => {
  // Track which segment is highlighted (0 = repository, 1 = category, 2 = item)
  const [highlightedSegment, setHighlightedSegment] = useState<number | null>(
    block.highlighted ? 0 : null
  );

  // Update highlightedSegment when block changes
  useEffect(() => {
    if (block.highlighted) {
      setHighlightedSegment(0);
    }
  }, [block.highlighted]);

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
        return "select category";
      case 3:
        return "select item";
      default:
        return "";
    }
  };

  const handleSegmentClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setHighlightedSegment(index === highlightedSegment ? null : index);
    if (onSegmentHighlight) {
      onSegmentHighlight(block.id, index);
    }
    if (onSegmentSelect) {
      onSegmentSelect(block.id, index);
    }
  };

  const handleSegmentDelete = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSegmentDelete) {
      onSegmentDelete(block.id, index);
    }
  };

  const renderContent = () => {
    // For completed mention pills, show as a series of segments
    if (block.state === "completed" || block.state === "editing") {
      const segments = [];

      // Always include repository
      if (block.selections.repository) {
        segments.push({
          type: "repository" as const,
          text: block.selections.repository.name,
          data: block.selections.repository.value,
        });
      }

      // Include category if selected
      if (block.selections.category) {
        segments.push({
          type: "category" as const,
          text: block.selections.category.name,
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
        <span className="flex items-center ml-1">
          <PillPath
            segments={segments}
            highlightedIndex={null}
            onSegmentClick={handleSegmentClick}
            onSegmentDelete={
              block.state === "editing" ? handleSegmentDelete : undefined
            }
            isEditing={block.state === "editing"}
            isSelected={block.isSelected}
          />
        </span>
      );
    }

    // For searching state, show appropriate UI based on level
    if (block.state === "searching") {
      if (block.selections.repository) {
        // When repository is selected, show repo name and input for category/item
        const segments = [];
        const activeSegmentIndex = getActiveSegmentIndex();

        // Always include repository in segments
        segments.push({
          type: "repository" as const,
          text: block.selections.repository.name,
          data: block.selections.repository.value,
        });

        // Add category if selected
        if (block.selections.category) {
          segments.push({
            type: "category" as const,
            text: block.selections.category.name,
            data: block.selections.category.value,
          });
        }

        return (
          <span className="flex items-center ml-1">
            <PillPath
              segments={segments}
              highlightedIndex={
                block.highlighted
                  ? 0
                  : highlightedSegment !== null
                  ? highlightedSegment
                  : activeSegmentIndex
              }
              onSegmentClick={handleSegmentClick}
            />
            <span className="relative">
              {block.searchQuery}
              {isActive && cursorOffset !== null && (
                <>
                  <span
                    className="absolute w-[2px] h-[1.2em] bg-black animate-blink"
                    style={{
                      left: `${cursorOffset * 8}px`,
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
        );
      }

      // Initial state - just show @ and search query
      return (
        <span className="flex items-center relative ml-1">
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
      <span className={isActive && block.level === 1 ? "rounded px-1" : ""}>
        @
      </span>
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
          onFocus={onFocus}
          onSelect={onSelect}
        />
      );
    default:
      return null;
  }
}
