# Redline Diesel Performance

Single-page React/Vite website for Redline Diesel Performance in Chaparral, NM.

## Tech
React 19, Vite 7, JavaScript/JSX, plain CSS, official Normalize.css 8.0.1, classic BEM classes.

## Local development
```bash
npm install
npm run dev
npm run lint
npm run build
```
Vite outputs production files to `dist`, not `build`.

## Structure
Components are in `src/components/<Component>/<Component>.jsx` with matching CSS. Business facts, navigation, inquiry topics and FAQs are in `src/utils/constants.js`. Images are in `src/assets/images`. App assembly lives in `src/components/App/App.jsx`.

## GitHub Pages
Repository: `thegrindnet/redline-diesel-performance` (current default branch is `master`). The GitHub Actions workflow should be configured for the branch selected for publishing. Go to Settings > Pages > Build and deployment > Source: GitHub Actions. Site address after configuration: `https://thegrindnet.github.io/redline-diesel-performance/`.

## Business information to verify
The service cards are **inquiry topics, not claims about offerings**. Ask Damek to confirm actual services before promoting them as available. Work-gallery photos and attributable customer reviews are not yet supplied; therefore neither is fabricated on the site. Current hero is illustrative licensed artwork from a previous Redline design conversation, not documentary evidence of Damek's shop. The logo comes from David's supplied branding assets.
