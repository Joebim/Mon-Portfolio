import React, { useState } from 'react'
import logo from "../assets/images/Joseph.svg"
import { Link } from 'react-scroll'
import { Link as Link2 } from 'react-router-dom';

export default function Sidebar(props) {

    const [sidebarToggle, setSidebarToggle] = useState(false)


    return (
        <>

            <div className={`hamburger-contain p-[30px] flex justify-end z-[2003] w-[300px] fixed items-center right-[40px] ${sidebarToggle ? "show" : ""}`}>
                <label htmlFor="">
                    <input type="checkbox" name="" id=""
                        onClick={() => { setSidebarToggle(!sidebarToggle) }} />
                    <div className="bar cursor-pointer flex justify-start relative h-[100px] w-[200px]">
                        <span className='top z-[2000]'></span>
                        <span className='middle'></span>
                        <span className='bottom z-[2000]'></span>
                    </div>
                </label>
            </div>

            <div id='sidebar' className={`bg-white ${sidebarToggle ? "show" : ""}`}>
                <div className="logo-contain-sidebar flex justify-center h-[200px]  mt-[200px]">
                    <Link2 to="/"><img src={logo} className="h-[150px]" alt="" height="100"></img></Link2>
                </div>
                <nav className='pt-[200px]'>
                    <ul className='flex justify-center items-center flex-col'>
                        <Link to="intro" smooth={true} offset={-2009} duration={500} className='w-3/4'><li className='sidebar-link text-[70px] text-white text-center mb-14 rounded-[40px] cursor-pointer w-full'>About</li></Link>
                        {/* <Link to="services"className='w-3/4'><li className='sidebar-link text-[70px] text-white text-center mb-14 rounded-[40px] cursor-pointer w-full'>Services</li></Link> */}
                        <Link to="works" smooth={true} offset={-7500} duration={500} className='w-3/4'><li className='sidebar-link text-[70px] text-white text-center mb-14 rounded-[40px] cursor-pointer w-full'>Works</li></Link>
                        <a href="https://joebim.github.io/Web-UI/" target="_blank" rel='noreferrer' className='w-full'>
                            <li className='sidebar-gallery text-[70px] text-white text-center mb-14 mt-96 rounded-[40px] h-96 cursor-pointer flex items-center justify-center w-full'>Gallery</li>
                        </a>

                    </ul>
                </nav>
            </div>
        </>
    )
}
