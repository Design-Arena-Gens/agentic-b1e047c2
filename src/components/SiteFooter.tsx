import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Watch Ka. Stream boldly.</span>
      <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <Link href="#trending">Discover</Link>
        <Link href="#planner">Planner</Link>
        <Link href="mailto:crew@watchka.app">Partner</Link>
      </nav>
    </footer>
  );
}
