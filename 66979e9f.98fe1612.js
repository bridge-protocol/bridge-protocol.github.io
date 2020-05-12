(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(1),n=r(6),c=(r(0),r(147)),i={id:"sdk-models-claimpackage",title:"Claim Package",sidebar_label:"Claim Package"},o={id:"sdk-models-claimpackage",title:"Claim Package",description:"The claim package is a package containing encrypted claim data that can only be decrypted and viewed by the passport that it was signed and encrypted for.\r",source:"@site/docs\\sdk-models-claimpackage.md",permalink:"/docs/sdk-models-claimpackage",sidebar_label:"Claim Package",sidebar:"gettingStarted",previous:{title:"Claim",permalink:"/docs/sdk-models-claim"},next:{title:"Passport",permalink:"/docs/sdk-models-passport"}},p=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Functions",id:"functions",children:[{value:"fromClaim()",id:"fromclaim",children:[]},{value:"decrypt()",id:"decrypt",children:[]}]}],l={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The claim package is a package containing encrypted claim data that can only be decrypted and viewed by the passport that it was signed and encrypted for."),Object(c.b)("h2",{id:"constructor"},"Constructor"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"ClaimPackage(")," typeId, signedBy, claim ",Object(c.b)("strong",{parentName:"p"},")")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"typeId")," (string) - the type of the claim contained in the package"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"signedBy")," (string) - the public key of the passport that signed and encrypted the claim"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"claim")," (string) - the encrypted hex encoded claim payload")),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"fromclaim"},"fromClaim()"),Object(c.b)("p",null,"Creates a claim package from a ",Object(c.b)("a",{href:"sdk-models-claim"},"Claim")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"async fromClaim(claim, targetPublicKey, passportPublicKey, passportPrivateKey, password)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"claim")," (",Object(c.b)("a",{href:"sdk-models-claim"},"Claim"),") - the claim to include in the claim package"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"targetPublicKey")," (string) - the target passport public key to encrypt the claim package for"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"passportPublicKey")," (string) - the public key of the signing and encrypting passport"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"passportPrivateKey")," (string) - the private key of the signing and encrypting passport"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the signing and encrypting passport")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"decrypt"},"decrypt()"),Object(c.b)("p",null,"Decrypts the claim package and returns a ",Object(c.b)("a",{href:"sdk-models-claim"},"Claim")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"async decrypt(privateKey, password)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"privateKey")," (string) - the private key of the decrypting passport"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock private key of the decrypting passport")))}s.isMDXComponent=!0},147:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||c;return r?n.a.createElement(u,o({ref:t},l,{components:r})):n.a.createElement(u,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);