"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e},s=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$newGuild",description:"$newGuild contient les donn\xe9es du serveur apr\xe8s la mise \xe0 jour, il serait bon de v\xe9rifier l'option partielle avant d'acc\xe9der \xe0 une propri\xe9t\xe9. (\xe9v\xe8nement guildUpdate)",id:"newGuild"},v=void 0,b={unversionedId:"functions/event-related/newGuild",id:"version-6.4.0/functions/event-related/newGuild",title:"$newGuild",description:"$newGuild contient les donn\xe9es du serveur apr\xe8s la mise \xe0 jour, il serait bon de v\xe9rifier l'option partielle avant d'acc\xe9der \xe0 une propri\xe9t\xe9. (\xe9v\xe8nement guildUpdate)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/newGuild.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/newGuild",permalink:"/fr/docs/functions/event-related/newGuild",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787809,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"$newGuild",description:"$newGuild contient les donn\xe9es du serveur apr\xe8s la mise \xe0 jour, il serait bon de v\xe9rifier l'option partielle avant d'acc\xe9der \xe0 une propri\xe9t\xe9. (\xe9v\xe8nement guildUpdate)",id:"newGuild"},sidebar:"docs",previous:{title:"$newChannel",permalink:"/fr/docs/functions/event-related/newChannel"},next:{title:"$newMember",permalink:"/fr/docs/functions/event-related/newMember"}},y={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],O={toc:g},w="wrapper";function k(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(w,s(d(d({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$newGuild")," contient les donn\xe9es du serveur apr\xe8s la mise \xe0 jour, il serait bon de v\xe9rifier l'option partielle avant d'acc\xe9der \xe0 une propri\xe9t\xe9. (\xe9v\xe8nement guildUpdate)"),(0,r.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$newGuild[option]\n")),(0,r.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Option \xe0 r\xe9cup\xe9rer."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")))))}k.isMDXComponent=!0}}]);