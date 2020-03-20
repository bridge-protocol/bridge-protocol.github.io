(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),l=(r(0),r(145)),o={id:"sdk-models-wallet",title:"Wallet",sidebar_label:"Wallet"},c={id:"sdk-models-wallet",title:"Wallet",description:"The wallet represents a blockchain wallet used for blockchain transactions.\r",source:"@site/..\\docs\\sdk-models-wallet.md",permalink:"/docs/sdk-models-wallet",sidebar_label:"Wallet",sidebar:"gettingStarted",previous:{title:"Passport",permalink:"/docs/sdk-models-passport"},next:{title:"Auth",permalink:"/docs/sdk-messaging-auth"}},i=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Functions",id:"functions",children:[{value:"create()",id:"create",children:[]},{value:"unlock()",id:"unlock",children:[]},{value:"export()",id:"export",children:[]}]}],s={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The wallet represents a blockchain wallet used for blockchain transactions."),Object(l.b)("h2",{id:"constructor"},"Constructor"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Wallet(")," network, address, key ",Object(l.b)("strong",{parentName:"p"},")")),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the wallet"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address of the wallet"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"key")," (object) - the encrypted key of the wallet (NEP-2 for NEO, v3 Keystore for Ethereum)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"unlocked")," (object) - the unlocked wallet object (if unlocked, null if unlocked)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"privateKey")," (string) - shortcut to return the private key string of an unlocked wallet")),Object(l.b)("h2",{id:"functions"},"Functions"),Object(l.b)("h3",{id:"create"},"create()"),Object(l.b)("p",null,"Creates or imports a wallet for the specified blockchain with a private key encrypted using the password"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async create(password, privateKey)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"password")," (string) - the password used to encrypt and decrypt the private key"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"privateKey")," (string) - if provided the wallet will be an imported blockchain wallet, otherwise a new private key is generated")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"unlock"},"unlock()"),Object(l.b)("p",null,"Unlocks the wallet / private key with the specified password.  If successful, the unlocked property is set to the unlocked wallet object."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"async unlock(password)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key / wallet")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"export"},"export()"),Object(l.b)("p",null,"Returns a secure representation of the wallet with the unlocked wallet / private key excluded."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"export()\n")))}p.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,O=b["".concat(o,".").concat(d)]||b[d]||u[d]||l;return r?a.a.createElement(O,c({ref:t},s,{components:r})):a.a.createElement(O,c({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);