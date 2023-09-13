import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

type ContextType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  playerSelection: string;
  setPlayerSelection: Dispatch<SetStateAction<string>>;
  houseSelection: string;
  setHouseSelection: Dispatch<SetStateAction<string>>;
  isHouseShowing: boolean;
  setIsHouseShowing: Dispatch<SetStateAction<boolean>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  isBonusMode: boolean;
  setIsBonusMode: Dispatch<SetStateAction<boolean>>;
};

const defaultContext: ContextType = {
  isModalOpen: false,
  setIsModalOpen: () => {},
  playerSelection: "",
  setPlayerSelection: () => {},
  houseSelection: "",
  setHouseSelection: () => {},
  isHouseShowing: false,
  setIsHouseShowing: () => {},
  score: 0,
  setScore: () => {},
  isBonusMode: false,
  setIsBonusMode: () => {},
};

export const GeneralContext = createContext<ContextType | null>(defaultContext);

type GeneralContextProviderProps = {
  children: React.ReactNode;
};

export const GeneralContextProvider = ({
  children,
}: GeneralContextProviderProps) => {
  // Boolean for the modal being open or not
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Player's pick
  const [playerSelection, setPlayerSelection] = useState("");
  // Computer's pick
  const [houseSelection, setHouseSelection] = useState("");
  // Boolean for the computers choice is being shown or not
  const [isHouseShowing, setIsHouseShowing] = useState(false);
  // Player's score
  const [score, setScore] = useState(0);
  const [isBonusMode, setIsBonusMode] = useState(false);

  // Computer's selection arrays depending on the mode
  const optionsArr = ["rock", "paper", "scissors"];
  const bonusOptionsArr = ["rock", "paper", "scissors", "lizard", "spock"];
  const selectionArr = isBonusMode ? bonusOptionsArr : optionsArr;

  // Randomly selecting an option for the computer every time Player's selection changes
  useEffect(() => {
    setHouseSelection(
      selectionArr[Math.floor(Math.random() * selectionArr.length)]
    );
  }, [playerSelection]);

  return (
    <GeneralContext.Provider
      value={{
        isHouseShowing,
        setIsHouseShowing,
        houseSelection,
        setHouseSelection,
        playerSelection,
        setPlayerSelection,
        isModalOpen,
        setIsModalOpen,
        score,
        setScore,
        isBonusMode,
        setIsBonusMode,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneral = () => useContext(GeneralContext) as ContextType;
