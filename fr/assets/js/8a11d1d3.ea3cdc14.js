"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$pinsUpdate",description:"$pinsUpdate contient des donn\xe9es pour le salon dans lequel les messages \xe9pingl\xe9s ont \xe9t\xe9 mis \xe0 jour. (\xe9v\xe9nement channelPinsUpdate)",id:"pinsUpdate"},g=void 0,b={unversionedId:"functions/event-related/pinsUpdate",id:"version-6.4.0/functions/event-related/pinsUpdate",title:"$pinsUpdate",description:"$pinsUpdate contient des donn\xe9es pour le salon dans lequel les messages \xe9pingl\xe9s ont \xe9t\xe9 mis \xe0 jour. (\xe9v\xe9nement channelPinsUpdate)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/pinsUpdate.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/pinsUpdate",permalink:"/fr/docs/functions/event-related/pinsUpdate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$pinsUpdate",description:"$pinsUpdate contient des donn\xe9es pour le salon dans lequel les messages \xe9pingl\xe9s ont \xe9t\xe9 mis \xe0 jour. (\xe9v\xe9nement channelPinsUpdate)",id:"pinsUpdate"},sidebar:"docs",previous:{title:"$oldVariable",permalink:"/fr/docs/functions/event-related/oldVariable"},next:{title:"$reactionData",permalink:"/fr/docs/functions/event-related/reactionData"}},v={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],k={toc:y},O="wrapper";function h(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,u(d(d({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$pinsUpdate")," contient des donn\xe9es pour le salon dans lequel les messages \xe9pingl\xe9s ont \xe9t\xe9 mis \xe0 jour. (\xe9v\xe9nement channelPinsUpdate)"),(0,r.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$pinsUpdate[option]\n")),(0,r.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Option \xe0 r\xe9cup\xe9rer. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"time"),"  ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"channelID")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"channelName")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},"channelMention")," ",(0,r.kt)("br",null)," 5. ",(0,r.kt)("strong",{parentName:"td"},"guildID")," ",(0,r.kt)("br",null)," 6. ",(0,r.kt)("strong",{parentName:"td"},"guildName")," ",(0,r.kt)("br",null)," 7. ",(0,r.kt)("strong",{parentName:"td"},"messageID")," ",(0,r.kt)("br",null)," 8. ",(0,r.kt)("strong",{parentName:"td"},"messageContent")),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")))))}h.isMDXComponent=!0}}]);