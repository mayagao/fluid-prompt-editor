import { useState, useEffect } from "react";
import { PopoverPosition } from "@/types/shared";
import { Repository, Action } from "@/types/primitives";
import {
  RepoIcon,
  FileIcon,
  LinkIcon,
  UploadIcon,
  ChevronRightIcon,
  ChevronDownIcon,
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
}: PrimitiveSelectorProps) {
  const [allRepos, setAllRepos] = useState<Repository[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  // Search through all repos regardless of showAll state
  const filteredRepos = useSearch(allRepos, query, ["name", "description"]);
  const filteredActions = useSearch(ACTIONS, query, ["label"]);

  // Show only first 5 repos if not showing all and not searching
  const visibleRepos =
    !showAll && !query ? filteredRepos.slice(0, 5) : filteredRepos;

  const hasResults = visibleRepos.length > 0 || filteredActions.length > 0;
  const showDivider = visibleRepos.length > 0 && filteredActions.length > 0;

  return (
    <Popover
      isOpen={isOpen}
      position={position}
      onClose={onClose}
      className="w-[300px]"
    >
      <div className="max-h-[300px] overflow-y-auto py-2">
        {/* Repositories */}
        {loading ? (
          <div className="px-3 py-2 text-sm text-gray-500">Loading...</div>
        ) : error ? (
          <div className="px-3 py-2 text-sm text-red-500">{error}</div>
        ) : !hasResults && query ? (
          <ListItem variant="no-results" query={query} />
        ) : (
          <>
            {visibleRepos.map((repo) => (
              <ListItem
                key={repo.id}
                variant="standard"
                icon={<RepoIcon size={16} />}
                title={repo.name}
                description={repo.description}
                searchQuery={query}
                suffixIcon={<ChevronRightIcon size={16} />}
              />
            ))}

            {/* View all repositories link - only show if not searching and there are more repos */}
            {!query && filteredRepos.length > 5 && !showAll && (
              <ListItem
                variant="link"
                icon={<ChevronDownIcon size={16} />}
                label={`View all ${filteredRepos.length} repositories`}
                onClick={() => setShowAll(true)}
              />
            )}

            {/* Only show divider if both sections have content */}
            {showDivider && <ListItem variant="divider" />}

            {/* Actions */}
            {filteredActions.map((action) => (
              <ListItem
                key={action.id}
                variant="standard"
                icon={
                  action.type === "file" ? (
                    <FileIcon size={16} />
                  ) : action.type === "link" ? (
                    <LinkIcon size={16} />
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
