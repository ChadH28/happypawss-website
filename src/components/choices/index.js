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
    <div
      style={{
        background: background,
      }}
      className="px-5 lg:px-28 py-10 lg:py-16 flex flex-col gap-4"
    >
      {heading && (
        <div className="lined_header text-[#108896] text-center relative">
          <h2 className="text-base md:text-6xl">{heading}</h2>
        </div>
      )}
      <div className={`flex lg:flex-row-reverse gap-8 flex-col h-auto`}>
        <div
          className={`relative rounded-4xl
 image-container overflow-hidden h-80 w-full lg:w-1/2 md:h-96`}
        >
          <img
            className={`
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute
            h-[inherit] w-[inherit]`}
            src={image ?? "/card-images/football.jpg"}
            alt="descriptive card"
            sizes="(max-width: 1024px) 75vw, 100vw"
          />
        </div>

        <div
          style={{
            color: textc,
          }}
          className={`${
            background ? `bg-[${background}]` : `bg-white`
          }  content-container w-full lg:w-1/2 my-auto flex flex-col gap-3 justify-center`}
        >
          <h2
            data-aos={animate && (alt ? "fade-right" : "fade-left")}
            className={`whitespace-pre-line ${
              textc ? `text-[${textc}]` : null
            }  uppercase font-extrabold max-[1024px]:text-2xl text-4xl`}
          >
            {title}
          </h2>
          <p
            data-aos={animate && (alt ? "fade-right" : "fade-left")}
            className={` ${
              textc ? `text-[${textc}]` : `text-[grey]`
            } text-pretty text-xs lg:text-base`}
            style={{ whiteSpace: "preserve-breaks" }}
          >
            {content}
          </p>
          <div>
            {points &&
              points.map((activity, index) => (
                <span key={index} className="points">
                  <h4 className="text-white rounded-4xl py-2.5 px-4 w-full text-xs lg:text-lg my-2 capitalize cursor-pointer hover:bg-[#F19F1F] bg-[#108896]">
                    {activity.title}
                  </h4>
                  <p className="text-[gray] text-xs lg:text-base px-6">
                    {activity.description}
                  </p>
                </span>
              ))}
          </div>
        </div>
      </div>
      <div>
        {list &&
          list.map((activity, index) => (
            <span key={index} className="h-auto px-6">
              <div className="max-h-[99999px] h-auto relative">
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
            </span>
          ))}
      </div>
    </div>
  );
}
