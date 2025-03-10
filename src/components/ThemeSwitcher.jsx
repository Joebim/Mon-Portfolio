import { useState, useEffect } from "react"
import { useContext } from "react"
import { Theme } from "./ThemeContext"

export function ThemeSwitcher(props) {

  const darkMode = useContext(Theme)

console.log('darkMode', darkMode)

const [theme, setTheme] = useState(darkMode)

useEffect(() => {
  sessionStorage.setItem("theme", theme)
}, [theme])




  return (
    <>
      <div className="theme-one h-[100px] w-[100px] rounded-full bg-white absolute top-[100px] left-[380px] cursor-pointer z-[1000]" 
        onClick = {()=> {
          setTheme("light")
        console.log(theme)
        }}
        >

      </div>

    
        <div className="theme-two h-[100px] w-[100px] rounded-full bg-[#0B143A] absolute top-[310px] left-[310px] cursor-pointer z-[1000]" 
          onClick = {() => {
            setTheme("blue")
          console.log(theme)
        }}
          >
  
      </div>
    

      <div className="theme-three h-[100px] w-[100px] rounded-full bg-[#333333] absolute top-[400px] left-[120px] cursor-pointer z-[1000]" 
        onClick = {()=> {
          setTheme("dark")
        console.log(theme)
        }}
        >
  
      </div>
    </>
  )
}
   
    
  