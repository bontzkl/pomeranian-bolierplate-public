import './style.css';

export function Hamburger({ onClick, isOpen }) {
  return (
    <>
      <div
        className={isOpen ? 'hamburger open' : 'hamburger'}
        onClick={onClick}
      >
        <div className={`burger burger1${isOpen ? ' burger11' : ''}`} />
        <div className={`burger burger2${isOpen ? ' burger22' : ''}`} />
        <div className={`burger burger3${isOpen ? ' burger33' : ''}`} />
      </div>
    </>
  );
}
