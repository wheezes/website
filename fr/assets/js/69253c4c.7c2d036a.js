"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[10246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>j});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$allEmojisCount",description:"$allEmojisCount renvoie le nombre d'\xe9mojis d'un type donn\xe9.",id:"allEmojisCount"},b=void 0,y={unversionedId:"functions/info-related/allEmojisCount",id:"version-6.4.0/functions/info-related/allEmojisCount",title:"$allEmojisCount",description:"$allEmojisCount renvoie le nombre d'\xe9mojis d'un type donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/allEmojisCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/allEmojisCount",permalink:"/fr/docs/functions/info-related/allEmojisCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689685664,formattedLastUpdatedAt:"18 juil. 2023",frontMatter:{title:"$allEmojisCount",description:"$allEmojisCount renvoie le nombre d'\xe9mojis d'un type donn\xe9.",id:"allEmojisCount"},sidebar:"docs",previous:{title:"$allChannelsCount",permalink:"/fr/docs/functions/info-related/allChannelsCount"},next:{title:"$allMembersCount",permalink:"/fr/docs/functions/info-related/allMembersCount"}},v={},j=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:j},k="wrapper";function O(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(k,c(m(m({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$allEmojisCount")," renvoie le nombre d'\xe9mojis d'un type donn\xe9."),(0,r.kt)("h2",m({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$allEmojisCount[type?]\n")),(0,r.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"type?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Type que vous voulez que le montant soit retourn\xe9."),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"faux")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type d'\xe9moji"),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\xc9mojis anim\xe9s"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"animated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\xc9mojis stables"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"normal")))),(0,r.kt)("h2",m({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera le nombre d'\xe9mojis dans votre serveur :"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'allEmojisCount',\n    code: `\n  $allEmojisCount\n  `\n});\n")))}O.isMDXComponent=!0}}]);