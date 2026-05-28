import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E7%9A%84class%E5%92%8C%E5%87%BD%E6%95%B0%E5%AF%BC%E5%87%BA/%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E7%9A%84class%E5%92%8C%E5%87%BD%E6%95%B0%E5%AF%BC%E5%87%BA.html","title":"工具函数的class和函数导出","lang":"zh-CN","frontmatter":{}}`),a={name:`工具函数的class和函数导出.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="工具函数的class和函数导出" tabindex="-1"><a class="header-anchor" href="#工具函数的class和函数导出"><span>工具函数的class和函数导出</span></a></h1><h2 id="两种不同的工具实现和导出方案" tabindex="-1"><a class="header-anchor" href="#两种不同的工具实现和导出方案"><span>两种不同的工具实现和导出方案</span></a></h2><p>在我们开发的过程中,可能会需要工具函数,一个工具函数我们面临一种选择</p><blockquote><p>方案一:将相关的函数独立导出 方案二:将相关的工具函数作为静态函数写在class中,然后将class作为一个整体导出;</p></blockquote><h3 id="各工具函数独立导出" tabindex="-1"><a class="header-anchor" href="#各工具函数独立导出"><span>各工具函数独立导出</span></a></h3><pre><code class="language-ts">export const normalizedThxAppSecurityInfoArr = () =&gt; {
  //   ...
};
export const groupedThxAppSecurityInfo = () =&gt; {
  //   ...
};
</code></pre><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h4><p>1.可以按需引入;<br> 2.使用直观</p><h3 id="class整体导出" tabindex="-1"><a class="header-anchor" href="#class整体导出"><span>class整体导出</span></a></h3><pre><code class="language-ts">export class ThxSecurityInfoDataUtil {
  static normalizedThxAppSecurityInfoArr() {
    //   ...
  }
  static groupedThxAppSecurityInfo() {
    //   ...
  }
}
</code></pre><h4 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1"><span>优点</span></a></h4><p>1.引入简单:引入类,而不用引入 一堆需要使用的函数;</p><h2 id="个人心得" tabindex="-1"><a class="header-anchor" href="#个人心得"><span>个人心得</span></a></h2><p>一般而言,两种方案没什么区别,但是 个人倾向 使用 class 方案</p><h3 id="class方案方便导入" tabindex="-1"><a class="header-anchor" href="#class方案方便导入"><span>class方案方便导入</span></a></h3><p>当我们的项目不断膨胀时,我们的工具函数也会增多,如果我们都使用 独立导出,我们会写过多的 import {xxx} from &quot;YYY&quot;,不是很方便</p><h3 id="class-方便给外部项目使用" tabindex="-1"><a class="header-anchor" href="#class-方便给外部项目使用"><span>class 方便给外部项目使用</span></a></h3><p>有时候,我们的一些 工具函数 需要给外部项目使用,如果都是独立导出,那么 外部项目 引入,会需要 一堆 import</p><h3 id="class-方便改进-添加-修改函数" tabindex="-1"><a class="header-anchor" href="#class-方便改进-添加-修改函数"><span>class 方便改进(添加,修改函数)</span></a></h3><p>一个 工具函数文件 不是一开始就 完成,在开发的过程中,我们可能会需要添加 新的函数 或者 修改 工具函数名(语义化不友好,改更加便于理解的文件名)</p><blockquote><p><strong>新增工具函数</strong>:如果我们使用的 独立导出,我们可能需要 将所有使用的地方 添加函数导入 <strong>修改工具函数名</strong>:如果我们使用的 独立导出,我们可能需要 将所有使用的地方 都改名</p></blockquote><h3 id="class-方便整理导出" tabindex="-1"><a class="header-anchor" href="#class-方便整理导出"><span>class 方便整理导出</span></a></h3><p>为了方便使用,我们可能会写一些 入口文件,方便项目使用</p><blockquote><p>例如:我们可能有 许多工具函数文件,我们可能会创建一个 工具函数目录的index.ts index.ts : 导入所有的 工具函数,并导出 项目中需要使用工具函数时,就统一从 这个 index.ts 文件中导入</p></blockquote><h2 id="综合方案" tabindex="-1"><a class="header-anchor" href="#综合方案"><span>综合方案</span></a></h2><p>有时候,我们想要更多的灵活性</p><blockquote><p>1.在项目内,只需要使用 某个工具函数的时候,就导入独立的函数;如果使用的函数多,我们就导入 class 使用; 2.给外部项目使用时,我们使用class</p></blockquote><pre><code class="language-ts">export const normalizedThxAppSecurityInfoArr = () =&gt; {
  //   ...
};
export const groupedThxAppSecurityInfo = () =&gt; {
  //   ...
};

export default class ThxSecurityInfoDataUtil {
  static normalizedThxAppSecurityInfoArr() {
    //   ...
    return normalizedThxAppSecurityInfoArr();
  }
  static groupedThxAppSecurityInfo() {
    //   ...
    return groupedThxAppSecurityInfo();
  }
}
</code></pre><blockquote><p>最好 export default 导出 class,而 普通 export 导出函数 这样 导入导出起来也方便,还充分利用了 export default</p></blockquote><h2 id="也不可整体导出一个对象而不是class" tabindex="-1"><a class="header-anchor" href="#也不可整体导出一个对象而不是class"><span>也不可整体导出一个对象而不是class</span></a></h2><pre><code class="language-ts">export const normalizedThxAppSecurityInfoArr = () =&gt; {
  //   ...
};
export const groupedThxAppSecurityInfo = () =&gt; {
  //   ...
};

export default const ThxSecurityInfoDataUtil = {
  normalizedThxAppSecurityInfoArr,
  groupedThxAppSecurityInfo
}
</code></pre>`,31)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};