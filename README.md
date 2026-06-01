# Izolace Riedl — Svelte 5 web

Hotový responzivní statický web podle dodaného návrhu.

## Spuštění lokálně

```bash
npm install
npm run dev
```

Poté otevřete adresu, kterou vypíše terminál, typicky `http://localhost:5173`.

## Build pro hosting

```bash
npm run build
```

Výsledné soubory budou ve složce `dist/`. Tu můžete nahrát na běžný statický hosting, Netlify, Vercel nebo server u domény.

## Co upravit

- Texty a sekce jsou v `src/App.svelte`.
- Vzhled a responzivita jsou v `src/app.css`.
- Fotky jsou v `public/images/`.
- Formulář je nyní nastavený přes `mailto:`. Pro produkci je lepší napojit ho na backend, Formspree, Netlify Forms nebo vlastní API.
