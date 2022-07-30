import data from "./data";
import FeaturedWorksCard from "./FeaturedWorksCard";

export default function FeaturedWorks() {
  console.log(data);
  return (
    <section className="bg-secondary py-10 flex flex-col xl:justify-center xl:items-center">
      <div className="mx-4 xl:w-sw ">
        <h3 className="text-accent text-xl xl:text-3xl">FEATURED WORKS</h3>
        <h2 className="text-3xl text-primary xl:text-5xl">From the archives</h2>
        <p className="font-light text-lg text-primary xl:text-2xl pb-20">
          We promised these businesses we would deliver -- and that is exactly
          what we did.{" "}
        </p>
        <div className="pt-5 flex-row space-y-10 xl:grid xl:grid-cols-2 xl:gap-x-72 ">
          {data &&
            data.map((work) => <FeaturedWorksCard key={work.id} work={work} />)}
        </div>
      </div>
      <div className="mx-4 flex items-center justify-center mt-9 hover:cursor-pointer">
        <h2 className="text-primary text-xl underline-offset-8 underline decoration-accent decoration-2 xl:text-2xl">
          VIEW ALL
        </h2>
      </div>
    </section>
  );
}
