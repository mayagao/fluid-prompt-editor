"use client";

import { useState, useCallback } from "react";
import Editor from "@/components/Editor";
import PrimitiveSelector from "@/components/PrimitiveSelector";
import ReferenceList from "@/components/ReferenceList";
import { Reference } from "@/types/reference";
import { Position, PopoverPosition } from "@/types/shared";

export default function Home() {
  const [text, setText] = useState("");
  const [references, setReferences] = useState<Reference[]>([]);
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

  const handleDelete = (id: string) => {
    setReferences((refs) => refs.filter((ref) => ref.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
        <div className="relative">
          <Editor
            value={text}
            onChange={setText}
            onTriggerPrimitive={handleTriggerPrimitive}
            onClosePrimitive={handleClosePrimitive}
          />
          <PrimitiveSelector
            isOpen={primitiveSelector.isOpen}
            position={primitiveSelector.position}
            query={primitiveSelector.query}
            onClose={handleClosePrimitive}
          />
        </div>
        <ReferenceList references={references} onDelete={handleDelete} />
      </div>
    </main>
  );
}
