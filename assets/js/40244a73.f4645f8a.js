"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),f=r,d=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>j,default:()=>g,frontMatter:()=>d,metadata:()=>v,toc:()=>y});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))m.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&m.call(e,o)&&(n[o]=e[o]);return n};const d={title:"$allEmojiCount"},j=void 0,v={unversionedId:"functions/allemojicount",id:"version-5.5.5/functions/allemojicount",title:"$allEmojiCount",description:"This function returns the total amount of emojis the servers the bot is in have. This is the sum of all custom emojis of all servers the bot is member of.",source:"@site/versioned_docs/version-5.5.5/functions/allemojicount.md",sourceDirName:"functions",slug:"/functions/allemojicount",permalink:"/docs/5.5.5/functions/allemojicount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"$allEmojiCount"},sidebar:"docs",previous:{title:"$allChannelsCount",permalink:"/docs/5.5.5/functions/allchannelscount"},next:{title:"$allMembersCount",permalink:"/docs/5.5.5/functions/allmemberscount"}},b={},y=[{value:"Types:",id:"types",level:4},{value:"Total emoji count:",id:"total-emoji-count",level:4},{value:"Animated Emojis:",id:"animated-emojis",level:4},{value:"normal Emojis:",id:"normal-emojis",level:4}],h={toc:y},O="wrapper";function g(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,o.kt)(O,p(u(u({},h),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the total amount of emojis the servers the bot is in have. This is the sum of all custom emojis of all servers the bot is member of."),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$allEmojiCount[type (optional)]")),(0,o.kt)("h4",u({},{id:"types"}),"Types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"all")," or empty field => returns total amount of custom emojis the bot has access to (animated and normal)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"animated")," => returns amount of non-animated custom emojis emojis"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"normal")," => returns amount of non-animated custom emojis emojis")),(0,o.kt)("h4",u({},{id:"total-emoji-count"}),"Total emoji count:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount emojis`\n})\n')),(0,o.kt)("h4",u({},{id:"animated-emojis"}),"Animated Emojis:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount[animated] emojis`\n})\n')),(0,o.kt)("h4",u({},{id:"normal-emojis"}),"normal Emojis:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount[animated] emojis`\n})\n')))}g.isMDXComponent=!0}}]);