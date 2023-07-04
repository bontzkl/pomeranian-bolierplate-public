import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Hamburger } from '../Burger';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';

export const Layout = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className={hamburgerOpen ? 'layout with-sidebar' : 'layout'}>
        <AppHeader />
        <AppAside
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
        <main>
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </ErrorBoundary>
  );
};
