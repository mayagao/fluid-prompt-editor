import { Reference } from "@/types/reference";

interface DragOverlayProps {
  isDragging: boolean;
  draggedItem: Reference | null;
  position: { x: number; y: number };
}

export default function DragOverlay({
  isDragging,
  draggedItem,
  position,
}: DragOverlayProps) {
  return <div>{/* Drag overlay implementation */}</div>;
}
