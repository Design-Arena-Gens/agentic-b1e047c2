'use client';

import { useMemo, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { sharedWatchlist, type WatchEvent } from "@/data/shows";

type PlannerEvent = WatchEvent & { notes?: string };

const STATUS_FLOW: Record<WatchEvent["status"], WatchEvent["status"]> = {
  scheduled: "watching",
  watching: "finished",
  finished: "scheduled"
};

const formatDateLabel = (iso: string) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
    timeZoneName: "short"
  });
  return formatter.format(new Date(iso));
};

export function WatchlistPlanner() {
  const sorted = useMemo(
    () =>
      [...sharedWatchlist].sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      ),
    []
  );

  const [events, setEvents] = useState<PlannerEvent[]>(sorted);
  const [title, setTitle] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [focus, setFocus] = useState("");

  const upcomingCount = events.filter(
    (event) => event.status !== "finished"
  ).length;
  const finishedCount = events.length - upcomingCount;

  const handleToggleStatus = (id: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id
          ? { ...event, status: STATUS_FLOW[event.status] }
          : event
      )
    );
  };

  const handleAddEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !timestamp) return;

    const newEvent: PlannerEvent = {
      id: crypto.randomUUID(),
      title,
      date: formatDateLabel(timestamp),
      timestamp,
      host: "You",
      attendees: Math.floor(Math.random() * 12) + 4,
      status: "scheduled",
      focus: focus
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    };

    setEvents((prev) =>
      [...prev, newEvent].sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      )
    );
    setTitle("");
    setTimestamp("");
    setFocus("");
  };

  return (
    <section id="planner">
      <div className="section-header">
        <div className="section-title">
          <span className="pill">Shared watchlist</span>
          <h2 style={{ fontSize: "2rem" }}>Plan the perfect Watch Ka night</h2>
          <p>
            Line up episodes, alternate host roles, and track who&apos;s seen
            what. When you move a show forward, everyone sees it instantly in
            chat and in their calendar.
          </p>
        </div>
        <div className="stats-grid" style={{ maxWidth: "340px" }}>
          <div className="stat-card">
            <span>Upcoming sessions</span>
            <h3>{upcomingCount}</h3>
          </div>
          <div className="stat-card">
            <span>Replays complete</span>
            <h3>{finishedCount}</h3>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleAddEvent}
        className="glass"
        style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}
      >
        <h3 style={{ fontSize: "1.3rem" }}>Add a new watch moment</h3>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
          }}
        >
          <label style={{ display: "grid", gap: "0.45rem" }}>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
              Title
            </span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. Midnight Café theories"
              required
              style={inputStyle}
            />
          </label>
          <label style={{ display: "grid", gap: "0.45rem" }}>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
              Start time
            </span>
            <input
              type="datetime-local"
              value={timestamp}
              onChange={(event) => setTimestamp(event.target.value)}
              required
              style={inputStyle}
            />
          </label>
          <label style={{ display: "grid", gap: "0.45rem" }}>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
              Focus beats (comma separated)
            </span>
            <input
              value={focus}
              onChange={(event) => setFocus(event.target.value)}
              placeholder="Episode 5, live poll, soundtrack dive"
              style={inputStyle}
            />
          </label>
        </div>
        <button type="submit" className="cta-button" style={{ justifySelf: "flex-start" }}>
          Save to watchlist
        </button>
      </form>

      <div className="watchlist-grid">
        {events.map((event) => (
          <article
            key={event.id}
            className="watch-card"
            data-status={event.status}
          >
            <header style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
              <div>
                <strong style={{ fontSize: "1.15rem" }}>{event.title}</strong>
                <p style={{ marginTop: "0.35rem" }}>{event.date}</p>
              </div>
              <span className="chip">
                {event.status === "scheduled" && "Queued"}
                {event.status === "watching" && "Live now"}
                {event.status === "finished" && "Wrapped"}
              </span>
            </header>
            <footer>
              <span>Host: {event.host}</span>
              <span>{event.attendees} attending</span>
              {event.focus.slice(0, 3).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </footer>
            <button
              type="button"
              className="muted-button"
              onClick={() => handleToggleStatus(event.id)}
            >
              Mark as {STATUS_FLOW[event.status]}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

const inputStyle: CSSProperties = {
  padding: "0.85rem 1rem",
  borderRadius: "12px",
  background: "rgba(0, 0, 0, 0.28)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  color: "var(--text-primary)",
  fontSize: "0.95rem"
};
