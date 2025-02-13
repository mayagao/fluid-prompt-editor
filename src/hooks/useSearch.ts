import { useMemo } from "react";

interface Searchable {
  [key: string]: any;
}

export function useSearch<T extends Searchable>(
  items: T[],
  query: string,
  fields: (keyof T)[]
) {
  return useMemo(() => {
    if (!query) return items;

    const lowerQuery = query.toLowerCase();
    return items.filter((item) =>
      fields.some((field) => {
        const value = item[field];
        return value && String(value).toLowerCase().includes(lowerQuery);
      })
    );
  }, [items, query, fields]);
}
