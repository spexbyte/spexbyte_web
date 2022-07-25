import { MenuIcon } from "@heroicons/react/outline";

import Logo from '../../assets/logo.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-2 xl:mx-40">
      <div>
        <Image width={40} height={41} src={Logo} alt='logo'/>
      </div>
      <div className="flex items-center">
        <div className=" hidden lg:block">
          <ul className="flex space-x-9 font-al list-none text-lg xl:space-x-12 ">
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Works</li>
            <li className="hover:cursor-pointer">Services</li>
            <li className="hover:cursor-pointer">Contact</li>
          </ul>
        </div>
        <MenuIcon className="h-10 lg:invisible " />
      </div>
    </nav>
  );
};

export default Navbar;
