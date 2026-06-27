/* eslint-disable @next/next/no-img-element */
"use client";

export default function SubHero({ title, subtitle, image }) {
  return (
    <header className="h-[65vh] min-h-[450px] w-screen relative">
      <div className="relative flex flex-col overflow-hidden w-[inherit] h-[inherit]">
        <div className="z-20 px-5 lg:px-44 text-white hero-content flex flex-col justify-center items-center absolute inset-0 pt-20 md:pt-24 text-center">
          <h1 className="drop-shadow-lg text-pretty text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="drop-shadow-md text-base md:text-lg lg:text-xl mt-3 max-w-xl text-white/90">
              {subtitle}
            </p>
          )}
        </div>
        <span className="overflow-hidden subhero relative w-[inherit] h-[inherit]">
          <img
            className="w-[inherit] h-[inherit] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
            src={image ?? "/hero-images/home.webp"}
            alt=""
            fetchPriority="high"
            style={{ objectFit: "cover" }}
          />
        </span>
      </div>
      {/* Organic warm curve divider */}
      <div className="absolute z-30 bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 35C480 70 960 0 1440 35V80H0V35Z"
            fill="#FDF8F0"
          />
        </svg>
      </div>
    </header>
  );
}
