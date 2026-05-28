import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/typescript%E7%9A%84%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/typescript%E7%9A%84%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA.html","title":"typescript的导入导出","lang":"zh-CN","frontmatter":{}}`),a={name:`typescript的导入导出.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="typescript的导入导出" tabindex="-1"><a class="header-anchor" href="#typescript的导入导出"><span>typescript的导入导出</span></a></h1><p>javascript的导入导出相对比较简单</p><blockquote><p><strong>默认导出/入</strong>:<code>export default module</code> 与 <code>import module from &#39;path&#39;</code><strong>独立导出/入</strong>:<code>export somePiece</code> 与 <code>import {somePiece} from &#39;path&#39;</code></p></blockquote><p>但是 typescript 相对 js 拓展了许多 新的类型约束 与 概念</p><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2><h3 id="import-export-type" tabindex="-1"><a class="header-anchor" href="#import-export-type"><span>import/export type</span></a></h3><h4 id="export-type" tabindex="-1"><a class="header-anchor" href="#export-type"><span>export type</span></a></h4><p><strong>securityBaseInfo.ts</strong></p><pre><code class="language-ts">export type ThxSecurityMarketIdConfigType =
  | {
      config_data: {
        [x: string | number]: any;
      };
      update_time: string;
    }
  | undefined;
</code></pre><h4 id="import-type" tabindex="-1"><a class="header-anchor" href="#import-type"><span>import type</span></a></h4><pre><code class="language-ts">import type { ThxSecurityMarketIdConfigType } from &quot;securityBaseInfo&quot;;
const result: ThxSecurityMarketIdConfigType;
</code></pre><h3 id="export-import-namespace" tabindex="-1"><a class="header-anchor" href="#export-import-namespace"><span>export/import(namespace)</span></a></h3><h4 id="export-namespace" tabindex="-1"><a class="header-anchor" href="#export-namespace"><span>export(namespace)</span></a></h4><p><strong>securityBaseInfo.ts</strong></p><pre><code class="language-ts">export namespace SecurityBaseInfo {
  export type SecurityInfoFileDataInThxAppDataType = {
    data: {
      [x: string | number]: any;
    };
    oriData?: {
      [x: string | number]: any;
    };
  };
  // thx marketId 配置的Response 结构
  export type ThxSecurityMarketIdConfigType =
    | {
        config_data: {
          [x: string | number]: any;
        };
        update_time: string;
      }
    | undefined;
}
</code></pre><h4 id="export-import-namespace-1" tabindex="-1"><a class="header-anchor" href="#export-import-namespace-1"><span>export/import(namespace)</span></a></h4><pre><code class="language-ts">import type { SecurityBaseInfo } from &quot;securityBaseInfo&quot;;
const result: SecurityBaseInfo.ThxSecurityMarketIdConfigType;
</code></pre>`,17)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};