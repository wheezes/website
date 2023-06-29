"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"$defaultMessageNotifications",description:"Return the guild default message notification level."},a=void 0,s={unversionedId:"functions/defaultmessagenotifications",id:"version-5.5.5/functions/defaultmessagenotifications",title:"$defaultMessageNotifications",description:"Return the guild default message notification level.",source:"@site/versioned_docs/version-5.5.5/functions/defaultmessagenotifications.md",sourceDirName:"functions",slug:"/functions/defaultmessagenotifications",permalink:"/docs/5.5.5/functions/defaultmessagenotifications",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688059645,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{title:"$defaultMessageNotifications",description:"Return the guild default message notification level."},sidebar:"docs",previous:{title:"$deafenUser",permalink:"/docs/5.5.5/functions/deafenuser"},next:{title:"$deleteApplicationCommand",permalink:"/docs/5.5.5/functions/deleteapplicationcommand"}},l={},c=[{value:"Usage:",id:"usage",level:2}],u={toc:c},f="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the level of a server'S default message notifications."),(0,r.kt)("p",null,"Returns either ",(0,r.kt)("inlineCode",{parentName:"p"},"Mentions")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"All"),"."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$defaultMessageNotifications[guildID (optional)]")),(0,r.kt)("h2",{id:"usage"},"Usage:"),(0,r.kt)("p",null,"Returning the default message notifications type of the current guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'bot.command({\nname: "notifications",\ncode: `\nNotifications type of this server: $defaultMessageNotifications\n`\n})\n')),(0,r.kt)("p",null,"Returning the default message notifications type of another guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'bot.command({\nname: "notifications",\ncode: `\nNotifications type of the server $serverName[773352845738115102]: \n$defaultMessageNotifications[773352845738115102]\n`\n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example from the Official Aoi.JS Server =&gt; $defaultMessageNotifications would return &quot;Mentions&quot; on this guild",src:n(34627).Z,width:"1065",height:"386"})))}p.isMDXComponent=!0},34627:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image (29) (1) (1) (1) (2) (3) (2) (3)-cfd672f3fdc8287c5d12dcf25a803f3c.png"}}]);