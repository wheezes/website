"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={title:"$findTextSplitIndex",description:"Finds the index of the splitted value"},l=void 0,a={unversionedId:"functions/findtextsplitindex",id:"version-5.5.5/functions/findtextsplitindex",title:"$findTextSplitIndex",description:"Finds the index of the splitted value",source:"@site/versioned_docs/version-5.5.5/functions/findtextsplitindex.md",sourceDirName:"functions",slug:"/functions/findtextsplitindex",permalink:"/docs/5.5.5/functions/findtextsplitindex",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1686318580,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"$findTextSplitIndex",description:"Finds the index of the splitted value"},sidebar:"docs",previous:{title:"$findSpecialChars",permalink:"/docs/5.5.5/functions/findspecialchars"},next:{title:"$findUser",permalink:"/docs/5.5.5/functions/finduser"}},s={},d=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function finds the index/position of the value from $textSplit"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 1 field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Value ","(","Required",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$findTextSplitIndex[value]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value - The value we're using to find the index")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"findTextSplitIndex\",\ncode: `$findTextSplitIndex[f]\n$textSplit[s/f/a/c/g;/]`\n//$findTextSplitIndex would return '2'\n})\n")))}c.isMDXComponent=!0}}]);