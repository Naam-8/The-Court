export default function GridBackground() {
  return (
    <div
      className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, #a5ff7b 1px, transparent 1px),
          linear-gradient(to bottom, #a5ff7b 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}
