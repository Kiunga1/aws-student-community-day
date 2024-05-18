import { useState, useEffect } from 'react';
import './css/Countdown.css'

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    // Get the event date and time in milliseconds
    const eventDateTime = new Date(eventDate).getTime();
    // Get the current date and time in milliseconds
    const currentDateTime = new Date().getTime();
    // Calculate the time difference between the event and current time
    const timeDifference = eventDateTime - currentDateTime;

    // Calculate the number of days remaining
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // Calculate the number of hours remaining
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Calculate the number of minutes remaining
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    // Calculate the number of seconds remaining
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
    <section className="countdown-section py-16 px-4 bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Event Starts In</h2>
        <div className="flex justify-center items-center space-x-8 text-6xl font-bold">
          <div className="flex items-center">
            <div className="text-center">
              <span>{timeLeft.days}</span>
              <span className="block text-lg">DAYS</span>
            </div>
          </div>
          <div className="h-16 w-px bg-white mx-4"></div> {/* Divider */}
          <div className="flex items-center">
            <div className="text-center">
              <span>{timeLeft.hours}</span>
              <span className="block text-2xl">HOURS</span>
            </div>
          </div>
          <div className="h-16 w-px bg-white mx-4"></div> {/* Divider */}
          <div className="flex items-center">
            <div className="text-center">
              <span>{timeLeft.minutes}</span>
              <span className="block text-lg">MINS</span>
            </div>
          </div>
          <div className="h-16 w-px bg-white mx-4"></div> {/* Divider */}
          <div className="flex items-center">
            <div className="text-center">
              <span>{timeLeft.seconds}</span>
              <span className="block text-lg">SECS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
