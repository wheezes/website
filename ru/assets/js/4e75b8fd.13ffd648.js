"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(u,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>y,toc:()=>C});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$guildCommunityUpdatesChannelID",description:"$guildCommunityUpdatesChannelID will return the guild's community updates channel.",id:"guildCommunityUpdatesChannelID"},f=void 0,y={unversionedId:"functions/guild-related/guildCommunityUpdatesChannelID",id:"version-6.4.0/functions/guild-related/guildCommunityUpdatesChannelID",title:"$guildCommunityUpdatesChannelID",description:"$guildCommunityUpdatesChannelID will return the guild's community updates channel.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/guildCommunityUpdatesChannelID.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildCommunityUpdatesChannelID",permalink:"/ru/docs/functions/guild-related/guildCommunityUpdatesChannelID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$guildCommunityUpdatesChannelID",description:"$guildCommunityUpdatesChannelID will return the guild's community updates channel.",id:"guildCommunityUpdatesChannelID"},sidebar:"docs",previous:{title:"$guildChannels",permalink:"/ru/docs/functions/guild-related/guildChannels"},next:{title:"$guildContentFilter",permalink:"/ru/docs/functions/guild-related/guildContentFilter"}},h={},C=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:C},v="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,c(s(s({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildCommunityUpdatesChannelID")," will return the guild's community updates channel."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$guildCommunityUpdatesChannelID[guildID?]\n")),(0,r.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"guildID?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The ID of the guild."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the community updates channel ID of the current guild (if any):"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildCommunityUpdatesChannelID',\n    code: `\n  $guildCommunityUpdatesChannelID[$guildID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);