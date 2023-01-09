import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
  const { img, title, body, buttonText, page } = service;
  return (
    <div className="lg:w-[960px] ">
      <div className="hover:scale-95 transition-all duration-700">
        <Image
          className="hover:scale-110 transition-all duration-700 xl:rounded-3xl"
          src={img}
          width={1920}
          height={1080}
          objectFit="cover"
          alt={title}
          placeholder="blur"
          blurDataURL={img}
        />
      </div>
      <div className="">
        <h2 className="font-semibold text-accent text-xl xl:text-2xl">
          {title}
        </h2>
        <p className="font-light text-lg xl:text-xl xl:w-3/4">{body}</p>
        <div>
          <Link href={page}>
            <button className=" border-b-2 border-accent text-lg hover:translate-y-2 transition duration-700 font-semibold xl:text-2xl">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// export default function ServiceCard({ service }) {
//   const { img, title, body,buttonText } = service;
//   return (
//     <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-10 ">
//       <div className="hover:scale-95 transition-all duration-700 lg:w-3/4">
//         <Image className="hover:scale-110 transition-all duration-700 " src={img} width={1920} height={1080} objectFit='cover' alt={title} />
//       </div>
//       <div className="lg:w-3/4">
//         <h2 className="font-semibold text-accent text-xl xl:text-2xl">{title}</h2>
//         <p className="font-light text-lg xl:text-xl">{body}</p>
//         <div>
//           <button className=" border-b-2 border-accent text-lg hover:translate-y-2 transition duration-700 font-semibold xl:text-2xl">{buttonText}</button>
//         </div>
//       </div>
//     </div>
//   );
// }
