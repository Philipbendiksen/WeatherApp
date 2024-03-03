/* Detta är en del av main ytan */

import { useState } from "react";

function MainArea() {
  const [boxColor, setBoxColor] = useState("black");

  const changeColor = () => {
    const newColor = boxColor === "black" ? "orange" : "black";
    setBoxColor(newColor);
  };

  return (
    <div className="flex flex-1 max-w-100% flex-col p-2">
      <div className="w-40 h-40 " style={{ backgroundColor: boxColor }}></div>
      <button
        className="bg-black hover:bg-slate-800 text-white w-40 h-40 m-4 font-bold rounded"
        onClick={changeColor}
      >
        {"  Klicka för att ändra färg "}
      </button>
    </div>
  );
}

export default MainArea;
