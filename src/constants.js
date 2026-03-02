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
  { label: "The Game", href: "#game" },
  { label: "Membership Plans", href: "#membership" },
];

export const gameCards = [
  {
    title: "Match Play",
    description:
      "Friendly or competitive – depending on the moment. Singles, doubles, or mixed matches with players from the club. A chance to play, enjoy the game, and share the court with others.",
    image: "matchPlay",
  },
  {
    title: "Coaching Sessions",
    description:
      "Time on court with a coach. For technique, confidence, or simply a fresh look at your game. Supportive, calm, and focused on enjoyment – not pressure.",
    image: "coachingSessions",
  },
  {
    title: "Open Court",
    description:
      "Free play during open court hours. A space to hit, move, and enjoy the court at your own pace. Play alone, with a partner, or join others on court.",
    image: "openCourt",
  },
];

export const membershipPlans = [
  {
    title: "Play",
    subtitle: "Time On Court, Without Extras",
    features: [
      "Access to club courts during open court hours",
      "Participation in scheduled match play",
      "Social and friendly games",
    ],
    highlighted: false,
  },
  {
    title: "Play & Coach",
    subtitle: "Support When You Want It",
    features: [
      "Full court access and match play",
      "Coaching sessions (individual or small group)",
      "Balance between guided and free play",
    ],
    highlighted: false,
  },
  {
    title: "Full Access",
    subtitle: "Complete Freedom On Court",
    features: [
      "Unlimited access to courts and match play",
      "Coaching sessions and club activities",
      "Priority booking and flexible scheduling",
    ],
    highlighted: true,
  },
];
