"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>x,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$advancedTextSplit",description:"$advancedTextSplit divisera plusieurs arguments donn\xe9s.",id:"advancedTextSplit"},v=void 0,g={unversionedId:"functions/misc-related/advancedTextSplit",id:"version-6.4.0/functions/misc-related/advancedTextSplit",title:"$advancedTextSplit",description:"$advancedTextSplit divisera plusieurs arguments donn\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/advancedTextSplit.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/advancedTextSplit",permalink:"/fr/docs/functions/misc-related/advancedTextSplit",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$advancedTextSplit",description:"$advancedTextSplit divisera plusieurs arguments donn\xe9s.",id:"advancedTextSplit"},sidebar:"docs",previous:{title:"$addObjectProperty",permalink:"/fr/docs/functions/misc-related/addObjectProperty"},next:{title:"$appendFile",permalink:"/fr/docs/functions/misc-related/appendFile"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:b},O="wrapper";function x(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,u(s(s({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$advancedTextSplit")," divisera plusieurs arguments donn\xe9s."),(0,n.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$advancedTextSplit[texte;s\xe9p;index;s\xe9p?;index?]\n")),(0,n.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"texte"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Texte \xe0 diviser."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"s\xe9p"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"S\xe9parateur utilis\xe9 pour s\xe9parer les valeurs."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"index"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"La position du texte que vous voulez retourner."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela divisera ",(0,n.kt)("inlineCode",{parentName:"p"},"Bonjour")," de ",(0,n.kt)("inlineCode",{parentName:"p"},"Au revoir")," et retournera ",(0,n.kt)("inlineCode",{parentName:"p"},"Bonjour")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'advancedTextSplit',\n    code: `\n  $advancedTextSplit[Bonjour/Au revoir;/;1]\n  `\n});\n")))}x.isMDXComponent=!0}}]);