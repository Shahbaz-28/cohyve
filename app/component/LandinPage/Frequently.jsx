"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import 'flowbite';

const accordionData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  // Additional accordion items...
];

const Frequently = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      <section className='bg-[#0C0C0C] pt-20 pb-10'>
        <div className="container">
          <h2 className="text-[50px] text-[#FCFCD8] text-center font-normal leading-[50px] pb-16 mx-auto max-w-[600px]">
            Frequently Asked Questions.
          </h2>
          <div id="accordion-collapse" className="w-[1000px] mx-auto">
            {accordionData.map((item) => (
              <div key={item.id}>
                <h2 id={`accordion-collapse-heading-${item.id}`}>
                  <button
                    type="button"
                    className={openAccordion === item.id ? 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-tl-[20px] rounded-tr-[20px]' : 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-[20px]'}
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={openAccordion === item.id}
                    aria-controls={`accordion-collapse-body-${item.id}`}
                  >
                    <span className="text-[18px] sm:text-[25px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-4 py-4">
                      {item.title}
                    </span>
                    <Image
                      src={openAccordion === item.id ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                      alt="Toggle Icon"
                      width={24} // Set appropriate width
                      height={24} // Set appropriate height
                      className="mr-5 mt-1"
                    />
                  </button>
                </h2>
                {openAccordion === item.id && (
                  <div id={`accordion-collapse-body-${item.id}`} className="bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px]" aria-labelledby={`accordion-collapse-heading-${item.id}`}>
                    <div className="p-5 pl-0">
                      <p className="mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                        {item.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Frequently;
