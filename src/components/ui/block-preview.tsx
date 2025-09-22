import React from "react";
import Block from "./block";

interface BlockPreviewProps {
  blocks: any[];
  title: string;
}

const BlockPreview: React.FC<BlockPreviewProps> = ({ blocks, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs">
      <h3 className="font-bold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {blocks.map((block, index) => (
          <div key={index} className="flex flex-col items-center">
            <Block
              id={block.id}
              type={block.id}
              color={block.color}
              shape={block.shape}
              isPreview={true}
            />
            <span className="text-xs mt-1 text-gray-600">{block.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockPreview;