import React, {useState} from "react"
import { useInView } from 'react-intersection-observer';
import { AnimateButtonPoint } from "./AnimateButton";
import { VerticalLine } from "./VerticalLine";


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
        <div className="works-contain w-full px-96 pt-56">
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
                <div className={`info-card-contain flex justify-center items-center w-[900px] h-[900px] ${toggleCardTwo ? "show" : ""}`}>
                    <h1 className="text-white text-7xl ">JSP is a digital School system that </h1>
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
             <div className={`info-card flex justify-center items-center ${toggleCardThree ? "show" : ""}`}>
                <div className={`info-card-contain flex justify-center items-center w-[900px] h-[900px] ${toggleCardThree ? "show" : ""}`}>
                    <h1 className="text-white text-7xl ">Spirq is an interactive community</h1>
                </div>
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
             <div className={`info-card flex justify-center items-center ${toggleCardFour ? "show" : ""}`}>
             <div className={`info-card-contain flex justify-center items-center w-[900px] h-[900px] ${toggleCardFour ? "show" : ""}`}>
                    <h1 className="text-white text-7xl ">Foodipy is a Magnificent food website</h1>
                </div>
             </div>
             <div className={`inner ${toggleCardFour ? "show" : ""}`}>
                <div className={`work-info-contain justify-center items-center flex flex-col ${toggleCardFour ? "show" : ""}`}>
                    <h3 className="work-info-header font-['overlock'] pt-[200px] pb-[100px] text-9xl font-black text-center">Foodipy</h3>
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
             <div className={`info-card flex justify-center items-center ${toggleCardFive ? "show" : ""}`}>
             <div className={`info-card-contain flex justify-center items-center w-[900px] h-[900px] ${toggleCardTwo ? "show" : ""}`}>
                    <h1 className="text-white text-7xl ">Bringing leading tech Information to the world</h1>
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