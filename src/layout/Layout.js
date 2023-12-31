// Layout.js
import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function Layout({ children, onSearch, onSelectCategory }) {
  return (
    <div className="Layout">
      <NavBar onSearch={onSearch} onSelectCategory={onSelectCategory} />
      <div
        id="main-container"
        className=" container mx auto"
        style={{ height: '80vh' }}
      >
        {children}
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
