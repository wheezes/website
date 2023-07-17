"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6487],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=c(a),s=r,k=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},98239:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&d(t,a,e[a]);if(i)for(var a of i(e))c.call(e,a)&&d(t,a,e[a]);return t},u=(t,e)=>l(t,o(e)),s=(t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&c.call(t,n)&&(a[n]=t[n]);return a};const k={title:"$createApplicationCommand",description:"$createApplicationCommand crear\xe1 un comando de aplicaci\xf3n.",id:"createApplicationCommand"},g=void 0,N={unversionedId:"functions/interaction-related/createApplicationCommand",id:"version-6.4.0/functions/interaction-related/createApplicationCommand",title:"$createApplicationCommand",description:"$createApplicationCommand crear\xe1 un comando de aplicaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/createApplicationCommand.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/createApplicationCommand",permalink:"/es/docs/functions/interaction-related/createApplicationCommand",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"$createApplicationCommand",description:"$createApplicationCommand crear\xe1 un comando de aplicaci\xf3n.",id:"createApplicationCommand"},sidebar:"docs",previous:{title:"$color",permalink:"/es/docs/functions/interaction-related/color"},next:{title:"$createFile",permalink:"/es/docs/functions/interaction-related/createFile"}},b={},f=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:f},v="wrapper";function O(t){var e=t,{components:a}=e,r=s(e,["components"]);return(0,n.kt)(v,u(m(m({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$createApplicationCommand")," crear\xe1 un comando de aplicaci\xf3n."),(0,n.kt)("h2",m({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$createApplicationCommand[servidorID/global;nombre;descripcion;Permiso predeterminado;tipo?;opciones?]\n")),(0,n.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"servidorID/global"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena. entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Tipo de comando de aplicaci\xf3n. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"global")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"un guildID espec\xedfico")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Nombre del comando de la aplicaci\xf3n, debe estar en min\xfasculas."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"descripci\xf3n"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Meta descripci\xf3n de aplicaci\xf3n"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Permisos por defecto"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Si el comando debe seguir los permisos por defecto."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"tipo?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Tipo de comando de aplicaci\xf3n. (Slash/usuario/mensaje)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"opciones?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Opciones de comando de la aplicaci\xf3n."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",null," Tipo de comando de aplicaci\xf3n ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"NOMBRE"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"ID"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"NOTA"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"SUB_COMMAND"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"SUB_COMMAND_GROUP"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"STRING"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"INTEGER"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Cualquier entero entre -2^53 y 2^53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"BOOLEAN"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"USER"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"CHANNEL"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"7"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Incluye todos los tipos de canal + categor\xedas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ROLE"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MENTIONABLE"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Incluye usuarios y roles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NUMBER"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Cualquier entero entre -2^53 y 2^53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ATTACHMENT"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"11"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://discord.com/developers/docs/resources/channel#attachment-object"}),"adjuntar objeto"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Puede encontrar m\xe1s informaci\xf3n en la ",(0,n.kt)("a",m({parentName:"strong"},{href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"}),"documentaci\xf3n oficial de la API")," de Discord."))),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\xa1Revisa la gu\xeda de Slash Command/Interaction para m\xe1s informaci\xf3n sobre los comandos de barras!")),(0,n.kt)("p",null,"Esto crear\xe1 un comando de barra sin opciones:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID/global;example;slash command description!;true;slash]`\n});\n// crear\xe1 una barra de comandos sin ninguna entrada de usuario, puedes elegir entre global/$guildID para crear un comando globalmente o s\xf3lo para un gremio espec\xedfico.\n')))}O.isMDXComponent=!0}}]);