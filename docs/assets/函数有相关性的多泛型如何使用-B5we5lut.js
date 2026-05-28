import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/%E5%87%BD%E6%95%B0%E6%9C%89%E7%9B%B8%E5%85%B3%E6%80%A7%E7%9A%84%E5%A4%9A%E6%B3%9B%E5%9E%8B%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8/%E5%87%BD%E6%95%B0%E6%9C%89%E7%9B%B8%E5%85%B3%E6%80%A7%E7%9A%84%E5%A4%9A%E6%B3%9B%E5%9E%8B%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8.html","title":"函数有相关性的多泛型如何使用","lang":"zh-CN","frontmatter":{}}`),a={name:`函数有相关性的多泛型如何使用.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="函数有相关性的多泛型如何使用" tabindex="-1"><a class="header-anchor" href="#函数有相关性的多泛型如何使用"><span>函数有相关性的多泛型如何使用</span></a></h1><h2 id="如何使用动态类型实现函数抽离" tabindex="-1"><a class="header-anchor" href="#如何使用动态类型实现函数抽离"><span>如何使用动态类型实现函数抽离</span></a></h2><h3 id="直接使用函数-不考虑类型" tabindex="-1"><a class="header-anchor" href="#直接使用函数-不考虑类型"><span>直接使用函数,不考虑类型</span></a></h3><p>我们在使用js函数的时候可以直接使用函数</p><pre><code class="language-js">function update(
    newData,
    oldData?,
) {
if (!oldData) {
    let result = Object.assign({}, newData, refreshMongoUpdateInfo(), {
    is_delete: false,
    });
    return result;
} else {
    return Object.assign({}, oldData, newData, refreshMongoUpdateInfo());
}
}
</code></pre><h3 id="考虑类型-导致拓展函数" tabindex="-1"><a class="header-anchor" href="#考虑类型-导致拓展函数"><span>考虑类型,导致拓展函数</span></a></h3><p>但是如果我们考虑到出入输出结果的类型,就会产生很多同逻辑的函数</p><pre><code class="language-ts">function updateCnMainlandFund(
  newCnMainlandFund: ThxAppSecurityTypes.ThxStandardCnMainLandFundType,
  oldCnMainlandFund?: MongoThxStandardCnMainLandFundType,
): MongoThxStandardCnMainLandFundType {
  if (!oldCnMainlandFund) {
    let result = Object.assign(
      {},
      newCnMainlandFund,
      refreshMongoUpdateInfo(),
      {
        is_delete: false,
      },
    );
    return result;
  } else {
    return Object.assign(
      {},
      oldCnMainlandFund,
      newCnMainlandFund,
      refreshMongoUpdateInfo(),
    );
  }
}
function updateHkFund(
  newHkFund: ThxAppSecurityTypes.ThxStandardHkFundType,
  oldHkFund?: MongoThxStandardHkFundType,
): MongoThxStandardHkFundType {
  if (!oldHkFund) {
    let result = Object.assign({}, newHkFund, refreshMongoUpdateInfo(), {
      is_delete: false,
    });
    return result;
  } else {
    return Object.assign({}, oldHkFund, newHkFund, refreshMongoUpdateInfo());
  }
}
</code></pre><h2 id="使用泛型替代属性类型" tabindex="-1"><a class="header-anchor" href="#使用泛型替代属性类型"><span>使用泛型替代属性类型</span></a></h2><p>统一逻辑,但是仅输入输出类型不同,我们考虑使用泛型</p><pre><code class="language-ts">function updateSecurityInfo&lt;A, B&gt;(newSecurityInfo: A, oldSecurityInfo?: B): B {
  if (!oldSecurityInfo) {
    let result = Object.assign({}, newSecurityInfo, refreshMongoUpdateInfo(), {
      is_delete: false,
    });
    return result;
  } else {
    return Object.assign(
      {},
      oldSecurityInfo,
      newSecurityInfo,
      refreshMongoUpdateInfo(),
    );
  }
}
</code></pre><p><img src="/blogs/assets/image-BsroqSzx.png" alt="alt text"></p><blockquote><p>这是因为 代码体现了 泛型A 与 泛型B之间的某种联系(<strong>因为返回结果是泛型B</strong>)</p></blockquote><h3 id="解决方案-使用泛型定义动态类型来表明不同类型的关系" tabindex="-1"><a class="header-anchor" href="#解决方案-使用泛型定义动态类型来表明不同类型的关系"><span>解决方案:使用泛型定义动态类型来表明不同类型的关系</span></a></h3><pre><code class="language-ts">type mongoUpdateInfo = {
  mongoUpdatedTm: number;
  mongoUpdatedDateTime: string;
};
type MongoSecurityBaseInfoExtralInfo = mongoUpdateInfo &amp; {
  is_delete: boolean;
};
// 定义 泛型 转换类型:表明关系
type MongoSecurityBaseInfoExtend&lt;T&gt; = T &amp; MongoSecurityBaseInfoExtralInfo;
</code></pre><p><strong>使用泛型转换类型 来替换之前的第二个泛型</strong></p><pre><code class="language-ts">function updateSecurityInfo&lt;A&gt;(
  newSecurityInfo: A,
  oldSecurityInfo?: MongoSecurityBaseInfoExtend&lt;A&gt;,
): MongoSecurityBaseInfoExtend&lt;A&gt; {
  if (!oldSecurityInfo) {
    let result = Object.assign({}, newSecurityInfo, refreshMongoUpdateInfo(), {
      is_delete: false,
    });
    return result;
  } else {
    return Object.assign(
      {},
      oldSecurityInfo,
      newSecurityInfo,
      refreshMongoUpdateInfo(),
    );
  }
}
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>1.使用泛型时,各泛型最好是独立的,<strong>如果有关系,至少不要在返回的结果泛型中体现它们的关系</strong><br> 2.泛型最好尽量少,如果多个类型中有关系 可以类型定义时体现他们的关系</p>`,19)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};