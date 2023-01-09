import { useRouter } from "next/router";
export default function WhatWeDoCard({ item }) {
  const router = useRouter();
  const { title, body, buttonText, page } = item;
  return (
    <div className="xl:w-72">
      <h4 className="text-2xl font-medium xl:3xl">{title}</h4>
      <p className="font-light text-lg xl:text-xl">{body}</p>
      <p
        className="text-xl xl:2xl font-pr underline-offset-8 decoration-2 font-medium underline hover:cursor-pointer decoration-accent mb-0 hover:translate-y-2 transition duration-700"
        onClick={() => router.push(`${page}`)}
      >
        {buttonText}
      </p>
    </div>
  );
}
