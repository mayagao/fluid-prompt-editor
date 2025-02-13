import { Command } from "@/types/command";

interface CommandSelectorProps {
  isOpen: boolean;
  onSelect: (command: Command) => void;
  onClose: () => void;
}

export default function CommandSelector({
  isOpen,
  onSelect,
  onClose,
}: CommandSelectorProps) {
  return <div>{/* CommandSelector implementation */}</div>;
}
