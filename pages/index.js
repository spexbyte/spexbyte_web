import Clients from "../components/HomepageComponents/Clients";
import FeaturedWorks from "../components/HomepageComponents/FeaturedWorks";
import Hero from "../components/HomepageComponents/Hero";
import Menu from "../components/HomepageComponents/Menu";
import WhatWeDo from "../components/HomepageComponents/WWD/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedWorks />
      <WhatWeDo />
      <Clients />
    </div>
  );
}
