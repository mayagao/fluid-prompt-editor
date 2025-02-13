interface EditorState {
  text: string;
  cursorPosition: number;

  // For @ commands
  references: Reference[];

  // For / commands
  inlineSuggestion: {
    isVisible: boolean;
    text: string;
    position: { top: number; left: number };
  };

  // Shared command state
  commandPalette: {
    isOpen: boolean;
    type: "@" | "/" | null;
    query: string;
    step: number;
    selectedItem?: any;
  };

  // Drag and drop
  dragState: {
    isDragging: boolean;
    draggedItem?: Reference;
  };
}
