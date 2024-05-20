import { useState, useEffect } from 'react';
import './css/Countdown.css';

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const eventDateTime = new Date(eventDate).getTime();
    const currentDateTime = new Date().getTime();
    const timeDifference = eventDateTime - currentDateTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section py-8 px-4 bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Event Starts In</h2>
        <div className="flex justify-center items-center space-x-4 md:space-x-8 text-3xl sm:text-4xl md:text-6xl font-bold">
          <div className="flex items-center">
            <div className="text-center">
              <span>{timeLeft.days}</span>
              <span className="block text-sm md:text-lg">DAYS</span>
            </div>
          </div>
          <div className="h-16 w-px bg-white"></div> {/* Divider */}
          <div className="flex items-center">
            <div className="text-center">
              <span>{timeLeft.hours}</span>
              <span className="block text-sm md:text-lg">HOURS</span>
            </div>
          </div>
          <div className="h-16 w-px bg-white"></div> {/* Divider */}
          <div className="flex items-center">
            <div className="text-center">
              <span>{timeLeft.minutes}</span>
              <span className="block text-sm md:text-lg">MINS</span>
            </div>
          </div>
          <div className="h-16 w-px bg-white"></div> {/* Divider */}
          <div className="flex items-center">
            <div className="text-center">
              <span>{timeLeft.seconds}</span>
              <span className="block text-sm md:text-lg">SECS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;

