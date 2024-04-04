import React from "react";
import HeaderSection from "../Home/HeaderSection";
import FooterSection from "../Home/FooterSection";
// import AdminSideNav from "../AdminLayout/AdminSideNav";
import AdminMainNav from "../AdminLayout/AdminMainNav";

import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const excludedPaths = ["/sign-in", "/sign-up"];
  const dashboardPaths = ["/dashboard"];
  const currentPath = location.pathname;

  const isExcludedPath = excludedPaths.some((path) =>
    currentPath.includes(path)
  );

  const isDashboardPath = dashboardPaths.some((path) =>
    currentPath.includes(path)
  );

  return (
    <>
      <div>
        {!isExcludedPath && !isDashboardPath && <HeaderSection />}
        <div>
          {/* Your main content here */}
          {isDashboardPath ? (
            <>
              <AdminMainNav />
              {/* <AdminSideNav /> */}
            </>
          ) : (
            <Outlet />
          )}
        </div>
        {!isExcludedPath && !isDashboardPath && <FooterSection />}
      </div>
    </>
  );
};

export default Layout;
