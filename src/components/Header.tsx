import logo from "../../public/images/logo.svg";

function Header() {
  return (
    <div className="header--wrapper">
      <div className="header">
        <div className="header__logo">
          <img src={logo} style={{ width: "8rem" }} alt="logo" />
        </div>
        <div className="header__score-box">
          <p className="header__score-box__text">SCORE</p>
          <p className="header__score-box__number">12</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
