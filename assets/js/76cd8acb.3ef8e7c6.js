"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>D,frontMatter:()=>g,metadata:()=>y,toc:()=>b});var r=n(3905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&d(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$guildSystemChannelID",description:"$guildSystemChannelID will return the ID of the guild's system channel.",id:"guildSystemChannelID"},f=void 0,y={unversionedId:"functions/guild-related/guildSystemChannelID",id:"version-6.4.0/functions/guild-related/guildSystemChannelID",title:"$guildSystemChannelID",description:"$guildSystemChannelID will return the ID of the guild's system channel.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/guildSystemChannelID.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildSystemChannelID",permalink:"/docs/functions/guild-related/guildSystemChannelID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"Jul 21, 2023",frontMatter:{title:"$guildSystemChannelID",description:"$guildSystemChannelID will return the ID of the guild's system channel.",id:"guildSystemChannelID"},sidebar:"docs",previous:{title:"$guildSplash",permalink:"/docs/functions/guild-related/guildSplash"},next:{title:"$guildVerificationLevel",permalink:"/docs/functions/guild-related/guildVerificationLevel"}},h={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},O="wrapper";function D(e){var t=e,{components:n}=t,l=m(t,["components"]);return(0,r.kt)(O,p(c(c({},v),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildSystemChannelID")," will return the ID of the guild's system channel."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$guildSystemChannelID[guildID?]\n")),(0,r.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"guildID?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The guild ID."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the guild's system channel ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildSystemChannelID',\n    code: `\n  $guildSystemChannelID[$guildID]\n  `\n});\n")))}D.isMDXComponent=!0}}]);