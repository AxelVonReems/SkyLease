/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

// 1. Crear el Contexto
const UserContext = createContext();

// 2. Hook para usarlo (validando que exista)
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// 3. El Provider (Exportación NOMBRADA: 'export const')
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      return (storedUser && token) ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error al leer localStorage:", error);
      localStorage.clear();
      return null;
    }
  });

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};