"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,b=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>h,frontMatter:()=>b,metadata:()=>k,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),c=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$oldMember",description:"$oldMember conserve les donn\xe9es pour le membre avant sa mise \xe0 jour, ceci provient du cache de discord et peut \xeatre vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'acc\xe9der \xe0 n'importe quelle propri\xe9t\xe9. (\xe9v\xe8nement memberUpdate)",id:"oldMember"},v=void 0,k={unversionedId:"functions/event-related/oldMember",id:"version-6.4.0/functions/event-related/oldMember",title:"$oldMember",description:"$oldMember conserve les donn\xe9es pour le membre avant sa mise \xe0 jour, ceci provient du cache de discord et peut \xeatre vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'acc\xe9der \xe0 n'importe quelle propri\xe9t\xe9. (\xe9v\xe8nement memberUpdate)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/oldMember.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/oldMember",permalink:"/fr/docs/functions/event-related/oldMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 juil. 2023",frontMatter:{title:"$oldMember",description:"$oldMember conserve les donn\xe9es pour le membre avant sa mise \xe0 jour, ceci provient du cache de discord et peut \xeatre vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'acc\xe9der \xe0 n'importe quelle propri\xe9t\xe9. (\xe9v\xe8nement memberUpdate)",id:"oldMember"},sidebar:"docs",previous:{title:"$oldGuild",permalink:"/fr/docs/functions/event-related/oldGuild"},next:{title:"$oldMessage",permalink:"/fr/docs/functions/event-related/oldMessage"}},f={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Options",id:"options",level:3},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:g},N="wrapper";function h(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,r.kt)(N,m(s(s({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$oldMember")," conserve les donn\xe9es pour le membre avant sa mise \xe0 jour, ceci provient du cache de discord et peut \xeatre vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'acc\xe9der \xe0 n'importe quelle propri\xe9t\xe9. (\xe9v\xe8nement memberUpdate)"),(0,r.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$oldMember[option]\n")),(0,r.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Option \xe0 r\xe9cup\xe9rer."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("h3",s({},{id:"options"}),"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"id"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Retourne l'ID de l'utilisateur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Renvoie le nom de l'utilisateur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"roles"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Retourne les r\xf4les de l'utilisateur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"permissions"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Retourne les permissions de l'utilisateur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"nick"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Renvoie le surnom de l'utilisateur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"highestRoleID"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Retourne l'ID du plus haut r\xf4le de l'utilisateur.")))),(0,r.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note : vous avez besoin de l'intention ",(0,r.kt)("inlineCode",{parentName:"strong"},"GuildMembers"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),'bot.memberUpdateCommand({\n    channel: "channelid",\n    code: `\n    $username[$newMember[id]] a mis \xe0 jour son surnom !\n- Nouveau surnom : $newMember[nick]\n - Ancien surnom : $oldMember[nick]\n\n   $username[$newMember[id]] a mis \xe0 jour son nom !\n- Nouveau nom : $newMember[name]\n - Ancien nom : $oldMember[name].`\n})\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ce code sera ex\xe9cut\xe9 lorsque ",(0,r.kt)("strong",{parentName:"li"},"un membre met \xe0 jour son surnom de serveur ou son nom d'utilisateur discord"),".")),(0,r.kt)("hr",null))}h.isMDXComponent=!0}}]);