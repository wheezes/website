"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7771],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(a),s=r,g=d["".concat(p,".").concat(s)]||d[s]||u[s]||l;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},69722:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>f,contentTitle:()=>k,default:()=>O,frontMatter:()=>g,metadata:()=>N,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&c(t,a,e[a]);if(o)for(var a of o(e))m.call(e,a)&&c(t,a,e[a]);return t},u=(t,e)=>l(t,i(e)),s=(t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a};const g={title:"$createApplicationCommand",description:"$createApplicationCommand will create an application command.",id:"createApplicationCommand"},k=void 0,N={unversionedId:"functions/interaction-related/createApplicationCommand",id:"version-6.4.0/functions/interaction-related/createApplicationCommand",title:"$createApplicationCommand",description:"$createApplicationCommand will create an application command.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/createApplicationCommand.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/createApplicationCommand",permalink:"/ru/docs/functions/interaction-related/createApplicationCommand",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$createApplicationCommand",description:"$createApplicationCommand will create an application command.",id:"createApplicationCommand"},sidebar:"docs",previous:{title:"$color",permalink:"/ru/docs/functions/interaction-related/color"},next:{title:"$createFile",permalink:"/ru/docs/functions/interaction-related/createFile"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},h="wrapper";function O(t){var e=t,{components:a}=e,r=s(e,["components"]);return(0,n.kt)(h,u(d(d({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$createApplicationCommand")," will create an application command."),(0,n.kt)("h2",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createApplicationCommand[guildID/global;name;description;defaultPermission;type?;options?]\n")),(0,n.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"guildID/global"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string. integer"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Application command type. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"global")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"specific guildID")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Application command name, must be lowercase."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"description"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Application command description."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"defaultPermissions"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"If the command should follow the default permissions."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"type?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The application command type. (slash/user/message)"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"options?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Application command options."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",null," Application Command Option Type ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"NAME"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"ID"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"NOTE"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"SUB_COMMAND"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"SUB_COMMAND_GROUP"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"STRING"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"INTEGER"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Any Integer between -2^53 and 2^53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"BOOLEAN"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"USER"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"CHANNEL"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"7"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Includes all channel types + categories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ROLE"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"MENTIONABLE"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"9"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Includes users and roles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"NUMBER"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Any double between -2^53 and 2^53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ATTACHMENT"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"11"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"https://discord.com/developers/docs/resources/channel#attachment-object"}),"attachment")," object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can find more information in the ",(0,n.kt)("a",d({parentName:"strong"},{href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"}),"official documentation of Discord's API"),"."))),(0,n.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Check the Slash Command/Interaction guide for more information about slash commands!")),(0,n.kt)("p",null,"This will create a slash command without options:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID/global;example;slash command description!;true;slash]`\n});\n// Will create a slash commands without any user input, you can choose between global/$guildID to create a command globally or only for a specific guild.\n')))}O.isMDXComponent=!0}}]);