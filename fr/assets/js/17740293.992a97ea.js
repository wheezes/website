"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))i.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>o(e,s(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&i.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$alwaysExecute",description:"A command property that you can paste in the command's name field to trigger the command with every message."},y=void 0,g={unversionedId:"functions/alwaysexecute",id:"version-5.5.5/functions/alwaysexecute",title:"$alwaysExecute",description:"A command property that you can paste in the command's name field to trigger the command with every message.",source:"@site/versioned_docs/version-5.5.5/functions/alwaysexecute.md",sourceDirName:"functions",slug:"/functions/alwaysexecute",permalink:"/fr/docs/5.5.5/functions/alwaysexecute",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 juil. 2023",frontMatter:{title:"$alwaysExecute",description:"A command property that you can paste in the command's name field to trigger the command with every message."},sidebar:"docs",previous:{title:"$allMembersCount",permalink:"/fr/docs/5.5.5/functions/allmemberscount"},next:{title:"$appendFile",permalink:"/fr/docs/5.5.5/functions/appendfile"}},v={},b=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],w={toc:b},O="wrapper";function h(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,m(u(u({},w),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$alwaysExecute")," is a function will allow the command to be triggered by ",(0,r.kt)("strong",{parentName:"p"},"every")," message an user sends."),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$alwaysExecute\n")),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("p",null,"There's your message counter for example command! "),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'//Message variable\nbot.variables({\n  messages: 0\n});\n\n//The command will execute whenever an user send a message\nbot.command({\n  name: "$alwaysExecute", \n  code: `\n  $setVar[messages;$sum[$getVar[messages];1]]\n  `\n//Adds 1 to messages variable\'s value for every message sent\n});\n')),(0,r.kt)("p",null,"That's it!"))}h.isMDXComponent=!0}}]);