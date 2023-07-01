"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26243],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=r,g=c["".concat(u,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},20368:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"$channelCount",description:"$channelCount will return the amount of channels of a given type.",id:"channelCount"},o=void 0,i={unversionedId:"functions/info-related/channelCount",id:"version-6.3.0/functions/info-related/channelCount",title:"$channelCount",description:"$channelCount will return the amount of channels of a given type.",source:"@site/versioned_docs/version-6.3.0/functions/info-related/channelCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/channelCount",permalink:"/docs/functions/info-related/channelCount",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688252495,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"$channelCount",description:"$channelCount will return the amount of channels of a given type.",id:"channelCount"},sidebar:"docs",previous:{title:"$channelCategoryID",permalink:"/docs/functions/info-related/channelCategoryID"},next:{title:"$channelID",permalink:"/docs/functions/info-related/channelID"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:p},c="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelCount")," will return the amount of channels of a given type."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$channelCount[guildID?;type?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the guild where the channels will be counted from."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type you want the amount of to be returned, listed below."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Channel Types ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Channel Type"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Channel"),(0,r.kt)("td",{parentName:"tr",align:null},"Text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Voice Channel"),(0,r.kt)("td",{parentName:"tr",align:null},"Voice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"Category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stage Channel"),(0,r.kt)("td",{parentName:"tr",align:null},"Stage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private Thread"),(0,r.kt)("td",{parentName:"tr",align:null},"PrivateThread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Public Thread"),(0,r.kt)("td",{parentName:"tr",align:null},"PublicThread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Forum"),(0,r.kt)("td",{parentName:"tr",align:null},"Forum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Announcement Thread"),(0,r.kt)("td",{parentName:"tr",align:null},"AnnouncementThread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Announcement Channel"),(0,r.kt)("td",{parentName:"tr",align:null},"Announcement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Home"),(0,r.kt)("td",{parentName:"tr",align:null},"GuildDirectory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NSFW Channel"),(0,r.kt)("td",{parentName:"tr",align:null},"NSFW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Direct Message"),(0,r.kt)("td",{parentName:"tr",align:null},"DM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"All Channel Types"),(0,r.kt)("td",{parentName:"tr",align:null},"all"))))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return the amount of Voice Channels in your guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'channelCount',\n    code: `\n  $channelCount[$guildID;Voice]\n  `\n});\n")))}m.isMDXComponent=!0}}]);