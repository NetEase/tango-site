import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '基于源码的低代码引擎',
  tagline: '基于源码解析驱动，快速构建基于源码应用的低代码设计器，实时出码，无私有搭建协议',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://netease.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tango-site',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'netease', // Usually your GitHub org/user name.
  projectName: 'tango-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    // announcementBar: {
    //   id: 'notion_alert',
    //   content: '🏗 当前版本为 alpha 版本，相关文档正在编写之中，敬请期待！',
    //   backgroundColor: 'var(--ifm-color-primary-contrast-background)',
    //   textColor: 'var(--ifm-color-primary-contrast-foreground)',
    //   isCloseable: false,
    // },
    navbar: {
      title: '',
      logo: {
        alt: 'Tango Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'designer',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://netease.github.io/tango/index.html',
          label: 'API',
          position: 'left',
        },
        { to: '/blog', label: '博客', position: 'left' },
        {
          type: 'html',
          position: 'right',
          value: `<a class="navbar__link github-button" href="https://github.com/netease/tango" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star netease/tango on GitHub">Github</a><script async defer src="https://buttons.github.io/buttons.js"></script>`,
        },
        {
          href: 'https://tango-demo.musicfe.com/designer/',
          target: '_blank',
          label: 'Demo',
          position: 'right',
        },
        {
          href: 'https://www.figma.com/community/plugin/1174548852019950797/seal-ai-powered-figma-to-code-react-rn-vue-html-d2c',
          target: '_blank',
          label: 'D2C',
          position: 'right',

        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs/designer/quick-start',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/NetEase/tango/discussions',
            },
          ],
        },
        {
          title: '相关资源',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/netease/tango',
            },
          ],
        },
        {
          title: '更多产品',
          items: [
            {
              label: '海豹 D2C - Figma 插件',
              to: 'https://www.figma.com/community/plugin/1174548852019950797/seal-figma-to-code-d2c',
            },
            {
              label: '海豹 D2C - MasterGo 插件',
              to: 'https://mastergo.com/community/plugin/98956774428196/',
            },
          ],
        },
      ],
      logo: {
        alt: 'NetEase Cloud Music',
        src: 'https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/15400855445/6c8b/10d4/a8a8/452c8518b0c0a660549996d366cdff77.png',
        width: 320,
      },
      copyright: `Copyright © ${new Date().getFullYear()} NetEase Cloud Music, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
