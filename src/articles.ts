// Consultas de artículos por idioma. El id que da el loader es «<idioma>/<slug>»: de ahí salen el
// idioma, la ruta y la pareja en el otro idioma.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './site';

export type Article = CollectionEntry<'articles'>;

export function articleSlug(entry: Article): string {
  return entry.id.split('/').slice(1).join('/');
}

/** Del más nuevo al más viejo: getCollection no garantiza ningún orden. */
export async function getArticles(lang: Lang): Promise<Article[]> {
  const entries = await getCollection('articles', (entry) => entry.id.startsWith(`${lang}/`));
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingMinutes(entry: Article): number {
  const words = (entry.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
