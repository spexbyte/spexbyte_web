import AboutHero from "./Hero";
import values from "./valuesData";
import ShowValues from "./ShowValues";
import Clients from "./Clients";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import SwiperCore, { Autoplay } from "swiper";

const AboutComponent = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="mt-10 flex flex-col items-center">
      <div className="xl:w-sw ">
        <AboutHero />
      </div>
      {/* values */}
      <div className="w-full px-4 my-10 xl:w-sw xl:px-0 xl:mx4">
        <h2 className="text-accent text-xl xl:text-3x mb-4 xl:text-2xl ">
          OUR VALUES
        </h2>
        <div className="xl:hidden xl:overflow-x-scroll xl:space-x-4 space-y-6 scrollbar-hide">
          {values &&
            values.map((value) => (
              <ShowValues
                key={value.id}
                icon={value.icon}
                headerText={value.headerText}
                mainText={value.mainText}
              />
            ))}
        </div>
        <div className="hidden xl:block">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {values &&
              values.map((value) => (
                <SwiperSlide key={value.id}>
                  <ShowValues
                    icon={value.icon}
                    headerText={value.headerText}
                    mainText={value.mainText}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      {/* clients */}
      <Clients />
      <div className="mx-4 xl:w-sw my-6">
        <div className="flex">
          <div className="bg-accent h-auto w-2"></div>
          <p className="text-xl ml-2">
            Seriously, work with us and it will be the best goddamn decision you
            ever took
          </p>
        </div>
        <p className="font-light text-lg">
          We are based in Ghana but our footprint is on the world. Are you bold
          enough to walk with us?
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
