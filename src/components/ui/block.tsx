import React from "react";
import { useDrag } from "react-dnd";

interface BlockProps {
  id: string;
  type: string;
  color: string;
  shape: number[][];
  isPreview?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

const Block: React.FC<BlockProps> = ({ 
  id, 
  type, 
  color, 
  shape, 
  isPreview = false,
  onDragStart,
  onDragEnd
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "block",
    item: () => {
      if (onDragStart) onDragStart();
      return { id, type, color, shape };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => {
      if (onDragEnd) onDragEnd();
    }
  }));

  return (
    <div
      ref={drag}
      className={`relative ${isPreview ? 'cursor-pointer' : 'cursor-grab'} ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      style={{ width: `${shape[0].length * 30}px`, height: `${shape.length * 30}px` }}
    >
      {shape.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          cell ? (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className="absolute rounded-sm border border-gray-800"
              style={{
                backgroundColor: color,
                width: "28px",
                height: "28px",
                left: `${cellIndex * 30}px`,
                top: `${rowIndex * 30}px`,
              }}
            />
          ) : null
        ))
      )}
    </div>
  );
};

export default Block;