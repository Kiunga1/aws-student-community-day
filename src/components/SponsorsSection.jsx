import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SponsorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sponsors = [
    '/path/to/sponsor1.png',
    '/path/to/sponsor2.png',
    '/path/to/sponsor3.png',
    '/path/to/sponsor4.png',
    '/path/to/sponsor5.png',
    '/path/to/sponsor6.png',
    '/path/to/sponsor7.png',
    '/path/to/sponsor8.png',
    '/path/to/sponsor9.png',
    '/path/to/sponsor10.png',
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sponsors.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id='sponsors' className="py-16 bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-black font-sans font-semibold mb-12">
          <span className="text-orange font-semibold text-xl">SPONSORS</span>
          <br />
          Our Esteemed Sponsors
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden justify-center items-center space-x-4">
            <button
              className="absolute left-10 p-2 rounded-full"
              onClick={handlePrevious}
            >
              <FaChevronLeft className="text-black h-4" />
            </button>
            <div className="flex space-x-4">
              {sponsors.slice(currentIndex, currentIndex + 5).map((sponsor, index) => (
                <div key={index} className="flex-shrink-0 w-40 h-40 bg-white p-4 rounded shadow-lg">
                  <img
                    src={sponsor}
                    alt={`Sponsor ${index + 1}`}
                    className="h-40 w-40 object-contain"
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute right-10 p-2 rounded-full"
              onClick={handleNext}
            >
              <FaChevronRight className="text-black h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
