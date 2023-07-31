"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19895],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>v});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},b=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,v=p["".concat(s,".").concat(b)]||p[b]||d[b]||l;return t?r.createElement(v,i(i({ref:a},c),{},{components:t})):r.createElement(v,i({ref:a},c))}));function v(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=b;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},99607:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>m,default:()=>j,frontMatter:()=>v,metadata:()=>f,toc:()=>h});var r=t(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,p=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(o)for(var t of o(a))u.call(a,t)&&c(e,t,a[t]);return e},d=(e,a)=>l(e,i(a)),b=(e,a)=>{var t={};for(var r in e)s.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))a.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const v={title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",id:"variables"},m=void 0,f={unversionedId:"guides/client/variables",id:"version-6.4.0/guides/client/variables",title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",source:"@site/versioned_docs/version-6.4.0/guides/client/4variables.md",sourceDirName:"guides/client",slug:"/guides/client/variables",permalink:"/docs/guides/client/variables",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",id:"variables"},sidebar:"docs",previous:{title:"Command Handler",permalink:"/docs/guides/client/handler"},next:{title:"Client Status",permalink:"/docs/guides/client/status"}},g={},h=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Using Variables",id:"using-variables",level:3},{value:"Variable Handlers",id:"variable-handlers",level:2}],y={toc:h},k="wrapper";function j(e){var a=e,{components:t}=a,n=b(a,["components"]);return(0,r.kt)(k,d(p(p({},y),n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will provide you with a comprehensive understanding of variables."),(0,r.kt)("h3",p({},{id:"table-of-contents"}),"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#using-variables"}),"Using Variables")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#variable-handlers"}),"Variable Handlers"))),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"using-variables"}),"Using Variables"),(0,r.kt)("p",null,"Variables are useful tools in programming that allow you to store values that can be accessed and manipulated throughout your code. To use a variable, you first need to declare it by giving it a name and assigning a value to it."),(0,r.kt)("p",null,"One way to do this is by using the following code snippet in your main file (usually named ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'bot.variables({\n    variableName: boolean,\n    variableName: number,\n    variableName: object,\n    variableName: "string"\n});\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.variables()")," function takes an object as an argument, where each property represents a variable name and its corresponding value."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="index.js"',title:'"index.js"'}),'bot.variables({\n    blacklisted: false,\n    money: 0,\n    developers: {},\n    title: "none"\n});\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",p({},{id:"variable-handlers"}),"Variable Handlers"),(0,r.kt)("p",null,"Another way to use variables is by using a variable handler, which can help keep your main file organized and cleaner. To set up a variable handler, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Create a directory called "',(0,r.kt)("strong",{parentName:"li"},"handler"),'".'),(0,r.kt)("li",{parentName:"ol"},'Create a file inside the directory named "',(0,r.kt)("strong",{parentName:"li"},"variables.js"),'".'),(0,r.kt)("li",{parentName:"ol"},"In your main file, add the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),"require('./handler/variables.js')(bot);\n")),(0,r.kt)("ol",p({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"variables.js")," file, create an array of objects, where each object represents a variable name and its corresponding value:")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'module.exports = (bot) => { \n bot.variables({\n    variableName: boolean,\n    variableName: number,\n    variableName: object,\n    variableName: "string"\n });\n}\n')),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="handler/variables.js"',title:'"handler/variables.js"'}),'module.exports = (bot) => { \n bot.variables({\n    blacklisted: false,\n    money: 0,\n    developers: {},\n    title: "none"\n }); \n}\n')),(0,r.kt)("p",null,"With these steps, you now have a working variable handler, which can help you keep your code organized and easier to manage."))}j.isMDXComponent=!0}}]);