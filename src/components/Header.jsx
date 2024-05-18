
import Button from './Button';

const Header = () => {
  return (
    <header className="bg-gray-light text-black p-4 md:px-8">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray">About</a></li>
          <li><a href="#venue" className="hover:text-gray">Venue</a></li>
          <li><a href="#agenda" className="hover:text-gray">Agenda</a></li>
          <li><a href="#speakers" className="hover:text-gray">Speakers</a></li>
          <li><a href="#tickets" className="hover:text-gray">Tickets</a></li>
          <li><a href="#team" className="hover:text-gray">Team</a></li>
          <li><a href="#sponsors" className="hover:text-gray">Sponsors</a></li>
        </ul>
        <Button text="Register Now" className="ml-4" />
      </nav>
    </header>
  );
};

export default Header;
