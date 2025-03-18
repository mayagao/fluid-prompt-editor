import React, { useRef, useEffect } from "react";

interface SubPillProps {
  text: string;
  icon?: React.ReactNode;
  isHighlighted?: boolean;
  isLast?: boolean;
  isEditing?: boolean;
  isSelected?: boolean;
  type?: "repository" | "category" | "item";
  onClick?: (e: React.MouseEvent) => void;
  onDelete?: (e: React.MouseEvent) => void;
  onBackspace?: () => void;
  "data-segment-index"?: number;
}

/**
 * SubPill component represents a single segment of a mention pill
 * (e.g., repository name, category name, or item name)
 */
export const SubPill: React.FC<SubPillProps> = ({
  text,
  icon,
  isHighlighted = false,
  isLast = false,
  isEditing = false,
  isSelected = false,
  type = "repository",
  onClick,
  onDelete,
  onBackspace,
  "data-segment-index": segmentIndex,
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  // Focus the pill when it's highlighted
  useEffect(() => {
    if (isHighlighted && spanRef.current) {
      spanRef.current.focus();
    }
  }, [isHighlighted]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      e.stopPropagation();
      if (onBackspace) {
        onBackspace();
      }
    }
  };

  // Different background and border colors based on type
  const getBgColor = () => {
    if (isSelected) return "bg-blue-100 border-blue-500";
    if (isHighlighted) {
      if (isEditing) {
        return "bg-blue-200 border-blue-400 shadow-sm";
      }
      return "bg-blue-50 border-blue-300";
    }

    switch (type) {
      case "repository":
        return "bg-gray-50 border-gray-200";
      case "category":
        return "bg-blue-50 border-blue-200";
      case "item":
        return "bg-green-50 border-green-200";
      default:
        return "bg-transparent";
    }
  };

  return (
    <>
      <span
        ref={spanRef}
        className={`inline-flex items-center group rounded-md py-0.5 px-1 ${
          isHighlighted && isEditing ? "ring-2 ring-blue-300 ring-offset-1" : ""
        }`}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={isHighlighted ? 0 : -1} // Only make focusable when highlighted
        data-segment-index={segmentIndex}
      >
        {/* Show icon if provided */}
        {icon && (
          <span
            className={text ? "mr-1 text-gray-500" : "text-gray-500"}
            title={type}
          >
            {icon}
          </span>
        )}

        {/* Only show text if there is text */}
        {text && <span>{text}</span>}

        {isEditing && !isSelected && (
          <button
            className="ml-1 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600"
            onClick={onDelete}
          >
            ×
          </button>
        )}
      </span>
    </>
  );
};

interface PillSegmentData {
  type: "repository" | "category" | "item";
  text: string;
  icon?: React.ReactNode;
  data?: any;
}

interface PillPathProps {
  segments: PillSegmentData[];
  highlightedIndex: number | null;
  isEditing?: boolean;
  isSelected?: boolean;
  onSegmentClick: (index: number, e: React.MouseEvent) => void;
  onSegmentDelete?: (index: number, e: React.MouseEvent) => void;
  onSegmentBackspace?: (index: number) => void;
}

/**
 * PillPath component that renders a series of SubPills representing a complete path
 */
export const PillPath: React.FC<PillPathProps> = ({
  segments,
  highlightedIndex,
  isEditing = false,
  isSelected = false,
  onSegmentClick,
  onSegmentDelete,
  onSegmentBackspace,
}) => {
  // Ensure segments can receive focus when highlighted
  useEffect(() => {
    // This ensures the DOM has updated with the new highlighted state
    if (highlightedIndex !== null) {
      // Use setTimeout to ensure the DOM has had time to update
      const timer = setTimeout(() => {
        const pillElement = document.querySelector(
          `[data-segment-index="${highlightedIndex}"]`
        );
        if (pillElement instanceof HTMLElement) {
          pillElement.focus();
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [highlightedIndex]);

  return (
    <span className="flex items-center">
      {segments.map((segment, index) => (
        <SubPill
          key={`${segment.type}-${index}`}
          text={segment.text}
          icon={segment.icon}
          type={segment.type}
          isHighlighted={highlightedIndex === index}
          isLast={index === segments.length - 1}
          isEditing={isEditing}
          isSelected={isSelected}
          onClick={(e) => onSegmentClick(index, e)}
          onDelete={
            onSegmentDelete ? (e) => onSegmentDelete(index, e) : undefined
          }
          onBackspace={
            onSegmentBackspace ? () => onSegmentBackspace(index) : undefined
          }
          data-segment-index={index}
        />
      ))}
    </span>
  );
};
