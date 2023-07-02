"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,y=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"$messageType",description:"Returns the type of this message."},s=void 0,l={unversionedId:"functions/messagetype",id:"version-5.5.5/functions/messagetype",title:"$messageType",description:"Returns the type of this message.",source:"@site/versioned_docs/version-5.5.5/functions/messagetype.md",sourceDirName:"functions",slug:"/functions/messagetype",permalink:"/docs/5.5.5/functions/messagetype",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688312916,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$messageType",description:"Returns the type of this message."},sidebar:"docs",previous:{title:"$messageSlice",permalink:"/docs/5.5.5/functions/messageslice"},next:{title:"$messageURL",permalink:"/docs/5.5.5/functions/messageurl"}},i={},p=[{value:"Usage:",id:"usage",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The type of the current message, e.g. DEFAULT. Here are the available message types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DEFAULT"),(0,a.kt)("li",{parentName:"ul"},"RECIPIENT","_","ADD"),(0,a.kt)("li",{parentName:"ul"},"RECIPIENT","_","REMOVE"),(0,a.kt)("li",{parentName:"ul"},"CALL"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","NAME","_","CHANGE"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","ICON","_","CHANGE"),(0,a.kt)("li",{parentName:"ul"},"PINS","_","ADD"),(0,a.kt)("li",{parentName:"ul"},"GUILD","_","MEMBER","_","JOIN"),(0,a.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION"),(0,a.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","1"),(0,a.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","2"),(0,a.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","3"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","FOLLOW","_","ADD"),(0,a.kt)("li",{parentName:"ul"},"GUILD","_","DISCOVERY","_","DISQUALIFIED"),(0,a.kt)("li",{parentName:"ul"},"GUILD","_","DISCOVERY","_","REQUALIFIED")),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "$alwaysExecute",\ncode: `\nThe server has reached boost level 3! \ud83c\udf89\n$onlyIf[$messageType==USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3;]\n')))}m.isMDXComponent=!0}}]);