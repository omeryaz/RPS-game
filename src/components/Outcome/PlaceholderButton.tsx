import { useEffect } from "react";
import { useGeneral } from "../../Context";

function ButtonPlaceholder() {
  const { setIsHouseShowing, playerSelection } = useGeneral();

  // Placeholder button holds for 2 seconds then reveals the House pick by setIsHouseShowing
  useEffect(() => {
    const timer = setTimeout(() => setIsHouseShowing(true), 2000);
    return () => clearTimeout(timer);
  }, [playerSelection]);

  return <div className="game-btn placeholder"></div>;
}

export default ButtonPlaceholder;
