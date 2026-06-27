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
    <section
      className={`flex ${
        alt ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col justify-between px-5 lg:px-16 py-10 lg:py-16 lg:gap-12 gap-8 max-w-7xl mx-auto`}
    >
      {video ? (
        <div className={`w-full lg:w-1/2 ${!cover && "bg-black"} rounded-3xl overflow-hidden shadow-lg`}>
          <video
            className={`object-${
              cover ? "cover" : "contain"
            } md:min-h-[21.875rem] min-h-80 lg:min-h-[25rem] w-full h-full`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="relative rounded-3xl image-container overflow-hidden lg:min-h-[25rem] md:min-h-[21.875rem] min-h-80 h-full w-full lg:w-1/2 shadow-lg card-frame">
          <img
            className={`
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute
            object-cover h-[inherit] w-full ${greyscale && "grayscale"}`}
            src={image ?? "/card-images/football.webp"}
            alt={title || "Pet care moment"}
            sizes="(max-width: 1024px) 100vw, 50vw"
            fetchPriority="low"
            loading="lazy"
          />
        </div>
      )}

      <div
        style={{
          background: background,
          color: textc,
        }}
        className={`content-container w-full lg:w-1/2 flex flex-col gap-4 justify-center py-4`}
      >
        <h2
          data-aos={animate && (alt ? "fade-right" : "fade-left")}
          className={`whitespace-pre-line ${
            textc ? `text-[${textc}]` : "text-[#3D2C2E]"
          } font-extrabold text-2xl lg:text-4xl leading-tight`}
        >
          {title}
        </h2>
        {content && (
          <p
            data-aos={animate && (alt ? "fade-right" : "fade-left")}
            className={`${
              textc ? `text-[${textc}]` : "text-[#3D2C2E]/70"
            } text-pretty text-sm lg:text-base leading-relaxed`}
            style={{ whiteSpace: "preserve-breaks" }}
          >
            {content}
          </p>
        )}
        {buttonlink && (
          <div data-aos={animate && (alt ? "fade-right" : "fade-left")} className="mt-2">
            {external ? (
              <a
                className="inline-flex items-center gap-2 uppercase rounded-full bg-[#F19F1F] text-xs text-white font-bold px-5 py-2.5 hover:bg-[#e08e12] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                href={buttonlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonlabel ?? "find out"}
              </a>
            ) : (
              <a
                className="inline-flex items-center gap-2 uppercase rounded-full bg-[#F19F1F] text-xs text-white font-bold px-5 py-2.5 hover:bg-[#e08e12] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                href={buttonlink}
              >
                {buttonlabel ?? "find out"}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
