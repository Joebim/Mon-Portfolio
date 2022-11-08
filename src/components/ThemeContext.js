import React, {createContext, useState} from "react";

export const ThemeContextOne = createContext();
export const ThemeContextTwo = createContext();
export const ThemeContextThree = createContext();


export const ThemeProvider = (props) => {

    // const [darkMode, setDarkMode] = useState(false);

    const [theme, setTheme] = useState("first");

    const [firstThemeMode, setFirstThemeMode] = useState(false);
    const [secondThemeMode, setSecondThemeMode] = useState(false);
    const [thirdThemeMode, setThirdThemeMode] = useState(false);
    

    

    return (
        <>
        {theme == "first" ? <ThemeContextOne.Provider value={{firstThemeMode, setFirstThemeMode}}>
                {props.children}
            </ThemeContextOne.Provider> : 
            theme == "second" ? <ThemeContextTwo.Provider value={{secondThemeMode, setSecondThemeMode}}>
                {props.children}
            </ThemeContextTwo.Provider> : 
            theme == "third" ? <ThemeContextThree.Provider value={{thirdThemeMode, setThirdThemeMode}}> 
            {props.children}
            </ThemeContextThree.Provider>: 
            ""}
        </>
    )
}