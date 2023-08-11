"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,s=c["".concat(p,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>N,frontMatter:()=>s,metadata:()=>b,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const s={title:"$modifyWebhook",description:"$modifyWebhook \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0432\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u0432\u0435\u0431\u0433\u0430\u043a.",id:"modifyWebhook"},k=void 0,b={unversionedId:"functions/guild-related/modifyWebhook",id:"version-6.4.0/functions/guild-related/modifyWebhook",title:"$modifyWebhook",description:"$modifyWebhook \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0432\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u0432\u0435\u0431\u0433\u0430\u043a.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/modifyWebhook.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/modifyWebhook",permalink:"/uk/docs/functions/guild-related/modifyWebhook",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691714235,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$modifyWebhook",description:"$modifyWebhook \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0432\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u0432\u0435\u0431\u0433\u0430\u043a.",id:"modifyWebhook"},sidebar:"docs",previous:{title:"$modifyRolePerms",permalink:"/uk/docs/functions/guild-related/modifyRolePerms"},next:{title:"$ownerID",permalink:"/uk/docs/functions/guild-related/ownerID"}},y={},g=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],h={toc:g},v="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,m(c(c({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$modifyWebhook")," \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u0438\u0439 \u0432\u0435\u0431\u0445\u0443\u043a."),(0,r.kt)("h2",c({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$modifyWebhook[webhookID;name;avatar;channelID?;reason?]\n")),(0,r.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 webhookID"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u0432\u0435\u0431\u0445\u0443\u043a\u0430 (Webhook ID \u0434\u043b\u044f \u0437\u043c\u0456\u043d\u0438."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u041d\u043e\u0432\u0435 \u0456\u043c'\u044f \u0432\u0435\u0431\u0445\u0443\u043a\u0430."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0430\u0432\u0430\u0442\u0430\u0440"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0410\u0432\u0430\u0442\u0430\u0440 \u043d\u043e\u0432\u043e\u0433\u043e \u0432\u0435\u0431\u0433\u0430\u043a\u0430."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0443?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0443, \u0432 \u044f\u043a\u043e\u043c\u0443 \u0440\u043e\u0437\u043c\u0456\u0449\u0435\u043d\u0438\u0439 \u0432\u0435\u0431\u0445\u0443\u043a."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u043f\u0440\u0438\u0447\u0438\u043d\u0430?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u041f\u0440\u0438\u0447\u0438\u043d\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0456 \u0440\u043e\u0437\u043f\u0456\u0437\u043d\u0430\u0432\u0430\u043d\u043d\u044f \u0433\u0456\u043b\u044c\u0434\u0456\u0457."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,r.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"\u0426\u0435 \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u044e\u0447\u0438\u0439 \u0432\u0435\u0431\u0445\u0443\u043a \u0456 \u0437\u043c\u0456\u043d\u0438\u0442\u044c \u0439\u043e\u0433\u043e \u0430\u0432\u0430\u0442\u0430\u0440 \u043d\u0430 \u0432\u0430\u0448 \u0430\u0432\u0430\u0442\u0430\u0440 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'modifyWebhook',\n    \u043a\u043e\u0434: `\n  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f!]\n  `\n});\n")))}N.isMDXComponent=!0}}]);