import React from 'react';

const FutureOfDesign = () => {
  return (
    <>
      <section className='bg-[#0C0C0C] pt-24 relative'>
        <div className="container">
          <div>
            <img src="/images/cohyve-bg.svg" alt="" className='mx-auto max-w-[380px]' />
          </div>
          <div className='absolute top-[230px] left-[380px]'>
            <h2 className="text-[50px] text-[#FCFCD8] text-center font-bold leading-[50px] pb-16 mx-auto max-w-[600px]">
              Plug into the future of design today !
            </h2>
            <div className='flex justify-center'>
              <button className='py-2 px-4 border-[1px] border-[#FCFCD80F] text-[14px] text-[#FCFCD8] rounded-[14px] bg-[#1B1B1BBA] font-semibold mt-10'>Book Demo Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FutureOfDesign
