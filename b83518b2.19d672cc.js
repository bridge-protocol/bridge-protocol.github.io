(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return i}));var n=r(1),a=r(6),s=(r(0),r(145)),o={id:"sdk-messaging-auth",title:"Auth",sidebar_label:"Auth"},l={id:"sdk-messaging-auth",title:"Auth",description:"Implements the challenge / response authentication protocol to allow passport, claims, and blockchain information to be securely communicated between passports.\r",source:"@site/docs\\sdk-messaging-auth.md",permalink:"/docs/sdk-messaging-auth",sidebar_label:"Auth",sidebar:"gettingStarted",previous:{title:"Wallet",permalink:"/docs/sdk-models-wallet"},next:{title:"Claim",permalink:"/docs/sdk-messaging-claim"}},c=[{value:"Functions",id:"functions",children:[{value:"createPassportChallengeRequest()",id:"createpassportchallengerequest",children:[]},{value:"createPassportChallengeResponse()",id:"createpassportchallengeresponse",children:[]},{value:"verifyPassportChallengeRequest()",id:"verifypassportchallengerequest",children:[]},{value:"verifyPassportChallengeResponse()",id:"verifypassportchallengeresponse",children:[]}]}],p={rightToc:c};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Implements the challenge / response authentication protocol to allow passport, claims, and blockchain information to be securely communicated between passports."),Object(s.b)("h2",{id:"functions"},"Functions"),Object(s.b)("h3",{id:"createpassportchallengerequest"},"createPassportChallengeRequest()"),Object(s.b)("p",null,"Create a passport challenge request"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"async createPassportChallengeRequest(passport, password, token, claimTypes, networks)\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"passport")," (",Object(s.b)("a",{href:"sdk-models-passport"},"Passport"),") - the passport creating the signed challenge request"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"password")," (string) - password to unlock the private key of the passport creating the signed challenge request"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"token")," (string) - unique token used to verify challenge responses"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"claimTypes")," (string[]) - the claim types to be requested from the target passport"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"networks")," (string[]) - the blockchain networks to request addresses for from the target passport")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"createpassportchallengeresponse"},"createPassportChallengeResponse()"),Object(s.b)("p",null,"Create a passport challenge response"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"async createPassportChallengeResponse(passport, password, targetPublicKey, token, claims, networks)\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"passport")," - (",Object(s.b)("a",{href:"sdk-models-passport"},"Passport"),") - the passport creating the encrypted challenge response"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"password")," (string) - password to unlock the private key of the passport creating the encrypted challenge response"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"token")," (string) - unique token sent with the challenge request"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"claims")," (",Object(s.b)("a",{href:"sdk-models-claim"},"Claim"),"[]) - the claims to send in response to the request"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"networks")," (string[]) - the networks to provide blockchain addresses for in response to the request")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"verifypassportchallengerequest"},"verifyPassportChallengeRequest()"),Object(s.b)("p",null,"Verify a received passport challenge request"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"async verifyPassportChallengeRequest(message) \n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"message")," (string) - the received signed passport challenge request")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"verifypassportchallengeresponse"},"verifyPassportChallengeResponse()"),Object(s.b)("p",null,"Verify a received passport challenge response"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"async verifyPassportChallengeResponse(passport, password, message, t)\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"passport")," - (",Object(s.b)("a",{href:"sdk-models-passport"},"Passport"),") - the passport verifying the encrypted challenge response"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"password")," (string) - password to unlock the private key of the passport verifying the encrypted challenge response"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"token")," (string) - unique token to verify the challenge response")))}i.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=i(r),h=n,g=b["".concat(o,".").concat(h)]||b[h]||u[h]||s;return r?a.a.createElement(g,l({ref:t},p,{components:r})):a.a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);