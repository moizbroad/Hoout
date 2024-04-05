import React from "react";
import { useNavigate } from "react-router-dom";

const AdminMainNav = () => {
  const navigate = useNavigate();

//   const handleDashboardClick = () => {
//     navigate("/dashboard");
//   };

//   const handleInboxClick = () => {
//     navigate("/inbox");
//   };

  return (
    <section className="flex pl-[250px] gap-x-9">
      <div >Dashboard</div>
      <div >Inbox</div>
      <div>shop</div>
      <div>shop</div>
      <div>shop</div>
      <div>shop</div>
    </section>
  );
};

export default AdminMainNav;
