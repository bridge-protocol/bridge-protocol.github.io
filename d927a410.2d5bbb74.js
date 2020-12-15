(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(6),o=(r(0),r(176)),a={id:"mobile-request",title:"Identity Request",sidebar_label:"Identity Request"},c={id:"mobile-request",title:"Identity Request",description:"Once the application is installed and your passport is imported, you are able to request identity claim information from any other Bridge Passport.  \r",source:"@site/docs\\mobile-request.md",permalink:"/docs/mobile-request",sidebar_label:"Identity Request",sidebar:"gettingStarted",previous:{title:"Digital Identity",permalink:"/docs/mobile-identity"},next:{title:"Identity Response",permalink:"/docs/mobile-response"}},l=[],s={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once the application is installed and your passport is imported, you are able to request identity claim information from any other Bridge Passport.  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Simply click "Request", choose the claim types you would like to request, and click "Request Claims".')),Object(o.b)("img",{class:"centered",src:"/img/mobile/claim-request-send.png",width:"300"}),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"After the claim types are selected, a QR code will be generated that can be scanned by another Bridge Passport to prompt them for their identification information and wait for the secure response.")),Object(o.b)("img",{class:"centered",src:"/img/mobile/claim-request-send-code.png",width:"300"}),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},'Once the secure response is received, it will be decrypted and the claims information will be verified and displayed.  When complete, simply click "Done" to return to the home screen.')),Object(o.b)("img",{class:"centered",src:"/img/mobile/claim-request-response.png",width:"300"}))}p.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return r?i.a.createElement(b,c({ref:t},s,{components:r})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);