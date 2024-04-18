import React from "react";
import Camera from "../assets/DashboardImages/CameraImg.png";
import InputField from "../components/Common/InputField";
import Button from "../components/Common/Button";

const UserProfile = () => {
  return (
    <div>
      <div className="py-[48px] px-[170px] bg-[rgb(250,250,250)] h-full min-h-[86vh]">
        <div className="flex justify-center mb-[23px]">
          <div className="uploadImgWrap">
            <div className="imgGrayBox">
              <img src={Camera} alt="Profile" />
              <input
                type="file"
                // onChange={(e) => profileImage(e)}
              ></input>
            </div>
            <h6 className="text-14 text-yellow">Upload Photo</h6>
          </div>
        </div>

        {/* user profile card section */}
        {/* account detail card  */}
        <div className="myCard rounded-[4px] mb-[30px]">
          <h5 className="text-20 font-semibold mb-[30px]">Account Details</h5>
          <form action="">
            <div className="formSec">
              <div class=" flex gap-[20px] mb-[30px]">
                <div class="w-1/2 mb-6 md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="fName"
                  >
                    First name *
                  </label>
                  <InputField placeholder="First name" id="fName" required />
                </div>
                <div class="w-1/2">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="lastName"
                  >
                    last name *
                  </label>
                  <InputField placeholder="Last name" id="lastName" required />
                </div>
              </div>
              <div class=" flex gap-[20px] mb-[30px]">
                <div class="w-1/2 mb-6 md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="cName"
                  >
                    Company name
                  </label>
                  <InputField placeholder="Company name" id="cName" />
                </div>
                <div class="w-1/2">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="phoneNumber"
                  >
                    Phone number
                  </label>
                  <InputField placeholder="Phone number" id="phoneNumber" />
                </div>
              </div>
              <div class=" flex mb-[30px]">
                <div class="w-full mb-6 md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="email"
                  >
                    Email *
                  </label>
                  <InputField placeholder="Email" id="email" type="email" />
                </div>
              </div>
              <div>
                <Button
                  btnText="Save Changes"
                  paddingX="20px"
                  breakpoint="w-[207px]"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Password detail card  */}
        <div className="myCard rounded-[4px] mb-[30px]">
          <h5 className="text-20 font-semibold mb-[30px]">Password</h5>
          <form action="">
            <div className="formSec">
              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-1/2  md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="op"
                  >
                    Old password
                  </label>
                  <InputField
                    placeholder="Old password "
                    id="op"
                    type="password"
                  />
                </div>
              </div>
              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-1/2 md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="nPassword"
                  >
                    New password
                  </label>
                  <InputField placeholder="New password" id="nPassword" />
                </div>
                <div class="w-1/2">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="rnPassword"
                  >
                    Repeat new passsword
                  </label>
                  <InputField
                    placeholder="Repeat new passsword"
                    id="rnPassword"
                  />
                </div>
              </div>

              <div>
                {/* <button type="submit" className="bg-[#FBC700] block text-black text-center py-[19px] px-[25px] w-full font-semibold mb-[23px]">
                   Save Changes
                  </button> */}
                <Button
                  btnText="Save Changes"
                  paddingX="20px"
                  breakpoint="w-[207px]"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Delivery Address  */}
        <div className="myCard rounded-[4px] mb-[30px]">
          <h5 className="text-20 font-semibold mb-[30px]">Delivery Address</h5>
          <form action="">
            <div className="formSec">
              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-1/2  md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="stNumber"
                  >
                    Street and Number
                  </label>
                  <InputField placeholder="Street and Number" id="stNumber" />
                </div>
                <div class="w-1/2">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="zCode"
                  >
                    Zip Code
                  </label>
                  <InputField placeholder="12345" id="zCode" type="number" />
                </div>
              </div>
              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-1/2 md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="city"
                  >
                    City
                  </label>
                  <InputField placeholder="DropDown replace plz" id="city" />
                </div>
                <div class="w-1/2">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="country"
                  >
                    Country
                  </label>
                  <InputField placeholder="DropDown replace plz" id="country" />
                </div>
              </div>

              <div>
                <Button
                  btnText="Save Changes"
                  paddingX="20px"
                  breakpoint="w-[207px]"
                />
              </div>
            </div>
          </form>
        </div>
        {/* Invoice Address  */}
        <div className="myCard rounded-[4px] mb-[30px]">
          <h5 className="text-20 font-semibold mb-[30px]">Invoice Address</h5>
          <form action="">
            <div className="formSec">
              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-1/2  md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="stNumber"
                  >
                    Street and Number
                  </label>
                  <InputField placeholder="Street and Number" id="stNumber" />
                </div>
                <div class="w-1/2">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="zCode"
                  >
                    Zip Code
                  </label>
                  <InputField placeholder="12345" id="zCode" type="number" />
                </div>
              </div>
              <div class=" flex gap-[20px] mb-[24px]">
                <div class="w-1/2 md:mb-0">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="city"
                  >
                    City
                  </label>
                  <InputField placeholder="DropDown replace plz" id="city" />
                </div>
                <div class="w-1/2">
                  <label
                    class="uppercase text-black text-xs font-semibold mb-[12px] block"
                    for="country"
                  >
                    Country
                  </label>
                  <InputField placeholder="DropDown replace plz" id="country" />
                </div>
              </div>

              <div>
                <Button
                  btnText="Save Changes"
                  paddingX="20px"
                  breakpoint="w-[207px]"
                />
              </div>
            </div>
          </form>
        </div>
        {/* user profile card section end */}
      </div>
    </div>
  );
};

export default UserProfile;
