"use client";

import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className=" w-full h-screen overflow-hidden "
        style={{ background: color }}
      >
        <div className=" fixed bottom-14  mx-[500px] py-4">
          <div className=" flex flex-wrap px-3 py-2 gap-4">
            <button
              className="bg-red-700 px-7 py-2 rounded-full"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="bg-green-700 px-7 py-2 rounded-full"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="bg-blue-700 px-7 py-2 rounded-full"
              onClick={() => setColor("Blue")}
            >
              Blue
            </button>
            <button
              className="bg-purple-700 px-7 py-2 rounded-full"
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className="bg-yellow-700 px-7 py-2 rounded-full"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="bg-pink-900 px-7 py-2 rounded-full"
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="bg-violet-500 px-7 py-2 rounded-full"
              onClick={() => setColor("#9C27B0")}
            >
              olive
            </button>
            <button
              className="bg-slate-800 px-7 py-2 rounded-full"
              onClick={() => setColor("#C0C2C9")}
            >
              Slate
            </button>
            <button
              className="bg-yellow-700 px-7 py-2 rounded-full"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="bg-violet-500 px-7 py-2 rounded-full"
              onClick={() => setColor("#9C27B0")}
            >
              olive
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
