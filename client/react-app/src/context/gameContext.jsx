import { createContext, useReducer } from "react";

export const GameContext = createContext();

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME":
      return { games: action.payload };
    case "SET_SINGLE_GAME":
      return { games: state.games.filter((g) => g._id === action.payload._id) };
    case "CREATE_GAME":
      return { games: [action.payload, ...state.games] };
    case "DELETE_GAME":
      return { games: state.games.filter((g) => g._id !== action.payload._id) };
    default:
      return state;
  }
};

export const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    games: [],
  });
  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
