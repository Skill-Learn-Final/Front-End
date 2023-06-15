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
  // const addField = (field) => {
  //   setUser({ ...user, ...field });
  // };
  return { user, addUser, removeUser };
};
