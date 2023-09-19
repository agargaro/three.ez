"use strict";(self.webpackChunkthree_ez_doc=self.webpackChunkthree_ez_doc||[]).push([[75],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:0},i="Installation",l={unversionedId:"tutorial/getting-started/installation",id:"tutorial/getting-started/installation",title:"Installation",description:"1. Begin by creating a three.js project, which can be done by following the official guide (option 1).",source:"@site/docs/tutorial/getting-started/installation.md",sourceDirName:"tutorial/getting-started",slug:"/tutorial/getting-started/installation",permalink:"/three.ez/docs/tutorial/getting-started/installation",draft:!1,editUrl:"https://github.com/agargaro/three.ez/tree/master/docs/docs/tutorial/getting-started/installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/three.ez/docs/tutorial/"},next:{title:"Configuration",permalink:"/three.ez/docs/tutorial/getting-started/configuration"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Begin by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"three.js")," project, which can be done by following the ",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#manual/en/introduction/Installation"},"official guide (option 1)"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Warning")," ",(0,a.kt)("br",null),"\nPlease note that ",(0,a.kt)("inlineCode",{parentName:"p"},"three.ez")," is compatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"three.js r151+"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"three.ez")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @three.ez/main\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For TypeScript users, it's essential to follow the steps outlined in ",(0,a.kt)("a",{parentName:"p",href:"https://agargaro.github.io/three.ez/docs/tutorial/getting-started/typescript-support"},"TypeScript Support"),". ",(0,a.kt)("br",null),"\nIf you're not using TypeScript, you can skip this step.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.ts")," file and insert the provided code:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Scene, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';\nimport { Main, PerspectiveCameraAuto } from '@three.ez/main';\n\nconst box = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());\nbox.on('animate', (e) => box.rotateX(e.delta).rotateY(e.delta * 2));\nconst scene = new Scene().add(box);\nconst main = new Main();\nmain.createView({ scene, camera: new PerspectiveCameraAuto(70).translateZ(1) });\n")),(0,a.kt)("p",{parentName:"li"},"Alternatively, if you prefer a more structured and modular approach using classes ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"(which is recommended)")),", you can use the following code snippet:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Scene as SceneBase, Mesh, BoxGeometry, MeshNormalMaterial } from 'three';\nimport { Main as MainBase, PerspectiveCameraAuto } from '@three.ez/main';\n\nclass DraggableBox extends Mesh {\n  constructor() {\n    super(new BoxGeometry(0.2, 0.2, 0.2), new MeshNormalMaterial());\n    this.on('animate', (e) => this.rotateX(e.delta).rotateY(e.delta * 2));\n  }\n}\n\nclass Scene extends SceneBase {\n  constructor() {\n    super();\n    this.add(new DraggableBox());\n  }\n}\n\nclass Main extends MainBase {\n  constructor() {\n    super();\n    this.createView({ scene: new Scene(), camera: new PerspectiveCameraAuto(70).translateZ(1) });\n  }\n}\n\nconst main = new Main();\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")," ",(0,a.kt)("br",null),"\nThroughout this documentation, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," file extension. If you're not using TypeScript, feel free to use ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," instead.")))))}m.isMDXComponent=!0}}]);