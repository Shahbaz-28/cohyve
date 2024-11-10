import React from 'react';
import Image from 'next/image';

const GlimpseWork = () => {
  return (
    <>
      <section className='bg-[#0C0C0C] pt-20'>
        <div className="container">
          <h2 className="text-[60px] text-[#FCFCD8] text-center font-semibold leading-[60px] pb-16 mx-auto max-w-[700px]">
            A glimpse of our previous work
          </h2>
          <div className="max-w-[1150px] mx-auto">
            <div>
              <Image 
                src="/images/first.svg" 
                alt="First Glimpse of Work"
                width={1150} // Replace with the actual width
                height={650} // Replace with the actual height
                layout="responsive" // Ensures the image scales responsively
                priority // Loads quickly as it is part of the main content
              />
            </div>
            <div className='pt-4'>
              <Image 
                src="/images/second.svg" 
                alt="Second Glimpse of Work"
                width={1150} // Replace with the actual width
                height={650} // Replace with the actual height
                layout="responsive" // Ensures the image scales responsively
              />
            </div>
          </div>
          <div className='flex justify-center pt-16'>
            <button className='py-3 px-5 border-[1px] border-[#FCFCD80F] text-[15px] text-[#FCFCD8] rounded-[14px] bg-[#1B1B1BBA] font-semibold'>
              Explore more work
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default GlimpseWork;
