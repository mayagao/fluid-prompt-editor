import { useState, useCallback } from "react";
import { Command } from "@/types/command";

interface UseCommandSelectorProps {
  onSelect: (command: Command) => void;
}

export function useCommandSelector({ onSelect }: UseCommandSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleTrigger = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  return {
    isOpen,
    query,
    handleTrigger,
    handleClose,
    setQuery,
  };
}
