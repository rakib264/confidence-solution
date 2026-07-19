import type { StaticImageData } from "next/image";
import { Project } from "@/lib/types";

import manab4 from "@/assets/manab-noor/manab-4.jpeg";
import manab5 from "@/assets/manab-noor/manab-5.jpeg";
import manab6 from "@/assets/manab-noor/manab-6.jpeg";
import manab7 from "@/assets/manab-noor/manab-7.jpeg";
import manab8 from "@/assets/manab-noor/manab-8.jpeg";
import manab9 from "@/assets/manab-noor/manab-9.jpeg";
import manab10 from "@/assets/manab-noor/manab-10.jpeg";
import manab11 from "@/assets/manab-noor/manab-11.jpeg";

import shah2 from "@/assets/shah-residence/shah-2.jpeg";
import shah3 from "@/assets/shah-residence/shah-3.jpeg";
import shah4 from "@/assets/shah-residence/shah-4.jpeg";
import shah5 from "@/assets/shah-residence/shah-5.jpeg";
import shah6 from "@/assets/shah-residence/shah-6.jpeg";
import shah7 from "@/assets/shah-residence/shah-7.jpeg";
import shah8 from "@/assets/shah-residence/shah-8.jpeg";
import shah9 from "@/assets/shah-residence/shah-9.jpeg";

function splitImages(images: StaticImageData[]) {
  const [thumbnail, ...gallery] = images;
  return { thumbnail, gallery };
}

const manabNoorImages = splitImages([
  manab4,
  manab5,
  manab6,
  manab7,
  manab8,
  manab9,
  manab10,
  manab11,
]);

const shahResidenceImages = splitImages([
  shah2,
  shah3,
  shah4,
  shah5,
  shah6,
  shah7,
  shah8,
  shah9,
]);

export const projects: Project[] = [
  {
    slug: "manab-noor",
    number: 1,
    title: "Manab Noor",
    location: "195 West Dhanmondi Modubazar, Dhaka",
    landArea: "6 katha",
    totalFloors: 7,
    numberOfApartments: 16,
    completionYear: 2018,
    summary:
      "Manab Noor is a residential building at 195 West Dhanmondi Modubazar, offering 16 thoughtfully planned flats across 7 floors on a 6 katha plot.",
    thumbnail: manabNoorImages.thumbnail,
    gallery: manabNoorImages.gallery,
    coordinates: { lat: 23.7462, lng: 90.3754 },
  },
  {
    slug: "shah-residence",
    number: 2,
    title: "Shah Residence",
    location: "222/8 West Dhanmondi Modubazar, Dhaka",
    totalFloors: 7,
    numberOfApartments: 12,
    completionYear: 2024,
    summary:
      "Shah Residence is a residential building at 222/8 West Dhanmondi Modubazar, offering 12 well-planned flats across 7 floors — completed in 2024.",
    thumbnail: shahResidenceImages.thumbnail,
    gallery: shahResidenceImages.gallery,
    coordinates: { lat: 23.7465, lng: 90.3758 },
  },
];
