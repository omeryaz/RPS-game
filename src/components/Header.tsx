import { useGeneral } from "../Context";

function Header() {
  const { score } = useGeneral();
  return (
    <div className="header--wrapper">
      <div className="header">
        <div className="header__logo">
          <img src="images/logo.svg" style={{ width: "8rem" }} alt="logo" />
        </div>
        <div className="header__score-box">
          <p className="header__score-box__text">SCORE</p>
          <p className="header__score-box__number">{score}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
