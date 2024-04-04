import React from "react";

const Switch = () => {
  return (
    <div className="flex gap-2  items-center">
      <input type="checkbox" id="switch" />
      <label for="switch"></label>
      <span className="block text-12">Remember me</span>
    </div>
  );
};

export default Switch;
