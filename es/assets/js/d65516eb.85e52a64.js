"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56142],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=n,y=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?a.createElement(y,l(l({ref:r},d),{},{components:t})):a.createElement(y,l({ref:r},d))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23427:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>g,toc:()=>k});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&d(e,t,r[t]);if(p)for(var t of p(r))c.call(r,t)&&d(e,t,r[t]);return e},u=(e,r)=>o(e,l(r)),m=(e,r)=>{var t={};for(var a in e)i.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const y={title:"$arrayMap",description:"$arrayMap crear\xe1 un mapa con la matriz dada.",id:"arrayMap"},f=void 0,g={unversionedId:"functions/array-related/arrayMap",id:"version-6.4.0/functions/array-related/arrayMap",title:"$arrayMap",description:"$arrayMap crear\xe1 un mapa con la matriz dada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayMap.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayMap",permalink:"/es/docs/functions/array-related/arrayMap",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$arrayMap",description:"$arrayMap crear\xe1 un mapa con la matriz dada.",id:"arrayMap"},sidebar:"docs",previous:{title:"$arrayLength",permalink:"/es/docs/functions/array-related/arrayLength"},next:{title:"$arrayPop",permalink:"/es/docs/functions/array-related/arrayPop"}},b={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],v={toc:k},O="wrapper";function N(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(O,u(s(s({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayMap")," crear\xe1 un mapa con la matriz dada."),(0,a.kt)("h2",s({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayMap[nombre;comandoEsperado;separador?;esperarDatos?]\n")),(0,a.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nombre de matriz"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"comandoEsperado"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Comando esperado para ejecutar."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"separador?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Separador."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"esperarDatos?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Datos esperados."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))))}N.isMDXComponent=!0}}]);