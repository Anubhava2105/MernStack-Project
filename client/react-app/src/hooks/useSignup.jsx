import { useState } from "react";
import { UseAuthContext } from "./useAuthContext";

export const UseSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = UseAuthContext();

  const signup = async (email, password) => {
    setIsPending(true);
    setError(null);

    const response = await fetch("/api/admin/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password}),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsPending(false);
      setError(json.error);
    } else {
      //save user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update auth context
      dispatch({ type: 'LOGIN', payload: json });

      setIsPending(false);
    }
  };
  return { signup, isPending, error };
};
