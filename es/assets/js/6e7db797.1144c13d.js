"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[29585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$stringEndsWith",description:"$stringEndsWith comprobar\xe1 si el argumento dado termina con algo espec\xedfico.",id:"stringEndsWith"},g=void 0,b={unversionedId:"functions/util-related/stringEndsWith",id:"version-6.4.0/functions/util-related/stringEndsWith",title:"$stringEndsWith",description:"$stringEndsWith comprobar\xe1 si el argumento dado termina con algo espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/stringEndsWith.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/stringEndsWith",permalink:"/es/docs/functions/util-related/stringEndsWith",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787809,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$stringEndsWith",description:"$stringEndsWith comprobar\xe1 si el argumento dado termina con algo espec\xedfico.",id:"stringEndsWith"},sidebar:"docs",previous:{title:"$splitText",permalink:"/es/docs/functions/util-related/splitText"},next:{title:"$stringStartsWith",permalink:"/es/docs/functions/util-related/stringStartsWith"}},y={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:v},k="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(k,u(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$stringEndsWith")," comprobar\xe1 si el argumento dado termina con algo espec\xedfico."),(0,n.kt)("h2",d({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$stringEndsWith[text;check]\n")),(0,n.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"El texto que se comprobar\xe1."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"comprobar"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"El argumento que comprobar\xe1 si el texto termina con algo espec\xedfico."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"verdadero")," como ",(0,n.kt)("inlineCode",{parentName:"p"},"aoi.js")," termina con ",(0,n.kt)("inlineCode",{parentName:"p"},"js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'stringEndsWith',\n    code: `\n  $stringEndsWith[aoi.js;js]\n  `\n});\n")))}O.isMDXComponent=!0}}]);