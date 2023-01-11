/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "../components/container";
import data from "../components/HomepageComponents/FeaturedWorks/data";
import FeaturedWorksCard from "../components/WorksPageComponents/FeaturedWorksCard";

export default function Uiandux() {
  return (
    <section className="mx-4 mt-10 flex justify-center">
      <Container title="UI and UX Design - Spexbyte Digital - Freelance Digital Agency" />
      <div className="xl:w-sw ">
        <div className="space-y-3">
          <h3 className="text-accent text-xl xl:text-3xl ">UI AND UX DESIGN</h3>
          <h2 className="text-3xl font-semibold xl:text-5xl w-3/4">
            Creating user experiences that turn clicks into conversions.
          </h2>
          <div className="flex ">
            <div className="bg-accent h-auto w-2 mr-2"></div>
            <p className="font-light text-lg xl:text-2xl xl:w-2/4">
              We combine design principles to create visuals that capture your
              user’s needs and make your business stand out from the crowd.
            </p>
          </div>
          <div className="text-lg font-light xl:w-3/4 xl:text-xl">
            We prioritize responsive and accessible design to ensure that every
            website we create delivers a seamless and enjoyable user experience
            across all devices. We understand the importance of making a strong
            first impression and strive to craft designs that not only convert
            visitors into advocates, but also leave a lasting impact.
            <span className="my-4 block"></span>
            Our design team applies the latest design principles and research to
            every project to create websites that are not only visually
            stunning, but also user-friendly and effective. We take the time to
            understand our client's needs and goals, and use that knowledge to
            craft custom websites that truly stand out in a crowded landscape.
            Choose us for design that delivers real results.
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
