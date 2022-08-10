import { FaDribbble, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { logo } from "../../assets";
import Image from "next/image";

function Menu({ showMenu, handleClick }) {
  const showToggle = showMenu;

  const animMenu = useRef();
  const title = useRef();
  const about = useRef();
  const works = useRef();
  const services = useRef();
  const contact = useRef();
  const logos = useRef();

  /*Creating timeline */
  const animTL = useRef();
  useEffect(() => {
    animTL.current = gsap.timeline({
      paused: true,
    });
    animTL.current
      .from(animMenu.current, { autoAlpha: 0, x: 400, duration: 0.3})
      .from(title.current, { autoAlpha: 0, x: -50,duration:0.4 })
      .from(about.current, {autoAlpha:0, y: 42, duration: 0.4 })
      .from(works.current, {autoAlpha:0,y:42, duration:0.4},'-=0.2')
      .from(services.current, {autoAlpha:0,y:42, duration:0.4},'-=0.2')
      .from(contact.current, {autoAlpha:0,y:42, duration:0.4},'-=0.2')
      .from(logos.current, {autoAlpha:0,x:-42, duration:0.2})
  }, []);

  useEffect(() => {
    showToggle ? animTL.current.play() : animTL.current.reverse();
  }, [showToggle]);

  return (
    <section
      ref={animMenu}
      className="invisible w-screen h-screen flex flex-col justify-between xl:invisible fixed z-10 bg-primary"
    >
      <div className=" flex justify-between items-center mx-4 my-5">
        <div><Image alt='logo_image' src={logo} width={40} height={41}/></div>
        <GrClose onClick={handleClick} size={30} />
      </div>
      <div className="flex flex-col ml-10  mb-40">
        <h1 ref={title} className=" text-accent text-2xl">
          MENU
        </h1>
        <div className="text-4xl space-y-8 mt-4">
          <div className="overflow-hidden">
            <p ref={about} className="invisible">About</p>
          </div>
          <div className="overflow-hidden">
            <p ref={works} className='invisible'>Works</p>
          </div>
          <div className="overflow-hidden">
            <p ref={services} className='invisible'>Services</p>
          </div>
          <div className="overflow-hidden">
            <p ref={contact} className='invisible'>Contact</p>
          </div>
        </div>
      </div>
      <div
        ref={logos}
        className="flex text-gray-800 justify-center flex-row space-x-10 my-10 mb-20"
      >
        <FaDribbble size={26} />
        <FaInstagram size={26} />
        <FaTwitter size={26} />
        <FaLinkedin size={26} />
      </div>
    </section>
  );
}

export default Menu;
