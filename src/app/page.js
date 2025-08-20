import Hero from "@/components/hero";
import InfoCard from "@/components/info-card";
import { points, slides, activities } from "@/data/pageData";
import AdventureSlider from "@/components/adventure-slider";
import Choices from "@/components/choices";
import ContactCard from "@/components/contact-card";

export const metadata = {
  title:
    "Trusted Pet Sitting Services in Cape Town | Loving Care for Your Pets",
  description:
    "Professional pet sitting in Cape Town with personalized care for dogs, cats, and other pets. We ensure your furry friends are safe, happy, and well-loved while you’re away.",
  openGraph: {
    title:
      "Trusted Pet Sitting Services in Cape Town | Loving Care for Your Pets",
    description:
      "Professional pet sitting in Cape Town with personalized care for dogs, cats, and other pets. We ensure your furry friends are safe, happy, and well-loved while you’re away.",
    // url: "https://totalblessingfitnessandtraveltours.co.za/",
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
        buttonlink={"/happypawss-website/about"}
        buttonlabel={"Get to know my journey"}
        image={"/images/IMG-20250425-WA0009.jpg"}
      />

      <Choices
        background={"#F5F3EE"}
        heading={"Why Choose Me"}
        title={"For your best friend"}
        content={
          "Whether it’s a wagging tail, a playful nudge, or a quiet moment curled up together, there’s nothing quite like the bond you share with your best friend. Every day is an opportunity for new adventures, gentle care, and happy memories. From morning walks to bedtime cuddles, I'm here to make every moment just as special as they are, because they deserve nothing less than our love, comfort, and time."
        }
        points={points}
        image={
          "/images/pexels-gilberto-reyes-259461-825947-removebg-preview.png"
        }
      />

      <InfoCard
        title={"Paw-some Moments Caught on Camera"}
        content={`From playful zoomies to peaceful naps, the gallery captures the heartwarming adventures of the pets I care for. Each photo tells a story of wagging tails, happy purrs, and unforgettable memories. Take a peek, you might just spot your furry friend’s best moment!"`}
        buttonlink={"/happypawss-website/gallery"}
        buttonlabel={"view gallery"}
        image={"/images/IMG-20250425-WA0024.jpg"}
        animate
      />

      <ContactCard />

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
