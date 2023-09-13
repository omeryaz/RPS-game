import { useEffect } from "react";
import { useGeneral } from "../../Context";
import Button from "../Button";
import ButtonPlaceholder from "./PlaceholderButton";
import PlayAgainButton from "./PlayAgainButton";
import OutcomeVideo from "./OutcomeVideo";
import { motion } from "framer-motion";

type RulesMap = {
  [playerChoice: string]: {
    [opponentChoice: string]: "you win" | "you lose" | "draw";
  };
};

const rulesMap: RulesMap = {
  rock: {
    rock: "draw",
    scissors: "you win",
    paper: "you lose",
    lizard: "you win",
    spock: "you lose",
  },
  scissors: {
    rock: "you lose",
    scissors: "draw",
    paper: "you win",
    lizard: "you win",
    spock: "you lose",
  },
  paper: {
    rock: "you win",
    scissors: "you lose",
    paper: "draw",
    lizard: "you lose",
    spock: "you win",
  },
  lizard: {
    rock: "you lose",
    scissors: "you lose",
    paper: "you win",
    lizard: "draw",
    spock: "you win",
  },
  spock: {
    rock: "you win",
    scissors: "you win",
    paper: "you lose",
    lizard: "you lose",
    spock: "draw",
  },
};

function OutcomeScreen() {
  const { playerSelection, isHouseShowing, houseSelection, score, setScore } =
    useGeneral();

  // Decide the outcome based on the mode
  let outcome: string = rulesMap[playerSelection][houseSelection];

  useEffect(() => {
    // Increase the score after a win
    if (isHouseShowing && outcome === "you win") {
      setScore(score + 1);
    }
    // Decrease the score after a lose
    if (isHouseShowing && outcome === "you lose") {
      setScore(score - 1);
    }

    // Play fail trombone after a lose
    if (isHouseShowing && outcome === "you lose") {
      new Audio("/soundEffects/FailSoundTrombone.mp3").play();
    }
  }, [isHouseShowing]);

  return (
    <div className="outcome-screen">
      {/* PLAYER SELECTION */}
      <div className="outcome-screen__box">
        <p className="outcome-screen__text">You picked</p>
        <Button
          size="big"
          type={playerSelection}
          outcome={outcome}
          // Disabled the button since they shouln't be interactable
          isBtnDisabled={true}
        />
      </div>
      {/* OUTCOME AND PLAY AGAIN BUTTON */}
      <div className="outcome-screen__box outcome-screen__box--center">
        {isHouseShowing && (
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="outcome-screen__text-result"
          >
            {outcome}
          </motion.p>
        )}
        {isHouseShowing && <PlayAgainButton />}
      </div>
      {/* HOUSE SELECTION */}
      <div className="outcome-screen__box outcome-screen__box--right">
        <p className="outcome-screen__text">The house picked</p>
        {/* Show the ButtonPlaceholder before the House reveals it's pick */}
        {isHouseShowing ? (
          <Button
            size="big"
            type={houseSelection}
            // Pass the outcome in a reversed way for the house button to play winning animation
            outcome={outcome === "you lose" ? "you win" : ""}
            // Disabled the button since they shouln't be interactable
            isBtnDisabled={true}
          />
        ) : (
          <ButtonPlaceholder />
        )}
      </div>
      {/* Video of the screaming asian man */}
      <OutcomeVideo outcome={outcome} />
    </div>
  );
}

export default OutcomeScreen;
