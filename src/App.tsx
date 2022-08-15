import React, { FC, createContext } from "react";
import "./App.css";
import Person, { HairColor } from "./components/Person";

type AppContextInterface = {
  name: string;
  age: number;
  country: string;
};

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Mian",
    age: 20,
    country: "paki",
  };

  const name: string = "Ali";
  const age: number = 22;
  const isMarried: boolean = false;

  // const getName = (name: string): number => {
  //   if (name === "Ali") {
  //     return 20;
  //   } else {
  //     return 0;
  //   }
  // };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name={name}
          age={age}
          isMarried={isMarried}
          hairColor={HairColor.Brown}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
