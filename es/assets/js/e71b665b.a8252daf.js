"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>P,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$onlyClientPerms",description:"$onlyClientPerms comprobar\xe1 si el bot tiene el permiso indicado y devolver\xe1 un mensaje de error en caso contrario.",id:"onlyClientPerms"},y=void 0,b={unversionedId:"functions/client-related/onlyClientPerms",id:"version-6.4.0/functions/client-related/onlyClientPerms",title:"$onlyClientPerms",description:"$onlyClientPerms comprobar\xe1 si el bot tiene el permiso indicado y devolver\xe1 un mensaje de error en caso contrario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/onlyClientPerms.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/onlyClientPerms",permalink:"/es/docs/functions/client-related/onlyClientPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689685664,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$onlyClientPerms",description:"$onlyClientPerms comprobar\xe1 si el bot tiene el permiso indicado y devolver\xe1 un mensaje de error en caso contrario.",id:"onlyClientPerms"},sidebar:"docs",previous:{title:"$killClient",permalink:"/es/docs/functions/client-related/killClient"},next:{title:"$setClientAvatar",permalink:"/es/docs/functions/client-related/setClientAvatar"}},v={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function P(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(O,d(m(m({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$onlyClientPerms")," comprobar\xe1 si el bot tiene el permiso indicado y devolver\xe1 un mensaje de error en caso contrario."),(0,n.kt)("h2",m({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$onlyClientPerms[...permisos;error]\n")),(0,n.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"...permisos"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Permiso que requiere el bot."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"error"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Error a devolver cuando el bot no tiene los permisos listados."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")))),(0,n.kt)("p",null,"Encontrar\xe1 todos los permisos ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",m({parentName:"strong"},{href:"../../guides/Client/2permissionsintents.md"}),"aqu\xed")),"."),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto limitar\xe1 el comando para que funcione s\xf3lo cuando el Bot tenga permisos de administrador:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyClientPerms",\n    code: `\n    Ok.\n    $onlyClientPerms[administrator;No tengo permisos de administrador.]\n    `\n});\n')))}P.isMDXComponent=!0}}]);