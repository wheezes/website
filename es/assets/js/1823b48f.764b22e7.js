"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44379],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(s)for(var t of s(n))l.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>a(e,i(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$nodeVersion",description:"$nodeVersion devolver\xe1 su versi\xf3n actual de node.js.",id:"nodeVersion"},v=void 0,y={unversionedId:"functions/misc-related/nodeVersion",id:"version-6.4.0/functions/misc-related/nodeVersion",title:"$nodeVersion",description:"$nodeVersion devolver\xe1 su versi\xf3n actual de node.js.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/nodeVersion.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/nodeVersion",permalink:"/es/docs/functions/misc-related/nodeVersion",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$nodeVersion",description:"$nodeVersion devolver\xe1 su versi\xf3n actual de node.js.",id:"nodeVersion"},sidebar:"docs",previous:{title:"$noMentionMessage",permalink:"/es/docs/functions/misc-related/noMentionMessage"},next:{title:"$packageDependencies",permalink:"/es/docs/functions/misc-related/packageDependencies"}},b={},O=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:O},j="wrapper";function k(e){var n=e,{components:t}=n,o=f(n,["components"]);return(0,r.kt)(j,u(p(p({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$nodeVersion")," devolver\xe1 su versi\xf3n actual de node.js."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$nodeVersion\n")),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 la versi\xf3n actual de node.js en la que se est\xe1 ejecutando tu bot:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "nodeVersion",\n    code: `\n    $nodeVersion\n    `\n});\n')))}k.isMDXComponent=!0}}]);