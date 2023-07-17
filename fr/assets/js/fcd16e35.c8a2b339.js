"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=l(r),d=o,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))l.call(t,r)&&f(e,r,t[r]);return e},p=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$shuffleQueue"},y=void 0,b={unversionedId:"functions/shufflequeue",id:"version-5.5.5/functions/shufflequeue",title:"$shuffleQueue",description:"This function shuffles the queue to play in a randomized list",source:"@site/versioned_docs/version-5.5.5/functions/shufflequeue.md",sourceDirName:"functions",slug:"/functions/shufflequeue",permalink:"/fr/docs/5.5.5/functions/shufflequeue",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 juil. 2023",frontMatter:{title:"$shuffleQueue"},sidebar:"docs",previous:{title:"$shardID",permalink:"/fr/docs/5.5.5/functions/shardid"},next:{title:"$skipSong",permalink:"/fr/docs/5.5.5/functions/skipsong"}},v={},O=[],h={toc:O},g="wrapper";function j(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(g,p(s(s({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function shuffles the queue to play in a randomized list"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "shuffle",\ncode: `$shuffleQueue I\'ve shuffled the queue!`\n})\n')))}j.isMDXComponent=!0}}]);