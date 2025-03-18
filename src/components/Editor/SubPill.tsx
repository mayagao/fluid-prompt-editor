import React from "react";

interface SubPillProps {
  text: string;
  isHighlighted?: boolean;
  isLast?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * SubPill component represents a single segment of a mention pill
 * (e.g., repository name, category name, or item name)
 */
export const SubPill: React.FC<SubPillProps> = ({
  text,
  isHighlighted = false,
  isLast = false,
  onClick,
}) => {
  return (
    <>
      <span
        className={`inline-flex items-center ${
          isHighlighted
            ? "bg-blue-100 border border-blue-500"
            : "bg-transparent"
        } rounded-md py-0.5 px-1`}
        onClick={onClick}
      >
        {text}
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
  onSegmentClick: (index: number, e: React.MouseEvent) => void;
}

/**
 * PillPath component that renders a series of SubPills representing a complete path
 */
export const PillPath: React.FC<PillPathProps> = ({
  segments,
  highlightedIndex,
  onSegmentClick,
}) => {
  return (
    <span className="flex items-center">
      {segments.map((segment, index) => (
        <SubPill
          key={`${segment.type}-${index}`}
          text={segment.text}
          isHighlighted={highlightedIndex === index}
          isLast={index === segments.length - 1}
          onClick={(e) => onSegmentClick(index, e)}
        />
      ))}
    </span>
  );
};
