"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93954],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=s,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const a={title:"$messagePublish"},o=void 0,i={unversionedId:"functions/messagepublish",id:"version-5.5.5/functions/messagepublish",title:"$messagePublish",description:"This function will publish the message \\(Only works in announcement channels\\)",source:"@site/versioned_docs/version-5.5.5/functions/messagepublish.md",sourceDirName:"functions",slug:"/functions/messagepublish",permalink:"/docs/5.5.5/functions/messagepublish",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687323095,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$messagePublish"},sidebar:"docs",previous:{title:"$messagePing",permalink:"/docs/5.5.5/functions/messageping"},next:{title:"$messageSlice",permalink:"/docs/5.5.5/functions/messageslice"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function will publish the message ","(","Only works in announcement channels",")"),(0,s.kt)("p",null,"Raw usage: ",(0,s.kt)("inlineCode",{parentName:"p"},"$messagePublish[Channel ID (Optional);Message ID (Optional)]")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: \"publish\",\n    code: `\n$messagePublish\nHello!\n    `\n})\n/**\n* With this the bot will send a message saying\n* 'Hello!'\n* And once the message was sent it will publish it\n* Sending it to every server who follows that\n* Announcements channel.\n*/\n")))}m.isMDXComponent=!0}}]);