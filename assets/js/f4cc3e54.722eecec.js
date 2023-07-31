"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44316],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),u=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(d.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(d,".").concat(m)]||p[m]||s[m]||a;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41533:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>g,default:()=>w,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&c(e,t,r[t]);return e},s=(e,r)=>a(e,l(r)),m=(e,r)=>{var t={};for(var n in e)d.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$guildRandomID",description:"$guildRandomID will return a random guild ID.",id:"guildRandomID"},g=void 0,y={unversionedId:"functions/guild-related/guildRandomID",id:"version-6.4.0/functions/guild-related/guildRandomID",title:"$guildRandomID",description:"$guildRandomID will return a random guild ID.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/guildRandomID.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildRandomID",permalink:"/docs/functions/guild-related/guildRandomID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{title:"$guildRandomID",description:"$guildRandomID will return a random guild ID.",id:"guildRandomID"},sidebar:"docs",previous:{title:"$guildPreferredLocale",permalink:"/docs/functions/guild-related/guildPreferredLocale"},next:{title:"$guildRoles",permalink:"/docs/functions/guild-related/guildRoles"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:v},D="wrapper";function w(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(D,s(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildRandomID")," will return a random guild ID."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildRandomID\n")),(0,n.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return a random guild if of the guild's your bot is a member of:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildRandomID',\n    code: `\n  $guildRandomID\n  `\n});\n")))}w.isMDXComponent=!0}}]);