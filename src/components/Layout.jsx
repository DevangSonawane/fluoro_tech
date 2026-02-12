import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorFollower from './CursorFollower';

const Layout = ({ children }) => {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Fluoro Tech Engineering Works',
    'url': 'https://fluorotech.in',
    'logo': 'https://fluorotech.in/logonew.png',
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': '+91-8149060220',
      'contactType': 'customer service',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Hindi', 'Marathi']
    }],
    'sameAs': []
  };
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <CursorFollower />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    </div>
  );
};

export default Layout;
