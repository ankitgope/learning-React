import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen  duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex  flex-wrap justify-center bottom-10 inset-x-1 px-2">
        <div className="flex flex-wrap bg-white px-1 py-1 rounded-xl gap-1">
          <button
            className="outline-none px-4 py-1 rounded-full text-white
        shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white
        shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white
        shadow-lg"
            style={{ backgroundColor: "blue" }}
            // using call back in on click
            onClick={() => {
              setColor("Blue");
            }}
          >
            blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white
        shadow-lg"
            style={{ backgroundColor: "indigo" }}
            onClick={() => {
              setColor("indigo");
            }}
          >
            indigo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
