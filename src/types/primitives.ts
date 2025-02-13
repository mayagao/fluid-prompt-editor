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
