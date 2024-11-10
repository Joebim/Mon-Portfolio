import React from 'react';
import { AnimateButtonPoint } from '../AnimateButton';
import { VerticalLine } from './VerticalLine';
import { worksData } from '../../data/worksData';
import WorkCard from './workCard';

export default function Works() {
  return (
    <div id="works" className="works-contain w-full px-96 pt-56">
      <div className="w-full text-center py-60">
        <h1 className="text-9xl font-extrabold">My Project Timeline</h1>
      </div>
      <AnimateButtonPoint />
      <VerticalLine />
      <VerticalLine />
      <AnimateButtonPoint animateButtonClass="btn-class" />
      {worksData.map((workDetails, index) => (
        <div key={index}>
          <WorkCard workDetails={workDetails} />
          <VerticalLine />
          <AnimateButtonPoint animateButtonClass="btn-class" />
        </div>
      ))}
      <AnimateButtonPoint animateButtonClass="btn-end" />
      {worksData.length > 6 && (
        <div className="h-[300px] w-full flex items-center flex-col-reverse">
          <div className="checkout w-1/2 text-center h-[100px] font-extrabold text-white text-[80px] pb-[150px] pt-[100px] ease duration-500 cursor-pointer">
            More Projects..
          </div>
        </div>
      )}
    </div>
  );
}
