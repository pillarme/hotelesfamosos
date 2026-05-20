# PLAN.md — hotelesfamosos.com

**Estado:** Borrador para revisión y aprobación. No se ha escrito código aún.

---

## 1. Project Summary

### Qué es hotelesfamosos.com

Una guía editorial estática en español sobre los hoteles más famosos, icónicos, cinematográficos, históricos y legendarios del mundo. El sitio funciona como un archivo cultural de lujo: no vende reservas, no muestra precios en vivo, no genera disponibilidad. Es un destino para leer, explorar e inspirarse.

### Para quién es

- Viajeros curiosos de habla hispana, principalmente de América Latina
- Aficionados al cine que quieren saber qué hoteles aparecen en sus películas favoritas
- Amantes de la arquitectura, el diseño y la cultura de viaje
- Lectores de revistas como Condé Nast Traveler, Architectural Digest, o Town & Country en su versión latinoamericana
- Personas que planean un viaje aspiracional y buscan contexto cultural antes de reservar en otro sitio

### Qué NO es

- No es una agencia de viajes ni un motor de reservas
- No es un comparador de precios
- No compite con Booking, TripAdvisor, o Google Hotels
- No es un blog de viajes genérico ni contenido de IA sin curaduría
- No hace afirmaciones no verificables sobre historia, celebridades, premios o propiedad

### Cómo se ve el éxito

- El sitio se siente como una revista de viajes de lujo en papel, no como una página de afiliados
- Un lector de CDMX, Bogotá o Buenos Aires lo comparte porque dice algo que no había leído en otro lugar
- Google indexa el sitio como una fuente editorial de autoridad sobre hoteles famosos en español
- Cada página supera la prueba de "¿lo publicaría Condé Nast en español?"
- El sitio pasa el test de voz humana: no suena generado, suena editado

---

## 2. Site OS — Sistema Operativo Creativo

### Nombre del OS: **La Bitácora**

Una bitácora es el diario de a bordo de un explorador. Cada entrada documenta un lugar, un hallazgo, un momento. Este sitio es la bitácora de los grandes hoteles del mundo: no un catálogo de compra, sino un registro de lo que hace a cada lugar memorable, irrepetible, o simplemente imposible de ignorar.

### Personalidad de marca

| Atributo | Descripción |
|---|---|
| Tono editorial | Elegante pero accesible. Como un corresponsal de viajes con buen criterio, no un vendedor. |
| Voz | Primera persona plural cálida ("nos detenemos", "vale la pena conocer"). Nunca distante. |
| Ritmo | Pausado. Párrafos cortos. Espacio en blanco como herramienta editorial. |
| Humor | Sutil, irónico con buen gusto. Nunca forzado. |
| Postura | Curioso, no deslumbrado. Informado, no pedante. |
| Guardia de hechos | Cauteloso, honesto sobre la incertidumbre. Se prefiere "se dice que" a afirmar sin fuente. |

### Reglas editoriales

1. **Evergreen siempre.** Sin fechas específicas de precios, disponibilidad o eventos pasados que puedan caducar.
2. **Nunca fabricar.** Ningún dato que no sea de dominio público y verificable.
3. **La reputación, no la verdad absoluta.** Frasear como "es conocido por...", "su reputación incluye...", "según su historia documentada...".
4. **Separación de capas.** Cada hotel profile distingue claramente: fama, tipo de viajero, qué verificar, contexto editorial.
5. **Sin llamados a la acción de reserva.** Sin "Reserva ahora", sin precios, sin "últimas habitaciones".
6. **Lenguaje aspiracional, no transaccional.** "Si alguna vez tienes la oportunidad de...", no "por solo $X por noche".
7. **Primero el lector.** Cada página debe responder: ¿por qué debería importarme este hotel?

### Lenguaje visual

- **Metáfora visual principal:** El lobby de un gran hotel clásico. Mármol, latón, luz suave, detalles que piden atención.
- **Fotografía:** Siempre atmosférica. Grandes tomas arquitectónicas, detalles de lujo, vistas de ciudad. Nunca fotos de camas vacías o fotos corporativas de hotel.
- **Tipografía:** La jerarquía serif/sans-serif clásica de las revistas de viaje premium.
- **Color:** Profundidad nocturna + oro cálido + crema. Como las páginas amarillentas de un libro de viajes antiguo iluminado por una lámpara de latón.
- **Espaciado:** Generoso. El lujo se comunica con espacio, no con densidad.
- **Movimiento:** Transiciones suaves. Sin flashazos. Sin autoplays. Elegante y controlado.

### Módulos recurrentes

| Módulo | Descripción |
|---|---|
| **Ficha de Hotel** | Datos clave: ciudad, país, categoría general, por qué es famoso |
| **Nota Editorial** | Párrafo de 2-3 líneas con la voz editorial del sitio |
| **Tipo de Viajero** | Breve descripción de a quién le interesa este hotel |
| **Qué Verificar** | Lista de lo que el lector debe confirmar en fuentes oficiales antes de planear |
| **Contexto Cultural** | Conexiones con cine, arquitectura, historia, sin afirmar hechos no verificables |
| **Hoteles Relacionados** | Grid de 3-4 perfiles similares con enlace interno |
| **Colecciones Relacionadas** | 2-3 colecciones temáticas que incluyen este hotel |
| **Aviso Editorial** | Disclaimer fijo en cada perfil: este sitio es editorial, no de reservas |
| **Cita del Sitio** | Una línea elegante sobre el hotel, atribuida a "la reputación del lugar" |

### Cómo evitar sonar genérico

- Cada hotel tiene un ángulo editorial único, no solo una descripción corporativa
- Las colecciones tienen perspectiva propia ("Los hoteles que el cine eligió antes que los turistas")
- El lenguaje evita clichés de travel writing: sin "impresionante", sin "lujo incomparable", sin "una experiencia única"
- Los titulares usan preguntas o giros inesperados
- El sitio tiene una voz reconocible que persiste de página a página

---

## 3. Information Architecture

### Hubs de contenido

| Hub | URL base | Tipo |
|---|---|---|
| Perfiles de Hotel | `/hoteles/` | Hotel profiles |
| Guías por Ciudad | `/ciudades/` | Destination guides |
| Colecciones Temáticas | `/colecciones/` | Theme collections |
| Guías Prácticas / Editoriales | `/guias/` | Practical + editorial |
| Institucional | `/` nivel raíz | About, policy, index |

### Páginas propuestas: 46 páginas + homepage + soporte

---

## 4. Page Types

### PT-1: Homepage (Portada)
**URL:** `/`
**Propósito:** Hub de descubrimiento. Presenta La Bitácora como concepto, ancla al lector, da acceso a todos los hubs.
**Módulos:** Hero editorial, colecciones destacadas, perfiles recientes, guías por ciudad, CTA editorial (explorar, no reservar).

### PT-2: Perfil de Hotel
**URL:** `/hoteles/[slug]/`
**Propósito:** Página definitiva sobre un hotel específico. Voz editorial + contexto cultural + datos clave + qué verificar.
**Módulos:** Ficha, Nota Editorial, Tipo de Viajero, Qué Verificar, Contexto Cultural, Hoteles Relacionados, Aviso Editorial.

### PT-3: Guía por Ciudad
**URL:** `/ciudades/[slug]/`
**Propósito:** Índice editorial de los hoteles famosos de una ciudad específica. No es solo una lista: tiene contexto cultural sobre esa ciudad hotelera.
**Módulos:** Intro editorial de la ciudad, grid de hoteles, qué hace especial a la escena hotelera de esa ciudad, colecciones relacionadas.

### PT-4: Colección Temática
**URL:** `/colecciones/[slug]/`
**Propósito:** Agrupa hoteles por un eje temático con perspectiva editorial. Puede ser "hoteles de película", "palacios convertidos", "hoteles más fotografiados".
**Módulos:** Intro editorial con ángulo propio, grid de hoteles con extracto, por qué esta colección importa, colecciones relacionadas.

### PT-5: Guía Editorial / Práctica
**URL:** `/guias/[slug]/`
**Propósito:** Artículos más largos que responden preguntas editoriales o prácticas. "¿Qué hace famoso a un hotel?", "Cómo pensar el turismo de lujo", glosarios.
**Módulos:** Artículo largo, FAQs, links internos, aviso editorial.

### PT-6: Acerca de / Política Editorial
**URL:** `/acerca-de/`, `/politica-editorial/`
**Propósito:** Explica quién hace el sitio, qué metodología editorial usa, el disclaimer de no-reservas.
**Módulos:** Manifesto editorial, política de hechos, contacto, links a páginas clave.

---

## 5. Page Inventory (46 páginas + homepage)

### Homepage
| # | Página | URL | Tipo | Intención de búsqueda |
|---|---|---|---|---|
| 0 | Portada | `/` | Homepage | hoteles famosos del mundo |

### Perfiles de Hotel (20 páginas)
| # | Hotel | URL | Tipo | Intención |
|---|---|---|---|---|
| 1 | The Plaza, Nueva York | `/hoteles/the-plaza-nueva-york/` | PT-2 | hotel plaza nueva york historia |
| 2 | Raffles Hotel, Singapur | `/hoteles/raffles-singapur/` | PT-2 | raffles hotel singapur famoso |
| 3 | Copacabana Palace, Río de Janeiro | `/hoteles/copacabana-palace-rio/` | PT-2 | copacabana palace rio de janeiro |
| 4 | Hotel Nacional, La Habana | `/hoteles/hotel-nacional-habana/` | PT-2 | hotel nacional cuba historia |
| 5 | The Ritz, París | `/hoteles/ritz-paris/` | PT-2 | hotel ritz paris historia |
| 6 | Claridge's, Londres | `/hoteles/claridges-londres/` | PT-2 | claridges hotel londres |
| 7 | Burj Al Arab, Dubái | `/hoteles/burj-al-arab-dubai/` | PT-2 | burj al arab dubai famoso |
| 8 | The Savoy, Londres | `/hoteles/the-savoy-londres/` | PT-2 | hotel the savoy londres historia |
| 9 | Hotel Danieli, Venecia | `/hoteles/danieli-venecia/` | PT-2 | hotel danieli venecia |
| 10 | Pera Palace Hotel, Estambul | `/hoteles/pera-palace-estambul/` | PT-2 | pera palace hotel estambul |
| 11 | Fairmont Château Frontenac, Quebec | `/hoteles/chateau-frontenac-quebec/` | PT-2 | chateau frontenac quebec |
| 12 | Alvear Palace Hotel, Buenos Aires | `/hoteles/alvear-palace-buenos-aires/` | PT-2 | alvear palace hotel buenos aires |
| 13 | Four Seasons George V, París | `/hoteles/four-seasons-george-v-paris/` | PT-2 | four seasons george v paris |
| 14 | Hotel Del Coronado, San Diego | `/hoteles/hotel-del-coronado-san-diego/` | PT-2 | hotel del coronado san diego |
| 15 | The Beverly Hills Hotel | `/hoteles/beverly-hills-hotel/` | PT-2 | beverly hills hotel historia |
| 16 | Grand Hotel Villa d'Este, Italia | `/hoteles/villa-deste-como/` | PT-2 | villa d'este lago de como |
| 17 | Cipriani, Venecia | `/hoteles/cipriani-venecia/` | PT-2 | hotel cipriani venecia |
| 18 | The Dorchester, Londres | `/hoteles/the-dorchester-londres/` | PT-2 | the dorchester hotel londres |
| 19 | Grand Hyatt, Tokio | `/hoteles/park-hyatt-tokio/` | PT-2 | park hyatt tokio lost in translation |
| 20 | Hotel Esplendor / Casa Gangotena, Quito | `/hoteles/casa-gangotena-quito/` | PT-2 | hoteles famosos quito ecuador |

### Guías por Ciudad (10 páginas)
| # | Ciudad | URL | Tipo | Intención |
|---|---|---|---|---|
| 21 | Nueva York | `/ciudades/nueva-york/` | PT-3 | hoteles famosos nueva york |
| 22 | París | `/ciudades/paris/` | PT-3 | hoteles famosos paris |
| 23 | Londres | `/ciudades/londres/` | PT-3 | hoteles famosos londres |
| 24 | La Habana | `/ciudades/la-habana/` | PT-3 | hoteles historicos la habana |
| 25 | Buenos Aires | `/ciudades/buenos-aires/` | PT-3 | hoteles famosos buenos aires |
| 26 | Ciudad de México | `/ciudades/ciudad-de-mexico/` | PT-3 | hoteles historicos ciudad de mexico |
| 27 | Venecia | `/ciudades/venecia/` | PT-3 | hoteles famosos venecia italia |
| 28 | Dubái | `/ciudades/dubai/` | PT-3 | hoteles famosos dubai |
| 29 | Tokio | `/ciudades/tokio/` | PT-3 | hoteles famosos tokio |
| 30 | Roma | `/ciudades/roma/` | PT-3 | hoteles historicos roma |

### Colecciones Temáticas (10 páginas)
| # | Colección | URL | Tipo | Intención |
|---|---|---|---|---|
| 31 | Hoteles de película | `/colecciones/hoteles-de-pelicula/` | PT-4 | hoteles que salieron en peliculas |
| 32 | Palacios convertidos en hotel | `/colecciones/palacios-convertidos-hotel/` | PT-4 | palacios convertidos en hoteles |
| 33 | Los hoteles más fotografiados | `/colecciones/hoteles-mas-fotografiados/` | PT-4 | hoteles mas fotografiados mundo |
| 34 | Hoteles con historia | `/colecciones/hoteles-con-historia/` | PT-4 | hoteles historicos famosos |
| 35 | Hoteles de diseño y arquitectura | `/colecciones/hoteles-arquitectura-diseno/` | PT-4 | hoteles diseño arquitectura |
| 36 | Hoteles icónicos de América Latina | `/colecciones/hoteles-iconicos-america-latina/` | PT-4 | hoteles famosos america latina |
| 37 | Hoteles frente al mar | `/colecciones/hoteles-frente-al-mar/` | PT-4 | hoteles famosos frente al mar |
| 38 | Hoteles de gran lujo clásico | `/colecciones/hoteles-gran-lujo-clasico/` | PT-4 | hoteles de lujo clasico mundo |
| 39 | Hoteles con leyendas y misterios | `/colecciones/hoteles-con-leyendas/` | PT-4 | hoteles misteriosos leyendas |
| 40 | Los hoteles más antiguos en operación | `/colecciones/hoteles-mas-antiguos/` | PT-4 | hoteles mas antiguos del mundo |

### Guías Editoriales y Prácticas (6 páginas)
| # | Guía | URL | Tipo | Intención |
|---|---|---|---|---|
| 41 | ¿Qué hace famoso a un hotel? | `/guias/que-hace-famoso-un-hotel/` | PT-5 | por qué son famosos los hoteles |
| 42 | Cómo leer un hotel de lujo | `/guias/como-leer-un-hotel-de-lujo/` | PT-5 | guia turismo de lujo consejos |
| 43 | Glosario hotelero para viajeros | `/guias/glosario-hotelero/` | PT-5 | terminos hoteles lujo glosario |
| 44 | Preguntas frecuentes sobre hoteles famosos | `/guias/preguntas-frecuentes/` | PT-5 | faq hoteles famosos |
| 45 | Grandes bares de hotel en el mundo | `/guias/bares-de-hotel-famosos/` | PT-5 | bares de hotel famosos mundo |
| 46 | La historia del hotel de lujo moderno | `/guias/historia-hotel-lujo-moderno/` | PT-5 | historia hoteles lujo origen |

### Páginas institucionales
| # | Página | URL | Tipo |
|---|---|---|---|
| 47 | Acerca de La Bitácora | `/acerca-de/` | PT-6 |
| 48 | Política editorial y aviso legal | `/politica-editorial/` | PT-6 |

**Total: 48 páginas + archivos de soporte (sitemap.xml, robots.txt, 404, manifest)**

---

## 6. Internal Linking Logic

- Cada perfil de hotel enlaza a: su guía de ciudad + 2-3 colecciones temáticas + 3-4 hoteles relacionados
- Cada guía de ciudad enlaza a: todos los perfiles de hotel de esa ciudad + colecciones relevantes
- Cada colección temática enlaza a: todos los perfiles incluidos + colecciones hermanas
- Homepage enlaza a: las 3 colecciones más editoriales + 3 ciudades + 6 perfiles destacados + guías
- Guías editoriales enlazan a: perfiles y colecciones relevantes
- Footer enlaza a: todas las ciudades + colecciones principales + acerca de + política editorial
- Breadcrumbs en cada página (Home > Hub > Página)

---

## 7. Homepage Plan

### Hero
- Fondo: imagen de gran hotel clásico en tonos oscuros con overlay tipográfico
- Headline principal: **"Los hoteles que el mundo no olvida"** (o variante a afinar)
- Subtítulo editorial: Breve descripción de La Bitácora como concepto (2 líneas)
- CTA suave: "Explorar la colección" → scroll o anchor a colecciones destacadas
- Sin precios, sin "reserva ahora", sin contadores de disponibilidad

### Secciones principales (en orden)
1. **Hero** — Headline + intro + imagen de ambiente
2. **Colecciones destacadas** — 4 tarjetas de colecciones temáticas con imagen y titular
3. **Hoteles del momento** — 6 perfiles en grid con ficha condensada
4. **Por ciudad** — Row horizontal de 6-8 ciudades con ícono o imagen
5. **Guía editorial del mes** — Destacado editorial largo (una guía temática)
6. **Por tipo de viajero** — 3-4 tarjetas: cinéfilos, amantes del diseño, historia, naturaleza
7. **Sobre La Bitácora** — Párrafo corto del manifesto + link a `/acerca-de/`
8. **Footer**

### Descubrimiento sin backend
- Filtros visuales estáticos (links a colecciones/ciudades pre-generados)
- Barra de "Explorar por:" que enlaza a hubs (no es búsqueda en tiempo real)
- Si se implementa búsqueda: lunr.js o Pagefind (indexado en build time, sin servidor)

---

## 8. Visual System Plan

### Paleta de colores

| Token | Color | Uso |
|---|---|---|
| `--color-deep` | `#141414` | Fondo hero, headers oscuros |
| `--color-navy` | `#1B2A4A` | Fondos alternos, nav |
| `--color-gold` | `#C9973A` | Acentos, ornamentos, hover |
| `--color-cream` | `#F8F4EE` | Fondo principal de página |
| `--color-warm-white` | `#FDFCF9` | Fondos de card |
| `--color-text` | `#2C2C2C` | Texto cuerpo principal |
| `--color-text-light` | `#6B6B6B` | Texto secundario, fechas, etiquetas |
| `--color-border` | `#E4DDD3` | Separadores, bordes de card |

### Tipografía

| Uso | Fuente | Peso | Fuente de carga |
|---|---|---|---|
| Headlines H1 | Playfair Display | 700 italic | Google Fonts |
| Headlines H2-H3 | Playfair Display | 600 | Google Fonts |
| Cuerpo texto | Inter | 400 | Google Fonts |
| Labels, UI | Inter | 500/600 | Google Fonts |
| Cita destacada | Playfair Display | 400 italic | Google Fonts |

Alternativa si se desea algo más cinematográfico para H1: **DM Serif Display** (más contrastado, con elegancia de póster).

### Grid y layout

- Max-width contenido: `1200px`
- Gutter: `24px` (mobile), `40px` (desktop)
- Columnas: CSS Grid 12-col en desktop, 4-col en tablet, 1-col mobile
- Cards de hotel: 3-col desktop / 2-col tablet / 1-col mobile
- Artículos largos: columna central de 740px con margen editorial

### Cards de hotel

- Imagen en proporción 3:2
- Etiqueta de ciudad (badge dorado)
- Título serif en 2 líneas
- Extracto de 2 líneas en sans-serif ligero
- Hover: elevación sutil con sombra y línea dorada inferior

### Tratamiento de imágenes

- Todas las imágenes con `aspect-ratio` forzado (no layouts rotos)
- Overlay semitransparente oscuro en hero images para legibilidad del texto
- Efecto de "foto de revista": sin bordes, con margen generoso
- Placeholders elegantes: fondo `--color-navy` con iniciales del hotel en dorado (para cuando no hay imagen)
- `loading="lazy"` en todas las imágenes secundarias

### Favicon y app icons

- Favicon: monograma "HF" en serif dorado sobre fondo oscuro
- Variantes: 16x16, 32x32, 180x180 (apple-touch-icon), 192x192, 512x512
- Generado como SVG base + PNG exports

### Comportamiento mobile

- Menú hamburger con overlay oscuro
- Cards en columna única con imagen full-width
- Hero con texto centrado y tamaño reducido
- Navegación por hubs en chips scrollables horizontales
- Footer simplificado en 2 columnas

---

## 9. SEO / AEO Plan

### Patrón de metadata por tipo de página

**Perfil de hotel:**
```
title: "[Nombre del Hotel], [Ciudad] — La Bitácora | Hoteles Famosos"
description: "Descubre la historia y el carácter del [Nombre], uno de los hoteles más icónicos de [Ciudad]. Guía editorial en español."
canonical: "https://hotelesfamosos.com/hoteles/[slug]/"
og:type: article
```

**Guía de ciudad:**
```
title: "Hoteles Famosos de [Ciudad] — La Bitácora | Hoteles Famosos"
description: "Los hoteles más legendarios de [Ciudad]: historia, carácter y contexto cultural. Guía editorial en español."
```

**Colección:**
```
title: "[Nombre Colección] — Colección | Hoteles Famosos"
description: "[Breve descripción de la colección]. Selección editorial de hoteles icónicos del mundo."
```

### Schema types (JSON-LD)

| Página | Schema |
|---|---|
| Homepage | `WebSite` + `Organization` + `SiteNavigationElement` |
| Perfil de hotel | `LodgingBusiness` + `BreadcrumbList` |
| Guía de ciudad | `CollectionPage` + `BreadcrumbList` |
| Colección | `CollectionPage` + `BreadcrumbList` |
| Guía editorial | `Article` + `FAQPage` + `BreadcrumbList` |
| About | `AboutPage` + `Organization` |

**Nota:** El schema `LodgingBusiness` incluirá solo nombre, dirección general de ciudad/país, y descripción. No se incluirán precios, disponibilidad, ni datos que requieran actualización en tiempo real.

### Estrategia FAQ / AEO

- Cada perfil de hotel incluye un bloque FAQ de 3-4 preguntas clave:
  - "¿Por qué es famoso [Hotel]?"
  - "¿En qué tipo de películas/cultura aparece [Hotel]?"
  - "¿Qué tipo de viajero busca [Hotel]?"
  - "¿Qué debo verificar antes de planear una visita a [Hotel]?"
- Las guías editoriales tienen FAQs de 5-8 preguntas con respuestas de párrafo
- Las respuestas están redactadas para ser capturadas como featured snippets en español
- AEO: estructurar respuestas con la respuesta primero (answer-first), luego el contexto

### Thin content avoidance

- Mínimo 400 palabras por perfil de hotel
- Mínimo 600 palabras por guía de ciudad
- Mínimo 300 palabras por colección (más los extractos de cada hotel incluido)
- Las guías editoriales: 800-1200 palabras
- Cada página tiene perspectiva editorial única, no solo datos factuales

### Sitemap y robots

- `sitemap.xml` estático generado manualmente o con script simple de Node.js
- `robots.txt` permite todo excepto `/acerca-de/` y `/politica-editorial/` (opcional: indexar igual)
- Prioridad en sitemap: homepage (1.0), perfiles de hotel (0.8), ciudades (0.8), colecciones (0.7), guías (0.6)

---

## 10. Fact-Safety and Editorial Integrity Plan

### Afirmaciones permitidas

- Nombre del hotel, ciudad, país
- Descripción general del tipo de hotel (palace hotel, art deco, modernista, etc.)
- Menciones ampliamente documentadas en fuentes públicas (Wikipedia, prensa de viaje de referencia)
- Categoría general (lujo, boutique, histórico) sin usar estrellas específicas
- Asociaciones culturales vagas y de dominio público ("asociado con la Belle Époque", "icónico de los años 50")
- Arquitectura o estilo cuando es visualmente evidente o de dominio público

### Afirmaciones prohibidas

- Precios específicos o rangos de precios
- Disponibilidad o temporadas de demanda
- Nombres de celebridades o personas concretas asociadas al hotel (sin fuente verificable)
- Fechas de inauguración específicas (a menos que sean de dominio público e indiscutibles)
- Nominaciones a premios o rankings (cambian anualmente)
- Conexiones con películas o series específicas (solo si es de dominio público y no controversial)
- Nombre de arquitectos, diseñadores o propietarios sin fuente verificable
- Historia del hotel más allá de lo que su reputación pública documentada establece

### Frases de precaución (banco de lenguaje)

```
"es conocido por…"
"se asocia con…"
"ha sido descrito como…"
"según la reputación pública del hotel…"
"forma parte del imaginario del lujo clásico…"
"su historia documentada sugiere…"
"conviene verificar en fuentes oficiales antes de viajar…"
"aunque los detalles exactos varían según la fuente…"
"la leyenda del lugar incluye…" (para historias no verificables)
"se dice que…" (para anécdotas no verificables)
```

### Páginas que requieren precaución extra

- `/colecciones/hoteles-con-leyendas/` — nunca afirmar como hecho eventos sobrenaturales o muertes específicas
- `/colecciones/hoteles-de-pelicula/` — solo mencionar conexiones con films si es de conocimiento público y no disputable
- `/hoteles/hotel-nacional-habana/` y similares con historia política sensible — contexto sin tomar partido
- Cualquier hotel con renovaciones recientes — no describir estado actual, solo historia/reputación

### Disclaimer requerido (sitio completo)

Aparece en footer de todas las páginas, en `/politica-editorial/`, y en un banner de bienvenida colapsable:

> **Aviso editorial:** Hoteles Famosos es una guía editorial e inspiracional. No somos un motor de reservas, agencia de viajes, ni fuente de precios o disponibilidad. Todo el contenido es de carácter cultural y periodístico. La información puede no reflejar el estado actual de los hoteles mencionados. Siempre verifica en las fuentes oficiales de cada hotel antes de planear tu viaje.

---

## 11. Technical Plan

### Filosofía técnica

Sitio 100% estático: HTML + CSS + JS vanilla. Sin frameworks, sin build process obligatorio, sin dependencias de npm en producción. Máxima compatibilidad con GitHub Pages. Mínima deuda técnica.

### Estructura de archivos

```
hotelesfamosos.com/
├── index.html                    # Homepage
├── 404.html                      # Página de error personalizada
├── sitemap.xml
├── robots.txt
├── manifest.webmanifest
├── CNAME                         # (si se usa dominio personalizado)
│
├── assets/
│   ├── css/
│   │   ├── main.css              # Design system: variables, reset, tipografía, grid
│   │   ├── components.css        # Cards, nav, footer, módulos reutilizables
│   │   └── pages.css             # Overrides específicos de tipo de página
│   ├── js/
│   │   ├── nav.js                # Mobile menu, scroll behavior
│   │   └── search.js             # Búsqueda estática client-side (opcional, Pagefind/lunr)
│   ├── img/
│   │   ├── favicons/             # favicon.ico, apple-touch-icon.png, etc.
│   │   ├── og/                   # Open Graph images (1200x630) por página
│   │   └── hotels/               # Imágenes de hoteles organizadas por slug
│   └── fonts/                    # (vacío si se usa Google Fonts CDN)
│
├── hoteles/
│   ├── the-plaza-nueva-york/
│   │   └── index.html
│   ├── raffles-singapur/
│   │   └── index.html
│   └── ... (20 perfiles)
│
├── ciudades/
│   ├── nueva-york/
│   │   └── index.html
│   └── ... (10 ciudades)
│
├── colecciones/
│   ├── hoteles-de-pelicula/
│   │   └── index.html
│   └── ... (10 colecciones)
│
├── guias/
│   ├── que-hace-famoso-un-hotel/
│   │   └── index.html
│   └── ... (6 guías)
│
├── acerca-de/
│   └── index.html
│
└── politica-editorial/
    └── index.html
```

**Total de archivos HTML:** ~48 páginas + 2 soporte = ~50 archivos HTML

### CSS architecture

- **main.css:** Custom properties (design tokens), CSS reset moderno, tipografía base, utilities
- **components.css:** Componentes reutilizables (`.card-hotel`, `.nav`, `.footer`, `.hero`, `.badge`, `.faq-block`, `.related-grid`)
- **pages.css:** Variaciones por tipo de página (`.page-profile`, `.page-city`, `.page-collection`)
- Sin preprocessor necesario. CSS custom properties son suficientes.

### JS mínimo

- `nav.js`: Solo manejo de menú hamburger + scroll-to-top + clase de scroll en nav
- Sin jQuery, sin frameworks
- Si se implementa búsqueda: Pagefind (genera índice estático, corre en browser, compatible con GitHub Pages)

### Data files (opcionales)

Para facilitar la consistencia entre páginas, se puede mantener un archivo `/assets/data/hotels.json` con los datos clave de cada hotel (nombre, ciudad, slug, colecciones). No se usa en producción (todo hardcodeado en HTML), pero sirve como fuente de verdad editorial durante el build.

### Preview local

```bash
# Opción 1: Python (preinstalado en macOS)
python3 -m http.server 8080

# Opción 2: npx (sin instalar nada permanente)
npx serve .

# Opción 3: VS Code Live Server extension
```

### GitHub Pages readiness

- Todo el contenido en rama `main`
- GitHub Pages configurado para servir desde `/ (root)` de `main`
- No se necesita GitHub Actions ni build step
- CNAME file para dominio personalizado hotelesfamosos.com
- Todos los links internos son relativos o usan rutas absolutas desde raíz

---

## 12. QA Plan

### Link checks
- [ ] Verificar todos los `<a href>` internos con herramienta de crawl (htmltest o similar)
- [ ] Confirmar que cada `/hoteles/[slug]/index.html` existe y carga
- [ ] Confirmar que breadcrumbs apuntan a URLs reales
- [ ] Confirmar que todos los hoteles relacionados tienen su perfil creado

### Metadata checks
- [ ] Cada página tiene `<title>` único
- [ ] Cada página tiene `<meta name="description">` (150-160 chars)
- [ ] Cada página tiene `<link rel="canonical">`
- [ ] Cada página tiene `<meta property="og:title">`, `og:description>`, `og:image>`, `og:url>`
- [ ] Cada página tiene Twitter Card tags
- [ ] `og:image` apunta a imagen real de 1200x630

### Schema checks
- [ ] JSON-LD válido en todas las páginas (Google Rich Results Test)
- [ ] BreadcrumbList correcto en todas las páginas interiores
- [ ] FAQPage presente en guías y perfiles
- [ ] No hay errores de schema en Google Search Console (post-deploy)

### Responsive checks
- [ ] Homepage: mobile 375px, tablet 768px, desktop 1280px
- [ ] Cards de hotel no se rompen en ningún breakpoint
- [ ] Menú mobile funciona sin JS pendiente
- [ ] Imágenes no se desbordan en mobile

### Accessibility checks
- [ ] Contraste de color mínimo WCAG AA (4.5:1 texto normal, 3:1 texto grande)
- [ ] Navegación por teclado funciona (tab, enter, escape)
- [ ] `<img>` tiene `alt` descriptivo en todos los casos
- [ ] `<nav>` usa `aria-label`
- [ ] Headings en orden jerárquico (no saltar H1→H3)

### Fact-safety checks
- [ ] Ninguna página contiene precios, tarifas, o rangos de precio
- [ ] Ninguna página contiene disponibilidad o "últimas habitaciones"
- [ ] Ninguna página afirma hechos históricos sin la frase de precaución adecuada
- [ ] Footer disclaimer presente en todas las páginas
- [ ] `/politica-editorial/` cargada y enlazada desde footer

### Favicon y social sharing checks
- [ ] `favicon.ico` presente en raíz
- [ ] `apple-touch-icon.png` (180x180) en raíz
- [ ] `manifest.webmanifest` con icons 192x192 y 512x512
- [ ] OG images se ven correctas en Facebook Debugger y Twitter Card Validator
- [ ] Sitemap validado en Google Search Console

---

## 13. Build Phases

### Fase 1 — Estructura y sistema de diseño (fundación)
**Entregables:**
- Estructura de directorios completa creada
- `main.css` con design tokens, reset, tipografía, grid
- `components.css` con todos los componentes reutilizables
- `nav.js` y comportamiento mobile
- Homepage con diseño completo (sin contenido final)
- Una página de perfil de hotel completa como template
- Una guía de ciudad completa como template
- Una colección temática completa como template
- Favicon set, manifest, 404.html

**QA de fase:** Visual review en mobile + desktop, contraste de color, nav behavior

### Fase 2 — Contenido y páginas
**Entregables:**
- Los 20 perfiles de hotel con contenido editorial real
- Las 10 guías de ciudad
- Las 10 colecciones temáticas
- Las 6 guías editoriales/prácticas
- `/acerca-de/` y `/politica-editorial/`
- Todos los internal links conectados
- Módulo de "Hoteles Relacionados" y "Colecciones Relacionadas" funcional en cada página

**QA de fase:** Link check completo, fact-safety review de todo el contenido

### Fase 3 — Metadata, Schema y archivos de soporte
**Entregables:**
- Metadata completa en las 48 páginas (title, description, canonical, OG, Twitter)
- JSON-LD en todas las páginas
- `sitemap.xml` generado y validado
- `robots.txt`
- `manifest.webmanifest`
- OG images básicas (puede ser imagen + overlay de texto generado con canvas o imagen simple)

**QA de fase:** Schema validation, metadata review, sitemap check

### Fase 4 — QA y corrección
**Entregables:**
- Link check completo (0 broken links)
- Accessibility audit (axe o similar)
- Responsive testing en 3 breakpoints
- Fact-safety pass completo
- Performance básico: imágenes optimizadas, CSS/JS minificado si aplica

**QA de fase:** Checklists completas del plan de QA

### Fase 5 — Polish final
**Entregables:**
- Refinamiento tipográfico y de espaciado
- Revisión de coherencia de voz editorial en todo el sitio
- Verificación de todas las Open Graph images
- GitHub Pages CNAME configurado
- README del repo actualizado
- CLAUDE.md actualizado con instrucciones de desarrollo

**QA de fase:** Test de sharing en redes sociales, test de Google Rich Results, revisión editorial final

---

## 14. Approval Needed

Antes de escribir una línea de código, necesito tu aprobación en estos puntos:

### A. Nombre del OS y posicionamiento
- ¿Apruebas el nombre **"La Bitácora"** como sistema operativo creativo del sitio?
- ¿O prefieres otra dirección (El Vestíbulo, El Registro, Gran Archivo, otro)?

### B. Lista de hoteles
- ¿Apruebas los 20 hoteles propuestos para perfiles individuales?
- ¿Quieres agregar, quitar o sustituir alguno?
- ¿Hay hoteles latinoamericanos específicos que quieras priorizar?

### C. Ciudades
- ¿Apruebas las 10 ciudades? ¿Agregar o quitar alguna (ej. Hong Kong, Sydney, Madrid, Marrakech)?

### D. Visual system
- ¿Apruebas la paleta propuesta (deep/navy/gold/cream)?
- ¿Apruebas Playfair Display + Inter como par tipográfico?
- ¿Hay una dirección visual diferente que quieras explorar?

### E. Búsqueda estática
- ¿Quieres búsqueda client-side (Pagefind/lunr.js) o navegación solo por links/hubs?

### F. Imágenes
- ¿Se usarán imágenes reales de hoteles (de Unsplash/Pexels con licencia libre) o placeholders elegantes durante el build?
- ¿O construimos el sistema visual completo y gestionas las imágenes tú?

### G. Idioma de código y comentarios
- HTML/CSS generado: ¿clases en inglés (`.hotel-card`) o en español (`.tarjeta-hotel`)?
- Comentarios en código: ¿inglés o español?

### H. Google Fonts vs. fuentes locales
- ¿Google Fonts CDN (más fácil) o fuentes auto-hosted (más privado)?

### I. Fase de inicio
- ¿Empezamos con Fase 1 completa (estructura + design system + templates) antes de agregar contenido?
- ¿O prefieres una página completa end-to-end como primer entregable para validar la dirección visual?

---

*Documento preparado para revisión. Sin código generado. Esperando aprobación.*
