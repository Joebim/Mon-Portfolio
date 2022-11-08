import { useState} from "react"
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import hamburger from "../assets/images/gg_menu-left.png"
import logo from "../assets/images/Joseph.svg"
import Illustration1 from "../assets/images/Illustration1.svg"
import Illustration2 from "../assets/images/Illustration2.svg"
import facebook from "../assets/images/facebook.png"
import linkedIn from "../assets/images/linkedin.png"
import dribble from "../assets/images/dribbble.png"
import instagram from "../assets/images/instagram.png"
// import tumblr from "../assets/images/tumblr.png"
import github from "../assets/images/github-dark.jpg"
import Services from "./services"
import Works from "./works";
import Others from "./Others";
import { AnimateButtonPrimary } from "./AnimateButton";
import { AnimateButtonPoint } from "./AnimateButton";
import { VerticalLine } from "./VerticalLine";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import GrowingCircleAnimation from "./GrowingCircleAnimation";
import ThemeButton from "./ThemeButton";
import FlippableCard from "./flipable-card";
import { ThemeSwitcherOne } from "./ThemeSwitcher";
import { ThemeSwitcherTwo } from "./ThemeSwitcher";
import { ThemeSwitcherThree } from "./ThemeSwitcher";

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

//   const {darkMode} = useContext(ThemeContext)
//   console.log('darkmode', darkMode)

  return (
    <>
    <div className="header">
        <ThemeSwitcherOne/>
        <ThemeSwitcherTwo/>
        <ThemeSwitcherThree/>
    {/* <GrowingCircleAnimation isDark={darkMode}/> */}
    {/* {console.log('darkMode', darkMode)} */}
        <div className="photo-header">
            
            <div  className="right-side">
                <nav className="nav-wrapper">
                    <div className="logo-contain">
                        <Link to="/"><img src={logo} alt="" height="100"></img></Link>
                    </div>
                    <div className={`nav-link-wrapper ${hamburgerToggle ? "show" : ""}`}>
                        <div className="nav-link">
                            <Link to="/">services</Link>
                        </div>
                        <div className="nav-link">
                            <Link to="/">Works</Link>
                        </div>
                        <div className="nav-link">    
                            <Link to="/">About</Link>
                        </div>
                    </div>
                    <img className="hamburger" onClick={() => {setHamburgerToggle(!hamburgerToggle)}} src={hamburger} alt=""></img>
                </nav>
            </div>

            
            {/* <ThemeButton/> */}

            <div className="profile">

            
                <h4>I'm Joseph</h4>
                <h2>Designer & Frontend Developer</h2>
                <h3>I code simple designs and make them work beautifully.</h3>

                <AnimateButtonPrimary/>

                    {/* <div className="profile-pic">
                        <img src="images/josey.png" alt="" height="1000">
                    </div> */}

            </div>
            
        </div>

    </div>

    <div className="contain w-full">
        <div id='intro' className="intro">
            {/* <div className="flex-auto justify-center items-center h-60 w-full"> */}
             <h1 className="about-text text-9xl pt-96 font-bold">About Me</h1>
            {/* </div> */}
            
           {/* <VerticalLine/> */}
            <div ref={introRef1} className={`intro-one fade-in ${introOneVisibility ? "appear" : ""}`}>
                <h2 className="text-left">I'm a frontend developer and i'm based in Nigeria. I love to explore and create new things with passion for designs. Since the beginning of my journey, three years ago, I have worked on different projects and identified awesome web designs in different perspectives and views. </h2>
                <img src={Illustration2} alt="" height="1300"></img>
            </div>
            <div ref={introRef2} className={`intro-two fade-in ${introTwoVisibility ? "appear" : ""}`}>
                <h2 className="text-right">I believe in the upmost beauty of things and how better they can be, from vector graphics to web, with respect to user interface and user experience.</h2>
                <img src={Illustration1} alt="" height="1500"></img>
            </div>
           {/* <VerticalLine/> */}
        </div>

        <Services></Services>
        <Works></Works>
        <Others></Others>

        <AnimateButtonPoint/>


        <VerticalLine/>

        
    </div>

    <div id='end' className="end">
        <VerticalLine/>
        
        <AnimateButtonPoint/>

        <div className="w-full flex justify-center align-center">
            <div className="text-center w-[40%] h-auto rounded-[100px] ease duration-700 py-60">
            <h2 className="text-9xl pb-24">Want to work on something?</h2>
            <p className="text-7xl pb-60">Throw me your ideas and let me see how i can be of assistance.</p>
            <button className="h-[200px] w-[600px] rounded-[100px] mb-[100px] border-solid border-[10px] ease duration-500 hover:">
                <a href="mailto:josey359@gmail.com" className="text-7xl">let's Chat</a>
            </button>
        </div>
        </div>

        <AnimateButtonPoint/>
        <VerticalLine/>
        <div className="flex w-100 justify-center">
            {/* <FlippableCard/> */}
        </div>
        
    </div>
           
<footer>
    
    <h1>let's connect</h1>
    <div className="social flex flex-row justify-center">
        <a href="https://facebook.com/joseph.akinwole.7/"><img src={facebook} alt="" height="130" id="facebook-logo" className="h-40"></img></a>
        <a href="https://www.linkedin.com/in/joseph-akinwole-71415a198/"><img src={linkedIn} alt="" height="130" id="linkedin-logo" className="h-40"></img></a>
        <a href="https://dribbble.com/Joebim"><img src={dribble} alt="" height="130" id="dribble-logo" className="h-40"></img></a>
        <a href="https://github.com/Joebim"><img src={github} alt="" height="130" id="github-logo" className="rounded-[120px] h-40"></img></a>
        {/* <a href=""><img src={tumblr} alt="" height="130" id="tumblr-logo"></img></a> */}
        <a href="https://www.instagram.com/josephakinwole/"><img src={instagram} alt="" height="130" id="instagram-logo" className="h-40"></img></a>
    </div>
    
    
    

    <cite>Redesigned by me @ TwentyTwentyTwo</cite>
    <script src="./main.js"></script>
</footer>
</>
  );
}