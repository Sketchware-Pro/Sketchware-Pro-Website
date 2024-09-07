// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sketchware Pro',
  tagline: 'The official documentation for Sketchware Pro.',
  url: 'https://docs.sketchware.pro',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NiceSapien', // Usually your GitHub org/user name.
  projectName: 'Sketchware-Pro-website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/docs/components/Google/Firebase/connect-to-firebase',
            from: '/docs/connect-to-firebase',
          },
          {
            to: 'https://sketchware.pro/download',
            from: '/download',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
                googleTagManager: {
          containerId: 'GTM-NFZPPW6N',
        },
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Sketchware-Pro/Sketchware-Pro-website/tree/dev/',
        },
      //  blog: true,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Sketchware-Pro/Sketchware-Pro-website/tree/dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2093114452213843',
      async: true,
      crossorigin: "anonymous",
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
     /* googleAdsense: {
      dataAdClient: 'ca-pub-2093114452213843',
    },*/
      metadata: [{name: 'keywords', content: 'blog, ide, programming, coding, docs, sketchware, pro, android'}],
      navbar: {
        title: 'Sketchware Pro',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'
          {
            href: 'https://github.com/Sketchware-Pro/Sketchware-Pro',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/QcrNGVGQRV',
            label: 'Join us on Discord',
            position: 'right',
          },
          {
            href: '/download',
            label: 'Download',
           position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sketchware Pro',
            items: [
              {
                label: 'Download',
                to: '/download',
              },
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Dc8ZDBRK5V',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/sketchwarepro',
              },
              {
                label: 'GitHub issues',
                href: 'https://github.com/Sketchware-Pro/Sketchware-Pro/issues'
              },
              {
                label: 'Github Discussions',
                href: 'https://github.com/Sketchware-Pro/Sketchware-Pro/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Sketchware-Pro/Sketchware-Pro',
              },
              {
                label: 'Website GitHub',
                href: 'https://github.com/Sketchware-Pro/Sketchware-Pro-website',
              },
              {
                label: 'Disclaimer',
                href: '/about',
              },
            ],
          },
        ],
        copyright: "Built by NiceSapien.",
      },
      prism: {
        additionalLanguages: ['java'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
      // The application ID provided by Algolia
      appId: 'KCVJ3D0QG2',

      // Public API key: it is safe to commit it
      apiKey: '5c1048c6a358fa420ff8c7c4da32b4bf',

      indexName: 'sketchware-pro',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    }),
};

module.exports = config;
