!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this._events={}}return t.prototype.on=function(t,e,n){void 0===n&&(n={}),this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})},t.prototype.run=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[t];console.assert(!!o,"No subscriber for event: "+t),o&&(this._events[t]=o.filter(function(r){var o=r.fn,i=r.options;return i.delay?e.delay(t,o,n,i):o.apply(e,n),!r.options.once}))},t.prototype.once=function(t,e){this.on(t,e)},t.prototype.delay=function(t,e,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),e.apply(o,n)},r.delay)},t}();e.App=r,e.default=new r},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(7),i=n(5);e.Component=i.Component;var a=n(4),s=n(2);e.on=s.on,e.update=s.update,e.event=s.update,r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,r.default.start=function(t,e,n,r,o){var a=Object.assign(o||{},{render:!0,global_event:!0}),s=new i.Component(e,n,r);return o&&o.rendered&&(s.rendered=o.rendered),s.mount(t,a),s};var u=r.default,c=t||window;c.app&&c.app.start?u=c.app:(c.app=u,"object"==typeof document&&document.addEventListener("DOMContentLoaded",function(){return new a.default})),e.default=u,r.default.on("debug",function(t){return 0})}).call(this,n(8))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata:function(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys:function(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata:function(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n){return void 0===n&&(n={}),function(r,o,i){return t=o+(t?","+t:""),e.Reflect.defineMetadata("apprun-update:"+t,{name:t,action:[i.value,n]},r),i}},e.on=function(t,n){return void 0===n&&(n={}),function(n,r){t=r+(t?","+t:""),e.Reflect.defineMetadata("apprun-update:"+t,{name:t,key:r},n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),o="_props";function i(t){var e=[],n=function(t){null!==t&&void 0!==t&&""!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach(function(t){Array.isArray(t)?t.forEach(function(t){return n(t)}):n(t)}),e}e.createElement=function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];var s=i(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).__isAppRunComponent){var u=e&&e.id||"_"+t.name+"_"+ ++a;return r.default(t,u,e)}return t(e,s)};var a=0,s={};function u(t,e){if(a=0,null!=e&&t)if(Array.isArray(e))d(t,e);else{var n=e;t.firstChild?c(t.firstChild,n):t.appendChild(l(n))}}function c(t,e){console.assert(!!t),function(t,e){return t.nodeName===(""+(e.tag||"")).toUpperCase()}(t,e)?(d(t,e.children),p(t,e.props)):t.parentNode.replaceChild(l(e),t)}function d(t,e){for(var n=Math.min(t.childNodes.length,e.length),r=0;r<n;r++){var o=e[r],i=t.childNodes[r];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:t.replaceChild(f(o),i));else{var a=o.props&&o.props.key;if(a)if(i.key===a)c(t.childNodes[r],o);else{var u=a&&s[a];u?(t.replaceChild(u,i),t.appendChild(i),c(t.childNodes[r],o)):(t.appendChild(l(o),i),c(t.childNodes[r],o))}else c(t.childNodes[r],o)}}for(var d=t.childNodes.length;d>n;)t.removeChild(t.lastChild),d--;if(e.length>n){var p=document.createDocumentFragment();for(r=n;r<e.length;r++)p.appendChild(l(e[r]));t.appendChild(p)}}function f(t){if(0===t.indexOf("_html:")){var e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function l(t){if(console.assert(null!==t&&void 0!==t),"string"==typeof t)return f(t);if(!t.tag)return f(JSON.stringify(t));var e="svg"===t.tag?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(e,t.props),t.children&&t.children.forEach(function(t){return e.appendChild(l(t))}),e}function p(t,e){console.assert(!!t);var n=t[o]||{};for(var r in e=function(t,e){var n={};return t&&Object.keys(t).forEach(function(t){return n[t]=""}),e&&Object.keys(e).forEach(function(t){return n[t]=e[t]}),n}(n,e),t[o]=e,e){var i=e[r];if(n[r]!==i)if("style"===r)for(var a in t.style.cssText&&(t.style.cssText=""),i)t.style[a]!==i[a]&&(t.style[a]=i[a]);else if(r.startsWith("data-")){var u=r.substring(5);t.dataset[u]!==i&&(t.dataset[u]=i)}else t[r]!==i&&(t[r]=i),"key"===r&&i&&(s[i]=t)}}e.updateElement=u,e.render=u,e.Fragment=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return i(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o="//";r.default.on("//",function(t){}),r.default.on("#",function(t){});var i=function(){function t(){var t=this;r.default.on("route",function(e){return t.route(e)}),window.onpopstate=function(e){return t.route(location.hash)},this.route(location.hash)}return t.prototype.route=function(t){if(t||(t="#"),t.indexOf("/")>0){var e=t.split("/"),n=e[0],i=e.slice(1);r.default.run.apply(r.default,[n].concat(i)),r.default.run.apply(r.default,[o,n].concat(i))}else r.default.run(t),r.default.run(o,t)},t}();e.default=i},function(t,e,n){"use strict";var r=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n(2),a=function(){function t(t,e,n,i){var a=this;this.state=t,this.view=e,this.update=n,this.options=i,this._app=new o.App,this._history=[],this._history_idx=-1,this.start=function(t,e){return void 0===t&&(t=null),void 0===e&&(e={render:!0}),a.mount(t,r({},e,{render:!0}))},this.render=function(){return a.view(a.state)}}return t.prototype.renderState=function(t){if(this.view){var e=this.view(t);o.default.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"});var n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),n&&o.default.render&&(o.default.render(n,e),this.rendered&&this.rendered(this.state))}},t.prototype.setState=function(t,e){var n=this;if(t instanceof Promise)t.then(function(t){n.setState(t,e)}).catch(function(t){throw console.error(t),t});else{if(null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=this._history.concat([t]),this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}},t.prototype.mount=function(t,e){var n=this;if(void 0===t&&(t=null),console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(this.options||{},e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){this.on(e.history.prev||"history-prev",function(){n._history_idx--,n._history_idx>=0?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=0}),this.on(e.history.next||"history-next",function(){n._history_idx++,n._history_idx<n._history.length?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=n._history.length-1})}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),this},t.prototype.is_global_event=function(t){return t&&(t.startsWith("#")||t.startsWith("/"))},t.prototype.add_action=function(t,e,n){var r=this;void 0===n&&(n={}),e&&"function"==typeof e&&this.on(t,function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var s=e.apply(void 0,[r.state].concat(i));o.default.run("debug",{component:r,event:t,e:i,state:r.state,newState:s,options:n}),r.setState(s,n)},n)},t.prototype.add_actions=function(){var t=this,e=this.update||{};i.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=i.Reflect.getMetadata(n,t);e[r.name]=r.action||t[r.key]}});var n={};Object.keys(e).forEach(function(t){var r=e[t];("function"==typeof r||Array.isArray(r))&&t.split(",").forEach(function(t){return n[t.trim()]=r})}),Object.keys(n).forEach(function(e){var r=n[e];"function"==typeof r?t.add_action(e,r):Array.isArray(r)&&t.add_action(e,r[0],r[1])})},t.prototype.run=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return this.global_event||this.is_global_event(t)?o.default.run.apply(o.default,[t].concat(n)):(e=this._app).run.apply(e,[t].concat(n))},t.prototype.on=function(t,e,n){return this.global_event||this.is_global_event(t)?o.default.on(t,e,n):this._app.on(t,e,n)},t.__isAppRunComponent=!0,t}();e.Component=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o={};e.default=function(t,e,n){var i=o[e]?o[e]:o[e]=new t(n).mount(e);return r.default.createElement("div",{id:e},i.render&&i.render())}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3);e.createElement=r.createElement,e.Fragment=r.Fragment,e.render=function(t,e){console.assert(!!t),r.updateElement(t,e)}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])});
//# sourceMappingURL=apprun.js.map