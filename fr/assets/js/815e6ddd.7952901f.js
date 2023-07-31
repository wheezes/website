"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>j,frontMatter:()=>y,metadata:()=>g,toc:()=>b});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e},f=(e,t)=>o(e,a(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={title:"$clientTyping",description:"$clientTyping fera \xe9crire votre bot dans un salon (montrer qu'il est entrain d'\xe9crire).",id:"clientTyping"},m=void 0,g={unversionedId:"functions/client-related/clientTyping",id:"version-6.4.0/functions/client-related/clientTyping",title:"$clientTyping",description:"$clientTyping fera \xe9crire votre bot dans un salon (montrer qu'il est entrain d'\xe9crire).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientTyping.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientTyping",permalink:"/fr/docs/functions/client-related/clientTyping",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$clientTyping",description:"$clientTyping fera \xe9crire votre bot dans un salon (montrer qu'il est entrain d'\xe9crire).",id:"clientTyping"},sidebar:"docs",previous:{title:"$clientToken",permalink:"/fr/docs/functions/client-related/clientToken"},next:{title:"$fetchClientValues",permalink:"/fr/docs/functions/client-related/fetchClientValues"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:b},T="wrapper";function j(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,r.kt)(T,f(u(u({},O),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$clientTyping")," fera \xe9crire votre bot dans un salon (montrer qu'il est entrain d'\xe9crire)."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$clientTyping\n")),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,'Ceci affichera votre bot entrain d\'\xe9crire puis enverra "Bonjour!" comme message :'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientTyping',\n    code: `\n  Bonjour !\n  $clientTyping\n  `\n});\n")))}j.isMDXComponent=!0}}]);