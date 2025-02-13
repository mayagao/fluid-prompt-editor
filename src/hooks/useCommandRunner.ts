import { useState, useCallback } from "react";

interface Position {
  top: number;
  left: number;
}

export function useCommandRunner() {
  const [suggestion, setSuggestion] = useState<string>("");
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const showSuggestion = useCallback((text: string, pos: Position) => {
    setSuggestion(text);
    setPosition(pos);
    setIsVisible(true);
  }, []);

  const hideSuggestion = useCallback(() => {
    setIsVisible(false);
    setSuggestion("");
  }, []);

  return {
    suggestion,
    position,
    isVisible,
    showSuggestion,
    hideSuggestion,
  };
}
