import PrimaryCard, {
  type PrimaryCardColor,
} from "../_components/primary-card";
import { primaryCardData } from "../_contents/primary-card-data";

export default function CardsSection() {
  return (
    <div className="flex flex-col gap-4">
      {primaryCardData.map((card, index) => (
        <PrimaryCard
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          color={card.color as PrimaryCardColor | undefined}
        />
      ))}
    </div>
  );
}
