import dynamic from "next/dynamic";

const AboutComponent = dynamic(() =>
  import("../components/AboutPageComponents/index")
);
import Container from "../components/container";

const About = () => {
  return (
    <section>
      <Container title="About - Spexbyte Digital - Freelance Digital Agency" />
      <AboutComponent />
    </section>
  );
};

export default About;