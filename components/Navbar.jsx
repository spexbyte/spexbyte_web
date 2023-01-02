import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
import Menu from "./Menu";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from '../assets/logo.png'
import Image from "next/image";

const Navbar = () => {
  const logoRef = useRef();
  const link1 = useRef();
  const link2 = useRef();
  const link3 = useRef();
  const link4 = useRef();
  const navTL = useRef();

  /*Adding MenuState*/
  const [menuClicked, setMenuClicked] = useState(false);

  function handleMenuClick() {
    // setMenuClicked(!menuClicked)
    setMenuClicked((prevClick) => !prevClick);
    console.log("Menu clicked");
  }

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
    <>
      <Menu showMenu={menuClicked} handleClick={handleMenuClick} />
      <nav className="flex flex-row items-center justify-between px-2 xl:mx-40 pt-5">
        <div>
          <h1 ref={logoRef} className="invisible">
            <Link href="/">
              <Image src={Logo} width={40} height={40} objectFit='cover'/>
            </Link>
          </h1>
        </div>
        <div className="flex items-center">
          <div className=" hidden lg:block">
            <ul className="flex space-x-9 font-pr font-light list-none text-lg xl:space-x-12 ">
              <li ref={link1} className="invisible hover:cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li ref={link2} className="invisible hover:cursor-pointer">
                <Link href="/works">Works</Link>
              </li>
              <li ref={link3} className="invisible hover:cursor-pointer">
                <Link href="/services">Services</Link>
              </li>
              <li ref={link4} className="invisible hover:cursor-pointer">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <MenuIcon onClick={handleMenuClick} className="h-10 lg:invisible " />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
