const marqueeItems = [
  "Watch Ka Premiere Nights",
  "Sync to Aurora+",
  "Host Tools",
  "Spoiler Safe Mode",
  "Interactive Trivia",
  "Soundtrack Rooms",
  "Creator Analytics",
  "Guest Lobby Links",
  "Live Reaction Clips",
  "Stage Channel Support"
];

export function FeatureMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {marqueeItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="marquee-track">
        {marqueeItems.map((item) => (
          <span key={`${item}-duplicate`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
