import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorFollower from './CursorFollower';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <CursorFollower />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
