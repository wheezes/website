"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,g=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>k,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,s(t)),u=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const g={title:"$message",description:"$message devolver\xe1 los argumentos dados de un mensaje.",id:"message"},f=void 0,v={unversionedId:"functions/message-related/message",id:"version-6.4.0/functions/message-related/message",title:"$message",description:"$message devolver\xe1 los argumentos dados de un mensaje.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/message.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/message",permalink:"/es/docs/functions/message-related/message",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$message",description:"$message devolver\xe1 los argumentos dados de un mensaje.",id:"message"},sidebar:"docs",previous:{title:"$editWebhookMessage",permalink:"/es/docs/functions/message-related/editWebhookMessage"},next:{title:"$messageAttachment",permalink:"/es/docs/functions/message-related/messageAttachment"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:y},j="wrapper";function k(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(j,d(m(m({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$message")," devolver\xe1 argumentos dados de una interacci\xf3n."),(0,n.kt)("h2",m({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$message[indice?]\n")),(0,n.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xedndice?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Qu\xe9 argumento de mensaje ser\xe1 devuelto, d\xe9jalo vac\xedo para devolver el mensaje completo."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto responder\xe1 a tu mensaje de comando:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'message',\n    code: `\n  Usted dijo: \"$message\"\n  ` // [prefix]message Hola!\n});\n")))}k.isMDXComponent=!0}}]);