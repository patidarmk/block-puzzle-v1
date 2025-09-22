import React from "react";

interface GameStatsProps {
  score: number;
  combo: number;
  gameOver: boolean;
  onReset: () => void;
}

const GameStats: React.FC<GameStatsProps> = ({ score, combo, gameOver, onReset }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Block Puzzle</h2>
        <button 
          onClick={onReset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Reset
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-medium">Score:</span>
          <span className="font-bold text-lg">{score}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Combo:</span>
          <span className="font-bold text-lg">
            {combo > 0 ? `${combo}x` : "None"}
          </span>
        </div>
        
        {combo > 1 && (
          <div className="text-center py-2 bg-yellow-100 rounded-md">
            <span className="font-bold text-yellow-700">
              {combo}x Combo!
            </span>
          </div>
        )}
        
        {gameOver && (
          <div className="text-center py-3 bg-red-100 rounded-md">
            <span className="font-bold text-red-700">Game Over!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameStats;