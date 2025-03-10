// import React, {useContext} from "react";
// import {ThemeContext} from "./ThemeContext";


// const onClickWrapper = (onClickMethod, isDark, event) => {
//     // onClickMethod(isDark)
//     sessionStorage.setItem("theme", isDark)

//     const bodyRect = document.body.getBoundingClientRect();
//     const elemRect = event.target.getBoundingClientRect();
//     const offsetLeft = elemRect.left - bodyRect.left;

//     console.log('offsetLeft', offsetLeft)

    
//     const customEventState = { // custom object to wrap event data
//       x: offsetLeft + elemRect.width / 2, // center coordinates of the dark mode toggle on the x-axis
//       y: elemRect.top + elemRect.height / 2, // center coordinates of the dark mode toggle on the y-axis
//     };

//     const darkModeToggleEvent = new CustomEvent("darkModeToggle", {detail: customEventState})
//     dispatchEvent(darkModeToggleEvent)
// }



// const ThemeButton = ({isDark, onClickMethod}) => {
//     const {darkMode, setDarkMode} = useContext(ThemeContext);



//     return (
//         <button className="rounded-full bg-white h-40 w-40 text-8xl" 
//         onClick = {(event)=> {onClickWrapper(onClickMethod, !isDark, event)
//             setDarkMode(!darkMode)
//         }}>
//             {darkMode ? "☀️" :"🌙" }
//         </button>
//     );
// }

// export default ThemeButton