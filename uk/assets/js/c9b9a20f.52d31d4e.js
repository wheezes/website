"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[48658],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,v=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return t?n.createElement(v,s(s({ref:r},p),{},{components:t})):n.createElement(v,s({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30050:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>d,default:()=>E,frontMatter:()=>v,metadata:()=>y,toc:()=>j});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>i(e,s(r)),m=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const v={title:"$serverEmojis",description:"Returns all the server emojis"},d=void 0,y={unversionedId:"functions/serveremojis",id:"version-5.5.5/functions/serveremojis",title:"$serverEmojis",description:"Returns all the server emojis",source:"@site/versioned_docs/version-5.5.5/functions/serveremojis.md",sourceDirName:"functions",slug:"/functions/serveremojis",permalink:"/uk/docs/5.5.5/functions/serveremojis",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$serverEmojis",description:"Returns all the server emojis"},sidebar:"docs",previous:{title:"$serverEmojiExists",permalink:"/uk/docs/5.5.5/functions/serveremojiexists"},next:{title:"$serverExists",permalink:"/uk/docs/5.5.5/functions/serverexists"}},b={},j=[],O={toc:j},g="wrapper";function E(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(g,f(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns every emoji the current server has"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: serverEmojis",\ncode: `All Server Emojis: $serverEmojis`\n})\n')))}E.isMDXComponent=!0}}]);