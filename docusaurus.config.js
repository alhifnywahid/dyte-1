const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};
/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'My Notes',
  tagline: 'Website ini berisi catatan dari materi yang telah saya pelajari.',
  url: 'https://mynotes.engineer',
  baseUrl: '/',
  favicon: '/svg/logoku.svg',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [

  // MATERI PROGRAMING
  { id: 'html', path: 'docs/materi/html', routeBasePath: '/html', },
  { id: 'css', path: 'docs/materi/css', routeBasePath: '/css', },
  { id: 'js', path: 'docs/materi/js', routeBasePath: '/js', },
  { id: 'basisdata', path: 'docs/materi/basisdata', routeBasePath: '/basisdata', },
  { id: 'java', path: 'docs/materi/java', routeBasePath: '/java', },

  // PRIBADI
  { id: 'dokumentasi', path: 'docs/pribadi/dokumentasi', routeBasePath: '/dokumentasi', },
  { id: 'pribadi', path: 'docs/pribadi/pribadi', routeBasePath: '/pribadi', },

  /* =================================================== */
  {
    id: 'cli',
    path: 'docs/cli',
    routeBasePath: '/cli',
  },
  {
    id: 'plugin-sdk',
    path: 'docs/plugin-sdk',
    routeBasePath: '/plugin-sdk',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Community packages
  {
    id: 'community-packages',
    path: 'docs/community-packages',
    routeBasePath: '/community-packages',
  },

  // Web UI Kits
  {
    id: 'ui-kit',
    path: 'docs/ui-kit',
    routeBasePath: '/ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'react-ui-kit',
    path: 'docs/react-ui-kit',
    routeBasePath: '/react-ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'angular-ui-kit',
    path: 'docs/angular-ui-kit',
    routeBasePath: '/angular-ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Web Core
  {
    id: 'web-core',
    path: 'docs/web-core',
    routeBasePath: '/web-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  
  // React Web Core
  {
    id: 'react-web-core',
    path: 'docs/react-web-core',
    routeBasePath: '/react-web-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Mobile Core
  {
    id: 'android-core',
    path: 'docs/android-core',
    routeBasePath: '/android-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'flutter-core',
    path: 'docs/flutter-core',
    routeBasePath: '/flutter-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'ios-core',
    path: 'docs/ios-core',
    routeBasePath: '/ios-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'rn-core',
    path: 'docs/rn-core',
    routeBasePath: '/rn-core',
    versions: {
      current: {
        label: '0.5.x',
      },
    },
  },
  
  {
    id: 'flutter',
    path: 'docs/flutter',
    routeBasePath: '/flutter',
    versions: {
      current: {
        label: '0.7.x',
      },
    },
  },
  {
    id: 'ios',
    path: 'docs/ios',
    routeBasePath: '/ios',
    versions: {
      current: {
        label: '1.33.x',
      },
    },
  },
  {
    id: 'react-native',
    path: 'docs/rn-ui-kit',
    routeBasePath: '/react-native',
    versions: {
      current: {
        label: '1.4.x',
      },
    },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  // editUrl: 'https://github.com/alhifnywahid',
  showLastUpdateTime: false,
  sidebarCollapsible: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(path) {
        if (path.startsWith('/web-core/livestreaming')) {
          return [path.replace('/web-core/livestreaming', '/web-core/livestreaming/livestream-apis')];
        }
        if (path.startsWith('/rn-core/livestreaming')) {
          return [path.replace('/rn-core/livestreaming', '/rn-core/livestreaming/livestream-apis')];
        }
        if (path.startsWith('/react-web-core/livestreaming')) {
          return [path.replace('/react-web-core/livestreaming', '/react-web-core/livestreaming/livestream-apis')];
        }
        if (path.startsWith('/web-core/stage')) {
          return [path.replace('/web-core/stage', '/web-core/livestreaming/state-management-apis')];
        }
        if (path.startsWith('/rn-core/stage')) {
          return [path.replace('/rn-core/stage', '/rn-core/livestreaming/state-management-apis')];
        }
        if (path.startsWith('/react-web-core/stage')) {
          return [path.replace('/react-web-core/stage', '/react-web-core/livestreaming/state-management-apis')];
        }
        if (path.startsWith('/guides/capabilities/webhooks')) {
          return [
            path.replace('/guides/capabilities/webhooks', '/guides/webhooks'),
            path.replace(
              '/guides/capabilities/webhooks',
              '/guides/features/webhooks'
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/recording')) {
          return [
            path.replace('/guides/capabilities/recording', '/guides/recording'),
            path.replace(
              '/guides/capabilities/recording',
              '/guides/features/recording'
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/recording')) {
          return [
            path.replace('/guides/capabilities/recording', '/guides/recording'),
            path.replace(
              '/guides/capabilities/recording',
              '/guides/features/recording'
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/embed')) {
          return [
            path.replace('/guides/capabilities/embed', '/guides/embed'),
            path.replace(
              '/guides/capabilities/embed',
              '/guides/features/embed'
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/export-chat-dump')) {
          return [
            path.replace(
              '/guides/capabilities/export-chat-dump',
              '/guides/export-chat-dump'
            ),
            path.replace(
              '/guides/capabilities/export-chat-dump',
              '/guides/features/export-chat-dump'
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/breakoutroom')) {
          return [
            path.replace(
              '/guides/capabilities/breakoutroom',
              '/guides/breakoutroom'
            ),
            path.replace(
              '/guides/capabilities/breakoutroom',
              '/guides/features/breakoutroom'
            ),
          ];
        }
        /* for everything else */
        if (path.startsWith('/guides/capabilities')) {
          return [path.replace('/guides/capabilities', '/guides/features')];
        }
        if (path === '/ui-kit') {
          return [
            '/javascript/advanced-usage',
            '/javascript/customize-meeting-ui',
            '/javascript/events',
            '/javascript/installation',
            '/javascript/quickstart',
            '/javascript/reference/chat-message',
            '/javascript/reference/connection-config',
            '/javascript/reference/dyte-client',
            '/javascript/reference/dyte-control-bar',
            '/javascript/reference/dyte-errors',
            '/javascript/reference/dyte-grid',
            '/javascript/reference/dyte-meeting-events',
            '/javascript/reference/dyte-plugin',
            '/javascript/reference/dyte-ui-config',
            '/javascript/reference/meeting',
            '/javascript/reference/participant',
            '/javascript/reference/self-participant',
            '/javascript/sample-app',
            '/javascript/usage',
            '/javascript/virtual-background',
            '/javascript/',
          ];
        }
        if (path === '/react-ui-kit') {
          return [
            '/react/advanced-usage',
            '/react/customize-meeting-ui',
            '/react/events',
            '/react/installation',
            '/react/quickstart',
            '/react/reference/chat-message',
            '/react/reference/connection-config',
            '/react/reference/dyte-client',
            '/react/reference/dyte-control-bar',
            '/react/reference/dyte-errors',
            '/react/reference/dyte-grid',
            '/react/reference/dyte-meeting-events',
            '/react/reference/dyte-plugin',
            '/react/reference/dyte-ui-config',
            '/react/reference/meeting',
            '/react/reference/participant',
            '/react/reference/self-participant',
            '/react/sample-app',
            '/react/usage',
            '/react/virtual-background',
            '/react/',
          ];
        }
        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
];

const fs = require('fs'); 
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')], // (ubah nama folder del_bin)
  scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js' }],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
        options: {
          // maxTextSize: 50,
        },
      },
      image: '/svg/logoku.svg',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        title: 'My Notes', // Ganti dengan teks yang Anda inginkan
        hideOnScroll: false,
        // logo: {
        //   href: '/',
        //   src: '/svg/logoku.svg',
        //   srcDark: '/svg/logoku.svg',
        //   alt: 'My Notes',
        //   height: '40px',
        //   width: '101px',
        // },
        items: [
          {
            label: 'Blog',
            to: '/coming-soon',
          },
          // {
          //   label: 'Guides',
          //   to: 'guides',
          //   className: 'guides-top-header',
          // },
          // {
          //   label: 'Materi',
          //   type: 'dropdown',
          //   className: 'dyte-dropdown',
          //   items: [
          //     {
          //       type: 'html',
          //       value: sdksHTML,
          //       className: 'dyte-dropdown',
          //     },
          //   ],
          // },
          {
            label: 'Materi',
            type: 'dropdown',
            className: 'dyte-dropdown resources-dropdown',
            items: [
              {
                type: 'html',
                value: resourcesHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          // {
          //   label: 'Tutorial',
          //   type: 'dropdown',
          //   className: 'dyte-dropdown resources-dropdown',
          //   items: [
          //     {
          //       type: 'html',
          //       value: resourcesHTML,
          //       className: 'dyte-dropdown',
          //     },
          //   ],
          // },
          // {
          //   label: 'Support',
          //   to: 'https://dyte.io/contact',
          // },

          // {
          //   type: 'search',
          //   position: 'right',
          // },
          // {
          //   label: 'Book a demo',
          //   href: 'https://dyte.io/schedule-demo',
          //   position: 'right',
          //   className: 'navbar-book-demo',
          // },
          {
            label: 'Hubungi Saya',
            href: 'https://api.whatsapp.com/send/?phone=6285655207366&text&type=phone_number&app_absent=0',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/svg/logoku.svg',
          srcDark: '/svg/logoku.svg',
          alt: 'My Notes',
          height: '36px',
        },
        links: [
          {
            title: 'Belajar',
            items: [
              {
                label: 'Artikel',
                href: '#',
              },
              {
                label: 'Tutorial',
                href: '#',
              },
              {
                label: 'Buku',
                href: '#',
              },
            ],
          },
          {
            title: 'Populer Tutorial',
            items: [
              {
                label: 'Java',
                href: '#',
              },
              {
                label: 'Javascript',
                href: '#',
              },
              {
                label: 'Basisdata',
                href: '#',
              },
            ],
          },
          {
            title: 'Sosial Media',
            items: [
              {
                label: 'Facebook',
                href: '#',
              },
              {
                label: 'Instagram',
                href: '#',
              },
              {
                label: 'LinkeId',
                href: '#',
              },
            ],
          },
          {
            title: 'My Notes',
            items: [
              {
                label: 'About',
                href: '#',
              },
              {
                label: 'FAQs',
                href: '#',
              },
              {
                label: 'Contact',
                href: '#',
              },
            ],
          },
        ],
        copyright: 'Copyright © My Notes Inc.',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
          'javascript',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: 'RAXRF0BNQG',
        apiKey: '7c23fad7208e493b6addd4150066cf48',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
