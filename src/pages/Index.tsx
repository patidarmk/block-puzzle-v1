import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MadeWithApplaa } from "@/components/made-with-applaa";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Tetris Block Puzzle
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern twist on the classic puzzle game. Drag and drop blocks to clear rows and columns!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/game">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Play Now
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Drag & Drop</h3>
            <p className="text-gray-600">Intuitive drag-and-drop mechanics for placing blocks</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Combo System</h3>
            <p className="text-gray-600">Chain clears for massive score multipliers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Power Blocks</h3>
            <p className="text-gray-600">Special blocks for strategic gameplay</p>
          </div>
        </div>
      </div>
      
      <MadeWithApplaa />
    </div>
  );
};

export default Index;