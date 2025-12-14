import Image from "next/image";
import SocialLinks from "@/app/(index)/_components/social-links";

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
        <SocialLinks />
      </div>
    </div>
  );
}
