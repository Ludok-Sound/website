// Mapa del sitio para los buscadores: cada pestaña en los dos idiomas y cada artículo, con la
// URL completa (con el prefijo del repo si lo hay).
import type { APIRoute } from 'astro';
import { articleSlug, getArticles } from '../articles';
import { articlePath, href, paths, type Lang } from '../site';

export const GET: APIRoute = async ({ site }) => {
  const base = site!;
  const urls: string[] = [];

  for (const lang of ['es', 'en'] as Lang[]) {
    for (const section of Object.values(paths)) urls.push(section[lang]);
    for (const entry of await getArticles(lang)) urls.push(articlePath(lang, articleSlug(entry)));
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((path) => `  <url><loc>${new URL(href(path), base)}</loc></url>`),
    '</urlset>',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
