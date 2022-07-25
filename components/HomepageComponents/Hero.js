import Image from "next/image";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

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
    <section className="flex flex-col py-10 justify-center items-center sm:flex-row-reverse sm:justify-between xl:mx-40 h-screen">
      <div className="flex justify-center pt-12 ">
        <div className="w-fit" ref={container}></div>
      </div>
      <div>
        <h1 className="font-al text-5xl font-medium mb-0">
          Elevate your <br /> business<span className="text-accent">.</span>
        </h1>
        <p className="font-la font-extralight text-xl mt-6">
          We are a Ghanaian-based creative agency <br /> that builds your
          digital experiences so that <br /> you can focus on scaling your
          business.
        </p>
        <p className="font-al text-2xl font-medium underline decoration-accent mt-6">
          Lets introduce ourselves
        </p>
      </div>
    </section>
  );
};

export default Hero;
