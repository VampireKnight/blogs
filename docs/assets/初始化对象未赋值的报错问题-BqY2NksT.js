import{E as e,s as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/ts/%E5%88%9D%E5%A7%8B%E5%8C%96%E5%AF%B9%E8%B1%A1%E6%9C%AA%E8%B5%8B%E5%80%BC%E7%9A%84%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98.html","title":"","lang":"zh-CN","frontmatter":{}}`),a={name:`初始化对象未赋值的报错问题.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`pre`,null,[t(`code`,{class:`language-ts`},`let marketObj: { [x: string | number]: any } = {};
for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  let { thx_marketId } = current;
  let currentMarketStore = marketObj[thx_marketId];
  if (!currentMarketStore) {
    currentMarketStore = marketObj[thx_marketId] = {
      list: [],
    };
  }
  currentMarketStore.list.push(current);
}
return marketObj;
`)],-1)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};