"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[98424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&m(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&m(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),u=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const f={title:"Command Aliases",description:"Setting up Aliases for your Commands."},y=void 0,g={unversionedId:"guides/command-aliases",id:"version-5.5.5/guides/command-aliases",title:"Command Aliases",description:"Setting up Aliases for your Commands.",source:"@site/versioned_docs/version-5.5.5/guides/command-aliases.md",sourceDirName:"guides",slug:"/guides/command-aliases",permalink:"/es/docs/5.5.5/guides/command-aliases",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"Command Aliases",description:"Setting up Aliases for your Commands."},sidebar:"docs",previous:{title:"Client Status",permalink:"/es/docs/5.5.5/guides/client-status"},next:{title:"Command Handler",permalink:"/es/docs/5.5.5/guides/command-handler"}},v={},b=[{value:"Usage:",id:"usage",level:3},{value:"Aliases in your <code>command.js</code> in commands folder:",id:"aliases-in-your-commandjs-in-commands-folder",level:3},{value:"Example",id:"example",level:3}],O={toc:b},j="wrapper";function k(e){var n=e,{components:t}=n,a=u(n,["components"]);return(0,r.kt)(j,d(p(p({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",p({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"aliases: ['TEXT1','TEXT2']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: \"name\",\naliases: ['name2','name3'],\ncode: `code`\n})\n")),(0,r.kt)("h3",p({},{id:"aliases-in-your-commandjs-in-commands-folder"}),"Aliases in your ",(0,r.kt)("inlineCode",{parentName:"h3"},"command.js")," in commands folder:"),(0,r.kt)("h3",p({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"module.exports = ({\nname: \"ping\",\naliases: ['pong','info'],\ncode: `$pingms`\n})\n")))}k.isMDXComponent=!0}}]);