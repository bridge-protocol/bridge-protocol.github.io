(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return d})),t.d(r,"default",(function(){return p}));var a=t(1),n=t(6),i=(t(0),t(133)),o={id:"bridge-passport",title:"Bridge Passport",sidebar_label:"Bridge Passport"},c={id:"bridge-passport",title:"Bridge Passport",description:"# Bridge Passport\r",source:"@site/..\\docs\\bridge-passport.md",permalink:"/docs/bridge-passport",sidebar_label:"Bridge Passport",sidebar:"someSidebar",previous:{title:"Bridge Overview",permalink:"/docs/bridge-overview"},next:{title:"Messaging",permalink:"/docs/messaging"}},d=[{value:"Entities",id:"entities",children:[{value:"Bridge Protocol Key Pair",id:"bridge-protocol-key-pair",children:[]},{value:"Blockchain Wallet",id:"blockchain-wallet",children:[]},{value:"Encrypted Claim Package",id:"encrypted-claim-package",children:[]}]},{value:"Export and Backup",id:"export-and-backup",children:[{value:"File Format",id:"file-format",children:[]}]}],s={rightToc:d};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"bridge-passport"},"Bridge Passport"),Object(i.b)("p",null,"The Bridge Passport is the container holds all of a user's keys, blockchain wallets, and claims to allow them to interact with the Bridge Network, Bridge Marketplace, other Bridge Passports, and multiple blockchains."),Object(i.b)("img",{src:"https://github.com/bridge-protocol/bridge-protocol-js/blob/ethereum-publishing/docs/images/bridgepassport.jpg?raw=true"}),Object(i.b)("h2",{id:"entities"},"Entities"),Object(i.b)("h3",{id:"bridge-protocol-key-pair"},"Bridge Protocol Key Pair"),Object(i.b)("p",null,"The Bridge Protocol key pair is used for all cryptographic signing and encrypting when using the Bridge Protocol."),Object(i.b)("img",{src:"https://github.com/bridge-protocol/bridge-protocol-js/blob/ethereum-publishing/docs/images/bridgepassport-key.jpg?raw=true"}),Object(i.b)("h3",{id:"blockchain-wallet"},"Blockchain Wallet"),Object(i.b)("p",null,"A Bridge Passport will contain one or more blockchain wallets to handle on-chain transactions (payments, publishing, etc).  The current supported blockchain wallets are Ethereum and NEO."),Object(i.b)("img",{src:"https://github.com/bridge-protocol/bridge-protocol-js/blob/ethereum-publishing/docs/images/bridgepassport-wallet.jpg?raw=true"}),Object(i.b)("h3",{id:"encrypted-claim-package"},"Encrypted Claim Package"),Object(i.b)("p",null,"A Bridge Passport may contain encrypted claims packages that were issued to the passport from another passport.  "),Object(i.b)("img",{src:"https://github.com/bridge-protocol/bridge-protocol-js/blob/ethereum-publishing/docs/images/passport-claimpackage.jpg?raw=true?raw=true"}),Object(i.b)("h2",{id:"export-and-backup"},"Export and Backup"),Object(i.b)("p",null,"The Bridge Protocol can be exported to a JSON file to include all keys, blockchain wallets, and encrypted claims packages to provide portability and allow for backups.  When the passport is exported, all Bridge Protocol and blockchain wallet private keys are encrypted using the passphrase that was provided when the passport was created.  Claim packages are encrypted for the Bridge Passport by the original sender, so no additional encryption is necessary on export."),Object(i.b)("h3",{id:"file-format"},"File Format"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "id": "6e2aa1e196527ac3f1e23544bc1ab0cbb4d99ae6",\n  "version": 1.1,\n  "key": {\n    "public": "2d2d2d2d2d424547494e20504750205055424c4943204b455920424c4f434b2d2d2d2d2d0a56657273696f6e3a204b657962617365204f70656e5047502076322e312e360a436f6d6d656e743a2068747470733a2f2f6b65796...",\n    "private": "2d2d2d2d2d424547494e205047502050524956415445204b455920424c4f434b2d2d2d2d2d0a56657273696f6e3a204b657962617365204f70656e5047502076322e312e360a436f6d6d656e743a2068747470733a2f2f6b65..."\n  },\n  "wallets": [\n    {\n      "network": "NEO",\n      "address": "AVnViid7Jm7ibakwewKBCBrAbrErpWFsRQ",\n      "key": "6PYXVMqBRoTfvirVhFxSZhskfzbM3ERcqryHYu5uisDmcsDUAL1b9StBZ2"\n    },\n    {\n      "network": "ETH",\n      "address": "0x760e8e67f4e3b4cfab882bf778b9cfcb067d0d80",\n      "key": {\n        "version": 3,\n        "id": "07731720-4608-42ce-a3bb-aa92eebfde9a",\n        "address": "760e8e67f4e3b4cfab882bf778b9cfcb067d0d80",\n        "crypto": {\n          "ciphertext": "6cd0c73e04b1c652252c5f45e03aea5c53eea79503a97b5c383f463afa34c2e6",\n          "cipherparams": {\n            "iv": "5aa8571cbcd4926b7edc2bd2deb5058a"\n          },\n          "cipher": "aes-128-ctr",\n          "kdf": "scrypt",\n          "kdfparams": {\n            "dklen": 32,\n            "salt": "b1778086b6953b82d9c0552c40ff28ff013e1ef30d7f859229f9c75ea1b3171e",\n            "n": 262144,\n            "r": 8,\n            "p": 1\n          },\n          "mac": "d846143daf8ead5f94a6bba9fa186a13b73ec949c7935d021bccb28c2f91f539"\n        }\n      }\n    }\n  ],\n  "claims": [\n    {\n      "typeId": 3,\n      "signedBy": "2d2d2d2d2d424547494e20504750205055424c4943204b455920424c4f434b2d2d2d2d2d0a56657273696f6e3a204b657962617365204f70656e5047502076322e312e360a436f6d6d656e743a2068747470733a2f2f6...",\n      "claim": "2d2d2d2d2d424547494e20504750204d4553534147452d2d2d2d2d0a56657273696f6e3a204b657962617365204f70656e5047502076322e312e360a436f6d6d656e743a2068747470733a2f2f6b6579626173652e696f2f..."\n    }\n  ]\n}\n')))}p.isMDXComponent=!0},133:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return u}));var a=t(0),n=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),p=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},l=function(e){var r=p(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},f=Object(a.forwardRef)((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(t),f=a,u=l["".concat(o,".").concat(f)]||l[f]||b[f]||i;return t?n.a.createElement(u,c({ref:r},s,{components:t})):n.a.createElement(u,c({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);