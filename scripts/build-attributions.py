#!/usr/bin/env python3
"""Regenerate creditos-imagenes/index.html from data/image-credits.json.

Workflow when adding new Wikimedia Commons images:
  1. Add an entry to data/image-credits.json (see existing entries for shape).
  2. Run:  python3 scripts/build-attributions.py
  3. Commit data/image-credits.json and creditos-imagenes/index.html together.

The attributions page is the project's record of every third-party image,
its author, license and source — required by the CC BY / CC BY-SA terms.
"""
import json, html, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
manifest = json.load(open(f"{ROOT}/data/image-credits.json", encoding="utf-8"))
images = sorted(manifest["images"], key=lambda x: x["hotel"].lower())
updated = manifest.get("updated", "")

def e(s):
    return html.escape(s or "", quote=True)

rows = []
for im in images:
    lic = e(im["license"]) or "Licencia no especificada"
    if im.get("license_url"):
        lic = f'<a href="{e(im["license_url"])}" target="_blank" rel="license noopener">{lic}</a>'
    src = e(im.get("source", "Wikimedia Commons"))
    if im.get("commons_url"):
        src = f'<a href="{e(im["commons_url"])}" target="_blank" rel="noopener">{src}</a>'
    rows.append(
        '          <li class="credit-item">\n'
        f'            <p class="credit-item__hotel">{e(im["hotel"])}</p>\n'
        '            <p class="credit-item__meta">'
        f'<span>Fotografía: {e(im["author"])}</span>'
        f'<span>Licencia: {lic}</span>'
        f'<span>Fuente: {src}</span></p>\n'
        '          </li>'
    )
credits_html = "\n".join(rows)
count = len(images)

PAGE = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Créditos de imágenes — Atribuciones | Hoteles Famosos</title>
  <meta name="description" content="Créditos y atribuciones de las {count} fotografías de hotel utilizadas en Hoteles Famosos, obtenidas de Wikimedia Commons bajo licencias libres Creative Commons y de dominio público.">
  <link rel="canonical" href="https://hotelesfamosos.com/creditos-imagenes/">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Créditos de imágenes — Hoteles Famosos">
  <meta property="og:description" content="Atribuciones de las fotografías de hotel utilizadas en Hoteles Famosos, bajo licencias libres de Wikimedia Commons.">
  <meta property="og:url" content="https://hotelesfamosos.com/creditos-imagenes/">
  <meta property="og:image" content="https://hotelesfamosos.com/assets/img/og/default.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Hoteles Famosos — La Bitácora de los Grandes Hoteles del Mundo">
  <meta property="og:locale" content="es_419">
  <meta property="og:site_name" content="Hoteles Famosos">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Créditos de imágenes — Hoteles Famosos">
  <meta name="twitter:description" content="Atribuciones de las fotografías utilizadas en Hoteles Famosos.">
  <meta name="twitter:image" content="https://hotelesfamosos.com/assets/img/og/default.png">
  <meta name="twitter:image:alt" content="Hoteles Famosos — La Bitácora de los Grandes Hoteles del Mundo">
  <link rel="icon" type="image/svg+xml" href="/assets/img/favicons/favicon.svg">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="apple-touch-icon" href="/assets/img/favicons/apple-touch-icon.png">
  <meta name="theme-color" content="#1B2A4A">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"></noscript>
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  <link rel="stylesheet" href="/assets/css/pages.css">
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Créditos de imágenes",
    "description": "Atribuciones de las fotografías de hotel utilizadas en Hoteles Famosos, obtenidas de Wikimedia Commons bajo licencias libres.",
    "url": "https://hotelesfamosos.com/creditos-imagenes/",
    "inLanguage": "es",
    "isPartOf": {{"@type": "WebSite", "name": "Hoteles Famosos", "url": "https://hotelesfamosos.com/"}},
    "breadcrumb": {{
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://hotelesfamosos.com/"}},
        {{"@type": "ListItem", "position": 2, "name": "Créditos de imágenes", "item": "https://hotelesfamosos.com/creditos-imagenes/"}}
      ]
    }}
  }}
  </script>
</head>
<body>
  <header class="site-header" id="site-header">
    <div class="container">
      <nav class="nav" aria-label="Navegación principal">
        <a href="/" class="nav__logo" aria-label="Hoteles Famosos — Inicio">
          <span class="nav__logo-text">Hoteles Famosos</span>
          <span class="nav__logo-sub">La Bitácora</span>
        </a>
        <button class="nav__toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Abrir menú de navegación">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav__menu" id="nav-menu" role="list">
          <li><a href="/hoteles/" class="nav__link">Hoteles</a></li>
          <li><a href="/ciudades/" class="nav__link">Por Ciudad</a></li>
          <li><a href="/colecciones/" class="nav__link">Colecciones</a></li>
          <li><a href="/guias/" class="nav__link">Guías</a></li>
          <li><a href="/acerca-de/" class="nav__link">Acerca de</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <div class="hub-header">
      <div class="container">
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <ol>
            <li><a href="/">Inicio</a></li>
            <li aria-current="page">Créditos de imágenes</li>
          </ol>
        </nav>
        <h1 class="hub-header__title">Créditos de imágenes</h1>
        <p class="hub-header__desc">Las fotografías de los perfiles de hotel de Hoteles Famosos provienen de Wikimedia Commons y se utilizan bajo licencias libres (Creative Commons o dominio público). Esta página reconoce a cada autor y enlaza la licencia y la fuente original de cada imagen.</p>
      </div>
    </div>

    <section class="section section--cream" aria-label="Atribuciones de imágenes">
      <div class="container">
        <div class="credits-intro">
          <p>Creemos en el crédito justo al trabajo de los fotógrafos. A continuación se listan las {count} imágenes de hotel utilizadas en el sitio, con su autor, su licencia y un enlace a la página original en Wikimedia Commons. Las licencias Creative Commons «BY» y «BY-SA» exigen atribución; las imágenes de dominio público y bajo CC0 se acreditan igualmente como cortesía y transparencia.</p>
          <p class="credits-intro__note">Si detectas un error en una atribución, escríbenos y lo corregiremos. Última actualización: {e(updated)}.</p>
        </div>
        <ul class="credits-list" role="list">
{credits_html}
        </ul>
        <p class="credits-foot">Las marcas y nombres de los hoteles pertenecen a sus respectivos titulares. Hoteles Famosos es una publicación editorial independiente sin afiliación con los establecimientos descritos.</p>
      </div>
    </section>
  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer__top">
        <div>
          <p class="footer__logo-text">Hoteles Famosos</p>
          <span class="footer__logo-sub">La Bitácora</span>
          <p class="footer__brand-desc">Una guía editorial e inspiracional de los hoteles más icónicos del mundo.</p>
        </div>
        <nav class="footer__nav" aria-label="Navegación del pie de página">
          <div>
            <p class="footer__nav-heading">Hoteles</p>
            <ul>
              <li><a href="/hoteles/">Todos los hoteles</a></li>
              <li><a href="/hoteles-por-pais/">Hoteles por país</a></li>
              <li><a href="/ciudades/">Por ciudad</a></li>
            </ul>
          </div>
          <div>
            <p class="footer__nav-heading">Explorar</p>
            <ul>
              <li><a href="/colecciones/">Colecciones</a></li>
              <li><a href="/guias/">Guías editoriales</a></li>
              <li><a href="/sitemap.xml">Mapa del sitio</a></li>
            </ul>
          </div>
          <div>
            <p class="footer__nav-heading">La Bitácora</p>
            <ul>
              <li><a href="/acerca-de/">Acerca de</a></li>
              <li><a href="/politica-editorial/">Política editorial</a></li>
              <li><a href="/creditos-imagenes/">Créditos de imágenes</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="footer__disclaimer">
        <p><strong>Aviso editorial:</strong> Hoteles Famosos es una guía editorial e inspiracional. No somos una agencia de viajes ni una plataforma de reservas. La información puede cambiar; antes de planificar una visita o estadía, verifica tarifas, disponibilidad, servicios, políticas y datos históricos en fuentes oficiales del hotel o fuentes confiables actualizadas.</p>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">© 2025 Hoteles Famosos. Todos los derechos reservados.</p>
        <nav class="footer__legal-links" aria-label="Enlaces legales">
          <a href="/politica-editorial/">Política editorial</a>
          <a href="/acerca-de/">Acerca de</a>
        </nav>
      </div>
    </div>
  </footer>
  <script src="/assets/js/nav.js"></script>
</body>
</html>
"""

os.makedirs(f"{ROOT}/creditos-imagenes", exist_ok=True)
with open(f"{ROOT}/creditos-imagenes/index.html", "w", encoding="utf-8") as f:
    f.write(PAGE)
print(f"creditos-imagenes/index.html regenerated — {count} image credits")
