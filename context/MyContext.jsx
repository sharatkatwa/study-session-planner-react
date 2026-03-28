import { createContext,useState } from "react";


export const MyContext = createContext();

export const ContextProvider = ({children}) =>{
    const [test, setTest] = useState('gijibizi')
    return(
        <MyContext.Provider value={{test, setTest}}>
            {children}
        </MyContext.Provider>
    )
}

