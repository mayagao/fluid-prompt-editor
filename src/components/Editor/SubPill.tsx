import React from "react";

interface SubPillProps {
  text: string;
  isHighlighted?: boolean;
  isLast?: boolean;
  isEditing?: boolean;
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onDelete?: (e: React.MouseEvent) => void;
}

/**
 * SubPill component represents a single segment of a mention pill
 * (e.g., repository name, category name, or item name)
 */
export const SubPill: React.FC<SubPillProps> = ({
  text,
  isHighlighted = false,
  isLast = false,
  isEditing = false,
  isSelected = false,
  onClick,
  onDelete,
}) => {
  return (
    <>
      <span
        className={`inline-flex items-center group ${
          isSelected
            ? "bg-blue-100 border border-blue-500"
            : isHighlighted
            ? "bg-blue-50 border border-blue-300"
            : "bg-transparent"
        } rounded-md py-0.5 px-1`}
        onClick={onClick}
      >
        {text}
        {isEditing && !isSelected && (
          <button
            className="ml-1 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600"
            onClick={onDelete}
          >
            ×
          </button>
        )}
      </span>
      {!isLast && <span className="text-gray-500 mx-0.5">/</span>}
    </>
  );
};

interface PillSegmentData {
  type: "repository" | "category" | "item";
  text: string;
  data?: any;
}

interface PillPathProps {
  segments: PillSegmentData[];
  highlightedIndex: number | null;
  isEditing?: boolean;
  isSelected?: boolean;
  onSegmentClick: (index: number, e: React.MouseEvent) => void;
  onSegmentDelete?: (index: number, e: React.MouseEvent) => void;
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
}) => {
  return (
    <span className="flex items-center">
      {segments.map((segment, index) => (
        <SubPill
          key={`${segment.type}-${index}`}
          text={segment.text}
          isHighlighted={highlightedIndex === index}
          isLast={index === segments.length - 1}
          isEditing={isEditing}
          isSelected={isSelected}
          onClick={(e) => onSegmentClick(index, e)}
          onDelete={
            onSegmentDelete ? (e) => onSegmentDelete(index, e) : undefined
          }
        />
      ))}
    </span>
  );
};
