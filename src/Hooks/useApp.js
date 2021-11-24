import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

function AppProvider({children}) {

    const [state, setState] = useState({
        estado: "12",
        ano: "2010"
    });

    function handleState ({ target }) {
        setState((old) => ({...old, [target.name]: target.value}))
    }

    const provider = {
        state, handleState
    }

    return ( 
        <AppContext.Provider value={provider}>
            {children}
        </AppContext.Provider>
     );
}

export const useApp = () => useContext(AppContext);

export default AppProvider;