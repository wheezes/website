"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4662],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>C,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))u.call(n,t)&&c(e,t,n[t]);return e},d=(e,n)=>a(e,i(n)),m=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$mentionedChannelsCount",description:"$mentionedChannelsCount will return the amount of channel mentions within a message.",id:"mentionedChannelsCount"},h=void 0,y={unversionedId:"functions/util-related/mentionedChannelsCount",id:"version-6.4.0/functions/util-related/mentionedChannelsCount",title:"$mentionedChannelsCount",description:"$mentionedChannelsCount will return the amount of channel mentions within a message.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/mentionedChannelsCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedChannelsCount",permalink:"/fr/docs/functions/util-related/mentionedChannelsCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$mentionedChannelsCount",description:"$mentionedChannelsCount will return the amount of channel mentions within a message.",id:"mentionedChannelsCount"},sidebar:"docs",previous:{title:"$mentionedChannels",permalink:"/fr/docs/functions/util-related/mentionedChannels"},next:{title:"$mentionedRoles",permalink:"/fr/docs/functions/util-related/mentionedRoles"}},C={},v=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:v},g="wrapper";function O(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(g,d(p(p({},b),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedChannelsCount")," will return the amount of channel mentions within a message."),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$mentionedChannelsCount\n")),(0,r.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the amount of channel mentions in the given text:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedChannelsCount',\n    code: `\n  $mentionedChannelsCount\n  <#837531672341381190> <#869210515065426012> <#805852932938661900>\n  `\n});\n")))}O.isMDXComponent=!0}}]);