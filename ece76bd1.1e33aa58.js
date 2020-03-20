(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{141:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),c=a(147),i=a.n(c),o=a(154),s=a(149),u=a(146),d=a(148),m=a(142),h=a.n(m),f=[{title:l.a.createElement(l.a.Fragment,null,"Secure Digital Identity"),imageUrl:"/img/secure.png",description:l.a.createElement(l.a.Fragment,null,"Bridge Protocol is a secure identity protocol that allows for verification, management, and transmission of digital identity.  With the Bridge Protocol, users are in total control of their data and only provide the data they choose.")},{title:l.a.createElement(l.a.Fragment,null,"Flexible Integration Options"),imageUrl:"/img/flexible.png",description:l.a.createElement(l.a.Fragment,null,"Your Bridge Protocol identity is fully portable allowing for peer-to-peer, in-person, and on-chain transmission with popular blockchains.  There are several flexible integrated authentication and authorization options for any application.")},{title:l.a.createElement(l.a.Fragment,null,"Open Sourced"),imageUrl:"/img/github.png",description:l.a.createElement(l.a.Fragment,null,"Bridge Protocol was built and open sourced to bring secure digital identity to the community.  The core SDK, integration microservices, and end-user clients are all available on GitHub and free to use in all of your applications.")}];function b(e){var t=e.imageUrl,a=e.title,n=e.description,r=Object(d.a)(t);return l.a.createElement("div",{className:i()("col col--4",h.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:h.a.featureImage,src:r,alt:a})),l.a.createElement("h3",null,a),l.a.createElement("p",null,n))}t.default=function(){var e=Object(u.a)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(o.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:i()("hero hero--primary",h.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"hero-logo"},l.a.createElement("img",{src:"/img/bridge-white.png"}),l.a.createElement("h1",null,"Secure Portable Digital Identity")),l.a.createElement("div",{className:h.a.buttons},l.a.createElement(s.a,{className:i()("button button--secondary button--lg",h.a.getStarted),to:Object(d.a)("docs/bridge-overview")},"Get Started")))),l.a.createElement("main",null,f&&f.length&&l.a.createElement("section",{className:h.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},f.map((function(e,t){return l.a.createElement(b,Object(n.a)({key:t},e))})))))))}},150:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},151:function(e,t,a){"use strict";var n=a(0),r=a(150);t.a=function(){return Object(n.useContext)(r.a)}},152:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},153:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(160),c=a(146),i=a(148);const o="",s="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(c.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):o),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),l=Object(n.useCallback)(()=>{a(o),r(o)},[]),i=Object(n.useCallback)(()=>{a(s),r(s)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?s:o)})},[]),{isDarkTheme:t===s,setLightTheme:l,setDarkTheme:i}},d=a(150);var m=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)},h=a(1),f=a(149),b=a(155),g=()=>null,v=a(156),p=a.n(v),E=a(147),k=a.n(E),y=a(93),_=a.n(y);const O=()=>r.a.createElement("span",{className:k()(_.a.toggle,_.a.moon)}),j=()=>r.a.createElement("span",{className:k()(_.a.toggle,_.a.sun)});var w=function(e){const{isClient:t}=Object(c.a)();return r.a.createElement(p.a,Object(h.a)({disabled:!t,icons:{checked:r.a.createElement(O,null),unchecked:r.a.createElement(j,null)}},e))},N=a(151),C=a(152);var T=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var S=e=>{const[t,a]=Object(n.useState)(!0),[r,l]=Object(n.useState)(!1),[c,i]=Object(n.useState)(0),[o,s]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&s(e.getBoundingClientRect().height)},[]),d=Object(C.b)(),[m,h]=T(d.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<o)return;if(r)return l(!1),a(!1),void i(e);const t=document.documentElement.scrollHeight-o,n=window.innerHeight;c&&e>c?a(!1):e+n<t&&a(!0),i(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[c,o]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&l(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},x=a(153),D=a(94),M=a.n(D);function L({activeBasePath:e,to:t,href:a,label:n,position:l,...c}){const o=Object(i.a)(t),s=Object(i.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:o,...e?{isActive:(e,t)=>t.pathname.startsWith(s)}:null},c),n)}var P=function(){const{siteConfig:e={},isClient:t}=Object(c.a)(),{baseUrl:a,themeConfig:l={}}=e,{navbar:o={},disableDarkMode:s=!1}=l,{title:u,logo:d={},links:m=[],hideOnScroll:v=!1}=o,[p,E]=Object(n.useState)(!1),[y,_]=Object(n.useState)(!1),{isDarkTheme:O,setLightTheme:j,setDarkTheme:C}=Object(N.a)(),{navbarRef:T,isNavbarVisible:D}=S(v);Object(x.a)(p);const P=Object(n.useCallback)(()=>{E(!0)},[E]),B=Object(n.useCallback)(()=>{E(!1)},[E]),F=Object(n.useCallback)(e=>e.target.checked?C():j(),[j,C]),I=d.href||a;let X={};d.target?X={target:d.target}:Object(b.a)(I)||(X={rel:"noopener noreferrer",target:"_blank"});const H=d.srcDark&&O?d.srcDark:d.src,R=Object(i.a)(H);return r.a.createElement("nav",{ref:T,className:k()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":p,[M.a.navbarHideable]:v,[M.a.navbarHidden]:!D})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",to:I},X),null!=d&&r.a.createElement("img",{key:t,className:"navbar__logo",src:R,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:k()("navbar__title",{[M.a.hideLogoText]:y})},u)),m.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(L,Object(h.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(L,Object(h.a)({},e,{key:t}))),!s&&r.a.createElement(w,{className:M.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:O,onChange:F}),r.a.createElement(g,{handleSearchBarToggle:_,isSearchBarExpanded:y}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:B}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",onClick:B,to:I},X),null!=d&&r.a.createElement("img",{key:t,className:"navbar__logo",src:R,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:"navbar__title"},u)),!s&&p&&r.a.createElement(w,{"aria-label":"Dark mode toggle in sidebar",checked:O,onChange:F})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(L,Object(h.a)({className:"menu__link"},e,{onClick:B})))))))))},B=a(95),F=a.n(B);function I({to:e,href:t,label:a,...n}){const l=Object(i.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const X=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var H=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:o=[],logo:s={}}=n||{},u=Object(i.a)(s.src);return n?r.a.createElement("footer",{className:k()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(I,e)))):null))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:F.a.footerLogoLink},r.a.createElement(X,{alt:s.alt,url:u})):r.a.createElement(X,{alt:s.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))):null};a(96);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,title:n,themeConfig:{image:o},url:s}=t,{children:u,title:d,noFooter:h,description:f,image:b,keywords:g,permalink:v,version:p}=e,E=d?`${d} | ${n}`:n,k=b||o,y=s+Object(i.a)(k),_=Object(i.a)(a);return r.a.createElement(m,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:_}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:y}),k&&r.a.createElement("meta",{property:"twitter:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),v&&r.a.createElement("meta",{property:"og:url",content:s+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(P,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(H,null))}},156:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=m(l),i=m(a(147)),o=m(a(8)),s=m(a(157)),u=m(a(158)),d=a(159);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},157:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},158:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},159:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);