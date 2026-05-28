import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6%E4%BD%BF%E7%94%A8/VuePress/%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%9D%97%E7%9A%84%E5%8A%A0%E8%BD%BD%E4%B8%8E%E4%BD%BF%E7%94%A8/%E6%9C%AC%E5%9C%B0%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%9D%97/%E6%9C%AC%E5%9C%B0%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%9D%97%E4%B9%8Bslimsearch/%E6%9C%AC%E5%9C%B0%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%9D%97%E4%B9%8Bslimsearch.html","title":"本地搜索模块之slimsearch","lang":"zh-CN","frontmatter":{}}`),a={name:`本地搜索模块之slimsearch.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="本地搜索模块之slimsearch" tabindex="-1"><a class="header-anchor" href="#本地搜索模块之slimsearch"><span>本地搜索模块之slimsearch</span></a></h1><blockquote><p>说明:这是 vuepress2的使用</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><pre><code class="language-bash">npm i -D @vuepress/plugin-slimsearch@next
yarn add -D @vuepress/plugin-slimsearch@next
</code></pre><h2 id="项目中使用" tabindex="-1"><a class="header-anchor" href="#项目中使用"><span>项目中使用</span></a></h2><h3 id="config-ts中的配置" tabindex="-1"><a class="header-anchor" href="#config-ts中的配置"><span>config.ts中的配置</span></a></h3><pre><code class="language-ts">import { defineUserConfig } from &quot;vuepress&quot;;
import { slimsearchPlugin } from &quot;@vuepress/plugin-slimsearch&quot;;

// https://v2.vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
  base: &quot;/blogs/&quot;,
  plugins: [
    slimsearchPlugin({
      indexContent: true, // 启用全文搜索
    }),
  ],
  // 配置了locales, vuepress中 $localePath 才有意义
  lang: &quot;zh-CN&quot;,
  // 这里的设置会 影响 插件中的显示内容 slimsearchPlugin
  locales: {
    &quot;/&quot;: {
      // 默认语言路径，无前缀
      lang: &quot;zh-CN&quot;,
      title: &quot;VuePress&quot;,
    },
    &quot;/zh/&quot;: {
      // 中文路径，前缀为 /zh/
      lang: &quot;en-US &quot;,
      title: &quot;VuePress&quot;,
    },
  },
  // ...
});
</code></pre><h3 id="搜索组件" tabindex="-1"><a class="header-anchor" href="#搜索组件"><span>搜索组件</span></a></h3><pre><code class="language-vue">&lt;template&gt;
  &lt;!-- 使用 vuepress 内置组件 --&gt;
  &lt;SearchBox /&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  name: &quot;LocaSlimlSearch&quot;,
};
&lt;/script&gt;
&lt;style lang=&quot;stylus&quot;&gt;
// 参考 https://ecosystem.vuejs.press/zh/themes/default/styles.html#style-%E6%96%87%E4%BB%B6
:root {
// accent colors
  --vp-c-accent: $accentColor;
  --vp-c-accent-bg: #fff;
  --vp-c-accent-hover: #4abf8a;
  --vp-c-accent-text: var(--vp-c-white);
  --vp-c-accent-soft: rgb(16 185 129 / 14%);

  // background colors
  --vp-c-bg: #fff;
  --vp-c-bg-alt: #f6f6f7;
  --vp-c-bg-elv: #fff;

  // text colors
  --vp-c-text: lighten($textColor, 25%);
  --vp-c-text-mute: rgb(60 60 67 / 78%);
  --vp-c-text-subtle: rgb(60 60 67 / 56%);

  // border colors
  --vp-c-divider: #e2e2e3;
  --vp-c-border: #c2c2c4;
  --vp-c-border-hard: #b8b8ba;

  // shadow colors
  --vp-c-shadow: rgb(0 0 0 / 15%);

  // control colors---涉及到 slimsearch组件的输入框等控件的颜色
  --vp-c-control: rgb(255,255,255);
  --vp-c-control-hover: rgba(225,225,225,0.25);
  --vp-c-control-disabled: #eaeaea;

    --vp-c-accent-bg:rgb(225,225,225)


  // code group colors
  --vp-c-code-tab-title: var(--code-c-text, rgb(255 255 255 / 90%));
  --vp-c-code-tab-bg: var(--code-bg-color, var(--code-c-bg));
  --vp-c-code-tab-active: var(--vp-c-accent);

  // transition vars
  --vp-t-color: 0.3s ease;
  --vp-t-transform: 0.3s ease;
}
.slimsearch-button {
 border 1px solid darken($borderColor, 10%) !important
}
&lt;/style&gt;
</code></pre><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><h3 id="样式配置" tabindex="-1"><a class="header-anchor" href="#样式配置"><span>样式配置</span></a></h3><p>使用此插件时,内置 SearchBox 会被替换成 @vuepress/plugin-slimsearch 中的搜索组件</p><blockquote><p>它里面 涉及到 css 变量,参考**<a href="https://ecosystem.vuejs.press/zh/themes/default/styles.html#style-%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">主题默认css</a>** <code>这是因为作者开发时是考虑使用默认主题使用插件,所以css变量在 主题中</code> 因而,如果使用自定义主题开发项目时,需要 主动设置 这些css变量</p></blockquote><h3 id="国际化配置" tabindex="-1"><a class="header-anchor" href="#国际化配置"><span>国际化配置</span></a></h3><p>@vuepress/plugin-slimsearch 使用 中/英文 依赖于 defineUserConfig 中设置,而不是 插件传参</p><pre><code class="language-ts">import { defineUserConfig } from &quot;vuepress&quot;;
import { slimsearchPlugin } from &quot;@vuepress/plugin-slimsearch&quot;;

// https://v2.vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
  //  ...
  lang: &quot;zh-CN&quot;,
  // 这里的设置会 影响 插件中的显示内容 slimsearchPlugin
  locales: {
    &quot;/&quot;: {
      // 默认语言路径，无前缀
      lang: &quot;zh-CN&quot;,
      title: &quot;VuePress&quot;,
    },
    &quot;/zh/&quot;: {
      // 中文路径，前缀为 /zh/
      lang: &quot;en-US &quot;,
      title: &quot;VuePress&quot;,
    },
  },
  // ...
});
</code></pre><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p><a href="https://ecosystem.vuejs.press/zh/plugins/search/slimsearch.html" target="_blank" rel="noopener noreferrer">VuePress 生态系统之 slimsearch</a><a href="https://ecosystem.vuejs.press/zh/themes/default/styles.html#style-%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">VuePress 生态系统 之 主题样式变量</a></p>`,18)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};