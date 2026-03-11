// Image paths — add these files to /public/images/
export const IMAGES = {
  hero: "/images/hero-tennis.jpg",
  clubBg: "/images/club-tennis-bg.png",
  matchPlay: "/images/match-play.png",
  coachingSessions: "/images/coaching-sessions.png",
  openCourt: "/images/open-court.png",
  tennisRacket: "/images/tennis-racket-1.png",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#game" },
  { label: "Who We Serve", href: "#membership" },
];

export const gameCards = [
  {
    title: "Broadcast-native integration",
    description:
      "Seamlessly blend sponsor messaging into live racquet sports feeds without disrupting the rhythm of play or the clarity of the action.",
    image: "matchPlay",
  },
  {
    title: "Adaptive sponsorship at scale",
    description:
      "Serve tailored brand experiences across regions, audiences, and distribution channels while working from a single, consistent platform.",
    image: "coachingSessions",
  },
  {
    title: "Sports-specific intelligence",
    description:
      "Built with a deep understanding of tennis, badminton, squash, and table tennis, and tuned to work with existing broadcast workflows.",
    image: "openCourt",
  },
];

export const membershipPlans = [
  {
    title: "Rights holders & leagues",
    subtitle: "Protect the sport, grow its value",
    features: [
      "New commercial inventory without changing the field of play",
      "Region-specific feeds from a unified production",
      "Tools designed for racquet sports calendars and formats",
    ],
    highlighted: false,
  },
  {
    title: "Broadcasters",
    subtitle: "Broadcast-first virtual advertising",
    features: [
      "Non-disruptive brand integration into live and replay workflows",
      "Flexible templates for linear, OTT, and digital distribution",
      "Operationally lightweight set-up with existing production teams",
    ],
    highlighted: false,
  },
  {
    title: "Sponsors & brands",
    subtitle: "More relevant, more contextual",
    features: [
      "Context-aware brand presence around every rally",
      "Audience and market-specific creative without re-shoots",
      "Consistent presentation across tournaments and venues",
    ],
    highlighted: true,
  },
];
