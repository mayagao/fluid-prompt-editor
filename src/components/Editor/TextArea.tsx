import React, { useState, useRef, useCallback } from "react";
import { PrimitiveSelector } from "../PrimitiveSelector";
import { PopoverPosition } from "@/types/shared";
import { Repository } from "@/types/primitives";

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export function TextArea({ value, onChange }: TextAreaProps) {
  const [showSelector, setShowSelector] = useState(false);
  const [selectorPosition, setSelectorPosition] = useState<PopoverPosition>({
    top: 0,
    left: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const getCursorPosition = useCallback(() => {
    const textArea = textAreaRef.current;
    if (!textArea) return null;

    const { selectionStart, selectionEnd } = textArea;
    if (selectionStart !== selectionEnd) return null;

    const textBeforeCursor = value.slice(0, selectionStart);
    const lines = textBeforeCursor.split("\n");
    const currentLineNumber = lines.length - 1;
    const currentLineStart = textBeforeCursor.lastIndexOf("\n") + 1;

    // Get position of the textarea
    const textAreaRect = textArea.getBoundingClientRect();
    // Calculate line height (you might want to make this more precise)
    const lineHeight = parseInt(window.getComputedStyle(textArea).lineHeight);

    return {
      top: textAreaRect.top + currentLineNumber * lineHeight,
      left: textAreaRect.left + (selectionStart - currentLineStart) * 8, // Approximate char width
    };
  }, [value]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "@") {
        const position = getCursorPosition();
        if (position) {
          setSelectorPosition(position);
          setShowSelector(true);
          setSearchQuery("");
        }
      }
    },
    [getCursorPosition]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      onChange(newValue);

      // If selector is open, update search query
      if (showSelector) {
        const cursorPosition = e.target.selectionStart;
        const textBeforeCursor = newValue.slice(0, cursorPosition);
        const lastAtIndex = textBeforeCursor.lastIndexOf("@");
        if (lastAtIndex >= 0) {
          setSearchQuery(textBeforeCursor.slice(lastAtIndex + 1));
        }
      }
    },
    [onChange, showSelector]
  );

  const handleSelect = useCallback(
    (repo: Repository) => {
      const cursorPosition = textAreaRef.current?.selectionStart || 0;
      const textBeforeCursor = value.slice(0, cursorPosition);
      const lastAtIndex = textBeforeCursor.lastIndexOf("@");

      if (lastAtIndex >= 0) {
        const newValue =
          value.slice(0, lastAtIndex) +
          `@${repo.name}` +
          value.slice(cursorPosition);

        onChange(newValue);
      }

      setShowSelector(false);
    },
    [value, onChange]
  );

  return (
    <div className="relative">
      <textarea
        ref={textAreaRef}
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        className="w-full min-h-[200px] p-3 rounded-md border border-gray-200 
                  focus:border-gray-300 focus:outline-none resize-y"
      />

      <PrimitiveSelector
        isOpen={showSelector}
        position={selectorPosition}
        query={searchQuery}
        onClose={() => setShowSelector(false)}
        onSelect={handleSelect}
      />
    </div>
  );
}
