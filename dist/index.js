"use strict";var w=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=w(function(h,c){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function s(r,e,l){var t,i,a;if(!x(r))throw new TypeError(f('0Pf46',r));if(!v(e))throw new TypeError(f('0Pf2H',e));return a=-1,t={},o(t,"next",d),o(t,"return",q),u&&v(r[u])&&o(t,u,g),t;function d(){var n;if(i)return{done:!0};for(;;){if(n=r.next(),a+=1,n.done)return i=!0,n;if(!e.call(l,n.value,a))return{value:n.value,done:!1}}}function q(n){return i=!0,arguments.length?{value:n,done:!0}:{done:!0}}function g(){return s(r[u](),e,l)}}c.exports=s
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
