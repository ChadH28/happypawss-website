/* eslint-disable @next/next/no-img-element */
"use client";

export default function SubHero({ title, subtitle, image }) {
  return (
    <header className="h-[60vh] w-screen relative">
      <div className="relative flex max-[1024px]:flex-col overflow-hidden h-[inherit]">
        <div className="uppercase hero-content flex flex-col justify-center items-center absolute h-full w-screen">
          <h1 className="drop-shadow-xs z-10 text-white mx-14 max-[1024px]:mx-5  max-[1024px]:text-2xl text-5xl font-[800] text-center">
            {title}
          </h1>
          <p className="z-10 text-white mx-[50px] max-[1024px]:mx-5  max-[1024px]:text-l text-xl font-[400] text-center">
            {subtitle}
          </p>
        </div>
        <span className="overflow-hidden subhero relative w-screen h-[inherit]">
          <img
            className="w-screen h-[inherit]
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute
            "
            src={image ?? "/hero-images/home.jpg"}
            alt="hero image"
            fill="true"
            priority="true"
            style={{ objectFit: "cover" }}
          />
        </span>
      </div>
      <div className="absolute z-30 bottom-0 left-0 w-full h-auto">
        <svg
          id="curveUp"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="#fff"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
        </svg>
      </div>
    </header>
  );
}
