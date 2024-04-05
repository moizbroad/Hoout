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
  const excludedPaths = ["/sign-in", "/sign-up"];
  const dashboardPaths = ["/dashboard"];
  const inboxPath = ["/inbox"];
  const orderListPath = ["/order-list"];
  const productsPath = ["/products"];
  const currentPath = useLocation().pathname;

  const isExcludedPath = excludedPaths.some((path) =>
    currentPath.includes(path)
  );

  const isDashboardPath = dashboardPaths.some((path) =>
    currentPath.includes(path)
  );

  const isInboxPath = inboxPath.some((path) => currentPath.includes(path));

  const isOrderListPath = orderListPath.some((path) =>
    currentPath.includes(path)
  );

  const isProductsPath = productsPath.some((path) =>
    currentPath.includes(path)
  );

  return (
    <>
      <div>
        {!isExcludedPath &&
          !isDashboardPath &&
          !isInboxPath &&
          !isOrderListPath &&
          !isProductsPath && <HeaderSection />}
        <div>
          {/* Your main content here */}
          {isDashboardPath ? (
            <>
              <AdminMainNav />
              <AdminSideNav />
              <Outlet />
            </>
          ) : isInboxPath ? (
            <>
              <AdminMainNav />
              <AdminSideNav />
              <Inbox />
            </>
          ) : isOrderListPath ? (
            <>
              <AdminMainNav />
              <AdminSideNav />
              <OrderList />
            </>
          ) : isProductsPath ? (
            <>
              <AdminMainNav />
              <AdminSideNav />
              <Products />
            </>
          ) : (
            <Outlet />
          )}
        </div>
        {!isExcludedPath &&
          !isDashboardPath &&
          !isInboxPath &&
          !isOrderListPath &&
          !isProductsPath && <FooterSection />}
      </div>
    </>
  );
};

export default Layout;
