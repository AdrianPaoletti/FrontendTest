const CellsList = ({ positionArray }) => {
  let id = 1;
  return (
    <ul className="game__list">
      {positionArray.map((value) => (
        <li
          className={value !== 1 ? "game__cell" : "game__cell game__cell--yoda"}
          key={id++}
        >
          {" "}
        </li>
      ))}
    </ul>
  );
};

export default CellsList;
