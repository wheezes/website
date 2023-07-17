"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68049],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),u=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return o.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(f,l(l({ref:r},c),{},{components:t})):o.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32064:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>j,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var o=t(3905),n=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&c(e,t,r[t]);return e},p=(e,r)=>a(e,l(r)),m=(e,r)=>{var t={};for(var o in e)s.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&i)for(var o of i(e))r.indexOf(o)<0&&u.call(e,o)&&(t[o]=e[o]);return t};const f={title:"$onlyForIDs",description:"$onlyForIDs comprobar\xe1 si el comando fue ejecutado por cualquier usuario de los identificadores de usuario listados y devolver\xe1 un error si no lo hace.",id:"onlyForIDs"},y=void 0,v={unversionedId:"functions/util-related/onlyForIDs",id:"version-6.4.0/functions/util-related/onlyForIDs",title:"$onlyForIDs",description:"$onlyForIDs comprobar\xe1 si el comando fue ejecutado por cualquier usuario de los identificadores de usuario listados y devolver\xe1 un error si no lo hace.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/onlyForIDs.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyForIDs",permalink:"/es/docs/functions/util-related/onlyForIDs",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"$onlyForIDs",description:"$onlyForIDs comprobar\xe1 si el comando fue ejecutado por cualquier usuario de los identificadores de usuario listados y devolver\xe1 un error si no lo hace.",id:"onlyForIDs"},sidebar:"docs",previous:{title:"$onlyForGuilds",permalink:"/es/docs/functions/util-related/onlyForGuilds"},next:{title:"$onlyForRoles",permalink:"/es/docs/functions/util-related/onlyForRoles"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function j(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,o.kt)(O,p(d(d({},k),n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyForIDs")," comprobar\xe1 si el comando fue ejecutado por cualquier usuario de los ID de usuario listados y devolver\xe1 un error si no lo hace."),(0,o.kt)("h2",d({},{id:"uso"}),"Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$onlyForIDs[...userIds;error]\n")),(0,o.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,o.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:null}),"...userIds"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"string, integer"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"Usuarios a los que desea limitar el comando."),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:null}),"error"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"Error al devolver cuando el comando no fue ejecutado por y de los usuarios listados."),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")))),(0,o.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,"Esto limitar\xe1 el comando s\xf3lo a los desarrolladores de bot:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyForIDs",\n    code: `\n    Ok.\n    $onlyForIDs[$botOwnerID;You can\'t use that command!]\n    `\n});\n')))}j.isMDXComponent=!0}}]);