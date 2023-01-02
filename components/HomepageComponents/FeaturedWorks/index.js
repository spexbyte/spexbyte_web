import data from "./data";
import FeaturedWorksCard from "./FeaturedWorksCard";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FeaturedWorks() {
  const title = useRef(); /*Targetting H3*/
  const desc = useRef(); /*Targetting H2*/
  const par = useRef(); /*Targetting paragraph*/
  const featuredTL = useRef(); /*Creating timeline*/
  const featuredCard = useRef();
  const cardContainer = useRef();
  const cardContainerTl = useRef();

  /*Setting up GSAP Animation timeline*/
  useEffect(() => {
    featuredTL.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: title.current,
          start: "top 95%",
        },
      })
      .from(title.current, { autoAlpha: 0, y: 50, duration: 0.8 })
      .from(desc.current, { autoAlpha: 0, y: 50, duration: 0.8 }, "-=0.5")
      .from(par.current, { autoAlpha: 0, x: -50, duration: 0.7 });
  }, []);

  // useEffect(() => {
  //   cardContainerTl.current = gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: cardContainer.current,
  //         start: "top 98%",
  //         markers: "true",
  //       },
  //     })
  //     .from(featuredCard.current, { y: 300, duration: 10.2 });
  // }, []);
  return (
    <section className="bg-secondary overflow-hidden py-10 xl:py-52 flex flex-col xl:justify-center xl:items-center">
      <div className="mx-4 xl:w-sw ">
        <h3 ref={title} className="text-accent text-xl xl:text-3xl invisible">
          FEATURED WORKS
        </h3>
        <h2 ref={desc} className="text-3xl text-primary xl:text-5xl invisible">
          From the archives
        </h2>
        <p
          ref={par}
          className="font-light text-lg text-primary xl:text-2xl pb-20"
        >
          We promised these businesses we would deliver -- and that is exactly
          what we did.{" "}
        </p>
        <div
          ref={cardContainer}
          className="pt-5 flex-row space-y-10 xl:space-y-36 xl:grid xl:grid-cols-2 xl:gap-x-52 "
        >
          {data &&
            data.map((work) => (
              <div className="" ref={featuredCard} key={work.id}>
                <FeaturedWorksCard triggerContainer={cardContainer} work={work} />
              </div>
            ))}
        </div>
      </div>
      <div className="mx-4 flex items-center justify-center mt-9 hover:cursor-pointer">
        <h2 className="text-primary text-xl underline-offset-8 underline decoration-accent decoration-2 xl:text-2xl">
          VIEW ALL
        </h2>
      </div>
    </section>
  );
}
