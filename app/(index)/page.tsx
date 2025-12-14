import ProfileSection from "./_sections/profile-section";
import CardsSection from "./_sections/cards-section";
import LastVideoSection from "./_sections/last-video-section";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="w-200 bg-linear-to-b from-red-800/90 to-red-950/90 rounded-3xl backdrop-blur-sm shadow-2xl p-8">
        <ProfileSection />
        <CardsSection />
        <LastVideoSection />
      </div>
    </div>
  );
}
