import React, {useState} from "react"
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


    console.log('eval("toggleCard"+workDetails.id)', eval("toggleCard"+1))

   

    const { ref: text1, inView: text1Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });

      const { ref: text2, inView: text2Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });

      const { ref: text3, inView: text3Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });

      const { ref: text4, inView: text4Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });

      const { ref: text5, inView: text5Visibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -250px 0px",
        delay: "350"
      });

      const { ref: text6, inView: text6Visibility} = useInView({
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
        <AnimateButtonPoint animateButtonClass={"btn-class"}/>
                 
        {worksData.map((workDetails, index)=> {
            return (
        <div  key={index}>
            <div className={`work-contain flex w-full ${workDetails.position == "left" ? "flex-row-reverse hover:flex-row-reverse" : ""}`}>
                <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                    <h2 ref={eval("text" + workDetails.id)} className={`text-[150px] font-bold ${eval("text" + workDetails.id + "Visibility") ? "text-animate" : ""}`}>{workDetails.year}</h2>
                </div>
         <div className={`card-${workDetails.position} flex-[5_5_0%] ${props.theme == "light" ? `bg-[${workDetails.imageLight}]` : `bg-[${workDetails.imageDark}]`} bg-cover ${eval("toggleCard"+workDetails.id) ? "show" : ""}`} id="card-two" onClick={() => {eval("setToggleCard" + workDetails.id)(!eval("toggleCard"+workDetails.id))}}>
             <div className={`card-contain${workDetails.position == "left" ? "-left flex-row-reverse" : ""} ${eval("toggleCard"+workDetails.id) ? "show" : ""}`}>
             <div className={`info-card flex justify-center items-center ${eval("toggleCard"+workDetails.id) ? "show p-20" : "border-0"}`}>
                <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${eval("toggleCard"+workDetails.id) ? "show" : ""}`}>
                    <div className="info-card-text-contain w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl leading-[100px]">{workDetails.mainInfo}</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            {workDetails.framework.map((tag, index) => {
                            return(
                                <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]" key={index}>{tag.name}</div>
                            )                            })}
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row w-[30%] justify-between items-center">
                            {workDetails.github == "featured" ? <div className="featured-btn w-[250px] h-[100px] rounded-[50px] flex justify-center items-center border-8 border-white text-white text-[40px] bg-transparent">Featured</div> : 
                                <a href={workDetails.github} target="_blank"><FaGithub/></a>}                                <a href="https://jsp.ng/" target="_blank"><BsBoxArrowUpRight/></a>
                            </div>
                        </IconContext.Provider>
                        
                    </div>
                </div>
             </div>
             <div className={`inner ${eval("toggleCard"+workDetails.id) ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${eval("toggleCard"+workDetails.id) ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">{workDetails.name}</h3>
                 <div className="text-contain">
                 <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">{workDetails.innerInfo}</h4>
                 </div>
                </div>
                 
                 <div  id="btn_1" 
                 onClick={() => {eval("setToggleCard" + workDetails.id)(!eval("toggleCard"+workDetails.id))}} 
                 className="info">
                 </div>
             </div>
             </div>
         </div>
        </div>
        
         <VerticalLine/> 

         <AnimateButtonPoint animateButtonClass={"btn-class"}/>
         </div>
            )
        })}

        <AnimateButtonPoint animateButtonClass={"btn-end"}/>


{/*          
         
         <div className="work-contain right-content flex w-full">
            <div className={`card-left flex-[5_5_0%] ${props.theme == "light" ? "bg-[url('./assets/images/spirqBackgroundLight.jpg')]" : "bg-[url('./assets/images/spirqBackgroundDark.jpg')]"} ${toggleCardThree ? "show" : ""}`} id="card-three" onClick={() => {setToggleCardThree(!toggleCardThree)}}>
         <div className={`card-contain-left ${toggleCardThree ? "show" : ""}`}>
             <div className={`inner ${toggleCardThree ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardThree ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Spirq</h3>
                    <div className="text-contain">
                    <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">Dazzle the world with your opinion with free speech </h4>
                 </div>
                </div>
                 
                 <div  id="btn_2" 
                 onClick={() => {setToggleCardThree(!toggleCardThree)}}
                 className="info"></div>
             </div>
             <div className={`info-card flex justify-center items-center ${toggleCardThree ? "show p-20" : ""}`}>
                <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardThree ? "show" : ""}`}>
                <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl leading-[100px]">Spirq is an interactive community that allow free opinion and speech, giving opportunity to thriving trends and events</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">styled-components</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">TailwindCss</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Spirq" target="_blank"><FaGithub /></a>
                                <a href="https://joebim.github.io/Spirq" target="_blank"><BsBoxArrowUpRight/></a>
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
        
        <div className={`card-right flex-[5_5_0%] ${props.theme == "light" ? "bg-[url('./assets/images/foodipiLight.jpg')]" : "bg-[url('./assets/images/foodipiDark.jpg')]"} ${toggleCardFour ? "show" : ""}`} id="card-two" onClick={() => {setToggleCardFour(!toggleCardFour)}}>
             <div className={`card-contain ${toggleCardFour ? "show" : ""}`}>
             <div className={`info-card flex justify-center items-center ${toggleCardFour ? "show p-20" : ""}`}>
             <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardFour ? "show" : ""}`}>
             <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl leading-[100px]">Magnificent food and recipe machine, with individual preference like, calories, types, cuisine... and ingredients to meal and meal plan prediction.</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">TailwindCss</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Foodipy" target="_blank"><FaGithub /></a>
                                <a href="https://joebim.github.io/Foodipy/" target="_blank"><BsBoxArrowUpRight/></a>
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

         <div className={`card-left flex-[5_5_0%] ${props.theme == "light" ? "bg-[url('./assets/images/vlishLight.jpg')]" : "bg-[url('./assets/images/vlishDark.jpg')]"} ${toggleCardFive ? "show" : ""}`} id="card-three" onClick={() => {setToggleCardFive(!toggleCardFive)}}>
         <div className={`card-contain-left ${toggleCardFive ? "show" : ""}`}>
             <div className={`inner ${toggleCardFive ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardFive ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Vlish</h3>
                 <div className="text-contain">
                 <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">Take interior decoration to another level virtual 3D Editing</h4>
                 </div>
                </div>
                 
                 <div  id="btn_2" 
                 onClick={() => {setToggleCardFive(!toggleCardFive)}}
                 className="info"></div>
             </div>
             <div className={`info-card flex justify-center items-center ${toggleCardFive ? "show p-20" : ""}`}>
             <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardFive ? "show" : ""}`}>
             <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl leading-[100px]">Experience immersive 3D inerior Assets, enviroments and objects in Virtual Reality with Editing Features for interior decoration</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Spline</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Vlish" target="_blank"><FaGithub /></a>
                                <a href="https://joebim.github.io/Vlish" target="_blank"><BsBoxArrowUpRight/></a>
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
        
        <div className={`card-right flex-[5_5_0%] ${props.theme == "light" ? "bg-[url('./assets/images/boonieLight.jpg')]" : "bg-[url('./assets/images/boonieDark.jpg')]"} ${toggleCardFour ? "show" : ""}`} id="card-two" onClick={() => {setToggleCardFour(!toggleCardFour)}}>
             <div className={`card-contain ${toggleCardFour ? "show" : ""}`}>
             <div className={`info-card flex justify-center items-center ${toggleCardFour ? "show p-20" : ""}`}>
             <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardFour ? "show" : ""}`}>
             <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl leading-[100px]">Creating simple accessible opportunities in different fields and improving employability accross the world.</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">TailwindCss</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Redux</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Foodipy" target="_blank"><FaGithub /></a>
                                <a href="https://joebim.github.io/Foodipy/" target="_blank"><BsBoxArrowUpRight/></a>
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

            <div className={`card-left flex-[5_5_0%] ${props.theme == "light" ? "bg-[url('./assets/images/grexoLight.jpg')]" : "bg-[url('./assets/images/grexoDark.jpg')]"} ${toggleCardFive ? "show" : ""}`} id="card-three" onClick={() => {setToggleCardFive(!toggleCardFive)}}>
            <div className={`card-contain-left ${toggleCardFive ? "show" : ""}`}>
                <div className={`inner ${toggleCardFive ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardFive ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Grexo</h3>
                    <div className="text-contain">
                    <h4 className="work-info-details pt-[50px] pb-[150px] text-[65px] leading-[92px] text-center">AI Measuring Tool</h4>
                    </div>
                </div>
                    
                    <div  id="btn_2" 
                    onClick={() => {setToggleCardFive(!toggleCardFive)}}
                    className="info"></div>
                </div>
                <div className={`info-card flex justify-center items-center ${toggleCardFive ? "show p-20" : ""}`}>
                <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCardFive ? "show" : ""}`}>
                <div className="info-card-text-contain  w-full flex text-center justify-center items-center flex-[6_6_0%]">
                        <h2 className="info-card-text text-white text-7xl leading-[100px]">Intelligent body measuring tool for Apparel making with adaptive body-shape measurement to 3D apparel conversion</h2>
                    </div>
                    <div className="info-card-link-contain justify-between w-full h-full flex-[1_1_0%] flex flex-row">
                        <div className="info-card-link-tag flex flex-row justify-center items-center h-full">
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">ReactJs</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Flutter</div>
                            <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]">Spline</div>
                        </div>
                        <IconContext.Provider value={{ color: "white", size:"90"}}>
                            <div className="info-card-link flex flex-row text-[30px] w-[20%] justify-between items-center">
                                <a href="https://github.com/Joebim/Vlish" target="_blank"><FaGithub /></a>
                                <a href="https://joebim.github.io/Vlish" target="_blank"><BsBoxArrowUpRight/></a>
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
             */}



            <div className="h-[300px] w-full flex items-center flex-col-reverse">
                {/* <div className="pr-[20px]">
                    <AnimateButtonPrimary/>
                </div> */}
                
                <div className="checkout w-1/2 text-center h-[100px] font-extrabold text-white text-[80px] pb-[150px] pt-[100px] ease duration-500 cursor-pointer">
                    More Projects..
                </div>
            </div>

            {/* <div className="flex w-full justify-center items-center">
                
            </div> */}
            
         
        </div>
    );
}