# For Dhani ♡ — Romantic Surprise Website

A mobile-friendly romantic mini-site made with plain HTML, CSS, and JavaScript. Works on GitHub Pages; no build tools required.

## Files
- `index.html` — page content
- `style.css` — colors, layout, flowers, animations, responsive styling
- `script.js` — hidden messages, heart animations, hug button, music control

## Preview locally
Open `index.html` in a browser. If your browser restricts local audio, use a simple local server or publish to GitHub Pages.

## Publish with GitHub Pages
1. Create a new repository on GitHub (for example `for-dhani`).
2. Upload `index.html`, `style.css`, `script.js`, and optionally `music.mp3` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then press **Save**.
6. Wait a minute or two. GitHub will show your website URL in the Pages section, usually `https://YOUR-USERNAME.github.io/for-dhani/`.

## Add optional music
Music is user-initiated and does not autoplay. Add an MP3 file named exactly `music.mp3` to the repository root. Use a track you own or have permission to share. The music button will then play/pause it.

## Personalize it
- Change the name in `index.html` (search for `Dhani`).
- Edit the five messages in the `loveMessages` array near the top of `script.js`.
- Adjust the palette in the `:root` block at the top of `style.css`.
- You can add your own pictures in `index.html` if you'd like a more personal version.

## Notes
- The Google Fonts import needs internet access; fallback fonts are included.
- No tracking, analytics, external APIs, or backend are used.
