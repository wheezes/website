"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"$mentionType",description:"Uses an argument to determine the type of the mention."},a=void 0,p={unversionedId:"functions/mentiontype",id:"version-5.5.5/functions/mentiontype",title:"$mentionType",description:"Uses an argument to determine the type of the mention.",source:"@site/versioned_docs/version-5.5.5/functions/mentiontype.md",sourceDirName:"functions",slug:"/functions/mentiontype",permalink:"/docs/5.5.5/functions/mentiontype",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1686318580,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"$mentionType",description:"Uses an argument to determine the type of the mention."},sidebar:"docs",previous:{title:"$mentionedUsersCount",permalink:"/docs/5.5.5/functions/mentioneduserscount"},next:{title:"$message",permalink:"/docs/5.5.5/functions/message"}},c={},s=[{value:"Mention types:",id:"mention-types",level:4},{value:"Example command:",id:"example-command",level:4}],l={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns what type of mention the given argument is."),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$mentionType[mention argument]")),(0,o.kt)("h4",{id:"mention-types"},"Mention types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"user"),(0,o.kt)("li",{parentName:"ul"},"role"),(0,o.kt)("li",{parentName:"ul"},"channel"),(0,o.kt)("li",{parentName:"ul"},"none")),(0,o.kt)("h4",{id:"example-command"},"Example command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "mention",\ncode: `\nMention type in your message: $mentionType[$message]\n`\n})\n')))}m.isMDXComponent=!0}}]);