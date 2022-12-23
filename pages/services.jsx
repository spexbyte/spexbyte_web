import dynamic from "next/dynamic";
import Container from "../components/container";

const ServiceComponents = dynamic(() =>
  import("../components/ServicesPageComponents")
);

const Services = () => {
  return (
    <div className="my-14">
      <Container title="Services - Spexbyte Digital - Freelance Digital Agency" />
      <ServiceComponents />
    </div>
  );
};

export default Services;
