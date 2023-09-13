import { useGeneral } from "../../Context";
import "./Rules.scss";

function RulesButton() {
  const { setIsModalOpen } = useGeneral();
  return (
    <button
      onClick={() => {
        setIsModalOpen(true);
      }}
      className="rules-btn"
    >
      RULES
    </button>
  );
}

export default RulesButton;
