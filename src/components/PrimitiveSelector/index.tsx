import React, { useState, useCallback, useEffect, useMemo } from "react";
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
import ListItem from "@/components/ui/ListItem";
import Popover from "@/components/ui/Popover";
import { SAMPLE_REPOS } from "@/data/samples";
import { useSearch } from "@/hooks/useSearch";

interface PrimitiveSelectorProps {
  isOpen: boolean;
  position: PopoverPosition;
  query: string;
  onClose: () => void;
  onSelect: (item: any) => void;
}

export default function PrimitiveSelector({
  isOpen,
  position,
  query,
  onClose,
  onSelect,
}: PrimitiveSelectorProps) {
  const [allRepos, setAllRepos] = useState<Repository[]>([]);
  const [allPrimitives, setAllPrimitives] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  // Fetch repos when component mounts
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (!token) {
          setAllRepos(SAMPLE_REPOS);
          return;
        }

        // Fetch repos first
        const reposResponse = await fetch(
          "https://api.github.com/orgs/langchain-ai/repos?sort=updated&per_page=50",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!reposResponse.ok) {
          throw new Error(`GitHub API error: ${reposResponse.statusText}`);
        }

        const reposData = await reposResponse.json();
        const repos = reposData.map((repo: any) => ({
          id: repo.id.toString(),
          name: repo.name,
          description: repo.description || null,
          fullName: repo.full_name,
        }));
        setAllRepos(repos);
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

  // Fetch primitives when a repo is selected
  useEffect(() => {
    const fetchPrimitives = async () => {
      if (!selectedRepo) return;

      try {
        setLoading(true);
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (!token) return;

        const allPrimitivesData = [];
        for (const category of CATEGORIES) {
          try {
            let endpoint = "";
            switch (category.id) {
              case "prs":
                endpoint = `https://api.github.com/repos/${selectedRepo.fullName}/pulls?state=open&per_page=50`;
                break;
              case "issues":
                endpoint = `https://api.github.com/repos/${selectedRepo.fullName}/issues?state=open&per_page=50`;
                break;
              case "discussions":
                endpoint = `https://api.github.com/repos/${selectedRepo.fullName}/discussions?per_page=50`;
                break;
              case "files":
                endpoint = `https://api.github.com/repos/${selectedRepo.fullName}/contents?per_page=50`;
                break;
              default:
                continue;
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

            if (response.ok) {
              const data = await response.json();
              const items = data.map((item: any) => ({
                id: item.id?.toString() || item.sha,
                title: item.title || item.name,
                description: item.body || item.description,
                type: category.id,
                categoryLabel: category.label,
                repository: selectedRepo,
                iconName: category.icon,
              }));
              allPrimitivesData.push(...items);
            }
          } catch (err) {
            console.error(
              `Failed to fetch ${category.id} for ${selectedRepo.name}:`,
              err
            );
          }
        }
        setAllPrimitives(allPrimitivesData);
      } catch (err) {
        console.error("Failed to fetch primitives:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch primitives"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPrimitives();
  }, [selectedRepo]);

  // Search results for repositories
  const filteredRepos = useSearch(allRepos, query, ["name", "description"]);

  // Search results for primitives
  const filteredPrimitives = useSearch(allPrimitives, query, [
    "title",
    "description",
  ]);

  // Determine which items to show based on current state
  const filteredItems = useMemo(() => {
    if (!selectedRepo) {
      return filteredRepos;
    }

    if (query) {
      return filteredPrimitives;
    }

    return CATEGORIES;
  }, [selectedRepo, filteredRepos, filteredPrimitives, query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredItems.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            const item = filteredItems[selectedIndex];
            if (!selectedRepo) {
              setSelectedRepo(item);
              setSelectedIndex(0);
            } else if (query) {
              // If searching, select the primitive directly
              onSelect({
                title: `${item.repository.name}/${item.categoryLabel}/${item.title}`,
                type: item.type,
                repository: item.repository,
                category: item.categoryLabel,
                item: item,
              });
            } else {
              // If not searching, select the category
              setSelectedCategory(item);
              onSelect(item.label);
            }
          }
          break;
        case "Escape":
          e.preventDefault();
          if (selectedRepo) {
            setSelectedRepo(null);
            setSelectedCategory(null);
            setSelectedIndex(0);
          } else {
            onClose();
          }
          break;
      }
    },
    [filteredItems, selectedIndex, selectedRepo, query, onSelect, onClose]
  );

  const getCategoryIcon = useCallback((iconName: string) => {
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
  }, []);

  return (
    <Popover
      isOpen={isOpen}
      position={position}
      onClose={onClose}
      className="min-w-[300px] max-w-[400px] p-0"
      onKeyDown={handleKeyDown}
    >
      <div className="max-h-[300px] overflow-y-auto py-2">
        {loading ? (
          <div className="px-3 py-2 text-sm text-gray-500">Loading...</div>
        ) : error ? (
          <div className="px-3 py-2 text-sm text-red-500">{error}</div>
        ) : filteredItems.length === 0 ? (
          <ListItem variant="no-results" query={query} />
        ) : !selectedRepo ? (
          // Show repository selection
          <>
            {filteredItems.map((repo, index) => (
              <ListItem
                key={repo.id}
                variant="standard"
                icon={<RepoIcon size={16} />}
                title={repo.name}
                description={repo.description || ""}
                selected={index === selectedIndex}
                onClick={() => {
                  setSelectedRepo(repo);
                  setSelectedIndex(0);
                }}
                searchQuery={query}
              />
            ))}
          </>
        ) : query ? (
          // Show filtered primitives when searching
          <>
            {filteredItems.map((item, index) => (
              <ListItem
                key={`${item.repository.name}-${item.type}-${item.id}`}
                variant="standard"
                icon={getCategoryIcon(item.iconName)}
                title={item.title}
                description={`${item.categoryLabel}`}
                selected={index === selectedIndex}
                onClick={() =>
                  onSelect({
                    title: `${item.repository.name}/${item.categoryLabel}/${item.title}`,
                    type: item.type,
                    repository: item.repository,
                    category: item.categoryLabel,
                    item: item,
                  })
                }
                searchQuery={query}
              />
            ))}
          </>
        ) : (
          // Show categories when not searching
          <>
            {CATEGORIES.map((category, index) => (
              <ListItem
                key={category.id}
                variant="standard"
                icon={getCategoryIcon(category.icon)}
                title={category.label}
                description={category.description}
                selected={index === selectedIndex}
                onClick={() => {
                  setSelectedCategory(category);
                  onSelect(category.label);
                }}
                suffixIcon={<ChevronRightIcon size={16} />}
              />
            ))}
          </>
        )}
      </div>
    </Popover>
  );
}
