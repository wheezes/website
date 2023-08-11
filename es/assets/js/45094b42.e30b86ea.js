"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46471],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),d=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),c=a,f=p["".concat(m,".").concat(c)]||p[c]||s[c]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},93559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),c=(e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$timeoutMember",description:"$timeoutMember agotar\xe1 a un miembro determinado usando la funci\xf3n de tiempo de espera de Discord.",id:"timeoutMember"},b=void 0,g={unversionedId:"functions/user-related/timeoutMember",id:"version-6.4.0/functions/user-related/timeoutMember",title:"$timeoutMember",description:"$timeoutMember agotar\xe1 a un miembro determinado usando la funci\xf3n de tiempo de espera de Discord.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/timeoutMember.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/timeoutMember",permalink:"/es/docs/functions/user-related/timeoutMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$timeoutMember",description:"$timeoutMember agotar\xe1 a un miembro determinado usando la funci\xf3n de tiempo de espera de Discord.",id:"timeoutMember"},sidebar:"docs",previous:{title:"$setUserNickname",permalink:"/es/docs/functions/user-related/setUserNickname"},next:{title:"$userActivity",permalink:"/es/docs/functions/user-related/userActivity"}},k={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:y},N="wrapper";function O(e){var t=e,{components:r}=t,a=c(t,["components"]);return(0,n.kt)(N,s(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$timeoutMember")," agotar\xe1 un miembro determinado usando la funci\xf3n de tiempo de espera de Discord."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$timeoutMember[servidorID;Identificaci\xf3n de miembro;Temporizador;el tiempo de espera termina en?;razon?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"servidorID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID del gremio donde se encuentra el miembro."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Identificaci\xf3n de miembro"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID del usuario que ser\xe1 desbloqueado."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Temporizador"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena, n\xfamero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"La duraci\xf3n del tiempo de espera."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"el tiempo de espera termina en?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"booleano"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Devuelve el tiempo cuando finaliza el tiempo de espera. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"true")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto agotar\xe1 un miembro determinado durante cinco minutos:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'timeoutMember',\n    code: `\n   $timeoutMember[$guildID;userID;5m;false]`\n});\n")))}O.isMDXComponent=!0}}]);