import React from "react";
import HeaderSection from "../Home/HeaderSection";
import FooterSection from "../Home/FooterSection";
import AdminSideNav from "../AdminLayout/AdminSideNav";
import AdminMainNav from "../AdminLayout/AdminMainNav";
import Inbox from "../../Pages/Inbox";
import OrderList from "../../Pages/OrderList"; // Import OrderList component
import Products from "../../Pages/Products"; // Import Products component
import { Outlet, useLocation } from "react-router-dom";
const Layout = () => {
  const authPaths = ["/sign-in", "/sign-up"];
  const adminPaths = ["/dashboard", "/inbox", "/order-list", "/products"];
  const currentPath = useLocation().pathname;
  const hasSidnav = adminPaths.includes(currentPath);
  const hasHeaderFooter = authPaths.includes(currentPath);
  return (
    <>
      <div>
        <div>
          {hasSidnav ? (
            <>
              <div className="flex">
                <div className="min-h-screen">
                  <AdminSideNav />
                </div>
                <div className="flex-1 min-h-screen">
                  {" "}
                  <AdminMainNav />
                  <Outlet />
                </div>
              </div>
            </>
          ) : (
            <>
              {!hasHeaderFooter ? (
                <>
                  <HeaderSection />
                  <Outlet />
                  <FooterSection />
                </>
              ) : (
                <>
                  <Outlet />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Layout;