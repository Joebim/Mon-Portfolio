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
        <div className="works-contain w-full px-96">
        <div className="w-full text-center py-60">
            <h1 className="text-9xl font-bold">My Project Timeline</h1>
        </div>
        <AnimateButtonPoint/>
        <VerticalLine/>
        <VerticalLine/>
        <AnimateButtonPoint animateButtonClass={"animate-button-class"}/>
        
        <div className="work-contain flex w-full">
        <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h1 ref={text1} className={`text-[150px] font-bold ${textOneVisibility ? "text-animate" : ""}`}>2019</h1>
        </div>
         <div className={`card-right flex-[5_5_0%] ${toggleCardTwo ? "show" : ""}`} id="card-two" onClick={() => {setToggleCardTwo(!toggleCardTwo)}}>
             <div className={`card-contain ${toggleCardTwo ? "show" : ""}`}>
             <div className={`info-card ${toggleCardTwo ? "show" : ""}`}></div>
             <div className={`inner ${toggleCardTwo ? "show" : ""}`}>
                <div className={`work-info-contain flex flex-col ${toggleCardTwo ? "show" : ""}`}>
                    <h3 className="pt-[200px] pb-[100px] text-9xl font-black text-center">WHAT I DO</h3>
                 <div className="text-contain">
                 <p className="pt-[50px] pb-[150px] text-8xl text-center">I create interactive web designs and bring your ideas to life.</p>
                 </div>
                </div>
                 
                 <div  id="btn_1" 
                 onClick={() => {setToggleCardTwo(!toggleCardTwo)}} 
                 className="info"></div>
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
                <div className={`work-info-contain flex flex-col ${toggleCardThree ? "show" : ""}`}>
                    <h3 className="pt-[200px] pb-[100px] text-9xl font-black text-center">I DESIGN FOR YOU</h3>
                    <div className="text-contain">
                    <p className="pt-[50px] pb-[150px] text-8xl text-center">I design graphic contents just as you want.</p>
                 </div>
                </div>
                 
                 <div  id="btn_2" 
                 onClick={() => {setToggleCardThree(!toggleCardThree)}}
                 className="info"></div>
             </div>
             <div className={`info-card ${toggleCardThree ? "show" : ""}`}></div>
             </div>
         </div>

         <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h1 ref={text2} className={`text-[150px] font-bold ${textTwoVisibility ? "text-animate" : ""}`}>2019</h1>
            </div>
         </div>
         
         

         <VerticalLine/>

         <AnimateButtonPoint animateButtonClass={"animate-button-class"}/>
        
     <div className="work-contain flex w-full">

     <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h1 ref={text3} className={`text-[150px] font-bold ${textThreeVisibility ? "text-animate" : ""}`}>2019</h1>
            </div>
        
        <div className={`card-right flex-[5_5_0%] ${toggleCardFour ? "show" : ""}`} id="card-two" onClick={() => {setToggleCardFour(!toggleCardFour)}}>
             <div className={`card-contain ${toggleCardFour ? "show" : ""}`}>
             <div className={`info-card ${toggleCardFour ? "show" : ""}`}></div>
             <div className={`inner ${toggleCardFour ? "show" : ""}`}>
                <div className={`work-info-contain flex flex-col ${toggleCardFour ? "show" : ""}`}>
                    <h3 className="pt-[200px] pb-[100px] text-9xl font-black text-center">WHAT I DO</h3>
                 <div className="text-contain">
                 <p className="pt-[50px] pb-[150px] text-8xl text-center">I create interactive web designs and bring your ideas to life.</p>
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
                <div className={`work-info-contain flex flex-col ${toggleCardFive ? "show" : ""}`}>
                    <h3 className="pt-[200px] pb-[100px] text-9xl font-black text-center">I DESIGN FOR YOU</h3>
                 <div className="text-contain">
                 <p className="pt-[50px] pb-[150px] text-8xl text-center">I design graphic contents just as you want.</p>
                 </div>
                </div>
                 
                 <div  id="btn_2" 
                 onClick={() => {setToggleCardFive(!toggleCardFive)}}
                 className="info"></div>
             </div>
             <div className={`info-card ${toggleCardFive ? "show" : ""}`}></div>
             </div>
         </div>

         <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
                <h1 ref={text4} className={`text-[150px] font-bold ${textFourVisibility ? "text-animate" : ""}`}>2019</h1>
            </div>
         </div>

         <VerticalLine/>

         
        </div>
    );
}