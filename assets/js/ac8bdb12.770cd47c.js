"use strict";(self.webpackChunkthree_ez_doc=self.webpackChunkthree_ez_doc||[]).push([[8832],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||v[h]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={id:"Events.UpdateEvents",title:"Interface: UpdateEvents",sidebar_label:"UpdateEvents",custom_edit_url:null},o=void 0,s={unversionedId:"api/interfaces/Events.UpdateEvents",id:"api/interfaces/Events.UpdateEvents",title:"Interface: UpdateEvents",description:"Events.UpdateEvents",source:"@site/docs/api/interfaces/Events.UpdateEvents.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Events.UpdateEvents",permalink:"/three.ez/docs/api/interfaces/Events.UpdateEvents",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Events.UpdateEvents",title:"Interface: UpdateEvents",sidebar_label:"UpdateEvents",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RendererResizeEvent",permalink:"/three.ez/docs/api/interfaces/Events.RendererResizeEvent"},next:{title:"Object3DExtPrototype",permalink:"/three.ez/docs/api/interfaces/Patch.Object3DExtPrototype"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"enabledchange",id:"enabledchange",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"positionchange",id:"positionchange",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"rotationchange",id:"rotationchange",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"scalechange",id:"scalechange",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"visiblechange",id:"visiblechange",level:3},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:p},d="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/three.ez/docs/api/namespaces/Events"},"Events"),".UpdateEvents"),(0,a.kt)("p",null,"Represents events related to updates. These events do not propagate to parents."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"enabledchange"},"enabledchange"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"enabledchange"),": ",(0,a.kt)("a",{parentName:"p",href:"/three.ez/docs/api/interfaces/Events.PropertyChangeEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"PropertyChangeEvent")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,a.kt)("p",null,"Event triggered when the enabledState of the object changes. The propagation of this event does not go to parents but to children."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L18"},"src/events/Events.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"positionchange"},"positionchange"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"positionchange"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"never")),(0,a.kt)("p",null,"Event triggered when the position of the object changes."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L12"},"src/events/Events.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rotationchange"},"rotationchange"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"rotationchange"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"never")),(0,a.kt)("p",null,"Event triggered when the rotation of the object changes."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L16"},"src/events/Events.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scalechange"},"scalechange"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"scalechange"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"never")),(0,a.kt)("p",null,"Event triggered when the scale of the object changes."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L14"},"src/events/Events.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"visiblechange"},"visiblechange"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"visiblechange"),": ",(0,a.kt)("a",{parentName:"p",href:"/three.ez/docs/api/interfaces/Events.PropertyChangeEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"PropertyChangeEvent")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,a.kt)("p",null,"Event triggered when the visibility of the object changes. The propagation of this event does not go to parents but to children."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agargaro/three.ez/blob/74f01c4/src/events/Events.ts#L20"},"src/events/Events.ts:20")))}v.isMDXComponent=!0}}]);