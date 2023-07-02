"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,u=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return n?i.createElement(u,a(a({ref:t},f),{},{components:n})):i.createElement(u,a({ref:t},f))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"$fileSize",description:"Returns the size Of file in The project In the Provided Unit"},a=void 0,l={unversionedId:"functions/filesize",id:"version-5.5.5/functions/filesize",title:"$fileSize",description:"Returns the size Of file in The project In the Provided Unit",source:"@site/versioned_docs/version-5.5.5/functions/filesize.md",sourceDirName:"functions",slug:"/functions/filesize",permalink:"/docs/5.5.5/functions/filesize",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688312916,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$fileSize",description:"Returns the size Of file in The project In the Provided Unit"},sidebar:"docs",previous:{title:"$fileExists",permalink:"/docs/5.5.5/functions/fileexists"},next:{title:"$filterMessage",permalink:"/docs/5.5.5/functions/filtermessage"}},s={},c=[{value:"Units:",id:"units",level:4},{value:"Example Command:",id:"example-command",level:4}],f={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,i.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this function you can check the size of the given file in your bot's host."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$fileSize[file path;unit]")),(0,r.kt)("h4",{id:"units"},"Units:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"b")," => bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kb")," => kilobytes (1,000 bytes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mb")," => megabytes (1,000,000 bytes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gb")," => gigabytes (1,000,000,000 bytes)")),(0,r.kt)("h4",{id:"example-command"},"Example Command:"),(0,r.kt)("p",null,"Using a file from the main folder to return it's size in kilobytes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'bot.command({\nname: "file-size",\ncode: `\n$fileSize[server.js;kb]\n`\n})\n')),(0,r.kt)("p",null,"Using a file from another folder to return it's size in megabytes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'bot.command({\nname: "file-size",\ncode: `\n$fileSize[commands/moderation/anti_invite.js;mb]\n`\n})\n')),(0,r.kt)("p",null,"To use a file that's inside a folder, use it's path in the file path field like in the example above."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"example file path: commands/moderation/anti_invite.js",src:n(76500).Z,width:"432",height:"54"})))}p.isMDXComponent=!0},76500:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);