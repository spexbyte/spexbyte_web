import WhatWeDoCard from "./WWDCard";
import data from "./data";

export default function WhatWeDo() {
  return (
    <section className="mx-4 xl:flex xl:justify-center my-10">
      <div className="xl:w-sw">
        <div className="flex-col items-center gap-2 mb-6">
          <h2 className="text-3xl font-medium xl:text-5xl">What We Do</h2>
          <div className="flex">
            <div className="h-auto w-1 bg-accent"></div>
            <p className="text-lg font-light ml-4 xl:text-2xl xl:w-3/5">
              We help businesses to find their voice and build a digital
              identity that is worth a pretty penny—and the ugly one too.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-16  pt-10">
          {data &&
            data.map((item) => <WhatWeDoCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
