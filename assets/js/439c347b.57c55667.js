"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69333],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return t?o.createElement(d,a(a({ref:n},u),{},{components:t})):o.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={title:"$moveSong"},a=void 0,s={unversionedId:"functions/movesong",id:"version-5.5.5/functions/movesong",title:"$moveSong",description:"This function moves a song from x to y. If y is an invalid position, it will remove the song from the queue",source:"@site/versioned_docs/version-5.5.5/functions/movesong.md",sourceDirName:"functions",slug:"/functions/movesong",permalink:"/docs/5.5.5/functions/movesong",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688252495,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"$moveSong"},sidebar:"docs",previous:{title:"$month",permalink:"/docs/5.5.5/functions/month"},next:{title:"$moveUser",permalink:"/docs/5.5.5/functions/moveuser"}},l={},c=[],u={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function moves a song from x to y. If ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is an invalid position, it will remove the song from the queue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$moveSong[from;to]\n")),(0,r.kt)("p",null,"First thing we should recognize our queue. Lets make up a queue to use for moveSong"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Marshmello ft. Bastille - Happier ","(","Official Music Video",")"),(0,r.kt)("li",{parentName:"ol"},"Lukas Graham - 7 Years ","[","Official Music Video","]"),(0,r.kt)("li",{parentName:"ol"},"Gotye - Somebody That I Used To Know ","(","feat. Kimbra",")"," - official music video")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "moveSong",\ncode: `\n$moveSong[2;3]\n`\n/*\nUsing our example queue, our code just moved\nthe second song in queue (Lukas Graham - 7 Years [Official Music Video])\nto the third song in queue\n\nSo our new queue will look like:\n1. Marshmello ft. Bastille - Happier (Official Music Video)\n2. Gotye - Somebody That I Used To Know (feat. Kimbra) - official music video\n3. Lukas Graham - 7 Years [Official Music Video]\n*/\n})\n')))}p.isMDXComponent=!0}}]);