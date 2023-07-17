"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>x,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$textInputValue",description:"An output for interaction modal's option."},y=void 0,v={unversionedId:"functions/textinputvalue",id:"version-5.5.5/functions/textinputvalue",title:"$textInputValue",description:"An output for interaction modal's option.",source:"@site/versioned_docs/version-5.5.5/functions/textinputvalue.md",sourceDirName:"functions",slug:"/functions/textinputvalue",permalink:"/fr/docs/5.5.5/functions/textinputvalue",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 juil. 2023",frontMatter:{title:"$textInputValue",description:"An output for interaction modal's option."},sidebar:"docs",previous:{title:"$takeRoles",permalink:"/fr/docs/5.5.5/functions/takeroles"},next:{title:"$textSlice",permalink:"/fr/docs/5.5.5/functions/textslice"}},b={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],O={toc:g},k="wrapper";function x(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(k,f(s(s({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$textInputValue"),", returns the answer typed on modal."),(0,r.kt)("h3",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$textInputValue[customID]\n")),(0,r.kt)("h3",s({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"customID"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"Custom ID of text input"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",s({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'//Let\'s say user typed "4" on input\nbot.interactionCommand({\n  name: "profile", \n  prototype: \'slash\',\n  code: `\n  $interactionModal[Answer the question;questionModal;\n    {actionRow:\n      {textInput:2+2=?:1:answerInput}\n    }\n  ]\n  `\n});\n\nbot.interactionCommand({\n  name: "questionModal",\n  prototype: \'modal\',\n  code: `\n  $interactionReply[$textInputValue[answerInput]]\n  `\n});\n//Returns: 4\n')))}x.isMDXComponent=!0}}]);