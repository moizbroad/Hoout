import React from "react";
import { useNavigate } from "react-router-dom";

const AdminSidenav = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleInboxClick = () => {
    navigate("/inbox");
  };

  const handleOrderListClick = () => {
    navigate("/order-list");
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  return (
    <>
      {/* <section className="max-w-[250px] py-10">
      <div onClick={handleDashboardClick} style={{ cursor: "pointer" }}>
        Dashboard
      </div>
      <div onClick={handleInboxClick} style={{ cursor: "pointer" }}>
        Inbox
      </div>
      <div onClick={handleOrderListClick} style={{ cursor: "pointer" }}>
        Order List
      </div>
      <div onClick={handleProductsClick} style={{ cursor: "pointer" }}>
        Products
      </div>
      <div>hwwhdw</div>
    </section> */}

      <div className="w-[240px] min-h-screen py-[13px] ">
        <a href="#" className="mb-[22px] block px-[24px]">
          {/* <img src={houtLogo} alt="" /> */}
        </a>
        <div className="flex flex-col items-start sideBarMain px-[24px]">
          <a
            href="#"
            className="h-[43px] text-14 font-medium sideActive"
            onClick={handleDashboardClick}
          >
            Dashboard
          </a>
          <a
            href="#"
            className="h-[43px] text-14 font-medium"
            onClick={handleProductsClick}
          >
            Products
          </a>
          <a
            href="#"
            className="h-[43px] text-14 font-medium"
            onClick={handleInboxClick}
          >
            Inbox
          </a>
          <a
            href="#"
            className="h-[43px] text-14 font-medium"
            onClick={handleOrderListClick}
          >
            Order Lists
          </a>
        </div>
      </div>
    </>
  );
};

export default AdminSidenav;
