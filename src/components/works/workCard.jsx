import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const WorkCard = ({ workDetails }) => {
  const [toggleCard, setToggleCard] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px 0px -250px 0px',
    delay: '350',
  });

  return (
    <div className={`work-contain flex w-full ${workDetails.position === 'left' ? 'flex-row-reverse' : ''}`}>
      <div className="work-year-contain flex-[3_3_0%] flex justify-center items-center">
        <h2 ref={ref} className={`text-[150px] font-bold ${inView ? 'text-animate' : ''}`}>
          {workDetails.year}
        </h2>
      </div>
      <div
        className={`card-${workDetails.position} flex-[5_5_0%] ${toggleCard ? 'show' : ''}`}
        onClick={() => setToggleCard(!toggleCard)}
      >
        <div className={`card-contain${workDetails.position === 'left' ? '-left flex-row' : ' flex-row-reverse'} ${toggleCard ? 'show' : ''} cursor-pointer`}>
          <div className={`info-card flex flex-col justify-center items-center p-20 ${toggleCard ? 'border-0' : 'show'}`}>
            <h3 className="work-info-header pt-[200px] pb-[100px] text-9xl font-black text-center">{workDetails.name}</h3>
            <div className={`info-card-contain flex flex-col justify-center items-center w-[1200px] h-full ${toggleCard ? 'show' : ''}`}>
              <div className="info-card-text-contain w-full flex text-center justify-center items-center flex-[6_6_0%]">
                <h2 className="info-card-text font-semibold text-7xl leading-[100px]">{workDetails.mainInfo}</h2>
              </div>
            </div>
            <div className={`info-card-link-contain ${toggleCard ? 'bg-[#ffffffa1]' : 'bg-transparent'} duration-150 h-[400px] w-full px-[40px] rounded-[50px] justify-between items-center flex flex-row`}>
              <div className={`info-card-link-tag flex flex-row justify-center items-center h-full ${toggleCard ? 'visible' : 'hidden'}`}>
                {workDetails.framework.map((tag, index) => (
                  <div className="tag p-[10px] px-[20px] m-[10px] rounded-full text-black text-[40px]" key={index}>
                    {tag.name}
                  </div>
                ))}
              </div>
              {workDetails.status === 'completed' ? (
                <IconContext.Provider value={{ color: 'black', size: '90' }}>
                  <div className="info-card-link flex flex-row gap-[35px] w-[30%] justify-between items-center">
                    {workDetails.github === 'featured' ? (
                      <div className="featured-btn px-[30px] py-[15px] rounded-[50px] flex justify-center items-center border-8 border-white text-white text-[40px] bg-transparent">Featured</div>
                    ) : (
                      <div className={`p-[35px] ${toggleCard ? 'hover:bg-gray-200' : 'bg-[#ffffffc0] hover:bg-[#E6FFF2]'} duration-150 rounded-full`}>
                        <a href={workDetails.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                      </div>
                    )}
                    <div className={`p-[35px] ${toggleCard ? 'hover:bg-gray-200' : 'bg-[#ffffffc0] hover:bg-[#E6FFF2]'} duration-150 rounded-full`}>
                      <a href={workDetails.web} target="_blank" rel="noreferrer"><BsBoxArrowUpRight /></a>
                    </div>
                  </div>
                </IconContext.Provider>
              ) : (
                <div className="featured-btn px-[40px] py-[15px] rounded-[50px] flex justify-center items-center border-8 border-white text-white text-[40px] bg-transparent">In Progress</div>
              )}
            </div>
          </div>
          <div className={`inner shadow-md ${toggleCard ? 'show' : ''} ${`${workDetails?.image}`} bg-cover`}></div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
