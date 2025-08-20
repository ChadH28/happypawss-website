/* eslint-disable @next/next/no-img-element */
export default function InfoCard({
  image,
  alt,
  title,
  content,
  buttonlink,
  buttonlabel,
  greyscale,
  background,
  textc,
  video,
  external,
  cover,
  animate,
}) {
  return (
    <div
      className={`flex ${
        alt ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col justify-between px-5 lg:px-28 py-10 lg:py-16 lg:gap-11 gap-4`}
    >
      {video ? (
        <div className={`w-1/2 max-[1024px]:w-full ${!cover && "bg-black"} `}>
          <video
            className={`object-${
              cover ? "cover" : "contain"
            } md:min-h-[21.875rem] min-h-80 lg:min-h-[25rem] rounded-4xl
 h-inherit h-96 w-screen`}
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div
          className={`relative rounded-4xl
 image-container overflow-hidden lg:min-h-[25rem] md:min-h-[21.875rem] min-h-80 h-full w-1/2 max-[1024px]:w-full`}
        >
          <img
            className={`
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute
            object-cover h-[inherit] w-full ${greyscale && "grayscale"}`}
            src={image ?? "/card-images/football.jpg"}
            alt="FN Rangers descriptive card"
            sizes="(max-width: 1024px) 75vw, 100vw"
          />
        </div>
      )}

      <div
        style={{
          background: background,
          color: textc,
        }}
        className={`${
          background ? `bg-[${background}]` : `bg-white`
        }  content-container w-full lg:w-1/2 flex flex-col gap-3 justify-center`}
      >
        <h2
          data-aos={animate && (alt ? "fade-right" : "fade-left")}
          className={`whitespace-pre-line ${
            textc ? `text-[${textc}]` : "text-black"
          }  uppercase font-extrabold text-2xl lg:text-4xl`}
        >
          {title}
        </h2>
        {content && (
          <p
            data-aos={animate && (alt ? "fade-right" : "fade-left")}
            className={` ${
              textc ? `text-[${textc}]` : `text-gray`
            } text-pretty text-xs lg:text-base`}
            style={{ whiteSpace: "preserve-breaks" }}
          >
            {content}
          </p>
        )}
        {buttonlink && (
          <div data-aos={animate && (alt ? "fade-right" : "fade-left")}>
            {external ? (
              <a
                className="uppercase hoverstate rounded-4xl bg-[#F19F1F] text-xs text-white font-extrabold w-fit px-4 py-2"
                href={buttonlink}
                target={external ? "_blank" : "_self"}
              >
                {buttonlabel ?? "find out"}
              </a>
            ) : (
              <a
                className="uppercase hoverstate bg-[#F19F1F] rounded-4xl text-xs text-white font-extrabold w-fit px-4 py-2"
                href={buttonlink}
              >
                {buttonlabel ?? "find out"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
