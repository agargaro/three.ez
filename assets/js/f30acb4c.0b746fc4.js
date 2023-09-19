"use strict";(self.webpackChunkthree_ez_doc=self.webpackChunkthree_ez_doc||[]).push([[7210],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:2},o="Smart Rendering",l={unversionedId:"tutorial/rendering/smart-rendering",id:"tutorial/rendering/smart-rendering",title:"Smart Rendering",description:"Smart rendering allows frames to be rendered only when necessary, making it especially valuable for mostly static scenes.",source:"@site/docs/tutorial/rendering/smart-rendering.md",sourceDirName:"tutorial/rendering",slug:"/tutorial/rendering/smart-rendering",permalink:"/three.ez/docs/tutorial/rendering/smart-rendering",draft:!1,editUrl:"https://github.com/agargaro/three.ez/tree/master/docs/docs/tutorial/rendering/smart-rendering.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Multiple Rendering",permalink:"/three.ez/docs/tutorial/rendering/multiple-rendering"},next:{title:"Animation",permalink:"/three.ez/docs/tutorial/animation"}},s={},c=[{value:"How It Works",id:"how-it-works",level:2},{value:"Manual Update",id:"manual-update",level:2},{value:"Activation",id:"activation",level:2},{value:"Example",id:"example",level:2},{value:"Live Examples",id:"live-examples",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smart-rendering"},"Smart Rendering"),(0,a.kt)("p",null,"Smart rendering allows frames to be rendered only when necessary, making it especially valuable for mostly static scenes. ",(0,a.kt)("br",null),"\nThis optimization enhances performance and minimizes unnecessary computational overhead."),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"needRender")," property is introduced for each ",(0,a.kt)("inlineCode",{parentName:"p"},"Scene")," object. ",(0,a.kt)("br",null),"\nWhen smart rendering is enabled, the ",(0,a.kt)("inlineCode",{parentName:"p"},"needRender")," flag is reset after each rendering. ",(0,a.kt)("br",null),"\nThis property is automatically set to ",(0,a.kt)("strong",{parentName:"p"},"true")," when specific events occur within the scene:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changes in object ",(0,a.kt)("inlineCode",{parentName:"li"},"position"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"scale"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"rotation")),(0,a.kt)("li",{parentName:"ul"},"Changes in object visibility"),(0,a.kt)("li",{parentName:"ul"},"Adding or removing objects"),(0,a.kt)("li",{parentName:"ul"},"Focus changes")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Warning")," ",(0,a.kt)("br",null),"\nAutomatic change detection may introduce a minor overhead, so it is recommended to activate this mode only when necessary.")),(0,a.kt)("h2",{id:"manual-update"},"Manual Update"),(0,a.kt)("p",null,"If automatic change detection isn't possible (e.g., modifications in geometry, material properties, etc.), you can manually set the flag to ",(0,a.kt)("strong",{parentName:"p"},"true"),".\nYou can manually update the ",(0,a.kt)("inlineCode",{parentName:"p"},"needsRender")," flag by modifying it on any ",(0,a.kt)("inlineCode",{parentName:"p"},"Object3D")," that has been added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Scene")," object."),(0,a.kt)("h2",{id:"activation"},"Activation"),(0,a.kt)("p",null,"Smart rendering mode is ",(0,a.kt)("strong",{parentName:"p"},"disabled")," by default. ",(0,a.kt)("br",null),"\nTo enable it, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"activeSmartRendering")," method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Scene")," object."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")," ",(0,a.kt)("br",null),"\nSmart rendering is specific to a scene, so it doesn't need to be enabled for all scenes.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const draggableBox = new Mesh(new BoxGeometry(), new MeshLambertMaterial({ color: 'green' }));\ndraggableBox.draggable = true;\ndraggableBox.on(['pointerenter', 'pointerleave'], function(e) {\n  this.material.color.set(e.type === 'pointerenter' ? 'yellow' : 'green');\n  this.needsRender = true; // necessary because color change cannot be automatically detected\n});\n\nconst scene = new Scene();\nscene.activeSmartRendering(); // in this case, it automatically detects drag movements\nscene.add(draggableBox);\n")),(0,a.kt)("h2",{id:"live-examples"},"Live Examples"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/three-ez-smart-rendering?file=src%2Fmain.ts"},"\u26a1 Stackblitz - Smart Rendering")))}m.isMDXComponent=!0}}]);