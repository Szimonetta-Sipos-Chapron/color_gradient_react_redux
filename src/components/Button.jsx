import { PropTypes } from 'prop-types';

const Button = ({ text, onClick }) => {
  return (
    <button
      className='button'
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
