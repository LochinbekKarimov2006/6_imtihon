import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const [state, setState] = useState(true); // Using setState instead of dispatch
  console.log(state)
    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalContextProvider };
