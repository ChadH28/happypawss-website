/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute z-10 w-2 h-16 right-0 top-1/2 translate-y-1/2 cursor-pointer bg-[#108896]"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute z-10 w-2 h-16 top-1/2 translate-y-1/2 cursor-pointer bg-[#108896]"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
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
    ],
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="adventure-section relative py-16 w-full flex flex-col gap-8">
      <div className="lined_header  text-center relative">
        <h2 className="text-lg lg:text-6xl">{heading}</h2>
      </div>
      <Slider {...settings} className="relative">
        {list.map((activity, index) => (
          <a
            aria-label="booking enquiry"
            href={`https://wa.me/27787589451?text=enquiry%20for%20${activity.title}`}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="h-auto px-6"
          >
            <div className="h-60 rounded-2xl overflow-hidden md:h-80 relative">
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "inherit",
                }}
                fill="true"
                src={activity.image}
                alt={`activity - ${activity.title}`}
              />
            </div>
            <h3 className="text-[#df2828] text-lg my-1">{activity.title}</h3>
            <p className="text-[gray] w-[inherit]">{activity.description}</p>
          </a>
        ))}
      </Slider>
      <span className="bg-[#F19F1F] mx-5 font-extrabold rounded-4xl px-5 py-2 md:mx-auto w-fit text-center text-white uppercase text-sm">
        click on activity and Book via whatsapp
      </span>
    </div>
  );
}
