export type CommandType = "@" | "/";

export interface Command {
  id: string;
  type: CommandType;
  title: string;
  description?: string;
  icon?: string;
  action: (text: string) => Promise<string>;
}

export interface CommandState {
  isOpen: boolean;
  type: CommandType | null;
  query: string;
  step: number;
  selectedItem?: Command;
}
