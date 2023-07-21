"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$useChannel",description:"$useChannel \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u043d\u0430\u043b \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0435\u0433\u043e.",id:"useChannel"},y=void 0,b={unversionedId:"functions/misc-related/useChannel",id:"version-6.4.0/functions/misc-related/useChannel",title:"$useChannel",description:"$useChannel \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u043d\u0430\u043b \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0435\u0433\u043e.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/useChannel.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/useChannel",permalink:"/ru/docs/functions/misc-related/useChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$useChannel",description:"$useChannel \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u043d\u0430\u043b \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0435\u0433\u043e.",id:"useChannel"},sidebar:"docs",previous:{title:"$updateCommands",permalink:"/ru/docs/functions/misc-related/updateCommands"},next:{title:"$wait",permalink:"/ru/docs/functions/misc-related/wait"}},h={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],g={toc:v},O="wrapper";function k(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,d(p(p({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$useChannel")," \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u043d\u0430\u043b \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0435\u0433\u043e."),(0,r.kt)("h2",p({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$useChannel[channelID]\n")),(0,r.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u0413\u0434\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u0432\u0441\u0442\u0430\u0432\u043a\u0443 \u0432 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0430\u043d\u0430\u043b:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "useChannel",\n    code: `\n    $description[Hello!]\n    $useChannel[$channelID]\n    `\n});\n')))}k.isMDXComponent=!0}}]);