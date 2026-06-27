/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";

export default function Hero({ title, image, slider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slider.length]);

  return (
    <header className="h-[85vh] min-h-[600px] w-screen relative z-10">
      <div className="overflow-hidden w-[inherit] h-[inherit] relative">
        <div className="hero-content flex flex-col justify-center items-center absolute inset-0 z-20 pt-20 md:pt-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white capitalize text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
              {title}
            </h1>
            <p className="text-white/90 text-base md:text-lg mt-4 max-w-xl mx-auto drop-shadow-md">
              Cape Town&apos;s trusted pet sitting — where every tail gets a happy ending.
            </p>
            <a
              href="https://wa.me/27844664783?text=Hey%20Happy%20Paws!%20I'd%20like%20to%20book%20your%20pet%20sitting%20services%20%E2%9C%A8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-[#F19F1F] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#e08e12] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span>Book a Sitting</span>
            </a>
          </div>
        </div>
        <div className="w-[inherit] h-[inherit] relative hero-image">
          {slider ? (
            slider.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  className={`absolute w-full h-full transition-transform ease-in-out duration-[4000ms] 
                    ${
                      index === currentIndex
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  src={slide ?? "/hero-images/home.webp"}
                  alt="Happy pet enjoying care"
                  fetchPriority="high"
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))
          ) : (
            <img
              className="absolute w-full h-full"
              src={image ?? "/hero-images/home.webp"}
              alt="Happy pet enjoying care"
              fetchPriority="high"
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
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
            d="M0 40C480 80 960 0 1440 40V80H0V40Z"
            fill="#FDF8F0"
          />
        </svg>
      </div>
    </header>
  );
}
