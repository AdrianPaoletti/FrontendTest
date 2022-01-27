import GameContext from "./gameContext";
import cupBoardReducer from "../reducer/cupBoardReducer";
import { useReducer } from "react";

const GameContextProvider = ({ children }) => {
  const [cupBoardState, dispatchCupBoard] = useReducer(cupBoardReducer, []);

  return (
    <GameContext.Provider
      value={{
        cupBoardState,
        dispatchCupBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
