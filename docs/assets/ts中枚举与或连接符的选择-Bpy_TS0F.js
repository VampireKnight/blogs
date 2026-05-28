import{E as e,f as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts%E4%B8%AD%E6%9E%9A%E4%B8%BE%E4%B8%8E%E6%88%96%E8%BF%9E%E6%8E%A5%E7%AC%A6%E7%9A%84%E9%80%89%E6%8B%A9/ts%E4%B8%AD%E6%9E%9A%E4%B8%BE%E4%B8%8E%E6%88%96%E8%BF%9E%E6%8E%A5%E7%AC%A6%E7%9A%84%E9%80%89%E6%8B%A9.html","title":"ts中枚举与或连接符的选择","lang":"zh-CN","frontmatter":{}}`),a={name:`ts中枚举与或连接符的选择.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="ts中枚举与或连接符的选择" tabindex="-1"><a class="header-anchor" href="#ts中枚举与或连接符的选择"><span>ts中枚举与或连接符的选择</span></a></h1><p>我们处理有数的特殊值的时候,需要使用几个有限的值的时候,一定要使用枚举吗,不能使用|吗</p><h2 id="使用-的type" tabindex="-1"><a class="header-anchor" href="#使用-的type"><span>使用 | 的type</span></a></h2><h3 id="纯值-可以作为type中属性的值" tabindex="-1"><a class="header-anchor" href="#纯值-可以作为type中属性的值"><span>&quot;纯值&quot;可以作为type中属性的值</span></a></h3><pre><code class="language-ts">type oriDataType = {
  type: string;
  id: &quot;177&quot;;
};
type retDataType = {
  type: string;
  id: &quot;177&quot;;
  transformed: boolean;
};
function transform(data: oriDataType): retDataType {
  let { id, type } = data;
  switch (id) {
    case &quot;177&quot;:
      return {
        id,
        type,
        transformed: true,
      };
    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
</code></pre><blockquote><p><strong>函数无报错</strong>,但id固定位 177 了,其他类型的值就会报错 <strong>调用就可能会报错</strong></p></blockquote><pre><code class="language-ts">transform({ id: &quot;233&quot;, type: &quot;custom&quot; });
</code></pre><p><img src="/blogs/assets/image-EdTa2uhb.png" alt="alt text"></p><h3 id="值类型-可以作为type中属性的值" tabindex="-1"><a class="header-anchor" href="#值类型-可以作为type中属性的值"><span>&quot;值类型&quot;可以作为type中属性的值</span></a></h3><p>上面的那种方式,限制太多了,几乎没限制,不符合实际需求</p><blockquote><p>我们先定义 &quot;单值&quot; 类型,然后定义一个 统合类型,为这几个类型 | 联立起立的</p></blockquote><pre><code class="language-ts">type ThxCnMainStockMarketIdType = &quot;23&quot;;
type ThxHkStockMarketIdType = &quot;177&quot;;
type ThxSecurityMarketIdsEmuns =
  | ThxCnMainStockMarketIdType
  | ThxHkStockMarketIdType;
type oriDataType = {
  type: string;
  id: ThxSecurityMarketIdsEmuns;
};
type retDataType = {
  type: string;
  id: ThxSecurityMarketIdsEmuns;
  transformed: boolean;
};
function transform(data: oriDataType): retDataType {
  let { id, type } = data;
  switch (id) {
    // case &quot;177&quot;:
    case ThxHkStockMarketIdType:
      return {
        id,
        type,
        transformed: true,
      };

    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
</code></pre><p><strong>会报错:“ThxHkStockMarketIdType”仅表示类型，但在此处却作为值使用。</strong><img src="/blogs/assets/image-1-Bjkl2zXf.png" alt="alt text"></p><blockquote><p>能在代码运行中使用的只有 Enum</p></blockquote><h2 id="enums" tabindex="-1"><a class="header-anchor" href="#enums"><span>enums</span></a></h2><p>上面发现,我们可能只能使用enum了</p><blockquote><p>希望使用 | 的时候,是因为 值 与 类型相等,而enum需要定义属性;但其实在实际使用过程中,我们为了细分类型,也会定义不同的 值type(例如:ThxCnMainStockMarketIdType和ThxHkStockMarketIdType), 所以,实际上,<strong>enum</strong> 并没有复杂多少</p></blockquote><h3 id="普通使用enums" tabindex="-1"><a class="header-anchor" href="#普通使用enums"><span>普通使用enums</span></a></h3><pre><code class="language-ts">enum ThxSecurityMarketIdsEmuns {
  ThxCnMainStockMarketIdType = &quot;23&quot;,
  ThxHkStockMarketIdType = &quot;177&quot;,
}
type oriDataType = {
  type: string;
  id: ThxSecurityMarketIdsEmuns;
};
type retDataType = {
  type: string;
  id: ThxSecurityMarketIdsEmuns;
  transformed: boolean;
};
function transform(data: oriDataType): retDataType {
  let { id, type } = data;
  switch (id) {
    // case &quot;177&quot;:
    case ThxSecurityMarketIdsEmuns.ThxHkStockMarketIdType:
      return {
        id,
        type,
        transformed: true,
      };

    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
transform({
  id: ThxSecurityMarketIdsEmuns.ThxHkStockMarketIdType,
  type: &quot;custom&quot;,
});
</code></pre><blockquote><p>函数与使用都不报错</p></blockquote><h3 id="多级-enums" tabindex="-1"><a class="header-anchor" href="#多级-enums"><span>&quot;多级&quot;enums</span></a></h3><p>上面使用的 单个eums,那如果我们要使用 多级 eums呢</p><pre><code class="language-ts">enum ThxStockMarketIdsEmuns {
  ThxCnMainStockMarketIdType = &quot;23&quot;,
  ThxHkStockMarketIdType = &quot;177&quot;,
}
enum ThxBkMarketIdsEmuns {
  ThxCnMainBkMarketIdType = &quot;23bk&quot;,
  ThxHkBkMarketIdType = &quot;177bm&quot;,
}
type combineType = ThxStockMarketIdsEmuns | ThxBkMarketIdsEmuns;
type oriDataType = {
  type: string;
  id: combineType;
};
type retStockDataType = {
  type: string;
  id: combineType;
  transformed: boolean;
};
type retDataType = {
  type: string;
  id: combineType;
  transformed: boolean;
};
// 转换stock
function transformStock(data: oriDataType): retStockDataType {
  let { id, type } = data;
  switch (id) {
    // case &quot;177&quot;:
    case ThxStockMarketIdsEmuns.ThxHkStockMarketIdType:
      return {
        id,
        type,
        transformed: true,
      };

    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
function transform(data: oriDataType): retDataType {
  let { id, type } = data;
  switch (id) {
    // case &quot;177&quot;:
    case ThxStockMarketIdsEmuns:
      return {
        id,
        type,
        transformed: true,
      };

    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
</code></pre><blockquote><p>遇到了之前同样的问题,type 不能作为值来参与计算</p></blockquote><h4 id="使用-eums参与计算" tabindex="-1"><a class="header-anchor" href="#使用-eums参与计算"><span>使用 eums参与计算</span></a></h4><pre><code class="language-ts">// 通过 enums 获取其值
const thxStockMarketIds: ThxStockMarketIdsEmuns[] = Object.values(
  ThxStockMarketIdsEmuns,
);
const thxBkMarketIds: ThxBkMarketIdsEmuns[] =
  Object.values(ThxBkMarketIdsEmuns);
const allThxMarketIds = ([] as combineType[])
  .concat(thxStockMarketIds)
  .concat(thxBkMarketIds);
</code></pre><p><strong>switch 改造使用 includes</strong> switch 比较的是值,而此时,我们需要将 id归类,它是基于数组值的比较的,所以最好的方式是通过 includes 来判断,那么 switch 比较的内容就需要改变了</p><blockquote><p>一般,switch 比较的是 某个属性 是否 为 某个特定值; 现在需要知道的是,某个值是否在某个数组中,那么需要比较的是否为true</p></blockquote><pre><code class="language-ts">function transform(data: oriDataType): retDataType {
  let { id, type } = data;
  switch (true) {
    // case &quot;177&quot;:
    case thxStockMarketIds.includes(id):
      return transformStock(data);
    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
</code></pre><p><img src="/blogs/assets/image-2-5iuidxJb.png" alt="alt text"></p><h4 id="使用-as-断言-解决报错" tabindex="-1"><a class="header-anchor" href="#使用-as-断言-解决报错"><span>使用 as 断言 解决报错</span></a></h4><p>上面发现 传入参数类型 oriDataType 中的id的类型 与 thxStockMarketIds 中的数据类型不同</p><blockquote><p>但是,我们知道 thxStockMarketIds 就是 ThxStockMarketIdsEmuns 转换过来的,我们可以通过 as 断言来解决这个报错</p></blockquote><pre><code class="language-ts">function transform(data: oriDataType): retDataType {
  let { id, type } = data;
  switch (true) {
    // case &quot;177&quot;:
    case thxStockMarketIds.includes(id as ThxStockMarketIdsEmuns):
      return transformStock(data);
    default:
      return {
        id,
        type,
        transformed: false,
      };
  }
}
</code></pre><p><strong>调用报错</strong></p><pre><code class="language-ts">transform({
  id: &quot;177&quot;,
  type: &quot;custom&quot;,
});
</code></pre><p><img src="/blogs/assets/image-3-DNPOKbOZ.png" alt="alt text"></p><blockquote><p>同理,通过断言处理</p></blockquote><pre><code class="language-ts">transform({
  id: &quot;177&quot; as combineType,
  type: &quot;custom&quot;,
});
</code></pre><h3 id="拓展-enum的值也能做类型" tabindex="-1"><a class="header-anchor" href="#拓展-enum的值也能做类型"><span>拓展:enum的值也能做类型</span></a></h3><pre><code class="language-ts">enum enMap {
  TYPE12 = &quot;12&quot;,
  TYPE13 = &quot;13&quot;,
}
type dataType = {
  type: enMap;
  value: string;
};
type specialDataType = {
  type: enMap.TYPE12;
  value: string;
};
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>type 定义的内容只能参与 数据检测,但不能参与数据类型,这就注定了 switch 使用的只能是 enum相关的内容</p>`,43)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};