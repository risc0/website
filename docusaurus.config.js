// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RISC Zero',
  tagline: 'Hyper-Efficient General Purpose Zero-Knowledge Computing.',
  url: 'https://risczero.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'risc0', // Usually your GitHub org/user name.
  projectName: 'website2', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/risc0/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/risc0/website/edit/main/',
        },
        pages : {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'RISC Zero',
        logo: {
          alt: 'Risc0 Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'About',
            items: [
              {label: 'Meet the Team',
              to: '/team'
              },
            ]
          },
          {
            position: 'left',
            label: 'Getting Started',
            to: 'docs/getting-started',
          },
          {
            position: 'left',
            label: 'Tech',
            to: 'docs/technology',
          },
          {
            type: 'doc',
            docId: 'key-terminology',
            position: 'left',
            label: 'Terminology',
          },
          {
            type: 'doc',
            docId: 'faq',
            position: 'left',
            label: 'FAQ',
          },
          {
            href: 'https://boards.greenhouse.io/risczero',
            position: 'left',
            label: 'Careers',
          },
          {
            href: 'https://github.com/Risc0',
            position: 'right',
            label: 'GitHub',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Stay Informed',
            items: [
              {
                label: 'Mailing List',
                to: 'mailing',
              },
              {
                label: 'Blog',
                to: '/blog'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/risczero',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/risczero',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/risczero',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'Codebase',
                to: 'https://github.com/risc0/',
              },
              {
                label: 'Website',
                to: 'docs/contributors-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Risc0, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
