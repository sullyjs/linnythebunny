# Open When — A Little Box of Letters ♡

A small romantic "Open When..." website made with plain HTML, CSS and JavaScript.

## Files

- `index.html` — page structure
- `style.css` — design, responsive layout and animations
- `script.js` — envelope generation and letters

## Personalizing it

Open `script.js` and edit the `letters` array near the top.

Each letter looks like:

```js
{
  title: "Open when you miss me",
  icon: "♡",
  preview: "for when you wish I were there",
  paragraphs: [
    "Your first paragraph.",
    "Your second paragraph."
  ]
}
```

Add or remove letters as you like.

## Running it

You can simply open `index.html` in a browser.

For local development, you can also run:

```bash
python -m http.server
```

Then visit `http://localhost:8000`.

## Publishing

This is static HTML/CSS/JS, so it can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or another static host.

## Privacy

The letters are stored directly in `script.js`. There is no backend or database in this version.
