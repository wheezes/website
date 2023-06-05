"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},37309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"$getApplicationCommandID",description:"Get application command ID."},l=void 0,o={unversionedId:"functions/getapplicationcommandid",id:"version-5.5.5/functions/getapplicationcommandid",title:"$getApplicationCommandID",description:"Get application command ID.",source:"@site/versioned_docs/version-5.5.5/functions/getapplicationcommandid.md",sourceDirName:"functions",slug:"/functions/getapplicationcommandid",permalink:"/docs/5.5.5/functions/getapplicationcommandid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1685991880,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{title:"$getApplicationCommandID",description:"Get application command ID."},sidebar:"docs",previous:{title:"$get",permalink:"/docs/5.5.5/functions/get"},next:{title:"$getAttachments",permalink:"/docs/5.5.5/functions/getattachments"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Location Types",id:"location-types",level:4},{value:"Examples",id:"examples",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get an application command which is can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slash type"),(0,r.kt)("li",{parentName:"ul"},"Message type"),(0,r.kt)("li",{parentName:"ul"},"User type")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getApplicationCommandID[application name;guildID/global]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"application id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The application command that we're going to delete"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"location"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The field, which we're going to delete on ",(0,r.kt)("inlineCode",{parentName:"td"},"guild")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"global")),(0,r.kt)("td",{parentName:"tr",align:"left"},"str & num"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h4",{id:"location-types"},"Location Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildID")," \u2014 Specific server id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global")," \u2014 Global application commands as it's name")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Getting application command's ID from a server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "get-application-command-id",\n  code: `\n  $getApplicationCommandID[ban;$guildID]]\n  `\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Getting global application command's ID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "get-application-command-id-g",\n  code: `\n  $getApplicationCommandID[help;global]\n  `\n});\n')))}d.isMDXComponent=!0}}]);