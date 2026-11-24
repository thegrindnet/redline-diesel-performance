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
