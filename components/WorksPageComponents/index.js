import React from "react";
import data from "../HomepageComponents/FeaturedWorks/data";
import FeaturedWorksCard from "./FeaturedWorksCard";

export default function WorkPageComponents() {
  return (
    <section className=" justify-center">
      <div className="xl:w-sw">
        {/* Text div */}
        <div className="mx-4">
          <h2 className="text-accent text-xl xl:text-3xl">OUR WORKS</h2>
          <div className="flex">
            <div className="w-2 mr-2 h-auto bg-accent"></div>
            <p className="font-light text-lg xl:text-2xl xl:w-2/4">
              Here is a selection of some of our most successful and impactful
              projects. We hope they give you an idea of the kind of quality and
              expertise you can expect from our team
            </p>
          </div>
        </div>
        {/* All other components */}
        <div className="px-4 mt-4">
          <div>
            <p className="text-2xl font-medium py-4">
              Case studies coming soon...
            </p>
          </div>
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
