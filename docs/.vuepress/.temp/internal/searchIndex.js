export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "css背景",
    "headers": [
      {
        "level": 2,
        "title": "背景颜色",
        "slug": "背景颜色",
        "children": []
      },
      {
        "level": 2,
        "title": "背景图片",
        "slug": "背景图片",
        "children": []
      },
      {
        "level": 2,
        "title": "背景颜色和图片结合",
        "slug": "背景颜色和图片结合",
        "children": []
      }
    ],
    "path": "/css/css%E8%83%8C%E6%99%AF.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CSS基础",
    "headers": [
      {
        "level": 2,
        "title": "CSS简介",
        "slug": "css简介",
        "children": []
      },
      {
        "level": 2,
        "title": "css使用方式",
        "slug": "css使用方式",
        "children": []
      },
      {
        "level": 2,
        "title": "css布局",
        "slug": "css布局",
        "children": []
      }
    ],
    "path": "/css/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "HTML其他标签",
    "headers": [],
    "path": "/html/html%E5%85%B6%E4%BB%96%E6%A0%87%E7%AD%BE.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "HTML标签",
    "headers": [
      {
        "level": 2,
        "title": "HTML简介",
        "slug": "html简介",
        "children": []
      },
      {
        "level": 2,
        "title": "布局标签",
        "slug": "布局标签",
        "children": []
      },
      {
        "level": 2,
        "title": "文本标签",
        "slug": "文本标签",
        "children": []
      },
      {
        "level": 2,
        "title": "HTML5标签",
        "slug": "html5标签",
        "children": []
      }
    ],
    "path": "/html/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "VsCode开发工具",
    "headers": [
      {
        "level": 2,
        "title": "VsCode简介",
        "slug": "vscode简介",
        "children": []
      },
      {
        "level": 2,
        "title": "VsCode下载和安装",
        "slug": "vscode下载和安装",
        "children": []
      },
      {
        "level": 2,
        "title": "VsCode配置",
        "slug": "vscode配置",
        "children": []
      },
      {
        "level": 2,
        "title": "VsCode插件安装",
        "slug": "vscode插件安装",
        "children": []
      }
    ],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
