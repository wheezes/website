"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68435],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),m=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=m(e.components);return n.createElement(d.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(t),c=a,b=p["".concat(d,".").concat(c)]||p[c]||s[c]||o;return t?n.createElement(b,l(l({ref:r},u),{},{components:t})):n.createElement(b,l({ref:r},u))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},55611:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>f,default:()=>N,frontMatter:()=>b,metadata:()=>v,toc:()=>g});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&u(e,t,r[t]);if(i)for(var t of i(r))m.call(r,t)&&u(e,t,r[t]);return e},s=(e,r)=>o(e,l(r)),c=(e,r)=>{var t={};for(var n in e)d.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&m.call(e,n)&&(t[n]=e[n]);return t};const b={title:"$removeThreadMember",description:"$removeThreadMember eliminar\xe1 a un miembro determinado del hilo de un hilo dado.",id:"removeThreadMember"},f=void 0,v={unversionedId:"functions/user-related/removeThreadMember",id:"version-6.4.0/functions/user-related/removeThreadMember",title:"$removeThreadMember",description:"$removeThreadMember eliminar\xe1 a un miembro determinado del hilo de un hilo dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/removeThreadMember.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/removeThreadMember",permalink:"/es/docs/functions/user-related/removeThreadMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$removeThreadMember",description:"$removeThreadMember eliminar\xe1 a un miembro determinado del hilo de un hilo dado.",id:"removeThreadMember"},sidebar:"docs",previous:{title:"$pruneMembers",permalink:"/es/docs/functions/user-related/pruneMembers"},next:{title:"$setUserNickname",permalink:"/es/docs/functions/user-related/setUserNickname"}},h={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},y="wrapper";function N(e){var r=e,{components:t}=r,a=c(r,["components"]);return(0,n.kt)(y,s(p(p({},k),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$removeThreadMember")," eliminar\xe1 a un miembro determinado del hilo de un hilo dado."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$removeThreadMember[canalID;ID de subproceso;ID de usuario;raz\xf3n]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"canalID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID del canal en el que se encuentra el hilo."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"hiloID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El hilo ID."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"usarioID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID del usuario que ser\xe1 eliminado del hilo dado."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto eliminar\xe1 el autor del comando de un hilo determinado:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'removeThreadMember',\n    code: `\n   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]\n  `\n});\n")))}N.isMDXComponent=!0}}]);