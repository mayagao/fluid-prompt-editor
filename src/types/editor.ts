export interface EditorProps {
  initialValue?: string;
  onSubmit?: (value: string) => void;
}

export interface EditorState {
  text: string;
  cursorPosition: number;
  selection: {
    start: number;
    end: number;
  };
}
