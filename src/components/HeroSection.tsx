import Link from "next/link";
import { LiveCountdown } from "@/components/LiveCountdown";
import { sharedWatchlist } from "@/data/shows";

const nextEvent = sharedWatchlist
  .filter((event) => event.status !== "finished")
  .sort(
    (a, b) =>
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  )[0];

export function HeroSection() {
  return (
    <section
      style={{
        paddingBottom: "3.5rem",
        background:
          "linear-gradient(135deg, rgba(20, 16, 40, 0.92), rgba(36, 29, 62, 0.78))",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "auto -120px -120px auto",
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle at center, rgba(124,92,255,0.35), transparent 70%)",
          filter: "blur(30px)",
          opacity: 0.7,
          pointerEvents: "none"
        }}
      />
      <header style={{ display: "grid", gap: "1.5rem" }}>
        <span className="pill">Watch together, from anywhere</span>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
          Watch Ka keeps your crew in sync and the hype alive.
        </h1>
        <p style={{ maxWidth: "560px", fontSize: "1.05rem" }}>
          Discover cinematic gems, invite friends in one tap, and let Watch Ka
          orchestrate reminders, countdowns, and interactive extras so you can
          embrace every reaction shot together.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="#planner" className="cta-button">
            Build Tonight&apos;s Lineup
          </Link>
          <Link href="#trending" className="muted-button">
            Browse Trending Worlds
          </Link>
        </div>
      </header>
      <div
        style={{
          marginTop: "2.75rem",
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
        }}
      >
        <div className="glass">
          <strong style={{ fontSize: "2.45rem" }}>3.2k</strong>
          <p style={{ marginTop: "0.85rem" }}>
            watch parties coordinated over the last 30 days with synced
            timelines and spoiler guards.
          </p>
        </div>
        <div className="glass">
          <strong style={{ fontSize: "2.45rem" }}>16</strong>
          <p style={{ marginTop: "0.85rem" }}>
            supported platforms, including Aurora+, Spectrum Stream, Vanta, and
            your custom Plex library.
          </p>
        </div>
        {nextEvent && (
          <LiveCountdown
            targetISO={nextEvent.timestamp}
            label={nextEvent.title}
          />
        )}
      </div>
    </section>
  );
}
