// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isAdmin, setIsAdmin] = useState(user ? user.admin : false);
  const login = (userData, rememberMe) => {
    setUser(userData);
    setIsAdmin(userData.admin);
    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
