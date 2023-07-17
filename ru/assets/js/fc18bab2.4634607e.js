"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[98720],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>y,default:()=>j,frontMatter:()=>d,metadata:()=>v,toc:()=>b});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&p(e,t,n[t]);return e},f=(e,n)=>a(e,l(n)),m=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$onlyIf",description:"Checks if a condition is true"},y=void 0,v={unversionedId:"functions/onlyif",id:"version-5.5.5/functions/onlyif",title:"$onlyIf",description:"Checks if a condition is true",source:"@site/versioned_docs/version-5.5.5/functions/onlyif.md",sourceDirName:"functions",slug:"/functions/onlyif",permalink:"/ru/docs/5.5.5/functions/onlyif",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$onlyIf",description:"Checks if a condition is true"},sidebar:"docs",previous:{title:"$onlyForServers",permalink:"/ru/docs/5.5.5/functions/onlyforservers"},next:{title:"$onlyIfMessageContains",permalink:"/ru/docs/5.5.5/functions/onlyifmessagecontains"}},g={},b=[{value:"Examples:",id:"examples",level:3}],O={toc:b},k="wrapper";function j(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(k,f(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function checks if the condition is true or not"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$onlyIf[value(!=/==/>=/<=/>/<)value2;error message]\n")),(0,r.kt)("h3",u({},{id:"examples"}),"Examples:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$onlyIf[value==value2;error message]")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$onlyIf[value!=value2;error message]")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$onlyIf[value&gt;value2;error message]")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$onlyIf[value&lt;value2;error message]")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$onlyIf[value&gt;=value2;error message]")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$onlyIf[value&lt;=value2;error message]")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "special",\ncode: `Special Command\n$onlyIf[15==6;:x: 15 doesn\'t equal 6!]`\n})\n')))}j.isMDXComponent=!0}}]);