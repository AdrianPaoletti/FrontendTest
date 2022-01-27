import useGame from "../../hook/useGame";
const Button = ({ cupBoard, setCupBoard, positionCounter, positionArray }) => {
  const { cupBoardState, substractForg, substractEgg, substractCookie } =
    useGame();

  const onClick = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log("randomNumber", randomNumber);
    switch (randomNumber) {
      case 1:
        substractCookie(cupBoard);
        break;
      case 2:
        substractEgg(cupBoard);
        break;
      case 3:
        substractForg(cupBoard);
        break;
      case 4:
        positionCounter++;
        for (let value in positionArray) {
          if (+value === positionCounter) {
            positionArray[value] = 1;
          } else {
            positionArray[value] = 0;
          }
        }
        console.log(positionArray);
        break;
      default:
        setCupBoard(cupBoardState);
    }
    console.log(positionArray);
  };
  return <button onClick={() => onClick()}>Dado</button>;
};

export default Button;
