import data from "./data";
import ServiceCard from "./ServiceCard";

// const someStuff  ={
//   stuffA: 'We are problem solvers. We approach every project with an open and
//   curious mind. We ask the right questions to find the root of your
//   business problem, and provide solutions specifically tailored for
//   the growth of your business.<span className="my-4 block"></span> We know your clients are important to you, so our solutions are
//   strategically implemented to bring in new clients while keeping the
//   old clients happy, and you happy as well. Because guess what? You
//   are our client as well! And we care about you just as much as you
//   care about them.'
// }

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
              {/* I like this line but I am not sure if we can keep it */}
              {/* This may not be Hogwarts, but we do add a touch of magic to your
              business. */}
              Leave the hard work to us and focus on what matters most to you.
            </p>
          </div>
          <p className="text-lg font-light xl:w-3/4 xl:text-xl">
            <h2 className="text-xl font-medium mb-2 text-gray-500 xl:text-2xl">
              Keeping you and your clients happy{" "}
              <span>through strategic problem solving</span>
            </h2>
            At our company, we specialize in providing tailored solutions to
            business problems. We approach each project with an open and curious
            mindset, using specific methods to uncover the root cause of your
            business issues.
            <span className="my-4 block"></span>
            Our solutions are designed to bring in new clients and keep existing
            ones happy, all while prioritizing your needs as our client. In
            addition, we use active, direct language to communicate our ideas
            and offer a range of services to ensure the growth and success of
            your business.
            <h2 className="text-xl font-medium my-2 text-gray-500 xl:text-2xl">
              Digital products that look good and work even better
            </h2>
            We believe that digital products should not only look visually
            appealing, but also function smoothly and effectively. That&apos;s
            why we prioritize both aesthetics and performance in everything we
            create. With your product as our priority, we work to ensure that
            you get the best of both worlds.
            {/* This part is a suggested revision. could we have another button here just after it? */}
            Contact us to learn more about how we can help bring your digital
            vision to life.
            {/* So no wants a boring app, or site or unmemorable logos. We are a
            design-first agency; what does that mean? Well, simply put,
            beautiful User Interfaces coupled with the very best of User
            Experience practices are at the core of every project. You are
            guaranteed functIonality without sacrificing aesthetics. */}
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
