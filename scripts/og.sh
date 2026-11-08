#!/usr/bin/env bash
# Genera public/og.png (1200x630), la imagen que sale al compartir un enlace de la web: el logo, el
# nombre, las plataformas, la onda y el móvil con el reproductor. Hace falta ImageMagick 7 y
# python3. Volver a lanzarlo si cambia la captura del reproductor o el logo.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/og.png"
T=$(mktemp -d)
trap 'rm -rf "$T"' EXIT

# Móvil: la captura con esquinas redondeadas dentro de un marco negro, algo girado como en la web.
magick "$ROOT/public/img/reproductor.webp" -resize 330x \
  \( +clone -alpha extract -fill black -colorize 100 -fill white -draw "roundrectangle 0,0 329,675 32,32" \) \
  -alpha off -compose CopyOpacity -composite "$T/screen.png"
magick -size 348x694 xc:none -fill '#050505' -stroke '#2c2c2c' -strokewidth 1 \
  -draw "roundrectangle 0,0 347,693 41,41" "$T/screen.png" -geometry +9+9 -compose over -composite \
  -background none -rotate 2.5 "$T/phone.png"

# Halo del color de la portada detrás del móvil. Acaba en negro puro: con «screen», cualquier
# otro gris dejaría ver el borde del cuadrado.
magick -size 900x900 radial-gradient:'#403c1a'-'#000000' "$T/glow.png"

magick -background none -density 300 "$ROOT/../Ludok Sound/logo/sound.svg" -resize 84x84 "$T/logo.png"

# Onda: la misma forma que la de la web (components/Waveform.astro), con lo escuchado en morado.
DRAW=$(python3 -I - <<'PY'
import math
n, step, bar, top = 64, 9, 5, 54
out = []
for i in range(n):
    t = i / (n - 1)
    env = 0.45 if t < 0.08 else 0.82 if t < 0.5 else 0.4 if t < 0.6 else 0.96 if t < 0.92 else 0.55
    noise = abs((math.sin(i * 12.9898) * 43758.5453) % 1)
    h = max(0.12, env * (0.8 + 0.2 * noise)) * top
    x = 80 + i * step
    color = '#9b6be0' if t < 0.36 else '#3a3a3a'
    out.append(f"fill {color} rectangle {x},{560 - h:.0f} {x + bar},560")
print(' '.join(out))
PY
)

magick -size 1200x630 xc:'#0a0a0a' \
  "$T/glow.png" -geometry +520-150 -compose screen -composite \
  "$T/phone.png" -geometry +790+60 -compose over -composite \
  "$T/logo.png" -geometry +80+118 -compose over -composite \
  -font Liberation-Sans-Bold -fill '#f2f2f2' -pointsize 96 -annotate +78+318 'Ludok Sound' \
  -font Liberation-Sans -fill '#a7a7a7' -pointsize 30 -annotate +82+378 'Android · Android Auto · Linux · Windows' \
  -fill '#9b6be0' -draw 'circle 87,428 92,428' \
  -font Liberation-Sans-Bold -fill '#737373' -pointsize 22 -annotate +104+436 'MIT · OPEN SOURCE' \
  -draw "$DRAW" \
  -depth 8 -strip "$OUT"
echo "$OUT"
