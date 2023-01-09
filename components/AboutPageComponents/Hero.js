import Image from "next/image";
import { useRouter } from "next/router";

const AboutHero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-10">
        <Image
          src="/assets/team.jpg"
          layout="responsive"
          width={1280}
          height={720}
          alt="team photo"
          blurDataURL="/assets/team.jpg"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <div className="mx-4 xl:mx-0">
        <h3 className="text-accent text-xl xl:text-2xl">ABOUT US</h3>
        <h1 className="font-medium text-5xl xl:text-7xl">
          We are spexbyte<span className="text-accent">.</span>
        </h1>
        <p className="font-light text-lg xl:text-2xl xl:w-3/5">
          We are a small, passionate group of creatives who grew tired of the
          old, clunky digital experiences. No matter how crazy your idea, we are
          happy to talk through it.
        </p>
        <div className="w-fit mt-4">
          <h3
            className="text-lg font-medium xl:text-xl hover:cursor-pointer"
            onClick={() => router.push("/works")}
          >
            OUR WORKS
          </h3>
          {/* Underline */}
          <div className="bg-accent w-auto h-1"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
