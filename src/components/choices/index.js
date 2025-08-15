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
      className="py-10"
    >
      {heading && (
        <div className="lined_header text-[#108896] text-center relative">
          <h2>{heading}</h2>
        </div>
      )}
      <div
        className={`flex flex-row-reverse max-[1024px]:flex-col h-auto mx-8 my-16`}
      >
        <div
          className={`relative rounded-4xl
 image-container overflow-hidden h-auto w-1/2 max-[1024px]:w-screen`}
        >
          <img
            className={`
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute
            h-[inherit] w-full`}
            src={image ?? "/card-images/football.jpg"}
            alt="descriptive card"
            sizes="(max-width: 1024px) 75vw, 100vw"
          />
        </div>

        <div
          style={{
            // background: background,
            color: textc,
          }}
          className={`${
            background ? `bg-[${background}]` : `bg-white`
          }  content-container max-[1024px]:w-screen w-1/2 max-[1024px]:p-5 p-16 my-auto flex flex-col gap-5 justify-center`}
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
            className={`max-[1024px]:text-xl ${
              textc ? `text-[${textc}]` : `text-[grey]`
            } text-pretty text-base`}
            style={{ whiteSpace: "preserve-breaks" }}
          >
            {content}
          </p>
          <div className="h-72">
            {points &&
              points.map((activity, index) => (
                <span key={index} className="points my-2">
                  <h4 className="text-white rounded-4xl py-2.5 px-4 w-full text-lg my-1 capitalize cursor-pointer hover:bg-[#F19F1F] bg-[#108896]">
                    {activity.title}
                  </h4>
                  <p className="text-[gray] p-2 w-[inherit]">
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
              <div className="h-80 relative">
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
