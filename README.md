# Web de Ludok Sound

La web de Ludok Sound, en castellano (`/`) e inglés (`/en/`). Hecha con Astro, sin librerías de
interfaz ni fuentes externas: HTML estático, una hoja de estilos y dos scripts pequeños (el tema y
el vídeo de los visuales).

Cada pestaña es su propia página; ningún enlace lleva a otro punto de la misma página:

| Página | Castellano | Inglés | Plantilla |
|---|---|---|---|
| Inicio (resumen, con enlaces a las demás) | `/` | `/en/` | `src/components/Home.astro` |
| Funciones | `/funciones/` | `/en/features/` | `src/components/FeaturesPage.astro` |
| Visuales | `/visuales/` | `/en/visuals/` | `src/components/VisualsPage.astro` |
| Artículos | `/articulos/` | `/en/articles/` | `src/components/ArticleIndex.astro` |
| Descargar (el botón de la cabecera) | `/descargar/` | `/en/download/` | `src/components/DownloadPage.astro` |

Los ficheros de `src/pages/` solo llaman a la plantilla con su idioma.

El estilo es el de la app, «Sala oscura»: los mismos colores de `src/ui/theme.ts` en claro y en
oscuro, esquinas casi rectas y un solo acento morado que se gasta poco.

## Arranque

```bash
cd website
npm install
npm run dev      # http://localhost:4321
npm run check    # tipos de .astro y .ts
npm run build    # → dist/
```

Pide Node 22.22 o más nuevo. Astro va fijado en 7.4.1 porque desde la 7.4.2 pide Node 22.23.4.

## Dónde va cada cosa

| Qué | Dónde |
|---|---|
| Textos de todas las páginas, en los dos idiomas | `src/i18n.ts` |
| Enlaces (repo, releases, SoundVault) y rutas de cada página | `src/site.ts` |
| Cabecera con las pestañas y pie | `src/components/Header.astro`, `Footer.astro` |
| Estilos y colores | `src/styles/global.css` |
| Artículos | `src/content/articles/es/` y `src/content/articles/en/` |
| Capturas, vídeo, favicon e imagen para compartir | `public/` |

El inglés de `i18n.ts` tiene que tener la misma forma que el castellano: si falta un texto, no
compila.

## Escribir un artículo

1. Un Markdown en `src/content/articles/es/` con `title`, `description` y `pubDate` arriba.
2. Su traducción con **el mismo nombre de fichero** en `src/content/articles/en/`. Así el botón de
   idioma lleva de uno a otro; si no hay traducción, lleva a la lista de artículos del otro idioma.
3. Los enlaces a la propia web, relativos (`../../` es la portada), para que valgan también con el
   prefijo si algún día la web cuelga de una subcarpeta.

## Publicar

Se publica en **Vercel**, que la compila sola en cada push a `main` (Astro se detecta solo; Node
22.x, fijado en `package.json`).

Mientras no haya dominio propio sale en la dirección de Vercel (`*.vercel.app`) **sin dejarse
indexar**: `robots.txt` con `Disallow: /` y `noindex` en cada página. Para pasar al dominio:

1. En Vercel, *Settings → Domains*: añadir el dominio y seguir sus pasos de DNS.
2. En *Settings → Environment Variables*: `SITE_URL` = `https://<dominio>` (sin barra final),
   para *Production*.
3. *Deployments → Redeploy*. Desde ahí canonical, `hreflang`, sitemap y `robots.txt` usan el
   dominio, y la web ya se deja indexar.
4. Dar de alta el dominio en Google Search Console y enviar `https://<dominio>/sitemap.xml`.

Los botones de descarga llevan a la última release de GitHub: tiene que haber una con el APK, el
AppImage y el instalador de Windows.

## Medios

Las capturas y el vídeo salen de `Demo/`, en la carpeta de la app (`../Ludok Sound/Demo/`) y fuera de los repos. Las capturas, sin la barra de
estado y en WebP de 600 px de ancho:

```bash
magick "../Ludok Sound/Demo/Screenshot_<fecha>.png" -crop 1080x2210+0+130 +repage -resize 600x -quality 82 public/img/<nombre>.webp
```

El vídeo de los visuales es del segundo 18 al 48 de `Demo/demo_visuales.mkv`, sin audio y recortado
a la franja donde no hay ventanas encima. En WebM para casi todos y en MP4 para el Safari antiguo:

```bash
ffmpeg -ss 18 -t 30 -i "../Ludok Sound/Demo/demo_visuales.mkv" -an -vf "crop=1280:404:0:315" -c:v libvpx-vp9 -crf 36 -b:v 0 public/video/visuales.webm
ffmpeg -ss 18 -t 30 -i "../Ludok Sound/Demo/demo_visuales.mkv" -an -vf "crop=1280:404:0:315" -c:v libopenh264 -b:v 900k -pix_fmt yuv420p -movflags +faststart public/video/visuales.mp4
```

La imagen para compartir (`public/og.png`) se rehace con `scripts/og.sh`.
