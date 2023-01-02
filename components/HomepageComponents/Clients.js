import Image from "next/image";
import {
  beyond_october,
  fragrance_hub,
  floras_hair,
  svetro,
  kaasuns_salon,
  ladies_point,
} from "../../assets";
export default function Clients() {
  return (
    <section className="bg-secondary text-primary flex justify-center">
      <div className="mx-4 py-10 xl:w-sw xl:py-52">
        <div>
          <h3 className="text-accent text-xl xl:text-3xl">OUR CLIENTS</h3>
          <h2 className="text-3xl xl:text-5xl xl:w-2/4">
            Some brands we have worked with
          </h2>
          <div className="flex mb-10 xl:mb-32">
            <div className="h-auto w-1 bg-accent"></div>
            <p className="font-light text-lg ml-4 text-primary xl:text-2xl xl:w-3/5">
              We help businesses to find their voice and build a digital
              identity that is worth a pretty penny—and the ugly one too.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center xl:place-items-start xl:grid-cols-3 xl:gap-x-64 xl:gap-y-24">
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="beyond_october_logo"
              src={beyond_october}
              layout="fill"
              placeholder="blur"
              blurDataURL={beyond_october}
            />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="fragrance_hub_logo"
              src={fragrance_hub}
              layout="fill"
              placeholder="blur"
              blurDataURL={beyond_october}
            />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="floras_hair_market_logo"
              src={floras_hair}
              layout="fill"
              placeholder="blur"
              blurDataURL={floras_hair}
            />
          </div>
          <div className="relative w-lwm h-lhm  xl:w-lwd xl:h-lhd">
            <Image alt="svetro_logo" src={svetro} layout="fill" />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="kaasuns_beauty_salon_logo"
              src={kaasuns_salon}
              layout="fill"
              placeholder="blur"
              blurDataURL={kaasuns_salon}
            />
          </div>
          <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
            <Image
              alt="the_ladies_point_logo"
              src={ladies_point}
              layout="fill"
              placeholder="blur"
              blurDataURL={ladies_point}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
