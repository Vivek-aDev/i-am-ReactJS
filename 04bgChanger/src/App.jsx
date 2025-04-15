import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
            style={{ backgroundColor: "Orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-sm "
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
            style={{ backgroundColor: "skyblue" }}
            onClick={() => setColor("skyblue")}
          >
            skyblue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
