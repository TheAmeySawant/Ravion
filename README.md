# Ravion PWA

A frontend-only PWA prototype for Indian NSE/BSE traders, built with Next.js App Router, TypeScript, Tailwind CSS, Recharts, Serwist and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For the service worker / install experience, use a production build over HTTPS (or localhost):

```bash
npm run build
npx serve out
```

## Cloudflare Pages

This app uses Next.js static export (`output: 'export'`) and is deployable as a static Cloudflare Pages site.

- Build command: `npm run build`
- Build output directory: `out`
- Node.js: 20+

The generated `out/sw.js` and `out/manifest.json` are included in the export. Cloudflare Pages serves over HTTPS, which enables PWA installation and service-worker registration.

## Demo flow

- `/` is the broker connection / OAuth demo page. It does not connect to a broker or ask for credentials. Choose **New trader** or **Returning** before choosing a broker.
- New traders get one randomly selected 7-question set from the five included sets. Selected answers are saved immediately in browser local storage.
- Completing the check-in shows a 1.5-second “Fetching your trading profile” state and opens `/profile`.
- Returning traders go directly to the demo profile after the same 1.5-second loading state.
- `/profile` and `/consult` are available from the persistent bottom navigation. Consult uses local sample responses; it does not call an LLM.

All broker, trading, performance and chat content is demo data. No server, OAuth credentials, or real brokerage data is used.
