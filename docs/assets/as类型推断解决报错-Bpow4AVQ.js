import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/as%E7%B1%BB%E5%9E%8B%E6%8E%A8%E6%96%AD%E8%A7%A3%E5%86%B3%E6%8A%A5%E9%94%99/as%E7%B1%BB%E5%9E%8B%E6%8E%A8%E6%96%AD%E8%A7%A3%E5%86%B3%E6%8A%A5%E9%94%99.html","title":"as类型推断解决报错","lang":"zh-CN","frontmatter":{}}`),a={name:`as类型推断解决报错.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="as类型推断解决报错" tabindex="-1"><a class="header-anchor" href="#as类型推断解决报错"><span>as类型推断解决报错</span></a></h1><p>当我们不希望直接将两个enum合并,保持独立,但是希望<code>使用一个包含各独立enum的类型时</code>,我们可以创建一个type,其值为 | 链接的多个 enum</p><pre><code class="language-ts">export enum HkStockThxMarketIdEnum {
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
</code></pre><blockquote><p>但是这会出现 类型不符的情况</p></blockquote><h2 id="将数据从多个enum处理为单enum" tabindex="-1"><a class="header-anchor" href="#将数据从多个enum处理为单enum"><span>将数据从多个enum处理为单enum</span></a></h2><p>我们 ThxStardardStockType 是标准的stock数据,它包含两种可能 香港Stock 和 中国大陆Stock; 但我们如果从 ThxStardardStockType 转换为 ThxStardardCnMainLandStockType 呢</p><pre><code class="language-ts">export type ThxStardardCnMainLandStockType = {
  securityCode: number | string;
  isCnMainLandBStock?: boolean;
  thx_marketId: CnMainlandStockThxMarketIdEnum;
};

function transformStockData(
  originalData: ThxStardardStockType,
): ThxStardardCnMainLandStockType {
  let { thx_marketId } = originalData;
  return {
    ...originalData,
  };
}
transformStockData({
  securityCode: &quot;5&quot;,
  thx_marketId: CnMainlandStockThxMarketIdEnum.thxMarketId151,
});
</code></pre><p><img src="/blogs/assets/image-DmXRWBdh.png" alt="alt text"></p><blockquote><p>这个报错表明:<strong>不能直接将弱类型约束的数据 包含给 它包含的强类型数据</strong><strong>ThxStockMarketIdCombineEnumType</strong>:它 <code>可能是HkStockThxMarketIdEnum , 也可能是CnMainlandStockThxMarketIdEnum</code> 直接将 ThxStockMarketIdCombineEnumType 转为成 CnMainlandStockThxMarketIdEnum;如果ThxStockMarketIdCombineEnumType是HkStockThxMarketIdEnum,不就无法成立了吗,所以,报错是正常的 但是,我们知道这个数据就是CnMainlandStockThxMarketIdEnum,我们可以<code>告知ts这个值就是 什么类型的值</code>,我们自己负责</p></blockquote><h3 id="解决方案-通过as告知实际数据类型" tabindex="-1"><a class="header-anchor" href="#解决方案-通过as告知实际数据类型"><span>解决方案:通过as告知实际数据类型</span></a></h3><pre><code class="language-ts">// ...
function transformStockData(
  originalData: ThxStardardStockType,
): ThxStardardCnMainLandStockType {
  let { thx_marketId } = originalData;
  return {
    ...originalData,
    thx_marketId: originalData.thx_marketId as CnMainlandStockThxMarketIdEnum,
  };
}
// ...
</code></pre>`,11)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};