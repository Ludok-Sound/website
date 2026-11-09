// Enlaces y rutas de la web en un solo sitio: si el repo cambia de nombre o la web pasa a un
// dominio propio, se toca aquí (y en astro.config.mjs), no en cada página.

export type Lang = 'es' | 'en';

export const REPO_URL = 'https://github.com/Ludok-Sound/Ludok-sound';
export const RELEASES_URL = `${REPO_URL}/releases/latest`;
export const ISSUES_URL = `${REPO_URL}/issues`;
export const FORK_URL = `${REPO_URL}/fork`;
export const LICENSE_URL = `${REPO_URL}/blob/master/LICENSE`;
export const SOUNDVAULT_URL = 'https://github.com/Ludok-Sound/SoundVault';
export const AUTHOR = 'Luken Iriondo';

// Si los buscadores pueden indexar la web: solo cuando sale en el dominio propio (SITE_URL en
// astro.config.mjs). En la dirección provisional de Vercel van robots.txt con Disallow y noindex.
declare const __INDEXABLE__: boolean;
export const INDEXABLE: boolean = __INDEXABLE__;

// Si la web se compila en Vercel: solo ahí existen los scripts de analítica (ver Base.astro).
declare const __ON_VERCEL__: boolean;
export const ON_VERCEL: boolean = __ON_VERCEL__;

// Las rutas internas pasan siempre por href(), por si la web vuelve a colgar de una subcarpeta
// (como en GitHub Pages, /<repo>/): hoy la base es «/».
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function href(path: string): string {
  return BASE + path;
}

// Cada pestaña es su propia página. Las rutas de cada idioma no se traducen solas
// (funciones / features), así que van a mano.
export const paths = {
  home: { es: '/', en: '/en/' },
  features: { es: '/funciones/', en: '/en/features/' },
  visuals: { es: '/visuales/', en: '/en/visuals/' },
  articles: { es: '/articulos/', en: '/en/articles/' },
  download: { es: '/descargar/', en: '/en/download/' },
} as const;

export type Section = keyof typeof paths;

export function articlePath(lang: Lang, slug: string): string {
  return `${paths.articles[lang]}${slug}/`;
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
