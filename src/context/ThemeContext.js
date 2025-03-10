import React, {createContext, useState} from "react";

export const Theme = createContext();

export const ProviderTheme = (props) => {

    const [theme, setTheme] = useState("light");

    // console.log('props.theme', props.theme)

    return (
        <>
        <Theme.Provider value={theme}>
                {props.children}
            </Theme.Provider> 
        </>
    )
}