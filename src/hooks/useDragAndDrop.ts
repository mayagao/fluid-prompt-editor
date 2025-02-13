import { useState, useCallback } from "react";
import { Reference } from "@/types/reference";

export function useDragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState<Reference | null>(null);

  const handleDragStart = useCallback((reference: Reference) => {
    setIsDragging(true);
    setDraggedItem(reference);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDraggedItem(null);
  }, []);

  return {
    isDragging,
    draggedItem,
    handleDragStart,
    handleDragEnd,
  };
}
