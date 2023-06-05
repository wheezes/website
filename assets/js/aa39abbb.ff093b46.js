"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,g=p["".concat(a,".").concat(f)]||p[f]||s[f]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={title:"$guildCount",description:"$guildCount will return the amount of guilds of where your bot is in.",id:"guildCount"},l=void 0,u={unversionedId:"functions/guild-related/guildCount",id:"functions/guild-related/guildCount",title:"$guildCount",description:"$guildCount will return the amount of guilds of where your bot is in.",source:"@site/docs/functions/guild-related/guildCount.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildCount",permalink:"/docs/functions/guild-related/guildCount",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1685991880,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{title:"$guildCount",description:"$guildCount will return the amount of guilds of where your bot is in.",id:"guildCount"},sidebar:"docs",previous:{title:"$guildContentFilter",permalink:"/docs/functions/guild-related/guildContentFilter"},next:{title:"$guildDefaultMessageNotifications",permalink:"/docs/functions/guild-related/guildDefaultMessageNotifications"}},a={},d=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$guildCount")," will return the amount of guilds where your bot is in."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$guildCount\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will return the amount of guilds your bot is in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildCount',\n    code: `\n  I'm in $guildCount guilds!\n  `\n});\n")))}s.isMDXComponent=!0}}]);