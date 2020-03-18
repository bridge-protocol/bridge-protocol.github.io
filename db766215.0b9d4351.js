(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),s=(n(0),n(139)),i={id:"messaging-payment",title:"Payment",sidebar_label:"Payment"},o={id:"messaging-payment",title:"Payment",description:"The payment protocol is used by a passport that wishes to request payments in BRDG token from another passport.\r",source:"@site/..\\docs\\messaging-payment.md",permalink:"/docs/messaging-payment",sidebar_label:"Payment",sidebar:"gettingStarted",previous:{title:"Claims Import",permalink:"/docs/messaging-claimsimport"},next:{title:"Bridge Network",permalink:"/docs/network"}},p=[{value:"Creating a Payment Request",id:"creating-a-payment-request",children:[]},{value:"Receiving a Payment Request",id:"receiving-a-payment-request",children:[]},{value:"Creating a Payment Response",id:"creating-a-payment-response",children:[]},{value:"Verifying a Payment Response",id:"verifying-a-payment-response",children:[]}],c={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The payment protocol is used by a passport that wishes to request payments in BRDG token from another passport."),Object(s.b)("img",{class:"centered",src:"https://github.com/bridge-protocol/bridge-protocol-js/blob/ethereum-publishing/docs/images/message-payment.jpg?raw=true"}),Object(s.b)("h2",{id:"creating-a-payment-request"},"Creating a Payment Request"),Object(s.b)("p",null,"A passport can request payment from another passport by creating a payment request."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"let wallet = passport.getWalletForNetwork(network);\nlet paymentRequest = await Bridge.Messaging.Payment.createPaymentRequest(passport, password, wallet.network, amount, wallet.address, paymentIdentifier);\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"wallet")," - the blockchain wallet to request payment be sent to"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"paymentRequest")," -  the payment request message to be sent to the target passport")),Object(s.b)("h2",{id:"receiving-a-payment-request"},"Receiving a Payment Request"),Object(s.b)("p",null,"The receiving passport will receive the payment request and verify the integrity of the message and the passport that sent the request."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"let verifiedPaymentRequest = await Bridge.Messaging.Payment.verifyPaymentRequest(paymentRequest);\nlet passportDetails = await Bridge.Services.Passport.getDetails(passport, password, verifiedPaymentRequest.passportId);\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"paymentRequest")," - the payment request message received from the sending passport"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"verifiedPaymentRequest")," - the integrity verified data transmitted via the payment request message"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"passportDetails")," - the information received from the Bridge Network about the passport that sent the request message")),Object(s.b)("h2",{id:"creating-a-payment-response"},"Creating a Payment Response"),Object(s.b)("p",null,"The receiving passport will send the requested payment on the requested blockchain network and create a response message that includes the blockchain transaction information about the payment."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"let wallet = passport.getWalletForNetwork(paymentRequest.network);\nawait wallet.unlock(password);\nlet transactionId = await Bridge.Services.Blockchain.sendPayment(wallet, paymentRequest.amount, paymentRequest.address, paymentRequest.identifier, false);\nlet paymentResponse = await Bridge.Messaging.Payment.createPaymentResponse(passport, password, paymentRequest.network, wallet.address, paymentRequest.amount, paymentRequest.address, paymentRequest.identifier, transactionId, targetPublicKey);\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"wallet")," - the blockchain wallet to send payment from"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"transactionId")," - the resulting transaction identifier for the blockchain payment transaction"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"paymentResponse")," - the payment response message to be sent back to the sender to confirm the payment transaction")),Object(s.b)("h2",{id:"verifying-a-payment-response"},"Verifying a Payment Response"),Object(s.b)("p",null,"The passport that sent the payment request recieves the payment response and verifies the blockchain transaction information for the payment."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"let verifiedPaymentResponse = await Bridge.Messaging.Payment.verifyPaymentResponse(passport, _password, paymentResponse);\nlet verifiedPayment = await Bridge.Services.Blockchain.verifyPayment(verifiedPaymentResponse.network, verifiedPaymentResponse.transactionId, verifiedPaymentResponse.from, verifiedPaymentResponse.address, verifiedPaymentResponse.amount, verifiedPaymentResponse.identifier);\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"paymentResponse")," - the payment response message received from the sender"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"verifiedPaymentResponse")," - the integrity verified data transmitted via the payment response message"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"verifiedPayment")," - the verified payment info about the payment")))}l.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,y=m["".concat(i,".").concat(u)]||m[u]||b[u]||s;return n?r.a.createElement(y,o({ref:t},c,{components:n})):r.a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);