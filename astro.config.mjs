// Configuración de la web, publicada en Vercel.
//
// SITE_URL es el dominio propio (https://...), puesto como variable de entorno en Vercel. Mientras
// no exista, la web sale en la dirección de Vercel (VERCEL_PROJECT_PRODUCTION_URL, que da Vercel
// sin el https://) y no se deja indexar: así Google no guarda la dirección provisional, que luego
// competiría con el dominio. En local, localhost.
import { defineConfig } from 'astro/config';

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:4321');

export default defineConfig({
  site,
  vite: {
    define: {
      // Solo con dominio propio se deja indexar (ver src/site.ts).
      __INDEXABLE__: JSON.stringify(Boolean(process.env.SITE_URL)),
    },
  },
});
