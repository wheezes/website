"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||l;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>N,frontMatter:()=>d,metadata:()=>h,toc:()=>k});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),f=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const d={title:"$categoryChannels"},g=void 0,h={unversionedId:"functions/categorychannels",id:"version-5.5.5/functions/categorychannels",title:"$categoryChannels",description:"This functions returns all the channels in the given category",source:"@site/versioned_docs/version-5.5.5/functions/categorychannels.md",sourceDirName:"functions",slug:"/functions/categorychannels",permalink:"/es/docs/5.5.5/functions/categorychannels",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689594296,formattedLastUpdatedAt:"17 jul 2023",frontMatter:{title:"$categoryChannels"},sidebar:"docs",previous:{title:"$cacheMembers",permalink:"/es/docs/5.5.5/functions/cachemembers"},next:{title:"$changeNickname",permalink:"/es/docs/5.5.5/functions/changenickname"}},y={},k=[{value:"Fields",id:"fields",level:4},{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields-1",level:3},{value:"Options",id:"options",level:4},{value:"Example",id:"example",level:2}],b={toc:k},v="wrapper";function N(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,a.kt)(v,m(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This functions returns all the channels in the given category"),(0,a.kt)("h4",u({},{id:"fields"}),"Fields"),(0,a.kt)("p",null,"This function has 2 required fields"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Category ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"P ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Separator ","(","Optional",")")),(0,a.kt)("h3",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$categoryChannels[categoryID;option?;separator?)]\n")),(0,a.kt)("h3",u({},{id:"fields-1"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"category ID"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The category we're getting the channels from"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"option"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The option we're getting from each channel"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"separator"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The separator that separates each option"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h4",u({},{id:"options"}),"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"count - The amount of channels in the category"),(0,a.kt)("li",{parentName:"ul"},"names - The name of the channel"),(0,a.kt)("li",{parentName:"ul"},"id - The id of the channel"),(0,a.kt)("li",{parentName:"ul"},"mention - The channel mention")),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Without optional fields")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "categoryChannels",\ncode: `$categoryChannels[773356383625150505]`\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With optional fields")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "categoryChannels",\ncode: `$categoryChannels[773356383625150505;names,]`\n})\n')))}N.isMDXComponent=!0}}]);