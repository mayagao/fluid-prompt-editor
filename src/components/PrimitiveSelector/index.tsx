import React, { useState, useCallback, useEffect } from "react";
import { PopoverPosition } from "@/types/shared";
import { Repository, Action, Category, CATEGORIES } from "@/types/primitives";
import {
  RepoIcon,
  FileIcon,
  GitPullRequestIcon,
  IssueOpenedIcon,
  CommentDiscussionIcon,
  FileDirectoryIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  LinkIcon,
  UploadIcon,
} from "@primer/octicons-react";
import ListItem, { BaseListItemProps } from "@/components/ui/ListItem";
import Popover from "@/components/ui/Popover";
import { SAMPLE_REPOS } from "@/data/samples";
import { useSearch } from "@/hooks/useSearch";
import { CategorySelector } from "./CategorySelector";
import { PrimitiveList } from "./PrimitiveList";

interface PrimitiveSelectorProps {
  isOpen: boolean;
  position: PopoverPosition;
  query: string;
  onClose: () => void;
  onSelect: (item: any) => void;
}

const ACTIONS: Action[] = [
  { id: "file", label: "Add a text file", icon: "file", type: "file" },
  { id: "link", label: "Add an external link", icon: "link", type: "link" },
  {
    id: "upload",
    label: "Upload from computer",
    icon: "upload",
    type: "upload",
  },
];

interface NoResultsListItemProps extends BaseListItemProps {
  variant: "no-results";
  query: string;
}

export default function PrimitiveSelector({
  isOpen,
  position,
  query,
  onClose,
  onSelect,
}: PrimitiveSelectorProps) {
  const [allRepos, setAllRepos] = useState<Repository[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  // Fetch all repos when component mounts
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (!token) {
          setAllRepos(SAMPLE_REPOS);
          return;
        }

        const response = await fetch(
          "https://api.github.com/orgs/langchain-ai/repos?sort=updated&per_page=50",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setAllRepos(
            data.map((repo) => ({
              id: repo.id.toString(),
              name: repo.name,
              description: repo.description || null,
              fullName: repo.full_name,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch repos:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch repos");
        setAllRepos(SAMPLE_REPOS);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchRepos();
    }
  }, [isOpen]);

  // Search through all repos using the query from textarea
  const filteredRepos = useSearch(allRepos, query, ["name", "description"]);
  const filteredActions = useSearch(ACTIONS, query, ["label"]);

  // Show only first 5 repos if not showing all and not searching
  const visibleRepos =
    !showAll && !query ? filteredRepos.slice(0, 5) : filteredRepos;

  const hasResults = visibleRepos.length > 0 || filteredActions.length > 0;
  const showDivider = visibleRepos.length > 0 && filteredActions.length > 0;

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

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const items = selectedRepo ? CATEGORIES : filteredRepos;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < items.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedRepo) {
            if (CATEGORIES[selectedIndex]) {
              onSelect(CATEGORIES[selectedIndex]);
            }
          } else if (filteredRepos[selectedIndex]) {
            const repo = filteredRepos[selectedIndex];
            setSelectedRepo(repo);
            setSelectedIndex(0);
          }
          break;
        case "Escape":
          e.preventDefault();
          if (selectedCategory) {
            setSelectedCategory(null);
          } else if (selectedRepo) {
            setSelectedRepo(null);
          } else {
            onClose();
          }
          break;
        case "Backspace":
          if (query === "" && selectedRepo) {
            setSelectedRepo(null);
            setSelectedIndex(0);
          }
          break;
      }
    },
    [
      selectedRepo,
      selectedCategory,
      filteredRepos,
      selectedIndex,
      onSelect,
      onClose,
      query,
    ]
  );

  const handleSelectRepo = (repo: Repository) => {
    setSelectedRepo(repo);
    setSelectedIndex(0);
    onSelect({
      name: repo.name,
      title: repo.name,
      value: repo,
      type: "repository",
    });
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setSelectedIndex(0);
    onSelect(category.label);
  };

  return (
    <Popover
      isOpen={isOpen}
      position={position}
      onClose={onClose}
      className="w-[400px] bg-white rounded-lg shadow-lg border border-gray-200"
      onKeyDown={handleKeyDown}
    >
      {selectedRepo && (
        <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200">
          <button
            onClick={() => {
              if (selectedCategory) {
                setSelectedCategory(null);
              } else {
                setSelectedRepo(null);
              }
              setSelectedIndex(0);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon size={16} />
          </button>
          <span className="text-sm font-medium text-gray-700">
            {selectedRepo.name}
            {selectedCategory && ` > ${selectedCategory.label}`}
          </span>
        </div>
      )}

      <div className="max-h-[300px] overflow-y-auto py-2">
        {selectedRepo ? (
          selectedCategory ? (
            <PrimitiveList
              repository={selectedRepo}
              category={selectedCategory}
              selectedIndex={selectedIndex}
              query={query}
              onSelect={onSelect}
            />
          ) : (
            <CategorySelector
              selectedRepo={selectedRepo}
              selectedIndex={selectedIndex}
              query={query}
              onSelect={handleSelectCategory}
            />
          )
        ) : // Level 1: Repository Selection
        loading ? (
          <div className="px-3 py-2 text-sm text-gray-500">Loading...</div>
        ) : error ? (
          <div className="px-3 py-2 text-sm text-red-500">{error}</div>
        ) : !hasResults && query ? (
          <ListItem variant="no-results" query={query} />
        ) : (
          <>
            {visibleRepos.map((repo, index) => (
              <ListItem
                key={repo.id}
                variant="standard"
                icon={<RepoIcon size={16} />}
                title={repo.name}
                description={repo.description}
                isSelected={index === selectedIndex}
                onClick={() => handleSelectRepo(repo)}
                searchQuery={query}
              />
            ))}

            {!query && filteredRepos.length > 5 && !showAll && (
              <ListItem
                variant="link"
                icon={<ChevronRightIcon size={16} />}
                label={`View all ${filteredRepos.length} repositories`}
                onClick={() => setShowAll(true)}
              />
            )}

            {showDivider && <ListItem variant="divider" />}

            {filteredActions.map((action) => (
              <ListItem
                key={action.id}
                variant="standard"
                icon={
                  action.type === "file" ? (
                    <FileIcon size={16} />
                  ) : action.type === "link" ? (
                    <RepoIcon size={16} />
                  ) : (
                    <UploadIcon size={16} />
                  )
                }
                title={action.label}
                searchQuery={query}
              />
            ))}
          </>
        )}
      </div>
    </Popover>
  );
}
