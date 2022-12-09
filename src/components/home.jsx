import { React, useState, useEffect} from "react"
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import hamburger from "../assets/images/gg_menu-left.png"
import logo from "../assets/images/Joseph.svg"
import lightBulb from "../assets/images/lightBulb.png"
import rocket from "../assets/images/rocket.png"
import Services from "./services"
import Works from "./works";
import Others from "./Others";
import { AnimateButtonPrimary } from "./AnimateButton";
import { AnimateButtonPoint } from "./AnimateButton";
import { VerticalLine } from "./VerticalLine";
// import GrowingCircleAnimation from "./GrowingCircleAnimation";
// import ThemeButton from "./ThemeButton";
// import FlippableCard from "./flipable-card";
// import { ThemeSwitcher} from "./ThemeSwitcher";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, blueTheme } from "./themes";
import Footer from "./Footer";
import GlobalStyles from './Globalstyles';
import { useContext } from "react";
import { Theme } from "./ThemeContext";
import resume from "../assets/Joseph-Abimbola-Akinwole.pdf"
import Sidebar from "./Sidebar";
import { RiPaletteFill } from "react-icons/ri";
import { IconContext } from "react-icons";



export default function Home(props) {

const [hamburgerToggle, setHamburgerToggle] = useState(false)

const { ref: introRef1, inView: introOneVisibility} = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
    delay: "500"
  });

  const { ref: introRef2 , inView: introTwoVisibility} = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
    delay: "500"
  });

  const { ref: navRef , inView: navVisibility} = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px -600px 0px",
    delay: "0"
  });

  let currentTheme = sessionStorage.getItem("theme") || "light";


// const darkMode = useContext(Theme)

// console.log('darkMode', darkMode)
// const themeMode = useContext(Theme)
// const [theme, setTheme] = useState(themeMode)
const [theme, setTheme] = useState(currentTheme)


const onPrintButtonClick = ()=> {

  
  fetch(resume).then(res => {
    res.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob)

      let aLink = document.createElement('a')
      aLink.href = fileURL
      aLink.download = "Joseph-Akinwole-Abimbola.pdf"
      aLink.click()
    })
  })
}

const themeIndicateColor = theme == "light" ? "#189e5b" : "#ffffff"


  return (
    <ThemeProvider theme = {theme == "light" ? lightTheme : theme == "dark" ? darkTheme : blueTheme}>
    <>
    <GlobalStyles/>
    <Sidebar/>
    <div className="header">

        {/* <ThemeSwitcher/> */}
        {/* <GrowingCircleAnimation isDark={darkMode}/> */}
        {/* {console.log('darkMode', darkMode)} */}

    <div className="photo-header">
            
    <div className={`navbar ${navVisibility ? "nav-sticky" : ""}`}>

      <IconContext.Provider value={{ color: themeIndicateColor, size:"70"}}>   

        <div className={`theme-one flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#E6E6E6] absolute top-[100px] left-[380px] cursor-pointer z-[1000] ${theme === "light" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`}
          onClick = {()=> {
            setTheme("light") || sessionStorage.setItem("theme", "light")
          console.log(theme)
          }}
          >{theme == "light" ? <div className="theme-indicate-contain">
            <RiPaletteFill/>
          </div> : ""}
            
        </div>
        
        <div className={`theme-two flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#1B3577] absolute top-[310px] left-[310px] cursor-pointer z-[1000] ${theme === "blue" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`} 
            onClick = {() => {
              setTheme("blue") || sessionStorage.setItem("theme", "blue")
            console.log(theme)
          }}
            >{theme == "blue" ? <div className="theme-indicate-contain">
            <RiPaletteFill/>
          </div> : ""}
        </div>
      

        <div className={`theme-three flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#333333] absolute top-[400px] left-[120px] cursor-pointer z-[1000] ${theme === "dark" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`} 
          onClick = {()=> {
            setTheme("dark") || sessionStorage.setItem("theme", "dark")
          console.log(theme)
          }}
          >{theme == "dark" ? <div className="theme-indicate-contain">
          <RiPaletteFill/>
        </div> : ""}
        </div>
      </IconContext.Provider>

      <nav className="nav-wrapper h-[250px] flex flex-row justify-between items-center">
          <div className="logo-contain pl-[100px]">
              <Link to="/"><img src={logo} alt="" height="100"></img></Link>
          </div>

          <div 
          className="print-resume-btn w-[400px] h-[120px] bg-transparent rounded-[20px] border-solid border-[10px] p-2 text-[60px] cursor-pointer"
          onClick={onPrintButtonClick}
          >Resume
          </div>

          <div className="w-[210px]"></div>
      </nav>
    </div>

            
            {/* <ThemeButton/> */}

            <div className="profile">

            
                <h4>I'm Joseph</h4>
                <h2>Designer & Frontend Developer</h2>
                <h3>I code simple designs and make them work beautifully.</h3>

                <div className="pt-[150px] pb-[100px] h-[500px] flex justify-center">
                <AnimateButtonPrimary/>
                </div>
                

                    {/* <div className="profile-pic">
                        <img src="images/josey.png" alt="" height="1000">
                    </div> */}

            </div>
            
        </div>

    </div>


    <div ref={navRef} className="contain w-full">
        <div id='intro' className="intro">
            {/* <div className="flex-auto justify-center items-center h-60 w-full"> */}
             <h1 className="about-text text-9xl pt-96 font-bold">About Me</h1>
            {/* </div> */}
            
           {/* <VerticalLine/> */}
            <div ref={introRef1} className={`intro-one fade-in ${introOneVisibility ? "appear" : ""}`}>
                <h2 className="text-left text-[75px] leading-[120px]">I'm a frontend developer and i'm based in Nigeria. I love to explore and create new things with passion for designs. Since the beginning of my journey, three years ago, I have worked on different projects and identified awesome web designs in different perspectives and views. </h2>
                <img src={lightBulb} alt=""></img>
            </div>
            <div ref={introRef2} className={`intro-two fade-in ${introTwoVisibility ? "appear" : ""}`}>
                <h2 className="text-right text-[75px] leading-[120px]">I believe in the upmost beauty of things and how better they can be, from vector graphics to web, with respect to user interface and user experience.</h2>
                <img src={rocket} alt=""></img>
            </div>
           {/* <VerticalLine/> */}
        </div>

        <Services></Services>
        <Works theme={theme}></Works>
        <Others></Others>

        <AnimateButtonPoint/>


        <VerticalLine/>

        <div id='end' className="end w-full h-auto text-center">
        <VerticalLine/>
        <AnimateButtonPoint/>

        <div className="w-full flex justify-center align-center py-36">
            <div className="connect-card text-center w-[40%] h-auto rounded-[100px] ease duration-700 p-52">
            <h2 className="text-[80px] pb-24 font-['overlock'] font-bold">Want to work on something?</h2>
            <p className="text-7xl pb-60 font-bold text-center">Throw me your ideas and let me see how i can be of assistance.</p>
            <button className="connect-button h-[200px] w-[600px] rounded-[100px] mb-[100px] border-solid border-[10px] ease duration-500 text-white">
                <a href="mailto:josey359@gmail.com" className="text-7xl font-['Bellota'] font-bold decoration-0">let's Chat</a>
            </button>
        </div>
        </div>

        <AnimateButtonPoint/>
        <VerticalLine/>
        <div className="flex w-100 justify-center">
            {/* <FlippableCard/> */}
        </div>
        
    </div>
        
    </div>
    
    <Footer/>
</>
 </ThemeProvider>
  );
}