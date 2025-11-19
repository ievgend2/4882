# Oakwood Retreat Guide

Simple Vite + React house manual for 4882 Retreat guests. The app is optimized for mobile, uses HashRouter for reliable GitHub Pages routing, and keeps styling lightweight with a single CSS file.

## Install dependencies

```bash
npm install
```

## Run the dev server

```bash
npm run dev
```
Open the local URL that Vite prints in your terminal.

## Deploy to GitHub Pages

1. **Set repo info**  
   In `package.json`, keep the `homepage` field matching your GitHub Pages URL:  
   `"homepage": "https://<your-username>.github.io/<repo-name>/"`

2. **Configure Vite base path**  
   `vite.config.js` is already set with `base: "/<repo-name>/"`. Replace `<repo-name>` with the real repository name.

3. **Deploy**  
   ```bash
   npm run deploy
   ```
   This script builds the project (`npm run build`) and publishes the `dist` directory to the `gh-pages` branch via `gh-pages`.

4. **Future updates**  
   Push your code changes to `main` and re-run `npm run deploy` whenever you want to refresh the live site.

### Images

The repository ships with placeholder photos at:
- `public/images/living-room.jpg`
- `public/images/dining.jpg`
- `public/images/kitchen.jpg`
- `public/images/bedroom.jpg`

Replace these files with property photos (keep the same filenames). Because the app uses `HashRouter`, routed URLs keep working on GitHub Pages without extra configuration.
