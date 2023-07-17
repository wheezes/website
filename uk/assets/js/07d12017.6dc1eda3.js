"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62815:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"Voice"},v=void 0,y={unversionedId:"class/Voice",id:"version-5.5.5/class/Voice",title:"Voice",description:"Usage",source:"@site/versioned_docs/version-5.5.5/class/Voice.md",sourceDirName:"class",slug:"/class/Voice",permalink:"/uk/docs/5.5.5/class/Voice",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"Voice"}},g={},O=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"joinVc()",id:"joinvc",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Example",id:"example",level:4},{value:"readonly serversSize",id:"readonly-serverssize",level:3},{value:"Usage",id:"usage-2",level:4}],b={toc:O},h="wrapper";function k(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,d(u(u({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"Initialise The Voice Class To Enable Aoijs Music System \n")),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-typescript"}),"new Voice(client:Bot,ytdlOptions:YTDL,scOptions:SCDL,cacheOptions:CacheOptions)\n")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/uk/docs/5.5.5/options/voiceOptions"}),"VoiceOptions")),(0,n.kt)("h2",u({},{id:"methods"}),"Methods"),(0,n.kt)("h3",u({},{id:"joinvc"}),"joinVc()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Joins The Voice Channel")),(0,n.kt)("h4",u({},{id:"usage-1"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-typescript"})," Voice.joinVc(voiceChannel:VoiceChannel,textChannel:TextChannel); \n")),(0,n.kt)("h4",u({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"})," Voice.joinVc(member.voice.channel,channel) \n")),(0,n.kt)("h3",u({},{id:"readonly-serverssize"}),"readonly serversSize"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gives Count Of All Voice Connections")),(0,n.kt)("h4",u({},{id:"usage-2"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-typescript"})," Voice.serversSize \n")),(0,n.kt)("p",null,"Returns: ",(0,n.kt)("strong",{parentName:"p"},"number")))}k.isMDXComponent=!0}}]);