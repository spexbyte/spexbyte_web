export default function FeaturedWorksCard({ work }) {
  const { title, type, img } = work;
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h2>{type}</h2>
    </div>
  );
}
