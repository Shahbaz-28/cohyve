import React from 'react';

const Banner = () => {
  return (
    <>
      <section className="bg-color-b min-h-screen">
        <div className="container pt-[80px] lg:pt-[160px] px-4 md:px-8">
          <div className="text-center">
            <p className="py-2 px-2 rounded-[13px] text-[14px] md:text-[15px] bg-[#1B1B1B] text-[#FCFCD8] text-center max-w-[430px] mx-auto">
              Unmatched quality, efficient processes & transparent pricing.
            </p>
            <h1 className="text-[32px] md:text-[60px] lg:text-[90px] text-[#FCFCD8] leading-[40px] md:leading-[70px] lg:leading-[80px] max-w-[900px] text-center mx-auto pt-5">
              Nex-gen design ecosystem
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 pt-8 md:pt-16">
            <button className="py-3 px-5 border-[1px] border-[#FCFCD80F] text-[14px] md:text-[15px] text-[#FCFCD8] rounded-[14px] bg-[#1B1B1BBA]">
              Join Waitlist
            </button>
            <button className="py-3 px-5 border-[1px] border-[#FCFCD80F] text-[14px] md:text-[15px] text-[#FCFCD8] rounded-[14px]">
              How It Works
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center pt-10 md:pt-12 gap-4 text-center">
            <p className="flex items-center text-[14px] md:text-[15px] text-[#FCFCD8] leading-[20px] md:leading-[30px]">
              <span className="mr-2">
                <img src="/images/cohyve-right.svg" alt="" />
              </span>
              Superfast turnaround time
            </p>
            <p className="flex items-center text-[14px] md:text-[15px] text-[#FCFCD8] leading-[20px] md:leading-[30px]">
              <span className="mr-2">
                <img src="/images/cohyve-right.svg" alt="" />
              </span>
              Unlimited Designs
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="flex items-center text-[14px] md:text-[15px] text-[#FCFCD8] leading-[20px] md:leading-[30px]">
              <span className="mr-2">
                <img src="/images/cohyve-right.svg" alt="" />
              </span>
              Manage everything at one place
            </p>
            <p className="flex items-center text-[14px] md:text-[15px] text-[#FCFCD8] leading-[20px] md:leading-[30px]">
              <span className="mr-2">
                <img src="/images/cohyve-right.svg" alt="" />
              </span>
              Work with top 1% talent Pan India
            </p>
          </div>
          <div className="pt-10 md:pt-20 flex justify-center">
            <img src="/images/bord.svg" alt="" className="w-full md:w-auto" />
          </div>
          <div className="text-center pt-10 md:pt-20">
            <p className="text-[#FCFCD880] text-[14px] md:text-[15px] leading-[15.7px] pb-5">
              Trusted By
            </p>
            <img src="/images/cohyev-logos.svg" alt="" className="mx-auto w-full md:w-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
