"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[91167],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(t),s=o,f=u["".concat(c,".").concat(s)]||u[s]||p[s]||a;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},17201:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>v,default:()=>E,frontMatter:()=>f,metadata:()=>j,toc:()=>b});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&m(e,t,r[t]);if(l)for(var t of l(r))d.call(r,t)&&m(e,t,r[t]);return e},p=(e,r)=>a(e,i(r)),s=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$randomEmoji",description:"$randomEmoji devolver\xe1 un ID de emoji aleatorio.",id:"randomEmoji"},v=void 0,j={unversionedId:"functions/util-related/randomEmoji",id:"version-6.4.0/functions/util-related/randomEmoji",title:"$randomEmoji",description:"$randomEmoji devolver\xe1 un ID de emoji aleatorio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/randomEmoji.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/randomEmoji",permalink:"/es/docs/functions/util-related/randomEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$randomEmoji",description:"$randomEmoji devolver\xe1 un ID de emoji aleatorio.",id:"randomEmoji"},sidebar:"docs",previous:{title:"$randomChannelID",permalink:"/es/docs/functions/util-related/randomChannelID"},next:{title:"$randomRoleID",permalink:"/es/docs/functions/util-related/randomRoleID"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:b},g="wrapper";function E(e){var r=e,{components:t}=r,o=s(r,["components"]);return(0,n.kt)(g,p(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$randomEmoji")," devolver\xe1 un ID emoji aleatorio."),(0,n.kt)("h2",u({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$randomEmoji\n")),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 un ID de emoji aleatorio de tu gremio:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'randomEmoji',\n    code: `\n  $randomEmoji\n  `\n});\n")))}E.isMDXComponent=!0}}]);