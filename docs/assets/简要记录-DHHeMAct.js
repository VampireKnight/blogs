import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E9%A1%B9%E7%9B%AE/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/personal-blog-by-vue-press/%E7%AE%80%E8%A6%81%E8%AE%B0%E5%BD%95/%E7%AE%80%E8%A6%81%E8%AE%B0%E5%BD%95.html","title":"personal-blog-by-vue-press 简要记录","lang":"zh-CN","frontmatter":{}}`),a={name:`简要记录.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="personal-blog-by-vue-press-简要记录" tabindex="-1"><a class="header-anchor" href="#personal-blog-by-vue-press-简要记录"><span>personal-blog-by-vue-press 简要记录</span></a></h1><blockquote><p>基于 vuepress 实现个人Blog 的记录</p></blockquote><h2 id="自动创建项目" tabindex="-1"><a class="header-anchor" href="#自动创建项目"><span>自动创建项目</span></a></h2><pre><code class="language-bash">yarn create vuepress vuepress-starter
</code></pre><h3 id="报错-yarn-版本问题" tabindex="-1"><a class="header-anchor" href="#报错-yarn-版本问题"><span>报错:yarn 版本问题</span></a></h3><p><img src="/blogs/assets/image-LJuAEtLg.png" alt="alt text"></p><blockquote><p>说明,yarn的 最新版本就是1.22.22,所以无法通过 安装/更新yarn 更新到2代</p></blockquote><p><strong>解决方案:yarn set version berry</strong></p><blockquote><p>参考:https://www.cnblogs.com/fanqisoft/p/15892660.html 目前yarn主分支依然是1代，也没有常规方式直接安装2代，yarn的理念是，想体验2代，只能在具体项目中体验，无法全局安装【应该是暂时】</p></blockquote><pre><code class="language-bash">yarn set version berry
</code></pre><h3 id="最终版本" tabindex="-1"><a class="header-anchor" href="#最终版本"><span>最终版本</span></a></h3><pre><code class="language-bash"># 创建项目目录
mkdir auto-vuepress
# 项目切换到使用 yarn2:这个是\`临时\`的,仅与项目相关,并不是 全局的
yarn set version berry
yarn create vuepress vuepress-starter
# 进入项目
cd vuepress-starter
# 安装依赖
yarn install
yarn yarn docs:dev
</code></pre><h2 id="手动创建项目" tabindex="-1"><a class="header-anchor" href="#手动创建项目"><span>手动创建项目</span></a></h2><h3 id="创建并进入一个新目录" tabindex="-1"><a class="header-anchor" href="#创建并进入一个新目录"><span>创建并进入一个新目录</span></a></h3><pre><code class="language-bash">mkdir vuepress-starter
cd vuepress-starter
</code></pre><h3 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目"><span>初始化项目</span></a></h3><pre><code class="language-bash">git init
yarn init
</code></pre><h3 id="安装-vuepress" tabindex="-1"><a class="header-anchor" href="#安装-vuepress"><span>安装 vuepress</span></a></h3><pre><code class="language-bash"># 安装 vuepress
yarn add -D vuepress@next
</code></pre><h3 id="安装打包工具和主题" tabindex="-1"><a class="header-anchor" href="#安装打包工具和主题"><span>安装打包工具和主题</span></a></h3><pre><code class="language-bash">yarn add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
</code></pre><h3 id="创建-docs-目录和-docs-vuepress-目录" tabindex="-1"><a class="header-anchor" href="#创建-docs-目录和-docs-vuepress-目录"><span>创建 docs 目录和 docs/.vuepress 目录</span></a></h3><pre><code class="language-bash">mkdir docs
mkdir docs/.vuepress
</code></pre><blockquote><p>个人自定义 blogs 和 .vuepress目录</p></blockquote><pre><code class="language-bash">
mkdir blogs
mkdir .vuepress
</code></pre><h3 id="创建-vuepress-配置文件-docs-vuepress-config-js" tabindex="-1"><a class="header-anchor" href="#创建-vuepress-配置文件-docs-vuepress-config-js"><span>创建 VuePress 配置文件 docs/.vuepress/config.js</span></a></h3><blockquote><p>在 .vuepress目录 目录中创建 配置文件</p></blockquote><pre><code class="language-bash">mkdir .vuepress/config.js
</code></pre><pre><code class="language-js">import { viteBundler } from &quot;@vuepress/bundler-vite&quot;;
import { defaultTheme } from &quot;@vuepress/theme-default&quot;;
import { defineUserConfig } from &quot;vuepress&quot;;

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
});
</code></pre><h3 id="配置命令-服务" tabindex="-1"><a class="header-anchor" href="#配置命令-服务"><span>配置命令(服务)</span></a></h3><blockquote><p>在 package.json 中添加一些 scripts ：</p></blockquote><pre><code class="language-json">{
  &quot;scripts&quot;: {
    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }
}
</code></pre><h3 id="报错-yarn-add-d-sass-embedded" tabindex="-1"><a class="header-anchor" href="#报错-yarn-add-d-sass-embedded"><span>报错 yarn add -D sass-embedded</span></a></h3><p><strong>实际项目中的命令</strong></p><pre><code class="language-json">{
  &quot;scripts&quot;: {
    // vuepress dev + .vuepress所在目录
    &quot;docs:dev&quot;: &quot;vuepress dev .&quot;,
    // vuepress build + .vuepress所在目录
    &quot;docs:build&quot;: &quot;vuepress build .&quot;
  }
}
</code></pre><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p><a href="https://v2.vuepress.vuejs.org/zh/guide/getting-started.html#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE" target="_blank" rel="noopener noreferrer">vuepress快速上手</a></p>`,37)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};