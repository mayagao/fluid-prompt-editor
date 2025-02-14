import React from "react";
import {
  PullRequest,
  Issue,
  Discussion,
  RepoFile,
  Category,
  Repository,
} from "@/types/primitives";
import ListItem from "@/components/ui/ListItem";
import {
  GitPullRequestIcon,
  IssueOpenedIcon,
  CommentDiscussionIcon,
  FileIcon,
  FileDirectoryIcon,
  GitMergedIcon,
  IssueClosedIcon,
  ChevronRightIcon,
} from "@primer/octicons-react";
import { useEffect, useState } from "react";

interface PrimitiveListProps {
  repository: Repository;
  category: Category;
  selectedIndex: number;
  query: string;
  onSelect: (item: any) => void;
}

export function PrimitiveList({
  repository,
  category,
  selectedIndex,
  query,
  onSelect,
}: PrimitiveListProps) {
  const [items, setItems] = useState<
    Array<PullRequest | Issue | Discussion | RepoFile>
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        let endpoint = "";
        let data;

        switch (category.id) {
          case "prs":
            endpoint = `https://api.github.com/repos/${repository.fullName}/pulls?state=open&per_page=50&sort=updated&direction=desc`;
            break;
          case "issues":
            endpoint = `https://api.github.com/repos/${repository.fullName}/issues?state=open&per_page=50&sort=updated&direction=desc`;
            break;
          case "discussions":
            endpoint = `https://api.github.com/repos/${repository.fullName}/discussions?per_page=50&sort=updated&direction=desc`;
            break;
          case "files":
            endpoint = `https://api.github.com/repos/${repository.fullName}/contents?per_page=50`;
            break;
          default:
            setItems([]);
            setLoading(false);
            return;
        }

        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
            ...(category.id === "discussions" && {
              Accept: "application/vnd.github.discussions-preview+json",
            }),
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }

        data = await response.json();

        // For files, sort directories first then files, prioritizing first level items
        if (category.id === "files") {
          data = data.sort((a: any, b: any) => {
            // Check if items are first level (no slashes in path)
            const aIsFirstLevel = !a.path.includes("/");
            const bIsFirstLevel = !b.path.includes("/");

            // If one is first level and other isn't, prioritize first level
            if (aIsFirstLevel !== bIsFirstLevel) {
              return aIsFirstLevel ? -1 : 1;
            }

            // If both are same level, sort directories before files
            if (a.type !== b.type) {
              return a.type === "dir" ? -1 : 1;
            }

            // If same type and level, sort alphabetically
            return a.name.localeCompare(b.name);
          });
        }

        // Transform the data based on category
        const transformedItems = data.map((item: any) => {
          switch (category.id) {
            case "prs":
              return {
                id: item.id.toString(),
                number: item.number,
                title: item.title,
                description: item.body,
                state: "open",
                createdAt: item.created_at,
              };
            case "issues":
              return {
                id: item.id.toString(),
                number: item.number,
                title: item.title,
                description: item.body,
                state: "open",
                createdAt: item.created_at,
              };
            case "discussions":
              return {
                id: item.id.toString(),
                number: item.number,
                title: item.title,
                description: item.body,
                category: item.category.name,
                createdAt: item.created_at,
              };
            case "files":
              return {
                id: item.sha,
                name: item.name,
                path: item.path,
                type: item.type === "dir" ? "dir" : "file",
                size: item.size,
              };
            default:
              return item;
          }
        });

        setItems(transformedItems);
      } catch (err) {
        console.error(`Failed to fetch ${category.id}:`, err);
        setError(
          err instanceof Error ? err.message : `Failed to fetch ${category.id}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [repository.fullName, category.id]);

  // Add this function to check if a file is a directory
  const isDirectory = (
    item: PullRequest | Issue | Discussion | RepoFile
  ): boolean => {
    return "type" in item && item.type === "dir";
  };

  // Update the getIcon function
  const getIcon = (item: PullRequest | Issue | Discussion | RepoFile) => {
    switch (category.id) {
      case "prs":
        return (item as PullRequest).state === "merged" ? (
          <GitMergedIcon size={16} className="text-purple-500" />
        ) : (item as PullRequest).state === "closed" ? (
          <GitPullRequestIcon size={16} className="text-red-500" />
        ) : (
          <GitPullRequestIcon size={16} className="text-green-500" />
        );
      case "issues":
        return (item as Issue).state === "closed" ? (
          <IssueClosedIcon size={16} className="text-red-500" />
        ) : (
          <IssueOpenedIcon size={16} className="text-green-500" />
        );
      case "discussions":
        return <CommentDiscussionIcon size={16} />;
      case "files":
        return isDirectory(item) ? (
          <FileDirectoryIcon size={16} className="text-blue-500" />
        ) : (
          <FileIcon size={16} className="text-gray-500" />
        );
      default:
        return null;
    }
  };

  const handleSelectItem = (item: any) => {
    onSelect({
      title: item.title || item.name || item,
      name: item.name || item.title || item,
      value: item,
      type: category.label.toLowerCase(),
    });
  };

  if (loading) {
    return <div className="px-3 py-2 text-sm text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="px-3 py-2 text-sm text-red-500">{error}</div>;
  }

  return (
    <>
      {items.map((item, index) => (
        <ListItem
          key={item.id || index}
          variant="standard"
          icon={getIcon(item)}
          title={item.title || item.name || item}
          description={item.description || null}
          selected={index === selectedIndex}
          onClick={() => handleSelectItem(item)}
          searchQuery={query}
          suffixIcon={
            isDirectory(item) ? <ChevronRightIcon size={16} /> : undefined
          }
        />
      ))}
    </>
  );
}
