import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/%E5%AE%9E%E7%8E%B0%E2%80%9D%E7%BB%A7%E6%89%BF%E2%80%9C%E2%80%9D%E8%A6%86%E7%9B%96%E2%80%9C.html","title":"&实现”继承“”覆盖“","lang":"zh-CN","frontmatter":{}}`),a={name:`&实现”继承“”覆盖“.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="实现-继承-覆盖" tabindex="-1"><a class="header-anchor" href="#实现-继承-覆盖"><span>&amp;实现”继承“”覆盖“</span></a></h1><p>在我们开发ts代码,定义type的时候,所以的type不一定都是独立的,也可能有一些继承关系</p><h2 id="需求-实现-基础数据类型的-继承" tabindex="-1"><a class="header-anchor" href="#需求-实现-基础数据类型的-继承"><span>需求:实现 基础数据类型的 &quot;继承&quot;</span></a></h2><p>我们可能需要基于一些基础数据,进行扩写出不同的数据结构,我们每次写type的时候都将所有的 属性手动书写出来,这样会有许多不同的问题</p><blockquote><p><strong>添加原始数据结构</strong>:我们需要将其扩展类型也同步修改,我们也要一个个修改吗? <strong>修改原始数据结构</strong>:我们需要将其扩展类型也同步修改,我们也要一个个修改吗? <strong>删除原始数据结构</strong>:我们需要将其扩展类型也同步修改,我们也要一个个修改吗?</p></blockquote><pre><code class="language-ts">type ThxStardardHkStockType = {
  securityType: SecurityTypesEnums;
  securityCode: number | string;
  currency: CurrencyTypeEnums;
  marketCity: ChinaMarketCityEnums;
  // &quot;thx_marketId&quot;: &quot;177&quot; | &quot;178&quot;,
  thx_marketId: string;
  thx_securityCode: number | string;
  thx_name: string;
  thx_aliasName: string[];
};
// 标准化的 thx 中国大陆股票type
type ThxStardardCnMainLandStockType = {
  securityType: SecurityTypesEnums;
  securityCode: number | string;
  currency: CurrencyTypeEnums;
  marketCity: ChinaMarketCityEnums;
  authority: ChinaMainlandStockCoreBkAuthority;
  isCnMainLandBStock?: boolean;
  // &quot;thx_marketId&quot;: 17&quot;  &quot;18&quot; &quot;22&quot; &quot;33&quot; &quot;34&quot; &quot;151
  thx_marketId: string;
  thx_securityCode: number | string;
  thx_name: string;
  thx_aliasName: string[];
};
</code></pre><h3 id="实现继承" tabindex="-1"><a class="header-anchor" href="#实现继承"><span>&amp; 实现继承</span></a></h3><p>我们发现 ThxStardardHkStockType 和 ThxStardardCnMainLandStockType 有相同的部分数据结构,我们可以将其抽离出来</p><pre><code class="language-ts">type ThxSimpleBaseSecurityInfo = {
  thx_marketId: number | string;
  thx_securityCode: number | string;
  thx_name: string;
  thx_aliasName: Array&lt;string&gt;;
};
</code></pre><p><strong>我们使用&amp;将公共类型&quot;合并&quot;到数据之中</strong></p><pre><code class="language-ts">// 标准化的 thx 香港股票type
type ThxStardardHkStockType = {
  securityType: SecurityTypesEnums;
  securityCode: number | string;
  currency: CurrencyTypeEnums;
  marketCity: ChinaMarketCityEnums;
} &amp; ThxSimpleBaseSecurityInfo;
// 标准化的 thx 中国大陆股票type
type ThxStardardCnMainLandStockType = {
  securityType: SecurityTypesEnums;
  securityCode: number | string;
  currency: CurrencyTypeEnums;
  marketCity: ChinaMarketCityEnums;
  authority: ChinaMainlandStockCoreBkAuthority;
  isCnMainLandBStock?: boolean;
} &amp; ThxSimpleBaseSecurityInfo;
</code></pre><h2 id="拓展-实现全部公共属性的可选" tabindex="-1"><a class="header-anchor" href="#拓展-实现全部公共属性的可选"><span>拓展:实现全部公共属性的可选</span></a></h2><h3 id="我们继承的需要需要全部变为可选" tabindex="-1"><a class="header-anchor" href="#我们继承的需要需要全部变为可选"><span>我们继承的需要需要全部变为可选</span></a></h3><pre><code class="language-ts">type MyPartial&lt;T&gt; = {
  [P in keyof T]?: T[P];
};
// 标准化的 thx 香港股票type
type ThxStardardHkStockType = {
  securityType: SecurityTypesEnums;
  securityCode: number | string;
  currency: CurrencyTypeEnums;
  marketCity: ChinaMarketCityEnums;
} &amp; MyPartial&lt;ThxSimpleBaseSecurityInfo&gt;;
// 标准化的 thx 中国大陆股票type
type ThxStardardCnMainLandStockType = {
  securityType: SecurityTypesEnums;
  securityCode: number | string;
  currency: CurrencyTypeEnums;
  marketCity: ChinaMarketCityEnums;
  authority: ChinaMainlandStockCoreBkAuthority;
  isCnMainLandBStock?: boolean;
} &amp; MyPartial&lt;ThxSimpleBaseSecurityInfo&gt;;
</code></pre><h2 id="拓展-实现部分属性的覆盖" tabindex="-1"><a class="header-anchor" href="#拓展-实现部分属性的覆盖"><span>拓展:实现部分属性的覆盖</span></a></h2><p>虽然,我们可以使用&amp;实现type的继承合并,但如果其中的某个属性与公共type中的属性类型不同时,我们如果处理呢?</p><pre><code class="language-ts">// 标准化的 thx 香港股票type
type ThxStardardHkStockType = {
  securityType: SecurityTypesEnums;
  securityCode: number | string;
  currency: CurrencyTypeEnums;
  marketCity: ChinaMarketCityEnums;
} &amp; ThxSimpleBaseSecurityInfo &amp; {
    thx_marketId: HkStockThxMarketIdEnum;
  };
// 标准化的 thx 中国大陆股票type
type ThxStardardCnMainLandStockType = {
  securityType: SecurityTypesEnums;
  securityCode: number | string;
  currency: CurrencyTypeEnums;
  marketCity: ChinaMarketCityEnums;
  authority: ChinaMainlandStockCoreBkAuthority;
  isCnMainLandBStock?: boolean;
} &amp; ThxSimpleBaseSecurityInfo &amp; {
    thx_marketId: CnMainlandStockThxMarketIdEnum;
  };
</code></pre>`,17)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};