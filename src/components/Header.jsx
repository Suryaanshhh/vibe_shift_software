import React from 'react';
import PillNav from './PillNav';
import logo from '../assets/dummylogo.png';
import { href } from 'react-router-dom';

const Header = () => {



  return (
    <div className="flex justify-center w-full">
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' },
          {label:'Story', href : '/successStories'},
          {label:'Who Are We', href:'/whoarewe'}
        ]}
        activeHref={window.location.pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
};

export default Header
