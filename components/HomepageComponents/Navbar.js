import { MenuIcon } from "@heroicons/react/outline";
import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";

const Navbar = () => {
  const logoRef = useRef();
  const link1 = useRef();
  const link2 = useRef();
  const link3 = useRef();
  const link4 = useRef();
  const navTL = useRef();

  useEffect(() => {
    navTL.current = gsap
      .timeline()
      .from(logoRef.current, { autoAlpha: 0, y: -50, duration: 0.7 })
      .from(link1.current, { autoAlpha: 0, y: -50, duration: 0.4 }, "-=0.2")
      .from(link2.current, { autoAlpha: 0, y: -50, duration: 0.4 }, "-=0.2")
      .from(link3.current, { autoAlpha: 0, y: -50, duration: 0.4 }, "-=0.2")
      .from(link4.current, { autoAlpha: 0, y: -50, duration: 0.4 }, "-=0.2");
  }, []);

  return (
    <nav className="flex flex-row items-center justify-between px-2 xl:mx-40 mt-5">
      <div>
        <h1 ref={logoRef} className="invisible">
          LOGO
        </h1>
      </div>
      <div className="flex items-center">
        <div className=" hidden lg:block">
          <ul className="flex space-x-9 font-pr font-light list-none text-lg xl:space-x-12 ">
            <li ref={link1} className="invisible hover:cursor-pointer">
              About
            </li>
            <li ref={link2} className="invisible hover:cursor-pointer">
              Works
            </li>
            <li ref={link3} className="invisible hover:cursor-pointer">
              Services
            </li>
            <li ref={link4} className="invisible hover:cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <MenuIcon className="h-10 lg:invisible " />
      </div>
    </nav>
  );
};

export default Navbar;
