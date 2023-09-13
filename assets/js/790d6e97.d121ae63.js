"use strict";(self.webpackChunkthree_ez_doc=self.webpackChunkthree_ez_doc||[]).push([[6817],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={id:"Utils.Utils",title:"Class: Utils",sidebar_label:"Utils",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/Utils.Utils",id:"api/classes/Utils.Utils",title:"Class: Utils",description:"Utils.Utils",source:"@site/docs/api/classes/Utils.Utils.md",sourceDirName:"api/classes",slug:"/api/classes/Utils.Utils",permalink:"/docs/api/classes/Utils.Utils",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Utils.Utils",title:"Class: Utils",sidebar_label:"Utils",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TweenManager",permalink:"/docs/api/classes/Tweening.TweenManager"},next:{title:"MainParameters",permalink:"/docs/api/interfaces/Core.MainParameters"}},o={},p=[{value:"Methods",id:"methods",level:2},{value:"getSceneIntersection",id:"getsceneintersection",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/namespaces/Utils"},"Utils"),".Utils"),(0,a.kt)("p",null,"A utility class providing helper methods."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"getsceneintersection"},"getSceneIntersection"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"getSceneIntersection"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"ray"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"camera"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"distance"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("p",null,"Calculates the intersection point of a ray with a plane in world coordinates."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ray")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Ray")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ray to intersect with the plane.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"camera")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Camera")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The camera used as a reference for the plane's orientation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"distance")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The distance from the camera to the plane.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("p",null,"The intersection point."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/utils/Utils.ts#L17"},"src/utils/Utils.ts:17")))}m.isMDXComponent=!0}}]);