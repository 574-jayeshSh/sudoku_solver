import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-yellow-100 text-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 items-center max-w-6xl w-full">
        
        {/* Left part */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-Merriweather font-extrabold text-gray-900 leading-tight">
            Solve Sudoku with{" "}
            <span className="text-yellow-600">AI precision</span>
          </h1>
          <p className="text-gray-600 mt-4 font-OpenSans text-lg">
            Instantly solve puzzles with one click.
          </p>
          <div className="mt-8 space-x-4">
            <button
              className="px-6 py-3 bg-yellow-500 text-white font-semibold font-OpenSans rounded-lg shadow hover:bg-yellow-600 transition"
              onClick={() => navigate("/solver")}
            >
              Solve Now
            </button>
            <button
              className="px-6 py-3 bg-white text-black font-semibold font-OpenSans rounded-lg shadow hover:text-yellow-700 transition"
              onClick={() => navigate("/solver")}
            >
              Learn More
            </button>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80 grid grid-cols-9 grid-rows-9 gap-[1px] bg-gray-400 p-[1px] rounded-lg shadow-lg">
            {[...Array(81)].map((_, i) => (
              <div
                key={i}
                className="bg-white flex items-center justify-center text-gray-700 text-sm font-medium font-Merriweather"
              >
                {Math.random() > 0.7 ? Math.floor(Math.random() * 9) + 1 : ""}
              </div>
            ))}
            <div className="absolute inset-0 rounded-lg border-4 border-yellow-500 opacity-20 animate-ping"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
