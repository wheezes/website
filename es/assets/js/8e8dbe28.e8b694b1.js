"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8189],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>b,toc:()=>k});var r=t(3905),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&p(e,t,n[t]);return e},u=(e,n)=>s(e,o(n)),m=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const g={title:"$sendMessage",description:"$sendMessage enviar\xe1 un mensaje en el canal de ejecuci\xf3n.",id:"sendMessage"},f=void 0,b={unversionedId:"functions/message-related/sendMessage",id:"version-6.4.0/functions/message-related/sendMessage",title:"$sendMessage",description:"$sendMessage enviar\xe1 un mensaje en el canal de ejecuci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/sendMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/sendMessage",permalink:"/es/docs/functions/message-related/sendMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$sendMessage",description:"$sendMessage enviar\xe1 un mensaje en el canal de ejecuci\xf3n.",id:"sendMessage"},sidebar:"docs",previous:{title:"$sendCrosspostingMessage",permalink:"/es/docs/functions/message-related/sendCrosspostingMessage"},next:{title:"$sendWebhookMessage",permalink:"/es/docs/functions/message-related/sendWebhookMessage"}},v={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:k},j="wrapper";function O(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(j,u(d(d({},y),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$sendMessage")," enviar\xe1 un mensaje en un canal espec\xedfico."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$sendMessage[contenido;ID de retorno?]\n")),(0,r.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"contenido"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Contenido del mensaje a enviar."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"ID de retorno?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\xbfDevolver ID del mensaje?  ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto enviar\xe1 una inserci\xf3n en el canal actual:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'sendMessage',\n    code: `\n   $sendMessage[Hello!;false]  \n  `\n});\n")),(0,r.kt)("p",null,'Esto enviar\xe1 una inserci\xf3n en el canal actual usando "parsers".'),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'sendMessage',\n    code: `\n   $sendMessage[Hola! {newEmbed:{title:Bonjour!}};false]  \n  `\n});\n")))}O.isMDXComponent=!0}}]);