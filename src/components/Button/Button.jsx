import PropTypes from "prop-types";

export const Button = ({ onClick, children, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.node,
};
