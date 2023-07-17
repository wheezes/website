"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&d(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&l.call(e,o)&&(n[o]=e[o]);return n};const f={title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile."},h=void 0,b={unversionedId:"events/bot.onreactionadd",id:"version-5.5.5/events/bot.onreactionadd",title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onreactionadd.md",sourceDirName:"events",slug:"/events/bot.onreactionadd",permalink:"/es/docs/5.5.5/events/bot.onreactionadd",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"bot.onReactionAdd",description:"An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onRateLimit",permalink:"/es/docs/5.5.5/events/bot.onratelimit"},next:{title:"bot.onReactionRemove",permalink:"/es/docs/5.5.5/events/bot.onreactionremove"}},v={},g=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Functions:",id:"functions",level:4}],y={toc:g},k="wrapper";function O(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,o.kt)(k,p(u(u({},y),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h4",u({},{id:"usage"}),"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.reactionAddCommand({ //command\n        channel: "channel id", //the channel where the bot will log\n        code: `your code` //Message that will be sent to <channel>\n})\n')),(0,o.kt)("h4",u({},{id:"example-command"}),"Example Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.reactionAddCommand({\n        channel: "772414449839636490", \n        code: `$username has reacted with $emojiToString`\n})\n')),(0,o.kt)("h4",u({},{id:"functions"}),"Functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"/es/docs/5.5.5/functions/usermessageid"}),"$messageID")," => to get the messageID the user reacted"),(0,o.kt)("li",{parentName:"ul"},"$authorMessage => to get the authorID of the message the user reacted to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"/es/docs/5.5.5/functions/channelid"}),"$channelID "),"=> to get the channelID of the message"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"/es/docs/5.5.5/functions/authorid"}),"$authorID")," => the ID of the user that reacted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"/es/docs/5.5.5/functions/username"}),"$username")," => the username of the user that reacted")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can use functions like ",(0,o.kt)("a",u({parentName:"p"},{href:"/es/docs/5.5.5/functions/onlyforchannels"}),"$onlyForChannels")," or the functions from above in an ",(0,o.kt)("a",u({parentName:"p"},{href:"/es/docs/5.5.5/functions/onlyif"}),"$onlyIf")," limiter at the bottom of the code to limit your code to specific reactions etc.")))}O.isMDXComponent=!0}}]);