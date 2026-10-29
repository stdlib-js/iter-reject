"use strict";var w=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var m=w(function(h,c){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),i=require('@stdlib/symbol-iterator/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function s(r,e,u){var t,a,o;if(!x(r))throw new TypeError(f('0Pf46',r));if(!v(e))throw new TypeError(f('0Pf2H',e));return o=-1,t={},l(t,"next",d),l(t,"return",q),i&&v(r[i])&&l(t,i,g),t;function d(){var n;if(a)return{done:!0};for(;;){if(n=r.next(),o+=1,n.done)return a=!0,n;if(!e.call(u,n.value,o))return{value:n.value,done:!1}}}function q(n){return a=!0,arguments.length?{value:n,done:!0}:{done:!0}}function g(){return s(r[i](),e,u)}}c.exports=s
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
