export interface Reference {
  id: string;
  type: "file" | "pr" | "issue" | "folder";
  title: string;
  path?: string;
  description?: string;
  metadata?: Record<string, any>;
}

export interface ReferenceState {
  references: Reference[];
  selectedReferences: string[]; // IDs
}
