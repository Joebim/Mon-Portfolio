import React, {useState} from "react"
import { useInView } from 'react-intersection-observer';
import { AnimateButtonPoint } from "./AnimateButton";
import { VerticalLine } from "./VerticalLine";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";



export default function Works(props) {

    const [toggleCardTwo, setToggleCardTwo] = useState(false)
    const [toggleCardThree, setToggleCardThree] = useState(false)
    const [toggleCardFour, setToggleCardFour] = useState(false)
    const [toggleCardFive, setToggleCardFive] = useState(false)

    const { ref: text1, inView: textOneVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });

      const { ref: text2, inView: textTwoVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });

      const { ref: text3, inView: textThreeVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });

      const { ref: text4, inView: textFourVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });
    


    return (
        <div id="works" className="works-contain w-full px-96 pt-56">
        <div className="w-full text-center py-60">
            <h1 className="text-9xl font-bold">My Project Timeline</h1>
        </div>
        <AnimateButtonPoint/>
        <VerticalLine/>
        <VerticalLine/>
        <AnimateButtonPoint animateButtonClass={"animate-button-class"}/>
        
        <div className="work-contain flex w-full">
        <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h2 ref={text1} className={`text-[150px] font-bold ${textOneVisibility ? "text-animate" : ""}`}>2021</h2>
        </div>
         <div className={`card-right flex-[5_5_0%] ${toggleCardTwo ? "show" : ""}`} id="card-two" onClick={() => {setToggleCardTwo(!toggleCardTwo)}}>
             <div className={`card-contain ${toggleCardTwo ? "show" : ""}`}>
             <div className={`info-card flex justify-center items-center ${toggleCardTwo ? "show p-20" : "border-0"}`}>
                <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardTwo ? "show" : ""}`}>
                    <div className="info-card-text-contain w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl  ${toggleCardTwo">JDLab School Portal(JSP) is a digital School system that </h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Bootstrap</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row w-[30%] justify-between items-center">
                                <div className="featured-btn w-[250px] h-[100px] rounded-[50px] flex justify-center items-center border-8 border-white text-white text-[40px] bg-transparent">Featured</div>
                                <a href="https://jdlab.ng"><BsBoxArrowUpRight/></a>
                            </div>
                        </IconContext.Provider>
                        
                    </div>
                </div>
             </div>
             <div className={`inner ${toggleCardTwo ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardTwo ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">JSP</h3>
                 <div className="text-contain">
                 <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">A digital school management system </h4>
                 </div>
                </div>
                 
                 <div  id="btn_1" 
                 onClick={() => {setToggleCardTwo(!toggleCardTwo)}} 
                 className="info">
                 </div>
             </div>
             </div>
         </div>
        </div>
        
         <VerticalLine/> 

         <AnimateButtonPoint animateButtonClass={"animate-button-class"}/>
         
         <div className="work-contain right-content flex w-full">
            <div className={`card-left flex-[5_5_0%] ${toggleCardThree ? "show" : ""}`} id="card-three" onClick={() => {setToggleCardThree(!toggleCardThree)}}>
         <div className={`card-contain-left ${toggleCardThree ? "show" : ""}`}>
             <div className={`inner ${toggleCardThree ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardThree ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Spirq</h3>
                    <div className="text-contain">
                    <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">A Free Speaking Web Community</h4>
                 </div>
                </div>
                 
                 <div  id="btn_2" 
                 onClick={() => {setToggleCardThree(!toggleCardThree)}}
                 className="info"></div>
             </div>
             <div className={`info-card flex justify-center items-center ${toggleCardThree ? "show p-20" : ""}`}>
                <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardThree ? "show" : ""}`}>
                <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl  ${toggleCardTwo">Spirq is an interactive community</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Bootstrap</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Spirq"><FaGithub /></a>
                                <a href="https://joebim.github.io/Spirq"><BsBoxArrowUpRight/></a>
                            </div>
                        </IconContext.Provider>
                        
                    </div>                </div>
             </div>
             </div>
         </div>

         <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h2 ref={text2} className={`text-[150px] font-bold ${textTwoVisibility ? "text-animate" : ""}`}>2020</h2>
            </div>
         </div>
         
         

         <VerticalLine/>

         <AnimateButtonPoint animateButtonClass={"animate-button-class"}/>
        
     <div className="work-contain flex w-full">

        <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h2 ref={text3} className={`text-[150px] font-bold ${textThreeVisibility ? "text-animate" : ""}`}>2022</h2>
        </div>
        
        <div className={`card-right flex-[5_5_0%] ${toggleCardFour ? "show" : ""}`} id="card-two" onClick={() => {setToggleCardFour(!toggleCardFour)}}>
             <div className={`card-contain ${toggleCardFour ? "show" : ""}`}>
             <div className={`info-card flex justify-center items-center ${toggleCardFour ? "show p-20" : ""}`}>
             <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardFour ? "show" : ""}`}>
             <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl  ${toggleCardTwo">Foodipy is a Magnificent food website</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Bootstrap</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Foodipy"><FaGithub /></a>
                                <a href="https://joebim.github.io/Foodipy/"><BsBoxArrowUpRight/></a>
                            </div>
                        </IconContext.Provider>
                        
                    </div>
                      </div>
             </div>
             <div className={`inner ${toggleCardFour ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardFour ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Foodipi</h3>
                 <div className="text-contain">
                 <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">A smooth recipe Website with healthy meal management</h4>
                 </div>
                </div>
                 
                 <div  id="btn_1" 
                 onClick={() => {setToggleCardFour(!toggleCardFour)}} 
                 className="info"></div>
             </div>
             </div>
         </div>
     </div>
         

         <VerticalLine/>

         <AnimateButtonPoint animateButtonClass={"animate-button-class"}/>

         <div className="work-contain right-content flex w-full">

         <div className={`card-left flex-[5_5_0%] ${toggleCardFive ? "show" : ""}`} id="card-three" onClick={() => {setToggleCardFive(!toggleCardFive)}}>
         <div className={`card-contain-left ${toggleCardFive ? "show" : ""}`}>
             <div className={`inner ${toggleCardFive ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardFive ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Vlish</h3>
                 <div className="text-contain">
                 <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">A tech blog</h4>
                 </div>
                </div>
                 
                 <div  id="btn_2" 
                 onClick={() => {setToggleCardFive(!toggleCardFive)}}
                 className="info"></div>
             </div>
             <div className={`info-card flex justify-center items-center ${toggleCardFive ? "show p-20" : ""}`}>
             <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardFive ? "show" : ""}`}>
             <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl  ${toggleCardTwo">Bringing leading tech Information to the world</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Bootstrap</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Vlish"><FaGithub /></a>
                                <a href="https://joebim.github.io/Vlish"><BsBoxArrowUpRight/></a>
                            </div>
                        </IconContext.Provider>
                        
                    </div>
                        </div>
             </div>
             </div>
         </div>

         <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h2 ref={text4} className={`text-[150px] font-bold ${textFourVisibility ? "text-animate" : ""}`}>2019</h2>
            </div>
         </div>

         <VerticalLine/>
         <AnimateButtonPoint animateButtonClass={"animate-button-class"}/>


         <div className="work-contain flex w-full">

        <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h2 ref={text3} className={`text-[150px] font-bold ${textThreeVisibility ? "text-animate" : ""}`}>2022</h2>
        </div>
        
        <div className={`card-right flex-[5_5_0%] ${toggleCardFour ? "show" : ""}`} id="card-two" onClick={() => {setToggleCardFour(!toggleCardFour)}}>
             <div className={`card-contain ${toggleCardFour ? "show" : ""}`}>
             <div className={`info-card flex justify-center items-center ${toggleCardFour ? "show p-20" : ""}`}>
             <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardFour ? "show" : ""}`}>
             <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl  ${toggleCardTwo">Foodipy is a Magnificent food website</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Bootstrap</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Foodipy"><FaGithub /></a>
                                <a href="https://joebim.github.io/Foodipy/"><BsBoxArrowUpRight/></a>
                            </div>
                        </IconContext.Provider>
                        
                    </div>
                      </div>
             </div>
             <div className={`inner ${toggleCardFour ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardFour ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Boonie</h3>
                 <div className="text-contain">
                 <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">Reaching out to the Boons</h4>
                 </div>
                </div>
                 
                 <div  id="btn_1" 
                 onClick={() => {setToggleCardFour(!toggleCardFour)}} 
                 className="info"></div>
             </div>
             </div>
         </div>
     </div>

     <VerticalLine/>
     <AnimateButtonPoint animateButtonClass={"animate-button-class"}/>

     <div className="work-contain right-content flex w-full">

            <div className={`card-left flex-[5_5_0%] ${toggleCardFive ? "show" : ""}`} id="card-three" onClick={() => {setToggleCardFive(!toggleCardFive)}}>
            <div className={`card-contain-left ${toggleCardFive ? "show" : ""}`}>
                <div className={`inner ${toggleCardFive ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardFive ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Grexo</h3>
                    <div className="text-contain">
                    <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">An AI Measuring Tool</h4>
                    </div>
                </div>
                    
                    <div  id="btn_2" 
                    onClick={() => {setToggleCardFive(!toggleCardFive)}}
                    className="info"></div>
                </div>
                <div className={`info-card flex justify-center items-center ${toggleCardFive ? "show p-20" : ""}`}>
                <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardFive ? "show" : ""}`}>
                <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl  ${toggleCardTwo">Bringing leading tech Information to the world</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Bootstrap</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Vlish"><FaGithub /></a>
                                <a href="https://joebim.github.io/Vlish"><BsBoxArrowUpRight/></a>
                            </div>
                        </IconContext.Provider>
                        
                    </div>
                        </div>
                </div>
                </div>
            </div>

            <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h2 ref={text4} className={`text-[150px] font-bold ${textFourVisibility ? "text-animate" : ""}`}>2019</h2>
            </div>
            </div>

            <VerticalLine/>

         
        </div>
    );
}