import Image from "next/image";
import {
  beyond_october,
  fragrance_hub,
  floras_hair,
  svetro,
  kaasuns_salon,
  ladies_point,
} from "../../assets";

const Clients = () => {
  return (
    <div className="bg-secondary">
      <div className="mx-4 xl:w-sw ">
        <h2 className="text-accent">OUR CLIENTS</h2>
      </div>

      {/*CLIENTS CONTAINER*/}
      <div className="mx-4 xl:w-sw  grid grid-cols-2 place-items-center xl:place-items-start xl:grid-cols-3 xl:gap-x-64 xl:gap-y-24 ">
        <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
          <Image alt="beyond_october_logo" src={beyond_october} layout="fill" />
        </div>
        <div className="relative w-lwm h-lhm xl:w-lwd xl:h-lhd">
          <Image alt="fragrance_hub_logo" src={fragrance_hub} layout="fill" />
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
          <Image alt="the_ladies_point_logo" src={ladies_point} layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
