import React from "react";

interface GridCellProps {
  color: string | null;
  isPreview?: boolean;
  onDrop?: () => void;
}

const GridCell: React.FC<GridCellProps> = ({ color, isPreview = false, onDrop }) => {
  return (
    <div 
      className={`w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center ${isPreview ? '' : 'cursor-pointer'}`}
      style={{ backgroundColor: color || "#f0f0f0" }}
      onClick={onDrop}
    >
      {isPreview && color && (
        <div className="w-6 h-6 rounded-sm border border-gray-800" style={{ backgroundColor: color }} />
      )}
    </div>
  );
};

export default GridCell;