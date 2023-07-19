"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>w,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))d.call(t,a)&&u(e,a,t[a]);return e},p=(e,t)=>i(e,o(t)),m=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$awaitCmdReactions",description:"$awaitCmdReactions r\xe9pond lorsqu'un utilisateur r\xe9agit au message de la commande avec un \xe9moji sp\xe9cifique.",id:"awaitCmdReactions"},g=void 0,k={unversionedId:"functions/awaited-related/awaitCmdReactions",id:"version-6.4.0/functions/awaited-related/awaitCmdReactions",title:"$awaitCmdReactions",description:"$awaitCmdReactions r\xe9pond lorsqu'un utilisateur r\xe9agit au message de la commande avec un \xe9moji sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitCmdReactions.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitCmdReactions",permalink:"/fr/docs/functions/awaited-related/awaitCmdReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787809,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"$awaitCmdReactions",description:"$awaitCmdReactions r\xe9pond lorsqu'un utilisateur r\xe9agit au message de la commande avec un \xe9moji sp\xe9cifique.",id:"awaitCmdReactions"},sidebar:"docs",previous:{title:"$deleteArray",permalink:"/fr/docs/functions/array-related/deleteArray"},next:{title:"$awaitComponents",permalink:"/fr/docs/functions/awaited-related/awaitComponents"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:b},N="wrapper";function w(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(N,p(c(c({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitCmdReactions")," r\xe9pond lorsqu'un utilisateur r\xe9agit au message de la commande avec un \xe9moji sp\xe9cifique."),(0,n.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$awaitCmdReactions[filtreUtilisateur;temps;r\xe9actions;commandes;MessageD'erreur?;donn\xe9esAttendues?]\n")),(0,n.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"filtreUtilisateur"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\xc0 ce que le bot r\xe9pondra ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"everyone")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"Identifiant sp\xe9cifique d'utilisateur")," - tout identifiant d'utilisateur"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"temps"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Combien de temps la commande durera / quand la commande expire."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"r\xe9actions"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Les r\xe9actions que le bot \xe9coutera, vous pouvez s\xe9parer plusieurs \xe9motic\xf4nes par une virgule ( ",(0,n.kt)("inlineCode",{parentName:"td"},","),")"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"commandes"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Commandes qui seront ex\xe9cut\xe9es, vous pouvez s\xe9parer plusieurs commandes par une virgule ( ",(0,n.kt)("inlineCode",{parentName:"td"},","),")"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"messageD'erreur?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Message d'erreur lorsque la commande expire."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"donn\xe9esAttendues?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Donn\xe9es attendues."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Assurez-vous d'avoir ",(0,n.kt)("inlineCode",{parentName:"strong"},"GuildMessageReactions")," comme intention dans votre fichier principal.")),(0,n.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,'Ceci vous r\xe9pondra lorsque vous r\xe9agissez avec l\'\xe9moji "\u2764\ufe0f" \xe0 votre message de commande :'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitCmdReaction",\n    code: `\n  R\xe9agissez avec "\u2764\ufe0f" pour une surprise ! \n  $awaitCmdReactions[$authorID;10s;\u2764\ufe0f;awaitedCommandExample;Oups ! Vous n\'avez pas r\xe9agi dans les temps...]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommandExample",\n    code: `\n  Joli, vous avez r\xe9agi avec \u2764\ufe0f.\n  `\n});\n')))}w.isMDXComponent=!0}}]);