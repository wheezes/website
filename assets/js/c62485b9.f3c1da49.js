"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",slug:"/"},i=void 0,s={unversionedId:"introduction/introduction",id:"introduction/introduction",title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",source:"@site/docs/introduction/introduction.md",sourceDirName:"introduction",slug:"/",permalink:"/docs/7.0.0/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1686318580,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",slug:"/"},sidebar:"docs",next:{title:"Setup",permalink:"/docs/7.0.0/guides/setup"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Links",id:"links",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This is the brand new documentation for v7 development ",(0,r.kt)("strong",{parentName:"p"},"THINGS MAY CHANGE"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/aoijs/website/blob/master/assets/images/aoijs-banner.png?raw=true",alt:"aoijs"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Built-in support of ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/aoi.db"},"database"))," by default and ready for multipurpose."),(0,r.kt)("li",{parentName:"ul"},"Built-in ",(0,r.kt)("strong",{parentName:"li"},"630+")," functions, simple and easy to learn."),(0,r.kt)("li",{parentName:"ul"},"Simple to learn, all in string-based and compact."),(0,r.kt)("li",{parentName:"ul"},"Support of extensions available to be used by the community.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install aoi.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add aoi.js\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { AoiClient } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["MessageContent", "Guilds", "GuildMessages"],\n    events: ["onMessage", "onInteractionCreate"]\n});\n\n// Ping Command Example\nbot.command({\n    name: "ping",\n    code: `Pong! $pingms`\n});\n\n// Slash Interaction Command Example (ping)\n/* You must execute the function below for the slash command to work:\n$createApplicationCommand[$guildID;ping;Pong!;true;slash]\n*/\nbot.interactionCommand({\n    name: "ping",\n    prototype: "slash",\n    code: `$interactionReply[Pong! $pingms;;;;everyone;false]`\n});\n')),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/aoi.js"},"Aoi.js"))," is not affiliated or associated with Discord or any other services."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aoi.js.org"},"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/aoi.js"},"NPM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AkaruiDevelopment/aoi.js"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/HMUfMXDQsV"},"Discord Support Server"))))}u.isMDXComponent=!0}}]);