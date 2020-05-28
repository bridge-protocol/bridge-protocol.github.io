(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return n})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(1),a=o(6),s=(o(0),o(168)),i={id:"sdk-examples",title:"Code Examples",sidebar_label:"Examples"},n={id:"sdk-examples",title:"Code Examples",description:'There are several code examples for the most common use cases included in the <a href="https://github.com/bridge-protocol/bridge-protocol-js/tree/master/examples">GitHub Repository</a>\r',source:"@site/docs\\sdk-examples.md",permalink:"/docs/sdk-examples",sidebar_label:"Examples",sidebar:"gettingStarted",previous:{title:"Bridge Core SDK",permalink:"/docs/sdk"},next:{title:"Claim",permalink:"/docs/sdk-models-claim"}},c=[{value:"Create a New Passport",id:"create-a-new-passport",children:[]},{value:"Loading Existing Passports",id:"loading-existing-passports",children:[]},{value:"Creating Signed and Encrypted Claim Packages",id:"creating-signed-and-encrypted-claim-packages",children:[]},{value:"Passport to Passport Claims Import",id:"passport-to-passport-claims-import",children:[]},{value:"Passport to Passport Authentication",id:"passport-to-passport-authentication",children:[]},{value:"Passport to Passport Payments",id:"passport-to-passport-payments",children:[]},{value:"Bridge Marketplace Requests",id:"bridge-marketplace-requests",children:[]},{value:"Blockchain Claim Publishing",id:"blockchain-claim-publishing",children:[]},{value:"Cross-Chain Token Swap",id:"cross-chain-token-swap",children:[]},{value:"Blockchain Interaction",id:"blockchain-interaction",children:[]}],p={rightToc:c};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"There are several code examples for the most common use cases included in the ",Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/tree/master/examples"},"GitHub Repository")),Object(s.b)("h2",{id:""}),Object(s.b)("h3",{id:"create-a-new-passport"},"Create a New Passport"),Object(s.b)("p",{class:"nobottommargin"},"This example will demonstrate how to create a new Bridge Passport with generated private / public keys and optionally create or import blockchain wallets."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/passport-create.js"},"View Example on GitHub"),Object(s.b)("h2",{id:"-1"}),Object(s.b)("hr",null),Object(s.b)("h3",{id:"loading-existing-passports"},"Loading Existing Passports"),Object(s.b)("p",{class:"nobottommargin"},"Once created and exported, this example demonstrates how to import and load an existing passport from disk."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/passport-load.js"},"View Example on GitHub"),Object(s.b)("h2",{id:"-2"}),Object(s.b)("hr",null),Object(s.b)("h3",{id:"creating-signed-and-encrypted-claim-packages"},"Creating Signed and Encrypted Claim Packages"),Object(s.b)("p",{class:"nobottommargin"},"For Bridge verification partners or for third parties wishing to issue their own signed claims for other passports, this example demonstrates how to create a claim and create signed and encrypted claim packages for transmission to the target passport. Note: Only claims issued by Bridge verification partners with known claim types are considered Bridge Verified Claims."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/claims-create.js"},"View Example on GitHub"),Object(s.b)("h2",{id:"-3"}),Object(s.b)("hr",null),Object(s.b)("h3",{id:"passport-to-passport-claims-import"},"Passport to Passport Claims Import"),Object(s.b)("p",{class:"nobottommargin"},"Once secure claim packages are created, they need to be transmitted to the target passport and the target passport must import those claims so they can be included in the passport.  This example demonstrates how to create a claims import request from the claims issuing passport and send it to a target passport that will then verify the request and included claims and import those claims to the passport."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/claims-import.js"},"View Example on GitHub"),Object(s.b)("h2",{id:"-4"}),Object(s.b)("hr",null),Object(s.b)("h3",{id:"passport-to-passport-authentication"},"Passport to Passport Authentication"),Object(s.b)("p",{class:"nobottommargin"},"When a passport wants to request information about another passport to be used for Authentication or Authorization purposes, This example will demonstrate the authentication workflow is used to facilitate the challenge and response between passports."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/authentication.js"},"View Example on GitHub"),Object(s.b)("h2",{id:"-5"}),Object(s.b)("hr",null),Object(s.b)("h3",{id:"passport-to-passport-payments"},"Passport to Passport Payments"),Object(s.b)("p",{class:"nobottommargin"},"When a passport wants to request payment in BRDG a request needs to be made for the receiving passport to send payment via blockchain that needs to then be validated by the requesting passport that it was sent and that the transaction completed successfully.  This example demonstrates the payment request workflow to request and send payment between two passports."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/payment.js"},"View Example on GitHub"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"bridge-marketplace-requests"},"Bridge Marketplace Requests"),Object(s.b)("p",{class:"nobottommargin"},"The Bridge Network API is used to find marketplace partners and send verification requests via the Bridge Protocol Marketplace. This example demonstrates how to use the endpoints to manage the lifecycle of a Bridge Marketplace verification request."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/verification-request.js"},"View Example on GitHub"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"blockchain-claim-publishing"},"Blockchain Claim Publishing"),Object(s.b)("p",{class:"nobottommargin"},"To publish claims on NEO or Ethereum, the Bridge Network needs to verify the integrity of the claim before it can be published.  This example shows how to send a verified claim to the Bridge Network for verification and publishing."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/claims-publish.js"},"View Example on GitHub"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"cross-chain-token-swap"},"Cross-Chain Token Swap"),Object(s.b)("p",{class:"nobottommargin"},"The Bridge Token can exist on either the NEO or Ethereum blockchain.  This example shows how to send a token swap request to the Bridge Network to swap tokens between blockchains."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/token-swap.js"},"View Example on GitHub"),Object(s.b)("hr",null),Object(s.b)("h3",{id:"blockchain-interaction"},"Blockchain Interaction"),Object(s.b)("p",{class:"nobottommargin"},"A passport and verified claims can be published to both NEO and Ethereum blockchains in addition to transferring tokens.  This example demonstrates how to use the Bridge SDK to interact with Bridge Smart Contract functionality on both blockchains."),Object(s.b)("a",{href:"https://github.com/bridge-protocol/bridge-protocol-js/blob/master/examples/blockchain.js"},"View Example on GitHub"))}l.isMDXComponent=!0},168:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return h}));var r=o(0),a=o.n(r);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):n({},t,{},e)),o},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(o),m=r,h=b["".concat(i,".").concat(m)]||b[m]||d[m]||s;return o?a.a.createElement(h,n({ref:t},p,{components:o})):a.a.createElement(h,n({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=m;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:r,i[1]=n;for(var p=2;p<s;p++)i[p]=o[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);