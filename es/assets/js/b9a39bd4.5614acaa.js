"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[54941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$authorAccentColor",description:"Show author's accent color."},h=void 0,y={unversionedId:"functions/authoraccentcolor",id:"version-5.5.5/functions/authoraccentcolor",title:"$authorAccentColor",description:"Show author's accent color.",source:"@site/versioned_docs/version-5.5.5/functions/authoraccentcolor.md",sourceDirName:"functions",slug:"/functions/authoraccentcolor",permalink:"/es/docs/5.5.5/functions/authoraccentcolor",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"$authorAccentColor",description:"Show author's accent color."},sidebar:"docs",previous:{title:"$author",permalink:"/es/docs/5.5.5/functions/author"},next:{title:"$authorAvatar",permalink:"/es/docs/5.5.5/functions/authoravatar"}},b={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],g={toc:v},k="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,f(p(p({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$authorAccentColor")," will show author's accent color as hex code (which is on user's banner)"),(0,n.kt)("h3",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$authorAccentColor[default?]\n")),(0,n.kt)("h3",p({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"default"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"The text to be displayed if accent color is default"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",p({},{id:"examples"}),"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Without optional fields")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "author-accent-color",\n  code: `\n  Your accent color is: $authorAccentColor\n  `\n//This will return author\'s accent color.\n});\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With optional fields")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "author-accent-color",\n  code: `\n  Your accent color is: $authorAccentColor[You have default accent color.]\n  `\n//This will return author\'s accent color.\n});\n')))}O.isMDXComponent=!0}}]);