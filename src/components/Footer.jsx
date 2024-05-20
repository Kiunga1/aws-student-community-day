import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 h-24 grid">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Copyright Section */}
        <div className="text-md lg:text-xl font-sans font-semibold">
          &copy; {new Date().getFullYear()} AWS Community Day. All rights reserved.
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
            <FaFacebookF className='h-5'/>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
            <FaLinkedinIn className='h-7'/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
            <RiTwitterXLine  className='h-7'/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
            <MdOutlineMail className='h-7'/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
