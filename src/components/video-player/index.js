"use client";
import { useRef } from "react";

export default function VideoPlayer({ title, text, video }) {
  const myVideo = useRef(null);

  function playPause() {
    if (myVideo.current) {
      if (myVideo.current.paused) {
        myVideo.current.play();
      } else {
        myVideo.current.pause();
      }
    }
  }

  return (
    <div className="w-full h-full relative">
      <span
        className="video-overlay text-center p-4 absolute w-[inherit] h-[inherit] z-10 flex flex-col gap-3 justify-center items-center"
        onClick={playPause}
      >
        <h2 className="uppercase font-extrabold text-text mx-auto max-[1024px]:text-sm text-4xl">
          {title}
        </h2>
        <p className="max-[1024px]:text-xs text-xl">{text}</p>
        {/* <a
          className="uppercase hover:bg-red-500 bg-primaryred font-extrabold w-fit text-xs px-4 py-2"
          href={"/register"}
        >
          register here
        </a> */}
      </span>
      <video
        className="h-[31.25rem] w-[inherit] object-cover"
        ref={myVideo}
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
