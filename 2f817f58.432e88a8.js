(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),i=(r(0),r(176)),a={id:"mobile-import",title:"Import Passport",sidebar_label:"Import Passport"},c={id:"mobile-import",title:"Import Passport",description:"To use your Bridge Digital Identity with the Bridge Passport Mobile Application, it needs to be imported from the Bridge Passport Browser Extension.  \r",source:"@site/docs\\mobile-import.md",permalink:"/docs/mobile-import",sidebar_label:"Import Passport",sidebar:"gettingStarted",previous:{title:"Bridge Passport Mobile",permalink:"/docs/mobile"},next:{title:"Digital Identity",permalink:"/docs/mobile-identity"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use your Bridge Digital Identity with the Bridge Passport Mobile Application, it needs to be imported from the Bridge Passport Browser Extension.  "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"After you have created your code within the Bridge Passport Extension (see ",Object(i.b)("a",{href:"extension-managing#mobile-sync"},"Mobile Sync"),"), open the Bridge Passport Mobile Application and select Scan QR Code.")),Object(i.b)("img",{class:"centered",src:"/img/mobile/passport-import.png",width:"300"}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"When the QR Capture interface comes up, allow permissions to access the camera and simply scan the code generated by your Bridge Passport Extension.")),Object(i.b)("img",{class:"centered",src:"/img/mobile/scan-qr-passport.png",width:"300"}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"After the code is received, the Bridge Passport Extension will securely sync your Bridge Identity to your Bridge Passport Mobile application.  Once loaded, you must provide the password you provided when creating your passport to decrypt your passport and allow it to be used.")),Object(i.b)("img",{class:"centered",src:"/img/mobile/passport-import-unlock.png",width:"300"}))}l.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||i;return r?o.a.createElement(m,c({ref:t},p,{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);