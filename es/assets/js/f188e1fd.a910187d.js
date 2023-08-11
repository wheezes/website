"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[83349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$findRoles",description:"$findRoles devolver\xe1 todos los roles que coincidan dependiendo de la consulta dada.",id:"findRoles"},v=void 0,g={unversionedId:"functions/util-related/findRoles",id:"version-6.4.0/functions/util-related/findRoles",title:"$findRoles",description:"$findRoles devolver\xe1 todos los roles que coincidan dependiendo de la consulta dada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/findRoles.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findRoles",permalink:"/es/docs/functions/util-related/findRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$findRoles",description:"$findRoles devolver\xe1 todos los roles que coincidan dependiendo de la consulta dada.",id:"findRoles"},sidebar:"docs",previous:{title:"$findRole",permalink:"/es/docs/functions/util-related/findRole"},next:{title:"$findSpecialChars",permalink:"/es/docs/functions/util-related/findSpecialChars"}},k={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Par\xe1metros para el argumento <code>formato</code>",id:"par\xe1metros-para-el-argumento-formato",level:3},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:b},N="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,c(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findRoles")," devolver\xe1 todos los roles correspondientes dependiendo de la consulta dada."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$findRoles[rolResolver;l\xedmite?;tipo?;formato?]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"resolver rol"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Consulta para coincidir."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"l\xedmite?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"La cantidad de resultados que el bot regresar\xe1."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"tipo?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Tipo de consulta de b\xfasqueda."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"formato?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Formateando para la salida."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h3",u({},{id:"par\xe1metros-para-el-argumento-formato"}),"Par\xe1metros para el argumento ",(0,r.kt)("inlineCode",{parentName:"h3"},"formato")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{position} -> devuelve la posici\xf3n"),(0,r.kt)("li",{parentName:"ul"},"{id} -> devuelve el ID de usuario"),(0,r.kt)("li",{parentName:"ul"},"{username} -> devuelve el nombre de usuario")),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 todos los roles que se llaman ",(0,r.kt)("inlineCode",{parentName:"p"},"Owner"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findRoles',\n    code: `\n  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]\n  `\n});\n")))}O.isMDXComponent=!0}}]);