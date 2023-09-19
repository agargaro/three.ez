"use strict";(self.webpackChunkthree_ez_doc=self.webpackChunkthree_ez_doc||[]).push([[2073],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(4137));const l={sidebar_position:0},i="How It Works",o={unversionedId:"tutorial/rendering/how-it-works",id:"tutorial/rendering/how-it-works",title:"How It Works",description:"Rendering is managed through a collection of RenderView instances, which are internally handled within the Main class.",source:"@site/docs/tutorial/rendering/how-it-works.md",sourceDirName:"tutorial/rendering",slug:"/tutorial/rendering/how-it-works",permalink:"/three.ez/docs/tutorial/rendering/how-it-works",draft:!1,editUrl:"https://github.com/agargaro/three.ez/tree/master/docs/docs/tutorial/rendering/how-it-works.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"TypeScript Support",permalink:"/three.ez/docs/tutorial/getting-started/typescript-support"},next:{title:"Multiple Rendering",permalink:"/three.ez/docs/tutorial/rendering/multiple-rendering"}},p={},d=[{value:"RenderView",id:"renderview",level:2},{value:"Viewport",id:"viewport",level:2},{value:"Example",id:"example",level:2},{value:"Live Examples",id:"live-examples",level:2}],m={toc:d},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"Rendering is managed through a collection of ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderView")," instances, which are internally handled within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Main")," class."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")," ",(0,a.kt)("br",null),"\nYou can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")," instance using the ",(0,a.kt)("inlineCode",{parentName:"p"},"renderer")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Main")," class.")),(0,a.kt)("h2",{id:"renderview"},"RenderView"),(0,a.kt)("p",null,"To create and add instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderView")," to this collection, you can utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"createView")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Main")," object. This method accepts the following parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"backgroundAlpha")),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Background alpha value of the view (optional, default: 1).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"backgroundColor")),(0,a.kt)("td",{parentName:"tr",align:null},"ColorRepresentation"),(0,a.kt)("td",{parentName:"tr",align:null},"Background color of the view (optional, default: 'black').")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"camera")),(0,a.kt)("td",{parentName:"tr",align:null},"Camera"),(0,a.kt)("td",{parentName:"tr",align:null},"Camera used to view the scene (avoid using the same camera for different scenes).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"composer")),(0,a.kt)("td",{parentName:"tr",align:null},"EffectComposer"),(0,a.kt)("td",{parentName:"tr",align:null},"Effect composer used for post-processing (optional).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"enabled")),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether InteractionEvents will be triggered for the view (optional, default: true).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"onAfterRender")),(0,a.kt)("td",{parentName:"tr",align:null},"() => void"),(0,a.kt)("td",{parentName:"tr",align:null},"Function called after rendering the view (optional).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"onBeforeRender")),(0,a.kt)("td",{parentName:"tr",align:null},"() => void"),(0,a.kt)("td",{parentName:"tr",align:null},"Function called before rendering the view (optional).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"scene")),(0,a.kt)("td",{parentName:"tr",align:null},"Scene"),(0,a.kt)("td",{parentName:"tr",align:null},"Scene rendered in the view.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"tags")),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Tags of the view (optional).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"viewport")),(0,a.kt)("td",{parentName:"tr",align:null},"Viewport"),(0,a.kt)("td",{parentName:"tr",align:null},"Normalized viewport defining dimensions and position of the view (optional). Values range from 0 to 1.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"visible")),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines if the view is visible (optional, default: true).")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")," ",(0,a.kt)("br",null),"\nYou can access the documentation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderView")," class ",(0,a.kt)("a",{parentName:"p",href:"../../api/classes/Rendering.RenderView"},"here"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Warning")," ",(0,a.kt)("br",null),"\nManually creating instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderView")," is not recommended.")),(0,a.kt)("h2",{id:"viewport"},"Viewport"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewport")," object has the following properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"bottom")),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Bottom coordinate of the viewport.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"height")),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Height of the viewport.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"left")),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Left coordinate of the viewport.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"width")),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Width of the viewport.")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const main = new Main();\nmain.createView({\n  scene: sceneObj, // Mandatory\n  camera: cameraObj, // Mandatory\n  backgroundAlpha: 1,\n  backgroundColor: 'black',\n  composer: composerObj,\n  enabled: true,\n  onAfterRender: () => {\n    /** Code */\n  },\n  onBeforeRender: () => {\n    /** Code */\n  },\n  tags: ['A', 'B'],\n  visible: true,\n  viewport: {\n    bottom: 0,\n    height: 1,\n    left: 0,\n    width: 1\n  }\n});\n")),(0,a.kt)("h2",{id:"live-examples"},"Live Examples"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/three-ez-template?file=src%2Fmain.ts"},"\u26a1 Stackblitz - Template")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/three-ez-multiple-views?file=src%2Fmain.ts"},"\u26a1 Stackblitz - Multiple Views")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/three-ez-focus-outline?file=src%2Fmain.ts"},"\u26a1 Stackblitz - Focus Outline (EffectComposer)")))}s.isMDXComponent=!0}}]);