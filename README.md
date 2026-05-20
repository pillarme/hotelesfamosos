# HotelesFamosos.com — La Bitácora de los Grandes Hoteles del Mundo

Static editorial site about famous hotels. 100% HTML/CSS/JS, GitHub Pages-compatible, no build step required.

## Local preview

```bash
python3 -m http.server 8080
# or
npx serve .
```

Open `http://localhost:8080`. **Must use HTTP — not `file://`** — so the Shorts JSON feeds load correctly (CORS).

## Deployment

This is a static site. Deploy the repo root directly to GitHub Pages (`main` branch, root folder). No build step required. No API keys. No backend.

- File system is case-sensitive on GitHub Pages (Linux). All internal links must use lowercase paths.
- The Shorts JSON feeds must be present in `data/shorts/` before deployment. See the Shorts section below.

## Structure

```
/
├── index.html                  Homepage
├── hoteles/                    20 hotel profiles + hub index
├── ciudades/                   10 city guides + hub index
├── colecciones/                10 thematic collections + hub index
├── guias/                      6 editorial guides + hub index
├── acerca-de/                  About La Bitácora
├── politica-editorial/         Editorial policy
├── 404.html
├── sitemap.xml
├── robots.txt
├── manifest.webmanifest
├── assets/
│   ├── css/
│   │   ├── main.css            Design tokens, reset, typography, grid
│   │   ├── components.css      Nav, footer, cards, modules
│   │   ├── pages.css           Page-level layouts
│   │   └── shorts.css          YouTube Shorts rail + modal
│   └── js/
│       ├── nav.js              Mobile menu, sticky header
│       └── shorts.js           Shorts feed renderer
├── data/
│   └── shorts/                 Static JSON feeds (20 files + registry + summary)
└── build/
    └── build-report.json       Full inventory and QA status
```

## YouTube Shorts Integration

### How it works

The Shorts module reads pre-generated static JSON files from `/data/shorts/`. The website itself **does not** scrape YouTube, call the YouTube API, or generate feeds. Feeds are produced by a separate local yt-dlp script in the `hotelesfamosos-shorts/` project and copied into this repo before deployment.

**Warning:** Do NOT confuse `hotelesfamosos-shorts/` with `viajenyc-shorts/`. They are separate projects for different sites. Never copy feeds from `viajenyc-shorts/` into this repo.

### Updating feeds

1. Run the yt-dlp curation script in `hotelesfamosos-shorts/` (separate project).
2. Copy the updated JSON files from `hotelesfamosos-shorts/data/shorts/` into `hotelesfamosos/data/shorts/`.
3. Commit and push. No build step required.

### Feed files

```
data/shorts/
├── registry.json               Maps page slugs → feed file names
├── curation-summary.json       Metadata about the full curation run
├── hoteles-famosos-home.json   Homepage feed
├── hoteles-famosos-hub.json    Hotels hub feed
├── hotel-*.json                One file per hotel profile (11 files)
└── ciudad-*.json               One file per city guide (7 files)
```

### Expected JSON shape

```json
{
  "items": [
    {
      "video_id": "dQw4w9WgXcQ",
      "title": "Hotel Name — brief description",
      "channel": "Channel Name",
      "thumbnail": "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      "duration_seconds": 58,
      "view_count": 124000,
      "watch_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ]
}
```

`video_id` is the primary key. `watch_url` is used as a fallback if `video_id` is absent. All other fields are optional.

### Adding the module to a new page

1. Link the stylesheet in `<head>` (after `pages.css`):

```html
<link rel="stylesheet" href="/assets/css/shorts.css?v=shorts1">
```

2. Add the section before `<footer>`:

```html
<section class="shorts-section"
         data-shorts-feed="/data/shorts/FEED_FILE.json"
         data-shorts-type="hotel">
  <div class="container">
    <p class="section-kicker">Video guía</p>
    <h2>Shorts para explorar este hotel</h2>
    <p>Videos breves seleccionados para complementar esta guía editorial.</p>
    <div class="shorts-rail-wrap">
      <div class="shorts-rail" data-shorts-container></div>
    </div>
    <p class="shorts-empty" data-shorts-empty hidden>
      Próximamente: videos breves seleccionados para esta guía.
    </p>
  </div>
</section>
```

Valid `data-shorts-type` values: `home`, `hub`, `hotel`, `city`.

3. Add the script before `</body>`:

```html
<script src="/assets/js/shorts.js?v=shorts1" defer></script>
```

### URL safety rules

- Every video ID passes through `getVideoId()`, which returns `null` if the string `"undefined"` appears anywhere in the value.
- All video IDs are wrapped in `encodeURIComponent()` before being placed in embed or watch URLs.
- Feed paths are checked for `"undefined"` before `fetch()` is called; the section is hidden entirely if the path is invalid.
- Thumbnails are validated: only accepted if the URL starts with `https://` and contains no `"undefined"`. Falls back to `https://img.youtube.com/vi/{id}/hqdefault.jpg`.
- **No URL generated by this renderer will ever contain the string `"undefined"`.**

## Design system

| Token | Value |
|---|---|
| `--color-deep` | `#141e30` (dark navy) |
| `--color-navy` | `#1B2A4A` |
| `--color-gold` | `#C9973A` |
| `--color-cream` | `#F8F4EE` |
| `--font-serif` | Playfair Display (Google Fonts) |
| `--font-sans` | Inter (Google Fonts) |

Breakpoints: `sm` 540px · `md` 768px · `lg` 1024px · `xl` 1280px

## Editorial policy

All content follows the policy at `/politica-editorial/`. Key rules:

- No fabricated hotel history, celebrity stays, awards, opening dates, prices, or availability.
- Uncertain claims use cautious wording ("conviene verificar...", "según fuentes ampliamente citadas...") or are omitted entirely.
- The sitewide disclaimer appears in the footer of every public page: *"Hoteles Famosos es una guía editorial e inspiracional. No somos una agencia de viajes ni una plataforma de reservas..."*
- No booking engine, no prices, no live availability.
