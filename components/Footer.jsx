import { FaDribbble, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary font-al flex flex-col justify-center items-center ">
      <p className="text-5xl xl:text-7xl mb-0 mt-10">
        Have an idea<span className="text-accent">?</span>
      </p>
      <Link href="/contact">
        <p className="text-2xl  xl:text-3xl underline hover:cursor-pointer decoration-accent">
          Lets hear it
        </p>
      </Link>
      <div className="text-gray-200 flex flex-row space-x-7 my-10 xl:space-x-9">
        <Link href="">
          <FaDribbble className="hover:cursor-pointer" size={22} />
        </Link>
        <Link href="https://www.instagram.com/spexbyte/">
          <FaInstagram className="hover:cursor-pointer" size={22} />
        </Link>
        <Link href="https://twitter.com/spexbyte">
          <FaTwitter className="hover:cursor-pointer" size={22} />
        </Link>
        <Link href="">
          <FaLinkedin className="hover:cursor-pointer" size={22} />
        </Link>
      </div>
      <p className="mb-10">2022 Spexbyte. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
