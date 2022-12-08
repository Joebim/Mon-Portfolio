import tromi from "../assets/images/Tromi.svg"
import parlo from "../assets/images/Parlo.svg"
import stradazzle from "../assets/images/Stradazzle pink white.svg"
// import trendVida from "../assets/images/Trend vida logo.svg"
import spirq from "../assets/images/Spirq Light.svg"
import dimtec from "../assets/images/Dimtec.svg"
import { useState } from "react"
import { useInView } from 'react-intersection-observer';
import { InView } from "react-intersection-observer"
import { AnimateButtonPoint } from "./AnimateButton"
import { VerticalLine } from "./VerticalLine"
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import styled from "styled-components"
import { othersData } from "./othersData"



export default function Others() {

    const [inview, setInview] = useState(false)
    
return (
    <>
    <VerticalLine/>

    <AnimateButtonPoint/>
        
    <div className="w-full text-center pt-60">
        <h1 className="text-9xl font-bold">Other Minimal Works</h1>
    </div>
    

    <div className="w-full flex justify-center items-center py-60">
        <div className="others-grid w-3/4 grid grid-cols-3 gap-24">


            {othersData?.map((projectData, index) => {
                
            return (
                   
                <InView as="div" onChange={(inView, entry)=> setInview(inView)} className={`others-card bg-white rounded-[40px] flex justify-center items-center p-24 fade-in ${inview ? "appear" : ""}`} key={index}>
                    <div className="w-full flex justify-center flex-col items-center">
                    <h1 className="text-7xl font-bold">{projectData.title}</h1>
                    <p className="text-6xl text-center py-56 leading-[80px]">{projectData.content}</p>
                    <div className="flex flex-row justify-between w-full">
                    
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">

                            {projectData.framework.map((tag, index)=> {
                                return (
                                    <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]" key={index}>{tag.name}</div>
                                )
                            })}

                        </div>
                        <IconContext.Provider value={{ color: "#c2c2c2", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href={projectData.github}><FaGithub /></a>
                                <a href={projectData.web}><BsBoxArrowUpRight/></a>
                            </div>
                        </IconContext.Provider>
                        
                    
                    </div>
                </div>            
            </InView>
                )
            })}
             
        </div>
    </div>
    </>
    )
} 

