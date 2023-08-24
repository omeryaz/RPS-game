import rockIcon from "./../../public/images/icon-rock.svg";
import scissorsIcon from "./../../public/images/icon-scissors.svg";
import paperIcon from "./../../public/images/icon-paper.svg";
import lizardIcon from "./../../public/images/icon-lizard.svg";
import spockIcon from "./../../public/images/icon-spock.svg";

interface ButtonProps {
  type: string;
}

const Button: React.FC<ButtonProps> = ({ type }) => {
  let iconSrc;

  if (type === "rock") {
    iconSrc = rockIcon;
  } else if (type === "scissors") {
    iconSrc = scissorsIcon;
  } else if (type === "paper") {
    iconSrc = paperIcon;
  } else if (type === "lizard") {
    iconSrc = lizardIcon;
  } else {
    iconSrc = spockIcon;
  }

  return (
    <div className={`game-btn--wrapper ${type}`}>
      <div className="game-btn">
        <img className="game-btn__icon" src={iconSrc} alt={type} />
      </div>
    </div>
  );
};

export default Button;
