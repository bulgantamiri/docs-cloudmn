// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud.mn',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cloudmn.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cloudmn', // Usually your GitHub org/user name.
  projectName: 'docs-cloudmn', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'mn',
    locales: ['mn', 'en'],
    localeConfigs: {
      mn: {
        label: 'Монгол',
      },
      en: {
        htmlLang: 'en-GB'
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cloudmnmongolia/docs/tree/main/',
        },
        blog: false,//{
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
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
          alt: 'CloudMN',
          src: 'img/cloudmn.svg',
        },
        items: [
        //  {
        //    type: 'doc',
        //    docId: 'intro',
        //    position: 'left',
        //    label: 'Tutorial',
        //  },
          {href: 'https://console.cloud.mn/storage/docs', label: 'Storage API', position: 'left'},
          {href: 'https://console.cloud.mn/', label: 'Try', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'CloudMN',
          src: 'img/cloudmn.svg',
          height: '60',
        },
        style: 'light',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
