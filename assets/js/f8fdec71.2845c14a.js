"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>h});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$isTicket",description:"$isTicket will return either true or false depending on the channel being a ticket channel.",id:"isTicket"},k=void 0,g={unversionedId:"functions/misc-related/isTicket",id:"version-6.4.0/functions/misc-related/isTicket",title:"$isTicket",description:"$isTicket will return either true or false depending on the channel being a ticket channel.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/isTicket.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/isTicket",permalink:"/docs/functions/misc-related/isTicket",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{title:"$isTicket",description:"$isTicket will return either true or false depending on the channel being a ticket channel.",id:"isTicket"},sidebar:"docs",previous:{title:"$ifAwaited",permalink:"/docs/functions/misc-related/ifAwaited"},next:{title:"$joinSplitText",permalink:"/docs/functions/misc-related/joinSplitText"}},b={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:h},v="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,d(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isTicket")," will return either true or false depending on the channel being a ticket channel."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$isTicket[channelID?]\n")),(0,r.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"channelID?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Channel ID."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will check if the current channel is a ticket channel created by ",(0,r.kt)("inlineCode",{parentName:"p"},"$newTicket"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "isTicket",\n    code: `\n    $isTicket[$channelID]\n    `\n});\n')))}O.isMDXComponent=!0}}]);