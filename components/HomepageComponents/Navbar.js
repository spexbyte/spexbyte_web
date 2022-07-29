import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-2 xl:mx-40 mt-5">
      <div>
        <h1>LOGO</h1>
      </div>
      <div className="flex items-center">
        <div className=" hidden lg:block">
          <ul className="flex space-x-9 font-pr font-light list-none text-lg xl:space-x-12 ">
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
