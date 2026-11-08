// Todos los textos de la web, en castellano y en inglés, por página: portada, Funciones, Visuales
// y Descargar. Cada página es una sola plantilla (components/) que pinta el idioma que le toque,
// así las dos versiones no se descuadran, y el inglés tiene que tener la misma forma que el
// castellano (lo comprueba el tipo). Los artículos no van aquí: son Markdown en
// content/articles/<idioma>/.

import { FORK_URL, ISSUES_URL, REPO_URL, type Lang } from './site';

/** Una fila de teclas de los visuales. `combo`: se pulsan a la vez (Mayús + →); si no, son
 *  alternativas ([ y ]). */
interface Key {
  keys: string[];
  combo?: boolean;
  action: string;
}

const keyRows = (rows: Key[]) => rows;

const es = {
  meta: {
    title: 'Ludok Sound: tu música para pinchar, en tu propio servidor',
    description:
      'App gratis y de código abierto (MIT) para escuchar, ordenar y preparar tu música desde tu propio servidor. Android, Android Auto, Linux y Windows.',
  },
  nav: {
    main: 'Principal',
    home: 'Inicio',
    features: 'Funciones',
    visuals: 'Visuales',
    articles: 'Artículos',
    download: 'Descargar',
    github: 'Código en GitHub',
    theme: 'Cambiar entre tema claro y oscuro',
    langName: 'English',
    langShort: 'EN',
    skip: 'Saltar al contenido',
  },
  hero: {
    kicker: 'Código abierto · Licencia MIT',
    title: 'Tu música para pinchar.',
    titleMuted: 'En tu propio servidor.',
    lead: 'Ludok Sound escucha, ordena y prepara la biblioteca que guardas en tu Raspberry Pi. En el móvil, en el coche y en el ordenador. Sin suscripciones, sin nube ajena y sin límite de canciones.',
    primary: 'Descargar gratis',
    secondary: 'Ver en GitHub',
    platforms: 'Android · Android Auto · Linux · Windows',
    nowPlaying: 'Reproduciendo',
    camelot: '8A',
    chips: ['La menor', '122 BPM', 'Energía 2', 'MP3 · 320 kbps'],
    phoneAlt:
      'El reproductor de Ludok Sound en Android: portada, onda, tonalidad, BPM, energía y calidad del fichero',
  },
  facts: [
    { value: '0 €', label: 'al mes, para siempre' },
    { value: 'MIT', label: 'código abierto: úsalo y cámbialo' },
    { value: 'Sin límite', label: 'de canciones: las que quepan en tu disco' },
    { value: '17', label: 'comprobaciones automáticas de tus datos' },
  ],
  how: {
    kicker: 'Cómo funciona',
    title: 'Dos piezas, todo tuyo',
    lead: 'El servidor guarda y analiza la música. La app la escucha, la ordena y la prepara.',
    steps: [
      {
        title: 'Tu música, en tu servidor',
        body: 'SoundVault corre en una Raspberry Pi: vigila tu carpeta de música, lee etiquetas y portadas, y analiza BPM, tonalidad, energía y dónde cae el drop.',
      },
      {
        title: 'Ludok Sound, donde estés',
        body: 'En casa, por WiFi. Fuera, por tu red de Tailscale. En streaming, con saltos dentro de la canción, o descargado para cuando no hay cobertura.',
      },
      {
        title: 'Lo tuyo no se pierde',
        body: 'Favoritas, historial y ajustes viven en tu dispositivo, se sincronizan entre el móvil y el ordenador y se copian solos a tu Nextcloud.',
      },
    ],
  },
  highlights: {
    kicker: 'Lo que hace',
    title: 'Escuchar, ordenar y pinchar, en una sola app',
    lead: 'Lo que llega se ordena en segundos, lo que suena te dice qué poner después y lo nuevo de quien sigues te espera en la app.',
    items: [
      {
        image: 'por-ordenar',
        alt: 'Por ordenar: una canción nueva con su tonalidad, BPM y energía, y los botones para decidir dónde va',
        title: 'Por ordenar',
        body: 'Cada canción nueva suena desde su drop. Desliza y va a su género.',
      },
      {
        image: 'mezcla-armonica',
        alt: 'Mezcla armónica: canciones de la biblioteca que casan con la que suena, en 8A y a 122 BPM',
        title: 'Mezcla armónica',
        body: 'Las canciones que casan con la que suena, por Camelot y BPM.',
      },
      {
        image: 'novedades',
        alt: 'Novedades: lanzamientos en Beatport de los sellos que sigues, con su tonalidad, BPM y fecha de salida',
        title: 'Novedades',
        body: 'Lo que sacan en Beatport y SoundCloud los artistas y sellos que sigues.',
      },
    ],
    cta: 'Ver todas las funciones',
  },
  visualsTeaser: {
    kicker: 'Solo en escritorio',
    title: 'Visuales de sesión para el proyector',
    lead: 'Una ventana aparte que dibuja cada canción según su tonalidad, su energía y su drop, siempre a tempo.',
    cta: 'Ver los visuales',
  },
  compare: {
    kicker: 'Comparativa',
    title: '¿Y Lexicon DJ?',
    lead: 'Lexicon es un gran gestor de bibliotecas para pasar de un programa de DJ a otro. Ludok Sound hace otra cosa: tu música vive en tu servidor y la escuchas, la ordenas y la preparas desde cualquier sitio.',
    head: ['', 'Ludok Sound', 'Lexicon DJ'],
    rows: [
      ['Precio', 'Gratis, licencia MIT', 'Plan gratis para convertir; lo demás, de pago al mes'],
      ['Dónde está la música', 'En tu servidor, sin límite', 'En tu disco; nube de 1.000 o 10.000 pistas según el plan'],
      ['Escuchar en el móvil y el coche', 'App completa y Android Auto', 'App compañera, en los planes de pago'],
      ['Pasar a Serato, Traktor, Engine…', 'Solo Rekordbox y Mixxx, por XML', 'Seis programas, con cue points y beatgrids'],
      ['Código', 'Abierto', 'Cerrado'],
    ],
    slug: 'ludok-sound-vs-lexicon',
    cta: 'Leer la comparativa completa',
  },
  support: {
    title: 'Apoya el proyecto',
    lead: 'Ludok Sound es un proyecto personal y abierto. Si te sirve, ayúdale a crecer.',
    items: [
      {
        title: 'Dale una estrella',
        body: 'En GitHub, para que otros DJ lo encuentren.',
        cta: 'Estrella en GitHub',
        href: REPO_URL,
      },
      {
        title: 'Cuenta qué falla',
        body: 'Abre un issue con lo que no va o con lo que echas de menos.',
        cta: 'Abrir un issue',
        href: ISSUES_URL,
      },
      {
        title: 'Contribuye',
        body: 'Haz un fork, mejóralo y manda un pull request. Es MIT: el código también es tuyo.',
        cta: 'Hacer un fork',
        href: FORK_URL,
      },
    ],
  },
  ctaBand: {
    title: 'Empieza hoy',
    lead: 'Gratis, de código abierto y con tu música en tu propio servidor.',
    primary: 'Descargar gratis',
    secondary: 'Ver en GitHub',
  },
  features: {
    meta: {
      title: 'Funciones | Ludok Sound',
      description:
        'Todo lo que hace Ludok Sound: biblioteca, Android Auto, sin conexión, Por ordenar, mezcla armónica, novedades de Beatport y SoundCloud, revisión, calidad del audio y copias.',
    },
    head: {
      kicker: 'Funciones',
      title: 'Todo lo que hace Ludok Sound',
      lead: 'Una app para escuchar tu música donde estés y tenerla lista para pinchar, sobre tu propio servidor.',
    },
    listen: {
      kicker: 'Para escuchar',
      title: 'Toda tu biblioteca, en el bolsillo y en el coche',
      lead: 'Lo que esperas de una app de música, sobre la música que es tuya.',
      imageAlt:
        'Favoritas sin conexión con el servidor: suenan las descargadas y el resto se ve apagado',
      items: [
        {
          title: 'Listas que se hacen solas',
          body: 'Cada carpeta de géneros del servidor es una lista. Y además, por año, por energía (de «Muy tranquilas» a «A tope») y Joyas olvidadas: lo que te gustaba y lleva meses sin sonar.',
        },
        {
          title: 'Android Auto',
          body: 'Listas, favoritas, recientes y artistas en la pantalla del coche, con búsqueda por voz. Funciona aunque la app esté cerrada.',
        },
        {
          title: 'Sin conexión',
          body: 'Descarga cualquier lista en calidad original o en MP3. Si no llega al servidor, pasa sola a sin conexión y sigue sonando lo descargado.',
        },
        {
          title: 'Sonido cuidado',
          body: 'Volumen igualado entre canciones, fundido de 3, 6 o 10 segundos y ecualizador de 5 bandas. También en el coche y con la app cerrada.',
        },
        {
          title: 'Retoma donde lo dejaste',
          body: 'Al reabrir la app vuelven la cola y la canción. Las sesiones y mixes de más de 10 minutos, en el segundo exacto.',
        },
        {
          title: 'Stats',
          body: 'Lo más escuchado y tu tiempo de escucha, de la semana, del mes o de siempre.',
        },
      ],
    },
    dj: {
      kicker: 'Para ordenar y pinchar',
      title: 'La biblioteca lista antes de la sesión',
      lead: 'Lo que llega se ordena en segundos, lo que falta se completa y lo que suena te dice qué poner después.',
      showcases: [
        {
          image: 'por-ordenar',
          alt: 'Por ordenar: una canción nueva con su tonalidad, BPM y energía, y los botones para decidir dónde va',
          title: 'Por ordenar: decide en segundos',
          body: 'La bandeja de lo que llega: lo que subes desde la app o copias a la carpeta del servidor. Cada canción suena desde su drop. Desliza a la derecha y va a su género; a la izquierda, a la papelera, de donde se puede recuperar.',
          points: [
            'Te avisa si ya la tienes',
            'Eliges en qué listas va antes de decidir',
            'Tonalidad, BPM, energía y calidad a la vista',
          ],
        },
        {
          image: 'mezcla-armonica',
          alt: 'Mezcla armónica: canciones de la biblioteca que casan con la que suena, en 8A y a 122 BPM',
          title: 'Mezcla armónica en el reproductor',
          body: 'Mientras suena una canción, te enseña las de tu biblioteca que casan con ella por Camelot (misma casilla, vecina o relativa) y, a igualdad, por el BPM más parecido. Un toque y es la siguiente.',
          points: [
            'Tonalidad y BPM de Beatport o del análisis propio',
            'Energía del 1 al 10 frente al resto de tu biblioteca',
            'Formato, bitrate, rango dinámico y pico del fichero',
          ],
        },
        {
          image: 'novedades',
          alt: 'Novedades: lanzamientos en Beatport de los sellos que sigues, con su tonalidad, BPM y fecha de salida',
          title: 'Novedades de quien sigues',
          body: 'Sigue artistas y sellos. Cada día se mira lo que sacan en Beatport, preventas incluidas, y lo que suben a SoundCloud, donde salen edits y remixes que Beatport no tiene.',
          points: [
            'Escuchas el fragmento antes de decidir',
            '«Me interesa» o «Descartar», y a otra cosa',
            'Lo que ya tienes sale solo de «Me interesa»',
          ],
        },
      ],
      extras: [
        {
          title: 'Revisión sin sorpresas',
          body: 'Portadas y datos que faltan, metadatos al estilo Beatport y duplicados por huella acústica. Nada se aplica sin aceptarlo, y se escribe en el propio fichero.',
        },
        {
          title: 'Calidad del audio',
          body: 'Detecta el MP3 de 128 disfrazado de WAV mirando dónde cortan los agudos. Sabrás qué volver a comprar.',
        },
        {
          title: 'A Rekordbox o Mixxx',
          body: 'Desde el escritorio, un XML con tus listas ya hechas (géneros, energía, años, favoritas y las tuyas), con tonalidad, BPM y energía.',
        },
      ],
    },
    data: {
      kicker: 'Lo tuyo es tuyo',
      title: 'Sin nube ajena y sin perder nada',
      lead: 'La biblioteca vive en tu servidor; en el móvil solo hay una caché que se rehace sola. Lo que de verdad es tuyo está a salvo.',
      items: [
        {
          title: 'Tu servidor, tus reglas',
          body: 'La música no sale de tu casa. Con token, solo tus dispositivos pueden tocar el servidor.',
        },
        {
          title: 'Copias automáticas',
          body: 'Exporta e importa en JSON cuando quieras, y copia diaria a tu propio Nextcloud al abrir la app en WiFi.',
        },
        {
          title: 'Móvil y ordenador, a la par',
          body: 'Favoritas e historial se sincronizan a través de tu servidor. Gana lo último que hiciste.',
        },
        {
          title: 'Probado de verdad',
          body: '17 comprobaciones ejecutan el mismo código que corre en el móvil contra una base de datos real: copias, migraciones, sincronización.',
        },
      ],
    },
  },
  visuals: {
    meta: {
      title: 'Visuales de sesión | Ludok Sound',
      description:
        'Visuales para el proyector que dibujan cada canción según su género, tonalidad, energía y drop, a tempo con lo que suena. En Ludok Sound para Linux y Windows.',
    },
    head: {
      kicker: 'Solo en escritorio',
      title: 'Visuales de sesión para el proyector',
      lead: 'Una ventana aparte que dibuja cada canción según lo que se sabe de ella. Lee el sonido del propio reproductor, sin micro, así que va siempre a tempo.',
    },
    videoLabel: 'Vídeo de los visuales de sesión',
    caption: 'Grabado tal cual en Linux: horizonte retro, flujo de partículas y túnel de figuras.',
    points: [
      {
        title: 'Sin micro, siempre a tempo',
        body: 'Lee el sonido del propio reproductor, así que va a tempo también en los fundidos entre canciones.',
      },
      {
        title: 'Hecha para el proyector',
        body: 'Una ventana aparte para la otra pantalla, a pantalla completa y con el título de cada canción si lo quieres.',
      },
      {
        title: 'Fluido en cualquier equipo',
        body: 'WebGL2 con hasta 8.000 partículas. Mide los fotogramas y se adapta para no bajar de 50 por segundo; sin WebGL2, dibuja en canvas 2D.',
      },
    ],
    song: {
      title: 'Lo que pone cada canción',
      lead: 'Cada canción se ve según lo que ya se sabe de ella.',
      items: [
        {
          title: 'Tonalidad: el color',
          body: 'La rueda Camelot pasa tal cual a la del color, así que las canciones que mezclan bien tienen colores vecinos. En menor, más oscuro.',
        },
        {
          title: 'Portada: con qué se pinta',
          body: 'La imagen no sale, pero sus colores sí: hasta tres por canción, cada uno con el peso que tiene en la portada.',
        },
        {
          title: 'Energía: cuánto se mueve',
          body: 'Del 1 al 10, del análisis de SoundVault: cuanta más energía, más se mueve todo.',
        },
        {
          title: 'Drop: el estallido',
          body: 'En los breaks baja y antes del drop se carga, porque se sabe de antemano dónde cae. Al caer, estalla.',
        },
        {
          title: 'Bombo: un poco antes',
          body: 'Con el BPM de la canción, cada golpe se predice y se dibuja un poco antes de que suene, para compensar lo que tarda la pantalla.',
        },
      ],
    },
    engines: {
      title: 'Un motor para cada lista',
      lead: 'Cada lista tiene su propio motor, el mismo toda la sesión: de sus canciones sale una semilla y de ella las capas, el rastro y la simetría, así que la misma lista siempre se ve igual. Con la tecla G, cada canción pasa a dibujarse con el motor de su género:',
      head: ['Motor', 'Géneros'],
      rows: [
        ['Flujo de partículas', 'Melodic House Techno, Progressive House'],
        ['Líneas de espectro', 'Deep House, Electronica'],
        ['Túnel de figuras', 'Tech House, Indie Tech, House'],
        ['Horizonte retro', 'Indie Dance, Dance'],
        ['Círculos de percusión', 'Afro House, Organic House'],
      ],
    },
    use: {
      title: 'Cómo se usa',
      steps: [
        {
          title: 'Ábrelos',
          body: 'Con el botón Visuales de cualquier lista, la tecla V o el botón del reproductor. Desde una lista, además la pone a sonar: esa lista es la sesión.',
        },
        {
          title: 'Llévalos al proyector',
          body: 'Es una ventana aparte: arrástrala a la pantalla del proyector y ponla a pantalla completa con doble clic o con la F.',
        },
        {
          title: 'Ajusta el adelanto',
          body: 'Cada pantalla tarda lo suyo en enseñar la imagen. Con [ y ] el bombo se adelanta o se retrasa de 10 en 10 ms, y se recuerda en ese ordenador.',
        },
      ],
    },
    keys: {
      title: 'Teclas en la ventana',
      head: ['Tecla', 'Qué hace'],
      items: keyRows([
        { keys: ['F'], action: 'Pantalla completa (también con doble clic)' },
        { keys: ['T'], action: 'Quitar o poner el título de cada canción' },
        { keys: ['G'], action: 'Motor de la lista o motores por género' },
        { keys: ['I'], action: 'Fotogramas por segundo, calidad y qué motor ha salido' },
        { keys: ['[', ']'], action: 'Menos o más adelanto del bombo, de 10 en 10 ms' },
        { keys: ['Espacio'], action: 'Reproducir o pausar' },
        { keys: ['Mayús', '←'], combo: true, action: 'Canción anterior' },
        { keys: ['Mayús', '→'], combo: true, action: 'Canción siguiente' },
      ]),
    },
    next: {
      title: 'Lo que viene',
      body: 'Por ahora dibujan lo que suena en Ludok Sound. El plan es que la misma ventana escuche la salida de la mesa por una entrada de audio, para pinchar con Rekordbox en otro ordenador.',
    },
  },
  download: {
    meta: {
      title: 'Descargar | Ludok Sound',
      description:
        'Descarga Ludok Sound gratis para Android, Linux y Windows: lo que necesitas y los primeros pasos con tu servidor SoundVault.',
    },
    head: {
      kicker: 'Descargar',
      title: 'Descarga Ludok Sound',
      lead: 'Gratis y de código abierto. Descarga la app, apúntala a tu SoundVault y sincroniza.',
    },
    platforms: [
      { name: 'Android', detail: 'APK firmado, con Android Auto', cta: 'Descargar APK' },
      { name: 'Linux', detail: 'AppImage, sin instalar nada', cta: 'Descargar AppImage' },
      { name: 'Windows', detail: 'Instalador .exe', cta: 'Descargar para Windows' },
    ],
    needTitle: 'Lo que necesitas',
    need: [
      'Un servidor SoundVault con tu carpeta de música (pensado para una Raspberry Pi).',
      'Un móvil Android o un ordenador con Linux o Windows.',
      'Para escuchar fuera de casa, Tailscale (opcional).',
    ],
    server: 'Instalar SoundVault',
    start: {
      title: 'Primeros pasos',
      steps: [
        {
          title: 'Monta SoundVault',
          body: 'En una Raspberry Pi, con tu carpeta de música. Las instrucciones están en su repositorio.',
        },
        {
          title: 'Instala la app',
          body: 'En Android, abre el APK y deja instalar apps de esa fuente. En Linux, da permiso de ejecución al AppImage. En Windows, el instalador.',
        },
        {
          title: 'Conéctala a tu servidor',
          body: 'En Ajustes, «Servidor MiMusica»: la dirección de tu Pi y, si lo usas, el token. Luego «Guardar y probar».',
        },
        {
          title: 'Sincroniza',
          body: 'La primera vez se trae la biblioteca entera; después, solo lo que ha cambiado.',
        },
        {
          title: 'Fuera de casa (opcional)',
          body: 'Con Tailscale en la Pi y en el móvil, la app llega a tu servidor desde cualquier sitio.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Es gratis de verdad?',
          a: 'Sí. Licencia MIT: puedes usarlo, copiarlo y cambiarlo, también para uso comercial. Sin cuentas ni suscripciones.',
        },
        {
          q: '¿Necesito un servidor?',
          a: 'Sí. Ludok Sound es la app de SoundVault, el servidor que guarda y analiza tu música. Una Raspberry Pi con un disco basta.',
        },
        {
          q: '¿Funciona en iPhone o en Mac?',
          a: 'Por ahora no: hay versión para Android (con Android Auto), Linux y Windows.',
        },
        {
          q: '¿Está en Google Play?',
          a: 'No. Se instala el APK de las releases de GitHub. Para verla en Android Auto hay que activar «Fuentes desconocidas» en los ajustes para desarrolladores de Android Auto.',
        },
        {
          q: '¿Sustituye a Rekordbox?',
          a: 'No. Ludok Sound prepara la biblioteca y lleva tus listas a Rekordbox o Mixxx; para pinchar sigues con tu programa de DJ.',
        },
      ],
    },
  },
  footer: {
    tagline: 'Tu música, desde tu propio servidor. Para escuchar, ordenar y pinchar.',
    product: 'Producto',
    resources: 'Recursos',
    license: 'Publicado con licencia MIT.',
  },
  articles: {
    title: 'Artículos',
    metaTitle: 'Artículos | Ludok Sound',
    lead: 'Comparativas y guías sobre Ludok Sound, bibliotecas para DJ y música en tu propio servidor.',
    read: 'Leer el artículo',
    back: 'Todos los artículos',
    minutes: 'min de lectura',
  },
};

type Strings = typeof es;

const en: Strings = {
  meta: {
    title: 'Ludok Sound: your music, ready to mix, on your own server',
    description:
      'Free and open source (MIT) app to play, sort and prep your music from your own server. Android, Android Auto, Linux and Windows.',
  },
  nav: {
    main: 'Main',
    home: 'Home',
    features: 'Features',
    visuals: 'Visuals',
    articles: 'Articles',
    download: 'Download',
    github: 'Code on GitHub',
    theme: 'Switch between light and dark theme',
    langName: 'Español',
    langShort: 'ES',
    skip: 'Skip to content',
  },
  hero: {
    kicker: 'Open source · MIT license',
    title: 'Your music, ready to mix.',
    titleMuted: 'On your own server.',
    lead: 'Ludok Sound plays, sorts and preps the library you keep on your Raspberry Pi. On your phone, in your car and on your computer. No subscriptions, no third-party cloud, no track limits.',
    primary: 'Download for free',
    secondary: 'View on GitHub',
    platforms: 'Android · Android Auto · Linux · Windows',
    nowPlaying: 'Now playing',
    camelot: '8A',
    chips: ['A minor', '122 BPM', 'Energy 2', 'MP3 · 320 kbps'],
    phoneAlt:
      'The Ludok Sound player on Android: cover, waveform, key, BPM, energy and file quality',
  },
  facts: [
    { value: '€0', label: 'a month, forever' },
    { value: 'MIT', label: 'open source: use it and change it' },
    { value: 'No limit', label: 'on tracks: whatever fits on your disk' },
    { value: '17', label: 'automated checks on your data' },
  ],
  how: {
    kicker: 'How it works',
    title: 'Two pieces, all yours',
    lead: 'The server stores and analyzes the music. The app plays it, sorts it and preps it.',
    steps: [
      {
        title: 'Your music, on your server',
        body: 'SoundVault runs on a Raspberry Pi: it watches your music folder, reads tags and covers, and analyzes BPM, key, energy and where the drop hits.',
      },
      {
        title: 'Ludok Sound, wherever you are',
        body: 'At home, over WiFi. Away, over your Tailscale network. Streaming with seeking, or downloaded for when there is no signal.',
      },
      {
        title: 'What is yours stays yours',
        body: 'Favorites, history and settings live on your device, sync between your phone and your computer and back up on their own to your Nextcloud.',
      },
    ],
  },
  highlights: {
    kicker: 'What it does',
    title: 'Listen, sort and DJ, in one app',
    lead: 'New tracks get sorted in seconds, what is playing tells you what to play next, and new releases from who you follow are waiting in the app.',
    items: [
      {
        image: 'por-ordenar',
        alt: 'Inbox screen (in Spanish): a new track with its key, BPM and energy, and the buttons to decide where it goes',
        title: 'Inbox',
        body: 'Each new track plays from its drop. Swipe and it goes to its genre.',
      },
      {
        image: 'mezcla-armonica',
        alt: 'Harmonic mixing (in Spanish): tracks in the library that match the one playing, in 8A at 122 BPM',
        title: 'Harmonic mixing',
        body: 'The tracks that match the one playing, by Camelot key and BPM.',
      },
      {
        image: 'novedades',
        alt: 'New releases (in Spanish): Beatport releases from the labels you follow, with key, BPM and release date',
        title: 'New releases',
        body: 'What the artists and labels you follow release on Beatport and SoundCloud.',
      },
    ],
    cta: 'See all features',
  },
  visualsTeaser: {
    kicker: 'Desktop only',
    title: 'Session visuals for the projector',
    lead: 'A separate window that draws each track from its key, its energy and its drop, always on beat.',
    cta: 'See the visuals',
  },
  compare: {
    kicker: 'Comparison',
    title: 'What about Lexicon DJ?',
    lead: 'Lexicon is a great library manager for moving between DJ programs. Ludok Sound does something else: your music lives on your server and you play, sort and prep it from anywhere.',
    head: ['', 'Ludok Sound', 'Lexicon DJ'],
    rows: [
      ['Price', 'Free, MIT license', 'Free plan for conversion; the rest is a monthly plan'],
      ['Where the music lives', 'On your server, no limit', 'On your disk; cloud for 1,000 or 10,000 tracks depending on the plan'],
      ['Listening on the phone and in the car', 'Full app and Android Auto', 'Companion app, on paid plans'],
      ['Moving to Serato, Traktor, Engine…', 'Only Rekordbox and Mixxx, via XML', 'Six programs, with cue points and beatgrids'],
      ['Code', 'Open', 'Closed'],
    ],
    slug: 'ludok-sound-vs-lexicon',
    cta: 'Read the full comparison',
  },
  support: {
    title: 'Support the project',
    lead: 'Ludok Sound is a personal, open project. If it is useful to you, help it grow.',
    items: [
      {
        title: 'Give it a star',
        body: 'On GitHub, so other DJs can find it.',
        cta: 'Star on GitHub',
        href: REPO_URL,
      },
      {
        title: 'Tell us what breaks',
        body: 'Open an issue with what does not work or what you miss.',
        cta: 'Open an issue',
        href: ISSUES_URL,
      },
      {
        title: 'Contribute',
        body: 'Fork it, improve it and send a pull request. It is MIT: the code is yours too.',
        cta: 'Fork it',
        href: FORK_URL,
      },
    ],
  },
  ctaBand: {
    title: 'Start today',
    lead: 'Free, open source, with your music on your own server.',
    primary: 'Download for free',
    secondary: 'View on GitHub',
  },
  features: {
    meta: {
      title: 'Features | Ludok Sound',
      description:
        'Everything Ludok Sound does: library, Android Auto, offline, inbox, harmonic mixing, Beatport and SoundCloud releases, review, audio quality and backups.',
    },
    head: {
      kicker: 'Features',
      title: 'Everything Ludok Sound does',
      lead: 'One app to listen to your music anywhere and keep it ready to DJ, on your own server.',
    },
    listen: {
      kicker: 'For listening',
      title: 'Your whole library, in your pocket and in your car',
      lead: 'Everything you expect from a music app, on music that is yours.',
      imageAlt:
        'Favorites with the server out of reach: downloaded tracks play and the rest are dimmed',
      items: [
        {
          title: 'Playlists that build themselves',
          body: 'Every genre folder on the server becomes a playlist. Plus playlists by year, by energy (from very chill to full on) and Forgotten gems: what you loved and have not played in months.',
        },
        {
          title: 'Android Auto',
          body: 'Playlists, favorites, recents and artists on your car screen, with voice search. It works even with the app closed.',
        },
        {
          title: 'Offline',
          body: 'Download any playlist in original quality or as MP3. If the server is out of reach, it goes offline on its own and keeps playing your downloads.',
        },
        {
          title: 'Sound done right',
          body: 'Volume leveling across tracks, 3, 6 or 10 second crossfades and a 5 band equalizer. In the car too, even with the app closed.',
        },
        {
          title: 'Picks up where you left off',
          body: 'Reopen the app and your queue and track are back. Sets and mixes over 10 minutes resume at the exact second.',
        },
        {
          title: 'Stats',
          body: 'Your most played tracks and your listening time, for the week, the month or all time.',
        },
      ],
    },
    dj: {
      kicker: 'For sorting and DJing',
      title: 'Your library ready before the set',
      lead: 'New tracks get sorted in seconds, missing data gets filled in, and what is playing tells you what to play next.',
      showcases: [
        {
          image: 'por-ordenar',
          alt: 'Inbox screen (in Spanish): a new track with its key, BPM and energy, and the buttons to decide where it goes',
          title: 'Inbox: decide in seconds',
          body: 'The tray for everything new: what you upload from the app or copy to the server folder. Each track plays from its drop. Swipe right and it goes to its genre; left, to the trash, where you can still recover it.',
          points: [
            'Warns you if you already have it',
            'Pick its playlists before you decide',
            'Key, BPM, energy and quality at a glance',
          ],
        },
        {
          image: 'mezcla-armonica',
          alt: 'Harmonic mixing (in Spanish): tracks in the library that match the one playing, in 8A at 122 BPM',
          title: 'Harmonic mixing in the player',
          body: 'While a track plays, it shows the ones in your library that match it on the Camelot wheel (same slot, neighbor or relative) and, on a tie, the closest BPM. One tap and it plays next.',
          points: [
            'Key and BPM from Beatport or from our own analysis',
            'Energy from 1 to 10, relative to the rest of your library',
            'Format, bitrate, dynamic range and peak of the file',
          ],
        },
        {
          image: 'novedades',
          alt: 'New releases (in Spanish): Beatport releases from the labels you follow, with key, BPM and release date',
          title: 'New releases from who you follow',
          body: 'Follow artists and labels. Every day it checks what they release on Beatport, pre-orders included, and what they upload to SoundCloud, where edits and remixes show up that Beatport does not have.',
          points: [
            'Preview the clip before you decide',
            'Interested or Dismiss, and move on',
            'What you already own leaves your list on its own',
          ],
        },
      ],
      extras: [
        {
          title: 'Review with no surprises',
          body: 'Missing covers and data, Beatport style metadata and duplicates by acoustic fingerprint. Nothing is applied until you accept it, and it is written to the file itself.',
        },
        {
          title: 'Audio quality',
          body: 'Catches the 128 kbps MP3 dressed up as a WAV by checking where the highs cut off. You will know what to buy again.',
        },
        {
          title: 'To Rekordbox or Mixxx',
          body: 'From the desktop app, an XML with your playlists ready to go (genres, energy, years, favorites and your own), with key, BPM and energy.',
        },
      ],
    },
    data: {
      kicker: 'Yours stays yours',
      title: 'No third-party cloud, nothing lost',
      lead: 'Your library lives on your server; the phone only keeps a cache that rebuilds itself. What is truly yours is safe.',
      items: [
        {
          title: 'Your server, your rules',
          body: 'Your music never leaves home. With a token, only your devices can touch the server.',
        },
        {
          title: 'Automatic backups',
          body: 'Export and import JSON whenever you want, plus a daily backup to your own Nextcloud when you open the app on WiFi.',
        },
        {
          title: 'Phone and computer in sync',
          body: 'Favorites and history sync through your server. The last thing you did wins.',
        },
        {
          title: 'Actually tested',
          body: '17 checks run the same code the phone runs against a real database: backups, migrations, sync.',
        },
      ],
    },
  },
  visuals: {
    meta: {
      title: 'Session visuals | Ludok Sound',
      description:
        'Projector visuals that draw each track from its genre, key, energy and drop, on beat with what is playing. In Ludok Sound for Linux and Windows.',
    },
    head: {
      kicker: 'Desktop only',
      title: 'Session visuals for the projector',
      lead: 'A separate window that draws each track from what is known about it. It listens to the player itself, no microphone, so it is always on beat.',
    },
    videoLabel: 'Session visuals video',
    caption: 'Recorded as is on Linux: retro horizon, particle flow and shape tunnel.',
    points: [
      {
        title: 'No mic, always on beat',
        body: 'It reads the sound from the player itself, so it stays on beat even through crossfades between tracks.',
      },
      {
        title: 'Made for the projector',
        body: 'A separate window for the other screen, full screen, with each track title if you want it.',
      },
      {
        title: 'Smooth on any machine',
        body: 'WebGL2 with up to 8,000 particles. It measures its frame rate and adapts to stay above 50 per second; without WebGL2, it draws on a 2D canvas.',
      },
    ],
    song: {
      title: 'What each track brings',
      lead: 'Each track looks the way it does because of what is already known about it.',
      items: [
        {
          title: 'Key: the color',
          body: 'The Camelot wheel maps straight onto the color wheel, so tracks that mix well get neighboring colors. Minor keys are darker.',
        },
        {
          title: 'Cover: what it paints with',
          body: 'The image does not show, but its colors do: up to three per track, each weighted by how much of the cover it takes.',
        },
        {
          title: 'Energy: how much it moves',
          body: 'From 1 to 10, from the SoundVault analysis: the more energy, the more everything moves.',
        },
        {
          title: 'Drop: the burst',
          body: 'It calms down in the breaks and builds up before the drop, because it knows in advance where it hits. When it does, it bursts.',
        },
        {
          title: 'Kick: slightly early',
          body: 'With the track BPM, each hit is predicted and drawn slightly before you hear it, to make up for the screen delay.',
        },
      ],
    },
    engines: {
      title: 'One engine per playlist',
      lead: 'Each playlist has its own engine, the same for the whole session: a seed comes from its tracks, and from it the layers, trails and symmetry, so the same playlist always looks the same. Press G and each track is drawn with the engine of its genre:',
      head: ['Engine', 'Genres'],
      rows: [
        ['Particle flow', 'Melodic House Techno, Progressive House'],
        ['Spectrum lines', 'Deep House, Electronica'],
        ['Shape tunnel', 'Tech House, Indie Tech, House'],
        ['Retro horizon', 'Indie Dance, Dance'],
        ['Percussion circles', 'Afro House, Organic House'],
      ],
    },
    use: {
      title: 'How to use them',
      steps: [
        {
          title: 'Open them',
          body: 'With the Visuals button on any playlist, the V key or the player button. From a playlist it also starts playing it: that playlist is the session.',
        },
        {
          title: 'Put them on the projector',
          body: 'It is a separate window: drag it to the projector screen and go full screen with a double click or the F key.',
        },
        {
          title: 'Tune the lead',
          body: 'Every screen takes its own time to show the image. With [ and ] the kick moves earlier or later in 10 ms steps, and it is remembered on that computer.',
        },
      ],
    },
    keys: {
      title: 'Keys in the window',
      head: ['Key', 'What it does'],
      items: keyRows([
        { keys: ['F'], action: 'Full screen (double click too)' },
        { keys: ['T'], action: 'Hide or show each track title' },
        { keys: ['G'], action: 'Playlist engine or genre engines' },
        { keys: ['I'], action: 'Frames per second, quality and which engine came out' },
        { keys: ['[', ']'], action: 'Less or more kick lead, in 10 ms steps' },
        { keys: ['Space'], action: 'Play or pause' },
        { keys: ['Shift', '←'], combo: true, action: 'Previous track' },
        { keys: ['Shift', '→'], combo: true, action: 'Next track' },
      ]),
    },
    next: {
      title: 'What is next',
      body: 'For now they draw what plays in Ludok Sound. The plan is for the same window to listen to the mixer output through an audio input, so you can DJ with Rekordbox on another computer.',
    },
  },
  download: {
    meta: {
      title: 'Download | Ludok Sound',
      description:
        'Download Ludok Sound for free for Android, Linux and Windows: what you need and how to get started with your SoundVault server.',
    },
    head: {
      kicker: 'Download',
      title: 'Download Ludok Sound',
      lead: 'Free and open source. Download the app, point it at your SoundVault and sync.',
    },
    platforms: [
      { name: 'Android', detail: 'Signed APK, with Android Auto', cta: 'Download APK' },
      { name: 'Linux', detail: 'AppImage, nothing to install', cta: 'Download AppImage' },
      { name: 'Windows', detail: '.exe installer', cta: 'Download for Windows' },
    ],
    needTitle: 'What you need',
    need: [
      'A SoundVault server with your music folder (designed for a Raspberry Pi).',
      'An Android phone or a Linux or Windows computer.',
      'To listen away from home, Tailscale (optional).',
    ],
    server: 'Install SoundVault',
    start: {
      title: 'Getting started',
      steps: [
        {
          title: 'Set up SoundVault',
          body: 'On a Raspberry Pi, with your music folder. The instructions are in its repository.',
        },
        {
          title: 'Install the app',
          body: 'On Android, open the APK and allow installs from that source. On Linux, make the AppImage executable. On Windows, run the installer.',
        },
        {
          title: 'Connect it to your server',
          body: 'In Ajustes (Settings), under "Servidor MiMusica": your Pi address and, if you use one, the token. Then "Guardar y probar" (save and test).',
        },
        {
          title: 'Sync',
          body: 'The first time it brings in the whole library; after that, only what has changed.',
        },
        {
          title: 'Away from home (optional)',
          body: 'With Tailscale on the Pi and on your phone, the app reaches your server from anywhere.',
        },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'Is it really free?',
          a: 'Yes. MIT license: you can use, copy and modify it, commercially too. No accounts, no subscriptions.',
        },
        {
          q: 'Is the app in English?',
          a: 'Not yet: the interface is in Spanish. The code is MIT, so a translation is a welcome contribution.',
        },
        {
          q: 'Do I need a server?',
          a: 'Yes. Ludok Sound is the app for SoundVault, the server that stores and analyzes your music. A Raspberry Pi with a disk is enough.',
        },
        {
          q: 'Does it work on iPhone or Mac?',
          a: 'Not for now: there are versions for Android (with Android Auto), Linux and Windows.',
        },
        {
          q: 'Is it on Google Play?',
          a: 'No. You install the APK from the GitHub releases. To see it in Android Auto, turn on "Unknown sources" in the Android Auto developer settings.',
        },
        {
          q: 'Does it replace Rekordbox?',
          a: 'No. Ludok Sound preps your library and takes your playlists to Rekordbox or Mixxx; you still play with your DJ software.',
        },
      ],
    },
  },
  footer: {
    tagline: 'Your music, from your own server. To listen, sort and DJ.',
    product: 'Product',
    resources: 'Resources',
    license: 'Released under the MIT license.',
  },
  articles: {
    title: 'Articles',
    metaTitle: 'Articles | Ludok Sound',
    lead: 'Comparisons and guides on Ludok Sound, DJ libraries and music on your own server.',
    read: 'Read the article',
    back: 'All articles',
    minutes: 'min read',
  },
};

export const ui: Record<Lang, Strings> = { es, en };
