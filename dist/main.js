!function(t,e){for(var r in e)t[r]=e[r]}(exports,function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){t.exports=!r(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(12),o=r(13),u=r(14),i=r(16);t.exports=function(t,e){return n(t)||o(t,e)||u(t,e)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(6).f,o=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in o||r(2)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(t){return""}}})},function(t,e,r){var n=r(7),o=r(8),u=r(11),i=Object.defineProperty;e.f=r(2)?Object.defineProperty:function(t,e,r){if(n(t),e=u(e,!0),n(r),o)try{return i(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(1);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){t.exports=!r(2)&&!r(3)((function(){return 7!=Object.defineProperty(r(9)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(1),o=r(10).document,u=n(o)&&n(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(1);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,u,i,f=[],c=!0,a=!1;try{if(u=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=u.call(r)).done)&&(f.push(n.value),f.length!==e);c=!0);}catch(t){a=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(a)throw o}}return f}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(15);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){"use strict";r.r(e);r(5);var n=r(0),o=r.n(n),u=r(4),i=r.n(u),f=function(t){var e=t.children,r=Object(n.useState)(!0),u=i()(r,2),f=u[0],c=u[1];return Object(n.useEffect)((function(){setTimeout((function(){return c(!f)}),1e3)}),[f]),f&&o.a.createElement("h1",null,e)};e.default=function(t){var e=t.name,r=void 0===e?"World":e;return o.a.createElement(f,null,"Hello ",r,"!")}}]));