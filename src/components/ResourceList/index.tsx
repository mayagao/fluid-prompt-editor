import React from "react";
import ResourceRow from "../ResourceRow";
import { Reference } from "@/types/reference";

interface ResourceListProps {
  resources: Reference[];
  onDelete?: (id: string) => void;
}

export default function ResourceList({
  resources,
  onDelete,
}: ResourceListProps) {
  // Only show completed mention blocks
  const mentionResources = resources.filter(
    (resource) => resource.type !== "file"
  );

  if (mentionResources.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 space-y-2">
      <h2 className="text-sm font-medium text-gray-500">Resources</h2>
      <div className="space-y-1">
        {mentionResources.map((resource) => (
          <ResourceRow
            key={resource.id}
            id={resource.id}
            title={resource.title || ""}
            description={resource.description || ""}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
