import React from "react";
import { useNavigate } from "react-router-dom";
import houtLogo from "../../assets/authImages/houtLogo.svg";

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
    <section className="">
      <div className="xl:w-[240px] lg:w-[220px] w-[200px] min-h-screen xl:py-[13px] py-[10px]">
        <a href="#" className="mb-[22px] block px-[24px]">
          <img src={houtLogo} alt="" className="xl:w-[160px] xl:h-[46px] lg:w-[135px] lg:h-[40px] w-[120px] h-[36px] mx-auto object-cover	" />
        </a>
        <div className="flex flex-col items-start sideBarMain xl:px-[24px] lg:px-[20px] px-[16px]">
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
    </section>
  );
};

export default AdminSidenav;
