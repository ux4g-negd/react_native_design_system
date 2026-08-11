(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))m(f);new MutationObserver(f=>{for(const b of f)if(b.type==="childList")for(const x of b.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&m(x)}).observe(document,{childList:!0,subtree:!0});function c(f){const b={};return f.integrity&&(b.integrity=f.integrity),f.referrerPolicy&&(b.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?b.credentials="include":f.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function m(f){if(f.ep)return;f.ep=!0;const b=c(f);fetch(f.href,b)}})();function id(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Fi={exports:{}},Un={},Bi={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function fp(){if(Mc)return ee;Mc=1;var i=Symbol.for("react.element"),d=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),A=Symbol.iterator;function B(v){return v===null||typeof v!="object"?null:(v=A&&v[A]||v["@@iterator"],typeof v=="function"?v:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Y={};function ae(v,P,Z){this.props=v,this.context=P,this.refs=Y,this.updater=Z||I}ae.prototype.isReactComponent={},ae.prototype.setState=function(v,P){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,P,"setState")},ae.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function re(){}re.prototype=ae.prototype;function Re(v,P,Z){this.props=v,this.context=P,this.refs=Y,this.updater=Z||I}var $e=Re.prototype=new re;$e.constructor=Re,F($e,ae.prototype),$e.isPureReactComponent=!0;var k=Array.isArray,we=Object.prototype.hasOwnProperty,ge={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function je(v,P,Z){var te,ie={},le=null,pe=null;if(P!=null)for(te in P.ref!==void 0&&(pe=P.ref),P.key!==void 0&&(le=""+P.key),P)we.call(P,te)&&!ue.hasOwnProperty(te)&&(ie[te]=P[te]);var ce=arguments.length-2;if(ce===1)ie.children=Z;else if(1<ce){for(var xe=Array(ce),et=0;et<ce;et++)xe[et]=arguments[et+2];ie.children=xe}if(v&&v.defaultProps)for(te in ce=v.defaultProps,ce)ie[te]===void 0&&(ie[te]=ce[te]);return{$$typeof:i,type:v,key:le,ref:pe,props:ie,_owner:ge.current}}function Je(v,P){return{$$typeof:i,type:v.type,key:P,ref:v.ref,props:v.props,_owner:v._owner}}function mt(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function Pt(v){var P={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Z){return P[Z]})}var St=/\/+/g;function Ze(v,P){return typeof v=="object"&&v!==null&&v.key!=null?Pt(""+v.key):P.toString(36)}function ht(v,P,Z,te,ie){var le=typeof v;(le==="undefined"||le==="boolean")&&(v=null);var pe=!1;if(v===null)pe=!0;else switch(le){case"string":case"number":pe=!0;break;case"object":switch(v.$$typeof){case i:case d:pe=!0}}if(pe)return pe=v,ie=ie(pe),v=te===""?"."+Ze(pe,0):te,k(ie)?(Z="",v!=null&&(Z=v.replace(St,"$&/")+"/"),ht(ie,P,Z,"",function(et){return et})):ie!=null&&(mt(ie)&&(ie=Je(ie,Z+(!ie.key||pe&&pe.key===ie.key?"":(""+ie.key).replace(St,"$&/")+"/")+v)),P.push(ie)),1;if(pe=0,te=te===""?".":te+":",k(v))for(var ce=0;ce<v.length;ce++){le=v[ce];var xe=te+Ze(le,ce);pe+=ht(le,P,Z,xe,ie)}else if(xe=B(v),typeof xe=="function")for(v=xe.call(v),ce=0;!(le=v.next()).done;)le=le.value,xe=te+Ze(le,ce++),pe+=ht(le,P,Z,xe,ie);else if(le==="object")throw P=String(v),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return pe}function Ct(v,P,Z){if(v==null)return v;var te=[],ie=0;return ht(v,te,"","",function(le){return P.call(Z,le,ie++)}),te}function Me(v){if(v._status===-1){var P=v._result;P=P(),P.then(function(Z){(v._status===0||v._status===-1)&&(v._status=1,v._result=Z)},function(Z){(v._status===0||v._status===-1)&&(v._status=2,v._result=Z)}),v._status===-1&&(v._status=0,v._result=P)}if(v._status===1)return v._result.default;throw v._result}var Se={current:null},z={transition:null},X={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:z,ReactCurrentOwner:ge};function $(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Ct,forEach:function(v,P,Z){Ct(v,function(){P.apply(this,arguments)},Z)},count:function(v){var P=0;return Ct(v,function(){P++}),P},toArray:function(v){return Ct(v,function(P){return P})||[]},only:function(v){if(!mt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ee.Component=ae,ee.Fragment=c,ee.Profiler=f,ee.PureComponent=Re,ee.StrictMode=m,ee.Suspense=w,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ee.act=$,ee.cloneElement=function(v,P,Z){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var te=F({},v.props),ie=v.key,le=v.ref,pe=v._owner;if(P!=null){if(P.ref!==void 0&&(le=P.ref,pe=ge.current),P.key!==void 0&&(ie=""+P.key),v.type&&v.type.defaultProps)var ce=v.type.defaultProps;for(xe in P)we.call(P,xe)&&!ue.hasOwnProperty(xe)&&(te[xe]=P[xe]===void 0&&ce!==void 0?ce[xe]:P[xe])}var xe=arguments.length-2;if(xe===1)te.children=Z;else if(1<xe){ce=Array(xe);for(var et=0;et<xe;et++)ce[et]=arguments[et+2];te.children=ce}return{$$typeof:i,type:v.type,key:ie,ref:le,props:te,_owner:pe}},ee.createContext=function(v){return v={$$typeof:x,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:b,_context:v},v.Consumer=v},ee.createElement=je,ee.createFactory=function(v){var P=je.bind(null,v);return P.type=v,P},ee.createRef=function(){return{current:null}},ee.forwardRef=function(v){return{$$typeof:s,render:v}},ee.isValidElement=mt,ee.lazy=function(v){return{$$typeof:N,_payload:{_status:-1,_result:v},_init:Me}},ee.memo=function(v,P){return{$$typeof:p,type:v,compare:P===void 0?null:P}},ee.startTransition=function(v){var P=z.transition;z.transition={};try{v()}finally{z.transition=P}},ee.unstable_act=$,ee.useCallback=function(v,P){return Se.current.useCallback(v,P)},ee.useContext=function(v){return Se.current.useContext(v)},ee.useDebugValue=function(){},ee.useDeferredValue=function(v){return Se.current.useDeferredValue(v)},ee.useEffect=function(v,P){return Se.current.useEffect(v,P)},ee.useId=function(){return Se.current.useId()},ee.useImperativeHandle=function(v,P,Z){return Se.current.useImperativeHandle(v,P,Z)},ee.useInsertionEffect=function(v,P){return Se.current.useInsertionEffect(v,P)},ee.useLayoutEffect=function(v,P){return Se.current.useLayoutEffect(v,P)},ee.useMemo=function(v,P){return Se.current.useMemo(v,P)},ee.useReducer=function(v,P,Z){return Se.current.useReducer(v,P,Z)},ee.useRef=function(v){return Se.current.useRef(v)},ee.useState=function(v){return Se.current.useState(v)},ee.useSyncExternalStore=function(v,P,Z){return Se.current.useSyncExternalStore(v,P,Z)},ee.useTransition=function(){return Se.current.useTransition()},ee.version="18.3.1",ee}var _c;function Wi(){return _c||(_c=1,Bi.exports=fp()),Bi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function gp(){if(Oc)return Un;Oc=1;var i=Wi(),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function x(s,w,p){var N,A={},B=null,I=null;p!==void 0&&(B=""+p),w.key!==void 0&&(B=""+w.key),w.ref!==void 0&&(I=w.ref);for(N in w)m.call(w,N)&&!b.hasOwnProperty(N)&&(A[N]=w[N]);if(s&&s.defaultProps)for(N in w=s.defaultProps,w)A[N]===void 0&&(A[N]=w[N]);return{$$typeof:d,type:s,key:B,ref:I,props:A,_owner:f.current}}return Un.Fragment=c,Un.jsx=x,Un.jsxs=x,Un}var Xc;function xp(){return Xc||(Xc=1,Fi.exports=gp()),Fi.exports}var t=xp(),T=Wi();const Mi=id(T);var Ra={},zi={exports:{}},Qe={},Ii={exports:{}},qi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function yp(){return Hc||(Hc=1,(function(i){function d(z,X){var $=z.length;z.push(X);e:for(;0<$;){var v=$-1>>>1,P=z[v];if(0<f(P,X))z[v]=X,z[$]=P,$=v;else break e}}function c(z){return z.length===0?null:z[0]}function m(z){if(z.length===0)return null;var X=z[0],$=z.pop();if($!==X){z[0]=$;e:for(var v=0,P=z.length,Z=P>>>1;v<Z;){var te=2*(v+1)-1,ie=z[te],le=te+1,pe=z[le];if(0>f(ie,$))le<P&&0>f(pe,ie)?(z[v]=pe,z[le]=$,v=le):(z[v]=ie,z[te]=$,v=te);else if(le<P&&0>f(pe,$))z[v]=pe,z[le]=$,v=le;else break e}}return X}function f(z,X){var $=z.sortIndex-X.sortIndex;return $!==0?$:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;i.unstable_now=function(){return b.now()}}else{var x=Date,s=x.now();i.unstable_now=function(){return x.now()-s}}var w=[],p=[],N=1,A=null,B=3,I=!1,F=!1,Y=!1,ae=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $e(z){for(var X=c(p);X!==null;){if(X.callback===null)m(p);else if(X.startTime<=z)m(p),X.sortIndex=X.expirationTime,d(w,X);else break;X=c(p)}}function k(z){if(Y=!1,$e(z),!F)if(c(w)!==null)F=!0,Me(we);else{var X=c(p);X!==null&&Se(k,X.startTime-z)}}function we(z,X){F=!1,Y&&(Y=!1,re(je),je=-1),I=!0;var $=B;try{for($e(X),A=c(w);A!==null&&(!(A.expirationTime>X)||z&&!Pt());){var v=A.callback;if(typeof v=="function"){A.callback=null,B=A.priorityLevel;var P=v(A.expirationTime<=X);X=i.unstable_now(),typeof P=="function"?A.callback=P:A===c(w)&&m(w),$e(X)}else m(w);A=c(w)}if(A!==null)var Z=!0;else{var te=c(p);te!==null&&Se(k,te.startTime-X),Z=!1}return Z}finally{A=null,B=$,I=!1}}var ge=!1,ue=null,je=-1,Je=5,mt=-1;function Pt(){return!(i.unstable_now()-mt<Je)}function St(){if(ue!==null){var z=i.unstable_now();mt=z;var X=!0;try{X=ue(!0,z)}finally{X?Ze():(ge=!1,ue=null)}}else ge=!1}var Ze;if(typeof Re=="function")Ze=function(){Re(St)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Ct=ht.port2;ht.port1.onmessage=St,Ze=function(){Ct.postMessage(null)}}else Ze=function(){ae(St,0)};function Me(z){ue=z,ge||(ge=!0,Ze())}function Se(z,X){je=ae(function(){z(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){F||I||(F=!0,Me(we))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return B},i.unstable_getFirstCallbackNode=function(){return c(w)},i.unstable_next=function(z){switch(B){case 1:case 2:case 3:var X=3;break;default:X=B}var $=B;B=X;try{return z()}finally{B=$}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=B;B=z;try{return X()}finally{B=$}},i.unstable_scheduleCallback=function(z,X,$){var v=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?v+$:v):$=v,z){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=$+P,z={id:N++,callback:X,priorityLevel:z,startTime:$,expirationTime:P,sortIndex:-1},$>v?(z.sortIndex=$,d(p,z),c(w)===null&&z===c(p)&&(Y?(re(je),je=-1):Y=!0,Se(k,$-v))):(z.sortIndex=P,d(w,z),F||I||(F=!0,Me(we))),z},i.unstable_shouldYield=Pt,i.unstable_wrapCallback=function(z){var X=B;return function(){var $=B;B=X;try{return z.apply(this,arguments)}finally{B=$}}}})(qi)),qi}var Gc;function bp(){return Gc||(Gc=1,Ii.exports=yp()),Ii.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc;function vp(){if(Qc)return Qe;Qc=1;var i=Wi(),d=bp();function c(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,f={};function b(e,r){x(e,r),x(e+"Capture",r)}function x(e,r){for(f[e]=r,e=0;e<r.length;e++)m.add(r[e])}var s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},A={};function B(e){return w.call(A,e)?!0:w.call(N,e)?!1:p.test(e)?A[e]=!0:(N[e]=!0,!1)}function I(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,r,n,a){if(r===null||typeof r>"u"||I(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(e,r,n,a,l,o,u){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=u}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ae[r]=new Y(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ae[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ae[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ae[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function Re(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(re,Re);ae[r]=new Y(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(re,Re);ae[r]=new Y(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(re,Re);ae[r]=new Y(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),ae.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ae[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function $e(e,r,n,a){var l=ae.hasOwnProperty(r)?ae[r]:null;(l!==null?l.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(F(r,n,l,a)&&(n=null),a||l===null?B(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(r=l.attributeName,a=l.attributeNamespace,n===null?e.removeAttribute(r):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var k=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),ge=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),je=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),mt=Symbol.for("react.provider"),Pt=Symbol.for("react.context"),St=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),z=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,v;function P(e){if(v===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);v=r&&r[1]||""}return`
`+v+e}var Z=!1;function te(e,r){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var a=j}Reflect.construct(e,[],r)}else{try{r.call()}catch(j){a=j}e.call(r.prototype)}else{try{throw Error()}catch(j){a=j}e()}}catch(j){if(j&&a&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),o=a.stack.split(`
`),u=l.length-1,h=o.length-1;1<=u&&0<=h&&l[u]!==o[h];)h--;for(;1<=u&&0<=h;u--,h--)if(l[u]!==o[h]){if(u!==1||h!==1)do if(u--,h--,0>h||l[u]!==o[h]){var g=`
`+l[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=u&&0<=h);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?P(e):""}function ie(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ue:return"Fragment";case ge:return"Portal";case Je:return"Profiler";case je:return"StrictMode";case Ze:return"Suspense";case ht:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pt:return(e.displayName||"Context")+".Consumer";case mt:return(e._context.displayName||"Context")+".Provider";case St:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ct:return r=e.displayName||null,r!==null?r:le(e.type)||"Memo";case Me:r=e._payload,e=e._init;try{return le(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(e){var r=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,o.call(this,u)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Pn(e){e._valueTracker||(e._valueTracker=et(e))}function Gi(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=xe(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function La(e,r){var n=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qi(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=ce(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Yi(e,r){r=r.checked,r!=null&&$e(e,"checked",r,!1)}function Wa(e,r){Yi(e,r);var n=ce(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Ma(e,r.type,n):r.hasOwnProperty("defaultValue")&&Ma(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Ki(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,r,n){(r!=="number"||Vn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wr=Array.isArray;function gr(e,r,n,a){if(e=e.options,r){r={};for(var l=0;l<n.length;l++)r["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=r.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),r=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function _a(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(c(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ji(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(c(92));if(Wr(n)){if(1<n.length)throw Error(c(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:ce(n)}}function Zi(e,r){var n=ce(r.value),a=ce(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function el(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function tl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?tl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,rl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,l){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Mr(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){bd.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),_r[r]=_r[e]})});function nl(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||_r.hasOwnProperty(e)&&_r[e]?(""+r).trim():r+"px"}function al(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=nl(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,l):e[n]=l}}var vd=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xa(e,r){if(r){if(vd[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(c(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(c(61))}if(r.style!=null&&typeof r.style!="object")throw Error(c(62))}}function Ha(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,xr=null,yr=null;function sl(e){if(e=mn(e)){if(typeof Ya!="function")throw Error(c(280));var r=e.stateNode;r&&(r=ea(r),Ya(e.stateNode,e.type,r))}}function il(e){xr?yr?yr.push(e):yr=[e]:xr=e}function ll(){if(xr){var e=xr,r=yr;if(yr=xr=null,sl(e),r)for(e=0;e<r.length;e++)sl(r[e])}}function ol(e,r){return e(r)}function cl(){}var Ka=!1;function dl(e,r,n){if(Ka)return e(r,n);Ka=!0;try{return ol(e,r,n)}finally{Ka=!1,(xr!==null||yr!==null)&&(cl(),ll())}}function Or(e,r){var n=e.stateNode;if(n===null)return null;var a=ea(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,r,typeof n));return n}var Ja=!1;if(s)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Ja=!1}function wd(e,r,n,a,l,o,u,h,g){var j=Array.prototype.slice.call(arguments,3);try{r.apply(n,j)}catch(V){this.onError(V)}}var Hr=!1,An=null,Dn=!1,Za=null,Sd={onError:function(e){Hr=!0,An=e}};function Cd(e,r,n,a,l,o,u,h,g){Hr=!1,An=null,wd.apply(Sd,arguments)}function jd(e,r,n,a,l,o,u,h,g){if(Cd.apply(this,arguments),Hr){if(Hr){var j=An;Hr=!1,An=null}else throw Error(c(198));Dn||(Dn=!0,Za=j)}}function nr(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function ul(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function pl(e){if(nr(e)!==e)throw Error(c(188))}function kd(e){var r=e.alternate;if(!r){if(r=nr(e),r===null)throw Error(c(188));return r!==e?null:e}for(var n=e,a=r;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return pl(l),e;if(o===a)return pl(l),r;o=o.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=o;else{for(var u=!1,h=l.child;h;){if(h===n){u=!0,n=l,a=o;break}if(h===a){u=!0,a=l,n=o;break}h=h.sibling}if(!u){for(h=o.child;h;){if(h===n){u=!0,n=o,a=l;break}if(h===a){u=!0,a=o,n=l;break}h=h.sibling}if(!u)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:r}function ml(e){return e=kd(e),e!==null?hl(e):null}function hl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=hl(e);if(r!==null)return r;e=e.sibling}return null}var fl=d.unstable_scheduleCallback,gl=d.unstable_cancelCallback,Td=d.unstable_shouldYield,Nd=d.unstable_requestPaint,ke=d.unstable_now,Ud=d.unstable_getCurrentPriorityLevel,es=d.unstable_ImmediatePriority,xl=d.unstable_UserBlockingPriority,Fn=d.unstable_NormalPriority,Pd=d.unstable_LowPriority,yl=d.unstable_IdlePriority,Bn=null,jt=null;function Vd(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Bn,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Dd,Ed=Math.log,Ad=Math.LN2;function Dd(e){return e>>>=0,e===0?32:31-(Ed(e)/Ad|0)|0}var zn=64,In=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qn(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes,u=n&268435455;if(u!==0){var h=u&~l;h!==0?a=Gr(h):(o&=u,o!==0&&(a=Gr(o)))}else u=n&~l,u!==0?a=Gr(u):o!==0&&(a=Gr(o));if(a===0)return 0;if(r!==0&&r!==a&&(r&l)===0&&(l=a&-a,o=r&-r,l>=o||l===16&&(o&4194240)!==0))return r;if((a&4)!==0&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-ft(r),l=1<<n,a|=e[n],r&=~l;return a}function Fd(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-ft(o),h=1<<u,g=l[u];g===-1?((h&n)===0||(h&a)!==0)&&(l[u]=Fd(h,r)):g<=r&&(e.expiredLanes|=h),o&=~h}}function ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bl(){var e=zn;return zn<<=1,(zn&4194240)===0&&(zn=64),e}function rs(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Qr(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-ft(r),e[r]=n}function zd(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ft(n),o=1<<l;r[l]=0,a[l]=-1,e[l]=-1,n&=~o}}function ns(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-ft(n),l=1<<a;l&r|e[a]&r&&(e[a]|=r),n&=~l}}var de=0;function vl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wl,as,Sl,Cl,jl,ss=!1,Rn=[],qt=null,Rt=null,$t=null,Yr=new Map,Kr=new Map,Lt=[],Id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kl(e,r){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Yr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(r.pointerId)}}function Jr(e,r,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},r!==null&&(r=mn(r),r!==null&&as(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function qd(e,r,n,a,l){switch(r){case"focusin":return qt=Jr(qt,e,r,n,a,l),!0;case"dragenter":return Rt=Jr(Rt,e,r,n,a,l),!0;case"mouseover":return $t=Jr($t,e,r,n,a,l),!0;case"pointerover":var o=l.pointerId;return Yr.set(o,Jr(Yr.get(o)||null,e,r,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,Kr.set(o,Jr(Kr.get(o)||null,e,r,n,a,l)),!0}return!1}function Tl(e){var r=ar(e.target);if(r!==null){var n=nr(r);if(n!==null){if(r=n.tag,r===13){if(r=ul(n),r!==null){e.blockedOn=r,jl(e.priority,function(){Sl(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $n(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=ls(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ga=a,n.target.dispatchEvent(a),Ga=null}else return r=mn(n),r!==null&&as(r),e.blockedOn=n,!1;r.shift()}return!0}function Nl(e,r,n){$n(e)&&n.delete(r)}function Rd(){ss=!1,qt!==null&&$n(qt)&&(qt=null),Rt!==null&&$n(Rt)&&(Rt=null),$t!==null&&$n($t)&&($t=null),Yr.forEach(Nl),Kr.forEach(Nl)}function Zr(e,r){e.blockedOn===r&&(e.blockedOn=null,ss||(ss=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Rd)))}function en(e){function r(l){return Zr(l,e)}if(0<Rn.length){Zr(Rn[0],e);for(var n=1;n<Rn.length;n++){var a=Rn[n];a.blockedOn===e&&(a.blockedOn=null)}}for(qt!==null&&Zr(qt,e),Rt!==null&&Zr(Rt,e),$t!==null&&Zr($t,e),Yr.forEach(r),Kr.forEach(r),n=0;n<Lt.length;n++)a=Lt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Tl(n),n.blockedOn===null&&Lt.shift()}var br=k.ReactCurrentBatchConfig,Ln=!0;function $d(e,r,n,a){var l=de,o=br.transition;br.transition=null;try{de=1,is(e,r,n,a)}finally{de=l,br.transition=o}}function Ld(e,r,n,a){var l=de,o=br.transition;br.transition=null;try{de=4,is(e,r,n,a)}finally{de=l,br.transition=o}}function is(e,r,n,a){if(Ln){var l=ls(e,r,n,a);if(l===null)js(e,r,a,Wn,n),kl(e,a);else if(qd(l,e,r,n,a))a.stopPropagation();else if(kl(e,a),r&4&&-1<Id.indexOf(e)){for(;l!==null;){var o=mn(l);if(o!==null&&wl(o),o=ls(e,r,n,a),o===null&&js(e,r,a,Wn,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else js(e,r,a,null,n)}}var Wn=null;function ls(e,r,n,a){if(Wn=null,e=Qa(a),e=ar(e),e!==null)if(r=nr(e),r===null)e=null;else if(n=r.tag,n===13){if(e=ul(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Wn=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ud()){case es:return 1;case xl:return 4;case Fn:case Pd:return 16;case yl:return 536870912;default:return 16}default:return 16}}var Wt=null,os=null,Mn=null;function Pl(){if(Mn)return Mn;var e,r=os,n=r.length,a,l="value"in Wt?Wt.value:Wt.textContent,o=l.length;for(e=0;e<n&&r[e]===l[e];e++);var u=n-e;for(a=1;a<=u&&r[n-a]===l[o-a];a++);return Mn=l.slice(e,1<a?1-a:void 0)}function _n(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function Vl(){return!1}function tt(e){function r(n,a,l,o,u){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?On:Vl,this.isPropagationStopped=Vl,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),r}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=tt(vr),tn=$({},vr,{view:0,detail:0}),Wd=tt(tn),ds,us,rn,Xn=$({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rn&&(rn&&e.type==="mousemove"?(ds=e.screenX-rn.screenX,us=e.screenY-rn.screenY):us=ds=0,rn=e),ds)},movementY:function(e){return"movementY"in e?e.movementY:us}}),El=tt(Xn),Md=$({},Xn,{dataTransfer:0}),_d=tt(Md),Od=$({},tn,{relatedTarget:0}),ps=tt(Od),Xd=$({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=tt(Xd),Gd=$({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qd=tt(Gd),Yd=$({},vr,{data:0}),Al=tt(Yd),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Zd[e])?!!r[e]:!1}function ms(){return eu}var tu=$({},tn,{key:function(e){if(e.key){var r=Kd[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=_n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?_n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ru=tt(tu),nu=$({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dl=tt(nu),au=$({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),su=tt(au),iu=$({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lu=tt(iu),ou=$({},Xn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cu=tt(ou),du=[9,13,27,32],hs=s&&"CompositionEvent"in window,nn=null;s&&"documentMode"in document&&(nn=document.documentMode);var uu=s&&"TextEvent"in window&&!nn,Fl=s&&(!hs||nn&&8<nn&&11>=nn),Bl=" ",zl=!1;function Il(e,r){switch(e){case"keyup":return du.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ql(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function pu(e,r){switch(e){case"compositionend":return ql(r);case"keypress":return r.which!==32?null:(zl=!0,Bl);case"textInput":return e=r.data,e===Bl&&zl?null:e;default:return null}}function mu(e,r){if(wr)return e==="compositionend"||!hs&&Il(e,r)?(e=Pl(),Mn=os=Wt=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fl&&r.locale!=="ko"?null:r.data;default:return null}}var hu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!hu[e.type]:r==="textarea"}function $l(e,r,n,a){il(a),r=Kn(r,"onChange"),0<r.length&&(n=new cs("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var an=null,sn=null;function fu(e){ao(e,0)}function Hn(e){var r=Tr(e);if(Gi(r))return e}function gu(e,r){if(e==="change")return r}var Ll=!1;if(s){var fs;if(s){var gs="oninput"in document;if(!gs){var Wl=document.createElement("div");Wl.setAttribute("oninput","return;"),gs=typeof Wl.oninput=="function"}fs=gs}else fs=!1;Ll=fs&&(!document.documentMode||9<document.documentMode)}function Ml(){an&&(an.detachEvent("onpropertychange",_l),sn=an=null)}function _l(e){if(e.propertyName==="value"&&Hn(sn)){var r=[];$l(r,sn,e,Qa(e)),dl(fu,r)}}function xu(e,r,n){e==="focusin"?(Ml(),an=r,sn=n,an.attachEvent("onpropertychange",_l)):e==="focusout"&&Ml()}function yu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hn(sn)}function bu(e,r){if(e==="click")return Hn(r)}function vu(e,r){if(e==="input"||e==="change")return Hn(r)}function wu(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var gt=typeof Object.is=="function"?Object.is:wu;function ln(e,r){if(gt(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!w.call(r,l)||!gt(e[l],r[l]))return!1}return!0}function Ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xl(e,r){var n=Ol(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ol(n)}}function Hl(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Hl(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Gl(){for(var e=window,r=Vn();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Vn(e.document)}return r}function xs(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Su(e){var r=Gl(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Hl(n.ownerDocument.documentElement,n)){if(a!==null&&xs(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(a.start,l);a=a.end===void 0?o:Math.min(a.end,l),!e.extend&&o>a&&(l=a,a=o,o=l),l=Xl(n,o);var u=Xl(n,a);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),o>a?(e.addRange(r),e.extend(u.node,u.offset)):(r.setEnd(u.node,u.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cu=s&&"documentMode"in document&&11>=document.documentMode,Sr=null,ys=null,on=null,bs=!1;function Ql(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bs||Sr==null||Sr!==Vn(a)||(a=Sr,"selectionStart"in a&&xs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),on&&ln(on,a)||(on=a,a=Kn(ys,"onSelect"),0<a.length&&(r=new cs("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=Sr)))}function Gn(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Cr={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionend:Gn("Transition","TransitionEnd")},vs={},Yl={};s&&(Yl=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Qn(e){if(vs[e])return vs[e];if(!Cr[e])return e;var r=Cr[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Yl)return vs[e]=r[n];return e}var Kl=Qn("animationend"),Jl=Qn("animationiteration"),Zl=Qn("animationstart"),eo=Qn("transitionend"),to=new Map,ro="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,r){to.set(e,r),b(r,[e])}for(var ws=0;ws<ro.length;ws++){var Ss=ro[ws],ju=Ss.toLowerCase(),ku=Ss[0].toUpperCase()+Ss.slice(1);Mt(ju,"on"+ku)}Mt(Kl,"onAnimationEnd"),Mt(Jl,"onAnimationIteration"),Mt(Zl,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(eo,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tu=new Set("cancel close invalid load scroll toggle".split(" ").concat(cn));function no(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,jd(a,r,void 0,e),e.currentTarget=null}function ao(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(r)for(var u=a.length-1;0<=u;u--){var h=a[u],g=h.instance,j=h.currentTarget;if(h=h.listener,g!==o&&l.isPropagationStopped())break e;no(l,h,j),o=g}else for(u=0;u<a.length;u++){if(h=a[u],g=h.instance,j=h.currentTarget,h=h.listener,g!==o&&l.isPropagationStopped())break e;no(l,h,j),o=g}}}if(Dn)throw e=Za,Dn=!1,Za=null,e}function he(e,r){var n=r[Vs];n===void 0&&(n=r[Vs]=new Set);var a=e+"__bubble";n.has(a)||(so(r,e,2,!1),n.add(a))}function Cs(e,r,n){var a=0;r&&(a|=4),so(n,e,a,r)}var Yn="_reactListening"+Math.random().toString(36).slice(2);function dn(e){if(!e[Yn]){e[Yn]=!0,m.forEach(function(n){n!=="selectionchange"&&(Tu.has(n)||Cs(n,!1,e),Cs(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Yn]||(r[Yn]=!0,Cs("selectionchange",!1,r))}}function so(e,r,n,a){switch(Ul(r)){case 1:var l=$d;break;case 4:l=Ld;break;default:l=is}n=l.bind(null,r,n,e),l=void 0,!Ja||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(r,n,{capture:!0,passive:l}):e.addEventListener(r,n,!0):l!==void 0?e.addEventListener(r,n,{passive:l}):e.addEventListener(r,n,!1)}function js(e,r,n,a,l){var o=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var h=a.stateNode.containerInfo;if(h===l||h.nodeType===8&&h.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var g=u.tag;if((g===3||g===4)&&(g=u.stateNode.containerInfo,g===l||g.nodeType===8&&g.parentNode===l))return;u=u.return}for(;h!==null;){if(u=ar(h),u===null)return;if(g=u.tag,g===5||g===6){a=o=u;continue e}h=h.parentNode}}a=a.return}dl(function(){var j=o,V=Qa(n),E=[];e:{var U=to.get(e);if(U!==void 0){var q=cs,L=e;switch(e){case"keypress":if(_n(n)===0)break e;case"keydown":case"keyup":q=ru;break;case"focusin":L="focus",q=ps;break;case"focusout":L="blur",q=ps;break;case"beforeblur":case"afterblur":q=ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=El;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=_d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=su;break;case Kl:case Jl:case Zl:q=Hd;break;case eo:q=lu;break;case"scroll":q=Wd;break;case"wheel":q=cu;break;case"copy":case"cut":case"paste":q=Qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Dl}var W=(r&4)!==0,Te=!W&&e==="scroll",S=W?U!==null?U+"Capture":null:U;W=[];for(var y=j,C;y!==null;){C=y;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,S!==null&&(D=Or(y,S),D!=null&&W.push(un(y,D,C)))),Te)break;y=y.return}0<W.length&&(U=new q(U,L,null,n,V),E.push({event:U,listeners:W}))}}if((r&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",U&&n!==Ga&&(L=n.relatedTarget||n.fromElement)&&(ar(L)||L[Vt]))break e;if((q||U)&&(U=V.window===V?V:(U=V.ownerDocument)?U.defaultView||U.parentWindow:window,q?(L=n.relatedTarget||n.toElement,q=j,L=L?ar(L):null,L!==null&&(Te=nr(L),L!==Te||L.tag!==5&&L.tag!==6)&&(L=null)):(q=null,L=j),q!==L)){if(W=El,D="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(W=Dl,D="onPointerLeave",S="onPointerEnter",y="pointer"),Te=q==null?U:Tr(q),C=L==null?U:Tr(L),U=new W(D,y+"leave",q,n,V),U.target=Te,U.relatedTarget=C,D=null,ar(V)===j&&(W=new W(S,y+"enter",L,n,V),W.target=C,W.relatedTarget=Te,D=W),Te=D,q&&L)t:{for(W=q,S=L,y=0,C=W;C;C=jr(C))y++;for(C=0,D=S;D;D=jr(D))C++;for(;0<y-C;)W=jr(W),y--;for(;0<C-y;)S=jr(S),C--;for(;y--;){if(W===S||S!==null&&W===S.alternate)break t;W=jr(W),S=jr(S)}W=null}else W=null;q!==null&&io(E,U,q,W,!1),L!==null&&Te!==null&&io(E,Te,L,W,!0)}}e:{if(U=j?Tr(j):window,q=U.nodeName&&U.nodeName.toLowerCase(),q==="select"||q==="input"&&U.type==="file")var M=gu;else if(Rl(U))if(Ll)M=vu;else{M=yu;var _=xu}else(q=U.nodeName)&&q.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(M=bu);if(M&&(M=M(e,j))){$l(E,M,n,V);break e}_&&_(e,U,j),e==="focusout"&&(_=U._wrapperState)&&_.controlled&&U.type==="number"&&Ma(U,"number",U.value)}switch(_=j?Tr(j):window,e){case"focusin":(Rl(_)||_.contentEditable==="true")&&(Sr=_,ys=j,on=null);break;case"focusout":on=ys=Sr=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,Ql(E,n,V);break;case"selectionchange":if(Cu)break;case"keydown":case"keyup":Ql(E,n,V)}var O;if(hs)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else wr?Il(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(Fl&&n.locale!=="ko"&&(wr||H!=="onCompositionStart"?H==="onCompositionEnd"&&wr&&(O=Pl()):(Wt=V,os="value"in Wt?Wt.value:Wt.textContent,wr=!0)),_=Kn(j,H),0<_.length&&(H=new Al(H,e,null,n,V),E.push({event:H,listeners:_}),O?H.data=O:(O=ql(n),O!==null&&(H.data=O)))),(O=uu?pu(e,n):mu(e,n))&&(j=Kn(j,"onBeforeInput"),0<j.length&&(V=new Al("onBeforeInput","beforeinput",null,n,V),E.push({event:V,listeners:j}),V.data=O))}ao(E,r)})}function un(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Kn(e,r){for(var n=r+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Or(e,n),o!=null&&a.unshift(un(e,o,l)),o=Or(e,r),o!=null&&a.push(un(e,o,l))),e=e.return}return a}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function io(e,r,n,a,l){for(var o=r._reactName,u=[];n!==null&&n!==a;){var h=n,g=h.alternate,j=h.stateNode;if(g!==null&&g===a)break;h.tag===5&&j!==null&&(h=j,l?(g=Or(n,o),g!=null&&u.unshift(un(n,g,h))):l||(g=Or(n,o),g!=null&&u.push(un(n,g,h)))),n=n.return}u.length!==0&&e.push({event:r,listeners:u})}var Nu=/\r\n?/g,Uu=/\u0000|\uFFFD/g;function lo(e){return(typeof e=="string"?e:""+e).replace(Nu,`
`).replace(Uu,"")}function Jn(e,r,n){if(r=lo(r),lo(e)!==r&&n)throw Error(c(425))}function Zn(){}var ks=null,Ts=null;function Ns(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Us=typeof setTimeout=="function"?setTimeout:void 0,Pu=typeof clearTimeout=="function"?clearTimeout:void 0,oo=typeof Promise=="function"?Promise:void 0,Vu=typeof queueMicrotask=="function"?queueMicrotask:typeof oo<"u"?function(e){return oo.resolve(null).then(e).catch(Eu)}:Us;function Eu(e){setTimeout(function(){throw e})}function Ps(e,r){var n=r,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),en(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);en(r)}function _t(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function co(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),kt="__reactFiber$"+kr,pn="__reactProps$"+kr,Vt="__reactContainer$"+kr,Vs="__reactEvents$"+kr,Au="__reactListeners$"+kr,Du="__reactHandles$"+kr;function ar(e){var r=e[kt];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Vt]||n[kt]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=co(e);e!==null;){if(n=e[kt])return n;e=co(e)}return r}e=n,n=e.parentNode}return null}function mn(e){return e=e[kt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function ea(e){return e[pn]||null}var Es=[],Nr=-1;function Ot(e){return{current:e}}function fe(e){0>Nr||(e.current=Es[Nr],Es[Nr]=null,Nr--)}function me(e,r){Nr++,Es[Nr]=e.current,e.current=r}var Xt={},Be=Ot(Xt),_e=Ot(!1),sr=Xt;function Ur(e,r){var n=e.type.contextTypes;if(!n)return Xt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=r[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function Oe(e){return e=e.childContextTypes,e!=null}function ta(){fe(_e),fe(Be)}function uo(e,r,n){if(Be.current!==Xt)throw Error(c(168));me(Be,r),me(_e,n)}function po(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in r))throw Error(c(108,pe(e)||"Unknown",l));return $({},n,a)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,sr=Be.current,me(Be,e),me(_e,_e.current),!0}function mo(e,r,n){var a=e.stateNode;if(!a)throw Error(c(169));n?(e=po(e,r,sr),a.__reactInternalMemoizedMergedChildContext=e,fe(_e),fe(Be),me(Be,e)):fe(_e),me(_e,n)}var Et=null,na=!1,As=!1;function ho(e){Et===null?Et=[e]:Et.push(e)}function Fu(e){na=!0,ho(e)}function Ht(){if(!As&&Et!==null){As=!0;var e=0,r=de;try{var n=Et;for(de=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Et=null,na=!1}catch(l){throw Et!==null&&(Et=Et.slice(e+1)),fl(es,Ht),l}finally{de=r,As=!1}}return null}var Pr=[],Vr=0,aa=null,sa=0,lt=[],ot=0,ir=null,At=1,Dt="";function lr(e,r){Pr[Vr++]=sa,Pr[Vr++]=aa,aa=e,sa=r}function fo(e,r,n){lt[ot++]=At,lt[ot++]=Dt,lt[ot++]=ir,ir=e;var a=At;e=Dt;var l=32-ft(a)-1;a&=~(1<<l),n+=1;var o=32-ft(r)+l;if(30<o){var u=l-l%5;o=(a&(1<<u)-1).toString(32),a>>=u,l-=u,At=1<<32-ft(r)+l|n<<l|a,Dt=o+e}else At=1<<o|n<<l|a,Dt=e}function Ds(e){e.return!==null&&(lr(e,1),fo(e,1,0))}function Fs(e){for(;e===aa;)aa=Pr[--Vr],Pr[Vr]=null,sa=Pr[--Vr],Pr[Vr]=null;for(;e===ir;)ir=lt[--ot],lt[ot]=null,Dt=lt[--ot],lt[ot]=null,At=lt[--ot],lt[ot]=null}var rt=null,nt=null,ye=!1,xt=null;function go(e,r){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function xo(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,rt=e,nt=_t(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,rt=e,nt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=ir!==null?{id:At,overflow:Dt}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(ye){var r=nt;if(r){var n=r;if(!xo(e,r)){if(Bs(e))throw Error(c(418));r=_t(n.nextSibling);var a=rt;r&&xo(e,r)?go(a,n):(e.flags=e.flags&-4097|2,ye=!1,rt=e)}}else{if(Bs(e))throw Error(c(418));e.flags=e.flags&-4097|2,ye=!1,rt=e}}}function yo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function ia(e){if(e!==rt)return!1;if(!ye)return yo(e),ye=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ns(e.type,e.memoizedProps)),r&&(r=nt)){if(Bs(e))throw bo(),Error(c(418));for(;r;)go(e,r),r=_t(r.nextSibling)}if(yo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){nt=_t(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}nt=null}}else nt=rt?_t(e.stateNode.nextSibling):null;return!0}function bo(){for(var e=nt;e;)e=_t(e.nextSibling)}function Er(){nt=rt=null,ye=!1}function Is(e){xt===null?xt=[e]:xt.push(e)}var Bu=k.ReactCurrentBatchConfig;function hn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var a=n.stateNode}if(!a)throw Error(c(147,e));var l=a,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(u){var h=l.refs;u===null?delete h[o]:h[o]=u},r._stringRef=o,r)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function la(e,r){throw e=Object.prototype.toString.call(r),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function vo(e){var r=e._init;return r(e._payload)}function wo(e){function r(S,y){if(e){var C=S.deletions;C===null?(S.deletions=[y],S.flags|=16):C.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)r(S,y),y=y.sibling;return null}function a(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function l(S,y){return S=tr(S,y),S.index=0,S.sibling=null,S}function o(S,y,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<y?(S.flags|=2,y):C):(S.flags|=2,y)):(S.flags|=1048576,y)}function u(S){return e&&S.alternate===null&&(S.flags|=2),S}function h(S,y,C,D){return y===null||y.tag!==6?(y=Ui(C,S.mode,D),y.return=S,y):(y=l(y,C),y.return=S,y)}function g(S,y,C,D){var M=C.type;return M===ue?V(S,y,C.props.children,D,C.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Me&&vo(M)===y.type)?(D=l(y,C.props),D.ref=hn(S,y,C),D.return=S,D):(D=Ea(C.type,C.key,C.props,null,S.mode,D),D.ref=hn(S,y,C),D.return=S,D)}function j(S,y,C,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=Pi(C,S.mode,D),y.return=S,y):(y=l(y,C.children||[]),y.return=S,y)}function V(S,y,C,D,M){return y===null||y.tag!==7?(y=fr(C,S.mode,D,M),y.return=S,y):(y=l(y,C),y.return=S,y)}function E(S,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ui(""+y,S.mode,C),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case we:return C=Ea(y.type,y.key,y.props,null,S.mode,C),C.ref=hn(S,null,y),C.return=S,C;case ge:return y=Pi(y,S.mode,C),y.return=S,y;case Me:var D=y._init;return E(S,D(y._payload),C)}if(Wr(y)||X(y))return y=fr(y,S.mode,C,null),y.return=S,y;la(S,y)}return null}function U(S,y,C,D){var M=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:h(S,y,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case we:return C.key===M?g(S,y,C,D):null;case ge:return C.key===M?j(S,y,C,D):null;case Me:return M=C._init,U(S,y,M(C._payload),D)}if(Wr(C)||X(C))return M!==null?null:V(S,y,C,D,null);la(S,C)}return null}function q(S,y,C,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(C)||null,h(y,S,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case we:return S=S.get(D.key===null?C:D.key)||null,g(y,S,D,M);case ge:return S=S.get(D.key===null?C:D.key)||null,j(y,S,D,M);case Me:var _=D._init;return q(S,y,C,_(D._payload),M)}if(Wr(D)||X(D))return S=S.get(C)||null,V(y,S,D,M,null);la(y,D)}return null}function L(S,y,C,D){for(var M=null,_=null,O=y,H=y=0,Ae=null;O!==null&&H<C.length;H++){O.index>H?(Ae=O,O=null):Ae=O.sibling;var oe=U(S,O,C[H],D);if(oe===null){O===null&&(O=Ae);break}e&&O&&oe.alternate===null&&r(S,O),y=o(oe,y,H),_===null?M=oe:_.sibling=oe,_=oe,O=Ae}if(H===C.length)return n(S,O),ye&&lr(S,H),M;if(O===null){for(;H<C.length;H++)O=E(S,C[H],D),O!==null&&(y=o(O,y,H),_===null?M=O:_.sibling=O,_=O);return ye&&lr(S,H),M}for(O=a(S,O);H<C.length;H++)Ae=q(O,S,H,C[H],D),Ae!==null&&(e&&Ae.alternate!==null&&O.delete(Ae.key===null?H:Ae.key),y=o(Ae,y,H),_===null?M=Ae:_.sibling=Ae,_=Ae);return e&&O.forEach(function(rr){return r(S,rr)}),ye&&lr(S,H),M}function W(S,y,C,D){var M=X(C);if(typeof M!="function")throw Error(c(150));if(C=M.call(C),C==null)throw Error(c(151));for(var _=M=null,O=y,H=y=0,Ae=null,oe=C.next();O!==null&&!oe.done;H++,oe=C.next()){O.index>H?(Ae=O,O=null):Ae=O.sibling;var rr=U(S,O,oe.value,D);if(rr===null){O===null&&(O=Ae);break}e&&O&&rr.alternate===null&&r(S,O),y=o(rr,y,H),_===null?M=rr:_.sibling=rr,_=rr,O=Ae}if(oe.done)return n(S,O),ye&&lr(S,H),M;if(O===null){for(;!oe.done;H++,oe=C.next())oe=E(S,oe.value,D),oe!==null&&(y=o(oe,y,H),_===null?M=oe:_.sibling=oe,_=oe);return ye&&lr(S,H),M}for(O=a(S,O);!oe.done;H++,oe=C.next())oe=q(O,S,H,oe.value,D),oe!==null&&(e&&oe.alternate!==null&&O.delete(oe.key===null?H:oe.key),y=o(oe,y,H),_===null?M=oe:_.sibling=oe,_=oe);return e&&O.forEach(function(hp){return r(S,hp)}),ye&&lr(S,H),M}function Te(S,y,C,D){if(typeof C=="object"&&C!==null&&C.type===ue&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case we:e:{for(var M=C.key,_=y;_!==null;){if(_.key===M){if(M=C.type,M===ue){if(_.tag===7){n(S,_.sibling),y=l(_,C.props.children),y.return=S,S=y;break e}}else if(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Me&&vo(M)===_.type){n(S,_.sibling),y=l(_,C.props),y.ref=hn(S,_,C),y.return=S,S=y;break e}n(S,_);break}else r(S,_);_=_.sibling}C.type===ue?(y=fr(C.props.children,S.mode,D,C.key),y.return=S,S=y):(D=Ea(C.type,C.key,C.props,null,S.mode,D),D.ref=hn(S,y,C),D.return=S,S=D)}return u(S);case ge:e:{for(_=C.key;y!==null;){if(y.key===_)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){n(S,y.sibling),y=l(y,C.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else r(S,y);y=y.sibling}y=Pi(C,S.mode,D),y.return=S,S=y}return u(S);case Me:return _=C._init,Te(S,y,_(C._payload),D)}if(Wr(C))return L(S,y,C,D);if(X(C))return W(S,y,C,D);la(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(n(S,y.sibling),y=l(y,C),y.return=S,S=y):(n(S,y),y=Ui(C,S.mode,D),y.return=S,S=y),u(S)):n(S,y)}return Te}var Ar=wo(!0),So=wo(!1),oa=Ot(null),ca=null,Dr=null,qs=null;function Rs(){qs=Dr=ca=null}function $s(e){var r=oa.current;fe(oa),e._currentValue=r}function Ls(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function Fr(e,r){ca=e,qs=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Xe=!0),e.firstContext=null)}function ct(e){var r=e._currentValue;if(qs!==e)if(e={context:e,memoizedValue:r,next:null},Dr===null){if(ca===null)throw Error(c(308));Dr=e,ca.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return r}var or=null;function Ws(e){or===null?or=[e]:or.push(e)}function Co(e,r,n,a){var l=r.interleaved;return l===null?(n.next=n,Ws(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ft(e,a)}function Ft(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jo(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Qt(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(se&2)!==0){var l=a.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),a.pending=r,Ft(e,n)}return l=a.interleaved,l===null?(r.next=r,Ws(a)):(r.next=l.next,l.next=r),a.interleaved=r,Ft(e,n)}function da(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,ns(e,n)}}function ko(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?l=o=r:o=o.next=r}else l=o=r;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function ua(e,r,n,a){var l=e.updateQueue;Gt=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var g=h,j=g.next;g.next=null,u===null?o=j:u.next=j,u=g;var V=e.alternate;V!==null&&(V=V.updateQueue,h=V.lastBaseUpdate,h!==u&&(h===null?V.firstBaseUpdate=j:h.next=j,V.lastBaseUpdate=g))}if(o!==null){var E=l.baseState;u=0,V=j=g=null,h=o;do{var U=h.lane,q=h.eventTime;if((a&U)===U){V!==null&&(V=V.next={eventTime:q,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var L=e,W=h;switch(U=r,q=n,W.tag){case 1:if(L=W.payload,typeof L=="function"){E=L.call(q,E,U);break e}E=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=W.payload,U=typeof L=="function"?L.call(q,E,U):L,U==null)break e;E=$({},E,U);break e;case 2:Gt=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,U=l.effects,U===null?l.effects=[h]:U.push(h))}else q={eventTime:q,lane:U,tag:h.tag,payload:h.payload,callback:h.callback,next:null},V===null?(j=V=q,g=E):V=V.next=q,u|=U;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;U=h,h=U.next,U.next=null,l.lastBaseUpdate=U,l.shared.pending=null}}while(!0);if(V===null&&(g=E),l.baseState=g,l.firstBaseUpdate=j,l.lastBaseUpdate=V,r=l.shared.interleaved,r!==null){l=r;do u|=l.lane,l=l.next;while(l!==r)}else o===null&&(l.shared.lanes=0);ur|=u,e.lanes=u,e.memoizedState=E}}function To(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(c(191,l));l.call(a)}}}var fn={},Tt=Ot(fn),gn=Ot(fn),xn=Ot(fn);function cr(e){if(e===fn)throw Error(c(174));return e}function _s(e,r){switch(me(xn,r),me(gn,e),me(Tt,fn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Oa(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Oa(r,e)}fe(Tt),me(Tt,r)}function Br(){fe(Tt),fe(gn),fe(xn)}function No(e){cr(xn.current);var r=cr(Tt.current),n=Oa(r,e.type);r!==n&&(me(gn,e),me(Tt,n))}function Os(e){gn.current===e&&(fe(Tt),fe(gn))}var be=Ot(0);function pa(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Xs=[];function Hs(){for(var e=0;e<Xs.length;e++)Xs[e]._workInProgressVersionPrimary=null;Xs.length=0}var ma=k.ReactCurrentDispatcher,Gs=k.ReactCurrentBatchConfig,dr=0,ve=null,Ue=null,Ve=null,ha=!1,yn=!1,bn=0,zu=0;function ze(){throw Error(c(321))}function Qs(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!gt(e[n],r[n]))return!1;return!0}function Ys(e,r,n,a,l,o){if(dr=o,ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ma.current=e===null||e.memoizedState===null?$u:Lu,e=n(a,l),yn){o=0;do{if(yn=!1,bn=0,25<=o)throw Error(c(301));o+=1,Ve=Ue=null,r.updateQueue=null,ma.current=Wu,e=n(a,l)}while(yn)}if(ma.current=xa,r=Ue!==null&&Ue.next!==null,dr=0,Ve=Ue=ve=null,ha=!1,r)throw Error(c(300));return e}function Ks(){var e=bn!==0;return bn=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ve.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function dt(){if(Ue===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var r=Ve===null?ve.memoizedState:Ve.next;if(r!==null)Ve=r,Ue=e;else{if(e===null)throw Error(c(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ve===null?ve.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function vn(e,r){return typeof r=="function"?r(e):r}function Js(e){var r=dt(),n=r.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=Ue,l=a.baseQueue,o=n.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}a.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,a=a.baseState;var h=u=null,g=null,j=o;do{var V=j.lane;if((dr&V)===V)g!==null&&(g=g.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),a=j.hasEagerState?j.eagerState:e(a,j.action);else{var E={lane:V,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};g===null?(h=g=E,u=a):g=g.next=E,ve.lanes|=V,ur|=V}j=j.next}while(j!==null&&j!==o);g===null?u=a:g.next=h,gt(a,r.memoizedState)||(Xe=!0),r.memoizedState=a,r.baseState=u,r.baseQueue=g,n.lastRenderedState=a}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ve.lanes|=o,ur|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Zs(e){var r=dt(),n=r.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=r.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);gt(o,r.memoizedState)||(Xe=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,a]}function Uo(){}function Po(e,r){var n=ve,a=dt(),l=r(),o=!gt(a.memoizedState,l);if(o&&(a.memoizedState=l,Xe=!0),a=a.queue,ei(Ao.bind(null,n,a,e),[e]),a.getSnapshot!==r||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,wn(9,Eo.bind(null,n,a,l,r),void 0,null),Ee===null)throw Error(c(349));(dr&30)!==0||Vo(n,r,l)}return l}function Vo(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=ve.updateQueue,r===null?(r={lastEffect:null,stores:null},ve.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Eo(e,r,n,a){r.value=n,r.getSnapshot=a,Do(r)&&Fo(e)}function Ao(e,r,n){return n(function(){Do(r)&&Fo(e)})}function Do(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!gt(e,n)}catch{return!0}}function Fo(e){var r=Ft(e,1);r!==null&&wt(r,e,1,-1)}function Bo(e){var r=Nt();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},r.queue=e,e=e.dispatch=Ru.bind(null,ve,e),[r.memoizedState,e]}function wn(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=ve.updateQueue,r===null?(r={lastEffect:null,stores:null},ve.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function zo(){return dt().memoizedState}function fa(e,r,n,a){var l=Nt();ve.flags|=e,l.memoizedState=wn(1|r,n,void 0,a===void 0?null:a)}function ga(e,r,n,a){var l=dt();a=a===void 0?null:a;var o=void 0;if(Ue!==null){var u=Ue.memoizedState;if(o=u.destroy,a!==null&&Qs(a,u.deps)){l.memoizedState=wn(r,n,o,a);return}}ve.flags|=e,l.memoizedState=wn(1|r,n,o,a)}function Io(e,r){return fa(8390656,8,e,r)}function ei(e,r){return ga(2048,8,e,r)}function qo(e,r){return ga(4,2,e,r)}function Ro(e,r){return ga(4,4,e,r)}function $o(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Lo(e,r,n){return n=n!=null?n.concat([e]):null,ga(4,4,$o.bind(null,r,e),n)}function ti(){}function Wo(e,r){var n=dt();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Qs(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function Mo(e,r){var n=dt();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Qs(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function _o(e,r,n){return(dr&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n):(gt(n,r)||(n=bl(),ve.lanes|=n,ur|=n,e.baseState=!0),r)}function Iu(e,r){var n=de;de=n!==0&&4>n?n:4,e(!0);var a=Gs.transition;Gs.transition={};try{e(!1),r()}finally{de=n,Gs.transition=a}}function Oo(){return dt().memoizedState}function qu(e,r,n){var a=Zt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Xo(e))Ho(r,n);else if(n=Co(e,r,n,a),n!==null){var l=We();wt(n,e,a,l),Go(n,r,a)}}function Ru(e,r,n){var a=Zt(e),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xo(e))Ho(r,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var u=r.lastRenderedState,h=o(u,n);if(l.hasEagerState=!0,l.eagerState=h,gt(h,u)){var g=r.interleaved;g===null?(l.next=l,Ws(r)):(l.next=g.next,g.next=l),r.interleaved=l;return}}catch{}finally{}n=Co(e,r,l,a),n!==null&&(l=We(),wt(n,e,a,l),Go(n,r,a))}}function Xo(e){var r=e.alternate;return e===ve||r!==null&&r===ve}function Ho(e,r){yn=ha=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Go(e,r,n){if((n&4194240)!==0){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,ns(e,n)}}var xa={readContext:ct,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},$u={readContext:ct,useCallback:function(e,r){return Nt().memoizedState=[e,r===void 0?null:r],e},useContext:ct,useEffect:Io,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,fa(4194308,4,$o.bind(null,r,e),n)},useLayoutEffect:function(e,r){return fa(4194308,4,e,r)},useInsertionEffect:function(e,r){return fa(4,2,e,r)},useMemo:function(e,r){var n=Nt();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=Nt();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=qu.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var r=Nt();return e={current:e},r.memoizedState=e},useState:Bo,useDebugValue:ti,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Bo(!1),r=e[0];return e=Iu.bind(null,e[1]),Nt().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=ve,l=Nt();if(ye){if(n===void 0)throw Error(c(407));n=n()}else{if(n=r(),Ee===null)throw Error(c(349));(dr&30)!==0||Vo(a,r,n)}l.memoizedState=n;var o={value:n,getSnapshot:r};return l.queue=o,Io(Ao.bind(null,a,o,e),[e]),a.flags|=2048,wn(9,Eo.bind(null,a,o,n,r),void 0,null),n},useId:function(){var e=Nt(),r=Ee.identifierPrefix;if(ye){var n=Dt,a=At;n=(a&~(1<<32-ft(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=bn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=zu++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Lu={readContext:ct,useCallback:Wo,useContext:ct,useEffect:ei,useImperativeHandle:Lo,useInsertionEffect:qo,useLayoutEffect:Ro,useMemo:Mo,useReducer:Js,useRef:zo,useState:function(){return Js(vn)},useDebugValue:ti,useDeferredValue:function(e){var r=dt();return _o(r,Ue.memoizedState,e)},useTransition:function(){var e=Js(vn)[0],r=dt().memoizedState;return[e,r]},useMutableSource:Uo,useSyncExternalStore:Po,useId:Oo,unstable_isNewReconciler:!1},Wu={readContext:ct,useCallback:Wo,useContext:ct,useEffect:ei,useImperativeHandle:Lo,useInsertionEffect:qo,useLayoutEffect:Ro,useMemo:Mo,useReducer:Zs,useRef:zo,useState:function(){return Zs(vn)},useDebugValue:ti,useDeferredValue:function(e){var r=dt();return Ue===null?r.memoizedState=e:_o(r,Ue.memoizedState,e)},useTransition:function(){var e=Zs(vn)[0],r=dt().memoizedState;return[e,r]},useMutableSource:Uo,useSyncExternalStore:Po,useId:Oo,unstable_isNewReconciler:!1};function yt(e,r){if(e&&e.defaultProps){r=$({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function ri(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:$({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=We(),l=Zt(e),o=Bt(a,l);o.payload=r,n!=null&&(o.callback=n),r=Qt(e,o,l),r!==null&&(wt(r,e,l,a),da(r,e,l))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=We(),l=Zt(e),o=Bt(a,l);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=Qt(e,o,l),r!==null&&(wt(r,e,l,a),da(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=We(),a=Zt(e),l=Bt(n,a);l.tag=2,r!=null&&(l.callback=r),r=Qt(e,l,a),r!==null&&(wt(r,e,a,n),da(r,e,a))}};function Qo(e,r,n,a,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,u):r.prototype&&r.prototype.isPureReactComponent?!ln(n,a)||!ln(l,o):!0}function Yo(e,r,n){var a=!1,l=Xt,o=r.contextType;return typeof o=="object"&&o!==null?o=ct(o):(l=Oe(r)?sr:Be.current,a=r.contextTypes,o=(a=a!=null)?Ur(e,l):Xt),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ya,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),r}function Ko(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&ya.enqueueReplaceState(r,r.state,null)}function ni(e,r,n,a){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ms(e);var o=r.contextType;typeof o=="object"&&o!==null?l.context=ct(o):(o=Oe(r)?sr:Be.current,l.context=Ur(e,o)),l.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(ri(e,r,o,n),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&ya.enqueueReplaceState(l,l.state,null),ua(e,n,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,r){try{var n="",a=r;do n+=ie(a),a=a.return;while(a);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:l,digest:null}}function ai(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function si(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Mu=typeof WeakMap=="function"?WeakMap:Map;function Jo(e,r,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){ka||(ka=!0,vi=a),si(e,r)},n}function Zo(e,r,n){n=Bt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=r.value;n.payload=function(){return a(l)},n.callback=function(){si(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){si(e,r),typeof a!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})}),n}function ec(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Mu;var l=new Set;a.set(r,l)}else l=a.get(r),l===void 0&&(l=new Set,a.set(r,l));l.has(n)||(l.add(n),e=np.bind(null,e,r,n),r.then(e,e))}function tc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function rc(e,r,n,a,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Bt(-1,1),r.tag=2,Qt(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var _u=k.ReactCurrentOwner,Xe=!1;function Le(e,r,n,a){r.child=e===null?So(r,null,n,a):Ar(r,e.child,n,a)}function nc(e,r,n,a,l){n=n.render;var o=r.ref;return Fr(r,l),a=Ys(e,r,n,a,o,l),n=Ks(),e!==null&&!Xe?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,zt(e,r,l)):(ye&&n&&Ds(r),r.flags|=1,Le(e,r,a,l),r.child)}function ac(e,r,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ni(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,sc(e,r,o,a,l)):(e=Ea(n.type,null,a,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,(e.lanes&l)===0){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:ln,n(u,a)&&e.ref===r.ref)return zt(e,r,l)}return r.flags|=1,e=tr(o,a),e.ref=r.ref,e.return=r,r.child=e}function sc(e,r,n,a,l){if(e!==null){var o=e.memoizedProps;if(ln(o,a)&&e.ref===r.ref)if(Xe=!1,r.pendingProps=a=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Xe=!0);else return r.lanes=e.lanes,zt(e,r,l)}return ii(e,r,n,a,l)}function ic(e,r,n){var a=r.pendingProps,l=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(qr,at),at|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,me(qr,at),at|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:n,me(qr,at),at|=a}else o!==null?(a=o.baseLanes|n,r.memoizedState=null):a=n,me(qr,at),at|=a;return Le(e,r,l,n),r.child}function lc(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ii(e,r,n,a,l){var o=Oe(n)?sr:Be.current;return o=Ur(r,o),Fr(r,l),n=Ys(e,r,n,a,o,l),a=Ks(),e!==null&&!Xe?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,zt(e,r,l)):(ye&&a&&Ds(r),r.flags|=1,Le(e,r,n,l),r.child)}function oc(e,r,n,a,l){if(Oe(n)){var o=!0;ra(r)}else o=!1;if(Fr(r,l),r.stateNode===null)va(e,r),Yo(r,n,a),ni(r,n,a,l),a=!0;else if(e===null){var u=r.stateNode,h=r.memoizedProps;u.props=h;var g=u.context,j=n.contextType;typeof j=="object"&&j!==null?j=ct(j):(j=Oe(n)?sr:Be.current,j=Ur(r,j));var V=n.getDerivedStateFromProps,E=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function";E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==a||g!==j)&&Ko(r,u,a,j),Gt=!1;var U=r.memoizedState;u.state=U,ua(r,a,u,l),g=r.memoizedState,h!==a||U!==g||_e.current||Gt?(typeof V=="function"&&(ri(r,n,V,a),g=r.memoizedState),(h=Gt||Qo(r,n,h,a,U,g,j))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(r.flags|=4194308)):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=g),u.props=a,u.state=g,u.context=j,a=h):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{u=r.stateNode,jo(e,r),h=r.memoizedProps,j=r.type===r.elementType?h:yt(r.type,h),u.props=j,E=r.pendingProps,U=u.context,g=n.contextType,typeof g=="object"&&g!==null?g=ct(g):(g=Oe(n)?sr:Be.current,g=Ur(r,g));var q=n.getDerivedStateFromProps;(V=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==E||U!==g)&&Ko(r,u,a,g),Gt=!1,U=r.memoizedState,u.state=U,ua(r,a,u,l);var L=r.memoizedState;h!==E||U!==L||_e.current||Gt?(typeof q=="function"&&(ri(r,n,q,a),L=r.memoizedState),(j=Gt||Qo(r,n,j,a,U,L,g)||!1)?(V||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,L,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,L,g)),typeof u.componentDidUpdate=="function"&&(r.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=L),u.props=a,u.state=L,u.context=g,a=j):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&U===e.memoizedState||(r.flags|=1024),a=!1)}return li(e,r,n,a,o,l)}function li(e,r,n,a,l,o){lc(e,r);var u=(r.flags&128)!==0;if(!a&&!u)return l&&mo(r,n,!1),zt(e,r,o);a=r.stateNode,_u.current=r;var h=u&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&u?(r.child=Ar(r,e.child,null,o),r.child=Ar(r,null,h,o)):Le(e,r,h,o),r.memoizedState=a.state,l&&mo(r,n,!0),r.child}function cc(e){var r=e.stateNode;r.pendingContext?uo(e,r.pendingContext,r.pendingContext!==r.context):r.context&&uo(e,r.context,!1),_s(e,r.containerInfo)}function dc(e,r,n,a,l){return Er(),Is(l),r.flags|=256,Le(e,r,n,a),r.child}var oi={dehydrated:null,treeContext:null,retryLane:0};function ci(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,r,n){var a=r.pendingProps,l=be.current,o=!1,u=(r.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(l&2)!==0),h?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),me(be,l&1),e===null)return zs(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(u=a.children,e=a.fallback,o?(a=r.mode,o=r.child,u={mode:"hidden",children:u},(a&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=u):o=Aa(u,a,0,null),e=fr(e,a,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=ci(n),r.memoizedState=oi,e):di(r,u));if(l=e.memoizedState,l!==null&&(h=l.dehydrated,h!==null))return Ou(e,r,u,a,h,l,n);if(o){o=a.fallback,u=r.mode,l=e.child,h=l.sibling;var g={mode:"hidden",children:a.children};return(u&1)===0&&r.child!==l?(a=r.child,a.childLanes=0,a.pendingProps=g,r.deletions=null):(a=tr(l,g),a.subtreeFlags=l.subtreeFlags&14680064),h!==null?o=tr(h,o):(o=fr(o,u,n,null),o.flags|=2),o.return=r,a.return=r,a.sibling=o,r.child=a,a=o,o=r.child,u=e.child.memoizedState,u=u===null?ci(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~n,r.memoizedState=oi,a}return o=e.child,e=o.sibling,a=tr(o,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function di(e,r){return r=Aa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ba(e,r,n,a){return a!==null&&Is(a),Ar(r,e.child,null,n),e=di(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Ou(e,r,n,a,l,o,u){if(n)return r.flags&256?(r.flags&=-257,a=ai(Error(c(422))),ba(e,r,u,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=a.fallback,l=r.mode,a=Aa({mode:"visible",children:a.children},l,0,null),o=fr(o,l,u,null),o.flags|=2,a.return=r,o.return=r,a.sibling=o,r.child=a,(r.mode&1)!==0&&Ar(r,e.child,null,u),r.child.memoizedState=ci(u),r.memoizedState=oi,o);if((r.mode&1)===0)return ba(e,r,u,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;return a=h,o=Error(c(419)),a=ai(o,a,void 0),ba(e,r,u,a)}if(h=(u&e.childLanes)!==0,Xe||h){if(a=Ee,a!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|u))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ft(e,l),wt(a,e,l,-1))}return Ti(),a=ai(Error(c(421))),ba(e,r,u,a)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=ap.bind(null,e),l._reactRetry=r,null):(e=o.treeContext,nt=_t(l.nextSibling),rt=r,ye=!0,xt=null,e!==null&&(lt[ot++]=At,lt[ot++]=Dt,lt[ot++]=ir,At=e.id,Dt=e.overflow,ir=r),r=di(r,a.children),r.flags|=4096,r)}function pc(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),Ls(e.return,r,n)}function ui(e,r,n,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l)}function mc(e,r,n){var a=r.pendingProps,l=a.revealOrder,o=a.tail;if(Le(e,r,a.children,n),a=be.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pc(e,n,r);else if(e.tag===19)pc(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(me(be,a),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(n=r.child,l=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=r.child,r.child=null):(l=n.sibling,n.sibling=null),ui(r,!1,l,n,o);break;case"backwards":for(n=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&pa(e)===null){r.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ui(r,!0,n,null,o);break;case"together":ui(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function va(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function zt(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),ur|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(c(153));if(r.child!==null){for(e=r.child,n=tr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Xu(e,r,n){switch(r.tag){case 3:cc(r),Er();break;case 5:No(r);break;case 1:Oe(r.type)&&ra(r);break;case 4:_s(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,l=r.memoizedProps.value;me(oa,a._currentValue),a._currentValue=l;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(me(be,be.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?uc(e,r,n):(me(be,be.current&1),e=zt(e,r,n),e!==null?e.sibling:null);me(be,be.current&1);break;case 19:if(a=(n&r.childLanes)!==0,(e.flags&128)!==0){if(a)return mc(e,r,n);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),me(be,be.current),a)break;return null;case 22:case 23:return r.lanes=0,ic(e,r,n)}return zt(e,r,n)}var hc,pi,fc,gc;hc=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},pi=function(){},fc=function(e,r,n,a){var l=e.memoizedProps;if(l!==a){e=r.stateNode,cr(Tt.current);var o=null;switch(n){case"input":l=La(e,l),a=La(e,a),o=[];break;case"select":l=$({},l,{value:void 0}),a=$({},a,{value:void 0}),o=[];break;case"textarea":l=_a(e,l),a=_a(e,a),o=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Zn)}Xa(n,a);var u;n=null;for(j in l)if(!a.hasOwnProperty(j)&&l.hasOwnProperty(j)&&l[j]!=null)if(j==="style"){var h=l[j];for(u in h)h.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(f.hasOwnProperty(j)?o||(o=[]):(o=o||[]).push(j,null));for(j in a){var g=a[j];if(h=l!=null?l[j]:void 0,a.hasOwnProperty(j)&&g!==h&&(g!=null||h!=null))if(j==="style")if(h){for(u in h)!h.hasOwnProperty(u)||g&&g.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in g)g.hasOwnProperty(u)&&h[u]!==g[u]&&(n||(n={}),n[u]=g[u])}else n||(o||(o=[]),o.push(j,n)),n=g;else j==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(o=o||[]).push(j,g)):j==="children"?typeof g!="string"&&typeof g!="number"||(o=o||[]).push(j,""+g):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(f.hasOwnProperty(j)?(g!=null&&j==="onScroll"&&he("scroll",e),o||h===g||(o=[])):(o=o||[]).push(j,g))}n&&(o=o||[]).push("style",n);var j=o;(r.updateQueue=j)&&(r.flags|=4)}},gc=function(e,r,n,a){n!==a&&(r.flags|=4)};function Sn(e,r){if(!ye)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ie(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function Hu(e,r,n){var a=r.pendingProps;switch(Fs(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(r),null;case 1:return Oe(r.type)&&ta(),Ie(r),null;case 3:return a=r.stateNode,Br(),fe(_e),fe(Be),Hs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ia(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,xt!==null&&(Ci(xt),xt=null))),pi(e,r),Ie(r),null;case 5:Os(r);var l=cr(xn.current);if(n=r.type,e!==null&&r.stateNode!=null)fc(e,r,n,a,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(c(166));return Ie(r),null}if(e=cr(Tt.current),ia(r)){a=r.stateNode,n=r.type;var o=r.memoizedProps;switch(a[kt]=r,a[pn]=o,e=(r.mode&1)!==0,n){case"dialog":he("cancel",a),he("close",a);break;case"iframe":case"object":case"embed":he("load",a);break;case"video":case"audio":for(l=0;l<cn.length;l++)he(cn[l],a);break;case"source":he("error",a);break;case"img":case"image":case"link":he("error",a),he("load",a);break;case"details":he("toggle",a);break;case"input":Qi(a,o),he("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},he("invalid",a);break;case"textarea":Ji(a,o),he("invalid",a)}Xa(n,o),l=null;for(var u in o)if(o.hasOwnProperty(u)){var h=o[u];u==="children"?typeof h=="string"?a.textContent!==h&&(o.suppressHydrationWarning!==!0&&Jn(a.textContent,h,e),l=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(o.suppressHydrationWarning!==!0&&Jn(a.textContent,h,e),l=["children",""+h]):f.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&he("scroll",a)}switch(n){case"input":Pn(a),Ki(a,o,!0);break;case"textarea":Pn(a),el(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Zn)}a=l,r.updateQueue=a,a!==null&&(r.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(n,{is:a.is}):(e=u.createElement(n),n==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,n),e[kt]=r,e[pn]=a,hc(e,r,!1,!1),r.stateNode=e;e:{switch(u=Ha(n,a),n){case"dialog":he("cancel",e),he("close",e),l=a;break;case"iframe":case"object":case"embed":he("load",e),l=a;break;case"video":case"audio":for(l=0;l<cn.length;l++)he(cn[l],e);l=a;break;case"source":he("error",e),l=a;break;case"img":case"image":case"link":he("error",e),he("load",e),l=a;break;case"details":he("toggle",e),l=a;break;case"input":Qi(e,a),l=La(e,a),he("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=$({},a,{value:void 0}),he("invalid",e);break;case"textarea":Ji(e,a),l=_a(e,a),he("invalid",e);break;default:l=a}Xa(n,l),h=l;for(o in h)if(h.hasOwnProperty(o)){var g=h[o];o==="style"?al(e,g):o==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&rl(e,g)):o==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&Mr(e,g):typeof g=="number"&&Mr(e,""+g):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(f.hasOwnProperty(o)?g!=null&&o==="onScroll"&&he("scroll",e):g!=null&&$e(e,o,g,u))}switch(n){case"input":Pn(e),Ki(e,a,!1);break;case"textarea":Pn(e),el(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ce(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?gr(e,!!a.multiple,o,!1):a.defaultValue!=null&&gr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zn)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ie(r),null;case 6:if(e&&r.stateNode!=null)gc(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(c(166));if(n=cr(xn.current),cr(Tt.current),ia(r)){if(a=r.stateNode,n=r.memoizedProps,a[kt]=r,(o=a.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:Jn(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jn(a.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[kt]=r,r.stateNode=a}return Ie(r),null;case 13:if(fe(be),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&nt!==null&&(r.mode&1)!==0&&(r.flags&128)===0)bo(),Er(),r.flags|=98560,o=!1;else if(o=ia(r),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[kt]=r}else Er(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ie(r),o=!1}else xt!==null&&(Ci(xt),xt=null),o=!0;if(!o)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(be.current&1)!==0?Pe===0&&(Pe=3):Ti())),r.updateQueue!==null&&(r.flags|=4),Ie(r),null);case 4:return Br(),pi(e,r),e===null&&dn(r.stateNode.containerInfo),Ie(r),null;case 10:return $s(r.type._context),Ie(r),null;case 17:return Oe(r.type)&&ta(),Ie(r),null;case 19:if(fe(be),o=r.memoizedState,o===null)return Ie(r),null;if(a=(r.flags&128)!==0,u=o.rendering,u===null)if(a)Sn(o,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(u=pa(e),u!==null){for(r.flags|=128,Sn(o,!1),a=u.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)o=n,e=a,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(be,be.current&1|2),r.child}e=e.sibling}o.tail!==null&&ke()>Rr&&(r.flags|=128,a=!0,Sn(o,!1),r.lanes=4194304)}else{if(!a)if(e=pa(u),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Sn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!ye)return Ie(r),null}else 2*ke()-o.renderingStartTime>Rr&&n!==1073741824&&(r.flags|=128,a=!0,Sn(o,!1),r.lanes=4194304);o.isBackwards?(u.sibling=r.child,r.child=u):(n=o.last,n!==null?n.sibling=u:r.child=u,o.last=u)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=ke(),r.sibling=null,n=be.current,me(be,a?n&1|2:n&1),r):(Ie(r),null);case 22:case 23:return ki(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(at&1073741824)!==0&&(Ie(r),r.subtreeFlags&6&&(r.flags|=8192)):Ie(r),null;case 24:return null;case 25:return null}throw Error(c(156,r.tag))}function Gu(e,r){switch(Fs(r),r.tag){case 1:return Oe(r.type)&&ta(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Br(),fe(_e),fe(Be),Hs(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Os(r),null;case 13:if(fe(be),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(c(340));Er()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return fe(be),null;case 4:return Br(),null;case 10:return $s(r.type._context),null;case 22:case 23:return ki(),null;case 24:return null;default:return null}}var wa=!1,qe=!1,Qu=typeof WeakSet=="function"?WeakSet:Set,R=null;function Ir(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Ce(e,r,a)}else n.current=null}function mi(e,r,n){try{n()}catch(a){Ce(e,r,a)}}var xc=!1;function Yu(e,r){if(ks=Ln,e=Gl(),xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var u=0,h=-1,g=-1,j=0,V=0,E=e,U=null;t:for(;;){for(var q;E!==n||l!==0&&E.nodeType!==3||(h=u+l),E!==o||a!==0&&E.nodeType!==3||(g=u+a),E.nodeType===3&&(u+=E.nodeValue.length),(q=E.firstChild)!==null;)U=E,E=q;for(;;){if(E===e)break t;if(U===n&&++j===l&&(h=u),U===o&&++V===a&&(g=u),(q=E.nextSibling)!==null)break;E=U,U=E.parentNode}E=q}n=h===-1||g===-1?null:{start:h,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ts={focusedElem:e,selectionRange:n},Ln=!1,R=r;R!==null;)if(r=R,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,R=e;else for(;R!==null;){r=R;try{var L=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var W=L.memoizedProps,Te=L.memoizedState,S=r.stateNode,y=S.getSnapshotBeforeUpdate(r.elementType===r.type?W:yt(r.type,W),Te);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=r.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(D){Ce(r,r.return,D)}if(e=r.sibling,e!==null){e.return=r.return,R=e;break}R=r.return}return L=xc,xc=!1,L}function Cn(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&mi(r,n,o)}l=l.next}while(l!==a)}}function Sa(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function hi(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function yc(e){var r=e.alternate;r!==null&&(e.alternate=null,yc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[kt],delete r[pn],delete r[Vs],delete r[Au],delete r[Du])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bc(e){return e.tag===5||e.tag===3||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fi(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Zn));else if(a!==4&&(e=e.child,e!==null))for(fi(e,r,n),e=e.sibling;e!==null;)fi(e,r,n),e=e.sibling}function gi(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(gi(e,r,n),e=e.sibling;e!==null;)gi(e,r,n),e=e.sibling}var De=null,bt=!1;function Yt(e,r,n){for(n=n.child;n!==null;)wc(e,r,n),n=n.sibling}function wc(e,r,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Bn,n)}catch{}switch(n.tag){case 5:qe||Ir(n,r);case 6:var a=De,l=bt;De=null,Yt(e,r,n),De=a,bt=l,De!==null&&(bt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(bt?(e=De,n=n.stateNode,e.nodeType===8?Ps(e.parentNode,n):e.nodeType===1&&Ps(e,n),en(e)):Ps(De,n.stateNode));break;case 4:a=De,l=bt,De=n.stateNode.containerInfo,bt=!0,Yt(e,r,n),De=a,bt=l;break;case 0:case 11:case 14:case 15:if(!qe&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var o=l,u=o.destroy;o=o.tag,u!==void 0&&((o&2)!==0||(o&4)!==0)&&mi(n,r,u),l=l.next}while(l!==a)}Yt(e,r,n);break;case 1:if(!qe&&(Ir(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(h){Ce(n,r,h)}Yt(e,r,n);break;case 21:Yt(e,r,n);break;case 22:n.mode&1?(qe=(a=qe)||n.memoizedState!==null,Yt(e,r,n),qe=a):Yt(e,r,n);break;default:Yt(e,r,n)}}function Sc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qu),r.forEach(function(a){var l=sp.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}}function vt(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var o=e,u=r,h=u;e:for(;h!==null;){switch(h.tag){case 5:De=h.stateNode,bt=!1;break e;case 3:De=h.stateNode.containerInfo,bt=!0;break e;case 4:De=h.stateNode.containerInfo,bt=!0;break e}h=h.return}if(De===null)throw Error(c(160));wc(o,u,l),De=null,bt=!1;var g=l.alternate;g!==null&&(g.return=null),l.return=null}catch(j){Ce(l,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Cc(r,e),r=r.sibling}function Cc(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(r,e),Ut(e),a&4){try{Cn(3,e,e.return),Sa(3,e)}catch(W){Ce(e,e.return,W)}try{Cn(5,e,e.return)}catch(W){Ce(e,e.return,W)}}break;case 1:vt(r,e),Ut(e),a&512&&n!==null&&Ir(n,n.return);break;case 5:if(vt(r,e),Ut(e),a&512&&n!==null&&Ir(n,n.return),e.flags&32){var l=e.stateNode;try{Mr(l,"")}catch(W){Ce(e,e.return,W)}}if(a&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,u=n!==null?n.memoizedProps:o,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&o.type==="radio"&&o.name!=null&&Yi(l,o),Ha(h,u);var j=Ha(h,o);for(u=0;u<g.length;u+=2){var V=g[u],E=g[u+1];V==="style"?al(l,E):V==="dangerouslySetInnerHTML"?rl(l,E):V==="children"?Mr(l,E):$e(l,V,E,j)}switch(h){case"input":Wa(l,o);break;case"textarea":Zi(l,o);break;case"select":var U=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var q=o.value;q!=null?gr(l,!!o.multiple,q,!1):U!==!!o.multiple&&(o.defaultValue!=null?gr(l,!!o.multiple,o.defaultValue,!0):gr(l,!!o.multiple,o.multiple?[]:"",!1))}l[pn]=o}catch(W){Ce(e,e.return,W)}}break;case 6:if(vt(r,e),Ut(e),a&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(W){Ce(e,e.return,W)}}break;case 3:if(vt(r,e),Ut(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{en(r.containerInfo)}catch(W){Ce(e,e.return,W)}break;case 4:vt(r,e),Ut(e);break;case 13:vt(r,e),Ut(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(bi=ke())),a&4&&Sc(e);break;case 22:if(V=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(j=qe)||V,vt(r,e),qe=j):vt(r,e),Ut(e),a&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!V&&(e.mode&1)!==0)for(R=e,V=e.child;V!==null;){for(E=R=V;R!==null;){switch(U=R,q=U.child,U.tag){case 0:case 11:case 14:case 15:Cn(4,U,U.return);break;case 1:Ir(U,U.return);var L=U.stateNode;if(typeof L.componentWillUnmount=="function"){a=U,n=U.return;try{r=a,L.props=r.memoizedProps,L.state=r.memoizedState,L.componentWillUnmount()}catch(W){Ce(a,n,W)}}break;case 5:Ir(U,U.return);break;case 22:if(U.memoizedState!==null){Tc(E);continue}}q!==null?(q.return=U,R=q):Tc(E)}V=V.sibling}e:for(V=null,E=e;;){if(E.tag===5){if(V===null){V=E;try{l=E.stateNode,j?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(h=E.stateNode,g=E.memoizedProps.style,u=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=nl("display",u))}catch(W){Ce(e,e.return,W)}}}else if(E.tag===6){if(V===null)try{E.stateNode.nodeValue=j?"":E.memoizedProps}catch(W){Ce(e,e.return,W)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;V===E&&(V=null),E=E.return}V===E&&(V=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:vt(r,e),Ut(e),a&4&&Sc(e);break;case 21:break;default:vt(r,e),Ut(e)}}function Ut(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(bc(n)){var a=n;break e}n=n.return}throw Error(c(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Mr(l,""),a.flags&=-33);var o=vc(e);gi(e,o,l);break;case 3:case 4:var u=a.stateNode.containerInfo,h=vc(e);fi(e,h,u);break;default:throw Error(c(161))}}catch(g){Ce(e,e.return,g)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Ku(e,r,n){R=e,jc(e)}function jc(e,r,n){for(var a=(e.mode&1)!==0;R!==null;){var l=R,o=l.child;if(l.tag===22&&a){var u=l.memoizedState!==null||wa;if(!u){var h=l.alternate,g=h!==null&&h.memoizedState!==null||qe;h=wa;var j=qe;if(wa=u,(qe=g)&&!j)for(R=l;R!==null;)u=R,g=u.child,u.tag===22&&u.memoizedState!==null?Nc(l):g!==null?(g.return=u,R=g):Nc(l);for(;o!==null;)R=o,jc(o),o=o.sibling;R=l,wa=h,qe=j}kc(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,R=o):kc(e)}}function kc(e){for(;R!==null;){var r=R;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:qe||Sa(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!qe)if(n===null)a.componentDidMount();else{var l=r.elementType===r.type?n.memoizedProps:yt(r.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&To(r,o,a);break;case 3:var u=r.updateQueue;if(u!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}To(r,u,n)}break;case 5:var h=r.stateNode;if(n===null&&r.flags&4){n=h;var g=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var V=j.memoizedState;if(V!==null){var E=V.dehydrated;E!==null&&en(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}qe||r.flags&512&&hi(r)}catch(U){Ce(r,r.return,U)}}if(r===e){R=null;break}if(n=r.sibling,n!==null){n.return=r.return,R=n;break}R=r.return}}function Tc(e){for(;R!==null;){var r=R;if(r===e){R=null;break}var n=r.sibling;if(n!==null){n.return=r.return,R=n;break}R=r.return}}function Nc(e){for(;R!==null;){var r=R;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Sa(4,r)}catch(g){Ce(r,n,g)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var l=r.return;try{a.componentDidMount()}catch(g){Ce(r,l,g)}}var o=r.return;try{hi(r)}catch(g){Ce(r,o,g)}break;case 5:var u=r.return;try{hi(r)}catch(g){Ce(r,u,g)}}}catch(g){Ce(r,r.return,g)}if(r===e){R=null;break}var h=r.sibling;if(h!==null){h.return=r.return,R=h;break}R=r.return}}var Ju=Math.ceil,Ca=k.ReactCurrentDispatcher,xi=k.ReactCurrentOwner,ut=k.ReactCurrentBatchConfig,se=0,Ee=null,Ne=null,Fe=0,at=0,qr=Ot(0),Pe=0,jn=null,ur=0,ja=0,yi=0,kn=null,He=null,bi=0,Rr=1/0,It=null,ka=!1,vi=null,Kt=null,Ta=!1,Jt=null,Na=0,Tn=0,wi=null,Ua=-1,Pa=0;function We(){return(se&6)!==0?ke():Ua!==-1?Ua:Ua=ke()}function Zt(e){return(e.mode&1)===0?1:(se&2)!==0&&Fe!==0?Fe&-Fe:Bu.transition!==null?(Pa===0&&(Pa=bl()),Pa):(e=de,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e)}function wt(e,r,n,a){if(50<Tn)throw Tn=0,wi=null,Error(c(185));Qr(e,n,a),((se&2)===0||e!==Ee)&&(e===Ee&&((se&2)===0&&(ja|=n),Pe===4&&er(e,Fe)),Ge(e,a),n===1&&se===0&&(r.mode&1)===0&&(Rr=ke()+500,na&&Ht()))}function Ge(e,r){var n=e.callbackNode;Bd(e,r);var a=qn(e,e===Ee?Fe:0);if(a===0)n!==null&&gl(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&gl(n),r===1)e.tag===0?Fu(Pc.bind(null,e)):ho(Pc.bind(null,e)),Vu(function(){(se&6)===0&&Ht()}),n=null;else{switch(vl(a)){case 1:n=es;break;case 4:n=xl;break;case 16:n=Fn;break;case 536870912:n=yl;break;default:n=Fn}n=Ic(n,Uc.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Uc(e,r){if(Ua=-1,Pa=0,(se&6)!==0)throw Error(c(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var a=qn(e,e===Ee?Fe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||r)r=Va(e,a);else{r=a;var l=se;se|=2;var o=Ec();(Ee!==e||Fe!==r)&&(It=null,Rr=ke()+500,mr(e,r));do try{tp();break}catch(h){Vc(e,h)}while(!0);Rs(),Ca.current=o,se=l,Ne!==null?r=0:(Ee=null,Fe=0,r=Pe)}if(r!==0){if(r===2&&(l=ts(e),l!==0&&(a=l,r=Si(e,l))),r===1)throw n=jn,mr(e,0),er(e,a),Ge(e,ke()),n;if(r===6)er(e,a);else{if(l=e.current.alternate,(a&30)===0&&!Zu(l)&&(r=Va(e,a),r===2&&(o=ts(e),o!==0&&(a=o,r=Si(e,o))),r===1))throw n=jn,mr(e,0),er(e,a),Ge(e,ke()),n;switch(e.finishedWork=l,e.finishedLanes=a,r){case 0:case 1:throw Error(c(345));case 2:hr(e,He,It);break;case 3:if(er(e,a),(a&130023424)===a&&(r=bi+500-ke(),10<r)){if(qn(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){We(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Us(hr.bind(null,e,He,It),r);break}hr(e,He,It);break;case 4:if(er(e,a),(a&4194240)===a)break;for(r=e.eventTimes,l=-1;0<a;){var u=31-ft(a);o=1<<u,u=r[u],u>l&&(l=u),a&=~o}if(a=l,a=ke()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ju(a/1960))-a,10<a){e.timeoutHandle=Us(hr.bind(null,e,He,It),a);break}hr(e,He,It);break;case 5:hr(e,He,It);break;default:throw Error(c(329))}}}return Ge(e,ke()),e.callbackNode===n?Uc.bind(null,e):null}function Si(e,r){var n=kn;return e.current.memoizedState.isDehydrated&&(mr(e,r).flags|=256),e=Va(e,r),e!==2&&(r=He,He=n,r!==null&&Ci(r)),e}function Ci(e){He===null?He=e:He.push.apply(He,e)}function Zu(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!gt(o(),l))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function er(e,r){for(r&=~yi,r&=~ja,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-ft(r),a=1<<n;e[n]=-1,r&=~a}}function Pc(e){if((se&6)!==0)throw Error(c(327));$r();var r=qn(e,0);if((r&1)===0)return Ge(e,ke()),null;var n=Va(e,r);if(e.tag!==0&&n===2){var a=ts(e);a!==0&&(r=a,n=Si(e,a))}if(n===1)throw n=jn,mr(e,0),er(e,r),Ge(e,ke()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,hr(e,He,It),Ge(e,ke()),null}function ji(e,r){var n=se;se|=1;try{return e(r)}finally{se=n,se===0&&(Rr=ke()+500,na&&Ht())}}function pr(e){Jt!==null&&Jt.tag===0&&(se&6)===0&&$r();var r=se;se|=1;var n=ut.transition,a=de;try{if(ut.transition=null,de=1,e)return e()}finally{de=a,ut.transition=n,se=r,(se&6)===0&&Ht()}}function ki(){at=qr.current,fe(qr)}function mr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pu(n)),Ne!==null)for(n=Ne.return;n!==null;){var a=n;switch(Fs(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ta();break;case 3:Br(),fe(_e),fe(Be),Hs();break;case 5:Os(a);break;case 4:Br();break;case 13:fe(be);break;case 19:fe(be);break;case 10:$s(a.type._context);break;case 22:case 23:ki()}n=n.return}if(Ee=e,Ne=e=tr(e.current,null),Fe=at=r,Pe=0,jn=null,yi=ja=ur=0,He=kn=null,or!==null){for(r=0;r<or.length;r++)if(n=or[r],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,o=n.pending;if(o!==null){var u=o.next;o.next=l,a.next=u}n.pending=a}or=null}return e}function Vc(e,r){do{var n=Ne;try{if(Rs(),ma.current=xa,ha){for(var a=ve.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}ha=!1}if(dr=0,Ve=Ue=ve=null,yn=!1,bn=0,xi.current=null,n===null||n.return===null){Pe=1,jn=r,Ne=null;break}e:{var o=e,u=n.return,h=n,g=r;if(r=Fe,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var j=g,V=h,E=V.tag;if((V.mode&1)===0&&(E===0||E===11||E===15)){var U=V.alternate;U?(V.updateQueue=U.updateQueue,V.memoizedState=U.memoizedState,V.lanes=U.lanes):(V.updateQueue=null,V.memoizedState=null)}var q=tc(u);if(q!==null){q.flags&=-257,rc(q,u,h,o,r),q.mode&1&&ec(o,j,r),r=q,g=j;var L=r.updateQueue;if(L===null){var W=new Set;W.add(g),r.updateQueue=W}else L.add(g);break e}else{if((r&1)===0){ec(o,j,r),Ti();break e}g=Error(c(426))}}else if(ye&&h.mode&1){var Te=tc(u);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),rc(Te,u,h,o,r),Is(zr(g,h));break e}}o=g=zr(g,h),Pe!==4&&(Pe=2),kn===null?kn=[o]:kn.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var S=Jo(o,g,r);ko(o,S);break e;case 1:h=g;var y=o.type,C=o.stateNode;if((o.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Kt===null||!Kt.has(C)))){o.flags|=65536,r&=-r,o.lanes|=r;var D=Zo(o,h,r);ko(o,D);break e}}o=o.return}while(o!==null)}Dc(n)}catch(M){r=M,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function Ec(){var e=Ca.current;return Ca.current=xa,e===null?xa:e}function Ti(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ee===null||(ur&268435455)===0&&(ja&268435455)===0||er(Ee,Fe)}function Va(e,r){var n=se;se|=2;var a=Ec();(Ee!==e||Fe!==r)&&(It=null,mr(e,r));do try{ep();break}catch(l){Vc(e,l)}while(!0);if(Rs(),se=n,Ca.current=a,Ne!==null)throw Error(c(261));return Ee=null,Fe=0,Pe}function ep(){for(;Ne!==null;)Ac(Ne)}function tp(){for(;Ne!==null&&!Td();)Ac(Ne)}function Ac(e){var r=zc(e.alternate,e,at);e.memoizedProps=e.pendingProps,r===null?Dc(e):Ne=r,xi.current=null}function Dc(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Hu(n,r,at),n!==null){Ne=n;return}}else{if(n=Gu(n,r),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ne=null;return}}if(r=r.sibling,r!==null){Ne=r;return}Ne=r=e}while(r!==null);Pe===0&&(Pe=5)}function hr(e,r,n){var a=de,l=ut.transition;try{ut.transition=null,de=1,rp(e,r,n,a)}finally{ut.transition=l,de=a}return null}function rp(e,r,n,a){do $r();while(Jt!==null);if((se&6)!==0)throw Error(c(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zd(e,o),e===Ee&&(Ne=Ee=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ta||(Ta=!0,Ic(Fn,function(){return $r(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ut.transition,ut.transition=null;var u=de;de=1;var h=se;se|=4,xi.current=null,Yu(e,n),Cc(n,e),Su(Ts),Ln=!!ks,Ts=ks=null,e.current=n,Ku(n),Nd(),se=h,de=u,ut.transition=o}else e.current=n;if(Ta&&(Ta=!1,Jt=e,Na=l),o=e.pendingLanes,o===0&&(Kt=null),Vd(n.stateNode),Ge(e,ke()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)l=r[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(ka)throw ka=!1,e=vi,vi=null,e;return(Na&1)!==0&&e.tag!==0&&$r(),o=e.pendingLanes,(o&1)!==0?e===wi?Tn++:(Tn=0,wi=e):Tn=0,Ht(),null}function $r(){if(Jt!==null){var e=vl(Na),r=ut.transition,n=de;try{if(ut.transition=null,de=16>e?16:e,Jt===null)var a=!1;else{if(e=Jt,Jt=null,Na=0,(se&6)!==0)throw Error(c(331));var l=se;for(se|=4,R=e.current;R!==null;){var o=R,u=o.child;if((R.flags&16)!==0){var h=o.deletions;if(h!==null){for(var g=0;g<h.length;g++){var j=h[g];for(R=j;R!==null;){var V=R;switch(V.tag){case 0:case 11:case 15:Cn(8,V,o)}var E=V.child;if(E!==null)E.return=V,R=E;else for(;R!==null;){V=R;var U=V.sibling,q=V.return;if(yc(V),V===j){R=null;break}if(U!==null){U.return=q,R=U;break}R=q}}}var L=o.alternate;if(L!==null){var W=L.child;if(W!==null){L.child=null;do{var Te=W.sibling;W.sibling=null,W=Te}while(W!==null)}}R=o}}if((o.subtreeFlags&2064)!==0&&u!==null)u.return=o,R=u;else e:for(;R!==null;){if(o=R,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Cn(9,o,o.return)}var S=o.sibling;if(S!==null){S.return=o.return,R=S;break e}R=o.return}}var y=e.current;for(R=y;R!==null;){u=R;var C=u.child;if((u.subtreeFlags&2064)!==0&&C!==null)C.return=u,R=C;else e:for(u=y;R!==null;){if(h=R,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Sa(9,h)}}catch(M){Ce(h,h.return,M)}if(h===u){R=null;break e}var D=h.sibling;if(D!==null){D.return=h.return,R=D;break e}R=h.return}}if(se=l,Ht(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Bn,e)}catch{}a=!0}return a}finally{de=n,ut.transition=r}}return!1}function Fc(e,r,n){r=zr(n,r),r=Jo(e,r,1),e=Qt(e,r,1),r=We(),e!==null&&(Qr(e,1,r),Ge(e,r))}function Ce(e,r,n){if(e.tag===3)Fc(e,e,n);else for(;r!==null;){if(r.tag===3){Fc(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kt===null||!Kt.has(a))){e=zr(n,e),e=Zo(r,e,1),r=Qt(r,e,1),e=We(),r!==null&&(Qr(r,1,e),Ge(r,e));break}}r=r.return}}function np(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=We(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Fe&n)===n&&(Pe===4||Pe===3&&(Fe&130023424)===Fe&&500>ke()-bi?mr(e,0):yi|=n),Ge(e,r)}function Bc(e,r){r===0&&((e.mode&1)===0?r=1:(r=In,In<<=1,(In&130023424)===0&&(In=4194304)));var n=We();e=Ft(e,r),e!==null&&(Qr(e,r,n),Ge(e,n))}function ap(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Bc(e,n)}function sp(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(r),Bc(e,n)}var zc;zc=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||_e.current)Xe=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Xe=!1,Xu(e,r,n);Xe=(e.flags&131072)!==0}else Xe=!1,ye&&(r.flags&1048576)!==0&&fo(r,sa,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;va(e,r),e=r.pendingProps;var l=Ur(r,Be.current);Fr(r,n),l=Ys(null,r,a,e,l,n);var o=Ks();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Oe(a)?(o=!0,ra(r)):o=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ms(r),l.updater=ya,r.stateNode=l,l._reactInternals=r,ni(r,a,e,n),r=li(null,r,a,!0,o,n)):(r.tag=0,ye&&o&&Ds(r),Le(null,r,l,n),r=r.child),r;case 16:a=r.elementType;e:{switch(va(e,r),e=r.pendingProps,l=a._init,a=l(a._payload),r.type=a,l=r.tag=lp(a),e=yt(a,e),l){case 0:r=ii(null,r,a,e,n);break e;case 1:r=oc(null,r,a,e,n);break e;case 11:r=nc(null,r,a,e,n);break e;case 14:r=ac(null,r,a,yt(a.type,e),n);break e}throw Error(c(306,a,""))}return r;case 0:return a=r.type,l=r.pendingProps,l=r.elementType===a?l:yt(a,l),ii(e,r,a,l,n);case 1:return a=r.type,l=r.pendingProps,l=r.elementType===a?l:yt(a,l),oc(e,r,a,l,n);case 3:e:{if(cc(r),e===null)throw Error(c(387));a=r.pendingProps,o=r.memoizedState,l=o.element,jo(e,r),ua(r,a,null,n);var u=r.memoizedState;if(a=u.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){l=zr(Error(c(423)),r),r=dc(e,r,a,n,l);break e}else if(a!==l){l=zr(Error(c(424)),r),r=dc(e,r,a,n,l);break e}else for(nt=_t(r.stateNode.containerInfo.firstChild),rt=r,ye=!0,xt=null,n=So(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),a===l){r=zt(e,r,n);break e}Le(e,r,a,n)}r=r.child}return r;case 5:return No(r),e===null&&zs(r),a=r.type,l=r.pendingProps,o=e!==null?e.memoizedProps:null,u=l.children,Ns(a,l)?u=null:o!==null&&Ns(a,o)&&(r.flags|=32),lc(e,r),Le(e,r,u,n),r.child;case 6:return e===null&&zs(r),null;case 13:return uc(e,r,n);case 4:return _s(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=Ar(r,null,a,n):Le(e,r,a,n),r.child;case 11:return a=r.type,l=r.pendingProps,l=r.elementType===a?l:yt(a,l),nc(e,r,a,l,n);case 7:return Le(e,r,r.pendingProps,n),r.child;case 8:return Le(e,r,r.pendingProps.children,n),r.child;case 12:return Le(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,l=r.pendingProps,o=r.memoizedProps,u=l.value,me(oa,a._currentValue),a._currentValue=u,o!==null)if(gt(o.value,u)){if(o.children===l.children&&!_e.current){r=zt(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var h=o.dependencies;if(h!==null){u=o.child;for(var g=h.firstContext;g!==null;){if(g.context===a){if(o.tag===1){g=Bt(-1,n&-n),g.tag=2;var j=o.updateQueue;if(j!==null){j=j.shared;var V=j.pending;V===null?g.next=g:(g.next=V.next,V.next=g),j.pending=g}}o.lanes|=n,g=o.alternate,g!==null&&(g.lanes|=n),Ls(o.return,n,r),h.lanes|=n;break}g=g.next}}else if(o.tag===10)u=o.type===r.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(c(341));u.lanes|=n,h=u.alternate,h!==null&&(h.lanes|=n),Ls(u,n,r),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===r){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}Le(e,r,l.children,n),r=r.child}return r;case 9:return l=r.type,a=r.pendingProps.children,Fr(r,n),l=ct(l),a=a(l),r.flags|=1,Le(e,r,a,n),r.child;case 14:return a=r.type,l=yt(a,r.pendingProps),l=yt(a.type,l),ac(e,r,a,l,n);case 15:return sc(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,l=r.pendingProps,l=r.elementType===a?l:yt(a,l),va(e,r),r.tag=1,Oe(a)?(e=!0,ra(r)):e=!1,Fr(r,n),Yo(r,a,l),ni(r,a,l,n),li(null,r,a,!0,e,n);case 19:return mc(e,r,n);case 22:return ic(e,r,n)}throw Error(c(156,r.tag))};function Ic(e,r){return fl(e,r)}function ip(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,r,n,a){return new ip(e,r,n,a)}function Ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lp(e){if(typeof e=="function")return Ni(e)?1:0;if(e!=null){if(e=e.$$typeof,e===St)return 11;if(e===Ct)return 14}return 2}function tr(e,r){var n=e.alternate;return n===null?(n=pt(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ea(e,r,n,a,l,o){var u=2;if(a=e,typeof e=="function")Ni(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ue:return fr(n.children,l,o,r);case je:u=8,l|=8;break;case Je:return e=pt(12,n,r,l|2),e.elementType=Je,e.lanes=o,e;case Ze:return e=pt(13,n,r,l),e.elementType=Ze,e.lanes=o,e;case ht:return e=pt(19,n,r,l),e.elementType=ht,e.lanes=o,e;case Se:return Aa(n,l,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mt:u=10;break e;case Pt:u=9;break e;case St:u=11;break e;case Ct:u=14;break e;case Me:u=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return r=pt(u,n,r,l),r.elementType=e,r.type=a,r.lanes=o,r}function fr(e,r,n,a){return e=pt(7,e,a,r),e.lanes=n,e}function Aa(e,r,n,a){return e=pt(22,e,a,r),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function Ui(e,r,n){return e=pt(6,e,null,r),e.lanes=n,e}function Pi(e,r,n){return r=pt(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function op(e,r,n,a,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rs(0),this.expirationTimes=rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vi(e,r,n,a,l,o,u,h,g){return e=new op(e,r,n,h,g),r===1?(r=1,o===!0&&(r|=8)):r=0,o=pt(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ms(o),e}function cp(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function qc(e){if(!e)return Xt;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(c(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Oe(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(Oe(n))return po(e,n,r)}return r}function Rc(e,r,n,a,l,o,u,h,g){return e=Vi(n,a,!0,e,l,o,u,h,g),e.context=qc(null),n=e.current,a=We(),l=Zt(n),o=Bt(a,l),o.callback=r??null,Qt(n,o,l),e.current.lanes=l,Qr(e,l,a),Ge(e,a),e}function Da(e,r,n,a){var l=r.current,o=We(),u=Zt(l);return n=qc(n),r.context===null?r.context=n:r.pendingContext=n,r=Bt(o,u),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=Qt(l,r,u),e!==null&&(wt(e,l,u,o),da(e,l,u)),u}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $c(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Ei(e,r){$c(e,r),(e=e.alternate)&&$c(e,r)}function dp(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ai(e){this._internalRoot=e}Ba.prototype.render=Ai.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(c(409));Da(e,r,null,null)},Ba.prototype.unmount=Ai.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;pr(function(){Da(null,e,null,null)}),r[Vt]=null}};function Ba(e){this._internalRoot=e}Ba.prototype.unstable_scheduleHydration=function(e){if(e){var r=Cl();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Lt.length&&r!==0&&r<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Tl(e)}};function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wc(){}function up(e,r,n,a,l){if(l){if(typeof a=="function"){var o=a;a=function(){var j=Fa(u);o.call(j)}}var u=Rc(r,a,e,0,null,!1,!1,"",Wc);return e._reactRootContainer=u,e[Vt]=u.current,dn(e.nodeType===8?e.parentNode:e),pr(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var h=a;a=function(){var j=Fa(g);h.call(j)}}var g=Vi(e,0,!1,null,null,!1,!1,"",Wc);return e._reactRootContainer=g,e[Vt]=g.current,dn(e.nodeType===8?e.parentNode:e),pr(function(){Da(r,g,n,a)}),g}function Ia(e,r,n,a,l){var o=n._reactRootContainer;if(o){var u=o;if(typeof l=="function"){var h=l;l=function(){var g=Fa(u);h.call(g)}}Da(r,u,e,l)}else u=up(n,r,e,l,a);return Fa(u)}wl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Gr(r.pendingLanes);n!==0&&(ns(r,n|1),Ge(r,ke()),(se&6)===0&&(Rr=ke()+500,Ht()))}break;case 13:pr(function(){var a=Ft(e,1);if(a!==null){var l=We();wt(a,e,1,l)}}),Ei(e,1)}},as=function(e){if(e.tag===13){var r=Ft(e,134217728);if(r!==null){var n=We();wt(r,e,134217728,n)}Ei(e,134217728)}},Sl=function(e){if(e.tag===13){var r=Zt(e),n=Ft(e,r);if(n!==null){var a=We();wt(n,e,r,a)}Ei(e,r)}},Cl=function(){return de},jl=function(e,r){var n=de;try{return de=e,r()}finally{de=n}},Ya=function(e,r,n){switch(r){case"input":if(Wa(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var l=ea(a);if(!l)throw Error(c(90));Gi(a),Wa(a,l)}}}break;case"textarea":Zi(e,n);break;case"select":r=n.value,r!=null&&gr(e,!!n.multiple,r,!1)}},ol=ji,cl=pr;var pp={usingClientEntryPoint:!1,Events:[mn,Tr,ea,il,ll,ji]},Nn={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mp={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ml(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Bn=qa.inject(mp),jt=qa}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp,Qe.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Di(r))throw Error(c(200));return cp(e,r,null,n)},Qe.createRoot=function(e,r){if(!Di(e))throw Error(c(299));var n=!1,a="",l=Lc;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=Vi(e,1,!1,null,null,n,!1,a,l),e[Vt]=r.current,dn(e.nodeType===8?e.parentNode:e),new Ai(r)},Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ml(r),e=e===null?null:e.stateNode,e},Qe.flushSync=function(e){return pr(e)},Qe.hydrate=function(e,r,n){if(!za(r))throw Error(c(200));return Ia(null,e,r,!0,n)},Qe.hydrateRoot=function(e,r,n){if(!Di(e))throw Error(c(405));var a=n!=null&&n.hydratedSources||null,l=!1,o="",u=Lc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),r=Rc(r,null,e,1,n??null,l,!1,o,u),e[Vt]=r.current,dn(e),a)for(e=0;e<a.length;e++)n=a[e],l=n._getVersion,l=l(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,l]:r.mutableSourceEagerHydrationData.push(n,l);return new Ba(r)},Qe.render=function(e,r,n){if(!za(r))throw Error(c(200));return Ia(null,e,r,!1,n)},Qe.unmountComponentAtNode=function(e){if(!za(e))throw Error(c(40));return e._reactRootContainer?(pr(function(){Ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},Qe.unstable_batchedUpdates=ji,Qe.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!za(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ia(e,r,n,!1,a)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var Yc;function wp(){if(Yc)return zi.exports;Yc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(d){console.error(d)}}return i(),zi.exports=vp(),zi.exports}var Kc;function Sp(){if(Kc)return Ra;Kc=1;var i=wp();return Ra.createRoot=i.createRoot,Ra.hydrateRoot=i.hydrateRoot,Ra}var Cp=Sp();const jp=id(Cp),kp=[{id:"introduction",label:"Introduction",icon:"bookmark"},{id:"quickstart",label:"Quick Start Guide",icon:"bookmark"},{id:"tokens",label:"Token",icon:"folder",children:[{id:"colors",label:"Colors",icon:"folder",children:[{id:"colors-primary",label:"Primary",icon:"layers"},{id:"colors-secondary",label:"Secondary",icon:"layers"},{id:"colors-tertiary",label:"Tertiary",icon:"layers"},{id:"colors-red",label:"Red (Error)",icon:"layers"},{id:"colors-orange",label:"Orange (Warning)",icon:"layers"},{id:"colors-yellow",label:"Yellow",icon:"layers"},{id:"colors-gold",label:"Gold",icon:"layers"},{id:"colors-green",label:"Green (Success)",icon:"layers"},{id:"colors-lime",label:"Lime",icon:"layers"},{id:"colors-blue",label:"Blue (Info)",icon:"layers"},{id:"colors-skyblue",label:"Sky Blue",icon:"layers"},{id:"colors-cyan",label:"Cyan",icon:"layers"},{id:"colors-purple",label:"Purple",icon:"layers"},{id:"colors-pink",label:"Pink",icon:"layers"},{id:"colors-neutral",label:"Neutral",icon:"layers"},{id:"colors-semantic",label:"Semantic Tokens",icon:"layers"}]},{id:"typography",label:"Typography",icon:"folder",children:[{id:"typography-header",label:"Header",icon:"layers"},{id:"typography-display",label:"Display",icon:"layers"},{id:"typography-body",label:"Body",icon:"layers"},{id:"typography-label",label:"Label",icon:"layers"},{id:"typography-title",label:"Title",icon:"layers"},{id:"typography-usage",label:"How to use",icon:"layers"}]},{id:"shadow",label:"Shadow",icon:"folder",children:[{id:"shadow-scale",label:"Scale",icon:"layers"},{id:"shadow-usage",label:"How to use",icon:"layers"}]},{id:"dimensions",label:"Dimensions",icon:"folder",children:[{id:"dimensions-spacing",label:"Spacing",icon:"layers"},{id:"dimensions-radius",label:"Border Radius",icon:"layers"},{id:"dimensions-border",label:"Border Width",icon:"layers"},{id:"dimensions-usage",label:"How to use",icon:"layers"}]}]},{id:"components",label:"Components",icon:"folder",children:[{id:"accordion-grouping",label:"Accordion",icon:"folder",children:[{id:"accordion-basic",label:"Basic",icon:"layers"},{id:"accordion-group",label:"AccordionGroup",icon:"layers"}]},{id:"app-header-group",label:"App Header",icon:"folder",children:[{id:"app-header-basic",label:"Introduction",icon:"layers"},{id:"app-header-back",label:"Back Button",icon:"layers"},{id:"app-header-filled",label:"Filled",icon:"layers"},{id:"app-header-custom-leading",label:"Custom Leading Widgets",icon:"layers"}]},{id:"avatar-parent-group",label:"Avatar",icon:"folder",children:[{id:"avatar-basic",label:"Basic",icon:"layers"},{id:"avatar-status",label:"Status Avatar",icon:"layers"},{id:"avatar-profile",label:"Profile Badges & Actions",icon:"layers"},{id:"avatar-group",label:"Avatar Group",icon:"layers"}]},{id:"badge-parent-group",label:"Badge",icon:"folder",children:[{id:"badge-basic",label:"Basic & Dot",icon:"layers"},{id:"badge-count",label:"Count Badge",icon:"layers"},{id:"badge-standalone",label:"Standalone Variants",icon:"layers"},{id:"badge-semantic",label:"Semantic Colors & Border",icon:"layers"},{id:"badge-overlay",label:"Overlay & Placement",icon:"layers"}]},{id:"card-parent-group",label:"Card",icon:"folder",children:[{id:"card-basic",label:"Basic Content",icon:"layers"},{id:"card-actions",label:"With Actions",icon:"layers"},{id:"card-horizontal",label:"Horizontal Layout",icon:"layers"},{id:"card-media",label:"With Media",icon:"layers"},{id:"card-rich",label:"Rich Card",icon:"layers"},{id:"card-rich-horizontal",label:"Rich Card (Horizontal)",icon:"layers"}]},{id:"button-group",label:"Button",icon:"folder",children:[{id:"button-introduction",label:"Introduction",icon:"layers"},{id:"button-variants",label:"Variants",icon:"layers"},{id:"button-sizes",label:"Sizes",icon:"layers"},{id:"button-showcase",label:"Showcase",icon:"layers"},{id:"button-icon-button",label:"IconButton",icon:"layers"}]},{id:"checkbox-group",label:"Checkbox",icon:"folder",children:[{id:"checkbox-basic",label:"Basic & States",icon:"layers"},{id:"checkbox-sizes",label:"Sizes",icon:"layers"},{id:"checkbox-tristate",label:"Tristate (Indeterminate)",icon:"layers"}]},{id:"chips-parent-group",label:"Chips",icon:"folder",children:[{id:"chips-basic",label:"Choice & Filter Chips",icon:"layers"},{id:"chips-action",label:"Suggestion & Action Chips",icon:"layers"},{id:"chips-input",label:"Input Chips",icon:"layers"}]},{id:"chip-group-parent",label:"Chip Group",icon:"folder",children:[{id:"chip-group-wrap",label:"Wrap & Horizontal Groups",icon:"layers"},{id:"chip-group-input-field",label:"Input Chip Field",icon:"layers"}]},{id:"date-picker-group",label:"Date Picker",icon:"folder",children:[{id:"date-picker-single",label:"Single Date",icon:"layers"},{id:"date-picker-range",label:"Date Range",icon:"layers"}]},{id:"divider-group",label:"Divider",icon:"folder",children:[{id:"divider-basic",label:"Basic & Indents",icon:"layers"},{id:"divider-styles",label:"Solid, Dashed & Dotted",icon:"layers"},{id:"divider-label",label:"With Center Label",icon:"layers"},{id:"divider-vertical",label:"Vertical Orientation",icon:"layers"}]},{id:"status-banner-group",label:"Draft Status",icon:"folder",children:[{id:"status-banner-basic",label:"Basic Banners",icon:"layers"},{id:"status-banner-draft",label:"Draft & Application Statuses",icon:"layers"},{id:"status-banner-variants",label:"All Color Variants",icon:"layers"}]},{id:"status-pipeline-group",label:"Status Pipeline",icon:"folder",children:[{id:"status-pipeline-vertical-group",label:"Vertical",icon:"folder",children:[{id:"status-pipeline-vertical",label:"Basic",icon:"layers"},{id:"status-pipeline-vertical-states",label:"All States",icon:"layers"},{id:"status-pipeline-vertical-sizes",label:"Sizes",icon:"layers"},{id:"status-pipeline-vertical-colors",label:"Custom Colors",icon:"layers"},{id:"status-pipeline-vertical-labels",label:"Labels Only",icon:"layers"},{id:"status-pipeline-vertical-nolabels",label:"Circles Only",icon:"layers"}]},{id:"status-pipeline-horizontal-group",label:"Horizontal",icon:"folder",children:[{id:"status-pipeline-horizontal",label:"Basic",icon:"layers"},{id:"status-pipeline-horizontal-states",label:"All States",icon:"layers"},{id:"status-pipeline-horizontal-sizes",label:"Sizes",icon:"layers"},{id:"status-pipeline-horizontal-colors",label:"Custom Colors",icon:"layers"},{id:"status-pipeline-horizontal-labels",label:"Labels Only",icon:"layers"},{id:"status-pipeline-horizontal-nolabels",label:"Circles Only",icon:"layers"}]}]},{id:"tag-group",label:"Tag",icon:"folder",children:[{id:"tag-basic",label:"Basic",icon:"layers"},{id:"tag-shapes",label:"Shapes",icon:"layers"},{id:"tag-styles",label:"Styles",icon:"layers"},{id:"tag-colors",label:"Color Schemes",icon:"layers"},{id:"tag-leading",label:"Leading Content",icon:"layers"},{id:"tag-dismissable",label:"Dismissible",icon:"layers"},{id:"tag-pill",label:"Unified Pill Tag",icon:"layers"}]},{id:"textarea-group",label:"Text Area",icon:"folder",children:[{id:"textarea-basic",label:"Basic",icon:"layers"},{id:"textarea-label",label:"Label & Required",icon:"layers"},{id:"textarea-status",label:"Validation Status",icon:"layers"},{id:"textarea-count",label:"Character Count",icon:"layers"},{id:"textarea-disabled",label:"Disabled & Read Only",icon:"layers"}]},{id:"timepicker-group",label:"Time Picker",icon:"folder",children:[{id:"timepicker-basic",label:"Basic",icon:"layers"},{id:"timepicker-label",label:"Label & Required",icon:"layers"},{id:"timepicker-status",label:"Validation Status",icon:"layers"},{id:"timepicker-interval",label:"Minute Interval",icon:"layers"},{id:"timepicker-initial",label:"Initial Time",icon:"layers"},{id:"timepicker-disabled",label:"Disabled",icon:"layers"}]},{id:"feedback-group",label:"Feedback",icon:"folder",children:[{id:"feedbackformstar",label:"feedbackformstar",icon:"layers"},{id:"feedbackformcsat",label:"feedbackformcsat",icon:"layers"},{id:"feedbackformnps",label:"feedbackformnps",icon:"layers"}]},{id:"empty-state-group",label:"Empty State",icon:"folder",children:[{id:"empty-state-basic",label:"Basic",icon:"layers"},{id:"empty-state-variants",label:"Variants",icon:"layers"},{id:"empty-state-action",label:"With Action",icon:"layers"}]},{id:"dropdown-group",label:"Dropdown",icon:"folder",children:[{id:"dropdown-basic",label:"Basic Single Select",icon:"layers"},{id:"dropdown-multi",label:"Multi-Select Mode",icon:"layers"},{id:"dropdown-search",label:"Searchable Dropdown",icon:"layers"},{id:"dropdown-status",label:"Form Status Validation",icon:"layers"}]},{id:"fileupload-group",label:"FileUpload",icon:"folder",children:[{id:"fileupload-basic",label:"Basic",icon:"layers"},{id:"fileupload-dashed",label:"Dashed Border",icon:"layers"},{id:"fileupload-preloaded",label:"Preloaded Files",icon:"layers"}]},{id:"input-group",label:"Input Field",icon:"folder",children:[{id:"input-basic",label:"Basic",icon:"layers"},{id:"input-status",label:"Validation Status",icon:"layers"},{id:"input-password",label:"Password",icon:"layers"},{id:"input-icons",label:"Icons",icon:"layers"},{id:"input-prefix-postfix",label:"Prefix & Postfix",icon:"layers"},{id:"input-required-disabled",label:"Required & Disabled",icon:"layers"}]},{id:"input-aadhaar-group",label:"Input Aadhaar",icon:"folder",children:[{id:"input-aadhaar-basic",label:"Basic",icon:"layers"},{id:"input-aadhaar-varients",label:"Varients",icon:"layers"}]},{id:"input-pan-group",label:"Input Pan",icon:"folder",children:[{id:"input-pan-basic",label:"Basic",icon:"layers"},{id:"input-pan-varients",label:"Varients",icon:"layers"}]},{id:"input-otp-group",label:"Input Otp",icon:"folder",children:[{id:"input-otp-basic",label:"Basic",icon:"layers"},{id:"input-otp-varients",label:"Varients",icon:"layers"}]},{id:"carousel-group",label:"Carousel",icon:"folder",children:[{id:"carousel-intro",label:"Introduction",icon:"layers"},{id:"carousel-rich-hero",label:"Rich Hero Carousel",icon:"layers"},{id:"carousel-image",label:"Image Carousel",icon:"layers"}]},{id:"journey-timeline-group",label:"Journey Timeline",icon:"folder",children:[{id:"journey-timeline-basic",label:"Basic",icon:"layers"},{id:"journey-timeline-horizontal",label:"Horizontal",icon:"layers"},{id:"journey-timeline-custom",label:"Custom Status",icon:"layers"}]},{id:"link-group",label:"Link",icon:"folder",children:[{id:"link-basic",label:"Basic",icon:"layers"},{id:"link-text",label:"Text Link",icon:"layers"},{id:"link-custom-child",label:"Custom Child",icon:"layers"}]},{id:"modal-group",label:"Modal",icon:"folder",children:[{id:"modal-full-preview",label:"Full Preview",icon:"layers"},{id:"modal-header-left",label:"Header Left",icon:"layers"},{id:"modal-header-centered",label:"Header Centered",icon:"layers"}]},{id:"spinner-group",label:"Spinner",icon:"folder",children:[{id:"spinner-basic",label:"Basic",icon:"layers"}]},{id:"pagination-group",label:"Pagination",icon:"folder",children:[{id:"pagination-default-arrows",label:"Default Arrows",icon:"layers"},{id:"pagination-capsule-arrows",label:"Capsule Arrows",icon:"layers"},{id:"pagination-capsule-dots",label:"Capsule Dots",icon:"layers"},{id:"pagination-arrows-right",label:"Arrows Right",icon:"layers"}]},{id:"progress-indicator-group",label:"Progress Indicator",icon:"folder",children:[{id:"progress-linear",label:"Linear",icon:"layers"},{id:"progress-circular",label:"Circular",icon:"layers"},{id:"progress-half-circle",label:"Half Circle",icon:"layers"},{id:"progress-animated",label:"Animated",icon:"layers"}]},{id:"progress-sla-group",label:"Progress SLA Indicator",icon:"folder",children:[{id:"progress-sla-circular",label:"Circular",icon:"layers"},{id:"progress-sla-linear",label:"Linear",icon:"layers"}]},{id:"popover-group",label:"Popover",icon:"folder",children:[{id:"popover-basic",label:"Basic",icon:"layers"},{id:"popover-rich",label:"Rich",icon:"layers"},{id:"popover-placements",label:"Placements",icon:"layers"},{id:"popover-custom-content",label:"Custom Content",icon:"layers"},{id:"popover-trigger",label:"Trigger",icon:"layers"}]},{id:"radio-group",label:"Radio Button",icon:"folder",children:[{id:"radio-basic",label:"Basic",icon:"layers"},{id:"radio-sizes",label:"Sizes",icon:"layers"},{id:"radio-status",label:"Status",icon:"layers"}]},{id:"result-list-group",label:"Result List",icon:"folder",children:[{id:"result-list-basic",label:"Basic",icon:"layers"},{id:"result-list-metadata",label:"Metadata",icon:"layers"},{id:"result-list-expanded",label:"Expanded",icon:"layers"},{id:"result-list-rejected",label:"Rejected",icon:"layers"}]},{id:"search-group",label:"Search Field",icon:"folder",children:[{id:"search-basic",label:"Basic",icon:"layers"},{id:"search-submit",label:"Search with Submit",icon:"layers"},{id:"search-autocomplete",label:"Autocomplete",icon:"layers"},{id:"search-status",label:"Status",icon:"layers"}]},{id:"slider-group",label:"Slider",icon:"folder",children:[{id:"slider-basic",label:"Basic",icon:"layers"},{id:"slider-sizes",label:"Sizes",icon:"layers"},{id:"slider-steps",label:"Steps",icon:"layers"},{id:"slider-custom-range",label:"Custom Range",icon:"layers"},{id:"slider-formatter",label:"Value Formatter",icon:"layers"},{id:"slider-disabled",label:"Disabled",icon:"layers"}]},{id:"stepper-group",label:"Stepper",icon:"folder",children:[{id:"stepper-horizontal",label:"Horizontal",icon:"layers"},{id:"stepper-horizontal-dashed",label:"Horizontal (Dashed)",icon:"layers"},{id:"stepper-vertical",label:"Vertical",icon:"layers"},{id:"stepper-error",label:"Error State",icon:"layers"},{id:"stepper-bottom-lines",label:"Horizontal (Bottom Line)",icon:"layers"},{id:"stepper-bottom-background",label:"Bottom Lines + Background",icon:"layers"},{id:"stepper-edge-alignment",label:"Edge Label Alignment",icon:"layers"},{id:"compact-stepper-group",label:"Compact Stepper",icon:"folder",children:[{id:"compact-stepper-linear",label:"Linear",icon:"layers"},{id:"compact-stepper-right-aligned",label:"Right Aligned",icon:"layers"},{id:"compact-stepper-centered",label:"Centered",icon:"layers"},{id:"compact-stepper-centered-between",label:"Centered (Arrows Outside)",icon:"layers"},{id:"compact-stepper-split",label:"Split",icon:"layers"}]}]},{id:"tooltip-group",label:"Tooltip",icon:"folder",children:[{id:"tooltip-introduction",label:"Introduction",icon:"layers"},{id:"tooltip-basic",label:"Placements",icon:"layers"},{id:"tooltip-interactive",label:"Interactive",icon:"layers"},{id:"tooltip-variants",label:"All Variants",icon:"layers"},{id:"tooltip-rich",label:"Rich Tooltip",icon:"layers"}]},{id:"switch-group",label:"Switch",icon:"folder",children:[{id:"switch-basic",label:"Basic & Sizes",icon:"layers"},{id:"switch-labels",label:"Label Positions",icon:"layers"},{id:"switch-status",label:"Status Descriptions",icon:"layers"},{id:"switch-required",label:"Required & Icons",icon:"layers"},{id:"switch-disabled",label:"Disabled",icon:"layers"}]},{id:"toast-group",label:"Toast",icon:"folder",children:[{id:"toast-basic",label:"Categories",icon:"layers"},{id:"toast-stacked",label:"Stacked Layout",icon:"layers"},{id:"toast-actions",label:"Action & Close",icon:"layers"},{id:"toast-custom",label:"Customization",icon:"layers"},{id:"toast-provider",label:"Provider Demo",icon:"layers"}]},{id:"timeslot-group",label:"Time Slot",icon:"folder",children:[{id:"timeslot-introduction",label:"Introduction",icon:"layers"},{id:"timeslot-basic",label:"Booking (Expanded)",icon:"layers"},{id:"timeslot-compact",label:"Compact View",icon:"layers"},{id:"timeslot-json",label:"JSON Data Source",icon:"layers"}]}]},{id:"patterns",label:"Patterns",icon:"folder",children:[{id:"forms",label:"Forms",icon:"assignment"},{id:"headers",label:"Headers",icon:"web"}]}],Tp=({activePage:i,onNavigate:d,isDark:c,onToggleTheme:m,isMobileOpen:f=!1,onCloseMobile:b})=>{const[x,s]=T.useState({}),[w,p]=T.useState(""),[N,A]=T.useState(260),[B,I]=T.useState(!1);Mi.useEffect(()=>{!i||i==="introduction"||i==="quickstart"||(i.startsWith("colors-")?s(k=>({...k,tokens:!0,colors:!0})):i.startsWith("typography")?s(k=>({...k,tokens:!0,typography:!0})):i.startsWith("shadow")?s(k=>({...k,tokens:!0,shadow:!0})):i.startsWith("dimensions")||["spacing","radius"].includes(i)?s(k=>({...k,tokens:!0,dimensions:!0})):["forms","headers"].includes(i)?s(k=>({...k,patterns:!0})):i.startsWith("button")?s(k=>({...k,components:!0,"button-group":!0})):i.startsWith("date-picker")?s(k=>({...k,components:!0,"date-picker-group":!0})):i.startsWith("modal")?s(k=>({...k,components:!0,"modal-group":!0})):i.startsWith("accordion")?s(k=>({...k,components:!0,"accordion-grouping":!0})):i.startsWith("app-header")?s(k=>({...k,components:!0,"app-header-group":!0})):i.startsWith("avatar")?s(k=>({...k,components:!0,"avatar-parent-group":!0})):i.startsWith("card")?s(k=>({...k,components:!0,"card-parent-group":!0})):i.startsWith("carousel")?s(k=>({...k,components:!0,"carousel-group":!0})):i.startsWith("journey-timeline")?s(k=>({...k,components:!0,"journey-timeline-group":!0})):i.startsWith("link")?s(k=>({...k,components:!0,"link-group":!0})):i.startsWith("pagination")?s(k=>({...k,components:!0,"pagination-group":!0})):i.startsWith("progress-sla")?s(k=>({...k,components:!0,"progress-sla-group":!0})):i.startsWith("progress")?s(k=>({...k,components:!0,"progress-indicator-group":!0})):i.startsWith("tooltip")?s(k=>({...k,components:!0,"tooltip-group":!0})):i.startsWith("popover")?s(k=>({...k,components:!0,"popover-group":!0})):i.startsWith("radio")?s(k=>({...k,components:!0,"radio-group":!0})):i.startsWith("result-list")?s(k=>({...k,components:!0,"result-list-group":!0})):i.startsWith("search")?s(k=>({...k,components:!0,"search-group":!0})):i.startsWith("badge")?s(k=>({...k,components:!0,"badge-parent-group":!0})):i.startsWith("input-aadhaar")?s(k=>({...k,components:!0,"input-aadhaar-group":!0})):i.startsWith("input-pan")?s(k=>({...k,components:!0,"input-pan-group":!0})):i.startsWith("input-otp")?s(k=>({...k,components:!0,"input-otp-group":!0})):i.startsWith("input")?s(k=>({...k,components:!0,"input-group":!0})):i.startsWith("fileupload")?s(k=>({...k,components:!0,"fileupload-group":!0})):i.startsWith("feedbackform")?s(k=>({...k,components:!0,"feedback-group":!0})):i.startsWith("empty-state")?s(k=>({...k,components:!0,"empty-state-group":!0})):i.startsWith("status-pipeline")?s(k=>({...k,components:!0,"status-pipeline-group":!0,[i.startsWith("status-pipeline-horizontal")?"status-pipeline-horizontal-group":"status-pipeline-vertical-group"]:!0})):i.startsWith("timepicker")?s(k=>({...k,components:!0,"timepicker-group":!0})):i.startsWith("toast")?s(k=>({...k,components:!0,"toast-group":!0})):i.startsWith("textarea")?s(k=>({...k,components:!0,"textarea-group":!0})):i.startsWith("tag")?s(k=>({...k,components:!0,"tag-group":!0})):i.startsWith("compact-stepper")?s(k=>({...k,components:!0,"stepper-group":!0,"compact-stepper-group":!0})):i.startsWith("stepper")?s(k=>({...k,components:!0,"stepper-group":!0})):i.startsWith("timeslot")?s(k=>({...k,components:!0,"timeslot-group":!0})):i.startsWith("switch")?s(k=>({...k,components:!0,"switch-group":!0})):i.startsWith("slider")?s(k=>({...k,components:!0,"slider-group":!0})):["input-field","checkbox","radio-button","switch","card","badge","avatar","toast"].includes(i)&&s(k=>({...k,components:!0})))},[i]);const F=T.useCallback(k=>{k.preventDefault(),I(!0);const we=k.clientX,ge=N,ue=Je=>{const mt=ge+(Je.clientX-we),Pt=Math.min(Math.max(mt,180),500);A(Pt)},je=()=>{I(!1),window.removeEventListener("mousemove",ue),window.removeEventListener("mouseup",je)};window.addEventListener("mousemove",ue),window.addEventListener("mouseup",je)},[N]),Y=()=>{A(260)},ae=k=>{s(we=>({...we,[k]:!we[k]}))},re=k=>{if(!w.trim())return k;const we=w.toLowerCase(),ge=ue=>ue.map(je=>{if(je.children){const Je=ge(je.children);if(Je.length>0)return{...je,children:Je}}return je.label.toLowerCase().includes(we)?je:null}).filter(Boolean);return ge(k)},Re=(k,we)=>{if(k.children){const ge=x[k.id]||!!w.trim();return t.jsxs("div",{children:[t.jsxs("button",{className:`nav-group-header ${we>0?"nav-group-header-nested":""}`,onClick:()=>{if(ae(k.id),k.children&&k.children.length>0){const ue=k.children[0];ue.children&&ue.children.length>0?d(ue.children[0].id):ue.id&&d(ue.id)}},children:[t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"material-symbols-outlined nav-icon",children:ge?"folder_open":k.icon}),k.label]}),t.jsx("span",{className:"material-symbols-outlined chevron-icon",style:{fontSize:16,transform:ge?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"expand_more"})]}),t.jsx("div",{className:`nav-group-children ${ge?"expanded":""}`,children:k.children.map(ue=>Re(ue,we+1))})]},k.id)}return t.jsxs("button",{className:`nav-item ${we>0?"nav-item-nested":""} ${i===k.id?"active":""}`,onClick:()=>d(k.id),children:[t.jsx("span",{className:"material-symbols-outlined nav-icon",children:k.icon}),k.label]},k.id)},$e=re(kp);return t.jsxs("aside",{className:`sidebar ${c?"dark":""} ${B?"resizing":""} ${f?"mobile-open":""}`,style:{width:N,minWidth:N,maxWidth:N,flexShrink:0,position:"relative"},children:[t.jsx("div",{className:"bottom-sheet-handle-wrapper",onClick:b,children:t.jsx("div",{className:"bottom-sheet-handle"})}),t.jsxs("div",{className:"sidebar-header",children:[t.jsx("div",{className:"sidebar-logo-img-wrapper",onClick:()=>d("introduction"),style:{cursor:"pointer"},children:t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"sidebar-logo-img",style:{height:28,width:"auto",display:"block"}})}),t.jsx("button",{className:"theme-toggle-btn",onClick:m,title:c?"Switch to light mode":"Switch to dark mode",children:t.jsx("span",{className:"material-symbols-outlined theme-toggle-icon",children:c?"light_mode":"dark_mode"})})]}),t.jsx("div",{className:"sidebar-search",children:t.jsxs("div",{className:"search-wrapper",children:[t.jsx("span",{className:"material-symbols-outlined search-icon",style:{fontSize:18},children:"search"}),t.jsx("input",{className:"search-input",type:"text",placeholder:"Search",value:w,onChange:k=>p(k.target.value)})]})}),t.jsx("nav",{className:"sidebar-nav",children:$e.map(k=>Re(k,0))}),t.jsx("div",{className:"sidebar-resizer",onMouseDown:F,onDoubleClick:Y,title:"Drag to resize sidebar (Double click to reset)"})]})},Jc=({isDark:i,onNavigate:d})=>t.jsx("div",{className:`welcome-wrapper ${i?"dark":""}`,children:t.jsxs("div",{className:"welcome-container",children:[t.jsxs("section",{className:"hero-section",children:[t.jsxs("div",{className:"hero-left",children:[t.jsx("div",{className:"hero-logo-wrapper",children:t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"hero-logo-img"})}),t.jsxs("h1",{className:"hero-title",children:["React Native Documentation |",t.jsx("br",{}),"UX4G Design System"]}),t.jsx("div",{className:"version-badge",children:"3.0"}),t.jsx("h2",{className:"hero-tagline",children:"Government-grade UI foundations for trusted public digital experiences."}),t.jsx("p",{className:"hero-description",children:"UX4G gives product, design, and engineering teams one coherent system for building accessible, consistent, and scalable citizen-facing services."}),t.jsxs("div",{className:"hero-actions",children:[t.jsx("button",{className:"btn-hero-primary",onClick:()=>d("button"),children:"Get Started"}),t.jsx("button",{className:"btn-hero-secondary",onClick:()=>d("button"),children:"Component Library"})]})]}),t.jsx("div",{className:"hero-right",children:t.jsxs("div",{className:"overview-card",children:[t.jsx("div",{className:"overview-header-label",children:"System overview"}),t.jsxs("h3",{className:"overview-card-title",children:["One platform for",t.jsx("br",{}),"consistent public",t.jsx("br",{}),"service journeys."]}),t.jsx("p",{className:"overview-card-desc",children:"Start from shared tokens, move into reusable components, and document delivery paths in one place."}),t.jsxs("div",{className:"overview-stats-grid",children:[t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"45+"}),t.jsxs("div",{className:"stat-lbl",children:["Reusable",t.jsx("br",{}),"components"]})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"1K+"}),t.jsxs("div",{className:"stat-lbl",children:["Design",t.jsx("br",{}),"tokens"]})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"10+"}),t.jsx("div",{className:"stat-lbl",children:"Patterns"})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"AA"}),t.jsxs("div",{className:"stat-lbl",children:["Accessibility",t.jsx("br",{}),"target"]})]})]}),t.jsxs("div",{className:"overview-table-rows",children:[t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Tokens"}),t.jsx("span",{className:"table-row-desc",children:"Spacing, Radius, Colors"})]}),t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Components"}),t.jsx("span",{className:"table-row-desc",children:"Inputs, buttons, cards"})]}),t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Patterns"}),t.jsx("span",{className:"table-row-desc",children:"Headers, footers, forms"})]})]})]})})]}),t.jsxs("section",{className:"section-block",children:[t.jsx("div",{className:"section-kicker",children:"Core strengths"}),t.jsxs("h2",{className:"section-heading",children:["Built for design systems that need",t.jsx("br",{}),"to scale beyond one product team."]}),t.jsx("p",{className:"section-subtext",children:"UX4G combines visual consistency, engineering pragmatism, and accessibility expectations into a single documentation experience."}),t.jsxs("div",{className:"cards-grid cards-grid-2x2",children:[t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"account_tree"})}),t.jsx("h3",{className:"feature-card-title",children:"Scalable Architecture"}),t.jsx("p",{className:"feature-card-desc",children:"A structured system of foundations, patterns, and components that can scale across ministries, vendors, and service teams."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"accessibility_new"})}),t.jsx("h3",{className:"feature-card-title",children:"Accessible Components"}),t.jsx("p",{className:"feature-card-desc",children:"Interaction patterns are designed for clarity, contrast, keyboard use, and dependable public-facing experiences."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"palette"})}),t.jsx("h3",{className:"feature-card-title",children:"Token-Driven Design"}),t.jsx("p",{className:"feature-card-desc",children:"Color, typography, spacing, and elevation are governed through reusable tokens that keep every experience aligned."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"code"})}),t.jsx("h3",{className:"feature-card-title",children:"Developer Friendly"}),t.jsx("p",{className:"feature-card-desc",children:"Composable utilities, production-ready components, and Storybook documentation reduce friction from exploration to delivery."})]})]})]}),t.jsxs("section",{className:"section-block",children:[t.jsx("div",{className:"section-kicker",children:"Library map"}),t.jsxs("h2",{className:"section-heading",children:["Navigate the design system through the same",t.jsx("br",{}),"categories shown in the Storybook sidebar."]}),t.jsx("p",{className:"section-subtext",children:"Components, tokens, and Patterns are organized to help teams move from exploration to implementation without losing context."}),t.jsxs("div",{className:"cards-grid cards-grid-3",children:[t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"widgets"})}),t.jsx("h3",{className:"feature-card-title",children:"Components"}),t.jsx("p",{className:"feature-card-desc",children:"Form controls, navigation, feedback, and layout primitives designed for real government workflows."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Production-ready UI building blocks"}),t.jsx("li",{children:"Interactive states documented in Storybook"}),t.jsx("li",{children:"Consistent anatomy across surfaces"})]})]}),t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"style"})}),t.jsx("h3",{className:"feature-card-title",children:"Tokens"}),t.jsx("p",{className:"feature-card-desc",children:"Core design decisions captured as reusable color, typography, spacing, and semantic values."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Brand and neutral palettes"}),t.jsx("li",{children:"Semantic mappings for surfaces and states"}),t.jsx("li",{children:"A shared source of truth for scale"})]})]}),t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"dashboard_customize"})}),t.jsx("h3",{className:"feature-card-title",children:"Patterns"}),t.jsx("p",{className:"feature-card-desc",children:"Reusable block-level compositions like headers, footers, and complex forms used across applications."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Pre-built structural blocks"}),t.jsx("li",{children:"Streamlined composition"}),t.jsx("li",{children:"Accelerated feature delivery"})]})]})]})]}),t.jsxs("footer",{className:"welcome-footer",children:[t.jsx("div",{className:"footer-divider"}),t.jsxs("div",{className:"footer-content",children:[t.jsxs("div",{className:"footer-left",children:[t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"footer-logo"}),t.jsx("span",{className:"footer-tagline",children:"A shared platform for accessible, consistent, and reliable public digital products."})]}),t.jsxs("div",{className:"footer-right",children:[t.jsx("span",{className:"footer-visit-text",children:"Visit:"}),t.jsx("a",{href:"https://www.ux4g.gov.in",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"ux4g.gov.in"})]})]})]})]})}),K={gray100:"#F5F5F5",gray200:"#EEEEEE",gray800:"#333333",gray900:"#121212",primary:"#4A2BC2",primary50:"#F2EFFF",primary100:"#DCD4FF",primary200:"#C0B3FF",primary300:"#A391FF",primary400:"#8670FF",primary500:"#6A4EFF",primary600:"#4A2BC2",primary700:"#3D239F",primary800:"#301C7D",primary900:"#24145C",primary950:"#1A0E3D",primary50A:"#F2EFFF40",primary100A:"#DCD4FF40",primary200A:"#C0B3FF40",primary300A:"#A391FF40",primary400A:"#8670FF40",primary500A:"#6A4EFF40",primary600A:"#4A2BC240",primary700A:"#3D239F40",primary800A:"#301C7D40",primary900A:"#24145C40",primary950A:"#1A0E3D40",secondary:"#A46800",secondary50:"#FFF5EA",secondary100:"#FFEBD6",secondary200:"#FFD9AF",secondary300:"#FFBE6F",secondary400:"#E89C30",secondary500:"#C47D00",secondary600:"#A46800",secondary700:"#764A00",secondary800:"#4B2D00",secondary900:"#281600",secondary950:"#110700",secondary50A:"#FFF5EA40",secondary100A:"#FFEBD640",secondary200A:"#FFD9AF40",secondary300A:"#FFBE6F40",secondary400A:"#E89C3040",secondary500A:"#C47D0040",secondary600A:"#A4680040",secondary700A:"#764A0040",secondary800A:"#4B2D0040",secondary900A:"#28160040",secondary950A:"#11070040",tertiary:"#8E55B3",tertiary50:"#F6EFFB",tertiary100:"#E9DAF3",tertiary200:"#D9BFEA",tertiary300:"#C8A3E0",tertiary400:"#B686D6",tertiary500:"#A66ACC",tertiary600:"#8E55B3",tertiary700:"#75419A",tertiary800:"#5D2F80",tertiary900:"#462166",tertiary950:"#32174A",tertiary50A:"#F6EFFB40",tertiary100A:"#E9DAF340",tertiary200A:"#D9BFEA40",tertiary300A:"#C8A3E040",tertiary400A:"#B686D640",tertiary500A:"#A66ACC40",tertiary600A:"#8E55B340",tertiary700A:"#75419A40",tertiary800A:"#5D2F8040",tertiary900A:"#46216640",tertiary950A:"#32174A40",neutral0:"#FFFFFF",neutral50:"#FAFAFA",neutral100:"#F5F5F5",neutral200:"#E5E5E5",neutral300:"#D9D9D9",neutral400:"#A1A1A1",neutral500:"#737373",neutral600:"#525252",neutral700:"#404040",neutral800:"#262626",neutral900:"#171717",neutral950:"#0A0A0A",neutral1000black:"#000000",neutral0A:"#FFFFFF40",neutral50A:"#FAFAFA40",neutral100A:"#F5F5F540",neutral200A:"#E5E5E540",neutral300A:"#D9D9D940",neutral400A:"#A1A1A140",neutral500A:"#73737340",neutral600A:"#52525240",neutral700A:"#40404040",neutral800A:"#26262640",neutral900A:"#17171740",neutral950A:"#0A0A0A40",neutral1000A:"#00000040",neutral0B:"#FFFFFFB3",neutral950B:"#0A0A0AB3",red:"#DB372D",red50:"#FFF8F8",red100:"#FFECEE",red200:"#FFDADC",red300:"#FFB3AE",red400:"#FF8983",red500:"#F55E57",red600:"#DB372D",red700:"#B3251E",red800:"#8A1A16",red900:"#60150F",red950:"#3A0907",blue:"#3271EA",blue50:"#F5FAFF",blue100:"#E7F2FF",blue200:"#D0E4FF",blue300:"#A1C9FF",blue400:"#76ACFF",blue500:"#4E8FF8",blue600:"#3271EA",blue700:"#1157CE",blue800:"#04409F",blue900:"#012C6F",blue950:"#001944",skyBlue:"#0081A8",skyBlue50:"#F4FAFF",skyBlue100:"#E0F4FF",skyBlue200:"#BDE9FF",skyBlue300:"#67D4FF",skyBlue400:"#00BBEA",skyBlue500:"#009DC9",skyBlue600:"#0081A8",skyBlue700:"#006788",skyBlue800:"#004D68",skyBlue900:"#003549",skyBlue950:"#001F2D",cyan:"#13C2C2",cyan50:"#E6FFFB",cyan100:"#C9F7F2",cyan200:"#ADF0E9",cyan300:"#91E8E0",cyan400:"#75E0D7",cyan500:"#59D8CE",cyan600:"#13C2C2",cyan700:"#08979C",cyan800:"#006D75",cyan900:"#00474F",cyan950:"#002329",green:"#128937",green50:"#F2FCEF",green100:"#DDF8D8",green200:"#BEEFBB",green300:"#80DA88",green400:"#44C265",green500:"#1AA64A",green600:"#128937",green700:"#006C35",green800:"#00522C",green900:"#00381F",green950:"#002110",lime:"#A0D911",lime50:"#FCFFE6",lime100:"#F2FFBF",lime200:"#E8FF99",lime300:"#DEFF73",lime400:"#D4F24D",lime500:"#CAE827",lime600:"#A0D911",lime700:"#7CB305",lime800:"#5B8C00",lime900:"#3F6600",lime950:"#254000",yellow:"#FADB14",yellow50:"#FEFFE6",yellow100:"#FFFBC2",yellow200:"#FFF29C",yellow300:"#FFE976",yellow400:"#FFE050",yellow500:"#FFD72A",yellow600:"#FADB14",yellow700:"#D4B106",yellow800:"#AD8B00",yellow900:"#876800",yellow950:"#614700",gold:"#F2A90F",gold50:"#FFFBE6",gold100:"#FFF2BF",gold200:"#FFE799",gold300:"#FFDB73",gold400:"#FFCF4D",gold500:"#FFC327",gold600:"#F2A90F",gold700:"#D98A00",gold800:"#B36B00",gold900:"#8C4D00",gold950:"#613400",orange:"#FA8C16",orange50:"#FFF7E6",orange100:"#FFE7BF",orange200:"#FFD899",orange300:"#FFC973",orange400:"#FFBA4D",orange500:"#FFAB27",orange600:"#FA8C16",orange700:"#D46B08",orange800:"#AD4E00",orange900:"#873800",orange950:"#612500",purple:"#9254EA",purple50:"#FDF8FF",purple100:"#F7ECFE",purple200:"#EEDCFE",purple300:"#D9BAFD",purple400:"#C597FF",purple500:"#AD72FF",purple600:"#9254EA",purple700:"#7438D2",purple800:"#5629A4",purple900:"#400B84",purple950:"#280255",pink:"#DC258D",pink50:"#FFF7FC",pink100:"#FFECF6",pink200:"#FFD8EF",pink300:"#FFAEE4",pink400:"#FF7DD2",pink500:"#F94AAB",pink600:"#DC258D",pink700:"#B60D6E",pink800:"#8D0053",pink900:"#620438",pink950:"#3D0023",white:"#FFFFFF",transparent:"rgba(0, 0, 0, 0)"},_i={primary:K.primary600,onPrimary:K.neutral50,secondary:K.secondary600,onSecondary:K.white,background:K.neutral50,onBackground:K.neutral900,surface:K.white,onSurface:K.neutral900,error:K.red600,onError:K.neutral50,success:K.green600,onSuccess:K.neutral50,warning:K.orange600,onWarning:K.neutral900,info:K.cyan600,onInfo:K.neutral50},ld={primary:K.primary300,onPrimary:K.neutral900,secondary:K.secondary300,onSecondary:K.neutral900,background:K.neutral900,onBackground:K.neutral50,surface:K.neutral950,onSurface:K.neutral50,error:K.red300,onError:K.neutral900,success:K.green500,onSuccess:K.neutral900,warning:K.orange500,onWarning:K.neutral900,info:K.cyan500,onInfo:K.neutral900},G={hXXS_default:{fontWeight:"600",fontSize:14,lineHeight:16},hXXS_strong:{fontWeight:"700",fontSize:14,lineHeight:16},hXS_default:{fontWeight:"600",fontSize:16,lineHeight:20},hXS_strong:{fontWeight:"700",fontSize:16,lineHeight:20},hS_default:{fontWeight:"600",fontSize:20,lineHeight:24},hS_strong:{fontWeight:"700",fontSize:20,lineHeight:24},hM_default:{fontWeight:"600",fontSize:24,lineHeight:28},hM_strong:{fontWeight:"700",fontSize:24,lineHeight:28},hL_default:{fontWeight:"600",fontSize:28,lineHeight:32},hL_strong:{fontWeight:"700",fontSize:28,lineHeight:32},hXL_default:{fontWeight:"600",fontSize:32,lineHeight:36},hXL_strong:{fontWeight:"700",fontSize:32,lineHeight:36},hXXL_default:{fontWeight:"600",fontSize:40,lineHeight:44},hXXL_strong:{fontWeight:"700",fontSize:40,lineHeight:44},dXS_default:{fontWeight:"600",fontSize:36,lineHeight:44},dXS_strong:{fontWeight:"700",fontSize:36,lineHeight:44},dS_default:{fontWeight:"600",fontSize:40,lineHeight:52},dS_strong:{fontWeight:"700",fontSize:40,lineHeight:52},dM_default:{fontWeight:"600",fontSize:52,lineHeight:72},dM_strong:{fontWeight:"700",fontSize:52,lineHeight:72},dL_default:{fontWeight:"600",fontSize:60,lineHeight:80},dL_strong:{fontWeight:"700",fontSize:60,lineHeight:80},bXS_default:{fontWeight:"500",fontSize:11,lineHeight:14},bXS_strong:{fontWeight:"700",fontSize:11,lineHeight:14},bS_default:{fontWeight:"500",fontSize:12,lineHeight:16},bS_strong:{fontWeight:"700",fontSize:12,lineHeight:16},bM_default:{fontWeight:"500",fontSize:14,lineHeight:18},bM_strong:{fontWeight:"700",fontSize:14,lineHeight:18},bL_default:{fontWeight:"500",fontSize:16,lineHeight:20},bL_strong:{fontWeight:"700",fontSize:16,lineHeight:20},lS_default:{fontWeight:"500",fontSize:11,lineHeight:14},lS_strong:{fontWeight:"700",fontSize:11,lineHeight:14},lM_default:{fontWeight:"500",fontSize:12,lineHeight:16},lM_strong:{fontWeight:"700",fontSize:12,lineHeight:16},lL_default:{fontWeight:"500",fontSize:14,lineHeight:18},lL_strong:{fontWeight:"700",fontSize:14,lineHeight:18},lXL_default:{fontWeight:"500",fontSize:16,lineHeight:20},lXL_strong:{fontWeight:"700",fontSize:16,lineHeight:20},tS_default:{fontWeight:"400",fontSize:14,lineHeight:20},tS_strong:{fontWeight:"600",fontSize:14,lineHeight:20},tM_default:{fontWeight:"400",fontSize:16,lineHeight:24},tM_strong:{fontWeight:"600",fontSize:16,lineHeight:24},tL_default:{fontWeight:"400",fontSize:18,lineHeight:24},tL_strong:{fontWeight:"600",fontSize:18,lineHeight:24}},Oi={spaceNone:0,space2:2,space4:4,space6:6,space8:8,space12:12,space16:16,space20:20,space24:24,space32:32,space40:40,space48:48,space56:56,space64:64,space80:80},Xi={radiusNone:0,radius2:2,radius4:4,radius8:8,radius12:12,radius16:16,radius24:24,radius999:999},Hi={none:0,thin:1,thick:2,thicker:3,thickest:4},Np={isDark:!1,colors:_i,typography:G,space:Oi,radius:Xi,borderWidth:Hi,setTheme:()=>{},toggleTheme:()=>{}},Up=T.createContext(Np),J=({children:i,isDark:d=!1,colors:c,typography:m})=>{const[f,b]=T.useState(d);T.useEffect(()=>{b(d)},[d]);const x=()=>{b(p=>!p)},s=p=>{b(p)},w=T.useMemo(()=>{const p=f?ld:_i,N=c?{...p,...c}:p,A=m?{...G,...m}:G;return{isDark:f,colors:N,typography:A,space:Oi,radius:Xi,borderWidth:Hi,setTheme:s,toggleTheme:x}},[f,c,m]);return t.jsx(Up.Provider,{value:w,children:i})};function Pp(i){const d=i.split(`
`);return d.map((c,m)=>{const f=[];let b=c,x=0;const s=(w,p)=>{f.push(t.jsx("span",{className:p,children:w},`${m}-${x++}`))};for(;b.length>0;){const w=b.match(/^(\/\/.*)/);if(w){s(w[1],"token-comment"),b=b.slice(w[1].length);continue}const p=b.match(/^(<\/?)([\w.]+)/);if(p){s(p[1],"token-bracket"),s(p[2],"token-tag"),b=b.slice(p[0].length);continue}const N=b.match(/^(\/?>)/);if(N){s(N[1],"token-bracket"),b=b.slice(N[1].length);continue}const A=b.match(/^(\w+)(=)("[^"]*"|'[^']*')/);if(A){s(A[1],"token-attr"),s(A[2],"token-bracket"),s(A[3],"token-string"),b=b.slice(A[0].length);continue}const B=b.match(/^(\w+)(=\{)([^}]*)(})/);if(B){s(B[1],"token-attr"),s(B[2],"token-bracket");const Y=B[3];Y==="true"||Y==="false"?s(Y,"token-bool"):/^\d+$/.test(Y)?s(Y,"token-number"):Y.includes("=>")?s(Y,"token-func"):s(Y,"token-string"),s(B[4],"token-bracket"),b=b.slice(B[0].length);continue}const I=b.match(/^("[^"]*"|'[^']*')/);if(I){s(I[1],"token-string"),b=b.slice(I[1].length);continue}const F=b.match(/^(import|export|from|const|let|var|return)\b/);if(F){s(F[1],"token-tag"),b=b.slice(F[1].length);continue}f.push(t.jsx("span",{children:b[0]},`${m}-${x++}`)),b=b.slice(1)}return t.jsxs(Mi.Fragment,{children:[f,m<d.length-1?`
`:""]},m)})}const Q=({code:i,language:d="TSX",filename:c})=>{const[m,f]=T.useState(!1),b=T.useCallback(async()=>{try{await navigator.clipboard.writeText(i),f(!0),setTimeout(()=>f(!1),2e3)}catch{const s=document.createElement("textarea");s.value=i,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),f(!0),setTimeout(()=>f(!1),2e3)}},[i]),x=Pp(i.trim());return t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsxs("div",{className:"code-header-left",children:[t.jsx("span",{className:"code-lang-badge",children:d}),c&&t.jsx("span",{className:"code-filename",children:c})]}),t.jsx("button",{className:`copy-btn ${m?"copied":""}`,onClick:b,children:m?t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):t.jsxs(t.Fragment,{children:[t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),t.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy"]})})]}),t.jsx("div",{className:"code-body",children:t.jsx("pre",{children:x})})]})},Vp=({isDark:i,story:d="button-primary"})=>{const[c,m]=T.useState("preview"),[f,b]=T.useState("medium"),[x,s]=T.useState("Primary Button"),[w,p]=T.useState(!0),[N,A]=T.useState(!1),[B,I]=T.useState("primary"),F=T.useMemo(()=>{const re=[];return re.push("import { Ux4gButton } from 'ux4g-react-native-design-system';"),re.push(""),re.push("<Ux4gButton"),B!=="primary"&&re.push(`  variant="${B}"`),f!=="medium"&&re.push(`  size="${f}"`),re.push(`  text="${x}"`),w||re.push("  enabled={false}"),N&&re.push("  isLoading={true}"),re.push(`  onPress={() => console.log("Button pressed")}
/>`),re.join(`
`)},[B,f,x,w,N]),Y=()=>{let re="";d==="button-introduction"?re=`        <Ux4gButton text="Primary Button" variant="primary" size="${f}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Tonal Button" variant="primary" backgroundColor={${i?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${i?"UX4GColors.primary50":"UX4GColors.primary600"}} size="${f}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Outline Button" variant="outline" size="${f}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Ghost Button" variant="ghost" size="${f}" enabled={${w}} isLoading={${N}} />`:d==="button-variants"?re=`        <Ux4gButton text="Primary" variant="primary" size="${f}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Tonal" variant="primary" backgroundColor={${i?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${i?"UX4GColors.primary50":"UX4GColors.primary600"}} size="${f}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Secondary" variant="secondary" size="${f}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Outline" variant="outline" size="${f}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Ghost" variant="ghost" size="${f}" enabled={${w}} isLoading={${N}} />`:d==="button-sizes"?re=`        <Ux4gButton text="Small" size="small" variant="${B}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Medium" size="medium" variant="${B}" enabled={${w}} isLoading={${N}} />
        <Ux4gButton text="Large" size="large" variant="${B}" enabled={${w}} isLoading={${N}} />`:re=`        <Ux4gButton
          variant="${B}"
          size="${f}"
          text="${x}"
          enabled={${w}}
          isLoading={${N}}
          onPress={() => console.log("Button pressed")}
        />`;const Re=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gButton, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
${re}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 20
  }
});`,$e=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(Re)}`;return t.jsx("iframe",{src:$e,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},ae=[{name:"text",type:"string",default:"undefined",desc:"Text label inside the button.",required:!1},{name:"children",type:"ReactNode",default:"undefined",desc:"Custom child content overriding/supplementing text.",required:!1},{name:"variant",type:"'primary' | 'secondary' | 'outline' | 'ghost'",default:"'primary'",desc:"Visual button style variant.",required:!1},{name:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"Button sizing preset.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether button is interactive and enabled.",required:!1},{name:"isLoading",type:"boolean",default:"false",desc:"Shows spinner and prevents press.",required:!1},{name:"backgroundColor",type:"string",default:"variant-based token",desc:"Background color override.",required:!1},{name:"contentColor",type:"string",default:"variant-based token",desc:"Foreground text/icon color override.",required:!1},{name:"disabledBackgroundColor",type:"string",default:"computed disabled color",desc:"Background color override when disabled.",required:!1},{name:"disabledContentColor",type:"string",default:"computed disabled color",desc:"Foreground color override when disabled.",required:!1},{name:"borderColor",type:"string",default:"variant-based token",desc:"Border color override.",required:!1},{name:"borderWidth",type:"number",default:"variant-based",desc:"Border width override.",required:!1},{name:"borderRadius",type:"number",default:"theme.radius.radius8",desc:"Corner radius override.",required:!1},{name:"paddingHorizontal",type:"number",default:"size-based",desc:"Horizontal padding override.",required:!1},{name:"paddingVertical",type:"number",default:"size-based",desc:"Vertical padding override.",required:!1},{name:"leadingIcon",type:"Ux4gIconProp",default:"undefined",desc:"Icon rendered before text.",required:!1},{name:"trailingIcon",type:"Ux4gIconProp",default:"undefined",desc:"Icon rendered after text.",required:!1},{name:"iconSize",type:"number",default:"size-based",desc:"Explicit icon size override.",required:!1},{name:"width",type:"DimensionValue",default:"undefined",desc:"Explicit width.",required:!1},{name:"height",type:"number",default:"size-based",desc:"Explicit height.",required:!1},{name:"elevation",type:"number",default:"0",desc:"Android elevation / iOS shadow depth.",required:!1},{name:"style",type:"StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>",default:"undefined",desc:"Style override for button container.",required:!1},{name:"contentContainerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for inner content row.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"onPress",type:"() => void",default:"required",desc:"Press handler callback.",required:!0},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Button"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Button trigger an action or event, such as submitting a form, opening a dialog or performing a specific task. It provide users with a clear Call to Action (CTA), guiding them through a workflow."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:Y()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:F,language:"TSX",filename:"ButtonExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:ae.map(re=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[re.name,re.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:re.type})}),t.jsx("td",{children:re.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:re.default})})]},re.name))})]})})]})]})})]})},Ep=({isDark:i})=>{const[d,c]=T.useState("preview"),f=`import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Ux4gButton, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const PlusIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 5V19M5 12H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ArrowIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M7 10L12 15L17 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${`        <View style={styles.row}>
          <Ux4gButton text="Primary" variant="primary" />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${i?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${i?"UX4GColors.primary50":"UX4GColors.primary600"}} />
          <Ux4gButton text="Outline" variant="outline" />
          <Ux4gButton text="Ghost" variant="ghost" />
        </View>

        <View style={styles.row}>
          <Ux4gButton text="Button" variant="primary" isLoading={true} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${i?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${i?"UX4GColors.primary50":"UX4GColors.primary600"}} isLoading={true} />
          <Ux4gButton text="Button" variant="outline" isLoading={true} />
          <Ux4gButton text="Button" variant="ghost" isLoading={true} />
        </View>

        <View style={styles.row}>
          <Ux4gButton text="Button" variant="primary" leadingIcon={PlusIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${i?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${i?"UX4GColors.primary50":"UX4GColors.primary600"}} leadingIcon={PlusIcon} />
          <Ux4gButton text="Button" variant="primary" trailingIcon={ArrowIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${i?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${i?"UX4GColors.primary50":"UX4GColors.primary600"}} trailingIcon={ArrowIcon} />
          <Ux4gButton text="Button" variant="primary" leadingIcon={PlusIcon} trailingIcon={ArrowIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${i?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${i?"UX4GColors.primary50":"UX4GColors.primary600"}} leadingIcon={PlusIcon} trailingIcon={ArrowIcon} />
        </View>`}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 24,
    padding: 32,
    backgroundColor: ${i?"UX4GColors.neutral900":"UX4GColors.neutral100"}
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  }
});`,b=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gButton%20Showcase&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(f)}`;return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Button Showcase"}),t.jsx("span",{className:"wb-badge",children:"Showcase"})]}),t.jsx("p",{className:"wb-subtitle",children:"A full grid showcase of button variants, matching the Flutter widgetbook layout."})]}),t.jsx("div",{className:"wb-body",style:{display:"block"},children:t.jsxs("div",{className:"wb-main",style:{width:"100%"},children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>c("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>c("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]})]}),t.jsx("div",{className:"wb-content",children:d==="preview"?t.jsx("iframe",{src:b,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"}):t.jsx("pre",{style:{padding:16,backgroundColor:i?"#1e1e1e":"#f5f5f5",borderRadius:8,overflow:"auto"},children:t.jsx("code",{children:f})})})]})})]})},Ap=({isDark:i})=>{const[d,c]=T.useState("preview"),[m,f]=T.useState("primary"),[b,x]=T.useState(40),[s,w]=T.useState(!0),[p,N]=T.useState(!1),A=T.useMemo(()=>{const F=[];return F.push("import { Ux4gIconButton } from 'ux4g-react-native-design-system';"),F.push("import Svg, { Path } from 'react-native-svg';"),F.push(""),F.push("const HeartIcon = ({ color, size }: any) => ("),F.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>'),F.push('    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>'),F.push("  </Svg>"),F.push(");"),F.push(""),F.push("const ShareIcon = ({ color, size }: any) => ("),F.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">'),F.push('    <Path d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />'),F.push("  </Svg>"),F.push(");"),F.push(""),F.push("const TrashIcon = ({ color, size }: any) => ("),F.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">'),F.push('    <Path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />'),F.push("  </Svg>"),F.push(");"),F.push(""),F.push("<View style={styles.row}>"),F.push("  <Ux4gIconButton"),F.push("    icon={HeartIcon}"),F.push('    variant="primary"'),b!==40&&F.push(`    size={${b}}`),s||F.push("    enabled={false}"),p&&F.push("    isLoading={true}"),F.push("  />"),F.push("  <Ux4gIconButton"),F.push("    icon={ShareIcon}"),F.push('    variant="outline"'),b!==40&&F.push(`    size={${b}}`),s||F.push("    enabled={false}"),p&&F.push("    isLoading={true}"),F.push("  />"),F.push("  <Ux4gIconButton"),F.push("    icon={TrashIcon}"),F.push('    variant="ghost"'),b!==40&&F.push(`    size={${b}}`),s||F.push("    enabled={false}"),p&&F.push("    isLoading={true}"),F.push("  />"),F.push("</View>"),F.join(`
`)},[m,b,s,p]),B=()=>{const Y=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gIconButton, Ux4gThemeProvider, UX4GColors } from 'ux4g-react-native-design-system';
import Svg, { Path } from 'react-native-svg';

const HeartIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </Svg>
);

const ShareIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </Svg>
);

const TrashIcon = ({ color, size }: any) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
  </Svg>
);

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Ux4gIconButton
            icon={HeartIcon}
            variant="primary"
          />
          <Ux4gIconButton
            icon={ShareIcon}
            variant="outline"
          />
          <Ux4gIconButton
            icon={TrashIcon}
            variant="ghost"
          />
        </View>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: ${i?"UX4GColors.neutral900":"UX4GColors.neutral50"}
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32
  }
});`,ae=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gIconButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(Y)}`;return t.jsx("iframe",{src:ae,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},I=[{name:"icon",type:"Ux4gIconProp",default:"—",desc:"Icon element or callback ({ color, size }) => ReactNode.",required:!0},{name:"isLoading",type:"boolean",default:"false",desc:"Displays spinner instead of icon.",required:!1},{name:"variant",type:"'primary' | 'secondary' | 'outline' | 'ghost'",default:"'primary'",desc:"Visual button style variant.",required:!1},{name:"size",type:"number",default:"40",desc:"Square width and height in points.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether icon button is interactive.",required:!1},{name:"backgroundColor",type:"string",default:"variant-based token",desc:"Background color override.",required:!1},{name:"contentColor",type:"string",default:"variant-based token",desc:"Icon foreground color override.",required:!1},{name:"borderColor",type:"string",default:"variant-based token",desc:"Border color override.",required:!1},{name:"borderRadius",type:"number",default:"theme.radius.radius8",desc:"Corner radius override.",required:!1},{name:"elevation",type:"number",default:"0",desc:"Android elevation/iOS shadow depth.",required:!1},{name:"style",type:"StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>",default:"undefined",desc:"Style override for icon button container.",required:!1},{name:"onPress",type:"() => void",default:"required",desc:"Press handler callback.",required:!0},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"IconButton"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Icon button contain only an icon and do not include text labels. It is used to represent common actions in a compact and visually accessible way."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",style:{display:"block"},children:t.jsxs("div",{className:"wb-main",style:{width:"100%"},children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>c("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>c("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>c("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"list_alt"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&B(),d==="code"&&t.jsx("pre",{style:{padding:16,backgroundColor:i?"#1e1e1e":"#f5f5f5",borderRadius:8,overflow:"auto"},children:t.jsx("code",{children:A})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:I.map(F=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[F.name,F.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:F.type})}),t.jsx("td",{children:F.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:F.default})})]},F.name))})]})})]})]})})]})},Dp=({isDark:i,story:d="date-picker-single"})=>{const[c,m]=T.useState("preview"),[f,b]=T.useState("single"),[x,s]=T.useState("Select Date"),[w,p]=T.useState(!0),N=T.useMemo(()=>{const I=[];return I.push("import { Ux4gDatePicker } from 'ux4g-react-native-design-system';"),I.push(""),I.push("<Ux4gDatePicker"),I.push(`  mode="${f}"`),I.push(`  label="${x}"`),w||I.push("  enabled={false}"),I.push("/>"),I.join(`
`)},[f,x,w]),A=()=>{let I="";d==="date-picker-single"?I=`        <Ux4gDatePicker mode="single" label="Single Date Picker" enabled={${w}} />`:d==="date-picker-range"?I=`        <Ux4gDatePicker mode="range" label="Date Range Picker" enabled={${w}} />`:I=`        <Ux4gDatePicker
          mode="${f}"
          label="${x}"
          enabled={${w}}
        />`;const F=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gDatePicker, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
${I}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 20
  }
});`,Y=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gDatePicker%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(F)}`;return t.jsx("iframe",{src:Y,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},B=[{name:"mode",type:"'single' | 'range'",default:"'single'",desc:"Date selection mode.",required:!1},{name:"initialDate",type:"Date",default:"undefined",desc:"Initial selected date in single mode.",required:!1},{name:"initialDateRange",type:"DateRange",default:"undefined",desc:"Initial selected date range in range mode.",required:!1},{name:"minDate",type:"Date",default:"undefined",desc:"Minimum selectable date.",required:!1},{name:"maxDate",type:"Date",default:"undefined",desc:"Maximum selectable date.",required:!1},{name:"onDateSelected",type:"(date: Date) => void",default:"undefined",desc:"Callback fired when a single date is selected.",required:!1},{name:"onDateRangeSelected",type:"(range: DateRange) => void",default:"undefined",desc:"Callback fired when a date range is selected.",required:!1},{name:"placeholder",type:"string",default:"'Select date'",desc:"Placeholder text shown when no value is selected.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether interaction is enabled.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Label text above the field.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Caption/helper text below the field.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Shows required asterisk next to label.",required:!1},{name:"required",type:"boolean",default:"false",desc:"Alias of `isRequired`.",required:!1},{name:"status",type:"Ux4gInputFieldStatus",default:"'defaultStatus'",desc:"Status variant for border/caption color.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer container.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Date Picker"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Date Picker allows users to select a specific date or a range of dates from a calendar interface."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:A()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:N,language:"TSX",filename:"DatePickerExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:B.map(I=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[I.name,I.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:I.type})}),t.jsx("td",{children:I.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:I.default})})]},I.name))})]})})]})]})})]})},Fp=({isDark:i,story:d="dropdown-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { Ux4gSelectionDropdown } from 'ux4g-react-native-design-system';"),s.push("import { useState } from 'react';"),s.push(""),s.push("// Complete Interactive Dropdown"),s.push('const [selected, setSelected] = useState<string[]>(["1"]);'),s.push(""),s.push("<Ux4gSelectionDropdown"),s.push('  label="Select Framework"'),s.push('  placeholder="Choose an option..."'),s.push("  options={["),s.push('    { id: "1", label: "React Native CLI" },'),s.push('    { id: "2", label: "Expo" },'),s.push('    { id: "3", label: "Flutter" }'),s.push("  ]}"),s.push("  selectedOptionIds={selected}"),s.push("  onSelectionChange={setSelected}"),s.push("/>"),s.push(""),s.push("// Multi-Select Searchable Dropdown"),s.push('const [selectedMulti, setSelectedMulti] = useState<string[]>(["1", "2"]);'),s.push("<Ux4gSelectionDropdown"),s.push('  label="Select Technologies"'),s.push('  mode="multi"'),s.push("  searchEnabled={true}"),s.push("  options={["),s.push('    { id: "1", label: "React Native" },'),s.push('    { id: "2", label: "TypeScript" },'),s.push('    { id: "3", label: "Storybook" }'),s.push("  ]}"),s.push("  selectedOptionIds={selectedMulti}"),s.push("  onSelectionChange={setSelectedMulti}"),s.push("/>"),s.join(`
`)},[]),b=()=>{let s="";d==="dropdown-multi"?s=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedIds, setSelectedIds] = useState(['1', '2']);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gSelectionDropdown
          label="Multi-Select Dropdown"
          placeholder="Select multiple items..."
          mode="multi"
          options={[
            { id: '1', label: 'React Native' },
            { id: '2', label: 'TypeScript' },
            { id: '3', label: 'Expo' },
            { id: '4', label: 'Storybook' }
          ]}
          selectedOptionIds={selectedIds}
          onSelectionChange={setSelectedIds}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`:d==="dropdown-search"?s=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedIds, setSelectedIds] = useState(['in']);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gSelectionDropdown
          label="Searchable Dropdown"
          placeholder="Search and select country..."
          searchEnabled={true}
          options={[
            { id: 'in', label: 'India' },
            { id: 'us', label: 'United States' },
            { id: 'uk', label: 'United Kingdom' },
            { id: 'ca', label: 'Canada' },
            { id: 'au', label: 'Australia' },
            { id: 'de', label: 'Germany' },
            { id: 'jp', label: 'Japan' }
          ]}
          selectedOptionIds={selectedIds}
          onSelectionChange={setSelectedIds}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`:d==="dropdown-status"?s=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [errSelected, setErrSelected] = useState([]);
  const [succSelected, setSuccSelected] = useState(['1']);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gSelectionDropdown
          label="Error Status Dropdown"
          placeholder="Selection required..."
          status="error"
          options={[
            { id: '1', label: 'Option 1' },
            { id: '2', label: 'Option 2' }
          ]}
          selectedOptionIds={errSelected}
          onSelectionChange={setErrSelected}
        />
        
        <View style={{ height: 24 }} />
        
        <Ux4gSelectionDropdown
          label="Success Status Dropdown"
          placeholder="Valid selection..."
          status="success"
          options={[
            { id: '1', label: 'Option 1' },
            { id: '2', label: 'Option 2' }
          ]}
          selectedOptionIds={succSelected}
          onSelectionChange={setSuccSelected}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`:s=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [singleSelected, setSingleSelected] = useState(['1']);
  const [multiSelected, setMultiSelected] = useState(['1', '2']);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gSelectionDropdown
          label="Standard Single Selection"
          placeholder="Please select an option..."
          options={[
            { id: '1', label: 'Option 1 - First Choice' },
            { id: '2', label: 'Option 2 - Second Choice' },
            { id: '3', label: 'Option 3 - Third Choice' }
          ]}
          selectedOptionIds={singleSelected}
          onSelectionChange={setSingleSelected}
        />
        
        <View style={{ height: 24 }} />
        
        <Ux4gSelectionDropdown
          label="Searchable Multi-Select"
          mode="multi"
          searchEnabled={true}
          options={[
            { id: '1', label: 'Frontend Development' },
            { id: '2', label: 'Mobile Design Tokens' },
            { id: '3', label: 'Backend Architecture' },
            { id: '4', label: 'DevOps & Pipeline' }
          ]}
          selectedOptionIds={multiSelected}
          onSelectionChange={setMultiSelected}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`;const w=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gDropdown%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(s)}`;return t.jsx("iframe",{src:w,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Dropdown Interactive Preview"})},x=[{name:"options",type:"Ux4gDropdownOption[]",default:"required",desc:"List of selectable dropdown options.",required:!0},{name:"selectedOptionIds",type:"string[]",default:"required",desc:"Currently selected option IDs.",required:!0},{name:"onSelectionChange",type:"(selectedOptionIds: string[]) => void",default:"required",desc:"Callback fired when selection changes.",required:!0},{name:"label",type:"string",default:"undefined",desc:"Label text displayed above dropdown box.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Helper/error text displayed below dropdown box.",required:!1},{name:"placeholder",type:"string",default:"'Please select..'",desc:"Placeholder shown when nothing is selected.",required:!1},{name:"size",type:"'s' | 'm' | 'l'",default:"'m'",desc:"Dropdown field size preset.",required:!1},{name:"mode",type:"'single' | 'multi'",default:"'single'",desc:"Selection mode.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'disabled'",default:"'defaultStatus'",desc:"Validation/disabled status.",required:!1},{name:"searchEnabled",type:"boolean",default:"false",desc:"Shows search input inside dropdown menu.",required:!1},{name:"filterType",type:"'contains' | 'startsWith' | 'startsWithPerTerm'",default:"'contains'",desc:"Search filter matching strategy.",required:!1},{name:"labelTextStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"valueTextStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for selected value text.",required:!1},{name:"leadingIcon",type:"ReactNode",default:"undefined",desc:"Leading icon/content inside dropdown trigger.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Dropdown"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Collapsible selection menu supporting single choice, multi-select tag chips, search filtering, and form validation states."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"DropdownExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Bp=i=>i==="input-aadhaar"?"input-aadhaar-basic":i==="input-pan"?"input-pan-basic":i==="input-otp"?"input-otp-basic":["input-basic","input-status","input-password","input-icons","input-aadhaar-basic","input-aadhaar-varients","input-pan-basic","input-pan-varients","input-otp-basic","input-otp-varients","input-prefix-postfix","input-required-disabled"].includes(i)?i:"input-basic",zp={"input-basic":{title:"Input Field",description:"Basic text field with label and helper description."},"input-status":{title:"Input Field",description:"Validation states shown separately: error, default, success, warning, and disabled."},"input-password":{title:"Input Field",description:"Password field with built-in visibility toggle."},"input-icons":{title:"Input Field",description:"Leading icon, trailing icon, and both-icons variants shown as separate rows."},"input-aadhaar-basic":{title:"Input Aadhaar",description:"Specialized Aadhaar input with auto-formatting and built-in validation behavior."},"input-aadhaar-varients":{title:"Input Aadhaar",description:"State variants for Aadhaar input: default, error, success, and disabled."},"input-pan-basic":{title:"Input Pan",description:"Specialized PAN input with auto-uppercase and built-in validation behavior."},"input-pan-varients":{title:"Input Pan",description:"State variants for PAN input: default, error, success, and disabled."},"input-otp-basic":{title:"Input Otp",description:"OTP input for code verification with configurable length and caption behavior."},"input-otp-varients":{title:"Input Otp",description:"State variants for OTP input: default, error, success, and locked/disabled."},"input-prefix-postfix":{title:"Input Field",description:"Amount and website examples using prefix/postfix and semantic placeholders."},"input-required-disabled":{title:"Input Field",description:"Disabled identifier field with a required text field below."}},Ip=i=>i==="input-status"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputStatusExample() {
  const [errorValue, setErrorValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [successValue, setSuccessValue] = useState('');
  const [warningValue, setWarningValue] = useState('');
  const [disabledValue, setDisabledValue] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gInputField
        value={errorValue}
        onValueChange={setErrorValue}
        label='Label'
        placeholder='Placeholder'
        status='error'
        caption='Error message'
      />
      <Ux4gInputField
        value={defaultValue}
        onValueChange={setDefaultValue}
        label='Label'
        placeholder='Placeholder'
        status='defaultStatus'
        caption='Description'
      />
      <Ux4gInputField
        value={successValue}
        onValueChange={setSuccessValue}
        label='Label'
        placeholder='Placeholder'
        status='success'
        caption='Success message'
      />
      <Ux4gInputField
        value={warningValue}
        onValueChange={setWarningValue}
        label='Label'
        placeholder='Placeholder'
        status='warning'
        caption='Warning message'
      />
      <Ux4gInputField
        value={disabledValue}
        onValueChange={setDisabledValue}
        label='Label'
        placeholder='Placeholder'
        enabled={false}
        caption='Description'
      />
    </View>
  );
}`:i==="input-password"?`import React, { useState } from 'react';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputPasswordExample() {
  const [password, setPassword] = useState('');

  return (
    <Ux4gInputField
      value={password}
      onValueChange={setPassword}
      label='Password'
      placeholder='Enter your password'
      type='password'
    />
  );
}`:i==="input-icons"?`import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ux4gInputField, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function InputIconsExample() {
  const [searchValue, setSearchValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gInputField
        value={searchValue}
        onValueChange={setSearchValue}
        label='Leading icon'
        placeholder='Search...'
        leadingIcon={Ux4gIcons.search({ size: 18, color: '#8D8F93' })}
      />

      <Ux4gInputField
        value={amountValue}
        onValueChange={setAmountValue}
        label='Trailing icon'
        placeholder='Enter amount'
        trailingIcon={<Text style={{ fontSize: 22, color: '#8D8F93' }}>₹</Text>}
      />

      <Ux4gInputField
        value={locationValue}
        onValueChange={setLocationValue}
        label='Both icons'
        placeholder='Location'
        leadingIcon={<MaterialIcons name='location-on' size={18} color='#8D8F93' />}
        trailingIcon={Ux4gIcons.settings({ size: 18, color: '#8D8F93' })}
      />
    </View>
  );
}`:i==="input-prefix-postfix"?`import React, { useState } from 'react';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputPrefixPostfixExample() {
  const [amount, setAmount] = useState('0');
  const [website, setWebsite] = useState('https:// example.com');

  return (
    <>
      <Ux4gInputField
        value={amount}
        onValueChange={setAmount}
        label='Amount'
        prefixText='₹'
        postfixText='.00'
        type='number'
      />
      <Ux4gInputField
        value={website}
        onValueChange={setWebsite}
        label='Website'
        placeholder='https:// example.com'
      />
    </>
  );
}`:i==="input-aadhaar-basic"?`import React, { useState } from 'react';
import { Ux4gAadhaarInputField } from 'ux4g-react-native-design-system';

export default function InputAadhaarBasicExample() {
  const [aadhaar, setAadhaar] = useState('');

  return (
    <Ux4gAadhaarInputField
      value={aadhaar}
      onValueChange={setAadhaar}
      label='Aadhaar Number'
      placeholder='XXXX XXXX XXXX'
      required={true}
    />
  );
}`:i==="input-aadhaar-varients"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gAadhaarInputField } from 'ux4g-react-native-design-system';

export default function InputAadhaarVarientsExample() {
  const [defaultAadhaar, setDefaultAadhaar] = useState('');
  const [errorAadhaar, setErrorAadhaar] = useState('');
  const [successAadhaar, setSuccessAadhaar] = useState('1234 5678 9012');
  const [disabledAadhaar, setDisabledAadhaar] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gAadhaarInputField
        value={defaultAadhaar}
        onValueChange={setDefaultAadhaar}
        label='Default'
        placeholder='XXXX XXXX XXXX'
        caption='Enter your 12-digit Aadhaar number'
      />

      <Ux4gAadhaarInputField
        value={errorAadhaar}
        onValueChange={setErrorAadhaar}
        label='Error state'
        placeholder='XXXX XXXX XXXX'
        status='error'
        caption='Please enter a valid Aadhaar number'
      />

      <Ux4gAadhaarInputField
        value={successAadhaar}
        onValueChange={setSuccessAadhaar}
        label='Success state'
        placeholder='XXXX XXXX XXXX'
        status='success'
        caption='Enter your 12-digit Aadhaar number'
      />

      <Ux4gAadhaarInputField
        value={disabledAadhaar}
        onValueChange={setDisabledAadhaar}
        label='Disabled'
        placeholder='XXXX XXXX XXXX'
        enabled={false}
        caption='Enter your 12-digit Aadhaar number'
      />
    </View>
  );
}`:i==="input-pan-basic"?`import React, { useState } from 'react';
import { Ux4gPanInputField } from 'ux4g-react-native-design-system';

export default function InputPanBasicExample() {
  const [pan, setPan] = useState('');

  return (
    <Ux4gPanInputField
      value={pan}
      onValueChange={setPan}
      label='PAN Card Number'
      placeholder='ABCDE1234F'
      required={true}
    />
  );
}`:i==="input-pan-varients"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPanInputField } from 'ux4g-react-native-design-system';

export default function InputPanVarientsExample() {
  const [defaultPan, setDefaultPan] = useState('');
  const [errorPan, setErrorPan] = useState('');
  const [successPan, setSuccessPan] = useState('ABCDE1234F');
  const [disabledPan, setDisabledPan] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gPanInputField
        value={defaultPan}
        onValueChange={setDefaultPan}
        label='Default'
        placeholder='ABCDE1234F'
        caption='Enter your 10-character PAN number'
      />

      <Ux4gPanInputField
        value={errorPan}
        onValueChange={setErrorPan}
        label='Error state'
        placeholder='ABCDE1234F'
        status='error'
        caption='Please enter a valid PAN number'
      />

      <Ux4gPanInputField
        value={successPan}
        onValueChange={setSuccessPan}
        label='Success state'
        placeholder='ABCDE1234F'
        status='success'
        caption='Enter your 10-character PAN number'
      />

      <Ux4gPanInputField
        value={disabledPan}
        onValueChange={setDisabledPan}
        label='Disabled'
        placeholder='ABCDE1234F'
        enabled={false}
        caption='Enter your 10-character PAN number'
      />
    </View>
  );
}`:i==="input-otp-basic"?`import React, { useState } from 'react';
import { Ux4gOtpInput } from 'ux4g-react-native-design-system';

export default function InputOtpBasicExample() {
  const [otp, setOtp] = useState('');

  return (
    <Ux4gOtpInput
      value={otp}
      onChanged={setOtp}
      length={6}
      label='Enter OTP'
      captionVariant='resendTimer'
      captionLeadingText="Didn't receive OTP?"
      captionTrailingText='Resend in 00:17'
    />
  );
}`:i==="input-otp-varients"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gOtpInput } from 'ux4g-react-native-design-system';

export default function InputOtpVarientsExample() {
  const [defaultOtp, setDefaultOtp] = useState('');
  const [errorOtp, setErrorOtp] = useState('12');
  const [successOtp, setSuccessOtp] = useState('123456');
  const [lockedOtp, setLockedOtp] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gOtpInput
        value={defaultOtp}
        onChanged={setDefaultOtp}
        label='Default'
        length={6}
        captionVariant='resendTimer'
        captionLeadingText="Didn't receive OTP?"
        captionTrailingText='Resend in 00:17'
      />

      <Ux4gOtpInput
        value={errorOtp}
        onChanged={setErrorOtp}
        label='Error state'
        length={6}
        status='error'
        captionVariant='plain'
        captionText='Please enter a valid OTP'
      />

      <Ux4gOtpInput
        value={successOtp}
        onChanged={setSuccessOtp}
        label='Success state'
        length={6}
        status='success'
        captionVariant='success'
        captionText='Verification successful'
      />

      <Ux4gOtpInput
        value={lockedOtp}
        onChanged={setLockedOtp}
        label='Disabled'
        length={6}
        enabled={false}
        captionVariant='locked'
        captionLeadingText='Too many attempts'
        captionTrailingText='Resend OTP'
      />
    </View>
  );
}`:i==="input-required-disabled"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputRequiredDisabledExample() {
  const [applicationId, setApplicationId] = useState('GOV/2025/001');
  const [fullName, setFullName] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gInputField
        value={applicationId}
        onValueChange={setApplicationId}
        label='Application ID'
        enabled={false}
      />
      <Ux4gInputField
        value={fullName}
        onValueChange={setFullName}
        label='Full Name'
        required={true}
        placeholder='Enter full name'
      />
    </View>
  );
}`:`import React, { useState } from 'react';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputBasicExample() {
  const [value, setValue] = useState('');

  return (
    <Ux4gInputField
      value={value}
      onValueChange={setValue}
      label='Label'
      placeholder='Placeholder'
      caption='Description'
    />
  );
}`,qp=i=>i==="input-status"?`        <Ux4gInputField value={errorValue} onValueChange={setErrorValue} label='Label' placeholder='Placeholder' status='error' caption='Error message' />
        <View style={styles.gap} />
        <Ux4gInputField value={defaultValue} onValueChange={setDefaultValue} label='Label' placeholder='Placeholder' status='defaultStatus' caption='Description' />
        <View style={styles.gap} />
        <Ux4gInputField value={successValue} onValueChange={setSuccessValue} label='Label' placeholder='Placeholder' status='success' caption='Success message' />
        <View style={styles.gap} />
        <Ux4gInputField value={warningValue} onValueChange={setWarningValue} label='Label' placeholder='Placeholder' status='warning' caption='Warning message' />
        <View style={styles.gap} />
        <Ux4gInputField value={disabledValue} onValueChange={setDisabledValue} label='Label' placeholder='Placeholder' enabled={false} caption='Description' />`:i==="input-password"?`        <Ux4gInputField
          value={password}
          onValueChange={setPassword}
          label='Password'
          placeholder='Enter your password'
          type='password'
        />`:i==="input-icons"?`        <>
        <Ux4gInputField
          value={searchValue}
          onValueChange={setSearchValue}
          label='Leading icon'
          placeholder='Search...'
          leadingIcon={Ux4gIcons.search({ size: 18, color: '#8D8F93' })}
        />
        <View style={styles.gap} />
        <Ux4gInputField
          value={amountValue}
          onValueChange={setAmountValue}
          label='Trailing icon'
          placeholder='Enter amount'
          trailingIcon={<Text style={{ fontSize: 22, color: '#8D8F93' }}>₹</Text>}
        />
        <View style={styles.gap} />
        <Ux4gInputField
          value={locationValue}
          onValueChange={setLocationValue}
          label='Both icons'
          placeholder='Location'
          leadingIcon={<MaterialIcons name='location-on' size={18} color='#8D8F93' />}
          trailingIcon={Ux4gIcons.settings({ size: 18, color: '#8D8F93' })}
        />
        </>`:i==="input-prefix-postfix"?`        <Ux4gInputField
          value={amount}
          onValueChange={setAmount}
          label='Amount'
          prefixText='₹'
          postfixText='.00'
          type='number'
        />
        <View style={styles.gap} />
        <Ux4gInputField
          value={website}
          onValueChange={setWebsite}
          label='Website'
          placeholder='https:// example.com'
        />`:i==="input-aadhaar-basic"?`        <Ux4gAadhaarInputField
          value={aadhaar}
          onValueChange={setAadhaar}
          label='Aadhaar Number'
          placeholder='XXXX XXXX XXXX'
          required={true}
        />`:i==="input-aadhaar-varients"?`        <Ux4gAadhaarInputField
          value={defaultAadhaar}
          onValueChange={setDefaultAadhaar}
          label='Default'
          placeholder='XXXX XXXX XXXX'
          caption='Enter your 12-digit Aadhaar number'
        />
        <View style={styles.gap} />
        <Ux4gAadhaarInputField
          value={errorAadhaar}
          onValueChange={setErrorAadhaar}
          label='Error state'
          placeholder='XXXX XXXX XXXX'
          status='error'
          caption='Please enter a valid Aadhaar number'
        />
        <View style={styles.gap} />
        <Ux4gAadhaarInputField
          value={successAadhaar}
          onValueChange={setSuccessAadhaar}
          label='Success state'
          placeholder='XXXX XXXX XXXX'
          status='success'
          caption='Enter your 12-digit Aadhaar number'
        />
        <View style={styles.gap} />
        <Ux4gAadhaarInputField
          value={disabledAadhaar}
          onValueChange={setDisabledAadhaar}
          label='Disabled'
          placeholder='XXXX XXXX XXXX'
          enabled={false}
          caption='Enter your 12-digit Aadhaar number'
        />`:i==="input-pan-basic"?`        <Ux4gPanInputField
          value={pan}
          onValueChange={setPan}
          label='PAN Card Number'
          placeholder='ABCDE1234F'
          required={true}
        />`:i==="input-pan-varients"?`        <Ux4gPanInputField
          value={defaultPan}
          onValueChange={setDefaultPan}
          label='Default'
          placeholder='ABCDE1234F'
          caption='Enter your 10-character PAN number'
        />
        <View style={styles.gap} />
        <Ux4gPanInputField
          value={errorPan}
          onValueChange={setErrorPan}
          label='Error state'
          placeholder='ABCDE1234F'
          status='error'
          caption='Please enter a valid PAN number'
        />
        <View style={styles.gap} />
        <Ux4gPanInputField
          value={successPan}
          onValueChange={setSuccessPan}
          label='Success state'
          placeholder='ABCDE1234F'
          status='success'
          caption='Enter your 10-character PAN number'
        />
        <View style={styles.gap} />
        <Ux4gPanInputField
          value={disabledPan}
          onValueChange={setDisabledPan}
          label='Disabled'
          placeholder='ABCDE1234F'
          enabled={false}
          caption='Enter your 10-character PAN number'
        />`:i==="input-otp-basic"?`        <Ux4gOtpInput
          value={otp}
          onChanged={setOtp}
          length={6}
          label='Enter OTP'
          captionVariant='resendTimer'
          captionLeadingText="Didn't receive OTP?"
          captionTrailingText='Resend in 00:17'
        />`:i==="input-otp-varients"?`        <Ux4gOtpInput
          value={defaultOtp}
          onChanged={setDefaultOtp}
          label='Default'
          length={6}
          captionVariant='resendTimer'
          captionLeadingText="Didn't receive OTP?"
          captionTrailingText='Resend in 00:17'
        />
        <View style={styles.gap} />
        <Ux4gOtpInput
          value={errorOtp}
          onChanged={setErrorOtp}
          label='Error state'
          length={6}
          status='error'
          captionVariant='plain'
          captionText='Please enter a valid OTP'
        />
        <View style={styles.gap} />
        <Ux4gOtpInput
          value={successOtp}
          onChanged={setSuccessOtp}
          label='Success state'
          length={6}
          status='success'
          captionVariant='success'
          captionText='Verification successful'
        />
        <View style={styles.gap} />
        <Ux4gOtpInput
          value={lockedOtp}
          onChanged={setLockedOtp}
          label='Disabled'
          length={6}
          enabled={false}
          captionVariant='locked'
          captionLeadingText='Too many attempts'
          captionTrailingText='Resend OTP'
        />`:i==="input-required-disabled"?`        <Ux4gInputField
          value={applicationId}
          onValueChange={setApplicationId}
          label='Application ID'
          enabled={false}
        />
        <View style={styles.gap} />
        <Ux4gInputField
          value={fullName}
          onValueChange={setFullName}
          label='Full Name'
          required={true}
          placeholder='Enter full name'
        />`:`        <Ux4gInputField
          value={basicValue}
          onValueChange={setBasicValue}
          label='Label'
          placeholder='Placeholder'
          caption='Description'
        />`,Rp=({isDark:i,story:d="input-basic"})=>{const[c,m]=T.useState("preview"),f=Bp(d),b=zp[f],x=T.useMemo(()=>Ip(f),[f]),s=()=>{const p=`import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
    import { MaterialIcons } from '@expo/vector-icons';
  import { Ux4gInputField, Ux4gAadhaarInputField, Ux4gPanInputField, Ux4gOtpInput, Ux4gThemeProvider, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function App() {
  const [basicValue, setBasicValue] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [successValue, setSuccessValue] = useState('');
  const [warningValue, setWarningValue] = useState('');
  const [disabledValue, setDisabledValue] = useState('');
  const [password, setPassword] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [amount, setAmount] = useState('0');
  const [aadhaar, setAadhaar] = useState('');
  const [defaultAadhaar, setDefaultAadhaar] = useState('');
  const [errorAadhaar, setErrorAadhaar] = useState('');
  const [successAadhaar, setSuccessAadhaar] = useState('1234 5678 9012');
  const [disabledAadhaar, setDisabledAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [defaultPan, setDefaultPan] = useState('');
  const [errorPan, setErrorPan] = useState('');
  const [successPan, setSuccessPan] = useState('ABCDE1234F');
  const [disabledPan, setDisabledPan] = useState('');
  const [otp, setOtp] = useState('');
  const [defaultOtp, setDefaultOtp] = useState('');
  const [errorOtp, setErrorOtp] = useState('12');
  const [successOtp, setSuccessOtp] = useState('123456');
  const [lockedOtp, setLockedOtp] = useState('');
  const [website, setWebsite] = useState('https:// example.com');
  const [applicationId, setApplicationId] = useState('GOV/2025/001');
  const [fullName, setFullName] = useState('');

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${qp(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  gap: {
    height: 16,
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gInputField%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack InputField Preview"})},w=[{name:"value",type:"string",default:"required",desc:"Current text string inside the input field.",required:!0},{name:"onValueChange",type:"(value: string) => void",default:"required",desc:"Callback triggered when text changes.",required:!0},{name:"size",type:"'small' | 'medium' | 'large' | 'xl'",default:"'medium'",desc:"Size of the input field.",required:!1},{name:"type",type:"'text' | 'password' | 'number' | 'email'",default:"'text'",desc:"Type of input field.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Validation status controlling border and caption color.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Label displayed above the input box.",required:!1},{name:"required",type:"boolean",default:"false",desc:"Whether field is required (shows red asterisk).",required:!1},{name:"placeholder",type:"string",default:"undefined",desc:"Placeholder hint text.",required:!1},{name:"caption",type:"string",default:"undefined",desc:"Optional caption or validation message.",required:!1},{name:"leadingIcon",type:"ReactNode",default:"undefined",desc:"Leading icon/content inside input box.",required:!1},{name:"trailingIcon",type:"ReactNode",default:"undefined",desc:"Trailing icon/content for non-password input.",required:!1},{name:"onTrailingIconPressed",type:"() => void",default:"undefined",desc:"Callback when trailing icon is pressed.",required:!1},{name:"prefixText",type:"string",default:"undefined",desc:"Prefix text shown after leading icon.",required:!1},{name:"postfixText",type:"string",default:"undefined",desc:"Postfix text shown before trailing icon.",required:!1},{name:"trailingIconLabel",type:"ReactNode",default:"undefined",desc:"Trailing icon/content in label row.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the input is interactive.",required:!1},{name:"readOnly",type:"boolean",default:"false",desc:"Whether the input is non-editable.",required:!1},{name:"singleLine",type:"boolean",default:"true",desc:"Single-line or multi-line mode.",required:!1},{name:"maxLines",type:"number",default:"undefined",desc:"Maximum lines for multi-line mode.",required:!1},{name:"maxLength",type:"number",default:"undefined",desc:"Maximum character length.",required:!1},{name:"textAlign",type:"'left' | 'center' | 'right'",default:"'left'",desc:"Text alignment inside input.",required:!1},{name:"style",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for input text.",required:!1},{name:"placeholderStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for placeholder text color style.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"captionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for caption text.",required:!1},{name:"backgroundColor",type:"string",default:"theme-based",desc:"Background color override.",required:!1},{name:"borderColor",type:"string",default:"theme/status-based",desc:"Border color override for enabled default state.",required:!1},{name:"disabledBorderColor",type:"string",default:"onSurface @ 30%",desc:"Border color override when disabled.",required:!1},{name:"borderWidth",type:"number",default:"1.0",desc:"Border width for enabled states.",required:!1},{name:"disabledBorderWidth",type:"number",default:"0.0",desc:"Border width when disabled.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Outer container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"InputFieldExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},$p=({isDark:i,story:d="spinner-basic"})=>{const[c,m]=T.useState("preview"),[f,b]=T.useState(40),[x,s]=T.useState(4),[w,p]=T.useState(100),N=T.useMemo(()=>{const I=[];return I.push("import { Ux4gSpinner } from 'ux4g-react-native-design-system';"),I.push(""),I.push("<Ux4gSpinner"),I.push(`  size={${f}}`),I.push(`  strokeWidth={${x}}`),w!==100&&I.push(`  percentage={${w}}`),I.push("/>"),I.join(`
`)},[f,x,w]),A=()=>{const F=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSpinner, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
${`        <Ux4gSpinner
          size={${f}}
          strokeWidth={${x}}
          percentage={${w}}
        />`}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});`,Y=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gSpinner%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(F)}`;return t.jsx("iframe",{src:Y,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},B=[{name:"size",type:"number",default:"40",desc:"Diameter size of the spinner ring.",required:!1},{name:"color",type:"string",default:"theme.colors.primary",desc:"Primary color of the spinner arc.",required:!1},{name:"gradientColors",type:"string[]",default:"undefined",desc:"List of colors for multi-tone arc segments.",required:!1},{name:"percentage",type:"number",default:"100",desc:"Arc fill percentage from 0 to 100.",required:!1},{name:"strokeWidth",type:"number",default:"4",desc:"Thickness of the spinner ring.",required:!1},{name:"rotationDurationMillis",type:"number",default:"1200",desc:"Milliseconds for a full 360-degree rotation.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer spinner container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Spinner"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Spinner displays an animated circular progress indicator for loading states."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:A()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:N,language:"TSX",filename:"SpinnerExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:B.map(I=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[I.name,I.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:I.type})}),t.jsx("td",{children:I.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:I.default})})]},I.name))})]})})]})]})})]})},Lp=({isDark:i,story:d="fileupload-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const p=[];return p.push("import { Ux4gFileUpload } from 'ux4g-react-native-design-system';"),p.push(""),d==="fileupload-dashed"?(p.push("<Ux4gFileUpload"),p.push("  borderStyle='dashed'"),p.push("  allowedExtensions={['jpg', 'png', 'pdf', 'docx']}"),p.push("  maxFileSize={10 * 1024 * 1024}"),p.push("/>")):d==="fileupload-preloaded"?(p.push("<Ux4gFileUpload"),p.push("  initialFiles={["),p.push("    { id: '1', name: 'invoice.pdf', fileSize: 228200, status: 'success', progress: 1 },"),p.push("    { id: '2', name: 'pan-card.jpg', fileSize: 81520, status: 'uploading', progress: 0.64 },"),p.push("  ]}"),p.push("/>")):(p.push("<Ux4gFileUpload"),p.push("  allowedExtensions={['jpg', 'png', 'pdf']}"),p.push("  maxFiles={5}"),p.push("  maxFileSize={5 * 1024 * 1024}"),p.push("/>")),p.join(`
`)},[d]),b=()=>{let p="";d==="fileupload-dashed"?p=`        <Ux4gFileUpload
          borderStyle='dashed'
          allowedExtensions={['jpg', 'png', 'pdf', 'docx']}
          maxFiles={3}
          maxFileSize={10 * 1024 * 1024}
        />`:d==="fileupload-preloaded"?p=`        <Ux4gFileUpload
          initialFiles={[
            { id: '1', name: 'invoice.pdf', fileSize: 228200, status: 'success', progress: 1 },
            { id: '2', name: 'pan-card.jpg', fileSize: 81520, status: 'uploading', progress: 0.64 },
            { id: '3', name: 'aadhaar.png', fileSize: 149200, status: 'error', progress: 0.2, errorMessage: 'Network timeout' },
          ]}
        />`:p=`        <Ux4gFileUpload
          allowedExtensions={['jpg', 'png', 'pdf']}
          maxFiles={5}
          maxFileSize={5 * 1024 * 1024}
        />`;const N=`import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Ux4gFileUpload, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${p}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
});`,A=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gFileUpload%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*,react-native-document-picker@*,react-native-image-picker@*&code=${encodeURIComponent(N)}`;return t.jsx("iframe",{src:A,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack FileUpload Preview"})},x=[{name:"maxFiles",type:"number",default:"5",desc:"Maximum number of files allowed.",required:!1},{name:"maxFileSize",type:"number",default:"5 * 1024 * 1024",desc:"Maximum file size in bytes.",required:!1},{name:"onFilesChanged",type:"(files: UploadedFile[]) => void",default:"undefined",desc:"Callback fired when files list changes.",required:!1},{name:"onUpload",type:"(file: UploadedFile) => Promise<boolean>",default:"undefined",desc:"Custom async upload handler.",required:!1},{name:"allowedExtensions",type:"string[]",default:"['jpg','png','pdf']",desc:"Allowed extensions for picking.",required:!1},{name:"borderStyle",type:"'solid' | 'dashed'",default:"'solid'",desc:"Border style for upload container.",required:!1},{name:"buttonBorderRadius",type:"number",default:"8",desc:"Corner radius for action buttons.",required:!1},{name:"buttonColor",type:"string",default:"undefined",desc:"Override text/icon color in action buttons.",required:!1},{name:"buttonBorderColor",type:"string",default:"undefined",desc:"Override border color of upload button.",required:!1},{name:"errorTitle",type:"string",default:"undefined",desc:"Override title shown for error state.",required:!1},{name:"errorText",type:"string",default:"undefined",desc:"Override error message template.",required:!1},{name:"initialFiles",type:"UploadedFile[]",default:"undefined",desc:"Pre-populated file list for showcase/testing.",required:!1}],s={"fileupload-basic":{title:"FileUpload",description:"Basic document upload with file type restrictions and size limits."},"fileupload-dashed":{title:"FileUpload",description:"Dashed border variant with custom extension and size limits."},"fileupload-preloaded":{title:"FileUpload",description:"Preloaded list variant showing success, uploading, and error statuses."}},w=s[d]??s["fileupload-basic"];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:w.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:w.description}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"FileUploadExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Wp=({isDark:i,story:d="accordion-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { Ux4gAccordion } from 'ux4g-react-native-design-system';"),s.push("import { Text } from 'react-native';"),s.push("import { useState } from 'react';"),s.push(""),s.push("// Basic Accordion"),s.push("const [expanded1, setExpanded1] = useState(false);"),s.push("<Ux4gAccordion"),s.push('  title="Basic Accordion"'),s.push("  expanded={expanded1}"),s.push("  onExpandedChange={setExpanded1}"),s.push(">"),s.push("  <Text>Content</Text>"),s.push("</Ux4gAccordion>"),s.push(""),s.push("// Leading Chevron"),s.push("const [expanded2, setExpanded2] = useState(false);"),s.push("<Ux4gAccordion"),s.push('  title="Leading Chevron"'),s.push('  chevronPosition="leading"'),s.push("  expanded={expanded2}"),s.push("  onExpandedChange={setExpanded2}"),s.push(">"),s.push("  <Text>Content</Text>"),s.push("</Ux4gAccordion>"),s.push(""),s.push("// Disabled Accordion"),s.push("<Ux4gAccordion"),s.push('  title="Disabled Accordion"'),s.push("  enabled={false}"),s.push(">"),s.push("  <Text>Content</Text>"),s.push("</Ux4gAccordion>"),s.join(`
`)},[]),b=()=>{const s=`import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gAccordion, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [basicExpanded, setBasicExpanded] = useState(false);
  const [leadingExpanded, setLeadingExpanded] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gAccordion 
          title="Basic Accordion"
          expanded={basicExpanded}
          onExpandedChange={setBasicExpanded}
        >
          <Text style={{ color: ${i?"'#fff'":"'#000'"} }}>This is a basic accordion with trailing chevron.</Text>
        </Ux4gAccordion>
        
        <View style={{ height: 16 }} />
        
        <Ux4gAccordion 
          title="Leading Chevron" 
          chevronPosition="leading"
          expanded={leadingExpanded}
          onExpandedChange={setLeadingExpanded}
        >
          <Text style={{ color: ${i?"'#fff'":"'#000'"} }}>This accordion has a leading chevron.</Text>
        </Ux4gAccordion>
        
        <View style={{ height: 16 }} />
        
        <Ux4gAccordion 
          title="Disabled Accordion" 
          enabled={false}
        >
          <Text style={{ color: ${i?"'#fff'":"'#000'"} }}>This accordion is disabled.</Text>
        </Ux4gAccordion>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  }
});`,w=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gAccordion%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(s)}`;return t.jsx("iframe",{src:w,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},x=[{name:"title",type:"string",default:"—",desc:"Title text displayed in the accordion header.",required:!0},{name:"children",type:"ReactNode",default:"undefined",desc:"Content inside the expandable panel.",required:!1},{name:"content",type:"ReactNode",default:"undefined",desc:"Alias for children, mirrors Flutter child.",required:!1},{name:"expanded",type:"boolean",default:"false",desc:"Whether the accordion panel is currently expanded.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the accordion is interactive and enabled.",required:!1},{name:"onExpandedChange",type:"(expanded: boolean) => void",default:"undefined",desc:"Callback fired when user taps the header.",required:!1},{name:"backgroundColor",type:"string",default:"theme.colors.surface",desc:"Background color for the header bar.",required:!1},{name:"contentBackgroundColor",type:"string",default:"backgroundColor",desc:"Background color for expanded content container.",required:!1},{name:"collapsedBorderColor",type:"string",default:"onSurface @ 12%",desc:"Border color when collapsed.",required:!1},{name:"expandedBorderColor",type:"string",default:"collapsedBorderColor",desc:"Border color when expanded.",required:!1},{name:"titleColor",type:"string",default:"theme.colors.onSurface",desc:"Title text color.",required:!1},{name:"disabledTitleColor",type:"string",default:"onSurface @ 38%",desc:"Title text color when disabled.",required:!1},{name:"iconColor",type:"string",default:"theme.colors.onSurface",desc:"Chevron and leading icon color.",required:!1},{name:"disabledIconColor",type:"string",default:"onSurface @ 38%",desc:"Chevron and leading icon color when disabled.",required:!1},{name:"leadingIcon",type:"ReactNode",default:"undefined",desc:"Optional leading icon displayed before title.",required:!1},{name:"chevronPosition",type:"'leading' | 'trailing'",default:"'trailing'",desc:"Position of the chevron indicator.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for outer wrapper.",required:!1},{name:"headerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for header row container.",required:!1},{name:"contentStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for expanded content container.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom style for header title text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Accordion"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Expandable panel component supporting custom borders, chevrons, and animated transitions."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"AccordionExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Mp=({isDark:i})=>{const[d,c]=T.useState("preview"),m=T.useMemo(()=>{const x=[];return x.push("import { Ux4gAccordionGroup, Ux4gAccordionItem } from 'ux4g-react-native-design-system';"),x.push("import { Text } from 'react-native';"),x.push("import { useState } from 'react';"),x.push(""),x.push("const items: Ux4gAccordionItem[] = ["),x.push("  {"),x.push('    title: "What is UX4G?",'),x.push("    content: <Text>UX4G is a React Native design system.</Text>"),x.push("  },"),x.push("  {"),x.push('    title: "How do I install it?",'),x.push("    content: <Text>Install it via npm or yarn.</Text>"),x.push("  },"),x.push("  {"),x.push('    title: "Is it open source?",'),x.push("    content: <Text>Yes, UX4G is open source under the MIT license.</Text>"),x.push("  }"),x.push("];"),x.push(""),x.push("const [expandedIndex, setExpandedIndex] = useState<number | null>(2);"),x.push(""),x.push("<Ux4gAccordionGroup"),x.push("  items={items}"),x.push("  expandedIndex={expandedIndex}"),x.push("  onExpandedIndexChange={setExpandedIndex}"),x.push("/>"),x.join(`
`)},[]),f=()=>{const x=`import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gAccordionGroup, Ux4gAccordionItem, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState(2);

  const items = [
    {
      title: "What is UX4G?",
      content: <Text style={{ color: ${i?"'#fff'":"'#000'"} }}>UX4G is a React Native design system.</Text>
    },
    {
      title: "How do I install it?",
      content: <Text style={{ color: ${i?"'#fff'":"'#000'"} }}>Install it via npm or yarn.</Text>
    },
    {
      title: "Is it open source?",
      content: <Text style={{ color: ${i?"'#fff'":"'#000'"} }}>Yes, UX4G is open source under the MIT license.</Text>
    }
  ];

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gAccordionGroup 
          items={items}
          expandedIndex={expandedIndex}
          onExpandedIndexChange={setExpandedIndex}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  }
});`,s=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gAccordionGroup%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:s,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},b=[{name:"items",type:"Ux4gAccordionItem[]",default:"—",desc:"Array of accordion items.",required:!0},{name:"expandedIndex",type:"number | null",default:"undefined",desc:"Index of the currently expanded item (or null/undefined if none).",required:!1},{name:"onExpandedIndexChange",type:"(index: number | null) => void",default:"undefined",desc:"Callback fired when an item is expanded or collapsed.",required:!1},{name:"itemSpacing",type:"number",default:"Ux4gSpace.space20",desc:"Vertical spacing between accordion items.",required:!1},{name:"contentBuilder",type:"(index: number, item: Ux4gAccordionItem) => ReactNode",default:"undefined",desc:"Optional builder function returning content per item.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for the group container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"AccordionGroup"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"AccordionGroup ensures only one item is open at a time."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",style:{flex:1,paddingRight:0},children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>c("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>c("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>c("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:f()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:m,language:"TSX",filename:"AccordionGroupExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:b.map(x=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[x.name,x.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:x.type})}),t.jsx("td",{children:x.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:x.default})})]},x.name))})]})})]})]})})]})},_p=({isDark:i,story:d="app-header-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { View, Text } from 'react-native';"),s.push("import { Ux4gAppHeader, Ux4gIcons } from 'ux4g-react-native-design-system';"),s.push(""),d==="app-header-back"?(s.push("// With Back Button"),s.push("<Ux4gAppHeader"),s.push('  title="App Header"'),s.push("  showBackButton={true}"),s.push("  showAvatar={true}"),s.push("  actions={["),s.push('    { icon: "notifications", onPressed: () => console.log("Notification") },'),s.push('    { icon: "settings", onPressed: () => console.log("Settings") }'),s.push("  ]}"),s.push("/>")):d==="app-header-filled"?(s.push("// Filled Variant"),s.push("<Ux4gAppHeader"),s.push('  title="Page Title"'),s.push('  variant="filled"'),s.push("  showBackButton={true}"),s.push("  actions={["),s.push('    { icon: "search", onPressed: () => console.log("Search") }'),s.push("  ]}"),s.push("/>")):d==="app-header-custom-leading"?(s.push("// Custom Leading Logos & Custom Action Menu"),s.push("<Ux4gAppHeader"),s.push('  title="Title"'),s.push("  showAvatar={true}"),s.push('  avatarInitials="JD"'),s.push("  leadingWidgets={["),s.push('    <View style={{ flexDirection: "row", alignItems: "center" }} key="leading">'),s.push("      {Ux4gIcons.nationalEmblemLogo({ size: 26 })}"),s.push('      <View style={{ width: 1, height: 18, backgroundColor: "#D0D0D0", marginHorizontal: 8 }} />'),s.push("      {Ux4gIcons.union({ size: 20 })}"),s.push("    </View>"),s.push("  ]}"),s.push("  actions={["),s.push('    { icon: "scan", onPressed: () => {} }'),s.push("  ]}"),s.push("/>")):(s.push("// Basic App Header"),s.push("<Ux4gAppHeader"),s.push('  title="App Header"'),s.push("  showAvatar={true}"),s.push("  leadingWidgets={["),s.push('    <Text style={{ fontSize: 22 }} key="menu">☰</Text>'),s.push("  ]}"),s.push("  actions={["),s.push('    { icon: "notifications", onPressed: () => {} },'),s.push('    { icon: "settings", onPressed: () => {} }'),s.push("  ]}"),s.push("/>")),s.join(`
`)},[d]),b=()=>{let s="";d==="app-header-back"?s=`        <Ux4gAppHeader
          title="App Header"
          showBackButton={true}
          showAvatar={true}
          actions={[
            { icon: 'notifications', onPressed: () => console.log('Notification pressed') },
            { icon: 'settings', onPressed: () => console.log('Settings pressed') }
          ]}
        />`:d==="app-header-filled"?s=`        <Ux4gAppHeader
          title="Page Title"
          variant="filled"
          showBackButton={true}
          actions={[
            { icon: 'search', onPressed: () => console.log('Search pressed') }
          ]}
        />`:d==="app-header-custom-leading"?s=`        <Ux4gAppHeader
          title="Title"
          showAvatar={true}
          avatarInitials="JD"
          leadingWidgets={[
            <View style={{ flexDirection: 'row', alignItems: 'center' }} key="leading">
              {Ux4gIcons.nationalEmblemLogo({ size: 26 })}
              <View style={{ width: 1, height: 18, backgroundColor: '#D0D0D0', marginHorizontal: 8 }} />
              {Ux4gIcons.union({ size: 20 })}
            </View>
          ]}
          actions={[
            { icon: 'scan', onPressed: () => console.log('Scan pressed') }
          ]}
        />
        
        <View style={{ height: 24 }} />
        
        <Ux4gAppHeader
          title="Title"
          leadingWidgets={[
            <View style={{ flexDirection: 'row', alignItems: 'center' }} key="leading">
              {Ux4gIcons.nationalEmblemLogo({ size: 26 })}
              <View style={{ width: 1, height: 18, backgroundColor: '#D0D0D0', marginHorizontal: 8 }} />
              {Ux4gIcons.union({ size: 20 })}
            </View>
          ]}
          actions={[
            { icon: 'scan', onPressed: () => console.log('Scan pressed') },
            {
              customWidget: (
                <View key="menu" style={{ width: 36, height: 36, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, color: ${i?"'#E6E1E5'":"'#1C1B1F'"} }}>☰</Text>
                </View>
              )
            }
          ]}
        />`:s=`        <Ux4gAppHeader
          title="App Header"
          showAvatar={true}
          leadingWidgets={[
            <Text style={{ fontSize: 22, color: ${i?"'#E6E1E5'":"'#1C1B1F'"} }} key="menu">☰</Text>
          ]}
          actions={[
            { icon: 'notifications', onPressed: () => console.log('Notification pressed') },
            { icon: 'settings', onPressed: () => console.log('Settings pressed') }
          ]}
        />`;const w=`import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gAppHeader, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  }
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gAppHeader%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack AppHeader Preview"})},x=[{name:"title",type:"string",default:"'Title'",desc:"Header title text.",required:!1},{name:"variant",type:"'light' | 'filled' | 'outlined'",default:"'outlined'",desc:"Visual variant of the app header.",required:!1},{name:"showBackButton",type:"boolean",default:"false",desc:"Whether to display the back arrow button.",required:!1},{name:"onBackPressed",type:"() => void",default:"undefined",desc:"Callback fired when back button is pressed.",required:!1},{name:"leadingWidgets",type:"ReactNode[]",default:"undefined",desc:"Custom leading widgets/logo row.",required:!1},{name:"actions",type:"Ux4gAppHeaderAction[]",default:"undefined",desc:"Array of trailing action buttons/icons.",required:!1},{name:"avatar",type:"ReactNode",default:"undefined",desc:"Custom avatar widget.",required:!1},{name:"avatarSize",type:"'xs' | 's' | 'm' | 'l' | 'xl'",default:"'s'",desc:"Size used when rendering default avatar.",required:!1},{name:"showAvatar",type:"boolean",default:"false",desc:"Whether to display default leading avatar.",required:!1},{name:"avatarImageUrl",type:"string",default:"undefined",desc:"Avatar image URL for default avatar.",required:!1},{name:"avatarInitials",type:"string",default:"undefined",desc:"Initials used when avatar image is absent.",required:!1},{name:"onAvatarPressed",type:"() => void",default:"undefined",desc:"Callback fired when avatar is tapped.",required:!1},{name:"titleWidget",type:"ReactNode",default:"undefined",desc:"Custom title widget replacing text title.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for title text.",required:!1},{name:"backgroundColor",type:"string",default:"variant-based token",desc:"Header background color override.",required:!1},{name:"foregroundColor",type:"string",default:"variant-based token",desc:"Foreground color for title/icons.",required:!1},{name:"borderColor",type:"string",default:"onSurface @ 12%",desc:"Bottom border color for outlined variant.",required:!1},{name:"height",type:"number",default:"48/56 responsive",desc:"Explicit header height override.",required:!1},{name:"horizontalPadding",type:"number",default:"12",desc:"Horizontal padding inside header.",required:!1},{name:"leadingSpacing",type:"number",default:"8",desc:"Spacing between leading section and title.",required:!1},{name:"actionSpacing",type:"number",default:"4",desc:"Spacing between action items.",required:!1},{name:"elevation",type:"number",default:"0",desc:"Android elevation/iOS shadow intensity.",required:!1},{name:"useSafeArea",type:"boolean",default:"true",desc:"Wrap content with SafeAreaView.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"App Header"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Top app bar navigation header supporting screen titles, back buttons, avatars, leading national emblem logos, and trailing actions."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"AppHeaderExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Op=({isDark:i,story:d="avatar-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { View } from 'react-native';"),d==="avatar-status"?(s.push("import { Ux4gStatusAvatar } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// Status Avatars (Initials)"),s.push('<Ux4gStatusAvatar variant="online" initials="JD" size="l" />'),s.push('<Ux4gStatusAvatar variant="busy" initials="AB" size="l" />'),s.push('<Ux4gStatusAvatar variant="offline" initials="CK" size="l" />'),s.push('<Ux4gStatusAvatar variant="warning" initials="MS" size="l" />'),s.push('<Ux4gStatusAvatar variant="error" initials="RK" size="l" />'),s.push(""),s.push("// Status Avatars (Image)"),s.push('<Ux4gStatusAvatar variant="online" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />'),s.push('<Ux4gStatusAvatar variant="busy" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />'),s.push('<Ux4gStatusAvatar variant="offline" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />'),s.push('<Ux4gStatusAvatar variant="warning" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />'),s.push('<Ux4gStatusAvatar variant="error" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />')):d==="avatar-profile"?(s.push("import { Ux4gProfileAvatar } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// Profile Badges & Actions (Initials)"),s.push('<Ux4gProfileAvatar variant="verified" initials="JD" size="l" />'),s.push('<Ux4gProfileAvatar variant="star" initials="AB" size="l" />'),s.push('<Ux4gProfileAvatar variant="admin" initials="CK" size="l" />'),s.push('<Ux4gProfileAvatar variant="edit" initials="MS" size="l" />'),s.push('<Ux4gProfileAvatar variant="camera" initials="RK" size="l" />'),s.push('<Ux4gProfileAvatar variant="remove" initials="VP" size="l" />'),s.push(""),s.push("// Profile Badges & Actions (Image)"),s.push('<Ux4gProfileAvatar variant="verified" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />'),s.push('<Ux4gProfileAvatar variant="star" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />'),s.push('<Ux4gProfileAvatar variant="admin" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />'),s.push('<Ux4gProfileAvatar variant="edit" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />'),s.push('<Ux4gProfileAvatar variant="camera" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />'),s.push('<Ux4gProfileAvatar variant="remove" imageUrl="https://i.pravatar.cc/150?u=user6" size="l" />')):d==="avatar-group"?(s.push("import { Ux4gAvatarGroup } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// Group with Images (Collapsed Overlapping)"),s.push("<Ux4gAvatarGroup"),s.push("  items={["),s.push('    { imageUrl: "https://i.pravatar.cc/150?u=user1" },'),s.push('    { imageUrl: "https://i.pravatar.cc/150?u=user2" },'),s.push('    { imageUrl: "https://i.pravatar.cc/150?u=user3" },'),s.push('    { imageUrl: "https://i.pravatar.cc/150?u=user4" },'),s.push('    { imageUrl: "https://i.pravatar.cc/150?u=user5" }'),s.push("  ]}"),s.push("  maxLimit={4}"),s.push("  collapsed={true}"),s.push("/>"),s.push(""),s.push("// Group with Mixed Images & Initials (Spaced)"),s.push("<Ux4gAvatarGroup"),s.push("  items={["),s.push('    { imageUrl: "https://i.pravatar.cc/150?u=user1" },'),s.push('    { imageUrl: "https://i.pravatar.cc/150?u=user2" },'),s.push('    { initials: "CK" },'),s.push('    { initials: "MS" }'),s.push("  ]}"),s.push("  collapsed={false}"),s.push("/>")):(s.push("import { Ux4gAvatar } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// Initials Avatar (Sizes xs to xxl)"),s.push('<Ux4gAvatar initials="XS" size="xs" />'),s.push('<Ux4gAvatar initials="S" size="s" />'),s.push('<Ux4gAvatar initials="M" size="m" />'),s.push('<Ux4gAvatar initials="L" size="l" />'),s.push('<Ux4gAvatar initials="XL" size="xl" />'),s.push('<Ux4gAvatar initials="XXL" size="xxl" />'),s.push(""),s.push("// Image Avatars Across Sizes"),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="xs" />'),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="s" />'),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="m" />'),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />'),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user5" size="xl" />'),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user6" size="xxl" />'),s.push(""),s.push("// Shapes with Images (Circle, Rounded, Square)"),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="l" shape="circle" />'),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="l" shape="rounded" />'),s.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="l" shape="square" />')),s.join(`
`)},[d]),b=()=>{let s="";d==="avatar-status"?s=`        <View style={{ gap: 16, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gStatusAvatar variant="online" initials="JD" size="l" />
            <Ux4gStatusAvatar variant="busy" initials="AB" size="l" />
            <Ux4gStatusAvatar variant="offline" initials="CK" size="l" />
            <Ux4gStatusAvatar variant="warning" initials="MS" size="l" />
            <Ux4gStatusAvatar variant="error" initials="RK" size="l" />
          </View>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gStatusAvatar variant="online" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />
            <Ux4gStatusAvatar variant="busy" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />
            <Ux4gStatusAvatar variant="offline" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />
            <Ux4gStatusAvatar variant="warning" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />
            <Ux4gStatusAvatar variant="error" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />
          </View>
        </View>`:d==="avatar-profile"?s=`        <View style={{ gap: 16, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gProfileAvatar variant="verified" initials="JD" size="l" />
            <Ux4gProfileAvatar variant="star" initials="AB" size="l" />
            <Ux4gProfileAvatar variant="admin" initials="CK" size="l" />
            <Ux4gProfileAvatar variant="edit" initials="MS" size="l" />
            <Ux4gProfileAvatar variant="camera" initials="RK" size="l" />
            <Ux4gProfileAvatar variant="remove" initials="VP" size="l" />
          </View>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gProfileAvatar variant="verified" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />
            <Ux4gProfileAvatar variant="star" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />
            <Ux4gProfileAvatar variant="admin" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />
            <Ux4gProfileAvatar variant="edit" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />
            <Ux4gProfileAvatar variant="camera" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />
            <Ux4gProfileAvatar variant="remove" imageUrl="https://i.pravatar.cc/150?u=user6" size="l" />
          </View>
        </View>`:d==="avatar-group"?s=`        <View style={{ gap: 24, alignItems: 'center' }}>
          <Ux4gAvatarGroup
            items={[
              { imageUrl: 'https://i.pravatar.cc/150?u=user1' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user2' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user3' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user4' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user5' },
            ]}
            maxLimit={4}
            collapsed={true}
          />
          <Ux4gAvatarGroup
            items={[
              { imageUrl: 'https://i.pravatar.cc/150?u=user1' },
              { imageUrl: 'https://i.pravatar.cc/150?u=user2' },
              { initials: 'CK' },
              { initials: 'MS' },
            ]}
            collapsed={false}
          />
        </View>`:s=`        <View style={{ gap: 24, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gAvatar initials="XS" size="xs" />
            <Ux4gAvatar initials="S" size="s" />
            <Ux4gAvatar initials="M" size="m" />
            <Ux4gAvatar initials="L" size="l" />
            <Ux4gAvatar initials="XL" size="xl" />
            <Ux4gAvatar initials="XXL" size="xxl" />
          </View>
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="xs" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="s" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="m" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user5" size="xl" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user6" size="xxl" />
          </View>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="l" shape="circle" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="l" shape="rounded" />
            <Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="l" shape="square" />
          </View>
        </View>`;const w=["Ux4gThemeProvider"];d==="avatar-status"?w.push("Ux4gStatusAvatar"):d==="avatar-profile"?w.push("Ux4gProfileAvatar"):d==="avatar-group"?w.push("Ux4gAvatarGroup"):w.push("Ux4gAvatar");const p=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ${w.join(", ")} } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 20
  }
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gAvatar%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Avatar Preview"})},x=T.useMemo(()=>d==="avatar-group"?[{name:"items",type:"Ux4gAvatarGroupItem[]",default:"—",desc:"List of avatar group items.",required:!0},{name:"size",type:"'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'",default:"'m'",desc:"Avatar size for all items.",required:!1},{name:"maxLimit",type:"number",default:"items.length",desc:"Maximum visible entries before +N overflow.",required:!1},{name:"collapsed",type:"boolean",default:"true",desc:"Use overlapping collapsed layout.",required:!1},{name:"borderColor",type:"string",default:"theme.colors.surface",desc:"Border color in collapsed mode.",required:!1},{name:"borderWidth",type:"number",default:"2",desc:"Border width in collapsed mode.",required:!1},{name:"onRemainingPress",type:"() => void",default:"undefined",desc:"Callback for +N remaining bubble.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for group container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}]:d==="avatar-status"?[{name:"size",type:"'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'",default:"'m'",desc:"Size preset of status avatar.",required:!1},{name:"shape",type:"'circle' | 'rounded' | 'square'",default:"'circle'",desc:"Shape of the main avatar.",required:!1},{name:"imageUrl",type:"string",default:"undefined",desc:"Remote image URL.",required:!1},{name:"initials",type:"string",default:"undefined",desc:"Fallback initials.",required:!1},{name:"avatarIcon",type:"ReactNode",default:"undefined",desc:"Custom fallback icon for avatar.",required:!1},{name:"variant",type:"'online' | 'offline' | 'busy' | 'success' | 'error' | 'warning'",default:"'online'",desc:"Status indicator variant.",required:!1},{name:"statusSize",type:"number",default:"auto by size",desc:"Override size of status indicator.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer wrapper.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}]:d==="avatar-profile"?[{name:"size",type:"'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'",default:"'m'",desc:"Size preset of profile avatar.",required:!1},{name:"shape",type:"'circle' | 'rounded' | 'square'",default:"'circle'",desc:"Shape of the main avatar.",required:!1},{name:"imageUrl",type:"string",default:"undefined",desc:"Remote image URL.",required:!1},{name:"initials",type:"string",default:"undefined",desc:"Fallback initials.",required:!1},{name:"avatarIcon",type:"ReactNode",default:"undefined",desc:"Custom fallback icon for avatar.",required:!1},{name:"variant",type:"'verified' | 'star' | 'admin' | 'edit' | 'camera' | 'remove'",default:"undefined",desc:"Badge/action variant overlay.",required:!1},{name:"badgeSize",type:"number",default:"auto by size",desc:"Override overlay badge/action size.",required:!1},{name:"onVariantPress",type:"() => void",default:"undefined",desc:"Callback when overlay badge/action is pressed.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer wrapper.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}]:[{name:"size",type:"'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'",default:"'m'",desc:"Size preset of the avatar.",required:!1},{name:"shape",type:"'circle' | 'rounded' | 'square'",default:"'circle'",desc:"Shape of the avatar border.",required:!1},{name:"imageUrl",type:"string",default:"undefined",desc:"Remote image URL.",required:!1},{name:"initials",type:"string",default:"undefined",desc:"Fallback text initials.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Custom icon widget.",required:!1},{name:"containerColor",type:"string",default:"theme.colors.primary + 1A",desc:"Background container color.",required:!1},{name:"contentColor",type:"string",default:"theme.colors.primary",desc:"Text color for initials.",required:!1},{name:"iconColor",type:"string",default:"theme.colors.primary",desc:"Icon color when icon is shown.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for avatar container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}],[d]);return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Avatar"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Avatars represent user profiles, initials, status badges, and group representations across 7 sizes."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:x.some(s=>s.required)?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]}):"This component variant has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"AvatarExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Xp=({isDark:i,story:d="badge-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { View } from 'react-native';"),d==="badge-count"?(s.push("import { Ux4gBadge, UX4GColors } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// Single Digit Threshold (9+)"),s.push("<Ux4gBadge count={5} />"),s.push('<Ux4gBadge count={12} limit="singleDigit" />'),s.push(""),s.push("// Double Digit Threshold (99+)"),s.push('<Ux4gBadge count={99} limit="doubleDigit" />'),s.push('<Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.red500} />')):d==="badge-standalone"||d==="badge-label"?(s.push("import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// All Standalone Badge Variants"),s.push('<View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>'),s.push("  {/* 1. Dot Badge */}"),s.push('  <Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} />'),s.push(""),s.push("  {/* 2. Count Badge (7) */}"),s.push("  <Ux4gBadge count={7} containerColor={UX4GColors.primary600} />"),s.push(""),s.push("  {/* 3. Count Badge (9+) */}"),s.push('  <Ux4gBadge count={12} limit="singleDigit" containerColor={UX4GColors.primary600} />'),s.push(""),s.push("  {/* 4. Count Badge (99+) */}"),s.push('  <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.primary600} />'),s.push(""),s.push("  {/* 5. Label Badge (BETA) */}"),s.push('  <Ux4gBadge label="BETA" containerColor={UX4GColors.primary600} />'),s.push(""),s.push("  {/* 6. Label Badge (NEW) */}"),s.push('  <Ux4gBadge label="NEW" containerColor={UX4GColors.primary600} />'),s.push(""),s.push("  {/* 7. Icon Badge (Checkmark) */}"),s.push('  <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 14, color: UX4GColors.white })} containerColor={UX4GColors.primary600} />'),s.push(""),s.push("  {/* 8. Verification Shield Icon */}"),s.push("  {Ux4gIcons.verification({ size: 24, color: UX4GColors.blue600 })}"),s.push(""),s.push("  {/* 9. Gold Star Icon */}"),s.push("  {Ux4gIcons.star({ size: 24, color: UX4GColors.gold500 })}"),s.push("</View>")):d==="badge-semantic"?(s.push("import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// Semantic Colors Matrix (Purple, Green, Orange, Red, Grey, Cyan)"),s.push("// Row 1: Dot Badges with White Border"),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} showBorder />'),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.green600} showBorder />'),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} showBorder />'),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.red600} showBorder />'),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.neutral400} showBorder />'),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.cyan600} showBorder />'),s.push(""),s.push("// Row 2: Checkmark Icon Badges with White Border"),s.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />'),s.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.green600} showBorder />'),s.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.orange500} showBorder />'),s.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.red600} showBorder />'),s.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.neutral700 })} containerColor={UX4GColors.neutral300} showBorder />'),s.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.cyan600} showBorder />'),s.push(""),s.push("// Row 3: Count Badges (3) with White Border"),s.push("<Ux4gBadge count={3} containerColor={UX4GColors.primary600} showBorder />"),s.push("<Ux4gBadge count={3} containerColor={UX4GColors.green600} showBorder />"),s.push("<Ux4gBadge count={3} containerColor={UX4GColors.orange500} showBorder />"),s.push("<Ux4gBadge count={3} containerColor={UX4GColors.red600} showBorder />"),s.push("<Ux4gBadge count={3} containerColor={UX4GColors.neutral300} contentColor={UX4GColors.neutral800} showBorder />"),s.push("<Ux4gBadge count={3} containerColor={UX4GColors.cyan600} showBorder />"),s.push(""),s.push("// Row 4: ReadyToUse & Shield Icon Badges with White Border"),s.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />'),s.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />'),s.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.shield({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />'),s.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />'),s.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />')):d==="badge-overlay"?(s.push("import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';"),s.push(""),s.push('// 1. Star Icon with "NEW" Label Badge'),s.push('<Ux4gBadge label="NEW" alignment="topRight" containerColor={UX4GColors.primary600}>'),s.push('  {Ux4gIcons.star({ size: 28, color: "#1C1B1F" })}'),s.push("</Ux4gBadge>"),s.push(""),s.push("// 2. Thumb Up Icon with Count Badge (5)"),s.push('<Ux4gBadge count={5} alignment="topRight" containerColor={UX4GColors.primary600}>'),s.push('  {Ux4gIcons.thumbUp({ size: 28, color: "#1C1B1F" })}'),s.push("</Ux4gBadge>"),s.push(""),s.push("// 3. Verification Shield Icon with Dot Badge"),s.push('<Ux4gBadge variant="dot" alignment="topRight" containerColor={UX4GColors.primary600}>'),s.push('  {Ux4gIcons.verification({ size: 28, color: "#1C1B1F" })}'),s.push("</Ux4gBadge>")):(s.push("import { Ux4gBadge, UX4GColors } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// Standalone Dot Badges"),s.push('<Ux4gBadge variant="dot" />'),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.green500} />'),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} />'),s.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.blue500} />')),s.join(`
`)},[d]),b=()=>{let s="";const w=i?"#E6E1E5":"#1C1B1F";d==="badge-count"?s=`        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <Ux4gBadge count={5} />
          <Ux4gBadge count={12} limit="singleDigit" />
          <Ux4gBadge count={99} limit="doubleDigit" />
          <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.red500} />
        </View>`:d==="badge-standalone"||d==="badge-label"?s=`        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={7} containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={12} limit="singleDigit" containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.primary600} />
          <Ux4gBadge label="BETA" containerColor={UX4GColors.primary600} />
          <Ux4gBadge label="NEW" containerColor={UX4GColors.primary600} />
          <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 14, color: UX4GColors.white })} containerColor={UX4GColors.primary600} />
          {Ux4gIcons.verification({ size: 24, color: UX4GColors.blue600 })}
          {Ux4gIcons.star({ size: 24, color: UX4GColors.gold500 })}
        </View>`:d==="badge-semantic"?s=`        <View style={{ gap: 24, alignItems: 'center', justifyContent: 'center' }}>
          {/* Row 1: Dot Badges */}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.green600} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.red600} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.neutral300} showBorder />
            <Ux4gBadge variant="dot" containerColor={UX4GColors.cyan600} showBorder />
          </View>

          {/* Row 2: Checkmark Icon Badges */}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.green600} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.orange500} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.red600} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.neutral600 })} containerColor={UX4GColors.neutral300} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.cyan600} showBorder />
          </View>

          {/* Row 3: Count Badges (3) */}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Ux4gBadge count={3} containerColor={UX4GColors.primary600} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.green600} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.orange500} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.red600} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.neutral300} contentColor={UX4GColors.neutral800} showBorder />
            <Ux4gBadge count={3} containerColor={UX4GColors.cyan600} showBorder />
          </View>

          {/* Row 4: Verified, Star, and Shield Icon Badges */}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />
            <Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />
            <Ux4gBadge variant="icon" icon={Ux4gIcons.shield({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />
            <Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />
            <Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />
          </View>
        </View>`:d==="badge-overlay"?s=`        <View style={{ flexDirection: 'row', gap: 48, alignItems: 'center', justifyContent: 'center' }}>
          {/* 1. Star Icon with NEW Label Badge */}
          <Ux4gBadge label="NEW" alignment="topRight" containerColor={UX4GColors.primary600}>
            {Ux4gIcons.star({ size: 28, color: "${w}" })}
          </Ux4gBadge>

          {/* 2. Thumb Up Icon with Count Badge (5) */}
          <Ux4gBadge count={5} alignment="topRight" containerColor={UX4GColors.primary600}>
            {Ux4gIcons.thumbUp({ size: 28, color: "${w}" })}
          </Ux4gBadge>

          {/* 3. Verification Shield Icon with Dot Badge */}
          <Ux4gBadge variant="dot" alignment="topRight" containerColor={UX4GColors.primary600}>
            {Ux4gIcons.verification({ size: 28, color: "${w}" })}
          </Ux4gBadge>
        </View>`:s=`        <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
          <Ux4gBadge variant="dot" />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.green500} />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.blue500} />
        </View>`;const p=["Ux4gThemeProvider","UX4GColors","Ux4gBadge"];(d==="badge-overlay"||d==="badge-standalone"||d==="badge-label"||d==="badge-semantic")&&p.push("Ux4gIcons");const N=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ${p.join(", ")} } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 20
  }
});`,A=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gBadge%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(N)}`;return t.jsx("iframe",{src:A,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Badge Preview"})},x=[{name:"child",type:"ReactNode",default:"undefined",desc:"Child element around which badge is overlaid.",required:!1},{name:"children",type:"ReactNode",default:"undefined",desc:"Alias for child.",required:!1},{name:"variant",type:"'dot' | 'count' | 'label' | 'icon' | 'readyToUse'",default:"'dot'",desc:"Type of badge indicator (auto-inferred when omitted).",required:!1},{name:"count",type:"number",default:"undefined",desc:"Numeric count value for count variant.",required:!1},{name:"limit",type:"'singleDigit' | 'doubleDigit'",default:"'singleDigit'",desc:"Threshold formatting (9+ or 99+).",required:!1},{name:"label",type:"string",default:"undefined",desc:"Short text for label variant.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Custom icon for icon variant.",required:!1},{name:"assetPath",type:"string | ImageSourcePropType | ReactNode | ((props) => ReactElement)",default:"undefined",desc:"Asset source for readyToUse variant.",required:!1},{name:"containerColor",type:"string",default:"theme.colors.primary",desc:"Badge background color.",required:!1},{name:"contentColor",type:"string",default:"UX4GColors.white",desc:"Text/icon color inside badge.",required:!1},{name:"alignment",type:"'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'",default:"'topRight'",desc:"Overlay placement when wrapping a child.",required:!1},{name:"offset",type:"{ top?: number; right?: number; bottom?: number; left?: number }",default:"undefined",desc:"Precise offset override for overlay placement.",required:!1},{name:"showBorder",type:"boolean",default:"false",desc:"Whether to render a border around badge.",required:!1},{name:"borderColor",type:"string",default:"theme.colors.surface",desc:"Border color when showBorder is true.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for wrapper/standalone container.",required:!1},{name:"badgeStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for badge pill element.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Text style override for count/label.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Badge"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Badges display status indicators, numerical counts, text labels, or custom icons overlayed on UI elements or standalone."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"BadgeExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Hp=({isDark:i,story:d="card-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];s.push("import { Ux4gCard, UX4GColors } from 'ux4g-react-native-design-system';"),s.push("");const w=i?"UX4GColors.neutral900":"UX4GColors.white",p=i?"UX4GColors.neutral700":"UX4GColors.neutral200";return s.push('<View style={{ width: "100%", maxWidth: 360 }}>'),d==="card-actions"?(s.push("  // Card With Footer Actions"),s.push("  <Ux4gCard"),s.push('    title="Card with Actions"'),s.push('    body="This card has primary and secondary action buttons."'),s.push('    footerType="primaryAndSecondary"'),s.push('    primaryButtonText="Confirm"'),s.push('    secondaryButtonText="Cancel"'),s.push("    borderWidth={1}"),s.push(`    borderColor={${p}}`),s.push("    elevation={2}"),s.push(`    backgroundColor={${w}}`),s.push("  />")):d==="card-horizontal"?(s.push("  // Horizontal Card Layout"),s.push("  <Ux4gCard"),s.push('    direction="horizontal"'),s.push('    mediaImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"'),s.push('    title="Horizontal Card"'),s.push('    subtitle="Side-by-side layout"'),s.push('    body="The media thumbnail appears on the left in horizontal mode."'),s.push("    borderWidth={1}"),s.push(`    borderColor={${p}}`),s.push("    elevation={2}"),s.push(`    backgroundColor={${w}}`),s.push("  />")):d==="card-media"?(s.push("  // Media Card Layout"),s.push("  <Ux4gCard"),s.push('    mediaImageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"'),s.push('    title="Media Card"'),s.push('    subtitle="Hero image above content"'),s.push('    body="This card displays a hero image at the top."'),s.push("    borderWidth={1}"),s.push(`    borderColor={${p}}`),s.push("    elevation={2}"),s.push(`    backgroundColor={${w}}`),s.push("  />")):d==="card-rich"||d==="card-full-vertical"?(s.push("  // Complex Rich Card (Custom Composition)"),s.push("  <Ux4gCard"),s.push('    mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"'),s.push('    mediaLabelText="Label"'),s.push('    title="Title"'),s.push('    subtitle="Subtitle"'),s.push('    statusChips={["Label", "Label", "Label"]}'),s.push('    body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."'),s.push('    bottomChips={["Label", "Label", "Label", "Label"]}'),s.push('    footerType="primaryAndSecondary"'),s.push('    primaryButtonText="+ Button"'),s.push('    secondaryButtonText="+ Button"'),s.push("    borderWidth={1}"),s.push(`    borderColor={${p}}`),s.push("    elevation={2}"),s.push(`    backgroundColor={${w}}`),s.push("  />")):d==="card-rich-horizontal"?(s.push("  // Complex Rich Card (Horizontal)"),s.push("  <Ux4gCard"),s.push('    direction="horizontal"'),s.push('    mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"'),s.push('    mediaLabelText="Label"'),s.push('    avatar={<Ux4gAvatar initials="JD" size="m" />}'),s.push('    title="Title"'),s.push('    subtitle="Subtitle"'),s.push('    statusChips={["Label", "Label", "Label"]}'),s.push('    body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."'),s.push('    bottomChips={["Label", "Label", "Label", "Label"]}'),s.push('    footerType="primaryAndSecondary"'),s.push('    primaryButtonText="Button"'),s.push('    secondaryButtonText="Button"'),s.push("    borderWidth={1}"),s.push(`    borderColor={${p}}`),s.push("    elevation={2}"),s.push(`    backgroundColor={${w}}`),s.push("  />")):(s.push("  // Basic Card Layout"),s.push("  <Ux4gCard"),s.push('    title="Card Title"'),s.push('    subtitle="Card subtitle"'),s.push('    body="This is the card body."'),s.push("    borderWidth={1}"),s.push(`    borderColor={${p}}`),s.push("    elevation={2}"),s.push(`    backgroundColor={${w}}`),s.push("  />")),s.push("</View>"),s.join(`
`)},[d,i]),b=()=>{let s="";const w=i?"UX4GColors.neutral900":"UX4GColors.white",p=i?"UX4GColors.neutral700":"UX4GColors.neutral200";d==="card-actions"?s=`          <Ux4gCard
            title="Card with Actions"
            body="This card has primary and secondary action buttons."
            footerType="primaryAndSecondary"
            primaryButtonText="Confirm"
            secondaryButtonText="Cancel"
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`:d==="card-horizontal"?s=`          <Ux4gCard
            direction="horizontal"
            mediaImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
            title="Horizontal Card"
            subtitle="Side-by-side layout"
            body="The media thumbnail appears on the left in horizontal mode."
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`:d==="card-media"?s=`          <Ux4gCard
            mediaImageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"
            title="Media Card"
            subtitle="Hero image above content"
            body="This card displays a hero image at the top."
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`:d==="card-rich"||d==="card-full-vertical"?s=`          <Ux4gCard
            mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"
            mediaLabelText="Label"
            avatar={<Ux4gAvatar initials="JD" size="m" />}
            title="Title"
            subtitle="Subtitle"
            statusChips={["Label", "Label", "Label"]}
            body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
            bottomChips={["Label", "Label", "Label", "Label"]}
            footerType="primaryAndSecondary"
            primaryButtonText="+ Button"
            secondaryButtonText="+ Button"
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`:d==="card-rich-horizontal"?s=`          <Ux4gCard
            direction="horizontal"
            mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"
            mediaLabelText="Label"
            avatar={<Ux4gAvatar initials="JD" size="m" />}
            title="Title"
            subtitle="Subtitle"
            statusChips={["Label", "Label", "Label"]}
            body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
            bottomChips={["Label", "Label", "Label", "Label"]}
            footerType="primaryAndSecondary"
            primaryButtonText="Button"
            secondaryButtonText="Button"
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`:s=`          <Ux4gCard
            title="Card Title"
            subtitle="Card subtitle"
            body="This is the card body."
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`;const N=["Ux4gThemeProvider","UX4GColors","Ux4gCard"];(d==="card-rich"||d==="card-full-vertical"||d==="card-rich-horizontal")&&N.push("Ux4gAvatar");const A=d==="card-horizontal"||d==="card-rich-horizontal",B=A?520:360,I=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ${N.join(", ")} } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
${s}
        </View>
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  cardWrapper: {
    width: '100%',
    maxWidth: ${B},
  },
});`,F=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gCard%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&ratio=1:1.5&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(I)}`;return t.jsx("iframe",{src:F,style:{width:"100%",height:A?"500px":"650px",border:"none",borderRadius:"8px"},title:"Expo Snack Card Preview"})},x=[{name:"children",type:"ReactNode",default:"undefined",desc:"Custom child content. When provided, rich card layout is skipped.",required:!1},{name:"cornerRadius",type:"number",default:"Ux4gRadius.radius12",desc:"Corner radius of the card.",required:!1},{name:"backgroundColor",type:"string",default:"theme.colors.surface",desc:"Background color override.",required:!1},{name:"borderColor",type:"string",default:"'transparent'",desc:"Border color.",required:!1},{name:"borderWidth",type:"number",default:"0",desc:"Border width.",required:!1},{name:"elevation",type:"number",default:"0",desc:"Elevation/shadow depth.",required:!1},{name:"isClickable",type:"boolean",default:"false",desc:"Wrap card in Pressable when true.",required:!1},{name:"onPress",type:"() => void",default:"undefined",desc:"Card press callback (used when isClickable=true).",required:!1},{name:"direction",type:"'vertical' | 'horizontal'",default:"'vertical'",desc:"Layout direction of rich card.",required:!1},{name:"mediaImageUrl",type:"string",default:"undefined",desc:"Media image URL (top in vertical, left in horizontal).",required:!1},{name:"mediaHeight",type:"number",default:"180",desc:"Media height in vertical mode.",required:!1},{name:"mediaWidth",type:"number",default:"120",desc:"Media width in horizontal mode.",required:!1},{name:"mediaLabelText",type:"string",default:"undefined",desc:"Badge label text over media.",required:!1},{name:"mediaTrailingAction",type:"ReactNode",default:"undefined",desc:"Trailing action over media.",required:!1},{name:"avatar",type:"ReactNode",default:"undefined",desc:"Avatar element in card header.",required:!1},{name:"title",type:"string",default:"undefined",desc:"Primary title text.",required:!1},{name:"subtitle",type:"string",default:"undefined",desc:"Secondary subtitle text.",required:!1},{name:"headerTrailingAction",type:"ReactNode",default:"undefined",desc:"Trailing action in header row.",required:!1},{name:"statusChips",type:"(string | ReactNode)[]",default:"undefined",desc:"Status chips rendered above body.",required:!1},{name:"body",type:"string",default:"undefined",desc:"Body description text.",required:!1},{name:"bottomChips",type:"(string | ReactNode)[]",default:"undefined",desc:"Bottom chip row rendered below body.",required:!1},{name:"footerType",type:"'none' | 'primaryOnly' | 'secondaryOnly' | 'primaryAndSecondary'",default:"'none'",desc:"Footer button layout type.",required:!1},{name:"footerAlignment",type:"'left' | 'centered' | 'right'",default:"'left'",desc:"Footer buttons alignment.",required:!1},{name:"primaryButtonText",type:"string",default:"'Confirm'",desc:"Primary button label.",required:!1},{name:"secondaryButtonText",type:"string",default:"'Cancel'",desc:"Secondary button label.",required:!1},{name:"onPrimaryClick",type:"() => void",default:"undefined",desc:"Primary button callback.",required:!1},{name:"onSecondaryClick",type:"() => void",default:"undefined",desc:"Secondary button callback.",required:!1},{name:"primaryButtonLeadingIcon",type:"ReactNode",default:"undefined",desc:"Leading icon for primary button.",required:!1},{name:"primaryButtonTrailingIcon",type:"ReactNode",default:"undefined",desc:"Trailing icon for primary button.",required:!1},{name:"secondaryButtonLeadingIcon",type:"ReactNode",default:"undefined",desc:"Leading icon for secondary button.",required:!1},{name:"secondaryButtonTrailingIcon",type:"ReactNode",default:"undefined",desc:"Trailing icon for secondary button.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Additional style for outer card container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Card"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Cards contain content and actions about a single subject, supporting hero images, avatars, tags, and flexible action footers."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"CardExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Gp=({isDark:i,story:d="carousel-intro"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const p=[];return p.push("import { Ux4gCarousel, View, Text, StyleSheet } from 'ux4g-react-native-design-system';"),p.push(""),d==="carousel-rich-hero"?(p.push("// Rich Hero Carousel with Gradient Slides"),p.push("const slides = ["),p.push("  {"),p.push('    id: "1",'),p.push('    title: "Featured",'),p.push('    description: "Discover our latest collection",'),p.push('    gradient: ["#667eea", "#764ba2"],'),p.push('    badge: "FEATURED",'),p.push('    buttonText: "Explore Now",'),p.push("  },"),p.push("  {"),p.push('    id: "2",'),p.push('    title: "New Update",'),p.push('    description: "Check out what is new",'),p.push('    gradient: ["#f093fb", "#f5576c"],'),p.push('    badge: "NEW",'),p.push('    buttonText: "Learn More",'),p.push("  },"),p.push("];"),p.push(""),p.push("<Ux4gCarousel"),p.push("  height={240}"),p.push("  autoPlay={true}"),p.push("  autoPlayInterval={3500}"),p.push("  showPagination={true}"),p.push("  showArrows={true}"),p.push("  items={slides.map((slide) => ("),p.push("    <View key={slide.id} style={styles.slide}>"),p.push("      <View style={styles.badge}><Text style={styles.badgeText}>{slide.badge}</Text></View>"),p.push("      <Text style={styles.title}>{slide.title}</Text>"),p.push("      <Text style={styles.desc}>{slide.description}</Text>"),p.push("    </View>"),p.push("  ))}"),p.push("/>")):d==="carousel-image"?(p.push("// Image Carousel"),p.push("const images = ["),p.push('  "https://picsum.photos/seed/slide1/400/200",'),p.push('  "https://picsum.photos/seed/slide2/400/200",'),p.push('  "https://picsum.photos/seed/slide3/400/200",'),p.push('  "https://picsum.photos/seed/slide4/400/200",'),p.push("];"),p.push(""),p.push("<Ux4gCarousel"),p.push("  height={200}"),p.push("  autoPlay={true}"),p.push("  items={images.map((url, i) => ("),p.push("    <Image key={i} source={{ uri: url }} style={styles.image} />"),p.push("  ))}"),p.push("/>")):(p.push("// Introduction - Hero Banner + Image Gallery"),p.push("<Ux4gCarousel"),p.push("  height={240}"),p.push("  autoPlay={true}"),p.push("  showPagination={true}"),p.push("  items={[...]}"),p.push("/>")),p.join(`
`)},[d]),b=()=>{let p="";d==="carousel-rich-hero"?p=`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gCarousel, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const heroSlides = [
  {
    id: '1',
    title: 'Featured',
    description: 'Discover our latest collection of design tokens and components.',
    gradient: ['#667eea', '#764ba2'],
    badge: 'FEATURED',
    buttonText: 'Explore Now',
  },
  {
    id: '2',
    title: 'New Update',
    description: 'Check out the newest features and improvements.',
    gradient: ['#f093fb', '#f5576c'],
    badge: 'NEW UPDATE',
    buttonText: 'Learn More',
  },
  {
    id: '3',
    title: 'Popular',
    description: 'Trending components loved by developers worldwide.',
    gradient: ['#4facfe', '#00f2fe'],
    badge: 'POPULAR',
    buttonText: 'View All',
  },
];

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Ux4gCarousel
          height={240}
          autoPlay={true}
          autoPlayInterval={3500}
          showPagination={true}
          showArrows={true}
          items={heroSlides.map((slide) => (
            <View key={slide.id} style={[styles.slide, { background: \`linear-gradient(135deg, \${slide.gradient[0]}, \${slide.gradient[1]})\` }]}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{slide.badge}</Text>
              </View>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.desc}>{slide.description}</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{slide.buttonText}</Text>
              </View>
            </View>
          ))}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  slide: { flex: 1, borderRadius: 16, padding: 24, justifyContent: 'center' },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, alignSelf: 'flex-start', marginBottom: 12 },
  badgeText: { color: '#FFF', fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },
  title: { color: '#FFF', fontSize: 24, fontWeight: '800', marginBottom: 8 },
  desc: { color: 'rgba(255,255,255,0.85)', fontSize: 14, marginBottom: 16 },
  button: { backgroundColor: '#FFF', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, alignSelf: 'flex-start' },
  buttonText: { color: '#333', fontSize: 14, fontWeight: '600' },
});`:d==="carousel-image"?p=`import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ux4gCarousel, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const images = [
  'https://picsum.photos/seed/carousel1/400/200',
  'https://picsum.photos/seed/carousel2/400/200',
  'https://picsum.photos/seed/carousel3/400/200',
  'https://picsum.photos/seed/carousel4/400/200',
];

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Ux4gCarousel
          height={200}
          autoPlay={true}
          autoPlayInterval={3000}
          showPagination={true}
          items={images.map((url, i) => (
            <Image
              key={i}
              source={{ uri: url }}
              style={styles.image}
            />
          ))}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  image: { width: '100%', height: '100%', borderRadius: 12 },
});`:p=`import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ux4gCarousel, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const heroSlides = [
  { id: '1', title: 'Featured', desc: 'Discover our latest collection.', gradient: ['#667eea', '#764ba2'], badge: 'FEATURED' },
  { id: '2', title: 'New Update', desc: 'Check out what is new.', gradient: ['#f093fb', '#f5576c'], badge: 'NEW' },
  { id: '3', title: 'Popular', desc: 'Trending components.', gradient: ['#4facfe', '#00f2fe'], badge: 'POPULAR' },
];

const images = [
  'https://picsum.photos/seed/gallery1/400/200',
  'https://picsum.photos/seed/gallery2/400/200',
  'https://picsum.photos/seed/gallery3/400/200',
];

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Hero Banner Carousel</Text>
        <Ux4gCarousel height={240} autoPlay={true} showPagination={true} showArrows={true}
          items={heroSlides.map((s) => (
            <View key={s.id} style={[styles.heroSlide, { background: \`linear-gradient(135deg, \${s.gradient[0]}, \${s.gradient[1]})\` }]}>
              <View style={styles.badge}><Text style={styles.badgeText}>{s.badge}</Text></View>
              <Text style={styles.heroTitle}>{s.title}</Text>
              <Text style={styles.heroDesc}>{s.desc}</Text>
            </View>
          ))}
        />
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Image Gallery Carousel</Text>
        <Ux4gCarousel height={200} viewportFraction={0.85} autoPlay={false}
          items={images.map((url, i) => (
            <Image key={i} source={{ uri: url }} style={styles.image} />
          ))}
        />
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12, color: '#1F2937' },
  heroSlide: { flex: 1, borderRadius: 16, padding: 24, justifyContent: 'center' },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, alignSelf: 'flex-start', marginBottom: 12 },
  badgeText: { color: '#FFF', fontSize: 11, fontWeight: '700' },
  heroTitle: { color: '#FFF', fontSize: 22, fontWeight: '800', marginBottom: 6 },
  heroDesc: { color: 'rgba(255,255,255,0.85)', fontSize: 13 },
  image: { width: '100%', height: '100%', borderRadius: 12 },
});`;const N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gCarousel%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"500px",border:"none",borderRadius:"8px"},title:"Expo Snack Carousel Preview"})},x=[{name:"items",type:"ReactNode[]",default:"required",desc:"Array of slide widgets to display in carousel.",required:!0},{name:"autoPlay",type:"boolean",default:"true",desc:"Enable auto-play scrolling.",required:!1},{name:"autoPlayInterval",type:"number",default:"3000",desc:"Auto-play interval in milliseconds.",required:!1},{name:"showPagination",type:"boolean",default:"true",desc:"Show bottom pagination dots.",required:!1},{name:"showArrows",type:"boolean",default:"false",desc:"Show arrow navigation buttons.",required:!1},{name:"height",type:"number",default:"200",desc:"Carousel container height.",required:!1},{name:"viewportFraction",type:"number",default:"1.0",desc:"Fraction of viewport occupied by each item.",required:!1},{name:"paginationVariant",type:"Ux4gPaginationVariant",default:"'default'",desc:"Pagination indicator style variant.",required:!1},{name:"paginationSize",type:"Ux4gPaginationSize",default:"'small'",desc:"Pagination indicator size.",required:!1},{name:"activeColor",type:"string",default:"undefined",desc:"Active indicator color override.",required:!1},{name:"inactiveColor",type:"string",default:"undefined",desc:"Inactive indicator and arrow background color override.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom container style override.",required:!1}],s={"carousel-intro":{title:"Carousel",description:"Carousel displays horizontally scrollable content with auto-play, pagination dots, and optional arrow navigation. Below are two showcase demos: a Hero Banner carousel and an Image Gallery carousel."},"carousel-rich-hero":{title:"Carousel",description:"Rich hero carousel with gradient slides, badges, titles, descriptions, and CTA buttons. Perfect for featured content banners."},"carousel-image":{title:"Carousel",description:"Image-based carousel displaying network images with auto-play and pagination. Minimal configuration for simple image galleries."}},w=s[d]||s["carousel-intro"];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:w.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:w.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"CarouselExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Qp=i=>i==="journey-timeline"?"journey-timeline-basic":["journey-timeline-basic","journey-timeline-horizontal","journey-timeline-custom"].includes(i)?i:"journey-timeline-basic",Yp={"journey-timeline-basic":{title:"Journey Timeline",description:"Vertical step-by-step journey with completed, current, and upcoming states."},"journey-timeline-horizontal":{title:"Horizontal Timeline",description:"A timeline arranged horizontally, useful for wide spaces or scrolling views."},"journey-timeline-custom":{title:"Journey Timeline",description:"Custom statuses with badge positions, step numbers, and custom card content."}},Kp=i=>i==="journey-timeline-horizontal"?`import React from 'react';
import { Ux4gJourneyTimeline, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function JourneyTimelineHorizontalExample() {
  return (
    <Ux4gJourneyTimeline
      orientation='horizontal'
      currentStep={1}
      header={{
        title: 'Title',
        description: 'Description',
        icon: Ux4gIcons.settings({ size: 16, color: '#6B7280' }),
      }}
      steps={[
        {
          title: 'Step 1',
          date: 'Date',
          tag: 'Tag',
        },
        {
          title: 'Title',
          date: 'Date',
          tag: 'Tag',
          helpingText: 'Description',
        },
        { title: 'Step 3', date: 'Date', tag: 'Tag' },
        { title: 'Step 4', date: 'Date', tag: 'Tag' },
        { title: 'Step 5', date: 'Date', tag: 'Tag' },
        { title: 'Step 6', date: 'Date', tag: 'Tag' },
      ]}
    />
  );
}`:i==="journey-timeline-custom"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gJourneyTimeline, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function JourneyTimelineCustomExample() {
  return (
    <Ux4gJourneyTimeline
      currentStep={1}
      header={{
        title: 'Passport Service Journey',
        description: 'Track the current status of your application',
        icon: Ux4gIcons.info({ size: 18, color: '#4B5563' }),
      }}
      steps={[
        {
          title: 'Application Submitted',
          date: '08 Aug 2026',
          state: 'completed',
          stepNumber: '1',
          status: {
            text: 'Completed',
            dotColor: '#16A34A',
            badgeText: 'Done',
            badgeTextColor: '#16A34A',
          },
        },
        {
          title: 'Police Verification',
          date: '11 Aug 2026',
          state: 'current',
          stepNumber: '2',
          helpingText: 'Officer visit is scheduled for tomorrow',
          status: {
            text: '1 day remaining',
            dotColor: '#EA580C',
            badgeText: 'Pending',
            badgeColor: '#FFF7ED',
            badgeTextColor: '#EA580C',
            badgePosition: 'topRight',
          },
          customContent: (
            <View style={{ marginTop: 4 }}>
              <Text style={{ color: '#4B5563', fontSize: 12 }}>
                Keep ID proof and address proof ready
              </Text>
            </View>
          ),
        },
        {
          title: 'Passport Issued',
          date: '15 Aug 2026',
          state: 'upcoming',
          stepNumber: '3',
          tag: 'Upcoming',
        },
      ]}
    />
  );
}`:`import React from 'react';
import { Ux4gJourneyTimeline } from 'ux4g-react-native-design-system';

export default function JourneyTimelineBasicExample() {
  return (
    <Ux4gJourneyTimeline
      currentStep={1}
      header={{
        title: 'Driving License Journey',
        description: 'Track the status of each application step',
      }}
      steps={[
        {
          title: 'Application Submitted',
          date: '01 Aug 2026',
          helpingText: 'Your request has been successfully submitted',
        },
        {
          title: 'Document Verification',
          date: '03 Aug 2026',
          helpingText: 'Verification is currently in progress',
          status: {
            text: '2 days remaining',
            badgeText: 'Pending',
          },
        },
        {
          title: 'Approval',
          date: '06 Aug 2026',
          helpingText: 'Final approval will be shown here',
        },
      ]}
    />
  );
}`,Jp=i=>i==="journey-timeline-horizontal"?`        <Ux4gJourneyTimeline
          orientation='horizontal'
          currentStep={1}
          header={{
            title: 'Title',
            description: 'Description',
            icon: Ux4gIcons.settings({ size: 16, color: '#6B7280' }),
          }}
          steps={[
            {
              title: 'Step 1',
              date: 'Date',
              tag: 'Tag',
            },
            {
              title: 'Title',
              date: 'Date',
              tag: 'Tag',
              helpingText: 'Description',
            },
            { title: 'Step 3', date: 'Date', tag: 'Tag' },
            { title: 'Step 4', date: 'Date', tag: 'Tag' },
            { title: 'Step 5', date: 'Date', tag: 'Tag' },
            { title: 'Step 6', date: 'Date', tag: 'Tag' },
          ]}
        />`:i==="journey-timeline-custom"?`        <Ux4gJourneyTimeline
          currentStep={1}
          header={{
            title: 'Passport Service Journey',
            description: 'Track the current status of your application',
            icon: Ux4gIcons.info({ size: 18, color: '#4B5563' }),
          }}
          steps={[
            {
              title: 'Application Submitted',
              date: '08 Aug 2026',
              state: 'completed',
              stepNumber: '1',
              status: {
                text: 'Completed',
                dotColor: '#16A34A',
                badgeText: 'Done',
                badgeTextColor: '#16A34A',
              },
            },
            {
              title: 'Police Verification',
              date: '11 Aug 2026',
              state: 'current',
              stepNumber: '2',
              helpingText: 'Officer visit is scheduled for tomorrow',
              status: {
                text: '1 day remaining',
                dotColor: '#EA580C',
                badgeText: 'Pending',
                badgeColor: '#FFF7ED',
                badgeTextColor: '#EA580C',
                badgePosition: 'topRight',
              },
              customContent: (
                <View style={{ marginTop: 4 }}>
                  <Text style={{ color: '#4B5563', fontSize: 12 }}>
                    Keep ID proof and address proof ready
                  </Text>
                </View>
              ),
            },
            {
              title: 'Passport Issued',
              date: '15 Aug 2026',
              state: 'upcoming',
              stepNumber: '3',
              tag: 'Upcoming',
            },
          ]}
        />`:`        <Ux4gJourneyTimeline
          currentStep={1}
          header={{
            title: 'Driving License Journey',
            description: 'Track the status of each application step',
          }}
          steps={[
            {
              title: 'Application Submitted',
              date: '01 Aug 2026',
              helpingText: 'Your request has been successfully submitted',
            },
            {
              title: 'Document Verification',
              date: '03 Aug 2026',
              helpingText: 'Verification is currently in progress',
              status: {
                text: '2 days remaining',
                badgeText: 'Pending',
              },
            },
            {
              title: 'Approval',
              date: '06 Aug 2026',
              helpingText: 'Final approval will be shown here',
            },
          ]}
        />`,Zp=({isDark:i,story:d="journey-timeline-basic"})=>{const[c,m]=T.useState("preview"),f=Qp(d),b=Yp[f],x=T.useMemo(()=>Kp(f),[f]),s=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gJourneyTimeline, Ux4gThemeProvider, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${Jp(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gJourneyTimeline%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack JourneyTimeline Preview"})},w=[{name:"steps",type:"Ux4gJourneyStep[]",default:"required",desc:"List of journey steps to render.",required:!0},{name:"header",type:"Ux4gJourneyHeader",default:"undefined",desc:"Optional title/description/header icon block.",required:!1},{name:"currentStep",type:"number | null",default:"undefined",desc:"Current active step index. Overrides step-level state.",required:!1},{name:"orientation",type:"'vertical' | 'horizontal'",default:"'vertical'",desc:"Direction of timeline layout.",required:!1},{name:"indicatorSize",type:"number",default:"20",desc:"Diameter of step indicator circles.",required:!1},{name:"lineWidth",type:"number",default:"3",desc:"Thickness of connecting lines.",required:!1},{name:"indicatorCardSpacing",type:"number",default:"12",desc:"Gap between indicator and step card.",required:!1},{name:"stepSpacing",type:"number",default:"12",desc:"Spacing between steps.",required:!1},{name:"activeColor",type:"string",default:"theme primary",desc:"Color for completed/current indicators and lines.",required:!1},{name:"inactiveColor",type:"string",default:"onSurface @ 25%",desc:"Color for upcoming indicators and lines.",required:!1},{name:"cardBorderRadius",type:"number",default:"8",desc:"Border radius for step cards.",required:!1},{name:"cardPadding",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Padding override for each step card.",required:!1},{name:"cardColor",type:"string",default:"theme surface",desc:"Background color for cards.",required:!1},{name:"cardBorderColor",type:"string",default:"onSurface @ 10%",desc:"Border color for cards.",required:!1},{name:"dateStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Default style override for date text.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Default style override for title text.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for timeline container.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"JourneyTimelineExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},em=i=>i==="link"?"link-basic":["link-basic","link-text","link-custom-child"].includes(i)?i:"link-basic",tm={"link-basic":{title:"Link",description:"Wrap any child widget and open an external URL on tap."},"link-text":{title:"Link",description:"Text-only hyperlinks using Ux4gLink wrapper."},"link-custom-child":{title:"Link",description:"Custom child content (card/button row) made clickable via Ux4gLink."}},rm=i=>i==="link-text"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gLink } from 'ux4g-react-native-design-system';

export default function LinkTextExample() {
  return (
    <View style={{ gap: 12 }}>
      <Ux4gLink url='https://ux4g.com'>
        <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
          Visit UX4G website
        </Text>
      </Ux4gLink>

      <Ux4gLink url='https://github.com'>
        <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
          Open GitHub
        </Text>
      </Ux4gLink>
    </View>
  );
}`:i==="link-custom-child"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gLink, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function LinkCustomChildExample() {
  return (
    <Ux4gLink url='https://ux4g.com/docs'>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#D4D4D8',
          borderRadius: 10,
          padding: 14,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>
            UX4G Documentation
          </Text>
          <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>
            Open component guidelines and API docs
          </Text>
        </View>
        {Ux4gIcons.link({ size: 18, color: '#2563EB' })}
      </View>
    </Ux4gLink>
  );
}`:`import React from 'react';
import { Text } from 'react-native';
import { Ux4gLink } from 'ux4g-react-native-design-system';

export default function LinkBasicExample() {
  return (
    <Ux4gLink url='https://www.ux4g.com'>
      <Text style={{ color: '#2563EB', fontWeight: '600' }}>Open UX4G</Text>
    </Ux4gLink>
  );
}`,nm=i=>i==="link-text"?`        <View style={styles.stack}>
          <Ux4gLink url='https://ux4g.com'>
            <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
              Visit UX4G website
            </Text>
          </Ux4gLink>
          <Ux4gLink url='https://github.com'>
            <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
              Open GitHub
            </Text>
          </Ux4gLink>
        </View>`:i==="link-custom-child"?`        <Ux4gLink url='https://ux4g.com/docs'>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#D4D4D8',
              borderRadius: 10,
              padding: 14,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>
                UX4G Documentation
              </Text>
              <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>
                Open component guidelines and API docs
              </Text>
            </View>
            {Ux4gIcons.link({ size: 18, color: '#2563EB' })}
          </View>
        </Ux4gLink>`:`        <Ux4gLink url='https://www.ux4g.com'>
          <Text style={{ color: '#2563EB', fontWeight: '600' }}>Open UX4G</Text>
        </Ux4gLink>`,am=({isDark:i,story:d="link-basic"})=>{const[c,m]=T.useState("preview"),f=em(d),b=tm[f],x=T.useMemo(()=>rm(f),[f]),s=()=>{const p=`import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { Ux4gLink, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${nm(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  stack: {
    gap: 16,
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gLink%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Link Preview"})},w=[{name:"child",type:"ReactNode",default:"required",desc:"Widget rendered as clickable content.",required:!0},{name:"url",type:"string",default:"required",desc:"URL opened externally on tap.",required:!0},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for wrapper.",required:!1},{name:"accessibilityLabel",type:"string",default:"url",desc:"Screen reader label.",required:!1},{name:"disabled",type:"boolean",default:"false",desc:"Disables interaction when true.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"LinkExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},sm=i=>i==="modal"?"modal-full-preview":["modal-full-preview","modal-header-left","modal-header-centered"].includes(i)?i:"modal-full-preview",im={"modal-full-preview":{title:"Modal",description:"Full preview modal with subtitle/body copy and two footer buttons."},"modal-header-left":{title:"Modal",description:"Header-image modal with left-aligned content and standard action footer."},"modal-header-centered":{title:"Modal",description:"Header-image modal with centered content and destructive primary CTA."}},lm=i=>i==="modal-header-left"?`import React, { useState } from 'react';
  import { View } from 'react-native';
import { Ux4gButton, Ux4gIcons, Ux4gModal } from 'ux4g-react-native-design-system';

export default function ModalHeaderLeftExample() {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Ux4gButton text='Open Header Left Modal' onPress={() => setOpen(true)} />

      <Ux4gModal
        visible={open}
        onDismiss={() => setOpen(false)}
        headerImageStyle='fullBleed'
        headerImageUrl='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200'
        leadingItem='icon'
        leadingIcon={Ux4gIcons.warning({ size: 22, color: '#E53935' })}
        headerTitle='Header'
        showDescription={true}
        descriptionText='Write description here'
        subtitleText='Subtitle'
        bodyText='A modal is a design element that appears over the main content of a webpage, capturing user attention by disabling interaction.'
        primaryButtonText='Button'
        secondaryButtonText='Button'
        onPrimaryClick={() => setOpen(false)}
        onSecondaryClick={() => setOpen(false)}
      />
    </View>
  );
}`:i==="modal-header-centered"?`import React, { useState } from 'react';
import { Ux4gButton, Ux4gIcons, Ux4gModal } from 'ux4g-react-native-design-system';

export default function ModalHeaderCenteredExample() {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Ux4gButton text='Open Header Centered Modal' variant='outline' onPress={() => setOpen(true)} />

      <Ux4gModal
        visible={open}
        onDismiss={() => setOpen(false)}
        alignment='centered'
        headerImageStyle='fullBleed'
        headerImageContent={<View style={{ flex: 1, backgroundColor: '#6D28D9' }} />}
        isDestructive={true}
        leadingItem='icon'
        leadingIcon={Ux4gIcons.warning({ size: 22, color: '#E53935' })}
        headerTitle='Header'
        showDescription={true}
        descriptionText='Write description here'
        subtitleText='Subtitle'
        bodyText='A modal is a design element that appears over the main content of a webpage, capturing user attention by disabling interaction.'
        footerButtons='twoButtons'
        footerAlign='right'
        primaryButtonText='Button'
        secondaryButtonText='Button'
        onPrimaryClick={() => setOpen(false)}
        onSecondaryClick={() => setOpen(false)}
      />
    </View>
  );
}`:`import React, { useState } from 'react';
import { Ux4gButton, Ux4gModal } from 'ux4g-react-native-design-system';

export default function ModalFullPreviewExample() {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Ux4gButton text='Open Full Preview Modal' onPress={() => setOpen(true)} />

      <Ux4gModal
        visible={open}
        onDismiss={() => setOpen(false)}
        headerTitle='Full Preview Modal'
        showDescription={false}
        showDividers={true}
        subtitleText='Subtitle'
        bodyText='This modal is shown here so you can see the visual effect while browsing the Props tab.'
        primaryButtonText='Button'
        secondaryButtonText='Button'
        onPrimaryClick={() => setOpen(false)}
        onSecondaryClick={() => setOpen(false)}
      />
    </View>
  );
}`,om=i=>i==="modal-header-left"?`        <Ux4gButton text='Open Header Left Modal' onPress={() => setOpen(true)} />
        <Ux4gModal
          visible={open}
          onDismiss={() => setOpen(false)}
          headerImageStyle='fullBleed'
          headerImageUrl='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200'
          leadingItem='icon'
          leadingIcon={Ux4gIcons.warning({ size: 22, color: '#E53935' })}
          headerTitle='Header'
          showDescription={true}
          descriptionText='Write description here'
          subtitleText='Subtitle'
          bodyText='A modal is a design element that appears over the main content of a webpage, capturing user attention by disabling interaction.'
          primaryButtonText='Button'
          secondaryButtonText='Button'
          onPrimaryClick={() => setOpen(false)}
          onSecondaryClick={() => setOpen(false)}
        />`:i==="modal-header-centered"?`        <Ux4gButton text='Open Header Centered Modal' variant='outline' onPress={() => setOpen(true)} />
        <Ux4gModal
          visible={open}
          onDismiss={() => setOpen(false)}
          alignment='centered'
          headerImageStyle='fullBleed'
          headerImageContent={<View style={{ flex: 1, backgroundColor: '#6D28D9' }} />}
          isDestructive={true}
          leadingItem='icon'
          leadingIcon={Ux4gIcons.warning({ size: 22, color: '#E53935' })}
          headerTitle='Header'
          showDescription={true}
          descriptionText='Write description here'
          subtitleText='Subtitle'
          bodyText='A modal is a design element that appears over the main content of a webpage, capturing user attention by disabling interaction.'
          footerButtons='twoButtons'
          footerAlign='right'
          primaryButtonText='Button'
          secondaryButtonText='Button'
          onPrimaryClick={() => setOpen(false)}
          onSecondaryClick={() => setOpen(false)}
        />`:`        <Ux4gButton text='Open Full Preview Modal' onPress={() => setOpen(true)} />
        <Ux4gModal
          visible={open}
          onDismiss={() => setOpen(false)}
          headerTitle='Full Preview Modal'
          showDescription={false}
          showDividers={true}
          subtitleText='Subtitle'
          bodyText='This modal is shown here so you can see the visual effect while browsing the Props tab.'
          primaryButtonText='Button'
          secondaryButtonText='Button'
          onPrimaryClick={() => setOpen(false)}
          onSecondaryClick={() => setOpen(false)}
        />`,cm=({isDark:i,story:d="modal-full-preview"})=>{const[c,m]=T.useState("preview"),f=sm(d),b=im[f],x=T.useMemo(()=>lm(f),[f]),s=()=>{const p=`import React, { useState } from 'react';
  import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gButton, Ux4gIcons, Ux4gModal, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${om(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gModal%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Modal Preview"})},w=[{name:"visible",type:"boolean",default:"required",desc:"Controls modal visibility.",required:!0},{name:"onDismiss",type:"() => void",default:"required",desc:"Callback when backdrop or close action dismisses modal.",required:!0},{name:"alignment",type:"'leftAligned' | 'centered'",default:"'leftAligned'",desc:"Header/content alignment mode.",required:!1},{name:"headerTitle",type:"string",default:"'Header'",desc:"Modal header title.",required:!1},{name:"showDescription",type:"boolean",default:"false",desc:"Show or hide description text under header.",required:!1},{name:"descriptionText",type:"string",default:"'Write description here'",desc:"Header description text.",required:!1},{name:"showSubtitle",type:"boolean",default:"true",desc:"Show or hide subtitle inside content.",required:!1},{name:"subtitleText",type:"string",default:"'Subtitle'",desc:"Subtitle text in body section.",required:!1},{name:"showBody",type:"boolean",default:"true",desc:"Show body content section.",required:!1},{name:"bodyText",type:"string",default:"component default",desc:"Body copy when bodyContent is not provided.",required:!1},{name:"bodyContent",type:"ReactNode",default:"undefined",desc:"Custom body content override.",required:!1},{name:"leadingItem",type:"'none' | 'icon' | 'avatar' | 'image'",default:"'none'",desc:"Leading item type in header.",required:!1},{name:"showFooter",type:"boolean",default:"true",desc:"Show or hide footer action area.",required:!1},{name:"footerButtons",type:"'oneButton' | 'twoButtons' | 'oneButtonWithIcon' | 'twoButtonsWithIcon'",default:"'twoButtons'",desc:"Footer action layout preset.",required:!1},{name:"footerAlign",type:"'left' | 'right' | 'center' | 'split'",default:"'right'",desc:"Footer button alignment.",required:!1},{name:"isDestructive",type:"boolean",default:"false",desc:"Use destructive color styling for primary action.",required:!1},{name:"primaryButtonText",type:"string",default:"'Button'",desc:"Primary CTA text.",required:!1},{name:"secondaryButtonText",type:"string",default:"'Button'",desc:"Secondary CTA text.",required:!1},{name:"showCloseButton",type:"boolean",default:"true",desc:"Show top-right close icon button.",required:!1},{name:"backgroundColor",type:"string",default:"theme surface",desc:"Modal surface background override.",required:!1},{name:"cornerRadius",type:"number",default:"theme radius16",desc:"Modal corner radius override.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"ModalExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},dm=i=>i==="pagination"||i==="pagination-dotted"?"pagination-default-arrows":["pagination-default-arrows","pagination-capsule-arrows","pagination-capsule-dots","pagination-arrows-right"].includes(i)?i:"pagination-default-arrows",um={"pagination-default-arrows":{title:"Pagination",description:"Default dotted pagination with left and right arrow controls."},"pagination-capsule-arrows":{title:"Pagination",description:"Capsule container style with arrows and animated active dot."},"pagination-capsule-dots":{title:"Pagination",description:"Capsule dots-only pagination without arrow controls."},"pagination-arrows-right":{title:"Pagination",description:"Dotted pagination with both arrow controls aligned on the right."}},pm=i=>i==="pagination-capsule-arrows"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPagination } from 'ux4g-react-native-design-system';

export default function PaginationCapsuleArrowsExample() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <View style={{ padding: 20 }}>
      <Ux4gPagination
        totalPageCount={7}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
        variant='capsule'
        size='small'
        showArrows={true}
      />
    </View>
  );
}`:i==="pagination-capsule-dots"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPagination } from 'ux4g-react-native-design-system';

export default function PaginationCapsuleDotsExample() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <View style={{ padding: 20 }}>
      <Ux4gPagination
        totalPageCount={7}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
        variant='capsule'
        size='small'
        showArrows={false}
      />
    </View>
  );
}`:i==="pagination-arrows-right"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPagination } from 'ux4g-react-native-design-system';

export default function PaginationArrowsRightExample() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <View style={{ padding: 20 }}>
      <Ux4gPagination
        totalPageCount={7}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
        variant='default'
        size='small'
        showArrows={true}
        arrowsOnRight={true}
        width={360}
      />
    </View>
  );
}`:`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPagination } from 'ux4g-react-native-design-system';

export default function PaginationDefaultArrowsExample() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <View style={{ padding: 20 }}>
      <Ux4gPagination
        totalPageCount={7}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
        variant='default'
        size='small'
        showArrows={true}
      />
    </View>
  );
}`,mm=i=>i==="pagination-capsule-arrows"?`        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='capsule'
          size='small'
          showArrows={true}
        />`:i==="pagination-capsule-dots"?`        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='capsule'
          size='small'
          showArrows={false}
        />`:i==="pagination-arrows-right"?`        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='default'
          size='small'
          showArrows={true}
          arrowsOnRight={true}
          width={360}
        />`:`        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='default'
          size='small'
          showArrows={true}
        />`,hm=({isDark:i,story:d="pagination-default-arrows"})=>{const[c,m]=T.useState("preview"),f=dm(d),b=um[f],x=T.useMemo(()=>pm(f),[f]),s=()=>{const p=`import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Ux4gPagination, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${mm(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gPagination%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Pagination Preview"})},w=[{name:"totalPageCount",type:"number",default:"required",desc:"Total number of pages represented by dots.",required:!0},{name:"currentPageIndex",type:"number",default:"required",desc:"Current active zero-based page index.",required:!0},{name:"onPageChange",type:"(pageIndex: number) => void",default:"required",desc:"Callback fired when user selects a dot or arrow.",required:!0},{name:"showArrows",type:"boolean",default:"true",desc:"Shows previous and next arrow controls.",required:!1},{name:"arrowsOnRight",type:"boolean",default:"false",desc:"Places arrows on right side while dots stay on the left.",required:!1},{name:"variant",type:"'default' | 'defaultVariant' | 'capsule'",default:"'default'",desc:"Visual style of the pagination indicator.",required:!1},{name:"size",type:"'small' | 'medium'",default:"'small'",desc:"Size of dots and arrow buttons.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Disables interactions when false.",required:!1},{name:"activeColor",type:"string",default:"theme primary",desc:"Color used for active dot and arrows.",required:!1},{name:"inactiveColor",type:"string",default:"theme-based",desc:"Color used for inactive dots.",required:!1},{name:"inactiveBorderColor",type:"string",default:"theme-based",desc:"Border color for inactive dots.",required:!1},{name:"width",type:"number",default:"undefined",desc:"Optional explicit width for container.",required:!1},{name:"height",type:"number",default:"undefined",desc:"Optional explicit height for container.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style override for outer container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"PaginationExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},fm=i=>i==="popover"||i==="tooltip"?"popover-basic":["popover-basic","popover-rich","popover-placements","popover-custom-content","popover-trigger"].includes(i)?i:"popover-basic",gm={"popover-basic":{title:"Popover",description:"Basic popover built with Ux4gTooltip using text content."},"popover-rich":{title:"Popover",description:"Rich popover with title, body, and action area."},"popover-placements":{title:"Popover",description:"Placement variants: top, bottom, left, and right."},"popover-custom-content":{title:"Popover",description:"Custom content popover using a fully custom React node."},"popover-trigger":{title:"Popover",description:"Trigger variants using press and long press interactions."}},xm=i=>i==="popover-rich"?`import React from 'react';
import { Text, Pressable } from 'react-native';
import { Ux4gButton, Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function PopoverRichExample() {
  return (
    <Ux4gTooltip
      title='Verification Required'
      text='Please verify your mobile number to continue this step.'
      placement='bottom'
      trigger='press'
      action={<Ux4gButton text='Verify Now' size='small' />}
      isPersistent={true}
    >
      <Pressable style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#4A2BC2' }}>
        <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>Open Rich Popover</Text>
      </Pressable>
    </Ux4gTooltip>
  );
}`:i==="popover-placements"?`import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const Anchor = ({ label }: { label: string }) => (
  <Pressable style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#EEF2FF' }}>
    <Text style={{ color: '#312E81', fontWeight: '600' }}>{label}</Text>
  </Pressable>
);

export default function PopoverPlacementsExample() {
  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Ux4gTooltip text='Top placement' placement='top' trigger='press'>
        <Anchor label='Top' />
      </Ux4gTooltip>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Ux4gTooltip text='Left placement' placement='left' trigger='press'>
          <Anchor label='Left' />
        </Ux4gTooltip>
        <Ux4gTooltip text='Right placement' placement='right' trigger='press'>
          <Anchor label='Right' />
        </Ux4gTooltip>
      </View>
      <Ux4gTooltip text='Bottom placement' placement='bottom' trigger='press'>
        <Anchor label='Bottom' />
      </Ux4gTooltip>
    </View>
  );
}`:i==="popover-custom-content"?`import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function PopoverCustomContentExample() {
  return (
    <Ux4gTooltip
      placement='bottomStart'
      trigger='press'
      isPersistent={true}
      customContent={
        <View style={{ width: 220 }}>
          <Text style={{ fontSize: 14, fontWeight: '700', color: '#FFFFFF' }}>Payment Summary</Text>
          <Text style={{ fontSize: 12, color: '#E5E7EB', marginTop: 6 }}>Subtotal: INR 1499</Text>
          <Text style={{ fontSize: 12, color: '#E5E7EB', marginTop: 2 }}>Tax: INR 270</Text>
          <Text style={{ fontSize: 13, color: '#FFFFFF', marginTop: 10, fontWeight: '600' }}>Total: INR 1769</Text>
        </View>
      }
    >
      <Pressable style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#E0E7FF' }}>
        <Text style={{ color: '#312E81', fontWeight: '600' }}>Open Custom Popover</Text>
      </Pressable>
    </Ux4gTooltip>
  );
}`:i==="popover-trigger"?`import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const TriggerChip = ({ label }: { label: string }) => (
  <Pressable style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#F3F4F6' }}>
    <Text style={{ color: '#111827', fontWeight: '600' }}>{label}</Text>
  </Pressable>
);

export default function PopoverTriggerExample() {
  return (
    <View style={{ gap: 16, alignItems: 'center' }}>
      <Ux4gTooltip text='Opens on press' trigger='press' placement='top'>
        <TriggerChip label='Press Trigger' />
      </Ux4gTooltip>
      <Ux4gTooltip text='Opens on long press' trigger='longPress' placement='top'>
        <TriggerChip label='Long Press Trigger' />
      </Ux4gTooltip>
    </View>
  );
}`:`import React from 'react';
import { Text, Pressable } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function PopoverBasicExample() {
  return (
    <Ux4gTooltip text='This is a basic popover message.' placement='top' trigger='press'>
      <Pressable style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#EEF2FF' }}>
        <Text style={{ color: '#312E81', fontWeight: '600' }}>Open Popover</Text>
      </Pressable>
    </Ux4gTooltip>
  );
}`,ym=i=>i==="popover-rich"?`        <Ux4gTooltip
          title='Verification Required'
          text='Please verify your mobile number to continue this step.'
          placement='bottom'
          trigger='press'
          action={<Ux4gButton text='Verify Now' size='small' />}
          isPersistent={true}
        >
          <Pressable style={styles.primaryAnchor}>
            <Text style={styles.primaryAnchorText}>Open Rich Popover</Text>
          </Pressable>
        </Ux4gTooltip>`:i==="popover-placements"?`        <View style={styles.placementStack}>
          <Ux4gTooltip text='Top placement' placement='top' trigger='press'>
            <Pressable style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Top</Text></Pressable>
          </Ux4gTooltip>
          <View style={styles.rowGap}>
            <Ux4gTooltip text='Left placement' placement='left' trigger='press'>
              <Pressable style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Left</Text></Pressable>
            </Ux4gTooltip>
            <Ux4gTooltip text='Right placement' placement='right' trigger='press'>
              <Pressable style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Right</Text></Pressable>
            </Ux4gTooltip>
          </View>
          <Ux4gTooltip text='Bottom placement' placement='bottom' trigger='press'>
            <Pressable style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Bottom</Text></Pressable>
          </Ux4gTooltip>
        </View>`:i==="popover-custom-content"?`        <Ux4gTooltip
          placement='bottomStart'
          trigger='press'
          isPersistent={true}
          customContent={
            <View style={{ width: 220 }}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: '#FFFFFF' }}>Payment Summary</Text>
              <Text style={{ fontSize: 12, color: '#E5E7EB', marginTop: 6 }}>Subtotal: INR 1499</Text>
              <Text style={{ fontSize: 12, color: '#E5E7EB', marginTop: 2 }}>Tax: INR 270</Text>
              <Text style={{ fontSize: 13, color: '#FFFFFF', marginTop: 10, fontWeight: '600' }}>Total: INR 1769</Text>
            </View>
          }
        >
          <Pressable style={styles.neutralAnchor}>
            <Text style={styles.neutralAnchorText}>Open Custom Popover</Text>
          </Pressable>
        </Ux4gTooltip>`:i==="popover-trigger"?`        <View style={styles.placementStack}>
          <Ux4gTooltip text='Opens on press' trigger='press' placement='top'>
            <Pressable style={styles.grayAnchor}><Text style={styles.grayAnchorText}>Press Trigger</Text></Pressable>
          </Ux4gTooltip>
          <Ux4gTooltip text='Opens on long press' trigger='longPress' placement='top'>
            <Pressable style={styles.grayAnchor}><Text style={styles.grayAnchorText}>Long Press Trigger</Text></Pressable>
          </Ux4gTooltip>
        </View>`:`        <Ux4gTooltip text='This is a basic popover message.' placement='top' trigger='press'>
          <Pressable style={styles.neutralAnchor}>
            <Text style={styles.neutralAnchorText}>Open Popover</Text>
          </Pressable>
        </Ux4gTooltip>`,bm=({isDark:i,story:d="popover-basic"})=>{const[c,m]=T.useState("preview"),f=fm(d),b=gm[f],x=T.useMemo(()=>xm(f),[f]),s=()=>{const p=`import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gButton, Ux4gThemeProvider, Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${ym(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowGap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  placementStack: {
    gap: 16,
    alignItems: 'center',
  },
  neutralAnchor: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#EEF2FF',
  },
  neutralAnchorText: {
    color: '#312E81',
    fontWeight: '600',
  },
  primaryAnchor: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#4A2BC2',
  },
  primaryAnchorText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  grayAnchor: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  grayAnchorText: {
    color: '#111827',
    fontWeight: '600',
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gPopover%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Popover Preview"})},w=[{name:"children",type:"ReactNode",default:"required",desc:"Anchor node that triggers the popover.",required:!0},{name:"text",type:"string",default:"undefined",desc:"Primary message text.",required:!1},{name:"title",type:"string",default:"undefined",desc:"Title text for rich popover.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Optional icon content before text/title.",required:!1},{name:"placement",type:"Ux4gTooltipPlacement",default:"'top'",desc:"Placement of popover relative to anchor.",required:!1},{name:"trigger",type:"'press' | 'longPress'",default:"'longPress'",desc:"Interaction used to open popover.",required:!1},{name:"isPersistent",type:"boolean",default:"false",desc:"Keeps popover open until dismissed when true.",required:!1},{name:"action",type:"ReactNode",default:"undefined",desc:"Action area content for rich popover.",required:!1},{name:"customContent",type:"ReactNode",default:"undefined",desc:"Completely custom content replacing default body.",required:!1},{name:"backgroundColor",type:"string",default:"theme-based",desc:"Popover background color override.",required:!1},{name:"contentColor",type:"string",default:"theme-based",desc:"Text/content color override.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for default text.",required:!1},{name:"cornerRadius",type:"number",default:"4",desc:"Corner radius for popover bubble.",required:!1},{name:"arrowWidth",type:"number",default:"10",desc:"Arrow width for popover pointer.",required:!1},{name:"arrowHeight",type:"number",default:"6",desc:"Arrow height for popover pointer.",required:!1},{name:"maxWidth",type:"number",default:"240",desc:"Maximum width of popover content.",required:!1},{name:"autoShow",type:"boolean",default:"false",desc:"Shows popover automatically after mount.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"PopoverExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},vm=i=>i==="progress"||i==="progress-indicator"?"progress-linear":i==="progress-sla"||i==="progress-sla-indicator"?"progress-sla-circular":["progress-linear","progress-circular","progress-half-circle","progress-animated","progress-sla-circular","progress-sla-linear"].includes(i)?i:"progress-linear",wm={"progress-linear":{title:"Progress Indicator",description:"Linear progress parity set: rounded, sharp, icon+hint, and inside/outside percentage placements."},"progress-circular":{title:"Progress Indicator",description:"Circular progress parity set with size scaling, center content, metadata labels, and stroke cap variations."},"progress-half-circle":{title:"Progress Indicator",description:"Half-circle progress parity set with showScale modes, size variants, and gradient rendering."},"progress-animated":{title:"Progress Indicator",description:"Animated circular and half-circle indicators using Flutter-matched default easing duration behavior."},"progress-sla-circular":{title:"Progress SLA Indicator",description:"SLA circular progress status cards with semantic color variants."},"progress-sla-linear":{title:"Progress SLA Indicator",description:"SLA linear progress rows with sharp and rounded style columns."}},Sm=i=>i==="progress-sla-circular"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gCircularProgress } from 'ux4g-react-native-design-system';

const SlaBadge = ({ text, fg, bg }: { text: string; fg: string; bg: string }) => (
  <View style={{ backgroundColor: bg, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}>
    <Text style={{ color: fg, fontSize: 12, fontWeight: '700' }}>{text}</Text>
  </View>
);

export default function ProgressSlaCircularExample() {
  return (
    <View style={{ gap: 24, width: '100%' }}>
      <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827' }}>SLA Circular Progress</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Ux4gCircularProgress value={0.5} size='xl' progressColor='#6A4EFF' gradientColors={['#DCD4FF', '#6A4EFF']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<SlaBadge text='Label' fg='#6A4EFF' bg='#EFEAFF' />} />
        <Ux4gCircularProgress value={0.5} size='xl' progressColor='#FFA827' gradientColors={['#FFF2D9', '#FFA827']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<SlaBadge text='Label' fg='#FFA827' bg='#FFF7E6' />} />
        <Ux4gCircularProgress value={0.5} size='xl' progressColor='#F55E57' gradientColors={['#FFECEE', '#F55E57']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<SlaBadge text='Label' fg='#F55E57' bg='#FFF0F0' />} />
        <Ux4gCircularProgress value={0.5} size='xl' progressColor='#1AA64A' gradientColors={['#DFF9E8', '#1AA64A']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<SlaBadge text='Label' fg='#1AA64A' bg='#F2FCEF' />} />
      </View>
    </View>
  );
}`:i==="progress-sla-linear"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gIcons, Ux4gLinearProgressBar } from 'ux4g-react-native-design-system';

export default function ProgressSlaLinearExample() {
  return (
    <View style={{ gap: 24, width: '100%' }}>
      <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827' }}>Linear Progress</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: '48%', gap: 14 }}>
          <Text style={{ color: '#6B7280' }}>Sharp</Text>
          <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#6A4EFF' })} iconBackgroundColor='#6A4EFF1F' gradientColors={['#6A4EFF', '#9B59B6']} />
          <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#F39C12' })} iconBackgroundColor='#F39C121F' gradientColors={['#FFAE00', '#FF5F00']} />
          <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#E74C3C' })} iconBackgroundColor='#E74C3C1F' gradientColors={['#FFB3AE', '#E74C3C']} />
          <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#27AE60' })} iconBackgroundColor='#27AE601F' gradientColors={['#90EE90', '#27AE60']} />
        </View>

        <View style={{ width: '48%', gap: 14 }}>
          <Text style={{ color: '#6B7280' }}>Rounded</Text>
          <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#6A4EFF' })} iconBackgroundColor='#6A4EFF1F' gradientColors={['#6A4EFF', '#9B59B6']} />
          <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#F39C12' })} iconBackgroundColor='#F39C121F' gradientColors={['#FFAE00', '#FF5F00']} />
          <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#E74C3C' })} iconBackgroundColor='#E74C3C1F' gradientColors={['#FFB3AE', '#E74C3C']} />
          <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#27AE60' })} iconBackgroundColor='#27AE601F' gradientColors={['#90EE90', '#27AE60']} />
        </View>
      </View>
    </View>
  );
}`:i==="progress-circular"?`import React from 'react';
import { View } from 'react-native';
import { Ux4gCircularProgress } from 'ux4g-react-native-design-system';

export default function ProgressCircularExample() {
  return (
    <View style={{ gap: 24, alignItems: 'center' }}>
      <Ux4gCircularProgress
        value={0.72}
        size='xl'
        centerValueText='72%'
        centerDescription='Profile'
        strokeCap='round'
      />

      <Ux4gCircularProgress
        value={0.45}
        size='l'
        label='KYC Progress'
        description='3/7 steps complete'
        strokeCap='butt'
      />

      <Ux4gCircularProgress
        value={0.88}
        size='xxl'
        centerValueText='88%'
        centerDescription='Portfolio'
        gradientColors={['#DCD4FF', '#4A2BC2']}
      />
    </View>
  );
}`:i==="progress-half-circle"?`import React from 'react';
import { View } from 'react-native';
import { Ux4gHalfCircleProgress } from 'ux4g-react-native-design-system';

export default function ProgressHalfCircleExample() {
  return (
    <View style={{ gap: 28, alignItems: 'center' }}>
      <Ux4gHalfCircleProgress
        value={0.64}
        size='l'
        valueText='64%'
        description='Portfolio Health'
        showScale={true}
      />

      <Ux4gHalfCircleProgress
        value={0.38}
        size='m'
        valueText='38%'
        description='Goal Coverage'
        showScale={false}
      />

      <Ux4gHalfCircleProgress
        value={0.91}
        size='xl'
        valueText='91%'
        description='Credit Health'
        gradientColors={['#4A2BC2', '#DCD4FF']}
      />
    </View>
  );
}`:i==="progress-animated"?`import React from 'react';
import { View } from 'react-native';
import { Ux4gAnimatedCircularProgress, Ux4gAnimatedHalfCircleProgress } from 'ux4g-react-native-design-system';

export default function ProgressAnimatedExample() {
  return (
    <View style={{ gap: 28, alignItems: 'center' }}>
      <Ux4gAnimatedCircularProgress
        value={0.82}
        size='xl'
        duration={700}
        centerValueText='82%'
        centerDescription='Completion'
      />

      <Ux4gAnimatedHalfCircleProgress
        value={0.57}
        size='l'
        duration={700}
        valueText='57%'
        description='Target Achieved'
        showScale={true}
      />
    </View>
  );
}`:`import React from 'react';
import { View } from 'react-native';
import { Ux4gLinearProgressBar, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function ProgressLinearExample() {
  return (
    <View style={{ gap: 18, width: '100%' }}>
      <Ux4gLinearProgressBar
        value={0.35}
        icon={Ux4gIcons.info({ size: 16, color: '#4A2BC2' })}
        label='Profile Completion'
        hint='Step 2 of 6'
        showPercentage={true}
        labelPosition='outside'
        shape='rounded'
      />

      <Ux4gLinearProgressBar
        value={0.68}
        label='Document Upload'
        showPercentage={true}
        labelPosition='inside'
        height={14}
        shape='rounded'
      />

      <Ux4gLinearProgressBar
        value={0.86}
        label='Loan Eligibility'
        gradientColors={['#DCD4FF', '#4A2BC2']}
        showPercentage={true}
        labelPosition='outside'
        shape='sharp'
      />

      <Ux4gLinearProgressBar
        value={0.22}
        label='Verification Queue'
        hint='Pending'
        showPercentage={false}
        shape='rounded'
      />
    </View>
  );
}`,Cm=i=>i==="progress-sla-circular"?`        <View style={styles.slaContainer}>
          <Text style={styles.sectionTitle}>SLA Circular Progress</Text>
          <View style={styles.slaCircularRow}>
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#6A4EFF' gradientColors={['#DCD4FF', '#6A4EFF']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#EFEAFF', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#6A4EFF', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#FFA827' gradientColors={['#FFF2D9', '#FFA827']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#FFF7E6', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#FFA827', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#F55E57' gradientColors={['#FFECEE', '#F55E57']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#FFF0F0', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#F55E57', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#1AA64A' gradientColors={['#DFF9E8', '#1AA64A']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#F2FCEF', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#1AA64A', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
          </View>
        </View>`:i==="progress-sla-linear"?`        <View style={styles.slaContainer}>
          <Text style={styles.sectionTitle}>Linear Progress</Text>

          <View style={styles.slaLinearRow}>
            <View style={styles.slaCol}>
              <Text style={styles.colTitle}>Sharp</Text>
              <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#6A4EFF' })} iconBackgroundColor='#6A4EFF1F' gradientColors={['#6A4EFF', '#9B59B6']} />
              <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#F39C12' })} iconBackgroundColor='#F39C121F' gradientColors={['#FFAE00', '#FF5F00']} />
              <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#E74C3C' })} iconBackgroundColor='#E74C3C1F' gradientColors={['#FFB3AE', '#E74C3C']} />
              <Ux4gLinearProgressBar value={0.5} shape='sharp' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#27AE60' })} iconBackgroundColor='#27AE601F' gradientColors={['#90EE90', '#27AE60']} />
            </View>

            <View style={styles.slaCol}>
              <Text style={styles.colTitle}>Rounded</Text>
              <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#6A4EFF' })} iconBackgroundColor='#6A4EFF1F' gradientColors={['#6A4EFF', '#9B59B6']} />
              <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#F39C12' })} iconBackgroundColor='#F39C121F' gradientColors={['#FFAE00', '#FF5F00']} />
              <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#E74C3C' })} iconBackgroundColor='#E74C3C1F' gradientColors={['#FFB3AE', '#E74C3C']} />
              <Ux4gLinearProgressBar value={0.5} shape='rounded' label='Label' hint='Hint' showPercentage={true} icon={Ux4gIcons.shield({ size: 14, color: '#27AE60' })} iconBackgroundColor='#27AE601F' gradientColors={['#90EE90', '#27AE60']} />
            </View>
          </View>
        </View>`:i==="progress-circular"?`        <View style={styles.stackCentered}>
          <Ux4gCircularProgress
            value={0.72}
            size='xl'
            centerValueText='72%'
            centerDescription='Profile'
            strokeCap='round'
          />
          <Ux4gCircularProgress
            value={0.45}
            size='l'
            label='KYC Progress'
            description='3/7 steps complete'
            strokeCap='butt'
          />
          <Ux4gCircularProgress
            value={0.88}
            size='xxl'
            centerValueText='88%'
            centerDescription='Portfolio'
            gradientColors={['#DCD4FF', '#4A2BC2']}
          />
        </View>`:i==="progress-half-circle"?`        <View style={styles.stackCentered}>
          <Ux4gHalfCircleProgress
            value={0.64}
            size='l'
            valueText='64%'
            description='Portfolio Health'
            showScale={true}
          />
          <Ux4gHalfCircleProgress
            value={0.38}
            size='m'
            valueText='38%'
            description='Goal Coverage'
            showScale={false}
          />
          <Ux4gHalfCircleProgress
            value={0.91}
            size='xl'
            valueText='91%'
            description='Credit Health'
            gradientColors={['#4A2BC2', '#DCD4FF']}
          />
        </View>`:i==="progress-animated"?`        <View style={styles.stackCentered}>
          <Ux4gAnimatedCircularProgress
            value={0.82}
            size='xl'
            duration={700}
            centerValueText='82%'
            centerDescription='Completion'
          />
          <Ux4gAnimatedHalfCircleProgress
            value={0.57}
            size='l'
            duration={700}
            valueText='57%'
            description='Target Achieved'
            showScale={true}
          />
        </View>`:`        <View style={styles.stackFull}>
          <Ux4gLinearProgressBar
            value={0.35}
            icon={Ux4gIcons.info({ size: 16, color: '#4A2BC2' })}
            label='Profile Completion'
            hint='Step 2 of 6'
            showPercentage={true}
            labelPosition='outside'
            shape='rounded'
          />
          <Ux4gLinearProgressBar
            value={0.68}
            label='Document Upload'
            showPercentage={true}
            labelPosition='inside'
            height={14}
            shape='rounded'
          />
          <Ux4gLinearProgressBar
            value={0.86}
            label='Loan Eligibility'
            gradientColors={['#DCD4FF', '#4A2BC2']}
            showPercentage={true}
            labelPosition='outside'
            shape='sharp'
          />
          <Ux4gLinearProgressBar
            value={0.22}
            label='Verification Queue'
            hint='Pending'
            showPercentage={false}
            shape='rounded'
          />
        </View>`,Zc=({isDark:i,story:d="progress-linear"})=>{const[c,m]=T.useState("preview"),f=vm(d),b=wm[f],x=T.useMemo(()=>Sm(f),[f]),s=()=>{const p=`import React from 'react';
  import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Ux4gAnimatedCircularProgress,
  Ux4gAnimatedHalfCircleProgress,
  Ux4gCircularProgress,
  Ux4gHalfCircleProgress,
  Ux4gIcons,
  Ux4gLinearProgressBar,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${Cm(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  stackCentered: {
    gap: 28,
    alignItems: 'center',
  },
  stackFull: {
    gap: 18,
    width: '100%',
  },
  slaContainer: {
    width: '100%',
    gap: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  slaCircularRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slaLinearRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slaCol: {
    width: '48%',
    gap: 14,
  },
  colTitle: {
    color: '#6B7280',
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gProgress%20Indicator%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Progress Indicator Preview"})},w=[{name:"value",type:"number",default:"required",desc:"Progress value from 0.0 to 1.0.",required:!0},{name:"shape",type:"'sharp' | 'rounded'",default:"'rounded'",desc:"Linear progress corner shape parity with Flutter.",required:!1},{name:"showScale",type:"boolean",default:"false",desc:"Shows 0% and 100% scale labels on half-circle indicators.",required:!1},{name:"strokeCap",type:"'butt' | 'round'",default:"component-specific",desc:"Arc endpoint style for circular and half-circle indicators.",required:!1},{name:"startAngle",type:"number",default:"-90",desc:"Start angle for circular progress arc.",required:!1},{name:"gradientColors",type:"string[]",default:"theme-based",desc:"Gradient colors for progress fill.",required:!1},{name:"progressColor / color",type:"string",default:"theme primary",desc:"Solid progress color override.",required:!1},{name:"trackColor",type:"string",default:"theme-based",desc:"Background track color.",required:!1},{name:"size",type:"variant string",default:"component-specific",desc:"Preset size token for circular and half-circle indicators.",required:!1},{name:"strokeWidth",type:"number",default:"auto",desc:"Stroke thickness for circular and half-circle indicators.",required:!1},{name:"label / hint / description",type:"string",default:"undefined",desc:"Supporting text fields depending on indicator type.",required:!1},{name:"showPercentage / labelPosition",type:"boolean / enum",default:"false / outside",desc:"Linear progress percentage visibility and placement.",required:!1},{name:"duration",type:"number",default:"700",desc:"Animation duration for animated progress components.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"ProgressIndicatorExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},jm=i=>i==="radio"||i==="radio-button"?"radio-basic":["radio-basic","radio-sizes","radio-status"].includes(i)?i:"radio-basic",km={"radio-basic":{title:"Radio Button",description:"Single-choice selection control with label, helper text, required marker, and disabled states."},"radio-sizes":{title:"Radio Button",description:"Size variants for compact to prominent radio controls in form layouts."},"radio-status":{title:"Radio Button",description:"Validation-focused status styles with semantic ring and description variants."}},Tm=i=>i==="radio-sizes"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gRadioButton } from 'ux4g-react-native-design-system';

export default function RadioButtonSizesExample() {
  const [sizeChoice, setSizeChoice] = useState('medium');

  return (
    <View style={{ gap: 14, width: '100%' }}>
      <Ux4gRadioButton value='small' groupValue={sizeChoice} onChanged={setSizeChoice} size='small' label='Small Radio (16pt)' description='Compact control' />
      <Ux4gRadioButton value='medium' groupValue={sizeChoice} onChanged={setSizeChoice} size='medium' label='Medium Radio (20pt)' description='Default size' />
      <Ux4gRadioButton value='large' groupValue={sizeChoice} onChanged={setSizeChoice} size='large' label='Large Radio (24pt)' description='High emphasis selection' />
    </View>
  );
}`:i==="radio-status"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gRadioButton } from 'ux4g-react-native-design-system';

export default function RadioButtonStatusExample() {
  const [statusChoice, setStatusChoice] = useState('defaultStatus');

  return (
    <View style={{ gap: 14, width: '100%' }}>
      <Ux4gRadioButton value='defaultStatus' groupValue={statusChoice} onChanged={setStatusChoice} label='Default State' description='Standard helper variant' descriptionVariant='helper' status='defaultStatus' />
      <Ux4gRadioButton value='error' groupValue={statusChoice} onChanged={setStatusChoice} label='Error State' description='Please correct this selection' descriptionVariant='error' status='error' />
      <Ux4gRadioButton value='warning' groupValue={statusChoice} onChanged={setStatusChoice} label='Warning State' description='Review this choice carefully' descriptionVariant='warning' status='warning' />
      <Ux4gRadioButton value='success' groupValue={statusChoice} onChanged={setStatusChoice} label='Success State' description='Selection looks good' descriptionVariant='success' status='success' />
    </View>
  );
}`:`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gRadioButton } from 'ux4g-react-native-design-system';

export default function RadioButtonBasicExample() {
  const [groupValue, setGroupValue] = useState('option-a');

  return (
    <View style={{ gap: 14, width: '100%' }}>
      <Ux4gRadioButton value='option-a' groupValue={groupValue} onChanged={setGroupValue} label='Option A' description='Primary choice for this field' />
      <Ux4gRadioButton value='option-b' groupValue={groupValue} onChanged={setGroupValue} label='Option B' description='Secondary choice for this field' />
      <Ux4gRadioButton value='option-c' groupValue={groupValue} onChanged={setGroupValue} label='Required Option' description='Marked as mandatory input' isRequired={true} />
      <Ux4gRadioButton value='option-d' groupValue={groupValue} label='Disabled Option' description='Unavailable in current context' enabled={false} />
    </View>
  );
}`,Nm=i=>i==="radio-sizes"?`        <View style={styles.stackFull}>
          <Ux4gRadioButton value='small' groupValue={sizeChoice} onChanged={setSizeChoice} size='small' label='Small Radio (16pt)' description='Compact control' />
          <Ux4gRadioButton value='medium' groupValue={sizeChoice} onChanged={setSizeChoice} size='medium' label='Medium Radio (20pt)' description='Default size' />
          <Ux4gRadioButton value='large' groupValue={sizeChoice} onChanged={setSizeChoice} size='large' label='Large Radio (24pt)' description='High emphasis selection' />
        </View>`:i==="radio-status"?`        <View style={styles.stackFull}>
          <Ux4gRadioButton value='defaultStatus' groupValue={statusChoice} onChanged={setStatusChoice} label='Default State' description='Standard helper variant' descriptionVariant='helper' status='defaultStatus' />
          <Ux4gRadioButton value='error' groupValue={statusChoice} onChanged={setStatusChoice} label='Error State' description='Please correct this selection' descriptionVariant='error' status='error' />
          <Ux4gRadioButton value='warning' groupValue={statusChoice} onChanged={setStatusChoice} label='Warning State' description='Review this choice carefully' descriptionVariant='warning' status='warning' />
          <Ux4gRadioButton value='success' groupValue={statusChoice} onChanged={setStatusChoice} label='Success State' description='Selection looks good' descriptionVariant='success' status='success' />
        </View>`:`        <View style={styles.stackFull}>
          <Ux4gRadioButton value='option-a' groupValue={groupValue} onChanged={setGroupValue} label='Option A' description='Primary choice for this field' />
          <Ux4gRadioButton value='option-b' groupValue={groupValue} onChanged={setGroupValue} label='Option B' description='Secondary choice for this field' />
          <Ux4gRadioButton value='option-c' groupValue={groupValue} onChanged={setGroupValue} label='Required Option' description='Marked as mandatory input' isRequired={true} />
          <Ux4gRadioButton value='option-d' groupValue={groupValue} label='Disabled Option' description='Unavailable in current context' enabled={false} />
        </View>`,Um=({isDark:i,story:d="radio-basic"})=>{const[c,m]=T.useState("preview"),f=jm(d),b=km[f],x=T.useMemo(()=>Tm(f),[f]),s=()=>{const p=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gRadioButton, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [groupValue, setGroupValue] = useState('option-a');
  const [sizeChoice, setSizeChoice] = useState('medium');
  const [statusChoice, setStatusChoice] = useState('defaultStatus');

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${Nm(f)}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  stackFull: {
    width: '100%',
    gap: 14,
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gRadioButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"620px",border:"none",borderRadius:"8px"},title:"Expo Snack Radio Button Preview"})},w=[{name:"value",type:"T",default:"required",desc:"The value represented by this radio option.",required:!0},{name:"groupValue",type:"T | null",default:"undefined",desc:"Currently selected value in the radio group.",required:!1},{name:"onChanged",type:"(value: T) => void",default:"undefined",desc:"Called when this option is selected.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Primary label text.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Secondary helper or status message.",required:!1},{name:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"Radio indicator size token.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Shows required asterisk on label.",required:!1},{name:"descriptionVariant",type:"'helper' | 'error' | 'warning' | 'success'",default:"'helper'",desc:"Semantic style for description text and icon.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Visual status for radio ring color.",required:!1},{name:"color",type:"string",default:"theme.colors.primary",desc:"Explicit ring color override.",required:!1},{name:"labelColor",type:"string",default:"theme.colors.onSurface",desc:"Custom label text color.",required:!1},{name:"trailingIcon",type:"Ux4gIconProp",default:"undefined",desc:"Optional trailing icon beside label.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether option is interactive.",required:!1},{name:"style",type:"StyleProp<ViewStyle> | ((state) => StyleProp<ViewStyle>)",default:"undefined",desc:"Style override for row Pressable.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"descriptionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for description text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"RadioButtonExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Pm=i=>i==="result-list"||i==="result"?"result-list-basic":["result-list-basic","result-list-metadata","result-list-expanded","result-list-rejected"].includes(i)?i:"result-list-basic",Vm={"result-list-basic":{title:"Result List",description:"Collapsible summary row with details grid and optional action button."},"result-list-metadata":{title:"Result List",description:"Result list variants with status tags and segmented metadata pills."},"result-list-expanded":{title:"Result List",description:"Initially expanded view with custom content and multi-column details."},"result-list-rejected":{title:"Result List",description:"Rejected application state with CTA and rejection help details."}},Em=i=>i==="result-list-rejected"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gResultList } from 'ux4g-react-native-design-system';

const rejectionDetails = [
  { label: 'Rejection Reason', value: 'Address Proof Mismatch', isBold: true },
  { label: 'Applied Date', value: '05 Feb 2026' },
];

const grievanceHelp = (
  <View style={{ marginTop: 6 }}>
    <Text style={{ fontSize: 13, color: '#B45309', marginBottom: 2 }}>Need Help?</Text>
    <Text style={{ fontSize: 14, fontWeight: '600', color: '#4338CA' }}>Register grievance -></Text>
  </View>
);

export default function ResultListRejectedExample() {
  return (
    <View style={{ width: '100%', gap: 14, backgroundColor: '#F8FAFC', borderRadius: 16, padding: 4 }}>
      <Ux4gResultList
        title='Ration Card Transfer Request'
        statusTag='Rejected'
        tagColorScheme='error'
        actionButtonText='Re-apply'
        initialExpanded={true}
        showBottomDivider={false}
        details={rejectionDetails}
        expandedChild={grievanceHelp}
      />
    </View>
  );
}`:i==="result-list-metadata"?`import React from 'react';
import { View } from 'react-native';
import { Ux4gResultList } from 'ux4g-react-native-design-system';

export default function ResultListMetadataExample() {
  return (
    <View style={{ width: '100%', gap: 12, backgroundColor: '#F8FAFC', borderRadius: 16, padding: 4 }}>
      <Ux4gResultList
        title='Income Certificate Application'
        metadataSegments={[
          {
            text: '8 days left',
            leading: <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#F59E0B' }} />,
            textColor: '#374151',
          },
          { text: 'Under Review', textColor: '#D97706' },
        ]}
        actionButtonText='Track Status'
        initialExpanded={true}
        showBottomDivider={false}
        details={[
          { label: 'Reference Number', value: 'INC-2026-MH-04127' },
          { label: 'Last Updated Date', value: '10 Apr 2026' },
          { label: 'Assigned Officer', value: 'Rahul Sharma' },
          { label: 'Department', value: 'Revenue Department' },
        ]}
      />
    </View>
  );
}`:i==="result-list-expanded"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gResultList } from 'ux4g-react-native-design-system';

export default function ResultListExpandedExample() {
  return (
    <View style={{ width: '100%', gap: 12 }}>
      <Ux4gResultList
        title='KYC Verification'
        statusTag='Completed'
        tagColorScheme='success'
        initialExpanded={true}
        detailsColumns={2}
        details={[
          { label: 'Verified On', value: '10 Aug 2026' },
          { label: 'Method', value: 'DigiLocker + OTP' },
          { label: 'Verifier', value: 'Automated Engine' },
          { label: 'Confidence', value: '98%', valueColor: '#16A34A', isBold: true },
        ]}
        expandedChild={
          <View style={{ marginTop: 8 }}>
            <Text style={{ color: '#6B7280', fontSize: 13 }}>No manual intervention required.</Text>
          </View>
        }
      />
    </View>
  );
}`:`import React from 'react';
import { View } from 'react-native';
import { Ux4gResultList } from 'ux4g-react-native-design-system';

export default function ResultListBasicExample() {
  return (
    <View style={{ width: '100%', gap: 12 }}>
      <Ux4gResultList
        title='Service Application'
        actionButtonText='Open'
        details={[
          { label: 'Applicant', value: 'Priya Verma' },
          { label: 'Service', value: 'Birth Certificate' },
          { label: 'Submitted', value: '08 Aug 2026' },
          { label: 'Status', value: 'Pending Review' },
        ]}
      />
    </View>
  );
}`,Am=i=>i==="result-list-rejected"?`        <View style={styles.metadataCard}>
          <Ux4gResultList
            title='Ration Card Transfer Request'
            statusTag='Rejected'
            tagColorScheme='error'
            actionButtonText='Re-apply'
            initialExpanded={true}
            showBottomDivider={false}
            details={[
              { label: 'Rejection Reason', value: 'Address Proof Mismatch', isBold: true },
              { label: 'Applied Date', value: '05 Feb 2026' },
            ]}
            expandedChild={
              <View style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 13, color: '#B45309', marginBottom: 2 }}>Need Help?</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#4338CA' }}>Register grievance -></Text>
              </View>
            }
          />
        </View>`:i==="result-list-metadata"?`        <View style={styles.metadataCard}>
          <Ux4gResultList
            title='Income Certificate Application'
            metadataSegments={[
              {
                text: '8 days left',
                leading: <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#F59E0B' }} />,
                textColor: '#374151',
              },
              { text: 'Under Review', textColor: '#D97706' },
            ]}
            actionButtonText='Track Status'
            initialExpanded={true}
            showBottomDivider={false}
            details={[
              { label: 'Reference Number', value: 'INC-2026-MH-04127' },
              { label: 'Last Updated Date', value: '10 Apr 2026' },
              { label: 'Assigned Officer', value: 'Rahul Sharma' },
              { label: 'Department', value: 'Revenue Department' },
            ]}
          />
        </View>`:i==="result-list-expanded"?`        <View style={styles.stackFull}>
          <Ux4gResultList
            title='KYC Verification'
            statusTag='Completed'
            tagColorScheme='success'
            initialExpanded={true}
            detailsColumns={2}
            details={[
              { label: 'Verified On', value: '10 Aug 2026' },
              { label: 'Method', value: 'DigiLocker + OTP' },
              { label: 'Verifier', value: 'Automated Engine' },
              { label: 'Confidence', value: '98%', valueColor: '#16A34A', isBold: true },
            ]}
            expandedChild={<Text style={styles.expandedNote}>No manual intervention required.</Text>}
          />
        </View>`:`        <View style={styles.stackFull}>
          <Ux4gResultList
            title='Service Application'
            actionButtonText='Open'
            details={[
              { label: 'Applicant', value: 'Priya Verma' },
              { label: 'Service', value: 'Birth Certificate' },
              { label: 'Submitted', value: '08 Aug 2026' },
              { label: 'Status', value: 'Pending Review' },
            ]}
          />
        </View>`,Dm=({isDark:i,story:d="result-list-basic"})=>{const[c,m]=T.useState("preview"),f=Pm(d),b=Vm[f],x=T.useMemo(()=>Em(f),[f]),s=()=>{const p=`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ux4gResultList, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${Am(f)}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  stackFull: {
    width: '100%',
    gap: 12,
  },
  metadataCard: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 4,
  },
  expandedNote: {
    marginTop: 8,
    fontSize: 13,
    color: '#6B7280',
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gResultList%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Result List Preview"})},w=[{name:"title",type:"string",default:"required",desc:"Primary heading for the result row.",required:!0},{name:"titleTrailing",type:"ReactNode",default:"undefined",desc:"Widget rendered inline after title.",required:!1},{name:"statusTag",type:"string",default:"undefined",desc:"Optional status text shown as a tag.",required:!1},{name:"tagColorScheme",type:"'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info'",default:"'neutral'",desc:"Color scheme for status tag.",required:!1},{name:"metadataSegments",type:"Ux4gPillSegment[]",default:"undefined",desc:"Segmented pill metadata row.",required:!1},{name:"customMetadata",type:"ReactNode",default:"undefined",desc:"Custom metadata widget replacing segments.",required:!1},{name:"actionButtonText",type:"string",default:"undefined",desc:"Action button label on right side.",required:!1},{name:"onActionPressed",type:"() => void",default:"undefined",desc:"Action button press handler.",required:!1},{name:"details",type:"Ux4gResultDetail[]",default:"[]",desc:"Details grid shown when expanded.",required:!1},{name:"detailsColumns",type:"number",default:"2",desc:"Number of detail columns on wide layouts.",required:!1},{name:"expandedChild",type:"ReactNode",default:"undefined",desc:"Additional custom content in expanded area.",required:!1},{name:"initialExpanded",type:"boolean",default:"false",desc:"Initial expanded/collapsed state.",required:!1},{name:"onToggle",type:"(expanded: boolean) => void",default:"undefined",desc:"Called when expansion toggles.",required:!1},{name:"showBottomDivider",type:"boolean",default:"true",desc:"Controls bottom divider visibility.",required:!1},{name:"contentPadding",type:"number",default:"16",desc:"Internal content padding for header and body.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"ResultListExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Fm=({isDark:i,story:d="checkbox-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { Ux4gCheckbox } from 'ux4g-react-native-design-system';"),s.push("import { useState } from 'react';"),s.push(""),s.push("// Checked State"),s.push("const [checked, setChecked] = useState(true);"),s.push("<Ux4gCheckbox"),s.push("  value={checked}"),s.push('  label="Checked Checkbox"'),s.push('  description="Standard checked state"'),s.push("  onChanged={setChecked}"),s.push("/>"),s.push(""),s.push("// Indeterminate (Tristate) State"),s.push("const [tristate, setTristate] = useState<boolean | null>(null);"),s.push("<Ux4gCheckbox"),s.push("  value={tristate}"),s.push('  label="Indeterminate Checkbox"'),s.push('  description="Tristate dash indicator"'),s.push("  onChanged={setTristate}"),s.push("/>"),s.push(""),s.push("// Disabled Checkbox"),s.push("<Ux4gCheckbox"),s.push("  value={true}"),s.push('  label="Disabled Checkbox"'),s.push("  enabled={false}"),s.push("/>"),s.join(`
`)},[]),b=()=>{let s="";d==="checkbox-sizes"?s=`        <Ux4gCheckbox value={true} size="small" label="Small Checkbox (16pt)" description="Helper info" />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox value={true} size="medium" label="Medium Checkbox (20pt)" description="Default size" />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox value={true} size="large" label="Large Checkbox (24pt)" description="Prominent option" />`:d==="checkbox-tristate"?s=`        <Ux4gCheckbox value={null} label="Select All Items" description="Partial selection state (null value)" />
        <View style={{ height: 12 }} />
        <View style={{ paddingLeft: 24, gap: 12 }}>
          <Ux4gCheckbox value={true} label="Option 1" size="small" />
          <Ux4gCheckbox value={false} label="Option 2" size="small" />
        </View>`:s=`        <Ux4gCheckbox 
          value={checked1} 
          onChanged={setChecked1} 
          label="Checked Checkbox" 
          description="Standard checked state" 
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={checked2} 
          onChanged={setChecked2} 
          label="Unchecked Checkbox" 
          description="Standard unchecked state" 
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={null} 
          label="Indeterminate Checkbox" 
          description="Tristate dash indicator" 
        />

        <View style={{ height: 16 }} />
        
        <Ux4gCheckbox 
          value={true} 
          enabled={false} 
          label="Disabled Checkbox" 
          description="Muted non-interactive state" 
        />`;const w=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gCheckbox, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 24
  }
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gCheckbox%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},x=[{name:"value",type:"boolean | null",default:"false",desc:"Checked state (`true` checked, `false` unchecked, `null` indeterminate).",required:!0},{name:"onChanged",type:"(newValue: boolean | null) => void",default:"required",desc:"Callback fired when user presses checkbox or label.",required:!0},{name:"label",type:"string",default:"undefined",desc:"Primary text label next to checkbox.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Secondary helper/description text.",required:!1},{name:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"Checkbox box size.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Appends red asterisk to the label.",required:!1},{name:"hasError",type:"boolean",default:"false",desc:"Highlights checkbox border in error state.",required:!1},{name:"descriptionVariant",type:"'helper' | 'error' | 'warning' | 'success'",default:"'helper'",desc:"Semantic style for description text.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether checkbox is interactive.",required:!1},{name:"activeColor",type:"string",default:"theme.colors.primary",desc:"Active fill/border color for checked/indeterminate state.",required:!1},{name:"checkColor",type:"string",default:"theme.colors.onPrimary",desc:"Checkmark/dash icon color.",required:!1},{name:"style",type:"StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer Pressable row.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"descriptionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for description text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Checkbox"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Selection control for single items, multi-select lists, and parent-child tristate selection with interactive checkmark and indeterminate state animations."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"CheckboxExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Bm=({isDark:i,story:d="chips-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { "),s.push("  Ux4gChoiceChip,"),s.push("  Ux4gFilterChip,"),s.push("  Ux4gInputChip,"),s.push("  Ux4gSuggestionChip,"),s.push("  Ux4gActionChip,"),s.push("} from 'ux4g-react-native-design-system';"),s.push("import { useState } from 'react';"),s.push(""),s.push("// Choice Chips"),s.push("const [selected, setSelected] = useState(true);"),s.push("<Ux4gChoiceChip"),s.push('  text="Option 1"'),s.push("  selected={selected}"),s.push("  onClick={() => setSelected(!selected)}"),s.push("/>"),s.push(""),s.push("// Filter Chips"),s.push("<Ux4gFilterChip"),s.push('  text="In Stock"'),s.push("  selected={true}"),s.push("  onClick={() => {}}"),s.push("/>"),s.push(""),s.push("// Input Chips with Delete"),s.push("<Ux4gInputChip"),s.push('  text="React Native"'),s.push(`  onDismiss={() => console.log("Dismissed")}
/>`),s.push(""),s.push("// Suggestion Chips"),s.push("<Ux4gSuggestionChip"),s.push('  text="Design System"'),s.push(`  onClick={() => {}}
/>`),s.join(`
`)},[]),b=()=>{let s="";d==="chips-action"?s=`        <Ux4gSuggestionChip text="React Native" onClick={() => {}} />
        <View style={{ height: 12 }} />
        <Ux4gSuggestionChip text="UX4G Design System" onClick={() => {}} />
        <View style={{ height: 12 }} />
        <Ux4gActionChip text="Download Report" onClick={() => {}} />
        <View style={{ height: 12 }} />
        <Ux4gActionChip text="Share Link" enabled={false} onClick={() => {}} />`:d==="chips-input"?s=`        <Ux4gInputChip text="React Native" onDismiss={() => console.log("Dismissed 1")} />
        <View style={{ height: 12 }} />
        <Ux4gInputChip text="TypeScript" onDismiss={() => console.log("Dismissed 2")} />
        <View style={{ height: 12 }} />
        <Ux4gInputChip text="Disabled Tag" enabled={false} onDismiss={() => {}} />`:s=`        <Ux4gChoiceChip text="Choice 1 (Selected)" selected={choice1} onClick={() => setChoice1(!choice1)} />
        <View style={{ height: 12 }} />
        <Ux4gChoiceChip text="Choice 2 (Unselected)" selected={choice2} onClick={() => setChoice2(!choice2)} />
        <View style={{ height: 16 }} />
        <Ux4gFilterChip text="Filter: Active" selected={filter1} onClick={() => setFilter1(!filter1)} />
        <View style={{ height: 12 }} />
        <Ux4gFilterChip text="Filter: Inactive" selected={filter2} onClick={() => setFilter2(!filter2)} />`;const w=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Ux4gChoiceChip,
  Ux4gFilterChip,
  Ux4gInputChip,
  Ux4gSuggestionChip,
  Ux4gActionChip,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [choice1, setChoice1] = useState(true);
  const [choice2, setChoice2] = useState(false);
  const [filter1, setFilter1] = useState(true);
  const [filter2, setFilter2] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 24
  }
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gChips%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Chips Preview"})},x=[{name:"text",type:"string",default:"required",desc:"Chip label text (required by ChoiceChip, FilterChip, InputChip).",required:!0},{name:"selected",type:"boolean",default:"required",desc:"Selection state (required by ChoiceChip and FilterChip).",required:!0},{name:"onClick",type:"() => void",default:"required",desc:"Tap callback (required by ChoiceChip and FilterChip).",required:!0},{name:"onPress",type:"() => void",default:"undefined",desc:"Optional press callback alias for ChoiceChip/FilterChip.",required:!1},{name:"onDismiss",type:"() => void",default:"undefined",desc:"Dismiss callback for InputChip trailing close action.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the chip is interactive.",required:!1},{name:"size",type:"Ux4gChoiceChipSize | Ux4gFilterChipSize | Ux4gInputChipSize",default:"'m'",desc:"Size token (Choice/Filter: s|m, Input: xs|s|m).",required:!1},{name:"leadingContent",type:"ReactNode",default:"undefined",desc:"Optional leading content/icon.",required:!1},{name:"trailingContent",type:"ReactNode",default:"undefined",desc:"Optional trailing content/icon (Choice/Filter).",required:!1},{name:"borderRadius",type:"number",default:"size-based",desc:"Corner radius override (ChoiceChip only).",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for chip container.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for chip text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Chips"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Compact interactive elements representing choices, attributes, actions, or input tags. Includes Choice, Filter, Input, Suggestion, and Action chips."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"ChipsExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},zm=({isDark:i,story:d="chip-group-wrap"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { Ux4gChipGroup, Ux4gChoiceChip, Ux4gInputChipField, Ux4gInputChip } from 'ux4g-react-native-design-system';"),s.push("import { useState } from 'react';"),s.push(""),s.push("// Wrap Chip Group"),s.push("const [selectedIdx, setSelectedIdx] = useState(0);"),s.push("<Ux4gChipGroup"),s.push('  arrangement="wrap"'),s.push("  spacing={8}"),s.push("  runSpacing={8}"),s.push('  chips={["React Native", "TypeScript", "Expo", "Storybook", "UX4G"].map((tag, i) => ('),s.push("    <Ux4gChoiceChip"),s.push("      key={tag}"),s.push("      text={tag}"),s.push("      selected={selectedIdx === i}"),s.push("      onClick={() => setSelectedIdx(i)}"),s.push("    />"),s.push("  ))}"),s.push("/>"),s.push(""),s.push("// Input Chip Field"),s.push('const [text, setText] = useState("");'),s.push('const [tags, setTags] = useState(["Frontend", "UI"]);'),s.push("<Ux4gInputChipField"),s.push("  value={text}"),s.push("  onValueChange={setText}"),s.push("  onAddChip={(newTag) => setTags([...tags, newTag])}"),s.push("  chips={tags.map(t => <Ux4gInputChip key={t} text={t} onDismiss={() => setTags(tags.filter(x => x !== t))} />)}"),s.push("/>"),s.join(`
`)},[]),b=()=>{let s="";d==="chip-group-input-field"?s=`        <Ux4gInputChipField
          value={inputValue}
          onValueChange={setInputValue}
          onAddChip={(newChip) => setChipsList([...chipsList, newChip])}
          placeholder="Type tag and press add..."
          chips={chipsList.map((chipText) => (
            <Ux4gInputChip
              key={chipText}
              text={chipText}
              onDismiss={() => setChipsList(chipsList.filter((c) => c !== chipText))}
            />
          ))}
        />`:s=`        <Ux4gChipGroup
          arrangement="wrap"
          spacing={8}
          runSpacing={8}
          chips={['React Native', 'TypeScript', 'Expo', 'Storybook', 'UX4G Design System', 'Government Stack'].map((item, idx) => (
            <Ux4gChoiceChip
              key={item}
              text={item}
              selected={selectedCategory === idx}
              onClick={() => setSelectedCategory(idx)}
            />
          ))}
        />`;const w=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Ux4gChipGroup,
  Ux4gChoiceChip,
  Ux4gInputChip,
  Ux4gInputChipField,
  Ux4gThemeProvider,
} from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [chipsList, setChipsList] = useState(['React Native', 'UI Design']);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gChipGroup%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack ChipGroup Preview"})},x=[{name:"chips",type:"ReactNode[]",default:"required in InputChipField / optional in ChipGroup",desc:"Chip elements to render in group/field.",required:!0},{name:"children",type:"ReactNode",default:"undefined",desc:"Alternative to `chips` for Ux4gChipGroup.",required:!1},{name:"arrangement",type:"'horizontal' | 'wrap'",default:"'wrap'",desc:"Layout arrangement for Ux4gChipGroup and InputChipField chips.",required:!1},{name:"spacing",type:"number",default:"8",desc:"Horizontal gap between chips (Ux4gChipGroup).",required:!1},{name:"runSpacing",type:"number",default:"8",desc:"Vertical gap between wrapped rows (Ux4gChipGroup).",required:!1},{name:"value",type:"string",default:"required",desc:"Current input text value (Ux4gInputChipField).",required:!0},{name:"onValueChange",type:"(value: string) => void",default:"required",desc:"Input change callback (Ux4gInputChipField).",required:!0},{name:"onAddChip",type:"(chipText: string) => void",default:"required",desc:"Callback when a new chip is added (Ux4gInputChipField).",required:!0},{name:"isDropdown",type:"boolean",default:"false",desc:"Switches field to dropdown selection mode.",required:!1},{name:"dropdownOptions",type:"string[]",default:"[]",desc:"Dropdown options when `isDropdown` is true.",required:!1},{name:"placeholder",type:"string",default:"'Add chip...'",desc:"Placeholder text for input/dropdown trigger.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the field/group interaction is enabled.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Chip Group"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Group container for arranging multiple chips horizontally or wrapped across multiple lines, including interactive InputChipField controls."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"ChipGroupExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Im=({isDark:i,story:d="divider-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { Ux4gDivider } from 'ux4g-react-native-design-system';"),s.push("import { View, Text } from 'react-native';"),s.push(""),s.push("// Horizontal Solid Divider"),s.push("<Ux4gDivider />"),s.push(""),s.push("// Dashed Divider with Indents"),s.push("<Ux4gDivider"),s.push('  style="dashed"'),s.push("  thickness={2}"),s.push("  startIndent={16}"),s.push("  endIndent={16}"),s.push("/>"),s.push(""),s.push("// Divider with Center Label"),s.push('<Ux4gDivider label="OR" />'),s.push(""),s.push("// Vertical Divider"),s.push('<View style={{ flexDirection: "row", height: 40, alignItems: "center" }}>'),s.push("  <Text>Left Item</Text>"),s.push('  <Ux4gDivider orientation="vertical" />'),s.push("  <Text>Right Item</Text>"),s.push("</View>"),s.join(`
`)},[]),b=()=>{let s="";d==="divider-styles"?s=`        <Text style={{ color: ${i?"'#fff'":"'#333'"}, marginBottom: 8 }}>Solid Line (Default):</Text>
        <Ux4gDivider style="solid" thickness={1} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${i?"'#fff'":"'#333'"}, marginBottom: 8 }}>Dashed Line:</Text>
        <Ux4gDivider style="dashed" thickness={2} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${i?"'#fff'":"'#333'"}, marginBottom: 8 }}>Dotted Line:</Text>
        <Ux4gDivider style="dotted" thickness={2} />`:d==="divider-label"?s=`        <Ux4gDivider label="OR" />
        
        <View style={{ height: 24 }} />
        
        <Ux4gDivider label="SECTION HEADER" style="dashed" />
        
        <View style={{ height: 24 }} />
        
        <Ux4gDivider label="CONTINUE" style="dotted" thickness={2} />`:d==="divider-vertical"?s=`        <View style={{ flexDirection: 'row', alignItems: 'center', height: 48 }}>
          <Text style={{ color: ${i?"'#fff'":"'#333'"} }}>Section A</Text>
          <Ux4gDivider orientation="vertical" startIndent={8} endIndent={8} />
          <Text style={{ color: ${i?"'#fff'":"'#333'"} }}>Section B</Text>
          <Ux4gDivider orientation="vertical" style="dashed" startIndent={8} endIndent={8} />
          <Text style={{ color: ${i?"'#fff'":"'#333'"} }}>Section C</Text>
        </View>`:s=`        <Text style={{ color: ${i?"'#fff'":"'#333'"}, marginBottom: 8 }}>Standard Horizontal Divider:</Text>
        <Ux4gDivider />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${i?"'#fff'":"'#333'"}, marginBottom: 8 }}>Indented Dashed Divider:</Text>
        <Ux4gDivider style="dashed" startIndent={24} endIndent={24} thickness={1.5} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${i?"'#fff'":"'#333'"}, marginBottom: 8 }}>Divider with Center Label:</Text>
        <Ux4gDivider label="OR LOG IN WITH" />`;const w=`import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gDivider, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gDivider%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Divider Preview"})},x=[{name:"orientation",type:"'horizontal' | 'vertical'",default:"'horizontal'",desc:"Orientation direction of the divider line.",required:!1},{name:"color",type:"string",default:"theme.colors.onSurface @ 20%",desc:"Line color override.",required:!1},{name:"thickness",type:"number",default:"1.0",desc:"Thickness/stroke width of divider line.",required:!1},{name:"style",type:"'solid' | 'dashed' | 'dotted'",default:"'solid'",desc:"Stroke pattern style of the line.",required:!1},{name:"startIndent",type:"number",default:"0.0",desc:"Leading indentation before divider begins.",required:!1},{name:"endIndent",type:"number",default:"0.0",desc:"Trailing indentation after divider ends.",required:!1},{name:"label",type:"ReactNode | string",default:"undefined",desc:"Center label that splits divider into two segments.",required:!1},{name:"labelSpacing",type:"number",default:"8.0",desc:"Spacing around center label.",required:!1},{name:"width",type:"number | string",default:"undefined",desc:"Explicit width of divider container.",required:!1},{name:"height",type:"number | string",default:"undefined",desc:"Explicit height of divider container.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for root divider container.",required:!1},{name:"labelTextStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text when label is string.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Divider"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Visual rule separator used to group and partition content. Supports horizontal/vertical orientation, solid/dashed/dotted styles, indents, and center labels."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"DividerExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},qm=({isDark:i,story:d="status-banner-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { Ux4gStatusBanner } from 'ux4g-react-native-design-system';"),s.push(""),s.push("// Warning Solid Banner"),s.push("<Ux4gStatusBanner"),s.push('  variant="warningSolid"'),s.push('  title="Action Needed"'),s.push('  subtitle="Please review your draft submission before the deadline."'),s.push("/>"),s.push(""),s.push("// Success Light Banner"),s.push("<Ux4gStatusBanner"),s.push('  variant="successLight"'),s.push('  title="Draft Saved Successfully"'),s.push('  subtitle="Your changes have been synced to the cloud."'),s.push("/>"),s.push(""),s.push("// Error Light Banner with Dismiss"),s.push("<Ux4gStatusBanner"),s.push('  variant="errorLight"'),s.push('  title="Draft Expired"'),s.push('  subtitle="This application draft expired on 9 April 2026."'),s.push(`  onDismiss={() => console.log("Dismissed")}
/>`),s.join(`
`)},[]),b=()=>{let s="";d==="status-banner-draft"?s=`        <Ux4gStatusBanner
          variant="warningSolid"
          title="Draft Application Pending"
          subtitle="Complete your profile details to submit."
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gStatusBanner
          variant="successLight"
          title="Draft Saved at 3:14 PM"
          subtitle="Auto-save enabled"
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gStatusBanner
          variant="errorLight"
          title="Draft Expired on 9 April 2026"
          subtitle="Please start a new application draft."
        />`:d==="status-banner-variants"?s=`        <Ux4gStatusBanner variant="primaryLight" title="Primary Banner" subtitle="Information notice" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="infoLight" title="Info Banner" subtitle="System maintenance scheduled" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="successLight" title="Success Banner" subtitle="Operation completed" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="warningLight" title="Warning Light" subtitle="Low storage warning" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="errorLight" title="Error Light" subtitle="Network request failed" />`:s=`        <Ux4gStatusBanner
          variant="warningSolid"
          title="Draft Action Needed"
          subtitle="Your application draft requires verification."
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gStatusBanner
          variant="infoLight"
          title="System Notification"
          subtitle="New features are now available in your portal."
        />
        
        <View style={{ height: 16 }} />
        
        <Ux4gStatusBanner
          variant="successLight"
          title="Draft Saved Successfully"
          subtitle="Synced at 3:14 PM"
        />`;const w=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gStatusBanner, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gStatusBanner%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack StatusBanner Preview"})},x=[{name:"variant",type:"Ux4gBannerVariant",default:"required",desc:"Banner visual variant theme.",required:!0},{name:"title",type:"string",default:"required",desc:"Main title text header.",required:!0},{name:"subtitle",type:"string",default:"undefined",desc:"Secondary subtitle text description.",required:!1},{name:"subtitleWidget",type:"ReactNode",default:"undefined",desc:"Custom subtitle widget overriding subtitle text.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for title text.",required:!1},{name:"subtitleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for subtitle text.",required:!1},{name:"badge",type:"ReactNode",default:"undefined",desc:"Badge displayed next to title.",required:!1},{name:"leadingIcon",type:"ReactNode",default:"auto by variant",desc:"Custom leading icon (variant icon used by default).",required:!1},{name:"trailingIcon",type:"ReactNode",default:"undefined",desc:"Custom top-right trailing icon.",required:!1},{name:"actions",type:"ReactNode[]",default:"undefined",desc:"Action widgets shown in bottom row.",required:!1},{name:"onDismiss",type:"() => void",default:"undefined",desc:"Dismiss callback when close icon is pressed.",required:!1},{name:"backgroundColor",type:"string",default:"variant-based",desc:"Background color override.",required:!1},{name:"borderColor",type:"string",default:"variant-based",desc:"Border color override.",required:!1},{name:"actionsAlignment",type:"'start' | 'center' | 'end' | 'space-between' | 'space-around'",default:"'start'",desc:"Alignment for bottom actions row.",required:!1},{name:"width",type:"DimensionValue",default:"'100%'",desc:"Explicit banner width.",required:!1},{name:"height",type:"number",default:"undefined",desc:"Explicit banner height.",required:!1},{name:"marginStyle",type:"StyleProp<ViewStyle>",default:"{ marginHorizontal: 16, marginVertical: 8 }",desc:"Outer margin style override.",required:!1},{name:"paddingStyle",type:"StyleProp<ViewStyle>",default:"{ paddingHorizontal: 16, paddingVertical: 12 }",desc:"Inner padding style override.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Additional container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Status Banner"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Prominent alert banner used for draft statuses, system warnings, errors, success notifications, and workflow action prompts."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"StatusBannerExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Rm=["status-pipeline-vertical","status-pipeline-vertical-states","status-pipeline-vertical-sizes","status-pipeline-vertical-colors","status-pipeline-vertical-labels","status-pipeline-vertical-nolabels","status-pipeline-horizontal","status-pipeline-horizontal-states","status-pipeline-horizontal-sizes","status-pipeline-horizontal-colors","status-pipeline-horizontal-labels","status-pipeline-horizontal-nolabels"],$m=i=>i==="status-pipeline-sizes"?"status-pipeline-vertical-sizes":Rm.includes(i)?i:"status-pipeline-vertical",od=i=>i.startsWith("status-pipeline-horizontal"),Lm={"status-pipeline-vertical":{title:"Status Pipeline — Vertical",description:"Vertical step-by-step flow with completed, current, and upcoming states."},"status-pipeline-vertical-states":{title:"Vertical — All States",description:"Every step state: completed, current, upcoming, error (red), and warning (orange)."},"status-pipeline-vertical-sizes":{title:"Vertical — Sizes",description:"Small (s), Medium (m), and Large (l) size presets in vertical layout."},"status-pipeline-vertical-colors":{title:"Vertical — Custom Colors",description:"Per-state color overrides and custom active/inactive line colors."},"status-pipeline-vertical-labels":{title:"Vertical — Labels Only",description:"Labels without descriptions, useful for compact vertical lists."},"status-pipeline-vertical-nolabels":{title:"Vertical — Circles Only",description:"Step circles and connecting lines only, with labels and descriptions hidden. No error/warning states."},"status-pipeline-horizontal":{title:"Status Pipeline — Horizontal",description:"Horizontal step-by-step flow for wizards and multi-step forms."},"status-pipeline-horizontal-states":{title:"Horizontal — All States",description:"Every step state laid out horizontally with connecting lines."},"status-pipeline-horizontal-sizes":{title:"Horizontal — Sizes",description:"Small (s), Medium (m), and Large (l) size presets in horizontal layout."},"status-pipeline-horizontal-colors":{title:"Horizontal — Custom Colors",description:"Per-state color overrides and custom active/inactive line colors."},"status-pipeline-horizontal-labels":{title:"Horizontal — Labels Only",description:"Compact header row with labels and no descriptions below."},"status-pipeline-horizontal-nolabels":{title:"Horizontal — Circles Only",description:"Step circles and connecting lines only, with labels and descriptions hidden. No error/warning states."}},Wm=i=>{const d=od(i),c=d?"horizontal":"vertical";if(i.endsWith("-states"))return`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineStatesExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${c}'
      currentStep={-1}
      steps={[
        { label: 'Order Placed', description: 'Completed', state: 'completed' },
        { label: 'Document Review', description: 'Failed verification', state: 'error' },
        { label: 'Payment Gateway', description: 'Pending retry', state: 'warning' },
        { label: 'Approval Stage', description: 'Upcoming', state: 'upcoming' },
        { label: 'Final Certificate', description: 'Est. 25 Apr', state: 'upcoming' },
      ]}
    />
  );
}`;if(i.endsWith("-sizes")){const m=f=>`      <Ux4gStatusPipeline
        orientation='${c}'
        size='${f}'
        currentStep={1}
        steps={[
          { label: 'Submitted', description: '5 Apr' },
          { label: 'Verification', description: 'In progress' },
          { label: 'Approval', description: 'Pending' },
          { label: 'Completed', description: 'Done' },
        ]}
      />
      <View style={{ height: ${d?"40":"32"} }} />`;return`import React from 'react';
import { View } from 'react-native';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineSizesExample() {
  return (
    <View>
${m("s")}
${m("m")}
      <Ux4gStatusPipeline
        orientation='${c}'
        size='l'
        currentStep={1}
        steps={[
          { label: 'Submitted', description: '5 Apr' },
          { label: 'Verification', description: 'In progress' },
          { label: 'Approval', description: 'Pending' },
          { label: 'Completed', description: 'Done' },
        ]}
      />
    </View>
  );
}`}return i.endsWith("-colors")?`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineColorsExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${c}'
      currentStep={2}
      completedColor='#0284C7'
      currentColor='#7C3AED'
      upcomingColor='#94A3B8'
      errorColor='#DC2626'
      warningColor='#EA580C'
      completedLineColor='#0284C7'
      upcomingLineColor='#CBD5E1'
      steps={[
        { label: 'Submitted', description: '5 Apr' },
        { label: 'Under Review', description: 'In progress' },
        { label: 'KYC', description: 'Action needed', state: 'warning' },
        { label: 'Payment', description: 'Retry', state: 'error' },
        { label: 'Approval', description: 'Pending' },
        { label: 'Completed', description: 'Done' },
      ]}
    />
  );
}`:i.endsWith("-labels")?`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineLabelsExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${c}'
      currentStep={2}
      showDescriptions={false}
      steps={[
        { label: 'Submitted' },
        { label: 'Under Review' },
        { label: 'Verification', state: 'error' },
        { label: 'Approval' },
        { label: 'Completed' },
      ]}
    </Ux4gStatusPipeline>
  );
}`:i.endsWith("-nolabels")?`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineCirclesOnlyExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${c}'
      currentStep={2}
      showLabels={false}
      showDescriptions={false}
      steps={[
        {},
        {},
        {},
        {},
        {},
        {},
      ]}
    />
  );
}`:`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineBasicExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${c}'
      currentStep={2}
      steps={[
        { label: 'Submitted', description: '5 Apr' },
        { label: 'Under Review', description: 'In progress' },
        { label: 'Verification', description: 'Pending' },
        { label: 'Approval', description: 'Pending' },
        { label: 'Completed', description: 'Done' },
      ]}
    />
  );
}`},Mm=i=>{const d=od(i),c=d?"horizontal":"vertical";if(i.endsWith("-states"))return`        <Ux4gStatusPipeline
          orientation='${c}'
          currentStep={-1}
          steps={[
            { label: 'Order Placed', description: 'Completed', state: 'completed' },
            { label: 'Document Review', description: 'Failed verification', state: 'error' },
            { label: 'Payment Gateway', description: 'Pending retry', state: 'warning' },
            { label: 'Approval Stage', description: 'Upcoming', state: 'upcoming' },
            { label: 'Final Certificate', description: 'Est. 25 Apr', state: 'upcoming' },
          ]}
        />`;if(i.endsWith("-sizes")){const m=d?48:32;return`        <Ux4gStatusPipeline
          orientation='${c}'
          size='s'
          currentStep={1}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Verification', description: 'In progress' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />
        <View style={{ height: ${m} }} />
        <Ux4gStatusPipeline
          orientation='${c}'
          size='m'
          currentStep={1}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Verification', description: 'In progress' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />
        <View style={{ height: ${m} }} />
        <Ux4gStatusPipeline
          orientation='${c}'
          size='l'
          currentStep={1}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Verification', description: 'In progress' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />`}return i.endsWith("-colors")?`        <Ux4gStatusPipeline
          orientation='${c}'
          currentStep={2}
          completedColor='#0284C7'
          currentColor='#7C3AED'
          upcomingColor='#94A3B8'
          errorColor='#DC2626'
          warningColor='#EA580C'
          completedLineColor='#0284C7'
          upcomingLineColor='#CBD5E1'
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Under Review', description: 'In progress' },
            { label: 'KYC', description: 'Action needed', state: 'warning' },
            { label: 'Payment', description: 'Retry', state: 'error' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />`:i.endsWith("-labels")?`        <Ux4gStatusPipeline
          orientation='${c}'
          currentStep={2}
          showDescriptions={false}
          steps={[
            { label: 'Submitted' },
            { label: 'Under Review' },
            { label: 'Verification', state: 'error' },
            { label: 'Approval' },
            { label: 'Completed' },
          ]}
        />`:i.endsWith("-nolabels")?`        <Ux4gStatusPipeline
          orientation='${c}'
          currentStep={2}
          showLabels={false}
          showDescriptions={false}
          steps={[
            {},
            {},
            {},
            {},
            {},
            {},
          ]}
        />`:`        <Ux4gStatusPipeline
          orientation='${c}'
          currentStep={2}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Under Review', description: 'In progress' },
            { label: 'Verification', description: 'Pending' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />`},_m=({isDark:i,story:d="status-pipeline-vertical"})=>{const[c,m]=T.useState("preview"),f=$m(d),b=Lm[f],x=T.useMemo(()=>Wm(f),[f]),s=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gStatusPipeline, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${Mm(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gStatusPipeline%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack StatusPipeline Preview"})},w=[{name:"steps",type:"Ux4gPipelineStep[]",default:"required",desc:"List of pipeline steps (label, description, state, customIcon, customColor).",required:!0},{name:"currentStep",type:"number",default:"0",desc:"Current active step index. Set to -1 to rely purely on step.state.",required:!1},{name:"orientation",type:"'vertical' | 'horizontal'",default:"'vertical'",desc:"Direction of pipeline layout.",required:!1},{name:"size",type:"'s' | 'm' | 'l'",default:"'m'",desc:"Size preset controlling circle, icon, and text scale.",required:!1},{name:"showLabels",type:"boolean",default:"true",desc:"Whether to show step labels.",required:!1},{name:"showDescriptions",type:"boolean",default:"true",desc:"Whether to show step descriptions.",required:!1},{name:"activeLineWidth",type:"number",default:"size-based",desc:"Thickness of completed/active connecting lines.",required:!1},{name:"inactiveLineWidth",type:"number",default:"size-based",desc:"Thickness of upcoming connecting lines.",required:!1},{name:"completedColor",type:"string",default:"theme success",desc:"Color override for completed steps.",required:!1},{name:"currentColor",type:"string",default:"theme primary",desc:"Color override for current step.",required:!1},{name:"upcomingColor",type:"string",default:"onSurface @ 30%",desc:"Color override for upcoming steps.",required:!1},{name:"errorColor",type:"string",default:"theme error",desc:"Color override for error steps.",required:!1},{name:"warningColor",type:"string",default:"theme warning",desc:"Color override for warning steps.",required:!1},{name:"completedLineColor",type:"string",default:"theme success",desc:"Custom line color for completed segments.",required:!1},{name:"upcomingLineColor",type:"string",default:"onSurface @ 15%",desc:"Custom line color for upcoming segments.",required:!1},{name:"labelSpacing",type:"number",default:"12 (vertical) / 6 (horizontal)",desc:"Spacing between step indicator and label text.",required:!1},{name:"circleSize",type:"number",default:"size-based",desc:"Explicit diameter override for step circles.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for pipeline container.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"StatusPipelineExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Om=["stepper-horizontal","stepper-horizontal-dashed","stepper-vertical","stepper-error","stepper-bottom-lines","stepper-bottom-background","stepper-edge-alignment","compact-stepper-linear","compact-stepper-right-aligned","compact-stepper-centered","compact-stepper-centered-between","compact-stepper-split"],Xm={"stepper-horizontal":4,"stepper-horizontal-dashed":4,"stepper-vertical":4,"stepper-error":4,"stepper-bottom-lines":4,"stepper-bottom-background":4,"stepper-edge-alignment":4,"compact-stepper-linear":12,"compact-stepper-right-aligned":12,"compact-stepper-centered":12,"compact-stepper-centered-between":12,"compact-stepper-split":12},Hm=i=>Om.includes(i)?i:"stepper-horizontal",Gm={"stepper-horizontal":{title:"Stepper — Horizontal",description:"Horizontal stepper (default) with center-aligned connecting lines, completed checks, and active dots. Use the controls to navigate steps."},"stepper-horizontal-dashed":{title:"Stepper — Dashed Lines",description:"Horizontal stepper with dashed connecting lines between steps."},"stepper-vertical":{title:"Stepper — Vertical",description:"Vertical stepper with icons and labels stacked in a column."},"stepper-error":{title:"Stepper — Error State",description:"Stepper with an error icon on the failed step and error-colored labels."},"stepper-bottom-lines":{title:"Stepper — Horizontal (Bottom Line)",description:"Horizontal stepper with connecting lines placed below the step labels."},"stepper-bottom-background":{title:"Stepper — Bottom Lines + Background",description:"Bottom-line stepper with a highlighted background behind the active step."},"stepper-edge-alignment":{title:"Stepper — Edge Label Alignment",description:"Horizontal stepper whose first and last labels align to the container edges."},"compact-stepper-linear":{title:"Compact Stepper — Linear",description:"Compact capsule stepper (default layout) with working prev/next arrows and left-aligned labels."},"compact-stepper-right-aligned":{title:"Compact Stepper — Right Aligned",description:"Capsule stepper with the step label and description aligned to the right."},"compact-stepper-centered":{title:"Compact Stepper — Centered",description:'Capsule stepper centered around the active capsule with "Step X of Y" counter.'},"compact-stepper-centered-between":{title:"Compact Stepper — Centered (Arrows Outside)",description:"Capsule stepper with the label centered between the prev/next arrows."},"compact-stepper-split":{title:"Compact Stepper — Split",description:"Capsule stepper with the label on the left and counter + arrows on the right."}},ed=(i=4)=>{const d=[];for(let c=1;c<=i;c++)d.push(`        { title: 'Step ${c}', description: 'Write description here' },`);return d.join(`
`)},Ri=(i,d=4)=>{const c=[];for(let m=1;m<=d;m++){const f=i>m?"Completed":i===m?"In progress":"Label";c.push(`        { title: 'Label', description: 'Write description here', statusLabel: '${f}' },`)}return c.join(`
`)},Qm=(i,d)=>{const c=Xm[i],m=i.startsWith("compact-stepper"),b=m?`        <Ux4gCompactStepper
          totalSteps={${c}}
          currentStep={step}
          stepLabel='Account Setup'
          description='Enter your personal details to continue.'
          layout='${{"compact-stepper-linear":"linear","compact-stepper-right-aligned":"rightAligned","compact-stepper-centered":"centered","compact-stepper-centered-between":"centeredBetween","compact-stepper-split":"split"}[i]}'
          onNext={() => setStep((s) => Math.min(${c}, s + 1))}
          onPrevious={() => setStep((s) => Math.max(1, s - 1))}
        />`:i==="stepper-horizontal-dashed"?`        <Ux4gStepper
          totalSteps={${c}}
          currentStep={step}
          orientation='horizontal'
          lineStyle='dashed'
          steps={[
${ed(c)}
          ]}
        />`:i==="stepper-vertical"?`        <View style={{ alignSelf: 'flex-start', width: '100%' }}>
          <Ux4gStepper
            totalSteps={${c}}
            currentStep={step}
            orientation='vertical'
            steps={[
${ed(c)}
            ]}
          />
        </View>`:i==="stepper-error"?`        <Ux4gStepper
          totalSteps={${c}}
          currentStep={step}
          orientation='horizontal'
          steps={[
            { title: 'Account', description: step > 1 ? 'Completed' : 'Pending' },
            { title: 'Profile', description: step > 2 ? 'Completed' : 'Pending' },
            { title: 'Payment', description: step === 3 ? 'Transaction failed' : step > 3 ? 'Completed' : 'Pending', isError: step === 3 },
            { title: 'Done', description: step > 3 ? 'Completed' : 'Pending' },
          ]}
        />`:i==="stepper-bottom-lines"?`        <Ux4gStepper
          totalSteps={${c}}
          currentStep={step}
          orientation='horizontal'
          linePlacement='bottom'
          steps={[
${Ri(2,c)}
          ]}
        />`:i==="stepper-bottom-background"?`        <Ux4gStepper
          totalSteps={${c}}
          currentStep={step}
          orientation='horizontal'
          linePlacement='bottom'
          activeStepBackground
          steps={[
${Ri(2,c)}
          ]}
        />`:`        <Ux4gStepper
          totalSteps={${c}}
          currentStep={step}
          orientation='horizontal'
          edgeLabelAlignment
          steps={[
${Ri(2,c)}
          ]}
        />`,x=m?"":`      <View style={{ height: 24 }} />
      <Text style={styles.controlCount}>Step {step} of ${c}</Text>
      <View style={{ height: 8 }} />
      <View style={styles.controls}>
        <Pressable
          style={[styles.controlButton, { backgroundColor: step > 1 ? '#3447E0' : '#CCCCCC' }]}
          disabled={step <= 1}
          onPress={() => setStep((s) => Math.max(1, s - 1))}
        >
          <Text style={styles.controlButtonText}>Previous</Text>
        </Pressable>
        <Pressable
          style={[styles.controlButton, { backgroundColor: step < ${c} ? '#3447E0' : '#CCCCCC' }]}
          disabled={step >= ${c}}
          onPress={() => setStep((s) => Math.min(${c}, s + 1))}
        >
          <Text style={styles.controlButtonText}>Next</Text>
        </Pressable>
      </View>`;return`import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gStepper, Ux4gCompactStepper, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [step, setStep] = useState(2);

  return (
    <Ux4gThemeProvider isDark={${d}}>
      <ScrollView contentContainerStyle={styles.container}>
${b}
${x}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controlButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  controlCount: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
});`},Ym=({isDark:i,story:d="stepper-horizontal"})=>{const[c,m]=T.useState("preview"),f=Hm(d),b=Gm[f],x=T.useMemo(()=>Qm(f,i),[f,i]),s=()=>{const B=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gStepper%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:B,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Stepper Preview"})},w=[{name:"totalSteps",type:"number",default:"required",desc:"Total number of steps to display.",required:!0},{name:"currentStep",type:"number",default:"required",desc:"Current active step (1-indexed).",required:!0},{name:"orientation",type:"'horizontal' | 'vertical'",default:"'horizontal'",desc:"Direction of the stepper layout.",required:!1},{name:"lineStyle",type:"'solid' | 'dashed'",default:"'solid'",desc:"Style of the connecting lines.",required:!1},{name:"linePlacement",type:"'center' | 'bottom'",default:"'center'",desc:"Where connecting lines are placed relative to labels.",required:!1},{name:"steps",type:"Ux4gStepItem[]",default:"[]",desc:"Step data (title, description, statusLabel, isError, text styles).",required:!1},{name:"stepSize",type:"number",default:"32",desc:"Diameter of the step icons.",required:!1},{name:"showLabels",type:"boolean",default:"true",desc:"Whether to show labels below/beside icons.",required:!1},{name:"edgeLabelAlignment",type:"boolean",default:"false",desc:"Align first/last labels to container edges.",required:!1},{name:"activeStepBackground",type:"boolean",default:"false",desc:"Highlight background behind the active step (bottom placement).",required:!1},{name:"stepSpacing",type:"number",default:"24",desc:"Spacing between vertical steps when labels are hidden.",required:!1},{name:"alignIconWithDescription",type:"boolean",default:"false",desc:"Align vertical icons with the description line.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for the stepper container.",required:!1}],p=[{name:"totalSteps",type:"number",default:"required",desc:"Total number of capsule segments.",required:!0},{name:"currentStep",type:"number",default:"required",desc:"Current active step (1-indexed).",required:!0},{name:"stepLabel",type:"string",default:"required",desc:"Label text for the current step.",required:!0},{name:"description",type:"string",default:"undefined",desc:"Helper description below the step label.",required:!1},{name:"onNext",type:"() => void",default:"noop",desc:"Callback when the next arrow is pressed.",required:!1},{name:"onPrevious",type:"() => void",default:"noop",desc:"Callback when the previous arrow is pressed.",required:!1},{name:"layout",type:"'linear' | 'rightAligned' | 'centered' | 'centeredBetween' | 'split'",default:"'linear'",desc:"Capsule stepper layout preset.",required:!1},{name:"labelAlignment",type:"'flex-start' | 'center' | 'flex-end'",default:"'flex-start'",desc:"Alignment of labels in the linear layout.",required:!1},{name:"activeColor",type:"string",default:"theme primary",desc:"Color of the active capsule.",required:!1},{name:"inactiveColor",type:"string",default:"onSurface @ 20%",desc:"Color of inactive capsules.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for the container.",required:!1}],N=f.startsWith("compact-stepper"),A=N?"CompactStepper":"Stepper";return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:`${A}Example.tsx`})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:(N?p:w).map(B=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[B.name,B.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:B.type})}),t.jsx("td",{children:B.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:B.default})})]},B.name))})]})})]})]})})]})},Km=["tag-basic","tag-shapes","tag-styles","tag-colors","tag-leading","tag-dismissable","tag-pill"],Jm=i=>Km.includes(i)?i:"tag-basic",Zm={"tag-basic":{title:"Tag — Basic",description:"Default tonal pill tags in small (m) and large (l) sizes."},"tag-shapes":{title:"Tag — Shapes",description:"Circular (pill) and rectangular (4px radius) shapes."},"tag-styles":{title:"Tag — Styles",description:"Tonal, filled, outline, and text visual styles."},"tag-colors":{title:"Tag — Color Schemes",description:"Neutral, brand, success, warning, error, and info palettes."},"tag-leading":{title:"Tag — Leading Content",description:"Custom icon or widget rendered before the tag label."},"tag-dismissable":{title:"Tag — Dismissible",description:"Tags with a trailing close icon and onDismiss callback."},"tag-pill":{title:"Unified Pill Tag",description:"Multi-segment pill tag with vertical dividers between segments."}},ne=(i,d)=>`        <View style={styles.tagRow}>
          <Ux4gTag text='${i}'${d} />
        </View>`,eh=i=>{switch(i){case"tag-shapes":return`import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagShapesExample() {
  return (
    <View>
${ne("Circular"," shape='circular' colorScheme='brand'")}
${ne("Rectangular"," shape='rectangular' colorScheme='brand'")}
    </View>
  );
}`;case"tag-styles":return`import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagStylesExample() {
  return (
    <View>
${ne("Tonal"," style='tonal' colorScheme='brand'")}
${ne("Filled"," style='filled' colorScheme='brand'")}
${ne("Outline"," style='outline' colorScheme='brand'")}
${ne("Text"," style='text' colorScheme='brand'")}
    </View>
  );
}`;case"tag-colors":return`import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagColorsExample() {
  return (
    <View>
${ne("Neutral"," colorScheme='neutral'")}
${ne("Brand"," colorScheme='brand'")}
${ne("Success"," colorScheme='success'")}
${ne("Warning"," colorScheme='warning'")}
${ne("Error"," colorScheme='error'")}
${ne("Info"," colorScheme='info'")}
    </View>
  );
}`;case"tag-leading":return`import React from 'react';
import { View } from 'react-native';
import { Ux4gTag, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function TagLeadingExample() {
  return (
    <View>
${ne("With Icon"," colorScheme='brand' leadingContent={Ux4gIcons.star({ size: 12, color: '#7B61FF' })}")}
${ne("With Check"," colorScheme='success' leadingContent={Ux4gIcons.check({ size: 12, color: '#16A34A' })}")}
    </View>
  );
}`;case"tag-dismissable":return`import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagDismissableExample() {
  return (
    <View>
${ne("Dismissible Brand"," colorScheme='brand' onDismiss={() => console.log('dismissed')}")}
${ne("Dismissible Success"," colorScheme='success' onDismiss={() => console.log('dismissed')}")}
    </View>
  );
}`;case"tag-pill":return`import React from 'react';
import { View } from 'react-native';
import { Ux4gUnifiedPillTag } from 'ux4g-react-native-design-system';

export default function TagPillExample() {
  return (
    <View>
      <Ux4gUnifiedPillTag
        segments={[
          { text: 'Pending', bold: true, textColor: '#EA580C' },
          { text: '2 days remaining' },
          { text: 'Action needed' },
        ]}
      />
    </View>
  );
}`;default:return`import React from 'react';
import { View } from 'react-native';
import { Ux4gTag } from 'ux4g-react-native-design-system';

export default function TagBasicExample() {
  return (
    <View>
${ne("Small Tag"," size='m' colorScheme='neutral'")}
${ne("Large Tag"," size='l' colorScheme='brand'")}
${ne("Default"," colorScheme='success'")}
    </View>
  );
}`}},th=i=>{switch(i){case"tag-shapes":return`${ne("Circular"," shape='circular' colorScheme='brand'")}
${ne("Rectangular"," shape='rectangular' colorScheme='brand'")}`;case"tag-styles":return`${ne("Tonal"," style='tonal' colorScheme='brand'")}
${ne("Filled"," style='filled' colorScheme='brand'")}
${ne("Outline"," style='outline' colorScheme='brand'")}
${ne("Text"," style='text' colorScheme='brand'")}`;case"tag-colors":return`${ne("Neutral"," colorScheme='neutral'")}
${ne("Brand"," colorScheme='brand'")}
${ne("Success"," colorScheme='success'")}
${ne("Warning"," colorScheme='warning'")}
${ne("Error"," colorScheme='error'")}
${ne("Info"," colorScheme='info'")}`;case"tag-leading":return`        <View style={styles.tagRow}>
          <Ux4gTag
            text='With Icon'
            colorScheme='brand'
            leadingContent={Ux4gIcons.star({ size: 12, color: '#7B61FF' })}
          />
        </View>
        <View style={styles.tagRow}>
          <Ux4gTag
            text='With Check'
            colorScheme='success'
            leadingContent={Ux4gIcons.check({ size: 12, color: '#16A34A' })}
          />
        </View>`;case"tag-dismissable":return`        <View style={styles.tagRow}>
          <Ux4gTag text='Dismissible Brand' colorScheme='brand' onDismiss={() => console.log('dismissed')} />
        </View>
        <View style={styles.tagRow}>
          <Ux4gTag text='Dismissible Success' colorScheme='success' onDismiss={() => console.log('dismissed')} />
        </View>`;case"tag-pill":return`        <View style={styles.tagRow}>
          <Ux4gUnifiedPillTag
            segments={[
              { text: 'Pending', bold: true, textColor: '#EA580C' },
              { text: '2 days remaining' },
              { text: 'Action needed' },
            ]}
          />
        </View>`;default:return`${ne("Small Tag"," size='m' colorScheme='neutral'")}
${ne("Large Tag"," size='l' colorScheme='brand'")}
${ne("Default"," colorScheme='success'")}`}},rh=({isDark:i,story:d="tag-basic"})=>{const[c,m]=T.useState("preview"),f=Jm(d),b=Zm[f],x=T.useMemo(()=>eh(f),[f]),s=()=>{const B=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTag, Ux4gUnifiedPillTag${f==="tag-leading"?", Ux4gIcons":""}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${th(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  tagRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
});`,I=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gTag%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(B)}`;return t.jsx("iframe",{src:I,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Tag Preview"})},w=[{name:"text",type:"string",default:"required",desc:"Text displayed inside the tag label.",required:!0},{name:"size",type:"'m' | 'l' | 'medium' | 'large'",default:"'m'",desc:"Size of the tag (m = 20px height, l = 24px height).",required:!1},{name:"shape",type:"'circular' | 'rectangular'",default:"'circular'",desc:"Pill (999px) vs rectangular (4px) border radius.",required:!1},{name:"style",type:"'tonal' | 'filled' | 'outline' | 'text'",default:"'tonal'",desc:"Visual style of the tag.",required:!1},{name:"colorScheme",type:"'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info'",default:"'neutral'",desc:"Color palette from the design foundation tokens.",required:!1},{name:"leadingContent",type:"React.ReactNode",default:"undefined",desc:"Custom widget/icon rendered before the text label.",required:!1},{name:"onDismiss",type:"() => void",default:"undefined",desc:"Dismiss callback; renders a trailing close (x) icon.",required:!1},{name:"customBackgroundColor",type:"string",default:"style-based",desc:"Custom background color override.",required:!1},{name:"customContentColor",type:"string",default:"style-based",desc:"Custom content/text color override.",required:!1},{name:"customBorderColor",type:"string",default:"style-based",desc:"Custom border color override.",required:!1},{name:"customBorderRadius",type:"number",default:"shape-based",desc:"Custom border radius override in pixels.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom container style override.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom text style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}],p=[{name:"segments",type:"Ux4gPillSegment[]",default:"required",desc:"Segments (text, leading, textColor, bold) separated by dividers.",required:!0},{name:"backgroundColor",type:"string",default:"theme surface",desc:"Background color override.",required:!1},{name:"borderColor",type:"string",default:"onSurface @ 12%",desc:"Border color override.",required:!1},{name:"dividerColor",type:"string",default:"onSurface @ 15%",desc:"Segment divider color override.",required:!1},{name:"height",type:"number",default:"24",desc:"Pill height.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}],N=f==="tag-pill";return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:N?"UnifiedPillTagExample.tsx":"TagExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:(N?p:w).map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[A.name,A.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:A.type})}),t.jsx("td",{children:A.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:A.default})})]},A.name))})]})})]})]})})]})},nh=["textarea-basic","textarea-label","textarea-status","textarea-count","textarea-disabled"],ah=i=>nh.includes(i)?i:"textarea-basic",sh={"textarea-basic":{title:"Text Area — Basic",description:"Multiline text areas with size and min-height variants."},"textarea-label":{title:"Text Area — Label",description:"Top label, required asterisk, and trailing icon."},"textarea-status":{title:"Text Area — Validation Status",description:"Error, warning, and success statuses with caption icons."},"textarea-count":{title:"Text Area — Character Count",description:"maxLength with automatic character counter."},"textarea-disabled":{title:"Text Area — Disabled & Read Only",description:"Non-interactive and read-only text areas."}},st=(i,d)=>`const ${i} = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.row}>
      <Ux4gTextArea
        value={value}
        onValueChange={setValue}
${d}
      />
    </View>
  );
};`,cd=i=>{switch(i){case"textarea-label":return`${st("BasicExample",`        label='Address'
        placeholder='Enter your full address'`)}
${st("RequiredExample",`        label='Feedback'
        required
        placeholder='Tell us what you think'`)}
${st("TrailingExample",`        label='Tags'
        trailingIconLabel={Ux4gIcons.info({ size: 14, color: '#94A3B8' })}
        placeholder='Enter comma separated tags'`)}`;case"textarea-status":return`${st("ErrorExample",`        label='PAN Number'
        status='error'
        caption='PAN format is invalid. Example: ABCDE1234F'
        placeholder='Enter PAN number'`)}
${st("WarningExample",`        label='Remarks'
        status='warning'
        caption='Only 10 characters left before the limit'
        placeholder='Add remarks'`)}
${st("SuccessExample",`        label='About'
        status='success'
        caption='Looks good'
        placeholder='Tell us about yourself'`)}`;case"textarea-count":return`${st("CountExample",`        label='Bio'
        maxLength={500}
        placeholder='Write something about yourself'`)}
${st("CustomCountExample",`        label='Words'
        characterCountText='0/50 words'
        maxLength={50}
        placeholder='Type here'`)}`;case"textarea-disabled":return`${st("DisabledExample",`        label='Not Allowed'
        enabled={false}
        value='This field is disabled'
        caption='Disabled fields cannot be edited'`)}
${st("ReadOnlyExample",`        label='Read Only'
        readOnly
        value='This field is read only. You cannot modify this text.'
        caption='Read-only fields display text without editing'`)}`;default:return`${st("LargeExample",`        size='large'
        placeholder='Large size (16px padding)'`)}
${st("SmallExample",`        size='small'
        placeholder='Small size (12px padding)'`)}
${st("MinHeightExample",`        minHeight='small'
        placeholder='Small min height (80px)'`)}`}},ih=i=>`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTextArea${i==="textarea-label"?", Ux4gIcons":""} } from 'ux4g-react-native-design-system';

${cd(i)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${{"textarea-basic":["LargeExample","SmallExample","MinHeightExample"],"textarea-label":["BasicExample","RequiredExample","TrailingExample"],"textarea-status":["ErrorExample","WarningExample","SuccessExample"],"textarea-count":["CountExample","CustomCountExample"],"textarea-disabled":["DisabledExample","ReadOnlyExample"]}[i].map(c=>`      <${c} />`).join(`
`)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
});`,lh=i=>({"textarea-basic":["LargeExample","SmallExample","MinHeightExample"],"textarea-label":["BasicExample","RequiredExample","TrailingExample"],"textarea-status":["ErrorExample","WarningExample","SuccessExample"],"textarea-count":["CountExample","CustomCountExample"],"textarea-disabled":["DisabledExample","ReadOnlyExample"]})[i].map(c=>`          <${c} />`).join(`
`),oh=({isDark:i,story:d="textarea-basic"})=>{const[c,m]=T.useState("preview"),f=ah(d),b=sh[f],x=T.useMemo(()=>ih(f),[f]),s=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTextArea${f==="textarea-label"?", Ux4gIcons":""}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${cd(f)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${lh(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gTextArea%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack TextArea Preview"})},w=[{name:"value",type:"string",default:"required",desc:"Current text string inside the text area.",required:!0},{name:"onValueChange",type:"(value: string) => void",default:"required",desc:"Callback invoked when text changes.",required:!0},{name:"size",type:"'small' | 'large'",default:"'large'",desc:"Padding sizing (small = 12px, large = 16px).",required:!1},{name:"minHeight",type:"'small' | 'medium' | 'large' | number",default:"'medium'",desc:"Min height token (80/120/160px) or exact number.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Semantic validation status.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Optional top label above the text area.",required:!1},{name:"required",type:"boolean",default:"false",desc:"Shows a red asterisk next to the label.",required:!1},{name:"placeholder",type:"string",default:"undefined",desc:"Hint text displayed when empty.",required:!1},{name:"caption",type:"string",default:"undefined",desc:"Helper or status caption below the text area.",required:!1},{name:"showCaptionIcon",type:"boolean",default:"true",desc:"Show semantic status icon next to the caption.",required:!1},{name:"trailingIconLabel",type:"React.ReactNode",default:"undefined",desc:"Trailing icon/node next to the label.",required:!1},{name:"characterCountText",type:"string",default:"undefined",desc:"Custom character count text override.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the text area is interactive.",required:!1},{name:"readOnly",type:"boolean",default:"false",desc:"Whether the text area is read-only.",required:!1},{name:"maxLength",type:"number",default:"undefined",desc:"Maximum character length limit.",required:!1},{name:"style",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom inner TextInput style.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom outer container style.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom label style.",required:!1},{name:"captionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom caption style.",required:!1},{name:"placeholderTextColor",type:"string",default:"onSurface @ 40%",desc:"Custom placeholder color.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"TextAreaExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},ch=["timepicker-basic","timepicker-label","timepicker-status","timepicker-interval","timepicker-initial","timepicker-disabled"],dh=i=>ch.includes(i)?i:"timepicker-basic",uh={"timepicker-basic":{title:"Time Picker — Basic",description:"Field trigger that opens the hour/minute wheel dialog."},"timepicker-label":{title:"Time Picker — Label",description:"Top label, required asterisk, and description caption."},"timepicker-status":{title:"Time Picker — Validation Status",description:"Error, warning, and success status variants."},"timepicker-interval":{title:"Time Picker — Minute Interval",description:"Minute wheel stepped by 1, 5, 15, and 30 minutes."},"timepicker-initial":{title:"Time Picker — Initial Time",description:"Field pre-filled with an initial selected time."},"timepicker-disabled":{title:"Time Picker — Disabled",description:"Non-interactive field with muted colors."}},it=(i,d)=>`const ${i} = () => {
  const [time, setTime] = React.useState(undefined);
  return (
    <View style={styles.row}>
      <Ux4gTimePicker
        initialTime={time}
        onTimeSelected={(t) => setTime(t)}
${d}
      />
    </View>
  );
};`,dd=i=>{switch(i){case"timepicker-label":return`${it("LabelExample",`        label='Meeting Time'
        placeholder='Select a time slot'`)}
${it("RequiredExample",`        label='Interview Time'
        isRequired
        description='Choose a slot between 10 AM and 6 PM'
        placeholder='Select time'`)}
${it("DescExample",`        label='Delivery Window'
        description='We will deliver within the selected 2 hour window'
        placeholder='Select time'`)}`;case"timepicker-status":return`${it("ErrorExample",`        label='Appointment Time'
        status='error'
        description='This time slot is already booked'
        placeholder='Select time'`)}
${it("WarningExample",`        label='Reminder Time'
        status='warning'
        description='Reminder time is close to closing hours'
        placeholder='Select time'`)}
${it("SuccessExample",`        label='Slot Booked'
        status='success'
        description='Time slot confirmed successfully'
        placeholder='Select time'`)}`;case"timepicker-interval":return`${it("Every5Min",`        label='Every 5 minutes'
        minuteInterval={5}
        placeholder='Select time'`)}
${it("Every15Min",`        label='Every 15 minutes'
        minuteInterval={15}
        placeholder='Select time'`)}
${it("Every30Min",`        label='Every 30 minutes'
        minuteInterval={30}
        placeholder='Select time'`)}`;case"timepicker-initial":return`const InitialExample = () => {
  const [time, setTime] = React.useState({ hour: 14, minute: 30 });
  return (
    <View style={styles.row}>
      <Ux4gTimePicker
        initialTime={time}
        onTimeSelected={(t) => setTime(t)}
        label='Pre-filled Time'
        placeholder='Select time'
      />
    </View>
  );
};`;case"timepicker-disabled":return`${it("DisabledExample",`        label='Not Available'
        enabled={false}
        description='Time picking is disabled'
        placeholder='Select time'`)}
${it("DisabledFilledExample",`        label='Booked Slot'
        enabled={false}
        initialTime={{ hour: 9, minute: 15 }}
        description='Slot has been booked'
        placeholder='Select time'`)}`;default:return`${it("BasicExample","        placeholder='Select time'")}
${it("CustomPlaceholderExample","        placeholder='Pick your schedule'")}`}},ph=i=>`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTimePicker } from 'ux4g-react-native-design-system';

${dd(i)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${{"timepicker-basic":["BasicExample","CustomPlaceholderExample"],"timepicker-label":["LabelExample","RequiredExample","DescExample"],"timepicker-status":["ErrorExample","WarningExample","SuccessExample"],"timepicker-interval":["Every5Min","Every15Min","Every30Min"],"timepicker-initial":["InitialExample"],"timepicker-disabled":["DisabledExample","DisabledFilledExample"]}[i].map(c=>`      <${c} />`).join(`
`)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
});`,mh=i=>({"timepicker-basic":["BasicExample","CustomPlaceholderExample"],"timepicker-label":["LabelExample","RequiredExample","DescExample"],"timepicker-status":["ErrorExample","WarningExample","SuccessExample"],"timepicker-interval":["Every5Min","Every15Min","Every30Min"],"timepicker-initial":["InitialExample"],"timepicker-disabled":["DisabledExample","DisabledFilledExample"]})[i].map(c=>`          <${c} />`).join(`
`),hh=({isDark:i,story:d="timepicker-basic"})=>{const[c,m]=T.useState("preview"),f=dh(d),b=uh[f],x=T.useMemo(()=>ph(f),[f]),s=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTimePicker, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${dd(f)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${mh(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gTimePicker%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack TimePicker Preview"})},w=[{name:"initialTime",type:"Ux4gTimeOfDay",default:"undefined",desc:"Initial selected time ({ hour: 0-23, minute: 0-59 }).",required:!1},{name:"onTimeSelected",type:"(time: Ux4gTimeOfDay) => void",default:"undefined",desc:"Callback fired when a time is confirmed.",required:!1},{name:"placeholder",type:"string",default:"'Select time'",desc:"Hint text displayed when no time is selected.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether interaction is enabled.",required:!1},{name:"minuteInterval",type:"number",default:"1",desc:"Step interval for the minute wheel (1, 5, 10, 15, 30...).",required:!1},{name:"label",type:"string",default:"undefined",desc:"Label rendered above the field box.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Caption rendered below the field box.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Renders a red asterisk next to the label.",required:!1},{name:"required",type:"boolean",default:"false",desc:"Alias for isRequired.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Status variant controlling border and caption color.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom container style override.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"TimePickerExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},fh=["toast-basic","toast-stacked","toast-actions","toast-custom","toast-provider"],gh=i=>fh.includes(i)?i:"toast-basic",xh={"toast-basic":{title:"Toast — Categories",description:"Semantic categories for informative messages (info, success, warning, error)."},"toast-stacked":{title:"Toast — Stacked Layout",description:"Stacked layout with title and subtitle stacked vertically."},"toast-actions":{title:"Toast — Action & Close",description:"Toasts with action text and close buttons."},"toast-custom":{title:"Toast — Customization",description:"Custom icon, background, and action colors."},"toast-provider":{title:"Toast — Provider Demo",description:"Interactive showToast demo via Ux4gToastProvider and useUx4gToast."}},ud=(i,d,c,m)=>`      <Ux4gToast
        category='${i}'
        title='${d}'
        subtitle='${c}'
        showCloseButton={false}
${m}
      />`,yh=i=>{const d=ud;switch(i){case"toast-stacked":return`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${d("success","Payment Successful","Your payment of ₹1,250 has been processed","        layout='stacked'")}
${d("info","Update Available","Version 2.4.0 brings new features and bug fixes","        layout='stacked'")}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`;case"toast-actions":return`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${d("success","Order Confirmed","Your order #ORD-1024 has been placed",`        layout='full'
        actionText='Track'
        onActionClick={() => console.log('track pressed')}`)}
${d("warning","Session Expired","Please sign in again to continue",`        layout='full'
        actionText='Sign In'
        onActionClick={() => console.log('sign in pressed')}`)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`;case"toast-custom":return`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${d("slot","Custom Icon Toast","Star icon with custom background",`        layout='full'
        icon={Ux4gIcons.star({ size: 20, color: '#7B61FF' })}
        backgroundColor='#EDE9FE'
        iconColor='#7B61FF'
        actionColor='#7B61FF'
        actionText='View'
        onActionClick={() => console.log('view pressed')}`)}
${d("success","Download Complete","Report exported successfully",`        layout='full'
        backgroundColor='#DCFCE7'
        iconColor='#16A34A'
        actionColor='#16A34A'
        actionText='Open'
        onActionClick={() => console.log('open pressed')}`)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`;case"toast-provider":return`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToastProvider, useUx4gToast, Ux4gButton } from 'ux4g-react-native-design-system';

const Demo = () => {
  const { showToast } = useUx4gToast();
  return (
    <View>
      <View style={styles.row}>
        <Ux4gButton
          text='Info'
          variant='primary'
          onPress={() => showToast({ category: 'info', title: 'New message received', subtitle: 'You have 3 unread notifications' })}
        />
      </View>
      <View style={styles.row}>
        <Ux4gButton
          text='Success'
          variant='primary'
          onPress={() => showToast({ category: 'success', title: 'Changes saved', subtitle: 'Your profile was updated successfully' })}
        />
      </View>
      <View style={styles.row}>
        <Ux4gButton
          text='Warning'
          variant='primary'
          onPress={() => showToast({ category: 'warning', title: 'Low battery', subtitle: 'Charge your device soon', actionText: 'OK' })}
        />
      </View>
      <View style={styles.row}>
        <Ux4gButton
          text='Error'
          variant='primary'
          onPress={() => showToast({ category: 'error', title: 'Upload failed', subtitle: 'Please check your connection and retry' })}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Ux4gToastProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Demo />
      </ScrollView>
    </Ux4gToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 12,
  },
});`;default:return`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${d("info","Info message","Supporting description text.","")}
${d("success","Success message","Supporting description text.","")}
${d("warning","Warning message","Supporting description text.","")}
${d("error","Error message","Supporting description text.","")}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`}},bh=i=>{const d=ud;switch(i){case"toast-stacked":return`${d("success","Payment Successful","Your payment of ₹1,250 has been processed","        layout='stacked'")}
${d("info","Update Available","Version 2.4.0 brings new features and bug fixes","        layout='stacked'")}`;case"toast-actions":return`${d("success","Order Confirmed","Your order #ORD-1024 has been placed",`        layout='full'
        actionText='Track'
        onActionClick={() => console.log('track pressed')}`)}
${d("warning","Session Expired","Please sign in again to continue",`        layout='full'
        actionText='Sign In'
        onActionClick={() => console.log('sign in pressed')}`)}`;case"toast-custom":return`${d("slot","Custom Icon Toast","Star icon with custom background",`        layout='full'
        icon={Ux4gIcons.star({ size: 20, color: '#7B61FF' })}
        backgroundColor='#EDE9FE'
        iconColor='#7B61FF'
        actionColor='#7B61FF'
        actionText='View'
        onActionClick={() => console.log('view pressed')}`)}
${d("success","Download Complete","Report exported successfully",`        layout='full'
        backgroundColor='#DCFCE7'
        iconColor='#16A34A'
        actionColor='#16A34A'
        actionText='Open'
        onActionClick={() => console.log('open pressed')}`)}`;default:return`${d("info","Info message","Supporting description text.","")}
${d("success","Success message","Supporting description text.","")}
${d("warning","Warning message","Supporting description text.","")}
${d("error","Error message","Supporting description text.","")}`}},vh=({isDark:i,story:d="toast-basic"})=>{const[c,m]=T.useState("preview"),f=gh(d),b=xh[f],x=T.useMemo(()=>yh(f),[f]),s=()=>{const B=f==="toast-provider";let I;B?I=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToastProvider, useUx4gToast, Ux4gButton, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const Demo = () => {
  const { showToast } = useUx4gToast();
  return (
    <View>
      <View style={styles.row}>
        <Ux4gButton text='Info' variant='primary' onPress={() => showToast({ category: 'info', title: 'New message received', subtitle: 'You have 3 unread notifications' })} />
      </View>
      <View style={styles.row}>
        <Ux4gButton text='Success' variant='primary' onPress={() => showToast({ category: 'success', title: 'Changes saved', subtitle: 'Your profile was updated successfully' })} />
      </View>
      <View style={styles.row}>
        <Ux4gButton text='Warning' variant='primary' onPress={() => showToast({ category: 'warning', title: 'Low battery', subtitle: 'Charge your device soon', actionText: 'OK' })} />
      </View>
      <View style={styles.row}>
        <Ux4gButton text='Error' variant='primary' onPress={() => showToast({ category: 'error', title: 'Upload failed', subtitle: 'Please check your connection and retry' })} />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <Ux4gToastProvider>
        <ScrollView contentContainerStyle={styles.container}>
          <Demo />
        </ScrollView>
      </Ux4gToastProvider>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 12,
  },
});`:I=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast${f==="toast-custom"?", Ux4gIcons":""}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${bh(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 16,
  },
});`;const F=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gToast%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(I)}`;return t.jsx("iframe",{src:F,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Toast Preview"})},w=[{name:"category",type:"'info' | 'success' | 'warning' | 'error' | 'slot'",default:"required",desc:"Category driving the default icon, tint, and action color.",required:!0},{name:"title",type:"string",default:"required",desc:"Toast title text.",required:!0},{name:"subtitle",type:"string",default:"undefined",desc:"Secondary description text.",required:!1},{name:"actionText",type:"string",default:"undefined",desc:"Action label rendered on the right side.",required:!1},{name:"onActionClick",type:"() => void",default:"undefined",desc:"Action press callback.",required:!1},{name:"onCloseClick",type:"() => void",default:"undefined",desc:"Close button press callback (hides the button when omitted).",required:!1},{name:"showCloseButton",type:"boolean",default:"true",desc:"Whether the close button is shown.",required:!1},{name:"layout",type:"'full' | 'stacked'",default:"full on wide, stacked on narrow",desc:"Row layout vs stacked (title/subtitle) layout.",required:!1},{name:"backgroundColor",type:"string",default:"category tint",desc:"Tint overlay color override.",required:!1},{name:"icon",type:"React.ReactNode",default:"category icon",desc:"Custom icon override.",required:!1},{name:"iconColor",type:"string",default:"category color",desc:"Icon color override.",required:!1},{name:"actionColor",type:"string",default:"category color",desc:"Action text color override.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Container style override.",required:!1}],p=[{name:"children",type:"React.ReactNode",default:"required",desc:"App tree that can call useUx4gToast().",required:!0},{name:"isBottom",type:"boolean",default:"false",desc:"Toasts slide in from the bottom instead of the top.",required:!1}],N=[{name:"showToast",type:"(data: Ux4gToastData) => void",default:"—",desc:"Shows a toast. Data: category, title, subtitle, actionText, onActionClick, showCloseButton, backgroundColor, icon, iconColor, actionColor, autoClose (default true), durationMs (default 3000), isBottom.",required:!1},{name:"dismiss",type:"() => void",default:"—",desc:"Dismisses the current toast.",required:!1}],A=f==="toast-provider";return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:A?"ToastProviderExample.tsx":"ToastExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:(A?[...p,...N]:w).map(B=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[B.name,B.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:B.type})}),t.jsx("td",{children:B.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:B.default})})]},B.name))})]})})]})]})})]})},wh=["switch-basic","switch-labels","switch-status","switch-required","switch-disabled"],Sh=i=>wh.includes(i)?i:"switch-basic",Ch={"switch-basic":{title:"Switch — Basic",description:"Small, medium, and large switches in default right-label position."},"switch-labels":{title:"Switch — Label Positions",description:"noLabel, left, right, and bothSides label placement."},"switch-status":{title:"Switch — Status Descriptions",description:"Helper, error, warning, and success description variants."},"switch-required":{title:"Switch — Required & Icons",description:"Required asterisks, trailing icons, and secondary labels."},"switch-disabled":{title:"Switch — Disabled",description:"Disabled switches in on and off states."}},Ye=(i,d,c)=>`const ${i} = () => {
  const [${d}, set${d[0].toUpperCase()}${d.slice(1)}] = React.useState(false);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={${d}}
        onCheckedChange={set${d[0].toUpperCase()}${d.slice(1)}}
${c}
      />
    </View>
  );
};`,pd=i=>{switch(i){case"switch-labels":return`${Ye("RightExample","right",`        label='Label on the right'
        description='Default position with supporting text'
        labelPosition='right'`)}
${Ye("LeftExample","left",`        label='Label on the left'
        description='Switch control sits after the text'
        labelPosition='left'`)}
${Ye("BothSidesExample","both",`        label='Left label'
        labelPosition='bothSides'
        secondaryLabel='Right label'`)}
${Ye("NoLabelExample","noLabel","        labelPosition='noLabel'")}`;case"switch-status":return`${Ye("HelperExample","helper",`        label='Notifications'
        description='Receive email notifications'
        descriptionVariant='helper'`)}
${Ye("ErrorExample","error",`        label='Auto-renewal'
        description='Payment method expired, please update'
        descriptionVariant='error'`)}
${Ye("WarningExample","warning",`        label='Data sync'
        description='Roaming charges may apply'
        descriptionVariant='warning'`)}
${Ye("SuccessExample","success",`        label='Backup'
        description='Last backup 2 minutes ago'
        descriptionVariant='success'`)}`;case"switch-required":return`${Ye("RequiredExample","required",`        label='Terms & Conditions'
        description='I agree to the terms of service'
        isRequired`)}
${Ye("SecondaryExample","secondary",`        label='Dark mode'
        labelPosition='bothSides'
        secondaryLabel='On'
        isSecondaryRequired`)}
${Ye("IconExample","iconed",`        label='Biometric login'
        description='Use fingerprint to unlock'`)}`;case"switch-disabled":return`const DisabledOffExample = () => {
  const [disabledOff, setDisabledOff] = React.useState(false);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={disabledOff}
        onCheckedChange={setDisabledOff}
        enabled={false}
        label='Disabled Off'
        description='This switch cannot be toggled'
      />
    </View>
  );
};

const DisabledOnExample = () => {
  const [disabledOn, setDisabledOn] = React.useState(true);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={disabledOn}
        onCheckedChange={setDisabledOn}
        enabled={false}
        label='Disabled On'
        description='Locked in the on position'
      />
    </View>
  );
};

const DisabledNoLabelExample = () => {
  const [disabledNoLabel, setDisabledNoLabel] = React.useState(false);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={disabledNoLabel}
        onCheckedChange={setDisabledNoLabel}
        enabled={false}
        labelPosition='noLabel'
      />
    </View>
  );
};`;default:return`${Ye("SmallExample","small",`        size='s'
        label='Small (32 x 18)'
        description='Compact size for dense layouts'`)}
${Ye("MediumExample","medium",`        size='m'
        label='Medium (40 x 22)'
        description='Default size'`)}
${Ye("LargeExample","large",`        size='l'
        label='Large (48 x 28)'
        description='Prominent size for settings'`)}`}},jh=i=>`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gSwitch } from 'ux4g-react-native-design-system';

${pd(i)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${{"switch-basic":["SmallExample","MediumExample","LargeExample"],"switch-labels":["RightExample","LeftExample","BothSidesExample","NoLabelExample"],"switch-status":["HelperExample","ErrorExample","WarningExample","SuccessExample"],"switch-required":["RequiredExample","SecondaryExample","IconExample"],"switch-disabled":["DisabledOffExample","DisabledOnExample","DisabledNoLabelExample"]}[i].map(c=>`      <${c} />`).join(`
`)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
});`,kh=i=>({"switch-basic":["SmallExample","MediumExample","LargeExample"],"switch-labels":["RightExample","LeftExample","BothSidesExample","NoLabelExample"],"switch-status":["HelperExample","ErrorExample","WarningExample","SuccessExample"],"switch-required":["RequiredExample","SecondaryExample","IconExample"],"switch-disabled":["DisabledOffExample","DisabledOnExample","DisabledNoLabelExample"]})[i].map(c=>`          <${c} />`).join(`
`),Th=({isDark:i,story:d="switch-basic"})=>{const[c,m]=T.useState("preview"),f=Sh(d),b=Ch[f],x=T.useMemo(()=>jh(f),[f]),s=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gSwitch, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${pd(f)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${kh(f)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gSwitch%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Switch Preview"})},w=[{name:"checked",type:"boolean",default:"false",desc:"Whether the switch is on (true) or off (false).",required:!1},{name:"value",type:"boolean",default:"false",desc:"Alias for checked (React Native form compatibility).",required:!1},{name:"onCheckedChange",type:"(checked: boolean) => void",default:"undefined",desc:"Callback fired when the checked state toggles.",required:!1},{name:"onChanged",type:"(checked: boolean) => void",default:"undefined",desc:"Alias for onCheckedChange.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Primary label text next to the switch.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Supporting description below the label.",required:!1},{name:"size",type:"'s' | 'm' | 'l' | 'small' | 'medium' | 'large'",default:"'m'",desc:"Switch size (s = 32x18, m = 40x22, l = 48x28).",required:!1},{name:"labelPosition",type:"'noLabel' | 'left' | 'right' | 'bothSides'",default:"'right'",desc:"Position of the label relative to the switch.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the switch is interactive.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Shows a red asterisk next to the primary label.",required:!1},{name:"icon",type:"React.ReactNode",default:"undefined",desc:"Trailing icon next to the primary label.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom label typography style.",required:!1},{name:"descriptionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom description typography style.",required:!1},{name:"secondaryLabel",type:"string",default:"undefined",desc:"Secondary label when labelPosition is bothSides.",required:!1},{name:"isSecondaryRequired",type:"boolean",default:"false",desc:"Red asterisk next to the secondary label.",required:!1},{name:"secondaryIcon",type:"React.ReactNode",default:"undefined",desc:"Trailing icon next to the secondary label.",required:!1},{name:"descriptionVariant",type:"'helper' | 'error' | 'warning' | 'success'",default:"undefined",desc:"Status variant coloring and icon for the description.",required:!1},{name:"descriptionIcon",type:"React.ReactNode",default:"undefined",desc:"Custom status icon before the description.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Root container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"SwitchExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Nh=["timeslot-introduction","timeslot-basic","timeslot-compact","timeslot-json"],Uh=i=>Nh.includes(i)?i:"timeslot-introduction",Ph={"timeslot-introduction":{title:"Time Slot — Introduction",description:"Calendar grid with available dates, public holidays, weekly offs, and no-slot days."},"timeslot-basic":{title:"Time Slot — Booking (Expanded)",description:"Tapping an available date opens the time slot sheet with available, limited, and no-slot times."},"timeslot-compact":{title:"Time Slot — Compact View",description:"Compact view mode renders time slots in a two-column grid with count badges."},"timeslot-json":{title:"Time Slot — JSON Data Source",description:"Build Ux4gTimeslotData from a plain JSON object with viewMode and dates."}},md="const pad = (n) => String(n).padStart(2, '0');\nconst fmt = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;\nconst now = new Date();\nconst addDays = (n) => { const d = new Date(now); d.setDate(d.getDate() + n); return d; };\nconst today = fmt(now);",$i=i=>{switch(i){case"timeslot-basic":case"timeslot-compact":return`const data = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  today,
  weeklyOffWeekdays: [6, 7],
  allowTapOnPublicHoliday: false,
  allowTapOnWeeklyOff: false,
  viewMode: '${i==="timeslot-compact"?"compact":"expanded"}',
  dates: [
    { date: fmt(addDays(2)), status: 'publicHoliday' },
    { date: fmt(addDays(4)), status: 'noSlots' },
    { date: fmt(addDays(6)), status: 'noSlots' },
  ],
};`;case"timeslot-json":return`const data = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  today,
  weeklyOffWeekdays: [6, 7],
  viewMode: 'compact',
  dates: [
    { date: fmt(addDays(2)), status: 'publicHoliday' },
    { date: fmt(addDays(5)), status: 'noSlots' },
  ],
};`;default:return`const data = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  today,
  weeklyOffWeekdays: [6, 7],
  allowTapOnPublicHoliday: false,
  allowTapOnWeeklyOff: false,
  viewMode: 'expanded',
  dates: [
    { date: fmt(addDays(2)), status: 'publicHoliday' },
    { date: fmt(addDays(4)), status: 'noSlots' },
    { date: fmt(addDays(6)), status: 'noSlots' },
  ],
};`}},hd=i=>i==="timeslot-basic"||i==="timeslot-compact"?`${$i(i)}

const timeSlots = {
  default: [
    { time: '9:00 AM', slotCount: 4, status: 'available' },
    { time: '9:30 AM', slotCount: 6, status: 'available' },
    { time: '10:00 AM', slotCount: 3, status: 'available' },
    { time: '10:30 AM', slotCount: 0, status: 'noSlots' },
    { time: '11:00 AM', slotCount: 8, status: 'available' },
    { time: '2:00 PM', slotCount: 5, status: 'available' },
    { time: '2:30 PM', slotCount: 2, status: 'limited' },
    { time: '3:00 PM', slotCount: 2, status: 'limited' },
    { time: '4:00 PM', slotCount: 7, status: 'available' },
    { time: '5:30 PM', slotCount: 0, status: 'noSlots' },
  ],
};

const timeSlotProvider = (date) => timeSlots[fmt(date)] || timeSlots.default;

const BookingExample = () => {
  const [confirmed, setConfirmed] = React.useState(null);
  return (
    <View style={styles.row}>
      <Ux4gTimeslot
        data={data}
        timeSlotProvider={timeSlotProvider}
        onSlotConfirmed={(date, slot) => setConfirmed(\`\${fmt(date)} • \${slot.time}\`)}
      />
      {confirmed && <Text style={styles.result}>Confirmed: {confirmed}</Text>}
    </View>
  );
};`:i==="timeslot-json"?`${$i(i)}

const JsonExample = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <View style={styles.row}>
      <Ux4gTimeslot data={data} onDateSelected={(date) => setSelected(fmt(date))} />
      {selected && <Text style={styles.result}>Selected: {selected}</Text>}
    </View>
  );
};`:`${$i(i)}

const CalendarExample = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <View style={styles.row}>
      <Text style={styles.caption}>Select an available date</Text>
      <Ux4gTimeslot data={data} onDateSelected={(date) => setSelected(fmt(date))} />
      {selected && <Text style={styles.result}>Selected: {selected}</Text>}
    </View>
  );
};`,fd=i=>{switch(i){case"timeslot-basic":case"timeslot-compact":return"BookingExample";case"timeslot-json":return"JsonExample";default:return"CalendarExample"}},Vh=i=>`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTimeslot } from 'ux4g-react-native-design-system';

${md}

${hd(i)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <${fd(i)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
  caption: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    color: '#6B7280',
  },
  result: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});`,Eh=({isDark:i,story:d="timeslot-introduction"})=>{const[c,m]=T.useState("preview"),f=Uh(d),b=Ph[f],x=T.useMemo(()=>Vh(f),[f]),s=()=>{const A=`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTimeslot, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${md}

${hd(f)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
        <${fd(f)} />
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 20,
  },
  caption: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    color: '#6B7280',
  },
  result: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});`,B=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gTimeslot%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(A)}`;return t.jsx("iframe",{src:B,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack TimeSlot Preview"})},w=[{name:"data",type:"Ux4gTimeslotData",default:"—",desc:"Calendar data model: year, month, selectedDate, today, weeklyOffWeekdays, dates, allowTapOnPublicHoliday, allowTapOnWeeklyOff, viewMode.",required:!0},{name:"onDateSelected",type:"(date: Date) => void",default:"undefined",desc:"Called when the user taps an available date (when no timeSlotProvider is set).",required:!1},{name:"onMonthChanged",type:"(year: number, month: number) => void",default:"undefined",desc:"Called when the prev/next month arrow is tapped.",required:!1},{name:"timeSlotProvider",type:"(date: Date) => Promise<SlotTimeEntry[]> | SlotTimeEntry[]",default:"undefined",desc:"Supplies time slots for a date; when set, tapping a date opens the SlotTimePickerSheet.",required:!1},{name:"onSlotConfirmed",type:"(date: Date, slot: SlotTimeEntry) => void",default:"undefined",desc:"Called when the user confirms a time slot in the sheet.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Root container style override.",required:!1}],p=[{name:"year",type:"number",default:"—",desc:"Initial year of the calendar grid.",required:!0},{name:"month",type:"number",default:"—",desc:"Initial month (1–12) of the calendar grid.",required:!0},{name:"selectedDate",type:"string",default:"undefined",desc:"ISO date (YYYY-MM-DD) initially selected.",required:!1},{name:"today",type:"string",default:"new Date()",desc:"ISO date (YYYY-MM-DD) treated as today; past dates are non-interactive.",required:!1},{name:"weeklyOffWeekdays",type:"number[]",default:"[6, 7]",desc:"ISO weekday numbers (1=Mon…7=Sun) shown as weekly off.",required:!1},{name:"dates",type:"SlotDateEntry[]",default:"[]",desc:"Per-date statuses: { date, status } with status = available | noSlots | publicHoliday | weeklyOff.",required:!1},{name:"allowTapOnPublicHoliday",type:"boolean",default:"false",desc:"Allows tapping publicHoliday dates.",required:!1},{name:"allowTapOnWeeklyOff",type:"boolean",default:"false",desc:"Allows tapping weeklyOff dates.",required:!1},{name:"viewMode",type:"'expanded' | 'compact'",default:"'expanded'",desc:"Time slot sheet layout: full-width rows (expanded) or two-column grid with badges (compact).",required:!1}],N=[{name:"time",type:"string",default:"—",desc:'Display label of the slot (e.g. "9:00 AM").',required:!0},{name:"slotCount",type:"number",default:"—",desc:'Remaining slots; 0 renders the slot as "No slots available".',required:!0},{name:"status",type:"'available' | 'limited' | 'noSlots'",default:"undefined",desc:"Optional status; limited is highlighted with the warning color.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"TimeSlotExample.tsx"})}),c==="props"&&t.jsxs("div",{className:"wb-props-area",children:[t.jsx("h3",{className:"props-section-title",children:"Ux4gTimeslot Props"}),t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[A.name,A.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:A.type})}),t.jsx("td",{children:A.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:A.default})})]},A.name))})]}),t.jsx("h3",{className:"props-section-title",children:"Ux4gTimeslotData (data prop)"}),t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Field"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:p.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[A.name,A.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:A.type})}),t.jsx("td",{children:A.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:A.default})})]},A.name))})]}),t.jsx("h3",{className:"props-section-title",children:"SlotTimeEntry (timeSlotProvider result)"}),t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Field"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:N.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[A.name,A.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:A.type})}),t.jsx("td",{children:A.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:A.default})})]},A.name))})]})]})]})]})})]})},Ah=["tooltip-introduction","tooltip-basic","tooltip-interactive","tooltip-variants","tooltip-rich"],Dh=i=>Ah.includes(i)?i:"tooltip-introduction",Fh={"tooltip-introduction":{title:"Tooltip — Introduction",description:"A small, contextual popup that appears when you tap or long-press a UI element, providing quick explanatory text without permanently cluttering the screen."},"tooltip-basic":{title:"Tooltip — Placements",description:"Top, bottom, left, and right placement of the tooltip relative to the target element."},"tooltip-interactive":{title:"Tooltip — Interactive",description:"Tooltip with optional title, leading icon, and configurable placement, colors, and trigger."},"tooltip-variants":{title:"Tooltip — All Variants",description:"Visual reference for all directional placements and alignments (topStart, top, topEnd, ...)."},"tooltip-rich":{title:"Rich Tooltip",description:"Rich tooltip with a title, icon, and optional action button. Rich tooltips are persistent by default."}},td=i=>{switch(i){case"tooltip-basic":return`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTooltip, Ux4gButton } from 'ux4g-react-native-design-system';

const PlacementExample = () => {
  return (
    <View style={styles.grid}>
      <Ux4gTooltip text='Top Tooltip' placement='top' trigger='press'>
        <Ux4gButton text='Top' onPress={() => {}} />
      </Ux4gTooltip>
      <Ux4gTooltip text='Bottom Tooltip' placement='bottom' trigger='press'>
        <Ux4gButton text='Bottom' onPress={() => {}} />
      </Ux4gTooltip>
      <Ux4gTooltip text='Left Tooltip' placement='left' trigger='press'>
        <Ux4gButton text='Left' onPress={() => {}} />
      </Ux4gTooltip>
      <Ux4gTooltip text='Right Tooltip' placement='right' trigger='press'>
        <Ux4gButton text='Right' onPress={() => {}} />
      </Ux4gTooltip>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PlacementExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
});`;case"tooltip-interactive":return`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTooltip, Ux4gButton, Ux4gIcons } from 'ux4g-react-native-design-system';

const InteractiveExample = () => {
  return (
    <View style={styles.wrap}>
      <Ux4gTooltip
        text='Interactive Tooltip'
        title='Information'
        icon={<Ux4gIcons.infoOutline size={16} />}
        placement='top'
        trigger='press'
        backgroundColor='#404040'
        contentColor='#FAFAFA'
        cornerRadius={4}
        arrowWidth={10}
        arrowHeight={6}
      >
        <Ux4gButton text='Long Press / Tap Me' onPress={() => {}} />
      </Ux4gTooltip>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InteractiveExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  wrap: {
    alignItems: 'center',
  },
});`;case"tooltip-variants":return`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const placements = [
  'topStart', 'top', 'topEnd',
  'bottomStart', 'bottom', 'bottomEnd',
  'leftStart', 'left', 'leftEnd',
  'rightStart', 'right', 'rightEnd',
];

const VariantsExample = () => {
  return (
    <View style={styles.grid}>
      {placements.map((placement) => (
        <Ux4gTooltip
          key={placement}
          text='Tooltip'
          placement={placement}
          trigger='press'
        >
          <View style={styles.anchor}>
            <Text style={styles.anchorText}>{placement}</Text>
          </View>
        </Ux4gTooltip>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VariantsExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  anchor: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
  },
  anchorText: {
    fontSize: 13,
    color: '#374151',
  },
});`;case"tooltip-rich":return`import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gRichTooltip, Ux4gIcons } from 'ux4g-react-native-design-system';

const RichExample = () => {
  return (
    <View style={styles.wrap}>
      <Ux4gRichTooltip
        text='This is a rich tooltip with a title, icon, and action.'
        title='More Info'
        icon={<Ux4gIcons.infoOutline size={16} />}
        placement='bottom'
        trigger='press'
        action={
          <Pressable onPress={() => {}}>
            <Text style={styles.action}>Learn more</Text>
          </Pressable>
        }
      >
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>?</Text>
        </View>
      </Ux4gRichTooltip>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RichExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  wrap: {
    alignItems: 'center',
  },
  anchor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  anchorText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  action: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});`;default:return`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const rows = [
  ['Top', 'top', 'Above the target, center aligned'],
  ['Bottom', 'bottom', 'Below the target, center aligned'],
  ['Left', 'left', 'To the left of the target'],
  ['Right', 'right', 'To the right of the target'],
];

const IntroductionExample = () => {
  return (
    <View>
      {rows.map(([label, placement, hint]) => (
        <View key={label} style={styles.row}>
          <Text style={styles.hint}>{hint}</Text>
          <Ux4gTooltip text={label + ' Tooltip'} placement={placement} trigger='press'>
            <View style={styles.anchor}>
              <Text style={styles.anchorText}>{label}</Text>
            </View>
          </Ux4gTooltip>
        </View>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <IntroductionExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 32,
    alignItems: 'center',
  },
  hint: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  anchor: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 6,
    backgroundColor: '#F3F4F6',
  },
  anchorText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#374151',
  },
});`}},Bh=({isDark:i,story:d="tooltip-introduction"})=>{const[c,m]=T.useState("preview"),f=Dh(d),b=Fh[f],x=T.useMemo(()=>td(f),[f]),s=()=>{const N=`import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip, Ux4gRichTooltip, Ux4gButton, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${td(f).split(`
export default function App`)[0].replace(/^import React from 'react';\nimport .*?from 'react-native';\nimport .*?from 'ux4g-react-native-design-system';\n\n/,"").trim()}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
        ${{"tooltip-introduction":"<IntroductionExample />","tooltip-basic":"<PlacementExample />","tooltip-interactive":"<InteractiveExample />","tooltip-variants":"<VariantsExample />","tooltip-rich":"<RichExample />"}[f]}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 32,
    alignItems: 'center',
  },
  hint: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  wrap: {
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  anchor: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
    backgroundColor: '#F3F4F6',
  },
  anchorText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#374151',
  },
  action: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});`,A=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gTooltip%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(N)}`;return t.jsx("iframe",{src:A,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Tooltip Preview"})},w=[{name:"children",type:"ReactNode",default:"—",desc:"The anchor element that triggers the tooltip (button, icon, etc.).",required:!0},{name:"text",type:"string",default:"undefined",desc:"Tooltip body text.",required:!1},{name:"title",type:"string",default:"undefined",desc:"Optional title; when set, the tooltip renders the rich layout and becomes persistent.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Optional leading icon next to the title or text.",required:!1},{name:"placement",type:"'topStart' | 'top' | 'topEnd' | 'bottomStart' | 'bottom' | 'bottomEnd' | 'leftStart' | 'left' | 'leftEnd' | 'rightStart' | 'right' | 'rightEnd'",default:"'top'",desc:"Placement of the tooltip relative to the target.",required:!1},{name:"trigger",type:"'press' | 'longPress'",default:"'longPress'",desc:"Gesture that opens the tooltip.",required:!1},{name:"backgroundColor",type:"string",default:"neutral700 (light) / neutral300 (dark)",desc:"Tooltip bubble background color.",required:!1},{name:"contentColor",type:"string",default:"neutral50 (light) / neutral900 (dark)",desc:"Tooltip text and icon color.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom typography style for the body text.",required:!1},{name:"cornerRadius",type:"number",default:"4",desc:"Border radius of the tooltip bubble.",required:!1},{name:"arrowWidth",type:"number",default:"10",desc:"Width of the caret/arrow.",required:!1},{name:"arrowHeight",type:"number",default:"6",desc:"Height of the caret/arrow.",required:!1},{name:"isPersistent",type:"boolean",default:"false",desc:"If true, the tooltip does not auto-dismiss after 2s.",required:!1},{name:"action",type:"ReactNode",default:"undefined",desc:"Optional action element rendered at the bottom (rich tooltip).",required:!1},{name:"customContent",type:"ReactNode",default:"undefined",desc:"Fully custom tooltip body replacing the default layout.",required:!1},{name:"maxWidth",type:"number",default:"240",desc:"Maximum width of the tooltip bubble.",required:!1},{name:"autoShow",type:"boolean",default:"false",desc:"Automatically opens the tooltip once when the anchor layout completes.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"TooltipExample.tsx"})}),c==="props"&&t.jsxs("div",{className:"wb-props-area",children:[t.jsx("h3",{className:"props-section-title",children:"Ux4gTooltip / Ux4gRichTooltip Props"}),t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]}),t.jsxs("p",{className:"props-note",children:[t.jsx("strong",{children:"Ux4gRichTooltip"})," is the same component with ",t.jsxs("code",{children:["isPersistent=","{true}"]})," forced, so rich tooltips with title/icon/action never auto-dismiss."]})]})]})]})})]})},zh=({isDark:i,story:d="empty-state-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { Ux4gEmptyState, Ux4gIcons } from 'ux4g-react-native-design-system';"),s.push(""),d==="empty-state-variants"?(s.push("// Variant presets"),s.push('<Ux4gEmptyState variant="noResults" title="No results found" subtitle="Try a different keyword." />'),s.push('<Ux4gEmptyState variant="noData" title="No records available" subtitle="There is nothing to show yet." />'),s.push('<Ux4gEmptyState variant="comingSoon" title="Feature coming soon" subtitle="This module will be available shortly." />'),s.push('<Ux4gEmptyState variant="error" title="Unable to load" subtitle="Please check your network and retry." />')):d==="empty-state-action"?(s.push("// Action button + custom icon"),s.push("<Ux4gEmptyState"),s.push('  variant="error"'),s.push('  title="Something went wrong"'),s.push('  subtitle="Unable to fetch latest data."'),s.push('  buttonText="Retry"'),s.push("  onButtonPressed={() => {}}"),s.push("/>"),s.push(""),s.push("<Ux4gEmptyState"),s.push('  variant="custom"'),s.push("  icon={Ux4gIcons.verification({ size: 56 })}"),s.push('  title="All caught up"'),s.push('  subtitle="No pending tasks in this queue."'),s.push("/>")):(s.push("// Basic usage"),s.push("<Ux4gEmptyState"),s.push('  variant="noResults"'),s.push('  title="No results found"'),s.push('  subtitle="Did you mean driving license or ration card?"'),s.push('  buttonText="Clear filters"'),s.push("  onButtonPressed={() => {}}"),s.push("/>")),s.join(`
`)},[d]),b=()=>{let s="";d==="empty-state-variants"?s=`        <Ux4gEmptyState
          variant="noResults"
          title="No results found"
          subtitle="Try a different keyword."
        />

        <View style={{ height: 20 }} />

        <Ux4gEmptyState
          variant="noData"
          title="No records available"
          subtitle="There is nothing to show yet."
        />

        <View style={{ height: 20 }} />

        <Ux4gEmptyState
          variant="comingSoon"
          title="Feature coming soon"
          subtitle="This module will be available shortly."
        />

        <View style={{ height: 20 }} />

        <Ux4gEmptyState
          variant="error"
          title="Unable to load"
          subtitle="Please check your network and retry."
        />`:d==="empty-state-action"?s=`        <Ux4gEmptyState
          variant="error"
          title="Something went wrong"
          subtitle="Unable to fetch latest data."
          buttonText="Retry"
          onButtonPressed={() => {}}
        />

        <View style={{ height: 24 }} />

        <Ux4gEmptyState
          variant="custom"
          icon={Ux4gIcons.verification({ size: 56 })}
          title="All caught up"
          subtitle="No pending tasks in this queue."
        />`:s=`        <Ux4gEmptyState
          variant="noResults"
          title="No results found"
          subtitle="Did you mean driving license or ration card?"
          buttonText="Clear filters"
          onButtonPressed={() => {}}
        />`;const w=`import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Ux4gEmptyState, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <ScrollView contentContainerStyle={styles.container}>
${s}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center'
  }
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gEmptyState%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack EmptyState Preview"})},x=[{name:"title",type:"string",default:"—",desc:"Primary message.",required:!0},{name:"variant",type:"'noResults' | 'noData' | 'comingSoon' | 'error' | 'custom'",default:"'custom'",desc:"Semantic preset for the empty state.",required:!1},{name:"subtitle",type:"string",default:"undefined",desc:"Secondary message.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Descriptive text.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Icon displayed above title.",required:!1},{name:"iconSize",type:"number",default:"48",desc:"Size of the top icon.",required:!1},{name:"iconColor",type:"string",default:"theme.colors.primary",desc:"Color of the top icon.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom style for the title.",required:!1},{name:"bodyStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom style for subtitle and description.",required:!1},{name:"buttonText",type:"string",default:"undefined",desc:"CTA button label.",required:!1},{name:"onButtonPressed",type:"() => void",default:"undefined",desc:"CTA button callback.",required:!1},{name:"buttonSize",type:"'small' | 'medium' | 'large'",default:"'small'",desc:"Size of the CTA button.",required:!1},{name:"buttonLeadingIcon",type:"Ux4gIconProp",default:"undefined",desc:"Icon shown inside the CTA button.",required:!1},{name:"padding",type:"number",default:"24",desc:"Padding around the whole component.",required:!1},{name:"bodyHorizontalPadding",type:"number",default:"24",desc:"Extra horizontal padding for text.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Empty State"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Empty state layout with semantic variant icons, clear messaging, and optional recovery action."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"EmptyStateExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},Ih=({isDark:i})=>{const[d,c]=T.useState("preview"),m=T.useMemo(()=>{const x=[];return x.push("import { Ux4gFeedbackFormStar } from 'ux4g-react-native-design-system';"),x.push(""),x.push("<Ux4gFeedbackFormStar"),x.push("  onSubmit={(rating, selectedOptions, comment) => console.log(rating, selectedOptions, comment)}"),x.push("/>"),x.join(`
`)},[]),f=()=>{const x=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gFeedbackFormStar, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gFeedbackFormStar
          onSubmit={(rating, selectedOptions, comment) => console.log(rating, selectedOptions, comment)}
          onSkip={() => console.log('Skipped')}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});`,s=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gFeedbackFormStar%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:s,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Feedback Star Preview"})},b=[{name:"title",type:"string",default:"'Rate your experience'",desc:"Top heading text.",required:!1},{name:"improvementTitle",type:"string",default:"'What can we improve?'",desc:"Heading above improvement chips.",required:!1},{name:"commentPlaceholder",type:"string",default:"'Tell us more about your experience'",desc:"Placeholder for comment box.",required:!1},{name:"submitButtonText",type:"string",default:"'Submit'",desc:"Primary button text.",required:!1},{name:"skipButtonText",type:"string",default:"'Skip'",desc:"Skip button text.",required:!1},{name:"successTitle",type:"string",default:"'Feedback submitted'",desc:"Success view title.",required:!1},{name:"successMessage",type:"string",default:"default success copy",desc:"Success view message.",required:!1},{name:"improvementOptions",type:"string[]",default:"['Speed','Design','Reliability','Features','Other']",desc:"Selectable improvement options.",required:!1},{name:"maxStars",type:"number",default:"5",desc:"Number of stars.",required:!1},{name:"initialRating",type:"number",default:"0",desc:"Initial star rating value.",required:!1},{name:"minWords",type:"number",default:"0",desc:"Minimum words required in comment.",required:!1},{name:"maxLength",type:"number",default:"200",desc:"Max comment length.",required:!1},{name:"onSubmit",type:"(rating: number, selectedOptions: string[], comment: string) => void",default:"undefined",desc:"Submit callback.",required:!1},{name:"onSkip",type:"() => void",default:"undefined",desc:"Skip callback.",required:!1},{name:"onCloseSuccess",type:"() => void",default:"undefined",desc:"Close callback for success state.",required:!1},{name:"activeRatingColor",type:"string",default:"auto by rating",desc:"Active star color override.",required:!1},{name:"lowRatingColor",type:"string",default:"UX4GColors.red600",desc:"Low rating color.",required:!1},{name:"highRatingColor",type:"string",default:"UX4GColors.yellow600",desc:"High rating color.",required:!1},{name:"inactiveRatingColor",type:"string",default:"theme-based muted",desc:"Inactive star color.",required:!1},{name:"successIconColor",type:"string",default:"theme success color",desc:"Success icon color.",required:!1},{name:"successBackgroundColor",type:"string",default:"undefined",desc:"Success background override.",required:!1},{name:"lowRatingThreshold",type:"number",default:"2",desc:"Threshold for low/high color split.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"feedbackformstar"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Star rating feedback form variant."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>c("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>c("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>c("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:f()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:m,language:"TSX",filename:"FeedbackStarExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:b.map(x=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[x.name,x.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:x.type})}),t.jsx("td",{children:x.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:x.default})})]},x.name))})]})})]})]})})]})},qh=({isDark:i})=>{const[d,c]=T.useState("preview"),m=T.useMemo(()=>{const x=[];return x.push("import { Ux4gFeedbackFormCsat } from 'ux4g-react-native-design-system';"),x.push(""),x.push("<Ux4gFeedbackFormCsat"),x.push("  onSubmit={(rating, comment) => console.log(rating, comment)}"),x.push("/>"),x.join(`
`)},[]),f=()=>{const x=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gFeedbackFormCsat, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gFeedbackFormCsat
          onSubmit={(rating, comment) => console.log(rating, comment)}
          onSkip={() => console.log('Skipped')}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});`,s=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gFeedbackFormCsat%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:s,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Feedback Csat Preview"})},b=[{name:"title",type:"string",default:"'How do you feel about this service?'",desc:"Top heading text.",required:!1},{name:"badLabel",type:"string",default:"'← Bad'",desc:"Left scale label.",required:!1},{name:"goodLabel",type:"string",default:"'Good →'",desc:"Right scale label.",required:!1},{name:"commentPlaceholder",type:"string",default:"'Please tell us how can we improve'",desc:"Placeholder for comment box.",required:!1},{name:"submitButtonText",type:"string",default:"'Submit'",desc:"Primary button text.",required:!1},{name:"skipButtonText",type:"string",default:"'Skip'",desc:"Skip button text.",required:!1},{name:"successTitle",type:"string",default:"'Feedback submitted'",desc:"Success view title.",required:!1},{name:"successMessage",type:"string",default:"default success copy",desc:"Success view message.",required:!1},{name:"minWords",type:"number",default:"0",desc:"Minimum words required in comment.",required:!1},{name:"maxLength",type:"number",default:"200",desc:"Max comment length.",required:!1},{name:"onSubmit",type:"(rating: number, comment: string) => void",default:"undefined",desc:"Submit callback.",required:!1},{name:"onSkip",type:"() => void",default:"undefined",desc:"Skip callback.",required:!1},{name:"onCloseSuccess",type:"() => void",default:"undefined",desc:"Close callback for success state.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"feedbackformcsat"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"CSAT smiley rating feedback form variant."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>c("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>c("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>c("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:f()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:m,language:"TSX",filename:"FeedbackCsatExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:b.map(x=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[x.name,x.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:x.type})}),t.jsx("td",{children:x.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:x.default})})]},x.name))})]})})]})]})})]})},Rh=({isDark:i})=>{const[d,c]=T.useState("preview"),m=T.useMemo(()=>{const x=[];return x.push("import { Ux4gFeedbackFormNps } from 'ux4g-react-native-design-system';"),x.push(""),x.push("<Ux4gFeedbackFormNps"),x.push("  onSubmit={(score, comment) => console.log(score, comment)}"),x.push("/>"),x.join(`
`)},[]),f=()=>{const x=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gFeedbackFormNps, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
        <Ux4gFeedbackFormNps
          onSubmit={(score, comment) => console.log(score, comment)}
          onSkip={() => console.log('Skipped')}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});`,s=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gFeedbackFormNps%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:s,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Feedback Nps Preview"})},b=[{name:"title",type:"string",default:"'How likely are you to recommend us?'",desc:"Top heading text.",required:!1},{name:"unlikelyLabel",type:"string",default:"'0 - Extremely Unlikely'",desc:"Left scale label.",required:!1},{name:"likelyLabel",type:"string",default:"'10 - Extremely Likely'",desc:"Right scale label.",required:!1},{name:"commentPlaceholder",type:"string",default:"'Please tell us why you gave this score'",desc:"Placeholder for comment box.",required:!1},{name:"submitButtonText",type:"string",default:"'Submit'",desc:"Primary button text.",required:!1},{name:"skipButtonText",type:"string",default:"'Skip'",desc:"Skip button text.",required:!1},{name:"successTitle",type:"string",default:"'Feedback submitted'",desc:"Success view title.",required:!1},{name:"successMessage",type:"string",default:"default success copy",desc:"Success view message.",required:!1},{name:"minWords",type:"number",default:"0",desc:"Minimum words required in comment.",required:!1},{name:"maxLength",type:"number",default:"200",desc:"Max comment length.",required:!1},{name:"onSubmit",type:"(score: number, comment: string) => void",default:"undefined",desc:"Submit callback.",required:!1},{name:"onSkip",type:"() => void",default:"undefined",desc:"Skip callback.",required:!1},{name:"onCloseSuccess",type:"() => void",default:"undefined",desc:"Close callback for success state.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"feedbackformnps"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"NPS 0-10 score feedback form variant."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>c("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>c("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>c("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:f()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:m,language:"TSX",filename:"FeedbackNpsExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:b.map(x=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[x.name,x.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:x.type})}),t.jsx("td",{children:x.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:x.default})})]},x.name))})]})})]})]})})]})},$h=i=>i==="search"||i==="search-field"?"search-basic":["search-basic","search-submit","search-autocomplete","search-status"].includes(i)?i:"search-basic",Lh={"search-basic":{title:"Search Field",description:"Basic search input with search icon, optional voice/clear actions, and helper caption."},"search-submit":{title:"Search Field",description:"Search field with attached submit button using filled or tonal style variants."},"search-autocomplete":{title:"Search Field",description:"Autocomplete dropdown with filtering modes and option selection behavior."},"search-status":{title:"Search Field",description:"Validation states with semantic status color, icon, and caption feedback."}},Wh=i=>i==="search-submit"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gSearchField } from 'ux4g-react-native-design-system';

export default function SearchFieldSubmitExample() {
  const [filledValue, setFilledValue] = useState('Delhi');
  const [tonalValue, setTonalValue] = useState('');

  return (
    <View style={{ width: '100%', gap: 14 }}>
      <Ux4gSearchField
        label='Filled Button Style'
        value={filledValue}
        onValueChange={setFilledValue}
        variant='searchWithSubmit'
        buttonStyle='filled'
        placeholder='Search city...'
      />
      <Ux4gSearchField
        label='Tonal Button Style'
        value={tonalValue}
        onValueChange={setTonalValue}
        variant='searchWithSubmit'
        buttonStyle='tonal'
        placeholder='Search postal code...'
      />
    </View>
  );
}`:i==="search-autocomplete"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gSearchField } from 'ux4g-react-native-design-system';

const options = ['India', 'Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada'];

export default function SearchFieldAutocompleteExample() {
  const [containsValue, setContainsValue] = useState('');
  const [startsWithValue, setStartsWithValue] = useState('');

  return (
    <View style={{ width: '100%', gap: 14 }}>
      <Ux4gSearchField
        label='Contains Filter'
        value={containsValue}
        onValueChange={setContainsValue}
        variant='autocomplete'
        filterType='contains'
        options={options}
        placeholder='Type to search countries...'
      />
      <Ux4gSearchField
        label='Starts With Filter'
        value={startsWithValue}
        onValueChange={setStartsWithValue}
        variant='autocomplete'
        filterType='startsWith'
        options={options}
        placeholder='Try "Uni" or "Ind"...'
      />
    </View>
  );
}`:i==="search-status"?`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gSearchField } from 'ux4g-react-native-design-system';

export default function SearchFieldStatusExample() {
  const [errorValue, setErrorValue] = useState('Invalid @#$');
  const [warningValue, setWarningValue] = useState('Slow search index');
  const [successValue, setSuccessValue] = useState('TRK-2026-9912');

  return (
    <View style={{ width: '100%', gap: 14 }}>
      <Ux4gSearchField
        label='Error Status'
        value={errorValue}
        onValueChange={setErrorValue}
        status='error'
        caption='Please remove unsupported characters.'
      />
      <Ux4gSearchField
        label='Warning Status'
        value={warningValue}
        onValueChange={setWarningValue}
        status='warning'
        caption='Search index is rebuilding. Results may delay.'
      />
      <Ux4gSearchField
        label='Success Status'
        value={successValue}
        onValueChange={setSuccessValue}
        status='success'
        caption='Tracking number verified.'
      />
    </View>
  );
}`:`import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gSearchField } from 'ux4g-react-native-design-system';

export default function SearchFieldBasicExample() {
  const [value, setValue] = useState('');

  return (
    <View style={{ width: '100%', gap: 14 }}>
      <Ux4gSearchField
        label='Search Directory'
        value={value}
        onValueChange={setValue}
        variant='basicSearch'
        showVoiceIcon={true}
        showClearIcon={true}
        placeholder='Search documents, people, or tags...'
        caption='Type keywords to search quickly.'
      />
    </View>
  );
}`,Mh=i=>i==="search-submit"?`        <View style={styles.stackFull}>
          <Ux4gSearchField
            label='Filled Button Style'
            value={filledValue}
            onValueChange={setFilledValue}
            variant='searchWithSubmit'
            buttonStyle='filled'
            placeholder='Search city...'
          />
          <Ux4gSearchField
            label='Tonal Button Style'
            value={tonalValue}
            onValueChange={setTonalValue}
            variant='searchWithSubmit'
            buttonStyle='tonal'
            placeholder='Search postal code...'
          />
        </View>`:i==="search-autocomplete"?`        <View style={styles.stackFull}>
          <Ux4gSearchField
            label='Contains Filter'
            value={containsValue}
            onValueChange={setContainsValue}
            variant='autocomplete'
            filterType='contains'
            options={sampleOptions}
            placeholder='Type to search countries...'
          />
          <Ux4gSearchField
            label='Starts With Filter'
            value={startsWithValue}
            onValueChange={setStartsWithValue}
            variant='autocomplete'
            filterType='startsWith'
            options={sampleOptions}
            placeholder='Try "Uni" or "Ind"...'
          />
        </View>`:i==="search-status"?`        <View style={styles.stackFull}>
          <Ux4gSearchField
            label='Error Status'
            value={errorValue}
            onValueChange={setErrorValue}
            status='error'
            caption='Please remove unsupported characters.'
          />
          <Ux4gSearchField
            label='Warning Status'
            value={warningValue}
            onValueChange={setWarningValue}
            status='warning'
            caption='Search index is rebuilding. Results may delay.'
          />
          <Ux4gSearchField
            label='Success Status'
            value={successValue}
            onValueChange={setSuccessValue}
            status='success'
            caption='Tracking number verified.'
          />
        </View>`:`        <View style={styles.stackFull}>
          <Ux4gSearchField
            label='Search Directory'
            value={basicValue}
            onValueChange={setBasicValue}
            variant='basicSearch'
            showVoiceIcon={true}
            showClearIcon={true}
            placeholder='Search documents, people, or tags...'
            caption='Type keywords to search quickly.'
          />
        </View>`,_h=({isDark:i,story:d="search-basic"})=>{const[c,m]=T.useState("preview"),f=$h(d),b=Lh[f],x=T.useMemo(()=>Wh(f),[f]),s=()=>{const p=`import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Ux4gSearchField, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const sampleOptions = ['India', 'Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada'];

export default function App() {
  const [basicValue, setBasicValue] = useState('');
  const [filledValue, setFilledValue] = useState('Delhi');
  const [tonalValue, setTonalValue] = useState('');
  const [containsValue, setContainsValue] = useState('');
  const [startsWithValue, setStartsWithValue] = useState('');
  const [errorValue, setErrorValue] = useState('Invalid @#$');
  const [warningValue, setWarningValue] = useState('Slow search index');
  const [successValue, setSuccessValue] = useState('TRK-2026-9912');

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${Mh(f)}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  stackFull: {
    width: '100%',
    gap: 14,
  },
});`,N=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gSearchField%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.4,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:N,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Search Field Preview"})},w=[{name:"value",type:"string",default:"required",desc:"Current search input value.",required:!0},{name:"onValueChange",type:"(value: string) => void",default:"required",desc:"Called when input text changes.",required:!0},{name:"variant",type:"'basicSearch' | 'searchWithSubmit' | 'autocomplete'",default:"'basicSearch'",desc:"Search interaction mode.",required:!1},{name:"filterType",type:"'contains' | 'startsWith' | 'startsWithPerTerm'",default:"'contains'",desc:"Autocomplete filter behavior.",required:!1},{name:"size",type:"'small' | 'medium' | 'large' | 'xl'",default:"'medium'",desc:"Height variant of search field.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Validation state coloring and icon.",required:!1},{name:"buttonStyle",type:"'filled' | 'tonal'",default:"'filled'",desc:"Submit button style in submit variant.",required:!1},{name:"label / placeholder / caption",type:"string",default:"undefined",desc:"Supportive field text configuration.",required:!1},{name:"options",type:"string[]",default:"[]",desc:"Autocomplete options list.",required:!1},{name:"showVoiceIcon / showClearIcon",type:"boolean",default:"true / true",desc:"Voice and clear icon visibility toggles.",required:!1},{name:"isLoading",type:"boolean",default:"false",desc:"Shows loading spinner in dropdown.",required:!1},{name:"enabled / readOnly",type:"boolean",default:"true / false",desc:"Input interactivity controls.",required:!1},{name:"onSubmitClick",type:"(value: string) => void",default:"undefined",desc:"Submit callback for button/keyboard action.",required:!1},{name:"onOptionSelected",type:"(option: string) => void",default:"undefined",desc:"Called when autocomplete option is chosen.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:s()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"SearchFieldExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Oh=({isDark:i,story:d="slider-basic"})=>{const[c,m]=T.useState("preview"),f=T.useMemo(()=>{const s=[];return s.push("import { Ux4gSlider } from 'ux4g-react-native-design-system';"),s.push("import { useState } from 'react';"),s.push(""),s.push("// Basic Slider (Controlled)"),s.push("const [value, setValue] = useState(50);"),s.push("<Ux4gSlider"),s.push("  value={value}"),s.push("  onValueChange={setValue}"),s.push('  label="Volume"'),s.push("  min={0}"),s.push("  max={100}"),s.push("/>"),s.push(""),s.push("// With Steps (Divisions)"),s.push("<Ux4gSlider"),s.push("  value={value}"),s.push("  onValueChange={setValue}"),s.push('  label="4 Steps"'),s.push("  steps={4}  // Creates 5 snap positions"),s.push("/>"),s.push(""),s.push("// With Caption Variant"),s.push("<Ux4gSlider"),s.push("  value={value}"),s.push("  onValueChange={setValue}"),s.push('  label="Risk Level"'),s.push("  isRequired={true}"),s.push('  caption="Setting above 80 may trigger alerts"'),s.push('  captionVariant="warning"'),s.push("/>"),s.push(""),s.push("// With Marks and Values"),s.push("<Ux4gSlider"),s.push("  value={value}"),s.push("  onValueChange={setValue}"),s.push('  label="Progress"'),s.push("  steps={4}"),s.push("  showMarksAndValues={true}"),s.push("  valueFormatter={(v) => `${v}%`}"),s.push("/>"),s.join(`
`)},[]),b=()=>{let s="";d==="slider-sizes"?s=`        <Ux4gSlider size="s" value={smallVal} onValueChange={setSmallVal} label="Small Size (thumb: 16, track: 4)" />
        <View style={{ height: 24 }} />
        <Ux4gSlider size="m" value={mediumVal} onValueChange={setMediumVal} label="Medium Size (thumb: 20, track: 6)" />`:d==="slider-steps"?s=`        <Ux4gSlider value={step4} onValueChange={setStep4} label="4 Steps (5 positions)" steps={4} />
        <View style={{ height: 24 }} />
        <Ux4gSlider value={step9} onValueChange={setStep9} label="9 Steps (10 positions)" steps={9} />`:d==="slider-custom-range"?s='        <Ux4gSlider value={priceVal} onValueChange={setPriceVal} label="Price Range" min={0} max={1000} steps={9} valueFormatter={(v) => `$${v}`} />':d==="slider-disabled"?s=`        <Ux4gSlider value={40} label="Disabled Slider" enabled={false} />
        <View style={{ height: 24 }} />
        <Ux4gSlider value={75} label="Disabled with Caption" enabled={false} caption="This slider is locked" />`:d==="slider-formatter"?s=`        <Ux4gSlider 
          value={tempVal} 
          onValueChange={setTempVal} 
          label="Temperature" 
          min={0} 
          max={40} 
          steps={7}
          showMarksAndValues={true}
          valueFormatter={(v) => \`\${v}°C\`} 
        />
        <View style={{ height: 32 }} />
        <Ux4gSlider 
          value={percentVal} 
          onValueChange={setPercentVal} 
          label="Progress" 
          showValueLabels={true}
          startValueText="0%"
          endValueText="100%"
        />`:s=`        <Ux4gSlider 
          value={basicVal} 
          onValueChange={setBasicVal} 
          label="Basic Slider" 
        />
        
        <View style={{ height: 24 }} />
        
        <Ux4gSlider 
          value={errorVal} 
          onValueChange={setErrorVal} 
          label="Error Caption" 
          isRequired={true}
          caption="Value must be above 50"
          captionVariant="error"
        />

        <View style={{ height: 24 }} />
        
        <Ux4gSlider 
          value={marksVal} 
          onValueChange={setMarksVal} 
          label="With Marks & Values" 
          steps={4}
          showMarksAndValues={true}
        />`;const w=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSlider, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [basicVal, setBasicVal] = useState(50);
  const [errorVal, setErrorVal] = useState(20);
  const [marksVal, setMarksVal] = useState(50);
  const [smallVal, setSmallVal] = useState(30);
  const [mediumVal, setMediumVal] = useState(60);
  const [step4, setStep4] = useState(50);
  const [step9, setStep9] = useState(75);
  const [priceVal, setPriceVal] = useState(500);
  const [tempVal, setTempVal] = useState(22);
  const [percentVal, setPercentVal] = useState(65);

  return (
    <Ux4gThemeProvider isDark={${i}}>
      <View style={styles.container}>
${s}
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${i?"dark":"light"}&name=Ux4gSlider%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@latest,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},x=[{name:"value",type:"number",default:"required",desc:"Current value of the slider (controlled component).",required:!0},{name:"onValueChange",type:"(value: number) => void",default:"undefined",desc:"Callback fired when the value changes.",required:!1},{name:"min",type:"number",default:"0",desc:"Minimum value of the slider.",required:!1},{name:"max",type:"number",default:"100",desc:"Maximum value of the slider.",required:!1},{name:"steps",type:"number",default:"undefined",desc:"Number of discrete steps (divisions). Creates (steps + 2) snap positions.",required:!1},{name:"size",type:"'s' | 'm' | 'small' | 'medium'",default:"'small'",desc:"Size of the slider (small: thumb 16, track 4; medium: thumb 20, track 6).",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the slider is interactive.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Label text displayed above the slider.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Whether to show a required asterisk (*) next to the label.",required:!1},{name:"labelIcon",type:"ReactNode",default:"undefined",desc:"Icon element rendered next to the label text.",required:!1},{name:"startValueText",type:"string",default:"undefined",desc:"Custom text for the start value label (overrides formatted min).",required:!1},{name:"endValueText",type:"string",default:"undefined",desc:"Custom text for the end value label (overrides formatted max).",required:!1},{name:"caption",type:"string",default:"undefined",desc:"Caption text displayed below the slider.",required:!1},{name:"captionVariant",type:"'helper' | 'error' | 'warning' | 'success'",default:"'helper'",desc:"Semantic variant for the caption (affects color and icon).",required:!1},{name:"showMarksAndValues",type:"boolean",default:"false",desc:"Whether to show tick marks and value labels at each step.",required:!1},{name:"showIndicator",type:"boolean",default:"false",desc:"Whether to show a value indicator tooltip on drag (Flutter feature).",required:!1},{name:"showInputFields",type:"boolean",default:"false",desc:"Whether to show editable input fields for current/max values.",required:!1},{name:"showValueLabels",type:"boolean",default:"false",desc:"Whether to show formatted value labels (start/end) above the slider.",required:!1},{name:"valueFormatter",type:"(value: number) => string",default:"_formatValue",desc:"Custom formatter for value display (default: integer or 1 decimal).",required:!1},{name:"rightLabelElement",type:"ReactNode",default:"undefined",desc:"Custom right-aligned element displayed next to the label.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for the container.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom style for the label text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test ID for testing.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Slider"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Complete React Native port of Flutter `slider.dart`, matching all props, visual behavior, and features including caption variants, marks, input fields, and value labels."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${c==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${c==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${c==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[c==="preview"&&t.jsx(J,{isDark:i,children:t.jsx("div",{className:`wb-preview-area ${i?"dark":""}`,children:b()})}),c==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:f,language:"TSX",filename:"SliderExample.tsx"})}),c==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[s.name,s.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:s.type})}),t.jsx("td",{children:s.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:s.default})})]},s.name))})]})})]})]})})]})},$a=["50","100","200","300","400","500","600","700","800","900","950"],Lr=i=>K[i]??"#000000",Ke=i=>[{token:i,color:Lr(i),label:`${i} ★`,main:!0},...$a.map(d=>({token:`${i}-${d}`,color:Lr(`${i}${d}`),label:d}))],Li=i=>$a.map(d=>({token:`${i}-${d}A`,color:Lr(`${i}${d}A`),label:`${d}A`})),Xh=[{token:"neutral-0",color:K.neutral0,label:"0 (white)"},...$a.map(i=>({token:`neutral-${i}`,color:Lr(`neutral${i}`),label:i})),{token:"neutral-1000black",color:K.neutral1000black,label:"1000 (black)"}],Hh=[{token:"neutral-0A",color:K.neutral0A,label:"0A"},...$a.map(i=>({token:`neutral-${i}A`,color:Lr(`neutral${i}A`),label:`${i}A`})),{token:"neutral-1000A",color:K.neutral1000A,label:"1000A"}],Gh=[{token:"neutral-0B",color:K.neutral0B,label:"0B"},{token:"neutral-950B",color:K.neutral950B,label:"950B"}],Qh=["gray100","gray200","gray800","gray900"].map(i=>({token:i,color:Lr(i),label:`gray-${i.replace("gray","")}`})),Yh=[{token:"white",color:K.white,label:"white"},{token:"transparent",color:K.transparent,label:"transparent"}],Kh={primary:{header:{title:"UX4GColors Tokens",subtitle:"UX4GColors.* (Ux4gPalette is a deprecated alias)"},groups:[{label:"Primary Solid Scale",swatches:Ke("primary")},{label:"Primary Alpha Scale (25% Opacity)",swatches:Li("primary")}]},secondary:{groups:[{label:"Secondary Solid Scale",swatches:Ke("secondary")},{label:"Secondary Alpha Scale (25% Opacity)",swatches:Li("secondary")}]},tertiary:{groups:[{label:"Tertiary Solid Scale",swatches:Ke("tertiary")},{label:"Tertiary Alpha Scale (25% Opacity)",swatches:Li("tertiary")}]},red:{groups:[{label:"Red (Error)",swatches:Ke("red")}]},orange:{groups:[{label:"Orange (Warning)",swatches:Ke("orange")}]},yellow:{groups:[{label:"Yellow",swatches:Ke("yellow")}]},gold:{groups:[{label:"Gold",swatches:Ke("gold")}]},green:{groups:[{label:"Green (Success)",swatches:Ke("green")}]},lime:{groups:[{label:"Lime",swatches:Ke("lime")}]},blue:{groups:[{label:"Blue (Info)",swatches:Ke("blue")}]},skyblue:{groups:[{label:"Sky Blue",swatches:Ke("skyBlue")}]},cyan:{groups:[{label:"Cyan",swatches:Ke("cyan")}]},purple:{groups:[{label:"Purple",swatches:Ke("purple")}]},pink:{groups:[{label:"Pink",swatches:Ke("pink")}]},neutral:{groups:[{label:"Neutral Solid Scale",swatches:Xh},{label:"Neutral Alpha Scale (25% Opacity)",swatches:Hh},{label:"Neutral Beta Scale (70% Opacity)",swatches:Gh},{label:"Legacy Gray Aliases",swatches:Qh},{label:"Common Colors",swatches:Yh}]}},Jh=[{base:"primary",on:"onPrimary"},{base:"secondary",on:"onSecondary"},{base:"background",on:"onBackground"},{base:"surface",on:"onSurface"},{base:"error",on:"onError"},{base:"success",on:"onSuccess"},{base:"warning",on:"onWarning"},{base:"info",on:"onInfo"}],gd=i=>/^#/.test(i)?i.toUpperCase():i,Zh=i=>{const d=i.match(/^#([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/);if(!d)return 1;const c=parseInt(d[1].slice(0,2),16),m=parseInt(d[1].slice(2,4),16),f=parseInt(d[1].slice(4,6),16);return(c*.299+m*.587+f*.114)/255},xd=i=>Zh(i)<.5,ef=({swatch:i,isDark:d})=>{const[c,m]=T.useState(null),f=gd(i.color),b=`UX4GColors.${i.token.replace(/-/g,"")}`,x=xd(i.color),s=x?"#FFFFFF":"#000000",w=T.useCallback(async(B,I)=>{try{await navigator.clipboard.writeText(B)}catch{}m(I),setTimeout(()=>m(null),1500)},[]),p=c==="card",N=c==="top",A=c==="code";return t.jsxs("div",{className:`swatch-tile ${i.main?"main":""}`,children:[t.jsxs("div",{className:"swatch-color",style:{background:i.color},onClick:()=>w(f,"card"),title:`Tap to copy ${f}`,children:[p&&t.jsx("span",{className:"material-symbols-outlined swatch-copied-check",style:{color:s},children:"check"}),t.jsx("button",{className:"swatch-copy-btn",style:{color:x?"#FFFFFF":"#111827",background:x?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.08)"},onClick:B=>{B.stopPropagation(),w(f,"top")},title:N?"Copied!":`Copy Hex Code (${f})`,children:t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13},children:N?"check":"content_copy"})})]}),t.jsxs("div",{className:"swatch-info",children:[t.jsxs("div",{className:"swatch-meta",children:[t.jsx("span",{className:"swatch-label",title:i.label,children:i.label}),t.jsx("span",{className:"swatch-hex",children:f})]}),t.jsxs("div",{className:"swatch-code",children:[t.jsx("span",{className:"swatch-code-text",title:b,children:b}),t.jsx("button",{className:"swatch-mini-copy",onClick:()=>w(b,"code"),title:A?"Copied!":`Copy Code (${b})`,children:t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13},children:A?"check":"content_copy"})})]})]})]})},tf=({group:i,isDark:d,pad:c=!0})=>t.jsxs("div",{className:"palette-view",children:[t.jsx("div",{className:"palette-label",children:i.label}),t.jsx("div",{className:"palette-grid",children:i.swatches.map(m=>t.jsx(ef,{swatch:m,isDark:d},m.token))})]}),rd=({token:i,color:d})=>{const[c,m]=T.useState(null),f=gd(d),b=`useUx4gTheme().colors.${i}`,x=xd(d),s=x?"#FFFFFF":"#111827",w=T.useCallback(async(A,B)=>{try{await navigator.clipboard.writeText(A)}catch{}m(B),setTimeout(()=>m(null),1500)},[]),p=c==="card",N=c==="code";return t.jsxs("div",{className:"semantic-tile",style:{background:d},onClick:()=>w(f,"card"),title:`Tap to copy ${f}`,children:[t.jsx("button",{className:"swatch-copy-btn",style:{color:x?"#FFFFFF":"#111827",background:x?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.08)"},onClick:A=>{A.stopPropagation(),w(b,"code")},title:N?"Copied!":`Copy Code (${b})`,children:t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13},children:N?"check":"content_copy"})}),t.jsxs("div",{className:"semantic-tile-body",style:{color:s},children:[t.jsxs("div",{className:"semantic-tile-token",children:[t.jsxs("span",{className:"semantic-tile-token-text",children:["colors.",i]}),p&&t.jsx("span",{className:"material-symbols-outlined semantic-tile-check",style:{fontSize:14},children:"check"})]}),t.jsx("div",{className:"semantic-tile-hex",children:f})]})]})},rf=({isDark:i})=>{const c=i?ld:_i;return t.jsxs("div",{className:"semantic-section",children:[t.jsx("h2",{className:"semantic-title",children:"Semantic Color Tokens"}),t.jsx("p",{className:"semantic-description",children:"Theme-aware colors from useUx4gTheme().colors — automatically adapt between Light and Dark themes. Use the theme toggle in the sidebar to see the change."}),t.jsx("div",{className:"semantic-note",children:t.jsx("pre",{children:`const { colors } = useUx4gTheme();
// Use: colors.primary  colors.onPrimary  colors.surface …`})}),t.jsx("div",{className:"semantic-pairs",children:Jh.map(m=>t.jsxs("div",{className:"semantic-pair-row",children:[t.jsx(rd,{token:m.base,color:c[m.base]}),t.jsx(rd,{token:m.on,color:c[m.on]})]},m.base))})]})},nf=({isDark:i,section:d="primary"})=>{const c=d==="semantic"?void 0:d,m=c?Kh[c]:void 0;return t.jsxs("div",{className:"doc-container",children:[t.jsxs("div",{className:"doc-header",children:[t.jsxs("div",{className:"doc-breadcrumb",children:[t.jsx("a",{href:"#",onClick:f=>{f.preventDefault()},children:"Token"})," ","/ Colors"]}),t.jsx("h1",{className:"doc-title",children:"Colors"}),t.jsx("p",{className:"doc-description",children:"Fixed color palette tokens from UX4GColors.* plus theme-aware semantic tokens from useUx4gTheme().colors. Click any swatch to copy its hex value."})]}),m?t.jsxs(t.Fragment,{children:[m.header&&t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:m.header.title}),t.jsx("div",{className:"palette-section-subtitle",children:m.header.subtitle})]}),m.groups.map(f=>t.jsx(tf,{group:f,isDark:i},f.label))]}):t.jsx(rf,{isDark:i})]})},af=i=>{switch(i){case"400":return"400 (Regular)";case"500":return"500 (Medium)";case"600":return"600 (SemiBold)";case"700":return"700 (Bold)";default:return i}},sf=[{tokenName:"hXXS_default",label:"Header XXS (Default)",style:G.hXXS_default},{tokenName:"hXXS_strong",label:"Header XXS (Strong)",style:G.hXXS_strong},{tokenName:"hXS_default",label:"Header XS (Default)",style:G.hXS_default},{tokenName:"hXS_strong",label:"Header XS (Strong)",style:G.hXS_strong},{tokenName:"hS_default",label:"Header S (Default)",style:G.hS_default},{tokenName:"hS_strong",label:"Header S (Strong)",style:G.hS_strong},{tokenName:"hM_default",label:"Header M (Default)",style:G.hM_default},{tokenName:"hM_strong",label:"Header M (Strong)",style:G.hM_strong},{tokenName:"hL_default",label:"Header L (Default)",style:G.hL_default},{tokenName:"hL_strong",label:"Header L (Strong)",style:G.hL_strong},{tokenName:"hXL_default",label:"Header XL (Default)",style:G.hXL_default},{tokenName:"hXL_strong",label:"Header XL (Strong)",style:G.hXL_strong},{tokenName:"hXXL_default",label:"Header XXL (Default)",style:G.hXXL_default},{tokenName:"hXXL_strong",label:"Header XXL (Strong)",style:G.hXXL_strong}],lf=[{tokenName:"dXS_default",label:"Display XS (Default)",style:G.dXS_default},{tokenName:"dXS_strong",label:"Display XS (Strong)",style:G.dXS_strong},{tokenName:"dS_default",label:"Display S (Default)",style:G.dS_default},{tokenName:"dS_strong",label:"Display S (Strong)",style:G.dS_strong},{tokenName:"dM_default",label:"Display M (Default)",style:G.dM_default},{tokenName:"dM_strong",label:"Display M (Strong)",style:G.dM_strong},{tokenName:"dL_default",label:"Display L (Default)",style:G.dL_default},{tokenName:"dL_strong",label:"Display L (Strong)",style:G.dL_strong}],of=[{tokenName:"bXS_default",label:"Body XS (Default)",style:G.bXS_default},{tokenName:"bXS_strong",label:"Body XS (Strong)",style:G.bXS_strong},{tokenName:"bS_default",label:"Body S (Default)",style:G.bS_default},{tokenName:"bS_strong",label:"Body S (Strong)",style:G.bS_strong},{tokenName:"bM_default",label:"Body M (Default)",style:G.bM_default},{tokenName:"bM_strong",label:"Body M (Strong)",style:G.bM_strong},{tokenName:"bL_default",label:"Body L (Default)",style:G.bL_default},{tokenName:"bL_strong",label:"Body L (Strong)",style:G.bL_strong}],cf=[{tokenName:"lS_default",label:"Label S (Default)",style:G.lS_default},{tokenName:"lS_strong",label:"Label S (Strong)",style:G.lS_strong},{tokenName:"lM_default",label:"Label M (Default)",style:G.lM_default},{tokenName:"lM_strong",label:"Label M (Strong)",style:G.lM_strong},{tokenName:"lL_default",label:"Label L (Default)",style:G.lL_default},{tokenName:"lL_strong",label:"Label L (Strong)",style:G.lL_strong},{tokenName:"lXL_default",label:"Label XL (Default)",style:G.lXL_default},{tokenName:"lXL_strong",label:"Label XL (Strong)",style:G.lXL_strong}],df=[{tokenName:"tS_default",label:"Title S (Default)",style:G.tS_default},{tokenName:"tS_strong",label:"Title S (Strong)",style:G.tS_strong},{tokenName:"tM_default",label:"Title M (Default)",style:G.tM_default},{tokenName:"tM_strong",label:"Title M (Strong)",style:G.tM_strong},{tokenName:"tL_default",label:"Title L (Default)",style:G.tL_default},{tokenName:"tL_strong",label:"Title L (Strong)",style:G.tL_strong}],uf={header:{title:"Header Tokens",tokenPrefix:"useUx4gTheme().typography.h*",items:sf},display:{title:"Display Tokens",tokenPrefix:"useUx4gTheme().typography.d*",items:lf},body:{title:"Body Tokens",tokenPrefix:"useUx4gTheme().typography.b*",items:of},label:{title:"Label Tokens",tokenPrefix:"useUx4gTheme().typography.l*",items:cf},title:{title:"Title Tokens",tokenPrefix:"useUx4gTheme().typography.t*",items:df}},pf=({item:i})=>{const[d,c]=T.useState(!1),m=`useUx4gTheme().typography.${i.tokenName}`,f=T.useCallback(async()=>{try{await navigator.clipboard.writeText(m)}catch{}c(!0),setTimeout(()=>c(!1),1500)},[m]);return t.jsxs("div",{className:"typography-card",children:[t.jsxs("div",{className:"typography-card-header",children:[t.jsx("span",{className:"typography-card-title",children:i.label}),t.jsxs("span",{className:"typography-pill",children:["Size: ",i.style.fontSize,"px"]}),t.jsxs("span",{className:"typography-pill",children:["Weight: ",af(i.style.fontWeight)]}),t.jsxs("span",{className:"typography-pill",children:["Line height: ",i.style.lineHeight,"px"]})]}),t.jsxs("div",{className:"typography-code-row",children:[t.jsx("span",{className:"typography-code-text",title:m,children:m}),t.jsx("button",{className:"swatch-mini-copy",onClick:f,title:d?"Copied!":`Copy Code (${m})`,children:t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13},children:d?"check":"content_copy"})})]})]})},mf=()=>t.jsxs("div",{className:"typography-usage-section",children:[t.jsx("h2",{className:"semantic-title",children:"Using UX4G Typography"}),t.jsxs("p",{className:"semantic-description",children:["All text styles in UX4G are structured under ",t.jsx("code",{children:"Ux4gTypography"})," and are accessible through the theme hook ",t.jsx("code",{children:"useUx4gTheme().typography"}),". Every scale has both"," ",t.jsx("code",{children:"default"})," (standard weight) and ",t.jsx("code",{children:"strong"})," (bold/semibold weight) variations."]}),t.jsx(Q,{language:"TSX",filename:"Basic Usage Example",code:`import React from 'react';
import { Text, View } from 'react-native';
import { useUx4gTheme } from 'ux4g-react-native-design-system';

export const PortalHeader = () => {
  const { typography, colors } = useUx4gTheme();

  return (
    <View>
      <Text style={[typography.hL_strong, { color: colors.onSurface }]}>
        Government Service Portal
      </Text>
      <Text style={[typography.bM_default, { color: colors.onSurface, marginTop: 8 }]}>
        Please review the eligibility criteria carefully before applying.
      </Text>
    </View>
  );
};`}),t.jsx("div",{style:{marginTop:24},children:t.jsx(Q,{language:"TSX",filename:"Customizing Styles with Arrays",code:`// You can customize color, alignment, or letterSpacing by combining style objects:
<Text
  style={[
    typography.lS_strong,
    {
      color: colors.error,
      letterSpacing: 0.5,
    },
  ]}
>
  Required field *
</Text>`})})]}),hf=({section:i="header"})=>{const d=i==="usage",c=d?void 0:uf[i];return t.jsxs("div",{className:"doc-container",children:[t.jsxs("div",{className:"doc-header",children:[t.jsxs("div",{className:"doc-breadcrumb",children:[t.jsx("a",{href:"#",onClick:m=>{m.preventDefault()},children:"Token"})," ","/ Typography"]}),t.jsx("h1",{className:"doc-title",children:"Typography"}),t.jsx("p",{className:"doc-description",children:"Responsive typography scale tokens for UX4G design system. Includes Header, Display, Body, Label, and Title styles with default and strong weights."})]}),d?t.jsx(mf,{}):c&&t.jsxs("div",{className:"typography-category-section",children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:c.title}),t.jsx("div",{className:"palette-section-subtitle",children:c.tokenPrefix})]}),c.items.map(m=>t.jsx(pf,{item:m},m.tokenName))]})]})},nd=[{level:0,name:"flat",tokenName:"shadow0",title:"Flat Surfaces",details:"No shadow",cssBoxShadow:"none",cssBoxShadowDark:"none"},{level:1,name:"subtle",tokenName:"shadow1",title:"Subtle Lift",details:`Key 0,1 · blur 2
Ambient 0,1 · blur 2`,cssBoxShadow:"0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.04)",cssBoxShadowDark:"0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15)"},{level:2,name:"floating",tokenName:"shadow2",title:"Floating Content",details:`Key 0,1 · blur 2
Ambient 0,4 · blur 8`,cssBoxShadow:"0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.08)",cssBoxShadowDark:"0 1px 2px rgba(0, 0, 0, 0.24), 0 4px 8px rgba(0, 0, 0, 0.3)"},{level:3,name:"prominent",tokenName:"shadow3",title:"Prominent overlay",details:`Key 0,4 · blur 8
Ambient 0,0 · blur 16`,cssBoxShadow:"0 4px 8px rgba(0, 0, 0, 0.08), 0 0 16px rgba(0, 0, 0, 0.1)",cssBoxShadowDark:"0 4px 8px rgba(0, 0, 0, 0.3), 0 0 16px rgba(0, 0, 0, 0.4)"},{level:4,name:"highest",tokenName:"shadow4",title:"Highest emphasis",details:`Key 0,8 · blur 16
Ambient 0,16 · blur 32`,cssBoxShadow:"0 8px 16px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.15)",cssBoxShadowDark:"0 8px 16px rgba(0, 0, 0, 0.4), 0 16px 32px rgba(0, 0, 0, 0.5)"}],ff=({item:i,isDark:d})=>t.jsxs("div",{className:"shadow-card-wrapper",children:[t.jsxs("div",{className:`shadow-card-box ${i.level===0?"level-0":""}`,style:{boxShadow:d?i.cssBoxShadowDark:i.cssBoxShadow},children:["Shadow ",i.level]}),t.jsx("div",{className:"shadow-card-title",children:i.title}),t.jsx("div",{className:"shadow-card-details",children:i.details})]}),gf=({item:i})=>{const[d,c]=T.useState(!1),m=`Ux4gShadow.${i.tokenName}`,f=T.useCallback(async()=>{try{await navigator.clipboard.writeText(m)}catch{}c(!0),setTimeout(()=>c(!1),1500)},[m]);return t.jsxs("div",{className:"shadow-code-card",children:[t.jsxs("div",{className:"shadow-code-header",children:[t.jsxs("span",{className:"shadow-code-pill",children:["Shadow ",i.level]}),t.jsx("span",{className:"shadow-code-title",children:i.title})]}),t.jsx("div",{className:"shadow-code-description",children:i.details.replace(/\n/g," • ")}),t.jsxs("div",{className:"shadow-code-box",children:[t.jsx("span",{className:"shadow-code-snippet",children:m}),t.jsxs("button",{className:"shadow-copy-btn",onClick:f,children:[t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13,marginRight:4},children:d?"check":"content_copy"}),d?"Copied!":"Copy"]})]})]})},xf=()=>t.jsxs("div",{className:"typography-usage-section",children:[t.jsx("h2",{className:"semantic-title",children:"Using UX4G Shadows"}),t.jsxs("p",{className:"semantic-description",children:["UX4G provides five reusable shadow levels (",t.jsx("code",{children:"shadow0"})," to ",t.jsx("code",{children:"shadow4"}),") to express depth, elevation, and hierarchy. Always apply predefined shadow tokens rather than setting custom shadow offsets manually."]}),t.jsx(Q,{language:"TSX",filename:"React Native — Shadow Usage",code:`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gShadow, useUx4gTheme } from 'ux4g-react-native-design-system';

export const FloatingCard = () => {
  const { colors } = useUx4gTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <Text style={{ color: colors.onSurface }}>Elevated Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    // Apply Shadow 2 (Floating Content)
    ...Ux4gShadow.shadow2,
  },
});`})]}),yf=({isDark:i,section:d="scale"})=>{const c=d==="usage";return t.jsxs("div",{className:"doc-container",children:[t.jsxs("div",{className:"doc-header",children:[t.jsxs("div",{className:"doc-breadcrumb",children:[t.jsx("a",{href:"#",onClick:m=>{m.preventDefault()},children:"Token"})," ","/ Shadow"]}),t.jsx("h1",{className:"doc-title",children:"Shadow"}),t.jsx("p",{className:"doc-description",children:"Five reusable shadow styles. Each combines a key and an ambient shadow to express depth. Apply the matching effect style from UX4G Design System — never hand-set shadow values."})]}),c?t.jsx(xf,{}):t.jsxs("div",{className:"shadow-scale-section",children:[t.jsx("div",{className:"shadow-cards-row",children:nd.map(m=>t.jsx(ff,{item:m,isDark:i},m.tokenName))}),t.jsxs("div",{style:{marginTop:48},children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:"Shadow Tokens & Code Snippets"}),t.jsx("div",{className:"palette-section-subtitle",children:"Ux4gShadow.*"})]}),t.jsx("div",{className:"shadow-code-rows-container",children:nd.map(m=>t.jsx(gf,{item:m},m.tokenName))})]})]})]})},bf=({token:i,value:d})=>t.jsxs("div",{className:"dimensions-spacing-row",children:[t.jsxs("div",{className:"dimensions-spacing-token",children:["Ux4gSpace.",i]}),t.jsx("div",{className:"dimensions-spacing-bar",style:{width:`${d===0?2:Math.min(Math.max(d,2),320)}px`}}),t.jsxs("div",{className:"dimensions-spacing-val",children:[d,"px"]})]}),vf=({token:i,value:d})=>{const c=Math.min(Math.max(d,0),36);return t.jsxs("div",{className:"dimensions-radius-item",children:[t.jsx("div",{className:"dimensions-radius-box",style:{borderRadius:d===999?"999px":`${c}px`}}),t.jsx("div",{className:"dimensions-radius-token",children:i}),t.jsxs("div",{className:"dimensions-radius-val",children:[d,"px"]})]})},wf=({token:i,value:d})=>t.jsxs("div",{className:"dimensions-border-row",children:[t.jsxs("div",{className:"dimensions-border-token",children:["Ux4gBorderWidth.",i]}),t.jsx("div",{className:"dimensions-border-line",style:{height:`${d===0?1:d}px`}}),t.jsx("div",{className:"dimensions-border-val",children:d===0?"none":`${d}px`})]}),Sf=()=>t.jsxs("div",{className:"typography-usage-section",children:[t.jsx("h2",{className:"semantic-title",children:"Using UX4G Dimensions"}),t.jsx("p",{className:"semantic-description",children:"Ux4gSpace provides a fixed scale of spacing constants used for padding, margins, gaps, and component dimensions. Always prefer these over raw numeric literals so your layout stays aligned with the rest of the design system."}),t.jsx(Q,{language:"TSX",filename:"React Native — Ux4gSpace & Ux4gRadius",code:`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gSpace, Ux4gRadius, Ux4gBorderWidth, useUx4gTheme } from 'ux4g-react-native-design-system';

export const MyCard = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useUx4gTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.outline,
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: Ux4gSpace.space16,
    borderRadius: Ux4gRadius.radius12,
    borderWidth: Ux4gBorderWidth.thin,
  },
});`})]}),Cf=({section:i="spacing"})=>{const d=i==="usage";return t.jsxs("div",{className:"doc-container",children:[t.jsxs("div",{className:"doc-header",children:[t.jsxs("div",{className:"doc-breadcrumb",children:[t.jsx("a",{href:"#",onClick:c=>{c.preventDefault()},children:"Token"})," ","/ Dimensions"]}),t.jsx("h1",{className:"doc-title",children:"Dimensions"}),t.jsx("p",{className:"doc-description",children:"Fixed scales for Spacing, Border Radius, and Border Width tokens across the UX4G design system."})]}),d?t.jsx(Sf,{}):i==="radius"?t.jsxs("div",{className:"dimensions-section",children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:"Border Radius Tokens"}),t.jsx("div",{className:"palette-section-subtitle",children:"Ux4gRadius.*"})]}),t.jsx("div",{className:"dimensions-radius-wrap",children:Object.entries(Xi).map(([c,m])=>t.jsx(vf,{token:c,value:m},c))})]}):i==="border"?t.jsxs("div",{className:"dimensions-section",children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:"Border Width Tokens"}),t.jsx("div",{className:"palette-section-subtitle",children:"Ux4gBorderWidth.*"})]}),t.jsx("div",{className:"dimensions-border-rows-list",children:Object.entries(Hi).map(([c,m])=>t.jsx(wf,{token:c,value:m},c))})]}):t.jsxs("div",{className:"dimensions-section",children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:"Spacing Tokens"}),t.jsx("div",{className:"palette-section-subtitle",children:"Ux4gSpace.*"})]}),t.jsx("div",{className:"dimensions-spacing-rows-list",children:Object.entries(Oi).map(([c,m])=>t.jsx(bf,{token:c,value:m},c))})]})]})},yd={introduction:"introduction",quickstart:"quickstart","colors-primary":"token/colors/primary","colors-secondary":"token/colors/secondary","colors-tertiary":"token/colors/tertiary","colors-red":"token/colors/red","colors-orange":"token/colors/orange","colors-yellow":"token/colors/yellow","colors-gold":"token/colors/gold","colors-green":"token/colors/green","colors-lime":"token/colors/lime","colors-blue":"token/colors/blue","colors-skyblue":"token/colors/skyblue","colors-cyan":"token/colors/cyan","colors-purple":"token/colors/purple","colors-pink":"token/colors/pink","colors-neutral":"token/colors/neutral","colors-semantic":"token/colors/semantic",typography:"token/typography/header","typography-header":"token/typography/header","typography-display":"token/typography/display","typography-body":"token/typography/body","typography-label":"token/typography/label","typography-title":"token/typography/title","typography-usage":"token/typography/usage",shadow:"token/shadow/scale","shadow-scale":"token/shadow/scale","shadow-usage":"token/shadow/usage",dimensions:"token/dimensions/spacing","dimensions-spacing":"token/dimensions/spacing","dimensions-radius":"token/dimensions/radius","dimensions-border":"token/dimensions/border","dimensions-usage":"token/dimensions/usage",spacing:"token/dimensions/spacing",radius:"token/dimensions/radius",button:"components/button","input-field":"components/input-field","input-basic":"components/input-field/basic","input-status":"components/input-field/status","input-password":"components/input-field/password","input-icons":"components/input-field/icons","input-aadhaar-basic":"components/input-aadhaar/basic","input-aadhaar-varients":"components/input-aadhaar/varients","input-aadhaar":"components/input-aadhaar/basic","input-pan-basic":"components/input-pan/basic","input-pan-varients":"components/input-pan/varients","input-pan":"components/input-pan/basic","input-otp-basic":"components/input-otp/basic","input-otp-varients":"components/input-otp/varients","input-otp":"components/input-otp/basic","input-prefix-postfix":"components/input-field/prefix-postfix","input-required-disabled":"components/input-field/required-disabled",checkbox:"components/checkbox","radio-button":"components/radio-button/basic",radio:"components/radio-button/basic","radio-basic":"components/radio-button/basic","radio-sizes":"components/radio-button/sizes","radio-status":"components/radio-button/status","result-list":"components/result-list/basic",result:"components/result-list/basic","result-list-basic":"components/result-list/basic","result-list-metadata":"components/result-list/metadata","result-list-expanded":"components/result-list/expanded","result-list-rejected":"components/result-list/rejected","search-field":"components/search-field/basic",search:"components/search-field/basic","search-basic":"components/search-field/basic","search-submit":"components/search-field/submit","search-autocomplete":"components/search-field/autocomplete","search-status":"components/search-field/status",switch:"components/switch","switch-basic":"components/switch/basic","switch-labels":"components/switch/labels","switch-status":"components/switch/status","switch-required":"components/switch/required","switch-disabled":"components/switch/disabled",card:"components/card","card-basic":"components/card/basic","card-actions":"components/card/actions","card-horizontal":"components/card/horizontal","card-media":"components/card/media","card-rich":"components/card/rich","card-rich-horizontal":"components/card/rich-horizontal",carousel:"components/carousel","carousel-intro":"components/carousel/introduction","carousel-rich-hero":"components/carousel/rich-hero","carousel-image":"components/carousel/image","journey-timeline-basic":"components/journey-timeline/basic","journey-timeline-horizontal":"components/journey-timeline/horizontal","journey-timeline-custom":"components/journey-timeline/custom","journey-timeline":"components/journey-timeline/basic","status-pipeline-vertical":"components/status-pipeline/vertical/basic","status-pipeline-vertical-states":"components/status-pipeline/vertical/states","status-pipeline-vertical-sizes":"components/status-pipeline/vertical/sizes","status-pipeline-vertical-colors":"components/status-pipeline/vertical/colors","status-pipeline-vertical-labels":"components/status-pipeline/vertical/labels","status-pipeline-vertical-nolabels":"components/status-pipeline/vertical/nolabels","status-pipeline-horizontal":"components/status-pipeline/horizontal/basic","status-pipeline-horizontal-states":"components/status-pipeline/horizontal/states","status-pipeline-horizontal-sizes":"components/status-pipeline/horizontal/sizes","status-pipeline-horizontal-colors":"components/status-pipeline/horizontal/colors","status-pipeline-horizontal-labels":"components/status-pipeline/horizontal/labels","status-pipeline-horizontal-nolabels":"components/status-pipeline/horizontal/nolabels","status-pipeline-sizes":"components/status-pipeline/vertical/sizes","status-pipeline":"components/status-pipeline/vertical/basic","tag-basic":"components/tag/basic","tag-shapes":"components/tag/shapes","tag-styles":"components/tag/styles","tag-colors":"components/tag/colors","tag-leading":"components/tag/leading","tag-dismissable":"components/tag/dismissable","tag-pill":"components/tag/pill",tag:"components/tag/basic","textarea-basic":"components/text-area/basic","textarea-label":"components/text-area/label","textarea-status":"components/text-area/status","textarea-count":"components/text-area/count","textarea-disabled":"components/text-area/disabled",textarea:"components/text-area/basic","text-area":"components/text-area/basic","timepicker-basic":"components/time-picker/basic","timepicker-label":"components/time-picker/label","timepicker-status":"components/time-picker/status","timepicker-interval":"components/time-picker/interval","timepicker-initial":"components/time-picker/initial","timepicker-disabled":"components/time-picker/disabled",timepicker:"components/time-picker/basic","time-picker":"components/time-picker/basic","timeslot-introduction":"components/time-slot/introduction","timeslot-basic":"components/time-slot/basic","timeslot-compact":"components/time-slot/compact","timeslot-json":"components/time-slot/json",timeslot:"components/time-slot/introduction","time-slot":"components/time-slot/introduction","toast-basic":"components/toast/basic","toast-stacked":"components/toast/stacked","toast-actions":"components/toast/actions","toast-custom":"components/toast/custom","toast-provider":"components/toast/provider",toast:"components/toast/basic","stepper-horizontal":"components/stepper/horizontal","stepper-horizontal-dashed":"components/stepper/horizontal-dashed","stepper-vertical":"components/stepper/vertical","stepper-error":"components/stepper/error","stepper-bottom-lines":"components/stepper/bottom-lines","stepper-bottom-background":"components/stepper/bottom-background","stepper-edge-alignment":"components/stepper/edge-alignment","compact-stepper-linear":"components/compact-stepper/linear","compact-stepper-right-aligned":"components/compact-stepper/right-aligned","compact-stepper-centered":"components/compact-stepper/centered","compact-stepper-centered-between":"components/compact-stepper/centered-between","compact-stepper-split":"components/compact-stepper/split","link-basic":"components/link/basic","link-text":"components/link/text","link-custom-child":"components/link/custom-child",link:"components/link/basic","modal-full-preview":"components/modal/full-preview","modal-header-left":"components/modal/header-left","modal-header-centered":"components/modal/header-centered","pagination-default-arrows":"components/pagination/default-arrows","pagination-capsule-arrows":"components/pagination/capsule-arrows","pagination-capsule-dots":"components/pagination/capsule-dots","pagination-arrows-right":"components/pagination/arrows-right","pagination-dotted":"components/pagination/default-arrows",pagination:"components/pagination/default-arrows","progress-linear":"components/progress-indicator/linear","progress-circular":"components/progress-indicator/circular","progress-half-circle":"components/progress-indicator/half-circle","progress-animated":"components/progress-indicator/animated","progress-sla-circular":"components/progress-sla-indicator/circular","progress-sla-linear":"components/progress-sla-indicator/linear","progress-sla":"components/progress-sla-indicator/circular","progress-indicator":"components/progress-indicator/linear",progress:"components/progress-indicator/linear","progress-sla-indicator":"components/progress-sla-indicator/circular","popover-basic":"components/popover/basic","popover-rich":"components/popover/rich","popover-placements":"components/popover/placements","popover-custom-content":"components/popover/custom-content","popover-trigger":"components/popover/trigger",popover:"components/popover/basic","tooltip-introduction":"components/tooltip/introduction","tooltip-basic":"components/tooltip/basic","tooltip-interactive":"components/tooltip/interactive","tooltip-variants":"components/tooltip/variants","tooltip-rich":"components/tooltip/rich",tooltip:"components/tooltip/introduction",modal:"components/modal/full-preview",badge:"components/badge","badge-basic":"components/badge/basic","badge-count":"components/badge/count","badge-label":"components/badge/standalone","badge-standalone":"components/badge/standalone","badge-semantic":"components/badge/semantic","badge-overlay":"components/badge/overlay","empty-state-basic":"components/empty-state/basic","empty-state-variants":"components/empty-state/variants","empty-state-action":"components/empty-state/action","fileupload-basic":"components/fileupload/basic","fileupload-dashed":"components/fileupload/dashed","fileupload-preloaded":"components/fileupload/preloaded",feedbackformstar:"components/feedback/feedbackformstar",feedbackformcsat:"components/feedback/feedbackformcsat",feedbackformnps:"components/feedback/feedbackformnps",avatar:"components/avatar","avatar-basic":"components/avatar/basic","avatar-status":"components/avatar/status","avatar-profile":"components/avatar/profile","avatar-group":"components/avatar/group",forms:"patterns/forms",headers:"patterns/headers"},jf=Object.fromEntries(Object.entries(yd).map(([i,d])=>[d.toLowerCase(),i]));function kf(i){return yd[i]??i}function ad(i){const d=decodeURIComponent(i).replace(/^\/+|\/+$/g,"").toLowerCase();if(d.startsWith("components/switch")||d.startsWith("switch"))return d.includes("label")?"switch-labels":d.includes("status")?"switch-status":d.includes("required")?"switch-required":d.includes("disabled")?"switch-disabled":"switch-basic";if(d.startsWith("components/card")||d.startsWith("card"))return d.includes("actions")?"card-actions":d.includes("horizontal")&&d.includes("rich")?"card-rich-horizontal":d.includes("horizontal")?"card-horizontal":d.includes("media")?"card-media":d.includes("rich")||d.includes("full")?"card-rich":"card-basic";if(d.startsWith("components/badge")||d.startsWith("badge"))return d.includes("count")?"badge-count":d.includes("label")||d.includes("standalone")?"badge-standalone":d.includes("semantic")?"badge-semantic":d.includes("overlay")?"badge-overlay":"badge-basic";if(d.startsWith("components/avatar")||d.startsWith("avatar"))return d.includes("status")?"avatar-status":d.includes("profile")?"avatar-profile":d.includes("group")?"avatar-group":"avatar-basic";if(d.startsWith("components/empty-state")||d.startsWith("empty-state"))return d.includes("variants")?"empty-state-variants":d.includes("action")?"empty-state-action":"empty-state-basic";if(d.startsWith("components/fileupload")||d.startsWith("fileupload"))return d.includes("dashed")?"fileupload-dashed":d.includes("preloaded")?"fileupload-preloaded":"fileupload-basic";if(d.startsWith("components/input-aadhaar")||d.startsWith("input-aadhaar"))return d.includes("varients")?"input-aadhaar-varients":"input-aadhaar-basic";if(d.startsWith("components/input-pan")||d.startsWith("input-pan"))return d.includes("varients")?"input-pan-varients":"input-pan-basic";if(d.startsWith("components/input-otp")||d.startsWith("input-otp"))return d.includes("varients")?"input-otp-varients":"input-otp-basic";if(d.startsWith("components/input-field")||d.startsWith("input-field")||d.startsWith("input"))return d.includes("status")?"input-status":d.includes("password")?"input-password":d.includes("icons")?"input-icons":d.includes("prefix")||d.includes("postfix")?"input-prefix-postfix":d.includes("required")||d.includes("disabled")?"input-required-disabled":"input-basic";if(d.startsWith("components/feedback")||d.startsWith("feedback"))return d.includes("feedbackformcsat")||d.includes("csat")?"feedbackformcsat":d.includes("feedbackformnps")||d.includes("nps")?"feedbackformnps":"feedbackformstar";if(d.startsWith("components/button"))return d.includes("introduction")?"button-introduction":d.includes("variants")?"button-variants":d.includes("sizes")?"button-sizes":d.includes("icon-button")?"button-icon-button":d.includes("icons")?"button-icons":d.includes("states")?"button-states":d.includes("convenience")?"button-convenience":d.includes("showcase")?"button-showcase":"button-introduction";if(d.startsWith("components/date-picker"))return d.includes("range")?"date-picker-range":"date-picker-single";if(d.startsWith("components/carousel")||d.startsWith("carousel"))return d.includes("rich-hero")||d.includes("richhero")?"carousel-rich-hero":d.includes("image")?"carousel-image":"carousel-intro";if(d.startsWith("components/journey-timeline")||d.startsWith("journey-timeline"))return d.includes("horizontal")?"journey-timeline-horizontal":d.includes("custom")?"journey-timeline-custom":"journey-timeline-basic";if(d.startsWith("components/status-pipeline")||d.startsWith("status-pipeline")){const m=d.includes("/horizontal")||d.includes("horizontal")?"status-pipeline-horizontal":"status-pipeline-vertical";return d.includes("states")?`${m}-states`:d.includes("sizes")?`${m}-sizes`:d.includes("color")?`${m}-colors`:d.includes("label")||d.includes("nolabels")?`${m}-${d.includes("nolabels")?"nolabels":"labels"}`:m}return d.startsWith("components/tag")||d.startsWith("tag")?d.includes("shapes")?"tag-shapes":d.includes("styles")?"tag-styles":d.includes("colors")||d.includes("colours")?"tag-colors":d.includes("leading")?"tag-leading":d.includes("dismiss")?"tag-dismissable":d.includes("pill")?"tag-pill":"tag-basic":d.startsWith("components/text-area")||d.startsWith("text-area")||d.startsWith("textarea")?d.includes("label")?"textarea-label":d.includes("status")?"textarea-status":d.includes("count")?"textarea-count":d.includes("disabled")||d.includes("readonly")||d.includes("read-only")?"textarea-disabled":"textarea-basic":d.startsWith("components/time-slot")||d.startsWith("time-slot")||d.startsWith("timeslot")?d.includes("compact")?"timeslot-compact":d.includes("json")?"timeslot-json":d.includes("basic")?"timeslot-basic":"timeslot-introduction":d.startsWith("components/time-picker")||d.startsWith("time-picker")||d.startsWith("timepicker")?d.includes("label")?"timepicker-label":d.includes("status")?"timepicker-status":d.includes("interval")?"timepicker-interval":d.includes("initial")?"timepicker-initial":d.includes("disabled")?"timepicker-disabled":"timepicker-basic":d.startsWith("components/toast")||d.startsWith("toast")?d.includes("stacked")?"toast-stacked":d.includes("actions")?"toast-actions":d.includes("custom")?"toast-custom":d.includes("provider")?"toast-provider":"toast-basic":d.startsWith("components/stepper")||d.startsWith("stepper")?d.includes("dashed")?"stepper-horizontal-dashed":d.includes("vertical")?"stepper-vertical":d.includes("error")?"stepper-error":d.includes("bottom")?d.includes("background")?"stepper-bottom-background":"stepper-bottom-lines":d.includes("edge")?"stepper-edge-alignment":"stepper-horizontal":d.startsWith("components/compact-stepper")||d.startsWith("compact-stepper")?d.includes("right-aligned")||d.includes("rightaligned")?"compact-stepper-right-aligned":d.includes("centered-between")?"compact-stepper-centered-between":d.includes("centered")?"compact-stepper-centered":d.includes("split")?"compact-stepper-split":"compact-stepper-linear":d.startsWith("components/link")||d.startsWith("link")?d.includes("text")?"link-text":d.includes("custom")?"link-custom-child":"link-basic":d.startsWith("components/modal")||d.startsWith("modal")?d.includes("header-centered")?"modal-header-centered":d.includes("header-left")?"modal-header-left":"modal-full-preview":d.startsWith("components/pagination")||d.startsWith("pagination")?d.includes("capsule-arrows")?"pagination-capsule-arrows":d.includes("capsule-dots")?"pagination-capsule-dots":d.includes("arrows-right")?"pagination-arrows-right":"pagination-default-arrows":d.startsWith("components/radio-button")||d.startsWith("radio-button")||d.startsWith("radio")?d.includes("sizes")?"radio-sizes":d.includes("status")?"radio-status":"radio-basic":d.startsWith("components/result-list")||d.startsWith("result-list")||d.startsWith("result")?d.includes("metadata")?"result-list-metadata":d.includes("expanded")?"result-list-expanded":d.includes("rejected")?"result-list-rejected":"result-list-basic":d.startsWith("components/search-field")||d.startsWith("search-field")||d.startsWith("search")?d.includes("submit")?"search-submit":d.includes("autocomplete")?"search-autocomplete":d.includes("status")?"search-status":"search-basic":d.startsWith("components/progress-sla-indicator")||d.startsWith("progress-sla-indicator")||d.startsWith("progress-sla")?d.includes("linear")?"progress-sla-linear":"progress-sla-circular":d.startsWith("components/progress-indicator")||d.startsWith("progress-indicator")||d.startsWith("progress")?d.includes("circular")?"progress-circular":d.includes("half-circle")?"progress-half-circle":d.includes("animated")?"progress-animated":"progress-linear":d.startsWith("components/tooltip")||d.startsWith("tooltip")?d.includes("rich")?"tooltip-rich":d.includes("interactive")?"tooltip-interactive":d.includes("variants")||d.includes("variant")?"tooltip-variants":d.includes("basic")?"tooltip-basic":"tooltip-introduction":d.startsWith("components/popover")||d.startsWith("popover")?d.includes("rich")?"popover-rich":d.includes("placement")?"popover-placements":d.includes("custom")?"popover-custom-content":d.includes("trigger")?"popover-trigger":"popover-basic":jf[d]??"introduction"}function sd(){const i=window.location.hash;if(!i)return"introduction";const d=i.match(/#\/\?path=([^&]+)/);if(d&&d[1])return ad(d[1]);const c=i.match(/#\/(.+)/);return c&&c[1]?ad(c[1]):"introduction"}function Tf(i){const c=`#/?path=${kf(i)}`;window.location.hash!==c&&window.history.pushState(null,"",c)}const Nf=i=>{if(i==="introduction")return"Introduction";if(i==="quickstart")return"Quick Start Guide";if(i.startsWith("colors-")){const d=i.replace("colors-","");return`Token / Colors / ${d.charAt(0).toUpperCase()+d.slice(1)}`}return i.startsWith("typography")?"Token / Typography":i.startsWith("shadow")?"Token / Shadow":i.startsWith("dimensions")||["spacing","radius"].includes(i)?"Token / Dimensions":i.startsWith("button")?"Components / Buttons":i.startsWith("carousel")?"Components / Carousel":i.startsWith("journey-timeline")?"Components / Journey Timeline":i.startsWith("link")?"Components / Link":i.startsWith("modal")?"Components / Modal":i.startsWith("pagination")?"Components / Pagination":i.startsWith("progress-sla")?"Components / Progress SLA Indicator":i.startsWith("progress")?"Components / Progress Indicator":i.startsWith("popover")?"Components / Popover":i.startsWith("radio")?"Components / Radio Button":i.startsWith("result-list")?"Components / Result List":i.startsWith("search")?"Components / Search Field":i.startsWith("checkbox")?"Components / Checkbox":i.startsWith("chips")?"Components / Chips":i.startsWith("chip-group")?"Components / Chip Group":i.startsWith("divider")?"Components / Divider":i.startsWith("status-banner")?"Components / Status Banner":i.startsWith("status-pipeline")?"Components / Status Pipeline":i.startsWith("tooltip")?"Components / Tooltip":i.startsWith("timeslot")?"Components / Time Slot":i.startsWith("switch")?"Components / Switch":i.startsWith("toast")?"Components / Toast":i.startsWith("timepicker")?"Components / Time Picker":i.startsWith("textarea")?"Components / Text Area":i.startsWith("tag")?"Components / Tag":i.startsWith("stepper")?"Components / Stepper":i.startsWith("compact-stepper")?"Components / Compact Stepper":i.startsWith("input-aadhaar")?"Components / Input Aadhaar":i.startsWith("input-pan")?"Components / Input Pan":i.startsWith("input-otp")?"Components / Input Otp":i.startsWith("input")?"Components / Input Field":i.startsWith("fileupload")?"Components / FileUpload":i.startsWith("feedbackform")?"Components / Feedback":i.startsWith("empty-state")?"Components / Empty State":i.startsWith("slider")?"Components / Slider":i.startsWith("date-picker")?"Components / Date Picker":i.startsWith("avatar")?"Components / Avatar":"Documentation"},Uf=()=>{const[i,d]=T.useState("introduction"),[c,m]=T.useState(!1),[f,b]=T.useState(!1),x=()=>m(p=>!p),s=T.useCallback(p=>{d(p),Tf(p),b(!1)},[]);T.useEffect(()=>{const p=sd();d(p);const N=()=>{const A=sd();d(A)};return window.addEventListener("popstate",N),window.addEventListener("hashchange",N),()=>{window.removeEventListener("popstate",N),window.removeEventListener("hashchange",N)}},[]);const w=()=>{if(i.startsWith("colors-")){const p=i.replace("colors-","");return t.jsx(nf,{isDark:c,section:p})}if(i.startsWith("typography")){const p=i.replace("typography-","").replace("typography","header");return t.jsx(hf,{isDark:c,section:p})}if(i.startsWith("shadow")){const p=i.replace("shadow-","").replace("shadow","scale");return t.jsx(yf,{isDark:c,section:p})}if(i.startsWith("dimensions")||["spacing","radius"].includes(i)){let p="spacing";return i==="radius"||i==="dimensions-radius"?p="radius":i==="dimensions-border"?p="border":i==="dimensions-usage"&&(p="usage"),t.jsx(Cf,{isDark:c,section:p})}if(i==="button-showcase")return t.jsx(Ep,{isDark:c});if(i==="button-icon-button")return t.jsx(Ap,{isDark:c});if(i.startsWith("button"))return t.jsx(Vp,{isDark:c,story:i});if(i.startsWith("date-picker"))return t.jsx(Dp,{isDark:c,story:i});if(i.startsWith("dropdown"))return t.jsx(Fp,{isDark:c,story:i});if(i.startsWith("fileupload"))return t.jsx(Lp,{isDark:c,story:i});if(i.startsWith("input"))return t.jsx(Rp,{isDark:c,story:i});if(i.startsWith("spinner"))return t.jsx($p,{isDark:c,story:i});if(i==="accordion-group")return t.jsx(Mp,{isDark:c});if(i.startsWith("accordion"))return t.jsx(Wp,{isDark:c,story:i});if(i.startsWith("app-header"))return t.jsx(_p,{isDark:c,story:i});if(i.startsWith("avatar"))return t.jsx(Op,{isDark:c,story:i});if(i.startsWith("badge"))return t.jsx(Xp,{isDark:c,story:i});if(i.startsWith("card"))return t.jsx(Hp,{isDark:c,story:i});if(i.startsWith("carousel"))return t.jsx(Gp,{isDark:c,story:i});if(i.startsWith("journey-timeline"))return t.jsx(Zp,{isDark:c,story:i});if(i.startsWith("link"))return t.jsx(am,{isDark:c,story:i});if(i.startsWith("modal"))return t.jsx(cm,{isDark:c,story:i});if(i.startsWith("pagination"))return t.jsx(hm,{isDark:c,story:i});if(i.startsWith("progress-sla"))return t.jsx(Zc,{isDark:c,story:i});if(i.startsWith("progress"))return t.jsx(Zc,{isDark:c,story:i});if(i.startsWith("popover"))return t.jsx(bm,{isDark:c,story:i});if(i.startsWith("radio"))return t.jsx(Um,{isDark:c,story:i});if(i.startsWith("result-list"))return t.jsx(Dm,{isDark:c,story:i});if(i.startsWith("search"))return t.jsx(_h,{isDark:c,story:i});if(i.startsWith("checkbox"))return t.jsx(Fm,{isDark:c,story:i});if(i.startsWith("chips"))return t.jsx(Bm,{isDark:c,story:i});if(i.startsWith("chip-group"))return t.jsx(zm,{isDark:c,story:i});if(i.startsWith("divider"))return t.jsx(Im,{isDark:c,story:i});if(i.startsWith("status-banner"))return t.jsx(qm,{isDark:c,story:i});if(i.startsWith("status-pipeline"))return t.jsx(_m,{isDark:c,story:i});if(i.startsWith("tag"))return t.jsx(rh,{isDark:c,story:i});if(i.startsWith("textarea"))return t.jsx(oh,{isDark:c,story:i});if(i.startsWith("timepicker"))return t.jsx(hh,{isDark:c,story:i});if(i.startsWith("toast"))return t.jsx(vh,{isDark:c,story:i});if(i.startsWith("switch"))return t.jsx(Th,{isDark:c,story:i});if(i.startsWith("timeslot"))return t.jsx(Eh,{isDark:c,story:i});if(i.startsWith("tooltip"))return t.jsx(Bh,{isDark:c,story:i});if(i.startsWith("stepper")||i.startsWith("compact-stepper"))return t.jsx(Ym,{isDark:c,story:i});if(i==="feedbackformstar")return t.jsx(Ih,{isDark:c});if(i==="feedbackformcsat")return t.jsx(qh,{isDark:c});if(i==="feedbackformnps")return t.jsx(Rh,{isDark:c});if(i.startsWith("empty-state"))return t.jsx(zh,{isDark:c,story:i});if(i.startsWith("slider"))return t.jsx(Oh,{isDark:c,story:i});switch(i){case"introduction":case"quickstart":return t.jsx(Jc,{isDark:c,onNavigate:s});default:return t.jsx(Jc,{isDark:c,onNavigate:s})}};return t.jsxs("div",{className:"app-layout",children:[t.jsxs("header",{className:`mobile-topbar ${c?"dark":""}`,children:[t.jsx("div",{className:"mobile-logo-wrapper",onClick:()=>s("introduction"),children:t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"mobile-logo-img"})}),t.jsx("button",{className:"theme-toggle-btn",onClick:x,title:c?"Switch to light mode":"Switch to dark mode",children:t.jsx("span",{className:"material-symbols-outlined theme-toggle-icon",children:c?"light_mode":"dark_mode"})})]}),f&&t.jsx("div",{className:"sidebar-backdrop",onClick:()=>b(!1)}),t.jsx(Tp,{activePage:i,onNavigate:s,isDark:c,onToggleTheme:x,isMobileOpen:f,onCloseMobile:()=>b(!1)}),t.jsx("main",{className:`main-content ${c?"dark":""} ${i==="introduction"?"no-padding":""}`,children:w()}),t.jsxs("div",{className:`mobile-bottombar ${c?"dark":""}`,onClick:()=>b(p=>!p),children:[t.jsxs("div",{className:"mobile-bottombar-left",children:[t.jsx("span",{className:"material-symbols-outlined mobile-bottombar-icon",children:f?"close":"menu"}),t.jsx("span",{className:"mobile-bottombar-path",children:Nf(i)})]}),t.jsx("span",{className:"material-symbols-outlined mobile-bottombar-chevron",children:f?"expand_more":"expand_less"})]})]})};jp.createRoot(document.getElementById("root")).render(t.jsx(Mi.StrictMode,{children:t.jsx(Uf,{})}));
