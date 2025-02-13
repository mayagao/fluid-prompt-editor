import { useState, useCallback } from "react";
import { Reference } from "@/types/reference";

interface UsePrimitiveSelectorProps {
  onSelect: (reference: Reference) => void;
}

export function usePrimitiveSelector({ onSelect }: UsePrimitiveSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [step, setStep] = useState(1);

  const handleTrigger = useCallback(() => {
    setIsOpen(true);
    setStep(1);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setStep(1);
  }, []);

  return {
    isOpen,
    query,
    step,
    handleTrigger,
    handleClose,
    setQuery,
    setStep,
  };
}
