import React, { useCallback, useEffect, useRef } from "react";
import ListItem, { BaseListItemProps } from "./ListItem";

export interface SelectableListProps<T> {
  items: T[];
  selectedIndex: number;
  onSelect: (item: T) => void;
  onHighlight?: (index: number) => void;
  renderItem: (item: T, isSelected: boolean, index: number) => React.ReactNode;
  className?: string;
  emptyState?: React.ReactNode;
  loading?: boolean;
  loadingState?: React.ReactNode;
  error?: string | null;
  errorState?: React.ReactNode;
}

export function SelectableList<T>({
  items,
  selectedIndex,
  onSelect,
  onHighlight,
  renderItem,
  className = "",
  emptyState,
  loading,
  loadingState,
  error,
  errorState,
}: SelectableListProps<T>) {
  const listRef = useRef<HTMLDivElement>(null);

  // Focus the list when it mounts
  useEffect(() => {
    if (listRef.current) {
      listRef.current.focus();
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (selectedIndex < items.length - 1) {
            onHighlight?.(selectedIndex + 1);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (selectedIndex > 0) {
            onHighlight?.(selectedIndex - 1);
          }
          break;
        case "Enter":
          e.preventDefault();
          if (items[selectedIndex]) {
            onSelect(items[selectedIndex]);
          }
          break;
      }
    },
    [items, selectedIndex, onSelect, onHighlight]
  );

  if (loading) {
    return (
      loadingState || (
        <div className="px-3 py-2 text-sm text-gray-500">Loading...</div>
      )
    );
  }

  if (error) {
    return (
      errorState || (
        <div className="px-3 py-2 text-sm text-red-500">{error}</div>
      )
    );
  }

  if (items.length === 0) {
    return (
      emptyState || (
        <div className="px-3 py-2 text-sm text-gray-500">No results found</div>
      )
    );
  }

  return (
    <div
      ref={listRef}
      tabIndex={0}
      className={`max-h-[300px] overflow-y-auto outline-none ${className}`}
      onKeyDown={handleKeyDown}
      role="listbox"
      aria-activedescendant={`item-${selectedIndex}`}
    >
      {items.map((item, index) => (
        <div key={index} role="option" aria-selected={index === selectedIndex}>
          {renderItem(item, index === selectedIndex, index)}
        </div>
      ))}
    </div>
  );
}
