"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$lowestRole",description:"Returns lowest role a user has in the server."},g=void 0,b={unversionedId:"functions/lowestrole",id:"version-5.5.5/functions/lowestrole",title:"$lowestRole",description:"Returns lowest role a user has in the server.",source:"@site/versioned_docs/version-5.5.5/functions/lowestrole.md",sourceDirName:"functions",slug:"/functions/lowestrole",permalink:"/ru/docs/5.5.5/functions/lowestrole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$lowestRole",description:"Returns lowest role a user has in the server."},sidebar:"docs",previous:{title:"$lowestGuildRole",permalink:"/ru/docs/5.5.5/functions/lowestguildrole"},next:{title:"$map",permalink:"/ru/docs/5.5.5/functions/map"}},y={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],w={toc:v},h="wrapper";function k(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(h,d(u(u({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the lowest role a user has. This does NOT return @everyone."),(0,n.kt)("h3",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$lowestRole[userID?;guildID?]\n")),(0,n.kt)("h3",u({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"user ID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the user whose lowest role is to be found"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"guild ID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the guild"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",u({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "role", \ncode: `$username\'s lowest Role:\n$lowestRole`\n})\n')),(0,n.kt)("p",null,"Lowest role for the mentioned user"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "role", \ncode: `$username\'s lowest Role:\n$lowestRole[$mentioned[1]]`\n})\n')))}k.isMDXComponent=!0}}]);