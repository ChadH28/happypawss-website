/* eslint-disable @next/next/no-img-element */
import InfoCard from "@/components/info-card";
import SubHero from "@/components/sub-hero";
import { galleryImages } from "@/data/pageData";

export const metadata = {
  title: "Pet Sitting Gallery | Happy Pets in Cape Town",
  description:
    "Browse our pet sitting gallery and see the happy tails, playful paws, and loving moments we share with pets across Cape Town. Every smile tells a story.",
  openGraph: {
    title: "Pet Sitting Gallery | Happy Pets in Cape Town",
    description:
      "Browse our pet sitting gallery and see the happy tails, playful paws, and loving moments we share with pets across Cape Town. Every smile tells a story.",
    url: "https://totalblessingfitnessandtraveltours.co.za/",
    images: [
      {
        url: "/happypawss-website/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "Total Blessing Fitness & Travel Tours",
      },
    ],
  },
};

export default function Gallery() {
  return (
    <main>
      <SubHero
        title={"Happy Tails & Wagging Moments"}
        subtitle={"A glimpse into the joy I share with every pet I care for."}
        image={
          "/happypawss-website/images/WhatsApp Image 2025-08-12 at 16.38.22 (2).jpeg"
        }
      />
      <div className="py-10 px-5 lg:px-10 lg:py-16 flex flex-col gap-4">
        <div className="lined_header  text-center relative">
          <h2 className="text-base md:text-6xl">{"Gallery"}</h2>
        </div>
        <div className="flex w-full flex-wrap gap-4 justify-center">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="w-full h-52 lg:h-96 lg:w-96 md:w-80 md:h-80 overflow-hidden relative rounded-2xl zoomImg"
            >
              <img
                className="object-cover w-[inherit] h-[inherit] absolute"
                src={item.image}
                alt={`Masonry image ${index + 1}`}
                fill="true"
              />
            </div>
          ))}
        </div>
      </div>

      <InfoCard
        alt
        title={"Love What You See? Let’s Care for Your Pet Too!"}
        content={`Join the happy tails and wagging paws, book your trusted pet sitter today and give your furry friend the love they deserve.`}
        buttonlink={"mailto:happypaws@gmail.com"}
        buttonlabel={"Get in Touch"}
        external
        cover
        video={
          "/happypawss-website/videos/WhatsApp Video 2025-08-12 at 16.38.30.mp4"
        }
      />
    </main>
  );
}
