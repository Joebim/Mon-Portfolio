import { useContext } from "react";
import { ThemeContextOne } from "./ThemeContext";
import { ThemeContextTwo } from "./ThemeContext";
import { ThemeContextThree } from "./ThemeContext";




export function ThemeSwitcherOne(props) {
    // const [firstThemeMode, setFirstThemeMode] = useContext(ThemeContextOne);
   
  return (
    <div>
        <div className="theme-one h-[100px] w-[100px] rounded-full bg-white absolute top-[100px] left-[380px]" 
        // onClick = {()=> {setFirstThemeMode(!firstThemeMode)}}
        >

        </div>
    </div>
  )
}

export function ThemeSwitcherTwo(props) {
    // const [secondThemeMode, setSecondThemeMode] = useContext(ThemeContextTwo);
    

    return (
      <div>
          <div className="theme-two h-[100px] w-[100px] rounded-full bg-white absolute top-[310px] left-[310px]" 
          // onClick = {(event)=> {setSecondThemeMode(!secondThemeMode)}}
          >
  
          </div>
      </div>
    )
  }

  export function ThemeSwitcherThree(props) {
    // const [thirdThemeMode, setThirdThemeMode] = useContext(ThemeContextThree);

    return (
      <div>
        <div className="theme-three h-[100px] w-[100px] rounded-full bg-white absolute top-[400px] left-[120px]" 
        // onClick = {(event)=> {setThirdThemeMode(!thirdThemeMode)}}
        >
  
        </div>
      </div>
    )
  }
