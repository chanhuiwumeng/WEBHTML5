const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')

module.exports = {
  base: '/',
  lang: 'zh-CN',
  home: 'Html5',
  description: '这是我的第一个 VuePress 站点',
  title: 'WEBHTML5',
   theme: defaultTheme({
	 logo: 'https://v2.vuepress.vuejs.org/images/hero.png',
      navbar: [
        // NavbarItem
        {
          text: 'HTML',
          link: '/html/README.md',
        },
        // NavbarGroup
        {
          text: 'CSS',
          children: ['/css/README.md', '/css/css背景.md'],
        },
		{
		  text: '移动端布局',
		  children: ['/group/foo.md', '/group/bar.md'],
		},
		{
		  text: 'JAVAScript',
		  children: ['/group/foo.md', '/group/bar.md'],
		},
		{
		  text: 'NodeJs',
		  children: ['/group/foo.md', '/group/bar.md'],
		},
		{
		  text: '前端框架',
		  children: ['/group/foo.md', '/group/bar.md'],
		},
		{
		  text: '前端页面优化',
		  children: ['/group/foo.md', '/group/bar.md'],
		},
      ],
	   // 不同子路径下的页面会使用不同的侧边栏
	      sidebar: {
	        '/guide/': [
	          {
	            text: '指南',
				  collapsible: true,
	            children: ['/guide/WEB前端发展.md','/guide/README.md'],
	          },
	        ],
	        '/html/': [
	          {
	            text: 'HTML基础',
	        	  collapsible: true,
	            children: ['/html/README.md', '/html/html其他标签.md'],
	          },
	        ],
			'/css/': [
			  {
			    text: 'css基础',
				  collapsible: true,
			    children: ['/css/README.md', '/css/css背景.md'],
			  },
			],
	      },
	  lastUpdatedText: '上次更新时间'
    }),
	 plugins: [
	    searchPlugin({
	      // 配置项
	    }),
		backToTopPlugin(),
	  ],
}