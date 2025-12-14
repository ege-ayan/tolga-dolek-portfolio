import Image from "next/image";
import { socialLinksData } from "@/app/(index)/_contents/social-links-data";

export default function SocialLinks() {
  return (
    <div className="flex gap-2 mt-2">
      {socialLinksData.map((link, index) => (
        <Image
          key={index}
          src={link.src}
          alt={link.alt}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      ))}
    </div>
  );
}
