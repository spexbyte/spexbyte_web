import Image from "next/image";

const ShowValues = ({ icon, headerText, mainText }) => {
  return (
    <div className="w-auto xl:flex-shrink-0 xl:w-[1280px]">
      <Image
        src={icon}
        alt={headerText}
        width={50}
        height={50}
        objectFit="cover"
        placeholder="blur"
        blurDataURL={icon}
      />
      <h4 className="text-2xl">{headerText}</h4>
      <p className="font-light text-lg xl:w-[600px]">{mainText}</p>
    </div>
  );
};

export default ShowValues;
