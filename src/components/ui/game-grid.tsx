import React from "react";
import GridCell from "./grid-cell";

interface GameGridProps {
  grid: (string | null)[][];
  onCellClick?: (row: number, col: number) => void;
  isPreview?: boolean;
}

const GameGrid: React.FC<GameGridProps> = ({ grid, onCellClick, isPreview = false }) => {
  return (
    <div className="inline-block border-2 border-gray-400 rounded-lg p-2 bg-gray-100">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <GridCell
              key={`${rowIndex}-${colIndex}`}
              color={cell}
              isPreview={isPreview}
              onDrop={onCellClick ? () => onCellClick(rowIndex, colIndex) : undefined}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;