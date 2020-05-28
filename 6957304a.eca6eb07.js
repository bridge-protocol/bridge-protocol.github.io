(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(6),a=(n(0),n(168)),i={id:"extension-managing",title:"Security and Backup",sidebar_label:"Security and Backup"},c={id:"extension-managing",title:"Security and Backup",description:"All security and backup options can be found in the dropdown menu accessed from the icon in the upper right corner of the Bridge Passport.  Using these options the user can export, lock, and unload their passport.\r",source:"@site/docs\\extension-managing.md",permalink:"/docs/extension-managing",sidebar_label:"Security and Backup",sidebar:"gettingStarted",previous:{title:"Creating or Opening a Passport",permalink:"/docs/extension-opening"},next:{title:"Navigation",permalink:"/docs/extension-navigating"}},s=[{value:"Backing Up",id:"backing-up",children:[]},{value:"Locking",id:"locking",children:[]},{value:"Unlocking",id:"unlocking",children:[]},{value:"Unloading",id:"unloading",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All security and backup options can be found in the dropdown menu accessed from the icon in the upper right corner of the Bridge Passport.  Using these options the user can export, lock, and unload their passport."),Object(a.b)("p",null,Object(a.b)("img",{class:"centered",src:"/img/extension/passport-options.jpg"})),Object(a.b)("h3",{id:"backing-up"},"Backing Up"),Object(a.b)("p",null,"To backup the Bridge Passport (this is especially important after verified claims have been imported), simply choose the Export Passport menu option and the passport JSON file will be downloaded to the filesystem.  This file should be backed up and the password for the passport should be kept in a safe place.  If either are lost, the passport cannot be recovered."),Object(a.b)("h3",{id:"locking"},"Locking"),Object(a.b)("p",null,"For additional security, users can choose to lock the passport.  When the passport is locked, the unencrypted passport is no longer available in browser memory and will require the password to be provided at next use.  By default, when all browser instances are closed, the passport will be in a locked state."),Object(a.b)("h3",{id:"unlocking"},"Unlocking"),Object(a.b)("p",null,"If a passport is locked, the next time the user attempts to access their passport, they will simply need to provide the password given when it was created to unlock the passport."),Object(a.b)("p",null,Object(a.b)("img",{class:"centered",src:"/img/extension/passport-unlock.jpg"})),Object(a.b)("h3",{id:"unloading"},"Unloading"),Object(a.b)("p",null,"The user can unload the passport entirely from browser memory using the Unload Passport option.  When the passport is unloaded, they will either need to create a new passport or import an existing passport."))}l.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(h,c({ref:t},p,{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);