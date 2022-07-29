import data from "./data";
import FeaturedWorksCard from "./FeaturedWorksCard";

export default function FeaturedWorks() {
  console.log(data);
  return (
    <>
      <h2>Welcome to featured works</h2>
      <div>
        {data &&
          data.map((work) => <FeaturedWorksCard key={work.id} work={work} />)}
      </div>
    </>
  );
}
