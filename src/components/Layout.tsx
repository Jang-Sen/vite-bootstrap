import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout.css';
import Header from './Header.tsx';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
