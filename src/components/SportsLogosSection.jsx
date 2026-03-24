const SPORTS = [
  { name: "Padel", note: "World Padel Tour" },
  { name: "Table Tennis", note: "ITTF World Tour" },
];

export default function SportsLogosSection() {
  return (
    <section className="bg-white">
      <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 border-t border-black/10">
        <p className="text-center font-sans text-base tracking-[0.25em] uppercase text-dark-green/80 mb-10 ">
          Racquet sports we serve
        </p>

        <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {SPORTS.map((sport) => (
            <div key={sport.name} className="text-center">
              <p className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-black/15 leading-none">
                {sport.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
