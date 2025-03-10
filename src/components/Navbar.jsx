import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { RiPaletteFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import logo from "../assets/images/Joseph.svg";
import resume from "../assets/Joseph-Akinwole.pdf"

const Navbar = ({ theme, setTheme, navVisibility }) => {
  const themeIndicateColor = theme === "light" ? "#189e5b" : "#ffffff";

  return (
    <div className={`navbar ${navVisibility ? "nav-sticky" : ""}`}>
      <IconContext.Provider value={{ color: themeIndicateColor, size: "70" }}>
        <div className={`theme-one flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#E6E6E6] absolute top-[100px] left-[380px] cursor-pointer z-[1000] ${theme === "light" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`}
          onClick={() => {
            setTheme("light");
            sessionStorage.setItem("theme", "light");
          }}
        >
          {theme === "light" && <div className="theme-indicate-contain"><RiPaletteFill /></div>}
        </div>

        <div className={`theme-two flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#1B3577] absolute top-[310px] left-[310px] cursor-pointer z-[1000] ${theme === "blue" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`}
          onClick={() => {
            setTheme("blue");
            sessionStorage.setItem("theme", "blue");
          }}
        >
          {theme === "blue" && <div className="theme-indicate-contain"><RiPaletteFill /></div>}
        </div>

        <div className={`theme-three flex justify-center items-center h-[120px] w-[120px] hover:h-[120px] hover:w-[120px] ease-linear duration-200 rounded-full bg-[#333333] absolute top-[400px] left-[120px] cursor-pointer z-[1000] ${theme === "dark" ? "theme-selected current" : ""} ${navVisibility ? "align" : ""}`}
          onClick={() => {
            setTheme("dark");
            sessionStorage.setItem("theme", "dark");
          }}
        >
          {theme === "dark" && <div className="theme-indicate-contain"><RiPaletteFill /></div>}
        </div>
      </IconContext.Provider>

      <nav className="nav-wrapper h-[250px] flex flex-row justify-between items-center">
        <div className="logo-contain pl-[100px]">
          <Link to="/"><img src={logo} alt="Logo" height="100" /></Link>
        </div>

        <div className="print-resume-btn w-[400px] h-[120px] bg-transparent rounded-[20px] border-solid border-[10px] p-2 text-[60px] cursor-pointer"
          onClick={() => {
            fetch(resume).then(res => {
              res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let aLink = document.createElement('a');
                aLink.href = fileURL;
                aLink.download = "Joseph-Akinwole-Abimbola.pdf";
                aLink.click();
              });
            });
          }}
        >
          Resume
        </div>

        <div className="w-[210px]"></div>
      </nav>
    </div>
  );
};

export default Navbar;
