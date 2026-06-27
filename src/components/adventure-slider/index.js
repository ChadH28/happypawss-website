/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} !flex items-center justify-center !w-10 !h-10 rounded-full bg-[#F19F1F] shadow-md hover:bg-[#e08e12] transition-all duration-300 !z-10 hover:scale-110`}
      onClick={onClick}
      aria-label="Next slide"
    >
      <span className="text-white text-lg" aria-hidden="true">→</span>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} !flex items-center justify-center !w-10 !h-10 rounded-full bg-[#F19F1F] shadow-md hover:bg-[#e08e12] transition-all duration-300 !z-10 hover:scale-110`}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <span className="text-white text-lg" aria-hidden="true">←</span>
    </button>
  );
}

export default function AdventureSlider({ list, heading }) {
  var settings = {
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="relative py-16 w-full bg-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="section-heading text-2xl md:text-5xl">{heading}</h2>
        </div>
        <Slider {...settings} className="relative px-8 md:px-12">
          {list.map((activity, index) => (
            <a
              aria-label={`Book ${activity.title}`}
              href={`https://wa.me/27787589451?text=enquiry%20for%20${activity.title}`}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="h-auto px-3 group"
            >
              <div className="card-frame rounded-2xl overflow-hidden bg-white">
                <div className="h-52 md:h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fetchPriority="auto"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={activity.image}
                    alt={activity.title}
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#108896] text-lg font-extrabold group-hover:text-[#F19F1F] transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-[#3D2C2E]/70 text-sm mt-1">{activity.description}</p>
                </div>
              </div>
            </a>
          ))}
        </Slider>
        <div className="text-center mt-8">
          <a
            href="https://wa.me/27844664783?text=Hey%20Happy%20Paws!%20I'd%20like%20to%20book%20your%20pet%20sitting%20services%20%E2%9C%A8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F19F1F] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#e08e12] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
