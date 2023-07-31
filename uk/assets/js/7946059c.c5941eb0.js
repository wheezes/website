"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44232],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(t),y=n,m=s["".concat(c,".").concat(y)]||s[y]||u[y]||l;return t?a.createElement(m,o(o({ref:r},d),{},{components:t})):a.createElement(m,o({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},82285:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&d(e,t,r[t]);return e},u=(e,r)=>l(e,o(r)),y=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$deleteArray",description:"$deleteArray will delete a previously created array.",id:"deleteArray"},f=void 0,v={unversionedId:"functions/array-related/deleteArray",id:"version-6.4.0/functions/array-related/deleteArray",title:"$deleteArray",description:"$deleteArray will delete a previously created array.",source:"@site/versioned_docs/version-6.4.0/functions/array-related/deleteArray.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/deleteArray",permalink:"/uk/docs/functions/array-related/deleteArray",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$deleteArray",description:"$deleteArray will delete a previously created array.",id:"deleteArray"},sidebar:"docs",previous:{title:"$createArray",permalink:"/uk/docs/functions/array-related/createArray"},next:{title:"$awaitCmdReactions",permalink:"/uk/docs/functions/awaited-related/awaitCmdReactions"}},b={},g=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:g},k="wrapper";function w(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(k,u(s(s({},O),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$deleteArray")," will delete a previously created array."),(0,a.kt)("h2",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$deleteArray[name]\n")),(0,a.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Array name."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,'This will delete the array "array":'),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "deleteArray",\n    code: `\n  $deleteArray[array]\n  $createArray[array;Hello;This;Is;Great]\n  `\n});\n')))}w.isMDXComponent=!0}}]);