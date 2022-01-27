import actionTypes from "./actionTypes";

export const substractCookieAction = (gameState) => ({
  type: actionTypes.substractCookie,
  gameState,
});

export const substractEggAction = (gameState) => ({
  type: actionTypes.substractEgg,
  gameState,
});

export const substractFrogAction = (gameState) => ({
  type: actionTypes.substractFrog,
  gameState,
});
