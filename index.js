!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(3),i=o(r);customElements.define("github-corner",i.default)},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,a,l=[];for(a=arguments.length;a-- >2;)D.push(arguments[a]);for(n&&n.children&&(D.length||D.push(n.children),delete n.children);D.length;)if((r=D.pop())instanceof Array)for(a=r.length;a--;)D.push(r[a]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?l[l.length-1]+=r:(l.push(r),o=i));var u=new t(e,n||void 0,l);return z.vnode&&z.vnode(u),u}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function a(e){return"function"==typeof e}function l(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function s(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function f(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,a={},u=a,s=l(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,f=0;f<o.length-1;f++)u=u[o[f]]||(u[o[f]]=!f&&e.state[o[f]]||{});u[o[f]]=s,e.setState(a)}}function c(e){!e._dirty&&(e._dirty=!0)&&1==K.push(e)&&(z.debounceRendering||F)(p)}function p(){var e,t=K;for(K=[];e=t.pop();)e._dirty&&T(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(b(e),t||I)}function m(e,t){return l(t)?e instanceof Text:l(t.nodeName)?v(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||d(t):void 0}function v(e,t){return e.normalizedNodeName===t||V(e.nodeName)===V(t)}function b(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=u(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||l(o)||l(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!l(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||q[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html);else if("o"==t[0]&&"n"==t[1]){var s=e._listeners||(e._listeners={});t=V(t.substring(2)),o?s[t]||e.addEventListener(t,C,!!J[t]):s[t]&&e.removeEventListener(t,C,!!J[t]),s[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)g(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var f=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?f?e.removeAttributeNS("http://www.w3.org/1999/xlink",V(f[1])):e.removeAttribute(t):"object"==typeof o||a(o)||(f?e.setAttributeNS("http://www.w3.org/1999/xlink",V(f[1]),o):e.setAttribute(t,o))}else e.className=o||""}function g(e,t,n){try{e[t]=n}catch(e){}}function C(e){return this._listeners[e.type](z.event&&z.event(e)||e)}function x(e){if(y(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||V(e.nodeName);(Q[t]||(Q[t]=[])).push(e)}}function N(e,t){var n=V(e),o=Q[n]&&Q[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function w(){for(var e;e=X.pop();)z.afterMount&&z.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,o,r,i){Y++||($=r instanceof SVGElement);var a=O(e,t,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--Y||i||w(),a}function O(e,t,n,o){for(var r=t&&t.attributes;d(t);)t=h(t,n);if(null==t&&(t=""),l(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue!=t&&(e.nodeValue=t),e;j(e)}return document.createTextNode(t)}if(a(t.nodeName))return B(e,t,n,o);var i=e,u=t.nodeName,s=$,f=t.children;if(l(u)||(u=String(u)),$="svg"===u||"foreignObject"!==u&&$,e){if(!v(e,u)){for(i=N(u,$);e.firstChild;)i.appendChild(e.firstChild);j(e)}}else i=N(u,$);f&&1===f.length&&"string"==typeof f[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=f[0]&&(i.firstChild.nodeValue=f[0]):(f&&f.length||i.firstChild)&&P(i,f,n,o);var c=i[Z];if(!c){i[Z]=c={};for(var p=i.attributes,m=p.length;m--;)c[p[m].name]=p[m].value}return M(i,t.attributes,c),r&&"function"==typeof r.ref&&(c.ref=r.ref)(i),$=s,i}function P(e,t,n,o){var r,i,l,u,s=e.childNodes,f=[],c={},p=0,d=0,h=s.length,v=0,b=t&&t.length;if(h)for(var y=0;y<h;y++){var _=s[y],g=b?(i=_._component)?i.__key:(i=_[Z])?i.key:null:null;g||0===g?(p++,c[g]=_):f[v++]=_}if(b)for(var y=0;y<b;y++){l=t[y],u=null;var g=l.key;if(null!=g)p&&g in c&&(u=c[g],c[g]=void 0,p--);else if(!u&&d<v){for(r=d;r<v;r++)if(i=f[r],i&&m(i,l)){u=i,f[r]=void 0,r===v-1&&v--,r===d&&d++;break}!u&&d<v&&a(l.nodeName)&&o&&(u=f[d],f[d++]=void 0)}u=O(u,l,n,o),u&&u!==e&&u!==s[y]&&e.insertBefore(u,s[y]||null)}if(p)for(var y in c)c[y]&&j(c[y]);d<v&&S(f)}function S(e,t){for(var n=e.length;n--;)e[n]&&j(e[n],t)}function j(e,t){var n=e._component;n?A(n,!t):(e[Z]&&e[Z].ref&&e[Z].ref(null),t||x(e),e.childNodes&&e.childNodes.length&&S(e.childNodes,t))}function M(e,t,n){for(var o in n)t&&o in t||null==n[o]||_(e,o,n[o],n[o]=void 0,$);if(t)for(var r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||_(e,r,n[r],n[r]=t[r],$)}function U(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function E(e,t,n){var o=new e(t,n),r=ee[e.name];if(W.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function L(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&z.syncComponentUpdates===!1&&e.base?c(e):T(e,1,r)),e.__ref&&e.__ref(e))}function T(e,t,n,i){if(!e._disable){var l,u,s,f,c=e.props,p=e.state,m=e.context,v=e.prevProps||c,y=e.prevState||p,_=e.prevContext||m,g=e.base,C=e.nextBase,x=g||C,N=e._component;if(g&&(e.props=v,e.state=y,e.context=_,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(c,p,m)===!1?l=!0:e.componentWillUpdate&&e.componentWillUpdate(c,p,m),e.props=c,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!l){for(e.render&&(u=e.render(c,p,m)),e.getChildContext&&(m=o(r(m),e.getChildContext()));d(u);)u=h(u,m);var O,P,S=u&&u.nodeName;if(a(S)){s=N;var M=b(u);s&&s.constructor===S?L(s,M,1,m):(O=s,s=E(S,M,m),s.nextBase=s.nextBase||C,s._parentComponent=e,e._component=s,L(s,M,0,m),T(s,1,n,!0)),P=s.base}else f=x,O=N,O&&(f=e._component=null),(x||1===t)&&(f&&(f._component=null),P=k(f,u,m,n||!g,x&&x.parentNode,!0));if(x&&P!==x&&s!==N){var U=x.parentNode;U&&P!==U&&(U.replaceChild(P,x),O||(x._component=null,j(x)))}if(O&&A(O,P!==x),e.base=P,P&&!i){for(var B=e,W=e;W=W._parentComponent;)(B=W).base=P;P._component=B,P._componentConstructor=B.constructor}}!g||n?X.unshift(e):l||(e.componentDidUpdate&&e.componentDidUpdate(v,y,_),z.afterUpdate&&z.afterUpdate(e));var R,D=e._renderCallbacks;if(D)for(;R=D.pop();)R.call(e);Y||i||w()}}function B(e,t,n,o){for(var r=e&&e._component,i=e,a=r&&e._componentConstructor===t.nodeName,l=a,u=b(t);r&&!l&&(r=r._parentComponent);)l=r.constructor===t.nodeName;return r&&l&&(!o||r._component)?(L(r,u,3,n,o),e=r.base):(r&&!a&&(A(r,!0),e=i=null),r=E(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,i=null),L(r,u,1,n,o),e=r.base,i&&e!==i&&(i._component=null,j(i))),e}function A(e,t){z.beforeUnmount&&z.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?A(o,t):n&&(n[Z]&&n[Z].ref&&n[Z].ref(null),e.nextBase=n,t&&(y(n),U(e)),S(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function W(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function R(e,t,n){return k(n,e,{},!1,t)}var z={},D=[],H={},V=function(e){return H[e]||(H[e]=e.toLowerCase())},G="undefined"!=typeof Promise&&Promise.resolve(),F=G?function(e){G.then(e)}:setTimeout,I={},Z="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",q={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},J={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},K=[],Q={},X=[],Y=0,$=!1,ee={};o(W.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=f(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),c(this)},forceUpdate:function(){T(this,2)},render:function(){}}),e.h=n,e.cloneElement=s,e.Component=W,e.render=R,e.rerender=p,e.options=z})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),f=n(4),c=(o(f),function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(e){var t="fill:"+(e.fill||"#000")+"; color:"+(e.color||"#fff")+"; position: absolute; top: 0; border: 0;";return t+="left"===e.position?"transform: scale(-1, 1);left: 0;":"right: 0;",s.default.h("div",null,s.default.h("a",{href:e.href||"https://github.com/",class:"github-corner-element","aria-label":"View source on Github"},s.default.h("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:t,"aria-hidden":"true"},s.default.h("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),s.default.h("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:"transform-origin: 130px 106px;",class:"octo-arm"}),s.default.h("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"}))),s.default.h("style",null,".github-corner:hover .octo-arm {\n          animation: octocat-wave 560ms ease-in-out\n        }\n        @keyframes octocat-wave {\n          0%, 100% {\n            transform: rotate(0)\n          }\n          20%,\n          60% {\n            transform: rotate(-25deg)\n          }\n          40%,\n          80% {\n            transform: rotate(10deg)\n          }\n        }\n        @media (max-width: 500px) {\n          .github-corner:hover .octo-arm {\n            animation: none\n          }\n          .github-corner .octo-arm {\n            animation: octocat-wave 560ms ease-in-out\n          }\n        }"))}}]),t}(u.Component));t.default=c,c.displayName="GitHubCorner"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),f=n(2),c=o(f),p=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"attributeChangedCallback",value:function(e,t,n){switch(e){case"fill":case"color":case"href":case"position":this[e]=n}this.rendered&&this.updateRendering()}},{key:"connectedCallback",value:function(){this.updateRendering()}},{key:"updateRendering",value:function(){s.default.render(s.default.h(c.default,{color:this.color,fill:this.fill,href:this.href,position:this.position}),this,this.lastChild),this.rendered=!0}}],[{key:"observedAttributes",get:function(){return["fill","color","href","position"]}}]),t}(HTMLElement);t.default=p},function(e,t,n){var o,r;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()}]);