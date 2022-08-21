import data from "./data";
import ServiceCard from "./ServiceCard";

export default function ServiceComponents() {
  return (
    <section className="mx-4 flex justify-center">
      <div className="xl:w-sw ">
        <div className="space-y-3">
          <h3 className="text-accent text-xl xl:text-3xl ">OUR SERVICES</h3>
          <h2 className="text-3xl font-semibold xl:text-5xl w-3/4">
            Let us do the heavy lifting
          </h2>
          <div className="flex ">
            <div className="bg-accent h-auto w-2 mr-2"></div>
            <p className="font-light text-lg xl:text-2xl xl:w-2/4">
              This may not be Hogwarts, but we do add a touch of magic to your
              business.
            </p>
          </div>
          <p className="text-lg font-light xl:w-3/4 xl:text-xl">
            <h2 className="text-xl font-medium mb-2 text-gray-500 xl:text-2xl">
              Keeping you and your clients happy{" "}
              <span>through strategic problem solving</span>
            </h2>
            We are problem solvers. We approach every project with an open and
            curious mind. We ask the right questions to find the root of your
            business problem, and provide solutions specifically tailored for
            the growth of your business.
            <span className="my-4 block"></span>
            We know your clients are important to you, so our solutions are
            strategically implemented to bring in new clients while keeping the
            old clients happy, and you happy as well. Because guess what? You
            are our client as well! And we care about you just as much as you
            care about them.
            <h2 className="text-xl font-medium my-2 text-gray-500 xl:text-2xl">
              Digital products that look good and work even better
            </h2>
            So no wants a boring app, or site or unmemorable logos. We are a
            design-first agency; what does that mean? Well, simply put,
            beautiful User Interfaces coupled with the very best of User
            Experience practices are at the core of every project. You are
            guaranteed functIonality without sacrificing aesthetics.
          </p>
        </div>
        <hr className="my-20" />
        <div className="my-10">
          <h3 className="font-semibold text-lg xl:text-4xl mb-4">
            How do we achieve this? <br />{" "}
            <span className="font-light"> Well through...</span>{" "}
          </h3>

          <div className=" space-y-12 lg:space-y-24 ">
            {data &&
              data.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// space-y-8 sm:space-y-0 sm:grid md:grid-cols-2 sm:gap-x-16 sm:gap-16
