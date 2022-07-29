import FeaturedWorks from "../components/HomepageComponents/FeaturedWorks";
import Hero from "../components/HomepageComponents/Hero";
import WhatWeDo from "../components/HomepageComponents/WWD/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <FeaturedWorks />
    </div>
  );
}
