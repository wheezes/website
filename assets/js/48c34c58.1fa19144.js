"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},44206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"$referenceChannelID",description:"The ID of the channel where this user replied in"},i=void 0,c={unversionedId:"functions/referencechannelid",id:"version-5.5.5/functions/referencechannelid",title:"$referenceChannelID",description:"The ID of the channel where this user replied in",source:"@site/versioned_docs/version-5.5.5/functions/referencechannelid.md",sourceDirName:"functions",slug:"/functions/referencechannelid",permalink:"/docs/5.5.5/functions/referencechannelid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1686318580,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"$referenceChannelID",description:"The ID of the channel where this user replied in"},sidebar:"docs",previous:{title:"$reboot",permalink:"/docs/5.5.5/functions/reboot"},next:{title:"$referenceGuildID",permalink:"/docs/5.5.5/functions/referenceguildid"}},l={},s=[{value:"Example",id:"example",level:3}],p={toc:s};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the channel ID the user replied in"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "referencechannel",\ncode: `Reply Channel ID: $referenceChannelID`\n})\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Heres an example (I know it says MessageID but its basically the same)",src:t(60101).Z,width:"473",height:"71"})))}u.isMDXComponent=!0},60101:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image (14) (4) (4) (3) (1) (3)-cef0d06a2da4aeb13ae75c8043c7977d.png"}}]);