// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function i(o,d,l){var m,f,u;if(!t(o))throw new TypeError(s("0Ck4J",o));if(!r(d))throw new TypeError(s("0Ck2S",d));return u=-1,e(m={},"next",(function(){var e;if(f)return{done:!0};for(;;){if(e=o.next(),u+=1,e.done)return f=!0,e;if(!d.call(l,e.value,u))return{value:e.value,done:!1}}})),e(m,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&r(o[n])&&e(m,n,(function(){return i(o[n](),d,l)})),m}export{i as default};
//# sourceMappingURL=index.mjs.map
