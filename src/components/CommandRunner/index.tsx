interface CommandRunnerProps {
  suggestion: string;
  position: { top: number; left: number };
  onAccept: () => void;
  onReject: () => void;
}

export default function CommandRunner({
  suggestion,
  position,
  onAccept,
  onReject,
}: CommandRunnerProps) {
  return <div>{/* CommandRunner implementation */}</div>;
}
