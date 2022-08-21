import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function FeaturedWorksCard({ work }) {

  const container = useRef()
  useEffect(()=> {
    gsap.from(container.current,{y:200, duration:1, scrollTrigger:{
      trigger:container.current,
      top:'top 80%'
    }})
  })


  const { title, type, img } = work;
  return (
    <div ref={container} className="flex-col xl:w-cw hover:cursor-pointer">
      <div className="relative w-auto h-96 xl:h-ch ">
        <Image src={img} alt={title} layout='fill'/>
      </div>
      <div className="flex flex-col items-end mt-2">
        <h2 className="text-secondary text-xl font-medium xl:text-2xl mb-1">{title}</h2>
        <p className="text-secondary uppercase text-lg font-medium xl:text-xl">{type}</p>
      </div>
    </div>
  );
}