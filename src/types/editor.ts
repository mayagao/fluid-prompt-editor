export type BlockType = "text" | "mention";

export interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface TextBlock extends BaseBlock {
  type: "text";
  content: string;
}

export interface Selection {
  name: string;
  value: any;
}

export interface MentionBlock extends BaseBlock {
  type: "mention";
  state: "searching" | "completed";
  path: string[];
  searchQuery: string;
  selectedItem?: any;
  level: number; // Track which level we're at (1: repo, 2: category, 3: item)
  selections: {
    repository?: Selection;
    category?: Selection;
    item?: Selection;
  };
}

export type Block = TextBlock | MentionBlock;

export interface CursorPosition {
  blockIndex: number;
  offset: number;
}

export interface EditorState {
  blocks: Block[];
  cursor: CursorPosition;
  selection: {
    start: CursorPosition;
    end: CursorPosition;
  } | null;
}

export interface EditorProps {
  initialValue?: EditorState;
  onChange?: (state: EditorState) => void;
  onSubmit?: (state: EditorState) => void;
}
