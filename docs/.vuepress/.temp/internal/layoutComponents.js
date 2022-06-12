import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/资料/新版web前端课程资料/WEBHTML5/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/资料/新版web前端课程资料/WEBHTML5/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
