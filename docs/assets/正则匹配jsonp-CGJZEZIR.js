import{E as e,s as t,u as n}from"./runtime-core.esm-bundler-D0V1POjj.js";import{t as r}from"./plugin-vue_export-helper-DmxsexXh.js";var i=JSON.parse(`{"path":"/blogs/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D/%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8Djsonp/%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8Djsonp.html","title":"正则匹配jsonp","lang":"zh-CN","frontmatter":{}}`),a={name:`正则匹配jsonp.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`h1`,{id:`正则匹配jsonp`,tabindex:`-1`},[t(`a`,{class:`header-anchor`,href:`#正则匹配jsonp`},[t(`span`,null,`正则匹配jsonp`)])],-1),t(`pre`,null,[t(`code`,{class:`language-ts`},`/**
 * 示例URL:https://d.10jqka.com.cn/v4/line/hs_000776/01/2020.js
 * @param hsStockCode
 * @param year
 * @returns
 */
async function queryYearHsStockDaylinesByThxHsStockCode(
  hsStockCode: string,
  year: number,
): Promise<{ data: string }> {
  console.log(
    "queryYearHsStockDaylinesByThxHsStockCode url:",
    \`https://d.10jqka.com.cn/v4/line/hs_\${hsStockCode}/01/\${year}.js\`,
  );
  return await axios
    .get(\`https://d.10jqka.com.cn/v4/line/hs_\${hsStockCode}/01/\${year}.js\`)
    // .get(\`https://d.10jqka.com.cn/v4/line/zs_1A0001/01/\${year}.js\`)
    .then((response) => {
      let { data: jsonpStr } = response;
      //   console.log(" jsonpStr:", jsonpStr);
      //   let REG_FundStr = /\\((?<jsonStr>)$\\)/;
      let REG_FundStr = /\\((?<jsonStr>.+)\\)$/;
      //   (/\\((.*)\\)$/).exec(\` quotebridge_v4_line_zs_1A0001_01_last({a:"s"})\`)
      let regResult = REG_FundStr.exec(jsonpStr);
      let { jsonStr } = regResult?.groups || {};
      //   console.log("regResult:", regResult, REG_FundStr, jsonStr);
      try {
        let jsonData = JSON.parse(jsonStr);
        return jsonData;
      } catch (e) {}
      return jsonStr;
    });
}
`)],-1)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};