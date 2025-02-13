export interface Position {
  top: number;
  left: number;
}

export interface PopoverPosition {
  anchor: Position; // Position for the token/trigger
  content: Position; // Position for the dropdown/content
}
