"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(r),f=a,d=p["".concat(c,".").concat(f)]||p[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>R,frontMatter:()=>d,metadata:()=>y,toc:()=>x});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))m.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$maxRam",description:"$maxRam retournera la quantit\xe9 maximale de RAM du bot.",id:"maxRam"},b=void 0,y={unversionedId:"functions/info-related/maxRam",id:"version-6.4.0/functions/info-related/maxRam",title:"$maxRam",description:"$maxRam retournera la quantit\xe9 maximale de RAM du bot.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/maxRam.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/maxRam",permalink:"/fr/docs/functions/info-related/maxRam",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$maxRam",description:"$maxRam retournera la quantit\xe9 maximale de RAM du bot.",id:"maxRam"},sidebar:"docs",previous:{title:"$userLowestRole",permalink:"/fr/docs/functions/info-related/lowestRole"},next:{title:"$maximumMembers",permalink:"/fr/docs/functions/info-related/maximumMembers"}},v={},x=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:x},g="wrapper";function R(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(g,s(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$maxRam")," retournera la quantit\xe9 maximale de RAM du bot."),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$maxRam\n")),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela retournera le nombre maximum de RAM disponible sur votre bot :"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'maxRam',\n    code: `\n  $maxRam\n  `\n});\n")))}R.isMDXComponent=!0}}]);