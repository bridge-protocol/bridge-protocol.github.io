(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),o=(r(0),r(176)),s={id:"sdk-services-passport",title:"Passport",sidebar_label:"Passport"},p={id:"sdk-services-passport",title:"Passport",description:"Service used to retrieve information about a passport from the Bridge Network\r",source:"@site/docs\\sdk-services-passport.md",permalink:"/docs/sdk-services-passport",sidebar_label:"Passport",sidebar:"gettingStarted",previous:{title:"Partner",permalink:"/docs/sdk-services-partner"},next:{title:"Profile",permalink:"/docs/sdk-services-profile"}},i=[{value:"Functions",id:"functions",children:[{value:"getDetails()",id:"getdetails",children:[]},{value:"handoff()",id:"handoff",children:[]}]}],c={rightToc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Service used to retrieve information about a passport from the Bridge Network"),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"getdetails"},"getDetails()"),Object(o.b)("p",null,"Retrieve the details about a specified passport"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"async getDetails(passport, passphrase, passportId)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passport")," (",Object(o.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passportId")," (string) - the passport id to request information about")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"handoff"},"handoff()"),Object(o.b)("p",null,"Send the current passport context for handoff using the request relay API"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"async handoff(passport, passphrase)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passport")," (",Object(o.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key")))}l.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,p({ref:t},c,{components:r})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);