import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E9%A1%B9%E7%9B%AE/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/personal-blog-by-vue-press/vuepress%E8%AF%B4%E6%98%8E/vuepress%E4%B9%8Bmd%E6%89%93%E5%8C%85%E4%B8%8E%E8%B7%AF%E7%94%B1/vuepress%E4%B9%8Bmd%E6%89%93%E5%8C%85%E4%B8%8E%E8%B7%AF%E7%94%B1.html","title":"vuepress之md打包与路由","lang":"zh-CN","frontmatter":{}}`),a={name:`vuepress之md打包与路由.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="vuepress之md打包与路由" tabindex="-1"><a class="header-anchor" href="#vuepress之md打包与路由"><span>vuepress之md打包与路由</span></a></h1><p><img src="/blogs/assets/image-DWdV80_e.png" alt="alt text"></p><h2 id="vuepress-dev-build-文件目录" tabindex="-1"><a class="header-anchor" href="#vuepress-dev-build-文件目录"><span>vuepress dev/build + 文件目录</span></a></h2><h3 id="根目录打包" tabindex="-1"><a class="header-anchor" href="#根目录打包"><span>根目录打包</span></a></h3><pre><code class="language-json">{
  &quot;scripts&quot;: {
    &quot;docs:dev&quot;: &quot;vuepress dev .&quot;,
    &quot;docs:build&quot;: &quot;vuepress build .&quot;
  }
}
</code></pre><h4 id="根目录打包查看路由" tabindex="-1"><a class="header-anchor" href="#根目录打包查看路由"><span>根目录打包查看路由</span></a></h4><pre><code class="language-vue">&lt;script&gt;
// ...
export default {
  // ...
  setup(props) {
    let routes = useRoutes();
    console.log(&quot;routes:&quot;, routes);
  },
};
&lt;/script&gt;
</code></pre><p><img src="/blogs/assets/image-1-Q39pC-e1.png" alt="alt text"></p><h3 id="指定目录打包" tabindex="-1"><a class="header-anchor" href="#指定目录打包"><span>指定目录打包</span></a></h3><pre><code class="language-json">{
  &quot;scripts&quot;: {
    &quot;docs:dev&quot;: &quot;vuepress dev blogs&quot;,
    &quot;docs:build&quot;: &quot;vuepress build blogs&quot;
  }
}
</code></pre><blockquote><p>报错 <img src="/blogs/assets/image-2-BcqzbwqT.png" alt="alt text"></p></blockquote><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h3><h4 id="vuepress-dev-指定目录" tabindex="-1"><a class="header-anchor" href="#vuepress-dev-指定目录"><span>vuepress dev 指定目录</span></a></h4><p>vuepress dev 指定目录 中需要包含 .vuepress 目录</p><h4 id="默认md打包" tabindex="-1"><a class="header-anchor" href="#默认md打包"><span>默认md打包</span></a></h4><p>vuepress dev 指定目录 会打包所有的md(<strong>按照原始目录结构生成路由</strong>)</p>`,16)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};