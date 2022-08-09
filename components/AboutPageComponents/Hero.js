import Image from "next/image";

const AboutHero = () => {
  return (
    <div>
      <div className="mb-10">
        <div className=" relative w-iw h-ih xl:w-sw xl:h-idh">
          <Image src="/assets/team.jpg" layout="fill" alt="team photo" />
        </div>
      </div>
      <h1 className="font-medium text-5xl xl:text-7xl">
        We are spexbyte<span className="text-accent">.</span>
      </h1>
      <p className="font-light text-lg xl:text-2xl xl:w-3/5">
        We are a small, passionate group of creatives who grew tired of the old,
        clunky digital experiences. No matter how crazy your idea, we are happy
        to talk through it.
      </p>
      <div className="w-fit mt-4">
        <h3 className="text-lg font-medium xl:text-xl hover:cursor-pointer">
          OUR WORKS
        </h3>
        {/* Underline */}
        <div className="bg-accent w-auto h-1"></div>
      </div>
    </div>
  );
};

export default AboutHero;
