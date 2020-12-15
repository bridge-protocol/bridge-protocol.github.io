(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(1),n=r(6),c=(r(0),r(176)),o={id:"bridge-passport",title:"Bridge Passport",sidebar_label:"Overview"},i={id:"bridge-passport",title:"Bridge Passport",description:"The Bridge Passport is the container holds all of a user's keys, blockchain wallets, and claims to allow them to interact with the Bridge Network, Bridge Marketplace, other Bridge Passports, and multiple blockchains.\r",source:"@site/docs\\bridge-passport.md",permalink:"/docs/bridge-passport",sidebar_label:"Overview",sidebar:"gettingStarted",previous:{title:"Bridge Overview",permalink:"/docs/bridge-overview"},next:{title:"Bridge Protocol Keys",permalink:"/docs/passport-key"}},l=[{value:"Export and Backup",id:"export-and-backup",children:[{value:"File Format",id:"file-format",children:[]}]}],d={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Bridge Passport is the container holds all of a user's keys, blockchain wallets, and claims to allow them to interact with the Bridge Network, Bridge Marketplace, other Bridge Passports, and multiple blockchains."),Object(c.b)("img",{class:"centered",src:"../img/passport.png"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Passport ID")," - The ID of the passport (fingerprint of the public key)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Bridge Key")," - The Public / Private key pair used for all Bridge Protocol signing and encryption"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Blockchain Wallets")," - The collection of blockchain wallets used for blockchain transactions"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Claim Packages")," - The collection of encrypted claim packages containing the claims for the passport")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"export-and-backup"},"Export and Backup"),Object(c.b)("p",null,"The Bridge Protocol can be exported to a JSON file to include all keys, blockchain wallets, and encrypted claims packages to provide portability and allow for backups.  When the passport is exported, all Bridge Protocol and blockchain wallet private keys are encrypted using the passphrase that was provided when the passport was created.  Claim packages are encrypted for the Bridge Passport by the original sender, so no additional encryption is necessary on export."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Id")," - The unique identifier for the passport"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Version")," - The version of the Bridge Passport"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Key")," - Encrypted and exported as a Hex Encoded PGP Key"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Wallets")," - Blockchain Wallets for the Passport.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"NEO - Key encrypted and exported as a NEP-2 Key"),Object(c.b)("li",{parentName:"ul"},"Ethereum - Key encrypted and exported as a v3 Keystore"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Claims")," - Encrypted Claim Packages")),Object(c.b)("h3",{id:"file-format"},"File Format"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "id": "6e2aa1e196527ac3f1e23544bc1ab0cbb4d99ae6",\n  "version": 1.1,\n  "key": {\n    "public": "2d2d2d2d2d424547494e20504750205055424c4943204b455920424c4f434b2d2d2d2d2d0a56657273696f6e3a204b657962617365204f70656e5047502076322e312e360a436f6d6d656e743a2068747470733a2f2f6b65796...",\n    "private": "2d2d2d2d2d424547494e205047502050524956415445204b455920424c4f434b2d2d2d2d2d0a56657273696f6e3a204b657962617365204f70656e5047502076322e312e360a436f6d6d656e743a2068747470733a2f2f6b65..."\n  },\n  "wallets": [\n    {\n      "network": "NEO",\n      "address": "AVnViid7Jm7ibakwewKBCBrAbrErpWFsRQ",\n      "key": "6PYXVMqBRoTfvirVhFxSZhskfzbM3ERcqryHYu5uisDmcsDUAL1b9StBZ2"\n    },\n    {\n      "network": "ETH",\n      "address": "0x760e8e67f4e3b4cfab882bf778b9cfcb067d0d80",\n      "key": {\n        "version": 3,\n        "id": "07731720-4608-42ce-a3bb-aa92eebfde9a",\n        "address": "760e8e67f4e3b4cfab882bf778b9cfcb067d0d80",\n        "crypto": {\n          "ciphertext": "6cd0c73e04b1c652252c5f45e03aea5c53eea79503a97b5c383f463afa34c2e6",\n          "cipherparams": {\n            "iv": "5aa8571cbcd4926b7edc2bd2deb5058a"\n          },\n          "cipher": "aes-128-ctr",\n          "kdf": "scrypt",\n          "kdfparams": {\n            "dklen": 32,\n            "salt": "b1778086b6953b82d9c0552c40ff28ff013e1ef30d7f859229f9c75ea1b3171e",\n            "n": 262144,\n            "r": 8,\n            "p": 1\n          },\n          "mac": "d846143daf8ead5f94a6bba9fa186a13b73ec949c7935d021bccb28c2f91f539"\n        }\n      }\n    }\n  ],\n  "claims": [\n    {\n      "typeId": 3,\n      "signedBy": "2d2d2d2d2d424547494e20504750205055424c4943204b455920424c4f434b2d2d2d2d2d0a56657273696f6e3a204b657962617365204f70656e5047502076322e312e360a436f6d6d656e743a2068747470733a2f2f6...",\n      "claim": "2d2d2d2d2d424547494e20504750204d4553534147452d2d2d2d2d0a56657273696f6e3a204b657962617365204f70656e5047502076322e312e360a436f6d6d656e743a2068747470733a2f2f6b6579626173652e696f2f..."\n    }\n  ]\n}\n')))}s.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),s=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=s(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,u=p["".concat(o,".").concat(f)]||p[f]||b[f]||c;return r?n.a.createElement(u,i({ref:t},d,{components:r})):n.a.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<c;d++)o[d]=r[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);