"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},12300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>o(e,l(t)),c=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$findMembers",description:"$findMembers devolver\xe1 todos los miembros con un nombre de usuario similar.",id:"findMembers"},b=void 0,v={unversionedId:"functions/user-related/findMembers",id:"version-6.4.0/functions/user-related/findMembers",title:"$findMembers",description:"$findMembers devolver\xe1 todos los miembros con un nombre de usuario similar.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/findMembers.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/findMembers",permalink:"/es/docs/functions/user-related/findMembers",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$findMembers",description:"$findMembers devolver\xe1 todos los miembros con un nombre de usuario similar.",id:"findMembers"},sidebar:"docs",previous:{title:"$findMember",permalink:"/es/docs/functions/user-related/findMember"},next:{title:"$findUser",permalink:"/es/docs/functions/user-related/findUser"}},k={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Par\xe1metros para el argumento <code>formato</code>",id:"par\xe1metros-para-el-argumento-formato",level:3},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:g},N="wrapper";function O(e){var t=e,{components:r}=t,a=c(t,["components"]);return(0,n.kt)(N,p(m(m({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$findMembers")," devolver\xe1 todos los miembros con un nombre de usuario similar."),(0,n.kt)("h2",m({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$findMembers[usuarioResolver;l\xedmite?;tipo?;forzar?;formato?]\n")),(0,n.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"usuario Resolver"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Consulta del nombre de usuario que buscar\xe1 el bot."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"l\xedmite?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"La cantidad de resultados que el bot regresar\xe1."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"tipo?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Tipo de consulta de b\xfasqueda."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"forzar?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1. ",(0,n.kt)("strong",{parentName:"td"},"true")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"formato?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El formato que el bot devolver\xe1 a los usuarios encontrados (listados a continuaci\xf3n)."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h3",m({},{id:"par\xe1metros-para-el-argumento-formato"}),"Par\xe1metros para el argumento ",(0,n.kt)("inlineCode",{parentName:"h3"},"formato")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"{position} -> devuelve la posici\xf3n"),(0,n.kt)("li",{parentName:"ul"},"{id} -> devuelve el ID de usuario"),(0,n.kt)("li",{parentName:"ul"},"{username} -> devuelve el nombre de usuario"),(0,n.kt)("li",{parentName:"ul"},"{nick} -> devuelve el nick"),(0,n.kt)("li",{parentName:"ul"},"{tag} -> devuelve el discriminador de usuario")),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 veinte miembros con ",(0,n.kt)("inlineCode",{parentName:"p"},"Leref")," en su nombre de usuario:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findMembers',\n    code: `\n  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]\n  `\n});\n")))}O.isMDXComponent=!0}}]);