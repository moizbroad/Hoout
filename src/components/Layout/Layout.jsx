import React from 'react';
import HeaderSection from '../Home/HeaderSection';
import FooterSection from '../Home/FooterSection';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // Array of paths where you don't want to show the header and footer
  const excludedPaths = ['/sign-in', '/sign-up'];

  // Check if current path is in the excluded paths array
  const isExcludedPath = excludedPaths.some(path => location.pathname.includes(path));

  return (
    <>
      {!isExcludedPath && (
        <section>
          <div> <HeaderSection /></div>
          <div> <Outlet /></div>
          <div> <FooterSection /></div>
        </section>
      )}
      {isExcludedPath && (
        <section>
          <div> <Outlet /></div>
        </section>
      )}
    </>
  );
};

export default Layout;
