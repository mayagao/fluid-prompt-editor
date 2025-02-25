"use client";

import { useState, useCallback } from "react";
import Editor from "@/components/Editor";
import PrimitiveSelector from "@/components/PrimitiveSelector";
import ResourceList from "@/components/ResourceList";
import { Reference } from "@/types/reference";
import { Position, PopoverPosition } from "@/types/shared";
import { EditorState, Block, TextBlock, MentionBlock } from "@/types/editor";
import { v4 as uuidv4 } from "uuid";

// Cache interfaces
interface PrimitivesCache {
  [repoName: string]: {
    [category: string]: any[];
  };
}

interface CodeSymbol {
  name: string;
  path: string;
  type: "function" | "method" | "class";
  lineNumber: number;
  title: string;
}

const CODE_CATEGORIES = ["Functions", "Methods", "Classes"];

export default function Home() {
  const [editorState, setEditorState] = useState<EditorState>({
    blocks: [
      {
        id: uuidv4(),
        type: "text",
        content: "",
      },
    ],
    cursor: { blockIndex: 0, offset: 0 },
    selection: null,
  });

  // Add cache states
  const [reposCache, setReposCache] = useState<any[]>([]);
  const [primitivesCache, setPrimitivesCache] = useState<PrimitivesCache>({});

  const [primitiveSelector, setPrimitiveSelector] = useState({
    isOpen: false,
    position: {
      anchor: { top: 0, left: 0 },
      content: { top: 0, left: 0 },
    } as PopoverPosition,
    query: "",
  });

  // Cache management functions
  const getCachedRepos = useCallback(async () => {
    if (reposCache.length > 0) {
      return reposCache;
    }
    // If not in cache, fetch and cache
    const repos = await fetch("/api/repos").then((res) => res.json());
    setReposCache(repos);
    return repos;
  }, [reposCache]);

  const getCachedPrimitives = useCallback(
    async (repoName: string, category: string) => {
      if (primitivesCache[repoName]?.[category]) {
        return primitivesCache[repoName][category];
      }

      // Handle code symbol categories
      if (CODE_CATEGORIES.includes(category)) {
        const symbolType = category.toLowerCase().slice(0, -1); // Remove 's' to get 'function', 'method', 'class'
        const query = `repo:${repoName} language:typescript type:${symbolType} sort:best-match`;

        try {
          const response = await fetch("/api/code-search", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query,
              type: symbolType,
              limit: 50,
            }),
          });

          const symbols = await response.json();
          const formattedSymbols = symbols.map((symbol: any) => ({
            id: symbol.path + ":" + symbol.name,
            title: symbol.name,
            path: symbol.path,
            type: symbolType,
            lineNumber: symbol.lineNumber,
          }));

          setPrimitivesCache((prev) => ({
            ...prev,
            [repoName]: {
              ...prev[repoName],
              [category]: formattedSymbols,
            },
          }));

          return formattedSymbols;
        } catch (error) {
          console.error("Error fetching code symbols:", error);
          return [];
        }
      }

      // Handle regular primitives
      const primitives = await fetch(
        `/api/primitives?repo=${repoName}&category=${category}`
      ).then((res) => res.json());

      setPrimitivesCache((prev) => ({
        ...prev,
        [repoName]: {
          ...prev[repoName],
          [category]: primitives,
        },
      }));
      return primitives;
    },
    [primitivesCache]
  );

  const handleTriggerPrimitive = useCallback(
    (trigger: string, position: Position, query: string) => {
      setPrimitiveSelector({
        isOpen: true,
        position: {
          anchor: position,
          content: {
            top: position.top + 24,
            left: position.left - 8,
          },
        },
        query,
      });
    },
    []
  );

  const handleClosePrimitive = useCallback(() => {
    setPrimitiveSelector((prev) => ({
      ...prev,
      isOpen: false,
      query: "",
    }));
  }, []);

  const handlePrimitiveSelect = useCallback((item: any) => {
    // Handle primitive selection
    console.log("Selected primitive:", item);
  }, []);

  // Convert text blocks and completed mention blocks to references
  const getResourcesFromBlocks = useCallback((blocks: Block[]): Reference[] => {
    return blocks
      .filter((block): block is MentionBlock => {
        return (
          block.type === "mention" &&
          block.state === "completed" &&
          block.selectedItem !== undefined
        );
      })
      .map((block) => ({
        id: block.id,
        type: block.selectedItem.type,
        title: block.selectedItem.title,
        description: `${block.selectedItem.repository.name}/${block.selectedItem.type}`,
      }));
  }, []);

  const handleDelete = (id: string) => {
    setEditorState((prev) => ({
      ...prev,
      blocks: prev.blocks.filter((block) => block.id !== id),
    }));
  };

  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
        <div className="relative">
          <Editor initialValue={editorState} onChange={setEditorState} />
          <PrimitiveSelector
            isOpen={primitiveSelector.isOpen}
            position={primitiveSelector.position}
            query={primitiveSelector.query}
            onClose={handleClosePrimitive}
            onSelect={handlePrimitiveSelect}
          />
        </div>
        <ResourceList
          resources={getResourcesFromBlocks(editorState.blocks)}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}
