import Button from './Button';
import heroImage from '../assets/heroImage.png'; 
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-black text-white p-6 lg:px-20 lg:py-10 flex gap-10 lg:gap-0 flex-wrap items-center">
      <div className="container mx-auto text-center lg:text-left lg:w-1/2">
        <h1 className="text-5xl font-bold mb-6 leading-tight">Welcome to <span className='text-pink'>AWS Student Community</span> Day - Kenya</h1>
        <div className="flex flex-col lg:flex-row gap-2  md:justify-start items-center lg:space-x-8 text-xl mb-8">
          <div className='flex items-center space-x-4'>
            <FaCalendar className='text-orange h-8'/>
            <span>1st June 2024</span>
          </div>
          <div className='flex items-center space-x-4 '>
            <FaLocationDot className='text-orange h-8'/>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
        <div className="flex space-x-4 md:space-x-8 mb-8 justify-center lg:justify-start">
          <div className="text-center">
            <span className="block text-3xl font-bold">200+</span>
            <span className="block text-lg">Attendees</span>
          </div>
          <div className="h-16 border-l-2 border-gray-dark"></div>
          <div className="text-center">
            <span className="block text-3xl font-bold">10</span>
            <span className="block text-lg">Speakers</span>
          </div>
          <div className="h-16 border-l-2 border-gray-dark"></div>
          <div className="text-center">
            <span className="block text-3xl font-bold">9</span>
            <span className="block text-lg">Talks</span>
          </div>
        </div>
        <Button text="Register Now" />
      </div>
      <div className="w-full lg:w-1/2 lg:pt-8">
        <img className="w-full" src={heroImage} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
// import Button from './Button';
// import heroImage from '../assets/heroImage.png'; 
// import { FaCalendar } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";

// const Hero = () => {
//   return (
//     <section className="bg-black text-white p-4 lg:px-20 lg:py-10 flex flex-wrap items-center">
//       <div className="container mx-auto text-center lg:text-left lg:w-1/2">
//         <h1 className="text-5xl font-bold mb-6 leading-tight">Welcome to <span className='text-pink'>AWS Student Community</span> Day - Kenya</h1>
//         <div className="flex  justify-start items-center space-x-8 text-xl mb-8">
//           <div className='flex items-center space-x-4'>
//             <FaCalendar className='text-orange h-8'/>
//             <span>1st June 2024</span>
//           </div>
//           <div className='flex items-center space-x-4 '>
//             <FaLocationDot className='text-orange h-8'/>
//             <span>Nairobi, Kenya</span>
//           </div>
          
//         </div>
//         <div className="flex space-x-8 mb-8">
//           <div className="text-center">
//             <span className="block text-3xl font-bold">200+</span>
//             <span className="block text-lg">Attendees</span>
//           </div>
//           <div className="h-16 border-l-2 border-gray-dark"></div>
//           <div className="text-center">
//             <span className="block text-3xl font-bold">10</span>
//             <span className="block text-lg">Speakers</span>
//           </div>
//           <div className="h-16 border-l-2 border-gray-dark"></div>
//           <div className="text-center">
//             <span className="block text-3xl font-bold">9</span>
//             <span className="block text-lg">Talks</span>
//           </div>
//         </div>
//         <Button text="Register Now" />
//       </div>
//       <div className="w-full lg:w-1/2 pt-">
//         <img className="w-full" src={heroImage} alt="Hero Image" />
//       </div>
//     </section>
//   );
// };

// export default Hero;


