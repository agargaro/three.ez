"use strict";(self.webpackChunkthree_ez_doc=self.webpackChunkthree_ez_doc||[]).push([[7382],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),v=a,u=d["".concat(l,".").concat(v)]||d[v]||f[v]||i;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={id:"Events.MiscEvents",title:"Interface: MiscEvents",sidebar_label:"MiscEvents",custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/Events.MiscEvents",id:"api/interfaces/Events.MiscEvents",title:"Interface: MiscEvents",description:"Events.MiscEvents",source:"@site/docs/api/interfaces/Events.MiscEvents.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Events.MiscEvents",permalink:"/docs/api/interfaces/Events.MiscEvents",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Events.MiscEvents",title:"Interface: MiscEvents",sidebar_label:"MiscEvents",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"IntersectionExt",permalink:"/docs/api/interfaces/Events.IntersectionExt"},next:{title:"PropertyChangeEvent",permalink:"/docs/api/interfaces/Events.PropertyChangeEvent"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"afteranimate",id:"afteranimate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"animate",id:"animate",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"beforeanimate",id:"beforeanimate",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"rendererresize",id:"rendererresize",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/namespaces/Events"},"Events"),".MiscEvents"),(0,a.kt)("p",null,"Represents miscellaneous events. These events do not propagate to parents."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"afteranimate"},"afteranimate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"afteranimate"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Events.AnimateEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"AnimateEvent"))),(0,a.kt)("p",null,"Event triggered every frame, after 'animate'. Usually used if you want to operate after the animation is computed."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L34"},"src/events/Events.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"animate"},"animate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"animate"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Events.AnimateEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"AnimateEvent"))),(0,a.kt)("p",null,"Event triggered every frame. Used to animate objects."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L32"},"src/events/Events.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"beforeanimate"},"beforeanimate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"beforeanimate"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Events.AnimateEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"AnimateEvent"))),(0,a.kt)("p",null,"Event triggered every frame, before 'animate'. Usually used to prepare object animations."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L30"},"src/events/Events.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rendererresize"},"rendererresize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"rendererresize"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Events.RendererResizeEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"RendererResizeEvent"))),(0,a.kt)("p",null,"Event triggered on first render and every time an object is rendered with a different viewport size from the previous one."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L28"},"src/events/Events.ts:28")))}f.isMDXComponent=!0}}]);