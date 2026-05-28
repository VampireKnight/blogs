import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/%E4%BD%BF%E7%94%A8reduce%E6%9B%BF%E4%BB%A3map%E4%B8%8Efilter/%E4%BD%BF%E7%94%A8reduce%E6%9B%BF%E4%BB%A3map%E4%B8%8Efilter.html","title":"使用reduce替代map与filter","lang":"zh-CN","frontmatter":{}}`),a={name:`使用reduce替代map与filter.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="使用reduce替代map与filter" tabindex="-1"><a class="header-anchor" href="#使用reduce替代map与filter"><span>使用reduce替代map与filter</span></a></h1><h2 id="参考示例" tabindex="-1"><a class="header-anchor" href="#参考示例"><span>参考示例</span></a></h2><h3 id="map中标准化数据" tabindex="-1"><a class="header-anchor" href="#map中标准化数据"><span>map中标准化数据</span></a></h3><pre><code class="language-ts">const normalizedThxAppSecurityInfoArr = (arr: ThxSimpleBaseSecurityInfo[]) =&gt; {
  let finalArr: ThxSimpleBaseSecurityInfo[] = arr.map(
    (item): ThxSimpleBaseSecurityInfo =&gt;
      ThxAPPSecurityBaseData.normallizeBaseData(item),
  );
  return finalArr;
};
</code></pre><p><img src="/blogs/assets/image-D9MyLUXv.png" alt="alt text"></p><blockquote><p>说明 <code>ThxAPPSecurityBaseData.normallizeBaseData</code> 返回结果中可能有 undefined,而 ThxSimpleBaseSecurityInfo 中没有undefined</p></blockquote><h3 id="使用filter过滤掉undefined" tabindex="-1"><a class="header-anchor" href="#使用filter过滤掉undefined"><span>使用filter过滤掉undefined</span></a></h3><pre><code class="language-ts">const normalizedThxAppSecurityInfoArr = (arr: ThxSimpleBaseSecurityInfo[]) =&gt; {
  let finalArr: ThxSimpleBaseSecurityInfo[] = arr
    .map(
      (item): ThxSimpleBaseSecurityInfo =&gt;
        ThxAPPSecurityBaseData.normallizeBaseData(item),
    )
    .filter((item) =&gt; item);
  return finalArr;
};
</code></pre><blockquote><p>依旧报错 <img src="/blogs/assets/image-1-DIMLynme.png" alt="alt text"></p></blockquote><p><strong>map中添加undefined的返回类型声明</strong></p><pre><code class="language-ts">const normalizedThxAppSecurityInfoArr = (arr: ThxSimpleBaseSecurityInfo[]) =&gt; {
  let finalArr: ThxSimpleBaseSecurityInfo[] = arr
    .map((item): ThxSimpleBaseSecurityInfo | undefined =&gt;
      ThxAPPSecurityBaseData.normallizeBaseData(item),
    )
    .filter((item) =&gt; item);
  return finalArr;
};
</code></pre><p><img src="/blogs/assets/image-2-Buas0nlz.png" alt="alt text"></p><h2 id="使用reduce" tabindex="-1"><a class="header-anchor" href="#使用reduce"><span>使用reduce</span></a></h2><pre><code class="language-ts">const normalizedThxAppSecurityInfoArr = (arr: ThxSimpleBaseSecurityInfo[]) =&gt; {
  let finalArr: ThxSimpleBaseSecurityInfo[] = arr.reduce(
    (final, currentItem) =&gt; {
      let normalized: ThxSimpleBaseSecurityInfo | undefined =
        ThxAPPSecurityBaseData.normallizeBaseData(currentItem);
      if (normalized) {
        final.push(normalized);
      }
      return final;
    },
    [],
  );
  return finalArr;
};
</code></pre><p><img src="/blogs/assets/image-3-DBSIreMC.png" alt="alt text"></p><p><strong>解决方案: reduce 中添加 第一个参数添加类型</strong></p><pre><code class="language-ts">const normalizedThxAppSecurityInfoArr = (arr: ThxSimpleBaseSecurityInfo[]) =&gt; {
  let finalArr: ThxSimpleBaseSecurityInfo[] = arr.reduce(
    (final: ThxSimpleBaseSecurityInfo[], currentItem) =&gt; {
      let normalized: ThxSimpleBaseSecurityInfo | undefined =
        ThxAPPSecurityBaseData.normallizeBaseData(currentItem);
      if (normalized) {
        final.push(normalized);
      }
      return final;
    },
    [],
  );
  return finalArr;
};
</code></pre>`,17)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};