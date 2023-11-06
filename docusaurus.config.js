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
];

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
        if (path.startsWith('/catatan')) {
          return [path.replace('/catatan', '/catatan')];
        } 
        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'G-LB65R5JZJB',
      anonymizeIP: true,
    },
  ],
  [
    '@docusaurus/plugin-google-analytics',
    {
      trackingID: 'G-LB65R5JZJB',
      anonymizeIP: true,
    },
  ],
  [
    '@docusaurus/plugin-google-tag-manager',
    {
      containerId: 'GTM-K9FW3VQG',
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
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],
  scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js' }],
  // onBrokenLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/catatan',
          id: 'catatan',
          routeBasePath: '/catatan',
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
      liveCodeBlock: {
        languages: ['javascript', 'jsx'],
        css: {
          fontSize: '16px',
        },
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
          //   className: 'triometri',
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
          // {
          //   label: 'Hubungi Saya',
          //   href: 'https://api.whatsapp.com/send/?phone=6285655207366&text&type=phone_number&app_absent=0',
          //   position: 'right',
          //   className: 'dev-portal-signup dev-portal-link',
          // },
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
        apiKey: '32f2f80116214685d9f4648ac21b5277',
        indexName: 'dev_imgopret',
        placeholder: "Search...",
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
