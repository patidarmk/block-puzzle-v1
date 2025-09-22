import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useGameLogic } from "@/hooks/use-game-logic";
import GameGrid from "@/components/ui/game-grid";
import GameStats from "@/components/ui/game-stats";
import BlockPreview from "@/components/ui/block-preview";
import Block from "@/components/ui/block";
import { MadeWithApplaa } from "@/components/made-with-applaa";

const Game = () => {
  const { gameState, placeBlock, resetGame, canPlaceBlock } = useGameLogic();

  const handleDrop = (item: any, row: number, col: number) => {
    if (gameState.gameOver) return;
    
    const block = gameState.currentBlocks.find(b => b.id === item.id);
    if (block) {
      placeBlock(block, row, col);
    }
  };

  const handleCellClick = (row: number, col: number) => {
    // For mobile/touch support
    if (gameState.gameOver || gameState.currentBlocks.length === 0) return;
    
    // Try to place the first available block
    const block = gameState.currentBlocks[0];
    if (block && canPlaceBlock(block, row, col)) {
      placeBlock(block, row, col);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Tetris Block Puzzle</h1>
            <p className="text-gray-600">Drag blocks onto the grid to clear rows and columns!</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
            {/* Game stats panel */}
            <div className="w-full lg:w-auto">
              <GameStats 
                score={gameState.score}
                combo={gameState.combo}
                gameOver={gameState.gameOver}
                onReset={resetGame}
              />
            </div>
            
            {/* Game grid */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                <GameGrid 
                  grid={gameState.grid} 
                  onCellClick={handleCellClick}
                />
              </div>
              
              {/* Current blocks */}
              <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
                <h3 className="font-bold mb-3">Current Blocks</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {gameState.currentBlocks.map((block, index) => (
                    <Block
                      key={index}
                      id={block.id}
                      type={block.id}
                      color={block.color}
                      shape={block.shape}
                      onDragStart={() => {
                        // Haptic feedback could be added here
                        if (navigator.vibrate) {
                          navigator.vibrate(50);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Next blocks preview */}
            <div className="w-full lg:w-auto">
              <BlockPreview 
                blocks={gameState.nextBlocks} 
                title="Next Blocks" 
              />
            </div>
          </div>
          
          {/* Game instructions */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-lg mb-3">How to Play</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Drag blocks from the bottom panel onto the grid</li>
              <li>Complete rows or columns to clear them and earn points</li>
              <li>Chain clears together for combo multipliers (2x, 3x, up to 5x)</li>
              <li>Special power blocks can help clear larger areas</li>
              <li>Game ends when no more blocks can be placed</li>
            </ul>
          </div>
          
          <MadeWithApplaa />
        </div>
      </div>
    </DndProvider>
  );
};

export default Game;