(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(164)),c={id:"integration-blockchain",title:"Blockchain",sidebar_label:"Blockchain"},o={id:"integration-blockchain",title:"Blockchain",description:"The blockchain endpoints exposes blockchain functionality to verify payments and blockchain transactions\r",source:"@site/docs\\integration-blockchain.md",permalink:"/docs/integration-blockchain",sidebar_label:"Blockchain",sidebar:"gettingStarted",previous:{title:"Profile Types",permalink:"/docs/integration-profile"},next:{title:"Passport Browser Extension",permalink:"/docs/extension-passport"}},l=[{value:"POST /blockchain/walletaddress",id:"post-blockchainwalletaddress",children:[]},{value:"POST /blockchain/sendpayment",id:"post-blockchainsendpayment",children:[]},{value:"POST /blockchain/verifypayment",id:"post-blockchainverifypayment",children:[]},{value:"POST /blockchain/createpublishtx",id:"post-blockchaincreatepublishtx",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The blockchain endpoints exposes blockchain functionality to verify payments and blockchain transactions"),Object(i.b)("h3",{id:"post-blockchainwalletaddress"},"POST /blockchain/walletaddress"),Object(i.b)("p",null,"Get the blockchain address for the specified network that the service context is running under"),Object(i.b)("h5",{id:"example-request"},"Example Request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "network":"NEO",\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the wallet")),Object(i.b)("h3",{id:"post-blockchainsendpayment"},"POST /blockchain/sendpayment"),Object(i.b)("p",null,"Send a BRDG token payment transaction on the blockchain"),Object(i.b)("h5",{id:"example-request-1"},"Example Request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "network":"NEO",\n    "to":"AXbopuA5SPv5EVQP5REer4kdwMXpjRC7YQ",\n    "amount":1,\n    "identifier":"12345"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the payment"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"to")," (string) - the blockchain address the payment is to be sent to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"amount")," (int) - the payment amount"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"identifier")," (string) - the unique identifier of the transaction")),Object(i.b)("h3",{id:"post-blockchainverifypayment"},"POST /blockchain/verifypayment"),Object(i.b)("p",null,"Verify a BRDG token payment transaction on the blockchain"),Object(i.b)("h5",{id:"example-request-2"},"Example Request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "network":"NEO",\n    "txid":"12345",\n    "from":"AXbopuA5SPv5EVQP5REer4kdwMXpjRC7YQ",\n    "to":"AXbopuA5SPv5EVQP5REer4kdwMXpjRC7YQ",\n    "amount":1,\n    "identifier":"12345"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the payment"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"txid")," (string) - the blockchain unique transaction id"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"from")," (string) - the blockchain address the payment was sent from"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"to")," (string) - the blockchain address the payment was sent to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"amount")," (int) - the payment amount"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"identifier")," (string) - the unique identifier of the transaction")),Object(i.b)("h5",{id:"example-response"},"Example Response:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "complete":false,\n    "success":false\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"complete")," (bool) - whether or not the transaction is finalized on the blockchain"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"success")," (bool) - whether or not the transaction was completed and all provided information was verified")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"post-blockchaincreatepublishtx"},"POST /blockchain/createpublishtx"),Object(i.b)("p",null,"Create a dual-sign verified claim publish transaction to allow publish a claim in the Bridge Keyserver Contract on NEO.  (internal only)"),Object(i.b)("h5",{id:"example-request-3"},"Example Request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "network":"NEO",\n    "address":"AXbopuA5SPv5EVQP5REer4kdwMXpjRC7YQ",\n    "claim":{\n        "claimTypeId":3,\n        "claimValue":"someuser@bridgeprotocol.io",\n        "createdOn":1551180491,\n        "expiresOn":0,\n        "signedByKey":"2d2d2d2d2d424547494e20504750205055424...",\n        "signature":"2d2d2d2d2d424547494e20504750204d4553534..."\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the payment"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"address")," (string) - the blockchain unique transaction id"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"claim")," (string) - the blockchain address the payment was sent from"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hashOnly")," (bool) - (optional) publish the value of the hash only")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE: Only Bridge admin blockchain addresses can sign this transaction or the smart contract execution will fail")))}s.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,o({ref:t},b,{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);