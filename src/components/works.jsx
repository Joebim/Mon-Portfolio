import React, { useState } from "react"
import { useInView } from 'react-intersection-observer';
import { AnimateButtonPrimary } from "./AnimateButton";
import { AnimateButtonPoint } from "./AnimateButton";
import { VerticalLine } from "./VerticalLine";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { worksData } from "./worksData";



export default function Works(props) {

    const [toggleCard1, setToggleCard1] = useState(false)
    const [toggleCard2, setToggleCard2] = useState(false)
    const [toggleCard3, setToggleCard3] = useState(false)
    const [toggleCard4, setToggleCard4] = useState(false)
    const [toggleCard5, setToggleCard5] = useState(false)
    const [toggleCard6, setToggleCard6] = useState(false)
    const [toggleCard7, setToggleCard7] = useState(false)
    const [toggleCard8, setToggleCard8] = useState(false)
    const [toggleCard9, setToggleCard9] = useState(false)
    const [toggleCard10, setToggleCard10] = useState(false)
    const [toggleCard11, setToggleCard911] = useState(false)


    // console.log('eval("toggleCard"+workDetails.id)', eval("toggleCard"+1))

    const { ref: text1, inView: text1Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    const { ref: text2, inView: text2Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    const { ref: text3, inView: text3Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    const { ref: text4, inView: text4Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    const { ref: text5, inView: text5Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    const { ref: text6, inView: text6Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    const { ref: text7, inView: text7Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });


    const { ref: text8, inView: text8Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });


    const { ref: text9, inView: text9Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    const { ref: text10, inView: text10Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    const { ref: text11, inView: text11Visibility } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
    });

    // console.log('worksData', worksData)

    return (
        <div id="works" className="works-contain w-full px-96 pt-56">
            <div className="w-full text-center py-60">
                <h1 className="text-9xl font-extrabold">My Project Timeline</h1>
            </div>
            <AnimateButtonPoint />
            <VerticalLine />
            <VerticalLine />
            <AnimateButtonPoint animateButtonClass={"btn-class"} />

            {worksData?.map((workDetails, index) => {
                return (
                    <div key={index}>
                        <div className={`work-contain flex w-full ${workDetails.position == "left" ? "flex-row-reverse hover:flex-row-reverse" : ""}`}>
                            <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                                <h2 ref={eval("text" + workDetails.id)} className={`text-[150px] font-bold ${eval("text" + workDetails.id + "Visibility") ? "text-animate" : ""}`}>{workDetails.year}</h2>
                            </div>
                            <div className={`card-${workDetails.position} flex-[5_5_0%]  ${eval("toggleCard" + workDetails.id) ? "show" : ""}`} id="card-two" onClick={() => { eval("setToggleCard" + workDetails.id)(!eval("toggleCard" + workDetails.id)) }}>
                                <div className={`card-contain${workDetails.position === "left" ? "-left flex-row" : " flex-row-reverse"} ${eval("toggleCard" + workDetails.id) ? "show" : ""} cursor-pointer`}>
                                    <div className={`info-card flex flex-col justify-center items-center  p-20 ${eval("toggleCard" + workDetails.id) ? "border-0" : "show"}`}>
                                        <h3 className="work-info-header pt-[200px] pb-[100px] text-9xl font-black text-center">{workDetails.name}</h3>

                                        <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${eval("toggleCard" + workDetails.id) ? "show" : ""}`}>
                                            <div className="info-card-text-contain w-full flex text-center justify-center items-center flex-[6_6_0%]">

                                                <h2 className="info-card-text font-semibold text-7xl leading-[100px]">{workDetails.mainInfo}</h2>
                                            </div>


                                        </div>

                                        <div className={`info-card-link-contain  ${eval("toggleCard" + workDetails.id) ? "bg-[#ffffffa1]" : "bg-transparent"} duration-150 h-[400px] w-full px-[40px] rounded-[50px] justify-between items-center flex flex-row`}>

                                            <div className={`info-card-link-tag flex flex-row justify-center items-center h-full  ${eval("toggleCard" + workDetails.id) ? "visible" : "hidden"}`}>
                                                {workDetails.framework.map((tag, index) => {
                                                    return (
                                                        <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]" key={index}>{tag.name}</div>
                                                    )
                                                })}
                                            </div>

                                            {workDetails.status == "completed" ? <IconContext.Provider value={{ color: "black", size: "90" }}>
                                                <div className="info-card-link flex flex-row gap-[35px] w-[30%] justify-between items-center">
                                                    {workDetails.github == "featured" ? <div className="featured-btn px-[30px] py-[15px] rounded-[50px] flex justify-center items-center border-8 border-white text-white text-[40px] bg-transparent">Featured</div> :
                                                    <div className={`p-[35px] ${eval("toggleCard" + workDetails.id) ? "hover:bg-gray-200" : "bg-[#ffffffc0] hover:bg-[#E6FFF2]"} duration-150 rounded-full`}>
                                                            <a href={workDetails.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                                                        </div>}
                                                    <div className={`p-[35px] ${eval("toggleCard" + workDetails.id) ? "hover:bg-gray-200" : "bg-[#ffffffc0] hover:bg-[#E6FFF2]"} duration-150 rounded-full`}><a href={workDetails.web} target="_blank" rel="noreferrer"><BsBoxArrowUpRight /></a></div>
                                                    
                                                </div>
                                            </IconContext.Provider> : <div className="featured-btn px-[40px] py-[15px] rounded-[50px] flex justify-center items-center border-8 border-white text-white text-[40px] bg-transparent">In Progress</div>}

                                        </div>
                                    </div>
                                    <div className={`inner shadow-md ${eval("toggleCard" + workDetails.id) ? "show" : ""} ${`${workDetails?.image}`} bg-cover`}></div>
                                </div>
                            </div>
                        </div>

                        <VerticalLine />

                        <AnimateButtonPoint animateButtonClass={"btn-class"} />
                    </div>
                )
            })}

            <AnimateButtonPoint animateButtonClass={"btn-end"} />
            {/* {console.log('worksData.length', worksData.length)} */}

            {worksData.length <= 6 ? "" : <div className="h-[300px] w-full flex items-center flex-col-reverse">

                <div className="checkout w-1/2 text-center h-[100px] font-extrabold text-white text-[80px] pb-[150px] pt-[100px] ease duration-500 cursor-pointer">
                    More Projects..
                </div>
            </div>}

        </div>
    );


}