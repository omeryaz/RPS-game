import React, { ForwardedRef } from "react";
import { useGeneral } from "../Context";
import { useRef } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  type: string;
  position?: string;
  size?: string;
  outcome?: string;
  isBtnDisabled?: boolean;
};

// Forwarded a ref for a potential animation setup for framer motion
const Button = React.forwardRef(
  (
    { type, position, size, outcome, isBtnDisabled }: ButtonProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { setPlayerSelection, isHouseShowing } = useGeneral();

    //  Handling button clicks
    const btnRef = useRef<HTMLButtonElement>(null);
    const handleBtnClick = () => {
      // Disable player selection
      if (!isBtnDisabled) {
        setPlayerSelection(`${btnRef.current?.id}`);
      }
    };

    // Class name for big outcome screen buttons
    const classSize = size ? `-${size}` : "";

    // Positions of buttons
    const btnPosition = position ? position : "";

    // States and variables for the winner animation with "you-win"
    let winnerAnimationClass =
      outcome && isHouseShowing ? outcome.replace(/ /g, "-") : "";

    // Click sound for buttons
    const handleSound = () => {
      // Disable the click sound in the outcome screen
      if (isBtnDisabled) {
        return;
      }
      new Audio("/soundEffects/buttonClick.mp3").play();
    };

    return (
      <button
        ref={btnRef}
        onClick={handleBtnClick}
        onMouseDown={handleSound}
        id={type}
        className={`game-btn${classSize}--wrapper ${type} ${btnPosition} ${winnerAnimationClass}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          ref={ref}
        >
          <span className="third-circle"></span>
          <div onClick={handleBtnClick} className={`game-btn${classSize}`}>
            <img
              onClick={handleBtnClick}
              className={`game-btn${classSize}__icon`}
              src={`/images/icon-${type}.svg`}
              alt={type}
            />
          </div>
        </motion.div>
      </button>
    );
  }
);

export default Button;
