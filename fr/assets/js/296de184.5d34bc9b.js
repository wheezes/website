"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57840],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>j,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var r=t(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&s(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&s(e,t,n[t]);return e},f=(e,n)=>o(e,a(n)),d=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$interactionPing",description:"$interactionPing renverra la latence d'une interaction.",id:"interactionPing"},g=void 0,v={unversionedId:"functions/info-related/interactionPing",id:"version-6.4.0/functions/info-related/interactionPing",title:"$interactionPing",description:"$interactionPing renverra la latence d'une interaction.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/interactionPing.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/interactionPing",permalink:"/fr/docs/functions/info-related/interactionPing",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$interactionPing",description:"$interactionPing renverra la latence d'une interaction.",id:"interactionPing"},sidebar:"docs",previous:{title:"$hoistedRole",permalink:"/fr/docs/functions/info-related/hoistedRole"},next:{title:"$userLowestRole",permalink:"/fr/docs/functions/info-related/lowestRole"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:b},P="wrapper";function j(e){var n=e,{components:t}=n,i=d(n,["components"]);return(0,r.kt)(P,f(u(u({},O),i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionPing")," renverra la latence d'une interaction."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$interactionPing\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Veuillez noter que vous avez besoin de ",(0,r.kt)("inlineCode",{parentName:"strong"},'events: ["onInteractionCreate"]')," dans votre fichier principal")),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera la latence d'une interaction :"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'interactionPing',\n    code: `\n $addButton[1;Test;primary;boutonTest;false]\n Cliquez sur moi !\n  `\n});\n\nbot.interactionCommand({\n    name: 'boutonTest',\n    prototype: 'button',\n    code: `\n  $interactionUpdate[Cela m'a pris : $interactionPing Ms !]\n  `\n});\n")))}j.isMDXComponent=!0}}]);