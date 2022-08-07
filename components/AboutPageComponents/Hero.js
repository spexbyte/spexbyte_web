const AboutHero = () => {
  return (
    <div>
      <h1 className="font-medium text-5xl xl:text-8xl">
        We are spexbyte<span className="text-accent">.</span>
      </h1>
      <p className="font-light text-lg xl:text-2xl xl:w-mtw">
        We are a small, passionate group of creatives who grew tired of the old,
        clunky digital experiences. No matter how crazy your idea, we are happy
        to talk through it.
      </p>
      <div>
        <h3 className="text-xl font-medium hover:cursor-pointer xl:text-3xl">
          OUR WORKS
        </h3>
        {/* Underline */}
        <div className="bg-accent w-auto h-1"></div>
      </div>
    </div>
  );
};

export default AboutHero;
