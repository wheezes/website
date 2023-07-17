"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99119:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>i(e,o(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$isServerMuted",description:"Checks if server is muted by the specified user. Returns true or false"},v=void 0,b={unversionedId:"functions/isservermuted",id:"version-5.5.5/functions/isservermuted",title:"$isServerMuted",description:"Checks if server is muted by the specified user. Returns true or false",source:"@site/versioned_docs/version-5.5.5/functions/isservermuted.md",sourceDirName:"functions",slug:"/functions/isservermuted",permalink:"/fr/docs/5.5.5/functions/isservermuted",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 juil. 2023",frontMatter:{title:"$isServerMuted",description:"Checks if server is muted by the specified user. Returns true or false"},sidebar:"docs",previous:{title:"$isNumber",permalink:"/fr/docs/5.5.5/functions/isnumber"},next:{title:"$isTicket",permalink:"/fr/docs/5.5.5/functions/isticket"}},y={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],k={toc:g},h="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,d(p(p({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function checks if the given user has muted the server. Returns boolean"),(0,n.kt)("h3",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$isServerMuted[userID?;guildID?]\n")),(0,n.kt)("h3",p({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"user ID"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"The id of the user"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"guild ID"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"The id of the guild"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",p({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "isMuted",\ncode: `Is server muted: $isServerMuted[$mentioned[1];$guildID]`\n})\n')))}O.isMDXComponent=!0}}]);