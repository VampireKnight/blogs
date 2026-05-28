import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/%E5%90%88%E5%B9%B6enum%E6%88%96%E8%80%85%E4%BF%9D%E6%8C%81enum%E7%8B%AC%E7%AB%8B/%E5%90%88%E5%B9%B6enum%E6%88%96%E8%80%85%E4%BF%9D%E6%8C%81enum%E7%8B%AC%E7%AB%8B.html","title":"合并enum或者保持enum独立","lang":"zh-CN","frontmatter":{}}`),a={name:`合并enum或者保持enum独立.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="合并enum或者保持enum独立" tabindex="-1"><a class="header-anchor" href="#合并enum或者保持enum独立"><span>合并enum或者保持enum独立</span></a></h1><h2 id="合并enum" tabindex="-1"><a class="header-anchor" href="#合并enum"><span>合并enum</span></a></h2><p>在TypeScript中，合并多个enum可以通过扩展运算符或Object.assign方法来实现。以下是两种实现方式的示例：</p><h3 id="_1-使用扩展运算符" tabindex="-1"><a class="header-anchor" href="#_1-使用扩展运算符"><span>1.使用扩展运算符：</span></a></h3><pre><code class="language-ts">export enum ZONE_TYPE_1 {
  NODE = 1,
}
export enum ZONE_TYPE_2 {
  ROAD = 2,
}
export enum ZONE_TYPE_3 {
  CITY = 3,
}

export const ZONE_TYPE_ALL = { ...ZONE_TYPE_1, ...ZONE_TYPE_2, ...ZONE_TYPE_3 };
</code></pre><h3 id="_2-使用object-assign方法" tabindex="-1"><a class="header-anchor" href="#_2-使用object-assign方法"><span>2.使用Object.assign方法：</span></a></h3><pre><code class="language-ts">export const ZONE_TYPE_ALL = Object.assign(
  {},
  ZONE_TYPE_1,
  ZONE_TYPE_2,
  ZONE_TYPE_3,
);
</code></pre><p>以上两种方法都可以将多个enum合并为一个对象，其中ZONE_TYPE_ALL包含了所有被合并enum的属性。需要注意的是，这些方法适用于将多个enum合并为一个对象，而不是合并为一个新的enum类型。如果需要合并为新的enum类型，需要手动定义新的enum并复制值。</p><h2 id="保持独立" tabindex="-1"><a class="header-anchor" href="#保持独立"><span>保持独立</span></a></h2><p>上面的操作是将enum 转换成了 js数组,但是,我们想保证enum的独立性又 如何操作呢</p><pre><code class="language-ts">export enum HkStockThxMarketIdEnum {
  thxMarketId177 = &quot;177&quot;,
  thxMarketId178 = &quot;178&quot;,
}
export enum CnMainlandStockThxMarketIdEnum {
  thxMarketId17 = &quot;17&quot;, // 上海A股
  thxMarketId18 = &quot;18&quot;, // 上海B股
  thxMarketId22 = &quot;22&quot;, // 上海ST股票
  thxMarketId33 = &quot;33&quot;, // 深圳A股
  thxMarketId34 = &quot;34&quot;, // 深圳B股
  thxMarketId151 = &quot;151&quot;, // 北交A股
}

// 创建一个新类型
export type ThxStockMarketIdCombineEnumType =
  | HkStockThxMarketIdEnum
  | CnMainlandStockThxMarketIdEnum;

// 标准化的 thx 股票type
export type ThxStardardStockType = {
  securityType: SecurityTypesEnums.STOCK;
  securityCode: number | string;
  currency: CurrencyTypeEnums.CHINA;
  marketCity: ChinaMarketCityEnums;
  authority: ChinaMainlandStockCoreBkAuthority;
  isCnMainLandBStock?: boolean;
  // &quot;thx_marketId&quot;: 17&quot;  &quot;18&quot; &quot;22&quot; &quot;33&quot; &quot;34&quot; &quot;151
  thx_marketId: ThxStockMarketIdCombineEnumType;
};
</code></pre><blockquote><p>当我们不希望直接将两个enum合并,保持独立,但是希望<code>使用一个包含各独立enum的类型时</code>,我们可以创建一个type,其值为 | 链接的多个 enum</p></blockquote>`,12)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};