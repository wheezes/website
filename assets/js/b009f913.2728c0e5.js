"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8751],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22426:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>a(e,s(r)),m=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$messageID",description:"Returns the user's message ID"},g=void 0,y={unversionedId:"functions/usermessageid",id:"version-5.5.5/functions/usermessageid",title:"$messageID",description:"Returns the user's message ID",source:"@site/versioned_docs/version-5.5.5/functions/usermessageid.md",sourceDirName:"functions",slug:"/functions/usermessageid",permalink:"/docs/5.5.5/functions/usermessageid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"$messageID",description:"Returns the user's message ID"},sidebar:"docs",previous:{title:"$userLeaderboard",permalink:"/docs/5.5.5/functions/userleaderboard"},next:{title:"$username",permalink:"/docs/5.5.5/functions/username"}},b={},O=[],v={toc:O},j="wrapper";function h(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(j,f(p(p({},v),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the message ID of the message that triggered the command"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "messageID",\ncode: `Your message ID: $messageID`\n//Message ID would be from !messageID\n})\n')))}h.isMDXComponent=!0}}]);