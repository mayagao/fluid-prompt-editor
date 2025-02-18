"use client";

import { useState, useCallback } from "react";
import Editor from "@/components/Editor";
import PrimitiveSelector from "@/components/PrimitiveSelector";
import ResourceList from "@/components/ResourceList";
import { Reference } from "@/types/reference";
import { Position, PopoverPosition } from "@/types/shared";
import { EditorState, Block, TextBlock, MentionBlock } from "@/types/editor";
import { v4 as uuidv4 } from "uuid";

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

  const [primitiveSelector, setPrimitiveSelector] = useState({
    isOpen: false,
    position: {
      anchor: { top: 0, left: 0 },
      content: { top: 0, left: 0 },
    } as PopoverPosition,
    query: "",
  });

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
