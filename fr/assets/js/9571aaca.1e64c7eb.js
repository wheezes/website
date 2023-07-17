"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,h=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const h={title:"$channelExists",description:"Returns true or false if it finds the channel"},m=void 0,y={unversionedId:"functions/channelexists",id:"version-5.5.5/functions/channelexists",title:"$channelExists",description:"Returns true or false if it finds the channel",source:"@site/versioned_docs/version-5.5.5/functions/channelexists.md",sourceDirName:"functions",slug:"/functions/channelexists",permalink:"/fr/docs/5.5.5/functions/channelexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 juil. 2023",frontMatter:{title:"$channelExists",description:"Returns true or false if it finds the channel"},sidebar:"docs",previous:{title:"$channelCount",permalink:"/fr/docs/5.5.5/functions/channelcount"},next:{title:"$channelID",permalink:"/fr/docs/5.5.5/functions/channelid"}},g={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],v={toc:b},O="wrapper";function k(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(O,u(f(f({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will check if the delivered ID is from an existing channel or not, delivering true or false."),(0,r.kt)("h3",f({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$channelExists[channelID]\n")),(0,r.kt)("h3",f({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"channel ID"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"The id of the channel"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("p",null,"This function is global, this means it will search for channels not only in this guild, it will search for the channel in all the guilds your bot is on."),(0,r.kt)("h2",f({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "channel",\n    code: `$channelExists[$message]`\n});\n\n/*\n    This will search for the channel with the ID the user\n    provided in the message.\n*/\n')))}k.isMDXComponent=!0}}]);