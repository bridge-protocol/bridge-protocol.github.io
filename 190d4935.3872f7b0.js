(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return i}));var r=a(1),l=a(6),n=(a(0),a(146)),c={id:"sdk-models-passport",title:"Passport",sidebar_label:"Passport"},o={id:"sdk-models-passport",title:"Passport",description:"The passport is the container for all passport signing and encryption keys, blockchain wallets, and encrypted claim packages.\r",source:"@site/docs\\sdk-models-passport.md",permalink:"/docs/sdk-models-passport",sidebar_label:"Passport",sidebar:"gettingStarted",previous:{title:"Claim Package",permalink:"/docs/sdk-models-claimpackage"},next:{title:"Wallet",permalink:"/docs/sdk-models-wallet"}},s=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Functions",id:"functions",children:[{value:"create()",id:"create",children:[]},{value:"openFile()",id:"openfile",children:[]},{value:"open()",id:"open",children:[]},{value:"save()",id:"save",children:[]},{value:"export()",id:"export",children:[]},{value:"addWallet()",id:"addwallet",children:[]},{value:"getWalletForNetwork()",id:"getwalletfornetwork",children:[]},{value:"getWalletAddresses()",id:"getwalletaddresses",children:[]},{value:"getDecryptedClaim()",id:"getdecryptedclaim",children:[]},{value:"getDecryptedClaims()",id:"getdecryptedclaims",children:[]},{value:"getClaimPackage()",id:"getclaimpackage",children:[]},{value:"getClaimPackages()",id:"getclaimpackages",children:[]}]}],p={rightToc:s};function i(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The passport is the container for all passport signing and encryption keys, blockchain wallets, and encrypted claim packages."),Object(n.b)("h2",{id:"constructor"},"Constructor"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passport()")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"id")," (string) - the unique identifier of the passport"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"version")," (string) - the version of the passport"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"key")," (object) - an object containing the public and private key of the passport"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"wallets")," (",Object(n.b)("a",{href:"sdk-models-wallet"},"Wallet"),"[]) - the blockchain wallets in the passport"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"claims")," (",Object(n.b)("a",{href:"sdk-models-claimpackage"},"ClaimPackage"),"[]) - the claim packages in the passport"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"publicKey")," (string) - shortcut that returns the public key of the passport"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"privateKey")," (string) - shortcut that returns the private key of the passport")),Object(n.b)("h2",{id:"functions"},"Functions"),Object(n.b)("h3",{id:"create"},"create()"),Object(n.b)("p",null,"Creates a new passport with a private key encrypted using the password"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"async create(password)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"password")," (string) - the password to encrypt the private key and unlock the passport")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"openfile"},"openFile()"),Object(n.b)("p",null,"Opens an existing passport from a JSON file on disk"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"async openFile(filePath, password)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"filePath")," (string) - the file path to load the exported passport JSON from"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"password")," (string) - the password used to unlock the private key of the passport")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"open"},"open()"),Object(n.b)("p",null,"Opens a passport from JSON content"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"async open(passportJson, password)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"passportJson")," (string) - the JSON string of an exported passport to load"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"password")," (string) - the password used to unlock the private key of the passport")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"save"},"save()"),Object(n.b)("p",null,"Exports and saves the passport to a JSON file on disk "),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"async save(filePath)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"filePath")," (string) - the file path to save the passport JSON file to")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"export"},"export()"),Object(n.b)("p",null,"Retrieves a copy of the passport object with all unlocked wallets and non-exportable information removed"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"async export()\n")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"addwallet"},"addWallet()"),Object(n.b)("p",null,"Adds a new blockchain ",Object(n.b)("a",{href:"sdk-models-wallet"},"Wallet")," to the passport"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"async addWallet(network, password, privateKey)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network of the wallet"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"password")," (string) - the password to use to encrypt the private key / unlock the wallet"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"privateKey")," (string) - if provided the wallet will be an imported blockchain wallet, otherwise a new private key is generated")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getwalletfornetwork"},"getWalletForNetwork()"),Object(n.b)("p",null,"Retrieves the ",Object(n.b)("a",{href:"sdk-models-wallet"},"Wallet")," for the specified network from the passport wallets"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"getWalletForNetwork(network)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"network")," (string) - the blockchain network to retrieve the ",Object(n.b)("a",{href:"sdk-models-wallet"},"Wallet")," for")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getwalletaddresses"},"getWalletAddresses()"),Object(n.b)("p",null,"Retrieves a list of the passport addresses for the specified blockchain networks"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"getWalletAddresses(networks)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"networks")," (string[]) - the networks to retrieve blockchain addresses for")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getdecryptedclaim"},"getDecryptedClaim()"),Object(n.b)("p",null,"Retrives a decrypted ",Object(n.b)("a",{href:"sdk-models-claim"},"Claim")," from the passport claim packages collection"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"async getDecryptedClaim(claimTypeId, password)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"claimTypeId")," (string) - the type of the claim to retrieve from the passport collection"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"password")," (string) - the password of the passport private key used to decrypt the claim package")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getdecryptedclaims"},"getDecryptedClaims()"),Object(n.b)("p",null,"Retrives multiple decrypted ",Object(n.b)("a",{href:"sdk-models-claim"},"Claim")," objects from the passport claim packages collection"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"async getDecryptedClaims(claimTypeIds, password)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"claimTypeIds")," (string[]) - the type of the claims to retrieve from the passport collection"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"password")," (string) - the password of the passport private key used to decrypt the claim packages")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getclaimpackage"},"getClaimPackage()"),Object(n.b)("p",null,"Retrieves a claim package from the passport claim packages collection"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"getClaimPackage(claimTypeId)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"claimTypeId")," (string) - the type of the claim to retrieve from the passport collection")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getclaimpackages"},"getClaimPackages()"),Object(n.b)("p",null,"Retrieves multiple claim packages from the claim packages collection"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"getClaimPackages(claimTypeIds)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"claimTypeIds")," (string[]) - the type of the claims to retrieve from the passport collection")))}i.isMDXComponent=!0},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return O}));var r=a(0),l=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),i=function(e){var t=l.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b=function(e){var t=i(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=i(a),u=r,O=b["".concat(c,".").concat(u)]||b[u]||d[u]||n;return a?l.a.createElement(O,o({ref:t},p,{components:a})):l.a.createElement(O,o({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<n;p++)c[p]=a[p];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);