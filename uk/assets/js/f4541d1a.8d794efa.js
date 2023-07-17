"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||c;return r?o.createElement(m,l(l({ref:t},s),{},{components:r})):o.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[f]="string"==typeof e?e:n,l[1]=a;for(var p=2;p<c;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var o=r(3905),n=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>c(e,l(t)),d=(e,t)=>{var r={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r};const m={title:"$getRoleColor",description:"Gets the color of the specified role ID"},y=void 0,g={unversionedId:"functions/getrolecolor",id:"version-5.5.5/functions/getrolecolor",title:"$getRoleColor",description:"Gets the color of the specified role ID",source:"@site/versioned_docs/version-5.5.5/functions/getrolecolor.md",sourceDirName:"functions",slug:"/functions/getrolecolor",permalink:"/uk/docs/5.5.5/functions/getrolecolor",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$getRoleColor",description:"Gets the color of the specified role ID"},sidebar:"docs",previous:{title:"$getReactions",permalink:"/uk/docs/5.5.5/functions/getreactions"},next:{title:"$getServerInvite",permalink:"/uk/docs/5.5.5/functions/getserverinvite"}},v={},b=[],O={toc:b},h="wrapper";function j(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,o.kt)(h,u(f(f({},O),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the hex color of the specified role ID"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$getRoleColor[role ID]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "roleColor",\ncode: `Role Color: $getRoleColor[778317687910694922]`\n})\n')))}j.isMDXComponent=!0}}]);