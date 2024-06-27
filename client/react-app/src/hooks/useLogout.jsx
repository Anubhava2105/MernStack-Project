import { UseAuthContext } from "./useAuthContext";
import { UseGamesContext } from "./useGamesContext";
export const useLogout = () => {
  const { dispatch } = UseAuthContext();
  const { dispatch: gamesDispatch } = UseGamesContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");
    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    gamesDispatch({ type: "SET_GAME", payload: [] });
  };
  return { logout };
};
