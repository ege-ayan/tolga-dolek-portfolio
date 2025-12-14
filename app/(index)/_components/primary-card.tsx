import Image from "next/image";

export type PrimaryCardColor = "blue" | "red" | "yellow";

interface PrimaryCardProps {
  title: string;
  imageUrl: string;
  color?: PrimaryCardColor;
}

export default function PrimaryCard(props: PrimaryCardProps) {
  let cssClass = "";
  switch (props.color) {
    case "blue":
      cssClass =
        "from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800";
      break;
    case "red":
      cssClass = " from-red-600 to-red-700 hover:from-red-600 hover:to-red-800";
      break;
    case "yellow":
      cssClass =
        " from-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800";
      break;
    default:
      cssClass =
        " from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800";
      break;
  }

  return (
    <button
      className={`flex items-center px-4 py-3 bg-linear-to-r text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full ${cssClass}`}
    >
      <Image
        src={props.imageUrl}
        alt={props.title}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-3 border-2 border-white object-cover"
      />
      {props.title}
    </button>
  );
}
