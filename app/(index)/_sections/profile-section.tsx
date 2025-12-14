import Image from "next/image";
import SocialLinkItem from "../_components/social-link-item";
import { socialLinksData } from "../_contents/social-links-data";

export default function ProfileSection() {
  return (
    <div className="flex gap-4 items-center mb-8">
      <Image
        src="/images/placeholder.jpeg"
        alt="Profile"
        width={80}
        height={80}
        className="w-20 h-20 rounded-full border-2 border-white shadow-lg"
      />
      <div className="flex flex-col text-white gap-1">
        <div className="font-bold text-xl">Şahan Yağcı</div>
        <div className="text-red-200">daha estetik bir hayat</div>
        <div className="flex gap-2 mt-2">
          {socialLinksData.map((link, index) => (
            <SocialLinkItem key={index} src={link.src} alt={link.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
