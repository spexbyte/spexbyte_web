import Image from "next/image";

const ShowValues = ({ icon, headerText, mainText }) => {
  return (
    <div>
      <Image src={icon} alt={headerText} width={100} height={100} />
      <h4>{headerText}</h4>
      <p>{mainText}</p>
    </div>
  );
};

export default ShowValues;
