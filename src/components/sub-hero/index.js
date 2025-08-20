/* eslint-disable @next/next/no-img-element */
"use client";

export default function SubHero({ title, subtitle, image }) {
  return (
    <header className="h-[70vh] w-screen relative">
      <div className="relative flex flex-col overflow-hidden w-[inherit] h-[inherit]">
        <div className="uppercase z-10 lg:px-44 px-5 text-white hero-content flex flex-col justify-center items-center absolute w-[inherit] h-[inherit] text-center">
          <h1 className="drop-shadow-xs text-pretty text-2xl lg:text-5xl font-extrabold ">
            {title}
          </h1>
          <p className="drop-shadow-xs text-base lg:text-xl font-normal">
            {subtitle}
          </p>
        </div>
        <span className="overflow-hidden subhero relative w-[inherit] h-[inherit]">
          <img
            className="w-[inherit] h-[inherit]
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
