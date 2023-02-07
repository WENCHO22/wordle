import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const { onEnter, onDelete, onSelectLetter, disabledLetters } =
    useContext(AppContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const allLetters = [...keys1, ...keys2, ...keys3];
  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Backspace") {
      onDelete();
    } else {
      allLetters.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]); //SI
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div>
        {keys1.map((key) => (
          <Key
            keyVal={key}
            key={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div>
        {keys2.map((key) => (
          <Key
            keyVal={key}
            key={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div>
        <Key bigKey={true} keyVal={"ENTER"} key={"enter"} />
        {keys3.map((key) => (
          <Key
            keyVal={key}
            key={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
        <Key bigKey={true} keyVal={"DELETE"} Key={"delete"} />
      </div>
    </div>
  );
}

export default Keyboard;
