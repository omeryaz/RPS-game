import Button from "../Button";
import { useGeneral } from "../../Context";
import OutcomeScreen from "../Outcome/OutcomeScreen";
import BackgroundSvg from "./BackgroundSvg";
import "./ButtonPositions.scss";
import { useRef } from "react";

type ButtonInfo = {
  type: string;
  position: string;
};

// Normal mode positions
const btnMap: Array<ButtonInfo> = [
  { type: "rock", position: "bottom-center" },
  { type: "paper", position: "left" },
  { type: "scissors", position: "right" },
];

// Bonus mode positions
const btnMapBonus: Array<ButtonInfo> = [
  { type: "rock", position: "center" },
  { type: "paper", position: "top-right" },
  { type: "scissors", position: "top-left" },
  { type: "lizard", position: "bottom-right" },
  { type: "spock", position: "bottom-left" },
];

function ButtonContainer() {
  const childButtonRef = useRef<HTMLDivElement>(null);

  const { playerSelection, isBonusMode } = useGeneral();

  return (
    <section className="game-btn-container--wrapper">
      {/* If the Player selection is made, show the outcome screen */}
      {playerSelection ? (
        <OutcomeScreen />
      ) : (
        // Initial screen
        <div className="game-btn-container">
          {/* Render an initial different depending on the mode */}
          {isBonusMode
            ? btnMapBonus.map((btn: ButtonInfo) => (
                <Button
                  // Different key names to trigger a re-render, thus trigger animations again, for a better look
                  key={`${btn.type}` + "bonus"}
                  type={btn.type}
                  position={btn.position}
                  size="bonus"
                  ref={childButtonRef}
                />
              ))
            : btnMap.map((btn: ButtonInfo) => (
                <Button
                  key={btn.type}
                  type={btn.type}
                  position={btn.position}
                />
              ))}
          {/* Background shape */}
          <BackgroundSvg />
        </div>
      )}
    </section>
  );
}

export default ButtonContainer;
