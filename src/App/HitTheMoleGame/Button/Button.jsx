import './Button.css';

export const Button = ({ children, isActive, onClick, isDisabled }) => {
  return (
    <button
      className={`button ${isActive ? 'button-active' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
