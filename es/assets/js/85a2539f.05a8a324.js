"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[54269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>x,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),u=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$replaceText",description:"$replaceText reemplazar\xe1 segmentos espec\xedficos de texto.",id:"replaceText"},k=void 0,g={unversionedId:"functions/util-related/replaceText",id:"version-6.4.0/functions/util-related/replaceText",title:"$replaceText",description:"$replaceText reemplazar\xe1 segmentos espec\xedficos de texto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/replaceText.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceText",permalink:"/es/docs/functions/util-related/replaceText",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$replaceText",description:"$replaceText reemplazar\xe1 segmentos espec\xedficos de texto.",id:"replaceText"},sidebar:"docs",previous:{title:"$repeatMessage",permalink:"/es/docs/functions/util-related/repeatMessage"},next:{title:"$replaceTextWithRegex",permalink:"/es/docs/functions/util-related/replaceTextWithRegex"}},v={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Ejemplo avanzado",id:"ejemplo-avanzado",level:3}],y={toc:b},N="wrapper";function x(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(N,m(d(d({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$replaceText")," reemplazar\xe1 segmentos espec\xedficos de texto."),(0,a.kt)("h2",d({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$replaceText[text;replacer;replaceTo;times?]\n")),(0,a.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Texto que desea modificar."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"replacer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"El texto que ser\xe1 reemplazado."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"reemplazar a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"El texto que reemplazar\xe1 ",(0,a.kt)("inlineCode",{parentName:"td"},"replacer"),"."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\xbfveces?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"n\xfamero"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Cu\xe1ntas veces ",(0,a.kt)("inlineCode",{parentName:"td"},"replaceTo")," reemplaza a ",(0,a.kt)("inlineCode",{parentName:"td"},"replacer"),". / Usa ",(0,a.kt)("inlineCode",{parentName:"td"},"-1")," para el \xfaltimo."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto reemplazar\xe1 ",(0,a.kt)("inlineCode",{parentName:"p"},"M")," con ",(0,a.kt)("inlineCode",{parentName:"p"},"D")," y la salida ser\xe1 ",(0,a.kt)("inlineCode",{parentName:"p"},"burro"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[Monkey;M;D]\n  `\n});\n")),(0,a.kt)("h3",d({},{id:"ejemplo-avanzado"}),"Ejemplo avanzado"),(0,a.kt)("p",null,"Esto reemplazar\xe1 la palabra ",(0,a.kt)("inlineCode",{parentName:"p"},"caf\xe9")," dos veces usando el \xfaltimo ",(0,a.kt)("a",d({parentName:"p"},{href:"#parameters"}),"campo")," de ",(0,a.kt)("inlineCode",{parentName:"p"},"$replaceText"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[Me encanta beber caf\xe9, \xa1Coffee me da poder! Coffee es malo para mi salud.;Coffee;jugo naranja;2]\n  `\n});\n")),(0,a.kt)("p",null,"Esto reemplazar\xe1 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ferel")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"son")," usando m\xfaltiples ",(0,a.kt)("inlineCode",{parentName:"p"},"$replaceText"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[$replaceText[Leref and Ferel are the same person.;Ferel;Ayaka];are;are no]\n  `\n});\n")))}x.isMDXComponent=!0}}]);