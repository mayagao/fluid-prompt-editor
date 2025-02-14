import React from "react";
import type {
  Block,
  TextBlock,
  MentionBlock,
  CursorPosition,
} from "@/types/editor";

interface BlockProps {
  block: Block;
  isActive: boolean;
  cursorOffset: number | null;
  onClick: (e: React.MouseEvent) => void;
}

const TextBlockComponent: React.FC<
  { block: TextBlock } & Omit<BlockProps, "block">
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
> = ({ block, isActive, cursorOffset, onClick }) => {
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

  const renderContent = () => {
    if (block.state === "completed") {
      return `@${block.selectedItem?.title || ""}`;
    }

    if (block.state === "searching") {
      if (block.selections.repository) {
        return (
          <span className="flex items-center">
            <span>@{block.selections.repository.name}</span>
            {block.level >= 2 && (
              <>
                <span className="text-gray-500 mx-0.5">/</span>
                {block.selections.category ? (
                  <>
                    <span>{block.selections.category.name}</span>
                    <span className="text-gray-500 mx-0.5">/</span>
                  </>
                ) : null}
                <span className="relative">
                  {block.searchQuery}
                  {isActive && cursorOffset !== null && (
                    <>
                      <span
                        className="absolute w-[2px] h-[1.2em] bg-black animate-blink"
                        style={{
                          left: `${cursorOffset * 6}px`,
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
              </>
            )}
          </span>
        );
      }

      // Initial state - just show @ and search query
      return (
        <span className="flex items-center">
          <span>@{block.searchQuery}</span>
          {isActive && cursorOffset !== null && (
            <>
              <span
                className="absolute w-[2px] h-[1.2em] bg-black animate-blink"
                style={{
                  left: `${cursorOffset * 6}px`,
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
      );
    }

    return null;
  };

  return (
    <span
      className={`relative inline-flex text-sm items-center rounded px-1.5 py-0.5 ${
        block.state === "searching" ? "bg-blue-100" : "bg-blue-200"
      }`}
      onClick={onClick}
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
        />
      );
    default:
      return null;
  }
}
