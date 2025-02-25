import React from "react";
import { Category, CATEGORIES } from "@/types/primitives";
import ListItem from "@/components/ui/ListItem";
import {
  RepoIcon,
  GitPullRequestIcon,
  IssueOpenedIcon,
  CommentDiscussionIcon,
  FileDirectoryIcon,
  ChevronRightIcon,
} from "@primer/octicons-react";
import { Repository } from "@/types/primitives";

interface CategorySelectorProps {
  selectedRepo: Repository;
  selectedIndex: number;
  query: string;
  onSelect: (category: Category) => void;
}

export function CategorySelector({
  selectedRepo,
  selectedIndex,
  query,
  onSelect,
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
    <>
      {CATEGORIES.map((category, index) => (
        <ListItem
          key={category.id}
          variant="standard"
          icon={getCategoryIcon(category.icon)}
          title={category.label}
          description={category.description}
          selected={index === selectedIndex}
          onClick={() => onSelect(category)}
          suffixIcon={<ChevronRightIcon size={16} />}
          searchQuery={query}
        />
      ))}
    </>
  );
}
