
import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button className="bg-orange text-black py-2 px-4 rounded-md hover:bg-orange-light">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
