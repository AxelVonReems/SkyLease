import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({ name: username });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;