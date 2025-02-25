export interface Repository {
  id: string;
  name: string;
  description: string | null;
  fullName: string; // e.g. "mayaqgao/repo-name"
}

export interface Action {
  id: string;
  label: string;
  icon: string;
  type: "file" | "link" | "upload";
}

export type PrimitiveItem = Repository | Action;

export type Category = {
  id: "codebase" | "prs" | "issues" | "discussions" | "files";
  label: string;
  description: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "codebase",
    label: "Codebase",
    description: "Search across the entire repository",
    icon: "repo",
  },
  {
    id: "prs",
    label: "Pull Requests",
    description: "Find and reference pull requests",
    icon: "git-pull-request",
  },
  {
    id: "issues",
    label: "Issues",
    description: "Browse and link to issues",
    icon: "issue-opened",
  },
  {
    id: "discussions",
    label: "Discussions",
    description: "Reference community discussions",
    icon: "comment-discussion",
  },
  {
    id: "files",
    label: "Files and Folders",
    description: "Navigate repository contents",
    icon: "file-directory",
  },
];

// Add these interfaces for different primitive types
export interface PullRequest {
  id: string;
  number: number;
  title: string;
  description?: string;
  state: "open" | "closed" | "merged";
  createdAt: string;
}

export interface Issue {
  id: string;
  number: number;
  title: string;
  description?: string;
  state: "open" | "closed";
  createdAt: string;
}

export interface Discussion {
  id: string;
  number: number;
  title: string;
  description?: string;
  category: string;
  createdAt: string;
}

export interface RepoFile {
  id: string;
  name: string;
  path: string;
  type: "file" | "directory";
  size?: number;
}
