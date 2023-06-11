import { useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { set } from "lodash";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user) => {
    addUser(user);
    setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    removeUser();
    setItem("user", null);
  };

  return { user, login, logout };
};