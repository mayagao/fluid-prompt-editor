interface HighlightedTextProps {
  text: string;
  highlight: string;
  className?: string;
}

export default function HighlightedText({
  text,
  highlight,
  className = "",
}: HighlightedTextProps) {
  if (!highlight.trim()) {
    return <span className={className}>{text}</span>;
  }

  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escapedHighlight})`, "gi"));

  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="font-bold text-black">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}
