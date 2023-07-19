"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[34604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$splitText",description:"$splitText \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 $textSplit \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0430.",id:"splitText"},b=void 0,y={unversionedId:"functions/util-related/splitText",id:"version-6.4.0/functions/util-related/splitText",title:"$splitText",description:"$splitText \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 $textSplit \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/splitText.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/splitText",permalink:"/ru/docs/functions/util-related/splitText",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787809,formattedLastUpdatedAt:"19 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$splitText",description:"$splitText \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 $textSplit \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0430.",id:"splitText"},sidebar:"docs",previous:{title:"$spliceTextJoin",permalink:"/ru/docs/functions/util-related/spliceTextJoin"},next:{title:"$stringEndsWith",permalink:"/ru/docs/functions/util-related/stringEndsWith"}},g={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],x={toc:v},k="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,d(u(u({},x),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$splitText")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 $textSplit \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0430."),(0,r.kt)("h2",u({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$splitText[index]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0438\u043d\u0434\u0435\u043a\u0441"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0418\u043d\u0434\u0435\u043a\u0441 ",(0,r.kt)("inlineCode",{parentName:"td"},"$textSplit")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"aoi.js")," , \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u044d\u0442\u043e \u0432\u0442\u043e\u0440\u043e\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'splitText',\n    code: `\n  $splitText[2]\n  $textSplit[@akarui/aoi.db//aoi.js;//]\n  `\n});\n")))}O.isMDXComponent=!0}}]);