import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProfileDD from "../../assets/DashboardImages/ProfileDD.svg";
import avatars from "../../assets/DashboardImages/avatars.svg";
import more from "../../assets/DashboardImages/more.svg";

const HeadLessDropDown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-black hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <div className="flex items-center gap-x-5">
            <div>
              <img src={avatars} />
            </div>
            <div className="flex-col">
              <div>Name Sur</div>
              <div>Admin</div>
            </div>
            <div>
              <img src={more} />
            </div>
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <ul className="">
              <li className="text-center">Profile</li>
              <li className="text-center pt-3">Login</li>
            </ul>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeadLessDropDown;
