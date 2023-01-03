import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import lottie from "lottie-web";
import { gsap } from "gsap/dist/gsap";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  const container = useRef(null);
  const router = useRouter();

  const title = useRef(); /*Targetting H1*/
  const body = useRef(); /*Targetting paragraph*/
  const but = useRef(); /*Targetting button*/
  const image = useRef(); /*Targetting image*/
  const underline = useRef(); /*Targetting underline*/
  const heroTL = useRef(); /*Creating timeline*/

  /*Setting up GSAP Animation timeline*/
  useEffect(() => {
    heroTL.current = gsap
      .timeline()
      .from(image.current, { autoAlpha: 0, y: 100, duration: 0.5 })
      .from(title.current, { autoAlpha: 0, y: 200, duration: 0.8 }, "-=0.2")
      .from(body.current, { autoAlpha: 0, y: 200, duration: 0.8 }, "-=0.4")
      .from(but.current, { autoAlpha: 0, duration: 0.7 })
      .from(underline.current, { autoAlpha: 0, width: 0, delay: 0.1 });
  }, []);

  /*Setting up Lottie Animation*/
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
    <section className="flex flex-col mx-4  py-10 justify-center lg:mx-10 xl:justify-between xl:items-center xl:flex-row-reverse xl:px-10 xl:mx-40 xl:h-screen">
      <div className="flex justify-center ">
        <div
          ref={image}
          className="relative w-mw h-mh xl:w-dw xl:h-dh mb-2 invisible"
        >
          <Image
            src={HeroImg}
            alt="hero_image"
            layout="fill"
            placeholder="blur"
            blurDataURL={HeroImg}
          />
        </div>
      </div>
      <div className="">
        <div className="overflow-hidden">
          <h1
            ref={title}
            className="font-medium text-5xl md:text-7xl xl:text-8xl mb-0 invisible"
          >
            Elevate your <br /> business<span className="text-accent">.</span>
          </h1>
        </div>
        <div className="overflow-hidden">
          <p
            ref={body}
            className="font-light text-lg md:text-xl xl:text-2xl xl:w-mtw  mt-6 invisible"
          >
            We are a Ghanaian-based creative agency that builds your digital
            experiences so that you can focus on scaling your business.
          </p>
        </div>
        <div className="w-fit">
          <p
            ref={but}
            className="text-xl font-medium hover:cursor-pointer  mt-6 xl:text-3xl invisible"
            onClick={() => router.push("/about")}
          >
            Lets introduce ourselves
          </p>
          <div
            ref={underline}
            className=" invisible bg-accent w-auto h-1"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
