"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13055],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),v=a,d=u["".concat(c,".").concat(v)]||u[v]||f[v]||o;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2947:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>m,default:()=>w,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(s)for(var t of s(r))l.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>o(e,i(r)),v=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$setServerVar",description:"Sets a server variable value"},m=void 0,b={unversionedId:"functions/setservervar",id:"version-5.5.5/functions/setservervar",title:"$setServerVar",description:"Sets a server variable value",source:"@site/versioned_docs/version-5.5.5/functions/setservervar.md",sourceDirName:"functions",slug:"/functions/setservervar",permalink:"/uk/docs/5.5.5/functions/setservervar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$setServerVar",description:"Sets a server variable value"},sidebar:"docs",previous:{title:"$setRoles",permalink:"/uk/docs/5.5.5/functions/setroles"},next:{title:"$setStatus",permalink:"/uk/docs/5.5.5/functions/setstatus"}},y={},O=[],g={toc:O},j="wrapper";function w(e){var r=e,{components:t}=r,a=v(r,["components"]);return(0,n.kt)(j,f(u(u({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function sets a value to a variable for the current/specified guild"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$setServerVar[variable;value;guild id (optional)]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "setServerVar",\ncode: `Set a server var\n$setServerVar[members;56]`\n})\n')))}w.isMDXComponent=!0}}]);