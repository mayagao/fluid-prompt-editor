import { Reference } from "@/types/reference";

interface ReferenceGroupProps {
  type: Reference["type"];
  references: Reference[];
  onDelete: (id: string) => void;
  onDragStart: (reference: Reference) => void;
}

export default function ReferenceGroup({
  type,
  references,
  onDelete,
  onDragStart,
}: ReferenceGroupProps) {
  return <div>{/* Reference group implementation */}</div>;
}
