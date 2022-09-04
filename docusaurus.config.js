// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sketchware Pro',
  tagline: 'Official website of Sketchware Pro.',
  url: 'https://sketchware-pro.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sketchware-Pro', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

Docusaurus
Plugins📦 plugin-client-redirects
Version: 2.1.0
On this page
📦 plugin-client-redirects
Docusaurus Plugin to generate client-side redirects.

This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript.

PRODUCTION ONLY
This plugin is always inactive in development and only active in production because it works on the build output.

CAUTION
It is better to use server-side redirects whenever possible.

Before using this plugin, you should look if your hosting provider doesn't offer this feature.

Installation
npm
Yarn
npm install --save @docusaurus/plugin-client-redirects


Configuration
Accepted fields:

Option	Type	Default	Description
fromExtensions	string[]	[]	The extensions to be removed from the route after redirecting.
toExtensions	string[]	[]	The extensions to be appended to the route after redirecting.
redirects	RedirectRule[]	[]	The list of redirect rules.
createRedirects	CreateRedirectsFn	undefined	A callback to create a redirect rule. Docusaurus query this callback against every path it has created, and use its return value to output more paths.
NOTE
This plugin will also read the siteConfig.onDuplicateRoutes config to adjust its logging level when multiple files will be emitted to the same location.

Types
RedirectRule
type RedirectRule = {
  to: string;
  from: string | string[];
};

NOTE
The idea of "from" and "to" is central in this plugin. "From" means a path that you want to create, i.e. an extra HTML file that will be written; "to" means a path to want to redirect to, usually a route that Docusaurus already knows about.

This is why you can have multiple "from" for the same "to": we will create multiple HTML files that all redirect to the same destination. On the other hand, one "from" can never have more than one "to": the written HTML file needs to have a determinate destination.

CreateRedirectsFn
// The parameter `path` is a route that Docusaurus has already created. It can
// be seen as the "to", and your return value is the "from". Returning a falsy
// value will not create any redirect pages for this particular path.
type CreateRedirectsFn = (path: string) => string[] | string | null | undefined;
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/docs/components/Firebase/connect-to-firebase/',
            from: '/docs/connect-to-firebase/',
          },
          // Redirect from multiple old paths to the new path

        ],
      },
    ],
  ],
};
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Sketchware-Pro/website/tree/main/',
        },
        blog: false,
   /*     blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Sketchware-Pro/website/tree/main/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sketchware Pro',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: '/',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
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
            href: 'https://github.com/Sketchware-Pro/Sketchware-Pro/releases',
            label: 'Download Sketchware Pro',
           position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'View',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Dc8ZDBRK5V',
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
    }),
};

module.exports = config;
