import { membershipPlans } from "../constants";

export default function MembershipSection() {
  return (
    <section id="membership" className="mx-auto mb-8 lg:mb-12">
      <div className="bg-white p-6 sm:p-10 lg:p-16 shadow-sm border border-black/5">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black">
            <span className="font-serif italic mr-1">Access </span>to the Club
          </h2>
          <p className="mt-3 font-sans text-black/80 text-base sm:text-lg">
            Choose how you play. Different ways to access the game.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {membershipPlans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-2xl bg-black p-6 sm:p-8 flex flex-col"
            >
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-bright-green">
                {plan.title}
              </h3>
              <p className="mt-2 font-serif text-white/90 text-sm sm:text-base italic">
                {plan.subtitle}
              </p>
              <ul className="mt-6 space-y-2 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-sans text-white/90 text-sm flex items-start gap-2"
                  >
                    <span className="text-bright-green mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className={`mt-8 inline-flex items-center justify-center py-3 px-6 rounded-full font-sans font-medium text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-bright-green text-black hover:bg-light-green"
                    : "border-2 border-bright-green text-white hover:bg-bright-green/10"
                }`}
              >
                Join the Club
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
