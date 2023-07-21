"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>O,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$clientOwnerIDs",description:"$clientOwnerIDs retournera l'identifiant d'utilisateur du propri\xe9taire du bot (ou de plusieurs personnes si vous avez une \xe9quipe).",id:"clientOwnerIDs"},O=void 0,v={unversionedId:"functions/client-related/clientOwnerIDs",id:"version-6.4.0/functions/client-related/clientOwnerIDs",title:"$clientOwnerIDs",description:"$clientOwnerIDs retournera l'identifiant d'utilisateur du propri\xe9taire du bot (ou de plusieurs personnes si vous avez une \xe9quipe).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientOwnerIDs.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientOwnerIDs",permalink:"/fr/docs/functions/client-related/clientOwnerIDs",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$clientOwnerIDs",description:"$clientOwnerIDs retournera l'identifiant d'utilisateur du propri\xe9taire du bot (ou de plusieurs personnes si vous avez une \xe9quipe).",id:"clientOwnerIDs"},sidebar:"docs",previous:{title:"$clientMutualGuilds",permalink:"/fr/docs/functions/client-related/clientMutualGuilds"},next:{title:"$clientPrefixes",permalink:"/fr/docs/functions/client-related/clientPrefixes"}},b={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:y},w="wrapper";function k(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(w,d(p(p({},g),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$clientOwnerIDs")," retournera l'identifiant d'utilisateur du propri\xe9taire du bot (ou de plusieurs personnes si vous avez une \xe9quipe)."),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$clientOwnerIDs[s\xe9parateur?]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"s\xe9parateur?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"S\xe9parateur pour s\xe9parer les identifiants d'utilisateur. (Par d\xe9faut\xa0: ",(0,n.kt)("inlineCode",{parentName:"td"},","),")"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Ceci retournera votre identifiant utilisateur (dans une grande partie des cas) :"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientOwnerIDs',\n    code: `\n  $clientOwnerIDs\n  `\n});\n")))}k.isMDXComponent=!0}}]);