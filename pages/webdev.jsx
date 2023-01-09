import Container from "../components/container";
import data from "../components/HomepageComponents/FeaturedWorks/data";
import FeaturedWorksCard from "../components/WorksPageComponents/FeaturedWorksCard";

export default function Webdev() {
  return (
    <section className="mx-4 mt-10 flex justify-center">
      <Container title="Web Development - Spexbyte Digital - Freelance Digital Agency" />
      <div className="xl:w-sw ">
        <div className="space-y-3">
          <h3 className="text-accent text-xl xl:text-3xl ">WEB DEVELOPMENT</h3>
          <h2 className="text-3xl font-semibold xl:text-5xl w-3/4">
            Bringing your ideas to life, one website at a time.
          </h2>
          <div className="flex ">
            <div className="bg-accent h-auto w-2 mr-2"></div>
            <p className="font-light text-lg xl:text-2xl xl:w-2/4">
              We leverage the best tools to design and build websites that have
              great UX, are SEO-friendly and improve sales.
            </p>
          </div>
          <div className="text-lg font-light xl:w-3/4 xl:text-xl">
            We are obsessed with creating unique digital experiences. We use
            various custom solutions to achieve this goal while leveraging our
            obsession to turn your website bounce rates into conversion rates.
            <span className="my-4 block"></span>
            We take a careful and thorough approach to building websites that
            are both high-performing and scalable. We pay close attention to
            every detail and follow a methodical process to ensure that our
            sites not only function seamlessly, but also have the ability to
            grow and adapt as needed. Trust us to deliver top-quality results
            that will exceed your expectations.
          </div>
        </div>
        <hr className="my-20" />
        <div className=" pb-16 xl:pb-52">
          <h2 className="text-xl font-medium mb-2 text-gray-500 xl:text-2xl">
            Some selected works...
          </h2>
          <div className="sm:grid md:grid-cols-2 space-y-10 overflow-hidden">
            {data &&
              data.map((work) => (
                <FeaturedWorksCard key={work.id} work={work} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
