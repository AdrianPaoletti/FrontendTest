import { useState } from "react";
import Button from "../../components/Button/Button";
import "./GamePage.scss";
import CellsList from "../../components/CellsList/CellsList";
const GamePage = () => {
  const [cupBoard, setCupBoard] = useState([3, 3, 3]);
  let [positionCounter, setPositionCounter] = useState(0);
  const initialStatePosition = [1, 0, 0, 0, 0, 0, 0];
  const [positionArray, setPositionArray] = useState(initialStatePosition);

  return (
    <div className="game">
      <h1 className="game__title">Game</h1>
      <Button
        cupBoard={cupBoard}
        setCupBoard={setCupBoard}
        positionCounter={positionCounter}
        positionArray={positionArray}
      />
      <div className="game__dashboard">
        <CellsList positionArray={positionArray} />
        <ul className="game__cupboard-container">
          <li className="game__cupboard-element">Cookies</li>
          <li className="game__cupboard-element">Eggs</li>
          <li className="game__cupboard-element">Frogs</li>
        </ul>
      </div>
    </div>
  );
};

export default GamePage;
