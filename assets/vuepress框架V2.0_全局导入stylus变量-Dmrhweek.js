import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E9%A1%B9%E7%9B%AE/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/personal-blog-by-vue-press/%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95/2.%E4%B8%BB%E9%A2%98%E4%BD%BF%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91/vuepress%E6%A1%86%E6%9E%B6V2.0_%E5%85%A8%E5%B1%80%E5%AF%BC%E5%85%A5stylus%E5%8F%98%E9%87%8F/vuepress%E6%A1%86%E6%9E%B6V2.0_%E5%85%A8%E5%B1%80%E5%AF%BC%E5%85%A5stylus%E5%8F%98%E9%87%8F.html","title":"vuepress框架V2.0+全局导入stylus变量","lang":"zh-CN","frontmatter":{}}`),a={name:`vuepress框架V2.0+全局导入stylus变量.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="vuepress框架v2-0-全局导入stylus变量" tabindex="-1"><a class="header-anchor" href="#vuepress框架v2-0-全局导入stylus变量"><span>vuepress框架V2.0+全局导入stylus变量</span></a></h1><h2 id="错误方案" tabindex="-1"><a class="header-anchor" href="#错误方案"><span>错误方案</span></a></h2><h3 id="additionaldata-添加-import" tabindex="-1"><a class="header-anchor" href="#additionaldata-添加-import"><span>additionalData 添加 @import</span></a></h3><p><strong>additionalData配置:.vuepress/config.ts</strong></p><pre><code class="language-ts">import { defineUserConfig } from &quot;vuepress&quot;;
import { viteBundler } from &quot;@vuepress/bundler-vite&quot;;
import { appCustomTheme } from &quot;./customTheme&quot;;
import { palettePlugin } from &quot;@vuepress/plugin-palette&quot;;
import { path } from &quot;vuepress/utils&quot;;
import vue from &quot;@vitejs/plugin-vue&quot;;
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          &quot;@customTheme&quot;: _resolve(&quot;./customTheme&quot;),
          &quot;@customThemeComponents&quot;: _resolve(&quot;./customTheme/components&quot;),
        },
      },
      css: {
        preprocessorOptions: {
          stylus: {
            additionalData: &#39;@import &quot;@customTheme/styles/variables.styl&quot;;&#39;,
          },
        },
      },
    },
  }),
  theme: appCustomTheme({}),
});
</code></pre><p><img src="/blogs/assets/image-DjFlSChX.png" alt="alt text"></p><h4 id="验证-vue-style-中不识别别名" tabindex="-1"><a class="header-anchor" href="#验证-vue-style-中不识别别名"><span>验证:.vue style 中不识别别名</span></a></h4><p>在不配值additionalData的情况下 <strong>报错:vue文件中style中手动引入别名文件</strong></p><pre><code class="language-vue">&lt;template&gt;
  &lt;div
    class=&quot;theme-container&quot;
    :class=&quot;pageClasses&quot;
    @touchstart=&quot;onTouchStart&quot;
    @touchend=&quot;onTouchEnd&quot;
  &gt;
    &lt;Navbar @toggle-sidebar=&quot;toggleSidebar&quot; /&gt;
    &lt;div class=&quot;sidebar-mask&quot; @click=&quot;toggleSidebar(false)&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
&lt;!-- ... --&gt;
&lt;/script&gt;
&lt;style lang=&quot;stylus&quot;&gt;
@import &quot;@customTheme/styles/variables.styl&quot;;
body
  background:$accentColor
&lt;/style&gt;
</code></pre><p><img src="/blogs/assets/image-1-BdNJG5pL.png" alt="alt text"><strong>不报错:vue文件中style中使用相对路径引入文件</strong></p><pre><code class="language-vue">&lt;template&gt;
  &lt;div
    class=&quot;theme-container&quot;
    :class=&quot;pageClasses&quot;
    @touchstart=&quot;onTouchStart&quot;
    @touchend=&quot;onTouchEnd&quot;
  &gt;
    &lt;Navbar @toggle-sidebar=&quot;toggleSidebar&quot; /&gt;
    &lt;div class=&quot;sidebar-mask&quot; @click=&quot;toggleSidebar(false)&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
&lt;!-- ... --&gt;
&lt;/script&gt;
&lt;style lang=&quot;stylus&quot;&gt;
@import &quot;../styles/variables.styl&quot;;
body
  background:$accentColor
&lt;/style&gt;
</code></pre><h2 id="成功方案" tabindex="-1"><a class="header-anchor" href="#成功方案"><span>成功方案</span></a></h2><h3 id="stylus配置项globals中配置变量" tabindex="-1"><a class="header-anchor" href="#stylus配置项globals中配置变量"><span>stylus配置项globals中配置变量</span></a></h3><pre><code class="language-ts">// additionalData配置:.vuepress/config.ts
import { defineUserConfig } from &quot;vuepress&quot;;
import { viteBundler } from &quot;@vuepress/bundler-vite&quot;;
import { appCustomTheme } from &quot;./customTheme&quot;;
import { palettePlugin } from &quot;@vuepress/plugin-palette&quot;;
import { path } from &quot;vuepress/utils&quot;;
import vue from &quot;@vitejs/plugin-vue&quot;;
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          &quot;@customTheme&quot;: _resolve(&quot;./customTheme&quot;),
          &quot;@customThemeComponents&quot;: _resolve(&quot;./customTheme/components&quot;),
        },
      },
      css: {
        preprocessorOptions: {
          stylus: {
            globals: {
              $accentColor: &quot;rgba(62, 175, 124, 1.0)&quot;,
              $textColor: &quot;rgba(44, 62, 80, 1.0)&quot;,
              $borderColor: &quot;rgba(234, 236, 239, 1.0)&quot;,
              $codeBgColor: &quot;rgba(40, 44, 52, 1.0)&quot;,
              $arrowBgColor: &quot;rgba(204, 204, 204, 1.0)&quot;,
              $badgeTipColor: &quot;rgba(66, 185, 131, 1.0)&quot;,
              $badgeWarningColor: &#39;darken(&quot;#ffe564&quot;, &quot;35%&quot;)&#39;,
              $badgeErrorColor: &quot;rgba(218, 89, 97, 1.0)&quot;,
              // layout
              $navbarHeight: &quot;3.6rem&quot;,
              $sidebarWidth: &quot;20rem&quot;,
              $contentWidth: &quot;740px&quot;,
              $homePageWidth: &quot;960px&quot;,
              // responsive breakpoints
              $MQNarrow: &quot;959px&quot;,
              $MQMobile: &quot;719px&quot;,
              $MQMobileNarrow: &quot;419px&quot;,
              // code
              $lineNumbersWrapperWidth: &quot;3.5rem&quot;,
              $codeLang:
                &quot;js ts html md vue css sass scss less stylus go java c sh yaml py docker dockerfile makefile&quot;,
            },
          },
        },
      },
    },
  }),
  theme: appCustomTheme({}),
});
</code></pre><h3 id="stylus配置项globals中配置imports" tabindex="-1"><a class="header-anchor" href="#stylus配置项globals中配置imports"><span>stylus配置项globals中配置imports</span></a></h3><pre><code class="language-ts">import { defineUserConfig } from &quot;vuepress&quot;;
import { viteBundler } from &quot;@vuepress/bundler-vite&quot;;
import { appCustomTheme } from &quot;./customTheme&quot;;
import { palettePlugin } from &quot;@vuepress/plugin-palette&quot;;
import { path } from &quot;vuepress/utils&quot;;
import vue from &quot;@vitejs/plugin-vue&quot;;
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      //   plugins: [vue()],
      resolve: {
        alias: {
          &quot;@customTheme&quot;: _resolve(&quot;./customTheme&quot;),
          &quot;@customThemeComponents&quot;: _resolve(&quot;./customTheme/components&quot;),
        },
      },
      css: {
        preprocessorOptions: {
          stylus: {
            imports: [
              path.resolve(__dirname, &quot;customTheme/styles/variables.styl&quot;), // 全局变量文件
            ],
          },
        },
      },
    },
  }),
  theme: appCustomTheme({}),
});
</code></pre>`,16)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};