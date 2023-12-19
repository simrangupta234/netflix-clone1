import { useState,useContext ,createContext } from "react";


const movieDetailContext = createContext()

export const MovieDetailProvider = ({chlidren}) => {
const [id, setId] = useState("");

const setIdValue =(value)=>{
id, setId(value)
}

    return(
        <movieDetailContext.Provider value={{setIdValue,id , setId }}>
           {chlidren} 
        </movieDetailContext.Provider>
    )
}

export const useMovieDetail  =()=>{
    const context = useContext(movieDetailContext);
    if (!context) {
        throw new Error("useMovieDetail must be used within an movieDetailProvider");
      }
      return context;
}