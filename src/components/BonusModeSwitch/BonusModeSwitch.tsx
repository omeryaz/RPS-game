import { useGeneral } from "../../Context";
import "./BonusModeSwitch.scss";

function BonusModeSwitch() {
  const { isBonusMode, setIsBonusMode } = useGeneral();

  const handleToggle = () => {
    setIsBonusMode(!isBonusMode);
  };
  return (
    <div className="switch--wrapper">
      <label className="switch">
        <span className="switch__text">BONUS MODE</span>
        <input type="checkbox" onChange={handleToggle} />
        <span className="switch__slider" />
      </label>
    </div>
  );
}

export default BonusModeSwitch;
