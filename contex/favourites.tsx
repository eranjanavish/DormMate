import { createContext, useState, ReactNode } from "react";


interface FavBoardsContextType {
  favBoardings: string[];
  addBoarding: (id: string) => void;
  remBoarding: (id: string) => void;
}


export const favBoards = createContext<FavBoardsContextType>({
  favBoardings: [],
  addBoarding: () => {},
  remBoarding: () => {},
});

const FavouriteBoardings = ({ children }: { children: ReactNode }) => {
  const [boarding, setBoarding] = useState<string[]>([]);

  const addBoarding = (id: string) => {
    setBoarding((prev) => [...prev, id]);
  };

  const remBoarding = (id: string) => {
    setBoarding((prev) => prev.filter((previd) => previd !== id));
  };

  const values: FavBoardsContextType = {
    favBoardings: boarding,
    addBoarding,
    remBoarding,
  };

  return (
    <favBoards.Provider value={values}>
      {children}
    </favBoards.Provider>
  );
};

export default FavouriteBoardings;
