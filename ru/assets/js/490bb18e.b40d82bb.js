"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>j,frontMatter:()=>g,metadata:()=>y,toc:()=>O});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,s(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$messageFlags"},d=void 0,y={unversionedId:"functions/messageflags",id:"version-5.5.5/functions/messageflags",title:"$messageFlags",description:"This function returns the flags of the bot's message",source:"@site/versioned_docs/version-5.5.5/functions/messageflags.md",sourceDirName:"functions",slug:"/functions/messageflags",permalink:"/ru/docs/5.5.5/functions/messageflags",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$messageFlags"},sidebar:"docs",previous:{title:"$messageExists",permalink:"/ru/docs/5.5.5/functions/messageexists"},next:{title:"$messagePing",permalink:"/ru/docs/5.5.5/functions/messageping"}},b={},O=[],v={toc:O},E="wrapper";function j(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(E,u(f(f({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the flags of the bot's message "),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "test",\ncode: `Hello\nFlags: $messageFlags\n`\n})\n/*\nAvalable Flags:\n- CROSSPOSTED\n- IS_CROSSPOST\n- SUPPRESS_EMBEDS\n- SOURCE_MESSAGE_DELETED\n- URGENT\n*/\n')))}j.isMDXComponent=!0}}]);