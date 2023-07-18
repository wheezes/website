"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>C,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$argsCount",description:"$argsCount will return the amount of given arguments.",id:"argsCount"},g=void 0,y={unversionedId:"functions/misc-related/argsCount",id:"version-6.4.0/functions/misc-related/argsCount",title:"$argsCount",description:"$argsCount will return the amount of given arguments.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/argsCount.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/argsCount",permalink:"/uk/docs/functions/misc-related/argsCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689685664,formattedLastUpdatedAt:"18 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$argsCount",description:"$argsCount will return the amount of given arguments.",id:"argsCount"},sidebar:"docs",previous:{title:"$appendFile",permalink:"/uk/docs/functions/misc-related/appendFile"},next:{title:"$closeTicket",permalink:"/uk/docs/functions/misc-related/closeTicket"}},v={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:b},w="wrapper";function C(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(w,f(p(p({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$argsCount")," will return the amount of given arguments."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$argsCount\n")),(0,n.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the amount of arguments in your message, for example, ",(0,n.kt)("inlineCode",{parentName:"p"},"[prefix]argsCount Hello Bye")," will return two:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'argsCount',\n    code: `\n  $argsCount\n  `\n});\n")))}C.isMDXComponent=!0}}]);