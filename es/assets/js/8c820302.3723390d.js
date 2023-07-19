"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[91113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(r),u=o,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||l;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var m=2;m<l;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>E,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var n=r(3905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>l(e,a(t)),u=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$removeSplitTextElement",description:"$removeSplitTextElement eliminar\xe1 un elemento espec\xedfico de texto dividido.",id:"removeSplitTextElement"},v=void 0,y={unversionedId:"functions/misc-related/removeSplitTextElement",id:"version-6.4.0/functions/misc-related/removeSplitTextElement",title:"$removeSplitTextElement",description:"$removeSplitTextElement eliminar\xe1 un elemento espec\xedfico de texto dividido.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/removeSplitTextElement.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/removeSplitTextElement",permalink:"/es/docs/functions/misc-related/removeSplitTextElement",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787809,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$removeSplitTextElement",description:"$removeSplitTextElement eliminar\xe1 un elemento espec\xedfico de texto dividido.",id:"removeSplitTextElement"},sidebar:"docs",previous:{title:"$removeObjectProperty",permalink:"/es/docs/functions/misc-related/removeObjectProperty"},next:{title:"$removeTextSplitElement",permalink:"/es/docs/functions/misc-related/removeTextSplitElement"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},x="wrapper";function E(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(x,d(s(s({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$removeSplitTextElement")," eliminar\xe1 un elemento de texto dividido espec\xedfico."),(0,n.kt)("h2",s({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$removeSplitTextElement[...elementos]\n")),(0,n.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"...elementos"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Dividir elementos de texto a eliminar."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadera")))),(0,n.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,'Esto eliminar\xe1 la palabra "bye" del arreglo:'),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "removeSplitTextElement",\n    code: `\n    $removeSplitTextElement[bye]\n    $textSplit[hello, bye, aoi.js;, ]\n    `\n});\n')))}E.isMDXComponent=!0}}]);