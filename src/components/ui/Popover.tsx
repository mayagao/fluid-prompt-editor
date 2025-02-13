import { useEffect, useRef } from "react";
import { PopoverPosition } from "@/types/shared";

interface PopoverProps {
  isOpen: boolean;
  position: PopoverPosition;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Popover({
  isOpen,
  position,
  onClose,
  children,
  className = "",
}: PopoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!onClose) return;

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Handle window edges
  useEffect(() => {
    if (!ref.current || !isOpen) return;

    const popover = ref.current;
    const rect = popover.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Check right edge
    if (rect.right > windowWidth) {
      const overflow = rect.right - windowWidth;
      popover.style.left = `${position.content.left - overflow - 20}px`;
    }

    // Check bottom edge
    if (rect.bottom > windowHeight) {
      // Position above the cursor instead
      popover.style.top = `${position.anchor.top - rect.height - 10}px`;
    }
  }, [isOpen, position]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className={`fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden ${className}`}
      style={{
        top: position.content.top,
        left: position.content.left,
      }}
    >
      {children}
    </div>
  );
}
