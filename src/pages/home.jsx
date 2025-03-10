import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, blueTheme } from "../data/themes";
import Footer from "../components/Footer";
import GlobalStyles from '../components/Globalstyles';
import Sidebar from "../components/Sidebar";
import Works from "../components/works/Works";
import Others from "../components/others/Others";
import { AnimateButtonPrimary, AnimateButtonPoint } from "../components/AnimateButton";
import { VerticalLine } from "../components/works/VerticalLine";
import Contact from "../components/contact/Contact";
import Navbar from "../components/Navbar";
import lightBulb from "../assets/images/lightBulb.png"
import paperPlane from "../assets/images/paperplane.png"

const Home = (props) => {
  const { ref: introRef1, inView: introOneVisibility } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
    delay: "500"
  });

  const { ref: introRef2, inView: introTwoVisibility } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
    delay: "500"
  });

  const { ref: navRef, inView: navVisibility } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -600px 0px",
    delay: "0"
  });

  let currentTheme = sessionStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(currentTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : theme === "dark" ? darkTheme : blueTheme}>
      <>
        <GlobalStyles />
        <Sidebar />
        <div className="header">
          <div className="photo-header">
            <Navbar theme={theme} setTheme={setTheme} navVisibility={navVisibility} />
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

            <div ref={introRef1} className={`intro-one fade-in mt-[400px] flex-[8] ${introOneVisibility ? "appear" : ""}`}>
              <h2 className="text-left text-[85px] leading-[120px] pr-0 md:pr-[700px]">As a frontend developer based in Nigeria, I bring passion and creativity to every project I work on. With years of experience, I have honed my skills and gained a unique perspective on web design. My goal is to continuously push boundaries and create innovative designs.</h2>
              <img src={lightBulb} alt="Light Bulb" width="1300"></img>
            </div>
            <div ref={introRef2} className={`intro-two fade-in mt-[400px] flex-[8] ${introTwoVisibility ? "appear" : ""}`}>
              <h2 className="text-right text-[85px] leading-[120px] pl-0 md:pl-[700px]">I strive to elevate the visual appeal and functionality of my designs. My philosophy is centered around the belief that every aspect of a website or application can be beautiful, intuitive, and user-friendly. Whether it's through vector graphics or responsive 3D simplicity, my goal is to create a seamless and enjoyable experience for users.</h2>
              <img src={paperPlane} alt="Paper Plane" width="1300"></img>
            </div>
          </div>

          <Works theme={theme} />
          <Others />
          <AnimateButtonPoint />
          <VerticalLine />

          <div id='end' className="end w-full h-auto text-center">
            <VerticalLine />
            <AnimateButtonPoint />
            <Contact />
            <AnimateButtonPoint />
            <VerticalLine />
          </div>
        </div>

        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Home;
