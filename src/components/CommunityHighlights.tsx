const highlights = [
  {
    title: "Real-time hypeboard",
    detail:
      "Sync reactions, emoji storms, and timeline markers without blocking the show. Highlights auto-save for post-show recaps."
  },
  {
    title: "Ambient spoiler guard",
    detail:
      "Late joiners get softly blurred chat until their playback catches up—keeping them safe from finale leaks."
  },
  {
    title: "Shared cue sheets",
    detail:
      "Hosts can preload polls, mini-games, and merch drops. Watch Ka cues them right when the moment lands."
  }
];

const testimonials = [
  {
    quote:
      "Our anime club went from scattered group chats to a weekly ritual. Watch Ka keeps the energy high.",
    author: "Avery • Neo Tokyo Collective"
  },
  {
    quote:
      "The spoiler guard feature is magic. I can run late and still scream during The Reveal like everyone else.",
    author: "Kenji • Midnight Mystery Pod"
  }
];

export function CommunityHighlights() {
  return (
    <section>
      <div className="section-header">
        <div className="section-title">
          <span className="pill">Community first</span>
          <h2 style={{ fontSize: "2rem" }}>
            Watch Ka powers crews, creators, and clubs
          </h2>
          <p>
            Build a space where the rollout feels effortless: from custom lobby
            music and synced lighting scenes to auto-generated highlight reels.
          </p>
        </div>
      </div>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
        }}
      >
        {highlights.map((item) => (
          <article key={item.title} className="glass">
            <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3>
            <p style={{ marginTop: "0.75rem" }}>{item.detail}</p>
          </article>
        ))}
      </div>
      <div
        style={{
          marginTop: "2.5rem",
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
        }}
      >
        {testimonials.map((item) => (
          <blockquote
            key={item.author}
            className="glass"
            style={{
              borderLeft: "4px solid rgba(124, 92, 255, 0.5)",
              fontSize: "0.98rem",
              lineHeight: 1.7
            }}
          >
            “{item.quote}”
            <footer
              style={{ marginTop: "1rem", color: "var(--text-secondary)" }}
            >
              {item.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
