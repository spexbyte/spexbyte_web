import WorkPageComponents from "../../components/WorksPageComponents";
import Container from "../../components/container";

const Works = () => {
  return (
    <section className="flex justify-center">
      <Container title="Works - Spexbyte Digital - Freelance Digital Agency" />
      <div className="mt-10 mb-20">
        <WorkPageComponents />
      </div>
    </section>
  );
};

export default Works;
