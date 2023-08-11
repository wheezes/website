"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||v[d]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},v=(e,t)=>a(e,s(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"Invite System",description:"This page is covering all about the built-in invite system .",id:"invite-system"},g=void 0,f={unversionedId:"guides/other/invite-system",id:"version-6.4.0/guides/other/invite-system",title:"Invite System",description:"This page is covering all about the built-in invite system .",source:"@site/versioned_docs/version-6.4.0/guides/other/3invitesystem.md",sourceDirName:"guides/other",slug:"/guides/other/invite-system",permalink:"/ru/docs/guides/other/invite-system",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"Invite System",description:"This page is covering all about the built-in invite system .",id:"invite-system"},sidebar:"docs",previous:{title:"Parser",permalink:"/ru/docs/guides/other/parser"},next:{title:"Message Formatting",permalink:"/ru/docs/guides/other/msgformatting"}},y={},b=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Setup",id:"setup",level:2},{value:"Invite Events",id:"invite-events",level:2},{value:"InviteCreate",id:"invitecreate",level:3},{value:"InviteDelete",id:"invitedelete",level:3}],h={toc:b},k="wrapper";function O(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,r.kt)(k,v(u(u({},h),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This page is about command options and what they do.")),(0,r.kt)("h2",u({},{id:"table-of-contents"}),"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#getting-started"}),"Getting Started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#setup"}),"Setup"))),(0,r.kt)("hr",null),(0,r.kt)("h2",u({},{id:"getting-started"}),"Getting Started"),(0,r.kt)("p",null,"The built-in invite system offers the ability to cache and manage your invites of specific servers."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),'const { AoiClient, LoadCommands, AoiInviteSystem } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: process.env.token,\n    prefix: "!",\n    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildInvites"],\n    events: ["onMessage", "onInviteCreate", "onInviteDelete"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    },\n    fetchInvites: {\n        cacheInviters: true,\n        enabled: true,\n    }\n});\n\nnew AoiInviteSystem(bot, true);\n')),(0,r.kt)("h2",u({},{id:"setup"}),"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="Invite Setup"',title:'"Invite','Setup"':!0}),"fetchInvites: {\n    cacheInviters : boolean,\n    enabled : boolean,\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="AoiInviteSystem Class"',title:'"AoiInviteSystem','Class"':!0}),"AoiInviteSystem(clientInstance, enableCaching)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",u({},{id:"invite-events"}),"Invite Events"),(0,r.kt)("h3",u({},{id:"invitecreate"}),"InviteCreate"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="inviteCreate"',title:'"inviteCreate"'}),"bot.inviteCreateCommand({\n    name?: string,\n    channel: integer,\n    code: string \n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="inviteCreate"',title:'"inviteCreate"'}),'module.exports = ({\n    name?: string,\n    type: "inviteCreate",\n    channel: integer,\n    code: string \n})\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"invitedelete"}),"InviteDelete"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="inviteDelete"',title:'"inviteDelete"'}),"bot.inviteDeleteCommand({\n    name?: string,\n    channel: integer,\n    code: string \n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="inviteDelete"',title:'"inviteDelete"'}),'module.exports = ({\n    name?: string,\n    type: "inviteDelete",\n    channel: integer,\n    code: string \n})\n')))}O.isMDXComponent=!0}}]);