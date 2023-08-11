"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<l;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},c=(e,t)=>l(e,u(t)),d=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$muteUser",description:"$muteUser will mute or unmute a given user in a Voice Channel.",id:"muteUser"},g=void 0,k={unversionedId:"functions/user-related/muteUser",id:"version-6.4.0/functions/user-related/muteUser",title:"$muteUser",description:"$muteUser will mute or unmute a given user in a Voice Channel.",source:"@site/versioned_docs/version-6.4.0/functions/user-related/muteUser.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/muteUser",permalink:"/uk/docs/functions/user-related/muteUser",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$muteUser",description:"$muteUser will mute or unmute a given user in a Voice Channel.",id:"muteUser"},sidebar:"docs",previous:{title:"$moveUser",permalink:"/uk/docs/functions/user-related/moveUser"},next:{title:"$pruneMembers",permalink:"/uk/docs/functions/user-related/pruneMembers"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:y},h="wrapper";function N(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(h,c(m(m({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$muteUser")," will mute or unmute a given user in a Voice Channel."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$muteUser[guildID;userID;mute?;reason?]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"guildID"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The guild ID of where the user is located."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"userID"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The user ID of the user to mute/unmute."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"mute?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Mute or unmute the user. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"true")," (mute / default) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")," (unmute)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"reason?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Reason that will be displayed in the guild's audit logs."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will server mute yourself (must be in a voice channel):"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'muteUser',\n    code: `\n  $muteUser[$guildID;$authorID;true]\n  `\n});\n")))}N.isMDXComponent=!0}}]);