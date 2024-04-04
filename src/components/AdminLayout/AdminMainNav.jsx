import React from "react";
import { useNavigate } from "react-router-dom";

const AdminMainNav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <section className="flex pl-[250px] gap-x-9">
      <div onClick={handleClick}>shop</div>
      <div>shop</div>
      <div>shop</div>
      <div>shop</div>
      <div>shop</div>
      <div>shop</div>
    </section>
  );
};

export default AdminMainNav;
