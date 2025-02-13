import React from "react";
import { Category, Repository, CATEGORIES } from "@/types/primitives";
import { SelectableList } from "@/components/ui/SelectableList";
import ListItem from "@/components/ui/ListItem";
import { getCategoryIcon } from "@/utils/icons";
import {
  RepoIcon,
  GitPullRequestIcon,
  IssueOpenedIcon,
  CommentDiscussionIcon,
  FileDirectoryIcon,
  ChevronRightIcon,
} from "@primer/octicons-react";

interface CategorySelectorProps {
  selectedRepo: Repository;
  selectedIndex: number;
  query: string;
  onSelect: (category: Category) => void;
  onHighlight?: (index: number) => void;
}

export function CategorySelector({
  selectedRepo,
  selectedIndex,
  query,
  onSelect,
  onHighlight,
}: CategorySelectorProps) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "repo":
        return <RepoIcon size={16} />;
      case "git-pull-request":
        return <GitPullRequestIcon size={16} />;
      case "issue-opened":
        return <IssueOpenedIcon size={16} />;
      case "comment-discussion":
        return <CommentDiscussionIcon size={16} />;
      case "file-directory":
        return <FileDirectoryIcon size={16} />;
      default:
        return <RepoIcon size={16} />;
    }
  };

  return (
    <SelectableList
      items={CATEGORIES}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      onHighlight={onHighlight}
      renderItem={(category, isSelected) => (
        <ListItem
          key={category.id}
          variant="standard"
          icon={getCategoryIcon(category.icon)}
          title={category.label}
          description={category.description}
          isSelected={isSelected}
          onClick={() => onSelect(category)}
          suffixIcon={<ChevronRightIcon size={16} />}
          searchQuery={query}
        />
      )}
    />
  );
}
