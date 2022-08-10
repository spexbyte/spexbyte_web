export default function WhatWeDoCard({ item }) {
  const { title, body, buttonText } = item;
  return (
    <div className="xl:w-72">
      <h4 className="text-2xl font-medium xl:3xl">{title}</h4>
      <p className="font-light text-lg xl:text-xl">{body}</p>
      <p className="text-xl xl:2xl font-pr underline-offset-8 decoration-2 font-medium underline hover:cursor-pointer decoration-accent mb-0">
        {buttonText}
      </p>
    </div>
  );
}
