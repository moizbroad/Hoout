import React from "react";
import InputField from "../Common/InputField";

const Account = () => {
  return (
   <>
    <section className=" md:pt-10 ">
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
                <h2 className="text-[20px] lg:text-xl font-semibold">
                 Account Details
                </h2>
                  <div className="w-full md:w-1/2">
                    <InputField
                      placeholder="Enter Name"
                      label="First name*"
                    
                      name="First name"
                      //       value={userInformation.email}
                      // onChange={(value) => {
                      //   setLoginData((prev) => ({
                      //     ...prev, email: value.target.value
                      //   }))
                      // }
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <InputField
                      placeholder="Last Name"
                      label="Last Name*"
                      
                      name="lastName"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 pt-5">
                  <div className="w-full md:w-1/2">
                    <InputField
                      placeholder="Company Name"
                      label="Company Name"
                     
                      name="CompanyName"
                      type="text"
                    />
                  </div>
                  
                <div className="w-full md:w-1/2">
                  <InputField
                    placeholder="Email"
                    label="Email *"
                    
                    name="email"
                    type="Email"
                  />
                </div>
                  <div className="w-full md:w-1/2">
                    <InputField
                      placeholder="Phone Number"
                      label="Phone Number"
                    
                      name="phone"
                      type="number"
                    />
                  </div>
                </div>

              </section>
              {/* Second Section  Delivery address  */}
              <section className="pt-8 pb-8">
                <h2 className="text-[20px] lg:text-xl font-semibold">
                 Password
                </h2>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 pt-5">
                  <div className="w-full md:w-1/2">
                    <InputField
                      placeholder="Old password"
                      label="Old password"
                      name="OldPassword"
                      type="Password"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <InputField
                      placeholder="New password"
                      label="New password"
                      name="newPassword"
                      type="password"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <InputField
                      placeholder="Repeat new passsword"
                      label="Repeat new passsword"
                      name="RepeatNewPasssword"
                      type="password"
                    />
                  </div>
                </div>
              </section>
             
          
            
   </>
  );
};

export default Account;
