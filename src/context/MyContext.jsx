import { createContext,useState } from "react";


export const MyContext = createContext();

export const ContextProvider = ({children}) =>{
    const [test, setTest] = useState('gijibizi')
    const [sessions, setSessions] = useState([])
     const handleDelete = (indexToDelete) => {
    setSessions((prev) => prev.filter((_, i) => i !== indexToDelete));
  };
    return(
        <MyContext.Provider value={{test, setTest, sessions, setSessions, handleDelete}}>
            {children}
        </MyContext.Provider>
    )
}

