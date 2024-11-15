import { React, useState } from "react"
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import logo from "../assets/images/Joseph.svg"
import lightBulb from "../assets/images/lightBulb.png"
import paperPlane from "../assets/images/paperplane.png"
// import Services from "../components/services/Services"
import Works from "../components/works/Works";
import Others from "../components/others/Others";
import { AnimateButtonPrimary } from "../components/AnimateButton";
import { AnimateButtonPoint } from "../components/AnimateButton";
import { VerticalLine } from "../components/works/VerticalLine";
// import GrowingCircleAnimation from "./GrowingCircleAnimation";
// import ThemeButton from "./ThemeButton";
// import FlippableCard from "./flipable-card";
// import { ThemeSwitcher} from "./ThemeSwitcher";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, blueTheme } from "../data/themes";
import Footer from "../components/Footer";
import GlobalStyles from '../components/Globalstyles';
import { useContext } from "react";
import { Theme } from "../context/ThemeContext";
import resume from "../assets/Joseph-Abimbola-Akinwole-5.pdf"
import Sidebar from "../components/Sidebar";
import { RiPaletteFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import Contact from "../components/contact/Contact";



export default function Home(props) {

  const [hamburgerToggle, setHamburgerToggle] = useState(false)

  const { ref: introRef1, inView: introOneVisibility } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
    delay: "500"
  });
  

  const { ref: introRef2, inView: introTwoVisibility } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
    delay: "500"
  });

  const { ref: navRef, inView: navVisibility } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px -600px 0px",
    delay: "0"
  });

  let currentTheme = sessionStorage.getItem("theme") || "dark";


  // const darkMode = useContext(Theme)

  // console.log('darkMode', darkMode)
  // const themeMode = useContext(Theme)
  // const [theme, setTheme] = useState(themeMode)
  const [theme, setTheme] = useState(currentTheme)


  const onPrintButtonClick = () => {


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
    <ThemeProvider theme={theme == "light" ? lightTheme : theme == "dark" ? darkTheme : blueTheme}>
      <>
        <GlobalStyles />
        <Sidebar />
        <div className="header">

          {/* <ThemeSwitcher/> */}
          {/* <GrowingCircleAnimation isDark={darkMode}/> */}
          {/* {console.log('darkMode', darkMode)} */}

          <div className="photo-header">

            <div className={`navbar ${navVisibility ? "nav-sticky" : ""}`}>

              <IconContext.Provider value={{ color: themeIndicateColor, size: "70" }}>

                <div className={`theme-one flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#E6E6E6] absolute top-[100px] left-[380px] cursor-pointer z-[1000] ${theme === "light" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`}
                  onClick={() => {
                    setTheme("light") || sessionStorage.setItem("theme", "light")
                    console.log(theme)
                  }}
                >{theme == "light" ? <div className="theme-indicate-contain">
                  <RiPaletteFill />
                </div> : ""}

                </div>

                <div className={`theme-two flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#1B3577] absolute top-[310px] left-[310px] cursor-pointer z-[1000] ${theme === "blue" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`}
                  onClick={() => {
                    setTheme("blue") || sessionStorage.setItem("theme", "blue")
                    console.log(theme)
                  }}
                >{theme == "blue" ? <div className="theme-indicate-contain">
                  <RiPaletteFill />
                </div> : ""}
                </div>


                <div className={`theme-three flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#333333] absolute top-[400px] left-[120px] cursor-pointer z-[1000] ${theme === "dark" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`}
                  onClick={() => {
                    setTheme("dark") || sessionStorage.setItem("theme", "dark")
                    console.log(theme)
                  }}
                >{theme == "dark" ? <div className="theme-indicate-contain">
                  <RiPaletteFill />
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
              <h2 className="text-center leading-[150px] lsm:eading-[120px]">Frontend Engineer
                <br></br><span className="text-[70px]">(With design experience)</span>
              </h2>
              <h3>I code simple designs and make them work beautifully.</h3>

              <div className="pt-[150px] pb-[100px] h-[500px] flex justify-center">
                <AnimateButtonPrimary />
              </div>

            </div>

          </div>

        </div>


        <div ref={navRef} className="contain w-full">
          <div id='intro' className="intro flex flex-col items-center">
            <div className="flex justify-center items-center w-full flex-[2]">
              <h1 className="about-text text-9xl pt-96 font-extrabold">About Me</h1>
            </div>

            {/* <VerticalLine/> */}
            <div ref={introRef1} className={`intro-one fade-in mt-[400px] flex-[8] ${introOneVisibility ? "appear" : ""}`}>
              <h2 className="text-left text-[85px] leading-[120px] pr-0 md:pr-[700px]">As a frontend developer based in Nigeria, I bring passion and creativity to every project I work on. With years of experience, I have honed my skills and gained a unique perspective on web design. My goal is to continuously push boundaries and create innovative designs.</h2>
              <img src={lightBulb} className="" alt="" width="1300"></img>
            </div>
            <div ref={introRef2} className={`intro-two fade-in mt-[400px] flex-[8] ${introTwoVisibility ? "appear" : ""}`}>
              <h2 className="text-right text-[85px] leading-[120px] pl-0 md:pl-[700px]">I strive to elevate the visual appeal and functionality of my designs. My philosophy is centered around the belief that every aspect of a website or application can be beautiful, intuitive, and user-friendly. Whether it's through vector graphics or reponsive 3D simplicity, my goal is to create a seamless and enjoyable experience for users.</h2>
              <img src={paperPlane} className="" alt="" width="1300"></img>
            </div>
            {/* <VerticalLine/> */}
          </div>

          {/* <Services></Services> */}
          <Works theme={theme}></Works>
          <Others></Others>

          <AnimateButtonPoint />


          <VerticalLine />

          <div id='end' className="end w-full h-auto text-center">
            <VerticalLine />
            <AnimateButtonPoint />

            <Contact />

            <AnimateButtonPoint />
            <VerticalLine />
            <div className="flex w-100 justify-center">
              {/* <FlippableCard/> */}
            </div>

          </div>

        </div>

        <Footer />
      </>
    </ThemeProvider>
  );
}
