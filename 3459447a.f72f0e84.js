(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var a=r(1),n=r(6),l=(r(0),r(145)),i={id:"sdk-services-blockchain",title:"Blockchain",sidebar_label:"Blockchain"},c={id:"sdk-services-blockchain",title:"Blockchain",description:"Service to manage all Bridge Passport blockchain interaction with supported blockchains\r",source:"@site/..\\docs\\sdk-services-blockchain.md",permalink:"/docs/sdk-services-blockchain",sidebar_label:"Blockchain",sidebar:"gettingStarted",previous:{title:"Application",permalink:"/docs/sdk-services-application"},next:{title:"Bridge",permalink:"/docs/sdk-services-bridge"}},o=[{value:"Functions",id:"functions",children:[{value:"publishPassport()",id:"publishpassport",children:[]},{value:"getAddressForPassport()",id:"getaddressforpassport",children:[]},{value:"getPassportForAddress()",id:"getpassportforaddress",children:[]},{value:"unpublishPassport()",id:"unpublishpassport",children:[]},{value:"getBalances()",id:"getbalances",children:[]},{value:"getRecentTransactions()",id:"getrecenttransactions",children:[]},{value:"sendPayment()",id:"sendpayment",children:[]},{value:"verifyPayment()",id:"verifypayment",children:[]},{value:"addClaim()",id:"addclaim",children:[]},{value:"removeClaim()",id:"removeclaim",children:[]},{value:"getClaim()",id:"getclaim",children:[]}]}],s={rightToc:o};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Service to manage all Bridge Passport blockchain interaction with supported blockchains"),Object(l.b)("h2",{id:"functions"},"Functions"),Object(l.b)("h3",{id:"publishpassport"},"publishPassport()"),Object(l.b)("p",null,"Publish the passport and wallet address combination to the blockhain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async publishPassport(wallet, passport)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for publishing"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport to publish")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getaddressforpassport"},"getAddressForPassport()"),Object(l.b)("p",null,"Retrieve the published blockchain address for the specified passport from the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async getAddressForPassport(network, passportId)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the address from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passportId")," (string) - the passport id of the passport to retrieve the address for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getpassportforaddress"},"getPassportForAddress()"),Object(l.b)("p",null,"Retrieve the published passport id for the wallet blockchain address from the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async getPassportForAddress(network, address)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the passport id from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the passport id for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"unpublishpassport"},"unpublishPassport()"),Object(l.b)("p",null,"Unpublish the passport and wallet address combination from the blockchain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async unpublishPassport(passport, wallet)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport to publish"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for publishing")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getbalances"},"getBalances()"),Object(l.b)("p",null,"Retrieve BRDG token and related blockchain gas balances"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async getBalances(network, address)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve balances from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the balances for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getrecenttransactions"},"getRecentTransactions()"),Object(l.b)("p",null,"Retrieve recent BRDG token blockchain transactions"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async getRecentTransactions(network, address) \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the transactions from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the transactions for")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"sendpayment"},"sendPayment()"),Object(l.b)("p",null,"Send a BRDG token payment transaction"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async sendPayment(wallet, amount, recipient, paymentIdentifier, wait)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to send payment from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"amount")," (int) - the amount of BRDG to send"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"recipient")," (string) - the blockchain address to send payment to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wait")," (bool) - whether or not to poll and wait for completion or immediately return the transmitted blockchain transaction id without waiting for completion")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"verifypayment"},"verifyPayment()"),Object(l.b)("p",null,"Verify a BRDG token payment transaction info"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async verifyPayment(network, hash, from, to, amount, paymentIdentifier)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to verify the payment from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hash")," (string) - the unique blockchain hash / transaction identifier"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"from")," (string) - the address the payment was sent from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"to")," (string) - the address the payment was sent to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"amount")," (int) - the amount of BRDG that was sent"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"paymentIdentifier")," (string) - the unique identifier of the payment")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"addclaim"},"addClaim()"),Object(l.b)("p",null,"Publish a Bridge Verified claim to the blockhain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async addClaim(passport, password, wallet, claim, hashOnly) \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"passport")," (",Object(l.b)("a",{href:"sdk-models-passport"},"Passport"),") - passport publishing the claim for Bridge Network API authentication"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"password")," (string) - the password to unlock the private key of the passport adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to use for adding the claim"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hashOnly")," (bool) - whether or not to publish a SHA256 hash representing the claim value instead of the actual claim value")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removeclaim"},"removeClaim()"),Object(l.b)("p",null,"Unpublish a Bridge Verified claim to the blockhain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async removeClaim(wallet, claimTypeId)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"wallet")," (",Object(l.b)("a",{href:"sdk-models-wallet"},"Wallet"),") - blockchain wallet to remove the claim from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"claimtypeId")," (string) - the claim type to remove")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getclaim"},"getClaim()"),Object(l.b)("p",null,"Retrieve a published Bridge Verified claim from the blockhain using the Bridge Keyserver contract"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"async getClaim(network, claimTypeId, address) \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the claim from"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"claimtypeId")," (string) - the claim type to retrieve"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"address")," (string) - the blockchain address to retrieve the claim for")))}b.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(r),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return r?n.a.createElement(m,c({ref:t},s,{components:r})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);