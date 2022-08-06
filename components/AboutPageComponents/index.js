import {
  beyond_october,
  fragrance_hub,
  floras_hair,
  svetro,
  kaasuns_salon,
  ladies_point,
} from "../../assets";
import Image from "next/image";

const AboutComponent = () => {
  return (
    <section className="mt-10 flex flex-col items-center">
      <div className="mx-4 xl:w-sw ">
        <h1 className="font-medium text-5xl xl:text-8xl">
          We are spexbyte<span className="text-accent">.</span>
        </h1>
        <p className="font-light text-lg xl:text-2xl xl:w-mtw">
          We are a small, passionate group of creatives who grew tired of the
          old, clunky digital experiences. No matter how crazy your idea, we are
          happy to talk through it.
        </p>
        <div>
          <h3 className="text-xl font-medium hover:cursor-pointer xl:text-3xl">
            OUR WORKS
          </h3>
          {/* Underline */}
          <div className="bg-accent w-auto h-1"></div>
        </div>
      </div>
      <div>{/* Values go here */}</div>


      {/*CLIENTS SECTON*/}
      <div className="bg-secondary">
        <div className="mx-4 xl:w-sw ">
            <h2 className="text-accent">
                OUR CLIENTS
            </h2>
        </div>

        {/*CLIENTS CONTAINER*/}
        <div className="mx-4 xl:w-sw  grid grid-cols-2 place-items-center xl:place-items-start xl:grid-cols-3 xl:gap-x-64 xl:gap-y-24 ">
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="beyond_october_logo"
              src={beyond_october}
              layout="fill"
            />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="fragrance_hub_logo"
              src={fragrance_hub}
              layout="fill"
            />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="floras_hair_market_logo"
              src={floras_hair}
              layout="fill"
            />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image alt="svetro_logo" src={svetro} layout="fill" />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="kaasuns_beauty_salon_logo"
              src={kaasuns_salon}
              layout="fill"
            />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="the_ladies_point_logo"
              src={ladies_point}
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 xl:w-sw border">
        <div>
          <div></div>
          <p>
            Seriously, work with us and it will be the best goddamn decision you
            ever took
          </p>
        </div>
        <p>
          We are based in Ghana but our footprint is on the world. Are you bold
          enough to walk with us?
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
