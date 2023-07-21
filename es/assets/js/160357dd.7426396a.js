"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>D,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$messageWebhookID",description:"$messageWebhookID devolver\xe1 el ID del webhook que envi\xf3 el mensaje dado.",id:"messageWebhookID"},f=void 0,b={unversionedId:"functions/message-related/messageWebhookID",id:"version-6.4.0/functions/message-related/messageWebhookID",title:"$messageWebhookID",description:"$messageWebhookID devolver\xe1 el ID del webhook que envi\xf3 el mensaje dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/messageWebhookID.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/messageWebhookID",permalink:"/es/docs/functions/message-related/messageWebhookID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$messageWebhookID",description:"$messageWebhookID devolver\xe1 el ID del webhook que envi\xf3 el mensaje dado.",id:"messageWebhookID"},sidebar:"docs",previous:{title:"$messageURL",permalink:"/es/docs/functions/message-related/messageURL"},next:{title:"$pinMessage",permalink:"/es/docs/functions/message-related/pinMessage"}},k={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:v},y="wrapper";function D(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(y,d(c(c({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$messageWebhookID")," devolver\xe1 la ID del webhook que envi\xf3 el mensaje dado."),(0,r.kt)("h2",c({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$messageWebhookID[ID de mensaje;canalID?]\n")),(0,r.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID de mensaje?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID del mensaje."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"canalID?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID del mensaje donde se encuentra el mensaje."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto devolver\xe1 la ID de un webhook, aseg\xfarese de reemplazar "messageID" con una ID de mensaje real enviada desde un webhook:'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'messageWebhookID',\n    code: `\n  $messageWebhookID[messageID;$channelID] //reemplazar ID de mensaje\n  `\n});\n")))}D.isMDXComponent=!0}}]);