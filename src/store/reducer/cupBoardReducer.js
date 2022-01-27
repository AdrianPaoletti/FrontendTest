import actionTypes from "../actions/actionTypes";

const cupBoardReducer = (cupBoardState, action) => {
  let newGameState;

  switch (action.type) {
    case actionTypes.substractCookie:
      newGameState = action.gameState;
      newGameState[0] -= 1;
      console.log("actions", newGameState);
      break;
    case actionTypes.substractEgg:
      newGameState = action.gameState;
      newGameState[1] -= 1;
      console.log("actions", newGameState);
      break;
    case actionTypes.substractFrog:
      newGameState = action.gameState;
      newGameState[2] -= 1;
      console.log("actions", newGameState);
      break;
    default:
      newGameState = cupBoardState;
  }

  return newGameState;
};

export default cupBoardReducer;
