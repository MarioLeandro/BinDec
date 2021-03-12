import { createContext, ReactNode, useState } from "react";

interface ThemeContextData {
    theme: string;
    changeTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider ({children} : ThemeProviderProps) {
    const[theme, setTheme] = useState("dark");

    function changeTheme () {
        if(theme === "dark"){
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
    

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}