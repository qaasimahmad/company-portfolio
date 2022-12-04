import { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isEmailSubmit, setIsEmailSubmit] = useState(false);
  const [isMsgSubmit, setIsMsgSubmit] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isEmailSubmit,
        setIsEmailSubmit,
        isMsgSubmit,
        setIsMsgSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
