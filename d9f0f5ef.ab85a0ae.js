(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return s}));var a=r(1),n=r(6),i=(r(0),r(145)),c={id:"sdk-models-claim",title:"Claim",sidebar_label:"Claim"},l={id:"sdk-models-claim",title:"Claim",description:"The claim model represents a claim sent from one passport to another.\r",source:"@site/..\\docs\\sdk-models-claim.md",permalink:"/docs/sdk-models-claim",sidebar_label:"Claim",sidebar:"gettingStarted",previous:{title:"Code Examples",permalink:"/docs/sdk-examples"},next:{title:"Claim Package",permalink:"/docs/sdk-models-claimpackage"}},o=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Functions",id:"functions",children:[{value:"encrypt()",id:"encrypt",children:[]},{value:"fromClaimPackage()",id:"fromclaimpackage",children:[]},{value:"verifySignature()",id:"verifysignature",children:[]},{value:"getSignatureString()",id:"getsignaturestring",children:[]}]}],p={rightToc:o};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The claim model represents a claim sent from one passport to another."),Object(i.b)("h2",{id:"constructor"},"Constructor"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Claim(")," claimData ",Object(i.b)("strong",{parentName:"p"},")")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"claimTypeId")," (string) - the claim type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"claimValue")," (string) - the value of the claim"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"createdOn")," (long) - the unix timestamp of the creation date"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"expiresOn")," (long) - the unix timestamp of the expiration date (0 = does not expire)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"signedByKey")," (string) - the public key of the signer of the claim"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"signature")," (string) - the signature of the claim"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"isExpired")," (bool) - whether or not the claim is expired"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"isValid")," (bool) - whether or not the claim has all required data to be valid")),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"encrypt"},"encrypt()"),Object(i.b)("p",null,"Serializes and encrypts the claim data for the target passport"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"async encrypt(targetPublicKey, passportPrivateKey, password)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"targetPublicKey")," (string)- the target public key the claim should be encrypted for"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passportPrivateKey")," (string)- the private key of the passport encrypting the claim"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"password")," (string)- the password to unlock the private key of the passport encrypting the claim")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"fromclaimpackage"},"fromClaimPackage()"),Object(i.b)("p",null,"Decrypts and loads the claim from an encrypted claim package"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"async fromClaimPackage(claimPackage, privateKey, password)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"claimPackage")," (",Object(i.b)("a",{href:"sdk-models-claimpackage"},"ClaimPackage"),") - the claim package to load the claim from"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"privateKey")," (string) - the private key of the loading passport"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the loading passport")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"verifysignature"},"verifySignature()"),Object(i.b)("p",null,"Verifies the signature of the claim is valid"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"async verifySignature(passportId)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passportId")," (string) - the passport context to verify the signature for")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getsignaturestring"},"getSignatureString()"),Object(i.b)("p",null,"Retrieves the unique fingerprint for the claim used for signing and integrity verification"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"async getSignatureString(passportId)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"passportId")," (string) - the passport context the claim should be signed or verified for")))}s.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return r?n.a.createElement(d,l({ref:t},p,{components:r})):n.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);