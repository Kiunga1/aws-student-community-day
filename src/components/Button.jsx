
import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button className="bg-orange text-black rounded-md hover:bg-orange-light  px-6 py-3">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
