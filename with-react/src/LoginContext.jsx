import { useState, createContext, useEffect } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [LoginStatus, setLoginStatus] = useState(Boolean);

  useEffect(() => {}, [LoginStatus]);

  return (
    <LoginContext.Provider value={[LoginStatus, setLoginStatus]}>
      {props.children}
    </LoginContext.Provider>
  );
};
