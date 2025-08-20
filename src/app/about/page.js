import Choices from "@/components/choices";
import InfoCard from "@/components/info-card";
import SubHero from "@/components/sub-hero";
import { points } from "@/data/pageData";

export const metadata = {
  title: "About Us | Trusted Pet Sitting in Cape Town with Loving Care",
  description:
    "Discover our story and passion for providing safe, loving pet sitting in Cape Town. We treat your pets like family, ensuring their happiness and comfort while you’re away.",
  openGraph: {
    title: "About Us | Trusted Pet Sitting in Cape Town with Loving Care",
    description:
      "Discover our story and passion for providing safe, loving pet sitting in Cape Town. We treat your pets like family, ensuring their happiness and comfort while you’re away.",
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

export default function AboutUs() {
  return (
    <main>
      <SubHero
        title={"Where Love Meets Pet Care in Cape Town"}
        subtitle={"Caring for your pets as if they were my own."}
        image={"/happypawss-website/images/WhatsApp Image 2025-08-12 at 16.38.23.jpeg"}
      />

      <Choices
        background={"#ffff"}
        heading={"About me"}
        title={"How I Started"}
        content={`My journey into pet sitting started with a simple truth, I’ve always felt most at home surrounded by animals. Growing up in Cape Town, I was the go-to person for neighbours and friends whenever they needed someone to feed their cats, walk their dogs, or give a little extra love to their pets while they were away.

What began as a few friendly favours quickly became something more. I realised that caring for pets wasn’t just a side task for me, it was a passion. Over time, I combined my love for animals with a dedication to reliability and professional care, building a service that pet parents can truly trust.`}
        points={points}
        image={
          "/happypawss-website/images/pexels-monique-laats-230726-736532-removebg-preview.png"
        }
      />

      <InfoCard
        title={"See the Joy I Share with Pets"}
        content={`Curious about what a day with us looks like? Visit our gallery to meet our happy furry friends and see the love and care I give every pet.`}
        buttonlink={"/happypawss-website/gallery"}
        buttonlabel={"Explore the Gallery"}
        cover
        image={"/happypawss-website/gallery-images/WhatsApp Image 2025-08-12 at 16.38.32.jpeg"}
      />

      <InfoCard
        alt
        title={"Ready to Give Your Pet the Care They Deserve?"}
        content={`Whether you’re heading out for the day or going on a trip, you can relax knowing your pets are in loving, capable hands`}
        buttonlink={"mailto:happypaws@gmail.com"}
        buttonlabel={"Get in Touch"}
        external
        cover
        video={"/happypawss-website/videos/WhatsApp Video 2025-08-12 at 16.38.30.mp4"}
      />
    </main>
  );
}
