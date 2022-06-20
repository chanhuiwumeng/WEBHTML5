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
          children: ['/html/html发展史.md', '/html/html5发展史.md','/html/html文档标签.md','/html/html内容标签.md','/html/html图片和媒体标签','/html/html表格标签.md','/html/html表单标签.md'],        },
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
		{
		  text: '前端面试小技巧',
		  children: ['/interview/面试小技巧.md', '/group/bar.md'],
		},
      ],
	   // 不同子路径下的页面会使用不同的侧边栏
	      sidebar: {
	        '/guide/': [
	          {
	            text: '指南',
				  collapsible: true,
	            children: ['/guide/WEB前端发展.md','/guide/浏览器.md','/guide/vscode.md'],
	          },
	        ],
	        '/html/': [
	          {
	            text: 'HTML基础',
	        	  collapsible: true,
          children: ['/html/html发展史.md', '/html/html5发展史.md','/html/html文档标签.md','/html/html内容标签.md','/html/html行内标签.md','/html/html图片和媒体标签','/html/html表格标签.md','/html/html表单标签.md'],    
			  },
	        ],
			'/css/': [
			  {
			    text: 'css基础',
				  collapsible: true,
			    children: ['/css/README.md', '/css/css背景.md'],
			  },
			],
			'/interview/': [
			  {
			    text: '前端面试小技巧',
				  collapsible: true,
			     children: ['/interview/面试小技巧.md', '/group/bar.md'],
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