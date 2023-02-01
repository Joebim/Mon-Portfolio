import React from "react"
import { ImageSliderOne } from "./ImageSlider";
import { ImageSliderTwo } from "./ImageSlider";





export default function Services() {

    return (
        <div id="services" className="services w-full h-aut flex justify-center px-[200px]">
            <div className="service-card-contain w-3/4">
                <div className="service-card flex flex-row w-full py-60 justify-between items-center">
                    <div className="service-info-contain pr-0 md:pr-[600px]">
                        <h1 className="text-9xl pt-96 font-bold">What I Do</h1>
                        <p className="text-[75px] leading-[120px] py-24">I create creating interactive and visually appealing web designs that bring ideas to life and enhance the user experience.</p>
                    </div>
                    <div className="slider">
                    <div className="carousel-new h-[600px] w-[600px] bg-gray-200 rounded-full overflow-hidden relative flex justify-center items-center" >
                            
                        <ImageSliderOne></ImageSliderOne>
                    
                    </div>
                    </div>
                </div>
                <div className="service-card flex flex-row-reverse py-60 w-full justify-between items-center">
                    <div className="text-right service-info-contain pr-0 md:pl-[600px]">
                        <h1 className="text-9xl pt-96 font-bold">I Design For You</h1>
                        <p className="text-[75px] leading-[120px] py-24">I design custom graphic content that meets your exact specifications and enhances your brand's visual identity.</p>
                    </div>
                    <div className="slider h-[600px] w-[600px] relative grid place-items-center">
                    <div className="carousel-new h-[600px] w-[600px] bg-gray-200 rounded-full overflow-hidden relative flex justify-center items-center" >

                        <ImageSliderTwo></ImageSliderTwo>

                    </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}