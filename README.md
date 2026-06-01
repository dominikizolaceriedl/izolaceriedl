# Izolace Riedl — Svelte 5 web

Kompletní statický web připravený pro GitHub + Vercel.

## Lokální spuštění

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Výstup je ve složce `dist/`.

## Vercel

Nastavení:

- Framework Preset: Vite
- Install Command: npm install
- Build Command: npm run build
- Output Directory: dist

Důležité: do Gitu se nenahrává `node_modules` ani `dist`.
