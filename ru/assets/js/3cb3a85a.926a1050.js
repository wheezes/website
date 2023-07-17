"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[81355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,a(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$deleteRoles",description:"Deletes the specified role/roles"},y=void 0,b={unversionedId:"functions/deleteroles",id:"version-5.5.5/functions/deleteroles",title:"$deleteRoles",description:"Deletes the specified role/roles",source:"@site/versioned_docs/version-5.5.5/functions/deleteroles.md",sourceDirName:"functions",slug:"/functions/deleteroles",permalink:"/ru/docs/5.5.5/functions/deleteroles",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$deleteRoles",description:"Deletes the specified role/roles"},sidebar:"docs",previous:{title:"$deleteMessageVar",permalink:"/ru/docs/5.5.5/functions/deletemessagevar"},next:{title:"$deleteServerVar",permalink:"/ru/docs/5.5.5/functions/deleteservervar"}},v={},O=[],g={toc:O},k="wrapper";function h(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(k,d(u(u({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function deletes the specified role","(","s",")"),(0,n.kt)("p",null,"Fields"),(0,n.kt)("p",null,"This function has 1 required field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Role ID ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Role ID 2 ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Etc")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$deleteRoles[roleID;roleID;etc]")),(0,n.kt)("p",null,"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Role ID","(","s",")"," - The role","(","s",")"," the bot is deleting")),(0,n.kt)("p",null,"Usage"),(0,n.kt)("p",null,"Deleting the mentioned role"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deleteRoles",\ncode: `Deleted a role.\n$deleteRoles[$mentionedRoles[1]]`\n})\n')),(0,n.kt)("p",null,"Deleting multiple mentioned roles"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deleteRoles",\ncode: `Deleted a role.\n$deleteRoles[$mentionedRoles[1];$mentionedRoles[2];$mentionedRoles[3]]`\n})\n')))}h.isMDXComponent=!0}}]);