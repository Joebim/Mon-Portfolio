import tromi from "../assets/images/Tromi.svg"
import parlo from "../assets/images/Parlo.svg"
import stradazzle from "../assets/images/Stradazzle pink white.svg"
// import trendVida from "../assets/images/Trend vida logo.svg"
import spirq from "../assets/images/Spirq Light.svg"
import dimtec from "../assets/images/Dimtec.svg"
import { useState } from "react"
import { useInView } from 'react-intersection-observer';
import { AnimateButtonPoint } from "./AnimateButton"
import { VerticalLine } from "./VerticalLine"
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import styled from "styled-components"
import { othersData } from "./othersData"



export default function Others() {

    const { ref: card1, inView: card1Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });
    
      const { ref: card2, inView: card2Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

      const { ref: card3, inView: card3Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

      const { ref: card4, inView: card4Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

      const { ref: card5, inView: card5Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

      const { ref: card6, inView: card6Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

return (
    <>  
    <div className="w-full text-center pt-[400px]">
        <h1 className="text-9xl font-bold">Other Minimal Works</h1>
    </div>
    

    <div className="w-full flex justify-center items-center py-60">
        <div className="others-grid w-3/4 md:w-[95%] lg:w-[95%] xl:w-3/4  grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-20 lg:gap-20 xl:gap-24">

            {othersData?.map((projectData, index) => {
                
            return (
                   
                <div ref={eval("card"+ projectData.id)} className={`others-card bg-white rounded-[40px] flex justify-center items-center p-24 md:p-16 lg:p-16 xl:p-24 fade-in ${eval("card"+projectData.id+"Visibility") ? "appear" : ""}`} key={index}>
                    <div className="w-full flex justify-center flex-col items-center">
                    <h1 className="text-[90px] pt-[30px] font-bold">{projectData.title}</h1>
                    <p className="text-[62px] text-center py-52 font-semibold leading-[100px]">{projectData.content}</p>
                    <div className="flex flex-row justify-between w-full">
                    
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">

                            {projectData.framework.map((tag, index)=> {
                                return (
                                    <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]" key={index}>{tag.name}</div>
                                )
                            })}

                        </div>
                        <IconContext.Provider value={{ color: "#c2c2c2", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[23%] justify-between items-center">
                                <a href={projectData.github} target="_blank"><FaGithub /></a>
                                {projectData.web == "" ? 
                                <div className="featured-alt-btn w-[250px] h-[100px] rounded-[50px] flex justify-center items-center border-8 border-white text-white text-[40px] bg-transparent px-[30px] mx-[30px]">Mobile</div>
                                 : <a href={projectData.web} target="_blank"><BsBoxArrowUpRight/></a>}
                            </div>
                        </IconContext.Provider>
                        
                    
                    </div>
                </div>            
            </div>
                )
            })}
             
        </div>
    </div>
    </>
    )
} 

