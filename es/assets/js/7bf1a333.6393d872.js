"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>P,frontMatter:()=>f,metadata:()=>g,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$addApplicationCommandPermissions",description:"$addApplicationCommandPermissions cambiar\xe1 los permisos de un comando slash.",id:"addApplicationCommandPermissions"},b=void 0,g={unversionedId:"functions/interaction-related/addApplicationCommandPermissions",id:"version-6.4.0/functions/interaction-related/addApplicationCommandPermissions",title:"$addApplicationCommandPermissions",description:"$addApplicationCommandPermissions cambiar\xe1 los permisos de un comando slash.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/addApplicationCommandPermissions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addApplicationCommandPermissions",permalink:"/es/docs/functions/interaction-related/addApplicationCommandPermissions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$addApplicationCommandPermissions",description:"$addApplicationCommandPermissions cambiar\xe1 los permisos de un comando slash.",id:"addApplicationCommandPermissions"},sidebar:"docs",previous:{title:"$webhookExists",permalink:"/es/docs/functions/info-related/webhookExists"},next:{title:"$addButton",permalink:"/es/docs/functions/interaction-related/addButton"}},y={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:k},O="wrapper";function P(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(O,m(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",c({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$addApplicationCommandPermissions[servidorID/global?;id;...perms]\n")),(0,r.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"servidorID/global"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string, integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Tipo de comando de aplicaci\xf3n. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"global")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"un guildID espec\xedfico")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"id"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Tipo de comando de aplicaci\xf3n."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"...permisos"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Permisos."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")))),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto deshabilitar\xe1 el comando de barra slash para todos los miembros de la guild ( aseg\xfarese de reemplazar "ID" con el comando de barra slash real ID ):'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addApplicationCommandPermissions',\n    code: `\n    $addApplicationCommandPermissions[$guildID;ID;[\n  {\n    id: '$guildID',\n    type: 'ROLE',\n    permission: false\n  }\n]]`\n});\n")))}P.isMDXComponent=!0}}]);