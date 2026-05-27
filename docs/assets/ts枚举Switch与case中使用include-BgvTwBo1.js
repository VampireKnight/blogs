import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E6%9E%9A%E4%B8%BESwitch%E4%B8%8Ecase%E4%B8%AD%E4%BD%BF%E7%94%A8include/ts%E6%9E%9A%E4%B8%BESwitch%E4%B8%8Ecase%E4%B8%AD%E4%BD%BF%E7%94%A8include.html","title":"ts枚举Switch与case中使用include","lang":"zh-CN","frontmatter":{}}`),a={name:`ts枚举Switch与case中使用include.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="ts枚举switch与case中使用include" tabindex="-1"><a class="header-anchor" href="#ts枚举switch与case中使用include"><span>ts枚举Switch与case中使用include</span></a></h1><h2 id="普通使用switch" tabindex="-1"><a class="header-anchor" href="#普通使用switch"><span>普通使用switch</span></a></h2><pre><code class="language-ts">function transform(data: oriDataType): retDataType {
  let { id, type } = data;
  switch (id) {
    case &quot;177&quot;:
      return transformStock(data);
    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
</code></pre><p><strong>switch 改造使用 includes</strong> switch 比较的是值,而此时,我们需要将 id归类,它是基于数组值的比较的,所以最好的方式是通过 includes 来判断,那么 switch 比较的内容就需要改变了</p><blockquote><p>一般,switch 比较的是 某个属性 是否 为 某个特定值; 现在需要知道的是,某个值是否在某个数组中,那么需要比较的是否为true</p></blockquote><h2 id="switch-结合include" tabindex="-1"><a class="header-anchor" href="#switch-结合include"><span>switch 结合include</span></a></h2><pre><code class="language-ts">const thxStockMarketIds = [&quot;177&quot;];
function transform(data: oriDataType): retDataType {
  let { id, type } = data;
  switch (id) {
    case thxStockMarketIds.includes(id):
      return transformStock(data);
    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
</code></pre>`,7)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};