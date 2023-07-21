"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$updateCommands",description:"$updateCommands \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442 \u0432\u0430\u0448\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u043f\u0430\u043f\u043a\u0438 / \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c\u0438.",id:"updateCommands"},b=void 0,y={unversionedId:"functions/misc-related/updateCommands",id:"version-6.4.0/functions/misc-related/updateCommands",title:"$updateCommands",description:"$updateCommands \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442 \u0432\u0430\u0448\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u043f\u0430\u043f\u043a\u0438 / \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/updateCommands.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/updateCommands",permalink:"/ru/docs/functions/misc-related/updateCommands",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$updateCommands",description:"$updateCommands \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442 \u0432\u0430\u0448\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u043f\u0430\u043f\u043a\u0438 / \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c\u0438.",id:"updateCommands"},sidebar:"docs",previous:{title:"$timeZone",permalink:"/ru/docs/functions/misc-related/timeZone"},next:{title:"$useChannel",permalink:"/ru/docs/functions/misc-related/useChannel"}},O={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],g={toc:v},C="wrapper";function k(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(C,u(d(d({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$updateCommands")," \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442 \u0432\u0430\u0448\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u043f\u0430\u043f\u043a\u0438 / \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c\u0438."),(0,r.kt)("h2",d({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$updateCommands\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0411\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043a\u043e\u043c\u0430\u043d\u0434, \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0438\u0436\u0435:")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'const { AoiClient, LoadCommands } = \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f("aoi. s");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    \u043f\u0440\u0435\u0444\u0438\u043a\u0441: "DISCORD BOT PREFIX",\n    intents: ["GuildMessages", "MessageContent", "Guilds"], \u0441\u043e\u0431\u044b\u0442\u0438\u044f\n    : ["onMessage", "onInteractionCreate"],\n    \u0431\u0430\u0437\u0443: {\n        \u0442\u0438\u043f: "aoi. b",\n        db: require("@akarui/aoi. b"),\n        \u0442\u0430\u0431\u043b\u0438\u0446\u044b: ["\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f"],\n        \u043f\u0443\u0442\u044c: ". \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\nconst loader = new LoadCommands(bot);\nloader. oad(bot.cmd, "./commands/"); // \u0432\u0430\u0448 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043a\u043e\u043c\u0430\u043d\u0434.\n')),(0,r.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u043e\u0442\u0430 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0435\u0433\u043e:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "updateCommands",\n    code: `\n    $updateCommands\n    `\n});\n')))}k.isMDXComponent=!0}}]);