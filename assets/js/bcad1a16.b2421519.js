"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[86504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Transcript Custom Function",description:"$transcript custom function which saves messages of a channel and formats them to a .html file.",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png"},tags:["aoi.js","Other","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,s={permalink:"/wikis/posts/428188716641812481/nw36qo",source:"@site/forums/posts/428188716641812481/nw36qo.md",title:"Transcript Custom Function",description:"$transcript custom function which saves messages of a channel and formats them to a .html file.",date:"2023-07-02T15:48:36.000Z",formattedDate:"July 2, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"Other",permalink:"/wikis/tags/other"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png",imageURL:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png"}],frontMatter:{title:"Transcript Custom Function",description:"$transcript custom function which saves messages of a channel and formats them to a .html file.",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png",imageURL:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png"},tags:["aoi.js","Other","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"fetchInvite function",permalink:"/wikis/posts/428188716641812481/6ftrh8"},nextItem:{title:"search function",permalink:"/wikis/posts/428188716641812481/wvkxjp"}},c={authorsImageUrls:[void 0]},l=[{value:"Usage",id:"usage",level:2},{value:"Preview:",id:"preview",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$transcript[channel?;loggingChannel?]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"channel ( optional ) -> the channel the transcript will be created of"),(0,r.kt)("li",{parentName:"ul"},"loggingChannel ( optional ) -> the channel the transcript will be sent to")),(0,r.kt)("p",null,"You need to install a separate package, called ",(0,r.kt)("inlineCode",{parentName:"p"},"discord-html-transcripts"),"."),(0,r.kt)("p",null,"Simple execute in your shell/console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"npm i discord-html-transcripts@latest\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You would put the following code in your main file, or in most cases your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n  name: "$transcript",\n  type: "djs",\n  code: async d => {\n    const discordTranscripts = require("discord-html-transcripts");\n    const data = d.util.aoiFunc(d);\n    const [channel = d.message.channel.id, logchannel = d.message.channel.id] = data.inside.splits;\n    let channelid = await d.util.getChannel(d, channel);\n    let loggingid = await d.util.getChannel(d, logchannel);\n    const attachment = await discordTranscripts.createTranscript(channelid, {\n      filename: "transcript.html",\n      saveImages: true,\n      poweredBy: false,\n    });\n\n    const f = await loggingid.send({\n      files: [attachment],\n    });\n\n    data.result = f;\n    return {\n      code: d.util.setCode(data),\n    };\n  }\n});\n')),(0,r.kt)("p",null,"After that execute the function and let the magic happen! (can take longer in large channels / many messages)"),(0,r.kt)("h2",{id:"preview"},"Preview:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Faf4a/website/assets/87046111/3e97944f-96e9-41df-9e75-ac3755b1a1aa",alt:"preview"})))}d.isMDXComponent=!0}}]);