// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterReject=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):p.call(t)}function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function E(e,r,i){var t=r-e.length;return t<0?e:e=i?e+x(t):x(t)+e}var k=String.fromCharCode,S=isNaN,V=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,t,a,o,l,p,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(t=e[u]))l+=t;else{if(r=void 0!==t.precision,!(t=j(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,S(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=E(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,t,n;for(i=[],n=0,t=$.exec(e);t;)(r=e.slice(n,$.lastIndex-t[0].length)).length&&i.push(r),i.push(_(t)),n=$.lastIndex,t=$.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function A(e){return"string"==typeof e}function I(e){var r,i;if(!A(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return T.apply(null,r)}var C,R=Object.prototype,Z=R.toString,O=R.__defineGetter__,L=R.__defineSetter__,W=R.__lookupGetter__,P=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===Z.call(i))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(W.call(e,r)||P.call(e,r)?(t=e.__proto__,e.__proto__=R,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,i.get),o&&L&&L.call(e,r,i.set),e};var G=C;function B(e,r,i){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var N=/./;function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=M()?function(e){var r,i,t;if(null==e)return z.call(e);i=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[J]=i:delete e[J],t}:function(e){return z.call(e)},Q=Boolean,Y=Boolean.prototype.toString;var ee=M();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ie(e){return U(e)||re(e)}function te(e){return"number"==typeof e}function ne(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ne(n):ne(n)+e,t&&(e="-"+e)),e}B(ie,"isPrimitive",U),B(ie,"isObject",re);var oe=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function se(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!te(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):oe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function le(e){return"string"==typeof e}var pe=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,be=/^(\d+)e/,ve=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function xe(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!te(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ge.call(i,me,"$1e"),i=ge.call(i,ye,"e"),i=ge.call(i,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ge.call(i,de,"e+0$1"),i=ge.call(i,he,"e-0$1"),e.alternate&&(i=ge.call(i,we,"$1."),i=ge.call(i,be,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===fe.call(e.specifier)?fe.call(i):ue.call(i)}function Ee(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ke(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ee(t):Ee(t)+e}var Se=String.fromCharCode,Ve=isNaN,je=Array.isArray;function Te(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,i,t,n,a,o,c,s,l;if(!je(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(le(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Te(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Ve(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Ve(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=se(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ve(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ve(a)?String(t.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=xe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ke(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ae(e){var r,i,t,n;for(i=[],n=0,t=_e.exec(e);t;)(r=e.slice(n,_e.lastIndex-t[0].length)).length&&i.push(r),i.push(Fe(t)),n=_e.lastIndex,t=_e.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ie(e){return"string"==typeof e}function Ce(e){var r,i;if(!Ie(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ae(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return $e.apply(null,r)}function Re(){return new Function("return this;")()}var Ze="object"==typeof self?self:null,Oe="object"==typeof window?window:null,Le="object"==typeof global?global:null,We="object"==typeof globalThis?globalThis:null;var Pe=function(e){if(arguments.length){if(!U(e))throw new TypeError(Ce("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Re()}if(We)return We;if(Ze)return Ze;if(Oe)return Oe;if(Le)return Le;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=Pe.document&&Pe.document.childNodes,Be=Int8Array;function Ne(){return/^\s*function\s*([^(]*)/i}var Ue=/^\s*function\s*([^(]*)/i;B(Ne,"REGEXP",Ue);var Xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function Me(e){return null!==e&&"object"==typeof e}function ze(e){var r,i,t,n;if(("Object"===(i=K(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Ue.exec(t.toString()))return r[1]}return Me(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}B(Me,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ce("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Xe(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Me));var qe="function"==typeof N||"object"==typeof Be||"function"==typeof Ge?function(e){return ze(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ze(e).toLowerCase():r};function De(e){return"function"===qe(e)}var He="function"==typeof Symbol?Symbol:void 0;var Je="function"==typeof He&&"symbol"==typeof He("foo")&&D(He,"iterator")&&"symbol"==typeof He.iterator?Symbol.iterator:null;function Ke(e){return"number"==typeof e}function Qe(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ye(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Qe(n):Qe(n)+e,t&&(e="-"+e)),e}var er=String.prototype.toLowerCase,rr=String.prototype.toUpperCase;function ir(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ke(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ye(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ye(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===rr.call(e.specifier)?rr.call(i):er.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function tr(e){return"string"==typeof e}var nr=Math.abs,ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase,cr=String.prototype.replace,sr=/e\+(\d)$/,lr=/e-(\d)$/,pr=/^(\d+)$/,ur=/^(\d+)e/,fr=/\.0$/,gr=/\.0*e/,dr=/(\..*[^0])0*e/;function hr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ke(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":nr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=cr.call(i,dr,"$1e"),i=cr.call(i,gr,"e"),i=cr.call(i,fr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=cr.call(i,sr,"e+0$1"),i=cr.call(i,lr,"e-0$1"),e.alternate&&(i=cr.call(i,pr,"$1."),i=cr.call(i,ur,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===or.call(e.specifier)?or.call(i):ar.call(i)}function wr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function br(e,r,i){var t=r-e.length;return t<0?e:e=i?e+wr(t):wr(t)+e}var vr=String.fromCharCode,yr=isNaN,mr=Array.isArray;function xr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Er(e){var r,i,t,n,a,o,c,s,l;if(!mr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(tr(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=xr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,yr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,yr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ir(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!yr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=yr(a)?String(t.arg):vr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=hr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ye(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=br(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Sr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Vr(e){var r,i,t,n;for(i=[],n=0,t=kr.exec(e);t;)(r=e.slice(n,kr.lastIndex-t[0].length)).length&&i.push(r),i.push(Sr(t)),n=kr.lastIndex,t=kr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function jr(e){return"string"==typeof e}function Tr(e){var r,i,t;if(!jr(e))throw new TypeError(Tr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Vr(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Er.apply(null,i)}return function e(r,i,t){var n,a,o,c,s;if(s=typeof(c=r),null===c||"object"!==s&&"function"!==s||!De(c.next))throw new TypeError(Tr("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!De(i))throw new TypeError(Tr("invalid argument. Second argument must be a function. Value: `%s`.",i));return o=-1,B(n={},"next",(function(){var e;if(a)return{done:!0};for(;;){if(e=r.next(),o+=1,e.done)return a=!0,e;if(!i.call(t,e.value,o))return{value:e.value,done:!1}}})),B(n,"return",(function(e){if(a=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Je&&De(r[Je])&&B(n,Je,(function(){return e(r[Je](),i,t)})),n}}));
//# sourceMappingURL=index.js.map
