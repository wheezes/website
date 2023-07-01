"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,N=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"The Panel Class",description:"All about aoi.panel's Panel class.",id:"aoipanel-panel-class",pagination_next:null},i="The Panel Class",o={unversionedId:"aoi.panel/aoipanel-panel-class",id:"aoi.panel/aoipanel-panel-class",title:"The Panel Class",description:"All about aoi.panel's Panel class.",source:"@site/extensions/aoi.panel/panel.md",sourceDirName:"aoi.panel",slug:"/aoi.panel/aoipanel-panel-class",permalink:"/extensions/aoi.panel/aoipanel-panel-class",draft:!1,tags:[],version:"current",frontMatter:{title:"The Panel Class",description:"All about aoi.panel's Panel class.",id:"aoipanel-panel-class",pagination_next:null},sidebar:"docs",previous:{title:"Events",permalink:"/extensions/aoi.panel/aoipanel-events"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Colour Themes",id:"colour-themes",level:3},{value:"Code Themes",id:"code-themes",level:3}],m={toc:d},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-panel-class"},"The Panel Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Panel } = require("@akarui/aoi.panel")\n\nconst panel = new Panel({\n    username: string, array;\n    password: string, array;\n    secret: string;\n    port: number;\n    bot: string;\n    mainFile: pathLike;\n    commands: pathLike;\n    interaction: pathLike;\n    version: string;\n    type: string;\n    theme: string;\n    codetheme: string;\n});\n')),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null},"user name for logging into the panel (can be an Array)."),(0,r.kt)("td",{parentName:"tr",align:null},"String, Array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["Leref","Blurr","Ayaka"]')," or ",(0,r.kt)("inlineCode",{parentName:"td"},'"Blurr1447"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"password for logging into the panel (can be an Array)."),(0,r.kt)("td",{parentName:"tr",align:null},"String, Array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["HelloHell123","abcd","123"]')," or ",(0,r.kt)("inlineCode",{parentName:"td"},'"HelloHell"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secret")),(0,r.kt)("td",{parentName:"tr",align:null},"Session Secret For Express."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"SomeRandomSessionSecret"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"Port on which the panel is hosted."),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"),". Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"3000")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bot")),(0,r.kt)("td",{parentName:"tr",align:null},"Your aoi.js or discord.js client."),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bot"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mainFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the main file where the code is running."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"index.js"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"commands")),(0,r.kt)("td",{parentName:"tr",align:null},"Commands Folder Where all message commands are handled."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"./commands/"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"interaction")),(0,r.kt)("td",{parentName:"tr",align:null},"Interactitons Folder Where all slash commands are handled."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"./interactions/"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"Your version of aoi.js: ",(0,r.kt)("inlineCode",{parentName:"td"},"v5")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"v6")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"),"; Default:",(0,r.kt)("inlineCode",{parentName:"td"},"v6")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"v6"')," or ",(0,r.kt)("inlineCode",{parentName:"td"},'"v5"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of panel, aoi.js or discord.js"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"),"; Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"aoi.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"djs"')," or ",(0,r.kt)("inlineCode",{parentName:"td"},'"aoi"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"theme")),(0,r.kt)("td",{parentName:"tr",align:null},"The colour theme of the panel"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"),"; Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"indigo")),(0,r.kt)("td",{parentName:"tr",align:null},"All colour themes are listed below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"codetheme")),(0,r.kt)("td",{parentName:"tr",align:null},"The code highlighting Scheme of the panel"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"),"; Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"night")),(0,r.kt)("td",{parentName:"tr",align:null},"All code themes are listed below.")))),(0,r.kt)("h3",{id:"colour-themes"},"Colour Themes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"red"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pink"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"purple"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deep-purple"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"indigo")," ",(0,r.kt)("strong",{parentName:"p"},"[default]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"light-blue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cyan"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"green"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"light-green"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lime"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"khaki"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yellow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"amber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"orange"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deep-orange"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blue-grey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"brown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dark-grey")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"black"),"."),(0,r.kt)("h3",{id:"code-themes"},"Code Themes"),(0,r.kt)("p",null,"The panel uses Codemirror for the code editor. The list of themes Code"),(0,r.kt)("p",null,"Mirror supports are listed ",(0,r.kt)("a",{parentName:"p",href:"https://codemirror.net/5/demo/theme.html#default"},"here"),"."))}k.isMDXComponent=!0}}]);