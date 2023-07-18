"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>v,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$findTextSplitIndex",description:"$findTextSplitIndex devolver\xe1 el \xedndice de un elemento dividido de texto despu\xe9s de una consulta determinada.",id:"findTextSplitIndex"},v=void 0,y={unversionedId:"functions/misc-related/findTextSplitIndex",id:"version-6.4.0/functions/misc-related/findTextSplitIndex",title:"$findTextSplitIndex",description:"$findTextSplitIndex devolver\xe1 el \xedndice de un elemento dividido de texto despu\xe9s de una consulta determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/findTextSplitIndex.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/findTextSplitIndex",permalink:"/es/docs/functions/misc-related/findTextSplitIndex",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689685664,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$findTextSplitIndex",description:"$findTextSplitIndex devolver\xe1 el \xedndice de un elemento dividido de texto despu\xe9s de una consulta determinada.",id:"findTextSplitIndex"},sidebar:"docs",previous:{title:"$findObjectProperty",permalink:"/es/docs/functions/misc-related/findObjectProperty"},next:{title:"$forEachChannel",permalink:"/es/docs/functions/misc-related/forEachChannel"}},x={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:b},O="wrapper";function k(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,u(s(s({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findTextSplitIndex")," devolver\xe1 el \xedndice de un elemento de divisi\xf3n de texto despu\xe9s de una consulta determinada."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$findTextSplitIndex[consulta]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Consultas"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadera")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," como la primera ",(0,r.kt)("inlineCode",{parentName:"p"},"Cya")," en esta ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit")," est\xe1 en la tercera posici\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "findTextSplitIndex",\n    code: `\n  $findTextSplitIndex[Cya]\n  $textSplit[Hello, Bye, Cya;, ]\n  `\n});\n')))}k.isMDXComponent=!0}}]);