/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Choices({
  heading,
  image,
  alt,
  title,
  content,
  background,
  textc,
  animate,
  list,
  points,
}) {
  return (
    <section
      style={{
        background: background,
      }}
      className="px-5 lg:px-16 py-10 lg:py-16 max-w-7xl mx-auto"
    >
      {heading && (
        <div className="text-center mb-8">
          <h2 className="section-heading text-2xl md:text-5xl">{heading}</h2>
        </div>
      )}

      <div className={`flex lg:flex-row-reverse gap-8 md:gap-12 flex-col items-center`}>
        <div className="relative rounded-3xl image-container overflow-hidden h-80 w-full lg:w-1/2 md:h-96 card-frame">
          <img
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute h-[inherit] w-[inherit]"
            src={image ?? "/card-images/football.webp"}
            alt={title || "Pet care"}
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
          />
        </div>

        <div
          style={{
            color: textc,
          }}
          className={`content-container w-full lg:w-1/2 my-auto flex flex-col gap-4 justify-center`}
        >
          {title && (
            <h2
              data-aos={animate && "fade-left"}
              className={`whitespace-pre-line ${
                textc ? `text-[${textc}]` : "text-[#3D2C2E]"
              } font-extrabold text-2xl md:text-4xl leading-tight`}
            >
              {title}
            </h2>
          )}
          {content && (
            <p
              data-aos={animate && "fade-left"}
              className={`${
                textc ? `text-[${textc}]` : "text-[#3D2C2E]/70"
              } text-pretty text-sm lg:text-base leading-relaxed`}
              style={{ whiteSpace: "preserve-breaks" }}
            >
              {content}
            </p>
          )}

          {points && (
            <div className="flex flex-col gap-2 mt-2">
              {points.map((activity, index) => (
                <div key={index} className="points">
                  <h4 className="text-white rounded-2xl py-3 px-5 w-full text-sm lg:text-base my-1 capitalize cursor-pointer hover:bg-[#F19F1F] bg-[#108896] transition-colors duration-300 font-bold tracking-wide">
                    {activity.title}
                  </h4>
                  <p className="text-[#3D2C2E]/80 text-sm lg:text-base px-5 pb-4 pt-2">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {list && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {list.map((activity, index) => (
            <div key={index} className="card-frame rounded-2xl overflow-hidden bg-white">
              <div className="h-52 overflow-hidden relative">
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  fetchPriority="low"
                  loading="lazy"
                  src={activity.image}
                  alt={activity.title}
                />
              </div>
              <div className="p-4">
                <h3 className="text-[#108896] text-lg font-extrabold">{activity.title}</h3>
                <p className="text-[#3D2C2E]/70 text-sm mt-1">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
