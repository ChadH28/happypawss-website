import Hero from "@/components/hero";
import InfoCard from "@/components/info-card";
import { highlights, slides, activities } from "@/data/pageData";
import ClientSlider from "@/components/slider";
import AdventureSlider from "@/components/adventure-slider";

export const metadata = {
  title: "Train & Travel in Cape Town | Total Blessing Fitness Tours",
  description:
    "Discover fitness, wellness retreats & adventure in Cape Town. Total Blessing blends expert workouts with unforgettable guided travel experiences.",
  openGraph: {
    title: "Train & Travel in Cape Town | Total Blessing Fitness Tours",
    description:
      "Discover fitness, wellness retreats & adventure in Cape Town. Total Blessing blends expert workouts with unforgettable guided travel experiences.",
    url: "https://totalblessingfitnessandtraveltours.co.za/",
    images: [
      {
        url: "/images/logo3.png",
        width: 1200,
        height: 630,
        alt: "Total Blessing Fitness & Travel Tours",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero
        title={"Welcome to Happy paws pet sitting services"}
        slider={slides}
      />

      <AdventureSlider heading="My services" list={activities} />

      <InfoCard
        title={"Discover My Passion for Petsitting"}
        alt
        // content={"Discover My Passion for Petsitting"}
        buttonlink={"/about"}
        buttonlabel={"Get to know my journey"}
        image={"/images/IMG-20250425-WA0009.jpg"}
      />

      <InfoCard
        title={"Paw-some Moments Caught on Camera 📸🐾"}
        content={`From playful zoomies to peaceful naps, our gallery captures the heartwarming adventures of the pets we care for. Each photo tells a story of wagging tails, happy purrs, and unforgettable memories. Take a peek, you might just spot your furry friend’s best moment!"`}
        buttonlink={"/gallery"}
        buttonlabel={"view gallery"}
        image={"/images/IMG-20250425-WA0024.jpg"}
        animate
      />

      {/* <InfoCard
        title={"Join our online boxercise classes!"}
        content={`Join our Cape Town-based online boxercise classes for a high-energy workout combining boxing techniques and fitness training. Each session includes a warm-up, boxing drills, bodyweight exercises, and a cool-down for recovery. Suitable for all fitness levels, our virtual classes on Zoom require no special equipment—train from home and get fit with us!`}
        video={"/video/WhatsApp Video 2025-03-11 at 17.23.45.mp4"}
        buttonlink={
          "https://wa.me/27787589451?text=Online%20boxercise%20class%20enquiry"
        }
        buttonlabel={"Enquire here via whatsapp"}
        external
        alt
      /> */}
    </main>
  );
}
