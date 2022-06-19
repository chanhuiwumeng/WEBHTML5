export const themeData = JSON.parse("{\"logo\":\"https://v2.vuepress.vuejs.org/images/hero.png\",\"navbar\":[{\"text\":\"HTML\",\"children\":[\"/html/html发展史.md\",\"/html/html5发展史.md\",\"/html/html文档标签.md\",\"/html/html内容标签.md\",\"/html/html图片和媒体标签\",\"/html/html表格标签.md\",\"/html/html表单标签.md\"]},{\"text\":\"CSS\",\"children\":[\"/css/README.md\",\"/css/css背景.md\"]},{\"text\":\"移动端布局\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]},{\"text\":\"JAVAScript\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]},{\"text\":\"NodeJs\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]},{\"text\":\"前端框架\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]},{\"text\":\"前端页面优化\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]}],\"sidebar\":{\"/guide/\":[{\"text\":\"指南\",\"collapsible\":true,\"children\":[\"/guide/WEB前端发展.md\",\"/guide/浏览器.md\",\"/guide/vscode.md\"]}],\"/html/\":[{\"text\":\"HTML基础\",\"collapsible\":true,\"children\":[\"/html/html发展史.md\",\"/html/html5发展史.md\",\"/html/html文档标签.md\",\"/html/html内容标签.md\",\"/html/html行内标签.md\",\"/html/html图片和媒体标签\",\"/html/html表格标签.md\",\"/html/html表单标签.md\"]}],\"/css/\":[{\"text\":\"css基础\",\"collapsible\":true,\"children\":[\"/css/README.md\",\"/css/css背景.md\"]}]},\"lastUpdatedText\":\"上次更新时间\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
