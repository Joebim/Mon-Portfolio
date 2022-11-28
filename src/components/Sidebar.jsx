import React, {useState} from 'react'
import logo from "../assets/images/Joseph.svg"
import { Link } from 'react-router-dom'


export default function Sidebar() {

const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <>
    <div className={`hamburger-contain w-[800px] h-[300px] p-[30px] flex justify-end items-center absolute right-[40px] z-[2001] ${sidebarToggle ? "show" : ""}`}>
                <label htmlFor="">
                    <input type="checkbox" name="" id="" onClick={() => {setSidebarToggle(!sidebarToggle)}} />
                    <div className="bar cursor-pointer flex justify-start relative h-[100px] w-[200px]">
                        <span className='top'></span>
                        <span className='middle'></span>
                        <span className='bottom'></span>
                    </div>
                </label>
            </div>
            
    <div id='sidebar' className={`bg-white ${sidebarToggle ? "show" : ""}`}>
        <div className="logo-contain-sidebar flex justify-center h-[200px]  mt-[200px]">
            <Link to="/"><img src={logo} className="h-[150px]" alt="" height="100"></img></Link>
        </div>
        <nav className='pt-[200px]'>
            <ul className='flex justify-center items-center flex-col'>
                <a href="/"className='w-3/4'><li className='sidebar-link text-[70px] text-white text-center mb-14 rounded-[40px] cursor-pointer w-full'>About</li></a>
                <a href="/"className='w-3/4'><li className='sidebar-link text-[70px] text-white text-center mb-14 rounded-[40px] cursor-pointer w-full'>Services</li></a>
                <a href="/"className='w-3/4'><li className='sidebar-link text-[70px] text-white text-center mb-14 rounded-[40px] cursor-pointer w-full'>Works</li></a>
                <a href="/"className='w-full'><li className='sidebar-gallery text-[70px] text-white text-center mb-14 mt-96 rounded-[40px] h-96 cursor-pointer flex items-center justify-center w-full'>Gallery</li></a>

            </ul>
        </nav>
    </div>
    </>
  )
}
