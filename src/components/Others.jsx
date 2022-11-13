import tromi from "../assets/images/Tromi.svg"
import parlo from "../assets/images/Parlo.svg"
import stradazzle from "../assets/images/Stradazzle pink white.svg"
// import trendVida from "../assets/images/Trend vida logo.svg"
import spirq from "../assets/images/Spirq Light.svg"
import dimtec from "../assets/images/Dimtec.svg"
import { useInView } from 'react-intersection-observer';
import { AnimateButtonPoint } from "./AnimateButton"
import { VerticalLine } from "./VerticalLine"


export default function Others() {

    const { ref: card1, inView: cardOneVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });
    
      const { ref: card2, inView: cardTwoVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

      const { ref: card3, inView: cardThreeVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

      const { ref: card4, inView: cardFourVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

      const { ref: card5, inView: cardFiveVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

      const { ref: card6, inView: cardSixVisibility} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        delay: "500"
      });

return (
    <>
    <VerticalLine/>

    <AnimateButtonPoint/>
        
    <div className="w-full text-center pt-60">
        <h1 className="text-9xl font-bold">Other Minimal Works</h1>
    </div>
    

    <div className="w-full flex justify-center items-center py-60">
        <div className="others-grid w-3/4 grid grid-cols-3 gap-24">
            <div ref={card1} className={`others-card bg-white rounded-[20px] flex justify-center items-center p-24 fade-in ${cardOneVisibility ? "appear" : ""}`}>
                <div className="w-full flex justify-center flex-col items-center">
                    <h1 className="text-7xl font-bold">Simple Portfolio Landing</h1>
                    <p className="text-5xl py-56">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cum et at expedita assumenda possimus.</p>
                    <div className="flex justify-between w-full">
                        <p className="text-5xl">one</p>
                        <p className="text-5xl">two</p>
                        <p className="text-5xl">three</p>
                    </div>
                </div>            
            </div>
            <div ref={card2} className={`others-card bg-white rounded-[20px] flex justify-center items-center p-24 fade-in ${cardTwoVisibility ? "appear" : ""}`}>
                <div className="w-full flex justify-center flex-col items-center">
                    <h1 className="text-7xl font-bold">Login UI</h1>
                    <p className="text-5xl py-56">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cum et at expedita assumenda possimus.</p>
                    <div className="flex justify-between w-full">
                        <p className="text-5xl">one</p>
                        <p className="text-5xl">two</p>
                        <p className="text-5xl">three</p>
                    </div>
                </div>
            </div>
            <div ref={card3} className={`others-card bg-white rounded-[20px] flex justify-center items-center p-24 fade-in ${cardThreeVisibility ? "appear" : ""}`}>
                <div className="w-full flex justify-center flex-col items-center">
                    <h1 className="text-7xl font-bold">Web UI Components</h1>
                    <p className="text-6xl py-56">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cum et at expedita assumenda possimus.</p>
                    <div className="flex justify-between w-full">
                        <p className="text-5xl">one</p>
                        <p className="text-5xl">two</p>
                        <p className="text-5xl">three</p>
                    </div>
                </div>
            </div>
            <div ref={card4} className={`others-card bg-white rounded-[20px] flex justify-center items-center p-24 fade-in ${cardFourVisibility ? "appear" : ""}`}>
                <div className="w-full flex justify-center flex-col items-center">
                    <h1 className="text-7xl font-bold">Xender Web Clone</h1>
                    <p className="text-5xl py-56">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cum et at expedita assumenda possimus.</p>
                    <div className="flex justify-between w-full">
                        <p className="text-5xl">one</p>
                        <p className="text-5xl">two</p>
                        <p className="text-5xl">three</p> fade-in
                    </div>
                </div>
            </div>
            <div ref={card5} className={`others-card bg-white rounded-[20px] flex justify-center items-center p-24 fade-in ${cardFiveVisibility ? "appear" : ""}`}>
                <div className="w-full flex justify-center flex-col items-center">
                    <h1 className="text-7xl font-bold">Font Manager</h1>
                    <p className="text-5xl py-56">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cum et at expedita assumenda possimus.</p>
                    <div className="flex justify-between w-full">
                        <p className="text-5xl">one</p>
                        <p className="text-5xl">two</p>
                        <p className="text-5xl">three</p>
                    </div>
                </div>
            </div>
            <div ref={card6} className={`others-card bg-white rounded-[20px] flex justify-center items-center p-24 fade-in ${cardSixVisibility ? "appear" : ""}`}>
                <div className="w-full flex justify-center flex-col items-center">
                    <h1 className="text-7xl font-bold">Task List</h1>
                    <p className="text-5xl py-56">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cum et at expedita assumenda possimus.</p>
                    <div className="flex justify-between w-full">
                        <p className="text-5xl">one</p>
                        <p className="text-5xl">two</p>
                        <p className="text-5xl">three</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    </>
    )
} 

