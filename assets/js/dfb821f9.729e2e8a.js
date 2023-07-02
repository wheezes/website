"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"$msg"},o=void 0,i={unversionedId:"functions/msg",id:"version-5.5.5/functions/msg",title:"$msg",description:"This function returns the given message's specified property",source:"@site/versioned_docs/version-5.5.5/functions/msg.md",sourceDirName:"functions",slug:"/functions/msg",permalink:"/docs/5.5.5/functions/msg",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688312916,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$msg"},sidebar:"docs",previous:{title:"$moveUser",permalink:"/docs/5.5.5/functions/moveuser"},next:{title:"$multi",permalink:"/docs/5.5.5/functions/multi"}},l={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Properties",id:"properties",level:4},{value:"Usage",id:"usage",level:4}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the given message's specified property"),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 3 fields"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Channel ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Message ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$msg[channelID;messageID;property]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Channel ID - The channel where the ","<","message",">"," is"),(0,a.kt)("li",{parentName:"ul"},"Message ID - The message the properties are based off of"),(0,a.kt)("li",{parentName:"ul"},"Property - The property you want to get from ","<","message",">")),(0,a.kt)("h4",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"author - Message's Author's ID"),(0,a.kt)("li",{parentName:"ul"},"authormention - Message's Author's mention"),(0,a.kt)("li",{parentName:"ul"},"authortag - Message's Author's tag"),(0,a.kt)("li",{parentName:"ul"},"authorname - Message's Author's name"),(0,a.kt)("li",{parentName:"ul"},"channel - Message's channel id location"),(0,a.kt)("li",{parentName:"ul"},"channelname - Message's channel name location"),(0,a.kt)("li",{parentName:"ul"},"cleancontent - Message's content without any mentions ","(","excludes @here/@everyone",")"),(0,a.kt)("li",{parentName:"ul"},"content - Message's content"),(0,a.kt)("li",{parentName:"ul"},"created - Message's date and time of creation"),(0,a.kt)("li",{parentName:"ul"},"guildid - Message's guild's id of origin"),(0,a.kt)("li",{parentName:"ul"},"id - Message's ID"),(0,a.kt)("li",{parentName:"ul"},"isdeletable - Whether or not the author of the command can delete the message, Returns Boolean"),(0,a.kt)("li",{parentName:"ul"},"isdeleted - Whether or not the message is deleted, Returns Boolean"),(0,a.kt)("li",{parentName:"ul"},"iseditable - Whether or not the author of the command can edit the message, Returns Boolean"),(0,a.kt)("li",{parentName:"ul"},"ispinnable - Whether or not the author of the command can pin the message, Returns Boolean"),(0,a.kt)("li",{parentName:"ul"},"ispinned - Whether or not the message is pinned, Returns Boolean"),(0,a.kt)("li",{parentName:"ul"},"rawcontent - Message's content without ANY mentions"),(0,a.kt)("li",{parentName:"ul"},"guildname - Message's guild's name of origin"),(0,a.kt)("li",{parentName:"ul"},"url - Message's url")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Pre-specified message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "msg",\ncode: `\n$msg[818606405362909193;content]\n`\n})\n')),(0,a.kt)("p",null,"Specified Message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "msg",\ncode: `\n$msg[$message;content]\n`\n})\n')))}m.isMDXComponent=!0}}]);