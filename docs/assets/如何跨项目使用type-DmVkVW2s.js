import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/%E5%A6%82%E4%BD%95%E8%B7%A8%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8type/%E5%A6%82%E4%BD%95%E8%B7%A8%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8type.html","title":"如何跨项目使用type","lang":"zh-CN","frontmatter":{}}`),a={name:`如何跨项目使用type.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="如何跨项目使用type" tabindex="-1"><a class="header-anchor" href="#如何跨项目使用type"><span>如何跨项目使用type</span></a></h1><h2 id="使用typeroots" tabindex="-1"><a class="header-anchor" href="#使用typeroots"><span>使用typeRoots</span></a></h2><h3 id="typeroots规范" tabindex="-1"><a class="header-anchor" href="#typeroots规范"><span>typeRoots规范</span></a></h3><p><strong>注</strong>:需要遵循规范来创建 目录层级 与 正确语法 typeRoots目录中支持解析二级目录的index.d.ts</p><blockquote><p>1.<strong>只支持二级目录的 d.ts</strong>:根目录的 d.ts 与 更深级目录的 d.ts 都不会解析<br> 2.<strong>二级目录的d.ts只能是index.d.ts</strong>:别的文件名都不支持 当然,<strong>也可能是个人配置没配置好</strong></p></blockquote><h4 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h4><p>虽然 typeRoots 只解析二级目录的index.d.ts,但是可以通过 <code>&lt;reference &gt;</code> 实现多级目录的导入</p><p><strong>深层目录:shared/types/libResponseTypes/thx/securityBaseInfo/index.d.ts</strong></p><pre><code class="language-ts">declare namespace SecurityBaseInfo {
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
</code></pre><p><strong>入口文件文件路径</strong>:shared/types/libResponseTypes/index.d.ts</p><pre><code class="language-ts">/// &lt;reference path=&quot;./thx/securityBaseInfo/index.d.ts&quot; /&gt;
</code></pre><blockquote><p><strong>注意</strong> 1.深层目录不能使用 import/export将其变成ESModule <strong>typeRoots中本来就应该是d.ts,是纯类型文件</strong></p></blockquote><h3 id="在typeroots中配置别的项目中的types" tabindex="-1"><a class="header-anchor" href="#在typeroots中配置别的项目中的types"><span>在typeRoots中配置别的项目中的types</span></a></h3><pre><code class="language-json">{
  // ...
  &quot;compilerOptions&quot;: {
    // ...
    &quot;typeRoots&quot;: [
      // ...
      &quot;./node_modules/stockFoundationPackages/shared/types&quot;
    ]
    // ...
  }
  // ...
}
</code></pre><h2 id="直接使用" tabindex="-1"><a class="header-anchor" href="#直接使用"><span>直接使用</span></a></h2>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};