"use client";

import React, { useState } from 'react';
import 'flowbite';

const Frequently = () => {
  // Separate state for each accordion item
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <>
      <section className='bg-[#0C0C0C] pt-20 pb-10'>
        <div className="container">
          <h2 className="text-[50px] text-[#FCFCD8] text-center font-normal leading-[50px] pb-16 mx-auto max-w-[600px]">
            Frequently Asked Questions.
          </h2>
          <div id="accordion-collapse" data-accordion="collapse" className="w-[1000px] mx-auto">
            
            {/* Accordion Dropdown 1 */}
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={isOpen1 ? 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-tl-[20px] rounded-tr-[20px]' : 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-[20px]'}
                onClick={() => setIsOpen1(!isOpen1)}
                aria-expanded={isOpen1}
                aria-controls="accordion-collapse-body-1"
              >
                <span className="text-[18px] sm:text-[25px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-4 py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen1 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            {isOpen1 && (
              <div id="accordion-collapse-body-1" className="bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px]" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-5 pl-0">
                  <p className="mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            )}

            {/* Accordion Dropdown 2 */}
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className={isOpen2 ? 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-tl-[20px] rounded-tr-[20px]' : 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-[20px]'}
                onClick={() => setIsOpen2(!isOpen2)}
                aria-expanded={isOpen2}
                aria-controls="accordion-collapse-body-2"
              >
                <span className="text-[18px] sm:text-[25px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-4 py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen2 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            {isOpen2 && (
              <div id="accordion-collapse-body-2" className="bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px]" aria-labelledby="accordion-collapse-heading-2">
                <div className="p-5 pl-0">
                <p className="mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            )}

            {/* Accordion Dropdown 3 */}
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className={isOpen3 ? 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-tl-[20px] rounded-tr-[20px]' : 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-[20px]'}
                onClick={() => setIsOpen3(!isOpen3)}
                aria-expanded={isOpen3}
                aria-controls="accordion-collapse-body-3"
              >
                <span className="text-[18px] sm:text-[25px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-4 py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen3 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            {isOpen3 && (
              <div id="accordion-collapse-body-3" className="bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px]" aria-labelledby="accordion-collapse-heading-3">
                <div className="p-5 pl-0">
                <p className="mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            )}

            {/* Accordion Dropdown 4 */}
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className={isOpen4 ? 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-tl-[20px] rounded-tr-[20px]' : 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-[20px]'}
                onClick={() => setIsOpen4(!isOpen4)}
                aria-expanded={isOpen4}
                aria-controls="accordion-collapse-body-4"
              >
                <span className="text-[18px] sm:text-[25px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-4 py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen4 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            {isOpen4 && (
              <div id="accordion-collapse-body-4" className="bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px]" aria-labelledby="accordion-collapse-heading-4">
                <div className="p-5 pl-0">
                <p className="mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            )}

            {/* Accordion Dropdown 5 */}
            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                className={isOpen5 ? 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-tl-[20px] rounded-tr-[20px]' : 'mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt rounded-[20px]'}
                onClick={() => setIsOpen5(!isOpen5)}
                aria-expanded={isOpen5}
                aria-controls="accordion-collapse-body-5"
              >
                <span className="text-[18px] sm:text-[25px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-4 py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen5 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            {isOpen5 && (
              <div id="accordion-collapse-body-5" className="bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px]" aria-labelledby="accordion-collapse-heading-5">
                <div className="p-5 pl-0">
                <p className="mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Frequently;
