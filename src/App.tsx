import "./App.scss";
import Header from "./components/Header";
import Modal from "./components/RulesBtn&Modal/RulesModal";
import RulesButton from "./components/RulesBtn&Modal/RulesButton";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import BonusModeSwitch from "./components/BonusModeSwitch/BonusModeSwitch";
import { useGeneral } from "./Context";

function App() {
  const { isModalOpen } = useGeneral();
  return (
    <>
      <div className="App">
        <Header />
        <ButtonContainer />
        <RulesButton />
        {/* Render the modal conditionally so that the useEffect is not mounted immediately */}
        {isModalOpen && <Modal />}
        <BonusModeSwitch />
      </div>
    </>
  );
}

export default App;
