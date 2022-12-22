import Clients from "../components/HomepageComponents/Clients";
import FeaturedWorks from "../components/HomepageComponents/FeaturedWorks";
import Hero from "../components/HomepageComponents/Hero";
import Container from "../components/container";
import WhatWeDo from "../components/HomepageComponents/WWD/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Container title="Spexbyte Digital - Freelance Digital Agency" />
      <Hero />
      <FeaturedWorks />
      <WhatWeDo />
      <Clients />
    </div>
  );
}
