import React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  autoFocus = false,
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-md border border-gray-200 bg-white pl-10 pr-4 
                 text-sm placeholder:text-gray-500 focus:border-gray-300 focus:outline-none"
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    </div>
  );
}
