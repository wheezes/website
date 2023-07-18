"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[48152],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:e},u),{},{components:n})):r.createElement(f,l({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35715:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>y,contentTitle:()=>b,default:()=>j,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&u(t,n,e[n]);return t},s=(t,e)=>o(t,l(e)),m=(t,e)=>{var n={};for(var r in t)c.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n};const f={title:"$attachment",description:"$attachment crear\xe1 un adjunto.",id:"attachment"},b=void 0,g={unversionedId:"functions/interaction-related/attachment",id:"version-6.4.0/functions/interaction-related/attachment",title:"$attachment",description:"$attachment crear\xe1 un adjunto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/attachment.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/attachment",permalink:"/es/docs/functions/interaction-related/attachment",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689685664,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$attachment",description:"$attachment crear\xe1 un adjunto.",id:"attachment"},sidebar:"docs",previous:{title:"$addTimestamp",permalink:"/es/docs/functions/interaction-related/addTimestamp"},next:{title:"$author",permalink:"/es/docs/functions/interaction-related/author"}},y={},h=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:h},v="wrapper";function j(t){var e=t,{components:n}=e,a=m(e,["components"]);return(0,r.kt)(v,s(d(d({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$attachment")," crear\xe1 un adjunto."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$attachment[adjunto;nombre;tipo?]\n")),(0,r.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"adjunto"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Contenido del archivo adjunto, preferiblemente una URL."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Nombre del adjunto."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"tipo?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Tipo de adjunto. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"URL")," (por defecto)"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto crear\xe1 un archivo adjunto:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'attachment',\n    code: `\n  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]\n  `\n});\n")))}j.isMDXComponent=!0}}]);