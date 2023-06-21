"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={title:"$modifyRole",description:"Modifies a role by using their ID."},a=void 0,l={unversionedId:"functions/modifyrole",id:"version-5.5.5/functions/modifyrole",title:"$modifyRole",description:"Modifies a role by using their ID.",source:"@site/versioned_docs/version-5.5.5/functions/modifyrole.md",sourceDirName:"functions",slug:"/functions/modifyrole",permalink:"/docs/5.5.5/functions/modifyrole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687323095,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$modifyRole",description:"Modifies a role by using their ID."},sidebar:"docs",previous:{title:"$modifyEmoji",permalink:"/docs/5.5.5/functions/modifyemoji"},next:{title:"$modifyRolePerms",permalink:"/docs/5.5.5/functions/modifyroleperms"}},c={},s=[],p={toc:s},f="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this function you can modify an eisting role by editing it's name/color/mentionability/hoist"),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$modifyRole[roleID;name (optional);color(optional);mentionable(optional);hoisted(optional)]")),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("p",null,"This command changes the role name and it's color:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "editrole",\ncode: `\n$modifyRole[837765028031234098;Bot;700505]\n`\n})\n')),(0,r.kt)("p",null,"you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"RANDOM")," in the color field for a random role color \ud83d\ude09"))}u.isMDXComponent=!0}}]);