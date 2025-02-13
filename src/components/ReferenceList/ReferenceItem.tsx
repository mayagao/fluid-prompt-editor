import { Reference } from "@/types/reference";

interface ReferenceItemProps {
  reference: Reference;
  onDelete: (id: string) => void;
}

export default function ReferenceItem({ reference, onDelete }: ReferenceItemProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded-md bg-gray-50 hover:bg-gray-100">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">{reference.title}</span>
        <span className="text-xs text-gray-400">{reference.path}</span>
      </div>
      <button
        onClick={() => onDelete(reference.id)}
        className="text-gray-400 hover:text-gray-600"
      >
        ×
      </button>
    </div>
  );
}
