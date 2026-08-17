(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))m(h);new MutationObserver(h=>{for(const b of h)if(b.type==="childList")for(const x of b.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&m(x)}).observe(document,{childList:!0,subtree:!0});function d(h){const b={};return h.integrity&&(b.integrity=h.integrity),h.referrerPolicy&&(b.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?b.credentials="include":h.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function m(h){if(h.ep)return;h.ep=!0;const b=d(h);fetch(h.href,b)}})();function cd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qs={exports:{}},Un={},zs={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
<<<<<<<< HEAD:storybook/dist/assets/index-DHj9g73D.js
 */var Oc;function bp(){if(Oc)return ee;Oc=1;var s=Symbol.for("react.element"),l=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.iterator;function B(v){return v===null||typeof v!="object"?null:(v=A&&v[A]||v["@@iterator"],typeof v=="function"?v:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Y={};function ae(v,P,Z){this.props=v,this.context=P,this.refs=Y,this.updater=Z||z}ae.prototype.isReactComponent={},ae.prototype.setState=function(v,P){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,P,"setState")},ae.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function re(){}re.prototype=ae.prototype;function _e(v,P,Z){this.props=v,this.context=P,this.refs=Y,this.updater=Z||z}var $e=_e.prototype=new re;$e.constructor=_e,F($e,ae.prototype),$e.isPureReactComponent=!0;var Ue=Array.isArray,et=Object.prototype.hasOwnProperty,U={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function he(v,P,Z){var te,se={},oe=null,pe=null;if(P!=null)for(te in P.ref!==void 0&&(pe=P.ref),P.key!==void 0&&(oe=""+P.key),P)et.call(P,te)&&!ue.hasOwnProperty(te)&&(se[te]=P[te]);var ce=arguments.length-2;if(ce===1)se.children=Z;else if(1<ce){for(var ye=Array(ce),tt=0;tt<ce;tt++)ye[tt]=arguments[tt+2];se.children=ye}if(v&&v.defaultProps)for(te in ce=v.defaultProps,ce)se[te]===void 0&&(se[te]=ce[te]);return{$$typeof:s,type:v,key:oe,ref:pe,props:se,_owner:U.current}}function Te(v,P){return{$$typeof:s,type:v.type,key:P,ref:v.ref,props:v.props,_owner:v._owner}}function xe(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function lt(v){var P={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Z){return P[Z]})}var ct=/\/+/g;function Le(v,P){return typeof v=="object"&&v!==null&&v.key!=null?lt(""+v.key):P.toString(36)}function gt(v,P,Z,te,se){var oe=typeof v;(oe==="undefined"||oe==="boolean")&&(v=null);var pe=!1;if(v===null)pe=!0;else switch(oe){case"string":case"number":pe=!0;break;case"object":switch(v.$$typeof){case s:case l:pe=!0}}if(pe)return pe=v,se=se(pe),v=te===""?"."+Le(pe,0):te,Ue(se)?(Z="",v!=null&&(Z=v.replace(ct,"$&/")+"/"),gt(se,P,Z,"",function(tt){return tt})):se!=null&&(xe(se)&&(se=Te(se,Z+(!se.key||pe&&pe.key===se.key?"":(""+se.key).replace(ct,"$&/")+"/")+v)),P.push(se)),1;if(pe=0,te=te===""?".":te+":",Ue(v))for(var ce=0;ce<v.length;ce++){oe=v[ce];var ye=te+Le(oe,ce);pe+=gt(oe,P,Z,ye,se)}else if(ye=B(v),typeof ye=="function")for(v=ye.call(v),ce=0;!(oe=v.next()).done;)oe=oe.value,ye=te+Le(oe,ce++),pe+=gt(oe,P,Z,ye,se);else if(oe==="object")throw P=String(v),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return pe}function jt(v,P,Z){if(v==null)return v;var te=[],se=0;return gt(v,te,"","",function(oe){return P.call(Z,oe,se++)}),te}function Oe(v){if(v._status===-1){var P=v._result;P=P(),P.then(function(Z){(v._status===0||v._status===-1)&&(v._status=1,v._result=Z)},function(Z){(v._status===0||v._status===-1)&&(v._status=2,v._result=Z)}),v._status===-1&&(v._status=0,v._result=P)}if(v._status===1)return v._result.default;throw v._result}var Se={current:null},q={transition:null},X={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:q,ReactCurrentOwner:U};function $(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:jt,forEach:function(v,P,Z){jt(v,function(){P.apply(this,arguments)},Z)},count:function(v){var P=0;return jt(v,function(){P++}),P},toArray:function(v){return jt(v,function(P){return P})||[]},only:function(v){if(!xe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ee.Component=ae,ee.Fragment=d,ee.Profiler=h,ee.PureComponent=_e,ee.StrictMode=m,ee.Suspense=w,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ee.act=$,ee.cloneElement=function(v,P,Z){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var te=F({},v.props),se=v.key,oe=v.ref,pe=v._owner;if(P!=null){if(P.ref!==void 0&&(oe=P.ref,pe=U.current),P.key!==void 0&&(se=""+P.key),v.type&&v.type.defaultProps)var ce=v.type.defaultProps;for(ye in P)et.call(P,ye)&&!ue.hasOwnProperty(ye)&&(te[ye]=P[ye]===void 0&&ce!==void 0?ce[ye]:P[ye])}var ye=arguments.length-2;if(ye===1)te.children=Z;else if(1<ye){ce=Array(ye);for(var tt=0;tt<ye;tt++)ce[tt]=arguments[tt+2];te.children=ce}return{$$typeof:s,type:v.type,key:se,ref:oe,props:te,_owner:pe}},ee.createContext=function(v){return v={$$typeof:x,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:b,_context:v},v.Consumer=v},ee.createElement=he,ee.createFactory=function(v){var P=he.bind(null,v);return P.type=v,P},ee.createRef=function(){return{current:null}},ee.forwardRef=function(v){return{$$typeof:i,render:v}},ee.isValidElement=xe,ee.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:Oe}},ee.memo=function(v,P){return{$$typeof:p,type:v,compare:P===void 0?null:P}},ee.startTransition=function(v){var P=q.transition;q.transition={};try{v()}finally{q.transition=P}},ee.unstable_act=$,ee.useCallback=function(v,P){return Se.current.useCallback(v,P)},ee.useContext=function(v){return Se.current.useContext(v)},ee.useDebugValue=function(){},ee.useDeferredValue=function(v){return Se.current.useDeferredValue(v)},ee.useEffect=function(v,P){return Se.current.useEffect(v,P)},ee.useId=function(){return Se.current.useId()},ee.useImperativeHandle=function(v,P,Z){return Se.current.useImperativeHandle(v,P,Z)},ee.useInsertionEffect=function(v,P){return Se.current.useInsertionEffect(v,P)},ee.useLayoutEffect=function(v,P){return Se.current.useLayoutEffect(v,P)},ee.useMemo=function(v,P){return Se.current.useMemo(v,P)},ee.useReducer=function(v,P,Z){return Se.current.useReducer(v,P,Z)},ee.useRef=function(v){return Se.current.useRef(v)},ee.useState=function(v){return Se.current.useState(v)},ee.useSyncExternalStore=function(v,P,Z){return Se.current.useSyncExternalStore(v,P,Z)},ee.useTransition=function(){return Se.current.useTransition()},ee.version="18.3.1",ee}var Xc;function Os(){return Xc||(Xc=1,zs.exports=bp()),zs.exports}/**
========
 */var Oc;function bp(){if(Oc)return ee;Oc=1;var s=Symbol.for("react.element"),d=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.iterator;function B(v){return v===null||typeof v!="object"?null:(v=E&&v[E]||v["@@iterator"],typeof v=="function"?v:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Y={};function ae(v,U,Z){this.props=v,this.context=U,this.refs=Y,this.updater=Z||z}ae.prototype.isReactComponent={},ae.prototype.setState=function(v,U){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,U,"setState")},ae.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function re(){}re.prototype=ae.prototype;function _e(v,U,Z){this.props=v,this.context=U,this.refs=Y,this.updater=Z||z}var $e=_e.prototype=new re;$e.constructor=_e,F($e,ae.prototype),$e.isPureReactComponent=!0;var Te=Array.isArray,et=Object.prototype.hasOwnProperty,A={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function ge(v,U,Z){var te,se={},le=null,pe=null;if(U!=null)for(te in U.ref!==void 0&&(pe=U.ref),U.key!==void 0&&(le=""+U.key),U)et.call(U,te)&&!ue.hasOwnProperty(te)&&(se[te]=U[te]);var ce=arguments.length-2;if(ce===1)se.children=Z;else if(1<ce){for(var xe=Array(ce),tt=0;tt<ce;tt++)xe[tt]=arguments[tt+2];se.children=xe}if(v&&v.defaultProps)for(te in ce=v.defaultProps,ce)se[te]===void 0&&(se[te]=ce[te]);return{$$typeof:s,type:v,key:le,ref:pe,props:se,_owner:A.current}}function Pe(v,U){return{$$typeof:s,type:v.type,key:U,ref:v.ref,props:v.props,_owner:v._owner}}function Ve(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function ot(v){var U={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Z){return U[Z]})}var ct=/\/+/g;function Le(v,U){return typeof v=="object"&&v!==null&&v.key!=null?ot(""+v.key):U.toString(36)}function gt(v,U,Z,te,se){var le=typeof v;(le==="undefined"||le==="boolean")&&(v=null);var pe=!1;if(v===null)pe=!0;else switch(le){case"string":case"number":pe=!0;break;case"object":switch(v.$$typeof){case s:case d:pe=!0}}if(pe)return pe=v,se=se(pe),v=te===""?"."+Le(pe,0):te,Te(se)?(Z="",v!=null&&(Z=v.replace(ct,"$&/")+"/"),gt(se,U,Z,"",function(tt){return tt})):se!=null&&(Ve(se)&&(se=Pe(se,Z+(!se.key||pe&&pe.key===se.key?"":(""+se.key).replace(ct,"$&/")+"/")+v)),U.push(se)),1;if(pe=0,te=te===""?".":te+":",Te(v))for(var ce=0;ce<v.length;ce++){le=v[ce];var xe=te+Le(le,ce);pe+=gt(le,U,Z,xe,se)}else if(xe=B(v),typeof xe=="function")for(v=xe.call(v),ce=0;!(le=v.next()).done;)le=le.value,xe=te+Le(le,ce++),pe+=gt(le,U,Z,xe,se);else if(le==="object")throw U=String(v),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return pe}function jt(v,U,Z){if(v==null)return v;var te=[],se=0;return gt(v,te,"","",function(le){return U.call(Z,le,se++)}),te}function Oe(v){if(v._status===-1){var U=v._result;U=U(),U.then(function(Z){(v._status===0||v._status===-1)&&(v._status=1,v._result=Z)},function(Z){(v._status===0||v._status===-1)&&(v._status=2,v._result=Z)}),v._status===-1&&(v._status=0,v._result=U)}if(v._status===1)return v._result.default;throw v._result}var we={current:null},q={transition:null},X={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:q,ReactCurrentOwner:A};function $(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:jt,forEach:function(v,U,Z){jt(v,function(){U.apply(this,arguments)},Z)},count:function(v){var U=0;return jt(v,function(){U++}),U},toArray:function(v){return jt(v,function(U){return U})||[]},only:function(v){if(!Ve(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ee.Component=ae,ee.Fragment=c,ee.Profiler=h,ee.PureComponent=_e,ee.StrictMode=m,ee.Suspense=w,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ee.act=$,ee.cloneElement=function(v,U,Z){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var te=F({},v.props),se=v.key,le=v.ref,pe=v._owner;if(U!=null){if(U.ref!==void 0&&(le=U.ref,pe=A.current),U.key!==void 0&&(se=""+U.key),v.type&&v.type.defaultProps)var ce=v.type.defaultProps;for(xe in U)et.call(U,xe)&&!ue.hasOwnProperty(xe)&&(te[xe]=U[xe]===void 0&&ce!==void 0?ce[xe]:U[xe])}var xe=arguments.length-2;if(xe===1)te.children=Z;else if(1<xe){ce=Array(xe);for(var tt=0;tt<xe;tt++)ce[tt]=arguments[tt+2];te.children=ce}return{$$typeof:s,type:v.type,key:se,ref:le,props:te,_owner:pe}},ee.createContext=function(v){return v={$$typeof:x,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:b,_context:v},v.Consumer=v},ee.createElement=ge,ee.createFactory=function(v){var U=ge.bind(null,v);return U.type=v,U},ee.createRef=function(){return{current:null}},ee.forwardRef=function(v){return{$$typeof:i,render:v}},ee.isValidElement=Ve,ee.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:Oe}},ee.memo=function(v,U){return{$$typeof:p,type:v,compare:U===void 0?null:U}},ee.startTransition=function(v){var U=q.transition;q.transition={};try{v()}finally{q.transition=U}},ee.unstable_act=$,ee.useCallback=function(v,U){return we.current.useCallback(v,U)},ee.useContext=function(v){return we.current.useContext(v)},ee.useDebugValue=function(){},ee.useDeferredValue=function(v){return we.current.useDeferredValue(v)},ee.useEffect=function(v,U){return we.current.useEffect(v,U)},ee.useId=function(){return we.current.useId()},ee.useImperativeHandle=function(v,U,Z){return we.current.useImperativeHandle(v,U,Z)},ee.useInsertionEffect=function(v,U){return we.current.useInsertionEffect(v,U)},ee.useLayoutEffect=function(v,U){return we.current.useLayoutEffect(v,U)},ee.useMemo=function(v,U){return we.current.useMemo(v,U)},ee.useReducer=function(v,U,Z){return we.current.useReducer(v,U,Z)},ee.useRef=function(v){return we.current.useRef(v)},ee.useState=function(v){return we.current.useState(v)},ee.useSyncExternalStore=function(v,U,Z){return we.current.useSyncExternalStore(v,U,Z)},ee.useTransition=function(){return we.current.useTransition()},ee.version="18.3.1",ee}var Xc;function Os(){return Xc||(Xc=1,zs.exports=bp()),zs.exports}/**
>>>>>>>> 2092639fff13624653ddc9de27a9a7da15fb82c1:storybook/dist/assets/index-n_yqVi96.js
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function vp(){if(Hc)return Un;Hc=1;var s=Os(),l=Symbol.for("react.element"),d=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function x(i,w,p){var T,A={},B=null,z=null;p!==void 0&&(B=""+p),w.key!==void 0&&(B=""+w.key),w.ref!==void 0&&(z=w.ref);for(T in w)m.call(w,T)&&!b.hasOwnProperty(T)&&(A[T]=w[T]);if(i&&i.defaultProps)for(T in w=i.defaultProps,w)A[T]===void 0&&(A[T]=w[T]);return{$$typeof:l,type:i,key:B,ref:z,props:A,_owner:h.current}}return Un.Fragment=d,Un.jsx=x,Un.jsxs=x,Un}var Gc;function wp(){return Gc||(Gc=1,qs.exports=vp()),qs.exports}var t=wp(),k=Os();const La=cd(k);var Ra={},Is={exports:{}},Ke={},Rs={exports:{}},$s={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
<<<<<<<< HEAD:storybook/dist/assets/index-DHj9g73D.js
 */var Qc;function Sp(){return Qc||(Qc=1,(function(s){function l(q,X){var $=q.length;q.push(X);e:for(;0<$;){var v=$-1>>>1,P=q[v];if(0<h(P,X))q[v]=X,q[$]=P,$=v;else break e}}function d(q){return q.length===0?null:q[0]}function m(q){if(q.length===0)return null;var X=q[0],$=q.pop();if($!==X){q[0]=$;e:for(var v=0,P=q.length,Z=P>>>1;v<Z;){var te=2*(v+1)-1,se=q[te],oe=te+1,pe=q[oe];if(0>h(se,$))oe<P&&0>h(pe,se)?(q[v]=pe,q[oe]=$,v=oe):(q[v]=se,q[te]=$,v=te);else if(oe<P&&0>h(pe,$))q[v]=pe,q[oe]=$,v=oe;else break e}}return X}function h(q,X){var $=q.sortIndex-X.sortIndex;return $!==0?$:q.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;s.unstable_now=function(){return b.now()}}else{var x=Date,i=x.now();s.unstable_now=function(){return x.now()-i}}var w=[],p=[],T=1,A=null,B=3,z=!1,F=!1,Y=!1,ae=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $e(q){for(var X=d(p);X!==null;){if(X.callback===null)m(p);else if(X.startTime<=q)m(p),X.sortIndex=X.expirationTime,l(w,X);else break;X=d(p)}}function Ue(q){if(Y=!1,$e(q),!F)if(d(w)!==null)F=!0,Oe(et);else{var X=d(p);X!==null&&Se(Ue,X.startTime-q)}}function et(q,X){F=!1,Y&&(Y=!1,re(he),he=-1),z=!0;var $=B;try{for($e(X),A=d(w);A!==null&&(!(A.expirationTime>X)||q&&!lt());){var v=A.callback;if(typeof v=="function"){A.callback=null,B=A.priorityLevel;var P=v(A.expirationTime<=X);X=s.unstable_now(),typeof P=="function"?A.callback=P:A===d(w)&&m(w),$e(X)}else m(w);A=d(w)}if(A!==null)var Z=!0;else{var te=d(p);te!==null&&Se(Ue,te.startTime-X),Z=!1}return Z}finally{A=null,B=$,z=!1}}var U=!1,ue=null,he=-1,Te=5,xe=-1;function lt(){return!(s.unstable_now()-xe<Te)}function ct(){if(ue!==null){var q=s.unstable_now();xe=q;var X=!0;try{X=ue(!0,q)}finally{X?Le():(U=!1,ue=null)}}else U=!1}var Le;if(typeof _e=="function")Le=function(){_e(ct)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,jt=gt.port2;gt.port1.onmessage=ct,Le=function(){jt.postMessage(null)}}else Le=function(){ae(ct,0)};function Oe(q){ue=q,U||(U=!0,Le())}function Se(q,X){he=ae(function(){q(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){F||z||(F=!0,Oe(et))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_getFirstCallbackNode=function(){return d(w)},s.unstable_next=function(q){switch(B){case 1:case 2:case 3:var X=3;break;default:X=B}var $=B;B=X;try{return q()}finally{B=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,X){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var $=B;B=q;try{return X()}finally{B=$}},s.unstable_scheduleCallback=function(q,X,$){var v=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?v+$:v):$=v,q){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=$+P,q={id:T++,callback:X,priorityLevel:q,startTime:$,expirationTime:P,sortIndex:-1},$>v?(q.sortIndex=$,l(p,q),d(w)===null&&q===d(p)&&(Y?(re(he),he=-1):Y=!0,Se(Ue,$-v))):(q.sortIndex=P,l(w,q),F||z||(F=!0,Oe(et))),q},s.unstable_shouldYield=lt,s.unstable_wrapCallback=function(q){var X=B;return function(){var $=B;B=X;try{return q.apply(this,arguments)}finally{B=$}}}})($s)),$s}var Yc;function Cp(){return Yc||(Yc=1,Rs.exports=Sp()),Rs.exports}/**
========
 */var Qc;function Sp(){return Qc||(Qc=1,(function(s){function d(q,X){var $=q.length;q.push(X);e:for(;0<$;){var v=$-1>>>1,U=q[v];if(0<h(U,X))q[v]=X,q[$]=U,$=v;else break e}}function c(q){return q.length===0?null:q[0]}function m(q){if(q.length===0)return null;var X=q[0],$=q.pop();if($!==X){q[0]=$;e:for(var v=0,U=q.length,Z=U>>>1;v<Z;){var te=2*(v+1)-1,se=q[te],le=te+1,pe=q[le];if(0>h(se,$))le<U&&0>h(pe,se)?(q[v]=pe,q[le]=$,v=le):(q[v]=se,q[te]=$,v=te);else if(le<U&&0>h(pe,$))q[v]=pe,q[le]=$,v=le;else break e}}return X}function h(q,X){var $=q.sortIndex-X.sortIndex;return $!==0?$:q.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;s.unstable_now=function(){return b.now()}}else{var x=Date,i=x.now();s.unstable_now=function(){return x.now()-i}}var w=[],p=[],T=1,E=null,B=3,z=!1,F=!1,Y=!1,ae=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $e(q){for(var X=c(p);X!==null;){if(X.callback===null)m(p);else if(X.startTime<=q)m(p),X.sortIndex=X.expirationTime,d(w,X);else break;X=c(p)}}function Te(q){if(Y=!1,$e(q),!F)if(c(w)!==null)F=!0,Oe(et);else{var X=c(p);X!==null&&we(Te,X.startTime-q)}}function et(q,X){F=!1,Y&&(Y=!1,re(ge),ge=-1),z=!0;var $=B;try{for($e(X),E=c(w);E!==null&&(!(E.expirationTime>X)||q&&!ot());){var v=E.callback;if(typeof v=="function"){E.callback=null,B=E.priorityLevel;var U=v(E.expirationTime<=X);X=s.unstable_now(),typeof U=="function"?E.callback=U:E===c(w)&&m(w),$e(X)}else m(w);E=c(w)}if(E!==null)var Z=!0;else{var te=c(p);te!==null&&we(Te,te.startTime-X),Z=!1}return Z}finally{E=null,B=$,z=!1}}var A=!1,ue=null,ge=-1,Pe=5,Ve=-1;function ot(){return!(s.unstable_now()-Ve<Pe)}function ct(){if(ue!==null){var q=s.unstable_now();Ve=q;var X=!0;try{X=ue(!0,q)}finally{X?Le():(A=!1,ue=null)}}else A=!1}var Le;if(typeof _e=="function")Le=function(){_e(ct)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,jt=gt.port2;gt.port1.onmessage=ct,Le=function(){jt.postMessage(null)}}else Le=function(){ae(ct,0)};function Oe(q){ue=q,A||(A=!0,Le())}function we(q,X){ge=ae(function(){q(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){F||z||(F=!0,Oe(et))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pe=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_getFirstCallbackNode=function(){return c(w)},s.unstable_next=function(q){switch(B){case 1:case 2:case 3:var X=3;break;default:X=B}var $=B;B=X;try{return q()}finally{B=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,X){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var $=B;B=q;try{return X()}finally{B=$}},s.unstable_scheduleCallback=function(q,X,$){var v=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?v+$:v):$=v,q){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=$+U,q={id:T++,callback:X,priorityLevel:q,startTime:$,expirationTime:U,sortIndex:-1},$>v?(q.sortIndex=$,d(p,q),c(w)===null&&q===c(p)&&(Y?(re(ge),ge=-1):Y=!0,we(Te,$-v))):(q.sortIndex=U,d(w,q),F||z||(F=!0,Oe(et))),q},s.unstable_shouldYield=ot,s.unstable_wrapCallback=function(q){var X=B;return function(){var $=B;B=X;try{return q.apply(this,arguments)}finally{B=$}}}})($s)),$s}var Yc;function Cp(){return Yc||(Yc=1,Rs.exports=Sp()),Rs.exports}/**
>>>>>>>> 2092639fff13624653ddc9de27a9a7da15fb82c1:storybook/dist/assets/index-n_yqVi96.js
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
<<<<<<<< HEAD:storybook/dist/assets/index-DHj9g73D.js
 */var Kc;function jp(){if(Kc)return Ke;Kc=1;var s=Os(),l=Cp();function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,h={};function b(e,r){x(e,r),x(e+"Capture",r)}function x(e,r){for(h[e]=r,e=0;e<r.length;e++)m.add(r[e])}var i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},A={};function B(e){return w.call(A,e)?!0:w.call(T,e)?!1:p.test(e)?A[e]=!0:(T[e]=!0,!1)}function z(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,r,n,a){if(r===null||typeof r>"u"||z(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(e,r,n,a,o,c,u){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=c,this.removeEmptyString=u}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ae[r]=new Y(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ae[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ae[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ae[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function _e(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(re,_e);ae[r]=new Y(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(re,_e);ae[r]=new Y(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(re,_e);ae[r]=new Y(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),ae.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ae[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function $e(e,r,n,a){var o=ae.hasOwnProperty(r)?ae[r]:null;(o!==null?o.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(F(r,n,o,a)&&(n=null),a||o===null?B(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(r=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(r):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var Ue=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),U=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),Te=Symbol.for("react.profiler"),xe=Symbol.for("react.provider"),lt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),gt=Symbol.for("react.suspense_list"),jt=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),q=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,v;function P(e){if(v===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);v=r&&r[1]||""}return`
`+v+e}var Z=!1;function te(e,r){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var a=j}Reflect.construct(e,[],r)}else{try{r.call()}catch(j){a=j}e.call(r.prototype)}else{try{throw Error()}catch(j){a=j}e()}}catch(j){if(j&&a&&typeof j.stack=="string"){for(var o=j.stack.split(`
`),c=a.stack.split(`
`),u=o.length-1,f=c.length-1;1<=u&&0<=f&&o[u]!==c[f];)f--;for(;1<=u&&0<=f;u--,f--)if(o[u]!==c[f]){if(u!==1||f!==1)do if(u--,f--,0>f||o[u]!==c[f]){var g=`
`+o[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=u&&0<=f);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?P(e):""}function se(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ue:return"Fragment";case U:return"Portal";case Te:return"Profiler";case he:return"StrictMode";case Le:return"Suspense";case gt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lt:return(e.displayName||"Context")+".Consumer";case xe:return(e._context.displayName||"Context")+".Provider";case ct:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jt:return r=e.displayName||null,r!==null?r:oe(e.type)||"Memo";case Oe:r=e._payload,e=e._init;try{return oe(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(e){var r=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,c=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return o.call(this)},set:function(u){a=""+u,c.call(this,u)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Pn(e){e._valueTracker||(e._valueTracker=tt(e))}function Ys(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=ye(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ma(e,r){var n=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ks(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=ce(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Js(e,r){r=r.checked,r!=null&&$e(e,"checked",r,!1)}function _a(e,r){Js(e,r);var n=ce(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Oa(e,r.type,n):r.hasOwnProperty("defaultValue")&&Oa(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Zs(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oa(e,r,n){(r!=="number"||Vn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wr=Array.isArray;function gr(e,r,n,a){if(e=e.options,r){r={};for(var o=0;o<n.length;o++)r["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=r.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),r=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}r!==null||e[o].disabled||(r=e[o])}r!==null&&(r.selected=!0)}}function Xa(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(d(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eo(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(d(92));if(Wr(n)){if(1<n.length)throw Error(d(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:ce(n)}}function to(e,r){var n=ce(r.value),a=ce(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function ro(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function no(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?no(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,ao=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,o)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Mr(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cd=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){Cd.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),_r[r]=_r[e]})});function io(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||_r.hasOwnProperty(e)&&_r[e]?(""+r).trim():r+"px"}function so(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=io(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var jd=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ga(e,r){if(r){if(jd[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(d(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(d(61))}if(r.style!=null&&typeof r.style!="object")throw Error(d(62))}}function Qa(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function Ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,xr=null,yr=null;function oo(e){if(e=mn(e)){if(typeof Ja!="function")throw Error(d(280));var r=e.stateNode;r&&(r=ea(r),Ja(e.stateNode,e.type,r))}}function lo(e){xr?yr?yr.push(e):yr=[e]:xr=e}function co(){if(xr){var e=xr,r=yr;if(yr=xr=null,oo(e),r)for(e=0;e<r.length;e++)oo(r[e])}}function uo(e,r){return e(r)}function po(){}var Za=!1;function mo(e,r,n){if(Za)return e(r,n);Za=!0;try{return uo(e,r,n)}finally{Za=!1,(xr!==null||yr!==null)&&(po(),co())}}function Or(e,r){var n=e.stateNode;if(n===null)return null;var a=ea(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,r,typeof n));return n}var ei=!1;if(i)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ei=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ei=!1}function kd(e,r,n,a,o,c,u,f,g){var j=Array.prototype.slice.call(arguments,3);try{r.apply(n,j)}catch(V){this.onError(V)}}var Hr=!1,An=null,Dn=!1,ti=null,Td={onError:function(e){Hr=!0,An=e}};function Nd(e,r,n,a,o,c,u,f,g){Hr=!1,An=null,kd.apply(Td,arguments)}function Ud(e,r,n,a,o,c,u,f,g){if(Nd.apply(this,arguments),Hr){if(Hr){var j=An;Hr=!1,An=null}else throw Error(d(198));Dn||(Dn=!0,ti=j)}}function nr(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function ho(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function fo(e){if(nr(e)!==e)throw Error(d(188))}function Pd(e){var r=e.alternate;if(!r){if(r=nr(e),r===null)throw Error(d(188));return r!==e?null:e}for(var n=e,a=r;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return fo(o),e;if(c===a)return fo(o),r;c=c.sibling}throw Error(d(188))}if(n.return!==a.return)n=o,a=c;else{for(var u=!1,f=o.child;f;){if(f===n){u=!0,n=o,a=c;break}if(f===a){u=!0,a=o,n=c;break}f=f.sibling}if(!u){for(f=c.child;f;){if(f===n){u=!0,n=c,a=o;break}if(f===a){u=!0,a=c,n=o;break}f=f.sibling}if(!u)throw Error(d(189))}}if(n.alternate!==a)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:r}function go(e){return e=Pd(e),e!==null?xo(e):null}function xo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=xo(e);if(r!==null)return r;e=e.sibling}return null}var yo=l.unstable_scheduleCallback,bo=l.unstable_cancelCallback,Vd=l.unstable_shouldYield,Ed=l.unstable_requestPaint,je=l.unstable_now,Ad=l.unstable_getCurrentPriorityLevel,ri=l.unstable_ImmediatePriority,vo=l.unstable_UserBlockingPriority,Fn=l.unstable_NormalPriority,Dd=l.unstable_LowPriority,wo=l.unstable_IdlePriority,Bn=null,kt=null;function Fd(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Bn,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:zd,Bd=Math.log,qd=Math.LN2;function zd(e){return e>>>=0,e===0?32:31-(Bd(e)/qd|0)|0}var qn=64,zn=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function In(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,c=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~o;f!==0?a=Gr(f):(c&=u,c!==0&&(a=Gr(c)))}else u=n&~o,u!==0?a=Gr(u):c!==0&&(a=Gr(c));if(a===0)return 0;if(r!==0&&r!==a&&(r&o)===0&&(o=a&-a,c=r&-r,o>=c||o===16&&(c&4194240)!==0))return r;if((a&4)!==0&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-xt(r),o=1<<n,a|=e[n],r&=~o;return a}function Id(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes;0<c;){var u=31-xt(c),f=1<<u,g=o[u];g===-1?((f&n)===0||(f&a)!==0)&&(o[u]=Id(f,r)):g<=r&&(e.expiredLanes|=f),c&=~f}}function ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function So(){var e=qn;return qn<<=1,(qn&4194240)===0&&(qn=64),e}function ai(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Qr(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-xt(r),e[r]=n}function $d(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),c=1<<o;r[o]=0,a[o]=-1,e[o]=-1,n&=~c}}function ii(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-xt(n),o=1<<a;o&r|e[a]&r&&(e[a]|=r),n&=~o}}var de=0;function Co(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var jo,si,ko,To,No,oi=!1,Rn=[],It=null,Rt=null,$t=null,Yr=new Map,Kr=new Map,Lt=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uo(e,r){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Yr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(r.pointerId)}}function Jr(e,r,n,a,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[o]},r!==null&&(r=mn(r),r!==null&&si(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,o!==null&&r.indexOf(o)===-1&&r.push(o),e)}function Wd(e,r,n,a,o){switch(r){case"focusin":return It=Jr(It,e,r,n,a,o),!0;case"dragenter":return Rt=Jr(Rt,e,r,n,a,o),!0;case"mouseover":return $t=Jr($t,e,r,n,a,o),!0;case"pointerover":var c=o.pointerId;return Yr.set(c,Jr(Yr.get(c)||null,e,r,n,a,o)),!0;case"gotpointercapture":return c=o.pointerId,Kr.set(c,Jr(Kr.get(c)||null,e,r,n,a,o)),!0}return!1}function Po(e){var r=ar(e.target);if(r!==null){var n=nr(r);if(n!==null){if(r=n.tag,r===13){if(r=ho(n),r!==null){e.blockedOn=r,No(e.priority,function(){ko(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $n(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=ci(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ya=a,n.target.dispatchEvent(a),Ya=null}else return r=mn(n),r!==null&&si(r),e.blockedOn=n,!1;r.shift()}return!0}function Vo(e,r,n){$n(e)&&n.delete(r)}function Md(){oi=!1,It!==null&&$n(It)&&(It=null),Rt!==null&&$n(Rt)&&(Rt=null),$t!==null&&$n($t)&&($t=null),Yr.forEach(Vo),Kr.forEach(Vo)}function Zr(e,r){e.blockedOn===r&&(e.blockedOn=null,oi||(oi=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Md)))}function en(e){function r(o){return Zr(o,e)}if(0<Rn.length){Zr(Rn[0],e);for(var n=1;n<Rn.length;n++){var a=Rn[n];a.blockedOn===e&&(a.blockedOn=null)}}for(It!==null&&Zr(It,e),Rt!==null&&Zr(Rt,e),$t!==null&&Zr($t,e),Yr.forEach(r),Kr.forEach(r),n=0;n<Lt.length;n++)a=Lt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Po(n),n.blockedOn===null&&Lt.shift()}var br=Ue.ReactCurrentBatchConfig,Ln=!0;function _d(e,r,n,a){var o=de,c=br.transition;br.transition=null;try{de=1,li(e,r,n,a)}finally{de=o,br.transition=c}}function Od(e,r,n,a){var o=de,c=br.transition;br.transition=null;try{de=4,li(e,r,n,a)}finally{de=o,br.transition=c}}function li(e,r,n,a){if(Ln){var o=ci(e,r,n,a);if(o===null)Ti(e,r,a,Wn,n),Uo(e,a);else if(Wd(o,e,r,n,a))a.stopPropagation();else if(Uo(e,a),r&4&&-1<Ld.indexOf(e)){for(;o!==null;){var c=mn(o);if(c!==null&&jo(c),c=ci(e,r,n,a),c===null&&Ti(e,r,a,Wn,n),c===o)break;o=c}o!==null&&a.stopPropagation()}else Ti(e,r,a,null,n)}}var Wn=null;function ci(e,r,n,a){if(Wn=null,e=Ka(a),e=ar(e),e!==null)if(r=nr(e),r===null)e=null;else if(n=r.tag,n===13){if(e=ho(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Wn=e,null}function Eo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ad()){case ri:return 1;case vo:return 4;case Fn:case Dd:return 16;case wo:return 536870912;default:return 16}default:return 16}}var Wt=null,di=null,Mn=null;function Ao(){if(Mn)return Mn;var e,r=di,n=r.length,a,o="value"in Wt?Wt.value:Wt.textContent,c=o.length;for(e=0;e<n&&r[e]===o[e];e++);var u=n-e;for(a=1;a<=u&&r[n-a]===o[c-a];a++);return Mn=o.slice(e,1<a?1-a:void 0)}function _n(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function Do(){return!1}function rt(e){function r(n,a,o,c,u){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(c):c[f]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?On:Do,this.isPropagationStopped=Do,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),r}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=rt(vr),tn=$({},vr,{view:0,detail:0}),Xd=rt(tn),pi,mi,rn,Xn=$({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rn&&(rn&&e.type==="mousemove"?(pi=e.screenX-rn.screenX,mi=e.screenY-rn.screenY):mi=pi=0,rn=e),pi)},movementY:function(e){return"movementY"in e?e.movementY:mi}}),Fo=rt(Xn),Hd=$({},Xn,{dataTransfer:0}),Gd=rt(Hd),Qd=$({},tn,{relatedTarget:0}),hi=rt(Qd),Yd=$({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kd=rt(Yd),Jd=$({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=rt(Jd),eu=$({},vr,{data:0}),Bo=rt(eu),tu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function au(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=nu[e])?!!r[e]:!1}function fi(){return au}var iu=$({},tn,{key:function(e){if(e.key){var r=tu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=_n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?_n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),su=rt(iu),ou=$({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=rt(ou),lu=$({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),cu=rt(lu),du=$({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uu=rt(du),pu=$({},Xn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mu=rt(pu),hu=[9,13,27,32],gi=i&&"CompositionEvent"in window,nn=null;i&&"documentMode"in document&&(nn=document.documentMode);var fu=i&&"TextEvent"in window&&!nn,zo=i&&(!gi||nn&&8<nn&&11>=nn),Io=" ",Ro=!1;function $o(e,r){switch(e){case"keyup":return hu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function gu(e,r){switch(e){case"compositionend":return Lo(r);case"keypress":return r.which!==32?null:(Ro=!0,Io);case"textInput":return e=r.data,e===Io&&Ro?null:e;default:return null}}function xu(e,r){if(wr)return e==="compositionend"||!gi&&$o(e,r)?(e=Ao(),Mn=di=Wt=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zo&&r.locale!=="ko"?null:r.data;default:return null}}var yu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!yu[e.type]:r==="textarea"}function Mo(e,r,n,a){lo(a),r=Kn(r,"onChange"),0<r.length&&(n=new ui("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var an=null,sn=null;function bu(e){ol(e,0)}function Hn(e){var r=Tr(e);if(Ys(r))return e}function vu(e,r){if(e==="change")return r}var _o=!1;if(i){var xi;if(i){var yi="oninput"in document;if(!yi){var Oo=document.createElement("div");Oo.setAttribute("oninput","return;"),yi=typeof Oo.oninput=="function"}xi=yi}else xi=!1;_o=xi&&(!document.documentMode||9<document.documentMode)}function Xo(){an&&(an.detachEvent("onpropertychange",Ho),sn=an=null)}function Ho(e){if(e.propertyName==="value"&&Hn(sn)){var r=[];Mo(r,sn,e,Ka(e)),mo(bu,r)}}function wu(e,r,n){e==="focusin"?(Xo(),an=r,sn=n,an.attachEvent("onpropertychange",Ho)):e==="focusout"&&Xo()}function Su(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hn(sn)}function Cu(e,r){if(e==="click")return Hn(r)}function ju(e,r){if(e==="input"||e==="change")return Hn(r)}function ku(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var yt=typeof Object.is=="function"?Object.is:ku;function on(e,r){if(yt(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!w.call(r,o)||!yt(e[o],r[o]))return!1}return!0}function Go(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qo(e,r){var n=Go(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Go(n)}}function Yo(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Yo(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ko(){for(var e=window,r=Vn();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Vn(e.document)}return r}function bi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Tu(e){var r=Ko(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Yo(n.ownerDocument.documentElement,n)){if(a!==null&&bi(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,c=Math.min(a.start,o);a=a.end===void 0?c:Math.min(a.end,o),!e.extend&&c>a&&(o=a,a=c,c=o),o=Qo(n,c);var u=Qo(n,a);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(r=r.createRange(),r.setStart(o.node,o.offset),e.removeAllRanges(),c>a?(e.addRange(r),e.extend(u.node,u.offset)):(r.setEnd(u.node,u.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nu=i&&"documentMode"in document&&11>=document.documentMode,Sr=null,vi=null,ln=null,wi=!1;function Jo(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||Sr==null||Sr!==Vn(a)||(a=Sr,"selectionStart"in a&&bi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ln&&on(ln,a)||(ln=a,a=Kn(vi,"onSelect"),0<a.length&&(r=new ui("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=Sr)))}function Gn(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Cr={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionend:Gn("Transition","TransitionEnd")},Si={},Zo={};i&&(Zo=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Qn(e){if(Si[e])return Si[e];if(!Cr[e])return e;var r=Cr[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Zo)return Si[e]=r[n];return e}var el=Qn("animationend"),tl=Qn("animationiteration"),rl=Qn("animationstart"),nl=Qn("transitionend"),al=new Map,il="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,r){al.set(e,r),b(r,[e])}for(var Ci=0;Ci<il.length;Ci++){var ji=il[Ci],Uu=ji.toLowerCase(),Pu=ji[0].toUpperCase()+ji.slice(1);Mt(Uu,"on"+Pu)}Mt(el,"onAnimationEnd"),Mt(tl,"onAnimationIteration"),Mt(rl,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(nl,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vu=new Set("cancel close invalid load scroll toggle".split(" ").concat(cn));function sl(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,Ud(a,r,void 0,e),e.currentTarget=null}function ol(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var c=void 0;if(r)for(var u=a.length-1;0<=u;u--){var f=a[u],g=f.instance,j=f.currentTarget;if(f=f.listener,g!==c&&o.isPropagationStopped())break e;sl(o,f,j),c=g}else for(u=0;u<a.length;u++){if(f=a[u],g=f.instance,j=f.currentTarget,f=f.listener,g!==c&&o.isPropagationStopped())break e;sl(o,f,j),c=g}}}if(Dn)throw e=ti,Dn=!1,ti=null,e}function fe(e,r){var n=r[Ai];n===void 0&&(n=r[Ai]=new Set);var a=e+"__bubble";n.has(a)||(ll(r,e,2,!1),n.add(a))}function ki(e,r,n){var a=0;r&&(a|=4),ll(n,e,a,r)}var Yn="_reactListening"+Math.random().toString(36).slice(2);function dn(e){if(!e[Yn]){e[Yn]=!0,m.forEach(function(n){n!=="selectionchange"&&(Vu.has(n)||ki(n,!1,e),ki(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Yn]||(r[Yn]=!0,ki("selectionchange",!1,r))}}function ll(e,r,n,a){switch(Eo(r)){case 1:var o=_d;break;case 4:o=Od;break;default:o=li}n=o.bind(null,r,n,e),o=void 0,!ei||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(r,n,{capture:!0,passive:o}):e.addEventListener(r,n,!0):o!==void 0?e.addEventListener(r,n,{passive:o}):e.addEventListener(r,n,!1)}function Ti(e,r,n,a,o){var c=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===o||f.nodeType===8&&f.parentNode===o)break;if(u===4)for(u=a.return;u!==null;){var g=u.tag;if((g===3||g===4)&&(g=u.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;u=u.return}for(;f!==null;){if(u=ar(f),u===null)return;if(g=u.tag,g===5||g===6){a=c=u;continue e}f=f.parentNode}}a=a.return}mo(function(){var j=c,V=Ka(n),E=[];e:{var N=al.get(e);if(N!==void 0){var I=ui,L=e;switch(e){case"keypress":if(_n(n)===0)break e;case"keydown":case"keyup":I=su;break;case"focusin":L="focus",I=hi;break;case"focusout":L="blur",I=hi;break;case"beforeblur":case"afterblur":I=hi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=cu;break;case el:case tl:case rl:I=Kd;break;case nl:I=uu;break;case"scroll":I=Xd;break;case"wheel":I=mu;break;case"copy":case"cut":case"paste":I=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=qo}var W=(r&4)!==0,ke=!W&&e==="scroll",S=W?N!==null?N+"Capture":null:N;W=[];for(var y=j,C;y!==null;){C=y;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,S!==null&&(D=Or(y,S),D!=null&&W.push(un(y,D,C)))),ke)break;y=y.return}0<W.length&&(N=new I(N,L,null,n,V),E.push({event:N,listeners:W}))}}if((r&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",N&&n!==Ya&&(L=n.relatedTarget||n.fromElement)&&(ar(L)||L[Vt]))break e;if((I||N)&&(N=V.window===V?V:(N=V.ownerDocument)?N.defaultView||N.parentWindow:window,I?(L=n.relatedTarget||n.toElement,I=j,L=L?ar(L):null,L!==null&&(ke=nr(L),L!==ke||L.tag!==5&&L.tag!==6)&&(L=null)):(I=null,L=j),I!==L)){if(W=Fo,D="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(W=qo,D="onPointerLeave",S="onPointerEnter",y="pointer"),ke=I==null?N:Tr(I),C=L==null?N:Tr(L),N=new W(D,y+"leave",I,n,V),N.target=ke,N.relatedTarget=C,D=null,ar(V)===j&&(W=new W(S,y+"enter",L,n,V),W.target=C,W.relatedTarget=ke,D=W),ke=D,I&&L)t:{for(W=I,S=L,y=0,C=W;C;C=jr(C))y++;for(C=0,D=S;D;D=jr(D))C++;for(;0<y-C;)W=jr(W),y--;for(;0<C-y;)S=jr(S),C--;for(;y--;){if(W===S||S!==null&&W===S.alternate)break t;W=jr(W),S=jr(S)}W=null}else W=null;I!==null&&cl(E,N,I,W,!1),L!==null&&ke!==null&&cl(E,ke,L,W,!0)}}e:{if(N=j?Tr(j):window,I=N.nodeName&&N.nodeName.toLowerCase(),I==="select"||I==="input"&&N.type==="file")var M=vu;else if(Wo(N))if(_o)M=ju;else{M=Su;var _=wu}else(I=N.nodeName)&&I.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(M=Cu);if(M&&(M=M(e,j))){Mo(E,M,n,V);break e}_&&_(e,N,j),e==="focusout"&&(_=N._wrapperState)&&_.controlled&&N.type==="number"&&Oa(N,"number",N.value)}switch(_=j?Tr(j):window,e){case"focusin":(Wo(_)||_.contentEditable==="true")&&(Sr=_,vi=j,ln=null);break;case"focusout":ln=vi=Sr=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,Jo(E,n,V);break;case"selectionchange":if(Nu)break;case"keydown":case"keyup":Jo(E,n,V)}var O;if(gi)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else wr?$o(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(zo&&n.locale!=="ko"&&(wr||H!=="onCompositionStart"?H==="onCompositionEnd"&&wr&&(O=Ao()):(Wt=V,di="value"in Wt?Wt.value:Wt.textContent,wr=!0)),_=Kn(j,H),0<_.length&&(H=new Bo(H,e,null,n,V),E.push({event:H,listeners:_}),O?H.data=O:(O=Lo(n),O!==null&&(H.data=O)))),(O=fu?gu(e,n):xu(e,n))&&(j=Kn(j,"onBeforeInput"),0<j.length&&(V=new Bo("onBeforeInput","beforeinput",null,n,V),E.push({event:V,listeners:j}),V.data=O))}ol(E,r)})}function un(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Kn(e,r){for(var n=r+"Capture",a=[];e!==null;){var o=e,c=o.stateNode;o.tag===5&&c!==null&&(o=c,c=Or(e,n),c!=null&&a.unshift(un(e,c,o)),c=Or(e,r),c!=null&&a.push(un(e,c,o))),e=e.return}return a}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cl(e,r,n,a,o){for(var c=r._reactName,u=[];n!==null&&n!==a;){var f=n,g=f.alternate,j=f.stateNode;if(g!==null&&g===a)break;f.tag===5&&j!==null&&(f=j,o?(g=Or(n,c),g!=null&&u.unshift(un(n,g,f))):o||(g=Or(n,c),g!=null&&u.push(un(n,g,f)))),n=n.return}u.length!==0&&e.push({event:r,listeners:u})}var Eu=/\r\n?/g,Au=/\u0000|\uFFFD/g;function dl(e){return(typeof e=="string"?e:""+e).replace(Eu,`
`).replace(Au,"")}function Jn(e,r,n){if(r=dl(r),dl(e)!==r&&n)throw Error(d(425))}function Zn(){}var Ni=null,Ui=null;function Pi(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Du=typeof clearTimeout=="function"?clearTimeout:void 0,ul=typeof Promise=="function"?Promise:void 0,Fu=typeof queueMicrotask=="function"?queueMicrotask:typeof ul<"u"?function(e){return ul.resolve(null).then(e).catch(Bu)}:Vi;function Bu(e){setTimeout(function(){throw e})}function Ei(e,r){var n=r,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),en(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);en(r)}function _t(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function pl(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+kr,pn="__reactProps$"+kr,Vt="__reactContainer$"+kr,Ai="__reactEvents$"+kr,qu="__reactListeners$"+kr,zu="__reactHandles$"+kr;function ar(e){var r=e[Tt];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Vt]||n[Tt]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=pl(e);e!==null;){if(n=e[Tt])return n;e=pl(e)}return r}e=n,n=e.parentNode}return null}function mn(e){return e=e[Tt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function ea(e){return e[pn]||null}var Di=[],Nr=-1;function Ot(e){return{current:e}}function ge(e){0>Nr||(e.current=Di[Nr],Di[Nr]=null,Nr--)}function me(e,r){Nr++,Di[Nr]=e.current,e.current=r}var Xt={},qe=Ot(Xt),Xe=Ot(!1),ir=Xt;function Ur(e,r){var n=e.type.contextTypes;if(!n)return Xt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var o={},c;for(c in n)o[c]=r[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function ta(){ge(Xe),ge(qe)}function ml(e,r,n){if(qe.current!==Xt)throw Error(d(168));me(qe,r),me(Xe,n)}function hl(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in r))throw Error(d(108,pe(e)||"Unknown",o));return $({},n,a)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,ir=qe.current,me(qe,e),me(Xe,Xe.current),!0}function fl(e,r,n){var a=e.stateNode;if(!a)throw Error(d(169));n?(e=hl(e,r,ir),a.__reactInternalMemoizedMergedChildContext=e,ge(Xe),ge(qe),me(qe,e)):ge(Xe),me(Xe,n)}var Et=null,na=!1,Fi=!1;function gl(e){Et===null?Et=[e]:Et.push(e)}function Iu(e){na=!0,gl(e)}function Ht(){if(!Fi&&Et!==null){Fi=!0;var e=0,r=de;try{var n=Et;for(de=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Et=null,na=!1}catch(o){throw Et!==null&&(Et=Et.slice(e+1)),yo(ri,Ht),o}finally{de=r,Fi=!1}}return null}var Pr=[],Vr=0,aa=null,ia=0,dt=[],ut=0,sr=null,At=1,Dt="";function or(e,r){Pr[Vr++]=ia,Pr[Vr++]=aa,aa=e,ia=r}function xl(e,r,n){dt[ut++]=At,dt[ut++]=Dt,dt[ut++]=sr,sr=e;var a=At;e=Dt;var o=32-xt(a)-1;a&=~(1<<o),n+=1;var c=32-xt(r)+o;if(30<c){var u=o-o%5;c=(a&(1<<u)-1).toString(32),a>>=u,o-=u,At=1<<32-xt(r)+o|n<<o|a,Dt=c+e}else At=1<<c|n<<o|a,Dt=e}function Bi(e){e.return!==null&&(or(e,1),xl(e,1,0))}function qi(e){for(;e===aa;)aa=Pr[--Vr],Pr[Vr]=null,ia=Pr[--Vr],Pr[Vr]=null;for(;e===sr;)sr=dt[--ut],dt[ut]=null,Dt=dt[--ut],dt[ut]=null,At=dt[--ut],dt[ut]=null}var nt=null,at=null,be=!1,bt=null;function yl(e,r){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function bl(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,nt=e,at=_t(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,nt=e,at=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=sr!==null?{id:At,overflow:Dt}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,nt=e,at=null,!0):!1;default:return!1}}function zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ii(e){if(be){var r=at;if(r){var n=r;if(!bl(e,r)){if(zi(e))throw Error(d(418));r=_t(n.nextSibling);var a=nt;r&&bl(e,r)?yl(a,n):(e.flags=e.flags&-4097|2,be=!1,nt=e)}}else{if(zi(e))throw Error(d(418));e.flags=e.flags&-4097|2,be=!1,nt=e}}}function vl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function sa(e){if(e!==nt)return!1;if(!be)return vl(e),be=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Pi(e.type,e.memoizedProps)),r&&(r=at)){if(zi(e))throw wl(),Error(d(418));for(;r;)yl(e,r),r=_t(r.nextSibling)}if(vl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){at=_t(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}at=null}}else at=nt?_t(e.stateNode.nextSibling):null;return!0}function wl(){for(var e=at;e;)e=_t(e.nextSibling)}function Er(){at=nt=null,be=!1}function Ri(e){bt===null?bt=[e]:bt.push(e)}var Ru=Ue.ReactCurrentBatchConfig;function hn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(d(309));var a=n.stateNode}if(!a)throw Error(d(147,e));var o=a,c=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===c?r.ref:(r=function(u){var f=o.refs;u===null?delete f[c]:f[c]=u},r._stringRef=c,r)}if(typeof e!="string")throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function oa(e,r){throw e=Object.prototype.toString.call(r),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Sl(e){var r=e._init;return r(e._payload)}function Cl(e){function r(S,y){if(e){var C=S.deletions;C===null?(S.deletions=[y],S.flags|=16):C.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)r(S,y),y=y.sibling;return null}function a(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function o(S,y){return S=tr(S,y),S.index=0,S.sibling=null,S}function c(S,y,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<y?(S.flags|=2,y):C):(S.flags|=2,y)):(S.flags|=1048576,y)}function u(S){return e&&S.alternate===null&&(S.flags|=2),S}function f(S,y,C,D){return y===null||y.tag!==6?(y=Vs(C,S.mode,D),y.return=S,y):(y=o(y,C),y.return=S,y)}function g(S,y,C,D){var M=C.type;return M===ue?V(S,y,C.props.children,D,C.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oe&&Sl(M)===y.type)?(D=o(y,C.props),D.ref=hn(S,y,C),D.return=S,D):(D=Ea(C.type,C.key,C.props,null,S.mode,D),D.ref=hn(S,y,C),D.return=S,D)}function j(S,y,C,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=Es(C,S.mode,D),y.return=S,y):(y=o(y,C.children||[]),y.return=S,y)}function V(S,y,C,D,M){return y===null||y.tag!==7?(y=fr(C,S.mode,D,M),y.return=S,y):(y=o(y,C),y.return=S,y)}function E(S,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Vs(""+y,S.mode,C),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case et:return C=Ea(y.type,y.key,y.props,null,S.mode,C),C.ref=hn(S,null,y),C.return=S,C;case U:return y=Es(y,S.mode,C),y.return=S,y;case Oe:var D=y._init;return E(S,D(y._payload),C)}if(Wr(y)||X(y))return y=fr(y,S.mode,C,null),y.return=S,y;oa(S,y)}return null}function N(S,y,C,D){var M=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:f(S,y,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case et:return C.key===M?g(S,y,C,D):null;case U:return C.key===M?j(S,y,C,D):null;case Oe:return M=C._init,N(S,y,M(C._payload),D)}if(Wr(C)||X(C))return M!==null?null:V(S,y,C,D,null);oa(S,C)}return null}function I(S,y,C,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(C)||null,f(y,S,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case et:return S=S.get(D.key===null?C:D.key)||null,g(y,S,D,M);case U:return S=S.get(D.key===null?C:D.key)||null,j(y,S,D,M);case Oe:var _=D._init;return I(S,y,C,_(D._payload),M)}if(Wr(D)||X(D))return S=S.get(C)||null,V(y,S,D,M,null);oa(y,D)}return null}function L(S,y,C,D){for(var M=null,_=null,O=y,H=y=0,De=null;O!==null&&H<C.length;H++){O.index>H?(De=O,O=null):De=O.sibling;var le=N(S,O,C[H],D);if(le===null){O===null&&(O=De);break}e&&O&&le.alternate===null&&r(S,O),y=c(le,y,H),_===null?M=le:_.sibling=le,_=le,O=De}if(H===C.length)return n(S,O),be&&or(S,H),M;if(O===null){for(;H<C.length;H++)O=E(S,C[H],D),O!==null&&(y=c(O,y,H),_===null?M=O:_.sibling=O,_=O);return be&&or(S,H),M}for(O=a(S,O);H<C.length;H++)De=I(O,S,H,C[H],D),De!==null&&(e&&De.alternate!==null&&O.delete(De.key===null?H:De.key),y=c(De,y,H),_===null?M=De:_.sibling=De,_=De);return e&&O.forEach(function(rr){return r(S,rr)}),be&&or(S,H),M}function W(S,y,C,D){var M=X(C);if(typeof M!="function")throw Error(d(150));if(C=M.call(C),C==null)throw Error(d(151));for(var _=M=null,O=y,H=y=0,De=null,le=C.next();O!==null&&!le.done;H++,le=C.next()){O.index>H?(De=O,O=null):De=O.sibling;var rr=N(S,O,le.value,D);if(rr===null){O===null&&(O=De);break}e&&O&&rr.alternate===null&&r(S,O),y=c(rr,y,H),_===null?M=rr:_.sibling=rr,_=rr,O=De}if(le.done)return n(S,O),be&&or(S,H),M;if(O===null){for(;!le.done;H++,le=C.next())le=E(S,le.value,D),le!==null&&(y=c(le,y,H),_===null?M=le:_.sibling=le,_=le);return be&&or(S,H),M}for(O=a(S,O);!le.done;H++,le=C.next())le=I(O,S,H,le.value,D),le!==null&&(e&&le.alternate!==null&&O.delete(le.key===null?H:le.key),y=c(le,y,H),_===null?M=le:_.sibling=le,_=le);return e&&O.forEach(function(yp){return r(S,yp)}),be&&or(S,H),M}function ke(S,y,C,D){if(typeof C=="object"&&C!==null&&C.type===ue&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case et:e:{for(var M=C.key,_=y;_!==null;){if(_.key===M){if(M=C.type,M===ue){if(_.tag===7){n(S,_.sibling),y=o(_,C.props.children),y.return=S,S=y;break e}}else if(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oe&&Sl(M)===_.type){n(S,_.sibling),y=o(_,C.props),y.ref=hn(S,_,C),y.return=S,S=y;break e}n(S,_);break}else r(S,_);_=_.sibling}C.type===ue?(y=fr(C.props.children,S.mode,D,C.key),y.return=S,S=y):(D=Ea(C.type,C.key,C.props,null,S.mode,D),D.ref=hn(S,y,C),D.return=S,S=D)}return u(S);case U:e:{for(_=C.key;y!==null;){if(y.key===_)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){n(S,y.sibling),y=o(y,C.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else r(S,y);y=y.sibling}y=Es(C,S.mode,D),y.return=S,S=y}return u(S);case Oe:return _=C._init,ke(S,y,_(C._payload),D)}if(Wr(C))return L(S,y,C,D);if(X(C))return W(S,y,C,D);oa(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(n(S,y.sibling),y=o(y,C),y.return=S,S=y):(n(S,y),y=Vs(C,S.mode,D),y.return=S,S=y),u(S)):n(S,y)}return ke}var Ar=Cl(!0),jl=Cl(!1),la=Ot(null),ca=null,Dr=null,$i=null;function Li(){$i=Dr=ca=null}function Wi(e){var r=la.current;ge(la),e._currentValue=r}function Mi(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function Fr(e,r){ca=e,$i=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ge=!0),e.firstContext=null)}function pt(e){var r=e._currentValue;if($i!==e)if(e={context:e,memoizedValue:r,next:null},Dr===null){if(ca===null)throw Error(d(308));Dr=e,ca.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return r}var lr=null;function _i(e){lr===null?lr=[e]:lr.push(e)}function kl(e,r,n,a){var o=r.interleaved;return o===null?(n.next=n,_i(r)):(n.next=o.next,o.next=n),r.interleaved=n,Ft(e,a)}function Ft(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tl(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Qt(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ie&2)!==0){var o=a.pending;return o===null?r.next=r:(r.next=o.next,o.next=r),a.pending=r,Ft(e,n)}return o=a.interleaved,o===null?(r.next=r,_i(a)):(r.next=o.next,o.next=r),a.interleaved=r,Ft(e,n)}function da(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,ii(e,n)}}function Nl(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?o=c=u:c=c.next=u,n=n.next}while(n!==null);c===null?o=c=r:c=c.next=r}else o=c=r;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function ua(e,r,n,a){var o=e.updateQueue;Gt=!1;var c=o.firstBaseUpdate,u=o.lastBaseUpdate,f=o.shared.pending;if(f!==null){o.shared.pending=null;var g=f,j=g.next;g.next=null,u===null?c=j:u.next=j,u=g;var V=e.alternate;V!==null&&(V=V.updateQueue,f=V.lastBaseUpdate,f!==u&&(f===null?V.firstBaseUpdate=j:f.next=j,V.lastBaseUpdate=g))}if(c!==null){var E=o.baseState;u=0,V=j=g=null,f=c;do{var N=f.lane,I=f.eventTime;if((a&N)===N){V!==null&&(V=V.next={eventTime:I,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var L=e,W=f;switch(N=r,I=n,W.tag){case 1:if(L=W.payload,typeof L=="function"){E=L.call(I,E,N);break e}E=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=W.payload,N=typeof L=="function"?L.call(I,E,N):L,N==null)break e;E=$({},E,N);break e;case 2:Gt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,N=o.effects,N===null?o.effects=[f]:N.push(f))}else I={eventTime:I,lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},V===null?(j=V=I,g=E):V=V.next=I,u|=N;if(f=f.next,f===null){if(f=o.shared.pending,f===null)break;N=f,f=N.next,N.next=null,o.lastBaseUpdate=N,o.shared.pending=null}}while(!0);if(V===null&&(g=E),o.baseState=g,o.firstBaseUpdate=j,o.lastBaseUpdate=V,r=o.shared.interleaved,r!==null){o=r;do u|=o.lane,o=o.next;while(o!==r)}else c===null&&(o.shared.lanes=0);ur|=u,e.lanes=u,e.memoizedState=E}}function Ul(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(d(191,o));o.call(a)}}}var fn={},Nt=Ot(fn),gn=Ot(fn),xn=Ot(fn);function cr(e){if(e===fn)throw Error(d(174));return e}function Xi(e,r){switch(me(xn,r),me(gn,e),me(Nt,fn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ha(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ha(r,e)}ge(Nt),me(Nt,r)}function Br(){ge(Nt),ge(gn),ge(xn)}function Pl(e){cr(xn.current);var r=cr(Nt.current),n=Ha(r,e.type);r!==n&&(me(gn,e),me(Nt,n))}function Hi(e){gn.current===e&&(ge(Nt),ge(gn))}var ve=Ot(0);function pa(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Gi=[];function Qi(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var ma=Ue.ReactCurrentDispatcher,Yi=Ue.ReactCurrentBatchConfig,dr=0,we=null,Pe=null,Ee=null,ha=!1,yn=!1,bn=0,$u=0;function ze(){throw Error(d(321))}function Ki(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!yt(e[n],r[n]))return!1;return!0}function Ji(e,r,n,a,o,c){if(dr=c,we=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ma.current=e===null||e.memoizedState===null?_u:Ou,e=n(a,o),yn){c=0;do{if(yn=!1,bn=0,25<=c)throw Error(d(301));c+=1,Ee=Pe=null,r.updateQueue=null,ma.current=Xu,e=n(a,o)}while(yn)}if(ma.current=xa,r=Pe!==null&&Pe.next!==null,dr=0,Ee=Pe=we=null,ha=!1,r)throw Error(d(300));return e}function Zi(){var e=bn!==0;return bn=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?we.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function mt(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var r=Ee===null?we.memoizedState:Ee.next;if(r!==null)Ee=r,Pe=e;else{if(e===null)throw Error(d(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ee===null?we.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function vn(e,r){return typeof r=="function"?r(e):r}function es(e){var r=mt(),n=r.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var a=Pe,o=a.baseQueue,c=n.pending;if(c!==null){if(o!==null){var u=o.next;o.next=c.next,c.next=u}a.baseQueue=o=c,n.pending=null}if(o!==null){c=o.next,a=a.baseState;var f=u=null,g=null,j=c;do{var V=j.lane;if((dr&V)===V)g!==null&&(g=g.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),a=j.hasEagerState?j.eagerState:e(a,j.action);else{var E={lane:V,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};g===null?(f=g=E,u=a):g=g.next=E,we.lanes|=V,ur|=V}j=j.next}while(j!==null&&j!==c);g===null?u=a:g.next=f,yt(a,r.memoizedState)||(Ge=!0),r.memoizedState=a,r.baseState=u,r.baseQueue=g,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do c=o.lane,we.lanes|=c,ur|=c,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function ts(e){var r=mt(),n=r.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,c=r.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do c=e(c,u.action),u=u.next;while(u!==o);yt(c,r.memoizedState)||(Ge=!0),r.memoizedState=c,r.baseQueue===null&&(r.baseState=c),n.lastRenderedState=c}return[c,a]}function Vl(){}function El(e,r){var n=we,a=mt(),o=r(),c=!yt(a.memoizedState,o);if(c&&(a.memoizedState=o,Ge=!0),a=a.queue,rs(Fl.bind(null,n,a,e),[e]),a.getSnapshot!==r||c||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,wn(9,Dl.bind(null,n,a,o,r),void 0,null),Ae===null)throw Error(d(349));(dr&30)!==0||Al(n,r,o)}return o}function Al(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=we.updateQueue,r===null?(r={lastEffect:null,stores:null},we.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Dl(e,r,n,a){r.value=n,r.getSnapshot=a,Bl(r)&&ql(e)}function Fl(e,r,n){return n(function(){Bl(r)&&ql(e)})}function Bl(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!yt(e,n)}catch{return!0}}function ql(e){var r=Ft(e,1);r!==null&&Ct(r,e,1,-1)}function zl(e){var r=Ut();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},r.queue=e,e=e.dispatch=Mu.bind(null,we,e),[r.memoizedState,e]}function wn(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=we.updateQueue,r===null?(r={lastEffect:null,stores:null},we.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function Il(){return mt().memoizedState}function fa(e,r,n,a){var o=Ut();we.flags|=e,o.memoizedState=wn(1|r,n,void 0,a===void 0?null:a)}function ga(e,r,n,a){var o=mt();a=a===void 0?null:a;var c=void 0;if(Pe!==null){var u=Pe.memoizedState;if(c=u.destroy,a!==null&&Ki(a,u.deps)){o.memoizedState=wn(r,n,c,a);return}}we.flags|=e,o.memoizedState=wn(1|r,n,c,a)}function Rl(e,r){return fa(8390656,8,e,r)}function rs(e,r){return ga(2048,8,e,r)}function $l(e,r){return ga(4,2,e,r)}function Ll(e,r){return ga(4,4,e,r)}function Wl(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Ml(e,r,n){return n=n!=null?n.concat([e]):null,ga(4,4,Wl.bind(null,r,e),n)}function ns(){}function _l(e,r){var n=mt();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Ki(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function Ol(e,r){var n=mt();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Ki(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function Xl(e,r,n){return(dr&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(yt(n,r)||(n=So(),we.lanes|=n,ur|=n,e.baseState=!0),r)}function Lu(e,r){var n=de;de=n!==0&&4>n?n:4,e(!0);var a=Yi.transition;Yi.transition={};try{e(!1),r()}finally{de=n,Yi.transition=a}}function Hl(){return mt().memoizedState}function Wu(e,r,n){var a=Zt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Gl(e))Ql(r,n);else if(n=kl(e,r,n,a),n!==null){var o=Me();Ct(n,e,a,o),Yl(n,r,a)}}function Mu(e,r,n){var a=Zt(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))Ql(r,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=r.lastRenderedReducer,c!==null))try{var u=r.lastRenderedState,f=c(u,n);if(o.hasEagerState=!0,o.eagerState=f,yt(f,u)){var g=r.interleaved;g===null?(o.next=o,_i(r)):(o.next=g.next,g.next=o),r.interleaved=o;return}}catch{}finally{}n=kl(e,r,o,a),n!==null&&(o=Me(),Ct(n,e,a,o),Yl(n,r,a))}}function Gl(e){var r=e.alternate;return e===we||r!==null&&r===we}function Ql(e,r){yn=ha=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Yl(e,r,n){if((n&4194240)!==0){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,ii(e,n)}}var xa={readContext:pt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},_u={readContext:pt,useCallback:function(e,r){return Ut().memoizedState=[e,r===void 0?null:r],e},useContext:pt,useEffect:Rl,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,fa(4194308,4,Wl.bind(null,r,e),n)},useLayoutEffect:function(e,r){return fa(4194308,4,e,r)},useInsertionEffect:function(e,r){return fa(4,2,e,r)},useMemo:function(e,r){var n=Ut();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=Ut();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Wu.bind(null,we,e),[a.memoizedState,e]},useRef:function(e){var r=Ut();return e={current:e},r.memoizedState=e},useState:zl,useDebugValue:ns,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=zl(!1),r=e[0];return e=Lu.bind(null,e[1]),Ut().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=we,o=Ut();if(be){if(n===void 0)throw Error(d(407));n=n()}else{if(n=r(),Ae===null)throw Error(d(349));(dr&30)!==0||Al(a,r,n)}o.memoizedState=n;var c={value:n,getSnapshot:r};return o.queue=c,Rl(Fl.bind(null,a,c,e),[e]),a.flags|=2048,wn(9,Dl.bind(null,a,c,n,r),void 0,null),n},useId:function(){var e=Ut(),r=Ae.identifierPrefix;if(be){var n=Dt,a=At;n=(a&~(1<<32-xt(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=bn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=$u++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ou={readContext:pt,useCallback:_l,useContext:pt,useEffect:rs,useImperativeHandle:Ml,useInsertionEffect:$l,useLayoutEffect:Ll,useMemo:Ol,useReducer:es,useRef:Il,useState:function(){return es(vn)},useDebugValue:ns,useDeferredValue:function(e){var r=mt();return Xl(r,Pe.memoizedState,e)},useTransition:function(){var e=es(vn)[0],r=mt().memoizedState;return[e,r]},useMutableSource:Vl,useSyncExternalStore:El,useId:Hl,unstable_isNewReconciler:!1},Xu={readContext:pt,useCallback:_l,useContext:pt,useEffect:rs,useImperativeHandle:Ml,useInsertionEffect:$l,useLayoutEffect:Ll,useMemo:Ol,useReducer:ts,useRef:Il,useState:function(){return ts(vn)},useDebugValue:ns,useDeferredValue:function(e){var r=mt();return Pe===null?r.memoizedState=e:Xl(r,Pe.memoizedState,e)},useTransition:function(){var e=ts(vn)[0],r=mt().memoizedState;return[e,r]},useMutableSource:Vl,useSyncExternalStore:El,useId:Hl,unstable_isNewReconciler:!1};function vt(e,r){if(e&&e.defaultProps){r=$({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function as(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:$({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=Me(),o=Zt(e),c=Bt(a,o);c.payload=r,n!=null&&(c.callback=n),r=Qt(e,c,o),r!==null&&(Ct(r,e,o,a),da(r,e,o))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=Me(),o=Zt(e),c=Bt(a,o);c.tag=1,c.payload=r,n!=null&&(c.callback=n),r=Qt(e,c,o),r!==null&&(Ct(r,e,o,a),da(r,e,o))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Me(),a=Zt(e),o=Bt(n,a);o.tag=2,r!=null&&(o.callback=r),r=Qt(e,o,a),r!==null&&(Ct(r,e,a,n),da(r,e,a))}};function Kl(e,r,n,a,o,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,u):r.prototype&&r.prototype.isPureReactComponent?!on(n,a)||!on(o,c):!0}function Jl(e,r,n){var a=!1,o=Xt,c=r.contextType;return typeof c=="object"&&c!==null?c=pt(c):(o=He(r)?ir:qe.current,a=r.contextTypes,c=(a=a!=null)?Ur(e,o):Xt),r=new r(n,c),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ya,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),r}function Zl(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&ya.enqueueReplaceState(r,r.state,null)}function is(e,r,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Oi(e);var c=r.contextType;typeof c=="object"&&c!==null?o.context=pt(c):(c=He(r)?ir:qe.current,o.context=Ur(e,c)),o.state=e.memoizedState,c=r.getDerivedStateFromProps,typeof c=="function"&&(as(e,r,c,n),o.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&ya.enqueueReplaceState(o,o.state,null),ua(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,r){try{var n="",a=r;do n+=se(a),a=a.return;while(a);var o=n}catch(c){o=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:r,stack:o,digest:null}}function ss(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function os(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Hu=typeof WeakMap=="function"?WeakMap:Map;function ec(e,r,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){ka||(ka=!0,Ss=a),os(e,r)},n}function tc(e,r,n){n=Bt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=r.value;n.payload=function(){return a(o)},n.callback=function(){os(e,r)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){os(e,r),typeof a!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})}),n}function rc(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Hu;var o=new Set;a.set(r,o)}else o=a.get(r),o===void 0&&(o=new Set,a.set(r,o));o.has(n)||(o.add(n),e=op.bind(null,e,r,n),r.then(e,e))}function nc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ac(e,r,n,a,o){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Bt(-1,1),r.tag=2,Qt(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Gu=Ue.ReactCurrentOwner,Ge=!1;function We(e,r,n,a){r.child=e===null?jl(r,null,n,a):Ar(r,e.child,n,a)}function ic(e,r,n,a,o){n=n.render;var c=r.ref;return Fr(r,o),a=Ji(e,r,n,a,c,o),n=Zi(),e!==null&&!Ge?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~o,qt(e,r,o)):(be&&n&&Bi(r),r.flags|=1,We(e,r,a,o),r.child)}function sc(e,r,n,a,o){if(e===null){var c=n.type;return typeof c=="function"&&!Ps(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=c,oc(e,r,c,a,o)):(e=Ea(n.type,null,a,r,r.mode,o),e.ref=r.ref,e.return=r,r.child=e)}if(c=e.child,(e.lanes&o)===0){var u=c.memoizedProps;if(n=n.compare,n=n!==null?n:on,n(u,a)&&e.ref===r.ref)return qt(e,r,o)}return r.flags|=1,e=tr(c,a),e.ref=r.ref,e.return=r,r.child=e}function oc(e,r,n,a,o){if(e!==null){var c=e.memoizedProps;if(on(c,a)&&e.ref===r.ref)if(Ge=!1,r.pendingProps=a=c,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ge=!0);else return r.lanes=e.lanes,qt(e,r,o)}return ls(e,r,n,a,o)}function lc(e,r,n){var a=r.pendingProps,o=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ir,it),it|=n;else{if((n&1073741824)===0)return e=c!==null?c.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,me(Ir,it),it|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:n,me(Ir,it),it|=a}else c!==null?(a=c.baseLanes|n,r.memoizedState=null):a=n,me(Ir,it),it|=a;return We(e,r,o,n),r.child}function cc(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ls(e,r,n,a,o){var c=He(n)?ir:qe.current;return c=Ur(r,c),Fr(r,o),n=Ji(e,r,n,a,c,o),a=Zi(),e!==null&&!Ge?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~o,qt(e,r,o)):(be&&a&&Bi(r),r.flags|=1,We(e,r,n,o),r.child)}function dc(e,r,n,a,o){if(He(n)){var c=!0;ra(r)}else c=!1;if(Fr(r,o),r.stateNode===null)va(e,r),Jl(r,n,a),is(r,n,a,o),a=!0;else if(e===null){var u=r.stateNode,f=r.memoizedProps;u.props=f;var g=u.context,j=n.contextType;typeof j=="object"&&j!==null?j=pt(j):(j=He(n)?ir:qe.current,j=Ur(r,j));var V=n.getDerivedStateFromProps,E=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function";E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==a||g!==j)&&Zl(r,u,a,j),Gt=!1;var N=r.memoizedState;u.state=N,ua(r,a,u,o),g=r.memoizedState,f!==a||N!==g||Xe.current||Gt?(typeof V=="function"&&(as(r,n,V,a),g=r.memoizedState),(f=Gt||Kl(r,n,f,a,N,g,j))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(r.flags|=4194308)):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=g),u.props=a,u.state=g,u.context=j,a=f):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{u=r.stateNode,Tl(e,r),f=r.memoizedProps,j=r.type===r.elementType?f:vt(r.type,f),u.props=j,E=r.pendingProps,N=u.context,g=n.contextType,typeof g=="object"&&g!==null?g=pt(g):(g=He(n)?ir:qe.current,g=Ur(r,g));var I=n.getDerivedStateFromProps;(V=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==E||N!==g)&&Zl(r,u,a,g),Gt=!1,N=r.memoizedState,u.state=N,ua(r,a,u,o);var L=r.memoizedState;f!==E||N!==L||Xe.current||Gt?(typeof I=="function"&&(as(r,n,I,a),L=r.memoizedState),(j=Gt||Kl(r,n,j,a,N,L,g)||!1)?(V||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,L,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,L,g)),typeof u.componentDidUpdate=="function"&&(r.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=L),u.props=a,u.state=L,u.context=g,a=j):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(r.flags|=1024),a=!1)}return cs(e,r,n,a,c,o)}function cs(e,r,n,a,o,c){cc(e,r);var u=(r.flags&128)!==0;if(!a&&!u)return o&&fl(r,n,!1),qt(e,r,c);a=r.stateNode,Gu.current=r;var f=u&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&u?(r.child=Ar(r,e.child,null,c),r.child=Ar(r,null,f,c)):We(e,r,f,c),r.memoizedState=a.state,o&&fl(r,n,!0),r.child}function uc(e){var r=e.stateNode;r.pendingContext?ml(e,r.pendingContext,r.pendingContext!==r.context):r.context&&ml(e,r.context,!1),Xi(e,r.containerInfo)}function pc(e,r,n,a,o){return Er(),Ri(o),r.flags|=256,We(e,r,n,a),r.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function mc(e,r,n){var a=r.pendingProps,o=ve.current,c=!1,u=(r.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(o&2)!==0),f?(c=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(ve,o&1),e===null)return Ii(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(u=a.children,e=a.fallback,c?(a=r.mode,c=r.child,u={mode:"hidden",children:u},(a&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=u):c=Aa(u,a,0,null),e=fr(e,a,n,null),c.return=r,e.return=r,c.sibling=e,r.child=c,r.child.memoizedState=us(n),r.memoizedState=ds,e):ps(r,u));if(o=e.memoizedState,o!==null&&(f=o.dehydrated,f!==null))return Qu(e,r,u,a,f,o,n);if(c){c=a.fallback,u=r.mode,o=e.child,f=o.sibling;var g={mode:"hidden",children:a.children};return(u&1)===0&&r.child!==o?(a=r.child,a.childLanes=0,a.pendingProps=g,r.deletions=null):(a=tr(o,g),a.subtreeFlags=o.subtreeFlags&14680064),f!==null?c=tr(f,c):(c=fr(c,u,n,null),c.flags|=2),c.return=r,a.return=r,a.sibling=c,r.child=a,a=c,c=r.child,u=e.child.memoizedState,u=u===null?us(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},c.memoizedState=u,c.childLanes=e.childLanes&~n,r.memoizedState=ds,a}return c=e.child,e=c.sibling,a=tr(c,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function ps(e,r){return r=Aa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ba(e,r,n,a){return a!==null&&Ri(a),Ar(r,e.child,null,n),e=ps(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Qu(e,r,n,a,o,c,u){if(n)return r.flags&256?(r.flags&=-257,a=ss(Error(d(422))),ba(e,r,u,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(c=a.fallback,o=r.mode,a=Aa({mode:"visible",children:a.children},o,0,null),c=fr(c,o,u,null),c.flags|=2,a.return=r,c.return=r,a.sibling=c,r.child=a,(r.mode&1)!==0&&Ar(r,e.child,null,u),r.child.memoizedState=us(u),r.memoizedState=ds,c);if((r.mode&1)===0)return ba(e,r,u,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var f=a.dgst;return a=f,c=Error(d(419)),a=ss(c,a,void 0),ba(e,r,u,a)}if(f=(u&e.childLanes)!==0,Ge||f){if(a=Ae,a!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(a.suspendedLanes|u))!==0?0:o,o!==0&&o!==c.retryLane&&(c.retryLane=o,Ft(e,o),Ct(a,e,o,-1))}return Us(),a=ss(Error(d(421))),ba(e,r,u,a)}return o.data==="$?"?(r.flags|=128,r.child=e.child,r=lp.bind(null,e),o._reactRetry=r,null):(e=c.treeContext,at=_t(o.nextSibling),nt=r,be=!0,bt=null,e!==null&&(dt[ut++]=At,dt[ut++]=Dt,dt[ut++]=sr,At=e.id,Dt=e.overflow,sr=r),r=ps(r,a.children),r.flags|=4096,r)}function hc(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),Mi(e.return,r,n)}function ms(e,r,n,a,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(c.isBackwards=r,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=o)}function fc(e,r,n){var a=r.pendingProps,o=a.revealOrder,c=a.tail;if(We(e,r,a.children,n),a=ve.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hc(e,n,r);else if(e.tag===19)hc(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(me(ve,a),(r.mode&1)===0)r.memoizedState=null;else switch(o){case"forwards":for(n=r.child,o=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=r.child,r.child=null):(o=n.sibling,n.sibling=null),ms(r,!1,o,n,c);break;case"backwards":for(n=null,o=r.child,r.child=null;o!==null;){if(e=o.alternate,e!==null&&pa(e)===null){r.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ms(r,!0,n,null,c);break;case"together":ms(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function va(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function qt(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),ur|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(d(153));if(r.child!==null){for(e=r.child,n=tr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Yu(e,r,n){switch(r.tag){case 3:uc(r),Er();break;case 5:Pl(r);break;case 1:He(r.type)&&ra(r);break;case 4:Xi(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,o=r.memoizedProps.value;me(la,a._currentValue),a._currentValue=o;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(me(ve,ve.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?mc(e,r,n):(me(ve,ve.current&1),e=qt(e,r,n),e!==null?e.sibling:null);me(ve,ve.current&1);break;case 19:if(a=(n&r.childLanes)!==0,(e.flags&128)!==0){if(a)return fc(e,r,n);r.flags|=128}if(o=r.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(ve,ve.current),a)break;return null;case 22:case 23:return r.lanes=0,lc(e,r,n)}return qt(e,r,n)}var gc,hs,xc,yc;gc=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},hs=function(){},xc=function(e,r,n,a){var o=e.memoizedProps;if(o!==a){e=r.stateNode,cr(Nt.current);var c=null;switch(n){case"input":o=Ma(e,o),a=Ma(e,a),c=[];break;case"select":o=$({},o,{value:void 0}),a=$({},a,{value:void 0}),c=[];break;case"textarea":o=Xa(e,o),a=Xa(e,a),c=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Zn)}Ga(n,a);var u;n=null;for(j in o)if(!a.hasOwnProperty(j)&&o.hasOwnProperty(j)&&o[j]!=null)if(j==="style"){var f=o[j];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(h.hasOwnProperty(j)?c||(c=[]):(c=c||[]).push(j,null));for(j in a){var g=a[j];if(f=o!=null?o[j]:void 0,a.hasOwnProperty(j)&&g!==f&&(g!=null||f!=null))if(j==="style")if(f){for(u in f)!f.hasOwnProperty(u)||g&&g.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in g)g.hasOwnProperty(u)&&f[u]!==g[u]&&(n||(n={}),n[u]=g[u])}else n||(c||(c=[]),c.push(j,n)),n=g;else j==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,f=f?f.__html:void 0,g!=null&&f!==g&&(c=c||[]).push(j,g)):j==="children"?typeof g!="string"&&typeof g!="number"||(c=c||[]).push(j,""+g):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(h.hasOwnProperty(j)?(g!=null&&j==="onScroll"&&fe("scroll",e),c||f===g||(c=[])):(c=c||[]).push(j,g))}n&&(c=c||[]).push("style",n);var j=c;(r.updateQueue=j)&&(r.flags|=4)}},yc=function(e,r,n,a){n!==a&&(r.flags|=4)};function Sn(e,r){if(!be)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ie(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function Ku(e,r,n){var a=r.pendingProps;switch(qi(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(r),null;case 1:return He(r.type)&&ta(),Ie(r),null;case 3:return a=r.stateNode,Br(),ge(Xe),ge(qe),Qi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(sa(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,bt!==null&&(ks(bt),bt=null))),hs(e,r),Ie(r),null;case 5:Hi(r);var o=cr(xn.current);if(n=r.type,e!==null&&r.stateNode!=null)xc(e,r,n,a,o),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(d(166));return Ie(r),null}if(e=cr(Nt.current),sa(r)){a=r.stateNode,n=r.type;var c=r.memoizedProps;switch(a[Tt]=r,a[pn]=c,e=(r.mode&1)!==0,n){case"dialog":fe("cancel",a),fe("close",a);break;case"iframe":case"object":case"embed":fe("load",a);break;case"video":case"audio":for(o=0;o<cn.length;o++)fe(cn[o],a);break;case"source":fe("error",a);break;case"img":case"image":case"link":fe("error",a),fe("load",a);break;case"details":fe("toggle",a);break;case"input":Ks(a,c),fe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},fe("invalid",a);break;case"textarea":eo(a,c),fe("invalid",a)}Ga(n,c),o=null;for(var u in c)if(c.hasOwnProperty(u)){var f=c[u];u==="children"?typeof f=="string"?a.textContent!==f&&(c.suppressHydrationWarning!==!0&&Jn(a.textContent,f,e),o=["children",f]):typeof f=="number"&&a.textContent!==""+f&&(c.suppressHydrationWarning!==!0&&Jn(a.textContent,f,e),o=["children",""+f]):h.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&fe("scroll",a)}switch(n){case"input":Pn(a),Zs(a,c,!0);break;case"textarea":Pn(a),ro(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=Zn)}a=o,r.updateQueue=a,a!==null&&(r.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=no(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(n,{is:a.is}):(e=u.createElement(n),n==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,n),e[Tt]=r,e[pn]=a,gc(e,r,!1,!1),r.stateNode=e;e:{switch(u=Qa(n,a),n){case"dialog":fe("cancel",e),fe("close",e),o=a;break;case"iframe":case"object":case"embed":fe("load",e),o=a;break;case"video":case"audio":for(o=0;o<cn.length;o++)fe(cn[o],e);o=a;break;case"source":fe("error",e),o=a;break;case"img":case"image":case"link":fe("error",e),fe("load",e),o=a;break;case"details":fe("toggle",e),o=a;break;case"input":Ks(e,a),o=Ma(e,a),fe("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=$({},a,{value:void 0}),fe("invalid",e);break;case"textarea":eo(e,a),o=Xa(e,a),fe("invalid",e);break;default:o=a}Ga(n,o),f=o;for(c in f)if(f.hasOwnProperty(c)){var g=f[c];c==="style"?so(e,g):c==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&ao(e,g)):c==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&Mr(e,g):typeof g=="number"&&Mr(e,""+g):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(h.hasOwnProperty(c)?g!=null&&c==="onScroll"&&fe("scroll",e):g!=null&&$e(e,c,g,u))}switch(n){case"input":Pn(e),Zs(e,a,!1);break;case"textarea":Pn(e),ro(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ce(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?gr(e,!!a.multiple,c,!1):a.defaultValue!=null&&gr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zn)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ie(r),null;case 6:if(e&&r.stateNode!=null)yc(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(d(166));if(n=cr(xn.current),cr(Nt.current),sa(r)){if(a=r.stateNode,n=r.memoizedProps,a[Tt]=r,(c=a.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Jn(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jn(a.nodeValue,n,(e.mode&1)!==0)}c&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Tt]=r,r.stateNode=a}return Ie(r),null;case 13:if(ge(ve),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&at!==null&&(r.mode&1)!==0&&(r.flags&128)===0)wl(),Er(),r.flags|=98560,c=!1;else if(c=sa(r),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(d(318));if(c=r.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(d(317));c[Tt]=r}else Er(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ie(r),c=!1}else bt!==null&&(ks(bt),bt=null),c=!0;if(!c)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(ve.current&1)!==0?Ve===0&&(Ve=3):Us())),r.updateQueue!==null&&(r.flags|=4),Ie(r),null);case 4:return Br(),hs(e,r),e===null&&dn(r.stateNode.containerInfo),Ie(r),null;case 10:return Wi(r.type._context),Ie(r),null;case 17:return He(r.type)&&ta(),Ie(r),null;case 19:if(ge(ve),c=r.memoizedState,c===null)return Ie(r),null;if(a=(r.flags&128)!==0,u=c.rendering,u===null)if(a)Sn(c,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(u=pa(e),u!==null){for(r.flags|=128,Sn(c,!1),a=u.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)c=n,e=a,c.flags&=14680066,u=c.alternate,u===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=u.childLanes,c.lanes=u.lanes,c.child=u.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=u.memoizedProps,c.memoizedState=u.memoizedState,c.updateQueue=u.updateQueue,c.type=u.type,e=u.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(ve,ve.current&1|2),r.child}e=e.sibling}c.tail!==null&&je()>Rr&&(r.flags|=128,a=!0,Sn(c,!1),r.lanes=4194304)}else{if(!a)if(e=pa(u),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Sn(c,!0),c.tail===null&&c.tailMode==="hidden"&&!u.alternate&&!be)return Ie(r),null}else 2*je()-c.renderingStartTime>Rr&&n!==1073741824&&(r.flags|=128,a=!0,Sn(c,!1),r.lanes=4194304);c.isBackwards?(u.sibling=r.child,r.child=u):(n=c.last,n!==null?n.sibling=u:r.child=u,c.last=u)}return c.tail!==null?(r=c.tail,c.rendering=r,c.tail=r.sibling,c.renderingStartTime=je(),r.sibling=null,n=ve.current,me(ve,a?n&1|2:n&1),r):(Ie(r),null);case 22:case 23:return Ns(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(it&1073741824)!==0&&(Ie(r),r.subtreeFlags&6&&(r.flags|=8192)):Ie(r),null;case 24:return null;case 25:return null}throw Error(d(156,r.tag))}function Ju(e,r){switch(qi(r),r.tag){case 1:return He(r.type)&&ta(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Br(),ge(Xe),ge(qe),Qi(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Hi(r),null;case 13:if(ge(ve),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Er()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ge(ve),null;case 4:return Br(),null;case 10:return Wi(r.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var wa=!1,Re=!1,Zu=typeof WeakSet=="function"?WeakSet:Set,R=null;function zr(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Ce(e,r,a)}else n.current=null}function fs(e,r,n){try{n()}catch(a){Ce(e,r,a)}}var bc=!1;function ep(e,r){if(Ni=Ln,e=Ko(),bi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var u=0,f=-1,g=-1,j=0,V=0,E=e,N=null;t:for(;;){for(var I;E!==n||o!==0&&E.nodeType!==3||(f=u+o),E!==c||a!==0&&E.nodeType!==3||(g=u+a),E.nodeType===3&&(u+=E.nodeValue.length),(I=E.firstChild)!==null;)N=E,E=I;for(;;){if(E===e)break t;if(N===n&&++j===o&&(f=u),N===c&&++V===a&&(g=u),(I=E.nextSibling)!==null)break;E=N,N=E.parentNode}E=I}n=f===-1||g===-1?null:{start:f,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ui={focusedElem:e,selectionRange:n},Ln=!1,R=r;R!==null;)if(r=R,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,R=e;else for(;R!==null;){r=R;try{var L=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var W=L.memoizedProps,ke=L.memoizedState,S=r.stateNode,y=S.getSnapshotBeforeUpdate(r.elementType===r.type?W:vt(r.type,W),ke);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=r.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(D){Ce(r,r.return,D)}if(e=r.sibling,e!==null){e.return=r.return,R=e;break}R=r.return}return L=bc,bc=!1,L}function Cn(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var c=o.destroy;o.destroy=void 0,c!==void 0&&fs(r,n,c)}o=o.next}while(o!==a)}}function Sa(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function gs(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function vc(e){var r=e.alternate;r!==null&&(e.alternate=null,vc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Tt],delete r[pn],delete r[Ai],delete r[qu],delete r[zu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wc(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xs(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Zn));else if(a!==4&&(e=e.child,e!==null))for(xs(e,r,n),e=e.sibling;e!==null;)xs(e,r,n),e=e.sibling}function ys(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ys(e,r,n),e=e.sibling;e!==null;)ys(e,r,n),e=e.sibling}var Fe=null,wt=!1;function Yt(e,r,n){for(n=n.child;n!==null;)Cc(e,r,n),n=n.sibling}function Cc(e,r,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Bn,n)}catch{}switch(n.tag){case 5:Re||zr(n,r);case 6:var a=Fe,o=wt;Fe=null,Yt(e,r,n),Fe=a,wt=o,Fe!==null&&(wt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(wt?(e=Fe,n=n.stateNode,e.nodeType===8?Ei(e.parentNode,n):e.nodeType===1&&Ei(e,n),en(e)):Ei(Fe,n.stateNode));break;case 4:a=Fe,o=wt,Fe=n.stateNode.containerInfo,wt=!0,Yt(e,r,n),Fe=a,wt=o;break;case 0:case 11:case 14:case 15:if(!Re&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var c=o,u=c.destroy;c=c.tag,u!==void 0&&((c&2)!==0||(c&4)!==0)&&fs(n,r,u),o=o.next}while(o!==a)}Yt(e,r,n);break;case 1:if(!Re&&(zr(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(f){Ce(n,r,f)}Yt(e,r,n);break;case 21:Yt(e,r,n);break;case 22:n.mode&1?(Re=(a=Re)||n.memoizedState!==null,Yt(e,r,n),Re=a):Yt(e,r,n);break;default:Yt(e,r,n)}}function jc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zu),r.forEach(function(a){var o=cp.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function St(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var c=e,u=r,f=u;e:for(;f!==null;){switch(f.tag){case 5:Fe=f.stateNode,wt=!1;break e;case 3:Fe=f.stateNode.containerInfo,wt=!0;break e;case 4:Fe=f.stateNode.containerInfo,wt=!0;break e}f=f.return}if(Fe===null)throw Error(d(160));Cc(c,u,o),Fe=null,wt=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(j){Ce(o,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)kc(r,e),r=r.sibling}function kc(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(r,e),Pt(e),a&4){try{Cn(3,e,e.return),Sa(3,e)}catch(W){Ce(e,e.return,W)}try{Cn(5,e,e.return)}catch(W){Ce(e,e.return,W)}}break;case 1:St(r,e),Pt(e),a&512&&n!==null&&zr(n,n.return);break;case 5:if(St(r,e),Pt(e),a&512&&n!==null&&zr(n,n.return),e.flags&32){var o=e.stateNode;try{Mr(o,"")}catch(W){Ce(e,e.return,W)}}if(a&4&&(o=e.stateNode,o!=null)){var c=e.memoizedProps,u=n!==null?n.memoizedProps:c,f=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{f==="input"&&c.type==="radio"&&c.name!=null&&Js(o,c),Qa(f,u);var j=Qa(f,c);for(u=0;u<g.length;u+=2){var V=g[u],E=g[u+1];V==="style"?so(o,E):V==="dangerouslySetInnerHTML"?ao(o,E):V==="children"?Mr(o,E):$e(o,V,E,j)}switch(f){case"input":_a(o,c);break;case"textarea":to(o,c);break;case"select":var N=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!c.multiple;var I=c.value;I!=null?gr(o,!!c.multiple,I,!1):N!==!!c.multiple&&(c.defaultValue!=null?gr(o,!!c.multiple,c.defaultValue,!0):gr(o,!!c.multiple,c.multiple?[]:"",!1))}o[pn]=c}catch(W){Ce(e,e.return,W)}}break;case 6:if(St(r,e),Pt(e),a&4){if(e.stateNode===null)throw Error(d(162));o=e.stateNode,c=e.memoizedProps;try{o.nodeValue=c}catch(W){Ce(e,e.return,W)}}break;case 3:if(St(r,e),Pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{en(r.containerInfo)}catch(W){Ce(e,e.return,W)}break;case 4:St(r,e),Pt(e);break;case 13:St(r,e),Pt(e),o=e.child,o.flags&8192&&(c=o.memoizedState!==null,o.stateNode.isHidden=c,!c||o.alternate!==null&&o.alternate.memoizedState!==null||(ws=je())),a&4&&jc(e);break;case 22:if(V=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(j=Re)||V,St(r,e),Re=j):St(r,e),Pt(e),a&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!V&&(e.mode&1)!==0)for(R=e,V=e.child;V!==null;){for(E=R=V;R!==null;){switch(N=R,I=N.child,N.tag){case 0:case 11:case 14:case 15:Cn(4,N,N.return);break;case 1:zr(N,N.return);var L=N.stateNode;if(typeof L.componentWillUnmount=="function"){a=N,n=N.return;try{r=a,L.props=r.memoizedProps,L.state=r.memoizedState,L.componentWillUnmount()}catch(W){Ce(a,n,W)}}break;case 5:zr(N,N.return);break;case 22:if(N.memoizedState!==null){Uc(E);continue}}I!==null?(I.return=N,R=I):Uc(E)}V=V.sibling}e:for(V=null,E=e;;){if(E.tag===5){if(V===null){V=E;try{o=E.stateNode,j?(c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(f=E.stateNode,g=E.memoizedProps.style,u=g!=null&&g.hasOwnProperty("display")?g.display:null,f.style.display=io("display",u))}catch(W){Ce(e,e.return,W)}}}else if(E.tag===6){if(V===null)try{E.stateNode.nodeValue=j?"":E.memoizedProps}catch(W){Ce(e,e.return,W)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;V===E&&(V=null),E=E.return}V===E&&(V=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:St(r,e),Pt(e),a&4&&jc(e);break;case 21:break;default:St(r,e),Pt(e)}}function Pt(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(wc(n)){var a=n;break e}n=n.return}throw Error(d(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(Mr(o,""),a.flags&=-33);var c=Sc(e);ys(e,c,o);break;case 3:case 4:var u=a.stateNode.containerInfo,f=Sc(e);xs(e,f,u);break;default:throw Error(d(161))}}catch(g){Ce(e,e.return,g)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function tp(e,r,n){R=e,Tc(e)}function Tc(e,r,n){for(var a=(e.mode&1)!==0;R!==null;){var o=R,c=o.child;if(o.tag===22&&a){var u=o.memoizedState!==null||wa;if(!u){var f=o.alternate,g=f!==null&&f.memoizedState!==null||Re;f=wa;var j=Re;if(wa=u,(Re=g)&&!j)for(R=o;R!==null;)u=R,g=u.child,u.tag===22&&u.memoizedState!==null?Pc(o):g!==null?(g.return=u,R=g):Pc(o);for(;c!==null;)R=c,Tc(c),c=c.sibling;R=o,wa=f,Re=j}Nc(e)}else(o.subtreeFlags&8772)!==0&&c!==null?(c.return=o,R=c):Nc(e)}}function Nc(e){for(;R!==null;){var r=R;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Re||Sa(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Re)if(n===null)a.componentDidMount();else{var o=r.elementType===r.type?n.memoizedProps:vt(r.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=r.updateQueue;c!==null&&Ul(r,c,a);break;case 3:var u=r.updateQueue;if(u!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Ul(r,u,n)}break;case 5:var f=r.stateNode;if(n===null&&r.flags&4){n=f;var g=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var V=j.memoizedState;if(V!==null){var E=V.dehydrated;E!==null&&en(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Re||r.flags&512&&gs(r)}catch(N){Ce(r,r.return,N)}}if(r===e){R=null;break}if(n=r.sibling,n!==null){n.return=r.return,R=n;break}R=r.return}}function Uc(e){for(;R!==null;){var r=R;if(r===e){R=null;break}var n=r.sibling;if(n!==null){n.return=r.return,R=n;break}R=r.return}}function Pc(e){for(;R!==null;){var r=R;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Sa(4,r)}catch(g){Ce(r,n,g)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var o=r.return;try{a.componentDidMount()}catch(g){Ce(r,o,g)}}var c=r.return;try{gs(r)}catch(g){Ce(r,c,g)}break;case 5:var u=r.return;try{gs(r)}catch(g){Ce(r,u,g)}}}catch(g){Ce(r,r.return,g)}if(r===e){R=null;break}var f=r.sibling;if(f!==null){f.return=r.return,R=f;break}R=r.return}}var rp=Math.ceil,Ca=Ue.ReactCurrentDispatcher,bs=Ue.ReactCurrentOwner,ht=Ue.ReactCurrentBatchConfig,ie=0,Ae=null,Ne=null,Be=0,it=0,Ir=Ot(0),Ve=0,jn=null,ur=0,ja=0,vs=0,kn=null,Qe=null,ws=0,Rr=1/0,zt=null,ka=!1,Ss=null,Kt=null,Ta=!1,Jt=null,Na=0,Tn=0,Cs=null,Ua=-1,Pa=0;function Me(){return(ie&6)!==0?je():Ua!==-1?Ua:Ua=je()}function Zt(e){return(e.mode&1)===0?1:(ie&2)!==0&&Be!==0?Be&-Be:Ru.transition!==null?(Pa===0&&(Pa=So()),Pa):(e=de,e!==0||(e=window.event,e=e===void 0?16:Eo(e.type)),e)}function Ct(e,r,n,a){if(50<Tn)throw Tn=0,Cs=null,Error(d(185));Qr(e,n,a),((ie&2)===0||e!==Ae)&&(e===Ae&&((ie&2)===0&&(ja|=n),Ve===4&&er(e,Be)),Ye(e,a),n===1&&ie===0&&(r.mode&1)===0&&(Rr=je()+500,na&&Ht()))}function Ye(e,r){var n=e.callbackNode;Rd(e,r);var a=In(e,e===Ae?Be:0);if(a===0)n!==null&&bo(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&bo(n),r===1)e.tag===0?Iu(Ec.bind(null,e)):gl(Ec.bind(null,e)),Fu(function(){(ie&6)===0&&Ht()}),n=null;else{switch(Co(a)){case 1:n=ri;break;case 4:n=vo;break;case 16:n=Fn;break;case 536870912:n=wo;break;default:n=Fn}n=Rc(n,Vc.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Vc(e,r){if(Ua=-1,Pa=0,(ie&6)!==0)throw Error(d(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var a=In(e,e===Ae?Be:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||r)r=Va(e,a);else{r=a;var o=ie;ie|=2;var c=Dc();(Ae!==e||Be!==r)&&(zt=null,Rr=je()+500,mr(e,r));do try{ip();break}catch(f){Ac(e,f)}while(!0);Li(),Ca.current=c,ie=o,Ne!==null?r=0:(Ae=null,Be=0,r=Ve)}if(r!==0){if(r===2&&(o=ni(e),o!==0&&(a=o,r=js(e,o))),r===1)throw n=jn,mr(e,0),er(e,a),Ye(e,je()),n;if(r===6)er(e,a);else{if(o=e.current.alternate,(a&30)===0&&!np(o)&&(r=Va(e,a),r===2&&(c=ni(e),c!==0&&(a=c,r=js(e,c))),r===1))throw n=jn,mr(e,0),er(e,a),Ye(e,je()),n;switch(e.finishedWork=o,e.finishedLanes=a,r){case 0:case 1:throw Error(d(345));case 2:hr(e,Qe,zt);break;case 3:if(er(e,a),(a&130023424)===a&&(r=ws+500-je(),10<r)){if(In(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vi(hr.bind(null,e,Qe,zt),r);break}hr(e,Qe,zt);break;case 4:if(er(e,a),(a&4194240)===a)break;for(r=e.eventTimes,o=-1;0<a;){var u=31-xt(a);c=1<<u,u=r[u],u>o&&(o=u),a&=~c}if(a=o,a=je()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*rp(a/1960))-a,10<a){e.timeoutHandle=Vi(hr.bind(null,e,Qe,zt),a);break}hr(e,Qe,zt);break;case 5:hr(e,Qe,zt);break;default:throw Error(d(329))}}}return Ye(e,je()),e.callbackNode===n?Vc.bind(null,e):null}function js(e,r){var n=kn;return e.current.memoizedState.isDehydrated&&(mr(e,r).flags|=256),e=Va(e,r),e!==2&&(r=Qe,Qe=n,r!==null&&ks(r)),e}function ks(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function np(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],c=o.getSnapshot;o=o.value;try{if(!yt(c(),o))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function er(e,r){for(r&=~vs,r&=~ja,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-xt(r),a=1<<n;e[n]=-1,r&=~a}}function Ec(e){if((ie&6)!==0)throw Error(d(327));$r();var r=In(e,0);if((r&1)===0)return Ye(e,je()),null;var n=Va(e,r);if(e.tag!==0&&n===2){var a=ni(e);a!==0&&(r=a,n=js(e,a))}if(n===1)throw n=jn,mr(e,0),er(e,r),Ye(e,je()),n;if(n===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,hr(e,Qe,zt),Ye(e,je()),null}function Ts(e,r){var n=ie;ie|=1;try{return e(r)}finally{ie=n,ie===0&&(Rr=je()+500,na&&Ht())}}function pr(e){Jt!==null&&Jt.tag===0&&(ie&6)===0&&$r();var r=ie;ie|=1;var n=ht.transition,a=de;try{if(ht.transition=null,de=1,e)return e()}finally{de=a,ht.transition=n,ie=r,(ie&6)===0&&Ht()}}function Ns(){it=Ir.current,ge(Ir)}function mr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Du(n)),Ne!==null)for(n=Ne.return;n!==null;){var a=n;switch(qi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ta();break;case 3:Br(),ge(Xe),ge(qe),Qi();break;case 5:Hi(a);break;case 4:Br();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:Wi(a.type._context);break;case 22:case 23:Ns()}n=n.return}if(Ae=e,Ne=e=tr(e.current,null),Be=it=r,Ve=0,jn=null,vs=ja=ur=0,Qe=kn=null,lr!==null){for(r=0;r<lr.length;r++)if(n=lr[r],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,c=n.pending;if(c!==null){var u=c.next;c.next=o,a.next=u}n.pending=a}lr=null}return e}function Ac(e,r){do{var n=Ne;try{if(Li(),ma.current=xa,ha){for(var a=we.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}ha=!1}if(dr=0,Ee=Pe=we=null,yn=!1,bn=0,bs.current=null,n===null||n.return===null){Ve=1,jn=r,Ne=null;break}e:{var c=e,u=n.return,f=n,g=r;if(r=Be,f.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var j=g,V=f,E=V.tag;if((V.mode&1)===0&&(E===0||E===11||E===15)){var N=V.alternate;N?(V.updateQueue=N.updateQueue,V.memoizedState=N.memoizedState,V.lanes=N.lanes):(V.updateQueue=null,V.memoizedState=null)}var I=nc(u);if(I!==null){I.flags&=-257,ac(I,u,f,c,r),I.mode&1&&rc(c,j,r),r=I,g=j;var L=r.updateQueue;if(L===null){var W=new Set;W.add(g),r.updateQueue=W}else L.add(g);break e}else{if((r&1)===0){rc(c,j,r),Us();break e}g=Error(d(426))}}else if(be&&f.mode&1){var ke=nc(u);if(ke!==null){(ke.flags&65536)===0&&(ke.flags|=256),ac(ke,u,f,c,r),Ri(qr(g,f));break e}}c=g=qr(g,f),Ve!==4&&(Ve=2),kn===null?kn=[c]:kn.push(c),c=u;do{switch(c.tag){case 3:c.flags|=65536,r&=-r,c.lanes|=r;var S=ec(c,g,r);Nl(c,S);break e;case 1:f=g;var y=c.type,C=c.stateNode;if((c.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Kt===null||!Kt.has(C)))){c.flags|=65536,r&=-r,c.lanes|=r;var D=tc(c,f,r);Nl(c,D);break e}}c=c.return}while(c!==null)}Bc(n)}catch(M){r=M,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function Dc(){var e=Ca.current;return Ca.current=xa,e===null?xa:e}function Us(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ae===null||(ur&268435455)===0&&(ja&268435455)===0||er(Ae,Be)}function Va(e,r){var n=ie;ie|=2;var a=Dc();(Ae!==e||Be!==r)&&(zt=null,mr(e,r));do try{ap();break}catch(o){Ac(e,o)}while(!0);if(Li(),ie=n,Ca.current=a,Ne!==null)throw Error(d(261));return Ae=null,Be=0,Ve}function ap(){for(;Ne!==null;)Fc(Ne)}function ip(){for(;Ne!==null&&!Vd();)Fc(Ne)}function Fc(e){var r=Ic(e.alternate,e,it);e.memoizedProps=e.pendingProps,r===null?Bc(e):Ne=r,bs.current=null}function Bc(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Ku(n,r,it),n!==null){Ne=n;return}}else{if(n=Ju(n,r),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Ne=null;return}}if(r=r.sibling,r!==null){Ne=r;return}Ne=r=e}while(r!==null);Ve===0&&(Ve=5)}function hr(e,r,n){var a=de,o=ht.transition;try{ht.transition=null,de=1,sp(e,r,n,a)}finally{ht.transition=o,de=a}return null}function sp(e,r,n,a){do $r();while(Jt!==null);if((ie&6)!==0)throw Error(d(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if($d(e,c),e===Ae&&(Ne=Ae=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ta||(Ta=!0,Rc(Fn,function(){return $r(),null})),c=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||c){c=ht.transition,ht.transition=null;var u=de;de=1;var f=ie;ie|=4,bs.current=null,ep(e,n),kc(n,e),Tu(Ui),Ln=!!Ni,Ui=Ni=null,e.current=n,tp(n),Ed(),ie=f,de=u,ht.transition=c}else e.current=n;if(Ta&&(Ta=!1,Jt=e,Na=o),c=e.pendingLanes,c===0&&(Kt=null),Fd(n.stateNode),Ye(e,je()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)o=r[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(ka)throw ka=!1,e=Ss,Ss=null,e;return(Na&1)!==0&&e.tag!==0&&$r(),c=e.pendingLanes,(c&1)!==0?e===Cs?Tn++:(Tn=0,Cs=e):Tn=0,Ht(),null}function $r(){if(Jt!==null){var e=Co(Na),r=ht.transition,n=de;try{if(ht.transition=null,de=16>e?16:e,Jt===null)var a=!1;else{if(e=Jt,Jt=null,Na=0,(ie&6)!==0)throw Error(d(331));var o=ie;for(ie|=4,R=e.current;R!==null;){var c=R,u=c.child;if((R.flags&16)!==0){var f=c.deletions;if(f!==null){for(var g=0;g<f.length;g++){var j=f[g];for(R=j;R!==null;){var V=R;switch(V.tag){case 0:case 11:case 15:Cn(8,V,c)}var E=V.child;if(E!==null)E.return=V,R=E;else for(;R!==null;){V=R;var N=V.sibling,I=V.return;if(vc(V),V===j){R=null;break}if(N!==null){N.return=I,R=N;break}R=I}}}var L=c.alternate;if(L!==null){var W=L.child;if(W!==null){L.child=null;do{var ke=W.sibling;W.sibling=null,W=ke}while(W!==null)}}R=c}}if((c.subtreeFlags&2064)!==0&&u!==null)u.return=c,R=u;else e:for(;R!==null;){if(c=R,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:Cn(9,c,c.return)}var S=c.sibling;if(S!==null){S.return=c.return,R=S;break e}R=c.return}}var y=e.current;for(R=y;R!==null;){u=R;var C=u.child;if((u.subtreeFlags&2064)!==0&&C!==null)C.return=u,R=C;else e:for(u=y;R!==null;){if(f=R,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Sa(9,f)}}catch(M){Ce(f,f.return,M)}if(f===u){R=null;break e}var D=f.sibling;if(D!==null){D.return=f.return,R=D;break e}R=f.return}}if(ie=o,Ht(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Bn,e)}catch{}a=!0}return a}finally{de=n,ht.transition=r}}return!1}function qc(e,r,n){r=qr(n,r),r=ec(e,r,1),e=Qt(e,r,1),r=Me(),e!==null&&(Qr(e,1,r),Ye(e,r))}function Ce(e,r,n){if(e.tag===3)qc(e,e,n);else for(;r!==null;){if(r.tag===3){qc(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kt===null||!Kt.has(a))){e=qr(n,e),e=tc(r,e,1),r=Qt(r,e,1),e=Me(),r!==null&&(Qr(r,1,e),Ye(r,e));break}}r=r.return}}function op(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=Me(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Be&n)===n&&(Ve===4||Ve===3&&(Be&130023424)===Be&&500>je()-ws?mr(e,0):vs|=n),Ye(e,r)}function zc(e,r){r===0&&((e.mode&1)===0?r=1:(r=zn,zn<<=1,(zn&130023424)===0&&(zn=4194304)));var n=Me();e=Ft(e,r),e!==null&&(Qr(e,r,n),Ye(e,n))}function lp(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),zc(e,n)}function cp(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(d(314))}a!==null&&a.delete(r),zc(e,n)}var Ic;Ic=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||Xe.current)Ge=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Ge=!1,Yu(e,r,n);Ge=(e.flags&131072)!==0}else Ge=!1,be&&(r.flags&1048576)!==0&&xl(r,ia,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;va(e,r),e=r.pendingProps;var o=Ur(r,qe.current);Fr(r,n),o=Ji(null,r,a,e,o,n);var c=Zi();return r.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,He(a)?(c=!0,ra(r)):c=!1,r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Oi(r),o.updater=ya,r.stateNode=o,o._reactInternals=r,is(r,a,e,n),r=cs(null,r,a,!0,c,n)):(r.tag=0,be&&c&&Bi(r),We(null,r,o,n),r=r.child),r;case 16:a=r.elementType;e:{switch(va(e,r),e=r.pendingProps,o=a._init,a=o(a._payload),r.type=a,o=r.tag=up(a),e=vt(a,e),o){case 0:r=ls(null,r,a,e,n);break e;case 1:r=dc(null,r,a,e,n);break e;case 11:r=ic(null,r,a,e,n);break e;case 14:r=sc(null,r,a,vt(a.type,e),n);break e}throw Error(d(306,a,""))}return r;case 0:return a=r.type,o=r.pendingProps,o=r.elementType===a?o:vt(a,o),ls(e,r,a,o,n);case 1:return a=r.type,o=r.pendingProps,o=r.elementType===a?o:vt(a,o),dc(e,r,a,o,n);case 3:e:{if(uc(r),e===null)throw Error(d(387));a=r.pendingProps,c=r.memoizedState,o=c.element,Tl(e,r),ua(r,a,null,n);var u=r.memoizedState;if(a=u.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},r.updateQueue.baseState=c,r.memoizedState=c,r.flags&256){o=qr(Error(d(423)),r),r=pc(e,r,a,n,o);break e}else if(a!==o){o=qr(Error(d(424)),r),r=pc(e,r,a,n,o);break e}else for(at=_t(r.stateNode.containerInfo.firstChild),nt=r,be=!0,bt=null,n=jl(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),a===o){r=qt(e,r,n);break e}We(e,r,a,n)}r=r.child}return r;case 5:return Pl(r),e===null&&Ii(r),a=r.type,o=r.pendingProps,c=e!==null?e.memoizedProps:null,u=o.children,Pi(a,o)?u=null:c!==null&&Pi(a,c)&&(r.flags|=32),cc(e,r),We(e,r,u,n),r.child;case 6:return e===null&&Ii(r),null;case 13:return mc(e,r,n);case 4:return Xi(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=Ar(r,null,a,n):We(e,r,a,n),r.child;case 11:return a=r.type,o=r.pendingProps,o=r.elementType===a?o:vt(a,o),ic(e,r,a,o,n);case 7:return We(e,r,r.pendingProps,n),r.child;case 8:return We(e,r,r.pendingProps.children,n),r.child;case 12:return We(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,o=r.pendingProps,c=r.memoizedProps,u=o.value,me(la,a._currentValue),a._currentValue=u,c!==null)if(yt(c.value,u)){if(c.children===o.children&&!Xe.current){r=qt(e,r,n);break e}}else for(c=r.child,c!==null&&(c.return=r);c!==null;){var f=c.dependencies;if(f!==null){u=c.child;for(var g=f.firstContext;g!==null;){if(g.context===a){if(c.tag===1){g=Bt(-1,n&-n),g.tag=2;var j=c.updateQueue;if(j!==null){j=j.shared;var V=j.pending;V===null?g.next=g:(g.next=V.next,V.next=g),j.pending=g}}c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),Mi(c.return,n,r),f.lanes|=n;break}g=g.next}}else if(c.tag===10)u=c.type===r.type?null:c.child;else if(c.tag===18){if(u=c.return,u===null)throw Error(d(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),Mi(u,n,r),u=c.sibling}else u=c.child;if(u!==null)u.return=c;else for(u=c;u!==null;){if(u===r){u=null;break}if(c=u.sibling,c!==null){c.return=u.return,u=c;break}u=u.return}c=u}We(e,r,o.children,n),r=r.child}return r;case 9:return o=r.type,a=r.pendingProps.children,Fr(r,n),o=pt(o),a=a(o),r.flags|=1,We(e,r,a,n),r.child;case 14:return a=r.type,o=vt(a,r.pendingProps),o=vt(a.type,o),sc(e,r,a,o,n);case 15:return oc(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,o=r.pendingProps,o=r.elementType===a?o:vt(a,o),va(e,r),r.tag=1,He(a)?(e=!0,ra(r)):e=!1,Fr(r,n),Jl(r,a,o),is(r,a,o,n),cs(null,r,a,!0,e,n);case 19:return fc(e,r,n);case 22:return lc(e,r,n)}throw Error(d(156,r.tag))};function Rc(e,r){return yo(e,r)}function dp(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,r,n,a){return new dp(e,r,n,a)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function up(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===jt)return 14}return 2}function tr(e,r){var n=e.alternate;return n===null?(n=ft(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ea(e,r,n,a,o,c){var u=2;if(a=e,typeof e=="function")Ps(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ue:return fr(n.children,o,c,r);case he:u=8,o|=8;break;case Te:return e=ft(12,n,r,o|2),e.elementType=Te,e.lanes=c,e;case Le:return e=ft(13,n,r,o),e.elementType=Le,e.lanes=c,e;case gt:return e=ft(19,n,r,o),e.elementType=gt,e.lanes=c,e;case Se:return Aa(n,o,c,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:u=10;break e;case lt:u=9;break e;case ct:u=11;break e;case jt:u=14;break e;case Oe:u=16,a=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return r=ft(u,n,r,o),r.elementType=e,r.type=a,r.lanes=c,r}function fr(e,r,n,a){return e=ft(7,e,a,r),e.lanes=n,e}function Aa(e,r,n,a){return e=ft(22,e,a,r),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function Vs(e,r,n){return e=ft(6,e,null,r),e.lanes=n,e}function Es(e,r,n){return r=ft(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function pp(e,r,n,a,o){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ai(0),this.expirationTimes=ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ai(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function As(e,r,n,a,o,c,u,f,g){return e=new pp(e,r,n,f,g),r===1?(r=1,c===!0&&(r|=8)):r=0,c=ft(3,null,null,r),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oi(c),e}function mp(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function $c(e){if(!e)return Xt;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(d(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(He(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(d(171))}if(e.tag===1){var n=e.type;if(He(n))return hl(e,n,r)}return r}function Lc(e,r,n,a,o,c,u,f,g){return e=As(n,a,!0,e,o,c,u,f,g),e.context=$c(null),n=e.current,a=Me(),o=Zt(n),c=Bt(a,o),c.callback=r??null,Qt(n,c,o),e.current.lanes=o,Qr(e,o,a),Ye(e,a),e}function Da(e,r,n,a){var o=r.current,c=Me(),u=Zt(o);return n=$c(n),r.context===null?r.context=n:r.pendingContext=n,r=Bt(c,u),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=Qt(o,r,u),e!==null&&(Ct(e,o,u,c),da(e,o,u)),u}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Ds(e,r){Wc(e,r),(e=e.alternate)&&Wc(e,r)}function hp(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}Ba.prototype.render=Fs.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(d(409));Da(e,r,null,null)},Ba.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;pr(function(){Da(null,e,null,null)}),r[Vt]=null}};function Ba(e){this._internalRoot=e}Ba.prototype.unstable_scheduleHydration=function(e){if(e){var r=To();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Lt.length&&r!==0&&r<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Po(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function fp(e,r,n,a,o){if(o){if(typeof a=="function"){var c=a;a=function(){var j=Fa(u);c.call(j)}}var u=Lc(r,a,e,0,null,!1,!1,"",_c);return e._reactRootContainer=u,e[Vt]=u.current,dn(e.nodeType===8?e.parentNode:e),pr(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var f=a;a=function(){var j=Fa(g);f.call(j)}}var g=As(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=g,e[Vt]=g.current,dn(e.nodeType===8?e.parentNode:e),pr(function(){Da(r,g,n,a)}),g}function za(e,r,n,a,o){var c=n._reactRootContainer;if(c){var u=c;if(typeof o=="function"){var f=o;o=function(){var g=Fa(u);f.call(g)}}Da(r,u,e,o)}else u=fp(n,r,e,o,a);return Fa(u)}jo=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Gr(r.pendingLanes);n!==0&&(ii(r,n|1),Ye(r,je()),(ie&6)===0&&(Rr=je()+500,Ht()))}break;case 13:pr(function(){var a=Ft(e,1);if(a!==null){var o=Me();Ct(a,e,1,o)}}),Ds(e,1)}},si=function(e){if(e.tag===13){var r=Ft(e,134217728);if(r!==null){var n=Me();Ct(r,e,134217728,n)}Ds(e,134217728)}},ko=function(e){if(e.tag===13){var r=Zt(e),n=Ft(e,r);if(n!==null){var a=Me();Ct(n,e,r,a)}Ds(e,r)}},To=function(){return de},No=function(e,r){var n=de;try{return de=e,r()}finally{de=n}},Ja=function(e,r,n){switch(r){case"input":if(_a(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var o=ea(a);if(!o)throw Error(d(90));Ys(a),_a(a,o)}}}break;case"textarea":to(e,n);break;case"select":r=n.value,r!=null&&gr(e,!!n.multiple,r,!1)}},uo=Ts,po=pr;var gp={usingClientEntryPoint:!1,Events:[mn,Tr,ea,lo,co,Ts]},Nn={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=go(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{Bn=Ia.inject(xp),kt=Ia}catch{}}return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp,Ke.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(r))throw Error(d(200));return mp(e,r,null,n)},Ke.createRoot=function(e,r){if(!Bs(e))throw Error(d(299));var n=!1,a="",o=Mc;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),r=As(e,1,!1,null,null,n,!1,a,o),e[Vt]=r.current,dn(e.nodeType===8?e.parentNode:e),new Fs(r)},Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=go(r),e=e===null?null:e.stateNode,e},Ke.flushSync=function(e){return pr(e)},Ke.hydrate=function(e,r,n){if(!qa(r))throw Error(d(200));return za(null,e,r,!0,n)},Ke.hydrateRoot=function(e,r,n){if(!Bs(e))throw Error(d(405));var a=n!=null&&n.hydratedSources||null,o=!1,c="",u=Mc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),r=Lc(r,null,e,1,n??null,o,!1,c,u),e[Vt]=r.current,dn(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,o]:r.mutableSourceEagerHydrationData.push(n,o);return new Ba(r)},Ke.render=function(e,r,n){if(!qa(r))throw Error(d(200));return za(null,e,r,!1,n)},Ke.unmountComponentAtNode=function(e){if(!qa(e))throw Error(d(40));return e._reactRootContainer?(pr(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},Ke.unstable_batchedUpdates=Ts,Ke.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!qa(n))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return za(e,r,n,!1,a)},Ke.version="18.3.1-next-f1338f8080-20240426",Ke}var Jc;function kp(){if(Jc)return Is.exports;Jc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Is.exports=jp(),Is.exports}var Zc;function Tp(){if(Zc)return Ra;Zc=1;var s=kp();return Ra.createRoot=s.createRoot,Ra.hydrateRoot=s.hydrateRoot,Ra}var Np=Tp();const Up=cd(Np),dd=[{id:"introduction",label:"Introduction",icon:"bookmark"},{id:"quickstart",label:"Quick Start Guide",icon:"bookmark"},{id:"tokens",label:"Token",icon:"folder",children:[{id:"colors",label:"Colors",icon:"folder",children:[{id:"colors-primary",label:"Primary",icon:"layers"},{id:"colors-secondary",label:"Secondary",icon:"layers"},{id:"colors-tertiary",label:"Tertiary",icon:"layers"},{id:"colors-red",label:"Red (Error)",icon:"layers"},{id:"colors-orange",label:"Orange (Warning)",icon:"layers"},{id:"colors-yellow",label:"Yellow",icon:"layers"},{id:"colors-gold",label:"Gold",icon:"layers"},{id:"colors-green",label:"Green (Success)",icon:"layers"},{id:"colors-lime",label:"Lime",icon:"layers"},{id:"colors-blue",label:"Blue (Info)",icon:"layers"},{id:"colors-skyblue",label:"Sky Blue",icon:"layers"},{id:"colors-cyan",label:"Cyan",icon:"layers"},{id:"colors-purple",label:"Purple",icon:"layers"},{id:"colors-pink",label:"Pink",icon:"layers"},{id:"colors-neutral",label:"Neutral",icon:"layers"},{id:"colors-semantic",label:"Semantic Tokens",icon:"layers"}]},{id:"typography",label:"Typography",icon:"folder",children:[{id:"typography-header",label:"Header",icon:"layers"},{id:"typography-display",label:"Display",icon:"layers"},{id:"typography-body",label:"Body",icon:"layers"},{id:"typography-label",label:"Label",icon:"layers"},{id:"typography-title",label:"Title",icon:"layers"},{id:"typography-usage",label:"How to use",icon:"layers"}]},{id:"shadow",label:"Shadow",icon:"folder",children:[{id:"shadow-scale",label:"Scale",icon:"layers"},{id:"shadow-usage",label:"How to use",icon:"layers"}]},{id:"dimensions",label:"Dimensions",icon:"folder",children:[{id:"dimensions-spacing",label:"Spacing",icon:"layers"},{id:"dimensions-radius",label:"Border Radius",icon:"layers"},{id:"dimensions-border",label:"Border Width",icon:"layers"},{id:"dimensions-usage",label:"How to use",icon:"layers"}]}]},{id:"components",label:"Components",icon:"folder",children:[{id:"accordion-grouping",label:"Accordion",icon:"folder",children:[{id:"accordion-basic",label:"Basic",icon:"layers"},{id:"accordion-group",label:"AccordionGroup",icon:"layers"}]},{id:"app-header-group",label:"App Header",icon:"folder",children:[{id:"app-header-basic",label:"Introduction",icon:"layers"},{id:"app-header-back",label:"Back Button",icon:"layers"},{id:"app-header-filled",label:"Filled",icon:"layers"},{id:"app-header-custom-leading",label:"Custom Leading Widgets",icon:"layers"}]},{id:"avatar-parent-group",label:"Avatar",icon:"folder",children:[{id:"avatar-basic",label:"Basic",icon:"layers"},{id:"avatar-status",label:"Status Avatar",icon:"layers"},{id:"avatar-profile",label:"Profile Badges & Actions",icon:"layers"},{id:"avatar-group",label:"Avatar Group",icon:"layers"}]},{id:"badge-parent-group",label:"Badge",icon:"folder",children:[{id:"badge-basic",label:"Basic & Dot",icon:"layers"},{id:"badge-count",label:"Count Badge",icon:"layers"},{id:"badge-standalone",label:"Standalone Variants",icon:"layers"},{id:"badge-semantic",label:"Semantic Colors & Border",icon:"layers"},{id:"badge-overlay",label:"Overlay & Placement",icon:"layers"}]},{id:"card-parent-group",label:"Card",icon:"folder",children:[{id:"card-basic",label:"Basic Content",icon:"layers"},{id:"card-actions",label:"With Actions",icon:"layers"},{id:"card-horizontal",label:"Horizontal Layout",icon:"layers"},{id:"card-media",label:"With Media",icon:"layers"},{id:"card-rich",label:"Rich Card",icon:"layers"},{id:"card-rich-horizontal",label:"Rich Card (Horizontal)",icon:"layers"}]},{id:"button-group",label:"Button",icon:"folder",children:[{id:"button-introduction",label:"Introduction",icon:"layers"},{id:"button-variants",label:"Variants",icon:"layers"},{id:"button-sizes",label:"Sizes",icon:"layers"},{id:"button-showcase",label:"Showcase",icon:"layers"},{id:"button-icon-button",label:"IconButton",icon:"layers"}]},{id:"checkbox-group",label:"Checkbox",icon:"folder",children:[{id:"checkbox-basic",label:"Basic & States",icon:"layers"},{id:"checkbox-sizes",label:"Sizes",icon:"layers"},{id:"checkbox-tristate",label:"Tristate (Indeterminate)",icon:"layers"}]},{id:"chips-parent-group",label:"Chips",icon:"folder",children:[{id:"chips-basic",label:"Choice & Filter Chips",icon:"layers"},{id:"chips-action",label:"Suggestion & Action Chips",icon:"layers"},{id:"chips-input",label:"Input Chips",icon:"layers"}]},{id:"chip-group-parent",label:"Chip Group",icon:"folder",children:[{id:"chip-group-wrap",label:"Wrap & Horizontal Groups",icon:"layers"},{id:"chip-group-input-field",label:"Input Chip Field",icon:"layers"}]},{id:"date-picker-group",label:"Date Picker",icon:"folder",children:[{id:"date-picker-single",label:"Single Date",icon:"layers"},{id:"date-picker-range",label:"Date Range",icon:"layers"}]},{id:"divider-group",label:"Divider",icon:"folder",children:[{id:"divider-basic",label:"Basic & Indents",icon:"layers"},{id:"divider-styles",label:"Solid, Dashed & Dotted",icon:"layers"},{id:"divider-label",label:"With Center Label",icon:"layers"},{id:"divider-vertical",label:"Vertical Orientation",icon:"layers"}]},{id:"status-banner-group",label:"Draft Status",icon:"folder",children:[{id:"status-banner-basic",label:"Basic Banners",icon:"layers"},{id:"status-banner-draft",label:"Draft & Application Statuses",icon:"layers"},{id:"status-banner-variants",label:"All Color Variants",icon:"layers"}]},{id:"status-pipeline-group",label:"Status Pipeline",icon:"folder",children:[{id:"status-pipeline-vertical-group",label:"Vertical",icon:"folder",children:[{id:"status-pipeline-vertical",label:"Basic",icon:"layers"},{id:"status-pipeline-vertical-states",label:"All States",icon:"layers"},{id:"status-pipeline-vertical-sizes",label:"Sizes",icon:"layers"},{id:"status-pipeline-vertical-colors",label:"Custom Colors",icon:"layers"},{id:"status-pipeline-vertical-labels",label:"Labels Only",icon:"layers"},{id:"status-pipeline-vertical-nolabels",label:"Circles Only",icon:"layers"}]},{id:"status-pipeline-horizontal-group",label:"Horizontal",icon:"folder",children:[{id:"status-pipeline-horizontal",label:"Basic",icon:"layers"},{id:"status-pipeline-horizontal-states",label:"All States",icon:"layers"},{id:"status-pipeline-horizontal-sizes",label:"Sizes",icon:"layers"},{id:"status-pipeline-horizontal-colors",label:"Custom Colors",icon:"layers"},{id:"status-pipeline-horizontal-labels",label:"Labels Only",icon:"layers"},{id:"status-pipeline-horizontal-nolabels",label:"Circles Only",icon:"layers"}]}]},{id:"tag-group",label:"Tag",icon:"folder",children:[{id:"tag-basic",label:"Basic",icon:"layers"},{id:"tag-shapes",label:"Shapes",icon:"layers"},{id:"tag-styles",label:"Styles",icon:"layers"},{id:"tag-colors",label:"Color Schemes",icon:"layers"},{id:"tag-leading",label:"Leading Content",icon:"layers"},{id:"tag-dismissable",label:"Dismissible",icon:"layers"},{id:"tag-pill",label:"Unified Pill Tag",icon:"layers"}]},{id:"textarea-group",label:"Text Area",icon:"folder",children:[{id:"textarea-basic",label:"Basic",icon:"layers"},{id:"textarea-label",label:"Label & Required",icon:"layers"},{id:"textarea-status",label:"Validation Status",icon:"layers"},{id:"textarea-count",label:"Character Count",icon:"layers"},{id:"textarea-disabled",label:"Disabled & Read Only",icon:"layers"}]},{id:"timepicker-group",label:"Time Picker",icon:"folder",children:[{id:"timepicker-basic",label:"Basic",icon:"layers"},{id:"timepicker-label",label:"Label & Required",icon:"layers"},{id:"timepicker-status",label:"Validation Status",icon:"layers"},{id:"timepicker-interval",label:"Minute Interval",icon:"layers"},{id:"timepicker-initial",label:"Initial Time",icon:"layers"},{id:"timepicker-disabled",label:"Disabled",icon:"layers"}]},{id:"feedback-group",label:"Feedback",icon:"folder",children:[{id:"feedbackformstar",label:"feedbackformstar",icon:"layers"},{id:"feedbackformcsat",label:"feedbackformcsat",icon:"layers"},{id:"feedbackformnps",label:"feedbackformnps",icon:"layers"}]},{id:"empty-state-group",label:"Empty State",icon:"folder",children:[{id:"empty-state-basic",label:"Basic",icon:"layers"},{id:"empty-state-variants",label:"Variants",icon:"layers"},{id:"empty-state-action",label:"With Action",icon:"layers"}]},{id:"dropdown-group",label:"Dropdown",icon:"folder",children:[{id:"dropdown-basic",label:"Basic Single Select",icon:"layers"},{id:"dropdown-multi",label:"Multi-Select Mode",icon:"layers"},{id:"dropdown-search",label:"Searchable Dropdown",icon:"layers"},{id:"dropdown-status",label:"Form Status Validation",icon:"layers"}]},{id:"fileupload-group",label:"FileUpload",icon:"folder",children:[{id:"fileupload-basic",label:"Basic",icon:"layers"},{id:"fileupload-dashed",label:"Dashed Border",icon:"layers"},{id:"fileupload-preloaded",label:"Preloaded Files",icon:"layers"}]},{id:"input-group",label:"Input Field",icon:"folder",children:[{id:"input-basic",label:"Basic",icon:"layers"},{id:"input-status",label:"Validation Status",icon:"layers"},{id:"input-password",label:"Password",icon:"layers"},{id:"input-icons",label:"Icons",icon:"layers"},{id:"input-prefix-postfix",label:"Prefix & Postfix",icon:"layers"},{id:"input-required-disabled",label:"Required & Disabled",icon:"layers"}]},{id:"input-aadhaar-group",label:"Input Aadhaar",icon:"folder",children:[{id:"input-aadhaar-basic",label:"Basic",icon:"layers"},{id:"input-aadhaar-varients",label:"Varients",icon:"layers"}]},{id:"input-pan-group",label:"Input Pan",icon:"folder",children:[{id:"input-pan-basic",label:"Basic",icon:"layers"},{id:"input-pan-varients",label:"Varients",icon:"layers"}]},{id:"input-otp-group",label:"Input Otp",icon:"folder",children:[{id:"input-otp-basic",label:"Basic",icon:"layers"},{id:"input-otp-varients",label:"Varients",icon:"layers"}]},{id:"carousel-group",label:"Carousel",icon:"folder",children:[{id:"carousel-intro",label:"Introduction",icon:"layers"},{id:"carousel-rich-hero",label:"Rich Hero Carousel",icon:"layers"},{id:"carousel-image",label:"Image Carousel",icon:"layers"}]},{id:"journey-timeline-group",label:"Journey Timeline",icon:"folder",children:[{id:"journey-timeline-basic",label:"Basic",icon:"layers"},{id:"journey-timeline-horizontal",label:"Horizontal",icon:"layers"},{id:"journey-timeline-custom",label:"Custom Status",icon:"layers"}]},{id:"link-group",label:"Link",icon:"folder",children:[{id:"link-basic",label:"Basic",icon:"layers"},{id:"link-text",label:"Text Link",icon:"layers"},{id:"link-custom-child",label:"Custom Child",icon:"layers"}]},{id:"modal-group",label:"Modal",icon:"folder",children:[{id:"modal-full-preview",label:"Full Preview",icon:"layers"},{id:"modal-header-left",label:"Header Left",icon:"layers"},{id:"modal-header-centered",label:"Header Centered",icon:"layers"}]},{id:"spinner-group",label:"Spinner",icon:"folder",children:[{id:"spinner-basic",label:"Basic",icon:"layers"}]},{id:"pagination-group",label:"Pagination",icon:"folder",children:[{id:"pagination-default-arrows",label:"Default Arrows",icon:"layers"},{id:"pagination-capsule-arrows",label:"Capsule Arrows",icon:"layers"},{id:"pagination-capsule-dots",label:"Capsule Dots",icon:"layers"},{id:"pagination-arrows-right",label:"Arrows Right",icon:"layers"}]},{id:"progress-indicator-group",label:"Progress Indicator",icon:"folder",children:[{id:"progress-linear",label:"Linear",icon:"layers"},{id:"progress-circular",label:"Circular",icon:"layers"},{id:"progress-half-circle",label:"Half Circle",icon:"layers"},{id:"progress-animated",label:"Animated",icon:"layers"}]},{id:"progress-sla-group",label:"Progress SLA Indicator",icon:"folder",children:[{id:"progress-sla-circular",label:"Circular",icon:"layers"},{id:"progress-sla-linear",label:"Linear",icon:"layers"}]},{id:"popover-group",label:"Popover",icon:"folder",children:[{id:"popover-basic",label:"Basic",icon:"layers"},{id:"popover-rich",label:"Rich",icon:"layers"},{id:"popover-placements",label:"Placements",icon:"layers"},{id:"popover-custom-content",label:"Custom Content",icon:"layers"},{id:"popover-trigger",label:"Trigger",icon:"layers"}]},{id:"radio-group",label:"Radio Button",icon:"folder",children:[{id:"radio-basic",label:"Basic",icon:"layers"},{id:"radio-sizes",label:"Sizes",icon:"layers"},{id:"radio-status",label:"Status",icon:"layers"}]},{id:"result-list-group",label:"Result List",icon:"folder",children:[{id:"result-list-basic",label:"Basic",icon:"layers"},{id:"result-list-metadata",label:"Metadata",icon:"layers"},{id:"result-list-expanded",label:"Expanded",icon:"layers"},{id:"result-list-rejected",label:"Rejected",icon:"layers"}]},{id:"search-group",label:"Search Field",icon:"folder",children:[{id:"search-basic",label:"Basic",icon:"layers"},{id:"search-submit",label:"Search with Submit",icon:"layers"},{id:"search-autocomplete",label:"Autocomplete",icon:"layers"},{id:"search-status",label:"Status",icon:"layers"}]},{id:"slider-group",label:"Slider",icon:"folder",children:[{id:"slider-basic",label:"Basic",icon:"layers"},{id:"slider-sizes",label:"Sizes",icon:"layers"},{id:"slider-steps",label:"Steps",icon:"layers"},{id:"slider-custom-range",label:"Custom Range",icon:"layers"},{id:"slider-formatter",label:"Value Formatter",icon:"layers"},{id:"slider-disabled",label:"Disabled",icon:"layers"}]},{id:"stepper-group",label:"Stepper",icon:"folder",children:[{id:"stepper-horizontal",label:"Horizontal",icon:"layers"},{id:"stepper-horizontal-dashed",label:"Horizontal (Dashed)",icon:"layers"},{id:"stepper-vertical",label:"Vertical",icon:"layers"},{id:"stepper-error",label:"Error State",icon:"layers"},{id:"stepper-bottom-lines",label:"Horizontal (Bottom Line)",icon:"layers"},{id:"stepper-bottom-background",label:"Bottom Lines + Background",icon:"layers"},{id:"stepper-edge-alignment",label:"Edge Label Alignment",icon:"layers"},{id:"compact-stepper-group",label:"Compact Stepper",icon:"folder",children:[{id:"compact-stepper-linear",label:"Linear",icon:"layers"},{id:"compact-stepper-right-aligned",label:"Right Aligned",icon:"layers"},{id:"compact-stepper-centered",label:"Centered",icon:"layers"},{id:"compact-stepper-centered-between",label:"Centered (Arrows Outside)",icon:"layers"},{id:"compact-stepper-split",label:"Split",icon:"layers"}]}]},{id:"tooltip-group",label:"Tooltip",icon:"folder",children:[{id:"tooltip-introduction",label:"Introduction",icon:"layers"},{id:"tooltip-basic",label:"Placements",icon:"layers"},{id:"tooltip-interactive",label:"Interactive",icon:"layers"},{id:"tooltip-variants",label:"All Variants",icon:"layers"},{id:"tooltip-rich",label:"Rich Tooltip",icon:"layers"}]},{id:"switch-group",label:"Switch",icon:"folder",children:[{id:"switch-basic",label:"Basic & Sizes",icon:"layers"},{id:"switch-labels",label:"Label Positions",icon:"layers"},{id:"switch-status",label:"Status Descriptions",icon:"layers"},{id:"switch-required",label:"Required & Icons",icon:"layers"},{id:"switch-disabled",label:"Disabled",icon:"layers"}]},{id:"toast-group",label:"Toast",icon:"folder",children:[{id:"toast-basic",label:"Categories",icon:"layers"},{id:"toast-stacked",label:"Stacked Layout",icon:"layers"},{id:"toast-actions",label:"Action & Close",icon:"layers"},{id:"toast-custom",label:"Customization",icon:"layers"},{id:"toast-provider",label:"Provider Demo",icon:"layers"}]},{id:"timeslot-group",label:"Time Slot",icon:"folder",children:[{id:"timeslot-introduction",label:"Introduction",icon:"layers"},{id:"timeslot-basic",label:"Booking (Expanded)",icon:"layers"},{id:"timeslot-compact",label:"Compact View",icon:"layers"},{id:"timeslot-json",label:"JSON Data Source",icon:"layers"}]}]}],$a=dd.find(s=>s.id==="components");$a!=null&&$a.children&&$a.children.sort((s,l)=>s.label.localeCompare(l.label,void 0,{sensitivity:"base"}));const Pp=({activePage:s,onNavigate:l,isDark:d,onToggleTheme:m,isMobileOpen:h=!1,onCloseMobile:b})=>{const[x,i]=k.useState({}),[w,p]=k.useState(""),[T,A]=k.useState(260),[B,z]=k.useState(!1),F=La.useRef(new Set),Y=U=>!U||U==="introduction"||U==="quickstart"?[]:U.startsWith("colors-")?["tokens","colors"]:U.startsWith("typography")?["tokens","typography"]:U.startsWith("shadow")?["tokens","shadow"]:U.startsWith("dimensions")||["spacing","radius"].includes(U)?["tokens","dimensions"]:["forms","headers"].includes(U)?["patterns"]:U.startsWith("button")?["components","button-group"]:U.startsWith("date-picker")?["components","date-picker-group"]:U.startsWith("modal")?["components","modal-group"]:U.startsWith("accordion")?["components","accordion-grouping"]:U.startsWith("app-header")?["components","app-header-group"]:U.startsWith("avatar")?["components","avatar-parent-group"]:U.startsWith("checkbox")?["components","checkbox-group"]:U.startsWith("chips")?["components","chips-parent-group"]:U.startsWith("chip-group")?["components","chip-group-parent"]:U.startsWith("divider")?["components","divider-group"]:U.startsWith("status-banner")?["components","status-banner-group"]:U.startsWith("dropdown")?["components","dropdown-group"]:U.startsWith("spinner")?["components","spinner-group"]:U.startsWith("card")?["components","card-parent-group"]:U.startsWith("carousel")?["components","carousel-group"]:U.startsWith("journey-timeline")?["components","journey-timeline-group"]:U.startsWith("link")?["components","link-group"]:U.startsWith("pagination")?["components","pagination-group"]:U.startsWith("progress-sla")?["components","progress-sla-group"]:U.startsWith("progress")?["components","progress-indicator-group"]:U.startsWith("tooltip")?["components","tooltip-group"]:U.startsWith("popover")?["components","popover-group"]:U.startsWith("radio")?["components","radio-group"]:U.startsWith("result-list")?["components","result-list-group"]:U.startsWith("search")?["components","search-group"]:U.startsWith("badge")?["components","badge-parent-group"]:U.startsWith("input-aadhaar")?["components","input-aadhaar-group"]:U.startsWith("input-pan")?["components","input-pan-group"]:U.startsWith("input-otp")?["components","input-otp-group"]:U.startsWith("input")?["components","input-group"]:U.startsWith("fileupload")?["components","fileupload-group"]:U.startsWith("feedbackform")?["components","feedback-group"]:U.startsWith("empty-state")?["components","empty-state-group"]:U.startsWith("status-pipeline-horizontal")?["components","status-pipeline-group","status-pipeline-horizontal-group"]:U.startsWith("status-pipeline")?["components","status-pipeline-group","status-pipeline-vertical-group"]:U.startsWith("timepicker")?["components","timepicker-group"]:U.startsWith("toast")?["components","toast-group"]:U.startsWith("textarea")?["components","textarea-group"]:U.startsWith("tag")?["components","tag-group"]:U.startsWith("compact-stepper")?["components","stepper-group","compact-stepper-group"]:U.startsWith("stepper")?["components","stepper-group"]:U.startsWith("timeslot")?["components","timeslot-group"]:U.startsWith("switch")?["components","switch-group"]:U.startsWith("slider")?["components","slider-group"]:["input-field","checkbox","radio-button","switch","card","badge","avatar","toast"].includes(U)?["components"]:[];La.useEffect(()=>{const U=Y(s);i(ue=>{const he={...ue};for(const Te of U)F.current.has(Te)||(he[Te]=!0);return he})},[s]);const ae=k.useCallback(U=>{U.preventDefault(),z(!0);const ue=U.clientX,he=T,Te=lt=>{const ct=he+(lt.clientX-ue),Le=Math.min(Math.max(ct,180),500);A(Le)},xe=()=>{z(!1),window.removeEventListener("mousemove",Te),window.removeEventListener("mouseup",xe)};window.addEventListener("mousemove",Te),window.addEventListener("mouseup",xe)},[T]),re=()=>{A(260)},_e=U=>{F.current.add(U),i(ue=>({...ue,[U]:!ue[U]}))},$e=U=>{if(!w.trim())return U;const ue=w.toLowerCase(),he=Te=>Te.map(xe=>{if(xe.children){const lt=he(xe.children);if(lt.length>0)return{...xe,children:lt}}return xe.label.toLowerCase().includes(ue)?xe:null}).filter(Boolean);return he(U)},Ue=(U,ue)=>{if(U.children){const he=x[U.id]||!!w.trim();return t.jsxs("div",{children:[t.jsxs("button",{className:`nav-group-header ${ue>0?"nav-group-header-nested":""}`,onClick:()=>{const Te=he;if(_e(U.id),!Te&&U.children&&U.children.length>0){const xe=U.children[0];xe.children&&xe.children.length>0?l(xe.children[0].id):xe.id&&l(xe.id)}},children:[t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"material-symbols-outlined nav-icon",children:he?"folder_open":U.icon}),U.label]}),t.jsx("span",{className:"material-symbols-outlined chevron-icon",style:{fontSize:16,transform:he?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"expand_more"})]}),t.jsx("div",{className:`nav-group-children ${he?"expanded":""}`,children:U.children.map(Te=>Ue(Te,ue+1))})]},U.id)}return t.jsxs("button",{className:`nav-item ${ue>0?"nav-item-nested":""} ${s===U.id?"active":""}`,onClick:()=>l(U.id),children:[t.jsx("span",{className:"material-symbols-outlined nav-icon",children:U.icon}),U.label]},U.id)},et=$e(dd);return t.jsxs("aside",{className:`sidebar ${d?"dark":""} ${B?"resizing":""} ${h?"mobile-open":""}`,style:{width:T,minWidth:T,maxWidth:T,flexShrink:0,position:"relative"},children:[t.jsx("div",{className:"bottom-sheet-handle-wrapper",onClick:b,children:t.jsx("div",{className:"bottom-sheet-handle"})}),t.jsxs("div",{className:"sidebar-header",children:[t.jsx("div",{className:"sidebar-logo-img-wrapper",onClick:()=>l("introduction"),style:{cursor:"pointer"},children:t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"sidebar-logo-img",style:{height:28,width:"auto",display:"block"}})}),t.jsx("button",{className:"theme-toggle-btn",onClick:m,title:d?"Switch to light mode":"Switch to dark mode",children:t.jsx("span",{className:"material-symbols-outlined theme-toggle-icon",children:d?"light_mode":"dark_mode"})})]}),t.jsx("div",{className:"sidebar-search",children:t.jsxs("div",{className:"search-wrapper",children:[t.jsx("span",{className:"material-symbols-outlined search-icon",style:{fontSize:18},children:"search"}),t.jsx("input",{className:"search-input",type:"text",placeholder:"Search",value:w,onChange:U=>p(U.target.value)})]})}),t.jsx("nav",{className:"sidebar-nav",children:et.map(U=>Ue(U,0))}),t.jsx("div",{className:"sidebar-resizer",onMouseDown:ae,onDoubleClick:re,title:"Drag to resize sidebar (Double click to reset)"})]})},ed=({isDark:s,onNavigate:l})=>t.jsx("div",{className:`welcome-wrapper ${s?"dark":""}`,children:t.jsxs("div",{className:"welcome-container",children:[t.jsxs("section",{className:"hero-section",children:[t.jsxs("div",{className:"hero-left",children:[t.jsx("div",{className:"hero-logo-wrapper",children:t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"hero-logo-img"})}),t.jsxs("h1",{className:"hero-title",children:["React Native Documentation |",t.jsx("br",{}),"UX4G Design System"]}),t.jsx("div",{className:"version-badge",children:"3.0"}),t.jsx("h2",{className:"hero-tagline",children:"Government-grade UI foundations for trusted public digital experiences."}),t.jsx("p",{className:"hero-description",children:"UX4G gives product, design, and engineering teams one coherent system for building accessible, consistent, and scalable citizen-facing services."}),t.jsxs("div",{className:"hero-actions",children:[t.jsx("button",{className:"btn-hero-primary",onClick:()=>l("quickstart"),children:"Get Started"}),t.jsx("button",{className:"btn-hero-secondary",onClick:()=>l("accordion-basic"),children:"Component Library"})]})]}),t.jsx("div",{className:"hero-right",children:t.jsxs("div",{className:"overview-card",children:[t.jsx("div",{className:"overview-header-label",children:"System overview"}),t.jsxs("h3",{className:"overview-card-title",children:["One platform for",t.jsx("br",{}),"consistent public",t.jsx("br",{}),"service journeys."]}),t.jsx("p",{className:"overview-card-desc",children:"Start from shared tokens, move into reusable components, and document delivery paths in one place."}),t.jsxs("div",{className:"overview-stats-grid",children:[t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"45+"}),t.jsxs("div",{className:"stat-lbl",children:["Reusable",t.jsx("br",{}),"components"]})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"1K+"}),t.jsxs("div",{className:"stat-lbl",children:["Design",t.jsx("br",{}),"tokens"]})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"10+"}),t.jsx("div",{className:"stat-lbl",children:"Patterns"})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"AA"}),t.jsxs("div",{className:"stat-lbl",children:["Accessibility",t.jsx("br",{}),"target"]})]})]}),t.jsxs("div",{className:"overview-table-rows",children:[t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Tokens"}),t.jsx("span",{className:"table-row-desc",children:"Spacing, Radius, Colors"})]}),t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Components"}),t.jsx("span",{className:"table-row-desc",children:"Inputs, buttons, cards"})]}),t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Patterns"}),t.jsx("span",{className:"table-row-desc",children:"Headers, footers, forms"})]})]})]})})]}),t.jsxs("section",{className:"section-block",children:[t.jsx("div",{className:"section-kicker",children:"Core strengths"}),t.jsxs("h2",{className:"section-heading",children:["Built for design systems that need",t.jsx("br",{}),"to scale beyond one product team."]}),t.jsx("p",{className:"section-subtext",children:"UX4G combines visual consistency, engineering pragmatism, and accessibility expectations into a single documentation experience."}),t.jsxs("div",{className:"cards-grid cards-grid-2x2",children:[t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"account_tree"})}),t.jsx("h3",{className:"feature-card-title",children:"Scalable Architecture"}),t.jsx("p",{className:"feature-card-desc",children:"A structured system of foundations, patterns, and components that can scale across ministries, vendors, and service teams."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"accessibility_new"})}),t.jsx("h3",{className:"feature-card-title",children:"Accessible Components"}),t.jsx("p",{className:"feature-card-desc",children:"Interaction patterns are designed for clarity, contrast, keyboard use, and dependable public-facing experiences."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"palette"})}),t.jsx("h3",{className:"feature-card-title",children:"Token-Driven Design"}),t.jsx("p",{className:"feature-card-desc",children:"Color, typography, spacing, and elevation are governed through reusable tokens that keep every experience aligned."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"code"})}),t.jsx("h3",{className:"feature-card-title",children:"Developer Friendly"}),t.jsx("p",{className:"feature-card-desc",children:"Composable utilities, production-ready components, and Storybook documentation reduce friction from exploration to delivery."})]})]})]}),t.jsxs("section",{className:"section-block",children:[t.jsx("div",{className:"section-kicker",children:"Library map"}),t.jsxs("h2",{className:"section-heading",children:["Navigate the design system through the same",t.jsx("br",{}),"categories shown in the Storybook sidebar."]}),t.jsx("p",{className:"section-subtext",children:"Components, tokens, and Patterns are organized to help teams move from exploration to implementation without losing context."}),t.jsxs("div",{className:"cards-grid cards-grid-3",children:[t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"widgets"})}),t.jsx("h3",{className:"feature-card-title",children:"Components"}),t.jsx("p",{className:"feature-card-desc",children:"Form controls, navigation, feedback, and layout primitives designed for real government workflows."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Production-ready UI building blocks"}),t.jsx("li",{children:"Interactive states documented in Storybook"}),t.jsx("li",{children:"Consistent anatomy across surfaces"})]})]}),t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"style"})}),t.jsx("h3",{className:"feature-card-title",children:"Tokens"}),t.jsx("p",{className:"feature-card-desc",children:"Core design decisions captured as reusable color, typography, spacing, and semantic values."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Brand and neutral palettes"}),t.jsx("li",{children:"Semantic mappings for surfaces and states"}),t.jsx("li",{children:"A shared source of truth for scale"})]})]}),t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"dashboard_customize"})}),t.jsx("h3",{className:"feature-card-title",children:"Patterns"}),t.jsx("p",{className:"feature-card-desc",children:"Reusable block-level compositions like headers, footers, and complex forms used across applications."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Pre-built structural blocks"}),t.jsx("li",{children:"Streamlined composition"}),t.jsx("li",{children:"Accelerated feature delivery"})]})]})]})]}),t.jsxs("footer",{className:"welcome-footer",children:[t.jsx("div",{className:"footer-divider"}),t.jsxs("div",{className:"footer-content",children:[t.jsxs("div",{className:"footer-left",children:[t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"footer-logo"}),t.jsx("span",{className:"footer-tagline",children:"A shared platform for accessible, consistent, and reliable public digital products."})]}),t.jsxs("div",{className:"footer-right",children:[t.jsx("span",{className:"footer-visit-text",children:"Visit:"}),t.jsx("a",{href:"https://www.ux4g.gov.in",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"ux4g.gov.in"})]})]})]})]})}),Vp=[{heading:"UX4G React Native Design System",body:"The React Native design system is built to deliver consistent, accessible, and trusted digital experiences across public service applications. It provides 45+ components, design tokens, and a theming system that follows UX4G accessibility guidelines."},{heading:"How to use this documentation",body:`Browse components using the left sidebar. Click any component to see its use cases.
========
 */var Kc;function jp(){if(Kc)return Ke;Kc=1;var s=Os(),d=Cp();function c(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,h={};function b(e,r){x(e,r),x(e+"Capture",r)}function x(e,r){for(h[e]=r,e=0;e<r.length;e++)m.add(r[e])}var i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},E={};function B(e){return w.call(E,e)?!0:w.call(T,e)?!1:p.test(e)?E[e]=!0:(T[e]=!0,!1)}function z(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,r,n,a){if(r===null||typeof r>"u"||z(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(e,r,n,a,l,o,u){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=u}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ae[r]=new Y(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ae[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ae[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ae[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function _e(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(re,_e);ae[r]=new Y(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(re,_e);ae[r]=new Y(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(re,_e);ae[r]=new Y(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),ae.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ae[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function $e(e,r,n,a){var l=ae.hasOwnProperty(r)?ae[r]:null;(l!==null?l.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(F(r,n,l,a)&&(n=null),a||l===null?B(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(r=l.attributeName,a=l.attributeNamespace,n===null?e.removeAttribute(r):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var Te=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),A=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),Pe=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),ot=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),gt=Symbol.for("react.suspense_list"),jt=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),q=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,v;function U(e){if(v===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);v=r&&r[1]||""}return`
`+v+e}var Z=!1;function te(e,r){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var a=j}Reflect.construct(e,[],r)}else{try{r.call()}catch(j){a=j}e.call(r.prototype)}else{try{throw Error()}catch(j){a=j}e()}}catch(j){if(j&&a&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),o=a.stack.split(`
`),u=l.length-1,f=o.length-1;1<=u&&0<=f&&l[u]!==o[f];)f--;for(;1<=u&&0<=f;u--,f--)if(l[u]!==o[f]){if(u!==1||f!==1)do if(u--,f--,0>f||l[u]!==o[f]){var g=`
`+l[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=u&&0<=f);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?U(e):""}function se(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ue:return"Fragment";case A:return"Portal";case Pe:return"Profiler";case ge:return"StrictMode";case Le:return"Suspense";case gt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ot:return(e.displayName||"Context")+".Consumer";case Ve:return(e._context.displayName||"Context")+".Provider";case ct:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jt:return r=e.displayName||null,r!==null?r:le(e.type)||"Memo";case Oe:r=e._payload,e=e._init;try{return le(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(e){var r=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,o.call(this,u)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Pn(e){e._valueTracker||(e._valueTracker=tt(e))}function Ys(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=xe(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ma(e,r){var n=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ks(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=ce(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Js(e,r){r=r.checked,r!=null&&$e(e,"checked",r,!1)}function _a(e,r){Js(e,r);var n=ce(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Oa(e,r.type,n):r.hasOwnProperty("defaultValue")&&Oa(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Zs(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oa(e,r,n){(r!=="number"||Vn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wr=Array.isArray;function gr(e,r,n,a){if(e=e.options,r){r={};for(var l=0;l<n.length;l++)r["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=r.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),r=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function Xa(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(c(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function el(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(c(92));if(Wr(n)){if(1<n.length)throw Error(c(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:ce(n)}}function tl(e,r){var n=ce(r.value),a=ce(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function rl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function nl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?nl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,al=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,l){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Mr(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cd=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){Cd.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),_r[r]=_r[e]})});function il(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||_r.hasOwnProperty(e)&&_r[e]?(""+r).trim():r+"px"}function sl(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=il(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,l):e[n]=l}}var jd=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ga(e,r){if(r){if(jd[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(c(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(c(61))}if(r.style!=null&&typeof r.style!="object")throw Error(c(62))}}function Qa(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function Ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,xr=null,yr=null;function ll(e){if(e=mn(e)){if(typeof Ja!="function")throw Error(c(280));var r=e.stateNode;r&&(r=ea(r),Ja(e.stateNode,e.type,r))}}function ol(e){xr?yr?yr.push(e):yr=[e]:xr=e}function cl(){if(xr){var e=xr,r=yr;if(yr=xr=null,ll(e),r)for(e=0;e<r.length;e++)ll(r[e])}}function dl(e,r){return e(r)}function ul(){}var Za=!1;function pl(e,r,n){if(Za)return e(r,n);Za=!0;try{return dl(e,r,n)}finally{Za=!1,(xr!==null||yr!==null)&&(ul(),cl())}}function Or(e,r){var n=e.stateNode;if(n===null)return null;var a=ea(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,r,typeof n));return n}var ei=!1;if(i)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ei=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ei=!1}function kd(e,r,n,a,l,o,u,f,g){var j=Array.prototype.slice.call(arguments,3);try{r.apply(n,j)}catch(P){this.onError(P)}}var Hr=!1,An=null,Dn=!1,ti=null,Td={onError:function(e){Hr=!0,An=e}};function Nd(e,r,n,a,l,o,u,f,g){Hr=!1,An=null,kd.apply(Td,arguments)}function Ud(e,r,n,a,l,o,u,f,g){if(Nd.apply(this,arguments),Hr){if(Hr){var j=An;Hr=!1,An=null}else throw Error(c(198));Dn||(Dn=!0,ti=j)}}function nr(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function ml(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function hl(e){if(nr(e)!==e)throw Error(c(188))}function Pd(e){var r=e.alternate;if(!r){if(r=nr(e),r===null)throw Error(c(188));return r!==e?null:e}for(var n=e,a=r;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return hl(l),e;if(o===a)return hl(l),r;o=o.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=o;else{for(var u=!1,f=l.child;f;){if(f===n){u=!0,n=l,a=o;break}if(f===a){u=!0,a=l,n=o;break}f=f.sibling}if(!u){for(f=o.child;f;){if(f===n){u=!0,n=o,a=l;break}if(f===a){u=!0,a=o,n=l;break}f=f.sibling}if(!u)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:r}function fl(e){return e=Pd(e),e!==null?gl(e):null}function gl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=gl(e);if(r!==null)return r;e=e.sibling}return null}var xl=d.unstable_scheduleCallback,yl=d.unstable_cancelCallback,Vd=d.unstable_shouldYield,Ed=d.unstable_requestPaint,Ce=d.unstable_now,Ad=d.unstable_getCurrentPriorityLevel,ri=d.unstable_ImmediatePriority,bl=d.unstable_UserBlockingPriority,Fn=d.unstable_NormalPriority,Dd=d.unstable_LowPriority,vl=d.unstable_IdlePriority,Bn=null,kt=null;function Fd(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Bn,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:zd,Bd=Math.log,qd=Math.LN2;function zd(e){return e>>>=0,e===0?32:31-(Bd(e)/qd|0)|0}var qn=64,zn=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function In(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~l;f!==0?a=Gr(f):(o&=u,o!==0&&(a=Gr(o)))}else u=n&~l,u!==0?a=Gr(u):o!==0&&(a=Gr(o));if(a===0)return 0;if(r!==0&&r!==a&&(r&l)===0&&(l=a&-a,o=r&-r,l>=o||l===16&&(o&4194240)!==0))return r;if((a&4)!==0&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-xt(r),l=1<<n,a|=e[n],r&=~l;return a}function Id(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-xt(o),f=1<<u,g=l[u];g===-1?((f&n)===0||(f&a)!==0)&&(l[u]=Id(f,r)):g<=r&&(e.expiredLanes|=f),o&=~f}}function ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wl(){var e=qn;return qn<<=1,(qn&4194240)===0&&(qn=64),e}function ai(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Qr(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-xt(r),e[r]=n}function $d(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-xt(n),o=1<<l;r[l]=0,a[l]=-1,e[l]=-1,n&=~o}}function ii(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-xt(n),l=1<<a;l&r|e[a]&r&&(e[a]|=r),n&=~l}}var de=0;function Sl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Cl,si,jl,kl,Tl,li=!1,Rn=[],It=null,Rt=null,$t=null,Yr=new Map,Kr=new Map,Lt=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nl(e,r){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Yr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(r.pointerId)}}function Jr(e,r,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},r!==null&&(r=mn(r),r!==null&&si(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function Wd(e,r,n,a,l){switch(r){case"focusin":return It=Jr(It,e,r,n,a,l),!0;case"dragenter":return Rt=Jr(Rt,e,r,n,a,l),!0;case"mouseover":return $t=Jr($t,e,r,n,a,l),!0;case"pointerover":var o=l.pointerId;return Yr.set(o,Jr(Yr.get(o)||null,e,r,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,Kr.set(o,Jr(Kr.get(o)||null,e,r,n,a,l)),!0}return!1}function Ul(e){var r=ar(e.target);if(r!==null){var n=nr(r);if(n!==null){if(r=n.tag,r===13){if(r=ml(n),r!==null){e.blockedOn=r,Tl(e.priority,function(){jl(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $n(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=ci(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ya=a,n.target.dispatchEvent(a),Ya=null}else return r=mn(n),r!==null&&si(r),e.blockedOn=n,!1;r.shift()}return!0}function Pl(e,r,n){$n(e)&&n.delete(r)}function Md(){li=!1,It!==null&&$n(It)&&(It=null),Rt!==null&&$n(Rt)&&(Rt=null),$t!==null&&$n($t)&&($t=null),Yr.forEach(Pl),Kr.forEach(Pl)}function Zr(e,r){e.blockedOn===r&&(e.blockedOn=null,li||(li=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Md)))}function en(e){function r(l){return Zr(l,e)}if(0<Rn.length){Zr(Rn[0],e);for(var n=1;n<Rn.length;n++){var a=Rn[n];a.blockedOn===e&&(a.blockedOn=null)}}for(It!==null&&Zr(It,e),Rt!==null&&Zr(Rt,e),$t!==null&&Zr($t,e),Yr.forEach(r),Kr.forEach(r),n=0;n<Lt.length;n++)a=Lt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Ul(n),n.blockedOn===null&&Lt.shift()}var br=Te.ReactCurrentBatchConfig,Ln=!0;function _d(e,r,n,a){var l=de,o=br.transition;br.transition=null;try{de=1,oi(e,r,n,a)}finally{de=l,br.transition=o}}function Od(e,r,n,a){var l=de,o=br.transition;br.transition=null;try{de=4,oi(e,r,n,a)}finally{de=l,br.transition=o}}function oi(e,r,n,a){if(Ln){var l=ci(e,r,n,a);if(l===null)Ti(e,r,a,Wn,n),Nl(e,a);else if(Wd(l,e,r,n,a))a.stopPropagation();else if(Nl(e,a),r&4&&-1<Ld.indexOf(e)){for(;l!==null;){var o=mn(l);if(o!==null&&Cl(o),o=ci(e,r,n,a),o===null&&Ti(e,r,a,Wn,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else Ti(e,r,a,null,n)}}var Wn=null;function ci(e,r,n,a){if(Wn=null,e=Ka(a),e=ar(e),e!==null)if(r=nr(e),r===null)e=null;else if(n=r.tag,n===13){if(e=ml(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Wn=e,null}function Vl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ad()){case ri:return 1;case bl:return 4;case Fn:case Dd:return 16;case vl:return 536870912;default:return 16}default:return 16}}var Wt=null,di=null,Mn=null;function El(){if(Mn)return Mn;var e,r=di,n=r.length,a,l="value"in Wt?Wt.value:Wt.textContent,o=l.length;for(e=0;e<n&&r[e]===l[e];e++);var u=n-e;for(a=1;a<=u&&r[n-a]===l[o-a];a++);return Mn=l.slice(e,1<a?1-a:void 0)}function _n(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function Al(){return!1}function rt(e){function r(n,a,l,o,u){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?On:Al,this.isPropagationStopped=Al,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),r}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=rt(vr),tn=$({},vr,{view:0,detail:0}),Xd=rt(tn),pi,mi,rn,Xn=$({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rn&&(rn&&e.type==="mousemove"?(pi=e.screenX-rn.screenX,mi=e.screenY-rn.screenY):mi=pi=0,rn=e),pi)},movementY:function(e){return"movementY"in e?e.movementY:mi}}),Dl=rt(Xn),Hd=$({},Xn,{dataTransfer:0}),Gd=rt(Hd),Qd=$({},tn,{relatedTarget:0}),hi=rt(Qd),Yd=$({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kd=rt(Yd),Jd=$({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=rt(Jd),eu=$({},vr,{data:0}),Fl=rt(eu),tu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function au(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=nu[e])?!!r[e]:!1}function fi(){return au}var iu=$({},tn,{key:function(e){if(e.key){var r=tu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=_n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?_n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),su=rt(iu),lu=$({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bl=rt(lu),ou=$({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),cu=rt(ou),du=$({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uu=rt(du),pu=$({},Xn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mu=rt(pu),hu=[9,13,27,32],gi=i&&"CompositionEvent"in window,nn=null;i&&"documentMode"in document&&(nn=document.documentMode);var fu=i&&"TextEvent"in window&&!nn,ql=i&&(!gi||nn&&8<nn&&11>=nn),zl=" ",Il=!1;function Rl(e,r){switch(e){case"keyup":return hu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $l(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function gu(e,r){switch(e){case"compositionend":return $l(r);case"keypress":return r.which!==32?null:(Il=!0,zl);case"textInput":return e=r.data,e===zl&&Il?null:e;default:return null}}function xu(e,r){if(wr)return e==="compositionend"||!gi&&Rl(e,r)?(e=El(),Mn=di=Wt=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ql&&r.locale!=="ko"?null:r.data;default:return null}}var yu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ll(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!yu[e.type]:r==="textarea"}function Wl(e,r,n,a){ol(a),r=Kn(r,"onChange"),0<r.length&&(n=new ui("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var an=null,sn=null;function bu(e){so(e,0)}function Hn(e){var r=Tr(e);if(Ys(r))return e}function vu(e,r){if(e==="change")return r}var Ml=!1;if(i){var xi;if(i){var yi="oninput"in document;if(!yi){var _l=document.createElement("div");_l.setAttribute("oninput","return;"),yi=typeof _l.oninput=="function"}xi=yi}else xi=!1;Ml=xi&&(!document.documentMode||9<document.documentMode)}function Ol(){an&&(an.detachEvent("onpropertychange",Xl),sn=an=null)}function Xl(e){if(e.propertyName==="value"&&Hn(sn)){var r=[];Wl(r,sn,e,Ka(e)),pl(bu,r)}}function wu(e,r,n){e==="focusin"?(Ol(),an=r,sn=n,an.attachEvent("onpropertychange",Xl)):e==="focusout"&&Ol()}function Su(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hn(sn)}function Cu(e,r){if(e==="click")return Hn(r)}function ju(e,r){if(e==="input"||e==="change")return Hn(r)}function ku(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var yt=typeof Object.is=="function"?Object.is:ku;function ln(e,r){if(yt(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!w.call(r,l)||!yt(e[l],r[l]))return!1}return!0}function Hl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gl(e,r){var n=Hl(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hl(n)}}function Ql(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Ql(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Yl(){for(var e=window,r=Vn();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Vn(e.document)}return r}function bi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Tu(e){var r=Yl(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Ql(n.ownerDocument.documentElement,n)){if(a!==null&&bi(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(a.start,l);a=a.end===void 0?o:Math.min(a.end,l),!e.extend&&o>a&&(l=a,a=o,o=l),l=Gl(n,o);var u=Gl(n,a);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),o>a?(e.addRange(r),e.extend(u.node,u.offset)):(r.setEnd(u.node,u.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nu=i&&"documentMode"in document&&11>=document.documentMode,Sr=null,vi=null,on=null,wi=!1;function Kl(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||Sr==null||Sr!==Vn(a)||(a=Sr,"selectionStart"in a&&bi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),on&&ln(on,a)||(on=a,a=Kn(vi,"onSelect"),0<a.length&&(r=new ui("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=Sr)))}function Gn(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Cr={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionend:Gn("Transition","TransitionEnd")},Si={},Jl={};i&&(Jl=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Qn(e){if(Si[e])return Si[e];if(!Cr[e])return e;var r=Cr[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Jl)return Si[e]=r[n];return e}var Zl=Qn("animationend"),eo=Qn("animationiteration"),to=Qn("animationstart"),ro=Qn("transitionend"),no=new Map,ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,r){no.set(e,r),b(r,[e])}for(var Ci=0;Ci<ao.length;Ci++){var ji=ao[Ci],Uu=ji.toLowerCase(),Pu=ji[0].toUpperCase()+ji.slice(1);Mt(Uu,"on"+Pu)}Mt(Zl,"onAnimationEnd"),Mt(eo,"onAnimationIteration"),Mt(to,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(ro,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vu=new Set("cancel close invalid load scroll toggle".split(" ").concat(cn));function io(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,Ud(a,r,void 0,e),e.currentTarget=null}function so(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(r)for(var u=a.length-1;0<=u;u--){var f=a[u],g=f.instance,j=f.currentTarget;if(f=f.listener,g!==o&&l.isPropagationStopped())break e;io(l,f,j),o=g}else for(u=0;u<a.length;u++){if(f=a[u],g=f.instance,j=f.currentTarget,f=f.listener,g!==o&&l.isPropagationStopped())break e;io(l,f,j),o=g}}}if(Dn)throw e=ti,Dn=!1,ti=null,e}function he(e,r){var n=r[Ai];n===void 0&&(n=r[Ai]=new Set);var a=e+"__bubble";n.has(a)||(lo(r,e,2,!1),n.add(a))}function ki(e,r,n){var a=0;r&&(a|=4),lo(n,e,a,r)}var Yn="_reactListening"+Math.random().toString(36).slice(2);function dn(e){if(!e[Yn]){e[Yn]=!0,m.forEach(function(n){n!=="selectionchange"&&(Vu.has(n)||ki(n,!1,e),ki(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Yn]||(r[Yn]=!0,ki("selectionchange",!1,r))}}function lo(e,r,n,a){switch(Vl(r)){case 1:var l=_d;break;case 4:l=Od;break;default:l=oi}n=l.bind(null,r,n,e),l=void 0,!ei||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(r,n,{capture:!0,passive:l}):e.addEventListener(r,n,!0):l!==void 0?e.addEventListener(r,n,{passive:l}):e.addEventListener(r,n,!1)}function Ti(e,r,n,a,l){var o=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var g=u.tag;if((g===3||g===4)&&(g=u.stateNode.containerInfo,g===l||g.nodeType===8&&g.parentNode===l))return;u=u.return}for(;f!==null;){if(u=ar(f),u===null)return;if(g=u.tag,g===5||g===6){a=o=u;continue e}f=f.parentNode}}a=a.return}pl(function(){var j=o,P=Ka(n),V=[];e:{var N=no.get(e);if(N!==void 0){var I=ui,L=e;switch(e){case"keypress":if(_n(n)===0)break e;case"keydown":case"keyup":I=su;break;case"focusin":L="focus",I=hi;break;case"focusout":L="blur",I=hi;break;case"beforeblur":case"afterblur":I=hi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=cu;break;case Zl:case eo:case to:I=Kd;break;case ro:I=uu;break;case"scroll":I=Xd;break;case"wheel":I=mu;break;case"copy":case"cut":case"paste":I=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Bl}var W=(r&4)!==0,je=!W&&e==="scroll",S=W?N!==null?N+"Capture":null:N;W=[];for(var y=j,C;y!==null;){C=y;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,S!==null&&(D=Or(y,S),D!=null&&W.push(un(y,D,C)))),je)break;y=y.return}0<W.length&&(N=new I(N,L,null,n,P),V.push({event:N,listeners:W}))}}if((r&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",N&&n!==Ya&&(L=n.relatedTarget||n.fromElement)&&(ar(L)||L[Vt]))break e;if((I||N)&&(N=P.window===P?P:(N=P.ownerDocument)?N.defaultView||N.parentWindow:window,I?(L=n.relatedTarget||n.toElement,I=j,L=L?ar(L):null,L!==null&&(je=nr(L),L!==je||L.tag!==5&&L.tag!==6)&&(L=null)):(I=null,L=j),I!==L)){if(W=Dl,D="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(W=Bl,D="onPointerLeave",S="onPointerEnter",y="pointer"),je=I==null?N:Tr(I),C=L==null?N:Tr(L),N=new W(D,y+"leave",I,n,P),N.target=je,N.relatedTarget=C,D=null,ar(P)===j&&(W=new W(S,y+"enter",L,n,P),W.target=C,W.relatedTarget=je,D=W),je=D,I&&L)t:{for(W=I,S=L,y=0,C=W;C;C=jr(C))y++;for(C=0,D=S;D;D=jr(D))C++;for(;0<y-C;)W=jr(W),y--;for(;0<C-y;)S=jr(S),C--;for(;y--;){if(W===S||S!==null&&W===S.alternate)break t;W=jr(W),S=jr(S)}W=null}else W=null;I!==null&&oo(V,N,I,W,!1),L!==null&&je!==null&&oo(V,je,L,W,!0)}}e:{if(N=j?Tr(j):window,I=N.nodeName&&N.nodeName.toLowerCase(),I==="select"||I==="input"&&N.type==="file")var M=vu;else if(Ll(N))if(Ml)M=ju;else{M=Su;var _=wu}else(I=N.nodeName)&&I.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(M=Cu);if(M&&(M=M(e,j))){Wl(V,M,n,P);break e}_&&_(e,N,j),e==="focusout"&&(_=N._wrapperState)&&_.controlled&&N.type==="number"&&Oa(N,"number",N.value)}switch(_=j?Tr(j):window,e){case"focusin":(Ll(_)||_.contentEditable==="true")&&(Sr=_,vi=j,on=null);break;case"focusout":on=vi=Sr=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,Kl(V,n,P);break;case"selectionchange":if(Nu)break;case"keydown":case"keyup":Kl(V,n,P)}var O;if(gi)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else wr?Rl(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(ql&&n.locale!=="ko"&&(wr||H!=="onCompositionStart"?H==="onCompositionEnd"&&wr&&(O=El()):(Wt=P,di="value"in Wt?Wt.value:Wt.textContent,wr=!0)),_=Kn(j,H),0<_.length&&(H=new Fl(H,e,null,n,P),V.push({event:H,listeners:_}),O?H.data=O:(O=$l(n),O!==null&&(H.data=O)))),(O=fu?gu(e,n):xu(e,n))&&(j=Kn(j,"onBeforeInput"),0<j.length&&(P=new Fl("onBeforeInput","beforeinput",null,n,P),V.push({event:P,listeners:j}),P.data=O))}so(V,r)})}function un(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Kn(e,r){for(var n=r+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Or(e,n),o!=null&&a.unshift(un(e,o,l)),o=Or(e,r),o!=null&&a.push(un(e,o,l))),e=e.return}return a}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oo(e,r,n,a,l){for(var o=r._reactName,u=[];n!==null&&n!==a;){var f=n,g=f.alternate,j=f.stateNode;if(g!==null&&g===a)break;f.tag===5&&j!==null&&(f=j,l?(g=Or(n,o),g!=null&&u.unshift(un(n,g,f))):l||(g=Or(n,o),g!=null&&u.push(un(n,g,f)))),n=n.return}u.length!==0&&e.push({event:r,listeners:u})}var Eu=/\r\n?/g,Au=/\u0000|\uFFFD/g;function co(e){return(typeof e=="string"?e:""+e).replace(Eu,`
`).replace(Au,"")}function Jn(e,r,n){if(r=co(r),co(e)!==r&&n)throw Error(c(425))}function Zn(){}var Ni=null,Ui=null;function Pi(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Du=typeof clearTimeout=="function"?clearTimeout:void 0,uo=typeof Promise=="function"?Promise:void 0,Fu=typeof queueMicrotask=="function"?queueMicrotask:typeof uo<"u"?function(e){return uo.resolve(null).then(e).catch(Bu)}:Vi;function Bu(e){setTimeout(function(){throw e})}function Ei(e,r){var n=r,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),en(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);en(r)}function _t(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function po(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+kr,pn="__reactProps$"+kr,Vt="__reactContainer$"+kr,Ai="__reactEvents$"+kr,qu="__reactListeners$"+kr,zu="__reactHandles$"+kr;function ar(e){var r=e[Tt];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Vt]||n[Tt]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=po(e);e!==null;){if(n=e[Tt])return n;e=po(e)}return r}e=n,n=e.parentNode}return null}function mn(e){return e=e[Tt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function ea(e){return e[pn]||null}var Di=[],Nr=-1;function Ot(e){return{current:e}}function fe(e){0>Nr||(e.current=Di[Nr],Di[Nr]=null,Nr--)}function me(e,r){Nr++,Di[Nr]=e.current,e.current=r}var Xt={},qe=Ot(Xt),Xe=Ot(!1),ir=Xt;function Ur(e,r){var n=e.type.contextTypes;if(!n)return Xt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=r[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function He(e){return e=e.childContextTypes,e!=null}function ta(){fe(Xe),fe(qe)}function mo(e,r,n){if(qe.current!==Xt)throw Error(c(168));me(qe,r),me(Xe,n)}function ho(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in r))throw Error(c(108,pe(e)||"Unknown",l));return $({},n,a)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,ir=qe.current,me(qe,e),me(Xe,Xe.current),!0}function fo(e,r,n){var a=e.stateNode;if(!a)throw Error(c(169));n?(e=ho(e,r,ir),a.__reactInternalMemoizedMergedChildContext=e,fe(Xe),fe(qe),me(qe,e)):fe(Xe),me(Xe,n)}var Et=null,na=!1,Fi=!1;function go(e){Et===null?Et=[e]:Et.push(e)}function Iu(e){na=!0,go(e)}function Ht(){if(!Fi&&Et!==null){Fi=!0;var e=0,r=de;try{var n=Et;for(de=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Et=null,na=!1}catch(l){throw Et!==null&&(Et=Et.slice(e+1)),xl(ri,Ht),l}finally{de=r,Fi=!1}}return null}var Pr=[],Vr=0,aa=null,ia=0,dt=[],ut=0,sr=null,At=1,Dt="";function lr(e,r){Pr[Vr++]=ia,Pr[Vr++]=aa,aa=e,ia=r}function xo(e,r,n){dt[ut++]=At,dt[ut++]=Dt,dt[ut++]=sr,sr=e;var a=At;e=Dt;var l=32-xt(a)-1;a&=~(1<<l),n+=1;var o=32-xt(r)+l;if(30<o){var u=l-l%5;o=(a&(1<<u)-1).toString(32),a>>=u,l-=u,At=1<<32-xt(r)+l|n<<l|a,Dt=o+e}else At=1<<o|n<<l|a,Dt=e}function Bi(e){e.return!==null&&(lr(e,1),xo(e,1,0))}function qi(e){for(;e===aa;)aa=Pr[--Vr],Pr[Vr]=null,ia=Pr[--Vr],Pr[Vr]=null;for(;e===sr;)sr=dt[--ut],dt[ut]=null,Dt=dt[--ut],dt[ut]=null,At=dt[--ut],dt[ut]=null}var nt=null,at=null,ye=!1,bt=null;function yo(e,r){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function bo(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,nt=e,at=_t(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,nt=e,at=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=sr!==null?{id:At,overflow:Dt}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,nt=e,at=null,!0):!1;default:return!1}}function zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ii(e){if(ye){var r=at;if(r){var n=r;if(!bo(e,r)){if(zi(e))throw Error(c(418));r=_t(n.nextSibling);var a=nt;r&&bo(e,r)?yo(a,n):(e.flags=e.flags&-4097|2,ye=!1,nt=e)}}else{if(zi(e))throw Error(c(418));e.flags=e.flags&-4097|2,ye=!1,nt=e}}}function vo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function sa(e){if(e!==nt)return!1;if(!ye)return vo(e),ye=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Pi(e.type,e.memoizedProps)),r&&(r=at)){if(zi(e))throw wo(),Error(c(418));for(;r;)yo(e,r),r=_t(r.nextSibling)}if(vo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){at=_t(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}at=null}}else at=nt?_t(e.stateNode.nextSibling):null;return!0}function wo(){for(var e=at;e;)e=_t(e.nextSibling)}function Er(){at=nt=null,ye=!1}function Ri(e){bt===null?bt=[e]:bt.push(e)}var Ru=Te.ReactCurrentBatchConfig;function hn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var a=n.stateNode}if(!a)throw Error(c(147,e));var l=a,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(u){var f=l.refs;u===null?delete f[o]:f[o]=u},r._stringRef=o,r)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function la(e,r){throw e=Object.prototype.toString.call(r),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function So(e){var r=e._init;return r(e._payload)}function Co(e){function r(S,y){if(e){var C=S.deletions;C===null?(S.deletions=[y],S.flags|=16):C.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)r(S,y),y=y.sibling;return null}function a(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function l(S,y){return S=tr(S,y),S.index=0,S.sibling=null,S}function o(S,y,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<y?(S.flags|=2,y):C):(S.flags|=2,y)):(S.flags|=1048576,y)}function u(S){return e&&S.alternate===null&&(S.flags|=2),S}function f(S,y,C,D){return y===null||y.tag!==6?(y=Vs(C,S.mode,D),y.return=S,y):(y=l(y,C),y.return=S,y)}function g(S,y,C,D){var M=C.type;return M===ue?P(S,y,C.props.children,D,C.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oe&&So(M)===y.type)?(D=l(y,C.props),D.ref=hn(S,y,C),D.return=S,D):(D=Ea(C.type,C.key,C.props,null,S.mode,D),D.ref=hn(S,y,C),D.return=S,D)}function j(S,y,C,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=Es(C,S.mode,D),y.return=S,y):(y=l(y,C.children||[]),y.return=S,y)}function P(S,y,C,D,M){return y===null||y.tag!==7?(y=fr(C,S.mode,D,M),y.return=S,y):(y=l(y,C),y.return=S,y)}function V(S,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Vs(""+y,S.mode,C),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case et:return C=Ea(y.type,y.key,y.props,null,S.mode,C),C.ref=hn(S,null,y),C.return=S,C;case A:return y=Es(y,S.mode,C),y.return=S,y;case Oe:var D=y._init;return V(S,D(y._payload),C)}if(Wr(y)||X(y))return y=fr(y,S.mode,C,null),y.return=S,y;la(S,y)}return null}function N(S,y,C,D){var M=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:f(S,y,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case et:return C.key===M?g(S,y,C,D):null;case A:return C.key===M?j(S,y,C,D):null;case Oe:return M=C._init,N(S,y,M(C._payload),D)}if(Wr(C)||X(C))return M!==null?null:P(S,y,C,D,null);la(S,C)}return null}function I(S,y,C,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(C)||null,f(y,S,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case et:return S=S.get(D.key===null?C:D.key)||null,g(y,S,D,M);case A:return S=S.get(D.key===null?C:D.key)||null,j(y,S,D,M);case Oe:var _=D._init;return I(S,y,C,_(D._payload),M)}if(Wr(D)||X(D))return S=S.get(C)||null,P(y,S,D,M,null);la(y,D)}return null}function L(S,y,C,D){for(var M=null,_=null,O=y,H=y=0,De=null;O!==null&&H<C.length;H++){O.index>H?(De=O,O=null):De=O.sibling;var oe=N(S,O,C[H],D);if(oe===null){O===null&&(O=De);break}e&&O&&oe.alternate===null&&r(S,O),y=o(oe,y,H),_===null?M=oe:_.sibling=oe,_=oe,O=De}if(H===C.length)return n(S,O),ye&&lr(S,H),M;if(O===null){for(;H<C.length;H++)O=V(S,C[H],D),O!==null&&(y=o(O,y,H),_===null?M=O:_.sibling=O,_=O);return ye&&lr(S,H),M}for(O=a(S,O);H<C.length;H++)De=I(O,S,H,C[H],D),De!==null&&(e&&De.alternate!==null&&O.delete(De.key===null?H:De.key),y=o(De,y,H),_===null?M=De:_.sibling=De,_=De);return e&&O.forEach(function(rr){return r(S,rr)}),ye&&lr(S,H),M}function W(S,y,C,D){var M=X(C);if(typeof M!="function")throw Error(c(150));if(C=M.call(C),C==null)throw Error(c(151));for(var _=M=null,O=y,H=y=0,De=null,oe=C.next();O!==null&&!oe.done;H++,oe=C.next()){O.index>H?(De=O,O=null):De=O.sibling;var rr=N(S,O,oe.value,D);if(rr===null){O===null&&(O=De);break}e&&O&&rr.alternate===null&&r(S,O),y=o(rr,y,H),_===null?M=rr:_.sibling=rr,_=rr,O=De}if(oe.done)return n(S,O),ye&&lr(S,H),M;if(O===null){for(;!oe.done;H++,oe=C.next())oe=V(S,oe.value,D),oe!==null&&(y=o(oe,y,H),_===null?M=oe:_.sibling=oe,_=oe);return ye&&lr(S,H),M}for(O=a(S,O);!oe.done;H++,oe=C.next())oe=I(O,S,H,oe.value,D),oe!==null&&(e&&oe.alternate!==null&&O.delete(oe.key===null?H:oe.key),y=o(oe,y,H),_===null?M=oe:_.sibling=oe,_=oe);return e&&O.forEach(function(yp){return r(S,yp)}),ye&&lr(S,H),M}function je(S,y,C,D){if(typeof C=="object"&&C!==null&&C.type===ue&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case et:e:{for(var M=C.key,_=y;_!==null;){if(_.key===M){if(M=C.type,M===ue){if(_.tag===7){n(S,_.sibling),y=l(_,C.props.children),y.return=S,S=y;break e}}else if(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oe&&So(M)===_.type){n(S,_.sibling),y=l(_,C.props),y.ref=hn(S,_,C),y.return=S,S=y;break e}n(S,_);break}else r(S,_);_=_.sibling}C.type===ue?(y=fr(C.props.children,S.mode,D,C.key),y.return=S,S=y):(D=Ea(C.type,C.key,C.props,null,S.mode,D),D.ref=hn(S,y,C),D.return=S,S=D)}return u(S);case A:e:{for(_=C.key;y!==null;){if(y.key===_)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){n(S,y.sibling),y=l(y,C.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else r(S,y);y=y.sibling}y=Es(C,S.mode,D),y.return=S,S=y}return u(S);case Oe:return _=C._init,je(S,y,_(C._payload),D)}if(Wr(C))return L(S,y,C,D);if(X(C))return W(S,y,C,D);la(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(n(S,y.sibling),y=l(y,C),y.return=S,S=y):(n(S,y),y=Vs(C,S.mode,D),y.return=S,S=y),u(S)):n(S,y)}return je}var Ar=Co(!0),jo=Co(!1),oa=Ot(null),ca=null,Dr=null,$i=null;function Li(){$i=Dr=ca=null}function Wi(e){var r=oa.current;fe(oa),e._currentValue=r}function Mi(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function Fr(e,r){ca=e,$i=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ge=!0),e.firstContext=null)}function pt(e){var r=e._currentValue;if($i!==e)if(e={context:e,memoizedValue:r,next:null},Dr===null){if(ca===null)throw Error(c(308));Dr=e,ca.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return r}var or=null;function _i(e){or===null?or=[e]:or.push(e)}function ko(e,r,n,a){var l=r.interleaved;return l===null?(n.next=n,_i(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ft(e,a)}function Ft(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function To(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Qt(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ie&2)!==0){var l=a.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),a.pending=r,Ft(e,n)}return l=a.interleaved,l===null?(r.next=r,_i(a)):(r.next=l.next,l.next=r),a.interleaved=r,Ft(e,n)}function da(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,ii(e,n)}}function No(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?l=o=r:o=o.next=r}else l=o=r;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function ua(e,r,n,a){var l=e.updateQueue;Gt=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var g=f,j=g.next;g.next=null,u===null?o=j:u.next=j,u=g;var P=e.alternate;P!==null&&(P=P.updateQueue,f=P.lastBaseUpdate,f!==u&&(f===null?P.firstBaseUpdate=j:f.next=j,P.lastBaseUpdate=g))}if(o!==null){var V=l.baseState;u=0,P=j=g=null,f=o;do{var N=f.lane,I=f.eventTime;if((a&N)===N){P!==null&&(P=P.next={eventTime:I,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var L=e,W=f;switch(N=r,I=n,W.tag){case 1:if(L=W.payload,typeof L=="function"){V=L.call(I,V,N);break e}V=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=W.payload,N=typeof L=="function"?L.call(I,V,N):L,N==null)break e;V=$({},V,N);break e;case 2:Gt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,N=l.effects,N===null?l.effects=[f]:N.push(f))}else I={eventTime:I,lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},P===null?(j=P=I,g=V):P=P.next=I,u|=N;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;N=f,f=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);if(P===null&&(g=V),l.baseState=g,l.firstBaseUpdate=j,l.lastBaseUpdate=P,r=l.shared.interleaved,r!==null){l=r;do u|=l.lane,l=l.next;while(l!==r)}else o===null&&(l.shared.lanes=0);ur|=u,e.lanes=u,e.memoizedState=V}}function Uo(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(c(191,l));l.call(a)}}}var fn={},Nt=Ot(fn),gn=Ot(fn),xn=Ot(fn);function cr(e){if(e===fn)throw Error(c(174));return e}function Xi(e,r){switch(me(xn,r),me(gn,e),me(Nt,fn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ha(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ha(r,e)}fe(Nt),me(Nt,r)}function Br(){fe(Nt),fe(gn),fe(xn)}function Po(e){cr(xn.current);var r=cr(Nt.current),n=Ha(r,e.type);r!==n&&(me(gn,e),me(Nt,n))}function Hi(e){gn.current===e&&(fe(Nt),fe(gn))}var be=Ot(0);function pa(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Gi=[];function Qi(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var ma=Te.ReactCurrentDispatcher,Yi=Te.ReactCurrentBatchConfig,dr=0,ve=null,Ne=null,Ee=null,ha=!1,yn=!1,bn=0,$u=0;function ze(){throw Error(c(321))}function Ki(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!yt(e[n],r[n]))return!1;return!0}function Ji(e,r,n,a,l,o){if(dr=o,ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ma.current=e===null||e.memoizedState===null?_u:Ou,e=n(a,l),yn){o=0;do{if(yn=!1,bn=0,25<=o)throw Error(c(301));o+=1,Ee=Ne=null,r.updateQueue=null,ma.current=Xu,e=n(a,l)}while(yn)}if(ma.current=xa,r=Ne!==null&&Ne.next!==null,dr=0,Ee=Ne=ve=null,ha=!1,r)throw Error(c(300));return e}function Zi(){var e=bn!==0;return bn=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ve.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function mt(){if(Ne===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var r=Ee===null?ve.memoizedState:Ee.next;if(r!==null)Ee=r,Ne=e;else{if(e===null)throw Error(c(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ee===null?ve.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function vn(e,r){return typeof r=="function"?r(e):r}function es(e){var r=mt(),n=r.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=Ne,l=a.baseQueue,o=n.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}a.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,a=a.baseState;var f=u=null,g=null,j=o;do{var P=j.lane;if((dr&P)===P)g!==null&&(g=g.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),a=j.hasEagerState?j.eagerState:e(a,j.action);else{var V={lane:P,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};g===null?(f=g=V,u=a):g=g.next=V,ve.lanes|=P,ur|=P}j=j.next}while(j!==null&&j!==o);g===null?u=a:g.next=f,yt(a,r.memoizedState)||(Ge=!0),r.memoizedState=a,r.baseState=u,r.baseQueue=g,n.lastRenderedState=a}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ve.lanes|=o,ur|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function ts(e){var r=mt(),n=r.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=r.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);yt(o,r.memoizedState)||(Ge=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,a]}function Vo(){}function Eo(e,r){var n=ve,a=mt(),l=r(),o=!yt(a.memoizedState,l);if(o&&(a.memoizedState=l,Ge=!0),a=a.queue,rs(Fo.bind(null,n,a,e),[e]),a.getSnapshot!==r||o||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,wn(9,Do.bind(null,n,a,l,r),void 0,null),Ae===null)throw Error(c(349));(dr&30)!==0||Ao(n,r,l)}return l}function Ao(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=ve.updateQueue,r===null?(r={lastEffect:null,stores:null},ve.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Do(e,r,n,a){r.value=n,r.getSnapshot=a,Bo(r)&&qo(e)}function Fo(e,r,n){return n(function(){Bo(r)&&qo(e)})}function Bo(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!yt(e,n)}catch{return!0}}function qo(e){var r=Ft(e,1);r!==null&&Ct(r,e,1,-1)}function zo(e){var r=Ut();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},r.queue=e,e=e.dispatch=Mu.bind(null,ve,e),[r.memoizedState,e]}function wn(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=ve.updateQueue,r===null?(r={lastEffect:null,stores:null},ve.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function Io(){return mt().memoizedState}function fa(e,r,n,a){var l=Ut();ve.flags|=e,l.memoizedState=wn(1|r,n,void 0,a===void 0?null:a)}function ga(e,r,n,a){var l=mt();a=a===void 0?null:a;var o=void 0;if(Ne!==null){var u=Ne.memoizedState;if(o=u.destroy,a!==null&&Ki(a,u.deps)){l.memoizedState=wn(r,n,o,a);return}}ve.flags|=e,l.memoizedState=wn(1|r,n,o,a)}function Ro(e,r){return fa(8390656,8,e,r)}function rs(e,r){return ga(2048,8,e,r)}function $o(e,r){return ga(4,2,e,r)}function Lo(e,r){return ga(4,4,e,r)}function Wo(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Mo(e,r,n){return n=n!=null?n.concat([e]):null,ga(4,4,Wo.bind(null,r,e),n)}function ns(){}function _o(e,r){var n=mt();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Ki(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function Oo(e,r){var n=mt();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Ki(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function Xo(e,r,n){return(dr&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(yt(n,r)||(n=wl(),ve.lanes|=n,ur|=n,e.baseState=!0),r)}function Lu(e,r){var n=de;de=n!==0&&4>n?n:4,e(!0);var a=Yi.transition;Yi.transition={};try{e(!1),r()}finally{de=n,Yi.transition=a}}function Ho(){return mt().memoizedState}function Wu(e,r,n){var a=Zt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))Qo(r,n);else if(n=ko(e,r,n,a),n!==null){var l=Me();Ct(n,e,a,l),Yo(n,r,a)}}function Mu(e,r,n){var a=Zt(e),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Qo(r,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var u=r.lastRenderedState,f=o(u,n);if(l.hasEagerState=!0,l.eagerState=f,yt(f,u)){var g=r.interleaved;g===null?(l.next=l,_i(r)):(l.next=g.next,g.next=l),r.interleaved=l;return}}catch{}finally{}n=ko(e,r,l,a),n!==null&&(l=Me(),Ct(n,e,a,l),Yo(n,r,a))}}function Go(e){var r=e.alternate;return e===ve||r!==null&&r===ve}function Qo(e,r){yn=ha=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Yo(e,r,n){if((n&4194240)!==0){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,ii(e,n)}}var xa={readContext:pt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},_u={readContext:pt,useCallback:function(e,r){return Ut().memoizedState=[e,r===void 0?null:r],e},useContext:pt,useEffect:Ro,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,fa(4194308,4,Wo.bind(null,r,e),n)},useLayoutEffect:function(e,r){return fa(4194308,4,e,r)},useInsertionEffect:function(e,r){return fa(4,2,e,r)},useMemo:function(e,r){var n=Ut();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=Ut();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Wu.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var r=Ut();return e={current:e},r.memoizedState=e},useState:zo,useDebugValue:ns,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=zo(!1),r=e[0];return e=Lu.bind(null,e[1]),Ut().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=ve,l=Ut();if(ye){if(n===void 0)throw Error(c(407));n=n()}else{if(n=r(),Ae===null)throw Error(c(349));(dr&30)!==0||Ao(a,r,n)}l.memoizedState=n;var o={value:n,getSnapshot:r};return l.queue=o,Ro(Fo.bind(null,a,o,e),[e]),a.flags|=2048,wn(9,Do.bind(null,a,o,n,r),void 0,null),n},useId:function(){var e=Ut(),r=Ae.identifierPrefix;if(ye){var n=Dt,a=At;n=(a&~(1<<32-xt(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=bn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=$u++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ou={readContext:pt,useCallback:_o,useContext:pt,useEffect:rs,useImperativeHandle:Mo,useInsertionEffect:$o,useLayoutEffect:Lo,useMemo:Oo,useReducer:es,useRef:Io,useState:function(){return es(vn)},useDebugValue:ns,useDeferredValue:function(e){var r=mt();return Xo(r,Ne.memoizedState,e)},useTransition:function(){var e=es(vn)[0],r=mt().memoizedState;return[e,r]},useMutableSource:Vo,useSyncExternalStore:Eo,useId:Ho,unstable_isNewReconciler:!1},Xu={readContext:pt,useCallback:_o,useContext:pt,useEffect:rs,useImperativeHandle:Mo,useInsertionEffect:$o,useLayoutEffect:Lo,useMemo:Oo,useReducer:ts,useRef:Io,useState:function(){return ts(vn)},useDebugValue:ns,useDeferredValue:function(e){var r=mt();return Ne===null?r.memoizedState=e:Xo(r,Ne.memoizedState,e)},useTransition:function(){var e=ts(vn)[0],r=mt().memoizedState;return[e,r]},useMutableSource:Vo,useSyncExternalStore:Eo,useId:Ho,unstable_isNewReconciler:!1};function vt(e,r){if(e&&e.defaultProps){r=$({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function as(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:$({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=Me(),l=Zt(e),o=Bt(a,l);o.payload=r,n!=null&&(o.callback=n),r=Qt(e,o,l),r!==null&&(Ct(r,e,l,a),da(r,e,l))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=Me(),l=Zt(e),o=Bt(a,l);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=Qt(e,o,l),r!==null&&(Ct(r,e,l,a),da(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Me(),a=Zt(e),l=Bt(n,a);l.tag=2,r!=null&&(l.callback=r),r=Qt(e,l,a),r!==null&&(Ct(r,e,a,n),da(r,e,a))}};function Ko(e,r,n,a,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,u):r.prototype&&r.prototype.isPureReactComponent?!ln(n,a)||!ln(l,o):!0}function Jo(e,r,n){var a=!1,l=Xt,o=r.contextType;return typeof o=="object"&&o!==null?o=pt(o):(l=He(r)?ir:qe.current,a=r.contextTypes,o=(a=a!=null)?Ur(e,l):Xt),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ya,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),r}function Zo(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&ya.enqueueReplaceState(r,r.state,null)}function is(e,r,n,a){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Oi(e);var o=r.contextType;typeof o=="object"&&o!==null?l.context=pt(o):(o=He(r)?ir:qe.current,l.context=Ur(e,o)),l.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(as(e,r,o,n),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&ya.enqueueReplaceState(l,l.state,null),ua(e,n,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,r){try{var n="",a=r;do n+=se(a),a=a.return;while(a);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:l,digest:null}}function ss(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function ls(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Hu=typeof WeakMap=="function"?WeakMap:Map;function ec(e,r,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){ka||(ka=!0,Ss=a),ls(e,r)},n}function tc(e,r,n){n=Bt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=r.value;n.payload=function(){return a(l)},n.callback=function(){ls(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ls(e,r),typeof a!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})}),n}function rc(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Hu;var l=new Set;a.set(r,l)}else l=a.get(r),l===void 0&&(l=new Set,a.set(r,l));l.has(n)||(l.add(n),e=lp.bind(null,e,r,n),r.then(e,e))}function nc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ac(e,r,n,a,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Bt(-1,1),r.tag=2,Qt(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Gu=Te.ReactCurrentOwner,Ge=!1;function We(e,r,n,a){r.child=e===null?jo(r,null,n,a):Ar(r,e.child,n,a)}function ic(e,r,n,a,l){n=n.render;var o=r.ref;return Fr(r,l),a=Ji(e,r,n,a,o,l),n=Zi(),e!==null&&!Ge?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,qt(e,r,l)):(ye&&n&&Bi(r),r.flags|=1,We(e,r,a,l),r.child)}function sc(e,r,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ps(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,lc(e,r,o,a,l)):(e=Ea(n.type,null,a,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,(e.lanes&l)===0){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:ln,n(u,a)&&e.ref===r.ref)return qt(e,r,l)}return r.flags|=1,e=tr(o,a),e.ref=r.ref,e.return=r,r.child=e}function lc(e,r,n,a,l){if(e!==null){var o=e.memoizedProps;if(ln(o,a)&&e.ref===r.ref)if(Ge=!1,r.pendingProps=a=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ge=!0);else return r.lanes=e.lanes,qt(e,r,l)}return os(e,r,n,a,l)}function oc(e,r,n){var a=r.pendingProps,l=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ir,it),it|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,me(Ir,it),it|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:n,me(Ir,it),it|=a}else o!==null?(a=o.baseLanes|n,r.memoizedState=null):a=n,me(Ir,it),it|=a;return We(e,r,l,n),r.child}function cc(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function os(e,r,n,a,l){var o=He(n)?ir:qe.current;return o=Ur(r,o),Fr(r,l),n=Ji(e,r,n,a,o,l),a=Zi(),e!==null&&!Ge?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,qt(e,r,l)):(ye&&a&&Bi(r),r.flags|=1,We(e,r,n,l),r.child)}function dc(e,r,n,a,l){if(He(n)){var o=!0;ra(r)}else o=!1;if(Fr(r,l),r.stateNode===null)va(e,r),Jo(r,n,a),is(r,n,a,l),a=!0;else if(e===null){var u=r.stateNode,f=r.memoizedProps;u.props=f;var g=u.context,j=n.contextType;typeof j=="object"&&j!==null?j=pt(j):(j=He(n)?ir:qe.current,j=Ur(r,j));var P=n.getDerivedStateFromProps,V=typeof P=="function"||typeof u.getSnapshotBeforeUpdate=="function";V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==a||g!==j)&&Zo(r,u,a,j),Gt=!1;var N=r.memoizedState;u.state=N,ua(r,a,u,l),g=r.memoizedState,f!==a||N!==g||Xe.current||Gt?(typeof P=="function"&&(as(r,n,P,a),g=r.memoizedState),(f=Gt||Ko(r,n,f,a,N,g,j))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(r.flags|=4194308)):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=g),u.props=a,u.state=g,u.context=j,a=f):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{u=r.stateNode,To(e,r),f=r.memoizedProps,j=r.type===r.elementType?f:vt(r.type,f),u.props=j,V=r.pendingProps,N=u.context,g=n.contextType,typeof g=="object"&&g!==null?g=pt(g):(g=He(n)?ir:qe.current,g=Ur(r,g));var I=n.getDerivedStateFromProps;(P=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==V||N!==g)&&Zo(r,u,a,g),Gt=!1,N=r.memoizedState,u.state=N,ua(r,a,u,l);var L=r.memoizedState;f!==V||N!==L||Xe.current||Gt?(typeof I=="function"&&(as(r,n,I,a),L=r.memoizedState),(j=Gt||Ko(r,n,j,a,N,L,g)||!1)?(P||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,L,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,L,g)),typeof u.componentDidUpdate=="function"&&(r.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=L),u.props=a,u.state=L,u.context=g,a=j):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&N===e.memoizedState||(r.flags|=1024),a=!1)}return cs(e,r,n,a,o,l)}function cs(e,r,n,a,l,o){cc(e,r);var u=(r.flags&128)!==0;if(!a&&!u)return l&&fo(r,n,!1),qt(e,r,o);a=r.stateNode,Gu.current=r;var f=u&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&u?(r.child=Ar(r,e.child,null,o),r.child=Ar(r,null,f,o)):We(e,r,f,o),r.memoizedState=a.state,l&&fo(r,n,!0),r.child}function uc(e){var r=e.stateNode;r.pendingContext?mo(e,r.pendingContext,r.pendingContext!==r.context):r.context&&mo(e,r.context,!1),Xi(e,r.containerInfo)}function pc(e,r,n,a,l){return Er(),Ri(l),r.flags|=256,We(e,r,n,a),r.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function mc(e,r,n){var a=r.pendingProps,l=be.current,o=!1,u=(r.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),me(be,l&1),e===null)return Ii(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(u=a.children,e=a.fallback,o?(a=r.mode,o=r.child,u={mode:"hidden",children:u},(a&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=u):o=Aa(u,a,0,null),e=fr(e,a,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=us(n),r.memoizedState=ds,e):ps(r,u));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return Qu(e,r,u,a,f,l,n);if(o){o=a.fallback,u=r.mode,l=e.child,f=l.sibling;var g={mode:"hidden",children:a.children};return(u&1)===0&&r.child!==l?(a=r.child,a.childLanes=0,a.pendingProps=g,r.deletions=null):(a=tr(l,g),a.subtreeFlags=l.subtreeFlags&14680064),f!==null?o=tr(f,o):(o=fr(o,u,n,null),o.flags|=2),o.return=r,a.return=r,a.sibling=o,r.child=a,a=o,o=r.child,u=e.child.memoizedState,u=u===null?us(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~n,r.memoizedState=ds,a}return o=e.child,e=o.sibling,a=tr(o,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function ps(e,r){return r=Aa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ba(e,r,n,a){return a!==null&&Ri(a),Ar(r,e.child,null,n),e=ps(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Qu(e,r,n,a,l,o,u){if(n)return r.flags&256?(r.flags&=-257,a=ss(Error(c(422))),ba(e,r,u,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=a.fallback,l=r.mode,a=Aa({mode:"visible",children:a.children},l,0,null),o=fr(o,l,u,null),o.flags|=2,a.return=r,o.return=r,a.sibling=o,r.child=a,(r.mode&1)!==0&&Ar(r,e.child,null,u),r.child.memoizedState=us(u),r.memoizedState=ds,o);if((r.mode&1)===0)return ba(e,r,u,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var f=a.dgst;return a=f,o=Error(c(419)),a=ss(o,a,void 0),ba(e,r,u,a)}if(f=(u&e.childLanes)!==0,Ge||f){if(a=Ae,a!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|u))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ft(e,l),Ct(a,e,l,-1))}return Us(),a=ss(Error(c(421))),ba(e,r,u,a)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=op.bind(null,e),l._reactRetry=r,null):(e=o.treeContext,at=_t(l.nextSibling),nt=r,ye=!0,bt=null,e!==null&&(dt[ut++]=At,dt[ut++]=Dt,dt[ut++]=sr,At=e.id,Dt=e.overflow,sr=r),r=ps(r,a.children),r.flags|=4096,r)}function hc(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),Mi(e.return,r,n)}function ms(e,r,n,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l)}function fc(e,r,n){var a=r.pendingProps,l=a.revealOrder,o=a.tail;if(We(e,r,a.children,n),a=be.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hc(e,n,r);else if(e.tag===19)hc(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(me(be,a),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(n=r.child,l=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=r.child,r.child=null):(l=n.sibling,n.sibling=null),ms(r,!1,l,n,o);break;case"backwards":for(n=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&pa(e)===null){r.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ms(r,!0,n,null,o);break;case"together":ms(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function va(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function qt(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),ur|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(c(153));if(r.child!==null){for(e=r.child,n=tr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Yu(e,r,n){switch(r.tag){case 3:uc(r),Er();break;case 5:Po(r);break;case 1:He(r.type)&&ra(r);break;case 4:Xi(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,l=r.memoizedProps.value;me(oa,a._currentValue),a._currentValue=l;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(me(be,be.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?mc(e,r,n):(me(be,be.current&1),e=qt(e,r,n),e!==null?e.sibling:null);me(be,be.current&1);break;case 19:if(a=(n&r.childLanes)!==0,(e.flags&128)!==0){if(a)return fc(e,r,n);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),me(be,be.current),a)break;return null;case 22:case 23:return r.lanes=0,oc(e,r,n)}return qt(e,r,n)}var gc,hs,xc,yc;gc=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},hs=function(){},xc=function(e,r,n,a){var l=e.memoizedProps;if(l!==a){e=r.stateNode,cr(Nt.current);var o=null;switch(n){case"input":l=Ma(e,l),a=Ma(e,a),o=[];break;case"select":l=$({},l,{value:void 0}),a=$({},a,{value:void 0}),o=[];break;case"textarea":l=Xa(e,l),a=Xa(e,a),o=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Zn)}Ga(n,a);var u;n=null;for(j in l)if(!a.hasOwnProperty(j)&&l.hasOwnProperty(j)&&l[j]!=null)if(j==="style"){var f=l[j];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(h.hasOwnProperty(j)?o||(o=[]):(o=o||[]).push(j,null));for(j in a){var g=a[j];if(f=l!=null?l[j]:void 0,a.hasOwnProperty(j)&&g!==f&&(g!=null||f!=null))if(j==="style")if(f){for(u in f)!f.hasOwnProperty(u)||g&&g.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in g)g.hasOwnProperty(u)&&f[u]!==g[u]&&(n||(n={}),n[u]=g[u])}else n||(o||(o=[]),o.push(j,n)),n=g;else j==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,f=f?f.__html:void 0,g!=null&&f!==g&&(o=o||[]).push(j,g)):j==="children"?typeof g!="string"&&typeof g!="number"||(o=o||[]).push(j,""+g):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(h.hasOwnProperty(j)?(g!=null&&j==="onScroll"&&he("scroll",e),o||f===g||(o=[])):(o=o||[]).push(j,g))}n&&(o=o||[]).push("style",n);var j=o;(r.updateQueue=j)&&(r.flags|=4)}},yc=function(e,r,n,a){n!==a&&(r.flags|=4)};function Sn(e,r){if(!ye)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ie(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function Ku(e,r,n){var a=r.pendingProps;switch(qi(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(r),null;case 1:return He(r.type)&&ta(),Ie(r),null;case 3:return a=r.stateNode,Br(),fe(Xe),fe(qe),Qi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(sa(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,bt!==null&&(ks(bt),bt=null))),hs(e,r),Ie(r),null;case 5:Hi(r);var l=cr(xn.current);if(n=r.type,e!==null&&r.stateNode!=null)xc(e,r,n,a,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(c(166));return Ie(r),null}if(e=cr(Nt.current),sa(r)){a=r.stateNode,n=r.type;var o=r.memoizedProps;switch(a[Tt]=r,a[pn]=o,e=(r.mode&1)!==0,n){case"dialog":he("cancel",a),he("close",a);break;case"iframe":case"object":case"embed":he("load",a);break;case"video":case"audio":for(l=0;l<cn.length;l++)he(cn[l],a);break;case"source":he("error",a);break;case"img":case"image":case"link":he("error",a),he("load",a);break;case"details":he("toggle",a);break;case"input":Ks(a,o),he("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},he("invalid",a);break;case"textarea":el(a,o),he("invalid",a)}Ga(n,o),l=null;for(var u in o)if(o.hasOwnProperty(u)){var f=o[u];u==="children"?typeof f=="string"?a.textContent!==f&&(o.suppressHydrationWarning!==!0&&Jn(a.textContent,f,e),l=["children",f]):typeof f=="number"&&a.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&Jn(a.textContent,f,e),l=["children",""+f]):h.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&he("scroll",a)}switch(n){case"input":Pn(a),Zs(a,o,!0);break;case"textarea":Pn(a),rl(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Zn)}a=l,r.updateQueue=a,a!==null&&(r.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(n,{is:a.is}):(e=u.createElement(n),n==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,n),e[Tt]=r,e[pn]=a,gc(e,r,!1,!1),r.stateNode=e;e:{switch(u=Qa(n,a),n){case"dialog":he("cancel",e),he("close",e),l=a;break;case"iframe":case"object":case"embed":he("load",e),l=a;break;case"video":case"audio":for(l=0;l<cn.length;l++)he(cn[l],e);l=a;break;case"source":he("error",e),l=a;break;case"img":case"image":case"link":he("error",e),he("load",e),l=a;break;case"details":he("toggle",e),l=a;break;case"input":Ks(e,a),l=Ma(e,a),he("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=$({},a,{value:void 0}),he("invalid",e);break;case"textarea":el(e,a),l=Xa(e,a),he("invalid",e);break;default:l=a}Ga(n,l),f=l;for(o in f)if(f.hasOwnProperty(o)){var g=f[o];o==="style"?sl(e,g):o==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&al(e,g)):o==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&Mr(e,g):typeof g=="number"&&Mr(e,""+g):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(h.hasOwnProperty(o)?g!=null&&o==="onScroll"&&he("scroll",e):g!=null&&$e(e,o,g,u))}switch(n){case"input":Pn(e),Zs(e,a,!1);break;case"textarea":Pn(e),rl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ce(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?gr(e,!!a.multiple,o,!1):a.defaultValue!=null&&gr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zn)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ie(r),null;case 6:if(e&&r.stateNode!=null)yc(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(c(166));if(n=cr(xn.current),cr(Nt.current),sa(r)){if(a=r.stateNode,n=r.memoizedProps,a[Tt]=r,(o=a.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Jn(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jn(a.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Tt]=r,r.stateNode=a}return Ie(r),null;case 13:if(fe(be),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&at!==null&&(r.mode&1)!==0&&(r.flags&128)===0)wo(),Er(),r.flags|=98560,o=!1;else if(o=sa(r),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[Tt]=r}else Er(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ie(r),o=!1}else bt!==null&&(ks(bt),bt=null),o=!0;if(!o)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(be.current&1)!==0?Ue===0&&(Ue=3):Us())),r.updateQueue!==null&&(r.flags|=4),Ie(r),null);case 4:return Br(),hs(e,r),e===null&&dn(r.stateNode.containerInfo),Ie(r),null;case 10:return Wi(r.type._context),Ie(r),null;case 17:return He(r.type)&&ta(),Ie(r),null;case 19:if(fe(be),o=r.memoizedState,o===null)return Ie(r),null;if(a=(r.flags&128)!==0,u=o.rendering,u===null)if(a)Sn(o,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(u=pa(e),u!==null){for(r.flags|=128,Sn(o,!1),a=u.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)o=n,e=a,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(be,be.current&1|2),r.child}e=e.sibling}o.tail!==null&&Ce()>Rr&&(r.flags|=128,a=!0,Sn(o,!1),r.lanes=4194304)}else{if(!a)if(e=pa(u),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Sn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!ye)return Ie(r),null}else 2*Ce()-o.renderingStartTime>Rr&&n!==1073741824&&(r.flags|=128,a=!0,Sn(o,!1),r.lanes=4194304);o.isBackwards?(u.sibling=r.child,r.child=u):(n=o.last,n!==null?n.sibling=u:r.child=u,o.last=u)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=Ce(),r.sibling=null,n=be.current,me(be,a?n&1|2:n&1),r):(Ie(r),null);case 22:case 23:return Ns(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(it&1073741824)!==0&&(Ie(r),r.subtreeFlags&6&&(r.flags|=8192)):Ie(r),null;case 24:return null;case 25:return null}throw Error(c(156,r.tag))}function Ju(e,r){switch(qi(r),r.tag){case 1:return He(r.type)&&ta(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Br(),fe(Xe),fe(qe),Qi(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Hi(r),null;case 13:if(fe(be),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(c(340));Er()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return fe(be),null;case 4:return Br(),null;case 10:return Wi(r.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var wa=!1,Re=!1,Zu=typeof WeakSet=="function"?WeakSet:Set,R=null;function zr(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Se(e,r,a)}else n.current=null}function fs(e,r,n){try{n()}catch(a){Se(e,r,a)}}var bc=!1;function ep(e,r){if(Ni=Ln,e=Yl(),bi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var u=0,f=-1,g=-1,j=0,P=0,V=e,N=null;t:for(;;){for(var I;V!==n||l!==0&&V.nodeType!==3||(f=u+l),V!==o||a!==0&&V.nodeType!==3||(g=u+a),V.nodeType===3&&(u+=V.nodeValue.length),(I=V.firstChild)!==null;)N=V,V=I;for(;;){if(V===e)break t;if(N===n&&++j===l&&(f=u),N===o&&++P===a&&(g=u),(I=V.nextSibling)!==null)break;V=N,N=V.parentNode}V=I}n=f===-1||g===-1?null:{start:f,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ui={focusedElem:e,selectionRange:n},Ln=!1,R=r;R!==null;)if(r=R,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,R=e;else for(;R!==null;){r=R;try{var L=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var W=L.memoizedProps,je=L.memoizedState,S=r.stateNode,y=S.getSnapshotBeforeUpdate(r.elementType===r.type?W:vt(r.type,W),je);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=r.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(D){Se(r,r.return,D)}if(e=r.sibling,e!==null){e.return=r.return,R=e;break}R=r.return}return L=bc,bc=!1,L}function Cn(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&fs(r,n,o)}l=l.next}while(l!==a)}}function Sa(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function gs(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function vc(e){var r=e.alternate;r!==null&&(e.alternate=null,vc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Tt],delete r[pn],delete r[Ai],delete r[qu],delete r[zu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wc(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xs(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Zn));else if(a!==4&&(e=e.child,e!==null))for(xs(e,r,n),e=e.sibling;e!==null;)xs(e,r,n),e=e.sibling}function ys(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ys(e,r,n),e=e.sibling;e!==null;)ys(e,r,n),e=e.sibling}var Fe=null,wt=!1;function Yt(e,r,n){for(n=n.child;n!==null;)Cc(e,r,n),n=n.sibling}function Cc(e,r,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Bn,n)}catch{}switch(n.tag){case 5:Re||zr(n,r);case 6:var a=Fe,l=wt;Fe=null,Yt(e,r,n),Fe=a,wt=l,Fe!==null&&(wt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(wt?(e=Fe,n=n.stateNode,e.nodeType===8?Ei(e.parentNode,n):e.nodeType===1&&Ei(e,n),en(e)):Ei(Fe,n.stateNode));break;case 4:a=Fe,l=wt,Fe=n.stateNode.containerInfo,wt=!0,Yt(e,r,n),Fe=a,wt=l;break;case 0:case 11:case 14:case 15:if(!Re&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var o=l,u=o.destroy;o=o.tag,u!==void 0&&((o&2)!==0||(o&4)!==0)&&fs(n,r,u),l=l.next}while(l!==a)}Yt(e,r,n);break;case 1:if(!Re&&(zr(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(f){Se(n,r,f)}Yt(e,r,n);break;case 21:Yt(e,r,n);break;case 22:n.mode&1?(Re=(a=Re)||n.memoizedState!==null,Yt(e,r,n),Re=a):Yt(e,r,n);break;default:Yt(e,r,n)}}function jc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zu),r.forEach(function(a){var l=cp.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}}function St(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var o=e,u=r,f=u;e:for(;f!==null;){switch(f.tag){case 5:Fe=f.stateNode,wt=!1;break e;case 3:Fe=f.stateNode.containerInfo,wt=!0;break e;case 4:Fe=f.stateNode.containerInfo,wt=!0;break e}f=f.return}if(Fe===null)throw Error(c(160));Cc(o,u,l),Fe=null,wt=!1;var g=l.alternate;g!==null&&(g.return=null),l.return=null}catch(j){Se(l,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)kc(r,e),r=r.sibling}function kc(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(r,e),Pt(e),a&4){try{Cn(3,e,e.return),Sa(3,e)}catch(W){Se(e,e.return,W)}try{Cn(5,e,e.return)}catch(W){Se(e,e.return,W)}}break;case 1:St(r,e),Pt(e),a&512&&n!==null&&zr(n,n.return);break;case 5:if(St(r,e),Pt(e),a&512&&n!==null&&zr(n,n.return),e.flags&32){var l=e.stateNode;try{Mr(l,"")}catch(W){Se(e,e.return,W)}}if(a&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,u=n!==null?n.memoizedProps:o,f=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&Js(l,o),Qa(f,u);var j=Qa(f,o);for(u=0;u<g.length;u+=2){var P=g[u],V=g[u+1];P==="style"?sl(l,V):P==="dangerouslySetInnerHTML"?al(l,V):P==="children"?Mr(l,V):$e(l,P,V,j)}switch(f){case"input":_a(l,o);break;case"textarea":tl(l,o);break;case"select":var N=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var I=o.value;I!=null?gr(l,!!o.multiple,I,!1):N!==!!o.multiple&&(o.defaultValue!=null?gr(l,!!o.multiple,o.defaultValue,!0):gr(l,!!o.multiple,o.multiple?[]:"",!1))}l[pn]=o}catch(W){Se(e,e.return,W)}}break;case 6:if(St(r,e),Pt(e),a&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(W){Se(e,e.return,W)}}break;case 3:if(St(r,e),Pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{en(r.containerInfo)}catch(W){Se(e,e.return,W)}break;case 4:St(r,e),Pt(e);break;case 13:St(r,e),Pt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ws=Ce())),a&4&&jc(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(j=Re)||P,St(r,e),Re=j):St(r,e),Pt(e),a&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!P&&(e.mode&1)!==0)for(R=e,P=e.child;P!==null;){for(V=R=P;R!==null;){switch(N=R,I=N.child,N.tag){case 0:case 11:case 14:case 15:Cn(4,N,N.return);break;case 1:zr(N,N.return);var L=N.stateNode;if(typeof L.componentWillUnmount=="function"){a=N,n=N.return;try{r=a,L.props=r.memoizedProps,L.state=r.memoizedState,L.componentWillUnmount()}catch(W){Se(a,n,W)}}break;case 5:zr(N,N.return);break;case 22:if(N.memoizedState!==null){Uc(V);continue}}I!==null?(I.return=N,R=I):Uc(V)}P=P.sibling}e:for(P=null,V=e;;){if(V.tag===5){if(P===null){P=V;try{l=V.stateNode,j?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=V.stateNode,g=V.memoizedProps.style,u=g!=null&&g.hasOwnProperty("display")?g.display:null,f.style.display=il("display",u))}catch(W){Se(e,e.return,W)}}}else if(V.tag===6){if(P===null)try{V.stateNode.nodeValue=j?"":V.memoizedProps}catch(W){Se(e,e.return,W)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;P===V&&(P=null),V=V.return}P===V&&(P=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:St(r,e),Pt(e),a&4&&jc(e);break;case 21:break;default:St(r,e),Pt(e)}}function Pt(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(wc(n)){var a=n;break e}n=n.return}throw Error(c(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Mr(l,""),a.flags&=-33);var o=Sc(e);ys(e,o,l);break;case 3:case 4:var u=a.stateNode.containerInfo,f=Sc(e);xs(e,f,u);break;default:throw Error(c(161))}}catch(g){Se(e,e.return,g)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function tp(e,r,n){R=e,Tc(e)}function Tc(e,r,n){for(var a=(e.mode&1)!==0;R!==null;){var l=R,o=l.child;if(l.tag===22&&a){var u=l.memoizedState!==null||wa;if(!u){var f=l.alternate,g=f!==null&&f.memoizedState!==null||Re;f=wa;var j=Re;if(wa=u,(Re=g)&&!j)for(R=l;R!==null;)u=R,g=u.child,u.tag===22&&u.memoizedState!==null?Pc(l):g!==null?(g.return=u,R=g):Pc(l);for(;o!==null;)R=o,Tc(o),o=o.sibling;R=l,wa=f,Re=j}Nc(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,R=o):Nc(e)}}function Nc(e){for(;R!==null;){var r=R;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Re||Sa(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Re)if(n===null)a.componentDidMount();else{var l=r.elementType===r.type?n.memoizedProps:vt(r.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&Uo(r,o,a);break;case 3:var u=r.updateQueue;if(u!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Uo(r,u,n)}break;case 5:var f=r.stateNode;if(n===null&&r.flags&4){n=f;var g=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var P=j.memoizedState;if(P!==null){var V=P.dehydrated;V!==null&&en(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Re||r.flags&512&&gs(r)}catch(N){Se(r,r.return,N)}}if(r===e){R=null;break}if(n=r.sibling,n!==null){n.return=r.return,R=n;break}R=r.return}}function Uc(e){for(;R!==null;){var r=R;if(r===e){R=null;break}var n=r.sibling;if(n!==null){n.return=r.return,R=n;break}R=r.return}}function Pc(e){for(;R!==null;){var r=R;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Sa(4,r)}catch(g){Se(r,n,g)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var l=r.return;try{a.componentDidMount()}catch(g){Se(r,l,g)}}var o=r.return;try{gs(r)}catch(g){Se(r,o,g)}break;case 5:var u=r.return;try{gs(r)}catch(g){Se(r,u,g)}}}catch(g){Se(r,r.return,g)}if(r===e){R=null;break}var f=r.sibling;if(f!==null){f.return=r.return,R=f;break}R=r.return}}var rp=Math.ceil,Ca=Te.ReactCurrentDispatcher,bs=Te.ReactCurrentOwner,ht=Te.ReactCurrentBatchConfig,ie=0,Ae=null,ke=null,Be=0,it=0,Ir=Ot(0),Ue=0,jn=null,ur=0,ja=0,vs=0,kn=null,Qe=null,ws=0,Rr=1/0,zt=null,ka=!1,Ss=null,Kt=null,Ta=!1,Jt=null,Na=0,Tn=0,Cs=null,Ua=-1,Pa=0;function Me(){return(ie&6)!==0?Ce():Ua!==-1?Ua:Ua=Ce()}function Zt(e){return(e.mode&1)===0?1:(ie&2)!==0&&Be!==0?Be&-Be:Ru.transition!==null?(Pa===0&&(Pa=wl()),Pa):(e=de,e!==0||(e=window.event,e=e===void 0?16:Vl(e.type)),e)}function Ct(e,r,n,a){if(50<Tn)throw Tn=0,Cs=null,Error(c(185));Qr(e,n,a),((ie&2)===0||e!==Ae)&&(e===Ae&&((ie&2)===0&&(ja|=n),Ue===4&&er(e,Be)),Ye(e,a),n===1&&ie===0&&(r.mode&1)===0&&(Rr=Ce()+500,na&&Ht()))}function Ye(e,r){var n=e.callbackNode;Rd(e,r);var a=In(e,e===Ae?Be:0);if(a===0)n!==null&&yl(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&yl(n),r===1)e.tag===0?Iu(Ec.bind(null,e)):go(Ec.bind(null,e)),Fu(function(){(ie&6)===0&&Ht()}),n=null;else{switch(Sl(a)){case 1:n=ri;break;case 4:n=bl;break;case 16:n=Fn;break;case 536870912:n=vl;break;default:n=Fn}n=Rc(n,Vc.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Vc(e,r){if(Ua=-1,Pa=0,(ie&6)!==0)throw Error(c(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var a=In(e,e===Ae?Be:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||r)r=Va(e,a);else{r=a;var l=ie;ie|=2;var o=Dc();(Ae!==e||Be!==r)&&(zt=null,Rr=Ce()+500,mr(e,r));do try{ip();break}catch(f){Ac(e,f)}while(!0);Li(),Ca.current=o,ie=l,ke!==null?r=0:(Ae=null,Be=0,r=Ue)}if(r!==0){if(r===2&&(l=ni(e),l!==0&&(a=l,r=js(e,l))),r===1)throw n=jn,mr(e,0),er(e,a),Ye(e,Ce()),n;if(r===6)er(e,a);else{if(l=e.current.alternate,(a&30)===0&&!np(l)&&(r=Va(e,a),r===2&&(o=ni(e),o!==0&&(a=o,r=js(e,o))),r===1))throw n=jn,mr(e,0),er(e,a),Ye(e,Ce()),n;switch(e.finishedWork=l,e.finishedLanes=a,r){case 0:case 1:throw Error(c(345));case 2:hr(e,Qe,zt);break;case 3:if(er(e,a),(a&130023424)===a&&(r=ws+500-Ce(),10<r)){if(In(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){Me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Vi(hr.bind(null,e,Qe,zt),r);break}hr(e,Qe,zt);break;case 4:if(er(e,a),(a&4194240)===a)break;for(r=e.eventTimes,l=-1;0<a;){var u=31-xt(a);o=1<<u,u=r[u],u>l&&(l=u),a&=~o}if(a=l,a=Ce()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*rp(a/1960))-a,10<a){e.timeoutHandle=Vi(hr.bind(null,e,Qe,zt),a);break}hr(e,Qe,zt);break;case 5:hr(e,Qe,zt);break;default:throw Error(c(329))}}}return Ye(e,Ce()),e.callbackNode===n?Vc.bind(null,e):null}function js(e,r){var n=kn;return e.current.memoizedState.isDehydrated&&(mr(e,r).flags|=256),e=Va(e,r),e!==2&&(r=Qe,Qe=n,r!==null&&ks(r)),e}function ks(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function np(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!yt(o(),l))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function er(e,r){for(r&=~vs,r&=~ja,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-xt(r),a=1<<n;e[n]=-1,r&=~a}}function Ec(e){if((ie&6)!==0)throw Error(c(327));$r();var r=In(e,0);if((r&1)===0)return Ye(e,Ce()),null;var n=Va(e,r);if(e.tag!==0&&n===2){var a=ni(e);a!==0&&(r=a,n=js(e,a))}if(n===1)throw n=jn,mr(e,0),er(e,r),Ye(e,Ce()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,hr(e,Qe,zt),Ye(e,Ce()),null}function Ts(e,r){var n=ie;ie|=1;try{return e(r)}finally{ie=n,ie===0&&(Rr=Ce()+500,na&&Ht())}}function pr(e){Jt!==null&&Jt.tag===0&&(ie&6)===0&&$r();var r=ie;ie|=1;var n=ht.transition,a=de;try{if(ht.transition=null,de=1,e)return e()}finally{de=a,ht.transition=n,ie=r,(ie&6)===0&&Ht()}}function Ns(){it=Ir.current,fe(Ir)}function mr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Du(n)),ke!==null)for(n=ke.return;n!==null;){var a=n;switch(qi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ta();break;case 3:Br(),fe(Xe),fe(qe),Qi();break;case 5:Hi(a);break;case 4:Br();break;case 13:fe(be);break;case 19:fe(be);break;case 10:Wi(a.type._context);break;case 22:case 23:Ns()}n=n.return}if(Ae=e,ke=e=tr(e.current,null),Be=it=r,Ue=0,jn=null,vs=ja=ur=0,Qe=kn=null,or!==null){for(r=0;r<or.length;r++)if(n=or[r],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,o=n.pending;if(o!==null){var u=o.next;o.next=l,a.next=u}n.pending=a}or=null}return e}function Ac(e,r){do{var n=ke;try{if(Li(),ma.current=xa,ha){for(var a=ve.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}ha=!1}if(dr=0,Ee=Ne=ve=null,yn=!1,bn=0,bs.current=null,n===null||n.return===null){Ue=1,jn=r,ke=null;break}e:{var o=e,u=n.return,f=n,g=r;if(r=Be,f.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var j=g,P=f,V=P.tag;if((P.mode&1)===0&&(V===0||V===11||V===15)){var N=P.alternate;N?(P.updateQueue=N.updateQueue,P.memoizedState=N.memoizedState,P.lanes=N.lanes):(P.updateQueue=null,P.memoizedState=null)}var I=nc(u);if(I!==null){I.flags&=-257,ac(I,u,f,o,r),I.mode&1&&rc(o,j,r),r=I,g=j;var L=r.updateQueue;if(L===null){var W=new Set;W.add(g),r.updateQueue=W}else L.add(g);break e}else{if((r&1)===0){rc(o,j,r),Us();break e}g=Error(c(426))}}else if(ye&&f.mode&1){var je=nc(u);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),ac(je,u,f,o,r),Ri(qr(g,f));break e}}o=g=qr(g,f),Ue!==4&&(Ue=2),kn===null?kn=[o]:kn.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var S=ec(o,g,r);No(o,S);break e;case 1:f=g;var y=o.type,C=o.stateNode;if((o.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Kt===null||!Kt.has(C)))){o.flags|=65536,r&=-r,o.lanes|=r;var D=tc(o,f,r);No(o,D);break e}}o=o.return}while(o!==null)}Bc(n)}catch(M){r=M,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Dc(){var e=Ca.current;return Ca.current=xa,e===null?xa:e}function Us(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ae===null||(ur&268435455)===0&&(ja&268435455)===0||er(Ae,Be)}function Va(e,r){var n=ie;ie|=2;var a=Dc();(Ae!==e||Be!==r)&&(zt=null,mr(e,r));do try{ap();break}catch(l){Ac(e,l)}while(!0);if(Li(),ie=n,Ca.current=a,ke!==null)throw Error(c(261));return Ae=null,Be=0,Ue}function ap(){for(;ke!==null;)Fc(ke)}function ip(){for(;ke!==null&&!Vd();)Fc(ke)}function Fc(e){var r=Ic(e.alternate,e,it);e.memoizedProps=e.pendingProps,r===null?Bc(e):ke=r,bs.current=null}function Bc(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Ku(n,r,it),n!==null){ke=n;return}}else{if(n=Ju(n,r),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,ke=null;return}}if(r=r.sibling,r!==null){ke=r;return}ke=r=e}while(r!==null);Ue===0&&(Ue=5)}function hr(e,r,n){var a=de,l=ht.transition;try{ht.transition=null,de=1,sp(e,r,n,a)}finally{ht.transition=l,de=a}return null}function sp(e,r,n,a){do $r();while(Jt!==null);if((ie&6)!==0)throw Error(c(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($d(e,o),e===Ae&&(ke=Ae=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ta||(Ta=!0,Rc(Fn,function(){return $r(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ht.transition,ht.transition=null;var u=de;de=1;var f=ie;ie|=4,bs.current=null,ep(e,n),kc(n,e),Tu(Ui),Ln=!!Ni,Ui=Ni=null,e.current=n,tp(n),Ed(),ie=f,de=u,ht.transition=o}else e.current=n;if(Ta&&(Ta=!1,Jt=e,Na=l),o=e.pendingLanes,o===0&&(Kt=null),Fd(n.stateNode),Ye(e,Ce()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)l=r[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(ka)throw ka=!1,e=Ss,Ss=null,e;return(Na&1)!==0&&e.tag!==0&&$r(),o=e.pendingLanes,(o&1)!==0?e===Cs?Tn++:(Tn=0,Cs=e):Tn=0,Ht(),null}function $r(){if(Jt!==null){var e=Sl(Na),r=ht.transition,n=de;try{if(ht.transition=null,de=16>e?16:e,Jt===null)var a=!1;else{if(e=Jt,Jt=null,Na=0,(ie&6)!==0)throw Error(c(331));var l=ie;for(ie|=4,R=e.current;R!==null;){var o=R,u=o.child;if((R.flags&16)!==0){var f=o.deletions;if(f!==null){for(var g=0;g<f.length;g++){var j=f[g];for(R=j;R!==null;){var P=R;switch(P.tag){case 0:case 11:case 15:Cn(8,P,o)}var V=P.child;if(V!==null)V.return=P,R=V;else for(;R!==null;){P=R;var N=P.sibling,I=P.return;if(vc(P),P===j){R=null;break}if(N!==null){N.return=I,R=N;break}R=I}}}var L=o.alternate;if(L!==null){var W=L.child;if(W!==null){L.child=null;do{var je=W.sibling;W.sibling=null,W=je}while(W!==null)}}R=o}}if((o.subtreeFlags&2064)!==0&&u!==null)u.return=o,R=u;else e:for(;R!==null;){if(o=R,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Cn(9,o,o.return)}var S=o.sibling;if(S!==null){S.return=o.return,R=S;break e}R=o.return}}var y=e.current;for(R=y;R!==null;){u=R;var C=u.child;if((u.subtreeFlags&2064)!==0&&C!==null)C.return=u,R=C;else e:for(u=y;R!==null;){if(f=R,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Sa(9,f)}}catch(M){Se(f,f.return,M)}if(f===u){R=null;break e}var D=f.sibling;if(D!==null){D.return=f.return,R=D;break e}R=f.return}}if(ie=l,Ht(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Bn,e)}catch{}a=!0}return a}finally{de=n,ht.transition=r}}return!1}function qc(e,r,n){r=qr(n,r),r=ec(e,r,1),e=Qt(e,r,1),r=Me(),e!==null&&(Qr(e,1,r),Ye(e,r))}function Se(e,r,n){if(e.tag===3)qc(e,e,n);else for(;r!==null;){if(r.tag===3){qc(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kt===null||!Kt.has(a))){e=qr(n,e),e=tc(r,e,1),r=Qt(r,e,1),e=Me(),r!==null&&(Qr(r,1,e),Ye(r,e));break}}r=r.return}}function lp(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=Me(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Be&n)===n&&(Ue===4||Ue===3&&(Be&130023424)===Be&&500>Ce()-ws?mr(e,0):vs|=n),Ye(e,r)}function zc(e,r){r===0&&((e.mode&1)===0?r=1:(r=zn,zn<<=1,(zn&130023424)===0&&(zn=4194304)));var n=Me();e=Ft(e,r),e!==null&&(Qr(e,r,n),Ye(e,n))}function op(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),zc(e,n)}function cp(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(r),zc(e,n)}var Ic;Ic=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||Xe.current)Ge=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Ge=!1,Yu(e,r,n);Ge=(e.flags&131072)!==0}else Ge=!1,ye&&(r.flags&1048576)!==0&&xo(r,ia,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;va(e,r),e=r.pendingProps;var l=Ur(r,qe.current);Fr(r,n),l=Ji(null,r,a,e,l,n);var o=Zi();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,He(a)?(o=!0,ra(r)):o=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Oi(r),l.updater=ya,r.stateNode=l,l._reactInternals=r,is(r,a,e,n),r=cs(null,r,a,!0,o,n)):(r.tag=0,ye&&o&&Bi(r),We(null,r,l,n),r=r.child),r;case 16:a=r.elementType;e:{switch(va(e,r),e=r.pendingProps,l=a._init,a=l(a._payload),r.type=a,l=r.tag=up(a),e=vt(a,e),l){case 0:r=os(null,r,a,e,n);break e;case 1:r=dc(null,r,a,e,n);break e;case 11:r=ic(null,r,a,e,n);break e;case 14:r=sc(null,r,a,vt(a.type,e),n);break e}throw Error(c(306,a,""))}return r;case 0:return a=r.type,l=r.pendingProps,l=r.elementType===a?l:vt(a,l),os(e,r,a,l,n);case 1:return a=r.type,l=r.pendingProps,l=r.elementType===a?l:vt(a,l),dc(e,r,a,l,n);case 3:e:{if(uc(r),e===null)throw Error(c(387));a=r.pendingProps,o=r.memoizedState,l=o.element,To(e,r),ua(r,a,null,n);var u=r.memoizedState;if(a=u.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){l=qr(Error(c(423)),r),r=pc(e,r,a,n,l);break e}else if(a!==l){l=qr(Error(c(424)),r),r=pc(e,r,a,n,l);break e}else for(at=_t(r.stateNode.containerInfo.firstChild),nt=r,ye=!0,bt=null,n=jo(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),a===l){r=qt(e,r,n);break e}We(e,r,a,n)}r=r.child}return r;case 5:return Po(r),e===null&&Ii(r),a=r.type,l=r.pendingProps,o=e!==null?e.memoizedProps:null,u=l.children,Pi(a,l)?u=null:o!==null&&Pi(a,o)&&(r.flags|=32),cc(e,r),We(e,r,u,n),r.child;case 6:return e===null&&Ii(r),null;case 13:return mc(e,r,n);case 4:return Xi(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=Ar(r,null,a,n):We(e,r,a,n),r.child;case 11:return a=r.type,l=r.pendingProps,l=r.elementType===a?l:vt(a,l),ic(e,r,a,l,n);case 7:return We(e,r,r.pendingProps,n),r.child;case 8:return We(e,r,r.pendingProps.children,n),r.child;case 12:return We(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,l=r.pendingProps,o=r.memoizedProps,u=l.value,me(oa,a._currentValue),a._currentValue=u,o!==null)if(yt(o.value,u)){if(o.children===l.children&&!Xe.current){r=qt(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var f=o.dependencies;if(f!==null){u=o.child;for(var g=f.firstContext;g!==null;){if(g.context===a){if(o.tag===1){g=Bt(-1,n&-n),g.tag=2;var j=o.updateQueue;if(j!==null){j=j.shared;var P=j.pending;P===null?g.next=g:(g.next=P.next,P.next=g),j.pending=g}}o.lanes|=n,g=o.alternate,g!==null&&(g.lanes|=n),Mi(o.return,n,r),f.lanes|=n;break}g=g.next}}else if(o.tag===10)u=o.type===r.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(c(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),Mi(u,n,r),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===r){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}We(e,r,l.children,n),r=r.child}return r;case 9:return l=r.type,a=r.pendingProps.children,Fr(r,n),l=pt(l),a=a(l),r.flags|=1,We(e,r,a,n),r.child;case 14:return a=r.type,l=vt(a,r.pendingProps),l=vt(a.type,l),sc(e,r,a,l,n);case 15:return lc(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,l=r.pendingProps,l=r.elementType===a?l:vt(a,l),va(e,r),r.tag=1,He(a)?(e=!0,ra(r)):e=!1,Fr(r,n),Jo(r,a,l),is(r,a,l,n),cs(null,r,a,!0,e,n);case 19:return fc(e,r,n);case 22:return oc(e,r,n)}throw Error(c(156,r.tag))};function Rc(e,r){return xl(e,r)}function dp(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,r,n,a){return new dp(e,r,n,a)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function up(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===jt)return 14}return 2}function tr(e,r){var n=e.alternate;return n===null?(n=ft(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ea(e,r,n,a,l,o){var u=2;if(a=e,typeof e=="function")Ps(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ue:return fr(n.children,l,o,r);case ge:u=8,l|=8;break;case Pe:return e=ft(12,n,r,l|2),e.elementType=Pe,e.lanes=o,e;case Le:return e=ft(13,n,r,l),e.elementType=Le,e.lanes=o,e;case gt:return e=ft(19,n,r,l),e.elementType=gt,e.lanes=o,e;case we:return Aa(n,l,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ve:u=10;break e;case ot:u=9;break e;case ct:u=11;break e;case jt:u=14;break e;case Oe:u=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return r=ft(u,n,r,l),r.elementType=e,r.type=a,r.lanes=o,r}function fr(e,r,n,a){return e=ft(7,e,a,r),e.lanes=n,e}function Aa(e,r,n,a){return e=ft(22,e,a,r),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function Vs(e,r,n){return e=ft(6,e,null,r),e.lanes=n,e}function Es(e,r,n){return r=ft(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function pp(e,r,n,a,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ai(0),this.expirationTimes=ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ai(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function As(e,r,n,a,l,o,u,f,g){return e=new pp(e,r,n,f,g),r===1?(r=1,o===!0&&(r|=8)):r=0,o=ft(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oi(o),e}function mp(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function $c(e){if(!e)return Xt;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(c(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(He(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(He(n))return ho(e,n,r)}return r}function Lc(e,r,n,a,l,o,u,f,g){return e=As(n,a,!0,e,l,o,u,f,g),e.context=$c(null),n=e.current,a=Me(),l=Zt(n),o=Bt(a,l),o.callback=r??null,Qt(n,o,l),e.current.lanes=l,Qr(e,l,a),Ye(e,a),e}function Da(e,r,n,a){var l=r.current,o=Me(),u=Zt(l);return n=$c(n),r.context===null?r.context=n:r.pendingContext=n,r=Bt(o,u),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=Qt(l,r,u),e!==null&&(Ct(e,l,u,o),da(e,l,u)),u}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Ds(e,r){Wc(e,r),(e=e.alternate)&&Wc(e,r)}function hp(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}Ba.prototype.render=Fs.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(c(409));Da(e,r,null,null)},Ba.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;pr(function(){Da(null,e,null,null)}),r[Vt]=null}};function Ba(e){this._internalRoot=e}Ba.prototype.unstable_scheduleHydration=function(e){if(e){var r=kl();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Lt.length&&r!==0&&r<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Ul(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function fp(e,r,n,a,l){if(l){if(typeof a=="function"){var o=a;a=function(){var j=Fa(u);o.call(j)}}var u=Lc(r,a,e,0,null,!1,!1,"",_c);return e._reactRootContainer=u,e[Vt]=u.current,dn(e.nodeType===8?e.parentNode:e),pr(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var f=a;a=function(){var j=Fa(g);f.call(j)}}var g=As(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=g,e[Vt]=g.current,dn(e.nodeType===8?e.parentNode:e),pr(function(){Da(r,g,n,a)}),g}function za(e,r,n,a,l){var o=n._reactRootContainer;if(o){var u=o;if(typeof l=="function"){var f=l;l=function(){var g=Fa(u);f.call(g)}}Da(r,u,e,l)}else u=fp(n,r,e,l,a);return Fa(u)}Cl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Gr(r.pendingLanes);n!==0&&(ii(r,n|1),Ye(r,Ce()),(ie&6)===0&&(Rr=Ce()+500,Ht()))}break;case 13:pr(function(){var a=Ft(e,1);if(a!==null){var l=Me();Ct(a,e,1,l)}}),Ds(e,1)}},si=function(e){if(e.tag===13){var r=Ft(e,134217728);if(r!==null){var n=Me();Ct(r,e,134217728,n)}Ds(e,134217728)}},jl=function(e){if(e.tag===13){var r=Zt(e),n=Ft(e,r);if(n!==null){var a=Me();Ct(n,e,r,a)}Ds(e,r)}},kl=function(){return de},Tl=function(e,r){var n=de;try{return de=e,r()}finally{de=n}},Ja=function(e,r,n){switch(r){case"input":if(_a(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var l=ea(a);if(!l)throw Error(c(90));Ys(a),_a(a,l)}}}break;case"textarea":tl(e,n);break;case"select":r=n.value,r!=null&&gr(e,!!n.multiple,r,!1)}},dl=Ts,ul=pr;var gp={usingClientEntryPoint:!1,Events:[mn,Tr,ea,ol,cl,Ts]},Nn={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fl(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{Bn=Ia.inject(xp),kt=Ia}catch{}}return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp,Ke.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(r))throw Error(c(200));return mp(e,r,null,n)},Ke.createRoot=function(e,r){if(!Bs(e))throw Error(c(299));var n=!1,a="",l=Mc;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=As(e,1,!1,null,null,n,!1,a,l),e[Vt]=r.current,dn(e.nodeType===8?e.parentNode:e),new Fs(r)},Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=fl(r),e=e===null?null:e.stateNode,e},Ke.flushSync=function(e){return pr(e)},Ke.hydrate=function(e,r,n){if(!qa(r))throw Error(c(200));return za(null,e,r,!0,n)},Ke.hydrateRoot=function(e,r,n){if(!Bs(e))throw Error(c(405));var a=n!=null&&n.hydratedSources||null,l=!1,o="",u=Mc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),r=Lc(r,null,e,1,n??null,l,!1,o,u),e[Vt]=r.current,dn(e),a)for(e=0;e<a.length;e++)n=a[e],l=n._getVersion,l=l(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,l]:r.mutableSourceEagerHydrationData.push(n,l);return new Ba(r)},Ke.render=function(e,r,n){if(!qa(r))throw Error(c(200));return za(null,e,r,!1,n)},Ke.unmountComponentAtNode=function(e){if(!qa(e))throw Error(c(40));return e._reactRootContainer?(pr(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},Ke.unstable_batchedUpdates=Ts,Ke.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!qa(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return za(e,r,n,!1,a)},Ke.version="18.3.1-next-f1338f8080-20240426",Ke}var Jc;function kp(){if(Jc)return Is.exports;Jc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Is.exports=jp(),Is.exports}var Zc;function Tp(){if(Zc)return Ra;Zc=1;var s=kp();return Ra.createRoot=s.createRoot,Ra.hydrateRoot=s.hydrateRoot,Ra}var Np=Tp();const Up=cd(Np),dd=[{id:"introduction",label:"Introduction",icon:"bookmark"},{id:"quickstart",label:"Quick Start Guide",icon:"bookmark"},{id:"tokens",label:"Token",icon:"folder",children:[{id:"colors",label:"Colors",icon:"folder",children:[{id:"colors-primary",label:"Primary",icon:"layers"},{id:"colors-secondary",label:"Secondary",icon:"layers"},{id:"colors-tertiary",label:"Tertiary",icon:"layers"},{id:"colors-red",label:"Red (Error)",icon:"layers"},{id:"colors-orange",label:"Orange (Warning)",icon:"layers"},{id:"colors-yellow",label:"Yellow",icon:"layers"},{id:"colors-gold",label:"Gold",icon:"layers"},{id:"colors-green",label:"Green (Success)",icon:"layers"},{id:"colors-lime",label:"Lime",icon:"layers"},{id:"colors-blue",label:"Blue (Info)",icon:"layers"},{id:"colors-skyblue",label:"Sky Blue",icon:"layers"},{id:"colors-cyan",label:"Cyan",icon:"layers"},{id:"colors-purple",label:"Purple",icon:"layers"},{id:"colors-pink",label:"Pink",icon:"layers"},{id:"colors-neutral",label:"Neutral",icon:"layers"},{id:"colors-semantic",label:"Semantic Tokens",icon:"layers"}]},{id:"typography",label:"Typography",icon:"folder",children:[{id:"typography-header",label:"Header",icon:"layers"},{id:"typography-display",label:"Display",icon:"layers"},{id:"typography-body",label:"Body",icon:"layers"},{id:"typography-label",label:"Label",icon:"layers"},{id:"typography-title",label:"Title",icon:"layers"},{id:"typography-usage",label:"How to use",icon:"layers"}]},{id:"shadow",label:"Shadow",icon:"folder",children:[{id:"shadow-scale",label:"Scale",icon:"layers"},{id:"shadow-usage",label:"How to use",icon:"layers"}]},{id:"dimensions",label:"Dimensions",icon:"folder",children:[{id:"dimensions-spacing",label:"Spacing",icon:"layers"},{id:"dimensions-radius",label:"Border Radius",icon:"layers"},{id:"dimensions-border",label:"Border Width",icon:"layers"},{id:"dimensions-usage",label:"How to use",icon:"layers"}]}]},{id:"components",label:"Components",icon:"folder",children:[{id:"accordion-grouping",label:"Accordion",icon:"folder",children:[{id:"accordion-basic",label:"Basic",icon:"layers"},{id:"accordion-group",label:"AccordionGroup",icon:"layers"}]},{id:"app-header-group",label:"App Header",icon:"folder",children:[{id:"app-header-basic",label:"Introduction",icon:"layers"},{id:"app-header-back",label:"Back Button",icon:"layers"},{id:"app-header-filled",label:"Filled",icon:"layers"},{id:"app-header-custom-leading",label:"Custom Leading Widgets",icon:"layers"}]},{id:"avatar-parent-group",label:"Avatar",icon:"folder",children:[{id:"avatar-basic",label:"Basic",icon:"layers"},{id:"avatar-status",label:"Status Avatar",icon:"layers"},{id:"avatar-profile",label:"Profile Badges & Actions",icon:"layers"},{id:"avatar-group",label:"Avatar Group",icon:"layers"}]},{id:"badge-parent-group",label:"Badge",icon:"folder",children:[{id:"badge-basic",label:"Basic & Dot",icon:"layers"},{id:"badge-count",label:"Count Badge",icon:"layers"},{id:"badge-standalone",label:"Standalone Variants",icon:"layers"},{id:"badge-semantic",label:"Semantic Colors & Border",icon:"layers"},{id:"badge-overlay",label:"Overlay & Placement",icon:"layers"}]},{id:"card-parent-group",label:"Card",icon:"folder",children:[{id:"card-basic",label:"Basic Content",icon:"layers"},{id:"card-actions",label:"With Actions",icon:"layers"},{id:"card-horizontal",label:"Horizontal Layout",icon:"layers"},{id:"card-media",label:"With Media",icon:"layers"},{id:"card-rich",label:"Rich Card",icon:"layers"},{id:"card-rich-horizontal",label:"Rich Card (Horizontal)",icon:"layers"}]},{id:"button-group",label:"Button",icon:"folder",children:[{id:"button-introduction",label:"Introduction",icon:"layers"},{id:"button-variants",label:"Variants",icon:"layers"},{id:"button-sizes",label:"Sizes",icon:"layers"},{id:"button-showcase",label:"Showcase",icon:"layers"},{id:"button-icon-button",label:"IconButton",icon:"layers"}]},{id:"checkbox-group",label:"Checkbox",icon:"folder",children:[{id:"checkbox-basic",label:"Basic & States",icon:"layers"},{id:"checkbox-sizes",label:"Sizes",icon:"layers"},{id:"checkbox-tristate",label:"Tristate (Indeterminate)",icon:"layers"}]},{id:"chips-parent-group",label:"Chips",icon:"folder",children:[{id:"chips-basic",label:"Choice & Filter Chips",icon:"layers"},{id:"chips-action",label:"Suggestion & Action Chips",icon:"layers"},{id:"chips-input",label:"Input Chips",icon:"layers"}]},{id:"chip-group-parent",label:"Chip Group",icon:"folder",children:[{id:"chip-group-wrap",label:"Wrap & Horizontal Groups",icon:"layers"},{id:"chip-group-input-field",label:"Input Chip Field",icon:"layers"}]},{id:"date-picker-group",label:"Date Picker",icon:"folder",children:[{id:"date-picker-single",label:"Single Date",icon:"layers"},{id:"date-picker-range",label:"Date Range",icon:"layers"}]},{id:"divider-group",label:"Divider",icon:"folder",children:[{id:"divider-basic",label:"Basic & Indents",icon:"layers"},{id:"divider-styles",label:"Solid, Dashed & Dotted",icon:"layers"},{id:"divider-label",label:"With Center Label",icon:"layers"},{id:"divider-vertical",label:"Vertical Orientation",icon:"layers"}]},{id:"status-banner-group",label:"Draft Status",icon:"folder",children:[{id:"status-banner-basic",label:"Basic Banners",icon:"layers"},{id:"status-banner-draft",label:"Draft & Application Statuses",icon:"layers"},{id:"status-banner-variants",label:"All Color Variants",icon:"layers"}]},{id:"status-pipeline-group",label:"Status Pipeline",icon:"folder",children:[{id:"status-pipeline-vertical-group",label:"Vertical",icon:"folder",children:[{id:"status-pipeline-vertical",label:"Basic",icon:"layers"},{id:"status-pipeline-vertical-states",label:"All States",icon:"layers"},{id:"status-pipeline-vertical-sizes",label:"Sizes",icon:"layers"},{id:"status-pipeline-vertical-colors",label:"Custom Colors",icon:"layers"},{id:"status-pipeline-vertical-labels",label:"Labels Only",icon:"layers"},{id:"status-pipeline-vertical-nolabels",label:"Circles Only",icon:"layers"}]},{id:"status-pipeline-horizontal-group",label:"Horizontal",icon:"folder",children:[{id:"status-pipeline-horizontal",label:"Basic",icon:"layers"},{id:"status-pipeline-horizontal-states",label:"All States",icon:"layers"},{id:"status-pipeline-horizontal-sizes",label:"Sizes",icon:"layers"},{id:"status-pipeline-horizontal-colors",label:"Custom Colors",icon:"layers"},{id:"status-pipeline-horizontal-labels",label:"Labels Only",icon:"layers"},{id:"status-pipeline-horizontal-nolabels",label:"Circles Only",icon:"layers"}]}]},{id:"tag-group",label:"Tag",icon:"folder",children:[{id:"tag-basic",label:"Basic",icon:"layers"},{id:"tag-shapes",label:"Shapes",icon:"layers"},{id:"tag-styles",label:"Styles",icon:"layers"},{id:"tag-colors",label:"Color Schemes",icon:"layers"},{id:"tag-leading",label:"Leading Content",icon:"layers"},{id:"tag-dismissable",label:"Dismissible",icon:"layers"},{id:"tag-pill",label:"Unified Pill Tag",icon:"layers"}]},{id:"textarea-group",label:"Text Area",icon:"folder",children:[{id:"textarea-basic",label:"Basic",icon:"layers"},{id:"textarea-label",label:"Label & Required",icon:"layers"},{id:"textarea-status",label:"Validation Status",icon:"layers"},{id:"textarea-count",label:"Character Count",icon:"layers"},{id:"textarea-disabled",label:"Disabled & Read Only",icon:"layers"}]},{id:"timepicker-group",label:"Time Picker",icon:"folder",children:[{id:"timepicker-basic",label:"Basic",icon:"layers"},{id:"timepicker-label",label:"Label & Required",icon:"layers"},{id:"timepicker-status",label:"Validation Status",icon:"layers"},{id:"timepicker-interval",label:"Minute Interval",icon:"layers"},{id:"timepicker-initial",label:"Initial Time",icon:"layers"},{id:"timepicker-disabled",label:"Disabled",icon:"layers"}]},{id:"feedback-group",label:"Feedback",icon:"folder",children:[{id:"feedbackformstar",label:"feedbackformstar",icon:"layers"},{id:"feedbackformcsat",label:"feedbackformcsat",icon:"layers"},{id:"feedbackformnps",label:"feedbackformnps",icon:"layers"}]},{id:"empty-state-group",label:"Empty State",icon:"folder",children:[{id:"empty-state-basic",label:"Basic",icon:"layers"},{id:"empty-state-variants",label:"Variants",icon:"layers"},{id:"empty-state-action",label:"With Action",icon:"layers"}]},{id:"dropdown-group",label:"Dropdown",icon:"folder",children:[{id:"dropdown-basic",label:"Basic Single Select",icon:"layers"},{id:"dropdown-multi",label:"Multi-Select Mode",icon:"layers"},{id:"dropdown-search",label:"Searchable Dropdown",icon:"layers"},{id:"dropdown-status",label:"Form Status Validation",icon:"layers"}]},{id:"fileupload-group",label:"FileUpload",icon:"folder",children:[{id:"fileupload-basic",label:"Basic",icon:"layers"},{id:"fileupload-dashed",label:"Dashed Border",icon:"layers"},{id:"fileupload-preloaded",label:"Preloaded Files",icon:"layers"}]},{id:"input-group",label:"Input Field",icon:"folder",children:[{id:"input-basic",label:"Basic",icon:"layers"},{id:"input-status",label:"Validation Status",icon:"layers"},{id:"input-password",label:"Password",icon:"layers"},{id:"input-icons",label:"Icons",icon:"layers"},{id:"input-prefix-postfix",label:"Prefix & Postfix",icon:"layers"},{id:"input-required-disabled",label:"Required & Disabled",icon:"layers"}]},{id:"input-aadhaar-group",label:"Input Aadhaar",icon:"folder",children:[{id:"input-aadhaar-basic",label:"Basic",icon:"layers"},{id:"input-aadhaar-varients",label:"Varients",icon:"layers"}]},{id:"input-pan-group",label:"Input Pan",icon:"folder",children:[{id:"input-pan-basic",label:"Basic",icon:"layers"},{id:"input-pan-varients",label:"Varients",icon:"layers"}]},{id:"input-otp-group",label:"Input Otp",icon:"folder",children:[{id:"input-otp-basic",label:"Basic",icon:"layers"},{id:"input-otp-varients",label:"Varients",icon:"layers"}]},{id:"carousel-group",label:"Carousel",icon:"folder",children:[{id:"carousel-intro",label:"Introduction",icon:"layers"},{id:"carousel-rich-hero",label:"Rich Hero Carousel",icon:"layers"},{id:"carousel-image",label:"Image Carousel",icon:"layers"}]},{id:"journey-timeline-group",label:"Journey Timeline",icon:"folder",children:[{id:"journey-timeline-basic",label:"Basic",icon:"layers"},{id:"journey-timeline-horizontal",label:"Horizontal",icon:"layers"},{id:"journey-timeline-custom",label:"Custom Status",icon:"layers"}]},{id:"link-group",label:"Link",icon:"folder",children:[{id:"link-basic",label:"Basic",icon:"layers"},{id:"link-text",label:"Text Link",icon:"layers"},{id:"link-custom-child",label:"Custom Child",icon:"layers"}]},{id:"modal-group",label:"Modal",icon:"folder",children:[{id:"modal-full-preview",label:"Full Preview",icon:"layers"},{id:"modal-header-left",label:"Header Left",icon:"layers"},{id:"modal-header-centered",label:"Header Centered",icon:"layers"}]},{id:"spinner-group",label:"Spinner",icon:"folder",children:[{id:"spinner-basic",label:"Basic",icon:"layers"}]},{id:"pagination-group",label:"Pagination",icon:"folder",children:[{id:"pagination-default-arrows",label:"Default Arrows",icon:"layers"},{id:"pagination-capsule-arrows",label:"Capsule Arrows",icon:"layers"},{id:"pagination-capsule-dots",label:"Capsule Dots",icon:"layers"},{id:"pagination-arrows-right",label:"Arrows Right",icon:"layers"}]},{id:"progress-indicator-group",label:"Progress Indicator",icon:"folder",children:[{id:"progress-linear",label:"Linear",icon:"layers"},{id:"progress-circular",label:"Circular",icon:"layers"},{id:"progress-half-circle",label:"Half Circle",icon:"layers"},{id:"progress-animated",label:"Animated",icon:"layers"}]},{id:"progress-sla-group",label:"Progress SLA Indicator",icon:"folder",children:[{id:"progress-sla-circular",label:"Circular",icon:"layers"},{id:"progress-sla-linear",label:"Linear",icon:"layers"}]},{id:"popover-group",label:"Popover",icon:"folder",children:[{id:"popover-basic",label:"Basic",icon:"layers"},{id:"popover-rich",label:"Rich",icon:"layers"},{id:"popover-placements",label:"Placements",icon:"layers"},{id:"popover-custom-content",label:"Custom Content",icon:"layers"},{id:"popover-trigger",label:"Trigger",icon:"layers"}]},{id:"radio-group",label:"Radio Button",icon:"folder",children:[{id:"radio-basic",label:"Basic",icon:"layers"},{id:"radio-sizes",label:"Sizes",icon:"layers"},{id:"radio-status",label:"Status",icon:"layers"}]},{id:"result-list-group",label:"Result List",icon:"folder",children:[{id:"result-list-basic",label:"Basic",icon:"layers"},{id:"result-list-metadata",label:"Metadata",icon:"layers"},{id:"result-list-expanded",label:"Expanded",icon:"layers"},{id:"result-list-rejected",label:"Rejected",icon:"layers"}]},{id:"search-group",label:"Search Field",icon:"folder",children:[{id:"search-basic",label:"Basic",icon:"layers"},{id:"search-submit",label:"Search with Submit",icon:"layers"},{id:"search-autocomplete",label:"Autocomplete",icon:"layers"},{id:"search-status",label:"Status",icon:"layers"}]},{id:"slider-group",label:"Slider",icon:"folder",children:[{id:"slider-basic",label:"Basic",icon:"layers"},{id:"slider-sizes",label:"Sizes",icon:"layers"},{id:"slider-steps",label:"Steps",icon:"layers"},{id:"slider-custom-range",label:"Custom Range",icon:"layers"},{id:"slider-formatter",label:"Value Formatter",icon:"layers"},{id:"slider-disabled",label:"Disabled",icon:"layers"}]},{id:"stepper-group",label:"Stepper",icon:"folder",children:[{id:"stepper-horizontal",label:"Horizontal",icon:"layers"},{id:"stepper-horizontal-dashed",label:"Horizontal (Dashed)",icon:"layers"},{id:"stepper-vertical",label:"Vertical",icon:"layers"},{id:"stepper-error",label:"Error State",icon:"layers"},{id:"stepper-bottom-lines",label:"Horizontal (Bottom Line)",icon:"layers"},{id:"stepper-bottom-background",label:"Bottom Lines + Background",icon:"layers"},{id:"stepper-edge-alignment",label:"Edge Label Alignment",icon:"layers"},{id:"compact-stepper-group",label:"Compact Stepper",icon:"folder",children:[{id:"compact-stepper-linear",label:"Linear",icon:"layers"},{id:"compact-stepper-right-aligned",label:"Right Aligned",icon:"layers"},{id:"compact-stepper-centered",label:"Centered",icon:"layers"},{id:"compact-stepper-centered-between",label:"Centered (Arrows Outside)",icon:"layers"},{id:"compact-stepper-split",label:"Split",icon:"layers"}]}]},{id:"tooltip-group",label:"Tooltip",icon:"folder",children:[{id:"tooltip-introduction",label:"Introduction",icon:"layers"},{id:"tooltip-basic",label:"Placements",icon:"layers"},{id:"tooltip-interactive",label:"Interactive",icon:"layers"},{id:"tooltip-variants",label:"All Variants",icon:"layers"},{id:"tooltip-rich",label:"Rich Tooltip",icon:"layers"}]},{id:"switch-group",label:"Switch",icon:"folder",children:[{id:"switch-basic",label:"Basic & Sizes",icon:"layers"},{id:"switch-labels",label:"Label Positions",icon:"layers"},{id:"switch-status",label:"Status Descriptions",icon:"layers"},{id:"switch-required",label:"Required & Icons",icon:"layers"},{id:"switch-disabled",label:"Disabled",icon:"layers"}]},{id:"toast-group",label:"Toast",icon:"folder",children:[{id:"toast-basic",label:"Categories",icon:"layers"},{id:"toast-stacked",label:"Stacked Layout",icon:"layers"},{id:"toast-actions",label:"Action & Close",icon:"layers"},{id:"toast-custom",label:"Customization",icon:"layers"},{id:"toast-provider",label:"Provider Demo",icon:"layers"}]},{id:"timeslot-group",label:"Time Slot",icon:"folder",children:[{id:"timeslot-introduction",label:"Introduction",icon:"layers"},{id:"timeslot-basic",label:"Booking (Expanded)",icon:"layers"},{id:"timeslot-compact",label:"Compact View",icon:"layers"},{id:"timeslot-json",label:"JSON Data Source",icon:"layers"}]}]}],$a=dd.find(s=>s.id==="components");$a!=null&&$a.children&&$a.children.sort((s,d)=>s.label.localeCompare(d.label,void 0,{sensitivity:"base"}));const Pp=({activePage:s,onNavigate:d,isDark:c,onToggleTheme:m,isMobileOpen:h=!1,onCloseMobile:b})=>{const[x,i]=k.useState({}),[w,p]=k.useState(""),[T,E]=k.useState(260),[B,z]=k.useState(!1),F=La.useRef(new Set),Y=A=>!A||A==="introduction"||A==="quickstart"?[]:A.startsWith("colors-")?["tokens","colors"]:A.startsWith("typography")?["tokens","typography"]:A.startsWith("shadow")?["tokens","shadow"]:A.startsWith("dimensions")||["spacing","radius"].includes(A)?["tokens","dimensions"]:["forms","headers"].includes(A)?["patterns"]:A.startsWith("button")?["components","button-group"]:A.startsWith("date-picker")?["components","date-picker-group"]:A.startsWith("modal")?["components","modal-group"]:A.startsWith("accordion")?["components","accordion-grouping"]:A.startsWith("app-header")?["components","app-header-group"]:A.startsWith("avatar")?["components","avatar-parent-group"]:A.startsWith("card")?["components","card-parent-group"]:A.startsWith("carousel")?["components","carousel-group"]:A.startsWith("journey-timeline")?["components","journey-timeline-group"]:A.startsWith("link")?["components","link-group"]:A.startsWith("pagination")?["components","pagination-group"]:A.startsWith("progress-sla")?["components","progress-sla-group"]:A.startsWith("progress")?["components","progress-indicator-group"]:A.startsWith("tooltip")?["components","tooltip-group"]:A.startsWith("popover")?["components","popover-group"]:A.startsWith("radio")?["components","radio-group"]:A.startsWith("result-list")?["components","result-list-group"]:A.startsWith("search")?["components","search-group"]:A.startsWith("badge")?["components","badge-parent-group"]:A.startsWith("input-aadhaar")?["components","input-aadhaar-group"]:A.startsWith("input-pan")?["components","input-pan-group"]:A.startsWith("input-otp")?["components","input-otp-group"]:A.startsWith("input")?["components","input-group"]:A.startsWith("fileupload")?["components","fileupload-group"]:A.startsWith("feedbackform")?["components","feedback-group"]:A.startsWith("empty-state")?["components","empty-state-group"]:A.startsWith("status-pipeline-horizontal")?["components","status-pipeline-group","status-pipeline-horizontal-group"]:A.startsWith("status-pipeline")?["components","status-pipeline-group","status-pipeline-vertical-group"]:A.startsWith("timepicker")?["components","timepicker-group"]:A.startsWith("toast")?["components","toast-group"]:A.startsWith("textarea")?["components","textarea-group"]:A.startsWith("tag")?["components","tag-group"]:A.startsWith("compact-stepper")?["components","stepper-group","compact-stepper-group"]:A.startsWith("stepper")?["components","stepper-group"]:A.startsWith("timeslot")?["components","timeslot-group"]:A.startsWith("switch")?["components","switch-group"]:A.startsWith("slider")?["components","slider-group"]:["input-field","checkbox","radio-button","switch","card","badge","avatar","toast"].includes(A)?["components"]:[];La.useEffect(()=>{const A=Y(s);i(ue=>{const ge={...ue};for(const Pe of A)F.current.has(Pe)||(ge[Pe]=!0);return ge})},[s]);const ae=k.useCallback(A=>{A.preventDefault(),z(!0);const ue=A.clientX,ge=T,Pe=ot=>{const ct=ge+(ot.clientX-ue),Le=Math.min(Math.max(ct,180),500);E(Le)},Ve=()=>{z(!1),window.removeEventListener("mousemove",Pe),window.removeEventListener("mouseup",Ve)};window.addEventListener("mousemove",Pe),window.addEventListener("mouseup",Ve)},[T]),re=()=>{E(260)},_e=A=>{F.current.add(A),i(ue=>({...ue,[A]:!ue[A]}))},$e=A=>{if(!w.trim())return A;const ue=w.toLowerCase(),ge=Pe=>Pe.map(Ve=>{if(Ve.children){const ot=ge(Ve.children);if(ot.length>0)return{...Ve,children:ot}}return Ve.label.toLowerCase().includes(ue)?Ve:null}).filter(Boolean);return ge(A)},Te=(A,ue)=>{if(A.children){const ge=x[A.id]||!!w.trim();return t.jsxs("div",{children:[t.jsxs("button",{className:`nav-group-header ${ue>0?"nav-group-header-nested":""}`,onClick:()=>{_e(A.id)},children:[t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10},children:[t.jsx("span",{className:"material-symbols-outlined nav-icon",children:ge?"folder_open":A.icon}),A.label]}),t.jsx("span",{className:"material-symbols-outlined chevron-icon",style:{fontSize:16,transform:ge?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"expand_more"})]}),t.jsx("div",{className:`nav-group-children ${ge?"expanded":""}`,children:A.children.map(Pe=>Te(Pe,ue+1))})]},A.id)}return t.jsxs("button",{className:`nav-item ${ue>0?"nav-item-nested":""} ${s===A.id?"active":""}`,onClick:()=>d(A.id),children:[t.jsx("span",{className:"material-symbols-outlined nav-icon",children:A.icon}),A.label]},A.id)},et=$e(dd);return t.jsxs("aside",{className:`sidebar ${c?"dark":""} ${B?"resizing":""} ${h?"mobile-open":""}`,style:{width:T,minWidth:T,maxWidth:T,flexShrink:0,position:"relative"},children:[t.jsx("div",{className:"bottom-sheet-handle-wrapper",onClick:b,children:t.jsx("div",{className:"bottom-sheet-handle"})}),t.jsxs("div",{className:"sidebar-header",children:[t.jsx("div",{className:"sidebar-logo-img-wrapper",onClick:()=>d("introduction"),style:{cursor:"pointer"},children:t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"sidebar-logo-img",style:{height:28,width:"auto",display:"block"}})}),t.jsx("button",{className:"theme-toggle-btn",onClick:m,title:c?"Switch to light mode":"Switch to dark mode",children:t.jsx("span",{className:"material-symbols-outlined theme-toggle-icon",children:c?"light_mode":"dark_mode"})})]}),t.jsx("div",{className:"sidebar-search",children:t.jsxs("div",{className:"search-wrapper",children:[t.jsx("span",{className:"material-symbols-outlined search-icon",style:{fontSize:18},children:"search"}),t.jsx("input",{className:"search-input",type:"text",placeholder:"Search",value:w,onChange:A=>p(A.target.value)})]})}),t.jsx("nav",{className:"sidebar-nav",children:et.map(A=>Te(A,0))}),t.jsx("div",{className:"sidebar-resizer",onMouseDown:ae,onDoubleClick:re,title:"Drag to resize sidebar (Double click to reset)"})]})},ed=({isDark:s,onNavigate:d})=>t.jsx("div",{className:`welcome-wrapper ${s?"dark":""}`,children:t.jsxs("div",{className:"welcome-container",children:[t.jsxs("section",{className:"hero-section",children:[t.jsxs("div",{className:"hero-left",children:[t.jsx("div",{className:"hero-logo-wrapper",children:t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"hero-logo-img"})}),t.jsxs("h1",{className:"hero-title",children:["React Native Documentation |",t.jsx("br",{}),"UX4G Design System"]}),t.jsx("div",{className:"version-badge",children:"3.0"}),t.jsx("h2",{className:"hero-tagline",children:"Government-grade UI foundations for trusted public digital experiences."}),t.jsx("p",{className:"hero-description",children:"UX4G gives product, design, and engineering teams one coherent system for building accessible, consistent, and scalable citizen-facing services."}),t.jsxs("div",{className:"hero-actions",children:[t.jsx("button",{className:"btn-hero-primary",onClick:()=>d("button"),children:"Get Started"}),t.jsx("button",{className:"btn-hero-secondary",onClick:()=>d("button"),children:"Component Library"})]})]}),t.jsx("div",{className:"hero-right",children:t.jsxs("div",{className:"overview-card",children:[t.jsx("div",{className:"overview-header-label",children:"System overview"}),t.jsxs("h3",{className:"overview-card-title",children:["One platform for",t.jsx("br",{}),"consistent public",t.jsx("br",{}),"service journeys."]}),t.jsx("p",{className:"overview-card-desc",children:"Start from shared tokens, move into reusable components, and document delivery paths in one place."}),t.jsxs("div",{className:"overview-stats-grid",children:[t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"45+"}),t.jsxs("div",{className:"stat-lbl",children:["Reusable",t.jsx("br",{}),"components"]})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"1K+"}),t.jsxs("div",{className:"stat-lbl",children:["Design",t.jsx("br",{}),"tokens"]})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"10+"}),t.jsx("div",{className:"stat-lbl",children:"Patterns"})]}),t.jsx("div",{className:"stat-divider"}),t.jsxs("div",{className:"stat-box",children:[t.jsx("div",{className:"stat-val",children:"AA"}),t.jsxs("div",{className:"stat-lbl",children:["Accessibility",t.jsx("br",{}),"target"]})]})]}),t.jsxs("div",{className:"overview-table-rows",children:[t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Tokens"}),t.jsx("span",{className:"table-row-desc",children:"Spacing, Radius, Colors"})]}),t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Components"}),t.jsx("span",{className:"table-row-desc",children:"Inputs, buttons, cards"})]}),t.jsxs("div",{className:"overview-table-row",children:[t.jsx("span",{className:"table-row-cat",children:"Patterns"}),t.jsx("span",{className:"table-row-desc",children:"Headers, footers, forms"})]})]})]})})]}),t.jsxs("section",{className:"section-block",children:[t.jsx("div",{className:"section-kicker",children:"Core strengths"}),t.jsxs("h2",{className:"section-heading",children:["Built for design systems that need",t.jsx("br",{}),"to scale beyond one product team."]}),t.jsx("p",{className:"section-subtext",children:"UX4G combines visual consistency, engineering pragmatism, and accessibility expectations into a single documentation experience."}),t.jsxs("div",{className:"cards-grid cards-grid-2x2",children:[t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"account_tree"})}),t.jsx("h3",{className:"feature-card-title",children:"Scalable Architecture"}),t.jsx("p",{className:"feature-card-desc",children:"A structured system of foundations, patterns, and components that can scale across ministries, vendors, and service teams."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"accessibility_new"})}),t.jsx("h3",{className:"feature-card-title",children:"Accessible Components"}),t.jsx("p",{className:"feature-card-desc",children:"Interaction patterns are designed for clarity, contrast, keyboard use, and dependable public-facing experiences."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"palette"})}),t.jsx("h3",{className:"feature-card-title",children:"Token-Driven Design"}),t.jsx("p",{className:"feature-card-desc",children:"Color, typography, spacing, and elevation are governed through reusable tokens that keep every experience aligned."})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"code"})}),t.jsx("h3",{className:"feature-card-title",children:"Developer Friendly"}),t.jsx("p",{className:"feature-card-desc",children:"Composable utilities, production-ready components, and Storybook documentation reduce friction from exploration to delivery."})]})]})]}),t.jsxs("section",{className:"section-block",children:[t.jsx("div",{className:"section-kicker",children:"Library map"}),t.jsxs("h2",{className:"section-heading",children:["Navigate the design system through the same",t.jsx("br",{}),"categories shown in the Storybook sidebar."]}),t.jsx("p",{className:"section-subtext",children:"Components, tokens, and Patterns are organized to help teams move from exploration to implementation without losing context."}),t.jsxs("div",{className:"cards-grid cards-grid-3",children:[t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"widgets"})}),t.jsx("h3",{className:"feature-card-title",children:"Components"}),t.jsx("p",{className:"feature-card-desc",children:"Form controls, navigation, feedback, and layout primitives designed for real government workflows."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Production-ready UI building blocks"}),t.jsx("li",{children:"Interactive states documented in Storybook"}),t.jsx("li",{children:"Consistent anatomy across surfaces"})]})]}),t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"style"})}),t.jsx("h3",{className:"feature-card-title",children:"Tokens"}),t.jsx("p",{className:"feature-card-desc",children:"Core design decisions captured as reusable color, typography, spacing, and semantic values."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Brand and neutral palettes"}),t.jsx("li",{children:"Semantic mappings for surfaces and states"}),t.jsx("li",{children:"A shared source of truth for scale"})]})]}),t.jsxs("div",{className:"map-card",children:[t.jsx("div",{className:"feature-card-icon",children:t.jsx("span",{className:"material-symbols-outlined",children:"dashboard_customize"})}),t.jsx("h3",{className:"feature-card-title",children:"Patterns"}),t.jsx("p",{className:"feature-card-desc",children:"Reusable block-level compositions like headers, footers, and complex forms used across applications."}),t.jsxs("ul",{className:"map-bullets",children:[t.jsx("li",{children:"Pre-built structural blocks"}),t.jsx("li",{children:"Streamlined composition"}),t.jsx("li",{children:"Accelerated feature delivery"})]})]})]})]}),t.jsxs("footer",{className:"welcome-footer",children:[t.jsx("div",{className:"footer-divider"}),t.jsxs("div",{className:"footer-content",children:[t.jsxs("div",{className:"footer-left",children:[t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"footer-logo"}),t.jsx("span",{className:"footer-tagline",children:"A shared platform for accessible, consistent, and reliable public digital products."})]}),t.jsxs("div",{className:"footer-right",children:[t.jsx("span",{className:"footer-visit-text",children:"Visit:"}),t.jsx("a",{href:"https://www.ux4g.gov.in",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"ux4g.gov.in"})]})]})]})]})}),Vp=[{heading:"UX4G React Native Design System",body:"The React Native design system is built to deliver consistent, accessible, and trusted digital experiences across public service applications. It provides 45+ components, design tokens, and a theming system that follows UX4G accessibility guidelines."},{heading:"How to use this documentation",body:`Browse components using the left sidebar. Click any component to see its use cases.
>>>>>>>> 2092639fff13624653ddc9de27a9a7da15fb82c1:storybook/dist/assets/index-n_yqVi96.js

• Preview tab — Live interactive component
• Code tab — Copy-ready React Native snippet
• Props tab — Parameter reference

`}],Ep=[{heading:"Depend on it",body:`Run this command:
With npm:`}],Ap=[{name:"React Native",version:">= 0.72.0",required:!0},{name:"React",version:">= 18.0.0",required:!0}],Dp=[{label:"Terminal",code:"npm install ux4g-react-native-design-system"},{label:`This will add a line like this to your package's package.json
(and run an implicit npm install):`,code:`"dependencies": {
  "ux4g-react-native-design-system": "^1.0.5"
}`}],Fp=[{heading:"Import it",body:"Now in your React Native code, you can use:"}],Bp=[{label:"",code:"import { Ux4gButton, Ux4gThemeProvider } from 'ux4g-react-native-design-system';"},{label:"Wrap your app with Ux4gThemeProvider",code:`import React from 'react';
import { Ux4gThemeProvider, Ux4gButton } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider>
      <Ux4gButton text='Submit' onPress={() => {}} />
    </Ux4gThemeProvider>
  );
}`},{label:"Use any component",code:`import { Ux4gButton } from 'ux4g-react-native-design-system';

const MyScreen = () => (
  <Ux4gButton text='Submit' onPress={() => {}} />
);`}],qp=({text:s,isDark:l})=>{const[d,m]=k.useState(!1),h=k.useCallback(async()=>{try{await navigator.clipboard.writeText(s)}catch{const b=document.createElement("textarea");b.value=s,b.style.position="fixed",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}m(!0),setTimeout(()=>m(!1),2e3)},[s]);return t.jsxs("button",{className:`qg-copy-btn ${l?"dark":""} ${d?"copied":""}`,onClick:h,type:"button",children:[d&&t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"20 6 9 17 4 12"})}),d?"Copied!":"Copy"]})},td=({block:s,isDark:l})=>t.jsxs("div",{className:"qg-code-wrap",children:[s.label&&t.jsx("div",{className:`qg-code-label ${l?"dark":""}`,children:s.label}),t.jsxs("div",{className:`qg-code-block ${l?"dark":""}`,children:[t.jsx("pre",{children:s.code}),t.jsx("div",{className:"qg-copy-corner",children:t.jsx(qp,{text:s.code,isDark:l})})]})]}),Ls=({section:s,isDark:l})=>t.jsxs("div",{className:"qg-section",children:[t.jsx("h3",{className:`qg-section-heading ${l?"dark":""}`,children:s.heading}),t.jsx("p",{className:`qg-section-body ${l?"dark":""}`,children:s.body})]}),zp=({isDark:s})=>t.jsxs("div",{className:"qg-section",children:[t.jsx("h3",{className:`qg-section-heading ${s?"dark":""}`,children:"Requirements"}),t.jsx("p",{className:`qg-section-body ${s?"dark":""}`,children:"Make sure your project meets the minimum versions below before installing. The package is built for React Native 0.72 and above — using an older version may cause runtime errors."}),t.jsxs("div",{className:"qg-req-table",children:[t.jsxs("div",{className:`qg-req-row qg-req-head ${s?"dark":""}`,children:[t.jsx("span",{className:"qg-req-cell qg-req-name",children:"Package"}),t.jsx("span",{className:"qg-req-cell qg-req-ver",children:"Minimum version"}),t.jsx("span",{className:"qg-req-cell qg-req-req",children:"Required"})]}),Ap.map(l=>t.jsxs("div",{className:`qg-req-row ${s?"dark":""}`,children:[t.jsx("span",{className:`qg-req-cell qg-req-name ${s?"dark":""}`,children:t.jsx("code",{children:l.name})}),t.jsx("span",{className:`qg-req-cell qg-req-ver ${s?"dark":""}`,children:t.jsx("code",{children:l.version})}),t.jsx("span",{className:`qg-req-cell qg-req-req ${s?"dark":""}`,children:l.required?t.jsx("span",{className:"qg-req-badge qg-req-badge-yes",children:"Yes"}):t.jsx("span",{className:"qg-req-badge qg-req-badge-opt",children:"Optional"})})]},l.name))]})]}),Ip=({isDark:s=!1,onNavigate:l})=>t.jsx("div",{className:`qg-page ${s?"dark":""}`,children:t.jsxs("div",{className:"qg-content",children:[t.jsx("h1",{className:`qg-title ${s?"dark":""}`,children:"Quick Start Guide"}),t.jsx("div",{className:"qg-accent"}),Vp.map(d=>t.jsx(Ls,{section:d,isDark:s},d.heading)),t.jsx(zp,{isDark:s}),Ep.map(d=>t.jsx(Ls,{section:d,isDark:s},d.heading)),Dp.map((d,m)=>t.jsx(td,{block:d,isDark:s},m)),Fp.map(d=>t.jsx(Ls,{section:d,isDark:s},d.heading)),Bp.map((d,m)=>t.jsx(td,{block:d,isDark:s},m))]})}),K={gray100:"#F5F5F5",gray200:"#EEEEEE",gray800:"#333333",gray900:"#121212",primary:"#4A2BC2",primary50:"#F2EFFF",primary100:"#DCD4FF",primary200:"#C0B3FF",primary300:"#A391FF",primary400:"#8670FF",primary500:"#6A4EFF",primary600:"#4A2BC2",primary700:"#3D239F",primary800:"#301C7D",primary900:"#24145C",primary950:"#1A0E3D",primary50A:"#F2EFFF40",primary100A:"#DCD4FF40",primary200A:"#C0B3FF40",primary300A:"#A391FF40",primary400A:"#8670FF40",primary500A:"#6A4EFF40",primary600A:"#4A2BC240",primary700A:"#3D239F40",primary800A:"#301C7D40",primary900A:"#24145C40",primary950A:"#1A0E3D40",secondary:"#A46800",secondary50:"#FFF5EA",secondary100:"#FFEBD6",secondary200:"#FFD9AF",secondary300:"#FFBE6F",secondary400:"#E89C30",secondary500:"#C47D00",secondary600:"#A46800",secondary700:"#764A00",secondary800:"#4B2D00",secondary900:"#281600",secondary950:"#110700",secondary50A:"#FFF5EA40",secondary100A:"#FFEBD640",secondary200A:"#FFD9AF40",secondary300A:"#FFBE6F40",secondary400A:"#E89C3040",secondary500A:"#C47D0040",secondary600A:"#A4680040",secondary700A:"#764A0040",secondary800A:"#4B2D0040",secondary900A:"#28160040",secondary950A:"#11070040",tertiary:"#8E55B3",tertiary50:"#F6EFFB",tertiary100:"#E9DAF3",tertiary200:"#D9BFEA",tertiary300:"#C8A3E0",tertiary400:"#B686D6",tertiary500:"#A66ACC",tertiary600:"#8E55B3",tertiary700:"#75419A",tertiary800:"#5D2F80",tertiary900:"#462166",tertiary950:"#32174A",tertiary50A:"#F6EFFB40",tertiary100A:"#E9DAF340",tertiary200A:"#D9BFEA40",tertiary300A:"#C8A3E040",tertiary400A:"#B686D640",tertiary500A:"#A66ACC40",tertiary600A:"#8E55B340",tertiary700A:"#75419A40",tertiary800A:"#5D2F8040",tertiary900A:"#46216640",tertiary950A:"#32174A40",neutral0:"#FFFFFF",neutral50:"#FAFAFA",neutral100:"#F5F5F5",neutral200:"#E5E5E5",neutral300:"#D9D9D9",neutral400:"#A1A1A1",neutral500:"#737373",neutral600:"#525252",neutral700:"#404040",neutral800:"#262626",neutral900:"#171717",neutral950:"#0A0A0A",neutral1000black:"#000000",neutral0A:"#FFFFFF40",neutral50A:"#FAFAFA40",neutral100A:"#F5F5F540",neutral200A:"#E5E5E540",neutral300A:"#D9D9D940",neutral400A:"#A1A1A140",neutral500A:"#73737340",neutral600A:"#52525240",neutral700A:"#40404040",neutral800A:"#26262640",neutral900A:"#17171740",neutral950A:"#0A0A0A40",neutral1000A:"#00000040",neutral0B:"#FFFFFFB3",neutral950B:"#0A0A0AB3",red:"#DB372D",red50:"#FFF8F8",red100:"#FFECEE",red200:"#FFDADC",red300:"#FFB3AE",red400:"#FF8983",red500:"#F55E57",red600:"#DB372D",red700:"#B3251E",red800:"#8A1A16",red900:"#60150F",red950:"#3A0907",blue:"#3271EA",blue50:"#F5FAFF",blue100:"#E7F2FF",blue200:"#D0E4FF",blue300:"#A1C9FF",blue400:"#76ACFF",blue500:"#4E8FF8",blue600:"#3271EA",blue700:"#1157CE",blue800:"#04409F",blue900:"#012C6F",blue950:"#001944",skyBlue:"#0081A8",skyBlue50:"#F4FAFF",skyBlue100:"#E0F4FF",skyBlue200:"#BDE9FF",skyBlue300:"#67D4FF",skyBlue400:"#00BBEA",skyBlue500:"#009DC9",skyBlue600:"#0081A8",skyBlue700:"#006788",skyBlue800:"#004D68",skyBlue900:"#003549",skyBlue950:"#001F2D",cyan:"#13C2C2",cyan50:"#E6FFFB",cyan100:"#C9F7F2",cyan200:"#ADF0E9",cyan300:"#91E8E0",cyan400:"#75E0D7",cyan500:"#59D8CE",cyan600:"#13C2C2",cyan700:"#08979C",cyan800:"#006D75",cyan900:"#00474F",cyan950:"#002329",green:"#128937",green50:"#F2FCEF",green100:"#DDF8D8",green200:"#BEEFBB",green300:"#80DA88",green400:"#44C265",green500:"#1AA64A",green600:"#128937",green700:"#006C35",green800:"#00522C",green900:"#00381F",green950:"#002110",lime:"#A0D911",lime50:"#FCFFE6",lime100:"#F2FFBF",lime200:"#E8FF99",lime300:"#DEFF73",lime400:"#D4F24D",lime500:"#CAE827",lime600:"#A0D911",lime700:"#7CB305",lime800:"#5B8C00",lime900:"#3F6600",lime950:"#254000",yellow:"#FADB14",yellow50:"#FEFFE6",yellow100:"#FFFBC2",yellow200:"#FFF29C",yellow300:"#FFE976",yellow400:"#FFE050",yellow500:"#FFD72A",yellow600:"#FADB14",yellow700:"#D4B106",yellow800:"#AD8B00",yellow900:"#876800",yellow950:"#614700",gold:"#F2A90F",gold50:"#FFFBE6",gold100:"#FFF2BF",gold200:"#FFE799",gold300:"#FFDB73",gold400:"#FFCF4D",gold500:"#FFC327",gold600:"#F2A90F",gold700:"#D98A00",gold800:"#B36B00",gold900:"#8C4D00",gold950:"#613400",orange:"#FA8C16",orange50:"#FFF7E6",orange100:"#FFE7BF",orange200:"#FFD899",orange300:"#FFC973",orange400:"#FFBA4D",orange500:"#FFAB27",orange600:"#FA8C16",orange700:"#D46B08",orange800:"#AD4E00",orange900:"#873800",orange950:"#612500",purple:"#9254EA",purple50:"#FDF8FF",purple100:"#F7ECFE",purple200:"#EEDCFE",purple300:"#D9BAFD",purple400:"#C597FF",purple500:"#AD72FF",purple600:"#9254EA",purple700:"#7438D2",purple800:"#5629A4",purple900:"#400B84",purple950:"#280255",pink:"#DC258D",pink50:"#FFF7FC",pink100:"#FFECF6",pink200:"#FFD8EF",pink300:"#FFAEE4",pink400:"#FF7DD2",pink500:"#F94AAB",pink600:"#DC258D",pink700:"#B60D6E",pink800:"#8D0053",pink900:"#620438",pink950:"#3D0023",white:"#FFFFFF",transparent:"rgba(0, 0, 0, 0)"},Xs={primary:K.primary600,onPrimary:K.neutral50,secondary:K.secondary600,onSecondary:K.white,background:K.neutral50,onBackground:K.neutral900,surface:K.white,onSurface:K.neutral900,error:K.red600,onError:K.neutral50,success:K.green600,onSuccess:K.neutral50,warning:K.orange600,onWarning:K.neutral900,info:K.cyan600,onInfo:K.neutral50},ud={primary:K.primary300,onPrimary:K.neutral900,secondary:K.secondary300,onSecondary:K.neutral900,background:K.neutral900,onBackground:K.neutral50,surface:K.neutral950,onSurface:K.neutral50,error:K.red300,onError:K.neutral900,success:K.green500,onSuccess:K.neutral900,warning:K.orange500,onWarning:K.neutral900,info:K.cyan500,onInfo:K.neutral900},G={hXXS_default:{fontWeight:"600",fontSize:14,lineHeight:16},hXXS_strong:{fontWeight:"700",fontSize:14,lineHeight:16},hXS_default:{fontWeight:"600",fontSize:16,lineHeight:20},hXS_strong:{fontWeight:"700",fontSize:16,lineHeight:20},hS_default:{fontWeight:"600",fontSize:20,lineHeight:24},hS_strong:{fontWeight:"700",fontSize:20,lineHeight:24},hM_default:{fontWeight:"600",fontSize:24,lineHeight:28},hM_strong:{fontWeight:"700",fontSize:24,lineHeight:28},hL_default:{fontWeight:"600",fontSize:28,lineHeight:32},hL_strong:{fontWeight:"700",fontSize:28,lineHeight:32},hXL_default:{fontWeight:"600",fontSize:32,lineHeight:36},hXL_strong:{fontWeight:"700",fontSize:32,lineHeight:36},hXXL_default:{fontWeight:"600",fontSize:40,lineHeight:44},hXXL_strong:{fontWeight:"700",fontSize:40,lineHeight:44},dXS_default:{fontWeight:"600",fontSize:36,lineHeight:44},dXS_strong:{fontWeight:"700",fontSize:36,lineHeight:44},dS_default:{fontWeight:"600",fontSize:40,lineHeight:52},dS_strong:{fontWeight:"700",fontSize:40,lineHeight:52},dM_default:{fontWeight:"600",fontSize:52,lineHeight:72},dM_strong:{fontWeight:"700",fontSize:52,lineHeight:72},dL_default:{fontWeight:"600",fontSize:60,lineHeight:80},dL_strong:{fontWeight:"700",fontSize:60,lineHeight:80},bXS_default:{fontWeight:"500",fontSize:11,lineHeight:14},bXS_strong:{fontWeight:"700",fontSize:11,lineHeight:14},bS_default:{fontWeight:"500",fontSize:12,lineHeight:16},bS_strong:{fontWeight:"700",fontSize:12,lineHeight:16},bM_default:{fontWeight:"500",fontSize:14,lineHeight:18},bM_strong:{fontWeight:"700",fontSize:14,lineHeight:18},bL_default:{fontWeight:"500",fontSize:16,lineHeight:20},bL_strong:{fontWeight:"700",fontSize:16,lineHeight:20},lS_default:{fontWeight:"500",fontSize:11,lineHeight:14},lS_strong:{fontWeight:"700",fontSize:11,lineHeight:14},lM_default:{fontWeight:"500",fontSize:12,lineHeight:16},lM_strong:{fontWeight:"700",fontSize:12,lineHeight:16},lL_default:{fontWeight:"500",fontSize:14,lineHeight:18},lL_strong:{fontWeight:"700",fontSize:14,lineHeight:18},lXL_default:{fontWeight:"500",fontSize:16,lineHeight:20},lXL_strong:{fontWeight:"700",fontSize:16,lineHeight:20},tS_default:{fontWeight:"400",fontSize:14,lineHeight:20},tS_strong:{fontWeight:"600",fontSize:14,lineHeight:20},tM_default:{fontWeight:"400",fontSize:16,lineHeight:24},tM_strong:{fontWeight:"600",fontSize:16,lineHeight:24},tL_default:{fontWeight:"400",fontSize:18,lineHeight:24},tL_strong:{fontWeight:"600",fontSize:18,lineHeight:24}},Hs={spaceNone:0,space2:2,space4:4,space6:6,space8:8,space12:12,space16:16,space20:20,space24:24,space32:32,space40:40,space48:48,space56:56,space64:64,space80:80},Gs={radiusNone:0,radius2:2,radius4:4,radius8:8,radius12:12,radius16:16,radius24:24,radius999:999},Qs={none:0,thin:1,thick:2,thicker:3,thickest:4},Rp={isDark:!1,colors:Xs,typography:G,space:Hs,radius:Gs,borderWidth:Qs,setTheme:()=>{},toggleTheme:()=>{}},$p=k.createContext(Rp),J=({children:s,isDark:l=!1,colors:d,typography:m})=>{const[h,b]=k.useState(l);k.useEffect(()=>{b(l)},[l]);const x=()=>{b(p=>!p)},i=p=>{b(p)},w=k.useMemo(()=>{const p=h?ud:Xs,T=d?{...p,...d}:p,A=m?{...G,...m}:G;return{isDark:h,colors:T,typography:A,space:Hs,radius:Gs,borderWidth:Qs,setTheme:i,toggleTheme:x}},[h,d,m]);return t.jsx($p.Provider,{value:w,children:s})};function Lp(s){const l=s.split(`
`);return l.map((d,m)=>{const h=[];let b=d,x=0;const i=(w,p)=>{h.push(t.jsx("span",{className:p,children:w},`${m}-${x++}`))};for(;b.length>0;){const w=b.match(/^(\/\/.*)/);if(w){i(w[1],"token-comment"),b=b.slice(w[1].length);continue}const p=b.match(/^(<\/?)([\w.]+)/);if(p){i(p[1],"token-bracket"),i(p[2],"token-tag"),b=b.slice(p[0].length);continue}const T=b.match(/^(\/?>)/);if(T){i(T[1],"token-bracket"),b=b.slice(T[1].length);continue}const A=b.match(/^(\w+)(=)("[^"]*"|'[^']*')/);if(A){i(A[1],"token-attr"),i(A[2],"token-bracket"),i(A[3],"token-string"),b=b.slice(A[0].length);continue}const B=b.match(/^(\w+)(=\{)([^}]*)(})/);if(B){i(B[1],"token-attr"),i(B[2],"token-bracket");const Y=B[3];Y==="true"||Y==="false"?i(Y,"token-bool"):/^\d+$/.test(Y)?i(Y,"token-number"):Y.includes("=>")?i(Y,"token-func"):i(Y,"token-string"),i(B[4],"token-bracket"),b=b.slice(B[0].length);continue}const z=b.match(/^("[^"]*"|'[^']*')/);if(z){i(z[1],"token-string"),b=b.slice(z[1].length);continue}const F=b.match(/^(import|export|from|const|let|var|return)\b/);if(F){i(F[1],"token-tag"),b=b.slice(F[1].length);continue}h.push(t.jsx("span",{children:b[0]},`${m}-${x++}`)),b=b.slice(1)}return t.jsxs(La.Fragment,{children:[h,m<l.length-1?`
`:""]},m)})}const Q=({code:s,language:l="TSX",filename:d})=>{const[m,h]=k.useState(!1),b=k.useCallback(async()=>{try{await navigator.clipboard.writeText(s),h(!0),setTimeout(()=>h(!1),2e3)}catch{const i=document.createElement("textarea");i.value=s,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),h(!0),setTimeout(()=>h(!1),2e3)}},[s]),x=Lp(s.trim());return t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsxs("div",{className:"code-header-left",children:[t.jsx("span",{className:"code-lang-badge",children:l}),d&&t.jsx("span",{className:"code-filename",children:d})]}),t.jsx("button",{className:`copy-btn ${m?"copied":""}`,onClick:b,children:m?t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):t.jsxs(t.Fragment,{children:[t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),t.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy"]})})]}),t.jsx("div",{className:"code-body",children:t.jsx("pre",{children:x})})]})},Wp=({isDark:s,story:l="button-primary"})=>{const[d,m]=k.useState("preview"),[h,b]=k.useState("medium"),[x,i]=k.useState("Primary Button"),[w,p]=k.useState(!0),[T,A]=k.useState(!1),[B,z]=k.useState("primary"),F=k.useMemo(()=>{const re=[];return re.push("import { Ux4gButton } from 'ux4g-react-native-design-system';"),re.push(""),re.push("<Ux4gButton"),B!=="primary"&&re.push(`  variant="${B}"`),h!=="medium"&&re.push(`  size="${h}"`),re.push(`  text="${x}"`),w||re.push("  enabled={false}"),T&&re.push("  isLoading={true}"),re.push(`  onPress={() => console.log("Button pressed")}
/>`),re.join(`
`)},[B,h,x,w,T]),Y=()=>{let re="";l==="button-introduction"?re=`        <Ux4gButton text="Primary Button" variant="primary" size="${h}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Tonal Button" variant="primary" backgroundColor={${s?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${s?"UX4GColors.primary50":"UX4GColors.primary600"}} size="${h}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Outline Button" variant="outline" size="${h}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Ghost Button" variant="ghost" size="${h}" enabled={${w}} isLoading={${T}} />`:l==="button-variants"?re=`        <Ux4gButton text="Primary" variant="primary" size="${h}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Tonal" variant="primary" backgroundColor={${s?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${s?"UX4GColors.primary50":"UX4GColors.primary600"}} size="${h}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Secondary" variant="secondary" size="${h}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Outline" variant="outline" size="${h}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Ghost" variant="ghost" size="${h}" enabled={${w}} isLoading={${T}} />`:l==="button-sizes"?re=`        <Ux4gButton text="Small" size="small" variant="${B}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Medium" size="medium" variant="${B}" enabled={${w}} isLoading={${T}} />
        <Ux4gButton text="Large" size="large" variant="${B}" enabled={${w}} isLoading={${T}} />`:re=`        <Ux4gButton
          variant="${B}"
          size="${h}"
          text="${x}"
          enabled={${w}}
          isLoading={${T}}
          onPress={() => console.log("Button pressed")}
        />`;const _e=`import React from 'react';
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
});`,$e=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(_e)}`;return t.jsx("iframe",{src:$e,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},ae=[{name:"text",type:"string",default:"undefined",desc:"Text label inside the button.",required:!1},{name:"children",type:"ReactNode",default:"undefined",desc:"Custom child content overriding/supplementing text.",required:!1},{name:"variant",type:"'primary' | 'secondary' | 'outline' | 'ghost'",default:"'primary'",desc:"Visual button style variant.",required:!1},{name:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"Button sizing preset.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether button is interactive and enabled.",required:!1},{name:"isLoading",type:"boolean",default:"false",desc:"Shows spinner and prevents press.",required:!1},{name:"backgroundColor",type:"string",default:"variant-based token",desc:"Background color override.",required:!1},{name:"contentColor",type:"string",default:"variant-based token",desc:"Foreground text/icon color override.",required:!1},{name:"disabledBackgroundColor",type:"string",default:"computed disabled color",desc:"Background color override when disabled.",required:!1},{name:"disabledContentColor",type:"string",default:"computed disabled color",desc:"Foreground color override when disabled.",required:!1},{name:"borderColor",type:"string",default:"variant-based token",desc:"Border color override.",required:!1},{name:"borderWidth",type:"number",default:"variant-based",desc:"Border width override.",required:!1},{name:"borderRadius",type:"number",default:"theme.radius.radius8",desc:"Corner radius override.",required:!1},{name:"paddingHorizontal",type:"number",default:"size-based",desc:"Horizontal padding override.",required:!1},{name:"paddingVertical",type:"number",default:"size-based",desc:"Vertical padding override.",required:!1},{name:"leadingIcon",type:"Ux4gIconProp",default:"undefined",desc:"Icon rendered before text.",required:!1},{name:"trailingIcon",type:"Ux4gIconProp",default:"undefined",desc:"Icon rendered after text.",required:!1},{name:"iconSize",type:"number",default:"size-based",desc:"Explicit icon size override.",required:!1},{name:"width",type:"DimensionValue",default:"undefined",desc:"Explicit width.",required:!1},{name:"height",type:"number",default:"size-based",desc:"Explicit height.",required:!1},{name:"elevation",type:"number",default:"0",desc:"Android elevation / iOS shadow depth.",required:!1},{name:"style",type:"StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>",default:"undefined",desc:"Style override for button container.",required:!1},{name:"contentContainerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for inner content row.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"onPress",type:"() => void",default:"required",desc:"Press handler callback.",required:!0},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Button"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Button trigger an action or event, such as submitting a form, opening a dialog or performing a specific task. It provide users with a clear Call to Action (CTA), guiding them through a workflow."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:Y()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:F,language:"TSX",filename:"ButtonExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:ae.map(re=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[re.name,re.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:re.type})}),t.jsx("td",{children:re.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:re.default})})]},re.name))})]})})]})]})})]})},Mp=({isDark:s})=>{const[l,d]=k.useState("preview"),h=`import React from 'react';
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
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${`        <View style={styles.row}>
          <Ux4gButton text="Primary" variant="primary" />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${s?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${s?"UX4GColors.primary50":"UX4GColors.primary600"}} />
          <Ux4gButton text="Outline" variant="outline" />
          <Ux4gButton text="Ghost" variant="ghost" />
        </View>

        <View style={styles.row}>
          <Ux4gButton text="Button" variant="primary" isLoading={true} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${s?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${s?"UX4GColors.primary50":"UX4GColors.primary600"}} isLoading={true} />
          <Ux4gButton text="Button" variant="outline" isLoading={true} />
          <Ux4gButton text="Button" variant="ghost" isLoading={true} />
        </View>

        <View style={styles.row}>
          <Ux4gButton text="Button" variant="primary" leadingIcon={PlusIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${s?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${s?"UX4GColors.primary50":"UX4GColors.primary600"}} leadingIcon={PlusIcon} />
          <Ux4gButton text="Button" variant="primary" trailingIcon={ArrowIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${s?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${s?"UX4GColors.primary50":"UX4GColors.primary600"}} trailingIcon={ArrowIcon} />
          <Ux4gButton text="Button" variant="primary" leadingIcon={PlusIcon} trailingIcon={ArrowIcon} />
          <Ux4gButton text="Tonal" variant="primary" backgroundColor={${s?"UX4GColors.primary700":"UX4GColors.primary50"}} contentColor={${s?"UX4GColors.primary50":"UX4GColors.primary600"}} leadingIcon={PlusIcon} trailingIcon={ArrowIcon} />
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
    backgroundColor: ${s?"UX4GColors.neutral900":"UX4GColors.neutral100"}
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  }
});`,b=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gButton%20Showcase&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(h)}`;return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Button Showcase"}),t.jsx("span",{className:"wb-badge",children:"Showcase"})]}),t.jsx("p",{className:"wb-subtitle",children:"A full grid showcase of button variants, matching the Flutter widgetbook layout."})]}),t.jsx("div",{className:"wb-body",style:{display:"block"},children:t.jsxs("div",{className:"wb-main",style:{width:"100%"},children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${l==="preview"?"active":""}`,onClick:()=>d("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${l==="code"?"active":""}`,onClick:()=>d("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]})]}),t.jsx("div",{className:"wb-content",children:l==="preview"?t.jsx("iframe",{src:b,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"}):t.jsx("pre",{style:{padding:16,backgroundColor:s?"#1e1e1e":"#f5f5f5",borderRadius:8,overflow:"auto"},children:t.jsx("code",{children:h})})})]})})]})},_p=({isDark:s})=>{const[l,d]=k.useState("preview"),[m,h]=k.useState("primary"),[b,x]=k.useState(40),[i,w]=k.useState(!0),[p,T]=k.useState(!1),A=k.useMemo(()=>{const F=[];return F.push("import { Ux4gIconButton } from 'ux4g-react-native-design-system';"),F.push("import Svg, { Path } from 'react-native-svg';"),F.push(""),F.push("const HeartIcon = ({ color, size }: any) => ("),F.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>'),F.push('    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>'),F.push("  </Svg>"),F.push(");"),F.push(""),F.push("const ShareIcon = ({ color, size }: any) => ("),F.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">'),F.push('    <Path d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />'),F.push("  </Svg>"),F.push(");"),F.push(""),F.push("const TrashIcon = ({ color, size }: any) => ("),F.push('  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">'),F.push('    <Path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />'),F.push("  </Svg>"),F.push(");"),F.push(""),F.push("<View style={styles.row}>"),F.push("  <Ux4gIconButton"),F.push("    icon={HeartIcon}"),F.push('    variant="primary"'),b!==40&&F.push(`    size={${b}}`),i||F.push("    enabled={false}"),p&&F.push("    isLoading={true}"),F.push("  />"),F.push("  <Ux4gIconButton"),F.push("    icon={ShareIcon}"),F.push('    variant="outline"'),b!==40&&F.push(`    size={${b}}`),i||F.push("    enabled={false}"),p&&F.push("    isLoading={true}"),F.push("  />"),F.push("  <Ux4gIconButton"),F.push("    icon={TrashIcon}"),F.push('    variant="ghost"'),b!==40&&F.push(`    size={${b}}`),i||F.push("    enabled={false}"),p&&F.push("    isLoading={true}"),F.push("  />"),F.push("</View>"),F.join(`
`)},[m,b,i,p]),B=()=>{const Y=`import React from 'react';
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
    <Ux4gThemeProvider isDark={${s}}>
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
    backgroundColor: ${s?"UX4GColors.neutral900":"UX4GColors.neutral50"}
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32
  }
});`,ae=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gIconButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(Y)}`;return t.jsx("iframe",{src:ae,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},z=[{name:"icon",type:"Ux4gIconProp",default:"—",desc:"Icon element or callback ({ color, size }) => ReactNode.",required:!0},{name:"isLoading",type:"boolean",default:"false",desc:"Displays spinner instead of icon.",required:!1},{name:"variant",type:"'primary' | 'secondary' | 'outline' | 'ghost'",default:"'primary'",desc:"Visual button style variant.",required:!1},{name:"size",type:"number",default:"40",desc:"Square width and height in points.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether icon button is interactive.",required:!1},{name:"backgroundColor",type:"string",default:"variant-based token",desc:"Background color override.",required:!1},{name:"contentColor",type:"string",default:"variant-based token",desc:"Icon foreground color override.",required:!1},{name:"borderColor",type:"string",default:"variant-based token",desc:"Border color override.",required:!1},{name:"borderRadius",type:"number",default:"theme.radius.radius8",desc:"Corner radius override.",required:!1},{name:"elevation",type:"number",default:"0",desc:"Android elevation/iOS shadow depth.",required:!1},{name:"style",type:"StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>",default:"undefined",desc:"Style override for icon button container.",required:!1},{name:"onPress",type:"() => void",default:"required",desc:"Press handler callback.",required:!0},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"IconButton"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Icon button contain only an icon and do not include text labels. It is used to represent common actions in a compact and visually accessible way."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",style:{display:"block"},children:t.jsxs("div",{className:"wb-main",style:{width:"100%"},children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${l==="preview"?"active":""}`,onClick:()=>d("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${l==="code"?"active":""}`,onClick:()=>d("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${l==="props"?"active":""}`,onClick:()=>d("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"list_alt"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[l==="preview"&&B(),l==="code"&&t.jsx("pre",{style:{padding:16,backgroundColor:s?"#1e1e1e":"#f5f5f5",borderRadius:8,overflow:"auto"},children:t.jsx("code",{children:A})}),l==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:z.map(F=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[F.name,F.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:F.type})}),t.jsx("td",{children:F.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:F.default})})]},F.name))})]})})]})]})})]})},Op=({isDark:s,story:l="date-picker-single"})=>{const[d,m]=k.useState("preview"),[h,b]=k.useState("single"),[x,i]=k.useState("Select Date"),[w,p]=k.useState(!0),T=k.useMemo(()=>{const z=[];return z.push("import { Ux4gDatePicker } from 'ux4g-react-native-design-system';"),z.push(""),z.push("<Ux4gDatePicker"),z.push(`  mode="${h}"`),z.push(`  label="${x}"`),w||z.push("  enabled={false}"),z.push("/>"),z.join(`
`)},[h,x,w]),A=()=>{let z="";l==="date-picker-single"?z=`        <Ux4gDatePicker mode="single" label="Single Date Picker" enabled={${w}} />`:l==="date-picker-range"?z=`        <Ux4gDatePicker mode="range" label="Date Range Picker" enabled={${w}} />`:z=`        <Ux4gDatePicker
          mode="${h}"
          label="${x}"
          enabled={${w}}
        />`;const F=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gDatePicker, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
${z}
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
});`,Y=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gDatePicker%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(F)}`;return t.jsx("iframe",{src:Y,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},B=[{name:"mode",type:"'single' | 'range'",default:"'single'",desc:"Date selection mode.",required:!1},{name:"initialDate",type:"Date",default:"undefined",desc:"Initial selected date in single mode.",required:!1},{name:"initialDateRange",type:"DateRange",default:"undefined",desc:"Initial selected date range in range mode.",required:!1},{name:"minDate",type:"Date",default:"undefined",desc:"Minimum selectable date.",required:!1},{name:"maxDate",type:"Date",default:"undefined",desc:"Maximum selectable date.",required:!1},{name:"onDateSelected",type:"(date: Date) => void",default:"undefined",desc:"Callback fired when a single date is selected.",required:!1},{name:"onDateRangeSelected",type:"(range: DateRange) => void",default:"undefined",desc:"Callback fired when a date range is selected.",required:!1},{name:"placeholder",type:"string",default:"'Select date'",desc:"Placeholder text shown when no value is selected.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether interaction is enabled.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Label text above the field.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Caption/helper text below the field.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Shows required asterisk next to label.",required:!1},{name:"required",type:"boolean",default:"false",desc:"Alias of `isRequired`.",required:!1},{name:"status",type:"Ux4gInputFieldStatus",default:"'defaultStatus'",desc:"Status variant for border/caption color.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer container.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Date Picker"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Date Picker allows users to select a specific date or a range of dates from a calendar interface."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:A()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:T,language:"TSX",filename:"DatePickerExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:B.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[z.name,z.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:z.type})}),t.jsx("td",{children:z.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:z.default})})]},z.name))})]})})]})]})})]})},Xp=({isDark:s,story:l="dropdown-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { Ux4gSelectionDropdown } from 'ux4g-react-native-design-system';"),i.push("import { useState } from 'react';"),i.push(""),i.push("// Complete Interactive Dropdown"),i.push('const [selected, setSelected] = useState<string[]>(["1"]);'),i.push(""),i.push("<Ux4gSelectionDropdown"),i.push('  label="Select Framework"'),i.push('  placeholder="Choose an option..."'),i.push("  options={["),i.push('    { id: "1", label: "React Native CLI" },'),i.push('    { id: "2", label: "Expo" },'),i.push('    { id: "3", label: "Flutter" }'),i.push("  ]}"),i.push("  selectedOptionIds={selected}"),i.push("  onSelectionChange={setSelected}"),i.push("/>"),i.push(""),i.push("// Multi-Select Searchable Dropdown"),i.push('const [selectedMulti, setSelectedMulti] = useState<string[]>(["1", "2"]);'),i.push("<Ux4gSelectionDropdown"),i.push('  label="Select Technologies"'),i.push('  mode="multi"'),i.push("  searchEnabled={true}"),i.push("  options={["),i.push('    { id: "1", label: "React Native" },'),i.push('    { id: "2", label: "TypeScript" },'),i.push('    { id: "3", label: "Storybook" }'),i.push("  ]}"),i.push("  selectedOptionIds={selectedMulti}"),i.push("  onSelectionChange={setSelectedMulti}"),i.push("/>"),i.join(`
`)},[]),b=()=>{let i="";l==="dropdown-multi"?i=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedIds, setSelectedIds] = useState(['1', '2']);

  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`:l==="dropdown-search"?i=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [selectedIds, setSelectedIds] = useState(['in']);

  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`:l==="dropdown-status"?i=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [errSelected, setErrSelected] = useState([]);
  const [succSelected, setSuccSelected] = useState(['1']);

  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`:i=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSelectionDropdown, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [singleSelected, setSingleSelected] = useState(['1']);
  const [multiSelected, setMultiSelected] = useState(['1', '2']);

  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`;const w=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gDropdown%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(i)}`;return t.jsx("iframe",{src:w,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Dropdown Interactive Preview"})},x=[{name:"options",type:"Ux4gDropdownOption[]",default:"required",desc:"List of selectable dropdown options.",required:!0},{name:"selectedOptionIds",type:"string[]",default:"required",desc:"Currently selected option IDs.",required:!0},{name:"onSelectionChange",type:"(selectedOptionIds: string[]) => void",default:"required",desc:"Callback fired when selection changes.",required:!0},{name:"label",type:"string",default:"undefined",desc:"Label text displayed above dropdown box.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Helper/error text displayed below dropdown box.",required:!1},{name:"placeholder",type:"string",default:"'Please select..'",desc:"Placeholder shown when nothing is selected.",required:!1},{name:"size",type:"'s' | 'm' | 'l'",default:"'m'",desc:"Dropdown field size preset.",required:!1},{name:"mode",type:"'single' | 'multi'",default:"'single'",desc:"Selection mode.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'disabled'",default:"'defaultStatus'",desc:"Validation/disabled status.",required:!1},{name:"searchEnabled",type:"boolean",default:"false",desc:"Shows search input inside dropdown menu.",required:!1},{name:"filterType",type:"'contains' | 'startsWith' | 'startsWithPerTerm'",default:"'contains'",desc:"Search filter matching strategy.",required:!1},{name:"labelTextStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"valueTextStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for selected value text.",required:!1},{name:"leadingIcon",type:"ReactNode",default:"undefined",desc:"Leading icon/content inside dropdown trigger.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Dropdown"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Collapsible selection menu supporting single choice, multi-select tag chips, search filtering, and form validation states."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"DropdownExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},Hp=s=>s==="input-aadhaar"?"input-aadhaar-basic":s==="input-pan"?"input-pan-basic":s==="input-otp"?"input-otp-basic":["input-basic","input-status","input-password","input-icons","input-aadhaar-basic","input-aadhaar-varients","input-pan-basic","input-pan-varients","input-otp-basic","input-otp-varients","input-prefix-postfix","input-required-disabled"].includes(s)?s:"input-basic",Gp={"input-basic":{title:"Input Field",description:"Basic text field with label and helper description."},"input-status":{title:"Input Field",description:"Validation states shown separately: error, default, success, warning, and disabled."},"input-password":{title:"Input Field",description:"Password field with built-in visibility toggle."},"input-icons":{title:"Input Field",description:"Leading icon, trailing icon, and both-icons variants shown as separate rows."},"input-aadhaar-basic":{title:"Input Aadhaar",description:"Specialized Aadhaar input with auto-formatting and built-in validation behavior."},"input-aadhaar-varients":{title:"Input Aadhaar",description:"State variants for Aadhaar input: default, error, success, and disabled."},"input-pan-basic":{title:"Input Pan",description:"Specialized PAN input with auto-uppercase and built-in validation behavior."},"input-pan-varients":{title:"Input Pan",description:"State variants for PAN input: default, error, success, and disabled."},"input-otp-basic":{title:"Input Otp",description:"OTP input for code verification with configurable length and caption behavior."},"input-otp-varients":{title:"Input Otp",description:"State variants for OTP input: default, error, success, and locked/disabled."},"input-prefix-postfix":{title:"Input Field",description:"Amount and website examples using prefix/postfix and semantic placeholders."},"input-required-disabled":{title:"Input Field",description:"Disabled identifier field with a required text field below."}},Qp=s=>s==="input-status"?`import React, { useState } from 'react';
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
}`:s==="input-password"?`import React, { useState } from 'react';
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
}`:s==="input-icons"?`import React, { useState } from 'react';
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
}`:s==="input-prefix-postfix"?`import React, { useState } from 'react';
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
}`:s==="input-aadhaar-basic"?`import React, { useState } from 'react';
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
}`:s==="input-aadhaar-varients"?`import React, { useState } from 'react';
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
}`:s==="input-pan-basic"?`import React, { useState } from 'react';
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
}`:s==="input-pan-varients"?`import React, { useState } from 'react';
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
}`:s==="input-otp-basic"?`import React, { useState } from 'react';
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
}`:s==="input-otp-varients"?`import React, { useState } from 'react';
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
}`:s==="input-required-disabled"?`import React, { useState } from 'react';
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
}`,Yp=s=>s==="input-status"?`        <Ux4gInputField value={errorValue} onValueChange={setErrorValue} label='Label' placeholder='Placeholder' status='error' caption='Error message' />
        <View style={styles.gap} />
        <Ux4gInputField value={defaultValue} onValueChange={setDefaultValue} label='Label' placeholder='Placeholder' status='defaultStatus' caption='Description' />
        <View style={styles.gap} />
        <Ux4gInputField value={successValue} onValueChange={setSuccessValue} label='Label' placeholder='Placeholder' status='success' caption='Success message' />
        <View style={styles.gap} />
        <Ux4gInputField value={warningValue} onValueChange={setWarningValue} label='Label' placeholder='Placeholder' status='warning' caption='Warning message' />
        <View style={styles.gap} />
        <Ux4gInputField value={disabledValue} onValueChange={setDisabledValue} label='Label' placeholder='Placeholder' enabled={false} caption='Description' />`:s==="input-password"?`        <Ux4gInputField
          value={password}
          onValueChange={setPassword}
          label='Password'
          placeholder='Enter your password'
          type='password'
        />`:s==="input-icons"?`        <>
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
        </>`:s==="input-prefix-postfix"?`        <Ux4gInputField
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
        />`:s==="input-aadhaar-basic"?`        <Ux4gAadhaarInputField
          value={aadhaar}
          onValueChange={setAadhaar}
          label='Aadhaar Number'
          placeholder='XXXX XXXX XXXX'
          required={true}
        />`:s==="input-aadhaar-varients"?`        <Ux4gAadhaarInputField
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
        />`:s==="input-pan-basic"?`        <Ux4gPanInputField
          value={pan}
          onValueChange={setPan}
          label='PAN Card Number'
          placeholder='ABCDE1234F'
          required={true}
        />`:s==="input-pan-varients"?`        <Ux4gPanInputField
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
        />`:s==="input-otp-basic"?`        <Ux4gOtpInput
          value={otp}
          onChanged={setOtp}
          length={6}
          label='Enter OTP'
          captionVariant='resendTimer'
          captionLeadingText="Didn't receive OTP?"
          captionTrailingText='Resend in 00:17'
        />`:s==="input-otp-varients"?`        <Ux4gOtpInput
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
        />`:s==="input-required-disabled"?`        <Ux4gInputField
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
        />`,Kp=({isDark:s,story:l="input-basic"})=>{const[d,m]=k.useState("preview"),h=Hp(l),b=Gp[h],x=k.useMemo(()=>Qp(h),[h]),i=()=>{const p=`import React, { useState } from 'react';
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
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${Yp(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gInputField%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack InputField Preview"})},w=[{name:"value",type:"string",default:"required",desc:"Current text string inside the input field.",required:!0},{name:"onValueChange",type:"(value: string) => void",default:"required",desc:"Callback triggered when text changes.",required:!0},{name:"size",type:"'small' | 'medium' | 'large' | 'xl'",default:"'medium'",desc:"Size of the input field.",required:!1},{name:"type",type:"'text' | 'password' | 'number' | 'email'",default:"'text'",desc:"Type of input field.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Validation status controlling border and caption color.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Label displayed above the input box.",required:!1},{name:"required",type:"boolean",default:"false",desc:"Whether field is required (shows red asterisk).",required:!1},{name:"placeholder",type:"string",default:"undefined",desc:"Placeholder hint text.",required:!1},{name:"caption",type:"string",default:"undefined",desc:"Optional caption or validation message.",required:!1},{name:"leadingIcon",type:"ReactNode",default:"undefined",desc:"Leading icon/content inside input box.",required:!1},{name:"trailingIcon",type:"ReactNode",default:"undefined",desc:"Trailing icon/content for non-password input.",required:!1},{name:"onTrailingIconPressed",type:"() => void",default:"undefined",desc:"Callback when trailing icon is pressed.",required:!1},{name:"prefixText",type:"string",default:"undefined",desc:"Prefix text shown after leading icon.",required:!1},{name:"postfixText",type:"string",default:"undefined",desc:"Postfix text shown before trailing icon.",required:!1},{name:"trailingIconLabel",type:"ReactNode",default:"undefined",desc:"Trailing icon/content in label row.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the input is interactive.",required:!1},{name:"readOnly",type:"boolean",default:"false",desc:"Whether the input is non-editable.",required:!1},{name:"singleLine",type:"boolean",default:"true",desc:"Single-line or multi-line mode.",required:!1},{name:"maxLines",type:"number",default:"undefined",desc:"Maximum lines for multi-line mode.",required:!1},{name:"maxLength",type:"number",default:"undefined",desc:"Maximum character length.",required:!1},{name:"textAlign",type:"'left' | 'center' | 'right'",default:"'left'",desc:"Text alignment inside input.",required:!1},{name:"style",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for input text.",required:!1},{name:"placeholderStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for placeholder text color style.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"captionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for caption text.",required:!1},{name:"backgroundColor",type:"string",default:"theme-based",desc:"Background color override.",required:!1},{name:"borderColor",type:"string",default:"theme/status-based",desc:"Border color override for enabled default state.",required:!1},{name:"disabledBorderColor",type:"string",default:"onSurface @ 30%",desc:"Border color override when disabled.",required:!1},{name:"borderWidth",type:"number",default:"1.0",desc:"Border width for enabled states.",required:!1},{name:"disabledBorderWidth",type:"number",default:"0.0",desc:"Border width when disabled.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Outer container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"InputFieldExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Jp=({isDark:s,story:l="spinner-basic"})=>{const[d,m]=k.useState("preview"),[h,b]=k.useState(40),[x,i]=k.useState(4),[w,p]=k.useState(100),T=k.useMemo(()=>{const z=[];return z.push("import { Ux4gSpinner } from 'ux4g-react-native-design-system';"),z.push(""),z.push("<Ux4gSpinner"),z.push(`  size={${h}}`),z.push(`  strokeWidth={${x}}`),w!==100&&z.push(`  percentage={${w}}`),z.push("/>"),z.join(`
`)},[h,x,w]),A=()=>{const F=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gSpinner, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
${`        <Ux4gSpinner
          size={${h}}
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
});`,Y=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gSpinner%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(F)}`;return t.jsx("iframe",{src:Y,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},B=[{name:"size",type:"number",default:"40",desc:"Diameter size of the spinner ring.",required:!1},{name:"color",type:"string",default:"theme.colors.primary",desc:"Primary color of the spinner arc.",required:!1},{name:"gradientColors",type:"string[]",default:"undefined",desc:"List of colors for multi-tone arc segments.",required:!1},{name:"percentage",type:"number",default:"100",desc:"Arc fill percentage from 0 to 100.",required:!1},{name:"strokeWidth",type:"number",default:"4",desc:"Thickness of the spinner ring.",required:!1},{name:"rotationDurationMillis",type:"number",default:"1200",desc:"Milliseconds for a full 360-degree rotation.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer spinner container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Spinner"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Spinner displays an animated circular progress indicator for loading states."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:A()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:T,language:"TSX",filename:"SpinnerExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:B.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[z.name,z.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:z.type})}),t.jsx("td",{children:z.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:z.default})})]},z.name))})]})})]})]})})]})},Zp=({isDark:s,story:l="fileupload-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const p=[];return p.push("import { Ux4gFileUpload } from 'ux4g-react-native-design-system';"),p.push(""),l==="fileupload-dashed"?(p.push("<Ux4gFileUpload"),p.push("  borderStyle='dashed'"),p.push("  allowedExtensions={['jpg', 'png', 'pdf', 'docx']}"),p.push("  maxFileSize={10 * 1024 * 1024}"),p.push("/>")):l==="fileupload-preloaded"?(p.push("<Ux4gFileUpload"),p.push("  initialFiles={["),p.push("    { id: '1', name: 'invoice.pdf', fileSize: 228200, status: 'success', progress: 1 },"),p.push("    { id: '2', name: 'pan-card.jpg', fileSize: 81520, status: 'uploading', progress: 0.64 },"),p.push("  ]}"),p.push("/>")):(p.push("<Ux4gFileUpload"),p.push("  allowedExtensions={['jpg', 'png', 'pdf']}"),p.push("  maxFiles={5}"),p.push("  maxFileSize={5 * 1024 * 1024}"),p.push("/>")),p.join(`
`)},[l]),b=()=>{let p="";l==="fileupload-dashed"?p=`        <Ux4gFileUpload
          borderStyle='dashed'
          allowedExtensions={['jpg', 'png', 'pdf', 'docx']}
          maxFiles={3}
          maxFileSize={10 * 1024 * 1024}
        />`:l==="fileupload-preloaded"?p=`        <Ux4gFileUpload
          initialFiles={[
            { id: '1', name: 'invoice.pdf', fileSize: 228200, status: 'success', progress: 1 },
            { id: '2', name: 'pan-card.jpg', fileSize: 81520, status: 'uploading', progress: 0.64 },
            { id: '3', name: 'aadhaar.png', fileSize: 149200, status: 'error', progress: 0.2, errorMessage: 'Network timeout' },
          ]}
        />`:p=`        <Ux4gFileUpload
          allowedExtensions={['jpg', 'png', 'pdf']}
          maxFiles={5}
          maxFileSize={5 * 1024 * 1024}
        />`;const T=`import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Ux4gFileUpload, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`,A=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gFileUpload%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*,react-native-document-picker@*,react-native-image-picker@*&code=${encodeURIComponent(T)}`;return t.jsx("iframe",{src:A,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack FileUpload Preview"})},x=[{name:"maxFiles",type:"number",default:"5",desc:"Maximum number of files allowed.",required:!1},{name:"maxFileSize",type:"number",default:"5 * 1024 * 1024",desc:"Maximum file size in bytes.",required:!1},{name:"onFilesChanged",type:"(files: UploadedFile[]) => void",default:"undefined",desc:"Callback fired when files list changes.",required:!1},{name:"onUpload",type:"(file: UploadedFile) => Promise<boolean>",default:"undefined",desc:"Custom async upload handler.",required:!1},{name:"allowedExtensions",type:"string[]",default:"['jpg','png','pdf']",desc:"Allowed extensions for picking.",required:!1},{name:"borderStyle",type:"'solid' | 'dashed'",default:"'solid'",desc:"Border style for upload container.",required:!1},{name:"buttonBorderRadius",type:"number",default:"8",desc:"Corner radius for action buttons.",required:!1},{name:"buttonColor",type:"string",default:"undefined",desc:"Override text/icon color in action buttons.",required:!1},{name:"buttonBorderColor",type:"string",default:"undefined",desc:"Override border color of upload button.",required:!1},{name:"errorTitle",type:"string",default:"undefined",desc:"Override title shown for error state.",required:!1},{name:"errorText",type:"string",default:"undefined",desc:"Override error message template.",required:!1},{name:"initialFiles",type:"UploadedFile[]",default:"undefined",desc:"Pre-populated file list for showcase/testing.",required:!1}],i={"fileupload-basic":{title:"FileUpload",description:"Basic document upload with file type restrictions and size limits."},"fileupload-dashed":{title:"FileUpload",description:"Dashed border variant with custom extension and size limits."},"fileupload-preloaded":{title:"FileUpload",description:"Preloaded list variant showing success, uploading, and error statuses."}},w=i[l]??i["fileupload-basic"];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:w.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:w.description}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"FileUploadExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},em=({isDark:s,story:l="accordion-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { Ux4gAccordion } from 'ux4g-react-native-design-system';"),i.push("import { Text } from 'react-native';"),i.push("import { useState } from 'react';"),i.push(""),i.push("// Basic Accordion"),i.push("const [expanded1, setExpanded1] = useState(false);"),i.push("<Ux4gAccordion"),i.push('  title="Basic Accordion"'),i.push("  expanded={expanded1}"),i.push("  onExpandedChange={setExpanded1}"),i.push(">"),i.push("  <Text>Content</Text>"),i.push("</Ux4gAccordion>"),i.push(""),i.push("// Leading Chevron"),i.push("const [expanded2, setExpanded2] = useState(false);"),i.push("<Ux4gAccordion"),i.push('  title="Leading Chevron"'),i.push('  chevronPosition="leading"'),i.push("  expanded={expanded2}"),i.push("  onExpandedChange={setExpanded2}"),i.push(">"),i.push("  <Text>Content</Text>"),i.push("</Ux4gAccordion>"),i.push(""),i.push("// Disabled Accordion"),i.push("<Ux4gAccordion"),i.push('  title="Disabled Accordion"'),i.push("  enabled={false}"),i.push(">"),i.push("  <Text>Content</Text>"),i.push("</Ux4gAccordion>"),i.join(`
`)},[]),b=()=>{const i=`import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gAccordion, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [basicExpanded, setBasicExpanded] = useState(false);
  const [leadingExpanded, setLeadingExpanded] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
        <Ux4gAccordion 
          title="Basic Accordion"
          expanded={basicExpanded}
          onExpandedChange={setBasicExpanded}
        >
          <Text style={{ color: ${s?"'#fff'":"'#000'"} }}>This is a basic accordion with trailing chevron.</Text>
        </Ux4gAccordion>
        
        <View style={{ height: 16 }} />
        
        <Ux4gAccordion 
          title="Leading Chevron" 
          chevronPosition="leading"
          expanded={leadingExpanded}
          onExpandedChange={setLeadingExpanded}
        >
          <Text style={{ color: ${s?"'#fff'":"'#000'"} }}>This accordion has a leading chevron.</Text>
        </Ux4gAccordion>
        
        <View style={{ height: 16 }} />
        
        <Ux4gAccordion 
          title="Disabled Accordion" 
          enabled={false}
        >
          <Text style={{ color: ${s?"'#fff'":"'#000'"} }}>This accordion is disabled.</Text>
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
});`,w=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gAccordion%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(i)}`;return t.jsx("iframe",{src:w,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},x=[{name:"title",type:"string",default:"—",desc:"Title text displayed in the accordion header.",required:!0},{name:"children",type:"ReactNode",default:"undefined",desc:"Content inside the expandable panel.",required:!1},{name:"content",type:"ReactNode",default:"undefined",desc:"Alias for children, mirrors Flutter child.",required:!1},{name:"expanded",type:"boolean",default:"false",desc:"Whether the accordion panel is currently expanded.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the accordion is interactive and enabled.",required:!1},{name:"onExpandedChange",type:"(expanded: boolean) => void",default:"undefined",desc:"Callback fired when user taps the header.",required:!1},{name:"backgroundColor",type:"string",default:"theme.colors.surface",desc:"Background color for the header bar.",required:!1},{name:"contentBackgroundColor",type:"string",default:"backgroundColor",desc:"Background color for expanded content container.",required:!1},{name:"collapsedBorderColor",type:"string",default:"onSurface @ 12%",desc:"Border color when collapsed.",required:!1},{name:"expandedBorderColor",type:"string",default:"collapsedBorderColor",desc:"Border color when expanded.",required:!1},{name:"titleColor",type:"string",default:"theme.colors.onSurface",desc:"Title text color.",required:!1},{name:"disabledTitleColor",type:"string",default:"onSurface @ 38%",desc:"Title text color when disabled.",required:!1},{name:"iconColor",type:"string",default:"theme.colors.onSurface",desc:"Chevron and leading icon color.",required:!1},{name:"disabledIconColor",type:"string",default:"onSurface @ 38%",desc:"Chevron and leading icon color when disabled.",required:!1},{name:"leadingIcon",type:"ReactNode",default:"undefined",desc:"Optional leading icon displayed before title.",required:!1},{name:"chevronPosition",type:"'leading' | 'trailing'",default:"'trailing'",desc:"Position of the chevron indicator.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for outer wrapper.",required:!1},{name:"headerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for header row container.",required:!1},{name:"contentStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for expanded content container.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom style for header title text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Accordion"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Expandable panel component supporting custom borders, chevrons, and animated transitions."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"AccordionExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},tm=({isDark:s})=>{const[l,d]=k.useState("preview"),m=k.useMemo(()=>{const x=[];return x.push("import { Ux4gAccordionGroup, Ux4gAccordionItem } from 'ux4g-react-native-design-system';"),x.push("import { Text } from 'react-native';"),x.push("import { useState } from 'react';"),x.push(""),x.push("const items: Ux4gAccordionItem[] = ["),x.push("  {"),x.push('    title: "What is UX4G?",'),x.push("    content: <Text>UX4G is a React Native design system.</Text>"),x.push("  },"),x.push("  {"),x.push('    title: "How do I install it?",'),x.push("    content: <Text>Install it via npm or yarn.</Text>"),x.push("  },"),x.push("  {"),x.push('    title: "Is it open source?",'),x.push("    content: <Text>Yes, UX4G is open source under the MIT license.</Text>"),x.push("  }"),x.push("];"),x.push(""),x.push("const [expandedIndex, setExpandedIndex] = useState<number | null>(2);"),x.push(""),x.push("<Ux4gAccordionGroup"),x.push("  items={items}"),x.push("  expandedIndex={expandedIndex}"),x.push("  onExpandedIndexChange={setExpandedIndex}"),x.push("/>"),x.join(`
`)},[]),h=()=>{const x=`import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gAccordionGroup, Ux4gAccordionItem, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState(2);

  const items = [
    {
      title: "What is UX4G?",
      content: <Text style={{ color: ${s?"'#fff'":"'#000'"} }}>UX4G is a React Native design system.</Text>
    },
    {
      title: "How do I install it?",
      content: <Text style={{ color: ${s?"'#fff'":"'#000'"} }}>Install it via npm or yarn.</Text>
    },
    {
      title: "Is it open source?",
      content: <Text style={{ color: ${s?"'#fff'":"'#000'"} }}>Yes, UX4G is open source under the MIT license.</Text>
    }
  ];

  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`,i=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gAccordionGroup%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:i,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},b=[{name:"items",type:"Ux4gAccordionItem[]",default:"—",desc:"Array of accordion items.",required:!0},{name:"expandedIndex",type:"number | null",default:"undefined",desc:"Index of the currently expanded item (or null/undefined if none).",required:!1},{name:"onExpandedIndexChange",type:"(index: number | null) => void",default:"undefined",desc:"Callback fired when an item is expanded or collapsed.",required:!1},{name:"itemSpacing",type:"number",default:"Ux4gSpace.space20",desc:"Vertical spacing between accordion items.",required:!1},{name:"contentBuilder",type:"(index: number, item: Ux4gAccordionItem) => ReactNode",default:"undefined",desc:"Optional builder function returning content per item.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for the group container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"AccordionGroup"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"AccordionGroup ensures only one item is open at a time."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",style:{flex:1,paddingRight:0},children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${l==="preview"?"active":""}`,onClick:()=>d("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${l==="code"?"active":""}`,onClick:()=>d("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${l==="props"?"active":""}`,onClick:()=>d("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[l==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:h()})}),l==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:m,language:"TSX",filename:"AccordionGroupExample.tsx"})}),l==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:b.map(x=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[x.name,x.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:x.type})}),t.jsx("td",{children:x.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:x.default})})]},x.name))})]})})]})]})})]})},rm=({isDark:s,story:l="app-header-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { View, Text } from 'react-native';"),i.push("import { Ux4gAppHeader, Ux4gIcons } from 'ux4g-react-native-design-system';"),i.push(""),l==="app-header-back"?(i.push("// With Back Button"),i.push("<Ux4gAppHeader"),i.push('  title="App Header"'),i.push("  showBackButton={true}"),i.push("  showAvatar={true}"),i.push("  actions={["),i.push('    { icon: "notifications", onPressed: () => console.log("Notification") },'),i.push('    { icon: "settings", onPressed: () => console.log("Settings") }'),i.push("  ]}"),i.push("/>")):l==="app-header-filled"?(i.push("// Filled Variant"),i.push("<Ux4gAppHeader"),i.push('  title="Page Title"'),i.push('  variant="filled"'),i.push("  showBackButton={true}"),i.push("  actions={["),i.push('    { icon: "search", onPressed: () => console.log("Search") }'),i.push("  ]}"),i.push("/>")):l==="app-header-custom-leading"?(i.push("// Custom Leading Logos & Custom Action Menu"),i.push("<Ux4gAppHeader"),i.push('  title="Title"'),i.push("  showAvatar={true}"),i.push('  avatarInitials="JD"'),i.push("  leadingWidgets={["),i.push('    <View style={{ flexDirection: "row", alignItems: "center" }} key="leading">'),i.push("      {Ux4gIcons.nationalEmblemLogo({ size: 26 })}"),i.push('      <View style={{ width: 1, height: 18, backgroundColor: "#D0D0D0", marginHorizontal: 8 }} />'),i.push("      {Ux4gIcons.union({ size: 20 })}"),i.push("    </View>"),i.push("  ]}"),i.push("  actions={["),i.push('    { icon: "scan", onPressed: () => {} }'),i.push("  ]}"),i.push("/>")):(i.push("// Basic App Header"),i.push("<Ux4gAppHeader"),i.push('  title="App Header"'),i.push("  showAvatar={true}"),i.push("  leadingWidgets={["),i.push('    <Text style={{ fontSize: 22 }} key="menu">☰</Text>'),i.push("  ]}"),i.push("  actions={["),i.push('    { icon: "notifications", onPressed: () => {} },'),i.push('    { icon: "settings", onPressed: () => {} }'),i.push("  ]}"),i.push("/>")),i.join(`
`)},[l]),b=()=>{let i="";l==="app-header-back"?i=`        <Ux4gAppHeader
          title="App Header"
          showBackButton={true}
          showAvatar={true}
          actions={[
            { icon: 'notifications', onPressed: () => console.log('Notification pressed') },
            { icon: 'settings', onPressed: () => console.log('Settings pressed') }
          ]}
        />`:l==="app-header-filled"?i=`        <Ux4gAppHeader
          title="Page Title"
          variant="filled"
          showBackButton={true}
          actions={[
            { icon: 'search', onPressed: () => console.log('Search pressed') }
          ]}
        />`:l==="app-header-custom-leading"?i=`        <Ux4gAppHeader
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
                  <Text style={{ fontSize: 16, color: ${s?"'#E6E1E5'":"'#1C1B1F'"} }}>☰</Text>
                </View>
              )
            }
          ]}
        />`:i=`        <Ux4gAppHeader
          title="App Header"
          showAvatar={true}
          leadingWidgets={[
            <Text style={{ fontSize: 22, color: ${s?"'#E6E1E5'":"'#1C1B1F'"} }} key="menu">☰</Text>
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
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gAppHeader%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack AppHeader Preview"})},x=[{name:"title",type:"string",default:"'Title'",desc:"Header title text.",required:!1},{name:"variant",type:"'light' | 'filled' | 'outlined'",default:"'outlined'",desc:"Visual variant of the app header.",required:!1},{name:"showBackButton",type:"boolean",default:"false",desc:"Whether to display the back arrow button.",required:!1},{name:"onBackPressed",type:"() => void",default:"undefined",desc:"Callback fired when back button is pressed.",required:!1},{name:"leadingWidgets",type:"ReactNode[]",default:"undefined",desc:"Custom leading widgets/logo row.",required:!1},{name:"actions",type:"Ux4gAppHeaderAction[]",default:"undefined",desc:"Array of trailing action buttons/icons.",required:!1},{name:"avatar",type:"ReactNode",default:"undefined",desc:"Custom avatar widget.",required:!1},{name:"avatarSize",type:"'xs' | 's' | 'm' | 'l' | 'xl'",default:"'s'",desc:"Size used when rendering default avatar.",required:!1},{name:"showAvatar",type:"boolean",default:"false",desc:"Whether to display default leading avatar.",required:!1},{name:"avatarImageUrl",type:"string",default:"undefined",desc:"Avatar image URL for default avatar.",required:!1},{name:"avatarInitials",type:"string",default:"undefined",desc:"Initials used when avatar image is absent.",required:!1},{name:"onAvatarPressed",type:"() => void",default:"undefined",desc:"Callback fired when avatar is tapped.",required:!1},{name:"titleWidget",type:"ReactNode",default:"undefined",desc:"Custom title widget replacing text title.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for title text.",required:!1},{name:"backgroundColor",type:"string",default:"variant-based token",desc:"Header background color override.",required:!1},{name:"foregroundColor",type:"string",default:"variant-based token",desc:"Foreground color for title/icons.",required:!1},{name:"borderColor",type:"string",default:"onSurface @ 12%",desc:"Bottom border color for outlined variant.",required:!1},{name:"height",type:"number",default:"48/56 responsive",desc:"Explicit header height override.",required:!1},{name:"horizontalPadding",type:"number",default:"12",desc:"Horizontal padding inside header.",required:!1},{name:"leadingSpacing",type:"number",default:"8",desc:"Spacing between leading section and title.",required:!1},{name:"actionSpacing",type:"number",default:"4",desc:"Spacing between action items.",required:!1},{name:"elevation",type:"number",default:"0",desc:"Android elevation/iOS shadow intensity.",required:!1},{name:"useSafeArea",type:"boolean",default:"true",desc:"Wrap content with SafeAreaView.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"App Header"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Top app bar navigation header supporting screen titles, back buttons, avatars, leading national emblem logos, and trailing actions."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"AppHeaderExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},nm=({isDark:s,story:l="avatar-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { View } from 'react-native';"),l==="avatar-status"?(i.push("import { Ux4gStatusAvatar } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// Status Avatars (Initials)"),i.push('<Ux4gStatusAvatar variant="online" initials="JD" size="l" />'),i.push('<Ux4gStatusAvatar variant="busy" initials="AB" size="l" />'),i.push('<Ux4gStatusAvatar variant="offline" initials="CK" size="l" />'),i.push('<Ux4gStatusAvatar variant="warning" initials="MS" size="l" />'),i.push('<Ux4gStatusAvatar variant="error" initials="RK" size="l" />'),i.push(""),i.push("// Status Avatars (Image)"),i.push('<Ux4gStatusAvatar variant="online" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />'),i.push('<Ux4gStatusAvatar variant="busy" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />'),i.push('<Ux4gStatusAvatar variant="offline" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />'),i.push('<Ux4gStatusAvatar variant="warning" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />'),i.push('<Ux4gStatusAvatar variant="error" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />')):l==="avatar-profile"?(i.push("import { Ux4gProfileAvatar } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// Profile Badges & Actions (Initials)"),i.push('<Ux4gProfileAvatar variant="verified" initials="JD" size="l" />'),i.push('<Ux4gProfileAvatar variant="star" initials="AB" size="l" />'),i.push('<Ux4gProfileAvatar variant="admin" initials="CK" size="l" />'),i.push('<Ux4gProfileAvatar variant="edit" initials="MS" size="l" />'),i.push('<Ux4gProfileAvatar variant="camera" initials="RK" size="l" />'),i.push('<Ux4gProfileAvatar variant="remove" initials="VP" size="l" />'),i.push(""),i.push("// Profile Badges & Actions (Image)"),i.push('<Ux4gProfileAvatar variant="verified" imageUrl="https://i.pravatar.cc/150?u=user1" size="l" />'),i.push('<Ux4gProfileAvatar variant="star" imageUrl="https://i.pravatar.cc/150?u=user2" size="l" />'),i.push('<Ux4gProfileAvatar variant="admin" imageUrl="https://i.pravatar.cc/150?u=user3" size="l" />'),i.push('<Ux4gProfileAvatar variant="edit" imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />'),i.push('<Ux4gProfileAvatar variant="camera" imageUrl="https://i.pravatar.cc/150?u=user5" size="l" />'),i.push('<Ux4gProfileAvatar variant="remove" imageUrl="https://i.pravatar.cc/150?u=user6" size="l" />')):l==="avatar-group"?(i.push("import { Ux4gAvatarGroup } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// Group with Images (Collapsed Overlapping)"),i.push("<Ux4gAvatarGroup"),i.push("  items={["),i.push('    { imageUrl: "https://i.pravatar.cc/150?u=user1" },'),i.push('    { imageUrl: "https://i.pravatar.cc/150?u=user2" },'),i.push('    { imageUrl: "https://i.pravatar.cc/150?u=user3" },'),i.push('    { imageUrl: "https://i.pravatar.cc/150?u=user4" },'),i.push('    { imageUrl: "https://i.pravatar.cc/150?u=user5" }'),i.push("  ]}"),i.push("  maxLimit={4}"),i.push("  collapsed={true}"),i.push("/>"),i.push(""),i.push("// Group with Mixed Images & Initials (Spaced)"),i.push("<Ux4gAvatarGroup"),i.push("  items={["),i.push('    { imageUrl: "https://i.pravatar.cc/150?u=user1" },'),i.push('    { imageUrl: "https://i.pravatar.cc/150?u=user2" },'),i.push('    { initials: "CK" },'),i.push('    { initials: "MS" }'),i.push("  ]}"),i.push("  collapsed={false}"),i.push("/>")):(i.push("import { Ux4gAvatar } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// Initials Avatar (Sizes xs to xxl)"),i.push('<Ux4gAvatar initials="XS" size="xs" />'),i.push('<Ux4gAvatar initials="S" size="s" />'),i.push('<Ux4gAvatar initials="M" size="m" />'),i.push('<Ux4gAvatar initials="L" size="l" />'),i.push('<Ux4gAvatar initials="XL" size="xl" />'),i.push('<Ux4gAvatar initials="XXL" size="xxl" />'),i.push(""),i.push("// Image Avatars Across Sizes"),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="xs" />'),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="s" />'),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="m" />'),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user4" size="l" />'),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user5" size="xl" />'),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user6" size="xxl" />'),i.push(""),i.push("// Shapes with Images (Circle, Rounded, Square)"),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user1" size="l" shape="circle" />'),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user2" size="l" shape="rounded" />'),i.push('<Ux4gAvatar imageUrl="https://i.pravatar.cc/150?u=user3" size="l" shape="square" />')),i.join(`
`)},[l]),b=()=>{let i="";l==="avatar-status"?i=`        <View style={{ gap: 16, alignItems: 'center' }}>
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
        </View>`:l==="avatar-profile"?i=`        <View style={{ gap: 16, alignItems: 'center' }}>
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
        </View>`:l==="avatar-group"?i=`        <View style={{ gap: 24, alignItems: 'center' }}>
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
        </View>`:i=`        <View style={{ gap: 24, alignItems: 'center' }}>
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
        </View>`;const w=["Ux4gThemeProvider"];l==="avatar-status"?w.push("Ux4gStatusAvatar"):l==="avatar-profile"?w.push("Ux4gProfileAvatar"):l==="avatar-group"?w.push("Ux4gAvatarGroup"):w.push("Ux4gAvatar");const p=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ${w.join(", ")} } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gAvatar%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Avatar Preview"})},x=k.useMemo(()=>l==="avatar-group"?[{name:"items",type:"Ux4gAvatarGroupItem[]",default:"—",desc:"List of avatar group items.",required:!0},{name:"size",type:"'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'",default:"'m'",desc:"Avatar size for all items.",required:!1},{name:"maxLimit",type:"number",default:"items.length",desc:"Maximum visible entries before +N overflow.",required:!1},{name:"collapsed",type:"boolean",default:"true",desc:"Use overlapping collapsed layout.",required:!1},{name:"borderColor",type:"string",default:"theme.colors.surface",desc:"Border color in collapsed mode.",required:!1},{name:"borderWidth",type:"number",default:"2",desc:"Border width in collapsed mode.",required:!1},{name:"onRemainingPress",type:"() => void",default:"undefined",desc:"Callback for +N remaining bubble.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for group container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}]:l==="avatar-status"?[{name:"size",type:"'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'",default:"'m'",desc:"Size preset of status avatar.",required:!1},{name:"shape",type:"'circle' | 'rounded' | 'square'",default:"'circle'",desc:"Shape of the main avatar.",required:!1},{name:"imageUrl",type:"string",default:"undefined",desc:"Remote image URL.",required:!1},{name:"initials",type:"string",default:"undefined",desc:"Fallback initials.",required:!1},{name:"avatarIcon",type:"ReactNode",default:"undefined",desc:"Custom fallback icon for avatar.",required:!1},{name:"variant",type:"'online' | 'offline' | 'busy' | 'success' | 'error' | 'warning'",default:"'online'",desc:"Status indicator variant.",required:!1},{name:"statusSize",type:"number",default:"auto by size",desc:"Override size of status indicator.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer wrapper.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}]:l==="avatar-profile"?[{name:"size",type:"'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'",default:"'m'",desc:"Size preset of profile avatar.",required:!1},{name:"shape",type:"'circle' | 'rounded' | 'square'",default:"'circle'",desc:"Shape of the main avatar.",required:!1},{name:"imageUrl",type:"string",default:"undefined",desc:"Remote image URL.",required:!1},{name:"initials",type:"string",default:"undefined",desc:"Fallback initials.",required:!1},{name:"avatarIcon",type:"ReactNode",default:"undefined",desc:"Custom fallback icon for avatar.",required:!1},{name:"variant",type:"'verified' | 'star' | 'admin' | 'edit' | 'camera' | 'remove'",default:"undefined",desc:"Badge/action variant overlay.",required:!1},{name:"badgeSize",type:"number",default:"auto by size",desc:"Override overlay badge/action size.",required:!1},{name:"onVariantPress",type:"() => void",default:"undefined",desc:"Callback when overlay badge/action is pressed.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer wrapper.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}]:[{name:"size",type:"'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'",default:"'m'",desc:"Size preset of the avatar.",required:!1},{name:"shape",type:"'circle' | 'rounded' | 'square'",default:"'circle'",desc:"Shape of the avatar border.",required:!1},{name:"imageUrl",type:"string",default:"undefined",desc:"Remote image URL.",required:!1},{name:"initials",type:"string",default:"undefined",desc:"Fallback text initials.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Custom icon widget.",required:!1},{name:"containerColor",type:"string",default:"theme.colors.primary + 1A",desc:"Background container color.",required:!1},{name:"contentColor",type:"string",default:"theme.colors.primary",desc:"Text color for initials.",required:!1},{name:"iconColor",type:"string",default:"theme.colors.primary",desc:"Icon color when icon is shown.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for avatar container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}],[l]);return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Avatar"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Avatars represent user profiles, initials, status badges, and group representations across 7 sizes."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:x.some(i=>i.required)?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]}):"This component variant has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"AvatarExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},am=({isDark:s,story:l="badge-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { View } from 'react-native';"),l==="badge-count"?(i.push("import { Ux4gBadge, UX4GColors } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// Single Digit Threshold (9+)"),i.push("<Ux4gBadge count={5} />"),i.push('<Ux4gBadge count={12} limit="singleDigit" />'),i.push(""),i.push("// Double Digit Threshold (99+)"),i.push('<Ux4gBadge count={99} limit="doubleDigit" />'),i.push('<Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.red500} />')):l==="badge-standalone"||l==="badge-label"?(i.push("import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// All Standalone Badge Variants"),i.push('<View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>'),i.push("  {/* 1. Dot Badge */}"),i.push('  <Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} />'),i.push(""),i.push("  {/* 2. Count Badge (7) */}"),i.push("  <Ux4gBadge count={7} containerColor={UX4GColors.primary600} />"),i.push(""),i.push("  {/* 3. Count Badge (9+) */}"),i.push('  <Ux4gBadge count={12} limit="singleDigit" containerColor={UX4GColors.primary600} />'),i.push(""),i.push("  {/* 4. Count Badge (99+) */}"),i.push('  <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.primary600} />'),i.push(""),i.push("  {/* 5. Label Badge (BETA) */}"),i.push('  <Ux4gBadge label="BETA" containerColor={UX4GColors.primary600} />'),i.push(""),i.push("  {/* 6. Label Badge (NEW) */}"),i.push('  <Ux4gBadge label="NEW" containerColor={UX4GColors.primary600} />'),i.push(""),i.push("  {/* 7. Icon Badge (Checkmark) */}"),i.push('  <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 14, color: UX4GColors.white })} containerColor={UX4GColors.primary600} />'),i.push(""),i.push("  {/* 8. Verification Shield Icon */}"),i.push("  {Ux4gIcons.verification({ size: 24, color: UX4GColors.blue600 })}"),i.push(""),i.push("  {/* 9. Gold Star Icon */}"),i.push("  {Ux4gIcons.star({ size: 24, color: UX4GColors.gold500 })}"),i.push("</View>")):l==="badge-semantic"?(i.push("import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// Semantic Colors Matrix (Purple, Green, Orange, Red, Grey, Cyan)"),i.push("// Row 1: Dot Badges with White Border"),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} showBorder />'),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.green600} showBorder />'),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} showBorder />'),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.red600} showBorder />'),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.neutral400} showBorder />'),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.cyan600} showBorder />'),i.push(""),i.push("// Row 2: Checkmark Icon Badges with White Border"),i.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />'),i.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.green600} showBorder />'),i.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.orange500} showBorder />'),i.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.red600} showBorder />'),i.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.neutral700 })} containerColor={UX4GColors.neutral300} showBorder />'),i.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.cyan600} showBorder />'),i.push(""),i.push("// Row 3: Count Badges (3) with White Border"),i.push("<Ux4gBadge count={3} containerColor={UX4GColors.primary600} showBorder />"),i.push("<Ux4gBadge count={3} containerColor={UX4GColors.green600} showBorder />"),i.push("<Ux4gBadge count={3} containerColor={UX4GColors.orange500} showBorder />"),i.push("<Ux4gBadge count={3} containerColor={UX4GColors.red600} showBorder />"),i.push("<Ux4gBadge count={3} containerColor={UX4GColors.neutral300} contentColor={UX4GColors.neutral800} showBorder />"),i.push("<Ux4gBadge count={3} containerColor={UX4GColors.cyan600} showBorder />"),i.push(""),i.push("// Row 4: ReadyToUse & Shield Icon Badges with White Border"),i.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />'),i.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />'),i.push('<Ux4gBadge variant="icon" icon={Ux4gIcons.shield({ size: 12, color: UX4GColors.white })} containerColor={UX4GColors.primary600} showBorder />'),i.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.verification({ size: 18 })} showBorder />'),i.push('<Ux4gBadge variant="readyToUse" assetPath={Ux4gIcons.star({ size: 18 })} showBorder />')):l==="badge-overlay"?(i.push("import { Ux4gBadge, Ux4gIcons, UX4GColors } from 'ux4g-react-native-design-system';"),i.push(""),i.push('// 1. Star Icon with "NEW" Label Badge'),i.push('<Ux4gBadge label="NEW" alignment="topRight" containerColor={UX4GColors.primary600}>'),i.push('  {Ux4gIcons.star({ size: 28, color: "#1C1B1F" })}'),i.push("</Ux4gBadge>"),i.push(""),i.push("// 2. Thumb Up Icon with Count Badge (5)"),i.push('<Ux4gBadge count={5} alignment="topRight" containerColor={UX4GColors.primary600}>'),i.push('  {Ux4gIcons.thumbUp({ size: 28, color: "#1C1B1F" })}'),i.push("</Ux4gBadge>"),i.push(""),i.push("// 3. Verification Shield Icon with Dot Badge"),i.push('<Ux4gBadge variant="dot" alignment="topRight" containerColor={UX4GColors.primary600}>'),i.push('  {Ux4gIcons.verification({ size: 28, color: "#1C1B1F" })}'),i.push("</Ux4gBadge>")):(i.push("import { Ux4gBadge, UX4GColors } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// Standalone Dot Badges"),i.push('<Ux4gBadge variant="dot" />'),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.green500} />'),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} />'),i.push('<Ux4gBadge variant="dot" containerColor={UX4GColors.blue500} />')),i.join(`
`)},[l]),b=()=>{let i="";const w=s?"#E6E1E5":"#1C1B1F";l==="badge-count"?i=`        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <Ux4gBadge count={5} />
          <Ux4gBadge count={12} limit="singleDigit" />
          <Ux4gBadge count={99} limit="doubleDigit" />
          <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.red500} />
        </View>`:l==="badge-standalone"||l==="badge-label"?i=`        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Ux4gBadge variant="dot" containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={7} containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={12} limit="singleDigit" containerColor={UX4GColors.primary600} />
          <Ux4gBadge count={150} limit="doubleDigit" containerColor={UX4GColors.primary600} />
          <Ux4gBadge label="BETA" containerColor={UX4GColors.primary600} />
          <Ux4gBadge label="NEW" containerColor={UX4GColors.primary600} />
          <Ux4gBadge variant="icon" icon={Ux4gIcons.check({ size: 14, color: UX4GColors.white })} containerColor={UX4GColors.primary600} />
          {Ux4gIcons.verification({ size: 24, color: UX4GColors.blue600 })}
          {Ux4gIcons.star({ size: 24, color: UX4GColors.gold500 })}
        </View>`:l==="badge-semantic"?i=`        <View style={{ gap: 24, alignItems: 'center', justifyContent: 'center' }}>
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
        </View>`:l==="badge-overlay"?i=`        <View style={{ flexDirection: 'row', gap: 48, alignItems: 'center', justifyContent: 'center' }}>
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
        </View>`:i=`        <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
          <Ux4gBadge variant="dot" />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.green500} />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.orange500} />
          <Ux4gBadge variant="dot" containerColor={UX4GColors.blue500} />
        </View>`;const p=["Ux4gThemeProvider","UX4GColors","Ux4gBadge"];(l==="badge-overlay"||l==="badge-standalone"||l==="badge-label"||l==="badge-semantic")&&p.push("Ux4gIcons");const T=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ${p.join(", ")} } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,A=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gBadge%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(T)}`;return t.jsx("iframe",{src:A,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Badge Preview"})},x=[{name:"child",type:"ReactNode",default:"undefined",desc:"Child element around which badge is overlaid.",required:!1},{name:"children",type:"ReactNode",default:"undefined",desc:"Alias for child.",required:!1},{name:"variant",type:"'dot' | 'count' | 'label' | 'icon' | 'readyToUse'",default:"'dot'",desc:"Type of badge indicator (auto-inferred when omitted).",required:!1},{name:"count",type:"number",default:"undefined",desc:"Numeric count value for count variant.",required:!1},{name:"limit",type:"'singleDigit' | 'doubleDigit'",default:"'singleDigit'",desc:"Threshold formatting (9+ or 99+).",required:!1},{name:"label",type:"string",default:"undefined",desc:"Short text for label variant.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Custom icon for icon variant.",required:!1},{name:"assetPath",type:"string | ImageSourcePropType | ReactNode | ((props) => ReactElement)",default:"undefined",desc:"Asset source for readyToUse variant.",required:!1},{name:"containerColor",type:"string",default:"theme.colors.primary",desc:"Badge background color.",required:!1},{name:"contentColor",type:"string",default:"UX4GColors.white",desc:"Text/icon color inside badge.",required:!1},{name:"alignment",type:"'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'",default:"'topRight'",desc:"Overlay placement when wrapping a child.",required:!1},{name:"offset",type:"{ top?: number; right?: number; bottom?: number; left?: number }",default:"undefined",desc:"Precise offset override for overlay placement.",required:!1},{name:"showBorder",type:"boolean",default:"false",desc:"Whether to render a border around badge.",required:!1},{name:"borderColor",type:"string",default:"theme.colors.surface",desc:"Border color when showBorder is true.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for wrapper/standalone container.",required:!1},{name:"badgeStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for badge pill element.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Text style override for count/label.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Badge"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Badges display status indicators, numerical counts, text labels, or custom icons overlayed on UI elements or standalone."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"BadgeExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},im=({isDark:s,story:l="card-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];i.push("import { Ux4gCard, UX4GColors } from 'ux4g-react-native-design-system';"),i.push("");const w=s?"UX4GColors.neutral900":"UX4GColors.white",p=s?"UX4GColors.neutral700":"UX4GColors.neutral200";return i.push('<View style={{ width: "100%", maxWidth: 360 }}>'),l==="card-actions"?(i.push("  // Card With Footer Actions"),i.push("  <Ux4gCard"),i.push('    title="Card with Actions"'),i.push('    body="This card has primary and secondary action buttons."'),i.push('    footerType="primaryAndSecondary"'),i.push('    primaryButtonText="Confirm"'),i.push('    secondaryButtonText="Cancel"'),i.push("    borderWidth={1}"),i.push(`    borderColor={${p}}`),i.push("    elevation={2}"),i.push(`    backgroundColor={${w}}`),i.push("  />")):l==="card-horizontal"?(i.push("  // Horizontal Card Layout"),i.push("  <Ux4gCard"),i.push('    direction="horizontal"'),i.push('    mediaImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"'),i.push('    title="Horizontal Card"'),i.push('    subtitle="Side-by-side layout"'),i.push('    body="The media thumbnail appears on the left in horizontal mode."'),i.push("    borderWidth={1}"),i.push(`    borderColor={${p}}`),i.push("    elevation={2}"),i.push(`    backgroundColor={${w}}`),i.push("  />")):l==="card-media"?(i.push("  // Media Card Layout"),i.push("  <Ux4gCard"),i.push('    mediaImageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"'),i.push('    title="Media Card"'),i.push('    subtitle="Hero image above content"'),i.push('    body="This card displays a hero image at the top."'),i.push("    borderWidth={1}"),i.push(`    borderColor={${p}}`),i.push("    elevation={2}"),i.push(`    backgroundColor={${w}}`),i.push("  />")):l==="card-rich"||l==="card-full-vertical"?(i.push("  // Complex Rich Card (Custom Composition)"),i.push("  <Ux4gCard"),i.push('    mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"'),i.push('    mediaLabelText="Label"'),i.push('    title="Title"'),i.push('    subtitle="Subtitle"'),i.push('    statusChips={["Label", "Label", "Label"]}'),i.push('    body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."'),i.push('    bottomChips={["Label", "Label", "Label", "Label"]}'),i.push('    footerType="primaryAndSecondary"'),i.push('    primaryButtonText="+ Button"'),i.push('    secondaryButtonText="+ Button"'),i.push("    borderWidth={1}"),i.push(`    borderColor={${p}}`),i.push("    elevation={2}"),i.push(`    backgroundColor={${w}}`),i.push("  />")):l==="card-rich-horizontal"?(i.push("  // Complex Rich Card (Horizontal)"),i.push("  <Ux4gCard"),i.push('    direction="horizontal"'),i.push('    mediaImageUrl="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600"'),i.push('    mediaLabelText="Label"'),i.push('    avatar={<Ux4gAvatar initials="JD" size="m" />}'),i.push('    title="Title"'),i.push('    subtitle="Subtitle"'),i.push('    statusChips={["Label", "Label", "Label"]}'),i.push('    body="Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."'),i.push('    bottomChips={["Label", "Label", "Label", "Label"]}'),i.push('    footerType="primaryAndSecondary"'),i.push('    primaryButtonText="Button"'),i.push('    secondaryButtonText="Button"'),i.push("    borderWidth={1}"),i.push(`    borderColor={${p}}`),i.push("    elevation={2}"),i.push(`    backgroundColor={${w}}`),i.push("  />")):(i.push("  // Basic Card Layout"),i.push("  <Ux4gCard"),i.push('    title="Card Title"'),i.push('    subtitle="Card subtitle"'),i.push('    body="This is the card body."'),i.push("    borderWidth={1}"),i.push(`    borderColor={${p}}`),i.push("    elevation={2}"),i.push(`    backgroundColor={${w}}`),i.push("  />")),i.push("</View>"),i.join(`
`)},[l,s]),b=()=>{let i="";const w=s?"UX4GColors.neutral900":"UX4GColors.white",p=s?"UX4GColors.neutral700":"UX4GColors.neutral200";l==="card-actions"?i=`          <Ux4gCard
            title="Card with Actions"
            body="This card has primary and secondary action buttons."
            footerType="primaryAndSecondary"
            primaryButtonText="Confirm"
            secondaryButtonText="Cancel"
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`:l==="card-horizontal"?i=`          <Ux4gCard
            direction="horizontal"
            mediaImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
            title="Horizontal Card"
            subtitle="Side-by-side layout"
            body="The media thumbnail appears on the left in horizontal mode."
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`:l==="card-media"?i=`          <Ux4gCard
            mediaImageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"
            title="Media Card"
            subtitle="Hero image above content"
            body="This card displays a hero image at the top."
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`:l==="card-rich"||l==="card-full-vertical"?i=`          <Ux4gCard
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
          />`:l==="card-rich-horizontal"?i=`          <Ux4gCard
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
          />`:i=`          <Ux4gCard
            title="Card Title"
            subtitle="Card subtitle"
            body="This is the card body."
            borderWidth={1}
            borderColor={${p}}
            elevation={2}
            backgroundColor={${w}}
          />`;const T=["Ux4gThemeProvider","UX4GColors","Ux4gCard"];(l==="card-rich"||l==="card-full-vertical"||l==="card-rich-horizontal")&&T.push("Ux4gAvatar");const A=l==="card-horizontal"||l==="card-rich-horizontal",B=A?520:360,z=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ${T.join(", ")} } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
${i}
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
});`,F=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gCard%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&ratio=1:1.5&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(z)}`;return t.jsx("iframe",{src:F,style:{width:"100%",height:A?"500px":"650px",border:"none",borderRadius:"8px"},title:"Expo Snack Card Preview"})},x=[{name:"children",type:"ReactNode",default:"undefined",desc:"Custom child content. When provided, rich card layout is skipped.",required:!1},{name:"cornerRadius",type:"number",default:"Ux4gRadius.radius12",desc:"Corner radius of the card.",required:!1},{name:"backgroundColor",type:"string",default:"theme.colors.surface",desc:"Background color override.",required:!1},{name:"borderColor",type:"string",default:"'transparent'",desc:"Border color.",required:!1},{name:"borderWidth",type:"number",default:"0",desc:"Border width.",required:!1},{name:"elevation",type:"number",default:"0",desc:"Elevation/shadow depth.",required:!1},{name:"isClickable",type:"boolean",default:"false",desc:"Wrap card in Pressable when true.",required:!1},{name:"onPress",type:"() => void",default:"undefined",desc:"Card press callback (used when isClickable=true).",required:!1},{name:"direction",type:"'vertical' | 'horizontal'",default:"'vertical'",desc:"Layout direction of rich card.",required:!1},{name:"mediaImageUrl",type:"string",default:"undefined",desc:"Media image URL (top in vertical, left in horizontal).",required:!1},{name:"mediaHeight",type:"number",default:"180",desc:"Media height in vertical mode.",required:!1},{name:"mediaWidth",type:"number",default:"120",desc:"Media width in horizontal mode.",required:!1},{name:"mediaLabelText",type:"string",default:"undefined",desc:"Badge label text over media.",required:!1},{name:"mediaTrailingAction",type:"ReactNode",default:"undefined",desc:"Trailing action over media.",required:!1},{name:"avatar",type:"ReactNode",default:"undefined",desc:"Avatar element in card header.",required:!1},{name:"title",type:"string",default:"undefined",desc:"Primary title text.",required:!1},{name:"subtitle",type:"string",default:"undefined",desc:"Secondary subtitle text.",required:!1},{name:"headerTrailingAction",type:"ReactNode",default:"undefined",desc:"Trailing action in header row.",required:!1},{name:"statusChips",type:"(string | ReactNode)[]",default:"undefined",desc:"Status chips rendered above body.",required:!1},{name:"body",type:"string",default:"undefined",desc:"Body description text.",required:!1},{name:"bottomChips",type:"(string | ReactNode)[]",default:"undefined",desc:"Bottom chip row rendered below body.",required:!1},{name:"footerType",type:"'none' | 'primaryOnly' | 'secondaryOnly' | 'primaryAndSecondary'",default:"'none'",desc:"Footer button layout type.",required:!1},{name:"footerAlignment",type:"'left' | 'centered' | 'right'",default:"'left'",desc:"Footer buttons alignment.",required:!1},{name:"primaryButtonText",type:"string",default:"'Confirm'",desc:"Primary button label.",required:!1},{name:"secondaryButtonText",type:"string",default:"'Cancel'",desc:"Secondary button label.",required:!1},{name:"onPrimaryClick",type:"() => void",default:"undefined",desc:"Primary button callback.",required:!1},{name:"onSecondaryClick",type:"() => void",default:"undefined",desc:"Secondary button callback.",required:!1},{name:"primaryButtonLeadingIcon",type:"ReactNode",default:"undefined",desc:"Leading icon for primary button.",required:!1},{name:"primaryButtonTrailingIcon",type:"ReactNode",default:"undefined",desc:"Trailing icon for primary button.",required:!1},{name:"secondaryButtonLeadingIcon",type:"ReactNode",default:"undefined",desc:"Leading icon for secondary button.",required:!1},{name:"secondaryButtonTrailingIcon",type:"ReactNode",default:"undefined",desc:"Trailing icon for secondary button.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Additional style for outer card container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Card"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Cards contain content and actions about a single subject, supporting hero images, avatars, tags, and flexible action footers."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"CardExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},sm=({isDark:s,story:l="carousel-intro"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const p=[];return p.push("import { Ux4gCarousel, View, Text, StyleSheet } from 'ux4g-react-native-design-system';"),p.push(""),l==="carousel-rich-hero"?(p.push("// Rich Hero Carousel with Gradient Slides"),p.push("const slides = ["),p.push("  {"),p.push('    id: "1",'),p.push('    title: "Featured",'),p.push('    description: "Discover our latest collection",'),p.push('    gradient: ["#667eea", "#764ba2"],'),p.push('    badge: "FEATURED",'),p.push('    buttonText: "Explore Now",'),p.push("  },"),p.push("  {"),p.push('    id: "2",'),p.push('    title: "New Update",'),p.push('    description: "Check out what is new",'),p.push('    gradient: ["#f093fb", "#f5576c"],'),p.push('    badge: "NEW",'),p.push('    buttonText: "Learn More",'),p.push("  },"),p.push("];"),p.push(""),p.push("<Ux4gCarousel"),p.push("  height={240}"),p.push("  autoPlay={true}"),p.push("  autoPlayInterval={3500}"),p.push("  showPagination={true}"),p.push("  showArrows={true}"),p.push("  items={slides.map((slide) => ("),p.push("    <View key={slide.id} style={styles.slide}>"),p.push("      <View style={styles.badge}><Text style={styles.badgeText}>{slide.badge}</Text></View>"),p.push("      <Text style={styles.title}>{slide.title}</Text>"),p.push("      <Text style={styles.desc}>{slide.description}</Text>"),p.push("    </View>"),p.push("  ))}"),p.push("/>")):l==="carousel-image"?(p.push("// Image Carousel"),p.push("const images = ["),p.push('  "https://picsum.photos/seed/slide1/400/200",'),p.push('  "https://picsum.photos/seed/slide2/400/200",'),p.push('  "https://picsum.photos/seed/slide3/400/200",'),p.push('  "https://picsum.photos/seed/slide4/400/200",'),p.push("];"),p.push(""),p.push("<Ux4gCarousel"),p.push("  height={200}"),p.push("  autoPlay={true}"),p.push("  items={images.map((url, i) => ("),p.push("    <Image key={i} source={{ uri: url }} style={styles.image} />"),p.push("  ))}"),p.push("/>")):(p.push("// Introduction - Hero Banner + Image Gallery"),p.push("<Ux4gCarousel"),p.push("  height={240}"),p.push("  autoPlay={true}"),p.push("  showPagination={true}"),p.push("  items={[...]}"),p.push("/>")),p.join(`
`)},[l]),b=()=>{let p="";l==="carousel-rich-hero"?p=`import React from 'react';
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
});`:l==="carousel-image"?p=`import React from 'react';
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
});`;const T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gCarousel%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"500px",border:"none",borderRadius:"8px"},title:"Expo Snack Carousel Preview"})},x=[{name:"items",type:"ReactNode[]",default:"required",desc:"Array of slide widgets to display in carousel.",required:!0},{name:"autoPlay",type:"boolean",default:"true",desc:"Enable auto-play scrolling.",required:!1},{name:"autoPlayInterval",type:"number",default:"3000",desc:"Auto-play interval in milliseconds.",required:!1},{name:"showPagination",type:"boolean",default:"true",desc:"Show bottom pagination dots.",required:!1},{name:"showArrows",type:"boolean",default:"false",desc:"Show arrow navigation buttons.",required:!1},{name:"height",type:"number",default:"200",desc:"Carousel container height.",required:!1},{name:"viewportFraction",type:"number",default:"1.0",desc:"Fraction of viewport occupied by each item.",required:!1},{name:"paginationVariant",type:"Ux4gPaginationVariant",default:"'default'",desc:"Pagination indicator style variant.",required:!1},{name:"paginationSize",type:"Ux4gPaginationSize",default:"'small'",desc:"Pagination indicator size.",required:!1},{name:"activeColor",type:"string",default:"undefined",desc:"Active indicator color override.",required:!1},{name:"inactiveColor",type:"string",default:"undefined",desc:"Inactive indicator and arrow background color override.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom container style override.",required:!1}],i={"carousel-intro":{title:"Carousel",description:"Carousel displays horizontally scrollable content with auto-play, pagination dots, and optional arrow navigation. Below are two showcase demos: a Hero Banner carousel and an Image Gallery carousel."},"carousel-rich-hero":{title:"Carousel",description:"Rich hero carousel with gradient slides, badges, titles, descriptions, and CTA buttons. Perfect for featured content banners."},"carousel-image":{title:"Carousel",description:"Image-based carousel displaying network images with auto-play and pagination. Minimal configuration for simple image galleries."}},w=i[l]||i["carousel-intro"];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:w.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:w.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"CarouselExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},om=s=>s==="journey-timeline"?"journey-timeline-basic":["journey-timeline-basic","journey-timeline-horizontal","journey-timeline-custom"].includes(s)?s:"journey-timeline-basic",lm={"journey-timeline-basic":{title:"Journey Timeline",description:"Vertical step-by-step journey with completed, current, and upcoming states."},"journey-timeline-horizontal":{title:"Horizontal Timeline",description:"A timeline arranged horizontally, useful for wide spaces or scrolling views."},"journey-timeline-custom":{title:"Journey Timeline",description:"Custom statuses with badge positions, step numbers, and custom card content."}},cm=s=>s==="journey-timeline-horizontal"?`import React from 'react';
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
}`:s==="journey-timeline-custom"?`import React from 'react';
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
}`,dm=s=>s==="journey-timeline-horizontal"?`        <Ux4gJourneyTimeline
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
        />`:s==="journey-timeline-custom"?`        <Ux4gJourneyTimeline
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
        />`,um=({isDark:s,story:l="journey-timeline-basic"})=>{const[d,m]=k.useState("preview"),h=om(l),b=lm[h],x=k.useMemo(()=>cm(h),[h]),i=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gJourneyTimeline, Ux4gThemeProvider, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${dm(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gJourneyTimeline%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack JourneyTimeline Preview"})},w=[{name:"steps",type:"Ux4gJourneyStep[]",default:"required",desc:"List of journey steps to render.",required:!0},{name:"header",type:"Ux4gJourneyHeader",default:"undefined",desc:"Optional title/description/header icon block.",required:!1},{name:"currentStep",type:"number | null",default:"undefined",desc:"Current active step index. Overrides step-level state.",required:!1},{name:"orientation",type:"'vertical' | 'horizontal'",default:"'vertical'",desc:"Direction of timeline layout.",required:!1},{name:"indicatorSize",type:"number",default:"20",desc:"Diameter of step indicator circles.",required:!1},{name:"lineWidth",type:"number",default:"3",desc:"Thickness of connecting lines.",required:!1},{name:"indicatorCardSpacing",type:"number",default:"12",desc:"Gap between indicator and step card.",required:!1},{name:"stepSpacing",type:"number",default:"12",desc:"Spacing between steps.",required:!1},{name:"activeColor",type:"string",default:"theme primary",desc:"Color for completed/current indicators and lines.",required:!1},{name:"inactiveColor",type:"string",default:"onSurface @ 25%",desc:"Color for upcoming indicators and lines.",required:!1},{name:"cardBorderRadius",type:"number",default:"8",desc:"Border radius for step cards.",required:!1},{name:"cardPadding",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Padding override for each step card.",required:!1},{name:"cardColor",type:"string",default:"theme surface",desc:"Background color for cards.",required:!1},{name:"cardBorderColor",type:"string",default:"onSurface @ 10%",desc:"Border color for cards.",required:!1},{name:"dateStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Default style override for date text.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Default style override for title text.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for timeline container.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"JourneyTimelineExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},pm=s=>s==="link"?"link-basic":["link-basic","link-text","link-custom-child"].includes(s)?s:"link-basic",mm={"link-basic":{title:"Link",description:"Wrap any child widget and open an external URL on tap."},"link-text":{title:"Link",description:"Text-only hyperlinks using Ux4gLink wrapper."},"link-custom-child":{title:"Link",description:"Custom child content (card/button row) made clickable via Ux4gLink."}},hm=s=>s==="link-text"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gLink } from 'ux4g-react-native-design-system';

export default function LinkTextExample() {
  return (
    <View style={{ gap: 12 }}>
      <Ux4gLink
        url='https://ux4g.com'
        child={
          <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
            Visit UX4G website
          </Text>
        }
      />

      <Ux4gLink
        url='https://github.com'
        child={
          <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
            Open GitHub
          </Text>
        }
      />
    </View>
  );
}`:s==="link-custom-child"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gLink, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function LinkCustomChildExample() {
  return (
    <Ux4gLink
      url='https://ux4g.com/docs'
      child={
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
      }
    />
  );
}`:`import React from 'react';
import { Text } from 'react-native';
import { Ux4gLink } from 'ux4g-react-native-design-system';

export default function LinkBasicExample() {
  return (
    <Ux4gLink
      url='https://www.ux4g.com'
      child={<Text style={{ color: '#2563EB', fontWeight: '600' }}>Open UX4G</Text>}
    />
  );
}`,fm=s=>s==="link-text"?`        <View style={styles.stack}>
          <Ux4gLink
            url='https://ux4g.com'
            child={
              <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
                Visit UX4G website
              </Text>
            }
          />
          <Ux4gLink
            url='https://github.com'
            child={
              <Text style={{ color: '#2563EB', textDecorationLine: 'underline' }}>
                Open GitHub
              </Text>
            }
          />
        </View>`:s==="link-custom-child"?`        <Ux4gLink
          url='https://ux4g.com/docs'
          child={
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
          }
        />`:`        <Ux4gLink
          url='https://www.ux4g.com'
          child={<Text style={{ color: '#2563EB', fontWeight: '600' }}>Open UX4G</Text>}
        />`,gm=({isDark:s,story:l="link-basic"})=>{const[d,m]=k.useState("preview"),h=pm(l),b=mm[h],x=k.useMemo(()=>hm(h),[h]),i=()=>{const p=`import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { Ux4gLink, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${fm(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gLink%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Link Preview"})},w=[{name:"child",type:"ReactNode",default:"required",desc:"Widget rendered as clickable content.",required:!0},{name:"url",type:"string",default:"required",desc:"URL opened externally on tap.",required:!0},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for wrapper.",required:!1},{name:"accessibilityLabel",type:"string",default:"url",desc:"Screen reader label.",required:!1},{name:"disabled",type:"boolean",default:"false",desc:"Disables interaction when true.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"LinkExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},xm=s=>s==="modal"?"modal-full-preview":["modal-full-preview","modal-header-left","modal-header-centered"].includes(s)?s:"modal-full-preview",ym={"modal-full-preview":{title:"Modal",description:"Full preview modal with subtitle/body copy and two footer buttons."},"modal-header-left":{title:"Modal",description:"Header-image modal with left-aligned content and standard action footer."},"modal-header-centered":{title:"Modal",description:"Header-image modal with centered content and destructive primary CTA."}},bm=s=>s==="modal-header-left"?`import React, { useState } from 'react';
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
}`:s==="modal-header-centered"?`import React, { useState } from 'react';
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
}`,vm=s=>s==="modal-header-left"?`        <Ux4gButton text='Open Header Left Modal' onPress={() => setOpen(true)} />
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
        />`:s==="modal-header-centered"?`        <Ux4gButton text='Open Header Centered Modal' variant='outline' onPress={() => setOpen(true)} />
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
        />`,wm=({isDark:s,story:l="modal-full-preview"})=>{const[d,m]=k.useState("preview"),h=xm(l),b=ym[h],x=k.useMemo(()=>bm(h),[h]),i=()=>{const p=`import React, { useState } from 'react';
  import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gButton, Ux4gIcons, Ux4gModal, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${vm(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gModal%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Modal Preview"})},w=[{name:"visible",type:"boolean",default:"required",desc:"Controls modal visibility.",required:!0},{name:"onDismiss",type:"() => void",default:"required",desc:"Callback when backdrop or close action dismisses modal.",required:!0},{name:"alignment",type:"'leftAligned' | 'centered'",default:"'leftAligned'",desc:"Header/content alignment mode.",required:!1},{name:"headerTitle",type:"string",default:"'Header'",desc:"Modal header title.",required:!1},{name:"showDescription",type:"boolean",default:"false",desc:"Show or hide description text under header.",required:!1},{name:"descriptionText",type:"string",default:"'Write description here'",desc:"Header description text.",required:!1},{name:"showSubtitle",type:"boolean",default:"true",desc:"Show or hide subtitle inside content.",required:!1},{name:"subtitleText",type:"string",default:"'Subtitle'",desc:"Subtitle text in body section.",required:!1},{name:"showBody",type:"boolean",default:"true",desc:"Show body content section.",required:!1},{name:"bodyText",type:"string",default:"component default",desc:"Body copy when bodyContent is not provided.",required:!1},{name:"bodyContent",type:"ReactNode",default:"undefined",desc:"Custom body content override.",required:!1},{name:"leadingItem",type:"'none' | 'icon' | 'avatar' | 'image'",default:"'none'",desc:"Leading item type in header.",required:!1},{name:"showFooter",type:"boolean",default:"true",desc:"Show or hide footer action area.",required:!1},{name:"footerButtons",type:"'oneButton' | 'twoButtons' | 'oneButtonWithIcon' | 'twoButtonsWithIcon'",default:"'twoButtons'",desc:"Footer action layout preset.",required:!1},{name:"footerAlign",type:"'left' | 'right' | 'center' | 'split'",default:"'right'",desc:"Footer button alignment.",required:!1},{name:"isDestructive",type:"boolean",default:"false",desc:"Use destructive color styling for primary action.",required:!1},{name:"primaryButtonText",type:"string",default:"'Button'",desc:"Primary CTA text.",required:!1},{name:"secondaryButtonText",type:"string",default:"'Button'",desc:"Secondary CTA text.",required:!1},{name:"showCloseButton",type:"boolean",default:"true",desc:"Show top-right close icon button.",required:!1},{name:"backgroundColor",type:"string",default:"theme surface",desc:"Modal surface background override.",required:!1},{name:"cornerRadius",type:"number",default:"theme radius16",desc:"Modal corner radius override.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"ModalExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Sm=s=>s==="pagination"||s==="pagination-dotted"?"pagination-default-arrows":["pagination-default-arrows","pagination-capsule-arrows","pagination-capsule-dots","pagination-arrows-right"].includes(s)?s:"pagination-default-arrows",Cm={"pagination-default-arrows":{title:"Pagination",description:"Default dotted pagination with left and right arrow controls."},"pagination-capsule-arrows":{title:"Pagination",description:"Capsule container style with arrows and animated active dot."},"pagination-capsule-dots":{title:"Pagination",description:"Capsule dots-only pagination without arrow controls."},"pagination-arrows-right":{title:"Pagination",description:"Dotted pagination with both arrow controls aligned on the right."}},jm=s=>s==="pagination-capsule-arrows"?`import React, { useState } from 'react';
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
}`:s==="pagination-capsule-dots"?`import React, { useState } from 'react';
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
}`:s==="pagination-arrows-right"?`import React, { useState } from 'react';
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
}`,km=s=>s==="pagination-capsule-arrows"?`        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='capsule'
          size='small'
          showArrows={true}
        />`:s==="pagination-capsule-dots"?`        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='capsule'
          size='small'
          showArrows={false}
        />`:s==="pagination-arrows-right"?`        <Ux4gPagination
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
        />`,Tm=({isDark:s,story:l="pagination-default-arrows"})=>{const[d,m]=k.useState("preview"),h=Sm(l),b=Cm[h],x=k.useMemo(()=>jm(h),[h]),i=()=>{const p=`import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Ux4gPagination, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${km(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gPagination%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Pagination Preview"})},w=[{name:"totalPageCount",type:"number",default:"required",desc:"Total number of pages represented by dots.",required:!0},{name:"currentPageIndex",type:"number",default:"required",desc:"Current active zero-based page index.",required:!0},{name:"onPageChange",type:"(pageIndex: number) => void",default:"required",desc:"Callback fired when user selects a dot or arrow.",required:!0},{name:"showArrows",type:"boolean",default:"true",desc:"Shows previous and next arrow controls.",required:!1},{name:"arrowsOnRight",type:"boolean",default:"false",desc:"Places arrows on right side while dots stay on the left.",required:!1},{name:"variant",type:"'default' | 'defaultVariant' | 'capsule'",default:"'default'",desc:"Visual style of the pagination indicator.",required:!1},{name:"size",type:"'small' | 'medium'",default:"'small'",desc:"Size of dots and arrow buttons.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Disables interactions when false.",required:!1},{name:"activeColor",type:"string",default:"theme primary",desc:"Color used for active dot and arrows.",required:!1},{name:"inactiveColor",type:"string",default:"theme-based",desc:"Color used for inactive dots.",required:!1},{name:"inactiveBorderColor",type:"string",default:"theme-based",desc:"Border color for inactive dots.",required:!1},{name:"width",type:"number",default:"undefined",desc:"Optional explicit width for container.",required:!1},{name:"height",type:"number",default:"undefined",desc:"Optional explicit height for container.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style override for outer container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"PaginationExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Nm=s=>s==="popover"||s==="tooltip"?"popover-basic":["popover-basic","popover-rich","popover-placements","popover-custom-content","popover-trigger"].includes(s)?s:"popover-basic",Um={"popover-basic":{title:"Popover",description:"Basic popover built with Ux4gTooltip using text content."},"popover-rich":{title:"Popover",description:"Rich popover with title, body, and action area."},"popover-placements":{title:"Popover",description:"Placement variants: top, bottom, left, and right."},"popover-custom-content":{title:"Popover",description:"Custom content popover using a fully custom React node."},"popover-trigger":{title:"Popover",description:"Trigger variants using press and long press interactions."}},Pm=s=>s==="popover-rich"?`import React from 'react';
import { Text, View } from 'react-native';
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
      <View style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#4A2BC2' }}>
        <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>Open Rich Popover</Text>
      </View>
    </Ux4gTooltip>
  );
}`:s==="popover-placements"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const Anchor = ({ label }: { label: string }) => (
  <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#EEF2FF' }}>
    <Text style={{ color: '#312E81', fontWeight: '600' }}>{label}</Text>
  </View>
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
}`:s==="popover-custom-content"?`import React from 'react';
import { Text, View } from 'react-native';
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
      <View style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#E0E7FF' }}>
        <Text style={{ color: '#312E81', fontWeight: '600' }}>Open Custom Popover</Text>
      </View>
    </Ux4gTooltip>
  );
}`:s==="popover-trigger"?`import React from 'react';
import { Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const TriggerChip = ({ label }: { label: string }) => (
  <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#F3F4F6' }}>
    <Text style={{ color: '#111827', fontWeight: '600' }}>{label}</Text>
  </View>
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
import { Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function PopoverBasicExample() {
  return (
    <Ux4gTooltip text='This is a basic popover message.' placement='top' trigger='press'>
      <View style={{ paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: '#EEF2FF' }}>
        <Text style={{ color: '#312E81', fontWeight: '600' }}>Open Popover</Text>
      </View>
    </Ux4gTooltip>
  );
}`,Vm=s=>s==="popover-rich"?`        <Ux4gTooltip
          title='Verification Required'
          text='Please verify your mobile number to continue this step.'
          placement='bottom'
          trigger='press'
          action={<Ux4gButton text='Verify Now' size='small' />}
          isPersistent={true}
        >
          <View style={styles.primaryAnchor}>
            <Text style={styles.primaryAnchorText}>Open Rich Popover</Text>
          </View>
        </Ux4gTooltip>`:s==="popover-placements"?`        <View style={styles.placementStack}>
          <Ux4gTooltip text='Top placement' placement='top' trigger='press'>
            <View style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Top</Text></View>
          </Ux4gTooltip>
          <View style={styles.rowGap}>
            <Ux4gTooltip text='Left placement' placement='left' trigger='press'>
              <View style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Left</Text></View>
            </Ux4gTooltip>
            <Ux4gTooltip text='Right placement' placement='right' trigger='press'>
              <View style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Right</Text></View>
            </Ux4gTooltip>
          </View>
          <Ux4gTooltip text='Bottom placement' placement='bottom' trigger='press'>
            <View style={styles.neutralAnchor}><Text style={styles.neutralAnchorText}>Bottom</Text></View>
          </Ux4gTooltip>
        </View>`:s==="popover-custom-content"?`        <Ux4gTooltip
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
          <View style={styles.neutralAnchor}>
            <Text style={styles.neutralAnchorText}>Open Custom Popover</Text>
          </View>
        </Ux4gTooltip>`:s==="popover-trigger"?`        <View style={styles.placementStack}>
          <Ux4gTooltip text='Opens on press' trigger='press' placement='top'>
            <View style={styles.grayAnchor}><Text style={styles.grayAnchorText}>Press Trigger</Text></View>
          </Ux4gTooltip>
          <Ux4gTooltip text='Opens on long press' trigger='longPress' placement='top'>
            <View style={styles.grayAnchor}><Text style={styles.grayAnchorText}>Long Press Trigger</Text></View>
          </Ux4gTooltip>
        </View>`:`        <Ux4gTooltip text='This is a basic popover message.' placement='top' trigger='press'>
          <View style={styles.neutralAnchor}>
            <Text style={styles.neutralAnchorText}>Open Popover</Text>
          </View>
        </Ux4gTooltip>`,Em=({isDark:s,story:l="popover-basic"})=>{const[d,m]=k.useState("preview"),h=Nm(l),b=Um[h],x=k.useMemo(()=>Pm(h),[h]),i=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gButton, Ux4gThemeProvider, Ux4gTooltip } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${Vm(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gPopover%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Popover Preview"})},w=[{name:"children",type:"ReactNode",default:"required",desc:"Anchor node that triggers the popover.",required:!0},{name:"text",type:"string",default:"undefined",desc:"Primary message text.",required:!1},{name:"title",type:"string",default:"undefined",desc:"Title text for rich popover.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Optional icon content before text/title.",required:!1},{name:"placement",type:"Ux4gTooltipPlacement",default:"'top'",desc:"Placement of popover relative to anchor.",required:!1},{name:"trigger",type:"'press' | 'longPress'",default:"'longPress'",desc:"Interaction used to open popover.",required:!1},{name:"isPersistent",type:"boolean",default:"false",desc:"Keeps popover open until dismissed when true.",required:!1},{name:"action",type:"ReactNode",default:"undefined",desc:"Action area content for rich popover.",required:!1},{name:"customContent",type:"ReactNode",default:"undefined",desc:"Completely custom content replacing default body.",required:!1},{name:"backgroundColor",type:"string",default:"theme-based",desc:"Popover background color override.",required:!1},{name:"contentColor",type:"string",default:"theme-based",desc:"Text/content color override.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for default text.",required:!1},{name:"cornerRadius",type:"number",default:"4",desc:"Corner radius for popover bubble.",required:!1},{name:"arrowWidth",type:"number",default:"10",desc:"Arrow width for popover pointer.",required:!1},{name:"arrowHeight",type:"number",default:"6",desc:"Arrow height for popover pointer.",required:!1},{name:"maxWidth",type:"number",default:"240",desc:"Maximum width of popover content.",required:!1},{name:"autoShow",type:"boolean",default:"false",desc:"Shows popover automatically after mount.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"PopoverExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Am=s=>s==="progress"||s==="progress-indicator"?"progress-linear":s==="progress-sla"||s==="progress-sla-indicator"?"progress-sla-circular":["progress-linear","progress-circular","progress-half-circle","progress-animated","progress-sla-circular","progress-sla-linear"].includes(s)?s:"progress-linear",Dm={"progress-linear":{title:"Progress Indicator",description:"Linear progress parity set: rounded, sharp, icon+hint, and inside/outside percentage placements."},"progress-circular":{title:"Progress Indicator",description:"Circular progress parity set with size scaling, center content, metadata labels, and stroke cap variations."},"progress-half-circle":{title:"Progress Indicator",description:"Half-circle progress parity set with showScale modes, size variants, and gradient rendering."},"progress-animated":{title:"Progress Indicator",description:"Animated circular and half-circle indicators using Flutter-matched default easing duration behavior."},"progress-sla-circular":{title:"Progress SLA Indicator",description:"SLA circular progress status cards with semantic color variants."},"progress-sla-linear":{title:"Progress SLA Indicator",description:"SLA linear progress rows with sharp and rounded style columns."}},Fm=s=>s==="progress-sla-circular"?`import React from 'react';
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
}`:s==="progress-sla-linear"?`import React from 'react';
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
}`:s==="progress-circular"?`import React from 'react';
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
}`:s==="progress-half-circle"?`import React from 'react';
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
}`:s==="progress-animated"?`import React from 'react';
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
}`,Bm=s=>s==="progress-sla-circular"?`        <View style={styles.slaContainer}>
          <Text style={styles.sectionTitle}>SLA Circular Progress</Text>
          <View style={styles.slaCircularRow}>
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#6A4EFF' gradientColors={['#DCD4FF', '#6A4EFF']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#EFEAFF', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#6A4EFF', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#FFA827' gradientColors={['#FFF2D9', '#FFA827']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#FFF7E6', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#FFA827', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#F55E57' gradientColors={['#FFECEE', '#F55E57']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#FFF0F0', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#F55E57', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
            <Ux4gCircularProgress value={0.5} size='xl' progressColor='#1AA64A' gradientColors={['#DFF9E8', '#1AA64A']} centerValueText='8' centerDescription='days left' label='Label' description='Description' footer={<View style={{ backgroundColor: '#F2FCEF', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}><Text style={{ color: '#1AA64A', fontSize: 12, fontWeight: '700' }}>Label</Text></View>} />
          </View>
        </View>`:s==="progress-sla-linear"?`        <View style={styles.slaContainer}>
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
        </View>`:s==="progress-circular"?`        <View style={styles.stackCentered}>
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
        </View>`:s==="progress-half-circle"?`        <View style={styles.stackCentered}>
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
        </View>`:s==="progress-animated"?`        <View style={styles.stackCentered}>
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
        </View>`,rd=({isDark:s,story:l="progress-linear"})=>{const[d,m]=k.useState("preview"),h=Am(l),b=Dm[h],x=k.useMemo(()=>Fm(h),[h]),i=()=>{const p=`import React from 'react';
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
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${Bm(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gProgress%20Indicator%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Progress Indicator Preview"})},w=[{name:"value",type:"number",default:"required",desc:"Progress value from 0.0 to 1.0.",required:!0},{name:"shape",type:"'sharp' | 'rounded'",default:"'rounded'",desc:"Linear progress corner shape parity with Flutter.",required:!1},{name:"showScale",type:"boolean",default:"false",desc:"Shows 0% and 100% scale labels on half-circle indicators.",required:!1},{name:"strokeCap",type:"'butt' | 'round'",default:"component-specific",desc:"Arc endpoint style for circular and half-circle indicators.",required:!1},{name:"startAngle",type:"number",default:"-90",desc:"Start angle for circular progress arc.",required:!1},{name:"gradientColors",type:"string[]",default:"theme-based",desc:"Gradient colors for progress fill.",required:!1},{name:"progressColor / color",type:"string",default:"theme primary",desc:"Solid progress color override.",required:!1},{name:"trackColor",type:"string",default:"theme-based",desc:"Background track color.",required:!1},{name:"size",type:"variant string",default:"component-specific",desc:"Preset size token for circular and half-circle indicators.",required:!1},{name:"strokeWidth",type:"number",default:"auto",desc:"Stroke thickness for circular and half-circle indicators.",required:!1},{name:"label / hint / description",type:"string",default:"undefined",desc:"Supporting text fields depending on indicator type.",required:!1},{name:"showPercentage / labelPosition",type:"boolean / enum",default:"false / outside",desc:"Linear progress percentage visibility and placement.",required:!1},{name:"duration",type:"number",default:"700",desc:"Animation duration for animated progress components.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"ProgressIndicatorExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},qm=s=>s==="radio"||s==="radio-button"?"radio-basic":["radio-basic","radio-sizes","radio-status"].includes(s)?s:"radio-basic",zm={"radio-basic":{title:"Radio Button",description:"Single-choice selection control with label, helper text, required marker, and disabled states."},"radio-sizes":{title:"Radio Button",description:"Size variants for compact to prominent radio controls in form layouts."},"radio-status":{title:"Radio Button",description:"Validation-focused status styles with semantic ring and description variants."}},Im=s=>s==="radio-sizes"?`import React, { useState } from 'react';
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
}`:s==="radio-status"?`import React, { useState } from 'react';
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
}`,Rm=s=>s==="radio-sizes"?`        <View style={styles.stackFull}>
          <Ux4gRadioButton value='small' groupValue={sizeChoice} onChanged={setSizeChoice} size='small' label='Small Radio (16pt)' description='Compact control' />
          <Ux4gRadioButton value='medium' groupValue={sizeChoice} onChanged={setSizeChoice} size='medium' label='Medium Radio (20pt)' description='Default size' />
          <Ux4gRadioButton value='large' groupValue={sizeChoice} onChanged={setSizeChoice} size='large' label='Large Radio (24pt)' description='High emphasis selection' />
        </View>`:s==="radio-status"?`        <View style={styles.stackFull}>
          <Ux4gRadioButton value='defaultStatus' groupValue={statusChoice} onChanged={setStatusChoice} label='Default State' description='Standard helper variant' descriptionVariant='helper' status='defaultStatus' />
          <Ux4gRadioButton value='error' groupValue={statusChoice} onChanged={setStatusChoice} label='Error State' description='Please correct this selection' descriptionVariant='error' status='error' />
          <Ux4gRadioButton value='warning' groupValue={statusChoice} onChanged={setStatusChoice} label='Warning State' description='Review this choice carefully' descriptionVariant='warning' status='warning' />
          <Ux4gRadioButton value='success' groupValue={statusChoice} onChanged={setStatusChoice} label='Success State' description='Selection looks good' descriptionVariant='success' status='success' />
        </View>`:`        <View style={styles.stackFull}>
          <Ux4gRadioButton value='option-a' groupValue={groupValue} onChanged={setGroupValue} label='Option A' description='Primary choice for this field' />
          <Ux4gRadioButton value='option-b' groupValue={groupValue} onChanged={setGroupValue} label='Option B' description='Secondary choice for this field' />
          <Ux4gRadioButton value='option-c' groupValue={groupValue} onChanged={setGroupValue} label='Required Option' description='Marked as mandatory input' isRequired={true} />
          <Ux4gRadioButton value='option-d' groupValue={groupValue} label='Disabled Option' description='Unavailable in current context' enabled={false} />
        </View>`,$m=({isDark:s,story:l="radio-basic"})=>{const[d,m]=k.useState("preview"),h=qm(l),b=zm[h],x=k.useMemo(()=>Im(h),[h]),i=()=>{const p=`import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gRadioButton, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [groupValue, setGroupValue] = useState('option-a');
  const [sizeChoice, setSizeChoice] = useState('medium');
  const [statusChoice, setStatusChoice] = useState('defaultStatus');

  return (
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${Rm(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gRadioButton%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"620px",border:"none",borderRadius:"8px"},title:"Expo Snack Radio Button Preview"})},w=[{name:"value",type:"T",default:"required",desc:"The value represented by this radio option.",required:!0},{name:"groupValue",type:"T | null",default:"undefined",desc:"Currently selected value in the radio group.",required:!1},{name:"onChanged",type:"(value: T) => void",default:"undefined",desc:"Called when this option is selected.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Primary label text.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Secondary helper or status message.",required:!1},{name:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"Radio indicator size token.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Shows required asterisk on label.",required:!1},{name:"descriptionVariant",type:"'helper' | 'error' | 'warning' | 'success'",default:"'helper'",desc:"Semantic style for description text and icon.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Visual status for radio ring color.",required:!1},{name:"color",type:"string",default:"theme.colors.primary",desc:"Explicit ring color override.",required:!1},{name:"labelColor",type:"string",default:"theme.colors.onSurface",desc:"Custom label text color.",required:!1},{name:"trailingIcon",type:"Ux4gIconProp",default:"undefined",desc:"Optional trailing icon beside label.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether option is interactive.",required:!1},{name:"style",type:"StyleProp<ViewStyle> | ((state) => StyleProp<ViewStyle>)",default:"undefined",desc:"Style override for row Pressable.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"descriptionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for description text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"RadioButtonExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Lm=s=>s==="result-list"||s==="result"?"result-list-basic":["result-list-basic","result-list-metadata","result-list-expanded","result-list-rejected"].includes(s)?s:"result-list-basic",Wm={"result-list-basic":{title:"Result List",description:"Collapsible summary row with details grid and optional action button."},"result-list-metadata":{title:"Result List",description:"Result list variants with status tags and segmented metadata pills."},"result-list-expanded":{title:"Result List",description:"Initially expanded view with custom content and multi-column details."},"result-list-rejected":{title:"Result List",description:"Rejected application state with CTA and rejection help details."}},Mm=s=>s==="result-list-rejected"?`import React from 'react';
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
}`:s==="result-list-metadata"?`import React from 'react';
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
}`:s==="result-list-expanded"?`import React from 'react';
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
}`,_m=s=>s==="result-list-rejected"?`        <View style={styles.metadataCard}>
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
        </View>`:s==="result-list-metadata"?`        <View style={styles.metadataCard}>
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
        </View>`:s==="result-list-expanded"?`        <View style={styles.stackFull}>
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
        </View>`,Om=({isDark:s,story:l="result-list-basic"})=>{const[d,m]=k.useState("preview"),h=Lm(l),b=Wm[h],x=k.useMemo(()=>Mm(h),[h]),i=()=>{const p=`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ux4gResultList, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${_m(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gResultList%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Result List Preview"})},w=[{name:"title",type:"string",default:"required",desc:"Primary heading for the result row.",required:!0},{name:"titleTrailing",type:"ReactNode",default:"undefined",desc:"Widget rendered inline after title.",required:!1},{name:"statusTag",type:"string",default:"undefined",desc:"Optional status text shown as a tag.",required:!1},{name:"tagColorScheme",type:"'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info'",default:"'neutral'",desc:"Color scheme for status tag.",required:!1},{name:"metadataSegments",type:"Ux4gPillSegment[]",default:"undefined",desc:"Segmented pill metadata row.",required:!1},{name:"customMetadata",type:"ReactNode",default:"undefined",desc:"Custom metadata widget replacing segments.",required:!1},{name:"actionButtonText",type:"string",default:"undefined",desc:"Action button label on right side.",required:!1},{name:"onActionPressed",type:"() => void",default:"undefined",desc:"Action button press handler.",required:!1},{name:"details",type:"Ux4gResultDetail[]",default:"[]",desc:"Details grid shown when expanded.",required:!1},{name:"detailsColumns",type:"number",default:"2",desc:"Number of detail columns on wide layouts.",required:!1},{name:"expandedChild",type:"ReactNode",default:"undefined",desc:"Additional custom content in expanded area.",required:!1},{name:"initialExpanded",type:"boolean",default:"false",desc:"Initial expanded/collapsed state.",required:!1},{name:"onToggle",type:"(expanded: boolean) => void",default:"undefined",desc:"Called when expansion toggles.",required:!1},{name:"showBottomDivider",type:"boolean",default:"true",desc:"Controls bottom divider visibility.",required:!1},{name:"contentPadding",type:"number",default:"16",desc:"Internal content padding for header and body.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"ResultListExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Xm=({isDark:s,story:l="checkbox-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { Ux4gCheckbox } from 'ux4g-react-native-design-system';"),i.push("import { useState } from 'react';"),i.push(""),i.push("// Checked State"),i.push("const [checked, setChecked] = useState(true);"),i.push("<Ux4gCheckbox"),i.push("  value={checked}"),i.push('  label="Checked Checkbox"'),i.push('  description="Standard checked state"'),i.push("  onChanged={setChecked}"),i.push("/>"),i.push(""),i.push("// Indeterminate (Tristate) State"),i.push("const [tristate, setTristate] = useState<boolean | null>(null);"),i.push("<Ux4gCheckbox"),i.push("  value={tristate}"),i.push('  label="Indeterminate Checkbox"'),i.push('  description="Tristate dash indicator"'),i.push("  onChanged={setTristate}"),i.push("/>"),i.push(""),i.push("// Disabled Checkbox"),i.push("<Ux4gCheckbox"),i.push("  value={true}"),i.push('  label="Disabled Checkbox"'),i.push("  enabled={false}"),i.push("/>"),i.join(`
`)},[]),b=()=>{let i="";l==="checkbox-sizes"?i=`        <Ux4gCheckbox value={true} size="small" label="Small Checkbox (16pt)" description="Helper info" />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox value={true} size="medium" label="Medium Checkbox (20pt)" description="Default size" />
        <View style={{ height: 16 }} />
        <Ux4gCheckbox value={true} size="large" label="Large Checkbox (24pt)" description="Prominent option" />`:l==="checkbox-tristate"?i=`        <Ux4gCheckbox value={null} label="Select All Items" description="Partial selection state (null value)" />
        <View style={{ height: 12 }} />
        <View style={{ paddingLeft: 24, gap: 12 }}>
          <Ux4gCheckbox value={true} label="Option 1" size="small" />
          <Ux4gCheckbox value={false} label="Option 2" size="small" />
        </View>`:i=`        <Ux4gCheckbox 
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
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gCheckbox%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},x=[{name:"value",type:"boolean | null",default:"false",desc:"Checked state (`true` checked, `false` unchecked, `null` indeterminate).",required:!0},{name:"onChanged",type:"(newValue: boolean | null) => void",default:"required",desc:"Callback fired when user presses checkbox or label.",required:!0},{name:"label",type:"string",default:"undefined",desc:"Primary text label next to checkbox.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Secondary helper/description text.",required:!1},{name:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",desc:"Checkbox box size.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Appends red asterisk to the label.",required:!1},{name:"hasError",type:"boolean",default:"false",desc:"Highlights checkbox border in error state.",required:!1},{name:"descriptionVariant",type:"'helper' | 'error' | 'warning' | 'success'",default:"'helper'",desc:"Semantic style for description text.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether checkbox is interactive.",required:!1},{name:"activeColor",type:"string",default:"theme.colors.primary",desc:"Active fill/border color for checked/indeterminate state.",required:!1},{name:"checkColor",type:"string",default:"theme.colors.onPrimary",desc:"Checkmark/dash icon color.",required:!1},{name:"style",type:"StyleProp<ViewStyle> | (state) => StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer Pressable row.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text.",required:!1},{name:"descriptionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for description text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Checkbox"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Selection control for single items, multi-select lists, and parent-child tristate selection with interactive checkmark and indeterminate state animations."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"CheckboxExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},Hm=({isDark:s,story:l="chips-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { "),i.push("  Ux4gChoiceChip,"),i.push("  Ux4gFilterChip,"),i.push("  Ux4gInputChip,"),i.push("  Ux4gSuggestionChip,"),i.push("  Ux4gActionChip,"),i.push("} from 'ux4g-react-native-design-system';"),i.push("import { useState } from 'react';"),i.push(""),i.push("// Choice Chips"),i.push("const [selected, setSelected] = useState(true);"),i.push("<Ux4gChoiceChip"),i.push('  text="Option 1"'),i.push("  selected={selected}"),i.push("  onClick={() => setSelected(!selected)}"),i.push("/>"),i.push(""),i.push("// Filter Chips"),i.push("<Ux4gFilterChip"),i.push('  text="In Stock"'),i.push("  selected={true}"),i.push("  onClick={() => {}}"),i.push("/>"),i.push(""),i.push("// Input Chips with Delete"),i.push("<Ux4gInputChip"),i.push('  text="React Native"'),i.push(`  onDismiss={() => console.log("Dismissed")}
/>`),i.push(""),i.push("// Suggestion Chips"),i.push("<Ux4gSuggestionChip"),i.push('  text="Design System"'),i.push(`  onClick={() => {}}
/>`),i.join(`
`)},[]),b=()=>{let i="";l==="chips-action"?i=`        <Ux4gSuggestionChip text="React Native" onClick={() => {}} />
        <View style={{ height: 12 }} />
        <Ux4gSuggestionChip text="UX4G Design System" onClick={() => {}} />
        <View style={{ height: 12 }} />
        <Ux4gActionChip text="Download Report" onClick={() => {}} />
        <View style={{ height: 12 }} />
        <Ux4gActionChip text="Share Link" enabled={false} onClick={() => {}} />`:l==="chips-input"?i=`        <Ux4gInputChip text="React Native" onDismiss={() => console.log("Dismissed 1")} />
        <View style={{ height: 12 }} />
        <Ux4gInputChip text="TypeScript" onDismiss={() => console.log("Dismissed 2")} />
        <View style={{ height: 12 }} />
        <Ux4gInputChip text="Disabled Tag" enabled={false} onDismiss={() => {}} />`:i=`        <Ux4gChoiceChip text="Choice 1 (Selected)" selected={choice1} onClick={() => setChoice1(!choice1)} />
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
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gChips%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Chips Preview"})},x=[{name:"text",type:"string",default:"required",desc:"Chip label text (required by ChoiceChip, FilterChip, InputChip).",required:!0},{name:"selected",type:"boolean",default:"required",desc:"Selection state (required by ChoiceChip and FilterChip).",required:!0},{name:"onClick",type:"() => void",default:"required",desc:"Tap callback (required by ChoiceChip and FilterChip).",required:!0},{name:"onPress",type:"() => void",default:"undefined",desc:"Optional press callback alias for ChoiceChip/FilterChip.",required:!1},{name:"onDismiss",type:"() => void",default:"undefined",desc:"Dismiss callback for InputChip trailing close action.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the chip is interactive.",required:!1},{name:"size",type:"Ux4gChoiceChipSize | Ux4gFilterChipSize | Ux4gInputChipSize",default:"'m'",desc:"Size token (Choice/Filter: s|m, Input: xs|s|m).",required:!1},{name:"leadingContent",type:"ReactNode",default:"undefined",desc:"Optional leading content/icon.",required:!1},{name:"trailingContent",type:"ReactNode",default:"undefined",desc:"Optional trailing content/icon (Choice/Filter).",required:!1},{name:"borderRadius",type:"number",default:"size-based",desc:"Corner radius override (ChoiceChip only).",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for chip container.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for chip text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Chips"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Compact interactive elements representing choices, attributes, actions, or input tags. Includes Choice, Filter, Input, Suggestion, and Action chips."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"ChipsExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},Gm=({isDark:s,story:l="chip-group-wrap"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { Ux4gChipGroup, Ux4gChoiceChip, Ux4gInputChipField, Ux4gInputChip } from 'ux4g-react-native-design-system';"),i.push("import { useState } from 'react';"),i.push(""),i.push("// Wrap Chip Group"),i.push("const [selectedIdx, setSelectedIdx] = useState(0);"),i.push("<Ux4gChipGroup"),i.push('  arrangement="wrap"'),i.push("  spacing={8}"),i.push("  runSpacing={8}"),i.push('  chips={["React Native", "TypeScript", "Expo", "Storybook", "UX4G"].map((tag, i) => ('),i.push("    <Ux4gChoiceChip"),i.push("      key={tag}"),i.push("      text={tag}"),i.push("      selected={selectedIdx === i}"),i.push("      onClick={() => setSelectedIdx(i)}"),i.push("    />"),i.push("  ))}"),i.push("/>"),i.push(""),i.push("// Input Chip Field"),i.push('const [text, setText] = useState("");'),i.push('const [tags, setTags] = useState(["Frontend", "UI"]);'),i.push("<Ux4gInputChipField"),i.push("  value={text}"),i.push("  onValueChange={setText}"),i.push("  onAddChip={(newTag) => setTags([...tags, newTag])}"),i.push("  chips={tags.map(t => <Ux4gInputChip key={t} text={t} onDismiss={() => setTags(tags.filter(x => x !== t))} />)}"),i.push("/>"),i.join(`
`)},[]),b=()=>{let i="";l==="chip-group-input-field"?i=`        <Ux4gInputChipField
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
        />`:i=`        <Ux4gChipGroup
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
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gChipGroup%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack ChipGroup Preview"})},x=[{name:"chips",type:"ReactNode[]",default:"required in InputChipField / optional in ChipGroup",desc:"Chip elements to render in group/field.",required:!0},{name:"children",type:"ReactNode",default:"undefined",desc:"Alternative to `chips` for Ux4gChipGroup.",required:!1},{name:"arrangement",type:"'horizontal' | 'wrap'",default:"'wrap'",desc:"Layout arrangement for Ux4gChipGroup and InputChipField chips.",required:!1},{name:"spacing",type:"number",default:"8",desc:"Horizontal gap between chips (Ux4gChipGroup).",required:!1},{name:"runSpacing",type:"number",default:"8",desc:"Vertical gap between wrapped rows (Ux4gChipGroup).",required:!1},{name:"value",type:"string",default:"required",desc:"Current input text value (Ux4gInputChipField).",required:!0},{name:"onValueChange",type:"(value: string) => void",default:"required",desc:"Input change callback (Ux4gInputChipField).",required:!0},{name:"onAddChip",type:"(chipText: string) => void",default:"required",desc:"Callback when a new chip is added (Ux4gInputChipField).",required:!0},{name:"isDropdown",type:"boolean",default:"false",desc:"Switches field to dropdown selection mode.",required:!1},{name:"dropdownOptions",type:"string[]",default:"[]",desc:"Dropdown options when `isDropdown` is true.",required:!1},{name:"placeholder",type:"string",default:"'Add chip...'",desc:"Placeholder text for input/dropdown trigger.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the field/group interaction is enabled.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Chip Group"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Group container for arranging multiple chips horizontally or wrapped across multiple lines, including interactive InputChipField controls."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"ChipGroupExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},Qm=({isDark:s,story:l="divider-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { Ux4gDivider } from 'ux4g-react-native-design-system';"),i.push("import { View, Text } from 'react-native';"),i.push(""),i.push("// Horizontal Solid Divider"),i.push("<Ux4gDivider />"),i.push(""),i.push("// Dashed Divider with Indents"),i.push("<Ux4gDivider"),i.push('  style="dashed"'),i.push("  thickness={2}"),i.push("  startIndent={16}"),i.push("  endIndent={16}"),i.push("/>"),i.push(""),i.push("// Divider with Center Label"),i.push('<Ux4gDivider label="OR" />'),i.push(""),i.push("// Vertical Divider"),i.push('<View style={{ flexDirection: "row", height: 40, alignItems: "center" }}>'),i.push("  <Text>Left Item</Text>"),i.push('  <Ux4gDivider orientation="vertical" />'),i.push("  <Text>Right Item</Text>"),i.push("</View>"),i.join(`
`)},[]),b=()=>{let i="";l==="divider-styles"?i=`        <Text style={{ color: ${s?"'#fff'":"'#333'"}, marginBottom: 8 }}>Solid Line (Default):</Text>
        <Ux4gDivider style="solid" thickness={1} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${s?"'#fff'":"'#333'"}, marginBottom: 8 }}>Dashed Line:</Text>
        <Ux4gDivider style="dashed" thickness={2} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${s?"'#fff'":"'#333'"}, marginBottom: 8 }}>Dotted Line:</Text>
        <Ux4gDivider style="dotted" thickness={2} />`:l==="divider-label"?i=`        <Ux4gDivider label="OR" />
        
        <View style={{ height: 24 }} />
        
        <Ux4gDivider label="SECTION HEADER" style="dashed" />
        
        <View style={{ height: 24 }} />
        
        <Ux4gDivider label="CONTINUE" style="dotted" thickness={2} />`:l==="divider-vertical"?i=`        <View style={{ flexDirection: 'row', alignItems: 'center', height: 48 }}>
          <Text style={{ color: ${s?"'#fff'":"'#333'"} }}>Section A</Text>
          <Ux4gDivider orientation="vertical" startIndent={8} endIndent={8} />
          <Text style={{ color: ${s?"'#fff'":"'#333'"} }}>Section B</Text>
          <Ux4gDivider orientation="vertical" style="dashed" startIndent={8} endIndent={8} />
          <Text style={{ color: ${s?"'#fff'":"'#333'"} }}>Section C</Text>
        </View>`:i=`        <Text style={{ color: ${s?"'#fff'":"'#333'"}, marginBottom: 8 }}>Standard Horizontal Divider:</Text>
        <Ux4gDivider />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${s?"'#fff'":"'#333'"}, marginBottom: 8 }}>Indented Dashed Divider:</Text>
        <Ux4gDivider style="dashed" startIndent={24} endIndent={24} thickness={1.5} />
        
        <View style={{ height: 24 }} />
        
        <Text style={{ color: ${s?"'#fff'":"'#333'"}, marginBottom: 8 }}>Divider with Center Label:</Text>
        <Ux4gDivider label="OR LOG IN WITH" />`;const w=`import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ux4gDivider, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gDivider%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Divider Preview"})},x=[{name:"orientation",type:"'horizontal' | 'vertical'",default:"'horizontal'",desc:"Orientation direction of the divider line.",required:!1},{name:"color",type:"string",default:"theme.colors.onSurface @ 20%",desc:"Line color override.",required:!1},{name:"thickness",type:"number",default:"1.0",desc:"Thickness/stroke width of divider line.",required:!1},{name:"style",type:"'solid' | 'dashed' | 'dotted'",default:"'solid'",desc:"Stroke pattern style of the line.",required:!1},{name:"startIndent",type:"number",default:"0.0",desc:"Leading indentation before divider begins.",required:!1},{name:"endIndent",type:"number",default:"0.0",desc:"Trailing indentation after divider ends.",required:!1},{name:"label",type:"ReactNode | string",default:"undefined",desc:"Center label that splits divider into two segments.",required:!1},{name:"labelSpacing",type:"number",default:"8.0",desc:"Spacing around center label.",required:!1},{name:"width",type:"number | string",default:"undefined",desc:"Explicit width of divider container.",required:!1},{name:"height",type:"number | string",default:"undefined",desc:"Explicit height of divider container.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for root divider container.",required:!1},{name:"labelTextStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for label text when label is string.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Divider"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Visual rule separator used to group and partition content. Supports horizontal/vertical orientation, solid/dashed/dotted styles, indents, and center labels."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"DividerExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},Ym=({isDark:s,story:l="status-banner-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { Ux4gStatusBanner } from 'ux4g-react-native-design-system';"),i.push(""),i.push("// Warning Solid Banner"),i.push("<Ux4gStatusBanner"),i.push('  variant="warningSolid"'),i.push('  title="Action Needed"'),i.push('  subtitle="Please review your draft submission before the deadline."'),i.push("/>"),i.push(""),i.push("// Success Light Banner"),i.push("<Ux4gStatusBanner"),i.push('  variant="successLight"'),i.push('  title="Draft Saved Successfully"'),i.push('  subtitle="Your changes have been synced to the cloud."'),i.push("/>"),i.push(""),i.push("// Error Light Banner with Dismiss"),i.push("<Ux4gStatusBanner"),i.push('  variant="errorLight"'),i.push('  title="Draft Expired"'),i.push('  subtitle="This application draft expired on 9 April 2026."'),i.push(`  onDismiss={() => console.log("Dismissed")}
/>`),i.join(`
`)},[]),b=()=>{let i="";l==="status-banner-draft"?i=`        <Ux4gStatusBanner
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
        />`:l==="status-banner-variants"?i=`        <Ux4gStatusBanner variant="primaryLight" title="Primary Banner" subtitle="Information notice" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="infoLight" title="Info Banner" subtitle="System maintenance scheduled" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="successLight" title="Success Banner" subtitle="Operation completed" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="warningLight" title="Warning Light" subtitle="Low storage warning" />
        <View style={{ height: 12 }} />
        <Ux4gStatusBanner variant="errorLight" title="Error Light" subtitle="Network request failed" />`:i=`        <Ux4gStatusBanner
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
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gStatusBanner%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack StatusBanner Preview"})},x=[{name:"variant",type:"Ux4gBannerVariant",default:"required",desc:"Banner visual variant theme.",required:!0},{name:"title",type:"string",default:"required",desc:"Main title text header.",required:!0},{name:"subtitle",type:"string",default:"undefined",desc:"Secondary subtitle text description.",required:!1},{name:"subtitleWidget",type:"ReactNode",default:"undefined",desc:"Custom subtitle widget overriding subtitle text.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for title text.",required:!1},{name:"subtitleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Style override for subtitle text.",required:!1},{name:"badge",type:"ReactNode",default:"undefined",desc:"Badge displayed next to title.",required:!1},{name:"leadingIcon",type:"ReactNode",default:"auto by variant",desc:"Custom leading icon (variant icon used by default).",required:!1},{name:"trailingIcon",type:"ReactNode",default:"undefined",desc:"Custom top-right trailing icon.",required:!1},{name:"actions",type:"ReactNode[]",default:"undefined",desc:"Action widgets shown in bottom row.",required:!1},{name:"onDismiss",type:"() => void",default:"undefined",desc:"Dismiss callback when close icon is pressed.",required:!1},{name:"backgroundColor",type:"string",default:"variant-based",desc:"Background color override.",required:!1},{name:"borderColor",type:"string",default:"variant-based",desc:"Border color override.",required:!1},{name:"actionsAlignment",type:"'start' | 'center' | 'end' | 'space-between' | 'space-around'",default:"'start'",desc:"Alignment for bottom actions row.",required:!1},{name:"width",type:"DimensionValue",default:"'100%'",desc:"Explicit banner width.",required:!1},{name:"height",type:"number",default:"undefined",desc:"Explicit banner height.",required:!1},{name:"marginStyle",type:"StyleProp<ViewStyle>",default:"{ marginHorizontal: 16, marginVertical: 8 }",desc:"Outer margin style override.",required:!1},{name:"paddingStyle",type:"StyleProp<ViewStyle>",default:"{ paddingHorizontal: 16, paddingVertical: 12 }",desc:"Inner padding style override.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Additional container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Status Banner"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Prominent alert banner used for draft statuses, system warnings, errors, success notifications, and workflow action prompts."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"StatusBannerExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},Km=["status-pipeline-vertical","status-pipeline-vertical-states","status-pipeline-vertical-sizes","status-pipeline-vertical-colors","status-pipeline-vertical-labels","status-pipeline-vertical-nolabels","status-pipeline-horizontal","status-pipeline-horizontal-states","status-pipeline-horizontal-sizes","status-pipeline-horizontal-colors","status-pipeline-horizontal-labels","status-pipeline-horizontal-nolabels"],Jm=s=>s==="status-pipeline-sizes"?"status-pipeline-vertical-sizes":Km.includes(s)?s:"status-pipeline-vertical",pd=s=>s.startsWith("status-pipeline-horizontal"),Zm={"status-pipeline-vertical":{title:"Status Pipeline — Vertical",description:"Vertical step-by-step flow with completed, current, and upcoming states."},"status-pipeline-vertical-states":{title:"Vertical — All States",description:"Every step state: completed, current, upcoming, error (red), and warning (orange)."},"status-pipeline-vertical-sizes":{title:"Vertical — Sizes",description:"Small (s), Medium (m), and Large (l) size presets in vertical layout."},"status-pipeline-vertical-colors":{title:"Vertical — Custom Colors",description:"Per-state color overrides and custom active/inactive line colors."},"status-pipeline-vertical-labels":{title:"Vertical — Labels Only",description:"Labels without descriptions, useful for compact vertical lists."},"status-pipeline-vertical-nolabels":{title:"Vertical — Circles Only",description:"Step circles and connecting lines only, with labels and descriptions hidden. No error/warning states."},"status-pipeline-horizontal":{title:"Status Pipeline — Horizontal",description:"Horizontal step-by-step flow for wizards and multi-step forms."},"status-pipeline-horizontal-states":{title:"Horizontal — All States",description:"Every step state laid out horizontally with connecting lines."},"status-pipeline-horizontal-sizes":{title:"Horizontal — Sizes",description:"Small (s), Medium (m), and Large (l) size presets in horizontal layout."},"status-pipeline-horizontal-colors":{title:"Horizontal — Custom Colors",description:"Per-state color overrides and custom active/inactive line colors."},"status-pipeline-horizontal-labels":{title:"Horizontal — Labels Only",description:"Compact header row with labels and no descriptions below."},"status-pipeline-horizontal-nolabels":{title:"Horizontal — Circles Only",description:"Step circles and connecting lines only, with labels and descriptions hidden. No error/warning states."}},eh=s=>{const l=pd(s),d=l?"horizontal":"vertical";if(s.endsWith("-states"))return`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineStatesExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${d}'
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
}`;if(s.endsWith("-sizes")){const m=h=>`      <Ux4gStatusPipeline
        orientation='${d}'
        size='${h}'
        currentStep={1}
        steps={[
          { label: 'Submitted', description: '5 Apr' },
          { label: 'Verification', description: 'In progress' },
          { label: 'Approval', description: 'Pending' },
          { label: 'Completed', description: 'Done' },
        ]}
      />
      <View style={{ height: ${l?"40":"32"} }} />`;return`import React from 'react';
import { View } from 'react-native';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineSizesExample() {
  return (
    <View>
${m("s")}
${m("m")}
      <Ux4gStatusPipeline
        orientation='${d}'
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
}`}return s.endsWith("-colors")?`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineColorsExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${d}'
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
}`:s.endsWith("-labels")?`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineLabelsExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${d}'
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
}`:s.endsWith("-nolabels")?`import React from 'react';
import { Ux4gStatusPipeline } from 'ux4g-react-native-design-system';

export default function StatusPipelineCirclesOnlyExample() {
  return (
    <Ux4gStatusPipeline
      orientation='${d}'
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
      orientation='${d}'
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
}`},th=s=>{const l=pd(s),d=l?"horizontal":"vertical";if(s.endsWith("-states"))return`        <Ux4gStatusPipeline
          orientation='${d}'
          currentStep={-1}
          steps={[
            { label: 'Order Placed', description: 'Completed', state: 'completed' },
            { label: 'Document Review', description: 'Failed verification', state: 'error' },
            { label: 'Payment Gateway', description: 'Pending retry', state: 'warning' },
            { label: 'Approval Stage', description: 'Upcoming', state: 'upcoming' },
            { label: 'Final Certificate', description: 'Est. 25 Apr', state: 'upcoming' },
          ]}
        />`;if(s.endsWith("-sizes")){const m=l?48:32;return`        <Ux4gStatusPipeline
          orientation='${d}'
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
          orientation='${d}'
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
          orientation='${d}'
          size='l'
          currentStep={1}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Verification', description: 'In progress' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />`}return s.endsWith("-colors")?`        <Ux4gStatusPipeline
          orientation='${d}'
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
        />`:s.endsWith("-labels")?`        <Ux4gStatusPipeline
          orientation='${d}'
          currentStep={2}
          showDescriptions={false}
          steps={[
            { label: 'Submitted' },
            { label: 'Under Review' },
            { label: 'Verification', state: 'error' },
            { label: 'Approval' },
            { label: 'Completed' },
          ]}
        />`:s.endsWith("-nolabels")?`        <Ux4gStatusPipeline
          orientation='${d}'
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
          orientation='${d}'
          currentStep={2}
          steps={[
            { label: 'Submitted', description: '5 Apr' },
            { label: 'Under Review', description: 'In progress' },
            { label: 'Verification', description: 'Pending' },
            { label: 'Approval', description: 'Pending' },
            { label: 'Completed', description: 'Done' },
          ]}
        />`},rh=({isDark:s,story:l="status-pipeline-vertical"})=>{const[d,m]=k.useState("preview"),h=Jm(l),b=Zm[h],x=k.useMemo(()=>eh(h),[h]),i=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gStatusPipeline, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${th(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gStatusPipeline%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack StatusPipeline Preview"})},w=[{name:"steps",type:"Ux4gPipelineStep[]",default:"required",desc:"List of pipeline steps (label, description, state, customIcon, customColor).",required:!0},{name:"currentStep",type:"number",default:"0",desc:"Current active step index. Set to -1 to rely purely on step.state.",required:!1},{name:"orientation",type:"'vertical' | 'horizontal'",default:"'vertical'",desc:"Direction of pipeline layout.",required:!1},{name:"size",type:"'s' | 'm' | 'l'",default:"'m'",desc:"Size preset controlling circle, icon, and text scale.",required:!1},{name:"showLabels",type:"boolean",default:"true",desc:"Whether to show step labels.",required:!1},{name:"showDescriptions",type:"boolean",default:"true",desc:"Whether to show step descriptions.",required:!1},{name:"activeLineWidth",type:"number",default:"size-based",desc:"Thickness of completed/active connecting lines.",required:!1},{name:"inactiveLineWidth",type:"number",default:"size-based",desc:"Thickness of upcoming connecting lines.",required:!1},{name:"completedColor",type:"string",default:"theme success",desc:"Color override for completed steps.",required:!1},{name:"currentColor",type:"string",default:"theme primary",desc:"Color override for current step.",required:!1},{name:"upcomingColor",type:"string",default:"onSurface @ 30%",desc:"Color override for upcoming steps.",required:!1},{name:"errorColor",type:"string",default:"theme error",desc:"Color override for error steps.",required:!1},{name:"warningColor",type:"string",default:"theme warning",desc:"Color override for warning steps.",required:!1},{name:"completedLineColor",type:"string",default:"theme success",desc:"Custom line color for completed segments.",required:!1},{name:"upcomingLineColor",type:"string",default:"onSurface @ 15%",desc:"Custom line color for upcoming segments.",required:!1},{name:"labelSpacing",type:"number",default:"12 (vertical) / 6 (horizontal)",desc:"Spacing between step indicator and label text.",required:!1},{name:"circleSize",type:"number",default:"size-based",desc:"Explicit diameter override for step circles.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for pipeline container.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"StatusPipelineExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},nh=["stepper-horizontal","stepper-horizontal-dashed","stepper-vertical","stepper-error","stepper-bottom-lines","stepper-bottom-background","stepper-edge-alignment","compact-stepper-linear","compact-stepper-right-aligned","compact-stepper-centered","compact-stepper-centered-between","compact-stepper-split"],ah={"stepper-horizontal":4,"stepper-horizontal-dashed":4,"stepper-vertical":4,"stepper-error":4,"stepper-bottom-lines":4,"stepper-bottom-background":4,"stepper-edge-alignment":4,"compact-stepper-linear":12,"compact-stepper-right-aligned":12,"compact-stepper-centered":12,"compact-stepper-centered-between":12,"compact-stepper-split":12},ih=s=>nh.includes(s)?s:"stepper-horizontal",sh={"stepper-horizontal":{title:"Stepper — Horizontal",description:"Horizontal stepper (default) with center-aligned connecting lines, completed checks, and active dots. Use the controls to navigate steps."},"stepper-horizontal-dashed":{title:"Stepper — Dashed Lines",description:"Horizontal stepper with dashed connecting lines between steps."},"stepper-vertical":{title:"Stepper — Vertical",description:"Vertical stepper with icons and labels stacked in a column."},"stepper-error":{title:"Stepper — Error State",description:"Stepper with an error icon on the failed step and error-colored labels."},"stepper-bottom-lines":{title:"Stepper — Horizontal (Bottom Line)",description:"Horizontal stepper with connecting lines placed below the step labels."},"stepper-bottom-background":{title:"Stepper — Bottom Lines + Background",description:"Bottom-line stepper with a highlighted background behind the active step."},"stepper-edge-alignment":{title:"Stepper — Edge Label Alignment",description:"Horizontal stepper whose first and last labels align to the container edges."},"compact-stepper-linear":{title:"Compact Stepper — Linear",description:"Compact capsule stepper (default layout) with working prev/next arrows and left-aligned labels."},"compact-stepper-right-aligned":{title:"Compact Stepper — Right Aligned",description:"Capsule stepper with the step label and description aligned to the right."},"compact-stepper-centered":{title:"Compact Stepper — Centered",description:'Capsule stepper centered around the active capsule with "Step X of Y" counter.'},"compact-stepper-centered-between":{title:"Compact Stepper — Centered (Arrows Outside)",description:"Capsule stepper with the label centered between the prev/next arrows."},"compact-stepper-split":{title:"Compact Stepper — Split",description:"Capsule stepper with the label on the left and counter + arrows on the right."}},nd=(s=4)=>{const l=[];for(let d=1;d<=s;d++)l.push(`        { title: 'Step ${d}', description: 'Write description here' },`);return l.join(`
`)},Ws=(s,l=4)=>{const d=[];for(let m=1;m<=l;m++){const h=s>m?"Completed":s===m?"In progress":"Label";d.push(`        { title: 'Label', description: 'Write description here', statusLabel: '${h}' },`)}return d.join(`
`)},oh=(s,l)=>{const d=ah[s],m=s.startsWith("compact-stepper"),b=m?`        <Ux4gCompactStepper
          totalSteps={${d}}
          currentStep={step}
          stepLabel='Account Setup'
          description='Enter your personal details to continue.'
          layout='${{"compact-stepper-linear":"linear","compact-stepper-right-aligned":"rightAligned","compact-stepper-centered":"centered","compact-stepper-centered-between":"centeredBetween","compact-stepper-split":"split"}[s]}'
          onNext={() => setStep((s) => Math.min(${d}, s + 1))}
          onPrevious={() => setStep((s) => Math.max(1, s - 1))}
        />`:s==="stepper-horizontal-dashed"?`        <Ux4gStepper
          totalSteps={${d}}
          currentStep={step}
          orientation='horizontal'
          lineStyle='dashed'
          steps={[
${nd(d)}
          ]}
        />`:s==="stepper-vertical"?`        <View style={{ alignSelf: 'flex-start', width: '100%' }}>
          <Ux4gStepper
            totalSteps={${d}}
            currentStep={step}
            orientation='vertical'
            steps={[
${nd(d)}
            ]}
          />
        </View>`:s==="stepper-error"?`        <Ux4gStepper
          totalSteps={${d}}
          currentStep={step}
          orientation='horizontal'
          steps={[
            { title: 'Account', description: step > 1 ? 'Completed' : 'Pending' },
            { title: 'Profile', description: step > 2 ? 'Completed' : 'Pending' },
            { title: 'Payment', description: step === 3 ? 'Transaction failed' : step > 3 ? 'Completed' : 'Pending', isError: step === 3 },
            { title: 'Done', description: step > 3 ? 'Completed' : 'Pending' },
          ]}
        />`:s==="stepper-bottom-lines"?`        <Ux4gStepper
          totalSteps={${d}}
          currentStep={step}
          orientation='horizontal'
          linePlacement='bottom'
          steps={[
${Ws(2,d)}
          ]}
        />`:s==="stepper-bottom-background"?`        <Ux4gStepper
          totalSteps={${d}}
          currentStep={step}
          orientation='horizontal'
          linePlacement='bottom'
          activeStepBackground
          steps={[
${Ws(2,d)}
          ]}
        />`:`        <Ux4gStepper
          totalSteps={${d}}
          currentStep={step}
          orientation='horizontal'
          edgeLabelAlignment
          steps={[
${Ws(2,d)}
          ]}
        />`,x=m?"":`      <View style={{ height: 24 }} />
      <Text style={styles.controlCount}>Step {step} of ${d}</Text>
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
          style={[styles.controlButton, { backgroundColor: step < ${d} ? '#3447E0' : '#CCCCCC' }]}
          disabled={step >= ${d}}
          onPress={() => setStep((s) => Math.min(${d}, s + 1))}
        >
          <Text style={styles.controlButtonText}>Next</Text>
        </Pressable>
      </View>`;return`import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gStepper, Ux4gCompactStepper, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [step, setStep] = useState(2);

  return (
    <Ux4gThemeProvider isDark={${l}}>
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
});`},lh=({isDark:s,story:l="stepper-horizontal"})=>{const[d,m]=k.useState("preview"),h=ih(l),b=sh[h],x=k.useMemo(()=>oh(h,s),[h,s]),i=()=>{const B=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gStepper%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:B,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Stepper Preview"})},w=[{name:"totalSteps",type:"number",default:"required",desc:"Total number of steps to display.",required:!0},{name:"currentStep",type:"number",default:"required",desc:"Current active step (1-indexed).",required:!0},{name:"orientation",type:"'horizontal' | 'vertical'",default:"'horizontal'",desc:"Direction of the stepper layout.",required:!1},{name:"lineStyle",type:"'solid' | 'dashed'",default:"'solid'",desc:"Style of the connecting lines.",required:!1},{name:"linePlacement",type:"'center' | 'bottom'",default:"'center'",desc:"Where connecting lines are placed relative to labels.",required:!1},{name:"steps",type:"Ux4gStepItem[]",default:"[]",desc:"Step data (title, description, statusLabel, isError, text styles).",required:!1},{name:"stepSize",type:"number",default:"32",desc:"Diameter of the step icons.",required:!1},{name:"showLabels",type:"boolean",default:"true",desc:"Whether to show labels below/beside icons.",required:!1},{name:"edgeLabelAlignment",type:"boolean",default:"false",desc:"Align first/last labels to container edges.",required:!1},{name:"activeStepBackground",type:"boolean",default:"false",desc:"Highlight background behind the active step (bottom placement).",required:!1},{name:"stepSpacing",type:"number",default:"24",desc:"Spacing between vertical steps when labels are hidden.",required:!1},{name:"alignIconWithDescription",type:"boolean",default:"false",desc:"Align vertical icons with the description line.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for the stepper container.",required:!1}],p=[{name:"totalSteps",type:"number",default:"required",desc:"Total number of capsule segments.",required:!0},{name:"currentStep",type:"number",default:"required",desc:"Current active step (1-indexed).",required:!0},{name:"stepLabel",type:"string",default:"required",desc:"Label text for the current step.",required:!0},{name:"description",type:"string",default:"undefined",desc:"Helper description below the step label.",required:!1},{name:"onNext",type:"() => void",default:"noop",desc:"Callback when the next arrow is pressed.",required:!1},{name:"onPrevious",type:"() => void",default:"noop",desc:"Callback when the previous arrow is pressed.",required:!1},{name:"layout",type:"'linear' | 'rightAligned' | 'centered' | 'centeredBetween' | 'split'",default:"'linear'",desc:"Capsule stepper layout preset.",required:!1},{name:"labelAlignment",type:"'flex-start' | 'center' | 'flex-end'",default:"'flex-start'",desc:"Alignment of labels in the linear layout.",required:!1},{name:"activeColor",type:"string",default:"theme primary",desc:"Color of the active capsule.",required:!1},{name:"inactiveColor",type:"string",default:"onSurface @ 20%",desc:"Color of inactive capsules.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for the container.",required:!1}],T=h.startsWith("compact-stepper"),A=T?"CompactStepper":"Stepper";return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:`${A}Example.tsx`})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:(T?p:w).map(B=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[B.name,B.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:B.type})}),t.jsx("td",{children:B.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:B.default})})]},B.name))})]})})]})]})})]})},ch=["tag-basic","tag-shapes","tag-styles","tag-colors","tag-leading","tag-dismissable","tag-pill"],dh=s=>ch.includes(s)?s:"tag-basic",uh={"tag-basic":{title:"Tag — Basic",description:"Default tonal pill tags in small (m) and large (l) sizes."},"tag-shapes":{title:"Tag — Shapes",description:"Circular (pill) and rectangular (4px radius) shapes."},"tag-styles":{title:"Tag — Styles",description:"Tonal, filled, outline, and text visual styles."},"tag-colors":{title:"Tag — Color Schemes",description:"Neutral, brand, success, warning, error, and info palettes."},"tag-leading":{title:"Tag — Leading Content",description:"Custom icon or widget rendered before the tag label."},"tag-dismissable":{title:"Tag — Dismissible",description:"Tags with a trailing close icon and onDismiss callback."},"tag-pill":{title:"Unified Pill Tag",description:"Multi-segment pill tag with vertical dividers between segments."}},ne=(s,l)=>`        <View style={styles.tagRow}>
          <Ux4gTag text='${s}'${l} />
        </View>`,ph=s=>{switch(s){case"tag-shapes":return`import React from 'react';
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
}`}},mh=s=>{switch(s){case"tag-shapes":return`${ne("Circular"," shape='circular' colorScheme='brand'")}
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
${ne("Default"," colorScheme='success'")}`}},hh=({isDark:s,story:l="tag-basic"})=>{const[d,m]=k.useState("preview"),h=dh(l),b=uh[h],x=k.useMemo(()=>ph(h),[h]),i=()=>{const B=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTag, Ux4gUnifiedPillTag${h==="tag-leading"?", Ux4gIcons":""}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${mh(h)}
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
});`,z=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gTag%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(B)}`;return t.jsx("iframe",{src:z,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Tag Preview"})},w=[{name:"text",type:"string",default:"required",desc:"Text displayed inside the tag label.",required:!0},{name:"size",type:"'m' | 'l' | 'medium' | 'large'",default:"'m'",desc:"Size of the tag (m = 20px height, l = 24px height).",required:!1},{name:"shape",type:"'circular' | 'rectangular'",default:"'circular'",desc:"Pill (999px) vs rectangular (4px) border radius.",required:!1},{name:"style",type:"'tonal' | 'filled' | 'outline' | 'text'",default:"'tonal'",desc:"Visual style of the tag.",required:!1},{name:"colorScheme",type:"'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info'",default:"'neutral'",desc:"Color palette from the design foundation tokens.",required:!1},{name:"leadingContent",type:"React.ReactNode",default:"undefined",desc:"Custom widget/icon rendered before the text label.",required:!1},{name:"onDismiss",type:"() => void",default:"undefined",desc:"Dismiss callback; renders a trailing close (x) icon.",required:!1},{name:"customBackgroundColor",type:"string",default:"style-based",desc:"Custom background color override.",required:!1},{name:"customContentColor",type:"string",default:"style-based",desc:"Custom content/text color override.",required:!1},{name:"customBorderColor",type:"string",default:"style-based",desc:"Custom border color override.",required:!1},{name:"customBorderRadius",type:"number",default:"shape-based",desc:"Custom border radius override in pixels.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom container style override.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom text style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}],p=[{name:"segments",type:"Ux4gPillSegment[]",default:"required",desc:"Segments (text, leading, textColor, bold) separated by dividers.",required:!0},{name:"backgroundColor",type:"string",default:"theme surface",desc:"Background color override.",required:!1},{name:"borderColor",type:"string",default:"onSurface @ 12%",desc:"Border color override.",required:!1},{name:"dividerColor",type:"string",default:"onSurface @ 15%",desc:"Segment divider color override.",required:!1},{name:"height",type:"number",default:"24",desc:"Pill height.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}],T=h==="tag-pill";return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:T?"UnifiedPillTagExample.tsx":"TagExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:(T?p:w).map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[A.name,A.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:A.type})}),t.jsx("td",{children:A.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:A.default})})]},A.name))})]})})]})]})})]})},fh=["textarea-basic","textarea-label","textarea-status","textarea-count","textarea-disabled"],gh=s=>fh.includes(s)?s:"textarea-basic",xh={"textarea-basic":{title:"Text Area — Basic",description:"Multiline text areas with size and min-height variants."},"textarea-label":{title:"Text Area — Label",description:"Top label, required asterisk, and trailing icon."},"textarea-status":{title:"Text Area — Validation Status",description:"Error, warning, and success statuses with caption icons."},"textarea-count":{title:"Text Area — Character Count",description:"maxLength with automatic character counter."},"textarea-disabled":{title:"Text Area — Disabled & Read Only",description:"Non-interactive and read-only text areas."}},st=(s,l)=>`const ${s} = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.row}>
      <Ux4gTextArea
        value={value}
        onValueChange={setValue}
${l}
      />
    </View>
  );
};`,md=s=>{switch(s){case"textarea-label":return`${st("BasicExample",`        label='Address'
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
        placeholder='Small min height (80px)'`)}`}},yh=s=>`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTextArea${s==="textarea-label"?", Ux4gIcons":""} } from 'ux4g-react-native-design-system';

${md(s)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${{"textarea-basic":["LargeExample","SmallExample","MinHeightExample"],"textarea-label":["BasicExample","RequiredExample","TrailingExample"],"textarea-status":["ErrorExample","WarningExample","SuccessExample"],"textarea-count":["CountExample","CustomCountExample"],"textarea-disabled":["DisabledExample","ReadOnlyExample"]}[s].map(d=>`      <${d} />`).join(`
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
});`,bh=s=>({"textarea-basic":["LargeExample","SmallExample","MinHeightExample"],"textarea-label":["BasicExample","RequiredExample","TrailingExample"],"textarea-status":["ErrorExample","WarningExample","SuccessExample"],"textarea-count":["CountExample","CustomCountExample"],"textarea-disabled":["DisabledExample","ReadOnlyExample"]})[s].map(d=>`          <${d} />`).join(`
`),vh=({isDark:s,story:l="textarea-basic"})=>{const[d,m]=k.useState("preview"),h=gh(l),b=xh[h],x=k.useMemo(()=>yh(h),[h]),i=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTextArea${h==="textarea-label"?", Ux4gIcons":""}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${md(h)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${bh(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gTextArea%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack TextArea Preview"})},w=[{name:"value",type:"string",default:"required",desc:"Current text string inside the text area.",required:!0},{name:"onValueChange",type:"(value: string) => void",default:"required",desc:"Callback invoked when text changes.",required:!0},{name:"size",type:"'small' | 'large'",default:"'large'",desc:"Padding sizing (small = 12px, large = 16px).",required:!1},{name:"minHeight",type:"'small' | 'medium' | 'large' | number",default:"'medium'",desc:"Min height token (80/120/160px) or exact number.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Semantic validation status.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Optional top label above the text area.",required:!1},{name:"required",type:"boolean",default:"false",desc:"Shows a red asterisk next to the label.",required:!1},{name:"placeholder",type:"string",default:"undefined",desc:"Hint text displayed when empty.",required:!1},{name:"caption",type:"string",default:"undefined",desc:"Helper or status caption below the text area.",required:!1},{name:"showCaptionIcon",type:"boolean",default:"true",desc:"Show semantic status icon next to the caption.",required:!1},{name:"trailingIconLabel",type:"React.ReactNode",default:"undefined",desc:"Trailing icon/node next to the label.",required:!1},{name:"characterCountText",type:"string",default:"undefined",desc:"Custom character count text override.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the text area is interactive.",required:!1},{name:"readOnly",type:"boolean",default:"false",desc:"Whether the text area is read-only.",required:!1},{name:"maxLength",type:"number",default:"undefined",desc:"Maximum character length limit.",required:!1},{name:"style",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom inner TextInput style.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom outer container style.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom label style.",required:!1},{name:"captionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom caption style.",required:!1},{name:"placeholderTextColor",type:"string",default:"onSurface @ 40%",desc:"Custom placeholder color.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"TextAreaExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},wh=["timepicker-basic","timepicker-label","timepicker-status","timepicker-interval","timepicker-initial","timepicker-disabled"],Sh=s=>wh.includes(s)?s:"timepicker-basic",Ch={"timepicker-basic":{title:"Time Picker — Basic",description:"Field trigger that opens the hour/minute wheel dialog."},"timepicker-label":{title:"Time Picker — Label",description:"Top label, required asterisk, and description caption."},"timepicker-status":{title:"Time Picker — Validation Status",description:"Error, warning, and success status variants."},"timepicker-interval":{title:"Time Picker — Minute Interval",description:"Minute wheel stepped by 1, 5, 15, and 30 minutes."},"timepicker-initial":{title:"Time Picker — Initial Time",description:"Field pre-filled with an initial selected time."},"timepicker-disabled":{title:"Time Picker — Disabled",description:"Non-interactive field with muted colors."}},ot=(s,l)=>`const ${s} = () => {
  const [time, setTime] = React.useState(undefined);
  return (
    <View style={styles.row}>
      <Ux4gTimePicker
        initialTime={time}
        onTimeSelected={(t) => setTime(t)}
${l}
      />
    </View>
  );
};`,hd=s=>{switch(s){case"timepicker-label":return`${ot("LabelExample",`        label='Meeting Time'
        placeholder='Select a time slot'`)}
${ot("RequiredExample",`        label='Interview Time'
        isRequired
        description='Choose a slot between 10 AM and 6 PM'
        placeholder='Select time'`)}
${ot("DescExample",`        label='Delivery Window'
        description='We will deliver within the selected 2 hour window'
        placeholder='Select time'`)}`;case"timepicker-status":return`${ot("ErrorExample",`        label='Appointment Time'
        status='error'
        description='This time slot is already booked'
        placeholder='Select time'`)}
${ot("WarningExample",`        label='Reminder Time'
        status='warning'
        description='Reminder time is close to closing hours'
        placeholder='Select time'`)}
${ot("SuccessExample",`        label='Slot Booked'
        status='success'
        description='Time slot confirmed successfully'
        placeholder='Select time'`)}`;case"timepicker-interval":return`${ot("Every5Min",`        label='Every 5 minutes'
        minuteInterval={5}
        placeholder='Select time'`)}
${ot("Every15Min",`        label='Every 15 minutes'
        minuteInterval={15}
        placeholder='Select time'`)}
${ot("Every30Min",`        label='Every 30 minutes'
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
};`;case"timepicker-disabled":return`${ot("DisabledExample",`        label='Not Available'
        enabled={false}
        description='Time picking is disabled'
        placeholder='Select time'`)}
${ot("DisabledFilledExample",`        label='Booked Slot'
        enabled={false}
        initialTime={{ hour: 9, minute: 15 }}
        description='Slot has been booked'
        placeholder='Select time'`)}`;default:return`${ot("BasicExample","        placeholder='Select time'")}
${ot("CustomPlaceholderExample","        placeholder='Pick your schedule'")}`}},jh=s=>`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTimePicker } from 'ux4g-react-native-design-system';

${hd(s)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${{"timepicker-basic":["BasicExample","CustomPlaceholderExample"],"timepicker-label":["LabelExample","RequiredExample","DescExample"],"timepicker-status":["ErrorExample","WarningExample","SuccessExample"],"timepicker-interval":["Every5Min","Every15Min","Every30Min"],"timepicker-initial":["InitialExample"],"timepicker-disabled":["DisabledExample","DisabledFilledExample"]}[s].map(d=>`      <${d} />`).join(`
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
});`,kh=s=>({"timepicker-basic":["BasicExample","CustomPlaceholderExample"],"timepicker-label":["LabelExample","RequiredExample","DescExample"],"timepicker-status":["ErrorExample","WarningExample","SuccessExample"],"timepicker-interval":["Every5Min","Every15Min","Every30Min"],"timepicker-initial":["InitialExample"],"timepicker-disabled":["DisabledExample","DisabledFilledExample"]})[s].map(d=>`          <${d} />`).join(`
`),Th=({isDark:s,story:l="timepicker-basic"})=>{const[d,m]=k.useState("preview"),h=Sh(l),b=Ch[h],x=k.useMemo(()=>jh(h),[h]),i=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gTimePicker, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${hd(h)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${kh(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gTimePicker%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack TimePicker Preview"})},w=[{name:"initialTime",type:"Ux4gTimeOfDay",default:"undefined",desc:"Initial selected time ({ hour: 0-23, minute: 0-59 }).",required:!1},{name:"onTimeSelected",type:"(time: Ux4gTimeOfDay) => void",default:"undefined",desc:"Callback fired when a time is confirmed.",required:!1},{name:"placeholder",type:"string",default:"'Select time'",desc:"Hint text displayed when no time is selected.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether interaction is enabled.",required:!1},{name:"minuteInterval",type:"number",default:"1",desc:"Step interval for the minute wheel (1, 5, 10, 15, 30...).",required:!1},{name:"label",type:"string",default:"undefined",desc:"Label rendered above the field box.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Caption rendered below the field box.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Renders a red asterisk next to the label.",required:!1},{name:"required",type:"boolean",default:"false",desc:"Alias for isRequired.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Status variant controlling border and caption color.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom container style override.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"TimePickerExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Nh=["toast-basic","toast-stacked","toast-actions","toast-custom","toast-provider"],Uh=s=>Nh.includes(s)?s:"toast-basic",Ph={"toast-basic":{title:"Toast — Categories",description:"Semantic categories for informative messages (info, success, warning, error)."},"toast-stacked":{title:"Toast — Stacked Layout",description:"Stacked layout with title and subtitle stacked vertically."},"toast-actions":{title:"Toast — Action & Close",description:"Toasts with action text and close buttons."},"toast-custom":{title:"Toast — Customization",description:"Custom icon, background, and action colors."},"toast-provider":{title:"Toast — Provider Demo",description:"Interactive showToast demo via Ux4gToastProvider and useUx4gToast."}},fd=(s,l,d,m)=>`      <Ux4gToast
        category='${s}'
        title='${l}'
        subtitle='${d}'
        showCloseButton={false}
${m}
      />`,Vh=s=>{const l=fd;switch(s){case"toast-stacked":return`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${l("success","Payment Successful","Your payment of ₹1,250 has been processed","        layout='stacked'")}
${l("info","Update Available","Version 2.4.0 brings new features and bug fixes","        layout='stacked'")}
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
${l("success","Order Confirmed","Your order #ORD-1024 has been placed",`        layout='full'
        actionText='Track'
        onActionClick={() => console.log('track pressed')}`)}
${l("warning","Session Expired","Please sign in again to continue",`        layout='full'
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
${l("slot","Custom Icon Toast","Star icon with custom background",`        layout='full'
        icon={Ux4gIcons.star({ size: 20, color: '#7B61FF' })}
        backgroundColor='#EDE9FE'
        iconColor='#7B61FF'
        actionColor='#7B61FF'
        actionText='View'
        onActionClick={() => console.log('view pressed')}`)}
${l("success","Download Complete","Report exported successfully",`        layout='full'
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
${l("info","Info message","Supporting description text.","")}
${l("success","Success message","Supporting description text.","")}
${l("warning","Warning message","Supporting description text.","")}
${l("error","Error message","Supporting description text.","")}
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
});`}},Eh=s=>{const l=fd;switch(s){case"toast-stacked":return`${l("success","Payment Successful","Your payment of ₹1,250 has been processed","        layout='stacked'")}
${l("info","Update Available","Version 2.4.0 brings new features and bug fixes","        layout='stacked'")}`;case"toast-actions":return`${l("success","Order Confirmed","Your order #ORD-1024 has been placed",`        layout='full'
        actionText='Track'
        onActionClick={() => console.log('track pressed')}`)}
${l("warning","Session Expired","Please sign in again to continue",`        layout='full'
        actionText='Sign In'
        onActionClick={() => console.log('sign in pressed')}`)}`;case"toast-custom":return`${l("slot","Custom Icon Toast","Star icon with custom background",`        layout='full'
        icon={Ux4gIcons.star({ size: 20, color: '#7B61FF' })}
        backgroundColor='#EDE9FE'
        iconColor='#7B61FF'
        actionColor='#7B61FF'
        actionText='View'
        onActionClick={() => console.log('view pressed')}`)}
${l("success","Download Complete","Report exported successfully",`        layout='full'
        backgroundColor='#DCFCE7'
        iconColor='#16A34A'
        actionColor='#16A34A'
        actionText='Open'
        onActionClick={() => console.log('open pressed')}`)}`;default:return`${l("info","Info message","Supporting description text.","")}
${l("success","Success message","Supporting description text.","")}
${l("warning","Warning message","Supporting description text.","")}
${l("error","Error message","Supporting description text.","")}`}},Ah=({isDark:s,story:l="toast-basic"})=>{const[d,m]=k.useState("preview"),h=Uh(l),b=Ph[h],x=k.useMemo(()=>Vh(h),[h]),i=()=>{const B=h==="toast-provider";let z;B?z=`import React from 'react';
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
    <Ux4gThemeProvider isDark={${s}}>
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
});`:z=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gToast${h==="toast-custom"?", Ux4gIcons":""}, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${Eh(h)}
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
});`;const F=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gToast%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(z)}`;return t.jsx("iframe",{src:F,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Toast Preview"})},w=[{name:"category",type:"'info' | 'success' | 'warning' | 'error' | 'slot'",default:"required",desc:"Category driving the default icon, tint, and action color.",required:!0},{name:"title",type:"string",default:"required",desc:"Toast title text.",required:!0},{name:"subtitle",type:"string",default:"undefined",desc:"Secondary description text.",required:!1},{name:"actionText",type:"string",default:"undefined",desc:"Action label rendered on the right side.",required:!1},{name:"onActionClick",type:"() => void",default:"undefined",desc:"Action press callback.",required:!1},{name:"onCloseClick",type:"() => void",default:"undefined",desc:"Close button press callback (hides the button when omitted).",required:!1},{name:"showCloseButton",type:"boolean",default:"true",desc:"Whether the close button is shown.",required:!1},{name:"layout",type:"'full' | 'stacked'",default:"full on wide, stacked on narrow",desc:"Row layout vs stacked (title/subtitle) layout.",required:!1},{name:"backgroundColor",type:"string",default:"category tint",desc:"Tint overlay color override.",required:!1},{name:"icon",type:"React.ReactNode",default:"category icon",desc:"Custom icon override.",required:!1},{name:"iconColor",type:"string",default:"category color",desc:"Icon color override.",required:!1},{name:"actionColor",type:"string",default:"category color",desc:"Action text color override.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Container style override.",required:!1}],p=[{name:"children",type:"React.ReactNode",default:"required",desc:"App tree that can call useUx4gToast().",required:!0},{name:"isBottom",type:"boolean",default:"false",desc:"Toasts slide in from the bottom instead of the top.",required:!1}],T=[{name:"showToast",type:"(data: Ux4gToastData) => void",default:"—",desc:"Shows a toast. Data: category, title, subtitle, actionText, onActionClick, showCloseButton, backgroundColor, icon, iconColor, actionColor, autoClose (default true), durationMs (default 3000), isBottom.",required:!1},{name:"dismiss",type:"() => void",default:"—",desc:"Dismisses the current toast.",required:!1}],A=h==="toast-provider";return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:A?"ToastProviderExample.tsx":"ToastExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:(A?[...p,...T]:w).map(B=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[B.name,B.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:B.type})}),t.jsx("td",{children:B.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:B.default})})]},B.name))})]})})]})]})})]})},Dh=["switch-basic","switch-labels","switch-status","switch-required","switch-disabled"],Fh=s=>Dh.includes(s)?s:"switch-basic",Bh={"switch-basic":{title:"Switch — Basic",description:"Small, medium, and large switches in default right-label position."},"switch-labels":{title:"Switch — Label Positions",description:"noLabel, left, right, and bothSides label placement."},"switch-status":{title:"Switch — Status Descriptions",description:"Helper, error, warning, and success description variants."},"switch-required":{title:"Switch — Required & Icons",description:"Required asterisks, trailing icons, and secondary labels."},"switch-disabled":{title:"Switch — Disabled",description:"Disabled switches in on and off states."}},Je=(s,l,d)=>`const ${s} = () => {
  const [${l}, set${l[0].toUpperCase()}${l.slice(1)}] = React.useState(false);
  return (
    <View style={styles.row}>
      <Ux4gSwitch
        checked={${l}}
        onCheckedChange={set${l[0].toUpperCase()}${l.slice(1)}}
${d}
      />
    </View>
  );
};`,gd=s=>{switch(s){case"switch-labels":return`${Je("RightExample","right",`        label='Label on the right'
        description='Default position with supporting text'
        labelPosition='right'`)}
${Je("LeftExample","left",`        label='Label on the left'
        description='Switch control sits after the text'
        labelPosition='left'`)}
${Je("BothSidesExample","both",`        label='Left label'
        labelPosition='bothSides'
        secondaryLabel='Right label'`)}
${Je("NoLabelExample","noLabel","        labelPosition='noLabel'")}`;case"switch-status":return`${Je("HelperExample","helper",`        label='Notifications'
        description='Receive email notifications'
        descriptionVariant='helper'`)}
${Je("ErrorExample","error",`        label='Auto-renewal'
        description='Payment method expired, please update'
        descriptionVariant='error'`)}
${Je("WarningExample","warning",`        label='Data sync'
        description='Roaming charges may apply'
        descriptionVariant='warning'`)}
${Je("SuccessExample","success",`        label='Backup'
        description='Last backup 2 minutes ago'
        descriptionVariant='success'`)}`;case"switch-required":return`${Je("RequiredExample","required",`        label='Terms & Conditions'
        description='I agree to the terms of service'
        isRequired`)}
${Je("SecondaryExample","secondary",`        label='Dark mode'
        labelPosition='bothSides'
        secondaryLabel='On'
        isSecondaryRequired`)}
${Je("IconExample","iconed",`        label='Biometric login'
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
};`;default:return`${Je("SmallExample","small",`        size='s'
        label='Small (32 x 18)'
        description='Compact size for dense layouts'`)}
${Je("MediumExample","medium",`        size='m'
        label='Medium (40 x 22)'
        description='Default size'`)}
${Je("LargeExample","large",`        size='l'
        label='Large (48 x 28)'
        description='Prominent size for settings'`)}`}},qh=s=>`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gSwitch } from 'ux4g-react-native-design-system';

${gd(s)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
${{"switch-basic":["SmallExample","MediumExample","LargeExample"],"switch-labels":["RightExample","LeftExample","BothSidesExample","NoLabelExample"],"switch-status":["HelperExample","ErrorExample","WarningExample","SuccessExample"],"switch-required":["RequiredExample","SecondaryExample","IconExample"],"switch-disabled":["DisabledOffExample","DisabledOnExample","DisabledNoLabelExample"]}[s].map(d=>`      <${d} />`).join(`
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
});`,zh=s=>({"switch-basic":["SmallExample","MediumExample","LargeExample"],"switch-labels":["RightExample","LeftExample","BothSidesExample","NoLabelExample"],"switch-status":["HelperExample","ErrorExample","WarningExample","SuccessExample"],"switch-required":["RequiredExample","SecondaryExample","IconExample"],"switch-disabled":["DisabledOffExample","DisabledOnExample","DisabledNoLabelExample"]})[s].map(d=>`          <${d} />`).join(`
`),Ih=({isDark:s,story:l="switch-basic"})=>{const[d,m]=k.useState("preview"),h=Fh(l),b=Bh[h],x=k.useMemo(()=>qh(h),[h]),i=()=>{const p=`import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ux4gSwitch, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${gd(h)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${zh(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gSwitch%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Switch Preview"})},w=[{name:"checked",type:"boolean",default:"false",desc:"Whether the switch is on (true) or off (false).",required:!1},{name:"value",type:"boolean",default:"false",desc:"Alias for checked (React Native form compatibility).",required:!1},{name:"onCheckedChange",type:"(checked: boolean) => void",default:"undefined",desc:"Callback fired when the checked state toggles.",required:!1},{name:"onChanged",type:"(checked: boolean) => void",default:"undefined",desc:"Alias for onCheckedChange.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Primary label text next to the switch.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Supporting description below the label.",required:!1},{name:"size",type:"'s' | 'm' | 'l' | 'small' | 'medium' | 'large'",default:"'m'",desc:"Switch size (s = 32x18, m = 40x22, l = 48x28).",required:!1},{name:"labelPosition",type:"'noLabel' | 'left' | 'right' | 'bothSides'",default:"'right'",desc:"Position of the label relative to the switch.",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the switch is interactive.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Shows a red asterisk next to the primary label.",required:!1},{name:"icon",type:"React.ReactNode",default:"undefined",desc:"Trailing icon next to the primary label.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom label typography style.",required:!1},{name:"descriptionStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom description typography style.",required:!1},{name:"secondaryLabel",type:"string",default:"undefined",desc:"Secondary label when labelPosition is bothSides.",required:!1},{name:"isSecondaryRequired",type:"boolean",default:"false",desc:"Red asterisk next to the secondary label.",required:!1},{name:"secondaryIcon",type:"React.ReactNode",default:"undefined",desc:"Trailing icon next to the secondary label.",required:!1},{name:"descriptionVariant",type:"'helper' | 'error' | 'warning' | 'success'",default:"undefined",desc:"Status variant coloring and icon for the description.",required:!1},{name:"descriptionIcon",type:"React.ReactNode",default:"undefined",desc:"Custom status icon before the description.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Root container style override.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"SwitchExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},Rh=["timeslot-introduction","timeslot-basic","timeslot-compact","timeslot-json"],$h=s=>Rh.includes(s)?s:"timeslot-introduction",Lh={"timeslot-introduction":{title:"Time Slot — Introduction",description:"Calendar grid with available dates, public holidays, weekly offs, and no-slot days."},"timeslot-basic":{title:"Time Slot — Booking (Expanded)",description:"Tapping an available date opens the time slot sheet with available, limited, and no-slot times."},"timeslot-compact":{title:"Time Slot — Compact View",description:"Compact view mode renders time slots in a two-column grid with count badges."},"timeslot-json":{title:"Time Slot — JSON Data Source",description:"Build Ux4gTimeslotData from a plain JSON object with viewMode and dates."}},xd="const pad = (n) => String(n).padStart(2, '0');\nconst fmt = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;\nconst now = new Date();\nconst addDays = (n) => { const d = new Date(now); d.setDate(d.getDate() + n); return d; };\nconst today = fmt(now);",Ms=s=>{switch(s){case"timeslot-basic":case"timeslot-compact":return`const data = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  today,
  weeklyOffWeekdays: [6, 7],
  allowTapOnPublicHoliday: false,
  allowTapOnWeeklyOff: false,
  viewMode: '${s==="timeslot-compact"?"compact":"expanded"}',
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
};`}},yd=s=>s==="timeslot-basic"||s==="timeslot-compact"?`${Ms(s)}

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
};`:s==="timeslot-json"?`${Ms(s)}

const JsonExample = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <View style={styles.row}>
      <Ux4gTimeslot data={data} onDateSelected={(date) => setSelected(fmt(date))} />
      {selected && <Text style={styles.result}>Selected: {selected}</Text>}
    </View>
  );
};`:`${Ms(s)}

const CalendarExample = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <View style={styles.row}>
      <Text style={styles.caption}>Select an available date</Text>
      <Ux4gTimeslot data={data} onDateSelected={(date) => setSelected(fmt(date))} />
      {selected && <Text style={styles.result}>Selected: {selected}</Text>}
    </View>
  );
};`,bd=s=>{switch(s){case"timeslot-basic":case"timeslot-compact":return"BookingExample";case"timeslot-json":return"JsonExample";default:return"CalendarExample"}},Wh=s=>`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTimeslot } from 'ux4g-react-native-design-system';

${xd}

${yd(s)}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <${bd(s)} />
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
});`,Mh=({isDark:s,story:l="timeslot-introduction"})=>{const[d,m]=k.useState("preview"),h=$h(l),b=Lh[h],x=k.useMemo(()=>Wh(h),[h]),i=()=>{const A=`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTimeslot, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${xd}

${yd(h)}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
        <${bd(h)} />
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
});`,B=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gTimeslot%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(A)}`;return t.jsx("iframe",{src:B,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack TimeSlot Preview"})},w=[{name:"data",type:"Ux4gTimeslotData",default:"—",desc:"Calendar data model: year, month, selectedDate, today, weeklyOffWeekdays, dates, allowTapOnPublicHoliday, allowTapOnWeeklyOff, viewMode.",required:!0},{name:"onDateSelected",type:"(date: Date) => void",default:"undefined",desc:"Called when the user taps an available date (when no timeSlotProvider is set).",required:!1},{name:"onMonthChanged",type:"(year: number, month: number) => void",default:"undefined",desc:"Called when the prev/next month arrow is tapped.",required:!1},{name:"timeSlotProvider",type:"(date: Date) => Promise<SlotTimeEntry[]> | SlotTimeEntry[]",default:"undefined",desc:"Supplies time slots for a date; when set, tapping a date opens the SlotTimePickerSheet.",required:!1},{name:"onSlotConfirmed",type:"(date: Date, slot: SlotTimeEntry) => void",default:"undefined",desc:"Called when the user confirms a time slot in the sheet.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Root container style override.",required:!1}],p=[{name:"year",type:"number",default:"—",desc:"Initial year of the calendar grid.",required:!0},{name:"month",type:"number",default:"—",desc:"Initial month (1–12) of the calendar grid.",required:!0},{name:"selectedDate",type:"string",default:"undefined",desc:"ISO date (YYYY-MM-DD) initially selected.",required:!1},{name:"today",type:"string",default:"new Date()",desc:"ISO date (YYYY-MM-DD) treated as today; past dates are non-interactive.",required:!1},{name:"weeklyOffWeekdays",type:"number[]",default:"[6, 7]",desc:"ISO weekday numbers (1=Mon…7=Sun) shown as weekly off.",required:!1},{name:"dates",type:"SlotDateEntry[]",default:"[]",desc:"Per-date statuses: { date, status } with status = available | noSlots | publicHoliday | weeklyOff.",required:!1},{name:"allowTapOnPublicHoliday",type:"boolean",default:"false",desc:"Allows tapping publicHoliday dates.",required:!1},{name:"allowTapOnWeeklyOff",type:"boolean",default:"false",desc:"Allows tapping weeklyOff dates.",required:!1},{name:"viewMode",type:"'expanded' | 'compact'",default:"'expanded'",desc:"Time slot sheet layout: full-width rows (expanded) or two-column grid with badges (compact).",required:!1}],T=[{name:"time",type:"string",default:"—",desc:'Display label of the slot (e.g. "9:00 AM").',required:!0},{name:"slotCount",type:"number",default:"—",desc:'Remaining slots; 0 renders the slot as "No slots available".',required:!0},{name:"status",type:"'available' | 'limited' | 'noSlots'",default:"undefined",desc:"Optional status; limited is highlighted with the warning color.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"TimeSlotExample.tsx"})}),d==="props"&&t.jsxs("div",{className:"wb-props-area",children:[t.jsx("h3",{className:"props-section-title",children:"Ux4gTimeslot Props"}),t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[A.name,A.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:A.type})}),t.jsx("td",{children:A.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:A.default})})]},A.name))})]}),t.jsx("h3",{className:"props-section-title",children:"Ux4gTimeslotData (data prop)"}),t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Field"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:p.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[A.name,A.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:A.type})}),t.jsx("td",{children:A.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:A.default})})]},A.name))})]}),t.jsx("h3",{className:"props-section-title",children:"SlotTimeEntry (timeSlotProvider result)"}),t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Field"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:T.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[A.name,A.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:A.type})}),t.jsx("td",{children:A.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:A.default})})]},A.name))})]})]})]})]})})]})},_h=["tooltip-introduction","tooltip-basic","tooltip-interactive","tooltip-variants","tooltip-rich"],Oh=s=>_h.includes(s)?s:"tooltip-introduction",Xh={"tooltip-introduction":{title:"Tooltip — Introduction",description:"A small, contextual popup that appears when you tap or long-press a UI element, providing quick explanatory text without permanently cluttering the screen."},"tooltip-basic":{title:"Tooltip — Placements",description:"Top, bottom, left, and right placement of the tooltip relative to the target element."},"tooltip-interactive":{title:"Tooltip — Interactive",description:"Tooltip with optional title, leading icon, and configurable placement, colors, and trigger."},"tooltip-variants":{title:"Tooltip — All Variants",description:"Visual reference for all directional placements and alignments (topStart, top, topEnd, ...)."},"tooltip-rich":{title:"Rich Tooltip",description:"Rich tooltip with a title, icon, and optional action button. Rich tooltips are persistent by default."}},ad=s=>{switch(s){case"tooltip-basic":return`import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip } from 'ux4g-react-native-design-system';

const PlacementExample = () => {
  return (
    <View style={styles.grid}>
      <Ux4gTooltip text='Top Tooltip' placement='top' trigger='press'>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Top</Text>
        </View>
      </Ux4gTooltip>
      <Ux4gTooltip text='Bottom Tooltip' placement='bottom' trigger='press'>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Bottom</Text>
        </View>
      </Ux4gTooltip>
      <Ux4gTooltip text='Left Tooltip' placement='left' trigger='press'>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Left</Text>
        </View>
      </Ux4gTooltip>
      <Ux4gTooltip text='Right Tooltip' placement='right' trigger='press'>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Right</Text>
        </View>
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
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip, Ux4gIcons } from 'ux4g-react-native-design-system';

const InteractiveExample = () => {
  return (
    <View style={styles.wrap}>
      <Ux4gTooltip
        text='Interactive Tooltip'
        title='Information'
        icon={<Ux4gIcons.info size={16} color='#FAFAFA' />}
        placement='top'
        trigger='press'
        backgroundColor='#404040'
        contentColor='#FAFAFA'
        cornerRadius={4}
        arrowWidth={10}
        arrowHeight={6}
      >
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Long Press / Tap Me</Text>
        </View>
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
        icon={<Ux4gIcons.info size={16} color='#FAFAFA' />}
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
});`}},Hh=({isDark:s,story:l="tooltip-introduction"})=>{const[d,m]=k.useState("preview"),h=Oh(l),b=Xh[h],x=k.useMemo(()=>ad(h),[h]),i=()=>{const T=`import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ux4gTooltip, Ux4gRichTooltip, Ux4gIcons, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

${ad(h).split(`
export default function App`)[0].replace(/^import React from 'react';\nimport .*?from 'react-native';\nimport .*?from 'ux4g-react-native-design-system';\n\n/,"").trim()}

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
        ${{"tooltip-introduction":"<IntroductionExample />","tooltip-basic":"<PlacementExample />","tooltip-interactive":"<InteractiveExample />","tooltip-variants":"<VariantsExample />","tooltip-rich":"<RichExample />"}[h]}
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
});`,A=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gTooltip%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(T)}`;return t.jsx("iframe",{src:A,style:{width:"100%",height:"680px",border:"none",borderRadius:"8px"},title:"Expo Snack Tooltip Preview"})},w=[{name:"children",type:"ReactNode",default:"—",desc:"The anchor element that triggers the tooltip (button, icon, etc.).",required:!0},{name:"text",type:"string",default:"undefined",desc:"Tooltip body text.",required:!1},{name:"title",type:"string",default:"undefined",desc:"Optional title; when set, the tooltip renders the rich layout and becomes persistent.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Optional leading icon next to the title or text.",required:!1},{name:"placement",type:"'topStart' | 'top' | 'topEnd' | 'bottomStart' | 'bottom' | 'bottomEnd' | 'leftStart' | 'left' | 'leftEnd' | 'rightStart' | 'right' | 'rightEnd'",default:"'top'",desc:"Placement of the tooltip relative to the target.",required:!1},{name:"trigger",type:"'press' | 'longPress'",default:"'longPress'",desc:"Gesture that opens the tooltip.",required:!1},{name:"backgroundColor",type:"string",default:"neutral700 (light) / neutral300 (dark)",desc:"Tooltip bubble background color.",required:!1},{name:"contentColor",type:"string",default:"neutral50 (light) / neutral900 (dark)",desc:"Tooltip text and icon color.",required:!1},{name:"textStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom typography style for the body text.",required:!1},{name:"cornerRadius",type:"number",default:"4",desc:"Border radius of the tooltip bubble.",required:!1},{name:"arrowWidth",type:"number",default:"10",desc:"Width of the caret/arrow.",required:!1},{name:"arrowHeight",type:"number",default:"6",desc:"Height of the caret/arrow.",required:!1},{name:"isPersistent",type:"boolean",default:"false",desc:"If true, the tooltip does not auto-dismiss after 2s.",required:!1},{name:"action",type:"ReactNode",default:"undefined",desc:"Optional action element rendered at the bottom (rich tooltip).",required:!1},{name:"customContent",type:"ReactNode",default:"undefined",desc:"Fully custom tooltip body replacing the default layout.",required:!1},{name:"maxWidth",type:"number",default:"240",desc:"Maximum width of the tooltip bubble.",required:!1},{name:"autoShow",type:"boolean",default:"false",desc:"Automatically opens the tooltip once when the anchor layout completes.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"TooltipExample.tsx"})}),d==="props"&&t.jsxs("div",{className:"wb-props-area",children:[t.jsx("h3",{className:"props-section-title",children:"Ux4gTooltip / Ux4gRichTooltip Props"}),t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]}),t.jsxs("p",{className:"props-note",children:[t.jsx("strong",{children:"Ux4gRichTooltip"})," is the same component with ",t.jsxs("code",{children:["isPersistent=","{true}"]})," forced, so rich tooltips with title/icon/action never auto-dismiss."]})]})]})]})})]})},Gh=({isDark:s,story:l="empty-state-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { Ux4gEmptyState, Ux4gIcons } from 'ux4g-react-native-design-system';"),i.push(""),l==="empty-state-variants"?(i.push("// Variant presets"),i.push('<Ux4gEmptyState variant="noResults" title="No results found" subtitle="Try a different keyword." />'),i.push('<Ux4gEmptyState variant="noData" title="No records available" subtitle="There is nothing to show yet." />'),i.push('<Ux4gEmptyState variant="comingSoon" title="Feature coming soon" subtitle="This module will be available shortly." />'),i.push('<Ux4gEmptyState variant="error" title="Unable to load" subtitle="Please check your network and retry." />')):l==="empty-state-action"?(i.push("// Action button + custom icon"),i.push("<Ux4gEmptyState"),i.push('  variant="error"'),i.push('  title="Something went wrong"'),i.push('  subtitle="Unable to fetch latest data."'),i.push('  buttonText="Retry"'),i.push("  onButtonPressed={() => {}}"),i.push("/>"),i.push(""),i.push("<Ux4gEmptyState"),i.push('  variant="custom"'),i.push("  icon={Ux4gIcons.verification({ size: 56 })}"),i.push('  title="All caught up"'),i.push('  subtitle="No pending tasks in this queue."'),i.push("/>")):(i.push("// Basic usage"),i.push("<Ux4gEmptyState"),i.push('  variant="noResults"'),i.push('  title="No results found"'),i.push('  subtitle="Did you mean driving license or ration card?"'),i.push('  buttonText="Clear filters"'),i.push("  onButtonPressed={() => {}}"),i.push("/>")),i.join(`
`)},[l]),b=()=>{let i="";l==="empty-state-variants"?i=`        <Ux4gEmptyState
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
        />`:l==="empty-state-action"?i=`        <Ux4gEmptyState
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
        />`:i=`        <Ux4gEmptyState
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
    <Ux4gThemeProvider isDark={${s}}>
      <ScrollView contentContainerStyle={styles.container}>
${i}
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
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gEmptyState%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack EmptyState Preview"})},x=[{name:"title",type:"string",default:"—",desc:"Primary message.",required:!0},{name:"variant",type:"'noResults' | 'noData' | 'comingSoon' | 'error' | 'custom'",default:"'custom'",desc:"Semantic preset for the empty state.",required:!1},{name:"subtitle",type:"string",default:"undefined",desc:"Secondary message.",required:!1},{name:"description",type:"string",default:"undefined",desc:"Descriptive text.",required:!1},{name:"icon",type:"ReactNode",default:"undefined",desc:"Icon displayed above title.",required:!1},{name:"iconSize",type:"number",default:"48",desc:"Size of the top icon.",required:!1},{name:"iconColor",type:"string",default:"theme.colors.primary",desc:"Color of the top icon.",required:!1},{name:"titleStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom style for the title.",required:!1},{name:"bodyStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom style for subtitle and description.",required:!1},{name:"buttonText",type:"string",default:"undefined",desc:"CTA button label.",required:!1},{name:"onButtonPressed",type:"() => void",default:"undefined",desc:"CTA button callback.",required:!1},{name:"buttonSize",type:"'small' | 'medium' | 'large'",default:"'small'",desc:"Size of the CTA button.",required:!1},{name:"buttonLeadingIcon",type:"Ux4gIconProp",default:"undefined",desc:"Icon shown inside the CTA button.",required:!1},{name:"padding",type:"number",default:"24",desc:"Padding around the whole component.",required:!1},{name:"bodyHorizontalPadding",type:"number",default:"24",desc:"Extra horizontal padding for text.",required:!1},{name:"containerStyle",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Style override for outer container.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Empty State"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Empty state layout with semantic variant icons, clear messaging, and optional recovery action."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"EmptyStateExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},Qh=({isDark:s})=>{const[l,d]=k.useState("preview"),m=k.useMemo(()=>{const x=[];return x.push("import { Ux4gFeedbackFormStar } from 'ux4g-react-native-design-system';"),x.push(""),x.push("<Ux4gFeedbackFormStar"),x.push("  onSubmit={(rating, selectedOptions, comment) => console.log(rating, selectedOptions, comment)}"),x.push("/>"),x.join(`
`)},[]),h=()=>{const x=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gFeedbackFormStar, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`,i=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gFeedbackFormStar%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:i,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Feedback Star Preview"})},b=[{name:"title",type:"string",default:"'Rate your experience'",desc:"Top heading text.",required:!1},{name:"improvementTitle",type:"string",default:"'What can we improve?'",desc:"Heading above improvement chips.",required:!1},{name:"commentPlaceholder",type:"string",default:"'Tell us more about your experience'",desc:"Placeholder for comment box.",required:!1},{name:"submitButtonText",type:"string",default:"'Submit'",desc:"Primary button text.",required:!1},{name:"skipButtonText",type:"string",default:"'Skip'",desc:"Skip button text.",required:!1},{name:"successTitle",type:"string",default:"'Feedback submitted'",desc:"Success view title.",required:!1},{name:"successMessage",type:"string",default:"default success copy",desc:"Success view message.",required:!1},{name:"improvementOptions",type:"string[]",default:"['Speed','Design','Reliability','Features','Other']",desc:"Selectable improvement options.",required:!1},{name:"maxStars",type:"number",default:"5",desc:"Number of stars.",required:!1},{name:"initialRating",type:"number",default:"0",desc:"Initial star rating value.",required:!1},{name:"minWords",type:"number",default:"0",desc:"Minimum words required in comment.",required:!1},{name:"maxLength",type:"number",default:"200",desc:"Max comment length.",required:!1},{name:"onSubmit",type:"(rating: number, selectedOptions: string[], comment: string) => void",default:"undefined",desc:"Submit callback.",required:!1},{name:"onSkip",type:"() => void",default:"undefined",desc:"Skip callback.",required:!1},{name:"onCloseSuccess",type:"() => void",default:"undefined",desc:"Close callback for success state.",required:!1},{name:"activeRatingColor",type:"string",default:"auto by rating",desc:"Active star color override.",required:!1},{name:"lowRatingColor",type:"string",default:"UX4GColors.red600",desc:"Low rating color.",required:!1},{name:"highRatingColor",type:"string",default:"UX4GColors.yellow600",desc:"High rating color.",required:!1},{name:"inactiveRatingColor",type:"string",default:"theme-based muted",desc:"Inactive star color.",required:!1},{name:"successIconColor",type:"string",default:"theme success color",desc:"Success icon color.",required:!1},{name:"successBackgroundColor",type:"string",default:"undefined",desc:"Success background override.",required:!1},{name:"lowRatingThreshold",type:"number",default:"2",desc:"Threshold for low/high color split.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"feedbackformstar"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Star rating feedback form variant."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${l==="preview"?"active":""}`,onClick:()=>d("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${l==="code"?"active":""}`,onClick:()=>d("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${l==="props"?"active":""}`,onClick:()=>d("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[l==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:h()})}),l==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:m,language:"TSX",filename:"FeedbackStarExample.tsx"})}),l==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:b.map(x=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[x.name,x.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:x.type})}),t.jsx("td",{children:x.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:x.default})})]},x.name))})]})})]})]})})]})},Yh=({isDark:s})=>{const[l,d]=k.useState("preview"),m=k.useMemo(()=>{const x=[];return x.push("import { Ux4gFeedbackFormCsat } from 'ux4g-react-native-design-system';"),x.push(""),x.push("<Ux4gFeedbackFormCsat"),x.push("  onSubmit={(rating, comment) => console.log(rating, comment)}"),x.push("/>"),x.join(`
`)},[]),h=()=>{const x=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gFeedbackFormCsat, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`,i=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gFeedbackFormCsat%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:i,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Feedback Csat Preview"})},b=[{name:"title",type:"string",default:"'How do you feel about this service?'",desc:"Top heading text.",required:!1},{name:"badLabel",type:"string",default:"'← Bad'",desc:"Left scale label.",required:!1},{name:"goodLabel",type:"string",default:"'Good →'",desc:"Right scale label.",required:!1},{name:"commentPlaceholder",type:"string",default:"'Please tell us how can we improve'",desc:"Placeholder for comment box.",required:!1},{name:"submitButtonText",type:"string",default:"'Submit'",desc:"Primary button text.",required:!1},{name:"skipButtonText",type:"string",default:"'Skip'",desc:"Skip button text.",required:!1},{name:"successTitle",type:"string",default:"'Feedback submitted'",desc:"Success view title.",required:!1},{name:"successMessage",type:"string",default:"default success copy",desc:"Success view message.",required:!1},{name:"minWords",type:"number",default:"0",desc:"Minimum words required in comment.",required:!1},{name:"maxLength",type:"number",default:"200",desc:"Max comment length.",required:!1},{name:"onSubmit",type:"(rating: number, comment: string) => void",default:"undefined",desc:"Submit callback.",required:!1},{name:"onSkip",type:"() => void",default:"undefined",desc:"Skip callback.",required:!1},{name:"onCloseSuccess",type:"() => void",default:"undefined",desc:"Close callback for success state.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"feedbackformcsat"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"CSAT smiley rating feedback form variant."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${l==="preview"?"active":""}`,onClick:()=>d("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${l==="code"?"active":""}`,onClick:()=>d("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${l==="props"?"active":""}`,onClick:()=>d("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[l==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:h()})}),l==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:m,language:"TSX",filename:"FeedbackCsatExample.tsx"})}),l==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:b.map(x=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[x.name,x.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:x.type})}),t.jsx("td",{children:x.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:x.default})})]},x.name))})]})})]})]})})]})},Kh=({isDark:s})=>{const[l,d]=k.useState("preview"),m=k.useMemo(()=>{const x=[];return x.push("import { Ux4gFeedbackFormNps } from 'ux4g-react-native-design-system';"),x.push(""),x.push("<Ux4gFeedbackFormNps"),x.push("  onSubmit={(score, comment) => console.log(score, comment)}"),x.push("/>"),x.join(`
`)},[]),h=()=>{const x=`import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ux4gFeedbackFormNps, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${s}}>
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
});`,i=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gFeedbackFormNps%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(x)}`;return t.jsx("iframe",{src:i,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Feedback Nps Preview"})},b=[{name:"title",type:"string",default:"'How likely are you to recommend us?'",desc:"Top heading text.",required:!1},{name:"unlikelyLabel",type:"string",default:"'0 - Extremely Unlikely'",desc:"Left scale label.",required:!1},{name:"likelyLabel",type:"string",default:"'10 - Extremely Likely'",desc:"Right scale label.",required:!1},{name:"commentPlaceholder",type:"string",default:"'Please tell us why you gave this score'",desc:"Placeholder for comment box.",required:!1},{name:"submitButtonText",type:"string",default:"'Submit'",desc:"Primary button text.",required:!1},{name:"skipButtonText",type:"string",default:"'Skip'",desc:"Skip button text.",required:!1},{name:"successTitle",type:"string",default:"'Feedback submitted'",desc:"Success view title.",required:!1},{name:"successMessage",type:"string",default:"default success copy",desc:"Success view message.",required:!1},{name:"minWords",type:"number",default:"0",desc:"Minimum words required in comment.",required:!1},{name:"maxLength",type:"number",default:"200",desc:"Max comment length.",required:!1},{name:"onSubmit",type:"(score: number, comment: string) => void",default:"undefined",desc:"Submit callback.",required:!1},{name:"onSkip",type:"() => void",default:"undefined",desc:"Skip callback.",required:!1},{name:"onCloseSuccess",type:"() => void",default:"undefined",desc:"Close callback for success state.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"feedbackformnps"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"NPS 0-10 score feedback form variant."}),t.jsx("p",{className:"wb-subtitle",style:{marginTop:6},children:"This component has no required props."})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${l==="preview"?"active":""}`,onClick:()=>d("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${l==="code"?"active":""}`,onClick:()=>d("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${l==="props"?"active":""}`,onClick:()=>d("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[l==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:h()})}),l==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:m,language:"TSX",filename:"FeedbackNpsExample.tsx"})}),l==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:b.map(x=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[x.name,x.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:x.type})}),t.jsx("td",{children:x.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:x.default})})]},x.name))})]})})]})]})})]})},Jh=s=>s==="search"||s==="search-field"?"search-basic":["search-basic","search-submit","search-autocomplete","search-status"].includes(s)?s:"search-basic",Zh={"search-basic":{title:"Search Field",description:"Basic search input with search icon, optional voice/clear actions, and helper caption."},"search-submit":{title:"Search Field",description:"Search field with attached submit button using filled or tonal style variants."},"search-autocomplete":{title:"Search Field",description:"Autocomplete dropdown with filtering modes and option selection behavior."},"search-status":{title:"Search Field",description:"Validation states with semantic status color, icon, and caption feedback."}},ef=s=>s==="search-submit"?`import React, { useState } from 'react';
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
}`:s==="search-autocomplete"?`import React, { useState } from 'react';
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
}`:s==="search-status"?`import React, { useState } from 'react';
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
}`,tf=s=>s==="search-submit"?`        <View style={styles.stackFull}>
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
        </View>`:s==="search-autocomplete"?`        <View style={styles.stackFull}>
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
        </View>`:s==="search-status"?`        <View style={styles.stackFull}>
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
        </View>`,rf=({isDark:s,story:l="search-basic"})=>{const[d,m]=k.useState("preview"),h=Jh(l),b=Zh[h],x=k.useMemo(()=>ef(h),[h]),i=()=>{const p=`import React, { useState } from 'react';
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
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${tf(h)}
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
});`,T=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gSearchField%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(p)}`;return t.jsx("iframe",{src:T,style:{width:"100%",height:"640px",border:"none",borderRadius:"8px"},title:"Expo Snack Search Field Preview"})},w=[{name:"value",type:"string",default:"required",desc:"Current search input value.",required:!0},{name:"onValueChange",type:"(value: string) => void",default:"required",desc:"Called when input text changes.",required:!0},{name:"variant",type:"'basicSearch' | 'searchWithSubmit' | 'autocomplete'",default:"'basicSearch'",desc:"Search interaction mode.",required:!1},{name:"filterType",type:"'contains' | 'startsWith' | 'startsWithPerTerm'",default:"'contains'",desc:"Autocomplete filter behavior.",required:!1},{name:"size",type:"'small' | 'medium' | 'large' | 'xl'",default:"'medium'",desc:"Height variant of search field.",required:!1},{name:"status",type:"'defaultStatus' | 'error' | 'warning' | 'success'",default:"'defaultStatus'",desc:"Validation state coloring and icon.",required:!1},{name:"buttonStyle",type:"'filled' | 'tonal'",default:"'filled'",desc:"Submit button style in submit variant.",required:!1},{name:"label / placeholder / caption",type:"string",default:"undefined",desc:"Supportive field text configuration.",required:!1},{name:"options",type:"string[]",default:"[]",desc:"Autocomplete options list.",required:!1},{name:"showVoiceIcon / showClearIcon",type:"boolean",default:"true / true",desc:"Voice and clear icon visibility toggles.",required:!1},{name:"isLoading",type:"boolean",default:"false",desc:"Shows loading spinner in dropdown.",required:!1},{name:"enabled / readOnly",type:"boolean",default:"true / false",desc:"Input interactivity controls.",required:!1},{name:"onSubmitClick",type:"(value: string) => void",default:"undefined",desc:"Submit callback for button/keyboard action.",required:!1},{name:"onOptionSelected",type:"(option: string) => void",default:"undefined",desc:"Called when autocomplete option is chosen.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test identifier for automation.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:b.title}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:b.description}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"}),"Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"}),"Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"}),"Props"]})]}),t.jsxs("div",{className:"wb-tab-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:i()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:x,language:"TSX",filename:"SearchFieldExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:w.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[p.name,p.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:p.type})}),t.jsx("td",{children:p.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:p.default})})]},p.name))})]})})]})]})})]})},nf=({isDark:s,story:l="slider-basic"})=>{const[d,m]=k.useState("preview"),h=k.useMemo(()=>{const i=[];return i.push("import { Ux4gSlider } from 'ux4g-react-native-design-system';"),i.push("import { useState } from 'react';"),i.push(""),i.push("// Basic Slider (Controlled)"),i.push("const [value, setValue] = useState(50);"),i.push("<Ux4gSlider"),i.push("  value={value}"),i.push("  onValueChange={setValue}"),i.push('  label="Volume"'),i.push("  min={0}"),i.push("  max={100}"),i.push("/>"),i.push(""),i.push("// With Steps (Divisions)"),i.push("<Ux4gSlider"),i.push("  value={value}"),i.push("  onValueChange={setValue}"),i.push('  label="4 Steps"'),i.push("  steps={4}  // Creates 5 snap positions"),i.push("/>"),i.push(""),i.push("// With Caption Variant"),i.push("<Ux4gSlider"),i.push("  value={value}"),i.push("  onValueChange={setValue}"),i.push('  label="Risk Level"'),i.push("  isRequired={true}"),i.push('  caption="Setting above 80 may trigger alerts"'),i.push('  captionVariant="warning"'),i.push("/>"),i.push(""),i.push("// With Marks and Values"),i.push("<Ux4gSlider"),i.push("  value={value}"),i.push("  onValueChange={setValue}"),i.push('  label="Progress"'),i.push("  steps={4}"),i.push("  showMarksAndValues={true}"),i.push("  valueFormatter={(v) => `${v}%`}"),i.push("/>"),i.join(`
`)},[]),b=()=>{let i="";l==="slider-sizes"?i=`        <Ux4gSlider size="s" value={smallVal} onValueChange={setSmallVal} label="Small Size (thumb: 16, track: 4)" />
        <View style={{ height: 24 }} />
        <Ux4gSlider size="m" value={mediumVal} onValueChange={setMediumVal} label="Medium Size (thumb: 20, track: 6)" />`:l==="slider-steps"?i=`        <Ux4gSlider value={step4} onValueChange={setStep4} label="4 Steps (5 positions)" steps={4} />
        <View style={{ height: 24 }} />
        <Ux4gSlider value={step9} onValueChange={setStep9} label="9 Steps (10 positions)" steps={9} />`:l==="slider-custom-range"?i='        <Ux4gSlider value={priceVal} onValueChange={setPriceVal} label="Price Range" min={0} max={1000} steps={9} valueFormatter={(v) => `$${v}`} />':l==="slider-disabled"?i=`        <Ux4gSlider value={40} label="Disabled Slider" enabled={false} />
        <View style={{ height: 24 }} />
        <Ux4gSlider value={75} label="Disabled with Caption" enabled={false} caption="This slider is locked" />`:l==="slider-formatter"?i=`        <Ux4gSlider 
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
        />`:i=`        <Ux4gSlider 
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
    <Ux4gThemeProvider isDark={${s}}>
      <View style={styles.container}>
${i}
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
});`,p=`https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${s?"dark":"light"}&name=Ux4gSlider%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@latest,react-native-svg@*&code=${encodeURIComponent(w)}`;return t.jsx("iframe",{src:p,style:{width:"100%",height:"600px",border:"none",borderRadius:"8px"},title:"Expo Snack Preview"})},x=[{name:"value",type:"number",default:"required",desc:"Current value of the slider (controlled component).",required:!0},{name:"onValueChange",type:"(value: number) => void",default:"undefined",desc:"Callback fired when the value changes.",required:!1},{name:"min",type:"number",default:"0",desc:"Minimum value of the slider.",required:!1},{name:"max",type:"number",default:"100",desc:"Maximum value of the slider.",required:!1},{name:"steps",type:"number",default:"undefined",desc:"Number of discrete steps (divisions). Creates (steps + 2) snap positions.",required:!1},{name:"size",type:"'s' | 'm' | 'small' | 'medium'",default:"'small'",desc:"Size of the slider (small: thumb 16, track 4; medium: thumb 20, track 6).",required:!1},{name:"enabled",type:"boolean",default:"true",desc:"Whether the slider is interactive.",required:!1},{name:"label",type:"string",default:"undefined",desc:"Label text displayed above the slider.",required:!1},{name:"isRequired",type:"boolean",default:"false",desc:"Whether to show a required asterisk (*) next to the label.",required:!1},{name:"labelIcon",type:"ReactNode",default:"undefined",desc:"Icon element rendered next to the label text.",required:!1},{name:"startValueText",type:"string",default:"undefined",desc:"Custom text for the start value label (overrides formatted min).",required:!1},{name:"endValueText",type:"string",default:"undefined",desc:"Custom text for the end value label (overrides formatted max).",required:!1},{name:"caption",type:"string",default:"undefined",desc:"Caption text displayed below the slider.",required:!1},{name:"captionVariant",type:"'helper' | 'error' | 'warning' | 'success'",default:"'helper'",desc:"Semantic variant for the caption (affects color and icon).",required:!1},{name:"showMarksAndValues",type:"boolean",default:"false",desc:"Whether to show tick marks and value labels at each step.",required:!1},{name:"showIndicator",type:"boolean",default:"false",desc:"Whether to show a value indicator tooltip on drag (Flutter feature).",required:!1},{name:"showInputFields",type:"boolean",default:"false",desc:"Whether to show editable input fields for current/max values.",required:!1},{name:"showValueLabels",type:"boolean",default:"false",desc:"Whether to show formatted value labels (start/end) above the slider.",required:!1},{name:"valueFormatter",type:"(value: number) => string",default:"_formatValue",desc:"Custom formatter for value display (default: integer or 1 decimal).",required:!1},{name:"rightLabelElement",type:"ReactNode",default:"undefined",desc:"Custom right-aligned element displayed next to the label.",required:!1},{name:"style",type:"StyleProp<ViewStyle>",default:"undefined",desc:"Custom style for the container.",required:!1},{name:"labelStyle",type:"StyleProp<TextStyle>",default:"undefined",desc:"Custom style for the label text.",required:!1},{name:"testID",type:"string",default:"undefined",desc:"Test ID for testing.",required:!1}];return t.jsxs("div",{className:"wb-page",children:[t.jsxs("div",{className:"wb-header",children:[t.jsxs("div",{className:"wb-header-row",children:[t.jsx("h1",{className:"wb-title",children:"Slider"}),t.jsx("span",{className:"wb-badge",children:"Component"})]}),t.jsx("p",{className:"wb-subtitle",children:"Complete React Native port of Flutter `slider.dart`, matching all props, visual behavior, and features including caption variants, marks, input fields, and value labels."}),t.jsxs("p",{className:"wb-subtitle",style:{marginTop:6},children:[t.jsx("span",{style:{color:"#E11D48",fontWeight:700},children:"*"})," marks required props."]})]}),t.jsx("div",{className:"wb-body",children:t.jsxs("div",{className:"wb-main",children:[t.jsxs("div",{className:"wb-tab-bar",children:[t.jsxs("button",{className:`wb-tab ${d==="preview"?"active":""}`,onClick:()=>m("preview"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"visibility"})," Preview"]}),t.jsxs("button",{className:`wb-tab ${d==="code"?"active":""}`,onClick:()=>m("code"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"code"})," Code"]}),t.jsxs("button",{className:`wb-tab ${d==="props"?"active":""}`,onClick:()=>m("props"),type:"button",children:[t.jsx("span",{className:"material-symbols-outlined wb-tab-icon",children:"tune"})," Props"]})]}),t.jsxs("div",{className:"wb-content",children:[d==="preview"&&t.jsx(J,{isDark:s,children:t.jsx("div",{className:`wb-preview-area ${s?"dark":""}`,children:b()})}),d==="code"&&t.jsx("div",{className:"wb-code-area",children:t.jsx(Q,{code:h,language:"TSX",filename:"SliderExample.tsx"})}),d==="props"&&t.jsx("div",{className:"wb-props-area",children:t.jsxs("table",{className:"props-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Default"})]})}),t.jsx("tbody",{children:x.map(i=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("span",{className:"prop-name",children:[i.name,i.required?t.jsx("span",{style:{color:"#E11D48"},children:" *"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"prop-type",children:i.type})}),t.jsx("td",{children:i.desc}),t.jsx("td",{children:t.jsx("span",{className:"prop-default",children:i.default})})]},i.name))})]})})]})]})})]})},Wa=["50","100","200","300","400","500","600","700","800","900","950"],Lr=s=>K[s]??"#000000",Ze=s=>[{token:s,color:Lr(s),label:`${s} ★`,main:!0},...Wa.map(l=>({token:`${s}-${l}`,color:Lr(`${s}${l}`),label:l}))],_s=s=>Wa.map(l=>({token:`${s}-${l}A`,color:Lr(`${s}${l}A`),label:`${l}A`})),af=[{token:"neutral-0",color:K.neutral0,label:"0 (white)"},...Wa.map(s=>({token:`neutral-${s}`,color:Lr(`neutral${s}`),label:s})),{token:"neutral-1000black",color:K.neutral1000black,label:"1000 (black)"}],sf=[{token:"neutral-0A",color:K.neutral0A,label:"0A"},...Wa.map(s=>({token:`neutral-${s}A`,color:Lr(`neutral${s}A`),label:`${s}A`})),{token:"neutral-1000A",color:K.neutral1000A,label:"1000A"}],of=[{token:"neutral-0B",color:K.neutral0B,label:"0B"},{token:"neutral-950B",color:K.neutral950B,label:"950B"}],lf=["gray100","gray200","gray800","gray900"].map(s=>({token:s,color:Lr(s),label:`gray-${s.replace("gray","")}`})),cf=[{token:"white",color:K.white,label:"white"},{token:"transparent",color:K.transparent,label:"transparent"}],df={primary:{header:{title:"UX4GColors Tokens",subtitle:"UX4GColors.* (Ux4gPalette is a deprecated alias)"},groups:[{label:"Primary Solid Scale",swatches:Ze("primary")},{label:"Primary Alpha Scale (25% Opacity)",swatches:_s("primary")}]},secondary:{groups:[{label:"Secondary Solid Scale",swatches:Ze("secondary")},{label:"Secondary Alpha Scale (25% Opacity)",swatches:_s("secondary")}]},tertiary:{groups:[{label:"Tertiary Solid Scale",swatches:Ze("tertiary")},{label:"Tertiary Alpha Scale (25% Opacity)",swatches:_s("tertiary")}]},red:{groups:[{label:"Red (Error)",swatches:Ze("red")}]},orange:{groups:[{label:"Orange (Warning)",swatches:Ze("orange")}]},yellow:{groups:[{label:"Yellow",swatches:Ze("yellow")}]},gold:{groups:[{label:"Gold",swatches:Ze("gold")}]},green:{groups:[{label:"Green (Success)",swatches:Ze("green")}]},lime:{groups:[{label:"Lime",swatches:Ze("lime")}]},blue:{groups:[{label:"Blue (Info)",swatches:Ze("blue")}]},skyblue:{groups:[{label:"Sky Blue",swatches:Ze("skyBlue")}]},cyan:{groups:[{label:"Cyan",swatches:Ze("cyan")}]},purple:{groups:[{label:"Purple",swatches:Ze("purple")}]},pink:{groups:[{label:"Pink",swatches:Ze("pink")}]},neutral:{groups:[{label:"Neutral Solid Scale",swatches:af},{label:"Neutral Alpha Scale (25% Opacity)",swatches:sf},{label:"Neutral Beta Scale (70% Opacity)",swatches:of},{label:"Legacy Gray Aliases",swatches:lf},{label:"Common Colors",swatches:cf}]}},uf=[{base:"primary",on:"onPrimary"},{base:"secondary",on:"onSecondary"},{base:"background",on:"onBackground"},{base:"surface",on:"onSurface"},{base:"error",on:"onError"},{base:"success",on:"onSuccess"},{base:"warning",on:"onWarning"},{base:"info",on:"onInfo"}],vd=s=>/^#/.test(s)?s.toUpperCase():s,pf=s=>{const l=s.match(/^#([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/);if(!l)return 1;const d=parseInt(l[1].slice(0,2),16),m=parseInt(l[1].slice(2,4),16),h=parseInt(l[1].slice(4,6),16);return(d*.299+m*.587+h*.114)/255},wd=s=>pf(s)<.5,mf=({swatch:s,isDark:l})=>{const[d,m]=k.useState(null),h=vd(s.color),b=`UX4GColors.${s.token.replace(/-/g,"")}`,x=wd(s.color),i=x?"#FFFFFF":"#000000",w=k.useCallback(async(B,z)=>{try{await navigator.clipboard.writeText(B)}catch{}m(z),setTimeout(()=>m(null),1500)},[]),p=d==="card",T=d==="top",A=d==="code";return t.jsxs("div",{className:`swatch-tile ${s.main?"main":""}`,children:[t.jsxs("div",{className:"swatch-color",style:{background:s.color},onClick:()=>w(h,"card"),title:`Tap to copy ${h}`,children:[p&&t.jsx("span",{className:"material-symbols-outlined swatch-copied-check",style:{color:i},children:"check"}),t.jsx("button",{className:"swatch-copy-btn",style:{color:x?"#FFFFFF":"#111827",background:x?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.08)"},onClick:B=>{B.stopPropagation(),w(h,"top")},title:T?"Copied!":`Copy Hex Code (${h})`,children:t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13},children:T?"check":"content_copy"})})]}),t.jsxs("div",{className:"swatch-info",children:[t.jsxs("div",{className:"swatch-meta",children:[t.jsx("span",{className:"swatch-label",title:s.label,children:s.label}),t.jsx("span",{className:"swatch-hex",children:h})]}),t.jsxs("div",{className:"swatch-code",children:[t.jsx("span",{className:"swatch-code-text",title:b,children:b}),t.jsx("button",{className:"swatch-mini-copy",onClick:()=>w(b,"code"),title:A?"Copied!":`Copy Code (${b})`,children:t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13},children:A?"check":"content_copy"})})]})]})]})},hf=({group:s,isDark:l,pad:d=!0})=>t.jsxs("div",{className:"palette-view",children:[t.jsx("div",{className:"palette-label",children:s.label}),t.jsx("div",{className:"palette-grid",children:s.swatches.map(m=>t.jsx(mf,{swatch:m,isDark:l},m.token))})]}),id=({token:s,color:l})=>{const[d,m]=k.useState(null),h=vd(l),b=`useUx4gTheme().colors.${s}`,x=wd(l),i=x?"#FFFFFF":"#111827",w=k.useCallback(async(A,B)=>{try{await navigator.clipboard.writeText(A)}catch{}m(B),setTimeout(()=>m(null),1500)},[]),p=d==="card",T=d==="code";return t.jsxs("div",{className:"semantic-tile",style:{background:l},onClick:()=>w(h,"card"),title:`Tap to copy ${h}`,children:[t.jsx("button",{className:"swatch-copy-btn",style:{color:x?"#FFFFFF":"#111827",background:x?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.08)"},onClick:A=>{A.stopPropagation(),w(b,"code")},title:T?"Copied!":`Copy Code (${b})`,children:t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13},children:T?"check":"content_copy"})}),t.jsxs("div",{className:"semantic-tile-body",style:{color:i},children:[t.jsxs("div",{className:"semantic-tile-token",children:[t.jsxs("span",{className:"semantic-tile-token-text",children:["colors.",s]}),p&&t.jsx("span",{className:"material-symbols-outlined semantic-tile-check",style:{fontSize:14},children:"check"})]}),t.jsx("div",{className:"semantic-tile-hex",children:h})]})]})},ff=({isDark:s})=>{const d=s?ud:Xs;return t.jsxs("div",{className:"semantic-section",children:[t.jsx("h2",{className:"semantic-title",children:"Semantic Color Tokens"}),t.jsx("p",{className:"semantic-description",children:"Theme-aware colors from useUx4gTheme().colors — automatically adapt between Light and Dark themes. Use the theme toggle in the sidebar to see the change."}),t.jsx("div",{className:"semantic-note",children:t.jsx("pre",{children:`const { colors } = useUx4gTheme();
// Use: colors.primary  colors.onPrimary  colors.surface …`})}),t.jsx("div",{className:"semantic-pairs",children:uf.map(m=>t.jsxs("div",{className:"semantic-pair-row",children:[t.jsx(id,{token:m.base,color:d[m.base]}),t.jsx(id,{token:m.on,color:d[m.on]})]},m.base))})]})},gf=({isDark:s,section:l="primary"})=>{const d=l==="semantic"?void 0:l,m=d?df[d]:void 0;return t.jsxs("div",{className:"doc-container",children:[t.jsxs("div",{className:"doc-header",children:[t.jsxs("div",{className:"doc-breadcrumb",children:[t.jsx("a",{href:"#",onClick:h=>{h.preventDefault()},children:"Token"})," ","/ Colors"]}),t.jsx("h1",{className:"doc-title",children:"Colors"}),t.jsx("p",{className:"doc-description",children:"Fixed color palette tokens from UX4GColors.* plus theme-aware semantic tokens from useUx4gTheme().colors. Click any swatch to copy its hex value."})]}),m?t.jsxs(t.Fragment,{children:[m.header&&t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:m.header.title}),t.jsx("div",{className:"palette-section-subtitle",children:m.header.subtitle})]}),m.groups.map(h=>t.jsx(hf,{group:h,isDark:s},h.label))]}):t.jsx(ff,{isDark:s})]})},xf=s=>{switch(s){case"400":return"400 (Regular)";case"500":return"500 (Medium)";case"600":return"600 (SemiBold)";case"700":return"700 (Bold)";default:return s}},yf=[{tokenName:"hXXS_default",label:"Header XXS (Default)",style:G.hXXS_default},{tokenName:"hXXS_strong",label:"Header XXS (Strong)",style:G.hXXS_strong},{tokenName:"hXS_default",label:"Header XS (Default)",style:G.hXS_default},{tokenName:"hXS_strong",label:"Header XS (Strong)",style:G.hXS_strong},{tokenName:"hS_default",label:"Header S (Default)",style:G.hS_default},{tokenName:"hS_strong",label:"Header S (Strong)",style:G.hS_strong},{tokenName:"hM_default",label:"Header M (Default)",style:G.hM_default},{tokenName:"hM_strong",label:"Header M (Strong)",style:G.hM_strong},{tokenName:"hL_default",label:"Header L (Default)",style:G.hL_default},{tokenName:"hL_strong",label:"Header L (Strong)",style:G.hL_strong},{tokenName:"hXL_default",label:"Header XL (Default)",style:G.hXL_default},{tokenName:"hXL_strong",label:"Header XL (Strong)",style:G.hXL_strong},{tokenName:"hXXL_default",label:"Header XXL (Default)",style:G.hXXL_default},{tokenName:"hXXL_strong",label:"Header XXL (Strong)",style:G.hXXL_strong}],bf=[{tokenName:"dXS_default",label:"Display XS (Default)",style:G.dXS_default},{tokenName:"dXS_strong",label:"Display XS (Strong)",style:G.dXS_strong},{tokenName:"dS_default",label:"Display S (Default)",style:G.dS_default},{tokenName:"dS_strong",label:"Display S (Strong)",style:G.dS_strong},{tokenName:"dM_default",label:"Display M (Default)",style:G.dM_default},{tokenName:"dM_strong",label:"Display M (Strong)",style:G.dM_strong},{tokenName:"dL_default",label:"Display L (Default)",style:G.dL_default},{tokenName:"dL_strong",label:"Display L (Strong)",style:G.dL_strong}],vf=[{tokenName:"bXS_default",label:"Body XS (Default)",style:G.bXS_default},{tokenName:"bXS_strong",label:"Body XS (Strong)",style:G.bXS_strong},{tokenName:"bS_default",label:"Body S (Default)",style:G.bS_default},{tokenName:"bS_strong",label:"Body S (Strong)",style:G.bS_strong},{tokenName:"bM_default",label:"Body M (Default)",style:G.bM_default},{tokenName:"bM_strong",label:"Body M (Strong)",style:G.bM_strong},{tokenName:"bL_default",label:"Body L (Default)",style:G.bL_default},{tokenName:"bL_strong",label:"Body L (Strong)",style:G.bL_strong}],wf=[{tokenName:"lS_default",label:"Label S (Default)",style:G.lS_default},{tokenName:"lS_strong",label:"Label S (Strong)",style:G.lS_strong},{tokenName:"lM_default",label:"Label M (Default)",style:G.lM_default},{tokenName:"lM_strong",label:"Label M (Strong)",style:G.lM_strong},{tokenName:"lL_default",label:"Label L (Default)",style:G.lL_default},{tokenName:"lL_strong",label:"Label L (Strong)",style:G.lL_strong},{tokenName:"lXL_default",label:"Label XL (Default)",style:G.lXL_default},{tokenName:"lXL_strong",label:"Label XL (Strong)",style:G.lXL_strong}],Sf=[{tokenName:"tS_default",label:"Title S (Default)",style:G.tS_default},{tokenName:"tS_strong",label:"Title S (Strong)",style:G.tS_strong},{tokenName:"tM_default",label:"Title M (Default)",style:G.tM_default},{tokenName:"tM_strong",label:"Title M (Strong)",style:G.tM_strong},{tokenName:"tL_default",label:"Title L (Default)",style:G.tL_default},{tokenName:"tL_strong",label:"Title L (Strong)",style:G.tL_strong}],Cf={header:{title:"Header Tokens",tokenPrefix:"useUx4gTheme().typography.h*",items:yf},display:{title:"Display Tokens",tokenPrefix:"useUx4gTheme().typography.d*",items:bf},body:{title:"Body Tokens",tokenPrefix:"useUx4gTheme().typography.b*",items:vf},label:{title:"Label Tokens",tokenPrefix:"useUx4gTheme().typography.l*",items:wf},title:{title:"Title Tokens",tokenPrefix:"useUx4gTheme().typography.t*",items:Sf}},jf=({item:s})=>{const[l,d]=k.useState(!1),m=`useUx4gTheme().typography.${s.tokenName}`,h=k.useCallback(async()=>{try{await navigator.clipboard.writeText(m)}catch{}d(!0),setTimeout(()=>d(!1),1500)},[m]);return t.jsxs("div",{className:"typography-card",children:[t.jsxs("div",{className:"typography-card-header",children:[t.jsx("span",{className:"typography-card-title",children:s.label}),t.jsxs("span",{className:"typography-pill",children:["Size: ",s.style.fontSize,"px"]}),t.jsxs("span",{className:"typography-pill",children:["Weight: ",xf(s.style.fontWeight)]}),t.jsxs("span",{className:"typography-pill",children:["Line height: ",s.style.lineHeight,"px"]})]}),t.jsxs("div",{className:"typography-code-row",children:[t.jsx("span",{className:"typography-code-text",title:m,children:m}),t.jsx("button",{className:"swatch-mini-copy",onClick:h,title:l?"Copied!":`Copy Code (${m})`,children:t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13},children:l?"check":"content_copy"})})]})]})},kf=()=>t.jsxs("div",{className:"typography-usage-section",children:[t.jsx("h2",{className:"semantic-title",children:"Using UX4G Typography"}),t.jsxs("p",{className:"semantic-description",children:["All text styles in UX4G are structured under ",t.jsx("code",{children:"Ux4gTypography"})," and are accessible through the theme hook ",t.jsx("code",{children:"useUx4gTheme().typography"}),". Every scale has both"," ",t.jsx("code",{children:"default"})," (standard weight) and ",t.jsx("code",{children:"strong"})," (bold/semibold weight) variations."]}),t.jsx(Q,{language:"TSX",filename:"Basic Usage Example",code:`import React from 'react';
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
</Text>`})})]}),Tf=({section:s="header"})=>{const l=s==="usage",d=l?void 0:Cf[s];return t.jsxs("div",{className:"doc-container",children:[t.jsxs("div",{className:"doc-header",children:[t.jsxs("div",{className:"doc-breadcrumb",children:[t.jsx("a",{href:"#",onClick:m=>{m.preventDefault()},children:"Token"})," ","/ Typography"]}),t.jsx("h1",{className:"doc-title",children:"Typography"}),t.jsx("p",{className:"doc-description",children:"Responsive typography scale tokens for UX4G design system. Includes Header, Display, Body, Label, and Title styles with default and strong weights."})]}),l?t.jsx(kf,{}):d&&t.jsxs("div",{className:"typography-category-section",children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:d.title}),t.jsx("div",{className:"palette-section-subtitle",children:d.tokenPrefix})]}),d.items.map(m=>t.jsx(jf,{item:m},m.tokenName))]})]})},sd=[{level:0,name:"flat",tokenName:"shadow0",title:"Flat Surfaces",details:"No shadow",cssBoxShadow:"none",cssBoxShadowDark:"none"},{level:1,name:"subtle",tokenName:"shadow1",title:"Subtle Lift",details:`Key 0,1 · blur 2
Ambient 0,1 · blur 2`,cssBoxShadow:"0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.04)",cssBoxShadowDark:"0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15)"},{level:2,name:"floating",tokenName:"shadow2",title:"Floating Content",details:`Key 0,1 · blur 2
Ambient 0,4 · blur 8`,cssBoxShadow:"0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.08)",cssBoxShadowDark:"0 1px 2px rgba(0, 0, 0, 0.24), 0 4px 8px rgba(0, 0, 0, 0.3)"},{level:3,name:"prominent",tokenName:"shadow3",title:"Prominent overlay",details:`Key 0,4 · blur 8
Ambient 0,0 · blur 16`,cssBoxShadow:"0 4px 8px rgba(0, 0, 0, 0.08), 0 0 16px rgba(0, 0, 0, 0.1)",cssBoxShadowDark:"0 4px 8px rgba(0, 0, 0, 0.3), 0 0 16px rgba(0, 0, 0, 0.4)"},{level:4,name:"highest",tokenName:"shadow4",title:"Highest emphasis",details:`Key 0,8 · blur 16
Ambient 0,16 · blur 32`,cssBoxShadow:"0 8px 16px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.15)",cssBoxShadowDark:"0 8px 16px rgba(0, 0, 0, 0.4), 0 16px 32px rgba(0, 0, 0, 0.5)"}],Nf=({item:s,isDark:l})=>t.jsxs("div",{className:"shadow-card-wrapper",children:[t.jsxs("div",{className:`shadow-card-box ${s.level===0?"level-0":""}`,style:{boxShadow:l?s.cssBoxShadowDark:s.cssBoxShadow},children:["Shadow ",s.level]}),t.jsx("div",{className:"shadow-card-title",children:s.title}),t.jsx("div",{className:"shadow-card-details",children:s.details})]}),Uf=({item:s})=>{const[l,d]=k.useState(!1),m=`Ux4gShadow.${s.tokenName}`,h=k.useCallback(async()=>{try{await navigator.clipboard.writeText(m)}catch{}d(!0),setTimeout(()=>d(!1),1500)},[m]);return t.jsxs("div",{className:"shadow-code-card",children:[t.jsxs("div",{className:"shadow-code-header",children:[t.jsxs("span",{className:"shadow-code-pill",children:["Shadow ",s.level]}),t.jsx("span",{className:"shadow-code-title",children:s.title})]}),t.jsx("div",{className:"shadow-code-description",children:s.details.replace(/\n/g," • ")}),t.jsxs("div",{className:"shadow-code-box",children:[t.jsx("span",{className:"shadow-code-snippet",children:m}),t.jsxs("button",{className:"shadow-copy-btn",onClick:h,children:[t.jsx("span",{className:"material-symbols-outlined",style:{fontSize:13,marginRight:4},children:l?"check":"content_copy"}),l?"Copied!":"Copy"]})]})]})},Pf=()=>t.jsxs("div",{className:"typography-usage-section",children:[t.jsx("h2",{className:"semantic-title",children:"Using UX4G Shadows"}),t.jsxs("p",{className:"semantic-description",children:["UX4G provides five reusable shadow levels (",t.jsx("code",{children:"shadow0"})," to ",t.jsx("code",{children:"shadow4"}),") to express depth, elevation, and hierarchy. Always apply predefined shadow tokens rather than setting custom shadow offsets manually."]}),t.jsx(Q,{language:"TSX",filename:"React Native — Shadow Usage",code:`import React from 'react';
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
});`})]}),Vf=({isDark:s,section:l="scale"})=>{const d=l==="usage";return t.jsxs("div",{className:"doc-container",children:[t.jsxs("div",{className:"doc-header",children:[t.jsxs("div",{className:"doc-breadcrumb",children:[t.jsx("a",{href:"#",onClick:m=>{m.preventDefault()},children:"Token"})," ","/ Shadow"]}),t.jsx("h1",{className:"doc-title",children:"Shadow"}),t.jsx("p",{className:"doc-description",children:"Five reusable shadow styles. Each combines a key and an ambient shadow to express depth. Apply the matching effect style from UX4G Design System — never hand-set shadow values."})]}),d?t.jsx(Pf,{}):t.jsxs("div",{className:"shadow-scale-section",children:[t.jsx("div",{className:"shadow-cards-row",children:sd.map(m=>t.jsx(Nf,{item:m,isDark:s},m.tokenName))}),t.jsxs("div",{style:{marginTop:48},children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:"Shadow Tokens & Code Snippets"}),t.jsx("div",{className:"palette-section-subtitle",children:"Ux4gShadow.*"})]}),t.jsx("div",{className:"shadow-code-rows-container",children:sd.map(m=>t.jsx(Uf,{item:m},m.tokenName))})]})]})]})},Ef=({token:s,value:l})=>t.jsxs("div",{className:"dimensions-spacing-row",children:[t.jsxs("div",{className:"dimensions-spacing-token",children:["Ux4gSpace.",s]}),t.jsx("div",{className:"dimensions-spacing-bar",style:{width:`${l===0?2:Math.min(Math.max(l,2),320)}px`}}),t.jsxs("div",{className:"dimensions-spacing-val",children:[l,"px"]})]}),Af=({token:s,value:l})=>{const d=Math.min(Math.max(l,0),36);return t.jsxs("div",{className:"dimensions-radius-item",children:[t.jsx("div",{className:"dimensions-radius-box",style:{borderRadius:l===999?"999px":`${d}px`}}),t.jsx("div",{className:"dimensions-radius-token",children:s}),t.jsxs("div",{className:"dimensions-radius-val",children:[l,"px"]})]})},Df=({token:s,value:l})=>t.jsxs("div",{className:"dimensions-border-row",children:[t.jsxs("div",{className:"dimensions-border-token",children:["Ux4gBorderWidth.",s]}),t.jsx("div",{className:"dimensions-border-line",style:{height:`${l===0?1:l}px`}}),t.jsx("div",{className:"dimensions-border-val",children:l===0?"none":`${l}px`})]}),Ff=()=>t.jsxs("div",{className:"typography-usage-section",children:[t.jsx("h2",{className:"semantic-title",children:"Using UX4G Dimensions"}),t.jsx("p",{className:"semantic-description",children:"Ux4gSpace provides a fixed scale of spacing constants used for padding, margins, gaps, and component dimensions. Always prefer these over raw numeric literals so your layout stays aligned with the rest of the design system."}),t.jsx(Q,{language:"TSX",filename:"React Native — Ux4gSpace & Ux4gRadius",code:`import React from 'react';
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
});`})]}),Bf=({section:s="spacing"})=>{const l=s==="usage";return t.jsxs("div",{className:"doc-container",children:[t.jsxs("div",{className:"doc-header",children:[t.jsxs("div",{className:"doc-breadcrumb",children:[t.jsx("a",{href:"#",onClick:d=>{d.preventDefault()},children:"Token"})," ","/ Dimensions"]}),t.jsx("h1",{className:"doc-title",children:"Dimensions"}),t.jsx("p",{className:"doc-description",children:"Fixed scales for Spacing, Border Radius, and Border Width tokens across the UX4G design system."})]}),l?t.jsx(Ff,{}):s==="radius"?t.jsxs("div",{className:"dimensions-section",children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:"Border Radius Tokens"}),t.jsx("div",{className:"palette-section-subtitle",children:"Ux4gRadius.*"})]}),t.jsx("div",{className:"dimensions-radius-wrap",children:Object.entries(Gs).map(([d,m])=>t.jsx(Af,{token:d,value:m},d))})]}):s==="border"?t.jsxs("div",{className:"dimensions-section",children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:"Border Width Tokens"}),t.jsx("div",{className:"palette-section-subtitle",children:"Ux4gBorderWidth.*"})]}),t.jsx("div",{className:"dimensions-border-rows-list",children:Object.entries(Qs).map(([d,m])=>t.jsx(Df,{token:d,value:m},d))})]}):t.jsxs("div",{className:"dimensions-section",children:[t.jsxs("div",{className:"palette-section-header",children:[t.jsx("div",{className:"palette-section-title",children:"Spacing Tokens"}),t.jsx("div",{className:"palette-section-subtitle",children:"Ux4gSpace.*"})]}),t.jsx("div",{className:"dimensions-spacing-rows-list",children:Object.entries(Hs).map(([d,m])=>t.jsx(Ef,{token:d,value:m},d))})]})]})},Sd={introduction:"introduction",quickstart:"quickstart","colors-primary":"token/colors/primary","colors-secondary":"token/colors/secondary","colors-tertiary":"token/colors/tertiary","colors-red":"token/colors/red","colors-orange":"token/colors/orange","colors-yellow":"token/colors/yellow","colors-gold":"token/colors/gold","colors-green":"token/colors/green","colors-lime":"token/colors/lime","colors-blue":"token/colors/blue","colors-skyblue":"token/colors/skyblue","colors-cyan":"token/colors/cyan","colors-purple":"token/colors/purple","colors-pink":"token/colors/pink","colors-neutral":"token/colors/neutral","colors-semantic":"token/colors/semantic",typography:"token/typography/header","typography-header":"token/typography/header","typography-display":"token/typography/display","typography-body":"token/typography/body","typography-label":"token/typography/label","typography-title":"token/typography/title","typography-usage":"token/typography/usage",shadow:"token/shadow/scale","shadow-scale":"token/shadow/scale","shadow-usage":"token/shadow/usage",dimensions:"token/dimensions/spacing","dimensions-spacing":"token/dimensions/spacing","dimensions-radius":"token/dimensions/radius","dimensions-border":"token/dimensions/border","dimensions-usage":"token/dimensions/usage",spacing:"token/dimensions/spacing",radius:"token/dimensions/radius",button:"components/button","input-field":"components/input-field","input-basic":"components/input-field/basic","input-status":"components/input-field/status","input-password":"components/input-field/password","input-icons":"components/input-field/icons","input-aadhaar-basic":"components/input-aadhaar/basic","input-aadhaar-varients":"components/input-aadhaar/varients","input-aadhaar":"components/input-aadhaar/basic","input-pan-basic":"components/input-pan/basic","input-pan-varients":"components/input-pan/varients","input-pan":"components/input-pan/basic","input-otp-basic":"components/input-otp/basic","input-otp-varients":"components/input-otp/varients","input-otp":"components/input-otp/basic","input-prefix-postfix":"components/input-field/prefix-postfix","input-required-disabled":"components/input-field/required-disabled",checkbox:"components/checkbox","radio-button":"components/radio-button/basic",radio:"components/radio-button/basic","radio-basic":"components/radio-button/basic","radio-sizes":"components/radio-button/sizes","radio-status":"components/radio-button/status","result-list":"components/result-list/basic",result:"components/result-list/basic","result-list-basic":"components/result-list/basic","result-list-metadata":"components/result-list/metadata","result-list-expanded":"components/result-list/expanded","result-list-rejected":"components/result-list/rejected","search-field":"components/search-field/basic",search:"components/search-field/basic","search-basic":"components/search-field/basic","search-submit":"components/search-field/submit","search-autocomplete":"components/search-field/autocomplete","search-status":"components/search-field/status",switch:"components/switch","switch-basic":"components/switch/basic","switch-labels":"components/switch/labels","switch-status":"components/switch/status","switch-required":"components/switch/required","switch-disabled":"components/switch/disabled",card:"components/card","card-basic":"components/card/basic","card-actions":"components/card/actions","card-horizontal":"components/card/horizontal","card-media":"components/card/media","card-rich":"components/card/rich","card-rich-horizontal":"components/card/rich-horizontal",carousel:"components/carousel","carousel-intro":"components/carousel/introduction","carousel-rich-hero":"components/carousel/rich-hero","carousel-image":"components/carousel/image","journey-timeline-basic":"components/journey-timeline/basic","journey-timeline-horizontal":"components/journey-timeline/horizontal","journey-timeline-custom":"components/journey-timeline/custom","journey-timeline":"components/journey-timeline/basic","status-pipeline-vertical":"components/status-pipeline/vertical/basic","status-pipeline-vertical-states":"components/status-pipeline/vertical/states","status-pipeline-vertical-sizes":"components/status-pipeline/vertical/sizes","status-pipeline-vertical-colors":"components/status-pipeline/vertical/colors","status-pipeline-vertical-labels":"components/status-pipeline/vertical/labels","status-pipeline-vertical-nolabels":"components/status-pipeline/vertical/nolabels","status-pipeline-horizontal":"components/status-pipeline/horizontal/basic","status-pipeline-horizontal-states":"components/status-pipeline/horizontal/states","status-pipeline-horizontal-sizes":"components/status-pipeline/horizontal/sizes","status-pipeline-horizontal-colors":"components/status-pipeline/horizontal/colors","status-pipeline-horizontal-labels":"components/status-pipeline/horizontal/labels","status-pipeline-horizontal-nolabels":"components/status-pipeline/horizontal/nolabels","status-pipeline-sizes":"components/status-pipeline/vertical/sizes","status-pipeline":"components/status-pipeline/vertical/basic","tag-basic":"components/tag/basic","tag-shapes":"components/tag/shapes","tag-styles":"components/tag/styles","tag-colors":"components/tag/colors","tag-leading":"components/tag/leading","tag-dismissable":"components/tag/dismissable","tag-pill":"components/tag/pill",tag:"components/tag/basic","textarea-basic":"components/text-area/basic","textarea-label":"components/text-area/label","textarea-status":"components/text-area/status","textarea-count":"components/text-area/count","textarea-disabled":"components/text-area/disabled",textarea:"components/text-area/basic","text-area":"components/text-area/basic","timepicker-basic":"components/time-picker/basic","timepicker-label":"components/time-picker/label","timepicker-status":"components/time-picker/status","timepicker-interval":"components/time-picker/interval","timepicker-initial":"components/time-picker/initial","timepicker-disabled":"components/time-picker/disabled",timepicker:"components/time-picker/basic","time-picker":"components/time-picker/basic","timeslot-introduction":"components/time-slot/introduction","timeslot-basic":"components/time-slot/basic","timeslot-compact":"components/time-slot/compact","timeslot-json":"components/time-slot/json",timeslot:"components/time-slot/introduction","time-slot":"components/time-slot/introduction","toast-basic":"components/toast/basic","toast-stacked":"components/toast/stacked","toast-actions":"components/toast/actions","toast-custom":"components/toast/custom","toast-provider":"components/toast/provider",toast:"components/toast/basic","stepper-horizontal":"components/stepper/horizontal","stepper-horizontal-dashed":"components/stepper/horizontal-dashed","stepper-vertical":"components/stepper/vertical","stepper-error":"components/stepper/error","stepper-bottom-lines":"components/stepper/bottom-lines","stepper-bottom-background":"components/stepper/bottom-background","stepper-edge-alignment":"components/stepper/edge-alignment","compact-stepper-linear":"components/compact-stepper/linear","compact-stepper-right-aligned":"components/compact-stepper/right-aligned","compact-stepper-centered":"components/compact-stepper/centered","compact-stepper-centered-between":"components/compact-stepper/centered-between","compact-stepper-split":"components/compact-stepper/split","link-basic":"components/link/basic","link-text":"components/link/text","link-custom-child":"components/link/custom-child",link:"components/link/basic","modal-full-preview":"components/modal/full-preview","modal-header-left":"components/modal/header-left","modal-header-centered":"components/modal/header-centered","pagination-default-arrows":"components/pagination/default-arrows","pagination-capsule-arrows":"components/pagination/capsule-arrows","pagination-capsule-dots":"components/pagination/capsule-dots","pagination-arrows-right":"components/pagination/arrows-right","pagination-dotted":"components/pagination/default-arrows",pagination:"components/pagination/default-arrows","progress-linear":"components/progress-indicator/linear","progress-circular":"components/progress-indicator/circular","progress-half-circle":"components/progress-indicator/half-circle","progress-animated":"components/progress-indicator/animated","progress-sla-circular":"components/progress-sla-indicator/circular","progress-sla-linear":"components/progress-sla-indicator/linear","progress-sla":"components/progress-sla-indicator/circular","progress-indicator":"components/progress-indicator/linear",progress:"components/progress-indicator/linear","progress-sla-indicator":"components/progress-sla-indicator/circular","popover-basic":"components/popover/basic","popover-rich":"components/popover/rich","popover-placements":"components/popover/placements","popover-custom-content":"components/popover/custom-content","popover-trigger":"components/popover/trigger",popover:"components/popover/basic","tooltip-introduction":"components/tooltip/introduction","tooltip-basic":"components/tooltip/basic","tooltip-interactive":"components/tooltip/interactive","tooltip-variants":"components/tooltip/variants","tooltip-rich":"components/tooltip/rich",tooltip:"components/tooltip/introduction",modal:"components/modal/full-preview",badge:"components/badge","badge-basic":"components/badge/basic","badge-count":"components/badge/count","badge-label":"components/badge/standalone","badge-standalone":"components/badge/standalone","badge-semantic":"components/badge/semantic","badge-overlay":"components/badge/overlay","empty-state-basic":"components/empty-state/basic","empty-state-variants":"components/empty-state/variants","empty-state-action":"components/empty-state/action","fileupload-basic":"components/fileupload/basic","fileupload-dashed":"components/fileupload/dashed","fileupload-preloaded":"components/fileupload/preloaded",feedbackformstar:"components/feedback/feedbackformstar",feedbackformcsat:"components/feedback/feedbackformcsat",feedbackformnps:"components/feedback/feedbackformnps",avatar:"components/avatar","avatar-basic":"components/avatar/basic","avatar-status":"components/avatar/status","avatar-profile":"components/avatar/profile","avatar-group":"components/avatar/group","accordion-basic":"components/accordion/basic","accordion-group":"components/accordion/group","app-header-basic":"components/app-header/introduction","app-header-back":"components/app-header/back","app-header-filled":"components/app-header/filled","app-header-custom-leading":"components/app-header/custom-leading","button-introduction":"components/button/introduction","button-variants":"components/button/variants","button-sizes":"components/button/sizes","button-showcase":"components/button/showcase","button-icon-button":"components/button/icon-button","checkbox-basic":"components/checkbox/basic","checkbox-sizes":"components/checkbox/sizes","checkbox-tristate":"components/checkbox/tristate","chips-basic":"components/chips/basic","chips-action":"components/chips/action","chips-input":"components/chips/input","chip-group-wrap":"components/chip-group/wrap","chip-group-input-field":"components/chip-group/input-field","date-picker-single":"components/date-picker/single","date-picker-range":"components/date-picker/range","divider-basic":"components/divider/basic","divider-styles":"components/divider/styles","divider-label":"components/divider/label","divider-vertical":"components/divider/vertical","status-banner-basic":"components/status-banner/basic","status-banner-draft":"components/status-banner/draft","status-banner-variants":"components/status-banner/variants","dropdown-basic":"components/dropdown/basic","dropdown-multi":"components/dropdown/multi","dropdown-search":"components/dropdown/search","dropdown-status":"components/dropdown/status","spinner-basic":"components/spinner/basic","slider-basic":"components/slider/basic","slider-sizes":"components/slider/sizes","slider-steps":"components/slider/steps","slider-custom-range":"components/slider/custom-range","slider-formatter":"components/slider/formatter","slider-disabled":"components/slider/disabled",forms:"patterns/forms",headers:"patterns/headers"},qf=Object.fromEntries(Object.entries(Sd).map(([s,l])=>[l.toLowerCase(),s]));function zf(s){return Sd[s]??s}function od(s){const l=decodeURIComponent(s).replace(/^\/+|\/+$/g,"").toLowerCase();if(l.startsWith("components/switch")||l.startsWith("switch"))return l.includes("label")?"switch-labels":l.includes("status")?"switch-status":l.includes("required")?"switch-required":l.includes("disabled")?"switch-disabled":"switch-basic";if(l.startsWith("components/card")||l.startsWith("card"))return l.includes("actions")?"card-actions":l.includes("horizontal")&&l.includes("rich")?"card-rich-horizontal":l.includes("horizontal")?"card-horizontal":l.includes("media")?"card-media":l.includes("rich")||l.includes("full")?"card-rich":"card-basic";if(l.startsWith("components/badge")||l.startsWith("badge"))return l.includes("count")?"badge-count":l.includes("label")||l.includes("standalone")?"badge-standalone":l.includes("semantic")?"badge-semantic":l.includes("overlay")?"badge-overlay":"badge-basic";if(l.startsWith("components/avatar")||l.startsWith("avatar"))return l.includes("status")?"avatar-status":l.includes("profile")?"avatar-profile":l.includes("group")?"avatar-group":"avatar-basic";if(l.startsWith("components/empty-state")||l.startsWith("empty-state"))return l.includes("variants")?"empty-state-variants":l.includes("action")?"empty-state-action":"empty-state-basic";if(l.startsWith("components/fileupload")||l.startsWith("fileupload"))return l.includes("dashed")?"fileupload-dashed":l.includes("preloaded")?"fileupload-preloaded":"fileupload-basic";if(l.startsWith("components/input-aadhaar")||l.startsWith("input-aadhaar"))return l.includes("varients")?"input-aadhaar-varients":"input-aadhaar-basic";if(l.startsWith("components/input-pan")||l.startsWith("input-pan"))return l.includes("varients")?"input-pan-varients":"input-pan-basic";if(l.startsWith("components/input-otp")||l.startsWith("input-otp"))return l.includes("varients")?"input-otp-varients":"input-otp-basic";if(l.startsWith("components/input-field")||l.startsWith("input-field")||l.startsWith("input"))return l.includes("status")?"input-status":l.includes("password")?"input-password":l.includes("icons")?"input-icons":l.includes("prefix")||l.includes("postfix")?"input-prefix-postfix":l.includes("required")||l.includes("disabled")?"input-required-disabled":"input-basic";if(l.startsWith("components/feedback")||l.startsWith("feedback"))return l.includes("feedbackformcsat")||l.includes("csat")?"feedbackformcsat":l.includes("feedbackformnps")||l.includes("nps")?"feedbackformnps":"feedbackformstar";if(l.startsWith("components/button"))return l.includes("introduction")?"button-introduction":l.includes("variants")?"button-variants":l.includes("sizes")?"button-sizes":l.includes("icon-button")?"button-icon-button":l.includes("icons")?"button-icons":l.includes("states")?"button-states":l.includes("convenience")?"button-convenience":l.includes("showcase")?"button-showcase":"button-introduction";if(l.startsWith("components/date-picker"))return l.includes("range")?"date-picker-range":"date-picker-single";if(l.startsWith("components/carousel")||l.startsWith("carousel"))return l.includes("rich-hero")||l.includes("richhero")?"carousel-rich-hero":l.includes("image")?"carousel-image":"carousel-intro";if(l.startsWith("components/journey-timeline")||l.startsWith("journey-timeline"))return l.includes("horizontal")?"journey-timeline-horizontal":l.includes("custom")?"journey-timeline-custom":"journey-timeline-basic";if(l.startsWith("components/status-pipeline")||l.startsWith("status-pipeline")){const m=l.includes("/horizontal")||l.includes("horizontal")?"status-pipeline-horizontal":"status-pipeline-vertical";return l.includes("states")?`${m}-states`:l.includes("sizes")?`${m}-sizes`:l.includes("color")?`${m}-colors`:l.includes("label")||l.includes("nolabels")?`${m}-${l.includes("nolabels")?"nolabels":"labels"}`:m}return l.startsWith("components/tag")||l.startsWith("tag")?l.includes("shapes")?"tag-shapes":l.includes("styles")?"tag-styles":l.includes("colors")||l.includes("colours")?"tag-colors":l.includes("leading")?"tag-leading":l.includes("dismiss")?"tag-dismissable":l.includes("pill")?"tag-pill":"tag-basic":l.startsWith("components/text-area")||l.startsWith("text-area")||l.startsWith("textarea")?l.includes("label")?"textarea-label":l.includes("status")?"textarea-status":l.includes("count")?"textarea-count":l.includes("disabled")||l.includes("readonly")||l.includes("read-only")?"textarea-disabled":"textarea-basic":l.startsWith("components/time-slot")||l.startsWith("time-slot")||l.startsWith("timeslot")?l.includes("compact")?"timeslot-compact":l.includes("json")?"timeslot-json":l.includes("basic")?"timeslot-basic":"timeslot-introduction":l.startsWith("components/time-picker")||l.startsWith("time-picker")||l.startsWith("timepicker")?l.includes("label")?"timepicker-label":l.includes("status")?"timepicker-status":l.includes("interval")?"timepicker-interval":l.includes("initial")?"timepicker-initial":l.includes("disabled")?"timepicker-disabled":"timepicker-basic":l.startsWith("components/toast")||l.startsWith("toast")?l.includes("stacked")?"toast-stacked":l.includes("actions")?"toast-actions":l.includes("custom")?"toast-custom":l.includes("provider")?"toast-provider":"toast-basic":l.startsWith("components/stepper")||l.startsWith("stepper")?l.includes("dashed")?"stepper-horizontal-dashed":l.includes("vertical")?"stepper-vertical":l.includes("error")?"stepper-error":l.includes("bottom")?l.includes("background")?"stepper-bottom-background":"stepper-bottom-lines":l.includes("edge")?"stepper-edge-alignment":"stepper-horizontal":l.startsWith("components/compact-stepper")||l.startsWith("compact-stepper")?l.includes("right-aligned")||l.includes("rightaligned")?"compact-stepper-right-aligned":l.includes("centered-between")?"compact-stepper-centered-between":l.includes("centered")?"compact-stepper-centered":l.includes("split")?"compact-stepper-split":"compact-stepper-linear":l.startsWith("components/link")||l.startsWith("link")?l.includes("text")?"link-text":l.includes("custom")?"link-custom-child":"link-basic":l.startsWith("components/modal")||l.startsWith("modal")?l.includes("header-centered")?"modal-header-centered":l.includes("header-left")?"modal-header-left":"modal-full-preview":l.startsWith("components/pagination")||l.startsWith("pagination")?l.includes("capsule-arrows")?"pagination-capsule-arrows":l.includes("capsule-dots")?"pagination-capsule-dots":l.includes("arrows-right")?"pagination-arrows-right":"pagination-default-arrows":l.startsWith("components/radio-button")||l.startsWith("radio-button")||l.startsWith("radio")?l.includes("sizes")?"radio-sizes":l.includes("status")?"radio-status":"radio-basic":l.startsWith("components/result-list")||l.startsWith("result-list")||l.startsWith("result")?l.includes("metadata")?"result-list-metadata":l.includes("expanded")?"result-list-expanded":l.includes("rejected")?"result-list-rejected":"result-list-basic":l.startsWith("components/search-field")||l.startsWith("search-field")||l.startsWith("search")?l.includes("submit")?"search-submit":l.includes("autocomplete")?"search-autocomplete":l.includes("status")?"search-status":"search-basic":l.startsWith("components/progress-sla-indicator")||l.startsWith("progress-sla-indicator")||l.startsWith("progress-sla")?l.includes("linear")?"progress-sla-linear":"progress-sla-circular":l.startsWith("components/progress-indicator")||l.startsWith("progress-indicator")||l.startsWith("progress")?l.includes("circular")?"progress-circular":l.includes("half-circle")?"progress-half-circle":l.includes("animated")?"progress-animated":"progress-linear":l.startsWith("components/tooltip")||l.startsWith("tooltip")?l.includes("rich")?"tooltip-rich":l.includes("interactive")?"tooltip-interactive":l.includes("variants")||l.includes("variant")?"tooltip-variants":l.includes("basic")?"tooltip-basic":"tooltip-introduction":l.startsWith("components/popover")||l.startsWith("popover")?l.includes("rich")?"popover-rich":l.includes("placement")?"popover-placements":l.includes("custom")?"popover-custom-content":l.includes("trigger")?"popover-trigger":"popover-basic":l.startsWith("components/accordion")||l.startsWith("accordion")?l.includes("group")?"accordion-group":"accordion-basic":l.startsWith("components/app-header")||l.startsWith("app-header")?l.includes("back")?"app-header-back":l.includes("filled")?"app-header-filled":l.includes("custom-leading")?"app-header-custom-leading":"app-header-basic":l.startsWith("components/checkbox")||l.startsWith("checkbox")?l.includes("sizes")?"checkbox-sizes":l.includes("tristate")||l.includes("indeterminate")?"checkbox-tristate":"checkbox-basic":l.startsWith("components/chips")||l.startsWith("chips")?l.includes("action")?"chips-action":l.includes("input")?"chips-input":"chips-basic":l.startsWith("components/chip-group")||l.startsWith("chip-group")?l.includes("input-field")?"chip-group-input-field":"chip-group-wrap":l.startsWith("components/divider")||l.startsWith("divider")?l.includes("styles")||l.includes("solid")||l.includes("dashed")||l.includes("dotted")?"divider-styles":l.includes("label")?"divider-label":l.includes("vertical")?"divider-vertical":"divider-basic":l.startsWith("components/status-banner")||l.startsWith("status-banner")?l.includes("draft")?"status-banner-draft":l.includes("variants")?"status-banner-variants":"status-banner-basic":l.startsWith("components/dropdown")||l.startsWith("dropdown")?l.includes("multi")?"dropdown-multi":l.includes("search")?"dropdown-search":l.includes("status")?"dropdown-status":"dropdown-basic":l.startsWith("components/spinner")||l.startsWith("spinner")?"spinner-basic":l.startsWith("components/slider")||l.startsWith("slider")?l.includes("sizes")?"slider-sizes":l.includes("steps")?"slider-steps":l.includes("custom-range")?"slider-custom-range":l.includes("formatter")?"slider-formatter":l.includes("disabled")?"slider-disabled":"slider-basic":qf[l]??"introduction"}function ld(){const s=window.location.hash;if(!s)return"introduction";const l=s.match(/#\/\?path=([^&]+)/);if(l&&l[1])return od(l[1]);const d=s.match(/#\/(.+)/);return d&&d[1]?od(d[1]):"introduction"}function If(s){const d=`#/?path=${zf(s)}`;window.location.hash!==d&&window.history.pushState(null,"",d)}const Rf=s=>{if(s==="introduction")return"Introduction";if(s==="quickstart")return"Quick Start Guide";if(s.startsWith("colors-")){const l=s.replace("colors-","");return`Token / Colors / ${l.charAt(0).toUpperCase()+l.slice(1)}`}return s.startsWith("typography")?"Token / Typography":s.startsWith("shadow")?"Token / Shadow":s.startsWith("dimensions")||["spacing","radius"].includes(s)?"Token / Dimensions":s.startsWith("button")?"Components / Buttons":s.startsWith("carousel")?"Components / Carousel":s.startsWith("journey-timeline")?"Components / Journey Timeline":s.startsWith("link")?"Components / Link":s.startsWith("modal")?"Components / Modal":s.startsWith("pagination")?"Components / Pagination":s.startsWith("progress-sla")?"Components / Progress SLA Indicator":s.startsWith("progress")?"Components / Progress Indicator":s.startsWith("popover")?"Components / Popover":s.startsWith("radio")?"Components / Radio Button":s.startsWith("result-list")?"Components / Result List":s.startsWith("search")?"Components / Search Field":s.startsWith("checkbox")?"Components / Checkbox":s.startsWith("chips")?"Components / Chips":s.startsWith("chip-group")?"Components / Chip Group":s.startsWith("divider")?"Components / Divider":s.startsWith("status-banner")?"Components / Status Banner":s.startsWith("status-pipeline")?"Components / Status Pipeline":s.startsWith("tooltip")?"Components / Tooltip":s.startsWith("timeslot")?"Components / Time Slot":s.startsWith("switch")?"Components / Switch":s.startsWith("toast")?"Components / Toast":s.startsWith("timepicker")?"Components / Time Picker":s.startsWith("textarea")?"Components / Text Area":s.startsWith("tag")?"Components / Tag":s.startsWith("stepper")?"Components / Stepper":s.startsWith("compact-stepper")?"Components / Compact Stepper":s.startsWith("input-aadhaar")?"Components / Input Aadhaar":s.startsWith("input-pan")?"Components / Input Pan":s.startsWith("input-otp")?"Components / Input Otp":s.startsWith("input")?"Components / Input Field":s.startsWith("fileupload")?"Components / FileUpload":s.startsWith("feedbackform")?"Components / Feedback":s.startsWith("empty-state")?"Components / Empty State":s.startsWith("slider")?"Components / Slider":s.startsWith("date-picker")?"Components / Date Picker":s.startsWith("avatar")?"Components / Avatar":"Documentation"},$f=()=>{const[s,l]=k.useState("introduction"),[d,m]=k.useState(!1),[h,b]=k.useState(!1),x=()=>m(p=>!p),i=k.useCallback(p=>{l(p),If(p),b(!1)},[]);k.useEffect(()=>{const p=ld();l(p);const T=()=>{const A=ld();l(A)};return window.addEventListener("popstate",T),window.addEventListener("hashchange",T),()=>{window.removeEventListener("popstate",T),window.removeEventListener("hashchange",T)}},[]);const w=()=>{if(s.startsWith("colors-")){const p=s.replace("colors-","");return t.jsx(gf,{isDark:d,section:p})}if(s.startsWith("typography")){const p=s.replace("typography-","").replace("typography","header");return t.jsx(Tf,{isDark:d,section:p})}if(s.startsWith("shadow")){const p=s.replace("shadow-","").replace("shadow","scale");return t.jsx(Vf,{isDark:d,section:p})}if(s.startsWith("dimensions")||["spacing","radius"].includes(s)){let p="spacing";return s==="radius"||s==="dimensions-radius"?p="radius":s==="dimensions-border"?p="border":s==="dimensions-usage"&&(p="usage"),t.jsx(Bf,{isDark:d,section:p})}if(s==="button-showcase")return t.jsx(Mp,{isDark:d});if(s==="button-icon-button")return t.jsx(_p,{isDark:d});if(s.startsWith("button"))return t.jsx(Wp,{isDark:d,story:s});if(s.startsWith("date-picker"))return t.jsx(Op,{isDark:d,story:s});if(s.startsWith("dropdown"))return t.jsx(Xp,{isDark:d,story:s});if(s.startsWith("fileupload"))return t.jsx(Zp,{isDark:d,story:s});if(s.startsWith("input"))return t.jsx(Kp,{isDark:d,story:s});if(s.startsWith("spinner"))return t.jsx(Jp,{isDark:d,story:s});if(s==="accordion-group")return t.jsx(tm,{isDark:d});if(s.startsWith("accordion"))return t.jsx(em,{isDark:d,story:s});if(s.startsWith("app-header"))return t.jsx(rm,{isDark:d,story:s});if(s.startsWith("avatar"))return t.jsx(nm,{isDark:d,story:s});if(s.startsWith("badge"))return t.jsx(am,{isDark:d,story:s});if(s.startsWith("card"))return t.jsx(im,{isDark:d,story:s});if(s.startsWith("carousel"))return t.jsx(sm,{isDark:d,story:s});if(s.startsWith("journey-timeline"))return t.jsx(um,{isDark:d,story:s});if(s.startsWith("link"))return t.jsx(gm,{isDark:d,story:s});if(s.startsWith("modal"))return t.jsx(wm,{isDark:d,story:s});if(s.startsWith("pagination"))return t.jsx(Tm,{isDark:d,story:s});if(s.startsWith("progress-sla"))return t.jsx(rd,{isDark:d,story:s});if(s.startsWith("progress"))return t.jsx(rd,{isDark:d,story:s});if(s.startsWith("popover"))return t.jsx(Em,{isDark:d,story:s});if(s.startsWith("radio"))return t.jsx($m,{isDark:d,story:s});if(s.startsWith("result-list"))return t.jsx(Om,{isDark:d,story:s});if(s.startsWith("search"))return t.jsx(rf,{isDark:d,story:s});if(s.startsWith("checkbox"))return t.jsx(Xm,{isDark:d,story:s});if(s.startsWith("chips"))return t.jsx(Hm,{isDark:d,story:s});if(s.startsWith("chip-group"))return t.jsx(Gm,{isDark:d,story:s});if(s.startsWith("divider"))return t.jsx(Qm,{isDark:d,story:s});if(s.startsWith("status-banner"))return t.jsx(Ym,{isDark:d,story:s});if(s.startsWith("status-pipeline"))return t.jsx(rh,{isDark:d,story:s});if(s.startsWith("tag"))return t.jsx(hh,{isDark:d,story:s});if(s.startsWith("textarea"))return t.jsx(vh,{isDark:d,story:s});if(s.startsWith("timepicker"))return t.jsx(Th,{isDark:d,story:s});if(s.startsWith("toast"))return t.jsx(Ah,{isDark:d,story:s});if(s.startsWith("switch"))return t.jsx(Ih,{isDark:d,story:s});if(s.startsWith("timeslot"))return t.jsx(Mh,{isDark:d,story:s});if(s.startsWith("tooltip"))return t.jsx(Hh,{isDark:d,story:s});if(s.startsWith("stepper")||s.startsWith("compact-stepper"))return t.jsx(lh,{isDark:d,story:s});if(s==="feedbackformstar")return t.jsx(Qh,{isDark:d});if(s==="feedbackformcsat")return t.jsx(Yh,{isDark:d});if(s==="feedbackformnps")return t.jsx(Kh,{isDark:d});if(s.startsWith("empty-state"))return t.jsx(Gh,{isDark:d,story:s});if(s.startsWith("slider"))return t.jsx(nf,{isDark:d,story:s});switch(s){case"introduction":return t.jsx(ed,{isDark:d,onNavigate:i});case"quickstart":return t.jsx(Ip,{isDark:d,onNavigate:i});default:return t.jsx(ed,{isDark:d,onNavigate:i})}};return t.jsxs("div",{className:"app-layout",children:[t.jsxs("header",{className:`mobile-topbar ${d?"dark":""}`,children:[t.jsx("div",{className:"mobile-logo-wrapper",onClick:()=>i("introduction"),children:t.jsx("img",{src:"/ux4g_logo.svg",alt:"UX4G Logo",className:"mobile-logo-img"})}),t.jsx("button",{className:"theme-toggle-btn",onClick:x,title:d?"Switch to light mode":"Switch to dark mode",children:t.jsx("span",{className:"material-symbols-outlined theme-toggle-icon",children:d?"light_mode":"dark_mode"})})]}),h&&t.jsx("div",{className:"sidebar-backdrop",onClick:()=>b(!1)}),t.jsx(Pp,{activePage:s,onNavigate:i,isDark:d,onToggleTheme:x,isMobileOpen:h,onCloseMobile:()=>b(!1)}),t.jsx("main",{className:`main-content ${d?"dark":""} ${s==="introduction"?"no-padding":""}`,children:w()}),t.jsxs("div",{className:`mobile-bottombar ${d?"dark":""}`,onClick:()=>b(p=>!p),children:[t.jsxs("div",{className:"mobile-bottombar-left",children:[t.jsx("span",{className:"material-symbols-outlined mobile-bottombar-icon",children:h?"close":"menu"}),t.jsx("span",{className:"mobile-bottombar-path",children:Rf(s)})]}),t.jsx("span",{className:"material-symbols-outlined mobile-bottombar-chevron",children:h?"expand_more":"expand_less"})]})]})};Up.createRoot(document.getElementById("root")).render(t.jsx(La.StrictMode,{children:t.jsx($f,{})}));
