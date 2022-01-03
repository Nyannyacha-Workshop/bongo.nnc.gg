// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bongo',
  tagline: 'The Enhanced Language for make easier to modding everything of Minecraft',
  url: 'https://bongo.nnc.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Nyannyacha-Workshop', // Usually your GitHub org/user name.
  projectName: 'bongo.nnc.gg', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Nyannyacha-Workshop/bongo.nnc.gg/edit/master/',
        },
        blog: {
          showReadingTime: true,
          exclude: ['**/excluded/**'],
          editUrl:
            'https://github.com/Nyannyacha-Workshop/bongo.nnc.gg/edit/master/',
        },
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
        logo: {
          alt: 'Bongo Mascot',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            label: 'Blog',
            to: '/blog',
          },
        ],
      },
      footer: {
        logo: {
          alt: "Nyannyacha Engine",
          src: 'img/nnc_engine_dark.png',
          srcDark: 'img/nnc_engine.png'
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://nnc.gg/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Nyannyacha-Workshop/bongo.nnc.gg',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nyannyacha Workshop.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
