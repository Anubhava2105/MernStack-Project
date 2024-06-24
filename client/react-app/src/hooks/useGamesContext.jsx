import { GameContext } from "../context/gameContext";
import { useContext } from "react";

export const UseGamesContext=()=>{
    const context=useContext(GameContext);
    
    if(!context){
        throw new Error("useGameContext must be used within a GameContextProvider");
    }

    return context;
}