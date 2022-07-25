import { FaDribbble, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary font-al flex flex-col justify-center items-center py-10 ">
      <p className="text-5xl xl:text-7xl mb-0">
        Have an idea<span className="text-accent">?</span>
      </p>
      <p className="text-2xl  xl:text-3xl underline hover:cursor-pointer decoration-accent">
        Lets hear it
      </p>
      <div className="flex flex-row space-x-7 my-10 xl:space-x-9">
        <FaDribbble className="hover:cursor-pointer" size={22} />
        <FaInstagram className="hover:cursor-pointer" size={22} />
        <FaTwitter className="hover:cursor-pointer" size={22} />
        <FaLinkedin className="hover:cursor-pointer" size={22} />
      </div>
      <p className="">2022 Spexbyte. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
