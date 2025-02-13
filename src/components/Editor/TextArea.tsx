interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  onTriggerCommand: (
    type: "@" | "/",
    position: { top: number; left: number }
  ) => void;
}

export default function TextArea({
  value,
  onChange,
  onTriggerCommand,
}: TextAreaProps) {
  return <div>{/* TextArea implementation */}</div>;
}
