"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5982],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return t?a.createElement(y,l(l({ref:r},u),{},{components:t})):a.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79649:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>b,toc:()=>g});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&u(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>o(e,l(r)),m=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const y={title:"$arraySort",description:"$arraySort va trier un tableau donn\xe9.",id:"arraySort"},f=void 0,b={unversionedId:"functions/array-related/arraySort",id:"version-6.4.0/functions/array-related/arraySort",title:"$arraySort",description:"$arraySort va trier un tableau donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arraySort.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arraySort",permalink:"/fr/docs/functions/array-related/arraySort",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$arraySort",description:"$arraySort va trier un tableau donn\xe9.",id:"arraySort"},sidebar:"docs",previous:{title:"$arraySome",permalink:"/fr/docs/functions/array-related/arraySome"},next:{title:"$arraySplice",permalink:"/fr/docs/functions/array-related/arraySplice"}},v={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:g},O="wrapper";function N(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(O,d(s(s({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arraySort")," va trier un tableau donn\xe9."),(0,a.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arraySort[nom;type?]\n")),(0,a.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Type de tri ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"asc")," (croissant) 2. ",(0,a.kt)("strong",{parentName:"td"},"dsc")," (d\xe9croissant)"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-sort",\n    code: `\n  $arrayJoin[tableau;, ]\n  $arraySort[tableau;asc]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n});\n')))}N.isMDXComponent=!0}}]);