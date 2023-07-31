"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$hoistedRole",description:"$hoistedRole renvoie le r\xf4le le plus haut affich\xe9 s\xe9par\xe9ment d'un utilisateur.",id:"hoistedRole"},h=void 0,g={unversionedId:"functions/info-related/hoistedRole",id:"version-6.4.0/functions/info-related/hoistedRole",title:"$hoistedRole",description:"$hoistedRole renvoie le r\xf4le le plus haut affich\xe9 s\xe9par\xe9ment d'un utilisateur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/hoistedRole.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/hoistedRole",permalink:"/fr/docs/functions/info-related/hoistedRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$hoistedRole",description:"$hoistedRole renvoie le r\xf4le le plus haut affich\xe9 s\xe9par\xe9ment d'un utilisateur.",id:"hoistedRole"},sidebar:"docs",previous:{title:"$highestRole",permalink:"/fr/docs/functions/info-related/highestRole"},next:{title:"$interactionPing",permalink:"/fr/docs/functions/info-related/interactionPing"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:b},y="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(y,d(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$hoistedRole")," renvoie le r\xf4le le plus haut affich\xe9 s\xe9par\xe9ment d'un utilisateur."),(0,n.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$hoistedRole[IDutilisateur?;IDserveur?;option?]\n")),(0,n.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IDutilisateur?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"L'ID de l'utilisateur."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IDserveur?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"l'ID du serveur."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"option?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"L'option comment retourner le r\xf4le ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"name")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"id"),"  (par d\xe9faut) ",(0,n.kt)("br",null)," 3. ",(0,n.kt)("strong",{parentName:"td"},"mention")),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Faux")))),(0,n.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela renverra le nom de votre r\xf4le le plus \xe9lev\xe9 affich\xe9 s\xe9par\xe9ment :"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'hoistedRole',\n    code: `\n  $hoistedRole[$authorID;$guildID;name]\n  `\n});\n")))}O.isMDXComponent=!0}}]);