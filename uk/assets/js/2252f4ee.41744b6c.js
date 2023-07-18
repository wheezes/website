"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),s=a,m=d["".concat(c,".").concat(s)]||d[s]||f[s]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},39824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),s=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$forEachRole",description:"$forEachRole \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u043c\u0435 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u043a\u043e\u043c\u0430\u043d\u0434\u0438 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0457 \u0440\u043e\u043b\u0456 \u0443 \u0434\u0430\u043d\u0456\u0439 \u0433\u0456\u043b\u044c\u0434\u0456\u0457.",id:"forEachRole"},g=void 0,y={unversionedId:"functions/misc-related/forEachRole",id:"version-6.4.0/functions/misc-related/forEachRole",title:"$forEachRole",description:"$forEachRole \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u043c\u0435 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u043a\u043e\u043c\u0430\u043d\u0434\u0438 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0457 \u0440\u043e\u043b\u0456 \u0443 \u0434\u0430\u043d\u0456\u0439 \u0433\u0456\u043b\u044c\u0434\u0456\u0457.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/forEachRole.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/forEachRole",permalink:"/uk/docs/functions/misc-related/forEachRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689685664,formattedLastUpdatedAt:"18 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$forEachRole",description:"$forEachRole \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u043c\u0435 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u043a\u043e\u043c\u0430\u043d\u0434\u0438 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0457 \u0440\u043e\u043b\u0456 \u0443 \u0434\u0430\u043d\u0456\u0439 \u0433\u0456\u043b\u044c\u0434\u0456\u0457.",id:"forEachRole"},sidebar:"docs",previous:{title:"$forEachMember",permalink:"/uk/docs/functions/misc-related/forEachMember"},next:{title:"$forEachUser",permalink:"/uk/docs/functions/misc-related/forEachUser"}},b={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2}],h={toc:k},v="wrapper";function O(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(v,f(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$forEachRole")," \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u043c\u0435 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u043a\u043e\u043c\u0430\u043d\u0434\u0438 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0457 \u0440\u043e\u043b\u0456 \u0432 \u0434\u0430\u043d\u0456\u0439 \u0433\u0456\u043b\u044c\u0434\u0456\u0457."),(0,n.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$forEachRole[guildID;time;awaitData;...awaitedCmds;endCmd]\n")),(0,n.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u0430\u0437"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0427\u0430\u0441 \u0446\u044c\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u043c\u0456\u0436 \u043a\u043e\u0436\u043d\u043e\u044e \u0440\u043e\u043b\u043b\u044e \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"awaitData"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043e\u0431'\u0454\u043a\u0442"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u0414\u0430\u043d\u0456."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"...\u043e\u0447\u0456\u043a\u0443\u044e\u0442\u044c CyanogenMod"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Awaited \u041a\u043e\u043c\u0430\u043d\u0434\u0438 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0427\u0435\u043d\u0434\u043c"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 Awaited \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u043f\u0440\u0438 \u0437\u0430\u043a\u0456\u043d\u0447\u0435\u043d\u043d\u0456 \u0446\u0438\u043a\u043b\u0456\u0432."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))))}O.isMDXComponent=!0}}]);