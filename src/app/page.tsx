import { HeroSection } from "@/components/HeroSection";
import { TrendingShows } from "@/components/TrendingShows";
import { WatchlistPlanner } from "@/components/WatchlistPlanner";
import { CommunityHighlights } from "@/components/CommunityHighlights";
import { FeatureMarquee } from "@/components/FeatureMarquee";
import { SiteFooter } from "@/components/SiteFooter";

const integrations = [
  {
    title: "Platform sync",
    detail:
      "Auto-detect Aurora+, Vanta, Nimbus, and Plex libraries. Everyone joins the same stream link, right when it unlocks."
  },
  {
    title: "Creator mode",
    detail:
      "Drop merch reminders, highlight codes, and Patreon shoutouts seamlessly between scenes."
  },
  {
    title: "Companion display",
    detail:
      "Share second-screen extras: ambient lighting cues, soundboard buttons, and poll dashboards."
  }
];

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeatureMarquee />
        <TrendingShows />
        <WatchlistPlanner />
        <section>
          <div className="section-header">
            <div className="section-title">
              <span className="pill">Plug and play</span>
              <h2 style={{ fontSize: "2rem" }}>
                Integrations that keep the vibe continuous
              </h2>
              <p>
                Watch Ka bridges your favorite platforms and real-world setups.
                Build the perfect experience in minutes and reuse templates for
                future premieres.
              </p>
            </div>
          </div>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
            }}
          >
            {integrations.map((item) => (
              <article key={item.title} className="glass">
                <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3>
                <p style={{ marginTop: "0.75rem" }}>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
        <CommunityHighlights />
      </main>
      <SiteFooter />
    </>
  );
}
