"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var o=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>i(e,l(t)),d=(e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n};const f={title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",id:"mentionedRolesCount"},y=void 0,v={unversionedId:"functions/util-related/mentionedRolesCount",id:"version-6.4.0/functions/util-related/mentionedRolesCount",title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/mentionedRolesCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedRolesCount",permalink:"/uk/docs/functions/util-related/mentionedRolesCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",id:"mentionedRolesCount"},sidebar:"docs",previous:{title:"$mentionedRoles",permalink:"/uk/docs/functions/util-related/mentionedRoles"},next:{title:"$mentionedUsersCount",permalink:"/uk/docs/functions/util-related/mentionedUsersCount"}},b={},g=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:g},h="wrapper";function w(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,o.kt)(h,m(p(p({},O),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$mentionedRolesCount")," will return the amount of role mentions within a message."),(0,o.kt)("h2",p({},{id:"usage"}),"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$mentionedRolesCount\n")),(0,o.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,o.kt)("p",null,"This will return the amount of role mentions in the given text:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedRolesCount',\n    code: `\n  You have: $mentionedRolesCount role mentions in your message!\n`\n});\n")))}w.isMDXComponent=!0}}]);