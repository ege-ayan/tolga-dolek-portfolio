import Image from "next/image";

interface SocialLinkItemProps {
  src: string;
  alt: string;
}

export default function SocialLinkItem({ src, alt }: SocialLinkItemProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
    />
  );
}
