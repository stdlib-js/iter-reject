// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+x(i):x(i)+e}var k=String.fromCharCode,S=isNaN,T=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,a,o,l,p,u,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(_(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function I(e){var r,t,i;if(!F(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return V.apply(null,t)}var C,R=Object.prototype,O=R.toString,Z=R.__defineGetter__,P=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};var G=C;function U(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function N(e){return"boolean"==typeof e}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function z(){return M&&"symbol"==typeof Symbol.toStringTag}var H,q=Object.prototype.toString,D=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";H=z()?function(e){var r,t,i,n,a;if(null==e)return q.call(e);t=e[K],a=K,r=null!=(n=e)&&D.call(n,a);try{e[K]=void 0}catch(r){return q.call(e)}return i=q.call(e),r?e[K]=t:delete e[K],i}:function(e){return q.call(e)};var Q=H,Y=Boolean,ee=Boolean.prototype.toString,re=z();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ie(e){return N(e)||te(e)}function ne(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function oe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ae(n):ae(n)+e,i&&(e="-"+e)),e}U(ie,"isPrimitive",N),U(ie,"isObject",te);var ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function le(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ne(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=oe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=oe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===se.call(e.specifier)?se.call(t):ce.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pe(e){return"string"==typeof e}var ue=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ye=/^(\d+)e/,ve=/\.0$/,me=/\.0*e/,xe=/(\..*[^0])0*e/;function Ee(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ue(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=de.call(t,xe,"$1e"),t=de.call(t,me,"e"),t=de.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=de.call(t,he,"e+0$1"),t=de.call(t,we,"e-0$1"),e.alternate&&(t=de.call(t,be,"$1."),t=de.call(t,ye,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ge.call(e.specifier)?ge.call(t):fe.call(t)}function ke(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Se(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ke(i):ke(i)+e}var Te=String.fromCharCode,je=isNaN,Ve=Array.isArray;function $e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _e(e){var r,t,i,n,a,o,c,s,l;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(pe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=$e(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,je(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,je(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=le(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!je(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=je(a)?String(i.arg):Te(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ee(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=oe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Se(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ie(e){var r,t,i,n;for(t=[],n=0,i=Ae.exec(e);i;)(r=e.slice(n,Ae.lastIndex-i[0].length)).length&&t.push(r),t.push(Fe(i)),n=Ae.lastIndex,i=Ae.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ce(e){return"string"==typeof e}function Re(e){var r,t,i;if(!Ce(e))throw new TypeError(Re("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ie(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return _e.apply(null,t)}function Oe(){return new Function("return this;")()}var Ze,Pe="object"==typeof self?self:null,Le="object"==typeof window?window:null,We="object"==typeof globalThis?globalThis:null,Ge=function(e){if(arguments.length){if(!N(e))throw new TypeError(Re("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Oe()}if(We)return We;if(Pe)return Pe;if(Le)return Le;throw new Error("unexpected error. Unable to resolve global object.")}(),Ue=Ge.document&&Ge.document.childNodes,Be=Int8Array,Ne=X(),Xe=Object.prototype.toString,Me=Object.prototype.hasOwnProperty,ze="function"==typeof J?J.toStringTag:"";Ze=Ne&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return Xe.call(e);t=e[ze],a=ze,r=null!=(n=e)&&Me.call(n,a);try{e[ze]=void 0}catch(r){return Xe.call(e)}return i=Xe.call(e),r?e[ze]=t:delete e[ze],i}:function(e){return Xe.call(e)};var He=Ze;function qe(){return/^\s*function\s*([^(]*)/i}var De,Je=/^\s*function\s*([^(]*)/i;U(qe,"REGEXP",Je),De=Array.isArray?Array.isArray:function(e){return"[object Array]"===He(e)};var Ke=De;function Qe(e){return"number"==typeof e}function Ye(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function er(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Ye(n):Ye(n)+e,i&&(e="-"+e)),e}var rr=String.prototype.toLowerCase,tr=String.prototype.toUpperCase;function ir(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Qe(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=er(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=er(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===tr.call(e.specifier)?tr.call(t):rr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function nr(e){return"string"==typeof e}var ar=Math.abs,or=String.prototype.toLowerCase,cr=String.prototype.toUpperCase,sr=String.prototype.replace,lr=/e\+(\d)$/,pr=/e-(\d)$/,ur=/^(\d+)$/,fr=/^(\d+)e/,gr=/\.0$/,dr=/\.0*e/,hr=/(\..*[^0])0*e/;function wr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Qe(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ar(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=sr.call(t,hr,"$1e"),t=sr.call(t,dr,"e"),t=sr.call(t,gr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=sr.call(t,lr,"e+0$1"),t=sr.call(t,pr,"e-0$1"),e.alternate&&(t=sr.call(t,ur,"$1."),t=sr.call(t,fr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===cr.call(e.specifier)?cr.call(t):or.call(t)}function br(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function yr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+br(i):br(i)+e}var vr=String.fromCharCode,mr=isNaN,xr=Array.isArray;function Er(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function kr(e){var r,t,i,n,a,o,c,s,l;if(!xr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(nr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Er(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,mr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,mr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ir(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!mr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=mr(a)?String(i.arg):vr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=wr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=er(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=yr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Sr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Tr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function jr(e){var r,t,i,n;for(t=[],n=0,i=Sr.exec(e);i;)(r=e.slice(n,Sr.lastIndex-i[0].length)).length&&t.push(r),t.push(Tr(i)),n=Sr.lastIndex,i=Sr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Vr(e){return"string"==typeof e}function $r(e){var r,t,i;if(!Vr(e))throw new TypeError($r("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=jr(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return kr.apply(null,t)}function _r(e){return null!==e&&"object"==typeof e}var Ar=function(e){if("function"!=typeof e)throw new TypeError($r("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Ke(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(_r);function Fr(e){var r,t,i,n;if(("Object"===(t=He(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Je.exec(i.toString()))return r[1]}return _r(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}U(_r,"isObjectLikeArray",Ar);var Ir="function"==typeof B||"object"==typeof Be||"function"==typeof Ue?function(e){return Fr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Fr(e).toLowerCase():r};function Cr(e){return"function"===Ir(e)}var Rr,Or,Zr=Object.prototype.hasOwnProperty,Pr="function"==typeof J&&"symbol"==typeof J("foo")&&(Or="iterator",null!=(Rr=J)&&Zr.call(Rr,Or))&&"symbol"==typeof J.iterator?Symbol.iterator:null;function Lr(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}return function e(r,t,i){var n,a,o;if(!function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&Cr(e.next)}(r))throw new TypeError(Lr("0Pf46,G5",r));if(!Cr(t))throw new TypeError(Lr("0Pf2H,G6",t));return o=-1,U(n={},"next",(function(){var e;if(a)return{done:!0};for(;;){if(e=r.next(),o+=1,e.done)return a=!0,e;if(!t.call(i,e.value,o))return{value:e.value,done:!1}}})),U(n,"return",(function(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Pr&&Cr(r[Pr])&&U(n,Pr,(function(){return e(r[Pr](),t,i)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterReject=r();
//# sourceMappingURL=browser.js.map
