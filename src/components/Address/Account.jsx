import React from "react";
import InputField from "../Common/InputField";

const Account = () => {
  return (
    <div className="pt-[30px]">
      Account
      <div className="pt-8 w-[100%]">
        <InputField placeholder="Enter Email" label="Email" name="email" />
      </div>
      <div className="pt-5">
        <InputField
          placeholder="Enter Password"
          label="Confirm Password"
          name="password"
          type="password"
        />
      </div>
      |
      <div className="pt-5">
        <InputField
          placeholder="Enter Password"
          label="Confirm Password"
          name="password"
          type="password"
        />
      </div>
    </div>
  );
};

export default Account;
