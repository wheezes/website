"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11590],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(b,s(s({ref:t},c),{},{components:a})):r.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>b,metadata:()=>v,toc:()=>y});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&c(e,a,t[a]);return e},u=(e,t)=>l(e,s(t)),m=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a};const b={title:"$setMessageVar",description:"$setMessageVar cambiar\xe1 el valor de una variable de mensaje determinada.",id:"setMessageVar"},f=void 0,v={unversionedId:"functions/variables-related/setMessageVar",id:"version-6.4.0/functions/variables-related/setMessageVar",title:"$setMessageVar",description:"$setMessageVar cambiar\xe1 el valor de una variable de mensaje determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/setMessageVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/setMessageVar",permalink:"/es/docs/functions/variables-related/setMessageVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$setMessageVar",description:"$setMessageVar cambiar\xe1 el valor de una variable de mensaje determinada.",id:"setMessageVar"},sidebar:"docs",previous:{title:"$setGuildVar",permalink:"/es/docs/functions/variables-related/setGuildVar"},next:{title:"$setUserVar",permalink:"/es/docs/functions/variables-related/setUserVar"}},g={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},N="wrapper";function O(e){var t=e,{components:a}=t,n=m(t,["components"]);return(0,r.kt)(N,u(d(d({},k),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setMessageVar")," cambiar\xe1 el valor de una variable de mensaje."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$setMessageVar[varname;value;messageID?;table?]\n")),(0,r.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"varname"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Nombre variable."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"valor"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Nuevo valor variable."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"ID de mensaje?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Mensaje ID."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"tabla?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Tabla variable."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto cambiar\xe1 el valor de "Ejemplo" a "Este es un valor":'),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "setMessageVar",\n    code: `\n    $setMessageVar[Example;This is a value;$messageID;main]\n    `\n});\n')))}O.isMDXComponent=!0}}]);