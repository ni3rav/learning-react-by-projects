import {React, createContext, useContext} from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
})

export const ThemeContextProvider = ThemeContext.Provider;

export const changeTheme = () => {
    return useContext(ThemeContext);
}