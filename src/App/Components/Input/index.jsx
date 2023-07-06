import './styles.css';

export const Input = ({ handleOnChange }) => {
  return (
    <>
      <input type="text" onChange={handleOnChange} className="styled-input" />
    </>
  );
};
