function t(t){return Object.keys(t).filter(t=>isNaN(parseInt(t,10)))}function e(t){return Object.keys(t).filter(t=>1==t.split(" ").length).map(t=>parseInt(t,10)).filter(t=>!isNaN(t))}function n(t){return e(t).map(e=>({name:t[e],value:e}))}function r(t,e){return t[e]}export{r as getName,t as getNames,n as getNamesAndValues,e as getValues};
//# sourceMappingURL=index.modern.mjs.map
