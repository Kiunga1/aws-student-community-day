import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-light text-black p-4 lg:px-20">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="hidden lg:flex space-x-4">
          <li><a href="#about" className="hover:text-gray">About</a></li>
          <li><a href="#venue" className="hover:text-gray">Venue</a></li>
          <li><a href="#agenda" className="hover:text-gray">Agenda</a></li>
          <li><a href="#speakers" className="hover:text-gray">Speakers</a></li>
          <li><a href="#tickets" className="hover:text-gray">Tickets</a></li>
          <li><a href="#team" className="hover:text-gray">Team</a></li>
          <li><a href="#sponsors" className="hover:text-gray">Sponsors</a></li>
        </ul>
        <div className='hidden lg:block '>
          <Button text="Register Now" className="  ml-4" />
        </div>
        
        <button className="lg:hidden self-end" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars } size="lg" />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 gap-10">
          <ul className="space-y-4 text-white text-2xl">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#venue" onClick={toggleMenu}>Venue</a></li>
            <li><a href="#agenda" onClick={toggleMenu}>Agenda</a></li>
            <li><a href="#speakers" onClick={toggleMenu}>Speakers</a></li>
            <li><a href="#tickets" onClick={toggleMenu}>Tickets</a></li>
            <li><a href="#team" onClick={toggleMenu}>Team</a></li>
            <li><a href="#sponsors" onClick={toggleMenu}>Sponsors</a></li>
          </ul>
          <Button text="Register Now" onClick={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;
