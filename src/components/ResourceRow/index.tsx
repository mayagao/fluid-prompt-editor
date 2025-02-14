import React from "react";
import { FileIcon } from "@primer/octicons-react";

interface ResourceRowProps {
  id: string;
  title: string;
  description: string;
  onDelete?: (id: string) => void;
}

export default function ResourceRow({
  id,
  title,
  description,
  onDelete,
}: ResourceRowProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded-md bg-gray-50 hover:bg-gray-100 group">
      <div className="flex items-center gap-2">
        <FileIcon size={16} className="text-gray-500" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          {description && (
            <span className="text-xs text-gray-500">{description}</span>
          )}
        </div>
      </div>
      {onDelete && (
        <button
          onClick={() => onDelete(id)}
          className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ×
        </button>
      )}
    </div>
  );
}
