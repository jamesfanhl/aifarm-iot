import { FooterColumn } from 'rc-footer/es/column';

interface GetColumnParams {
  github?: string;
}
export const getColumns = () => {
  const resources: FooterColumn = {
    title: 'Ant Design资源',
    items: [
      {
        title: 'Ant Design Style',
        url: 'https://ant-design.github.io/antd-style/zh-CN',
        openExternal: true,
        description: 'CssInJs最佳实践',
      },

      {
        title: 'Ant Design',
        url: 'https://ant-design.antgroup.com/index-cn/',
        openExternal: true,
      },
      {
        title: 'Ant Design Pro',
        url: 'https://pro.ant.design/',
        openExternal: true,
      },
      {
        title: 'Ant Design Pro Components',
        url: 'https://pro-components.antdigital.dev/',
        openExternal: true,
      },
      {
        title: 'Ant Design Chart',
        url: 'https://ant-design-charts.antgroup.com/',
        openExternal: true,
      },
      {
        title: 'Dumi',
        url: 'https://d.umijs.org/',
        openExternal: true,
        description: '组件/文档研发工具  ',
      },
      {
        title: 'Umi',
        url: 'https://umijs.org/',
        openExternal: true,
        description: 'React 应用开发框架',
      },
    ],
  };
  const community: FooterColumn = {
    title: '其他资源',
    items: [
      {
        title: '超级详细、简单易懂的CSS讲解',
        url: 'https://github.com/fanhualei/wukong-css/blob/master/doc/css-pc.md',
        openExternal: true,
      },

      {
        title: 'mdn',
        url: 'https://developer.mozilla.org/zh-CN/docs/Learn  ',
        openExternal: true,
        description: '手册类型的html、css、js语法',
      },
      {
        title: 'react-leaflet',
        url: 'https://react-leaflet.js.org/',
        openExternal: true,
        description: 'react的leaflet框架',
      },
      {
        title: 'leafletjs中文网站',
        url: 'https://leafletjs.cn/',
        openExternal: true,
      },

      {
        title: 'iconfont',
        url: 'https://www.iconfont.cn/',
        openExternal: true,
        description: '阿里巴巴矢量图标库',
      },
      {
        title: 'commitlint',
        url: 'https://commitlint.js.org/',
        openExternal: true,
        description: 'git注释校验规则',
      },

      {
        title: 'dumi-theme-antd',
        url: 'https://dumi-theme-antd-style.arvinx.com/',
        openExternal: true,
        description: '网站样式配置说明',
      },
    ],
  };

  const help: FooterColumn = {
    title: '帮助',

    items: [
      {
        title: '讨论区',
        url: `https://gitee.com/fanhualei/ant-design-pro-started/issues`,
        openExternal: true,
      },
      {
        title: '网站源代码',
        url: 'https://gitee.com/fanhualei/ant-design-pro-started',
        openExternal: true,
      },
      {
        title: 'Apifox Mock 语法',
        url: 'https://apifox.com/help/api-mock/rules#%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B',
        openExternal: true,
      },
      {
        title: 'ECharts 官网',
        url: 'https://echarts.apache.org/examples/zh/index.html',
        openExternal: true,
      },
      {
        title: '图片压缩工具',
        url: 'https://tinify.cn/',
        openExternal: true,
      },
    ],
  };
  return [resources, community, help];
};
