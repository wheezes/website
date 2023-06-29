"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[91592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"$checkCondition",description:"$checkCondition checks if a condition is either true or false.",id:"checkCondition"},l=void 0,o={unversionedId:"functions/util-related/checkCondition",id:"version-6.2.6/functions/util-related/checkCondition",title:"$checkCondition",description:"$checkCondition checks if a condition is either true or false.",source:"@site/versioned_docs/version-6.2.6/functions/util-related/checkCondition.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/checkCondition",permalink:"/docs/functions/util-related/checkCondition",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1688059645,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{title:"$checkCondition",description:"$checkCondition checks if a condition is either true or false.",id:"checkCondition"},sidebar:"docs",previous:{title:"$charCount",permalink:"/docs/functions/util-related/charCount"},next:{title:"$checkContains",permalink:"/docs/functions/util-related/checkContains"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Valid Mathematical Operators",id:"valid-mathematical-operators",level:4},{value:"Example(s)",id:"examples",level:2},{value:"Advanced Example",id:"advanced-example",level:3},{value:"Logical conjunction",id:"logical-conjunction",level:4},{value:"Logical OR",id:"logical-or",level:4}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$checkCondition")," checks if a condition is either true or false."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$checkCondition[condition]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"condition"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Condition you want to check."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,r.kt)("h4",{id:"valid-mathematical-operators"},"Valid Mathematical Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Mathematical Expression"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"=="),(0,r.kt)("td",{parentName:"tr",align:null},"equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"!="),(0,r.kt)("td",{parentName:"tr",align:null},"not equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<="),(0,r.kt)("td",{parentName:"tr",align:null},"less than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">","="),(0,r.kt)("td",{parentName:"tr",align:null},"greater than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"greater than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<"),(0,r.kt)("td",{parentName:"tr",align:null},"less than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"|","|"),(0,r.kt)("td",{parentName:"tr",align:null},"logical OR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&&"),(0,r.kt)("td",{parentName:"tr",align:null},"logical conjunction")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"50")," is greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"25"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'checkCondition',\n    code: `\n  $checkCondition[50>25]\n  `\n});\n")),(0,r.kt)("h3",{id:"advanced-example"},"Advanced Example"),(0,r.kt)("h4",{id:"logical-conjunction"},"Logical conjunction"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"50")," is greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"25")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"120")," is less than ",(0,r.kt)("inlineCode",{parentName:"p"},"280"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'checkCondition',\n    code: `\n  $checkCondition[50>25&&120<280]\n  `\n});\n")),(0,r.kt)("h4",{id:"logical-or"},"Logical OR"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," as one of the two arguments (",(0,r.kt)("inlineCode",{parentName:"p"},"50>25"),") are ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'checkCondition',\n    code: `\n  $checkCondition[50>25||true==false]\n  `\n});\n")))}s.isMDXComponent=!0}}]);