"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$advanceCooldown",description:"$advanceCooldown will set a cooldown for a given ID.",id:"advanceCooldown"},v=void 0,g={unversionedId:"functions/variables-related/advanceCooldown",id:"version-6.4.0/functions/variables-related/advanceCooldown",title:"$advanceCooldown",description:"$advanceCooldown will set a cooldown for a given ID.",source:"@site/versioned_docs/version-6.4.0/functions/variables-related/advanceCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/advanceCooldown",permalink:"/fr/docs/functions/variables-related/advanceCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$advanceCooldown",description:"$advanceCooldown will set a cooldown for a given ID.",id:"advanceCooldown"},sidebar:"docs",previous:{title:"$toUpperCase",permalink:"/fr/docs/functions/util-related/toUpperCase"},next:{title:"$channelCooldown",permalink:"/fr/docs/functions/variables-related/channelCooldown"}},k={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],w={toc:b},y="wrapper";function N(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(y,u(s(s({},w),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$advanceCooldown")," will set a cooldown for a given ID."),(0,a.kt)("h2",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$advanceCooldown[time;id;errorMessage]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,a.kt)("inlineCode",{parentName:"li"},"$cooldown")," function by using ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the\nfollowing below.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,a.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Text to be separated."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Text to be separated."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"errorMessage"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Error message to be displayed when there's cooldown remaining."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will set a cooldown for the guild of where you execute the command in and return the remaining cooldown time:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'advanceCooldown',\n    code: `\n  $advanceCooldown[2m;$guildID;]\n  `\n});\n")))}N.isMDXComponent=!0}}]);