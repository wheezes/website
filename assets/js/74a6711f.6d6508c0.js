"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,v=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"bot.loopCommand",description:"A command that gets executed in an interval as a loop."},l=void 0,i={unversionedId:"events/bot.loopcommand",id:"version-5.5.5/events/bot.loopcommand",title:"bot.loopCommand",description:"A command that gets executed in an interval as a loop.",source:"@site/versioned_docs/version-5.5.5/events/bot.loopcommand.md",sourceDirName:"events",slug:"/events/bot.loopcommand",permalink:"/docs/5.5.5/events/bot.loopcommand",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1686318580,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"bot.loopCommand",description:"A command that gets executed in an interval as a loop."},sidebar:"docs",previous:{title:"How to use events",permalink:"/docs/5.5.5/events/"},next:{title:"bot.onBanAdd",permalink:"/docs/5.5.5/events/bot.onbanadd"}},p={},c=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command loops a code to run every x ",(0,o.kt)("strong",{parentName:"p"},"milliseconds.")),(0,o.kt)("p",null,"Properties are ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"every"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"executeOnStartup")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"channel")," ."),(0,o.kt)("p",null,"The properties ",(0,o.kt)("inlineCode",{parentName:"p"},"channel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"executeOnStartup")," are optional. "),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.loopCommand({\ncode: `\n...\n`,\nchannel: "channel id",\nexecuteOnStartup: true/false,\nevery: ms\n})\n')),(0,o.kt)("h4",{id:"example-command"},"Example command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.loopCommand({\ncode: `\nhi\n`,\nchannel: \"804505461076131840\",\nexecuteOnStartup: true,\nevery: 500000\n})\n\n/*\nThis command will send 'hi' to the given channel id every 5 minutes. \nExecuteOnStartup means when the bot starts/comes online, the loop will start\n*/\n")),(0,o.kt)("p",null,"Keep in mind that ",(0,o.kt)("inlineCode",{parentName:"p"},"every")," property is in ms! Watch out not to rate limit your bot!"))}m.isMDXComponent=!0}}]);