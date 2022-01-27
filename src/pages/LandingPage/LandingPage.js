import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page__title">Frontend Test Game</h1>
      <NavLink to="/game">
        <button className="landing-page__button">Lets Play</button>
      </NavLink>
    </div>
  );
};

export default LandingPage;
