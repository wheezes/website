"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},71519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>w,frontMatter:()=>g,metadata:()=>y,toc:()=>b});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&m(e,a,t[a]);return e},c=(e,t)=>i(e,l(t)),f=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const g={title:"$awaitMessages",description:"Awaits a message from given user ID or everyone in the channel."},u=void 0,y={unversionedId:"functions/awaitmessages",id:"version-5.5.5/functions/awaitmessages",title:"$awaitMessages",description:"Awaits a message from given user ID or everyone in the channel.",source:"@site/versioned_docs/version-5.5.5/functions/awaitmessages.md",sourceDirName:"functions",slug:"/functions/awaitmessages",permalink:"/docs/5.5.5/functions/awaitmessages",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"$awaitMessages",description:"Awaits a message from given user ID or everyone in the channel."},sidebar:"docs",previous:{title:"$awaitComponentsUntil",permalink:"/docs/5.5.5/functions/awaitcomponentsuntil"},next:{title:"$awaitMessageReactions",permalink:"/docs/5.5.5/functions/awaitmessagereactions"}},k={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],h={toc:b},N="wrapper";function w(e){var t=e,{components:a}=t,r=f(t,["components"]);return(0,n.kt)(N,c(d(d({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will respond to a user if the user says the given word(s) in the ",(0,n.kt)("inlineCode",{parentName:"p"},"reply")," slot."),(0,n.kt)("h3",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$awaitMessages[channel id;filter; time;replies;commands;error message?;awaited data?;dm?]\n")),(0,n.kt)("h3",d({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"channel id"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"ID of the channel where it will await message"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"filter"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"Is it only for given user ID or everyone"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"time"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The time left until error message appears"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"replies"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The bot, will reply to specific words"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"commands"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"Awaited commands to be triggered after user replied"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"errorMessage?"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"When x time runs out, the part of bot sending message."),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"data?"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"Await command's data"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"object"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"dm?"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"For making the awaited in the dm"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"boolean"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",d({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n  name: \"await-messages\",\n  code: `\n  $awaitMessages[$authorID;5s;Hello;hi;Uh, oh! You didn't say hello back to me...] \n  \n  Say Hello\n  `\n// When the user says 'Hello' it will execute the given awaited command name\n});\n\nbot.awaitedCommand({\n  name: \"hi\",\n  code: `\n  Hello $username!\n  `\n// This will respond when the user says 'Hello'\n});\n")))}w.isMDXComponent=!0}}]);