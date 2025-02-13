export interface Repository {
  id: string;
  name: string;
  description?: string;
  lastAccessed?: Date;
}

export interface PrimitiveReference {
  type: "repository" | "pr" | "issue" | "discussion" | "file";
  id: string;
  title: string;
  description?: string;
  number?: number;
  path?: string;
}
