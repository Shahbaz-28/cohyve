import React from 'react';

const Struggling = () => {
  const challenges = [
    {
      imgSrc: '/images/cohyve-card-1.svg',
      title: 'Lack of design capacity',
      description: 'Multiple departments & people need designs, but not all tasks can be implemented in a timely manner.',
    },
    {
      imgSrc: '/images/cohyve-card-2.svg',
      title: 'Scaling design is difficult',
      description: 'No matter if freelancer, agency or in-house designer. It often takes months until the right resources are available.',
    },
    {
      imgSrc: '/images/cohyve-card-3.svg',
      title: 'Expensive & hard to plan',
      description: 'Projects with agencies & freelancers are supposed to offer relief, but often end in a cost and time chaos.',
    },
    {
      imgSrc: '/images/cohyve-card-4.svg',
      title: 'Slow Communication',
      description: 'Multiple departments & people need designs, but not all tasks can be implemented in a timely manner.',
    },
    {
      imgSrc: '/images/cohyve-card-5.svg',
      title: 'Fixed & Flexible contracts',
      description: 'No matter if freelancer, agency or in-house designer. It often takes months until the right resources are available.',
    },
    {
      imgSrc: '/images/cohyve-card-3.svg',
      title: 'Top talent is hard to find',
      description: 'Projects with agencies & freelancers are supposed to offer relief, but often end in a cost and time chaos.',
    },
  ];

  return (
    <section className="bg-col">
       <div className="container">
      <div className="flex flex-col items-center justify-center pt-24">
      <h2 className="text-[60px] text-[#FCFCD8] text-center font-semibold leading-[60px] mb-20 max-w-[800px]">
        Is your company struggling with design?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 max-w-5xl">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-[#30303066] backdrop-blur-xl text-center p-6 rounded-[35px]">
             <img src={challenge.imgSrc} className="w-16 h-16 mx-auto mb-7" />
            <h3 className="text-[#FCFCD8] text-[30px] leading-[31px] font-normal text-center mb-5">{challenge.title}</h3>
            <p className="text-[#FCFCD880] text-[16px] leading-[25px] font-normal text-center">{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Struggling;
