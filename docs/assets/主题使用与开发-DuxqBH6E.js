import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E9%A1%B9%E7%9B%AE/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/personal-blog-by-vue-press/%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95/2.%E4%B8%BB%E9%A2%98%E4%BD%BF%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91/%E4%B8%BB%E9%A2%98%E4%BD%BF%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91.html","title":"主题使用与开发","lang":"zh-CN","frontmatter":{}}`),a={name:`主题使用与开发.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="主题使用与开发" tabindex="-1"><a class="header-anchor" href="#主题使用与开发"><span>主题使用与开发</span></a></h1><h2 id="vuepress-v1开发主题" tabindex="-1"><a class="header-anchor" href="#vuepress-v1开发主题"><span>VuePress V1开发主题</span></a></h2><p><a href="https://v1.vuepress.vuejs.org/zh/theme/writing-a-theme.html" target="_blank" rel="noopener noreferrer">开发主题 | VuePress V1</a><strong>重点:约定的目录结构</strong><img src="/blogs/assets/image-DXpgWa6Z.png" alt="alt text"></p><blockquote><p><strong>theme/global-components</strong>: 该目录下的组件都会被自动注册为全局组件。想了解更多，请参考 <code>@vuepress/plugin-register-components (opens new window)</code>。 <strong>theme/components</strong>: Vue 组件。 <strong>theme/layouts</strong>: 布局组件，其中 Layout.vue 是必需的。 <strong>theme/styles</strong>: 全局的样式和调色板。 <strong>theme/templates</strong>: 修改默认的模板文件。 <strong>theme/index.js</strong>: 主题文件的入口文件。 <strong>theme/enhanceApp.js</strong>: 主题水平的客户端增强文件。</p></blockquote><h2 id="vuepress-v2开发主题" tabindex="-1"><a class="header-anchor" href="#vuepress-v2开发主题"><span>VuePress V2开发主题</span></a></h2><h3 id="最简示例" tabindex="-1"><a class="header-anchor" href="#最简示例"><span>(最简示例)</span></a></h3><h4 id="主题开发" tabindex="-1"><a class="header-anchor" href="#主题开发"><span>主题开发</span></a></h4><p><strong>主题的客户端配置文件client.js:.vuepress/customTheme/client.js</strong></p><pre><code class="language-js">import { defineClientConfig } from &quot;vuepress/client&quot;;
import Layout from &quot;./layouts/Layout.vue&quot;;
// 注册
export default defineClientConfig({
  layouts: {
    Layout,
  },
});
</code></pre><p><strong>主题的入口文件index.ts:.vuepress/customTheme/index.ts</strong></p><pre><code class="language-ts">import { getDirname, path } from &quot;vuepress/utils&quot;;
const __dirname = getDirname(import.meta.url);
// 返回一个主题对象
const appCustomTheme = (options) =&gt; ({
  name: &quot;vuepress-app-customTheme&quot;,
  // 主题的客户端配置文件的路径
  clientConfigFile: path.resolve(__dirname, &quot;client.js&quot;),
});

export { appCustomTheme };
</code></pre><h4 id="主题使用" tabindex="-1"><a class="header-anchor" href="#主题使用"><span>主题使用</span></a></h4><blockquote><p>.vuepress/config.ts</p></blockquote><pre><code class="language-ts">import { defineUserConfig } from &quot;vuepress&quot;;
import { viteBundler } from &quot;@vuepress/bundler-vite&quot;;
import { appCustomTheme } from &quot;./customTheme&quot;;

export default defineUserConfig({
  bundler: viteBundler(),
  theme: appCustomTheme({}),
});
</code></pre><p>(v2默认主题配置)[https://ecosystem.vuejs.press/zh/themes/default/config.html]</p>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};