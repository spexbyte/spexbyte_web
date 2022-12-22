import dynamic from "next/dynamic";

import Container from "../components/container";
const Clients = dynamic(() =>
  import("../components/HomepageComponents/Clients")
);
const Hero = dynamic(() => import("../components/HomepageComponents/Hero"));
const FeaturedWorks = dynamic(() =>
  import("../components/HomepageComponents/FeaturedWorks")
);
const WhatWeDo = dynamic(() =>
  import("../components/HomepageComponents/WWD/WhatWeDo")
);

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
