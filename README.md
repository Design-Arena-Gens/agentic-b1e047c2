# Watch Ka

Watch Ka is a cinematic-first Next.js experience for coordinating remote watch parties. Curate a shared watchlist, discover trending originals, and keep your crew synced with live countdowns and spoiler-safe reminders.

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Launch the local dev server

   ```bash
   npm run dev
   ```

   The app will be available at http://localhost:3000.

3. Build for production

   ```bash
   npm run build
   npm start
   ```

4. Lint the project

   ```bash
   npm run lint
   ```

## Features

- Immersive hero section with live countdown to the next watch party
- Curated trending slate with mood tags and platform hints
- Interactive, shared watchlist planner with status cycling and quick-add form
- Community highlight strip for real-time features and testimonials
- Responsive, glassmorphism-inspired interface optimized for dark rooms

## Tech Stack

- Next.js 14 (App Router, TypeScript)
- React 18 with client/server components
- Inter font via next/font
- Hand-crafted CSS for a cinematic glass aesthetic

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx        # Landing page composition
│   │   ├── layout.tsx      # Root layout and metadata
│   │   └── globals.css     # Global styling
│   ├── components/         # UI building blocks
│   └── data/               # Static show and watchlist data
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Deployment

The app is ready for Vercel deployment:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b1e047c2
```

After a few seconds for DNS propagation, confirm the deployment:

```bash
curl https://agentic-b1e047c2.vercel.app
```

Enjoy curating unforgettable watch nights with Watch Ka! 💜
