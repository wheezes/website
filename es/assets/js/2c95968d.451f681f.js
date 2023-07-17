"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified."},h=void 0,g={unversionedId:"functions/author",id:"version-5.5.5/functions/author",title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified.",source:"@site/versioned_docs/version-5.5.5/functions/author.md",sourceDirName:"functions",slug:"/functions/author",permalink:"/es/docs/5.5.5/functions/author",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified."},sidebar:"docs",previous:{title:"$attachment",permalink:"/es/docs/5.5.5/functions/attachment"},next:{title:"$authorAccentColor",permalink:"/es/docs/5.5.5/functions/authoraccentcolor"}},k={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Examples",id:"examples",level:2}],b={toc:y},v="wrapper";function N(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,d(s(s({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows you to add an 'author' to the embed message and an icon to the author if a URL is specified. "),(0,r.kt)("h3",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$author[index;text;icon url?;redirecting url?]\n")),(0,r.kt)("h3",s({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"index"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The author embed's index"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"text"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The text will show up on the author property"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"icon url?"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The icon will show up next to author property"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"url"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"redirecting url?"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The URL of the redirect link"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"url"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h6",s({},{id:"footnote"}),"Footnote"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The icon url must end with ",(0,r.kt)("inlineCode",{parentName:"em"},".png"),", ",(0,r.kt)("inlineCode",{parentName:"em"},".jpg")," or ",(0,r.kt)("inlineCode",{parentName:"em"},".gif"),"!")),(0,r.kt)("h2",s({},{id:"examples"}),"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without hyperlink and icon:")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "author",\n  code: `\n  $author[1;$username]\n  `\n//Returns the user\'s username\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With hyperlink and icon:")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n  name: \"author\",\n  code: `\n  $author[1;$username;$authorAvatar;https://aoi.js.org]\n  `\n//Returns user's username along with their icon and if clicked, will redirect to aoi.js' website\n});\n")))}N.isMDXComponent=!0}}]);