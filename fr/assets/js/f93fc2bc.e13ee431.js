"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(o,".").concat(d)]||p[d]||u[d]||s;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>k,frontMatter:()=>g,metadata:()=>h,toc:()=>v});var a=n(3905),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>s(e,l(t)),d=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const g={title:"$messageAttachment",description:"$messageAttachment will return a message attachment depending on the given index.",id:"messageAttachment"},f=void 0,h={unversionedId:"functions/message-related/messageAttachment",id:"version-6.4.0/functions/message-related/messageAttachment",title:"$messageAttachment",description:"$messageAttachment will return a message attachment depending on the given index.",source:"@site/versioned_docs/version-6.4.0/functions/message-related/messageAttachment.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/messageAttachment",permalink:"/fr/docs/functions/message-related/messageAttachment",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$messageAttachment",description:"$messageAttachment will return a message attachment depending on the given index.",id:"messageAttachment"},sidebar:"docs",previous:{title:"$message",permalink:"/fr/docs/functions/message-related/message"},next:{title:"$messageFlags",permalink:"/fr/docs/functions/message-related/messageFlags"}},y={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:v},O="wrapper";function k(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(O,u(p(p({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$messageAttachment")," will return a message attachment depending on the given index."),(0,a.kt)("h2",p({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$messageAttachment[index?]\n")),(0,a.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"index?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The index of which message attachment will be returned."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return your given attachment:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'messageAttachment',\n    code: `\n  You had the following attachment in your message: $messageAttachment\n  `\n});\n")))}k.isMDXComponent=!0}}]);