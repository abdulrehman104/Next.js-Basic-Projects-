"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setCounter(counter + 1);
  };
  const handleDec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleReset = () => {
    setCounter(0);npx tailwindcss init

  return (
    <div className=" flex flex-col justify-center items-center gap-6 min-h-screen  bg-gray-800 text-white">
      <h1 className="text-7xl ">Counter App</h1>
      <p className=" text-5xl  p-10">Counter : {counter}</p>
      <div className="flex  gap-5  m-5 p-3">
        <button
          className="bg-sky-500 hover:bg-sky-700 rounded-lg w-32 h-14 font-bold"
          onClick={handleInc}
        >
          Increment +
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-700 rounded-lg w-32 h-14 font-bold"
          onClick={handleDec}
        >
          Decrement -
        </button>
      </div>
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-lg w-32 h-14 font-bold"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
