import React, { useCallback, useState } from "react";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  const [mobileMenuItem, setMobileMenu] = useState(false);
  const [accountMenuItem, setAccountMenu] = useState(false);

  const toogleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, []);
  const toogleAccountMenu = useCallback(() => {
    setAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-20 border-b-2 border-gray-800">
      <div className="flex flex-row px-4 py-4 transition">
        <img src="/images/logo.png" alt="logo" className="lg:h-8 h-6" />
        <div className="lg:flex flex-row hidden gap-7 ml-12">
          <NavItem name="Home" active />
          <NavItem name="Films" />
          <NavItem name="Series" />
          <NavItem name="New & Popular" />
          <NavItem name="My List" />
          <NavItem name="Browse by languages" />
        </div>
        <div
          onClick={toogleMobileMenu}
          className="lg:hidden flex flex-row relative items-center gap-2 ml-6 cursor-pointer"
        >
          <p className="text-white">Browse</p>
          <ChevronDownIcon className="w-5 text-white" />
          <MobileMenu visible={mobileMenuItem} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="cursor-pointer">
            <MagnifyingGlassIcon className="w-5 text-white" />
          </div>
          <div className="cursor-pointer">
            <BellIcon className="w-5 text-white" />
          </div>
          <div onClick={toogleAccountMenu} className="flex flex-row relative ml-auto gap-2 items-center cursor-pointer">
            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg overflow-hidden">
              <img src="/images/default-red.png" alt="profile" />
            </div>
            <ChevronDownIcon className="w-4 text-white" />
            <AccountMenu visible={accountMenuItem} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
