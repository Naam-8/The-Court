import { IMAGES, gameCards } from "../constants";
import GridBackground from "./GridBackground";
import BeforeAfterSlider from "./BeforeAfterSlider";

function GameCard({ card }) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-black/50">
        <BeforeAfterSlider
          beforeSrc={card.beforeSrc}
          afterSrc={card.afterSrc}
        />
        <div className="absolute inset-0 hidden flex-col items-center justify-center bg-black/70 text-muted text-center p-4">
          <p className="text-sm">Add: public{card.beforeSrc}</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl">
        <h3 className="font-sans text-xl sm:text-2xl font-bold text-black">
          {card.title}
        </h3>
        <p className="mt-2 sm:mt-3 font-sans text-black/90 text-sm sm:text-base leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function GameSection() {
  const [firstCard, ...restCards] = gameCards;

  return (
    <section
      id="solutions"
      className="mx-auto bg-black overflow-hidden relative"
    >
      <GridBackground />
      <div className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-16 lg:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 lg:items-start">
          <div className="flex flex-col gap-2 sm:gap-12 lg:gap-12">
            <div className="mb-12 lg:mb-32">
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Platform{" "}
                <span className="text-bright-green font-serif italic">
                  solutions
                </span>
              </h2>
              <p className="mt-2 sm:mt-3 font-sans text-muted text-base sm:text-lg">
                Core ways Courtlay creates value for racquet sports broadcasts.
              </p>
            </div>
            <GameCard card={firstCard} />
          </div>
          <div className="flex flex-col gap-10 sm:gap-16 lg:gap-24">
            {restCards.map((card) => (
              <GameCard key={card.title} card={firstCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
