(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(1),o=t(6),i=(t(0),t(139)),a={id:"passport-key",title:"Bridge Protocol Keys",sidebar_label:"Keys"},c={id:"passport-key",title:"Bridge Protocol Keys",description:"The Bridge Protocol key pair is used for all cryptographic signing and encrypting when using the Bridge Protocol.\r",source:"@site/..\\docs\\passport-key.md",permalink:"/docs/passport-key",sidebar_label:"Keys",sidebar:"gettingStarted",previous:{title:"Bridge Passport",permalink:"/docs/bridge-passport"},next:{title:"Bridge Verified Claims",permalink:"/docs/passport-claim"}},p=[],s={rightToc:p};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Bridge Protocol key pair is used for all cryptographic signing and encrypting when using the Bridge Protocol."),Object(i.b)("img",{class:"centered",src:"https://github.com/bridge-protocol/bridge-protocol-js/blob/ethereum-publishing/docs/images/passport-key.jpg?raw=true"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Public Key")," - The public key of the passport used by other passports to verify sent messages"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Private Key")," - The private key of the passport used for signing and encrypting")))}l.isMDXComponent=!0},139:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},u=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return t?o.a.createElement(f,c({ref:r},s,{components:t})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);