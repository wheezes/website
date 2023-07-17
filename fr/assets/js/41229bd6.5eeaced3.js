"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,b=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>j,frontMatter:()=>b,metadata:()=>y,toc:()=>w});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>o(e,a(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const b={title:"Submit Wiki",description:"Submit a Wiki which will then be showcased on this website!",slug:"submit",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,y={permalink:"/fr/wikis/submit",source:"@site/forums/introduction.md",title:"Submit Wiki",description:"Submit a Wiki which will then be showcased on this website!",date:"2023-07-17T11:44:56.000Z",formattedDate:"17 juillet 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Submit Wiki",description:"Submit a Wiki which will then be showcased on this website!",slug:"submit",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},prevItem:{title:"Wiki Guidelines",permalink:"/fr/wikis/guidelines"},nextItem:{title:"Random memes",permalink:"/fr/wikis/posts/1029818509364047933/ryko5y"}},g={authorsImageUrls:[]},w=[],v=(O="SubmitForm",function(e){return console.warn("Component "+O+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",u({},e))});var O;const h={toc:w},k="wrapper";function j(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(k,f(u(u({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to Wikis, this is still ",(0,n.kt)("strong",{parentName:"p"},"experimental"),"."),(0,n.kt)("admonition",u({},{title:"Before Submitting",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Read the guidelines or your Wiki will possibly get denied for not following the guidelines.")),(0,n.kt)("div",null,(0,n.kt)(v,{mdxType:"SubmitForm"})))}j.isMDXComponent=!0}}]);