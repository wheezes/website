"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$textSplitMap",description:"Creates a loop over all the indexes of $textSplit"},v=void 0,y={unversionedId:"functions/textsplitmap",id:"version-5.5.5/functions/textsplitmap",title:"$textSplitMap",description:"Creates a loop over all the indexes of $textSplit",source:"@site/versioned_docs/version-5.5.5/functions/textsplitmap.md",sourceDirName:"functions",slug:"/functions/textsplitmap",permalink:"/es/docs/5.5.5/functions/textsplitmap",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"$textSplitMap",description:"Creates a loop over all the indexes of $textSplit"},sidebar:"docs",previous:{title:"$textSplit",permalink:"/es/docs/5.5.5/functions/textsplit"},next:{title:"$textTrim",permalink:"/es/docs/5.5.5/functions/texttrim"}},b={},g=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3}],x={toc:g},O="wrapper";function h(e){var t=e,{components:a}=t,o=m(t,["components"]);return(0,r.kt)(O,f(u(u({},x),o),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function creates a loop over all the values in $textSplit"),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$textSplitMap[awaitedCommand]\n")),(0,r.kt)("h3",u({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "loop",\ncode: `\n$textSplitMap[example]\n$textSplit[hi/hello/bye/goodbye;/]\n`\n})\n//TIP: To get the textSplit value itself, use $message[1]\n\nbot.awaitedCommand({\nname: "example",\ncode: `\nValue => $message[1]\n`\n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3586).Z,width:"403",height:"228"})))}h.isMDXComponent=!0},3586:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (65)-6ebe3d6fa3eb3cfeec9ea13e8508f8b2.png"}}]);