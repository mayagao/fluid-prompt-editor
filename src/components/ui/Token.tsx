interface TokenProps {
  value: string;
  placeholder?: string;
  isActive?: boolean;
}

export default function Token({
  value,
  placeholder,
  isActive = false,
}: TokenProps) {
  return (
    <span className="inline-flex items-center">
      <span className="text-gray-900 absolute -left-[1ch]">@</span>
      <span
        className={`${
          isActive ? "bg-gray-100 border-gray-300" : "border-transparent"
        } border rounded px-1 -ml-px text-gray-600`}
      >
        {value ||
          (isActive && placeholder ? (
            <span className="text-gray-400">{placeholder}</span>
          ) : null)}
      </span>
    </span>
  );
}
