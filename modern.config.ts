import { defineConfig, docTools } from '@modern-js/doc-tools';
import path from 'path';

function getI18nHelper(lang: 'zh' | 'en') {
  const cn = lang === 'zh';
  // 默认语言为中文，如果是英文，需要加上 /en 前缀
  // The default language is Chinese, if it is English, you need to add the /en prefix
  const prefix = cn ? '' : '/en';
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (cnText: string, enText: string) => (cn ? cnText : enText);
  return { getText, getLink };
}

function getNavConfig(lang: 'zh' | 'en') {
  const { getText, getLink } = getI18nHelper(lang);
  return [
    {
      text: getText('首页', 'Home'),
      link: getLink('/'),
    },
  ];
}

function getSidebarConfig(lang: 'zh' | 'en') {
  const { getText, getLink } = getI18nHelper(lang);
  // 注: 侧边栏配置可以嵌套，子菜单字段为 items
  // Note: The sidebar configuration can be nested, and the sub-menu field is items
  return {
    [getLink('/guide')]: [
      {
        collapsed: false,
        collapsible: false,
        text: getText('开始', 'Getting Started'),
        items: [getLink('/guide/introduction')],
      },
      {
        collapsed: false,
        collapsible: false,
        text: getText('书本', 'book'),
        items: [
          getLink('/guide/book/linkedList'),
          getLink('/guide/book/recursive'),
          getLink('/guide/book/heap'),
          getLink('/guide/book/sortAndSearch'),
        ],
      },
      {
        text: getText('二进制', 'system'),
        link: getLink('/guide/system'),
      },
      {
        text: getText('技巧', 'skill'),
        link: getLink('/guide/other'),
      },
    ],
  };
}

export default defineConfig({
  doc: {
    root: path.join(__dirname, 'docs'),
    // 默认语言
    // Default language
    lang: 'zh',
    themeConfig: {
      footer: {
        // 页脚的文案
        // Footer text
        message: '© 2023 JavaSwing  Reserved.',
      },
      // 不同语言的配置
      // Configuration for different languages
      locales: [
        {
          lang: 'zh',
          title: '数据结构与算法学习笔记',
          description: 'JavaScript数据结构与算法及对应LeetCode题代码',
          // nav: getNavConfig('zh'),
          sidebar: getSidebarConfig('zh'),
          // 语言切换按钮的文案
          // Language switch button text
          label: '简体中文',
        },
      ],
      //   {
      //     lang: 'en',
      //     title: 'A awesome project',
      //     description: 'A awesome project description',
      //     nav: getNavConfig('en'),
      //     // sidebar: getSidebarConfig('en'),
      //     label: 'English',
      //   },
      // ],
    },
  },
  plugins: [docTools()],
});
