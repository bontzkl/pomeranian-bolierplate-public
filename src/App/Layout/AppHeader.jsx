import React from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { Hamburger } from '../Burger';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader({ hamburgerOpen, setHamburgerOpen }) {
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <header>
      <div>
        <Hamburger onClick={toggleHamburger} isOpen={hamburgerOpen} />
      </div>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>coś</div>
    </header>
  );
}
