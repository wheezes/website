"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,y=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>k,toc:()=>v});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const y={title:"$arrayFind",description:"$arrayFind buscar\xe1 el primer elemento en la matriz que coincida con la consulta y lo devolver\xe1.",id:"arrayFind"},f=void 0,k={unversionedId:"functions/array-related/arrayFind",id:"version-6.4.0/functions/array-related/arrayFind",title:"$arrayFind",description:"$arrayFind buscar\xe1 el primer elemento en la matriz que coincida con la consulta y lo devolver\xe1.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayFind.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayFind",permalink:"/es/docs/functions/array-related/arrayFind",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"$arrayFind",description:"$arrayFind buscar\xe1 el primer elemento en la matriz que coincida con la consulta y lo devolver\xe1.",id:"arrayFind"},sidebar:"docs",previous:{title:"$arrayFilter",permalink:"/es/docs/functions/array-related/arrayFilter"},next:{title:"$arrayForEach",permalink:"/es/docs/functions/array-related/arrayForEach"}},b={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Operadores de comparaci\xf3n",id:"operadores-de-comparaci\xf3n",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:v},N="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(N,s(u(u({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayFind")," buscar\xe1 el primer elemento en la matriz que coincida con la consulta y lo devolver\xe1."),(0,a.kt)("h2",u({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$arrayFind[nombre;consulta;tipo de consulta?;separador?]\n")),(0,a.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Nombre de matriz"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"El elemento que estaremos consultando para cada elemento dentro de la matriz."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"tipo de consulta?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"El operador de comparaci\xf3n."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"separador?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Separador."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",u({},{id:"operadores-de-comparaci\xf3n"}),"Operadores de comparaci\xf3n"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Cada elemento que coincida con la consulta."),(0,a.kt)("li",{parentName:"ul"},"!= \u2014 Cada elemento que no coincide con la consulta."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'\u2014 Todos los elementos a la "izquierda" del elemento encontrado, excepto \xe9l mismo.'))),(0,a.kt)("li",{parentName:"ul"},'< \u2014 Todos los elementos a la "derecha" del elemento encontrado, excepto \xe9l mismo.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},'= \u2014 Todos los elementos a la "izquierda" del elemento encontrado, incluido \xe9l mismo.'))),(0,a.kt)("li",{parentName:"ul"},'<= \u2014 Todos los elementos a la "derecha" del elemento encontrado, incluido \xe9l mismo.')),(0,a.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-find",\n    code: `\n  $arrayFind[array;akarui;==;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n// Devolver\xe1 "akarui" ya que coincide con la consulta.\n\n});\n')))}O.isMDXComponent=!0}}]);