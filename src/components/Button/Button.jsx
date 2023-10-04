import PropTypes from "prop-types";

export const Button = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
