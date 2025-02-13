import { Reference } from "@/types/reference";
import ReferenceItem from "./ReferenceItem";

interface ReferenceListProps {
  references: Reference[];
  onDelete: (id: string) => void;
}

export default function ReferenceList({ references, onDelete }: ReferenceListProps) {
  return (
    <div className="mt-4 space-y-2">
      <h2 className="text-sm font-medium text-gray-500">References</h2>
      <div className="space-y-1">
        {references.map((ref) => (
          <ReferenceItem key={ref.id} reference={ref} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
