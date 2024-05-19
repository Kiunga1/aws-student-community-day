import React from 'react';
import Button from './Button';
import { IoSettingsSharp } from "react-icons/io5";

const TicketSection = () => {
  return (
    <section className="bg-black font-sans text-white py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-orange text-lg">TICKETS</span>
          <br />
          Secure Your Spot
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 ">
          <div className="bg-white text-black rounded-lg shadow-lg p-11 flex flex-col items-center justify-between h-80 w-72">
            <div className="text-orange mb-4">
              <i className="fas fa-badge-check text-5xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Standard Pass</h3>
            <ul className="text-center">
              <li className='mb-2'>All sessions and talks</li>
              <li className='mb-2'>Network and connect</li>
              <li className='mb-2'>Light refreshments</li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-11 flex flex-col items-center justify-between h-80 w-72">
            
            <h3 className="text-xl font-bold mb-2">Pro Pass</h3>
            <IoSettingsSharp className='h-16 w-16 text-orange'/>
            <ul className="">
              <li className='mb-2'>All benefits in standard</li>
              <li className='mb-2'>Exclusive workshop</li>
              <li className='mb-2'>Priority networking lunch</li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-11 flex flex-col items-center justify-between h-80 w-72">
            <div className="text-orange mb-4">
              <i className="fas fa-brain text-5xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Visionary Pass</h3>
            <ul className="text-center">
              <li className='mb-2'>All pro benefits</li>
              <li className='mb-2'>Event t-shirt</li>
              <li className='mb-2'>AWS Course Voucher</li>
              <li className='mb-2'>Mentor session</li>
            </ul>
          </div>
        </div>
        {/* <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg">
          Buy Ticket
        </button> */}
        <Button text="Buy Ticket" className='mt-8 px-6 py-3' />
      </div>
    </section>
  );
};

export default TicketSection;
