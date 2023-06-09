"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=s,d=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={title:"$messageID",description:"$messageID will return the message ID.",id:"messageID"},o=void 0,i={unversionedId:"functions/message-related/messageID",id:"version-6.2.6/functions/message-related/messageID",title:"$messageID",description:"$messageID will return the message ID.",source:"@site/versioned_docs/version-6.2.6/functions/message-related/messageID.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/messageID",permalink:"/docs/functions/message-related/messageID",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Leref",lastUpdatedAt:1686318580,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"$messageID",description:"$messageID will return the message ID.",id:"messageID"},sidebar:"docs",previous:{title:"$messageFlags",permalink:"/docs/functions/message-related/messageFlags"},next:{title:"$messagePing",permalink:"/docs/functions/message-related/messagePing"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"$messageID")," will return the message ID."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$messageID\n")),(0,s.kt)("h2",{id:"examples"},"Example(s)"),(0,s.kt)("p",null,"This will return the message ID of the message with which you executed the command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'messageID',\n    code: `\n  The message ID of your the message you just sent is: \"$messageID\"\n  `\n});\n")))}u.isMDXComponent=!0}}]);