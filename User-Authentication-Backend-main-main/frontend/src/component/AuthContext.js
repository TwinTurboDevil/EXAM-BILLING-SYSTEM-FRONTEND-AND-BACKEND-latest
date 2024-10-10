import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  setAuthState: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    isLoggedIn: false,
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
