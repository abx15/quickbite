import React from 'react'
import Heading from '../Heading/Heading'
import {
  TbCircleDashedNumber1,
  TbCircleDashedNumber2,
  TbCircleDashedNumber3,
  TbCircleDashedNumber4
} from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';

const Process = () => {

  const steps = [
    {
      id: 1,
      number: <TbCircleDashedNumber1 />,
      title: 'Sourcing',
      para: 'It is a long established fact that a reader',
      icon: <PiPlant />
    },
    {
      id: 2,
      number: <TbCircleDashedNumber2 />,
      title: 'Manufacturing',
      para: 'It is a long established fact that a reader',
      icon: <MdOutlinePrecisionManufacturing />
    },
    {
      id: 3,
      number: <TbCircleDashedNumber3 />,
      title: 'Quality Control',
      para: 'It is a long established fact that a reader',
      icon: <SlBadge />
    },
    {
      id: 4,
      number: <TbCircleDashedNumber4 />,
      title: 'Logistics',
      para: 'It is a long established fact that a reader',
      icon: <BsTruck />
    },
  ];

  const renderSteps = steps.map(item => (
    <div
      key={item.id}
      className={`flex flex-col items-center text-center flex-1 transition-all duration-500 ${item.id % 2 === 0 ? '-mt-20' : ''}`}
    >
      <span className='flex justify-center items-center w-20 h-20 text-6xl rounded-full bg-zinc-800 text-white outline outline-[3px] outline-offset-4 outline-dashed outline-zinc-800'>
        {item.number}
      </span>

      <div className='flex flex-col items-center mt-6 space-y-3'>
        <span className='flex justify-center items-center rounded-full text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-14 h-14'>
          {item.icon}
        </span>
        <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
        <p className='text-zinc-600 max-w-[220px]'>{item.para}</p>
      </div>
    </div>
  ));

  return (
    <section className='py-20 px-6'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='w-fit mr-auto'>
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className='flex flex-wrap items-start justify-center gap-10 pt-60'>
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;
