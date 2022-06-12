export const themeData = JSON.parse("{\"logo\":\"https://v2.vuepress.vuejs.org/images/hero.png\",\"navbar\":[{\"text\":\"HTML\",\"link\":\"/html/README.md\"},{\"text\":\"CSS\",\"children\":[\"/css/README.md\",\"/css/css背景.md\"]},{\"text\":\"移动端布局\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]},{\"text\":\"JAVAScript\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]},{\"text\":\"NodeJs\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]},{\"text\":\"前端框架\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]},{\"text\":\"前端页面优化\",\"children\":[\"/group/foo.md\",\"/group/bar.md\"]}],\"sidebar\":{\"/guide/\":[{\"text\":\"开发工具\",\"collapsible\":true,\"children\":[\"/guide/README.md\"]}],\"/html/\":[{\"text\":\"HTML基础\",\"collapsible\":true,\"children\":[\"/html/README.md\",\"/html/html其他标签.md\"]}],\"/css/\":[{\"text\":\"css基础\",\"collapsible\":true,\"children\":[\"/css/README.md\",\"/css/css背景.md\"]}]},\"lastUpdatedText\":\"上次更新时间\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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