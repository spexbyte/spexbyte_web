import Image from "next/image";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import HeroImg from '../../assets/hero.png'

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/anim_data.json"),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col mx-4  py-10 justify-center lg:mx-10 xl:justify-between xl:items-center xl:flex-row-reverse xl:px-10 xl:mx-40">
      <div className="flex justify-center ">
        <div className="relative w-mw h-mh xl:w-dw xl:h-dh mb-2">
          <Image src={HeroImg} alt='hero_image' layout='fill' />
        </div>
      </div>
      <div className="" >
        <h1 className="font-medium text-5xl md:text-7xl xl:text-8xl mb-0">
          Elevate your <br /> business<span className="text-accent">.</span>
        </h1>
        <p className="font-light text-lg md:text-xl xl:text-2xl xl:w-mtw  mt-6">
          We are a Ghanaian-based creative agency  that builds your
          digital experiences so that you can focus on scaling your
          business.
        </p>
        <p className="text-xl font-medium underline-offset-8 underline decoration-accent decoration-2 mt-6 xl:text-3xl">
          Lets introduce ourselves
        </p>
      </div>
    </section>
  );
};

export default Hero;
