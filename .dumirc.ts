import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/logo.png'],
  themeConfig: {
    name: 'Aifarm-IoT',
    logo: '/logo.png',

    nav: [
      {
        title: '平台规划',
        link: '/design',
      },
      {
        title: '框架设计',
        link: '/frame',
      },
      {
        title: '程序开发',
        link: '/development',
      },

      {
        title: 'IoTDB',
        link: '/iotdb',
      },

      {
        title: 'Mqtt',
        link: '/mqtt',
      },
      {
        title: '调试部署',
        link: '/deployed',
      },

      {
        title: '知识库',
        link: '/knowledge',
      },


    ],

  },
});
