"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$guildChannels",description:"$guildChannels renverra tous les salons d'un serveur sp\xe9cifique.",id:"guildChannels"},g=void 0,v={unversionedId:"functions/guild-related/guildChannels",id:"version-6.4.0/functions/guild-related/guildChannels",title:"$guildChannels",description:"$guildChannels renverra tous les salons d'un serveur sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildChannels.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildChannels",permalink:"/fr/docs/functions/guild-related/guildChannels",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$guildChannels",description:"$guildChannels renverra tous les salons d'un serveur sp\xe9cifique.",id:"guildChannels"},sidebar:"docs",previous:{title:"$guildChannelExists",permalink:"/fr/docs/functions/guild-related/guildChannelExists"},next:{title:"$guildCommunityUpdatesChannelID",permalink:"/fr/docs/functions/guild-related/guildCommunityUpdatesChannelID"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:b},h="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,c(d(d({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildChannels")," renverra tous les salons d'un serveur sp\xe9cifique."),(0,r.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$guildChannels[IDsalon?;option?;s\xe9parateur?]\n")),(0,r.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IDserveur?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"L'ID du serveur."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"option ?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"L'option sur la fa\xe7on de renvoyer les salons ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"name")," (par d\xe9faut) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"id")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"mention")),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"s\xe9parateur?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"S\xe9parateur pour s\xe9parer les salons."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")))),(0,r.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela renverra tous les salons du serveur dans lequel la commande est ex\xe9cut\xe9e:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'salonServeur',\n    code: `\n  $guildChannels[$guildID;mention;, ]\n  `\n});\n")))}O.isMDXComponent=!0}}]);