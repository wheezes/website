"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))i.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$userRolesCount",description:"$userRolesCount devolver\xe1 el recuento de roles de un usuario.",id:"userRolesCount"},v=void 0,y={unversionedId:"functions/user-related/userRolesCount",id:"version-6.4.0/functions/user-related/userRolesCount",title:"$userRolesCount",description:"$userRolesCount devolver\xe1 el recuento de roles de un usuario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/userRolesCount.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/userRolesCount",permalink:"/es/docs/functions/user-related/userRolesCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787809,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$userRolesCount",description:"$userRolesCount devolver\xe1 el recuento de roles de un usuario.",id:"userRolesCount"},sidebar:"docs",previous:{title:"$userRoles",permalink:"/es/docs/functions/user-related/userRoles"},next:{title:"$userStatus",permalink:"/es/docs/functions/user-related/userStatus"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function j(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(O,d(p(p({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$userRolesCount")," devolver\xe1 el recuento de roles de un usuario."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$userRolesCount[usuarioID?;servidorID?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"usarioID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"La identificaci\xf3n del usuario."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID del servidor."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 la cantidad de roles que ha asignado:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'userRolesCount',\n    code: `\n  $userRolesCount[$authorID;$guildID]\n  `\n});\n")))}j.isMDXComponent=!0}}]);