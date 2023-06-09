"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"$isAutoComplete",description:"$isAutoComplete will return either true or false depending on the entered slash command option being auto completed or not. (autoCompleteRespond function)",id:"isAutoComplete"},i=void 0,l={unversionedId:"functions/interaction-related/isAutoComplete",id:"version-6.2.6/functions/interaction-related/isAutoComplete",title:"$isAutoComplete",description:"$isAutoComplete will return either true or false depending on the entered slash command option being auto completed or not. (autoCompleteRespond function)",source:"@site/versioned_docs/version-6.2.6/functions/interaction-related/isAutoComplete.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/isAutoComplete",permalink:"/docs/functions/interaction-related/isAutoComplete",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Leref",lastUpdatedAt:1686318580,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"$isAutoComplete",description:"$isAutoComplete will return either true or false depending on the entered slash command option being auto completed or not. (autoCompleteRespond function)",id:"isAutoComplete"},sidebar:"docs",previous:{title:"$interactionModal",permalink:"/docs/functions/interaction-related/interactionModal"},next:{title:"$joinThread",permalink:"/docs/functions/interaction-related/joinThread"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isAutoComplete")," will return either true or false depending on the entered slash command option being auto completed or\nnot. (autoCompleteRespond function)"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$isAutoComplete\n")),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,'This will create a slash command with the "autoComplete" feature:'),(0,r.kt)("p",null,'Please note that you require "',(0,r.kt)("strong",{parentName:"p"},"events: ",'["onMessage", "onInteractionCreate"]'),'" in your main file (also known as, in\nmost cases, index.js)'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option", \n  "description": "test",\n  "required": false,\n  "type": 3, \n  "autocomplete": true\n}]]`\n});\n')),(0,r.kt)("p",null,"Checking if autoComplete equals ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given respond (addition of the code above):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[First option;You selected the first option, therefore I\'m responding with this!;Second option;You selected the first second, therefore I\'m responding with this!]\n  $else\n  $interactionReply[$slashOption[option];;;;everyone]\n  $endif\n  `\n});\n')),(0,r.kt)("p",null,"Create the slash-commands with another option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option",\n  "description": "test",\n  "required": false, \n  "type": 3,\n  "autocomplete": true \n}, {\n  "name": "anotheroption",\n  "description": "test",\n  "required": false,\n  "type": 3\n}]]`\n});\n')),(0,r.kt)("p",null,"Using JSON and checking if autoComplete equals ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given respond (addition of the\ncode above):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "First Option",\n    "value" : "You selected the first option, therefore I\\\'m responding with this!"\n  }, {\n    "name" : "Second Option",\n    "value" : "You selected the second option, therefore I\\\'m responding with this!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]\n  $endif\n  `\n});\n')))}u.isMDXComponent=!0}}]);