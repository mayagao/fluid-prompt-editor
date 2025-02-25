import React from "react";
import { RepoIcon } from "@primer/octicons-react";
import ListItem from "./ListItem";

interface RepositoryItemProps {
  name: string;
  description?: string;
  isSelected?: boolean;
  onSelect: () => void;
  searchQuery?: string;
}

export function RepositoryItem({
  name,
  description,
  isSelected = false,
  onSelect,
  searchQuery = "",
}: RepositoryItemProps) {
  return (
    <ListItem
      variant="standard"
      icon={<RepoIcon size={16} />}
      title={name}
      description={description}
      selected={isSelected}
      onClick={onSelect}
      searchQuery={searchQuery}
    />
  );
}
