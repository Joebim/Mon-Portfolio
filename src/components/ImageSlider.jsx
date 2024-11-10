import React from "react";
import { useState, useEffect } from "react";
import { slides1 } from "../data/sliderData";
import { slides2 } from "../data/sliderData";

export function ImageSliderOne (props) {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideLength = slides1.length;

    const autoSlide = true
    let slideInterval
    let intervalTime = 4000

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1); 
    }

    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    // }

    function auto() {
        slideInterval = setInterval( () => {
            nextSlide()

            clearInterval(slideInterval)
        }, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if(autoSlide) {
            auto()
        }
    }, [currentSlide, autoSlide]);


    return (
        <>
        {slides1?.map((slide, index) => {
            return(
            <div className={`carousel-new-inner w-[600px] h-[600px] gray-200 justify-center align-center inline-flex ${index == currentSlide ? "slide-one current" : "slide-one"}`} key={index}>
                {index == currentSlide && (
                    <img src={slide.image} alt="slide" className="w-[400px] h-[400px]"></img>
                )}

            </div>
            )
        })}
        </>
    );
};


export function ImageSliderTwo (props) {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideLength = slides2.length;

    const autoSlide = true
    let slideInterval
    let intervalTime = 5500

    const nextSlide = () => {
        setCurrentSlide(currentSlide == slideLength - 1 ? 0 : currentSlide + 1); 
    }

    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    // }

    function auto() {
        slideInterval = setInterval( () => {
            nextSlide()

            clearInterval(slideInterval)
        }, intervalTime)    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if(autoSlide) {
            auto()
        }

    }, [autoSlide, currentSlide]);


    return (
        <>
        {slides2?.map((slide, index) => {
            return(
            <div className={`carousel-new-inner w-[600px] h-[600px] gray-200 flex justify-center align-center inline-flex ${index == currentSlide ? "slide-two current" : "slide-two"}`} key={index}>
                {index == currentSlide && (
                    <img src={slide.image} alt="slide" className="w-[400px] h-[400px]"></img>
                )}

            </div>
            )
        })}
        </>
    );
};


