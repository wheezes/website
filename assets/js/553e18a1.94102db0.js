"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={title:"Some thread functions",description:"This wiki is about 3 custom functions for threads: lock, unlock and rename.",authors:{name:"@p4olo.",title:"Member - 713132410153205802",userid:"713132410153205802",url:"https://discord.com/users/713132410153205802",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},h=void 0,b={permalink:"/wikis/posts/713132410153205802/34unj",source:"@site/forums/posts/713132410153205802/34unj.md",title:"Some thread functions",description:"This wiki is about 3 custom functions for threads: lock, unlock and rename.",date:"2023-07-21T23:26:14.000Z",formattedDate:"July 21, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@p4olo.",title:"Member - 713132410153205802",userid:"713132410153205802",url:"https://discord.com/users/713132410153205802",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png"}],frontMatter:{title:"Some thread functions",description:"This wiki is about 3 custom functions for threads: lock, unlock and rename.",authors:{name:"@p4olo.",title:"Member - 713132410153205802",userid:"713132410153205802",url:"https://discord.com/users/713132410153205802",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/713132410153205802.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Reloading the Commands ",permalink:"/wikis/posts/693451182617657394/30bbab"},nextItem:{title:"Progression bar",permalink:"/wikis/posts/713132410153205802/c6h1efa"}},g={authorsImageUrls:[void 0]},y=[{value:"FUNCTIONS:",id:"functions",level:3},{value:"CODE:",id:"code",level:3}],w={toc:y},k="wrapper";function v(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,p(d(d({},w),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",d({},{id:"functions"}),"FUNCTIONS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$lockThread","[threadID]"),(0,r.kt)("li",{parentName:"ul"},"$unlockThread","[threadID]"),(0,r.kt)("li",{parentName:"ul"},"$renameThread","[threadID;newName]")),(0,r.kt)("h3",d({},{id:"code"}),"CODE:"),(0,r.kt)("p",null,"Put this code in you main file:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"bot.functionManager.createFunction(\n    {\n      name: \"$lockThread\",\n      type: \"djs\",\n      code: async (d) => {\n        const data = d.util.aoiFunc(d);\n        const [threadId] = data.inside.splits;\n  \n        const thread = await d.message.client.channels.fetch(threadId);\n  \n        try {\n          await thread.setLocked(true);\n\n          return {\n            code: d.util.setCode(data),\n          };\n        } catch (error) {\n          console.error(error);\n          return d.aoiError.fnError(d, 'custom', {}, 'Failed to lock thread');\n        }\n      },\n    },\n    {\n      name: \"$unlockThread\",\n      type: \"djs\",\n      code: async (d) => {\n        const data = d.util.aoiFunc(d);\n        const [threadId] = data.inside.splits;\n  \n        const thread = await d.message.client.channels.fetch(threadId);\n  \n        try {\n          await thread.setLocked(false);\n\n          return {\n            code: d.util.setCode(data),\n          };\n        } catch (error) {\n          console.error(error);\n          return d.aoiError.fnError(d, 'custom', {}, 'Failed to unlock thread');\n        }\n      },\n    },\n    {\n      name: \"$renameThread\",\n      type: \"djs\",\n      code: async (d) => {\n        const data = d.util.aoiFunc(d);\n        const [threadId, newName] = data.inside.splits;\n  \n        try {\n          const thread = await d.message.client.channels.fetch(threadId);\n  \n          await thread.setName(newName);\n\n          return {\n            code: d.util.setCode(data),\n          };\n          \n        } catch (error) {\n          console.error(error);\n          return d.aoiError.fnError(d, 'custom', {}, 'Failed to rename thread');\n        }\n      },\n    });\n")))}v.isMDXComponent=!0}}]);