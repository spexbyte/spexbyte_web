import Image from "next/image";

export default function FeaturedWorksCard({ work }) {
  const { title, type, img } = work;
  return (
    <div className="flex-col xl:w-cw hover:cursor-pointer">
      <div className="relative w-auto h-96 xl:h-ch ">
        <Image src={img} alt={title} layout='fill'/>
      </div>
      <div className="flex flex-col items-end mt-2">
        <h2 className="text-primary text-xl font-medium xl:text-2xl mb-1">{title}</h2>
        <p className="text-primary uppercase text-lg font-medium xl:text-xl">{type}</p>
      </div>
    </div>
  );
}