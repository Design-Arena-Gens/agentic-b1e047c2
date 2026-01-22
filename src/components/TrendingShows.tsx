import { trendingShows } from "@/data/shows";

export function TrendingShows() {
  return (
    <section id="trending">
      <div className="section-header">
        <div className="section-title">
          <span className="pill">Discover worlds</span>
          <h2 style={{ fontSize: "2rem" }}>Trending scenes on Watch Ka</h2>
          <p>
            Curated by the community every 6 hours. Pair these with themed
            reactions, shared playlists, and synced trivia drops for movies and
            series nights.
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span className="chip">
            <span style={{ width: "10px", height: "10px", background: "#7c5cff", borderRadius: "999px" }} />
            Live edits
          </span>
          <span className="chip">Editor&apos;s picks</span>
          <span className="chip">Fresh premieres</span>
        </div>
      </div>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
        }}
      >
        {trendingShows.map((show) => (
          <article key={show.id} className="trend-card">
            <div
              style={{
                height: "160px",
                borderRadius: "14px",
                background:
                  "radial-gradient(circle at 20% 20%, rgba(124,92,255,0.38), transparent 75%), radial-gradient(circle at 80% 30%, rgba(0,208,255,0.28), transparent 70%), rgba(12,12,24,0.8)",
                border: "1px solid rgba(255, 255, 255, 0.06)"
              }}
            />
            <div>
              <strong>{show.title}</strong>
              <span style={{ display: "block", marginTop: "0.35rem" }}>
                {show.genre} • {show.runtime}
              </span>
            </div>
            <p>{show.synopsis}</p>
            <footer
              style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
            >
              {show.mood.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
              <span className="chip">On {show.platform}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
