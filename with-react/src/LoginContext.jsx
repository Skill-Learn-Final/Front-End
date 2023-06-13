import { AuthContext } from "context/AuthContext";
import { useAuth } from "hooks/useAuth";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useEffect, useState } from "react";

export const LoginProvider = (props) => {
  const [user, setUser] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  // useEffect(() => {
  //   const user = getItem("user");
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
