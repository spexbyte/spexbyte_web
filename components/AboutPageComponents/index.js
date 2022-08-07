import AboutHero from "./Hero";
import values from "./valuesData";
import ShowValues from "./ShowValues";
import Clients from "./Clients";

const AboutComponent = () => {
  return (
    <section className="mt-10 flex flex-col items-center">
      <div className="mx-4 xl:w-sw ">
        <AboutHero />
      </div>
      {/* values */}
      <div>
        <h2>Our Values</h2>
        <div>
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
      </div>

      {/* clients */}
      <Clients />
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
