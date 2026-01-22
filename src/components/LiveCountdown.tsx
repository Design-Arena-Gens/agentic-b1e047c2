'use client';

import { useEffect, useMemo, useState } from "react";

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type LiveCountdownProps = {
  targetISO: string;
  label: string;
};

const toTimeParts = (distance: number): TimeParts => {
  const clamp = Math.max(0, distance);
  const days = Math.floor(clamp / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamp / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamp / (1000 * 60)) % 60);
  const seconds = Math.floor((clamp / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export function LiveCountdown({ targetISO, label }: LiveCountdownProps) {
  const targetDate = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [timeLeft, setTimeLeft] = useState<TimeParts>(() =>
    toTimeParts(targetDate - Date.now())
  );

  useEffect(() => {
    const tick = () => {
      setTimeLeft(toTimeParts(targetDate - Date.now()));
    };

    const intervalId = window.setInterval(tick, 1000);
    tick();
    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  const isComplete =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="glass" aria-live="polite">
      <span className="pill">Next watch party</span>
      <h3 style={{ fontSize: "1.5rem" }}>{label}</h3>
      <p style={{ marginTop: "0.75rem" }}>
        Countdown updates live so the entire crew lands in the lobby at the same
        moment—no more muted intros or spoilers.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.75rem",
          marginTop: "1.25rem"
        }}
      >
        {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
          <div
            key={unit}
            style={{
              padding: "1rem 0.75rem",
              borderRadius: "14px",
              background: isComplete
                ? "rgba(124, 92, 255, 0.18)"
                : "rgba(255, 255, 255, 0.05)",
              textAlign: "center",
              border: "1px solid rgba(255, 255, 255, 0.07)"
            }}
          >
            <div style={{ fontSize: "1.65rem", fontWeight: 700 }}>
              {timeLeft[unit].toString().padStart(2, "0")}
            </div>
            <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
              {unit.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
