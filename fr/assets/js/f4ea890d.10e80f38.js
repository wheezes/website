"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$parseDate",description:"$parseDate will return the date/time for the given milliseconds",id:"parseDate"},y=void 0,g={unversionedId:"functions/util-related/parseDate",id:"version-6.4.0/functions/util-related/parseDate",title:"$parseDate",description:"$parseDate will return the date/time for the given milliseconds",source:"@site/versioned_docs/version-6.4.0/functions/util-related/parseDate.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/parseDate",permalink:"/fr/docs/functions/util-related/parseDate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689981974,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$parseDate",description:"$parseDate will return the date/time for the given milliseconds",id:"parseDate"},sidebar:"docs",previous:{title:"$onlyPerms",permalink:"/fr/docs/functions/util-related/onlyPerms"},next:{title:"$parseTime",permalink:"/fr/docs/functions/util-related/parseTime"}},k={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Types",id:"types",level:3},{value:"Example(s)",id:"examples",level:2}],v={toc:b},h="wrapper";function N(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(h,d(c(c({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$parseDate")," $parseDate will return the date/time for the given milliseconds"),(0,a.kt)("h2",c({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$parseDate[ms;type?]\n")),(0,a.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ms"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Time in ms you want to parse."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"type?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"The type in which the parsed date will be returned in."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h3",c({},{id:"types"}),"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Format"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"1 years, 1 week, 6 days, 8 hours, 16 minutes, 20 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"date"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"1/1/2023, 8:16:20 AM")))),(0,a.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return your current date in the ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," ",(0,a.kt)("a",c({parentName:"p"},{href:"#types"}),"format"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'parseDate',\n    code: `\n  $parseDate[$dateStamp;date]\n  `\n});\n")))}N.isMDXComponent=!0}}]);