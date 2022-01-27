import GameContext from "../store/context/gameContext";
import { useContext } from "react";
import {
  substractCookieAction,
  substractEggAction,
  substractFrogAction,
} from "../store/actions/actionCreator";

const useGame = () => {
  let { cupBoardState, positionState, dispatchCupBoard } =
    useContext(GameContext);

  const substractCookie = (cupBoard) => {
    cupBoardState = cupBoard;
    dispatchCupBoard(substractCookieAction(cupBoardState));
  };
  const substractEgg = (cupBoard) => {
    cupBoardState = cupBoard;
    dispatchCupBoard(substractEggAction(cupBoardState));
  };
  const substractForg = (cupBoard) => {
    cupBoardState = cupBoard;
    console.log("hook", cupBoardState);
    dispatchCupBoard(substractFrogAction(cupBoardState));
  };

  return {
    cupBoardState,
    positionState,
    substractForg,
    substractEgg,
    substractCookie,
  };
};

export default useGame;
