import { AuthContext } from "context/AuthContext";
import { useAuth } from "hooks/useAuth";
import { useState } from "react";

export const LoginProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
