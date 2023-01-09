import React from "react";
import Container from "../components/container";
import data from "../components/HomepageComponents/FeaturedWorks/data";
import FeaturedWorksCard from "../components/WorksPageComponents/FeaturedWorksCard";

export default function Branding() {
  return (
    <section className="mx-4 mt-10 flex justify-center">
      <Container title="UI and UX Design - Spexbyte Digital - Freelance Digital Agency" />
      <div className="xl:w-sw ">
        <div className="space-y-3">
          <h3 className="text-accent text-xl xl:text-3xl ">UI AND UX DESIGN</h3>
          <h2 className="text-3xl font-semibold xl:text-5xl w-3/4">
          We turn brands into stories people want to hear.
          </h2>
          <div className="flex ">
            <div className="bg-accent h-auto w-2 mr-2"></div>
            <p className="font-light text-lg xl:text-2xl xl:w-2/4">
              We collaborate with brands to identify their story and tell it
              through unique visuals and poignant messaging.
            </p>
          </div>
          <div className="text-lg font-light xl:w-3/4 xl:text-xl">
            We focus on bringing together the different aspects of a brand to
            create a unified system that is consistently reflected in brand
            stories.
            <span className="my-4 block"></span>
            We embrace the unique responsibility to craft compelling narratives
            that resonate with your audience, foster trust and open up new
            opportunities for growth.
            <span className="my-4 block"></span>
            Through the art of storytelling, we breathe life into brands and
            elevate them to new heights.
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
