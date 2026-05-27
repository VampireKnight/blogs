import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6%E4%BD%BF%E7%94%A8/VuePress/%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%9D%97%E7%9A%84%E5%8A%A0%E8%BD%BD%E4%B8%8E%E4%BD%BF%E7%94%A8/%E6%9C%AC%E5%9C%B0%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%9D%97/%E6%9C%AC%E5%9C%B0%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%9D%97%E4%B9%8BSearch/%E6%9C%AC%E5%9C%B0%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%9D%97%E4%B9%8BSearch.html","title":"本地搜索模块之Search","lang":"zh-CN","frontmatter":{}}`),a={name:`本地搜索模块之Search.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="本地搜索模块之search" tabindex="-1"><a class="header-anchor" href="#本地搜索模块之search"><span>本地搜索模块之Search</span></a></h1><blockquote><p>说明:这是 vuepress2的使用</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><pre><code class="language-bash">npm i -D @vuepress/plugin-search@next
yarn add -D @vuepress/plugin-search@next
</code></pre><h2 id="项目中使用" tabindex="-1"><a class="header-anchor" href="#项目中使用"><span>项目中使用</span></a></h2><h3 id="config-ts中的配置" tabindex="-1"><a class="header-anchor" href="#config-ts中的配置"><span>config.ts中的配置</span></a></h3><pre><code class="language-ts">import { defineUserConfig } from &quot;vuepress&quot;;
import { searchPlugin } from &quot;@vuepress/plugin-search&quot;;

// https://v2.vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
  base: &quot;/blogs/&quot;,
  plugins: [
    searchPlugin({
      locales: {
        &quot;/&quot;: {
          placeholder: &quot;Search&quot;,
        },
        &quot;/zh/&quot;: {
          placeholder: &quot;搜索&quot;,
        },
      },
    }),
  ],
  // ...
});
</code></pre><h3 id="搜索组件" tabindex="-1"><a class="header-anchor" href="#搜索组件"><span>搜索组件</span></a></h3><pre><code class="language-vue">&lt;template&gt;
  &lt;!-- 使用 vuepress 内置组件 --&gt;
  &lt;SearchBox /&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  name: &quot;LocalSearch&quot;,
};
&lt;/script&gt;
&lt;style lang=&quot;stylus&quot;&gt;
:root {
  --vp-c-bg:#fff
  --vp-c-accent :$accentColor;
  --vp-c-text: lighten($textColor, 25%);
  --vp-c-divider:darken($borderColor, 10%);
  --search-c-item-text: var(--vp-c-text-subtle);
  --search-c-item-focus: var(--vp-c-bg-alt);
  --search-input-width: 8rem;
  --search-result-width: 20rem;
}
&lt;/style&gt;
</code></pre><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><h3 id="样式变量" tabindex="-1"><a class="header-anchor" href="#样式变量"><span>样式变量</span></a></h3><pre><code class="language-css">:root {
  --search-c-bg: var(--vp-c-bg);
  --search-c-accent: var(--vp-c-accent);
  --search-c-text: var(--vp-c-text);
  --search-c-divider: var(--vp-c-divider);
  --search-c-item-text: var(--vp-c-text-subtle);
  --search-c-item-focus: var(--vp-c-bg-alt);
  --search-input-width: 8rem;
  --search-result-width: 20rem;
}
</code></pre><p>使用此插件时,内置 SearchBox中部分样式会变为使用变量(变量名如上) 因此,为了使样式正常显示,需要实现所需样式变量,如下</p><pre><code class="language-css">:root {
  --vp-c-bg: #fff;
  --vp-c-accent: $accentColor;
  --vp-c-text: lighten($textColor, 25%);
  --vp-c-divider: darken($borderColor, 10%);
  --search-c-item-text: var(--vp-c-text-subtle);
  --search-c-item-focus: var(--vp-c-bg-alt);
  --search-input-width: 8rem;
  --search-result-width: 20rem;
}
</code></pre><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p><a href="https://ecosystem.vuejs.press/zh/plugins/search/search.html" target="_blank" rel="noopener noreferrer">VuePress 生态系统之Search</a></p>`,16)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};