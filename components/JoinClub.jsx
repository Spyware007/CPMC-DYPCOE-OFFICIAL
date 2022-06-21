import React from 'react';
import classes from './LandingSlide/LandingSlide.module.css';
import Link from 'next/link';

const JoinClub = () => {
  return (
    <div
      id="joinclub"
      className="mb-0 mt-0 flex flex-col  items-center justify-center bg-[#091E32] pt-20 pb-16  "
    >
      <div className="justify-center pb-4 text-center text-3xl font-bold lg:text-5xl ">
        <h1 className="mb-4 font-Paytone text-[#A8ECF0]">
          <span className="text-[#FFFFFF]">WANT TO </span>
          JOIN CLUB
          <span className="text-[#FFFFFF]"> ?</span>
        </h1>
      </div>
      <div className="mr-0  break-words  pb-[1.8rem]  pl-8 pr-8 text-center text-[1.2rem]  font-normal text-[#FFFFFF]   ">
        <h1>
          By clicking the button below and filling out the form, you can join the team. C.P.M.C is
          always looking for motivated members that are eager to explore CP.
        </h1>
      </div>
      {/* <Link href="/joinus">
        <button className={classes.btn} style={{ marginTop: '0' }}>
          <span className={classes.span}>BECOME A MEMBER</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </Link> */}
          <h1 className='text-[#F32053] text-[1.2rem] '>Joing process is closed for now</h1>
         <span className='text-white pt-2'>don't worry, comeback later✨</span>
    </div>
  );
};

export default JoinClub;
