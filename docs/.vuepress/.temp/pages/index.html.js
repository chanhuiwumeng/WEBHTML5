export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"tagline\":\"最新版WEB前端知识大纲汇总\",\"heroImage\":\"/HTML5.svg\",\"heroText\":\"全新的WEB\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/guide/README.md\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue 驱动\",\"details\":\"享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1655048157000,\"contributors\":[{\"name\":\"chanhuiwumen\",\"email\":\"523489273@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
