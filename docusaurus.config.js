// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Abfinance API Documentation',
  tagline: '',
  url: 'https://Abfinance-exchange.github.io',
  baseUrl: '/usa-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  themes: ['docusaurus-theme-openapi-docs'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Abfinance-exchange', // Usually your GitHub org/user name.
  projectName: 'usa-docs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // plugins: [
  //   [
  //     "docusaurus-plugin-openapi-docs",
  //     {
  //       id: "openapi",
  //       docsPluginId: "classic",
  //       config: {
  //         v1_market: {
  //           specPath: "yml-folder/v1/market.yaml",
  //           outputDir: "docs/api-explorer/v1/market",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //         v1_trade: {
  //           specPath: "yml-folder/v1/trade.yaml",
  //           outputDir: "docs/api-explorer/v1/trade",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //         v1_account: {
  //           specPath: "yml-folder/v1/account.yaml",
  //           outputDir: "docs/api-explorer/v1/account",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //         v1_position: {
  //           specPath: "yml-folder/v1/position.yaml",
  //           outputDir: "docs/api-explorer/v1/position",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //         v1_asset: {
  //           specPath: "yml-folder/v1/asset.yaml",
  //           outputDir: "docs/api-explorer/v1/asset",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //         v1_user: {
  //           specPath: "yml-folder/v1/user.yaml",
  //           outputDir: "docs/api-explorer/v1/user",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //         v1_lt: {
  //           specPath: "yml-folder/v1/lt.yaml",
  //           outputDir: "docs/api-explorer/v1/lt",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //         v1_spot_margin_uta: {
  //           specPath: "yml-folder/v1/spot-margin-uta.yaml",
  //           outputDir: "docs/api-explorer/v1/spot-margin-uta",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //         v1_spot_margin_normal: {
  //           specPath: "yml-folder/v1/spot-margin-normal.yaml",
  //           outputDir: "docs/api-explorer/v1/spot-margin-normal",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         },
  //       }
  //     }
  //   ],
  // ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/abfinance.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
        appId: '6BDPYQN4N6',
        apiKey: '3945cc0bcfa5510237aa55a2fb83dd20',
        indexName: 'Abfinance-exchangeio',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search',
      },
      colorMode: {
        defaultMode: 'dark',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Abfinance Logo',
          src: 'img/logo_lightmode.png',
          srcDark: 'img/logo_darkmode.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'v1/guide',
            position: 'left',
            label: 'V1 API',
          },

          {
            type: 'dropdown',
            position: 'right',
            label: 'Extras',
            items: [

              {
                type: 'doc',
                docId: 'changelog/v1',
                label: 'Changelog',
              },

            ]
          },
        ],
      }

    }),
};

module.exports = config;
