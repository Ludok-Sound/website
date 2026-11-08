// robots.txt con la dirección del mapa del sitio. Se genera (no va en public/) porque la URL
// depende del dominio y del prefijo con que se publique.
import type { APIRoute } from 'astro';
import { href, INDEXABLE } from '../site';

export const GET: APIRoute = ({ site }) => {
  // En la dirección provisional de Vercel no se deja rastrear nada (ver INDEXABLE en src/site.ts).
  if (!INDEXABLE) {
    return new Response('User-agent: *\nDisallow: /\n', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
  const sitemap = new URL(href('/sitemap.xml'), site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
