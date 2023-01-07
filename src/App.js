import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { useState, createContext } from "react";
import { boardDefault } from "./components/Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  console.log(board, setBoard);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
