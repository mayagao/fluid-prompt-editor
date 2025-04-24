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
  state: "searching" | "completed" | "editing";
  path: string[];
  searchQuery: string;
  selectedItem?: any;
  level: number; // Track which level we're at (1: repo, 2: category, 3: item)
  selections: {
    repository?: Selection;
    category?: Selection;
    item?: Selection;
  };
  highlighted?: boolean; // For two-step deletion process
  selectedSegment?: number; // Track which segment is currently selected (0: repository, 1: category, 2: item)
  isEditing?: boolean; // Whether the block is in editing mode
  isFocused?: boolean; // Whether the block is in focus
  isSelected?: boolean; // Whether the block is selected (for deletion)
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
