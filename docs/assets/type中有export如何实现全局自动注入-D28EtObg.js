import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/declare%20global%E5%AE%9E%E7%8E%B0%20type%E4%B8%AD%E6%9C%89export%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%85%A8%E5%B1%80%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%85%A5/type%E4%B8%AD%E6%9C%89export%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%85%A8%E5%B1%80%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%85%A5.html","title":"declare global实现 type中有export如何实现全局自动注入","lang":"zh-CN","frontmatter":{}}`),a={name:`type中有export如何实现全局自动注入.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="declare-global实现-type中有export如何实现全局自动注入" tabindex="-1"><a class="header-anchor" href="#declare-global实现-type中有export如何实现全局自动注入"><span>declare global实现 type中有export如何实现全局自动注入</span></a></h1><p>我们知道tsconfig.json可以通过配置typeRoot 来实现 d.ts文件的全局自动注入 但在实际的开发情况中,我们可能有各种不同的type 和 Interface之类的,他们之间也可能有一些互相依赖的关系,我们不可能将所有的type 都写到一个文件里,这就涉及到 import/export了</p><blockquote><p>但一旦使用了import/export,文件就会被识别为 模块,而无法实现被全局注入</p></blockquote><h2 id="部分实现-namespace-实现自动导入" tabindex="-1"><a class="header-anchor" href="#部分实现-namespace-实现自动导入"><span>(部分实现)namespace 实现自动导入</span></a></h2><h3 id="全局命名空间-非模块化文件" tabindex="-1"><a class="header-anchor" href="#全局命名空间-非模块化文件"><span>全局命名空间（非模块化文件）</span></a></h3><blockquote><p>如果命名空间是全局的（未使用 import/export，通过 declare 或传统脚本定义），直接通过三斜线指令引用</p></blockquote><p><strong>SimpleNameSpace</strong></p><pre><code class="language-ts">namespace SimpleNameSpace {
  export type typeDemo = {
    text: string;
  };
}
</code></pre><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4><p><strong>错误使用</strong></p><pre><code class="language-ts">/// &lt;reference path=&quot;../../../../types/SimpleNameSpace.ts&quot; /&gt;
SimpleNameSpace.typeDemo;
</code></pre><p><img src="/blogs/assets/image-BPsO3zzF.png" alt="alt text"></p><p><strong>正确使用</strong></p><pre><code class="language-ts">/// &lt;reference path=&quot;../../../../types/SimpleNameSpace.ts&quot; /&gt;

let tDemoObj: SimpleNameSpace.typeDemo = {
  text: &quot;sss&quot;,
};
</code></pre><h4 id="自动导入" tabindex="-1"><a class="header-anchor" href="#自动导入"><span>自动导入</span></a></h4><p>我们将 SimpleNameSpace 放到自动引入目录中,我们能否直接使用呢 <img src="/blogs/assets/image-1-BEI1B26N.png" alt="alt text"></p><h3 id="全局命名空间-模块化文件" tabindex="-1"><a class="header-anchor" href="#全局命名空间-模块化文件"><span>全局命名空间（模块化文件）</span></a></h3><p>只要使用了import 或者 export namespace就会将其变为 模块化文件</p><pre><code class="language-ts">import {
  HkStockThxMarketIdEnum,
  CnMainlandStockThxMarketIdEnum,
} from &quot;@src/app/types/securityData/thx/thxMarketIdEnum.enum&quot;;
namespace ThxBaseSecurityData {
  /***   thx 不同类型证券分类的 合并枚举type   ***/
  export type ThxStockMarketIdCombineEnumType =
    | HkStockThxMarketIdEnum
    | CnMainlandStockThxMarketIdEnum;
}
</code></pre><h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h4><p><strong>错误使用方式一:</strong></p><pre><code class="language-ts">/// &lt;reference path=&quot;../../../../types/ThxBaseSecurityData.namespace.ts&quot; /&gt;
let demoType: ThxBaseSecurityData.ThxStockMarketIdCombineEnumType = {};
</code></pre><p><img src="/blogs/assets/image-2-DyWqpwrJ.png" alt="alt text"></p><p><strong>错误使用方式二:</strong></p><pre><code class="language-ts">import { ThxBaseSecurityData } from &quot;../../../../types/ThxBaseSecurityData.namespace.ts&quot;;
let demoType: ThxBaseSecurityData.ThxStockMarketIdCombineEnumType = {};
</code></pre><p><img src="/blogs/assets/image-3-BYadljQ_.png" alt="alt text"></p><p><strong>正确使用方式</strong></p><blockquote><p>改造ThxBaseSecurityData.namespace.ts</p></blockquote><pre><code class="language-ts">import {
  HkStockThxMarketIdEnum,
  CnMainlandStockThxMarketIdEnum,
} from &quot;@src/app/types/securityData/thx/thxMarketIdEnum.enum&quot;;
export namespace ThxBaseSecurityData {
  /***   thx 不同类型证券分类的 合并枚举type   ***/
  export type ThxStockMarketIdCombineEnumType =
    | HkStockThxMarketIdEnum
    | CnMainlandStockThxMarketIdEnum;
}
</code></pre><blockquote><p>import 引入使用</p></blockquote><pre><code class="language-ts">import { ThxBaseSecurityData } from &quot;../../../../types/ThxBaseSecurityData.namespace&quot;;
let demoType: ThxBaseSecurityData.ThxStockMarketIdCombineEnumType = {};
</code></pre><p><img src="/blogs/assets/image-4-CImkOqKj.png" alt="alt text"></p><h4 id="无法自动导入" tabindex="-1"><a class="header-anchor" href="#无法自动导入"><span>无法自动导入</span></a></h4><pre><code class="language-ts">let demoType: ThxBaseSecurityData.ThxStockMarketIdCombineEnumType = {};
</code></pre><p><img src="/blogs/assets/image-5-D9LHkHuV.png" alt="alt text"></p><h2 id="使用-declare-global" tabindex="-1"><a class="header-anchor" href="#使用-declare-global"><span>使用 declare global</span></a></h2><p><strong>ThxBaseSecurityData.global.ts</strong></p><pre><code class="language-ts">import {
  HkStockThxMarketIdEnum,
  CnMainlandStockThxMarketIdEnum,
} from &quot;@src/app/types/securityData/thx/thxMarketIdEnum.enum&quot;;
declare global {
  /***   thx 不同类型证券分类的 合并枚举type   ***/
  type ThxStockMarketIdCombineEnumType =
    | HkStockThxMarketIdEnum
    | CnMainlandStockThxMarketIdEnum;
}
</code></pre><h3 id="自动注入-无需引入直接使用" tabindex="-1"><a class="header-anchor" href="#自动注入-无需引入直接使用"><span>自动注入,无需引入直接使用</span></a></h3><pre><code class="language-ts">let demoType: ThxStockMarketIdCombineEnumType = {};
</code></pre><p><img src="/blogs/assets/image-6-Dmf5srnO.png" alt="alt text"></p><h2 id="参考-export类型-怎么让ts自动全局加载" tabindex="-1"><a class="header-anchor" href="#参考-export类型-怎么让ts自动全局加载"><span>参考:export类型，怎么让TS自动全局加载?</span></a></h2><p>要在TypeScript中让export的类型（或变量、函数）自动全局加载，通常需要通过扩展全局作用域或调整模块配置来实现。以下是基于搜索结果和TypeScript规范的方法：</p><h3 id="_1-使用全局声明文件-d-ts" tabindex="-1"><a class="header-anchor" href="#_1-使用全局声明文件-d-ts"><span>1. 使用全局声明文件（.d.ts）</span></a></h3><p>如果需要扩展全局作用域（如添加自定义类型），可以创建一个全局声明文件（如global.d.ts），并在其中使用declare global语句。但需要注意，TypeScript要求全局声明文件必须被视为模块，否则会报错。此时可以通过添加空的export {}将文件标记为模块，避免污染全局命名空间的同时允许全局声明生效。</p><p>示例：</p><pre><code class="language-ts">// global.d.ts
export {}; // 将文件标记为模块

declare global {
  interface Window {
    myCustomGlobalFunction: () =&gt; void;
  }
}
</code></pre><p>通过这种方式，myCustomGlobalFunction会被添加到Window接口中，全局可用。</p><h3 id="_2-配置tsconfig-json确保文件被包含" tabindex="-1"><a class="header-anchor" href="#_2-配置tsconfig-json确保文件被包含"><span>2. 配置tsconfig.json确保文件被包含</span></a></h3><p>确保全局声明文件（.d.ts）被tsconfig.json的include或files字段包含，以便TypeScript编译器识别并加载这些声明。</p><h3 id="_3-避免模块隔离-谨慎使用" tabindex="-1"><a class="header-anchor" href="#_3-避免模块隔离-谨慎使用"><span>3. 避免模块隔离（谨慎使用）</span></a></h3><p>TypeScript默认将每个.ts文件视为模块（如果包含import/export）。若希望某个文件中的export内容全局可见，可移除该文件的所有export和import语句，使其成为非模块（脚本文件），此时其内容会暴露到全局作用域1。但这种方法不推荐，因为它会污染全局命名空间，且不利于模块化管理。</p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><p><strong>模块 vs 脚本</strong>：TypeScript中，包含import或export的文件是模块，其内容不会自动全局加载；无import/export的文件是脚本，内容会进入全局作用域。 <strong>空export {}的作用</strong>：在需要声明全局类型的文件中添加export {}，可将其标记为模块，同时允许通过declare global扩展全局作用域，避免编译错误5。</p><h3 id="参考总结" tabindex="-1"><a class="header-anchor" href="#参考总结"><span>参考总结</span></a></h3><p>最推荐的方式是通过<strong>全局声明文件（.d.ts）+ export {} + declare global</strong> 组合，在不破坏模块化结构的前提下扩展全局类型。避免直接将模块文件转换为脚本文件，以保持代码的可维护性和避免命名冲突。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>declare global 能实现全局的type注入(哪怕里面有使用 import/export)</p>`,58)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};