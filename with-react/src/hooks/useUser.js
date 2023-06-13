import { AuthContext } from "context/AuthContext";
import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  return { user, addUser, removeUser };
};
