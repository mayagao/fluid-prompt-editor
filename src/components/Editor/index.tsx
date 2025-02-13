import { useCallback, useRef, useEffect, useState } from "react";
import { Position, PopoverPosition } from "@/types/shared";
import Token from "@/components/ui/Token";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  onTriggerPrimitive: (
    trigger: string,
    position: Position,
    query: string
  ) => void;
  onClosePrimitive: () => void;
}

export default function Editor({
  value,
  onChange,
  onTriggerPrimitive,
  onClosePrimitive,
}: EditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lastTriggerPosRef = useRef<number | null>(null);
  const [tokenValue, setTokenValue] = useState("");
  const [isTokenActive, setIsTokenActive] = useState(false);

  // Improved popover positioning function
  const getTokenPosition = (
    textarea: HTMLTextAreaElement,
    position: number
  ): PopoverPosition => {
    const rect = textarea.getBoundingClientRect();
    const { scrollTop, scrollLeft } = textarea;

    return {
      anchor: {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      },
      content: {
        top: rect.top + scrollTop + 16,
        left: rect.left + scrollLeft + 16,
      },
    };
  };

  // Handles the keypress event for @
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "@") {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const { selectionStart } = textarea;
        lastTriggerPosRef.current = selectionStart;

        const positions = getTokenPosition(textarea, selectionStart);
        setIsTokenActive(true);
        onTriggerPrimitive("@", positions.content, "");
      } else if (e.key === "Escape") {
        setIsTokenActive(false);
        onClosePrimitive();
      }
    },
    [onTriggerPrimitive, onClosePrimitive]
  );

  // Handles text input and detects if the @ should remain active
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      onChange(newValue);

      if (lastTriggerPosRef.current !== null) {
        if (newValue.charAt(lastTriggerPosRef.current) !== "@") {
          // If user deleted the @, close the token
          onClosePrimitive();
          lastTriggerPosRef.current = null;
          setIsTokenActive(false);
          setTokenValue("");
        } else {
          // Update query based on current input after @
          const query = newValue.slice(lastTriggerPosRef.current + 1);
          setTokenValue(query);
          onTriggerPrimitive(
            "@",
            getTokenPosition(e.target, lastTriggerPosRef.current).content,
            query
          );
        }
      }
    },
    [onChange, onClosePrimitive, onTriggerPrimitive]
  );

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white">
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsTokenActive(false)} // Close token on blur
          className="w-full min-h-[200px] p-4 text-gray-900 text-sm focus:outline-none leading-[1.5]"
          placeholder="Type / to add a command, or @ to add a reference..."
        />
      </div>
    </div>
  );
}
