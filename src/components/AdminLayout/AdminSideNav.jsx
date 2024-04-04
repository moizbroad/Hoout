import React from "react";
import { useNavigate } from "react-router-dom";

const AdminSidenav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <section className="max-w-[250px] py-10">
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        Dashboard
      </div>
      <div>hwwhdw</div>
      <div>hwwhdw</div>
      <div>hwwhdw</div>
      <div>hwwhdw</div>
    </section>
  );
};

export default AdminSidenav;
