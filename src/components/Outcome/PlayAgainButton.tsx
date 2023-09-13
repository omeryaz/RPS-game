import { useGeneral } from "../../Context";
import { motion } from "framer-motion";

function PlayAgainButton() {
  const { setPlayerSelection, setIsHouseShowing } = useGeneral();

  // Reset the game
  const handleClick = () => {
    setPlayerSelection("");
    setIsHouseShowing(false);
  };

  // Sound effect is seperated into onMouseDown for a better timing and feel of the button
  const handleMouseDown = () => {
    new Audio("/soundEffects/buttonPlayAgain.mp3").play();
  };
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      className="outcome-screen__play-btn"
    >
      Play again
    </motion.button>
  );
}

export default PlayAgainButton;
