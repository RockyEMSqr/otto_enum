function n(n){return Object.keys(n).filter(function(n){return isNaN(parseInt(n,10))})}function t(n){return Object.keys(n).filter(function(n){return 1==n.split(" ").length}).map(function(n){return parseInt(n,10)}).filter(function(n){return!isNaN(n)})}function r(n){return t(n).map(function(t){return{name:n[t],value:t}})}function e(n,t){return n[t]}export{e as getName,n as getNames,r as getNamesAndValues,t as getValues};
//# sourceMappingURL=index.mjs.map
