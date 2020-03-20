(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),i=(r(0),r(145)),o={id:"sdk-services-claim",title:"Claim",sidebar_label:"Claim"},c={id:"sdk-services-claim",title:"Claim",description:"Service used to retrieve the Bridge Network known claim types\r",source:"@site/..\\docs\\sdk-services-claim.md",permalink:"/docs/sdk-services-claim",sidebar_label:"Claim",sidebar:"gettingStarted",previous:{title:"Bridge",permalink:"/docs/sdk-services-bridge"},next:{title:"Partner",permalink:"/docs/sdk-services-partner"}},s=[{value:"Functions",id:"functions",children:[{value:"getAllTypes()",id:"getalltypes",children:[]},{value:"getType()",id:"gettype",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Service used to retrieve the Bridge Network known claim types"),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"getalltypes"},"getAllTypes()"),Object(i.b)("p",null,"Retrieve all the known defined claim types for the Bridge Network"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"async getAllTypes(useApi, passport, passphrase)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"useApi")," (bool) - whether or not to use the local constants or retrieve from Bridge Network API"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passport")," (",Object(i.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication, only required if useApi=true"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key, only required if useApi=true")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"gettype"},"getType()"),Object(i.b)("p",null,"Retrieve the specified known claim type definition"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"async getType(claimTypeId, useApi, passport, passphrase)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"claimTypeId")," (string) - the claim type definition to retrieve"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"useApi")," (bool) - whether or not to use the local constants or retrieve from Bridge Network API"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passport")," (",Object(i.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport context used for API authentication, only required if useApi=true"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passphrase")," (string) - password used to unlock context passport private key, only required if useApi=true")))}l.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,c({ref:t},p,{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);