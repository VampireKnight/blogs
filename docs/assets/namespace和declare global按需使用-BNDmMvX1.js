import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/namespace%20%E5%92%8C%20declare%20global%E6%8C%89%E9%9C%80%E4%BD%BF%E7%94%A8/namespace%E5%92%8Cdeclare%20global%E6%8C%89%E9%9C%80%E4%BD%BF%E7%94%A8.html","title":"namespace 和 declare global按需使用","lang":"zh-CN","frontmatter":{}}`),a={name:`namespace和declare global按需使用.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="namespace-和-declare-global按需使用" tabindex="-1"><a class="header-anchor" href="#namespace-和-declare-global按需使用"><span>namespace 和 declare global按需使用</span></a></h1><p>虽然我们可以将 所有的type 都使用 declare global,让它全局生效。但是,<strong>确定要这么做吗</strong></p><blockquote><p>我们一直在 简化代码 和 方便维护 之间做平衡 <strong>简化代码</strong>:直接将所有的类型什么全局注入,那么就不需要使用 import 之类的导入了 <strong>方便维护</strong>:将type类型放到不同的namespace中,方便我们维护</p></blockquote><h3 id="namespace-和-declare-global的使用" tabindex="-1"><a class="header-anchor" href="#namespace-和-declare-global的使用"><span>namespace 和 declare global的使用</span></a></h3><h3 id="使用namespace" tabindex="-1"><a class="header-anchor" href="#使用namespace"><span>使用namespace</span></a></h3><p><strong>ThxBaseSecurityData.namespace.ts</strong></p><pre><code class="language-ts">import {
  BkOriginalSourceType,
  ChinaIndexSeriesEnums,
  ChinaMainlandStockCoreBkAuthority,
  ChinaMarketCityEnums,
  CurrencyTypeEnums,
  ExchangeLocatedCountries,
  FuturesTypeEnums,
  SecurityTypesEnums,
} from &quot;@src/app/enums/market/AppMarketEnums&quot;;

import {
  HkStockThxMarketIdEnum,
  CnMainlandStockThxMarketIdEnum,
  HkFundThxMarketIdEnum,
  CnMainlandFundThxMarketIdEnum,
  ThxCnMainlandBkMarketIdEnum,
  ThxUsBkMarketIdEnum,
  ThxHkBkMarketIdEnum,
  ThxUkBkMarketIdEnum,
  ThxCnMainlandIndexMarketIdEnum,
  ThxGlobalIndexMarketIdEnum,
  ThxHkIndexMarketIdEnum,
  ThxHkBondMarketIdEnum,
  ThxGlobalFuturesMarketIdEnum,
  ThxOilFuturesMarketIdEnum,
} from &quot;@src/app/types/securityData/thx/thxMarketIdEnum.enum&quot;;
export namespace ThxBaseSecurityData {
  /***   thx 不同类型证券分类的 合并枚举type   ***/
  export type ThxStockMarketIdCombineEnumType =
    | HkStockThxMarketIdEnum
    | CnMainlandStockThxMarketIdEnum;

  export type ThxFundMarketIdCombineEnumType =
    | HkFundThxMarketIdEnum
    | CnMainlandFundThxMarketIdEnum;

  export type ThxBkMarketIdCombineEnumType =
    | ThxCnMainlandBkMarketIdEnum
    | ThxUsBkMarketIdEnum
    | ThxHkBkMarketIdEnum
    | ThxUkBkMarketIdEnum;

  export type ThxIndexMarketIdCombineEnumType =
    | ThxCnMainlandIndexMarketIdEnum
    | ThxGlobalIndexMarketIdEnum
    | ThxHkIndexMarketIdEnum;

  export type ThxBondMarketIdCombineEnumType = ThxHkBondMarketIdEnum;

  export type ThxFuturesMarketIdCombineEnumType =
    | ThxGlobalFuturesMarketIdEnum
    | ThxOilFuturesMarketIdEnum;

  // thx 简化的(公共)基础信息
  //   type transformedSimpleThxBaseSecurityInfo = {
  export type ThxSimpleBaseSecurityInfo = {
    thx_marketId: number | string;
    thx_securityCode: number | string;
    thx_name: string;
    thx_aliasName: Array&lt;string&gt;;
  };

  /***   thx 不同类型证券的 各种标准导出   ***/
  // 标准化的 thx 香港股票type
  export type ThxStardardHkStockType = {
    securityType: SecurityTypesEnums;
    securityCode: number | string;
    currency: CurrencyTypeEnums;
    marketCity: ChinaMarketCityEnums;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      // &quot;thx_marketId&quot;: &quot;177&quot; | &quot;178&quot;,
      thx_marketId: HkStockThxMarketIdEnum;
    };
  // 标准化的 thx 中国大陆股票type
  export type ThxStardardCnMainLandStockType = {
    securityType: SecurityTypesEnums;
    securityCode: number | string;
    currency: CurrencyTypeEnums;
    marketCity: ChinaMarketCityEnums;
    authority: ChinaMainlandStockCoreBkAuthority;
    isCnMainLandBStock?: boolean;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      // &quot;thx_marketId&quot;: 17&quot;  &quot;18&quot; &quot;22&quot; &quot;33&quot; &quot;34&quot; &quot;151
      thx_marketId: CnMainlandStockThxMarketIdEnum;
    };
  export type AllThxStardardStockType =
    | ThxStardardHkStockType
    | ThxStardardCnMainLandStockType
    | undefined;
  // 标准化的 thx 香港基金type
  export type ThxStardardHkFundType = {
    securityType: SecurityTypesEnums;
    securityCode: number | string;
    currency: CurrencyTypeEnums;
    marketCity: ChinaMarketCityEnums;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      // &quot;thx_marketId&quot;: &quot;177&quot; | &quot;178&quot;,
      thx_marketId: HkFundThxMarketIdEnum;
    };

  // 标准化的 thx 中国大陆基金type
  export type ThxStardardCnMainLandFundType = {
    securityType: SecurityTypesEnums;
    securityCode: number | string;
    currency: CurrencyTypeEnums;
    marketCity: ChinaMarketCityEnums;
    thx_marketId: CnMainlandFundThxMarketIdEnum;
    thx_securityCode: number | string;
    thx_name: string;
    thx_aliasName: string[];
  };
  export type AllThxStardardFundType =
    | ThxStardardHkFundType
    | ThxStardardCnMainLandFundType
    | undefined;

  // 标准化的 thx 中国大陆板块type
  export type ThxStardardCnMainLandBkType = {
    bkOriginalSource: BkOriginalSourceType;
    securityType: SecurityTypesEnums;
    country: ExchangeLocatedCountries;
    isCnMainlandArea: boolean;
    //   classify: PlateTypeEnums;
    //     thx_classify: ThxPlateTypeEnums;
    //   classify: string;
    //     thx_classify: string;
    //     a:&#39;sdf0&#39;;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxCnMainlandBkMarketIdEnum;
    };
  // 标准化的 thx 香港板块type
  export type ThxStardardHkBkType = {
    bkOriginalSource: BkOriginalSourceType;
    securityType: SecurityTypesEnums;
    country: ExchangeLocatedCountries;
    bkMarketArea: ChinaMarketCityEnums;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxHkBkMarketIdEnum;
    };
  // 标准化的 thx 美股板块type
  export type ThxStardardUsBkType = {
    bkOriginalSource: BkOriginalSourceType;
    securityType: SecurityTypesEnums;
    country: ExchangeLocatedCountries;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxUsBkMarketIdEnum;
    };

  // 标准化的 thx 英国板块type
  export type ThxStardardUkBkType = {
    bkOriginalSource: BkOriginalSourceType;
    securityType: SecurityTypesEnums;
    country: ExchangeLocatedCountries;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxUkBkMarketIdEnum;
    };
  export type AllThxStardardBkType =
    | ThxStardardCnMainLandBkType
    | ThxStardardHkBkType
    | ThxStardardUsBkType
    | ThxStardardUkBkType
    | undefined;

  export type ThxStardardCnMainLandIndexType = {
    securityType: SecurityTypesEnums;
    country: ExchangeLocatedCountries;
    publishedMarketCity: ChinaMarketCityEnums;
    securityCode: string | number;
    indexSeries: ChinaIndexSeriesEnums;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxCnMainlandIndexMarketIdEnum;
    };
  // 标准化的 thx 全球指数type
  export type ThxStardardGlobalIndexType = {
    securityType: SecurityTypesEnums;
    indexSeries: ChinaIndexSeriesEnums;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxGlobalIndexMarketIdEnum;
    };
  // 标准化的 thx 全球指数type
  export type ThxStardardHkIndexType = {
    securityType: SecurityTypesEnums;
    country: ExchangeLocatedCountries;
    publishedMarketCity: ChinaMarketCityEnums;
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxHkIndexMarketIdEnum;
    };

  export type AllThxStardardIndexType =
    | ThxStardardCnMainLandIndexType
    | ThxStardardGlobalIndexType
    | ThxStardardHkIndexType
    | undefined;

  // 标准化的 thx 国际期货type
  export type ThxStardardGlobalFuturesType = {
    securityType: SecurityTypesEnums;
    futuresType: FuturesTypeEnums;
    isGlobal: boolean;
    isDomestic: boolean; // 是否是国内市场
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxGlobalFuturesMarketIdEnum;
    };
  // 标准化的 thx oil期货type
  export type ThxStardardOilFuturesType = {
    securityType: SecurityTypesEnums;
    futuresType: FuturesTypeEnums;
    isGlobal: boolean;
    isDomestic: boolean; // 是否是国内市场
  } &amp; ThxSimpleBaseSecurityInfo &amp; {
      thx_marketId: ThxOilFuturesMarketIdEnum;
    };
  export type AllThxStardardFuturesType =
    | ThxStardardGlobalFuturesType
    | ThxStardardOilFuturesType
    | undefined;
}
</code></pre><p><strong>使用</strong></p><pre><code class="language-ts">import {ThxBaseSecurityData} from &quot;../../../../types/ThxBaseSecurityData.namespace&quot;
let type:ThxBaseSecurityData.
</code></pre><blockquote><p>我们可以通过提示选择 需要的type <img src="/blogs/assets/image-mXvq8ThU.png" alt="alt text"></p></blockquote><h3 id="使用global" tabindex="-1"><a class="header-anchor" href="#使用global"><span>使用global</span></a></h3><p><strong>ThxBaseSecurityData.global.ts</strong></p><pre><code class="language-ts">import {
  BkOriginalSourceType,
  ChinaIndexSeriesEnums,
  ChinaMainlandStockCoreBkAuthority,
  ChinaMarketCityEnums,
  CurrencyTypeEnums,
  ExchangeLocatedCountries,
  FuturesTypeEnums,
  SecurityTypesEnums,
} from &quot;@src/app/enums/market/AppMarketEnums&quot;;

import {
  HkStockThxMarketIdEnum,
  CnMainlandStockThxMarketIdEnum,
  HkFundThxMarketIdEnum,
  CnMainlandFundThxMarketIdEnum,
  ThxCnMainlandBkMarketIdEnum,
  ThxUsBkMarketIdEnum,
  ThxHkBkMarketIdEnum,
  ThxUkBkMarketIdEnum,
  ThxCnMainlandIndexMarketIdEnum,
  ThxGlobalIndexMarketIdEnum,
  ThxHkIndexMarketIdEnum,
  ThxHkBondMarketIdEnum,
  ThxGlobalFuturesMarketIdEnum,
  ThxOilFuturesMarketIdEnum,
} from &quot;@src/app/types/securityData/thx/thxMarketIdEnum.enum&quot;;
declare global {
  /***   thx 不同类型证券分类的 合并枚举type   ***/
  type ThxStockMarketIdCombineEnumType =
    | HkStockThxMarketIdEnum
    | CnMainlandStockThxMarketIdEnum;
  // ...
}
</code></pre><p><strong>使用</strong></p><pre><code class="language-ts">let type: AllThxStardar;
</code></pre><blockquote><p>我们可以通过提示选择 需要的type <img src="/blogs/assets/image-1-q16xpbqF.png" alt="alt text"></p></blockquote><h2 id="综合方案-暂未实现" tabindex="-1"><a class="header-anchor" href="#综合方案-暂未实现"><span>综合方案:暂未实现</span></a></h2><p><strong>declare global的优劣</strong></p><blockquote><p><strong>优势</strong> 如果 我们将所有的type 全局注入,虽然我们可以在全局直接使用, <strong>劣势</strong> 需要记住太多的东西:我们虽然可以但是直接使用type,但是<strong>需要记住type名,输入前面的字段开启提示</strong>,如果全局前面同字符串的type太多,提示项就会很多,选择起来也不方便</p></blockquote><p><strong>namespace的优劣</strong></p><blockquote><p><strong>劣势</strong> 每次使用都要 导入,如果使用多个namespace 需要导入多个 <strong>优势</strong> 虽然使用起来不方便,需要 xxx.,但是方便维护,提示查找起来也方便</p></blockquote><p>有没有一种比较 不错的方案呢</p><blockquote><p>不必每次都 引入 namespace</p></blockquote><h3 id="无法实现-通过declare-global-将-namespace-提升" tabindex="-1"><a class="header-anchor" href="#无法实现-通过declare-global-将-namespace-提升"><span>(无法实现)通过declare global 将 namespace 提升</span></a></h3><p><strong>无法将 namespace 赋值</strong></p><pre><code class="language-ts">import { ThxBaseSecurityData } from &quot;./ThxBaseSecurityData.namespace&quot;;
declare global {
    export namespace ThxBaseSecurityData=ThxBaseSecurityData
}
</code></pre><p><img src="/blogs/assets/image-2-BaUkkGnD.png" alt="alt text"></p><p><strong>“ThxBaseSecurityData”在其自身的类型批注中得到直接或间接引用。</strong></p><pre><code class="language-ts">import { ThxBaseSecurityData } from &quot;./ThxBaseSecurityData.namespace&quot;;
declare global {
  const ThxBaseSecurityData: typeof ThxBaseSecurityData; // 声明全局常量 ThxBaseSecurityData ，类型为 ThxBaseSecurityData 类型
}
</code></pre><p><img src="/blogs/assets/image-3-BosqO8Ch.png" alt="alt text"></p><blockquote><p><strong>注</strong>:namespace 并非纯类型语法，编译后会生成真实的 JavaScript 对象，占用运行时内存，这也是它和 ES 模块的重要区别。此外，早期使用三斜杠引用语法跨文件使用命名空间，但现在更推荐使用 ES 模块的 import 导入 <strong>Knight个人理解</strong>:namesapce中不光能有 type Interface,也可以有 函数,变量。所以,编译成真实的JavaScript对象 也没什么问题 <strong>但是为了开发方便,该使用namespace的时候还是可以使用的</strong>:毕竟 一个一个的 import type 一点也不方便</p></blockquote><h2 id="其他使用技巧" tabindex="-1"><a class="header-anchor" href="#其他使用技巧"><span>其他使用技巧</span></a></h2><p>在 TypeScript 中，declare global 用于在模块内部扩展全局作用域，而 namespace 用于组织代码和类型。结合两者处理导出（export）和导入（import）时，需注意模块与全局作用域的交互规则。</p><h3 id="_1-declare-global-与-namespace-的基本用法" tabindex="-1"><a class="header-anchor" href="#_1-declare-global-与-namespace-的基本用法"><span>1. declare global 与 namespace 的基本用法</span></a></h3><p>declare global 主要用于在模块（含顶级 import 或 export 的文件）中扩展全局类型或变量。若要在全局作用域中定义或扩展 namespace，需通过 declare global 将其暴露到全局，此时 namespace 不需要显式 export，但文件需作为模块（通过 export {} 确保）13。</p><p>示例：扩展全局 namespace</p><pre><code class="language-ts">// 在模块文件中（含 export）
export {}; // 确保文件被视为模块

declare global {
  namespace MyGlobalNamespace {
    interface User {
      id: number;
      name: string;
    }
    function greet(): void;
  }
}

// 全局使用
const user: MyGlobalNamespace.User = { id: 1, name: &quot;Alice&quot; };
MyGlobalNamespace.greet();
</code></pre><h3 id="_2-导出-export-与导入-import-的注意事项" tabindex="-1"><a class="header-anchor" href="#_2-导出-export-与导入-import-的注意事项"><span>2. 导出（Export）与导入（Import）的注意事项</span></a></h3><p>模块文件的要求：使用 declare global 的文件必须是模块（即包含顶级 import 或 export）。若文件无 import/export，则被视为脚本，无法使用 declare global 3。 namespace 的导出：在 .d.ts 文件中声明的 namespace 默认会自动导出，无需显式 export，可直接在其他模块中使用 1。但若需通过 declare global 扩展的 namespace 被其他模块导入，需确保其在全局作用域中可见。</p><h3 id="_3-结合-import-使用-namespace" tabindex="-1"><a class="header-anchor" href="#_3-结合-import-使用-namespace"><span>3. 结合 import 使用 namespace</span></a></h3><p>若需从其他模块导入 namespace 并扩展其类型，可通过 declare module 配合 namespace 实现，而非直接使用 declare global。例如，扩展第三方库的 namespace：</p><pre><code class="language-ts">// 假设第三方库有 namespace &#39;Lib&#39;
import { Lib } from &quot;third-party-lib&quot;;

declare module &quot;third-party-lib&quot; {
  namespace Lib {
    interface ExtendedType {
      newProp: string;
    }
  }
}
</code></pre><h3 id="_4-常见误区与解决" tabindex="-1"><a class="header-anchor" href="#_4-常见误区与解决"><span>4. 常见误区与解决</span></a></h3><p>避免重复声明：全局 namespace 若已在其他文件中声明，再次声明会导致冲突，需确保唯一性。 模块与全局的隔离：模块内的变量默认不进入全局作用域，declare global 是突破这一限制的唯一方式 。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>declare global 用于在模块中扩展全局作用域，namespace 用于组织类型。两者结合时，需通过 export {} 确保文件为模块，并注意 namespace 的自动导出特性。对于跨模块的 namespace 扩展，优先使用 declare module 而非 declare global，以保持模块化设计。</p>`,46)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};