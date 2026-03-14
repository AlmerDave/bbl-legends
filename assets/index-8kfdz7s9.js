(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function CC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bx={exports:{}},Hu={},$x={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),IC=Symbol.for("react.portal"),kC=Symbol.for("react.fragment"),NC=Symbol.for("react.strict_mode"),RC=Symbol.for("react.profiler"),AC=Symbol.for("react.provider"),PC=Symbol.for("react.context"),DC=Symbol.for("react.forward_ref"),jC=Symbol.for("react.suspense"),LC=Symbol.for("react.memo"),MC=Symbol.for("react.lazy"),w0=Symbol.iterator;function OC(t){return t===null||typeof t!="object"?null:(t=w0&&t[w0]||t["@@iterator"],typeof t=="function"?t:null)}var zx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wx=Object.assign,Hx={};function ro(t,e,n){this.props=t,this.context=e,this.refs=Hx,this.updater=n||zx}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gx(){}Gx.prototype=ro.prototype;function Gp(t,e,n){this.props=t,this.context=e,this.refs=Hx,this.updater=n||zx}var qp=Gp.prototype=new Gx;qp.constructor=Gp;Wx(qp,ro.prototype);qp.isPureReactComponent=!0;var E0=Array.isArray,qx=Object.prototype.hasOwnProperty,Kp={current:null},Kx={key:!0,ref:!0,__self:!0,__source:!0};function Qx(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)qx.call(e,r)&&!Kx.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:hl,type:t,key:i,ref:o,props:s,_owner:Kp.current}}function VC(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function FC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var S0=/\/+/g;function uh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FC(""+t.key):e.toString(36)}function bc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case IC:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+uh(o,0):r,E0(s)?(n="",t!=null&&(n=t.replace(S0,"$&/")+"/"),bc(s,e,n,"",function(u){return u})):s!=null&&(Qp(s)&&(s=VC(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(S0,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",E0(t))for(var a=0;a<t.length;a++){i=t[a];var c=r+uh(i,a);o+=bc(i,e,n,c,s)}else if(c=OC(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=r+uh(i,a++),o+=bc(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Kl(t,e,n){if(t==null)return t;var r=[],s=0;return bc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function UC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},wc={transition:null},BC={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:wc,ReactCurrentOwner:Kp};function Yx(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Kl,forEach:function(t,e,n){Kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Kl(t,function(){e++}),e},toArray:function(t){return Kl(t,function(e){return e})||[]},only:function(t){if(!Qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=ro;ce.Fragment=kC;ce.Profiler=RC;ce.PureComponent=Gp;ce.StrictMode=NC;ce.Suspense=jC;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BC;ce.act=Yx;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wx({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Kp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)qx.call(e,c)&&!Kx.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:hl,type:t.type,key:s,ref:i,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:PC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AC,_context:t},t.Consumer=t};ce.createElement=Qx;ce.createFactory=function(t){var e=Qx.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:DC,render:t}};ce.isValidElement=Qp;ce.lazy=function(t){return{$$typeof:MC,_payload:{_status:-1,_result:t},_init:UC}};ce.memo=function(t,e){return{$$typeof:LC,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=wc.transition;wc.transition={};try{t()}finally{wc.transition=e}};ce.unstable_act=Yx;ce.useCallback=function(t,e){return Ut.current.useCallback(t,e)};ce.useContext=function(t){return Ut.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Ut.current.useEffect(t,e)};ce.useId=function(){return Ut.current.useId()};ce.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Ut.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};ce.useRef=function(t){return Ut.current.useRef(t)};ce.useState=function(t){return Ut.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Ut.current.useTransition()};ce.version="18.3.1";$x.exports=ce;var R=$x.exports;const Xo=CC(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $C=R,zC=Symbol.for("react.element"),WC=Symbol.for("react.fragment"),HC=Object.prototype.hasOwnProperty,GC=$C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qC={key:!0,ref:!0,__self:!0,__source:!0};function Xx(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)HC.call(e,r)&&!qC.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:zC,type:t,key:i,ref:o,props:s,_owner:GC.current}}Hu.Fragment=WC;Hu.jsx=Xx;Hu.jsxs=Xx;Bx.exports=Hu;var d=Bx.exports,of={},Jx={exports:{}},an={},Zx={exports:{}},eb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,q){var Q=F.length;F.push(q);e:for(;0<Q;){var ue=Q-1>>>1,ve=F[ue];if(0<s(ve,q))F[ue]=q,F[Q]=ve,Q=ue;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var q=F[0],Q=F.pop();if(Q!==q){F[0]=Q;e:for(var ue=0,ve=F.length,Le=ve>>>1;ue<Le;){var Ce=2*(ue+1)-1,at=F[Ce],At=Ce+1,bt=F[At];if(0>s(at,Q))At<ve&&0>s(bt,at)?(F[ue]=bt,F[At]=Q,ue=At):(F[ue]=at,F[Ce]=Q,ue=Ce);else if(At<ve&&0>s(bt,Q))F[ue]=bt,F[At]=Q,ue=At;else break e}}return q}function s(F,q){var Q=F.sortIndex-q.sortIndex;return Q!==0?Q:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],h=1,f=null,m=3,y=!1,S=!1,I=!1,k=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=F)r(u),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(u)}}function D(F){if(I=!1,w(F),!S)if(n(c)!==null)S=!0,K(j);else{var q=n(u);q!==null&&X(D,q.startTime-F)}}function j(F,q){S=!1,I&&(I=!1,b(_),_=-1),y=!0;var Q=m;try{for(w(q),f=n(c);f!==null&&(!(f.expirationTime>q)||F&&!C());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,m=f.priorityLevel;var ve=ue(f.expirationTime<=q);q=t.unstable_now(),typeof ve=="function"?f.callback=ve:f===n(c)&&r(c),w(q)}else r(c);f=n(c)}if(f!==null)var Le=!0;else{var Ce=n(u);Ce!==null&&X(D,Ce.startTime-q),Le=!1}return Le}finally{f=null,m=Q,y=!1}}var O=!1,E=null,_=-1,T=5,A=-1;function C(){return!(t.unstable_now()-A<T)}function P(){if(E!==null){var F=t.unstable_now();A=F;var q=!0;try{q=E(!0,F)}finally{q?N():(O=!1,E=null)}}else O=!1}var N;if(typeof v=="function")N=function(){v(P)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ye=ne.port2;ne.port1.onmessage=P,N=function(){ye.postMessage(null)}}else N=function(){k(P,0)};function K(F){E=F,O||(O=!0,N())}function X(F,q){_=k(function(){F(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){S||y||(S=!0,K(j))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(F){switch(m){case 1:case 2:case 3:var q=3;break;default:q=m}var Q=m;m=q;try{return F()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=m;m=F;try{return q()}finally{m=Q}},t.unstable_scheduleCallback=function(F,q,Q){var ue=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ue+Q:ue):Q=ue,F){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Q+ve,F={id:h++,callback:q,priorityLevel:F,startTime:Q,expirationTime:ve,sortIndex:-1},Q>ue?(F.sortIndex=Q,e(u,F),n(c)===null&&F===n(u)&&(I?(b(_),_=-1):I=!0,X(D,Q-ue))):(F.sortIndex=ve,e(c,F),S||y||(S=!0,K(j))),F},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(F){var q=m;return function(){var Q=m;m=q;try{return F.apply(this,arguments)}finally{m=Q}}}})(eb);Zx.exports=eb;var KC=Zx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QC=R,on=KC;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tb=new Set,Ia={};function Js(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(Ia[t]=e,t=0;t<e.length;t++)tb.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,YC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T0={},C0={};function XC(t){return af.call(C0,t)?!0:af.call(T0,t)?!1:YC.test(t)?C0[t]=!0:(T0[t]=!0,!1)}function JC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZC(t,e,n,r){if(e===null||typeof e>"u"||JC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yp=/[\-:]([a-z])/g;function Xp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yp,Xp);_t[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yp,Xp);_t[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yp,Xp);_t[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jp(t,e,n,r){var s=_t.hasOwnProperty(e)?_t[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZC(e,n,s,r)&&(n=null),r||s===null?XC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var br=QC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),fi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),nb=Symbol.for("react.provider"),rb=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),tm=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),sb=Symbol.for("react.offscreen"),I0=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=I0&&t[I0]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,dh;function Jo(t){if(dh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dh=e&&e[1]||""}return`
`+dh+t}var hh=!1;function fh(t,e){if(!t||hh)return"";hh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{hh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Jo(t):""}function eI(t){switch(t.tag){case 5:return Jo(t.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return t=fh(t.type,!1),t;case 11:return t=fh(t.type.render,!1),t;case 1:return t=fh(t.type,!0),t;default:return""}}function df(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pi:return"Fragment";case fi:return"Portal";case lf:return"Profiler";case Zp:return"StrictMode";case cf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rb:return(t.displayName||"Context")+".Consumer";case nb:return(t._context.displayName||"Context")+".Provider";case em:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tm:return e=t.displayName||null,e!==null?e:df(t.type)||"Memo";case Rr:e=t._payload,t=t._init;try{return df(t(e))}catch{}}return null}function tI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(e);case 8:return e===Zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ib(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nI(t){var e=ib(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yl(t){t._valueTracker||(t._valueTracker=nI(t))}function ob(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ib(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hf(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function k0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ts(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ab(t,e){e=e.checked,e!=null&&Jp(t,"checked",e,!1)}function ff(t,e){ab(t,e);var n=ts(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function N0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||Wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zo=Array.isArray;function Ii(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ts(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Zo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ts(n)}}function lb(t,e){var n=ts(e.value),r=ts(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function A0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cb(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cb(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xl,ub=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xl=Xl||document.createElement("div"),Xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rI=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){rI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function db(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function hb(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=db(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var sI=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yf(t,e){if(e){if(sI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function nm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,ki=null,Ni=null;function P0(t){if(t=ml(t)){if(typeof xf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Yu(e),xf(t.stateNode,t.type,e))}}function fb(t){ki?Ni?Ni.push(t):Ni=[t]:ki=t}function pb(){if(ki){var t=ki,e=Ni;if(Ni=ki=null,P0(t),e)for(t=0;t<e.length;t++)P0(e[t])}}function mb(t,e){return t(e)}function gb(){}var ph=!1;function yb(t,e,n){if(ph)return t(e,n);ph=!0;try{return mb(t,e,n)}finally{ph=!1,(ki!==null||Ni!==null)&&(gb(),pb())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var bf=!1;if(ur)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{bf=!1}function iI(t,e,n,r,s,i,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ca=!1,Hc=null,Gc=!1,wf=null,oI={onError:function(t){ca=!0,Hc=t}};function aI(t,e,n,r,s,i,o,a,c){ca=!1,Hc=null,iI.apply(oI,arguments)}function lI(t,e,n,r,s,i,o,a,c){if(aI.apply(this,arguments),ca){if(ca){var u=Hc;ca=!1,Hc=null}else throw Error(B(198));Gc||(Gc=!0,wf=u)}}function Zs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _b(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D0(t){if(Zs(t)!==t)throw Error(B(188))}function cI(t){var e=t.alternate;if(!e){if(e=Zs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return D0(s),t;if(i===r)return D0(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function vb(t){return t=cI(t),t!==null?xb(t):null}function xb(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xb(t);if(e!==null)return e;t=t.sibling}return null}var bb=on.unstable_scheduleCallback,j0=on.unstable_cancelCallback,uI=on.unstable_shouldYield,dI=on.unstable_requestPaint,qe=on.unstable_now,hI=on.unstable_getCurrentPriorityLevel,rm=on.unstable_ImmediatePriority,wb=on.unstable_UserBlockingPriority,qc=on.unstable_NormalPriority,fI=on.unstable_LowPriority,Eb=on.unstable_IdlePriority,Gu=null,Hn=null;function pI(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:yI,mI=Math.log,gI=Math.LN2;function yI(t){return t>>>=0,t===0?32:31-(mI(t)/gI|0)|0}var Jl=64,Zl=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=ea(a):(i&=o,i!==0&&(r=ea(i)))}else o=n&~s,o!==0?r=ea(o):i!==0&&(r=ea(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),s=1<<n,r|=t[n],e&=~s;return r}function _I(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Nn(i),a=1<<o,c=s[o];c===-1?(!(a&n)||a&r)&&(s[o]=_I(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sb(){var t=Jl;return Jl<<=1,!(Jl&4194240)&&(Jl=64),t}function mh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function xI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Nn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var be=0;function Tb(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cb,im,Ib,kb,Nb,Sf=!1,ec=[],Ur=null,Br=null,$r=null,Ra=new Map,Aa=new Map,Pr=[],bI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function L0(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Vo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ml(e),e!==null&&im(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function wI(t,e,n,r,s){switch(e){case"focusin":return Ur=Vo(Ur,t,e,n,r,s),!0;case"dragenter":return Br=Vo(Br,t,e,n,r,s),!0;case"mouseover":return $r=Vo($r,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ra.set(i,Vo(Ra.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Aa.set(i,Vo(Aa.get(i)||null,t,e,n,r,s)),!0}return!1}function Rb(t){var e=As(t.target);if(e!==null){var n=Zs(e);if(n!==null){if(e=n.tag,e===13){if(e=_b(n),e!==null){t.blockedOn=e,Nb(t.priority,function(){Ib(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vf=r,n.target.dispatchEvent(r),vf=null}else return e=ml(n),e!==null&&im(e),t.blockedOn=n,!1;e.shift()}return!0}function M0(t,e,n){Ec(t)&&n.delete(e)}function EI(){Sf=!1,Ur!==null&&Ec(Ur)&&(Ur=null),Br!==null&&Ec(Br)&&(Br=null),$r!==null&&Ec($r)&&($r=null),Ra.forEach(M0),Aa.forEach(M0)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,Sf||(Sf=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,EI)))}function Pa(t){function e(s){return Fo(s,t)}if(0<ec.length){Fo(ec[0],t);for(var n=1;n<ec.length;n++){var r=ec[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ur!==null&&Fo(Ur,t),Br!==null&&Fo(Br,t),$r!==null&&Fo($r,t),Ra.forEach(e),Aa.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)Rb(n),n.blockedOn===null&&Pr.shift()}var Ri=br.ReactCurrentBatchConfig,Qc=!0;function SI(t,e,n,r){var s=be,i=Ri.transition;Ri.transition=null;try{be=1,om(t,e,n,r)}finally{be=s,Ri.transition=i}}function TI(t,e,n,r){var s=be,i=Ri.transition;Ri.transition=null;try{be=4,om(t,e,n,r)}finally{be=s,Ri.transition=i}}function om(t,e,n,r){if(Qc){var s=Tf(t,e,n,r);if(s===null)Th(t,e,r,Yc,n),L0(t,r);else if(wI(s,t,e,n,r))r.stopPropagation();else if(L0(t,r),e&4&&-1<bI.indexOf(t)){for(;s!==null;){var i=ml(s);if(i!==null&&Cb(i),i=Tf(t,e,n,r),i===null&&Th(t,e,r,Yc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Th(t,e,r,null,n)}}var Yc=null;function Tf(t,e,n,r){if(Yc=null,t=nm(r),t=As(t),t!==null)if(e=Zs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_b(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yc=t,null}function Ab(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hI()){case rm:return 1;case wb:return 4;case qc:case fI:return 16;case Eb:return 536870912;default:return 16}default:return 16}}var Lr=null,am=null,Sc=null;function Pb(){if(Sc)return Sc;var t,e=am,n=e.length,r,s="value"in Lr?Lr.value:Lr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Sc=s.slice(t,1<r?1-r:void 0)}function Tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tc(){return!0}function O0(){return!1}function ln(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tc:O0,this.isPropagationStopped=O0,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lm=ln(so),pl=Ue({},so,{view:0,detail:0}),CI=ln(pl),gh,yh,Uo,qu=Ue({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(gh=t.screenX-Uo.screenX,yh=t.screenY-Uo.screenY):yh=gh=0,Uo=t),gh)},movementY:function(t){return"movementY"in t?t.movementY:yh}}),V0=ln(qu),II=Ue({},qu,{dataTransfer:0}),kI=ln(II),NI=Ue({},pl,{relatedTarget:0}),_h=ln(NI),RI=Ue({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),AI=ln(RI),PI=Ue({},so,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DI=ln(PI),jI=Ue({},so,{data:0}),F0=ln(jI),LI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OI[t])?!!e[t]:!1}function cm(){return VI}var FI=Ue({},pl,{key:function(t){if(t.key){var e=LI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cm,charCode:function(t){return t.type==="keypress"?Tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UI=ln(FI),BI=Ue({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U0=ln(BI),$I=Ue({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cm}),zI=ln($I),WI=Ue({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),HI=ln(WI),GI=Ue({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qI=ln(GI),KI=[9,13,27,32],um=ur&&"CompositionEvent"in window,ua=null;ur&&"documentMode"in document&&(ua=document.documentMode);var QI=ur&&"TextEvent"in window&&!ua,Db=ur&&(!um||ua&&8<ua&&11>=ua),B0=" ",$0=!1;function jb(t,e){switch(t){case"keyup":return KI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lb(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mi=!1;function YI(t,e){switch(t){case"compositionend":return Lb(e);case"keypress":return e.which!==32?null:($0=!0,B0);case"textInput":return t=e.data,t===B0&&$0?null:t;default:return null}}function XI(t,e){if(mi)return t==="compositionend"||!um&&jb(t,e)?(t=Pb(),Sc=am=Lr=null,mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Db&&e.locale!=="ko"?null:e.data;default:return null}}var JI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JI[t.type]:e==="textarea"}function Mb(t,e,n,r){fb(r),e=Xc(e,"onChange"),0<e.length&&(n=new lm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var da=null,Da=null;function ZI(t){qb(t,0)}function Ku(t){var e=_i(t);if(ob(e))return t}function ek(t,e){if(t==="change")return e}var Ob=!1;if(ur){var vh;if(ur){var xh="oninput"in document;if(!xh){var W0=document.createElement("div");W0.setAttribute("oninput","return;"),xh=typeof W0.oninput=="function"}vh=xh}else vh=!1;Ob=vh&&(!document.documentMode||9<document.documentMode)}function H0(){da&&(da.detachEvent("onpropertychange",Vb),Da=da=null)}function Vb(t){if(t.propertyName==="value"&&Ku(Da)){var e=[];Mb(e,Da,t,nm(t)),yb(ZI,e)}}function tk(t,e,n){t==="focusin"?(H0(),da=e,Da=n,da.attachEvent("onpropertychange",Vb)):t==="focusout"&&H0()}function nk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(Da)}function rk(t,e){if(t==="click")return Ku(e)}function sk(t,e){if(t==="input"||t==="change")return Ku(e)}function ik(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:ik;function ja(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!af.call(e,s)||!Dn(t[s],e[s]))return!1}return!0}function G0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function q0(t,e){var n=G0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=G0(n)}}function Fb(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fb(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ub(){for(var t=window,e=Wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wc(t.document)}return e}function dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ok(t){var e=Ub(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fb(n.ownerDocument.documentElement,n)){if(r!==null&&dm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=q0(n,i);var o=q0(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ak=ur&&"documentMode"in document&&11>=document.documentMode,gi=null,Cf=null,ha=null,If=!1;function K0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||gi==null||gi!==Wc(r)||(r=gi,"selectionStart"in r&&dm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ha&&ja(ha,r)||(ha=r,r=Xc(Cf,"onSelect"),0<r.length&&(e=new lm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gi)))}function nc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yi={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},bh={},Bb={};ur&&(Bb=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Qu(t){if(bh[t])return bh[t];if(!yi[t])return t;var e=yi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bb)return bh[t]=e[n];return t}var $b=Qu("animationend"),zb=Qu("animationiteration"),Wb=Qu("animationstart"),Hb=Qu("transitionend"),Gb=new Map,Q0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(t,e){Gb.set(t,e),Js(e,[t])}for(var wh=0;wh<Q0.length;wh++){var Eh=Q0[wh],lk=Eh.toLowerCase(),ck=Eh[0].toUpperCase()+Eh.slice(1);fs(lk,"on"+ck)}fs($b,"onAnimationEnd");fs(zb,"onAnimationIteration");fs(Wb,"onAnimationStart");fs("dblclick","onDoubleClick");fs("focusin","onFocus");fs("focusout","onBlur");fs(Hb,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);Js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Js("onBeforeInput",["compositionend","keypress","textInput","paste"]);Js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Y0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lI(r,e,void 0,t),t.currentTarget=null}function qb(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;Y0(s,a,u),i=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;Y0(s,a,u),i=c}}}if(Gc)throw t=wf,Gc=!1,wf=null,t}function Pe(t,e){var n=e[Pf];n===void 0&&(n=e[Pf]=new Set);var r=t+"__bubble";n.has(r)||(Kb(e,t,2,!1),n.add(r))}function Sh(t,e,n){var r=0;e&&(r|=4),Kb(n,t,r,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[rc]){t[rc]=!0,tb.forEach(function(n){n!=="selectionchange"&&(uk.has(n)||Sh(n,!1,t),Sh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rc]||(e[rc]=!0,Sh("selectionchange",!1,e))}}function Kb(t,e,n,r){switch(Ab(e)){case 1:var s=SI;break;case 4:s=TI;break;default:s=om}n=s.bind(null,e,n,t),s=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Th(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;a!==null;){if(o=As(a),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}a=a.parentNode}}r=r.return}yb(function(){var u=i,h=nm(n),f=[];e:{var m=Gb.get(t);if(m!==void 0){var y=lm,S=t;switch(t){case"keypress":if(Tc(n)===0)break e;case"keydown":case"keyup":y=UI;break;case"focusin":S="focus",y=_h;break;case"focusout":S="blur",y=_h;break;case"beforeblur":case"afterblur":y=_h;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=V0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=kI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zI;break;case $b:case zb:case Wb:y=AI;break;case Hb:y=HI;break;case"scroll":y=CI;break;case"wheel":y=qI;break;case"copy":case"cut":case"paste":y=DI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=U0}var I=(e&4)!==0,k=!I&&t==="scroll",b=I?m!==null?m+"Capture":null:m;I=[];for(var v=u,w;v!==null;){w=v;var D=w.stateNode;if(w.tag===5&&D!==null&&(w=D,b!==null&&(D=Na(v,b),D!=null&&I.push(Ma(v,D,w)))),k)break;v=v.return}0<I.length&&(m=new y(m,S,null,n,h),f.push({event:m,listeners:I}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==vf&&(S=n.relatedTarget||n.fromElement)&&(As(S)||S[dr]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=u,S=S?As(S):null,S!==null&&(k=Zs(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(I=V0,D="onMouseLeave",b="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(I=U0,D="onPointerLeave",b="onPointerEnter",v="pointer"),k=y==null?m:_i(y),w=S==null?m:_i(S),m=new I(D,v+"leave",y,n,h),m.target=k,m.relatedTarget=w,D=null,As(h)===u&&(I=new I(b,v+"enter",S,n,h),I.target=w,I.relatedTarget=k,D=I),k=D,y&&S)t:{for(I=y,b=S,v=0,w=I;w;w=ai(w))v++;for(w=0,D=b;D;D=ai(D))w++;for(;0<v-w;)I=ai(I),v--;for(;0<w-v;)b=ai(b),w--;for(;v--;){if(I===b||b!==null&&I===b.alternate)break t;I=ai(I),b=ai(b)}I=null}else I=null;y!==null&&X0(f,m,y,I,!1),S!==null&&k!==null&&X0(f,k,S,I,!0)}}e:{if(m=u?_i(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var j=ek;else if(z0(m))if(Ob)j=sk;else{j=nk;var O=tk}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=rk);if(j&&(j=j(t,u))){Mb(f,j,n,h);break e}O&&O(t,m,u),t==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&pf(m,"number",m.value)}switch(O=u?_i(u):window,t){case"focusin":(z0(O)||O.contentEditable==="true")&&(gi=O,Cf=u,ha=null);break;case"focusout":ha=Cf=gi=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,K0(f,n,h);break;case"selectionchange":if(ak)break;case"keydown":case"keyup":K0(f,n,h)}var E;if(um)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else mi?jb(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Db&&n.locale!=="ko"&&(mi||_!=="onCompositionStart"?_==="onCompositionEnd"&&mi&&(E=Pb()):(Lr=h,am="value"in Lr?Lr.value:Lr.textContent,mi=!0)),O=Xc(u,_),0<O.length&&(_=new F0(_,t,null,n,h),f.push({event:_,listeners:O}),E?_.data=E:(E=Lb(n),E!==null&&(_.data=E)))),(E=QI?YI(t,n):XI(t,n))&&(u=Xc(u,"onBeforeInput"),0<u.length&&(h=new F0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=E))}qb(f,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Na(t,n),i!=null&&r.unshift(Ma(t,i,s)),i=Na(t,e),i!=null&&r.push(Ma(t,i,s))),t=t.return}return r}function ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function X0(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,s?(c=Na(n,i),c!=null&&o.unshift(Ma(n,c,a))):s||(c=Na(n,i),c!=null&&o.push(Ma(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dk=/\r\n?/g,hk=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(dk,`
`).replace(hk,"")}function sc(t,e,n){if(e=J0(e),J0(t)!==e&&n)throw Error(B(425))}function Jc(){}var kf=null,Nf=null;function Rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,fk=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,pk=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(t){return Z0.resolve(null).then(t).catch(mk)}:Af;function mk(t){setTimeout(function(){throw t})}function Ch(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Pa(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function e_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),$n="__reactFiber$"+io,Oa="__reactProps$"+io,dr="__reactContainer$"+io,Pf="__reactEvents$"+io,gk="__reactListeners$"+io,yk="__reactHandles$"+io;function As(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=e_(t);t!==null;){if(n=t[$n])return n;t=e_(t)}return e}t=n,n=t.parentNode}return null}function ml(t){return t=t[$n]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Yu(t){return t[Oa]||null}var Df=[],vi=-1;function ps(t){return{current:t}}function je(t){0>vi||(t.current=Df[vi],Df[vi]=null,vi--)}function Re(t,e){vi++,Df[vi]=t.current,t.current=e}var ns={},Rt=ps(ns),qt=ps(!1),Fs=ns;function Fi(t,e){var n=t.type.contextTypes;if(!n)return ns;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Kt(t){return t=t.childContextTypes,t!=null}function Zc(){je(qt),je(Rt)}function t_(t,e,n){if(Rt.current!==ns)throw Error(B(168));Re(Rt,e),Re(qt,n)}function Qb(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,tI(t)||"Unknown",s));return Ue({},n,r)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ns,Fs=Rt.current,Re(Rt,t),Re(qt,qt.current),!0}function n_(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=Qb(t,e,Fs),r.__reactInternalMemoizedMergedChildContext=t,je(qt),je(Rt),Re(Rt,t)):je(qt),Re(qt,n)}var rr=null,Xu=!1,Ih=!1;function Yb(t){rr===null?rr=[t]:rr.push(t)}function _k(t){Xu=!0,Yb(t)}function ms(){if(!Ih&&rr!==null){Ih=!0;var t=0,e=be;try{var n=rr;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rr=null,Xu=!1}catch(s){throw rr!==null&&(rr=rr.slice(t+1)),bb(rm,ms),s}finally{be=e,Ih=!1}}return null}var xi=[],bi=0,tu=null,nu=0,dn=[],hn=0,Us=null,sr=1,ir="";function Is(t,e){xi[bi++]=nu,xi[bi++]=tu,tu=t,nu=e}function Xb(t,e,n){dn[hn++]=sr,dn[hn++]=ir,dn[hn++]=Us,Us=t;var r=sr;t=ir;var s=32-Nn(r)-1;r&=~(1<<s),n+=1;var i=32-Nn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,sr=1<<32-Nn(e)+s|n<<s|r,ir=i+t}else sr=1<<i|n<<s|r,ir=t}function hm(t){t.return!==null&&(Is(t,1),Xb(t,1,0))}function fm(t){for(;t===tu;)tu=xi[--bi],xi[bi]=null,nu=xi[--bi],xi[bi]=null;for(;t===Us;)Us=dn[--hn],dn[hn]=null,ir=dn[--hn],dn[hn]=null,sr=dn[--hn],dn[hn]=null}var sn=null,tn=null,Me=!1,Cn=null;function Jb(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function r_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,tn=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Us!==null?{id:sr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,tn=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(Me){var e=tn;if(e){var n=e;if(!r_(t,e)){if(jf(t))throw Error(B(418));e=zr(n.nextSibling);var r=sn;e&&r_(t,e)?Jb(r,n):(t.flags=t.flags&-4097|2,Me=!1,sn=t)}}else{if(jf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Me=!1,sn=t}}}function s_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function ic(t){if(t!==sn)return!1;if(!Me)return s_(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rf(t.type,t.memoizedProps)),e&&(e=tn)){if(jf(t))throw Zb(),Error(B(418));for(;e;)Jb(t,e),e=zr(e.nextSibling)}if(s_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=sn?zr(t.stateNode.nextSibling):null;return!0}function Zb(){for(var t=tn;t;)t=zr(t.nextSibling)}function Ui(){tn=sn=null,Me=!1}function pm(t){Cn===null?Cn=[t]:Cn.push(t)}var vk=br.ReactCurrentBatchConfig;function Bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function oc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function i_(t){var e=t._init;return e(t._payload)}function ew(t){function e(b,v){if(t){var w=b.deletions;w===null?(b.deletions=[v],b.flags|=16):w.push(v)}}function n(b,v){if(!t)return null;for(;v!==null;)e(b,v),v=v.sibling;return null}function r(b,v){for(b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function s(b,v){return b=qr(b,v),b.index=0,b.sibling=null,b}function i(b,v,w){return b.index=w,t?(w=b.alternate,w!==null?(w=w.index,w<v?(b.flags|=2,v):w):(b.flags|=2,v)):(b.flags|=1048576,v)}function o(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,v,w,D){return v===null||v.tag!==6?(v=jh(w,b.mode,D),v.return=b,v):(v=s(v,w),v.return=b,v)}function c(b,v,w,D){var j=w.type;return j===pi?h(b,v,w.props.children,D,w.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Rr&&i_(j)===v.type)?(D=s(v,w.props),D.ref=Bo(b,v,w),D.return=b,D):(D=Pc(w.type,w.key,w.props,null,b.mode,D),D.ref=Bo(b,v,w),D.return=b,D)}function u(b,v,w,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Lh(w,b.mode,D),v.return=b,v):(v=s(v,w.children||[]),v.return=b,v)}function h(b,v,w,D,j){return v===null||v.tag!==7?(v=Os(w,b.mode,D,j),v.return=b,v):(v=s(v,w),v.return=b,v)}function f(b,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=jh(""+v,b.mode,w),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ql:return w=Pc(v.type,v.key,v.props,null,b.mode,w),w.ref=Bo(b,null,v),w.return=b,w;case fi:return v=Lh(v,b.mode,w),v.return=b,v;case Rr:var D=v._init;return f(b,D(v._payload),w)}if(Zo(v)||Mo(v))return v=Os(v,b.mode,w,null),v.return=b,v;oc(b,v)}return null}function m(b,v,w,D){var j=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return j!==null?null:a(b,v,""+w,D);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ql:return w.key===j?c(b,v,w,D):null;case fi:return w.key===j?u(b,v,w,D):null;case Rr:return j=w._init,m(b,v,j(w._payload),D)}if(Zo(w)||Mo(w))return j!==null?null:h(b,v,w,D,null);oc(b,w)}return null}function y(b,v,w,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return b=b.get(w)||null,a(v,b,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ql:return b=b.get(D.key===null?w:D.key)||null,c(v,b,D,j);case fi:return b=b.get(D.key===null?w:D.key)||null,u(v,b,D,j);case Rr:var O=D._init;return y(b,v,w,O(D._payload),j)}if(Zo(D)||Mo(D))return b=b.get(w)||null,h(v,b,D,j,null);oc(v,D)}return null}function S(b,v,w,D){for(var j=null,O=null,E=v,_=v=0,T=null;E!==null&&_<w.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var A=m(b,E,w[_],D);if(A===null){E===null&&(E=T);break}t&&E&&A.alternate===null&&e(b,E),v=i(A,v,_),O===null?j=A:O.sibling=A,O=A,E=T}if(_===w.length)return n(b,E),Me&&Is(b,_),j;if(E===null){for(;_<w.length;_++)E=f(b,w[_],D),E!==null&&(v=i(E,v,_),O===null?j=E:O.sibling=E,O=E);return Me&&Is(b,_),j}for(E=r(b,E);_<w.length;_++)T=y(E,b,_,w[_],D),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),v=i(T,v,_),O===null?j=T:O.sibling=T,O=T);return t&&E.forEach(function(C){return e(b,C)}),Me&&Is(b,_),j}function I(b,v,w,D){var j=Mo(w);if(typeof j!="function")throw Error(B(150));if(w=j.call(w),w==null)throw Error(B(151));for(var O=j=null,E=v,_=v=0,T=null,A=w.next();E!==null&&!A.done;_++,A=w.next()){E.index>_?(T=E,E=null):T=E.sibling;var C=m(b,E,A.value,D);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(b,E),v=i(C,v,_),O===null?j=C:O.sibling=C,O=C,E=T}if(A.done)return n(b,E),Me&&Is(b,_),j;if(E===null){for(;!A.done;_++,A=w.next())A=f(b,A.value,D),A!==null&&(v=i(A,v,_),O===null?j=A:O.sibling=A,O=A);return Me&&Is(b,_),j}for(E=r(b,E);!A.done;_++,A=w.next())A=y(E,b,_,A.value,D),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?_:A.key),v=i(A,v,_),O===null?j=A:O.sibling=A,O=A);return t&&E.forEach(function(P){return e(b,P)}),Me&&Is(b,_),j}function k(b,v,w,D){if(typeof w=="object"&&w!==null&&w.type===pi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ql:e:{for(var j=w.key,O=v;O!==null;){if(O.key===j){if(j=w.type,j===pi){if(O.tag===7){n(b,O.sibling),v=s(O,w.props.children),v.return=b,b=v;break e}}else if(O.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Rr&&i_(j)===O.type){n(b,O.sibling),v=s(O,w.props),v.ref=Bo(b,O,w),v.return=b,b=v;break e}n(b,O);break}else e(b,O);O=O.sibling}w.type===pi?(v=Os(w.props.children,b.mode,D,w.key),v.return=b,b=v):(D=Pc(w.type,w.key,w.props,null,b.mode,D),D.ref=Bo(b,v,w),D.return=b,b=D)}return o(b);case fi:e:{for(O=w.key;v!==null;){if(v.key===O)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(b,v.sibling),v=s(v,w.children||[]),v.return=b,b=v;break e}else{n(b,v);break}else e(b,v);v=v.sibling}v=Lh(w,b.mode,D),v.return=b,b=v}return o(b);case Rr:return O=w._init,k(b,v,O(w._payload),D)}if(Zo(w))return S(b,v,w,D);if(Mo(w))return I(b,v,w,D);oc(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(b,v.sibling),v=s(v,w),v.return=b,b=v):(n(b,v),v=jh(w,b.mode,D),v.return=b,b=v),o(b)):n(b,v)}return k}var Bi=ew(!0),tw=ew(!1),ru=ps(null),su=null,wi=null,mm=null;function gm(){mm=wi=su=null}function ym(t){var e=ru.current;je(ru),t._currentValue=e}function Mf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ai(t,e){su=t,mm=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(mm!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(su===null)throw Error(B(308));wi=t,su.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Ps=null;function _m(t){Ps===null?Ps=[t]:Ps.push(t)}function nw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,_m(e)):(n.next=s.next,s.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function vm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,hr(t,n)}return s=r.interleaved,s===null?(e.next=e,_m(r)):(e.next=s.next,s.next=e),r.interleaved=e,hr(t,n)}function Cc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}function o_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,r){var s=t.updateQueue;Ar=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=c))}if(i!==null){var f=s.baseState;o=0,h=u=c=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,I=a;switch(m=e,y=n,I.tag){case 1:if(S=I.payload,typeof S=="function"){f=S.call(y,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=I.payload,m=typeof S=="function"?S.call(y,f,m):S,m==null)break e;f=Ue({},f,m);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=y,c=f):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(c=f),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);$s|=o,t.lanes=o,t.memoizedState=f}}function a_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var gl={},Gn=ps(gl),Va=ps(gl),Fa=ps(gl);function Ds(t){if(t===gl)throw Error(B(174));return t}function xm(t,e){switch(Re(Fa,e),Re(Va,t),Re(Gn,gl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}je(Gn),Re(Gn,e)}function $i(){je(Gn),je(Va),je(Fa)}function sw(t){Ds(Fa.current);var e=Ds(Gn.current),n=gf(e,t.type);e!==n&&(Re(Va,t),Re(Gn,n))}function bm(t){Va.current===t&&(je(Gn),je(Va))}var Ve=ps(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kh=[];function wm(){for(var t=0;t<kh.length;t++)kh[t]._workInProgressVersionPrimary=null;kh.length=0}var Ic=br.ReactCurrentDispatcher,Nh=br.ReactCurrentBatchConfig,Bs=0,Fe=null,tt=null,dt=null,au=!1,fa=!1,Ua=0,xk=0;function Et(){throw Error(B(321))}function Em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function Sm(t,e,n,r,s,i){if(Bs=i,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ic.current=t===null||t.memoizedState===null?Sk:Tk,t=n(r,s),fa){i=0;do{if(fa=!1,Ua=0,25<=i)throw Error(B(301));i+=1,dt=tt=null,e.updateQueue=null,Ic.current=Ck,t=n(r,s)}while(fa)}if(Ic.current=lu,e=tt!==null&&tt.next!==null,Bs=0,dt=tt=Fe=null,au=!1,e)throw Error(B(300));return t}function Tm(){var t=Ua!==0;return Ua=0,t}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Fe.memoizedState=dt=t:dt=dt.next=t,dt}function vn(){if(tt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=dt===null?Fe.memoizedState:dt.next;if(e!==null)dt=e,tt=t;else{if(t===null)throw Error(B(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},dt===null?Fe.memoizedState=dt=t:dt=dt.next=t}return dt}function Ba(t,e){return typeof e=="function"?e(t):e}function Rh(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=tt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,c=null,u=i;do{var h=u.lane;if((Bs&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,o=r):c=c.next=f,Fe.lanes|=h,$s|=h}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=a,Dn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Fe.lanes|=i,$s|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ah(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Dn(i,e.memoizedState)||(Gt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function iw(){}function ow(t,e){var n=Fe,r=vn(),s=e(),i=!Dn(r.memoizedState,s);if(i&&(r.memoizedState=s,Gt=!0),r=r.queue,Cm(cw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,$a(9,lw.bind(null,n,r,s,e),void 0,null),ht===null)throw Error(B(349));Bs&30||aw(n,e,s)}return s}function aw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lw(t,e,n,r){e.value=n,e.getSnapshot=r,uw(e)&&dw(t)}function cw(t,e,n){return n(function(){uw(e)&&dw(t)})}function uw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function dw(t){var e=hr(t,1);e!==null&&Rn(e,t,1,-1)}function l_(t){var e=Un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=Ek.bind(null,Fe,t),[e.memoizedState,t]}function $a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hw(){return vn().memoizedState}function kc(t,e,n,r){var s=Un();Fe.flags|=t,s.memoizedState=$a(1|e,n,void 0,r===void 0?null:r)}function Ju(t,e,n,r){var s=vn();r=r===void 0?null:r;var i=void 0;if(tt!==null){var o=tt.memoizedState;if(i=o.destroy,r!==null&&Em(r,o.deps)){s.memoizedState=$a(e,n,i,r);return}}Fe.flags|=t,s.memoizedState=$a(1|e,n,i,r)}function c_(t,e){return kc(8390656,8,t,e)}function Cm(t,e){return Ju(2048,8,t,e)}function fw(t,e){return Ju(4,2,t,e)}function pw(t,e){return Ju(4,4,t,e)}function mw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gw(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4,4,mw.bind(null,e,t),n)}function Im(){}function yw(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _w(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vw(t,e,n){return Bs&21?(Dn(n,e)||(n=Sb(),Fe.lanes|=n,$s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n)}function bk(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Nh.transition;Nh.transition={};try{t(!1),e()}finally{be=n,Nh.transition=r}}function xw(){return vn().memoizedState}function wk(t,e,n){var r=Gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bw(t))ww(e,n);else if(n=nw(t,e,n,r),n!==null){var s=Ot();Rn(n,t,r,s),Ew(n,e,r)}}function Ek(t,e,n){var r=Gr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bw(t))ww(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Dn(a,o)){var c=e.interleaved;c===null?(s.next=s,_m(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=nw(t,e,s,r),n!==null&&(s=Ot(),Rn(n,t,r,s),Ew(n,e,r))}}function bw(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function ww(t,e){fa=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ew(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}var lu={readContext:_n,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},Sk={readContext:_n,useCallback:function(t,e){return Un().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:c_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kc(4194308,4,mw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kc(4194308,4,t,e)},useInsertionEffect:function(t,e){return kc(4,2,t,e)},useMemo:function(t,e){var n=Un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wk.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Un();return t={current:t},e.memoizedState=t},useState:l_,useDebugValue:Im,useDeferredValue:function(t){return Un().memoizedState=t},useTransition:function(){var t=l_(!1),e=t[0];return t=bk.bind(null,t[1]),Un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,s=Un();if(Me){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ht===null)throw Error(B(349));Bs&30||aw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,c_(cw.bind(null,r,i,t),[t]),r.flags|=2048,$a(9,lw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Un(),e=ht.identifierPrefix;if(Me){var n=ir,r=sr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Tk={readContext:_n,useCallback:yw,useContext:_n,useEffect:Cm,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:_w,useReducer:Rh,useRef:hw,useState:function(){return Rh(Ba)},useDebugValue:Im,useDeferredValue:function(t){var e=vn();return vw(e,tt.memoizedState,t)},useTransition:function(){var t=Rh(Ba)[0],e=vn().memoizedState;return[t,e]},useMutableSource:iw,useSyncExternalStore:ow,useId:xw,unstable_isNewReconciler:!1},Ck={readContext:_n,useCallback:yw,useContext:_n,useEffect:Cm,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:_w,useReducer:Ah,useRef:hw,useState:function(){return Ah(Ba)},useDebugValue:Im,useDeferredValue:function(t){var e=vn();return tt===null?e.memoizedState=t:vw(e,tt.memoizedState,t)},useTransition:function(){var t=Ah(Ba)[0],e=vn().memoizedState;return[t,e]},useMutableSource:iw,useSyncExternalStore:ow,useId:xw,unstable_isNewReconciler:!1};function Sn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?Zs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),s=Gr(t),i=ar(r,s);i.payload=e,n!=null&&(i.callback=n),e=Wr(t,i,s),e!==null&&(Rn(e,t,s,r),Cc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),s=Gr(t),i=ar(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Wr(t,i,s),e!==null&&(Rn(e,t,s,r),Cc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=Gr(t),s=ar(n,r);s.tag=2,e!=null&&(s.callback=e),e=Wr(t,s,r),e!==null&&(Rn(e,t,r,n),Cc(e,t,r))}};function u_(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ja(n,r)||!ja(s,i):!0}function Sw(t,e,n){var r=!1,s=ns,i=e.contextType;return typeof i=="object"&&i!==null?i=_n(i):(s=Kt(e)?Fs:Rt.current,r=e.contextTypes,i=(r=r!=null)?Fi(t,s):ns),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function d_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Vf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},vm(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=_n(i):(i=Kt(e)?Fs:Rt.current,s.context=Fi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Of(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Zu.enqueueReplaceState(s,s.state,null),iu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=eI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ph(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ik=typeof WeakMap=="function"?WeakMap:Map;function Tw(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,Qf=r),Ff(t,e)},n}function Cw(t,e,n){n=ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ff(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ff(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function h_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ik;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Bk.bind(null,t,e,n),e.then(t,t))}function f_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function p_(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var kk=br.ReactCurrentOwner,Gt=!1;function jt(t,e,n,r){e.child=t===null?tw(e,null,n,r):Bi(e,t.child,n,r)}function m_(t,e,n,r,s){n=n.render;var i=e.ref;return Ai(e,s),r=Sm(t,e,n,r,i,s),n=Tm(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,fr(t,e,s)):(Me&&n&&hm(e),e.flags|=1,jt(t,e,r,s),e.child)}function g_(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Lm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Iw(t,e,i,r,s)):(t=Pc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(o,r)&&t.ref===e.ref)return fr(t,e,s)}return e.flags|=1,t=qr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Iw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ja(i,r)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,fr(t,e,s)}return Uf(t,e,n,r,s)}function kw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Si,Zt),Zt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Si,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Re(Si,Zt),Zt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Re(Si,Zt),Zt|=r;return jt(t,e,s,n),e.child}function Nw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uf(t,e,n,r,s){var i=Kt(n)?Fs:Rt.current;return i=Fi(e,i),Ai(e,s),n=Sm(t,e,n,r,i,s),r=Tm(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,fr(t,e,s)):(Me&&r&&hm(e),e.flags|=1,jt(t,e,n,s),e.child)}function y_(t,e,n,r,s){if(Kt(n)){var i=!0;eu(e)}else i=!1;if(Ai(e,s),e.stateNode===null)Nc(t,e),Sw(e,n,r),Vf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=Kt(n)?Fs:Rt.current,u=Fi(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&d_(e,o,r,u),Ar=!1;var m=e.memoizedState;o.state=m,iu(e,r,o,s),c=e.memoizedState,a!==r||m!==c||qt.current||Ar?(typeof h=="function"&&(Of(e,n,h,r),c=e.memoizedState),(a=Ar||u_(e,n,a,r,m,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Sn(e.type,a),o.props=u,f=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=_n(c):(c=Kt(n)?Fs:Rt.current,c=Fi(e,c));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==c)&&d_(e,o,r,c),Ar=!1,m=e.memoizedState,o.state=m,iu(e,r,o,s);var S=e.memoizedState;a!==f||m!==S||qt.current||Ar?(typeof y=="function"&&(Of(e,n,y,r),S=e.memoizedState),(u=Ar||u_(e,n,u,r,m,S,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Bf(t,e,n,r,i,s)}function Bf(t,e,n,r,s,i){Nw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&n_(e,n,!1),fr(t,e,i);r=e.stateNode,kk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,i),e.child=Bi(e,null,a,i)):jt(t,e,a,i),e.memoizedState=r.state,s&&n_(e,n,!0),e.child}function Rw(t){var e=t.stateNode;e.pendingContext?t_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&t_(t,e.context,!1),xm(t,e.containerInfo)}function __(t,e,n,r,s){return Ui(),pm(s),e.flags|=256,jt(t,e,n,r),e.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Aw(t,e,n){var r=e.pendingProps,s=Ve.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Re(Ve,s&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=nd(o,r,0,null),t=Os(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=zf(n),e.memoizedState=$f,t):km(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Nk(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=qr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=qr(a,i):(i=Os(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=$f,r}return i=t.child,t=i.sibling,r=qr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function km(t,e){return e=nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ac(t,e,n,r){return r!==null&&pm(r),Bi(e,t.child,null,n),t=km(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nk(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ph(Error(B(422))),ac(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=nd({mode:"visible",children:r.children},s,0,null),i=Os(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=zf(o),e.memoizedState=$f,i);if(!(e.mode&1))return ac(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=Ph(i,r,void 0),ac(t,e,o,r)}if(a=(o&t.childLanes)!==0,Gt||a){if(r=ht,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,hr(t,s),Rn(r,t,s,-1))}return jm(),r=Ph(Error(B(421))),ac(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$k.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,tn=zr(s.nextSibling),sn=e,Me=!0,Cn=null,t!==null&&(dn[hn++]=sr,dn[hn++]=ir,dn[hn++]=Us,sr=t.id,ir=t.overflow,Us=e),e=km(e,r.children),e.flags|=4096,e)}function v_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mf(t.return,e,n)}function Dh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Pw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(jt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v_(t,n,e);else if(t.tag===19)v_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ou(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dh(e,!0,n,null,i);break;case"together":Dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rk(t,e,n){switch(e.tag){case 3:Rw(e),Ui();break;case 5:sw(e);break;case 1:Kt(e.type)&&eu(e);break;case 4:xm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Re(ru,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?Aw(t,e,n):(Re(Ve,Ve.current&1),t=fr(t,e,n),t!==null?t.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Pw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Re(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,kw(t,e,n)}return fr(t,e,n)}var Dw,Wf,jw,Lw;Dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};jw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ds(Gn.current);var i=null;switch(n){case"input":s=hf(t,s),r=hf(t,r),i=[];break;case"select":s=Ue({},s,{value:void 0}),r=Ue({},r,{value:void 0}),i=[];break;case"textarea":s=mf(t,s),r=mf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jc)}yf(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ia.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Pe("scroll",t),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Lw=function(t,e,n,r){n!==r&&(e.flags|=4)};function $o(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ak(t,e,n){var r=e.pendingProps;switch(fm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Kt(e.type)&&Zc(),St(e),null;case 3:return r=e.stateNode,$i(),je(qt),je(Rt),wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ic(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(Jf(Cn),Cn=null))),Wf(t,e),St(e),null;case 5:bm(e);var s=Ds(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)jw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return St(e),null}if(t=Ds(Gn.current),ic(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[$n]=e,r[Oa]=i,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(s=0;s<ta.length;s++)Pe(ta[s],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":k0(r,i),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Pe("invalid",r);break;case"textarea":R0(r,i),Pe("invalid",r)}yf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&sc(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&sc(r.textContent,a,t),s=["children",""+a]):Ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Yl(r),N0(r,i,!0);break;case"textarea":Yl(r),A0(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Jc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cb(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[Oa]=r,Dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=_f(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),s=r;break;case"iframe":case"object":case"embed":Pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<ta.length;s++)Pe(ta[s],t);s=r;break;case"source":Pe("error",t),s=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),s=r;break;case"details":Pe("toggle",t),s=r;break;case"input":k0(t,r),s=hf(t,r),Pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ue({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":R0(t,r),s=mf(t,r),Pe("invalid",t);break;default:s=r}yf(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?hb(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ub(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ka(t,c):typeof c=="number"&&ka(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ia.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Pe("scroll",t):c!=null&&Jp(t,i,c,o))}switch(n){case"input":Yl(t),N0(t,r,!1);break;case"textarea":Yl(t),A0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ts(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ii(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ii(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Jc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)Lw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ds(Fa.current),Ds(Gn.current),ic(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(i=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:sc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return St(e),null;case 13:if(je(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&tn!==null&&e.mode&1&&!(e.flags&128))Zb(),Ui(),e.flags|=98560,i=!1;else if(i=ic(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[$n]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),i=!1}else Cn!==null&&(Jf(Cn),Cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?it===0&&(it=3):jm())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return $i(),Wf(t,e),t===null&&La(e.stateNode.containerInfo),St(e),null;case 10:return ym(e.type._context),St(e),null;case 17:return Kt(e.type)&&Zc(),St(e),null;case 19:if(je(Ve),i=e.memoizedState,i===null)return St(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)$o(i,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,$o(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ve,Ve.current&1|2),e.child}t=t.sibling}i.tail!==null&&qe()>Wi&&(e.flags|=128,r=!0,$o(i,!1),e.lanes=4194304)}else{if(!r)if(t=ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Me)return St(e),null}else 2*qe()-i.renderingStartTime>Wi&&n!==1073741824&&(e.flags|=128,r=!0,$o(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=qe(),e.sibling=null,n=Ve.current,Re(Ve,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return Dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Pk(t,e){switch(fm(e),e.tag){case 1:return Kt(e.type)&&Zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),je(qt),je(Rt),wm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bm(e),null;case 13:if(je(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Ve),null;case 4:return $i(),null;case 10:return ym(e.type._context),null;case 22:case 23:return Dm(),null;case 24:return null;default:return null}}var lc=!1,It=!1,Dk=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Hf(t,e,n){try{n()}catch(r){ze(t,e,r)}}var x_=!1;function jk(t,e){if(kf=Qc,t=Ub(),dm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,h=0,f=t,m=null;t:for(;;){for(var y;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++u===s&&(a=o),m===i&&++h===r&&(c=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Qc=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var I=S.memoizedProps,k=S.memoizedState,b=e.stateNode,v=b.getSnapshotBeforeUpdate(e.elementType===e.type?I:Sn(e.type,I),k);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){ze(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return S=x_,x_=!1,S}function pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Hf(e,n,i)}s=s.next}while(s!==r)}}function ed(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mw(t){var e=t.alternate;e!==null&&(t.alternate=null,Mw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Oa],delete e[Pf],delete e[gk],delete e[yk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ow(t){return t.tag===5||t.tag===3||t.tag===4}function b_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ow(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jc));else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function Kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var ft=null,Tn=!1;function Nr(t,e,n){for(n=n.child;n!==null;)Vw(t,e,n),n=n.sibling}function Vw(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Gu,n)}catch{}switch(n.tag){case 5:It||Ei(n,e);case 6:var r=ft,s=Tn;ft=null,Nr(t,e,n),ft=r,Tn=s,ft!==null&&(Tn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(Tn?(t=ft,n=n.stateNode,t.nodeType===8?Ch(t.parentNode,n):t.nodeType===1&&Ch(t,n),Pa(t)):Ch(ft,n.stateNode));break;case 4:r=ft,s=Tn,ft=n.stateNode.containerInfo,Tn=!0,Nr(t,e,n),ft=r,Tn=s;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Hf(n,e,o),s=s.next}while(s!==r)}Nr(t,e,n);break;case 1:if(!It&&(Ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Nr(t,e,n),It=r):Nr(t,e,n);break;default:Nr(t,e,n)}}function w_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dk),e.forEach(function(r){var s=zk.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,Tn=!1;break e;case 3:ft=a.stateNode.containerInfo,Tn=!0;break e;case 4:ft=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(ft===null)throw Error(B(160));Vw(i,o,s),ft=null,Tn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ze(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fw(e,t),e=e.sibling}function Fw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Fn(t),r&4){try{pa(3,t,t.return),ed(3,t)}catch(I){ze(t,t.return,I)}try{pa(5,t,t.return)}catch(I){ze(t,t.return,I)}}break;case 1:En(e,t),Fn(t),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(En(e,t),Fn(t),r&512&&n!==null&&Ei(n,n.return),t.flags&32){var s=t.stateNode;try{ka(s,"")}catch(I){ze(t,t.return,I)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ab(s,i),_f(a,o);var u=_f(a,i);for(o=0;o<c.length;o+=2){var h=c[o],f=c[o+1];h==="style"?hb(s,f):h==="dangerouslySetInnerHTML"?ub(s,f):h==="children"?ka(s,f):Jp(s,h,f,u)}switch(a){case"input":ff(s,i);break;case"textarea":lb(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Ii(s,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ii(s,!!i.multiple,i.defaultValue,!0):Ii(s,!!i.multiple,i.multiple?[]:"",!1))}s[Oa]=i}catch(I){ze(t,t.return,I)}}break;case 6:if(En(e,t),Fn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(I){ze(t,t.return,I)}}break;case 3:if(En(e,t),Fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(I){ze(t,t.return,I)}break;case 4:En(e,t),Fn(t);break;case 13:En(e,t),Fn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Am=qe())),r&4&&w_(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(It=(u=It)||h,En(e,t),It=u):En(e,t),Fn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(f=G=h;G!==null;){switch(m=G,y=m.child,m.tag){case 0:case 11:case 14:case 15:pa(4,m,m.return);break;case 1:Ei(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(I){ze(r,n,I)}}break;case 5:Ei(m,m.return);break;case 22:if(m.memoizedState!==null){S_(f);continue}}y!==null?(y.return=m,G=y):S_(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=db("display",o))}catch(I){ze(t,t.return,I)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(I){ze(t,t.return,I)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:En(e,t),Fn(t),r&4&&w_(t);break;case 21:break;default:En(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ow(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ka(s,""),r.flags&=-33);var i=b_(t);Kf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=b_(t);qf(t,a,o);break;default:throw Error(B(161))}}catch(c){ze(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lk(t,e,n){G=t,Uw(t)}function Uw(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||lc;if(!o){var a=s.alternate,c=a!==null&&a.memoizedState!==null||It;a=lc;var u=It;if(lc=o,(It=c)&&!u)for(G=s;G!==null;)o=G,c=o.child,o.tag===22&&o.memoizedState!==null?T_(s):c!==null?(c.return=o,G=c):T_(s);for(;i!==null;)G=i,Uw(i),i=i.sibling;G=s,lc=a,It=u}E_(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):E_(t)}}function E_(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||ed(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Sn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&a_(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}a_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Pa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}It||e.flags&512&&Gf(e)}catch(m){ze(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function S_(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function T_(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ed(4,e)}catch(c){ze(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){ze(e,s,c)}}var i=e.return;try{Gf(e)}catch(c){ze(e,i,c)}break;case 5:var o=e.return;try{Gf(e)}catch(c){ze(e,o,c)}}}catch(c){ze(e,e.return,c)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var Mk=Math.ceil,cu=br.ReactCurrentDispatcher,Nm=br.ReactCurrentOwner,yn=br.ReactCurrentBatchConfig,me=0,ht=null,Xe=null,yt=0,Zt=0,Si=ps(0),it=0,za=null,$s=0,td=0,Rm=0,ma=null,Wt=null,Am=0,Wi=1/0,nr=null,uu=!1,Qf=null,Hr=null,cc=!1,Mr=null,du=0,ga=0,Yf=null,Rc=-1,Ac=0;function Ot(){return me&6?qe():Rc!==-1?Rc:Rc=qe()}function Gr(t){return t.mode&1?me&2&&yt!==0?yt&-yt:vk.transition!==null?(Ac===0&&(Ac=Sb()),Ac):(t=be,t!==0||(t=window.event,t=t===void 0?16:Ab(t.type)),t):1}function Rn(t,e,n,r){if(50<ga)throw ga=0,Yf=null,Error(B(185));fl(t,n,r),(!(me&2)||t!==ht)&&(t===ht&&(!(me&2)&&(td|=n),it===4&&Dr(t,yt)),Qt(t,r),n===1&&me===0&&!(e.mode&1)&&(Wi=qe()+500,Xu&&ms()))}function Qt(t,e){var n=t.callbackNode;vI(t,e);var r=Kc(t,t===ht?yt:0);if(r===0)n!==null&&j0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&j0(n),e===1)t.tag===0?_k(C_.bind(null,t)):Yb(C_.bind(null,t)),pk(function(){!(me&6)&&ms()}),n=null;else{switch(Tb(r)){case 1:n=rm;break;case 4:n=wb;break;case 16:n=qc;break;case 536870912:n=Eb;break;default:n=qc}n=Kw(n,Bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bw(t,e){if(Rc=-1,Ac=0,me&6)throw Error(B(327));var n=t.callbackNode;if(Pi()&&t.callbackNode!==n)return null;var r=Kc(t,t===ht?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hu(t,r);else{e=r;var s=me;me|=2;var i=zw();(ht!==t||yt!==e)&&(nr=null,Wi=qe()+500,Ms(t,e));do try{Fk();break}catch(a){$w(t,a)}while(!0);gm(),cu.current=i,me=s,Xe!==null?e=0:(ht=null,yt=0,e=it)}if(e!==0){if(e===2&&(s=Ef(t),s!==0&&(r=s,e=Xf(t,s))),e===1)throw n=za,Ms(t,0),Dr(t,r),Qt(t,qe()),n;if(e===6)Dr(t,r);else{if(s=t.current.alternate,!(r&30)&&!Ok(s)&&(e=hu(t,r),e===2&&(i=Ef(t),i!==0&&(r=i,e=Xf(t,i))),e===1))throw n=za,Ms(t,0),Dr(t,r),Qt(t,qe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ks(t,Wt,nr);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=Am+500-qe(),10<e)){if(Kc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Af(ks.bind(null,t,Wt,nr),e);break}ks(t,Wt,nr);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Nn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mk(r/1960))-r,10<r){t.timeoutHandle=Af(ks.bind(null,t,Wt,nr),r);break}ks(t,Wt,nr);break;case 5:ks(t,Wt,nr);break;default:throw Error(B(329))}}}return Qt(t,qe()),t.callbackNode===n?Bw.bind(null,t):null}function Xf(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Ms(t,e).flags|=256),t=hu(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Jf(e)),t}function Jf(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function Ok(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Dn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~Rm,e&=~td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function C_(t){if(me&6)throw Error(B(327));Pi();var e=Kc(t,0);if(!(e&1))return Qt(t,qe()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var r=Ef(t);r!==0&&(e=r,n=Xf(t,r))}if(n===1)throw n=za,Ms(t,0),Dr(t,e),Qt(t,qe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ks(t,Wt,nr),Qt(t,qe()),null}function Pm(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Wi=qe()+500,Xu&&ms())}}function zs(t){Mr!==null&&Mr.tag===0&&!(me&6)&&Pi();var e=me;me|=1;var n=yn.transition,r=be;try{if(yn.transition=null,be=1,t)return t()}finally{be=r,yn.transition=n,me=e,!(me&6)&&ms()}}function Dm(){Zt=Si.current,je(Si)}function Ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fk(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(fm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zc();break;case 3:$i(),je(qt),je(Rt),wm();break;case 5:bm(r);break;case 4:$i();break;case 13:je(Ve);break;case 19:je(Ve);break;case 10:ym(r.type._context);break;case 22:case 23:Dm()}n=n.return}if(ht=t,Xe=t=qr(t.current,null),yt=Zt=e,it=0,za=null,Rm=td=$s=0,Wt=ma=null,Ps!==null){for(e=0;e<Ps.length;e++)if(n=Ps[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ps=null}return t}function $w(t,e){do{var n=Xe;try{if(gm(),Ic.current=lu,au){for(var r=Fe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}au=!1}if(Bs=0,dt=tt=Fe=null,fa=!1,Ua=0,Nm.current=null,n===null||n.return===null){it=1,za=e,Xe=null;break}e:{var i=t,o=n.return,a=n,c=e;if(e=yt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=f_(o);if(y!==null){y.flags&=-257,p_(y,o,a,i,e),y.mode&1&&h_(i,u,e),e=y,c=u;var S=e.updateQueue;if(S===null){var I=new Set;I.add(c),e.updateQueue=I}else S.add(c);break e}else{if(!(e&1)){h_(i,u,e),jm();break e}c=Error(B(426))}}else if(Me&&a.mode&1){var k=f_(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),p_(k,o,a,i,e),pm(zi(c,a));break e}}i=c=zi(c,a),it!==4&&(it=2),ma===null?ma=[i]:ma.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var b=Tw(i,c,e);o_(i,b);break e;case 1:a=c;var v=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Hr===null||!Hr.has(w)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=Cw(i,a,e);o_(i,D);break e}}i=i.return}while(i!==null)}Hw(n)}catch(j){e=j,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function zw(){var t=cu.current;return cu.current=lu,t===null?lu:t}function jm(){(it===0||it===3||it===2)&&(it=4),ht===null||!($s&268435455)&&!(td&268435455)||Dr(ht,yt)}function hu(t,e){var n=me;me|=2;var r=zw();(ht!==t||yt!==e)&&(nr=null,Ms(t,e));do try{Vk();break}catch(s){$w(t,s)}while(!0);if(gm(),me=n,cu.current=r,Xe!==null)throw Error(B(261));return ht=null,yt=0,it}function Vk(){for(;Xe!==null;)Ww(Xe)}function Fk(){for(;Xe!==null&&!uI();)Ww(Xe)}function Ww(t){var e=qw(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?Hw(t):Xe=e,Nm.current=null}function Hw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Pk(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,Xe=null;return}}else if(n=Ak(n,e,Zt),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);it===0&&(it=5)}function ks(t,e,n){var r=be,s=yn.transition;try{yn.transition=null,be=1,Uk(t,e,n,r)}finally{yn.transition=s,be=r}return null}function Uk(t,e,n,r){do Pi();while(Mr!==null);if(me&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(xI(t,i),t===ht&&(Xe=ht=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cc||(cc=!0,Kw(qc,function(){return Pi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yn.transition,yn.transition=null;var o=be;be=1;var a=me;me|=4,Nm.current=null,jk(t,n),Fw(n,t),ok(Nf),Qc=!!kf,Nf=kf=null,t.current=n,Lk(n),dI(),me=a,be=o,yn.transition=i}else t.current=n;if(cc&&(cc=!1,Mr=t,du=s),i=t.pendingLanes,i===0&&(Hr=null),pI(n.stateNode),Qt(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(uu)throw uu=!1,t=Qf,Qf=null,t;return du&1&&t.tag!==0&&Pi(),i=t.pendingLanes,i&1?t===Yf?ga++:(ga=0,Yf=t):ga=0,ms(),null}function Pi(){if(Mr!==null){var t=Tb(du),e=yn.transition,n=be;try{if(yn.transition=null,be=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,du=0,me&6)throw Error(B(331));var s=me;for(me|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(G=u;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:pa(8,h,i)}var f=h.child;if(f!==null)f.return=h,G=f;else for(;G!==null;){h=G;var m=h.sibling,y=h.return;if(Mw(h),h===u){G=null;break}if(m!==null){m.return=y,G=m;break}G=y}}}var S=i.alternate;if(S!==null){var I=S.child;if(I!==null){S.child=null;do{var k=I.sibling;I.sibling=null,I=k}while(I!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pa(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,G=b;break e}G=i.return}}var v=t.current;for(G=v;G!==null;){o=G;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,G=w;else e:for(o=v;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ed(9,a)}}catch(j){ze(a,a.return,j)}if(a===o){G=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,G=D;break e}G=a.return}}if(me=s,ms(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Gu,t)}catch{}r=!0}return r}finally{be=n,yn.transition=e}}return!1}function I_(t,e,n){e=zi(n,e),e=Tw(t,e,1),t=Wr(t,e,1),e=Ot(),t!==null&&(fl(t,1,e),Qt(t,e))}function ze(t,e,n){if(t.tag===3)I_(t,t,n);else for(;e!==null;){if(e.tag===3){I_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=zi(n,t),t=Cw(e,t,1),e=Wr(e,t,1),t=Ot(),e!==null&&(fl(e,1,t),Qt(e,t));break}}e=e.return}}function Bk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(yt&n)===n&&(it===4||it===3&&(yt&130023424)===yt&&500>qe()-Am?Ms(t,0):Rm|=n),Qt(t,e)}function Gw(t,e){e===0&&(t.mode&1?(e=Zl,Zl<<=1,!(Zl&130023424)&&(Zl=4194304)):e=1);var n=Ot();t=hr(t,e),t!==null&&(fl(t,e,n),Qt(t,n))}function $k(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gw(t,n)}function zk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Gw(t,n)}var qw;qw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gt=!1,Rk(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,Me&&e.flags&1048576&&Xb(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nc(t,e),t=e.pendingProps;var s=Fi(e,Rt.current);Ai(e,n),s=Sm(null,e,r,t,s,n);var i=Tm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(i=!0,eu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,vm(e),s.updater=Zu,e.stateNode=s,s._reactInternals=e,Vf(e,r,t,n),e=Bf(null,e,r,!0,i,n)):(e.tag=0,Me&&i&&hm(e),jt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Hk(r),t=Sn(r,t),s){case 0:e=Uf(null,e,r,t,n);break e;case 1:e=y_(null,e,r,t,n);break e;case 11:e=m_(null,e,r,t,n);break e;case 14:e=g_(null,e,r,Sn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),Uf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),y_(t,e,r,s,n);case 3:e:{if(Rw(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,rw(t,e),iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=zi(Error(B(423)),e),e=__(t,e,r,n,s);break e}else if(r!==s){s=zi(Error(B(424)),e),e=__(t,e,r,n,s);break e}else for(tn=zr(e.stateNode.containerInfo.firstChild),sn=e,Me=!0,Cn=null,n=tw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===s){e=fr(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return sw(e),t===null&&Lf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Rf(r,s)?o=null:i!==null&&Rf(r,i)&&(e.flags|=32),Nw(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return Aw(t,e,n);case 4:return xm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),m_(t,e,r,s,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Re(ru,r._currentValue),r._currentValue=o,i!==null)if(Dn(i.value,o)){if(i.children===s.children&&!qt.current){e=fr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=ar(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Mf(i.return,n,e),a.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}jt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ai(e,n),s=_n(s),r=r(s),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,s=Sn(r,e.pendingProps),s=Sn(r.type,s),g_(t,e,r,s,n);case 15:return Iw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),Nc(t,e),e.tag=1,Kt(r)?(t=!0,eu(e)):t=!1,Ai(e,n),Sw(e,r,s),Vf(e,r,s,n),Bf(null,e,r,!0,t,n);case 19:return Pw(t,e,n);case 22:return kw(t,e,n)}throw Error(B(156,e.tag))};function Kw(t,e){return bb(t,e)}function Wk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new Wk(t,e,n,r)}function Lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hk(t){if(typeof t=="function")return Lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===em)return 11;if(t===tm)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pi:return Os(n.children,s,i,e);case Zp:o=8,s|=8;break;case lf:return t=mn(12,n,e,s|2),t.elementType=lf,t.lanes=i,t;case cf:return t=mn(13,n,e,s),t.elementType=cf,t.lanes=i,t;case uf:return t=mn(19,n,e,s),t.elementType=uf,t.lanes=i,t;case sb:return nd(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nb:o=10;break e;case rb:o=9;break e;case em:o=11;break e;case tm:o=14;break e;case Rr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=mn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Os(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function nd(t,e,n,r){return t=mn(22,t,r,e),t.elementType=sb,t.lanes=n,t.stateNode={isHidden:!1},t}function jh(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Lh(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gk(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mh(0),this.expirationTimes=mh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mh(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Mm(t,e,n,r,s,i,o,a,c){return t=new Gk(t,e,n,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=mn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vm(i),t}function qk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qw(t){if(!t)return ns;t=t._reactInternals;e:{if(Zs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Kt(n))return Qb(t,n,e)}return e}function Yw(t,e,n,r,s,i,o,a,c){return t=Mm(n,r,!0,t,s,i,o,a,c),t.context=Qw(null),n=t.current,r=Ot(),s=Gr(n),i=ar(r,s),i.callback=e??null,Wr(n,i,s),t.current.lanes=s,fl(t,s,r),Qt(t,r),t}function rd(t,e,n,r){var s=e.current,i=Ot(),o=Gr(s);return n=Qw(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(s,e,o),t!==null&&(Rn(t,s,o,i),Cc(t,s,o)),o}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function k_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Om(t,e){k_(t,e),(t=t.alternate)&&k_(t,e)}function Kk(){return null}var Xw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vm(t){this._internalRoot=t}sd.prototype.render=Vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));rd(t,e,null,null)};sd.prototype.unmount=Vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zs(function(){rd(null,t,null,null)}),e[dr]=null}};function sd(t){this._internalRoot=t}sd.prototype.unstable_scheduleHydration=function(t){if(t){var e=kb();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&Rb(t)}};function Fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function N_(){}function Qk(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=fu(o);i.call(u)}}var o=Yw(e,r,t,0,null,!1,!1,"",N_);return t._reactRootContainer=o,t[dr]=o.current,La(t.nodeType===8?t.parentNode:t),zs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=fu(c);a.call(u)}}var c=Mm(t,0,!1,null,null,!1,!1,"",N_);return t._reactRootContainer=c,t[dr]=c.current,La(t.nodeType===8?t.parentNode:t),zs(function(){rd(e,c,n,r)}),c}function od(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var c=fu(o);a.call(c)}}rd(e,o,t,s)}else o=Qk(n,e,t,s,r);return fu(o)}Cb=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(sm(e,n|1),Qt(e,qe()),!(me&6)&&(Wi=qe()+500,ms()))}break;case 13:zs(function(){var r=hr(t,1);if(r!==null){var s=Ot();Rn(r,t,1,s)}}),Om(t,1)}};im=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Ot();Rn(e,t,134217728,n)}Om(t,134217728)}};Ib=function(t){if(t.tag===13){var e=Gr(t),n=hr(t,e);if(n!==null){var r=Ot();Rn(n,t,e,r)}Om(t,e)}};kb=function(){return be};Nb=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};xf=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Yu(r);if(!s)throw Error(B(90));ob(r),ff(r,s)}}}break;case"textarea":lb(t,n);break;case"select":e=n.value,e!=null&&Ii(t,!!n.multiple,e,!1)}};mb=Pm;gb=zs;var Yk={usingClientEntryPoint:!1,Events:[ml,_i,Yu,fb,pb,Pm]},zo={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xk={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vb(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||Kk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Gu=uc.inject(Xk),Hn=uc}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yk;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(B(200));return qk(t,e,null,n)};an.createRoot=function(t,e){if(!Fm(t))throw Error(B(299));var n=!1,r="",s=Xw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Mm(t,1,!1,null,null,n,!1,r,s),t[dr]=e.current,La(t.nodeType===8?t.parentNode:t),new Vm(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=vb(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return zs(t)};an.hydrate=function(t,e,n){if(!id(e))throw Error(B(200));return od(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Fm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Xw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yw(e,null,t,1,n??null,s,!1,i,o),t[dr]=e.current,La(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new sd(e)};an.render=function(t,e,n){if(!id(e))throw Error(B(200));return od(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!id(t))throw Error(B(40));return t._reactRootContainer?(zs(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};an.unstable_batchedUpdates=Pm;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!id(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return od(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function Jw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jw)}catch(t){console.error(t)}}Jw(),Jx.exports=an;var Jk=Jx.exports,R_=Jk;of.createRoot=R_.createRoot,of.hydrateRoot=R_.hydrateRoot;const Zk="modulepreload",eN=function(t){return"/bbl-legends/"+t},A_={},tN=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=eN(c),c in A_)return;A_[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Zk,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((m,y)=>{f.addEventListener("load",m),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};function nN(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const u=async(f=!0)=>{await c};async function h(){if("serviceWorker"in navigator){if(a=await tN(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/bbl-legends/sw.js",{scope:"/bbl-legends/",type:"classic"})).catch(f=>{o==null||o(f)}),!a)return;a.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),a.addEventListener("installed",f=>{f.isUpdate||r==null||r()}),a.register({immediate:e}).then(f=>{i?i("/bbl-legends/sw.js",f):s==null||s(f)}).catch(f=>{o==null||o(f)})}}return c=h(),u}let rN={data:""},sN=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||rN},iN=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,oN=/\/\*[^]*?\*\/|  +/g,P_=/\n+/g,jr=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?jr(o,i):i+"{"+jr(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=jr(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=jr.p?jr.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},er={},Zw=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Zw(t[n]);return e}return t},aN=(t,e,n,r,s)=>{let i=Zw(t),o=er[i]||(er[i]=(c=>{let u=0,h=11;for(;u<c.length;)h=101*h+c.charCodeAt(u++)>>>0;return"go"+h})(i));if(!er[o]){let c=i!==t?t:(u=>{let h,f,m=[{}];for(;h=iN.exec(u.replace(oN,""));)h[4]?m.shift():h[3]?(f=h[3].replace(P_," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(P_," ").trim();return m[0]})(t);er[o]=jr(s?{["@keyframes "+o]:c}:c,n?"":"."+o)}let a=n&&er.g?er.g:null;return n&&(er.g=er[o]),((c,u,h,f)=>{f?u.data=u.data.replace(f,c):u.data.indexOf(c)===-1&&(u.data=h?c+u.data:u.data+c)})(er[o],e,r,a),o},lN=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=c?"."+c:a&&typeof a=="object"?a.props?"":jr(a,""):a===!1?"":a}return r+s+(o??"")},"");function ad(t){let e=this||{},n=t.call?t(e.p):t;return aN(n.unshift?n.raw?lN(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,sN(e.target),e.g,e.o,e.k)}let e1,Zf,ep;ad.bind({g:1});let pr=ad.bind({k:1});function cN(t,e,n,r){jr.p=e,e1=t,Zf=n,ep=r}function gs(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),c=a.className||s.className;n.p=Object.assign({theme:Zf&&Zf()},a),n.o=/ *go\d+/.test(c),a.className=ad.apply(n,r)+(c?" "+c:"");let u=t;return t[0]&&(u=a.as||t,delete a.as),ep&&u[0]&&ep(a),e1(u,a)}return s}}var uN=t=>typeof t=="function",pu=(t,e)=>uN(t)?t(e):t,dN=(()=>{let t=0;return()=>(++t).toString()})(),t1=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),hN=20,Um="default",n1=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return n1(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Dc=[],r1={toasts:[],pausedAt:void 0,settings:{toastLimit:hN}},zn={},s1=(t,e=Um)=>{zn[e]=n1(zn[e]||r1,t),Dc.forEach(([n,r])=>{n===e&&r(zn[e])})},i1=t=>Object.keys(zn).forEach(e=>s1(t,e)),fN=t=>Object.keys(zn).find(e=>zn[e].toasts.some(n=>n.id===t)),ld=(t=Um)=>e=>{s1(e,t)},pN={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mN=(t={},e=Um)=>{let[n,r]=R.useState(zn[e]||r1),s=R.useRef(zn[e]);R.useEffect(()=>(s.current!==zn[e]&&r(zn[e]),Dc.push([e,r]),()=>{let o=Dc.findIndex(([a])=>a===e);o>-1&&Dc.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,c,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((c=t[o.type])==null?void 0:c.duration)||(t==null?void 0:t.duration)||pN[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:i}},gN=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||dN()}),yl=t=>(e,n)=>{let r=gN(e,t,n);return ld(r.toasterId||fN(r.id))({type:2,toast:r}),r.id},nt=(t,e)=>yl("blank")(t,e);nt.error=yl("error");nt.success=yl("success");nt.loading=yl("loading");nt.custom=yl("custom");nt.dismiss=(t,e)=>{let n={type:3,toastId:t};e?ld(e)(n):i1(n)};nt.dismissAll=t=>nt.dismiss(void 0,t);nt.remove=(t,e)=>{let n={type:4,toastId:t};e?ld(e)(n):i1(n)};nt.removeAll=t=>nt.remove(void 0,t);nt.promise=(t,e,n)=>{let r=nt.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?pu(e.success,s):void 0;return i?nt.success(i,{id:r,...n,...n==null?void 0:n.success}):nt.dismiss(r),s}).catch(s=>{let i=e.error?pu(e.error,s):void 0;i?nt.error(i,{id:r,...n,...n==null?void 0:n.error}):nt.dismiss(r)}),t};var yN=1e3,_N=(t,e="default")=>{let{toasts:n,pausedAt:r}=mN(t,e),s=R.useRef(new Map).current,i=R.useCallback((f,m=yN)=>{if(s.has(f))return;let y=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},m);s.set(f,y)},[]);R.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(y=>{if(y.duration===1/0)return;let S=(y.duration||0)+y.pauseDuration-(f-y.createdAt);if(S<0){y.visible&&nt.dismiss(y.id);return}return setTimeout(()=>nt.dismiss(y.id,e),S)});return()=>{m.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=R.useCallback(ld(e),[e]),a=R.useCallback(()=>{o({type:5,time:Date.now()})},[o]),c=R.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),u=R.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=R.useCallback((f,m)=>{let{reverseOrder:y=!1,gutter:S=8,defaultPosition:I}=m||{},k=n.filter(w=>(w.position||I)===(f.position||I)&&w.height),b=k.findIndex(w=>w.id===f.id),v=k.filter((w,D)=>D<b&&w.visible).length;return k.filter(w=>w.visible).slice(...y?[v+1]:[0,v]).reduce((w,D)=>w+(D.height||0)+S,0)},[n]);return R.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let m=s.get(f.id);m&&(clearTimeout(m),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:c,startPause:a,endPause:u,calculateOffset:h}}},vN=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,xN=pr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,bN=pr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,wN=gs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xN} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${bN} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,EN=pr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,SN=gs("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${EN} 1s linear infinite;
`,TN=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,CN=pr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,IN=gs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${TN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${CN} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,kN=gs("div")`
  position: absolute;
`,NN=gs("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,RN=pr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,AN=gs("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${RN} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,PN=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?R.createElement(AN,null,e):e:n==="blank"?null:R.createElement(NN,null,R.createElement(SN,{...r}),n!=="loading"&&R.createElement(kN,null,n==="error"?R.createElement(wN,{...r}):R.createElement(IN,{...r})))},DN=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,jN=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,LN="0%{opacity:0;} 100%{opacity:1;}",MN="0%{opacity:1;} 100%{opacity:0;}",ON=gs("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,VN=gs("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,FN=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=t1()?[LN,MN]:[DN(n),jN(n)];return{animation:e?`${pr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${pr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},UN=R.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?FN(t.position||e||"top-center",t.visible):{opacity:0},i=R.createElement(PN,{toast:t}),o=R.createElement(VN,{...t.ariaProps},pu(t.message,t));return R.createElement(ON,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):R.createElement(R.Fragment,null,i,o))});cN(R.createElement);var BN=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=R.useCallback(o=>{if(o){let a=()=>{let c=o.getBoundingClientRect().height;r(t,c)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return R.createElement("div",{ref:i,className:e,style:n},s)},$N=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:t1()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},zN=ad`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,dc=16,WN=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:c,handlers:u}=_N(n,i);return R.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:dc,left:dc,right:dc,bottom:dc,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(h=>{let f=h.position||e,m=u.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),y=$N(f,m);return R.createElement(BN,{id:h.id,key:h.id,onHeightUpdate:u.updateHeight,className:h.visible?zN:"",style:y},h.type==="custom"?pu(h.message,h):s?s(h):R.createElement(UN,{toast:h,position:f}))}))},se=nt;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D_="popstate";function j_(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function HN(t={}){function e(r,s){var u;let i=(u=s.state)==null?void 0:u.masked,{pathname:o,search:a,hash:c}=i||r.location;return tp("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default",i?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,s){return typeof s=="string"?s:Wa(s)}return qN(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GN(){return Math.random().toString(36).substring(2,10)}function L_(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function tp(t,e,n=null,r,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?oo(e):e,state:n,key:e&&e.key||r||GN(),unstable_mask:s}}function Wa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function oo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function qN(t,e,n,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a="POP",c=null,u=h();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function h(){return(o.state||{idx:null}).idx}function f(){a="POP";let k=h(),b=k==null?null:k-u;u=k,c&&c({action:a,location:I.location,delta:b})}function m(k,b){a="PUSH";let v=j_(k)?k:tp(I.location,k,b);u=h()+1;let w=L_(v,u),D=I.createHref(v.unstable_mask||v);try{o.pushState(w,"",D)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(D)}i&&c&&c({action:a,location:I.location,delta:1})}function y(k,b){a="REPLACE";let v=j_(k)?k:tp(I.location,k,b);u=h();let w=L_(v,u),D=I.createHref(v.unstable_mask||v);o.replaceState(w,"",D),i&&c&&c({action:a,location:I.location,delta:0})}function S(k){return KN(k)}let I={get action(){return a},get location(){return t(s,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(D_,f),c=k,()=>{s.removeEventListener(D_,f),c=null}},createHref(k){return e(s,k)},createURL:S,encodeLocation(k){let b=S(k);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:m,replace:y,go(k){return o.go(k)}};return I}function KN(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Wa(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function o1(t,e,n="/"){return QN(t,e,n,!1)}function QN(t,e,n,r){let s=typeof e=="string"?oo(e):e,i=mr(s.pathname||"/",n);if(i==null)return null;let o=a1(t);YN(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let u=aR(i);a=iR(o[c],u,r)}return a}function a1(t,e=[],n=[],r="",s=!1){let i=(o,a,c=s,u)=>{let h={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&c)return;Oe(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let f=qn([r,h.relativePath]),m=n.concat(h);o.children&&o.children.length>0&&(Oe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),a1(o.children,e,m,f,c)),!(o.path==null&&!o.index)&&e.push({path:f,score:rR(f,o.index),routesMeta:m})};return t.forEach((o,a)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,a);else for(let u of l1(o.path))i(o,a,!0,u)}),e}function l1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=l1(r.join("/")),a=[];return a.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function YN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var XN=/^:[\w-]+$/,JN=3,ZN=2,eR=1,tR=10,nR=-2,M_=t=>t==="*";function rR(t,e){let n=t.split("/"),r=n.length;return n.some(M_)&&(r+=nR),e&&(r+=ZN),n.filter(s=>!M_(s)).reduce((s,i)=>s+(XN.test(i)?JN:i===""?eR:tR),r)}function sR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function iR(t,e,n=!1){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",f=mu({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),m=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=mu({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:qn([i,f.pathname]),pathnameBase:dR(qn([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=qn([i,f.pathnameBase]))}return o}function mu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=oR(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:f},m)=>{if(h==="*"){let S=a[m]||"";o=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const y=a[m];return f&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:t}}function oR(t,e=!1,n=!0){xn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c,u,h)=>{if(r.push({paramName:a,isOptional:c!=null}),c){let f=h.charAt(u+o.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function aR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function mr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var lR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function cR(t,e="/"){let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?oo(t):t,i;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?i=O_(n.substring(1),"/"):i=O_(n,e)):i=e,{pathname:i,search:hR(r),hash:fR(s)}}function O_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Mh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bm(t){let e=uR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function cd(t,e,n,r=!1){let s;typeof t=="string"?s=oo(t):(s={...t},Oe(!s.pathname||!s.pathname.includes("?"),Mh("?","pathname","search",s)),Oe(!s.pathname||!s.pathname.includes("#"),Mh("#","pathname","hash",s)),Oe(!s.search||!s.search.includes("#"),Mh("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let c=cR(s,a),u=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}var qn=t=>t.join("/").replace(/\/\/+/g,"/"),dR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,pR=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function mR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function gR(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var c1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function u1(t,e){let n=t;if(typeof n!="string"||!lR.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,s=!1;if(c1)try{let i=new URL(window.location.href),o=n.startsWith("//")?new URL(i.protocol+n):new URL(n),a=mr(o.pathname,e);o.origin===i.origin&&a!=null?n=a+o.search+o.hash:s=!0}catch{xn(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:s,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var d1=["POST","PUT","PATCH","DELETE"];new Set(d1);var yR=["GET",...d1];new Set(yR);var ao=R.createContext(null);ao.displayName="DataRouter";var ud=R.createContext(null);ud.displayName="DataRouterState";var _R=R.createContext(!1),h1=R.createContext({isTransitioning:!1});h1.displayName="ViewTransition";var vR=R.createContext(new Map);vR.displayName="Fetchers";var xR=R.createContext(null);xR.displayName="Await";var cn=R.createContext(null);cn.displayName="Navigation";var _l=R.createContext(null);_l.displayName="Location";var Ln=R.createContext({outlet:null,matches:[],isDataRoute:!1});Ln.displayName="Route";var $m=R.createContext(null);$m.displayName="RouteError";var f1="REACT_ROUTER_ERROR",bR="REDIRECT",wR="ROUTE_ERROR_RESPONSE";function ER(t){if(t.startsWith(`${f1}:${bR}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function SR(t){if(t.startsWith(`${f1}:${wR}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new pR(e.status,e.statusText,e.data)}catch{}}function TR(t,{relative:e}={}){Oe(lo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=R.useContext(cn),{hash:s,pathname:i,search:o}=vl(t,{relative:e}),a=i;return n!=="/"&&(a=i==="/"?n:qn([n,i])),r.createHref({pathname:a,search:o,hash:s})}function lo(){return R.useContext(_l)!=null}function Mn(){return Oe(lo(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(_l).location}var p1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function m1(t){R.useContext(cn).static||R.useLayoutEffect(t)}function Xt(){let{isDataRoute:t}=R.useContext(Ln);return t?FR():CR()}function CR(){Oe(lo(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(ao),{basename:e,navigator:n}=R.useContext(cn),{matches:r}=R.useContext(Ln),{pathname:s}=Mn(),i=JSON.stringify(Bm(r)),o=R.useRef(!1);return m1(()=>{o.current=!0}),R.useCallback((c,u={})=>{if(xn(o.current,p1),!o.current)return;if(typeof c=="number"){n.go(c);return}let h=cd(c,JSON.parse(i),s,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:qn([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,i,s,t])}R.createContext(null);function IR(){let{matches:t}=R.useContext(Ln),e=t[t.length-1];return e?e.params:{}}function vl(t,{relative:e}={}){let{matches:n}=R.useContext(Ln),{pathname:r}=Mn(),s=JSON.stringify(Bm(n));return R.useMemo(()=>cd(t,JSON.parse(s),r,e==="path"),[t,s,r,e])}function kR(t,e){return g1(t,e)}function g1(t,e,n){var k;Oe(lo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=R.useContext(cn),{matches:s}=R.useContext(Ln),i=s[s.length-1],o=i?i.params:{},a=i?i.pathname:"/",c=i?i.pathnameBase:"/",u=i&&i.route;{let b=u&&u.path||"";_1(a,!u||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let h=Mn(),f;if(e){let b=typeof e=="string"?oo(e):e;Oe(c==="/"||((k=b.pathname)==null?void 0:k.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${b.pathname}" was given in the \`location\` prop.`),f=b}else f=h;let m=f.pathname||"/",y=m;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let S=o1(t,{pathname:y});xn(u||S!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),xn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=DR(S&&S.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:qn([c,r.encodeLocation?r.encodeLocation(b.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:qn([c,r.encodeLocation?r.encodeLocation(b.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathnameBase])})),s,n);return e&&I?R.createElement(_l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},I):I}function NR(){let t=VR(),e=mR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:i},"ErrorBoundary")," or"," ",R.createElement("code",{style:i},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:s},n):null,o)}var RR=R.createElement(NR,null),y1=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=SR(t.digest);n&&(t=n)}let e=t!==void 0?R.createElement(Ln.Provider,{value:this.props.routeContext},R.createElement($m.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?R.createElement(AR,{error:t},e):e}};y1.contextType=_R;var Oh=new WeakMap;function AR({children:t,error:e}){let{basename:n}=R.useContext(cn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=ER(e.digest);if(r){let s=Oh.get(e);if(s)throw s;let i=u1(r.location,n);if(c1&&!Oh.get(e))if(i.isExternal||r.reloadDocument)window.location.href=i.absoluteURL||i.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:r.replace}));throw Oh.set(e,o),o}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return t}function PR({routeContext:t,match:e,children:n}){let r=R.useContext(ao);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(Ln.Provider,{value:t},n)}function DR(t,e=[],n){let r=n==null?void 0:n.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let s=t,i=r==null?void 0:r.errors;if(i!=null){let h=s.findIndex(f=>f.route.id&&(i==null?void 0:i[f.route.id])!==void 0);Oe(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let o=!1,a=-1;if(n&&r){o=r.renderFallback;for(let h=0;h<s.length;h++){let f=s[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(a=h),f.route.id){let{loaderData:m,errors:y}=r,S=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!y||y[f.route.id]===void 0);if(f.route.lazy||S){n.isStatic&&(o=!0),a>=0?s=s.slice(0,a+1):s=[s[0]];break}}}}let c=n==null?void 0:n.onError,u=r&&c?(h,f)=>{var m,y;c(h,{location:r.location,params:((y=(m=r.matches)==null?void 0:m[0])==null?void 0:y.params)??{},unstable_pattern:gR(r.matches),errorInfo:f})}:void 0;return s.reduceRight((h,f,m)=>{let y,S=!1,I=null,k=null;r&&(y=i&&f.route.id?i[f.route.id]:void 0,I=f.route.errorElement||RR,o&&(a<0&&m===0?(_1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):a===m&&(S=!0,k=f.route.hydrateFallbackElement||null)));let b=e.concat(s.slice(0,m+1)),v=()=>{let w;return y?w=I:S?w=k:f.route.Component?w=R.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=h,R.createElement(PR,{match:f,routeContext:{outlet:h,matches:b,isDataRoute:r!=null},children:w})};return r&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?R.createElement(y1,{location:r.location,revalidation:r.revalidation,component:I,error:y,children:v(),routeContext:{outlet:null,matches:b,isDataRoute:!0},onError:u}):v()},null)}function zm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jR(t){let e=R.useContext(ao);return Oe(e,zm(t)),e}function LR(t){let e=R.useContext(ud);return Oe(e,zm(t)),e}function MR(t){let e=R.useContext(Ln);return Oe(e,zm(t)),e}function Wm(t){let e=MR(t),n=e.matches[e.matches.length-1];return Oe(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function OR(){return Wm("useRouteId")}function VR(){var r;let t=R.useContext($m),e=LR("useRouteError"),n=Wm("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function FR(){let{router:t}=jR("useNavigate"),e=Wm("useNavigate"),n=R.useRef(!1);return m1(()=>{n.current=!0}),R.useCallback(async(s,i={})=>{xn(n.current,p1),n.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:e,...i}))},[t,e])}var V_={};function _1(t,e,n){!e&&!V_[t]&&(V_[t]=!0,xn(!1,n))}R.memo(UR);function UR({routes:t,future:e,state:n,isStatic:r,onError:s}){return g1(t,void 0,{state:n,isStatic:r,onError:s})}function Hm({to:t,replace:e,state:n,relative:r}){Oe(lo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=R.useContext(cn);xn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=R.useContext(Ln),{pathname:o}=Mn(),a=Xt(),c=cd(t,Bm(i),o,r==="path"),u=JSON.stringify(c);return R.useEffect(()=>{a(JSON.parse(u),{replace:e,state:n,relative:r})},[a,u,r,e,n]),null}function un(t){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BR({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:s,static:i=!1,unstable_useTransitions:o}){Oe(!lo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),c=R.useMemo(()=>({basename:a,navigator:s,static:i,unstable_useTransitions:o,future:{}}),[a,s,i,o]);typeof n=="string"&&(n=oo(n));let{pathname:u="/",search:h="",hash:f="",state:m=null,key:y="default",unstable_mask:S}=n,I=R.useMemo(()=>{let k=mr(u,a);return k==null?null:{location:{pathname:k,search:h,hash:f,state:m,key:y,unstable_mask:S},navigationType:r}},[a,u,h,f,m,y,r,S]);return xn(I!=null,`<Router basename="${a}"> is not able to match the URL "${u}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:R.createElement(cn.Provider,{value:c},R.createElement(_l.Provider,{children:e,value:I}))}function $R({children:t,location:e}){return kR(np(t),e)}function np(t,e=[]){let n=[];return R.Children.forEach(t,(r,s)=>{if(!R.isValidElement(r))return;let i=[...e,s];if(r.type===R.Fragment){n.push.apply(n,np(r.props.children,i));return}Oe(r.type===un,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=np(r.props.children,i)),n.push(o)}),n}var jc="get",Lc="application/x-www-form-urlencoded";function dd(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function zR(t){return dd(t)&&t.tagName.toLowerCase()==="button"}function WR(t){return dd(t)&&t.tagName.toLowerCase()==="form"}function HR(t){return dd(t)&&t.tagName.toLowerCase()==="input"}function GR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qR(t,e){return t.button===0&&(!e||e==="_self")&&!GR(t)}function rp(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function KR(t,e){let n=rp(t);return e&&e.forEach((r,s)=>{n.has(s)||e.getAll(s).forEach(i=>{n.append(s,i)})}),n}var hc=null;function QR(){if(hc===null)try{new FormData(document.createElement("form"),0),hc=!1}catch{hc=!0}return hc}var YR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vh(t){return t!=null&&!YR.has(t)?(xn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lc}"`),null):t}function XR(t,e){let n,r,s,i,o;if(WR(t)){let a=t.getAttribute("action");r=a?mr(a,e):null,n=t.getAttribute("method")||jc,s=Vh(t.getAttribute("enctype"))||Lc,i=new FormData(t)}else if(zR(t)||HR(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||a.getAttribute("action");if(r=c?mr(c,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||jc,s=Vh(t.getAttribute("formenctype"))||Vh(a.getAttribute("enctype"))||Lc,i=new FormData(a,t),!QR()){let{name:u,type:h,value:f}=t;if(h==="image"){let m=u?`${u}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else u&&i.append(u,f)}}else{if(dd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=jc,r=null,s=Lc,o=t}return i&&s==="text/plain"&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function JR(t,e,n,r){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${r}`:s.pathname=`${s.pathname}.${r}`:s.pathname==="/"?s.pathname=`_root.${r}`:e&&mr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function ZR(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function e2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function t2(t,e,n){let r=await Promise.all(t.map(async s=>{let i=e.routes[s.route.id];if(i){let o=await ZR(i,n);return o.links?o.links():[]}return[]}));return i2(r.flat(1).filter(e2).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function F_(t,e,n,r,s,i){let o=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,a=(c,u)=>{var h;return n[u].pathname!==c.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return i==="assets"?e.filter((c,u)=>o(c,u)||a(c,u)):i==="data"?e.filter((c,u)=>{var f;let h=r.routes[c.route.id];if(!h||!h.hasLoader)return!1;if(o(c,u)||a(c,u))return!0;if(c.route.shouldRevalidate){let m=c.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function n2(t,e,{includeHydrateFallback:n}={}){return r2(t.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function r2(t){return[...new Set(t)]}function s2(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function i2(t,e){let n=new Set;return new Set(e),t.reduce((r,s)=>{let i=JSON.stringify(s2(s));return n.has(i)||(n.add(i),r.push({key:i,link:s})),r},[])}function v1(){let t=R.useContext(ao);return Gm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function o2(){let t=R.useContext(ud);return Gm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var qm=R.createContext(void 0);qm.displayName="FrameworkContext";function x1(){let t=R.useContext(qm);return Gm(t,"You must render this element inside a <HydratedRouter> element"),t}function a2(t,e){let n=R.useContext(qm),[r,s]=R.useState(!1),[i,o]=R.useState(!1),{onFocus:a,onBlur:c,onMouseEnter:u,onMouseLeave:h,onTouchStart:f}=e,m=R.useRef(null);R.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let I=b=>{b.forEach(v=>{o(v.isIntersecting)})},k=new IntersectionObserver(I,{threshold:.5});return m.current&&k.observe(m.current),()=>{k.disconnect()}}},[t]),R.useEffect(()=>{if(r){let I=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(I)}}},[r]);let y=()=>{s(!0)},S=()=>{s(!1),o(!1)};return n?t!=="intent"?[i,m,{}]:[i,m,{onFocus:Wo(a,y),onBlur:Wo(c,S),onMouseEnter:Wo(u,y),onMouseLeave:Wo(h,S),onTouchStart:Wo(f,y)}]:[!1,m,{}]}function Wo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function l2({page:t,...e}){let{router:n}=v1(),r=R.useMemo(()=>o1(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?R.createElement(u2,{page:t,matches:r,...e}):null}function c2(t){let{manifest:e,routeModules:n}=x1(),[r,s]=R.useState([]);return R.useEffect(()=>{let i=!1;return t2(t,e,n).then(o=>{i||s(o)}),()=>{i=!0}},[t,e,n]),r}function u2({page:t,matches:e,...n}){let r=Mn(),{future:s,manifest:i,routeModules:o}=x1(),{basename:a}=v1(),{loaderData:c,matches:u}=o2(),h=R.useMemo(()=>F_(t,e,u,i,r,"data"),[t,e,u,i,r]),f=R.useMemo(()=>F_(t,e,u,i,r,"assets"),[t,e,u,i,r]),m=R.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let I=new Set,k=!1;if(e.forEach(v=>{var D;let w=i.routes[v.route.id];!w||!w.hasLoader||(!h.some(j=>j.route.id===v.route.id)&&v.route.id in c&&((D=o[v.route.id])!=null&&D.shouldRevalidate)||w.hasClientLoader?k=!0:I.add(v.route.id))}),I.size===0)return[];let b=JR(t,a,s.unstable_trailingSlashAwareDataRequests,"data");return k&&I.size>0&&b.searchParams.set("_routes",e.filter(v=>I.has(v.route.id)).map(v=>v.route.id).join(",")),[b.pathname+b.search]},[a,s.unstable_trailingSlashAwareDataRequests,c,r,i,h,e,t,o]),y=R.useMemo(()=>n2(f,i),[f,i]),S=c2(f);return R.createElement(R.Fragment,null,m.map(I=>R.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...n})),y.map(I=>R.createElement("link",{key:I,rel:"modulepreload",href:I,...n})),S.map(({key:I,link:k})=>R.createElement("link",{key:I,nonce:n.nonce,...k,crossOrigin:k.crossOrigin??n.crossOrigin})))}function d2(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var h2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{h2&&(window.__reactRouterVersion="7.13.1")}catch{}function f2({basename:t,children:e,unstable_useTransitions:n,window:r}){let s=R.useRef();s.current==null&&(s.current=HN({window:r,v5Compat:!0}));let i=s.current,[o,a]=R.useState({action:i.action,location:i.location}),c=R.useCallback(u=>{n===!1?a(u):R.startTransition(()=>a(u))},[n]);return R.useLayoutEffect(()=>i.listen(c),[i,c]),R.createElement(BR,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:i,unstable_useTransitions:n})}var b1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w1=R.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:s,reloadDocument:i,replace:o,unstable_mask:a,state:c,target:u,to:h,preventScrollReset:f,viewTransition:m,unstable_defaultShouldRevalidate:y,...S},I){let{basename:k,navigator:b,unstable_useTransitions:v}=R.useContext(cn),w=typeof h=="string"&&b1.test(h),D=u1(h,k);h=D.to;let j=TR(h,{relative:s}),O=Mn(),E=null;if(a){let ye=cd(a,[],O.unstable_mask?O.unstable_mask.pathname:"/",!0);k!=="/"&&(ye.pathname=ye.pathname==="/"?k:qn([k,ye.pathname])),E=b.createHref(ye)}let[_,T,A]=a2(r,S),C=y2(h,{replace:o,unstable_mask:a,state:c,target:u,preventScrollReset:f,relative:s,viewTransition:m,unstable_defaultShouldRevalidate:y,unstable_useTransitions:v});function P(ye){e&&e(ye),ye.defaultPrevented||C(ye)}let N=!(D.isExternal||i),ne=R.createElement("a",{...S,...A,href:(N?E:void 0)||D.absoluteURL||j,onClick:N?P:e,ref:d2(I,T),target:u,"data-discover":!w&&n==="render"?"true":void 0});return _&&!w?R.createElement(R.Fragment,null,ne,R.createElement(l2,{page:j})):ne});w1.displayName="Link";var p2=R.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:s=!1,style:i,to:o,viewTransition:a,children:c,...u},h){let f=vl(o,{relative:u.relative}),m=Mn(),y=R.useContext(ud),{navigator:S,basename:I}=R.useContext(cn),k=y!=null&&w2(f)&&a===!0,b=S.encodeLocation?S.encodeLocation(f).pathname:f.pathname,v=m.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(v=v.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&I&&(w=mr(w,I)||w);const D=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let j=v===b||!s&&v.startsWith(b)&&v.charAt(D)==="/",O=w!=null&&(w===b||!s&&w.startsWith(b)&&w.charAt(b.length)==="/"),E={isActive:j,isPending:O,isTransitioning:k},_=j?e:void 0,T;typeof r=="function"?T=r(E):T=[r,j?"active":null,O?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let A=typeof i=="function"?i(E):i;return R.createElement(w1,{...u,"aria-current":_,className:T,ref:h,style:A,to:o,viewTransition:a},typeof c=="function"?c(E):c)});p2.displayName="NavLink";var m2=R.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:s,state:i,method:o=jc,action:a,onSubmit:c,relative:u,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:m,...y},S)=>{let{unstable_useTransitions:I}=R.useContext(cn),k=x2(),b=b2(a,{relative:u}),v=o.toLowerCase()==="get"?"get":"post",w=typeof a=="string"&&b1.test(a),D=j=>{if(c&&c(j),j.defaultPrevented)return;j.preventDefault();let O=j.nativeEvent.submitter,E=(O==null?void 0:O.getAttribute("formmethod"))||o,_=()=>k(O||j.currentTarget,{fetcherKey:e,method:E,navigate:n,replace:s,state:i,relative:u,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:m});I&&n!==!1?R.startTransition(()=>_()):_()};return R.createElement("form",{ref:S,method:v,action:b,onSubmit:r?c:D,...y,"data-discover":!w&&t==="render"?"true":void 0})});m2.displayName="Form";function g2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E1(t){let e=R.useContext(ao);return Oe(e,g2(t)),e}function y2(t,{target:e,replace:n,unstable_mask:r,state:s,preventScrollReset:i,relative:o,viewTransition:a,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}={}){let h=Xt(),f=Mn(),m=vl(t,{relative:o});return R.useCallback(y=>{if(qR(y,e)){y.preventDefault();let S=n!==void 0?n:Wa(f)===Wa(m),I=()=>h(t,{replace:S,unstable_mask:r,state:s,preventScrollReset:i,relative:o,viewTransition:a,unstable_defaultShouldRevalidate:c});u?R.startTransition(()=>I()):I()}},[f,h,m,n,r,s,e,t,i,o,a,c,u])}function hd(t){xn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=R.useRef(rp(t)),n=R.useRef(!1),r=Mn(),s=R.useMemo(()=>KR(r.search,n.current?null:e.current),[r.search]),i=Xt(),o=R.useCallback((a,c)=>{const u=rp(typeof a=="function"?a(new URLSearchParams(s)):a);n.current=!0,i("?"+u,c)},[i,s]);return[s,o]}var _2=0,v2=()=>`__${String(++_2)}__`;function x2(){let{router:t}=E1("useSubmit"),{basename:e}=R.useContext(cn),n=OR(),r=t.fetch,s=t.navigate;return R.useCallback(async(i,o={})=>{let{action:a,method:c,encType:u,formData:h,body:f}=XR(i,e);if(o.navigate===!1){let m=o.fetcherKey||v2();await r(m,n,o.action||a,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||u,flushSync:o.flushSync})}else await s(o.action||a,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,s,e,n])}function b2(t,{relative:e}={}){let{basename:n}=R.useContext(cn),r=R.useContext(Ln);Oe(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...vl(t||".",{relative:e})},o=Mn();if(t==null){i.search=o.search;let a=new URLSearchParams(i.search),c=a.getAll("index");if(c.some(h=>h==="")){a.delete("index"),c.filter(f=>f).forEach(f=>a.append("index",f));let h=a.toString();i.search=h?`?${h}`:""}}return(!t||t===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:qn([n,i.pathname])),Wa(i)}function w2(t,{relative:e}={}){let n=R.useContext(h1);Oe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=E1("useViewTransitionState"),s=vl(t,{relative:e});if(!n.isTransitioning)return!1;let i=mr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=mr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mu(s.pathname,o)!=null||mu(s.pathname,i)!=null}const U_=t=>{let e;const n=new Set,r=(u,h)=>{const f=typeof u=="function"?u(e):u;if(!Object.is(f,e)){const m=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(y=>y(e,m))}},s=()=>e,a={setState:r,getState:s,getInitialState:()=>c,subscribe:u=>(n.add(u),()=>n.delete(u))},c=e=t(r,s,a);return a},E2=t=>t?U_(t):U_,S2=t=>t;function T2(t,e=S2){const n=Xo.useSyncExternalStore(t.subscribe,Xo.useCallback(()=>e(t.getState()),[t,e]),Xo.useCallback(()=>e(t.getInitialState()),[t,e]));return Xo.useDebugValue(n),n}const B_=t=>{const e=E2(t),n=r=>T2(e,r);return Object.assign(n,e),n},fd=t=>t?B_(t):B_,C2=()=>{};var $_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw co(e)},co=function(t){return new Error("Firebase Database ("+S1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},I2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[h],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):I2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new k2;const m=i<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const S=u<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class k2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C1=function(t){const e=T1(t);return Km.encodeByteArray(e,!0)},gu=function(t){return C1(t).replace(/\./g,"")},sp=function(t){try{return Km.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t){return I1(void 0,t)}function I1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!R2(n)||(t[n]=I1(t[n],e[n]));return t}function R2(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=()=>A2().__FIREBASE_DEFAULTS__,D2=()=>{if(typeof process>"u"||typeof $_>"u")return;const t=$_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},j2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sp(t[1]);return e&&JSON.parse(e)},Qm=()=>{try{return C2()||P2()||D2()||j2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},L2=t=>{var e,n;return(n=(e=Qm())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},k1=t=>{const e=L2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N1=()=>{var t;return(t=Qm())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function R1(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),""].join(".")}const ya={};function M2(){const t={prod:[],emulator:[]};for(const e of Object.keys(ya))ya[e]?t.emulator.push(e):t.prod.push(e);return t}function O2(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let z_=!1;function P1(t,e){if(typeof window>"u"||typeof document>"u"||!bl(window.location.host)||ya[t]===e||ya[t]||z_)return;ya[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=M2().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{z_=!0,o()},m}function h(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=O2(r),y=n("text"),S=document.getElementById(y)||document.createElement("span"),I=n("learnmore"),k=document.getElementById(I)||document.createElement("a"),b=n("preprendIcon"),v=document.getElementById(b)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const w=m.element;a(w),h(k,I);const D=u();c(v,b),w.append(v,S,k,D),document.body.appendChild(w)}i?(S.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function j1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D1())}function V2(){var e;const t=(e=Qm())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function F2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U2(){return S1.NODE_ADMIN===!0}function B2(){return!V2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $2(){try{return typeof indexedDB=="object"}catch{return!1}}function z2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2="FirebaseError";class uo extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W2,Object.setPrototypeOf(this,uo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L1.prototype.create)}}class L1{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?H2(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new uo(s,a,r)}}function H2(t,e){return t.replace(G2,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const G2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return JSON.parse(t)}function st(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ha(sp(i[0])||""),n=Ha(sp(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},q2=function(t){const e=M1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K2=function(t){const e=M1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function W_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ga(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(H_(i)&&H_(o)){if(!Ga(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function H_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const m=(s<<5|s>>>27)+u+c+h+r[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function pd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},md=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Gi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eA(e))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ns){return this.instances.has(e)}getOptions(e=Ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Z2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ns){return this.component?this.component.multipleInstances?e:Ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z2(t){return t===Ns?void 0:t}function eA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const nA={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},rA=fe.INFO,sA={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},iA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ym{constructor(e){this.name=e,this._logLevel=rA,this._logHandler=iA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const oA=(t,e)=>e.some(n=>t instanceof n);let G_,q_;function aA(){return G_||(G_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lA(){return q_||(q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O1=new WeakMap,ip=new WeakMap,V1=new WeakMap,Fh=new WeakMap,Xm=new WeakMap;function cA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O1.set(n,t)}).catch(()=>{}),Xm.set(e,t),e}function uA(t){if(ip.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ip.set(t,e)}let op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ip.get(t);if(e==="objectStoreNames")return t.objectStoreNames||V1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dA(t){op=t(op)}function hA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uh(this),e,...n);return V1.set(r,e.sort?e.sort():[e]),Kr(r)}:lA().includes(t)?function(...e){return t.apply(Uh(this),e),Kr(O1.get(this))}:function(...e){return Kr(t.apply(Uh(this),e))}}function fA(t){return typeof t=="function"?hA(t):(t instanceof IDBTransaction&&uA(t),oA(t,aA())?new Proxy(t,op):t)}function Kr(t){if(t instanceof IDBRequest)return cA(t);if(Fh.has(t))return Fh.get(t);const e=fA(t);return e!==t&&(Fh.set(t,e),Xm.set(e,t)),e}const Uh=t=>Xm.get(t);function pA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Kr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kr(o.result),c.oldVersion,c.newVersion,Kr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const mA=["get","getKey","getAll","getAllKeys","count"],gA=["put","add","delete","clear"],Bh=new Map;function K_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=gA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Bh.set(e,i),i}dA(t=>({...t,get:(e,n,r)=>K_(e,n)||t.get(e,n,r),has:(e,n)=>!!K_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_A(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _A(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ap="@firebase/app",Q_="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Ym("@firebase/app"),vA="@firebase/app-compat",xA="@firebase/analytics-compat",bA="@firebase/analytics",wA="@firebase/app-check-compat",EA="@firebase/app-check",SA="@firebase/auth",TA="@firebase/auth-compat",CA="@firebase/database",IA="@firebase/data-connect",kA="@firebase/database-compat",NA="@firebase/functions",RA="@firebase/functions-compat",AA="@firebase/installations",PA="@firebase/installations-compat",DA="@firebase/messaging",jA="@firebase/messaging-compat",LA="@firebase/performance",MA="@firebase/performance-compat",OA="@firebase/remote-config",VA="@firebase/remote-config-compat",FA="@firebase/storage",UA="@firebase/storage-compat",BA="@firebase/firestore",$A="@firebase/ai",zA="@firebase/firestore-compat",WA="firebase",HA="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="[DEFAULT]",GA={[ap]:"fire-core",[vA]:"fire-core-compat",[bA]:"fire-analytics",[xA]:"fire-analytics-compat",[EA]:"fire-app-check",[wA]:"fire-app-check-compat",[SA]:"fire-auth",[TA]:"fire-auth-compat",[CA]:"fire-rtdb",[IA]:"fire-data-connect",[kA]:"fire-rtdb-compat",[NA]:"fire-fn",[RA]:"fire-fn-compat",[AA]:"fire-iid",[PA]:"fire-iid-compat",[DA]:"fire-fcm",[jA]:"fire-fcm-compat",[LA]:"fire-perf",[MA]:"fire-perf-compat",[OA]:"fire-rc",[VA]:"fire-rc-compat",[FA]:"fire-gcs",[UA]:"fire-gcs-compat",[BA]:"fire-fst",[zA]:"fire-fst-compat",[$A]:"fire-vertex","fire-js":"fire-js",[WA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map,qA=new Map,cp=new Map;function Y_(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qa(t){const e=t.name;if(cp.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;cp.set(e,t);for(const n of _u.values())Y_(n,t);for(const n of qA.values())Y_(n,t);return!0}function F1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function U1(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new L1("app","Firebase",KA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=HA;function $1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:lp,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qr.create("bad-app-name",{appName:String(s)});if(n||(n=N1()),!n)throw Qr.create("no-options");const i=_u.get(s);if(i){if(Ga(n,i.options)&&Ga(r,i.config))return i;throw Qr.create("duplicate-app",{appName:s})}const o=new tA(s);for(const c of cp.values())o.addComponent(c);const a=new QA(n,r,o);return _u.set(s,a),a}function z1(t=lp){const e=_u.get(t);if(!e&&t===lp&&N1())return $1();if(!e)throw Qr.create("no-app",{appName:t});return e}function Yr(t,e,n){let r=GA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(o.join(" "));return}qa(new Gi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="firebase-heartbeat-database",XA=1,Ka="firebase-heartbeat-store";let $h=null;function W1(){return $h||($h=pA(YA,XA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ka)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),$h}async function JA(t){try{const n=(await W1()).transaction(Ka),r=await n.objectStore(Ka).get(H1(t));return await n.done,r}catch(e){if(e instanceof uo)gr.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function X_(t,e){try{const r=(await W1()).transaction(Ka,"readwrite");await r.objectStore(Ka).put(e,H1(t)),await r.done}catch(n){if(n instanceof uo)gr.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function H1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=1024,eP=30;class tP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=J_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>eP){const o=sP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=J_(),{heartbeatsToSend:r,unsentEntries:s}=nP(this._heartbeatsCache.heartbeats),i=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return gr.warn(n),""}}}function J_(){return new Date().toISOString().substring(0,10)}function nP(t,e=ZA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Z_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $2()?z2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return X_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return X_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Z_(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}function sP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){qa(new Gi("platform-logger",e=>new yA(e),"PRIVATE")),qa(new Gi("heartbeat",e=>new tP(e),"PRIVATE")),Yr(ap,Q_,t),Yr(ap,Q_,"esm2020"),Yr("fire-js","")}iP("");var oP="firebase",aP="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr(oP,aP,"app");var ev={};const tv="@firebase/database",nv="1.1.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G1="";function lP(t){G1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ha(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cP(e)}}catch{}return new uP},js=q1("localStorage"),dP=q1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Ym("@firebase/database"),hP=function(){let t=1;return function(){return t++}}(),K1=function(t){const e=X2(t),n=new Y2;n.update(e);const r=n.digest();return Km.encodeByteArray(r)},wl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=wl.apply(null,r):typeof r=="object"?e+=st(r):e+=r,e+=" "}return e};let _a=null,rv=!0;const fP=function(t,e){$(!0,"Can't turn on custom loggers persistently."),Di.logLevel=fe.VERBOSE,_a=Di.log.bind(Di)},mt=function(...t){if(rv===!0&&(rv=!1,_a===null&&dP.get("logging_enabled")===!0&&fP()),_a){const e=wl.apply(null,t);_a(e)}},El=function(t){return function(...e){mt(t,...e)}},up=function(...t){const e="FIREBASE INTERNAL ERROR: "+wl(...t);Di.error(e)},yr=function(...t){const e=`FIREBASE FATAL ERROR: ${wl(...t)}`;throw Di.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+wl(...t);Di.warn(e)},pP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qi="[MIN_NAME]",Ws="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===qi||e===Ws)return-1;if(e===qi||t===Ws)return 1;{const n=sv(t),r=sv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},gP=function(t,e){return t===e?0:t<e?-1:1},Ho=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},Zm=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=st(e[r]),n+=":",n+=Zm(t[e[r]]);return n+="}",n},Q1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Y1=function(t){$(!Jm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},yP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_P=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const xP=new RegExp("^-?(0*)\\d{1,10}$"),bP=-2147483648,wP=2147483647,sv=function(t){if(xP.test(t)){const e=Number(t);if(e>=bP&&e<=wP)return e}return null},ho=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},EP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},va=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,U1(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class Mc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="5",X1="v",J1="s",Z1="r",eE="f",tE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nE="ls",rE="p",dp="ac",sE="websocket",iE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r,s,i=!1,o="",a=!1,c=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=js.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&js.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function CP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function aE(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===sE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===iE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CP(t)&&(n.ns=t.namespace);const s=[];return vt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(){this.counters_={}}incrementCounter(e,n=1){Zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return N2(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh={},Wh={};function tg(t){const e=t.toString();return zh[e]||(zh[e]=new IP),zh[e]}function kP(t,e){const n=t.toString();return Wh[n]||(Wh[n]=e()),Wh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ho(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="start",RP="close",AP="pLPCommand",PP="pRTLPCB",lE="id",cE="pw",uE="ser",DP="cb",jP="seg",LP="ts",MP="d",OP="dframe",dE=1870,hE=30,VP=dE-hE,FP=25e3,UP=3e4;class Ti{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=El(e),this.stats_=tg(n),this.urlFn=c=>(this.appCheckToken&&(c[dp]=this.appCheckToken),aE(n,iE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UP)),mP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ng((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===iv)this.id=a,this.password=c;else if(o===RP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[iv]="t",r[uE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[DP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[X1]=eg,this.transportSessionId&&(r[J1]=this.transportSessionId),this.lastSessionId&&(r[nE]=this.lastSessionId),this.applicationId&&(r[rE]=this.applicationId),this.appCheckToken&&(r[dp]=this.appCheckToken),typeof location<"u"&&location.hostname&&tE.test(location.hostname)&&(r[Z1]=eE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ti.forceAllow_=!0}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){return Ti.forceAllow_?!0:!Ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yP()&&!_P()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=C1(n),s=Q1(r,VP);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[OP]="t",r[lE]=e,r[cE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ng{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hP(),window[AP+this.uniqueCallbackIdentifier]=e,window[PP+this.uniqueCallbackIdentifier]=n,this.myIFrame=ng.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lE]=this.myID,e[cE]=this.myPW,e[uE]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hE+r.length<=dE;){const o=this.pendingSegs.shift();r=r+"&"+jP+s+"="+o.seg+"&"+LP+s+"="+o.ts+"&"+MP+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(FP)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=16384,$P=45e3;let vu=null;typeof MozWebSocket<"u"?vu=MozWebSocket:typeof WebSocket<"u"&&(vu=WebSocket);class In{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=El(this.connId),this.stats_=tg(n),this.connURL=In.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[X1]=eg,typeof location<"u"&&location.hostname&&tE.test(location.hostname)&&(o[Z1]=eE),n&&(o[J1]=n),r&&(o[nE]=r),s&&(o[dp]=s),i&&(o[rE]=i),aE(e,sE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,js.set("previous_websocket_failure",!0);try{let r;U2(),this.mySock=new vu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vu!==null&&!In.forceDisallow_}static previouslyFailed(){return js.isInMemoryStorage||js.get("previous_websocket_failure")===!0}markConnectionHealthy(){js.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ha(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Q1(n,BP);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($P))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}In.responsesRequiredToBeHealthy=2;In.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{static get ALL_TRANSPORTS(){return[Ti,In]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=In&&In.isAvailable();let r=n&&!In.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[In];else{const s=this.transports_=[];for(const i of Qa.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Qa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=6e4,WP=5e3,HP=10*1024,GP=100*1024,Hh="t",ov="d",qP="s",av="r",KP="e",lv="o",cv="a",uv="n",dv="p",QP="h";class YP{constructor(e,n,r,s,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=El("c:"+this.id+":"),this.transportManager_=new Qa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=va(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hh in e){const n=e[Hh];n===cv?this.upgradeIfSecondaryHealthy_():n===av?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===lv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ho("t",e),r=Ho("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:uv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ho("t",e),r=Ho("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ho(Hh,e);if(ov in e){const r=e[ov];if(n===QP){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===uv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qP?this.onConnectionShutdown_(r):n===av?this.onReset_(r):n===KP?up("Server Error: "+r):n===lv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):up("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),eg!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),va(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):va(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(js.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends pE{static getInstance(){return new xu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!j1()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=32,fv=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Se("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rs(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function rg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function XP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ya(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function We(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Se(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Mt(t,e){const n=oe(t),r=oe(e);if(n===null)return e;if(n===r)return Mt(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function JP(t,e){const n=Ya(t,0),r=Ya(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=ei(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function sg(t,e){if(rs(t)!==rs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(rs(t)>rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ZP{constructor(e,n){this.errorPrefix_=n,this.parts_=Ya(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=md(this.parts_[r]);gE(this)}}function e4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=md(e),gE(t)}function t4(t){const e=t.parts_.pop();t.byteLength_-=md(e),t.parts_.length>0&&(t.byteLength_-=1)}function gE(t){if(t.byteLength_>fv)throw new Error(t.errorPrefix_+"has a key path longer than "+fv+" bytes ("+t.byteLength_+").");if(t.parts_.length>hv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hv+") or object contains a cycle "+Rs(t))}function Rs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends pE{static getInstance(){return new ig}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=1e3,n4=60*5*1e3,pv=30*1e3,r4=1.3,s4=3e4,i4="server_kill",mv=3;class lr extends fE{constructor(e,n,r,s,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=lr.nextPersistentConnectionId_++,this.log_=El("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Go,this.maxReconnectDelay_=n4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ig.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(st(i)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new xl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;lr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zn(e,"w")){const r=Hi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=q2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):up("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Go,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Go,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>s4&&(this.reconnectDelay_=Go),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*r4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+lr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new YP(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Vt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(i4)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Vt(f),c())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],W_(this.interruptReasons_)&&(this.reconnectDelay_=Go,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Zm(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Se(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mv&&(this.reconnectDelay_=pv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+G1.replace(/\./g,"-")]=1,j1()?e["framework.cordova"]=1:F2()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xu.getInstance().currentlyOnline();return W_(this.interruptReasons_)&&e}}lr.nextPersistentConnectionId_=0;lr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ae(qi,e),s=new ae(qi,n);return this.compare(r,s)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;class yE extends gd{static get __EMPTY_NODE(){return fc}static set __EMPTY_NODE(e){fc=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Ws,fc)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,fc)}toString(){return".key"}}const ji=new yE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},en=class na{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??na.RED,this.left=s??Wn.EMPTY_NODE,this.right=i??Wn.EMPTY_NODE}copy(e,n,r,s,i){return new na(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Wn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,na.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,na.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};en.RED=!0;en.BLACK=!1;class o4{copy(e,n,r,s,i){return this}insert(e,n,r){return new en(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Wn=class Oc{constructor(e,n=Oc.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oc(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,en.BLACK,null,null))}remove(e){return new Oc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,en.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pc(this.root_,null,this.comparator_,!0,e)}};Wn.EMPTY_NODE=new o4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(t,e){return ei(t.name,e.name)}function og(t,e){return ei(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hp;function l4(t){hp=t}const _E=function(t){return typeof t=="number"?"number:"+Y1(t):"string:"+t},vE=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zn(e,".sv"),"Priority must be a string or number.")}else $(t===hp||t.isEmpty(),"priority of unexpected type.");$(t===hp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gv;class ct{static set __childrenNodeConstructor(e){gv=e}static get __childrenNodeConstructor(){return gv}constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:oe(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_E(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Y1(this.value_):e+=this.value_,this.lazyHash_=K1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=ct.VALUE_TYPE_ORDER.indexOf(n),i=ct.VALUE_TYPE_ORDER.indexOf(r);return $(s>=0,"Unknown leaf type: "+n),$(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xE,bE;function c4(t){xE=t}function u4(t){bE=t}class d4 extends gd{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?ei(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Ws,new ct("[PRIORITY-POST]",bE))}makePost(e,n){const r=xE(e);return new ae(n,new ct("[PRIORITY-POST]",r))}toString(){return".priority"}}const He=new d4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=Math.log(2);class f4{constructor(e){const n=i=>parseInt(Math.log(i)/h4,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bu=function(t,e,n,r){t.sort(e);const s=function(c,u){const h=u-c;let f,m;if(h===0)return null;if(h===1)return f=t[c],m=n?n(f):f,new en(m,f.node,en.BLACK,null,null);{const y=parseInt(h/2,10)+c,S=s(c,y),I=s(y+1,u);return f=t[y],m=n?n(f):f,new en(m,f.node,en.BLACK,S,I)}},i=function(c){let u=null,h=null,f=t.length;const m=function(S,I){const k=f-S,b=f;f-=S;const v=s(k+1,b),w=t[k],D=n?n(w):w;y(new en(D,w.node,I,null,v))},y=function(S){u?(u.left=S,u=S):(h=S,u=S)};for(let S=0;S<c.count;++S){const I=c.nextBitIsOne(),k=Math.pow(2,c.count-(S+1));I?m(k,en.BLACK):(m(k,en.BLACK),m(k,en.RED))}return h},o=new f4(t.length),a=i(o);return new Wn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;const li={};class or{static get Default(){return $(li&&He,"ChildrenNode.ts has not been loaded"),Gh=Gh||new or({".priority":li},{".priority":He}),Gh}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Wn?n:null}hasIndex(e){return Zn(this.indexSet_,e.toString())}addIndex(e,n){$(e!==ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ae.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=bu(r,e.getCompare()):a=li;const c=e.toString(),u={...this.indexSet_};u[c]=e;const h={...this.indexes_};return h[c]=a,new or(h,u)}addToIndexes(e,n){const r=yu(this.indexes_,(s,i)=>{const o=Hi(this.indexSet_,i);if($(o,"Missing index implementation for "+i),s===li)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ae.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),bu(a,o.getCompare())}else return li;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new ae(e.name,a))),c.insert(e,e.node)}});return new or(r,this.indexSet_)}removeFromIndexes(e,n){const r=yu(this.indexes_,s=>{if(s===li)return s;{const i=n.get(e.name);return i?s.remove(new ae(e.name,i)):s}});return new or(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;class J{static get EMPTY_NODE(){return qo||(qo=new J(new Wn(og),null,or.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&vE(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qo}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qo:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ae(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?qo:this.priorityNode_;return new J(s,o,i)}}updateChild(e,n){const r=oe(e);if(r===null)return n;{$(oe(e)!==".priority"||rs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(He,(o,a)=>{n[o]=a.val(e),r++,i&&J.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_E(this.getPriority().val())+":"),this.forEachChild(He,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":K1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sl?-1:0}withIndex(e){if(e===ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(He),s=n.getIterator(He);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ji?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class p4 extends J{constructor(){super(new Wn(og),J.EMPTY_NODE,or.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Sl=new p4;Object.defineProperties(ae,{MIN:{value:new ae(qi,J.EMPTY_NODE)},MAX:{value:new ae(Ws,Sl)}});yE.__EMPTY_NODE=J.EMPTY_NODE;ct.__childrenNodeConstructor=J;l4(Sl);u4(Sl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4=!0;function rt(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,rt(e))}if(!(t instanceof Array)&&m4){const n=[];let r=!1;if(vt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=rt(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new ae(o,c)))}}),n.length===0)return J.EMPTY_NODE;const i=bu(n,a4,o=>o.name,og);if(r){const o=bu(n,He.getCompare());return new J(i,rt(e),new or({".priority":o},{".priority":He}))}else return new J(i,rt(e),or.Default)}else{let n=J.EMPTY_NODE;return vt(t,(r,s)=>{if(Zn(t,r)&&r.substring(0,1)!=="."){const i=rt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(rt(e))}}c4(rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4 extends gd{constructor(e){super(),this.indexPath_=e,$(!le(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?ei(e.name,n.name):i}makePost(e,n){const r=rt(e),s=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(n,s)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Sl);return new ae(Ws,e)}toString(){return Ya(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4 extends gd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const r=rt(e);return new ae(n,r)}toString(){return".value"}}const _4=new y4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){return{type:"value",snapshotNode:t}}function Ki(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ja(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function v4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Xa(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ki(n,r)):o.trackChildChange(Ja(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(He,(s,i)=>{n.hasChild(s)||r.trackChildChange(Xa(s,i))}),n.isLeafNode()||n.forEachChild(He,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ja(s,i,o))}else r.trackChildChange(Ki(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.indexedFilter_=new ag(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Za.getStartPost_(e),this.endPost_=Za.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ae(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(J.EMPTY_NODE);const i=this;return n.forEachChild(He,(o,a)=>{i.matches(new ae(o,a))||(s=s.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Za(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ae(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=J.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(J.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const c=new ae(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,c);if(h&&!r.isEmpty()&&y>=0)return i!=null&&i.trackChildChange(Ja(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Xa(n,f));const I=a.updateImmediateChild(n,J.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(Ki(m.name,m.node)),I.updateImmediateChild(m.name,m.node)):I}}else return r.isEmpty()?e:h&&o(u,c)>=0?(i!=null&&(i.trackChildChange(Xa(u.name,u.node)),i.trackChildChange(Ki(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=He}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qi}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ws}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===He}copy(){const e=new lg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function b4(t){return t.loadsAllData()?new ag(t.getIndex()):t.hasLimit()?new x4(t):new Za(t)}function yv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===He?n="$priority":t.index_===_4?n="$value":t.index_===ji?n="$key":($(t.index_ instanceof g4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=st(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+st(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=st(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+st(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _v(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==He&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends fE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=El("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=wu.getListenId_(e,r),a={};this.listens_[o]=a;const c=yv(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),Hi(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,n){const r=wu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=yv(e._queryParams),r=e._path.toString(),s=new xl;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Q2(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ha(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){return{value:null,children:new Map}}function EE(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=oe(e);t.children.has(r)||t.children.set(r,Eu());const s=t.children.get(r);e=ke(e),EE(s,e,n)}}function fp(t,e,n){t.value!==null?n(e,t.value):E4(t,(r,s)=>{const i=new Se(e.toString()+"/"+r);fp(s,i,n)})}function E4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&vt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=10*1e3,T4=30*1e3,C4=5*60*1e3;class I4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new S4(e);const r=vv+(T4-vv)*Math.random();va(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;vt(e,(s,i)=>{i>0&&Zn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),va(this.reportStats_.bind(this),Math.floor(Math.random()*2*C4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kn||(kn={}));function cg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ug(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=kn.ACK_USER_WRITE,this.source=cg()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new Su(ge(),n,this.revert)}}else return $(oe(this.path)===e,"operationForChild called for unrelated child."),new Su(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.source=e,this.path=n,this.type=kn.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new el(this.source,ge()):new el(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=kn.OVERWRITE}operationForChild(e){return le(this.path)?new Hs(this.source,ge(),this.snap.getImmediateChild(e)):new Hs(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=kn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Hs(this.source,ge(),n.value):new Qi(this.source,ge(),n)}else return $(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qi(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function N4(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(v4(o.childName,o.snapshotNode))}),Ko(t,s,"child_removed",e,r,n),Ko(t,s,"child_added",e,r,n),Ko(t,s,"child_moved",i,r,n),Ko(t,s,"child_changed",e,r,n),Ko(t,s,"value",e,r,n),s}function Ko(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,c)=>A4(t,a,c)),o.forEach(a=>{const c=R4(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function R4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function A4(t,e,n){if(e.childName==null||n.childName==null)throw co("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),s=new ae(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t,e){return{eventCache:t,serverCache:e}}function xa(t,e,n,r){return yd(new ss(e,n,r),t.serverCache)}function SE(t,e,n,r){return yd(t.eventCache,new ss(e,n,r))}function Tu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qh;const P4=()=>(qh||(qh=new Wn(gP)),qh);class Ie{static fromObject(e){let n=new Ie(null);return vt(e,(r,s)=>{n=n.set(new Se(r),s)}),n}constructor(e,n=P4()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(le(e))return null;{const r=oe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ke(e),n);return i!=null?{path:We(new Se(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=oe(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new Ie(null)}}set(e,n){if(le(e))return new Ie(n,this.children);{const r=oe(e),i=(this.children.get(r)||new Ie(null)).set(ke(e),n),o=this.children.insert(r,i);return new Ie(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=oe(e),r=this.children.get(n);if(r){const s=r.remove(ke(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ie(null):new Ie(this.value,i)}else return this}}get(e){if(le(e))return this.value;{const n=oe(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(le(e))return n;{const r=oe(e),i=(this.children.get(r)||new Ie(null)).setTree(ke(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ie(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(We(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(le(e))return null;{const i=oe(e),o=this.children.get(i);return o?o.findOnPath_(ke(e),We(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const s=oe(e),i=this.children.get(s);return i?i.foreachOnPath_(ke(e),We(n,s),r):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(We(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.writeTree_=e}static empty(){return new An(new Ie(null))}}function ba(t,e,n){if(le(e))return new An(new Ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Mt(s,e);return i=i.updateChild(o,n),new An(t.writeTree_.set(s,i))}else{const s=new Ie(n),i=t.writeTree_.setTree(e,s);return new An(i)}}}function pp(t,e,n){let r=t;return vt(n,(s,i)=>{r=ba(r,We(e,s),i)}),r}function xv(t,e){if(le(e))return An.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new An(n)}}function mp(t,e){return ti(t,e)!=null}function ti(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Mt(n.path,e)):null}function bv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(He,(r,s)=>{e.push(new ae(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ae(r,s.value))}),e}function Xr(t,e){if(le(e))return t;{const n=ti(t,e);return n!=null?new An(new Ie(n)):new An(t.writeTree_.subtree(e))}}function gp(t){return t.writeTree_.isEmpty()}function Yi(t,e){return TE(ge(),t.writeTree_,e)}function TE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?($(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=TE(We(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(We(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e){return NE(e,t)}function D4(t,e,n,r,s){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ba(t.visibleWrites,e,n)),t.lastWriteId=r}function j4(t,e,n,r){$(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=pp(t.visibleWrites,e,n),t.lastWriteId=r}function L4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function M4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&O4(a,r.path)?s=!1:gn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return V4(t),!0;if(r.snap)t.visibleWrites=xv(t.visibleWrites,r.path);else{const a=r.children;vt(a,c=>{t.visibleWrites=xv(t.visibleWrites,We(r.path,c))})}return!0}else return!1}function O4(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(We(t.path,n),e))return!0;return!1}function V4(t){t.visibleWrites=CE(t.allWrites,F4,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function F4(t){return t.visible}function CE(t,e,n){let r=An.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)gn(n,o)?(a=Mt(n,o),r=ba(r,a,i.snap)):gn(o,n)&&(a=Mt(o,n),r=ba(r,ge(),i.snap.getChild(a)));else if(i.children){if(gn(n,o))a=Mt(n,o),r=pp(r,a,i.children);else if(gn(o,n))if(a=Mt(o,n),le(a))r=pp(r,ge(),i.children);else{const c=Hi(i.children,oe(a));if(c){const u=c.getChild(ke(a));r=ba(r,ge(),u)}}}else throw co("WriteRecord should have .snap or .children")}}return r}function IE(t,e,n,r,s){if(!r&&!s){const i=ti(t.visibleWrites,e);if(i!=null)return i;{const o=Xr(t.visibleWrites,e);if(gp(o))return n;if(n==null&&!mp(o,ge()))return null;{const a=n||J.EMPTY_NODE;return Yi(o,a)}}}else{const i=Xr(t.visibleWrites,e);if(!s&&gp(i))return n;if(!s&&n==null&&!mp(i,ge()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(gn(u.path,e)||gn(e,u.path))},a=CE(t.allWrites,o,e),c=n||J.EMPTY_NODE;return Yi(a,c)}}}function U4(t,e,n){let r=J.EMPTY_NODE;const s=ti(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(He,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Xr(t.visibleWrites,e);return n.forEachChild(He,(o,a)=>{const c=Yi(Xr(i,new Se(o)),a);r=r.updateImmediateChild(o,c)}),bv(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Xr(t.visibleWrites,e);return bv(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function B4(t,e,n,r,s){$(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=We(e,n);if(mp(t.visibleWrites,i))return null;{const o=Xr(t.visibleWrites,i);return gp(o)?s.getChild(n):Yi(o,s.getChild(n))}}function $4(t,e,n,r){const s=We(e,n),i=ti(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Xr(t.visibleWrites,s);return Yi(o,r.getNode().getImmediateChild(n))}else return null}function z4(t,e){return ti(t.visibleWrites,e)}function W4(t,e,n,r,s,i,o){let a;const c=Xr(t.visibleWrites,e),u=ti(c,ge());if(u!=null)a=u;else if(n!=null)a=Yi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&h.length<s;)f(y,r)!==0&&h.push(y),y=m.getNext();return h}else return[]}function H4(){return{visibleWrites:An.empty(),allWrites:[],lastWriteId:-1}}function Cu(t,e,n,r){return IE(t.writeTree,t.treePath,e,n,r)}function hg(t,e){return U4(t.writeTree,t.treePath,e)}function wv(t,e,n,r){return B4(t.writeTree,t.treePath,e,n,r)}function Iu(t,e){return z4(t.writeTree,We(t.treePath,e))}function G4(t,e,n,r,s,i){return W4(t.writeTree,t.treePath,e,n,r,s,i)}function fg(t,e,n){return $4(t.writeTree,t.treePath,e,n)}function kE(t,e){return NE(We(t.treePath,e),t.writeTree)}function NE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ja(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Xa(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Ki(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ja(r,e.snapshotNode,s.oldSnap));else throw co("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const RE=new K4;class pg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ss(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gs(this.viewCache_),i=G4(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q4(t){return{filter:t}}function Y4(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function X4(t,e,n,r,s){const i=new q4;let o,a;if(n.type===kn.OVERWRITE){const u=n;u.source.fromUser?o=yp(t,e,u.path,u.snap,r,s,i):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!le(u.path),o=ku(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===kn.MERGE){const u=n;u.source.fromUser?o=Z4(t,e,u.path,u.children,r,s,i):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=_p(t,e,u.path,u.children,r,s,a,i))}else if(n.type===kn.ACK_USER_WRITE){const u=n;u.revert?o=nD(t,e,u.path,r,s,i):o=eD(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===kn.LISTEN_COMPLETE)o=tD(t,e,n.path,r,i);else throw co("Unknown operation type: "+n.type);const c=i.getChanges();return J4(e,o,c),{viewCache:o,changes:c}}function J4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Tu(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(wE(Tu(e)))}}function AE(t,e,n,r,s,i){const o=e.eventCache;if(Iu(r,n)!=null)return e;{let a,c;if(le(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gs(e),h=u instanceof J?u:J.EMPTY_NODE,f=hg(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Cu(r,Gs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=oe(n);if(u===".priority"){$(rs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=wv(r,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=ke(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=wv(r,n,o.getNode(),c);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=fg(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,s,i):a=o.getNode()}}return xa(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function ku(t,e,n,r,s,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(le(n))u=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const y=c.getNode().updateChild(n,r);u=h.updateFullNode(c.getNode(),y,null)}else{const y=oe(n);if(!c.isCompleteForPath(n)&&rs(n)>1)return e;const S=ke(n),k=c.getNode().getImmediateChild(y).updateChild(S,r);y===".priority"?u=h.updatePriority(c.getNode(),k):u=h.updateChild(c.getNode(),y,k,S,RE,null)}const f=SE(e,u,c.isFullyInitialized()||le(n),h.filtersNodes()),m=new pg(s,f,i);return AE(t,f,n,s,m,a)}function yp(t,e,n,r,s,i,o){const a=e.eventCache;let c,u;const h=new pg(s,e,i);if(le(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=xa(e,u,!0,t.filter.filtersNodes());else{const f=oe(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=xa(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=ke(n),y=a.getNode().getImmediateChild(f);let S;if(le(m))S=r;else{const I=h.getCompleteChild(f);I!=null?rg(m)===".priority"&&I.getChild(mE(m)).isEmpty()?S=I:S=I.updateChild(m,r):S=J.EMPTY_NODE}if(y.equals(S))c=e;else{const I=t.filter.updateChild(a.getNode(),f,S,m,h,o);c=xa(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Ev(t,e){return t.eventCache.isCompleteForChild(e)}function Z4(t,e,n,r,s,i,o){let a=e;return r.foreach((c,u)=>{const h=We(n,c);Ev(e,oe(h))&&(a=yp(t,a,h,u,s,i,o))}),r.foreach((c,u)=>{const h=We(n,c);Ev(e,oe(h))||(a=yp(t,a,h,u,s,i,o))}),a}function Sv(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function _p(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;le(n)?u=r:u=new Ie(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),S=Sv(t,y,m);c=ku(t,c,new Se(f),S,s,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!y){const S=e.serverCache.getNode().getImmediateChild(f),I=Sv(t,S,m);c=ku(t,c,new Se(f),I,s,i,o,a)}}),c}function eD(t,e,n,r,s,i,o){if(Iu(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(le(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ku(t,e,n,c.getNode().getChild(n),s,i,a,o);if(le(n)){let u=new Ie(null);return c.getNode().forEachChild(ji,(h,f)=>{u=u.set(new Se(h),f)}),_p(t,e,n,u,s,i,a,o)}else return e}else{let u=new Ie(null);return r.foreach((h,f)=>{const m=We(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),_p(t,e,n,u,s,i,a,o)}}function tD(t,e,n,r,s){const i=e.serverCache,o=SE(e,i.getNode(),i.isFullyInitialized()||le(n),i.isFiltered());return AE(t,o,n,r,RE,s)}function nD(t,e,n,r,s,i){let o;if(Iu(r,n)!=null)return e;{const a=new pg(r,e,s),c=e.eventCache.getNode();let u;if(le(n)||oe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Cu(r,Gs(e));else{const f=e.serverCache.getNode();$(f instanceof J,"serverChildren would be complete if leaf node"),h=hg(r,f)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=oe(n);let f=fg(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,ke(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,J.EMPTY_NODE,ke(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cu(r,Gs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Iu(r,ge())!=null,xa(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new ag(r.getIndex()),i=b4(r);this.processor_=Q4(i);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(J.EMPTY_NODE,a.getNode(),null),h=new ss(c,o.isFullyInitialized(),s.filtersNodes()),f=new ss(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=yd(f,h),this.eventGenerator_=new k4(this.query_)}get query(){return this.query_}}function sD(t){return t.viewCache_.serverCache.getNode()}function iD(t){return Tu(t.viewCache_)}function oD(t,e){const n=Gs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function Tv(t){return t.eventRegistrations_.length===0}function aD(t,e){t.eventRegistrations_.push(e)}function Cv(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Iv(t,e,n,r){e.type===kn.MERGE&&e.source.queryId!==null&&($(Gs(t.viewCache_),"We should always have a full cache before handling merges"),$(Tu(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=X4(t.processor_,s,e,n,r);return Y4(t.processor_,i.viewCache),$(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,PE(t,i.changes,i.viewCache.eventCache.getNode(),null)}function lD(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(He,(i,o)=>{r.push(Ki(i,o))}),n.isFullyInitialized()&&r.push(wE(n.getNode())),PE(t,r,n.getNode(),e)}function PE(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return N4(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu;class DE{constructor(){this.views=new Map}}function cD(t){$(!Nu,"__referenceConstructor has already been defined"),Nu=t}function uD(){return $(Nu,"Reference.ts has not been loaded"),Nu}function dD(t){return t.views.size===0}function mg(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return $(i!=null,"SyncTree gave us an op for an invalid query."),Iv(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Iv(o,e,n,r));return i}}function jE(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Cu(n,s?r:null),c=!1;a?c=!0:r instanceof J?(a=hg(n,r),c=!1):(a=J.EMPTY_NODE,c=!1);const u=yd(new ss(a,c,!1),new ss(r,s,!1));return new rD(e,u)}return o}function hD(t,e,n,r,s,i){const o=jE(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),aD(o,n),lD(o,n)}function fD(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=is(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(Cv(u,n,r)),Tv(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(Cv(c,n,r)),Tv(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!is(t)&&i.push(new(uD())(e._repo,e._path)),{removed:i,events:o}}function LE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Jr(t,e){let n=null;for(const r of t.views.values())n=n||oD(r,e);return n}function ME(t,e){if(e._queryParams.loadsAllData())return vd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function OE(t,e){return ME(t,e)!=null}function is(t){return vd(t)!=null}function vd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru;function pD(t){$(!Ru,"__referenceConstructor has already been defined"),Ru=t}function mD(){return $(Ru,"Reference.ts has not been loaded"),Ru}let gD=1;class kv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=H4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function VE(t,e,n,r,s){return D4(t.pendingWriteTree_,e,n,r,s),s?fo(t,new Hs(cg(),e,n)):[]}function yD(t,e,n,r){j4(t.pendingWriteTree_,e,n,r);const s=Ie.fromObject(n);return fo(t,new Qi(cg(),e,s))}function Or(t,e,n=!1){const r=L4(t.pendingWriteTree_,e);if(M4(t.pendingWriteTree_,e)){let i=new Ie(null);return r.snap!=null?i=i.set(ge(),!0):vt(r.children,o=>{i=i.set(new Se(o),!0)}),fo(t,new Su(r.path,i,n))}else return[]}function Tl(t,e,n){return fo(t,new Hs(ug(),e,n))}function _D(t,e,n){const r=Ie.fromObject(n);return fo(t,new Qi(ug(),e,r))}function vD(t,e){return fo(t,new el(ug(),e))}function xD(t,e,n){const r=yg(t,n);if(r){const s=_g(r),i=s.path,o=s.queryId,a=Mt(i,e),c=new el(dg(o),a);return vg(t,i,c)}else return[]}function Au(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||OE(o,e))){const c=fD(o,e,n,r);dD(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=c.removed;if(a=c.events,!s){const h=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,y)=>is(y));if(h&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const y=ED(m);for(let S=0;S<y.length;++S){const I=y[S],k=I.query,b=$E(t,I);t.listenProvider_.startListening(wa(k),tl(t,k),b.hashFn,b.onComplete)}}}!f&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(wa(e),null):u.forEach(m=>{const y=t.queryToTagMap.get(xd(m));t.listenProvider_.stopListening(wa(m),y)}))}SD(t,u)}return a}function FE(t,e,n,r){const s=yg(t,r);if(s!=null){const i=_g(s),o=i.path,a=i.queryId,c=Mt(o,e),u=new Hs(dg(a),c,n);return vg(t,o,u)}else return[]}function bD(t,e,n,r){const s=yg(t,r);if(s){const i=_g(s),o=i.path,a=i.queryId,c=Mt(o,e),u=Ie.fromObject(n),h=new Qi(dg(a),c,u);return vg(t,o,h)}else return[]}function vp(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,y)=>{const S=Mt(m,s);i=i||Jr(y,S),o=o||is(y)});let a=t.syncPointTree_.get(s);a?(o=o||is(a),i=i||Jr(a,ge())):(a=new DE,t.syncPointTree_=t.syncPointTree_.set(s,a));let c;i!=null?c=!0:(c=!1,i=J.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((y,S)=>{const I=Jr(S,ge());I&&(i=i.updateImmediateChild(y,I))}));const u=OE(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=xd(e);$(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=TD();t.queryToTagMap.set(m,y),t.tagToQueryMap.set(y,m)}const h=_d(t.pendingWriteTree_,s);let f=hD(a,e,n,h,i,c);if(!u&&!o&&!r){const m=ME(a,e);f=f.concat(CD(t,e,m))}return f}function gg(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Mt(o,e),u=Jr(a,c);if(u)return u});return IE(s,e,i,n,!0)}function wD(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const f=Mt(u,n);r=r||Jr(h,f)});let s=t.syncPointTree_.get(n);s?r=r||Jr(s,ge()):(s=new DE,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new ss(r,!0,!1):null,a=_d(t.pendingWriteTree_,e._path),c=jE(s,e,a,i?o.getNode():J.EMPTY_NODE,i);return iD(c)}function fo(t,e){return UE(e,t.syncPointTree_,null,_d(t.pendingWriteTree_,ge()))}function UE(t,e,n,r){if(le(t.path))return BE(t,e,n,r);{const s=e.get(ge());n==null&&s!=null&&(n=Jr(s,ge()));let i=[];const o=oe(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=kE(r,o);i=i.concat(UE(a,c,u,h))}return s&&(i=i.concat(mg(s,t,r,n))),i}}function BE(t,e,n,r){const s=e.get(ge());n==null&&s!=null&&(n=Jr(s,ge()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=kE(r,o),h=t.operationForChild(o);h&&(i=i.concat(BE(h,a,c,u)))}),s&&(i=i.concat(mg(s,t,r,n))),i}function $E(t,e){const n=e.query,r=tl(t,n);return{hashFn:()=>(sD(e)||J.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?xD(t,n._path,r):vD(t,n._path);{const i=vP(s,n);return Au(t,n,null,i)}}}}function tl(t,e){const n=xd(e);return t.queryToTagMap.get(n)}function xd(t){return t._path.toString()+"$"+t._queryIdentifier}function yg(t,e){return t.tagToQueryMap.get(e)}function _g(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function vg(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const s=_d(t.pendingWriteTree_,e);return mg(r,n,s,null)}function ED(t){return t.fold((e,n,r)=>{if(n&&is(n))return[vd(n)];{let s=[];return n&&(s=LE(n)),vt(r,(i,o)=>{s=s.concat(o)}),s}})}function wa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(mD())(t._repo,t._path):t}function SD(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=xd(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function TD(){return gD++}function CD(t,e,n){const r=e._path,s=tl(t,e),i=$E(t,n),o=t.listenProvider_.startListening(wa(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)$(!is(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,h,f)=>{if(!le(u)&&h&&is(h))return[vd(h).query];{let m=[];return h&&(m=m.concat(LE(h).map(y=>y.query))),vt(f,(y,S)=>{m=m.concat(S)}),m}});for(let u=0;u<c.length;++u){const h=c[u];t.listenProvider_.stopListening(wa(h),tl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xg(n)}node(){return this.node_}}class bg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new bg(this.syncTree_,n)}node(){return gg(this.syncTree_,this.path_)}}const ID=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Nv=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ND(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},ND=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},zE=function(t,e,n,r){return wg(e,new bg(n,t),r)},WE=function(t,e,n){return wg(t,new xg(e),n)};function wg(t,e,n){const r=t.getPriority().val(),s=Nv(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Nv(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ct(a,rt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ct(s))),o.forEachChild(He,(a,c)=>{const u=wg(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Sg(t,e){let n=e instanceof Se?e:new Se(e),r=t,s=oe(n);for(;s!==null;){const i=Hi(r.node.children,s)||{children:{},childCount:0};r=new Eg(s,r,i),n=ke(n),s=oe(n)}return r}function po(t){return t.node.value}function HE(t,e){t.node.value=e,xp(t)}function GE(t){return t.node.childCount>0}function RD(t){return po(t)===void 0&&!GE(t)}function bd(t,e){vt(t.node.children,(n,r)=>{e(new Eg(n,t,r))})}function qE(t,e,n,r){n&&e(t),bd(t,s=>{qE(s,e,!0)})}function AD(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Cl(t){return new Se(t.parent===null?t.name:Cl(t.parent)+"/"+t.name)}function xp(t){t.parent!==null&&PD(t.parent,t.name,t)}function PD(t,e,n){const r=RD(n),s=Zn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,xp(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,xp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=/[\[\].#$\/\u0000-\u001F\u007F]/,jD=/[\[\].#$\u0000-\u001F\u007F]/,Kh=10*1024*1024,Tg=function(t){return typeof t=="string"&&t.length!==0&&!DD.test(t)},KE=function(t){return typeof t=="string"&&t.length!==0&&!jD.test(t)},LD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),KE(t)},MD=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Jm(t)||t&&typeof t=="object"&&Zn(t,".sv")},OD=function(t,e,n,r){wd(pd(t,"value"),e,n)},wd=function(t,e,n){const r=n instanceof Se?new ZP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rs(r));if(typeof e=="function")throw new Error(t+"contains a function "+Rs(r)+" with contents = "+e.toString());if(Jm(e))throw new Error(t+"contains "+e.toString()+" "+Rs(r));if(typeof e=="string"&&e.length>Kh/3&&md(e)>Kh)throw new Error(t+"contains a string greater than "+Kh+" utf8 bytes "+Rs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(vt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Tg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);e4(r,o),wd(t,a,r),t4(r)}),s&&i)throw new Error(t+' contains ".value" child '+Rs(r)+" in addition to actual children.")}},VD=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Ya(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Tg(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JP);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&gn(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},FD=function(t,e,n,r){const s=pd(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];vt(e,(o,a)=>{const c=new Se(o);if(wd(s,a,We(n,c)),rg(c)===".priority"&&!MD(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),VD(s,i)},QE=function(t,e,n,r){if(!KE(n))throw new Error(pd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UD=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),QE(t,e,n)},YE=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},BD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LD(n))throw new Error(pd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ed(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!sg(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function XE(t,e,n){Ed(t,n),JE(t,r=>sg(r,e))}function bn(t,e,n){Ed(t,n),JE(t,r=>gn(r,e)||gn(e,r))}function JE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(zD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();_a&&mt("event: "+n.toString()),ho(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="repo_interrupt",HD=25;class GD{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $D,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eu(),this.transactionQueueTree_=new Eg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qD(t,e,n){if(t.stats_=tg(t.repoInfo_),t.forceRestClient_||EP())t.server_=new wu(t.repoInfo_,(r,s,i,o)=>{Rv(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Av(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new lr(t.repoInfo_,e,(r,s,i,o)=>{Rv(t,r,s,i,o)},r=>{Av(t,r)},r=>{QD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=kP(t.repoInfo_,()=>new I4(t.stats_,t.server_)),t.infoData_=new w4,t.infoSyncTree_=new kv({startListening:(r,s,i,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Tl(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cg(t,"connected",!1),t.serverSyncTree_=new kv({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,c)=>{const u=o(a,c);bn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function KD(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sd(t){return ID({timestamp:KD(t)})}function Rv(t,e,n,r,s){t.dataUpdateCount++;const i=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=yu(n,u=>rt(u));o=bD(t.serverSyncTree_,i,c,s)}else{const c=rt(n);o=FE(t.serverSyncTree_,i,c,s)}else if(r){const c=yu(n,u=>rt(u));o=_D(t.serverSyncTree_,i,c)}else{const c=rt(n);o=Tl(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Xi(t,i)),bn(t.eventQueue_,a,o)}function Av(t,e){Cg(t,"connected",e),e===!1&&ZD(t)}function QD(t,e){vt(e,(n,r)=>{Cg(t,n,r)})}function Cg(t,e,n){const r=new Se("/.info/"+e),s=rt(n);t.infoData_.updateSnapshot(r,s);const i=Tl(t.infoSyncTree_,r,s);bn(t.eventQueue_,r,i)}function Ig(t){return t.nextWriteId_++}function YD(t,e,n){const r=wD(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=rt(s).withIndex(e._queryParams.getIndex());vp(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Tl(t.serverSyncTree_,e._path,i);else{const a=tl(t.serverSyncTree_,e);o=FE(t.serverSyncTree_,e._path,i,a)}return bn(t.eventQueue_,e._path,o),Au(t.serverSyncTree_,e,n,null,!0),i},s=>(Il(t,"get for query "+st(e)+" failed: "+s),Promise.reject(new Error(s))))}function XD(t,e,n,r,s){Il(t,"set",{path:e.toString(),value:n,priority:r});const i=Sd(t),o=rt(n,r),a=gg(t.serverSyncTree_,e),c=WE(o,a,i),u=Ig(t),h=VE(t.serverSyncTree_,e,c,u,!0);Ed(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,y)=>{const S=m==="ok";S||Vt("set at "+e+" failed: "+m);const I=Or(t.serverSyncTree_,u,!S);bn(t.eventQueue_,e,I),bp(t,s,m,y)});const f=Ng(t,e);Xi(t,f),bn(t.eventQueue_,f,[])}function JD(t,e,n,r){Il(t,"update",{path:e.toString(),value:n});let s=!0;const i=Sd(t),o={};if(vt(n,(a,c)=>{s=!1,o[a]=zE(We(e,a),rt(c),t.serverSyncTree_,i)}),s)mt("update() called with empty data.  Don't do anything."),bp(t,r,"ok",void 0);else{const a=Ig(t),c=yD(t.serverSyncTree_,e,o,a);Ed(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,h)=>{const f=u==="ok";f||Vt("update at "+e+" failed: "+u);const m=Or(t.serverSyncTree_,a,!f),y=m.length>0?Xi(t,e):e;bn(t.eventQueue_,y,m),bp(t,r,u,h)}),vt(n,u=>{const h=Ng(t,We(e,u));Xi(t,h)}),bn(t.eventQueue_,e,[])}}function ZD(t){Il(t,"onDisconnectEvents");const e=Sd(t),n=Eu();fp(t.onDisconnect_,ge(),(s,i)=>{const o=zE(s,i,t.serverSyncTree_,e);EE(n,s,o)});let r=[];fp(n,ge(),(s,i)=>{r=r.concat(Tl(t.serverSyncTree_,s,i));const o=Ng(t,s);Xi(t,o)}),t.onDisconnect_=Eu(),bn(t.eventQueue_,ge(),r)}function e5(t,e,n){let r;oe(e._path)===".info"?r=vp(t.infoSyncTree_,e,n):r=vp(t.serverSyncTree_,e,n),XE(t.eventQueue_,e._path,r)}function ZE(t,e,n){let r;oe(e._path)===".info"?r=Au(t.infoSyncTree_,e,n):r=Au(t.serverSyncTree_,e,n),XE(t.eventQueue_,e._path,r)}function t5(t){t.persistentConnection_&&t.persistentConnection_.interrupt(WD)}function Il(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function bp(t,e,n,r){e&&ho(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function eS(t,e,n){return gg(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function kg(t,e=t.transactionQueueTree_){if(e||Td(t,e),po(e)){const n=nS(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&n5(t,Cl(e),n)}else GE(e)&&bd(e,n=>{kg(t,n)})}function n5(t,e,n){const r=n.map(u=>u.currentWriteId),s=eS(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];$(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Mt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{Il(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Or(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Td(t,Sg(t.transactionQueueTree_,e)),kg(t,t.transactionQueueTree_),bn(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)ho(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Vt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Xi(t,e)}},o)}function Xi(t,e){const n=tS(t,e),r=Cl(n),s=nS(t,n);return r5(t,s,r),r}function r5(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Mt(n,c.path);let h=!1,f;if($(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,s=s.concat(Or(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=HD)h=!0,f="maxretry",s=s.concat(Or(t.serverSyncTree_,c.currentWriteId,!0));else{const m=eS(t,c.path,o);c.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){wd("transaction failed: Data returned ",y,c.path);let S=rt(y);typeof y=="object"&&y!=null&&Zn(y,".priority")||(S=S.updatePriority(m.getPriority()));const k=c.currentWriteId,b=Sd(t),v=WE(S,m,b);c.currentOutputSnapshotRaw=S,c.currentOutputSnapshotResolved=v,c.currentWriteId=Ig(t),o.splice(o.indexOf(k),1),s=s.concat(VE(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),s=s.concat(Or(t.serverSyncTree_,k,!0))}else h=!0,f="nodata",s=s.concat(Or(t.serverSyncTree_,c.currentWriteId,!0))}bn(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Td(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ho(r[a]);kg(t,t.transactionQueueTree_)}function tS(t,e){let n,r=t.transactionQueueTree_;for(n=oe(e);n!==null&&po(r)===void 0;)r=Sg(r,n),e=ke(e),n=oe(e);return r}function nS(t,e){const n=[];return rS(t,e,n),n.sort((r,s)=>r.order-s.order),n}function rS(t,e,n){const r=po(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);bd(e,s=>{rS(t,s,n)})}function Td(t,e){const n=po(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,HE(e,n.length>0?n:void 0)}bd(e,r=>{Td(t,r)})}function Ng(t,e){const n=Cl(tS(t,e)),r=Sg(t.transactionQueueTree_,e);return AD(r,s=>{Qh(t,s)}),Qh(t,r),qE(r,s=>{Qh(t,s)}),n}function Qh(t,e){const n=po(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Or(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?HE(e,void 0):n.length=i+1,bn(t.eventQueue_,Cl(e),s);for(let o=0;o<r.length;o++)ho(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s5(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function i5(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pv=function(t,e){const n=o5(t),r=n.namespace;n.domain==="firebase.com"&&yr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pP();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new oE(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Se(n.pathString)}},o5=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=s5(t.substring(h,f)));const m=i5(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const S=e.indexOf(".");r=e.substring(0,S).toLowerCase(),n=e.substring(S+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class l5{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return le(this._path)?null:rg(this._path)}get ref(){return new wr(this._repo,this._path)}get _queryIdentifier(){const e=_v(this._queryParams),n=Zm(e);return n==="{}"?"default":n}get _queryObject(){return _v(this._queryParams)}isEqual(e){if(e=Ft(e),!(e instanceof Rg))return!1;const n=this._repo===e._repo,r=sg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+XP(this._path)}}class wr extends Rg{constructor(e,n){super(e,n,new lg,!1)}get parent(){const e=mE(this._path);return e===null?null:new wr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class nl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),r=wp(this.ref,e);return new nl(this._node.getChild(n),r,He)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new nl(s,wp(this.ref,r),He)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function we(t,e){return t=Ft(t),t._checkNotDeleted("ref"),e!==void 0?wp(t._root,e):t._root}function wp(t,e){return t=Ft(t),oe(t._path)===null?UD("child","path",e):QE("child","path",e),new wr(t._repo,We(t._path,e))}function Dv(t){return YE("remove",t._path),Ag(t,null)}function Ag(t,e){t=Ft(t),YE("set",t._path),OD("set",e,t._path);const n=new xl;return XD(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Nt(t,e){FD("update",e,t._path);const n=new xl;return JD(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function wn(t){t=Ft(t);const e=new sS(()=>{}),n=new Cd(e);return YD(t._repo,t,n).then(r=>new nl(r,new wr(t._repo,t._path),t._queryParams.getIndex()))}class Cd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new a5("value",this,new nl(e.snapshotNode,new wr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new l5(this,e,n):null}matches(e){return e instanceof Cd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function c5(t,e,n,r,s){const i=new sS(n,void 0),o=new Cd(i);return e5(t._repo,t,o),()=>ZE(t._repo,t,o)}function Pg(t,e,n,r){return c5(t,"value",e)}function Dg(t,e,n){ZE(t._repo,t,null)}cD(wr);pD(wr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u5="FIREBASE_DATABASE_EMULATOR_HOST",Ep={};let d5=!1;function h5(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=bl(i);t.repoInfo_=new oE(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function f5(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||yr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pv(i,s),a=o.repoInfo,c;typeof process<"u"&&ev&&(c=ev[u5]),c?(i=`http://${c}?ns=${a.namespace}`,o=Pv(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new TP(t.name,t.options,e);BD("Invalid Firebase Database URL",o),le(o.path)||yr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=m5(a,t,u,new SP(t,n));return new g5(h,t)}function p5(t,e){const n=Ep[e];(!n||n[t.key]!==t)&&yr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),t5(t),delete n[t.key]}function m5(t,e,n,r){let s=Ep[e.name];s||(s={},Ep[e.name]=s);let i=s[t.toURLString()];return i&&yr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new GD(t,d5,n,r),s[t.toURLString()]=i,i}class g5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wr(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(p5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yr("Cannot call "+e+" on a deleted database.")}}function y5(t=z1(),e){const n=F1(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=k1("database");r&&_5(n,...r)}return n}function _5(t,e,n,r={}){t=Ft(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Ga(r,i.repoInfo_.emulatorOptions))return;yr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Mc(Mc.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:A1(r.mockUserToken,t.app.options.projectId);o=new Mc(a)}bl(e)&&(R1(e),P1("Database",!0)),h5(i,s,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v5(t){lP(B1),qa(new Gi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return f5(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Yr(tv,nv,t),Yr(tv,nv,"esm2020")}lr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};lr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};v5();var jv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,iS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.F=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(A,C,P){for(var N=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)N[ne-2]=arguments[ne];return _.prototype[C].apply(A,N)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,T){T||(T=0);const A=Array(16);if(typeof _=="string")for(var C=0;C<16;++C)A[C]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(C=0;C<16;++C)A[C]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],C=E.g[2];let P=E.g[3],N;N=_+(P^T&(C^P))+A[0]+3614090360&4294967295,_=T+(N<<7&4294967295|N>>>25),N=P+(C^_&(T^C))+A[1]+3905402710&4294967295,P=_+(N<<12&4294967295|N>>>20),N=C+(T^P&(_^T))+A[2]+606105819&4294967295,C=P+(N<<17&4294967295|N>>>15),N=T+(_^C&(P^_))+A[3]+3250441966&4294967295,T=C+(N<<22&4294967295|N>>>10),N=_+(P^T&(C^P))+A[4]+4118548399&4294967295,_=T+(N<<7&4294967295|N>>>25),N=P+(C^_&(T^C))+A[5]+1200080426&4294967295,P=_+(N<<12&4294967295|N>>>20),N=C+(T^P&(_^T))+A[6]+2821735955&4294967295,C=P+(N<<17&4294967295|N>>>15),N=T+(_^C&(P^_))+A[7]+4249261313&4294967295,T=C+(N<<22&4294967295|N>>>10),N=_+(P^T&(C^P))+A[8]+1770035416&4294967295,_=T+(N<<7&4294967295|N>>>25),N=P+(C^_&(T^C))+A[9]+2336552879&4294967295,P=_+(N<<12&4294967295|N>>>20),N=C+(T^P&(_^T))+A[10]+4294925233&4294967295,C=P+(N<<17&4294967295|N>>>15),N=T+(_^C&(P^_))+A[11]+2304563134&4294967295,T=C+(N<<22&4294967295|N>>>10),N=_+(P^T&(C^P))+A[12]+1804603682&4294967295,_=T+(N<<7&4294967295|N>>>25),N=P+(C^_&(T^C))+A[13]+4254626195&4294967295,P=_+(N<<12&4294967295|N>>>20),N=C+(T^P&(_^T))+A[14]+2792965006&4294967295,C=P+(N<<17&4294967295|N>>>15),N=T+(_^C&(P^_))+A[15]+1236535329&4294967295,T=C+(N<<22&4294967295|N>>>10),N=_+(C^P&(T^C))+A[1]+4129170786&4294967295,_=T+(N<<5&4294967295|N>>>27),N=P+(T^C&(_^T))+A[6]+3225465664&4294967295,P=_+(N<<9&4294967295|N>>>23),N=C+(_^T&(P^_))+A[11]+643717713&4294967295,C=P+(N<<14&4294967295|N>>>18),N=T+(P^_&(C^P))+A[0]+3921069994&4294967295,T=C+(N<<20&4294967295|N>>>12),N=_+(C^P&(T^C))+A[5]+3593408605&4294967295,_=T+(N<<5&4294967295|N>>>27),N=P+(T^C&(_^T))+A[10]+38016083&4294967295,P=_+(N<<9&4294967295|N>>>23),N=C+(_^T&(P^_))+A[15]+3634488961&4294967295,C=P+(N<<14&4294967295|N>>>18),N=T+(P^_&(C^P))+A[4]+3889429448&4294967295,T=C+(N<<20&4294967295|N>>>12),N=_+(C^P&(T^C))+A[9]+568446438&4294967295,_=T+(N<<5&4294967295|N>>>27),N=P+(T^C&(_^T))+A[14]+3275163606&4294967295,P=_+(N<<9&4294967295|N>>>23),N=C+(_^T&(P^_))+A[3]+4107603335&4294967295,C=P+(N<<14&4294967295|N>>>18),N=T+(P^_&(C^P))+A[8]+1163531501&4294967295,T=C+(N<<20&4294967295|N>>>12),N=_+(C^P&(T^C))+A[13]+2850285829&4294967295,_=T+(N<<5&4294967295|N>>>27),N=P+(T^C&(_^T))+A[2]+4243563512&4294967295,P=_+(N<<9&4294967295|N>>>23),N=C+(_^T&(P^_))+A[7]+1735328473&4294967295,C=P+(N<<14&4294967295|N>>>18),N=T+(P^_&(C^P))+A[12]+2368359562&4294967295,T=C+(N<<20&4294967295|N>>>12),N=_+(T^C^P)+A[5]+4294588738&4294967295,_=T+(N<<4&4294967295|N>>>28),N=P+(_^T^C)+A[8]+2272392833&4294967295,P=_+(N<<11&4294967295|N>>>21),N=C+(P^_^T)+A[11]+1839030562&4294967295,C=P+(N<<16&4294967295|N>>>16),N=T+(C^P^_)+A[14]+4259657740&4294967295,T=C+(N<<23&4294967295|N>>>9),N=_+(T^C^P)+A[1]+2763975236&4294967295,_=T+(N<<4&4294967295|N>>>28),N=P+(_^T^C)+A[4]+1272893353&4294967295,P=_+(N<<11&4294967295|N>>>21),N=C+(P^_^T)+A[7]+4139469664&4294967295,C=P+(N<<16&4294967295|N>>>16),N=T+(C^P^_)+A[10]+3200236656&4294967295,T=C+(N<<23&4294967295|N>>>9),N=_+(T^C^P)+A[13]+681279174&4294967295,_=T+(N<<4&4294967295|N>>>28),N=P+(_^T^C)+A[0]+3936430074&4294967295,P=_+(N<<11&4294967295|N>>>21),N=C+(P^_^T)+A[3]+3572445317&4294967295,C=P+(N<<16&4294967295|N>>>16),N=T+(C^P^_)+A[6]+76029189&4294967295,T=C+(N<<23&4294967295|N>>>9),N=_+(T^C^P)+A[9]+3654602809&4294967295,_=T+(N<<4&4294967295|N>>>28),N=P+(_^T^C)+A[12]+3873151461&4294967295,P=_+(N<<11&4294967295|N>>>21),N=C+(P^_^T)+A[15]+530742520&4294967295,C=P+(N<<16&4294967295|N>>>16),N=T+(C^P^_)+A[2]+3299628645&4294967295,T=C+(N<<23&4294967295|N>>>9),N=_+(C^(T|~P))+A[0]+4096336452&4294967295,_=T+(N<<6&4294967295|N>>>26),N=P+(T^(_|~C))+A[7]+1126891415&4294967295,P=_+(N<<10&4294967295|N>>>22),N=C+(_^(P|~T))+A[14]+2878612391&4294967295,C=P+(N<<15&4294967295|N>>>17),N=T+(P^(C|~_))+A[5]+4237533241&4294967295,T=C+(N<<21&4294967295|N>>>11),N=_+(C^(T|~P))+A[12]+1700485571&4294967295,_=T+(N<<6&4294967295|N>>>26),N=P+(T^(_|~C))+A[3]+2399980690&4294967295,P=_+(N<<10&4294967295|N>>>22),N=C+(_^(P|~T))+A[10]+4293915773&4294967295,C=P+(N<<15&4294967295|N>>>17),N=T+(P^(C|~_))+A[1]+2240044497&4294967295,T=C+(N<<21&4294967295|N>>>11),N=_+(C^(T|~P))+A[8]+1873313359&4294967295,_=T+(N<<6&4294967295|N>>>26),N=P+(T^(_|~C))+A[15]+4264355552&4294967295,P=_+(N<<10&4294967295|N>>>22),N=C+(_^(P|~T))+A[6]+2734768916&4294967295,C=P+(N<<15&4294967295|N>>>17),N=T+(P^(C|~_))+A[13]+1309151649&4294967295,T=C+(N<<21&4294967295|N>>>11),N=_+(C^(T|~P))+A[4]+4149444226&4294967295,_=T+(N<<6&4294967295|N>>>26),N=P+(T^(_|~C))+A[11]+3174756917&4294967295,P=_+(N<<10&4294967295|N>>>22),N=C+(_^(P|~T))+A[2]+718787259&4294967295,C=P+(N<<15&4294967295|N>>>17),N=T+(P^(C|~_))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(C+(N<<21&4294967295|N>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const T=_-this.blockSize,A=this.C;let C=this.h,P=0;for(;P<_;){if(C==0)for(;P<=T;)s(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<_;)if(A[C++]=E.charCodeAt(P++),C==this.blockSize){s(this,A),C=0;break}}else for(;P<_;)if(A[C++]=E[P++],C==this.blockSize){s(this,A),C=0;break}}this.h=C,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)E[_++]=this.g[T]>>>A&255;return E};function i(E,_){var T=a;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;const T=[];let A=!0;for(let C=E.length-1;C>=0;C--){const P=E[C]|0;A&&P==_||(T[C]=P,A=!1)}this.g=T}var a={};function c(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return f;if(E<0)return k(u(-E));const _=[];let T=1;for(let A=0;E>=T;A++)_[A]=E/T|0,T*=4294967296;return new o(_,0)}function h(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return k(h(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(_,8));let A=f;for(let P=0;P<E.length;P+=8){var C=Math.min(8,E.length-P);const N=parseInt(E.substring(P,P+C),_);C<8?(C=u(Math.pow(_,C)),A=A.j(C).add(u(N))):(A=A.j(T),A=A.add(u(N)))}return A}var f=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(I(this))return-k(this).m();let E=0,_=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);E+=(A>=0?A:4294967296+A)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(I(this))return"-"+k(this).toString(E);const _=u(Math.pow(E,6));var T=this;let A="";for(;;){const C=D(T,_).g;T=b(T,C.j(_));let P=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=C,S(T))return P+A;for(;P.length<6;)P="0"+P;A=P+A}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function I(E){return E.h==-1}t.l=function(E){return E=b(this,E),I(E)?-1:S(E)?0:1};function k(E){const _=E.g.length,T=[];for(let A=0;A<_;A++)T[A]=~E.g[A];return new o(T,~E.h).add(m)}t.abs=function(){return I(this)?k(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),T=[];let A=0;for(let C=0;C<=_;C++){let P=A+(this.i(C)&65535)+(E.i(C)&65535),N=(P>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);A=N>>>16,P&=65535,N&=65535,T[C]=N<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function b(E,_){return E.add(k(_))}t.j=function(E){if(S(this)||S(E))return f;if(I(this))return I(E)?k(this).j(k(E)):k(k(this).j(E));if(I(E))return k(this.j(k(E)));if(this.l(y)<0&&E.l(y)<0)return u(this.m()*E.m());const _=this.g.length+E.g.length,T=[];for(var A=0;A<2*_;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<E.g.length;C++){const P=this.i(A)>>>16,N=this.i(A)&65535,ne=E.i(C)>>>16,ye=E.i(C)&65535;T[2*A+2*C]+=N*ye,v(T,2*A+2*C),T[2*A+2*C+1]+=P*ye,v(T,2*A+2*C+1),T[2*A+2*C+1]+=N*ne,v(T,2*A+2*C+1),T[2*A+2*C+2]+=P*ne,v(T,2*A+2*C+2)}for(E=0;E<_;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=_;E<2*_;E++)T[E]=0;return new o(T,0)};function v(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function w(E,_){this.g=E,this.h=_}function D(E,_){if(S(_))throw Error("division by zero");if(S(E))return new w(f,f);if(I(E))return _=D(k(E),_),new w(k(_.g),k(_.h));if(I(_))return _=D(E,k(_)),new w(k(_.g),_.h);if(E.g.length>30){if(I(E)||I(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=_;A.l(E)<=0;)T=j(T),A=j(A);var C=O(T,1),P=O(A,1);for(A=O(A,2),T=O(T,2);!S(A);){var N=P.add(A);N.l(E)<=0&&(C=C.add(T),P=N),A=O(A,1),T=O(T,1)}return _=b(E,C.j(_)),new w(C,_)}for(C=f;E.l(_)>=0;){for(T=Math.max(1,Math.floor(E.m()/_.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),P=u(T),N=P.j(_);I(N)||N.l(E)>0;)T-=A,P=u(T),N=P.j(_);S(P)&&(P=m),C=C.add(P),E=b(E,N)}return new w(C,E)}t.B=function(E){return D(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)&E.i(A);return new o(T,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)|E.i(A);return new o(T,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)^E.i(A);return new o(T,this.h^E.h)};function j(E){const _=E.g.length+1,T=[];for(let A=0;A<_;A++)T[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(T,E.h)}function O(E,_){const T=_>>5;_%=32;const A=E.g.length-T,C=[];for(let P=0;P<A;P++)C[P]=_>0?E.i(P+T)>>>_|E.i(P+T+1)<<32-_:E.i(P+T);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,iS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Zr=o}).apply(typeof jv<"u"?jv:typeof self<"u"?self:typeof window<"u"?window:{});var mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oS,ra,aS,Vc,Sp,lS,cS,uS;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof mc=="object"&&mc];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,p){if(p)e:{var g=r;l=l.split(".");for(var x=0;x<l.length-1;x++){var L=l[x];if(!(L in g))break e;g=g[L]}l=l[l.length-1],x=g[l],p=p(x),p!=x&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(p){var g=[],x;for(x in p)Object.prototype.hasOwnProperty.call(p,x)&&g.push([x,p[x]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function c(l,p,g){return l.call.apply(l.bind,arguments)}function u(l,p,g){return u=c,u.apply(null,arguments)}function h(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var x=g.slice();return x.push.apply(x,arguments),l.apply(this,x)}}function f(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(x,L,M){for(var z=Array(arguments.length-2),re=2;re<arguments.length;re++)z[re-2]=arguments[re];return p.prototype[L].apply(x,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function y(l){const p=l.length;if(p>0){const g=Array(p);for(let x=0;x<p;x++)g[x]=l[x];return g}return[]}function S(l,p){for(let x=1;x<arguments.length;x++){const L=arguments[x];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=l.length||0;const M=L.length||0;l.length=g+M;for(let z=0;z<M;z++)l[g+z]=L[z]}else l.push(L)}}class I{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function k(l){o.setTimeout(()=>{throw l},0)}function b(){var l=E;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class v{constructor(){this.h=this.g=null}add(p,g){const x=w.get();x.set(p,g),this.h?this.h.next=x:this.g=x,this.h=x}}var w=new I(()=>new D,l=>l.reset());class D{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let j,O=!1,E=new v,_=()=>{const l=Promise.resolve(void 0);j=()=>{l.then(T)}};function T(){for(var l;l=b();){try{l.h.call(l.g)}catch(g){k(g)}var p=w;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}O=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};o.addEventListener("test",g,p),o.removeEventListener("test",g,p)}catch{}return l}();function N(l){return/^[\s\xa0]*$/.test(l)}function ne(l,p){C.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}f(ne,C),ne.prototype.init=function(l,p){const g=this.type=l.type,x=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ye="closure_listenable_"+(Math.random()*1e6|0),K=0;function X(l,p,g,x,L){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!x,this.ha=L,this.key=++K,this.da=this.fa=!1}function F(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function q(l,p,g){for(const x in l)p.call(g,l[x],x,l)}function Q(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function ue(l){const p={};for(const g in l)p[g]=l[g];return p}const ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Le(l,p){let g,x;for(let L=1;L<arguments.length;L++){x=arguments[L];for(g in x)l[g]=x[g];for(let M=0;M<ve.length;M++)g=ve[M],Object.prototype.hasOwnProperty.call(x,g)&&(l[g]=x[g])}}function Ce(l){this.src=l,this.g={},this.h=0}Ce.prototype.add=function(l,p,g,x,L){const M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);const z=At(l,p,x,L);return z>-1?(p=l[z],g||(p.fa=!1)):(p=new X(p,this.src,M,!!x,L),p.fa=g,l.push(p)),p};function at(l,p){const g=p.type;if(g in l.g){var x=l.g[g],L=Array.prototype.indexOf.call(x,p,void 0),M;(M=L>=0)&&Array.prototype.splice.call(x,L,1),M&&(F(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function At(l,p,g,x){for(let L=0;L<l.length;++L){const M=l[L];if(!M.da&&M.listener==p&&M.capture==!!g&&M.ha==x)return L}return-1}var bt="closure_lm_"+(Math.random()*1e6|0),bs={};function Sy(l,p,g,x,L){if(Array.isArray(p)){for(let M=0;M<p.length;M++)Sy(l,p[M],g,x,L);return null}return g=Iy(g),l&&l[ye]?l.J(p,g,a(x)?!!x.capture:!1,L):XT(l,p,g,!1,x,L)}function XT(l,p,g,x,L,M){if(!p)throw Error("Invalid event type");const z=a(L)?!!L.capture:!!L;let re=Hd(l);if(re||(l[bt]=re=new Ce(l)),g=re.add(p,g,x,z,M),g.proxy)return g;if(x=JT(),g.proxy=x,x.src=l,x.listener=g,l.addEventListener)P||(L=z),L===void 0&&(L=!1),l.addEventListener(p.toString(),x,L);else if(l.attachEvent)l.attachEvent(Cy(p.toString()),x);else if(l.addListener&&l.removeListener)l.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return g}function JT(){function l(g){return p.call(l.src,l.listener,g)}const p=ZT;return l}function Ty(l,p,g,x,L){if(Array.isArray(p))for(var M=0;M<p.length;M++)Ty(l,p[M],g,x,L);else x=a(x)?!!x.capture:!!x,g=Iy(g),l&&l[ye]?(l=l.i,M=String(p).toString(),M in l.g&&(p=l.g[M],g=At(p,g,x,L),g>-1&&(F(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[M],l.h--)))):l&&(l=Hd(l))&&(p=l.g[p.toString()],l=-1,p&&(l=At(p,g,x,L)),(g=l>-1?p[l]:null)&&Wd(g))}function Wd(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[ye])at(p.i,l);else{var g=l.type,x=l.proxy;p.removeEventListener?p.removeEventListener(g,x,l.capture):p.detachEvent?p.detachEvent(Cy(g),x):p.addListener&&p.removeListener&&p.removeListener(x),(g=Hd(p))?(at(g,l),g.h==0&&(g.src=null,p[bt]=null)):F(l)}}}function Cy(l){return l in bs?bs[l]:bs[l]="on"+l}function ZT(l,p){if(l.da)l=!0;else{p=new ne(p,this);const g=l.listener,x=l.ha||l.src;l.fa&&Wd(l),l=g.call(x,p)}return l}function Hd(l){return l=l[bt],l instanceof Ce?l:null}var Gd="__closure_events_fn_"+(Math.random()*1e9>>>0);function Iy(l){return typeof l=="function"?l:(l[Gd]||(l[Gd]=function(p){return l.handleEvent(p)}),l[Gd])}function wt(){A.call(this),this.i=new Ce(this),this.M=this,this.G=null}f(wt,A),wt.prototype[ye]=!0,wt.prototype.removeEventListener=function(l,p,g,x){Ty(this,l,p,g,x)};function Pt(l,p){var g,x=l.G;if(x)for(g=[];x;x=x.G)g.push(x);if(l=l.M,x=p.type||p,typeof p=="string")p=new C(p,l);else if(p instanceof C)p.target=p.target||l;else{var L=p;p=new C(x,l),Le(p,L)}L=!0;let M,z;if(g)for(z=g.length-1;z>=0;z--)M=p.g=g[z],L=Ml(M,x,!0,p)&&L;if(M=p.g=l,L=Ml(M,x,!0,p)&&L,L=Ml(M,x,!1,p)&&L,g)for(z=0;z<g.length;z++)M=p.g=g[z],L=Ml(M,x,!1,p)&&L}wt.prototype.N=function(){if(wt.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let x=0;x<g.length;x++)F(g[x]);delete l.g[p],l.h--}}this.G=null},wt.prototype.J=function(l,p,g,x){return this.i.add(String(l),p,!1,g,x)},wt.prototype.K=function(l,p,g,x){return this.i.add(String(l),p,!0,g,x)};function Ml(l,p,g,x){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let M=0;M<p.length;++M){const z=p[M];if(z&&!z.da&&z.capture==g){const re=z.listener,et=z.ha||z.src;z.fa&&at(l.i,z),L=re.call(et,x)!==!1&&L}}return L&&!x.defaultPrevented}function eC(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=u(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(l,p||0)}function ky(l){l.g=eC(()=>{l.g=null,l.i&&(l.i=!1,ky(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class tC extends A{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ky(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xo(l){A.call(this),this.h=l,this.g={}}f(xo,A);var Ny=[];function Ry(l){q(l.g,function(p,g){this.g.hasOwnProperty(g)&&Wd(p)},l),l.g={}}xo.prototype.N=function(){xo.Z.N.call(this),Ry(this)},xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qd=o.JSON.stringify,nC=o.JSON.parse,rC=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function Ay(){}function Py(){}var bo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Kd(){C.call(this,"d")}f(Kd,C);function Qd(){C.call(this,"c")}f(Qd,C);var ws={},Dy=null;function Ol(){return Dy=Dy||new wt}ws.Ia="serverreachability";function jy(l){C.call(this,ws.Ia,l)}f(jy,C);function wo(l){const p=Ol();Pt(p,new jy(p))}ws.STAT_EVENT="statevent";function Ly(l,p){C.call(this,ws.STAT_EVENT,l),this.stat=p}f(Ly,C);function Dt(l){const p=Ol();Pt(p,new Ly(p,l))}ws.Ja="timingevent";function My(l,p){C.call(this,ws.Ja,l),this.size=p}f(My,C);function Eo(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},p)}function So(){this.g=!0}So.prototype.ua=function(){this.g=!1};function sC(l,p,g,x,L,M){l.info(function(){if(l.g)if(M){var z="",re=M.split("&");for(let Te=0;Te<re.length;Te++){var et=re[Te].split("=");if(et.length>1){const lt=et[0];et=et[1];const Vn=lt.split("_");z=Vn.length>=2&&Vn[1]=="type"?z+(lt+"="+et+"&"):z+(lt+"=redacted&")}}}else z=null;else z=M;return"XMLHTTP REQ ("+x+") [attempt "+L+"]: "+p+`
`+g+`
`+z})}function iC(l,p,g,x,L,M,z){l.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+L+"]: "+p+`
`+g+`
`+M+" "+z})}function si(l,p,g,x){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+aC(l,g)+(x?" "+x:"")})}function oC(l,p){l.info(function(){return"TIMEOUT: "+p})}So.prototype.info=function(){};function aC(l,p){if(!l.g)return p;if(!p)return null;try{const M=JSON.parse(p);if(M){for(l=0;l<M.length;l++)if(Array.isArray(M[l])){var g=M[l];if(!(g.length<2)){var x=g[1];if(Array.isArray(x)&&!(x.length<1)){var L=x[0];if(L!="noop"&&L!="stop"&&L!="close")for(let z=1;z<x.length;z++)x[z]=""}}}}return qd(M)}catch{return p}}var Vl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Oy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vy;function Yd(){}f(Yd,Ay),Yd.prototype.g=function(){return new XMLHttpRequest},Vy=new Yd;function To(l){return encodeURIComponent(String(l))}function lC(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function Er(l,p,g,x){this.j=l,this.i=p,this.l=g,this.S=x||1,this.V=new xo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fy}function Fy(){this.i=null,this.g="",this.h=!1}var Uy={},Xd={};function Jd(l,p,g){l.M=1,l.A=Ul(On(p)),l.u=g,l.R=!0,By(l,null)}function By(l,p){l.F=Date.now(),Fl(l),l.B=On(l.A);var g=l.B,x=l.S;Array.isArray(x)||(x=[String(x)]),e0(g.i,"t",x),l.C=0,g=l.j.L,l.h=new Fy,l.g=_0(l.j,g?p:null,!l.u),l.P>0&&(l.O=new tC(u(l.Y,l,l.g),l.P)),p=l.V,g=l.g,x=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(Ny[0]=L.toString()),L=Ny);for(let M=0;M<L.length;M++){const z=Sy(g,L[M],x||p.handleEvent,!1,p.h||p);if(!z)break;p.g[z.key]=z}p=l.J?ue(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),wo(),sC(l.i,l.v,l.B,l.l,l.S,l.u)}Er.prototype.ba=function(l){l=l.target;const p=this.O;p&&Cr(l)==3?p.j():this.Y(l)},Er.prototype.Y=function(l){try{if(l==this.g)e:{const re=Cr(this.g),et=this.g.ya(),Te=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||a0(this.g)))){this.K||re!=4||et==7||(et==8||Te<=0?wo(3):wo(2)),Zd(this);var p=this.g.ca();this.X=p;var g=cC(this);if(this.o=p==200,iC(this.i,this.v,this.B,this.l,this.S,re,p),this.o){if(this.U&&!this.L){t:{if(this.g){var x,L=this.g;if((x=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(x)){var M=x;break t}}M=null}if(l=M)si(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,eh(this,l);else{this.o=!1,this.m=3,Dt(12),Es(this),Co(this);break e}}if(this.R){l=!0;let lt;for(;!this.K&&this.C<g.length;)if(lt=uC(this,g),lt==Xd){re==4&&(this.m=4,Dt(14),l=!1),si(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==Uy){this.m=4,Dt(15),si(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else si(this.i,this.l,lt,null),eh(this,lt);if($y(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||g.length!=0||this.h.h||(this.m=1,Dt(16),l=!1),this.o=this.o&&l,!l)si(this.i,this.l,g,"[Invalid Chunked Response]"),Es(this),Co(this);else if(g.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),lh(z),z.P=!0,Dt(11))}}else si(this.i,this.l,g,null),eh(this,g);re==4&&Es(this),this.o&&!this.K&&(re==4?p0(this.j,this):(this.o=!1,Fl(this)))}else SC(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,Dt(12)):(this.m=0,Dt(13)),Es(this),Co(this)}}}catch{}finally{}};function cC(l){if(!$y(l))return l.g.la();const p=a0(l.g);if(p==="")return"";let g="";const x=p.length,L=Cr(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return Es(l),Co(l),"";l.h.i=new o.TextDecoder}for(let M=0;M<x;M++)l.h.h=!0,g+=l.h.i.decode(p[M],{stream:!(L&&M==x-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function $y(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function uC(l,p){var g=l.C,x=p.indexOf(`
`,g);return x==-1?Xd:(g=Number(p.substring(g,x)),isNaN(g)?Uy:(x+=1,x+g>p.length?Xd:(p=p.slice(x,x+g),l.C=x+g,p)))}Er.prototype.cancel=function(){this.K=!0,Es(this)};function Fl(l){l.T=Date.now()+l.H,zy(l,l.H)}function zy(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Eo(u(l.aa,l),p)}function Zd(l){l.D&&(o.clearTimeout(l.D),l.D=null)}Er.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(oC(this.i,this.B),this.M!=2&&(wo(),Dt(17)),Es(this),this.m=2,Co(this)):zy(this,this.T-l)};function Co(l){l.j.I==0||l.K||p0(l.j,l)}function Es(l){Zd(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Ry(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function eh(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||th(g.h,l))){if(!l.L&&th(g.h,l)&&g.I==3){try{var x=g.Ba.g.parse(p)}catch{x=null}if(Array.isArray(x)&&x.length==3){var L=x;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Hl(g),zl(g);else break e;ah(g),Dt(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Eo(u(g.Va,g),6e3));Gy(g.h)<=1&&g.ta&&(g.ta=void 0)}else Ts(g,11)}else if((l.L||g.g==l)&&Hl(g),!N(p))for(L=g.Ba.g.parse(p),p=0;p<L.length;p++){let Te=L[p];const lt=Te[0];if(!(lt<=g.K))if(g.K=lt,Te=Te[1],g.I==2)if(Te[0]=="c"){g.M=Te[1],g.ba=Te[2];const Vn=Te[3];Vn!=null&&(g.ka=Vn,g.j.info("VER="+g.ka));const Cs=Te[4];Cs!=null&&(g.za=Cs,g.j.info("SVER="+g.za));const Ir=Te[5];Ir!=null&&typeof Ir=="number"&&Ir>0&&(x=1.5*Ir,g.O=x,g.j.info("backChannelRequestTimeoutMs_="+x)),x=g;const kr=l.g;if(kr){const ql=kr.g?kr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ql){var M=x.h;M.g||ql.indexOf("spdy")==-1&&ql.indexOf("quic")==-1&&ql.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(nh(M,M.h),M.h=null))}if(x.G){const ch=kr.g?kr.g.getResponseHeader("X-HTTP-Session-Id"):null;ch&&(x.wa=ch,Ae(x.J,x.G,ch))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),x=g;var z=l;if(x.na=y0(x,x.L?x.ba:null,x.W),z.L){qy(x.h,z);var re=z,et=x.O;et&&(re.H=et),re.D&&(Zd(re),Fl(re)),x.g=z}else h0(x);g.i.length>0&&Wl(g)}else Te[0]!="stop"&&Te[0]!="close"||Ts(g,7);else g.I==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Ts(g,7):oh(g):Te[0]!="noop"&&g.l&&g.l.qa(Te),g.A=0)}}wo(4)}catch{}}var dC=class{constructor(l,p){this.g=l,this.map=p}};function Wy(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Gy(l){return l.h?1:l.g?l.g.size:0}function th(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function nh(l,p){l.g?l.g.add(p):l.h=p}function qy(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Wy.prototype.cancel=function(){if(this.i=Ky(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ky(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return y(l.i)}var Qy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hC(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const x=l[g].indexOf("=");let L,M=null;x>=0?(L=l[g].substring(0,x),M=l[g].substring(x+1)):L=l[g],p(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Sr(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Sr?(this.l=l.l,Io(this,l.j),this.o=l.o,this.g=l.g,ko(this,l.u),this.h=l.h,rh(this,t0(l.i)),this.m=l.m):l&&(p=String(l).match(Qy))?(this.l=!1,Io(this,p[1]||"",!0),this.o=No(p[2]||""),this.g=No(p[3]||"",!0),ko(this,p[4]),this.h=No(p[5]||"",!0),rh(this,p[6]||"",!0),this.m=No(p[7]||"")):(this.l=!1,this.i=new Ao(null,this.l))}Sr.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Ro(p,Yy,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Ro(p,Yy,!0),"@"),l.push(To(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Ro(g,g.charAt(0)=="/"?mC:pC,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Ro(g,yC)),l.join("")},Sr.prototype.resolve=function(l){const p=On(this);let g=!!l.j;g?Io(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var x=l.h;if(g)ko(p,l.u);else if(g=!!l.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var L=p.h.lastIndexOf("/");L!=-1&&(x=p.h.slice(0,L+1)+x)}if(L=x,L==".."||L==".")x="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){x=L.lastIndexOf("/",0)==0,L=L.split("/");const M=[];for(let z=0;z<L.length;){const re=L[z++];re=="."?x&&z==L.length&&M.push(""):re==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),x&&z==L.length&&M.push("")):(M.push(re),x=!0)}x=M.join("/")}else x=L}return g?p.h=x:g=l.i.toString()!=="",g?rh(p,t0(l.i)):g=!!l.m,g&&(p.m=l.m),p};function On(l){return new Sr(l)}function Io(l,p,g){l.j=g?No(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function ko(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function rh(l,p,g){p instanceof Ao?(l.i=p,_C(l.i,l.l)):(g||(p=Ro(p,gC)),l.i=new Ao(p,l.l))}function Ae(l,p,g){l.i.set(p,g)}function Ul(l){return Ae(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function No(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ro(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,fC),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function fC(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Yy=/[#\/\?@]/g,pC=/[#\?:]/g,mC=/[#\?]/g,gC=/[#\?@]/g,yC=/#/g;function Ao(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Ss(l){l.g||(l.g=new Map,l.h=0,l.i&&hC(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=Ao.prototype,t.add=function(l,p){Ss(this),this.i=null,l=ii(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Xy(l,p){Ss(l),p=ii(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Jy(l,p){return Ss(l),p=ii(l,p),l.g.has(p)}t.forEach=function(l,p){Ss(this),this.g.forEach(function(g,x){g.forEach(function(L){l.call(p,L,x,this)},this)},this)};function Zy(l,p){Ss(l);let g=[];if(typeof p=="string")Jy(l,p)&&(g=g.concat(l.g.get(ii(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}t.set=function(l,p){return Ss(this),this.i=null,l=ii(this,l),Jy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},t.get=function(l,p){return l?(l=Zy(this,l),l.length>0?String(l[0]):p):p};function e0(l,p,g){Xy(l,p),g.length>0&&(l.i=null,l.g.set(ii(l,p),y(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let x=0;x<p.length;x++){var g=p[x];const L=To(g);g=Zy(this,g);for(let M=0;M<g.length;M++){let z=L;g[M]!==""&&(z+="="+To(g[M])),l.push(z)}}return this.i=l.join("&")};function t0(l){const p=new Ao;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function ii(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function _C(l,p){p&&!l.j&&(Ss(l),l.i=null,l.g.forEach(function(g,x){const L=x.toLowerCase();x!=L&&(Xy(this,x),e0(this,L,g))},l)),l.j=p}function vC(l,p){const g=new So;if(o.Image){const x=new Image;x.onload=h(Tr,g,"TestLoadImage: loaded",!0,p,x),x.onerror=h(Tr,g,"TestLoadImage: error",!1,p,x),x.onabort=h(Tr,g,"TestLoadImage: abort",!1,p,x),x.ontimeout=h(Tr,g,"TestLoadImage: timeout",!1,p,x),o.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=l}else p(!1)}function xC(l,p){const g=new So,x=new AbortController,L=setTimeout(()=>{x.abort(),Tr(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:x.signal}).then(M=>{clearTimeout(L),M.ok?Tr(g,"TestPingServer: ok",!0,p):Tr(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Tr(g,"TestPingServer: error",!1,p)})}function Tr(l,p,g,x,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),x(g)}catch{}}function bC(){this.g=new rC}function sh(l){this.i=l.Sb||null,this.h=l.ab||!1}f(sh,Ay),sh.prototype.g=function(){return new Bl(this.i,this.h)};function Bl(l,p){wt.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Bl,wt),t=Bl.prototype,t.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,Do(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Po(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;n0(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function n0(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Po(this):Do(this),this.readyState==3&&n0(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,Po(this))},t.Na=function(l){this.g&&(this.response=l,Po(this))},t.ga=function(){this.g&&Po(this)};function Po(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Do(l)}t.setRequestHeader=function(l,p){this.A.append(l,p)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function Do(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function r0(l){let p="";return q(l,function(g,x){p+=x,p+=":",p+=g,p+=`\r
`}),p}function ih(l,p,g){e:{for(x in g){var x=!1;break e}x=!0}x||(g=r0(g),typeof l=="string"?g!=null&&To(g):Ae(l,p,g))}function $e(l){wt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f($e,wt);var wC=/^https?$/i,EC=["POST","PUT"];t=$e.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,p,g,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vy.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(M){s0(this,M);return}if(l=g||"",g=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var L in x)g.set(L,x[L]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const M of x.keys())g.set(M,x.get(M));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(g.keys()).find(M=>M.toLowerCase()=="content-type"),L=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(EC,p,void 0)>=0)||x||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of g)this.g.setRequestHeader(M,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(M){s0(this,M)}};function s0(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,i0(l),$l(l)}function i0(l){l.A||(l.A=!0,Pt(l,"complete"),Pt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,Pt(this,"complete"),Pt(this,"abort"),$l(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$l(this,!0)),$e.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?o0(this):this.Xa())},t.Xa=function(){o0(this)};function o0(l){if(l.h&&typeof i<"u"){if(l.v&&Cr(l)==4)setTimeout(l.Ca.bind(l),0);else if(Pt(l,"readystatechange"),Cr(l)==4){l.h=!1;try{const M=l.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var x;if(x=M===0){let z=String(l.D).match(Qy)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),x=!wC.test(z?z.toLowerCase():"")}g=x}if(g)Pt(l,"complete"),Pt(l,"success");else{l.o=6;try{var L=Cr(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",i0(l)}}finally{$l(l)}}}}function $l(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||Pt(l,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Cr(l){return l.g?l.g.readyState:0}t.ca=function(){try{return Cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),nC(p)}};function a0(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function SC(l){const p={};l=(l.g&&Cr(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<l.length;x++){if(N(l[x]))continue;var g=lC(l[x]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const M=p[L]||[];p[L]=M,M.push(g)}Q(p,function(x){return x.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function jo(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function l0(l){this.za=0,this.i=[],this.j=new So,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=jo("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=jo("baseRetryDelayMs",5e3,l),this.Za=jo("retryDelaySeedMs",1e4,l),this.Ta=jo("forwardChannelMaxRetries",2,l),this.va=jo("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Wy(l&&l.concurrentRequestLimit),this.Ba=new bC,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=l0.prototype,t.ka=8,t.I=1,t.connect=function(l,p,g,x){Dt(0),this.W=l,this.H=p||{},g&&x!==void 0&&(this.H.OSID=g,this.H.OAID=x),this.F=this.X,this.J=y0(this,null,this.W),Wl(this)};function oh(l){if(c0(l),l.I==3){var p=l.V++,g=On(l.J);if(Ae(g,"SID",l.M),Ae(g,"RID",p),Ae(g,"TYPE","terminate"),Lo(l,g),p=new Er(l,l.j,p),p.M=2,p.A=Ul(On(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=p.A,g=!0),g||(p.g=_0(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Fl(p)}g0(l)}function zl(l){l.g&&(lh(l),l.g.cancel(),l.g=null)}function c0(l){zl(l),l.v&&(o.clearTimeout(l.v),l.v=null),Hl(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Wl(l){if(!Hy(l.h)&&!l.m){l.m=!0;var p=l.Ea;j||_(),O||(j(),O=!0),E.add(p,l),l.D=0}}function TC(l,p){return Gy(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Eo(u(l.Ea,l,p),m0(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new Er(this,this.j,l);let M=this.o;if(this.U&&(M?(M=ue(M),Le(M,this.U)):M=this.U),this.u!==null||this.R||(L.J=M,M=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var x=this.i[g];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(p+=x,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=d0(this,L,p),g=On(this.J),Ae(g,"RID",l),Ae(g,"CVER",22),this.G&&Ae(g,"X-HTTP-Session-Id",this.G),Lo(this,g),M&&(this.R?p="headers="+To(r0(M))+"&"+p:this.u&&ih(g,this.u,M)),nh(this.h,L),this.Ra&&Ae(g,"TYPE","init"),this.S?(Ae(g,"$req",p),Ae(g,"SID","null"),L.U=!0,Jd(L,g,null)):Jd(L,g,p),this.I=2}}else this.I==3&&(l?u0(this,l):this.i.length==0||Hy(this.h)||u0(this))};function u0(l,p){var g;p?g=p.l:g=l.V++;const x=On(l.J);Ae(x,"SID",l.M),Ae(x,"RID",g),Ae(x,"AID",l.K),Lo(l,x),l.u&&l.o&&ih(x,l.u,l.o),g=new Er(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=d0(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),nh(l.h,g),Jd(g,x,p)}function Lo(l,p){l.H&&q(l.H,function(g,x){Ae(p,x,g)}),l.l&&q({},function(g,x){Ae(p,x,g)})}function d0(l,p,g){g=Math.min(l.i.length,g);const x=l.l?u(l.l.Ka,l.l,l):null;e:{var L=l.i;let re=-1;for(;;){const et=["count="+g];re==-1?g>0?(re=L[0].g,et.push("ofs="+re)):re=0:et.push("ofs="+re);let Te=!0;for(let lt=0;lt<g;lt++){var M=L[lt].g;const Vn=L[lt].map;if(M-=re,M<0)re=Math.max(0,L[lt].g-100),Te=!1;else try{M="req"+M+"_"||"";try{var z=Vn instanceof Map?Vn:Object.entries(Vn);for(const[Cs,Ir]of z){let kr=Ir;a(Ir)&&(kr=qd(Ir)),et.push(M+Cs+"="+encodeURIComponent(kr))}}catch(Cs){throw et.push(M+"type="+encodeURIComponent("_badmap")),Cs}}catch{x&&x(Vn)}}if(Te){z=et.join("&");break e}}z=void 0}return l=l.i.splice(0,g),p.G=l,z}function h0(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;j||_(),O||(j(),O=!0),E.add(p,l),l.A=0}}function ah(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Eo(u(l.Da,l),m0(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,f0(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Eo(u(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Dt(10),zl(this),f0(this))};function lh(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function f0(l){l.g=new Er(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=On(l.na);Ae(p,"RID","rpc"),Ae(p,"SID",l.M),Ae(p,"AID",l.K),Ae(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ae(p,"TO",l.ia),Ae(p,"TYPE","xmlhttp"),Lo(l,p),l.u&&l.o&&ih(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=Ul(On(p)),g.u=null,g.R=!0,By(g,l)}t.Va=function(){this.C!=null&&(this.C=null,zl(this),ah(this),Dt(19))};function Hl(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function p0(l,p){var g=null;if(l.g==p){Hl(l),lh(l),l.g=null;var x=2}else if(th(l.h,p))g=p.G,qy(l.h,p),x=1;else return;if(l.I!=0){if(p.o)if(x==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var L=l.D;x=Ol(),Pt(x,new My(x,g)),Wl(l)}else h0(l);else if(L=p.m,L==3||L==0&&p.X>0||!(x==1&&TC(l,p)||x==2&&ah(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),L){case 1:Ts(l,5);break;case 4:Ts(l,10);break;case 3:Ts(l,6);break;default:Ts(l,2)}}}function m0(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function Ts(l,p){if(l.j.info("Error code "+p),p==2){var g=u(l.bb,l),x=l.Ua;const L=!x;x=new Sr(x||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Io(x,"https"),Ul(x),L?vC(x.toString(),g):xC(x.toString(),g)}else Dt(2);l.I=0,l.l&&l.l.pa(p),g0(l),c0(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function g0(l){if(l.I=0,l.ja=[],l.l){const p=Ky(l.h);(p.length!=0||l.i.length!=0)&&(S(l.ja,p),S(l.ja,l.i),l.h.i.length=0,y(l.i),l.i.length=0),l.l.oa()}}function y0(l,p,g){var x=g instanceof Sr?On(g):new Sr(g);if(x.g!="")p&&(x.g=p+"."+x.g),ko(x,x.u);else{var L=o.location;x=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const M=new Sr(null);x&&Io(M,x),p&&(M.g=p),L&&ko(M,L),g&&(M.h=g),x=M}return g=l.G,p=l.wa,g&&p&&Ae(x,g,p),Ae(x,"VER",l.ka),Lo(l,x),x}function _0(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new $e(new sh({ab:g})):new $e(l.ma),p.Fa(l.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function v0(){}t=v0.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Gl(){}Gl.prototype.g=function(l,p){return new Jt(l,p)};function Jt(l,p){wt.call(this),this.g=new l0(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!N(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!N(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new oi(this)}f(Jt,wt),Jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){oh(this.g)},Jt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=qd(l),l=g);p.i.push(new dC(p.Ya++,l)),p.I==3&&Wl(p)},Jt.prototype.N=function(){this.g.l=null,delete this.j,oh(this.g),delete this.g,Jt.Z.N.call(this)};function x0(l){Kd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}f(x0,Kd);function b0(){Qd.call(this),this.status=1}f(b0,Qd);function oi(l){this.g=l}f(oi,v0),oi.prototype.ra=function(){Pt(this.g,"a")},oi.prototype.qa=function(l){Pt(this.g,new x0(l))},oi.prototype.pa=function(l){Pt(this.g,new b0)},oi.prototype.oa=function(){Pt(this.g,"b")},Gl.prototype.createWebChannel=Gl.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,uS=function(){return new Gl},cS=function(){return Ol()},lS=ws,Sp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vl.NO_ERROR=0,Vl.TIMEOUT=8,Vl.HTTP_ERROR=6,Vc=Vl,Oy.COMPLETE="complete",aS=Oy,Py.EventType=bo,bo.OPEN="a",bo.CLOSE="b",bo.ERROR="c",bo.MESSAGE="d",wt.prototype.listen=wt.prototype.J,ra=Py,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,oS=$e}).apply(typeof mc<"u"?mc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo="12.10.0";function x5(t){mo=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Ym("@firebase/firestore");function ci(){return qs.logLevel}function H(t,...e){if(qs.logLevel<=fe.DEBUG){const n=e.map(jg);qs.debug(`Firestore (${mo}): ${t}`,...n)}}function _r(t,...e){if(qs.logLevel<=fe.ERROR){const n=e.map(jg);qs.error(`Firestore (${mo}): ${t}`,...n)}}function Ks(t,...e){if(qs.logLevel<=fe.WARN){const n=e.map(jg);qs.warn(`Firestore (${mo}): ${t}`,...n)}}function jg(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,dS(t,r,n)}function dS(t,e,n){let r=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw _r(r),new Error(r)}function xe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||dS(e,s,r)}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends uo{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class w5{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class E5{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string",31837,{l:r}),new hS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string",2055,{h:e}),new Ct(e)}}class S5{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class T5{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new S5(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C5{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,U1(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){xe(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Lv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I5(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=I5(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Tp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Yh(s)===Yh(i)?de(s,i):Yh(s)?1:-1}return de(t.length,e.length)}const k5=55296,N5=57343;function Yh(t){const e=t.charCodeAt(0);return e>=k5&&e<=N5}function Ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="__name__";class Bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Bn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return de(e.length,n.length)}static compareSegments(e,n){const r=Bn.isNumericId(e),s=Bn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Bn.extractNumericId(e).compare(Bn.extractNumericId(n)):Tp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class Ne extends Bn{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const R5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Bn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return R5.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mv}static keyField(){return new gt([Mv])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ne.fromString(e))}static fromName(e){return new Y(Ne.fromString(e).popFirst(5))}static empty(){return new Y(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function A5(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ov(t){if(!Y.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vv(t){if(Y.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Id(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Id(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function kl(t,e){if(!pS(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=-62135596800,Uv=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Uv);return new De(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fv)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uv}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kl(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:Ze("string",De._jsonSchemaVersion),seconds:Ze("number"),nanoseconds:Ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new De(0,0))}static max(){return new ee(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=-1;function P5(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new os(s,Y.empty(),e)}function D5(t){return new os(t.readTime,t.key,rl)}class os{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new os(ee.min(),Y.empty(),rl)}static max(){return new os(ee.max(),Y.empty(),rl)}}function j5(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L5="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==L5)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function O5(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}kd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=-1;function Nd(t){return t==null}function Pu(t){return t===0&&1/t==-1/0}function V5(t){return typeof t=="number"&&Number.isInteger(t)&&!Pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="";function F5(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bv(e)),e=U5(t.get(n),e);return Bv(e)}function U5(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case mS:n+="";break;default:n+=i}}return n}function Bv(t){return t+mS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gc(this.root,e,this.comparator,!1)}getReverseIterator(){return new gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gc(this.root,e,this.comparator,!0)}}class gc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zv(this.data.getIterator())}getIteratorFrom(e){return new zv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class zv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new ot(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yS("Invalid base64 string: "+i):i}}(e);return new xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const B5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function as(t){if(xe(!!t,39018),typeof t=="string"){let e=0;const n=B5.exec(t);if(xe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ls(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="server_timestamp",vS="__type__",xS="__previous_value__",bS="__local_write_time__";function Og(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vS])==null?void 0:r.stringValue)===_S}function Rd(t){const e=t.mapValue.fields[xS];return Og(e)?Rd(e):e}function sl(t){const e=as(t.mapValue.fields[bS].timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $5{constructor(e,n,r,s,i,o,a,c,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f}}const Du="(default)";class il{constructor(e,n){this.projectId=e,this.database=n||Du}static empty(){return new il("","")}get isDefaultDatabase(){return this.database===Du}isEqual(e){return e instanceof il&&e.projectId===this.projectId&&e.database===this.database}}function z5(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new il(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="__type__",W5="__max__",yc={mapValue:{}},ES="__vector__",ju="value";function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Og(t)?4:G5(t)?9007199254740991:H5(t)?10:11:Z(28295,{value:t})}function Jn(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sl(t).isEqual(sl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=as(s.timestampValue),a=as(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ls(s.bytesValue).isEqual(ls(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),a=Ge(i.doubleValue);return o===a?Pu(o)===Pu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ji(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if($v(o)!==$v(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Jn(o[c],a[c])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function ol(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function Zi(t,e){if(t===e)return 0;const n=cs(t),r=cs(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Wv(t.timestampValue,e.timestampValue);case 4:return Wv(sl(t),sl(e));case 5:return Tp(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ls(i),c=ls(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=de(a[u],c[u]);if(h!==0)return h}return de(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=de(Ge(i.latitude),Ge(o.latitude));return a!==0?a:de(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,y,S,I;const a=i.fields||{},c=o.fields||{},u=(m=a[ju])==null?void 0:m.arrayValue,h=(y=c[ju])==null?void 0:y.arrayValue,f=de(((S=u==null?void 0:u.values)==null?void 0:S.length)||0,((I=h==null?void 0:h.values)==null?void 0:I.length)||0);return f!==0?f:Hv(u,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===yc.mapValue&&o===yc.mapValue)return 0;if(i===yc.mapValue)return 1;if(o===yc.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=Tp(c[f],h[f]);if(m!==0)return m;const y=Zi(a[c[f]],u[h[f]]);if(y!==0)return y}return de(c.length,h.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function Wv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=as(t),r=as(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function Hv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Zi(n[s],r[s]);if(i)return i}return de(n.length,r.length)}function eo(t){return Cp(t)}function Cp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=as(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ls(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Cp(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Cp(n.fields[o])}`;return s+"}"}(t.mapValue):Z(61005,{value:t})}function Fc(t){switch(cs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Rd(t);return e?16+Fc(e):16;case 5:return 2*t.stringValue.length;case 6:return ls(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Fc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ys(r.fields,(i,o)=>{s+=i.length+Fc(o)}),s}(t.mapValue);default:throw Z(13486,{value:t})}}function Gv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ip(t){return!!t&&"integerValue"in t}function Vg(t){return!!t&&"arrayValue"in t}function qv(t){return!!t&&"nullValue"in t}function Kv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uc(t){return!!t&&"mapValue"in t}function H5(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[wS])==null?void 0:r.stringValue)===ES}function Ea(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ea(t.arrayValue.values[n]);return e}return{...t}}function G5(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===W5}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ea(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ht(Ea(this.value))}}function SS(t){const e=[];return ys(t.fields,(n,r)=>{const s=new gt([n]);if(Uc(r)){const i=SS(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,ee.min(),ee.min(),ee.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,s){return new kt(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new kt(e,2,n,ee.min(),ee.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,ee.min(),ee.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.position=e,this.inclusive=n}}function Qv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Zi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n="asc"){this.field=e,this.dir=n}}function q5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{}class Je extends TS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Q5(e,n,r):n==="array-contains"?new J5(e,r):n==="in"?new Z5(e,r):n==="not-in"?new ej(e,r):n==="array-contains-any"?new tj(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Y5(e,r):new X5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zi(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(Zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends TS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new jn(e,n)}matches(e){return CS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function CS(t){return t.op==="and"}function IS(t){return K5(t)&&CS(t)}function K5(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function kp(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+eo(t.value);if(IS(t))return t.filters.map(e=>kp(e)).join(",");{const e=t.filters.map(n=>kp(n)).join(",");return`${t.op}(${e})`}}function kS(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&Jn(r.value,s.value)}(t,e):t instanceof jn?function(r,s){return s instanceof jn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&kS(o,s.filters[a]),!0):!1}(t,e):void Z(19439)}function NS(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${eo(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(NS).join(" ,")+"}"}(t):"Filter"}class Q5 extends Je{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Y5 extends Je{constructor(e,n){super(e,"in",n),this.keys=RS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class X5 extends Je{constructor(e,n){super(e,"not-in",n),this.keys=RS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class J5 extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vg(n)&&ol(n.arrayValue,this.value)}}class Z5 extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ol(this.value.arrayValue,n)}}class ej extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ol(this.value.arrayValue,n)}}class tj extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ol(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Xv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new nj(t,e,n,r,s,i,o)}function Fg(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>eo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>eo(r)).join(",")),e.Te=n}return e.Te}function Ug(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!q5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yv(t.startAt,e.startAt)&&Yv(t.endAt,e.endAt)}function Np(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function rj(t,e,n,r,s,i,o,a){return new _o(t,e,n,r,s,i,o,a)}function Bg(t){return new _o(t)}function Jv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sj(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function AS(t){return t.collectionGroup!==null}function Sa(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new al(i,r))}),n.has(gt.keyField().canonicalString())||e.Ie.push(new al(gt.keyField(),r))}return e.Ie}function Kn(t){const e=te(t);return e.Ee||(e.Ee=ij(e,Sa(t))),e.Ee}function ij(t,e){if(t.limitType==="F")return Xv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new al(s.field,i)});const n=t.endAt?new Lu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lu(t.startAt.position,t.startAt.inclusive):null;return Xv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rp(t,e){const n=t.filters.concat([e]);return new _o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function oj(t,e){const n=t.explicitOrderBy.concat([e]);return new _o(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Mu(t,e,n){return new _o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ad(t,e){return Ug(Kn(t),Kn(e))&&t.limitType===e.limitType}function PS(t){return`${Fg(Kn(t))}|lt:${t.limitType}`}function ui(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>NS(s)).join(", ")}]`),Nd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>eo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>eo(s)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function Pd(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Sa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Qv(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Sa(r),s)||r.endAt&&!function(o,a,c){const u=Qv(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Sa(r),s))}(t,e)}function aj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DS(t){return(e,n)=>{let r=!1;for(const s of Sa(t)){const i=lj(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lj(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Zi(c,u):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cj=new Be(Y.comparator);function xr(){return cj}const jS=new Be(Y.comparator);function sa(...t){let e=jS;for(const n of t)e=e.insert(n.key,n);return e}function LS(t){let e=jS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ls(){return Ta()}function MS(){return Ta()}function Ta(){return new ni(t=>t.toString(),(t,e)=>t.isEqual(e))}const uj=new Be(Y.comparator),dj=new ot(Y.comparator);function he(...t){let e=dj;for(const n of t)e=e.add(n);return e}const hj=new ot(de);function fj(){return hj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function OS(t){return{integerValue:""+t}}function pj(t,e){return V5(e)?OS(e):$g(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this._=void 0}}function mj(t,e,n){return t instanceof ll?function(s,i){const o={fields:{[vS]:{stringValue:_S},[bS]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Og(i)&&(i=Rd(i)),i&&(o.fields[xS]=i),{mapValue:o}}(n,e):t instanceof cl?FS(t,e):t instanceof ul?US(t,e):function(s,i){const o=VS(s,i),a=Zv(o)+Zv(s.Ae);return Ip(o)&&Ip(s.Ae)?OS(a):$g(s.serializer,a)}(t,e)}function gj(t,e,n){return t instanceof cl?FS(t,e):t instanceof ul?US(t,e):n}function VS(t,e){return t instanceof Ou?function(r){return Ip(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ll extends Dd{}class cl extends Dd{constructor(e){super(),this.elements=e}}function FS(t,e){const n=BS(e);for(const r of t.elements)n.some(s=>Jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ul extends Dd{constructor(e){super(),this.elements=e}}function US(t,e){let n=BS(e);for(const r of t.elements)n=n.filter(s=>!Jn(s,r));return{arrayValue:{values:n}}}class Ou extends Dd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Zv(t){return Ge(t.integerValue||t.doubleValue)}function BS(t){return Vg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yj{constructor(e,n){this.field=e,this.transform=n}}function _j(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof cl&&s instanceof cl||r instanceof ul&&s instanceof ul?Ji(r.elements,s.elements,Jn):r instanceof Ou&&s instanceof Ou?Jn(r.Ae,s.Ae):r instanceof ll&&s instanceof ll}(t.transform,e.transform)}class vj{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jd{}function $S(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new WS(t.key,Qn.none()):new Nl(t.key,t.data,Qn.none());{const n=t.data,r=Ht.empty();let s=new ot(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _s(t.key,r,new nn(s.toArray()),Qn.none())}}function xj(t,e,n){t instanceof Nl?function(s,i,o){const a=s.value.clone(),c=tx(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof _s?function(s,i,o){if(!Bc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=tx(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(zS(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ca(t,e,n,r){return t instanceof Nl?function(i,o,a,c){if(!Bc(i.precondition,o))return a;const u=i.value.clone(),h=nx(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof _s?function(i,o,a,c){if(!Bc(i.precondition,o))return a;const u=nx(i.fieldTransforms,c,o),h=o.data;return h.setAll(zS(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Bc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function bj(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=VS(r.transform,s||null);i!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,i))}return n||null}function ex(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ji(r,s,(i,o)=>_j(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Nl extends jd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _s extends jd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tx(t,e,n){const r=new Map;xe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,gj(o,a,n[s]))}return r}function nx(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,mj(i,o,e))}return r}class WS extends jd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wj extends jd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xj(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=MS();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=$S(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(n,r)=>ex(n,r))&&Ji(this.baseMutations,e.baseMutations,(n,r)=>ex(n,r))}}class zg{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return uj}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zg(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,pe;function Cj(t){switch(t){case V.OK:return Z(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function HS(t){if(t===void 0)return _r("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ye.OK:return V.OK;case Ye.CANCELLED:return V.CANCELLED;case Ye.UNKNOWN:return V.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return V.INTERNAL;case Ye.UNAVAILABLE:return V.UNAVAILABLE;case Ye.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ye.NOT_FOUND:return V.NOT_FOUND;case Ye.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ye.ABORTED:return V.ABORTED;case Ye.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ye.DATA_LOSS:return V.DATA_LOSS;default:return Z(39323,{code:t})}}(pe=Ye||(Ye={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ij(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kj=new Zr([4294967295,4294967295],0);function rx(t){const e=Ij().encode(t),n=new iS;return n.update(e),new Uint8Array(n.digest())}function sx(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([s,i],0)]}class Wg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ia(`Invalid padding: ${n}`);if(r<0)throw new ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ia(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Zr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Zr.fromNumber(r)));return s.compare(kj)===1&&(s=new Zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=rx(e),[r,s]=sx(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wg(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=rx(e),[r,s]=sx(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Rl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ld(ee.min(),s,new Be(de),xr(),he())}}class Rl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Rl(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class GS{constructor(e,n){this.targetId=e,this.Ce=n}}class qS{constructor(e,n,r=xt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ix{constructor(){this.ve=0,this.Fe=ox(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=he(),n=he(),r=he();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new Rl(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=ox()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,xe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Nj{constructor(e){this.Ge=e,this.ze=new Map,this.je=xr(),this.He=_c(),this.Je=_c(),this.Ze=new Be(de)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Np(i))if(r===0){const o=new Y(i.path);this.et(n,o,kt.newNoDocument(o,ee.min()))}else xe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ls(r).toUint8Array()}catch(c){if(c instanceof yS)return Ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Wg(o,s,i)}catch(c){return Ks(c instanceof ia?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Np(a.target)){const c=new Y(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,kt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=he();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ld(e,n,this.Ze,this.je,r);return this.je=xr(),this.He=_c(),this.Je=_c(),this.Ze=new Be(de),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new ix,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new ot(de),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new ot(de),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ix),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function _c(){return new Be(Y.comparator)}function ox(){return new Be(Y.comparator)}const Rj={asc:"ASCENDING",desc:"DESCENDING"},Aj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pj={and:"AND",or:"OR"};class Dj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ap(t,e){return t.useProto3Json||Nd(e)?e:{value:e}}function Vu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jj(t,e){return Vu(t,e.toTimestamp())}function Yn(t){return xe(!!t,49232),ee.fromTimestamp(function(n){const r=as(n);return new De(r.seconds,r.nanos)}(t))}function Hg(t,e){return Pp(t,e).canonicalString()}function Pp(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function QS(t){const e=Ne.fromString(t);return xe(eT(e),10190,{key:e.toString()}),e}function Dp(t,e){return Hg(t.databaseId,e.path)}function Xh(t,e){const n=QS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(XS(n))}function YS(t,e){return Hg(t.databaseId,e)}function Lj(t){const e=QS(t);return e.length===4?Ne.emptyPath():XS(e)}function jp(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XS(t){return xe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ax(t,e,n){return{name:Dp(t,e),fields:n.value.mapValue.fields}}function Mj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(xe(h===void 0||typeof h=="string",58123),xt.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),xt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?V.UNKNOWN:HS(u.code);return new W(h,u.message||"")}(o);n=new qS(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xh(t,r.document.name),i=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):ee.min(),a=new Ht({mapValue:{fields:r.document.fields}}),c=kt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new $c(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xh(t,r.document),i=r.readTime?Yn(r.readTime):ee.min(),o=kt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new $c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xh(t,r.document),i=r.removedTargetIds||[];n=new $c([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Tj(s,i),a=r.targetId;n=new GS(a,o)}}return n}function Oj(t,e){let n;if(e instanceof Nl)n={update:ax(t,e.key,e.value)};else if(e instanceof WS)n={delete:Dp(t,e.key)};else if(e instanceof _s)n={update:ax(t,e.key,e.data),updateMask:Gj(e.fieldMask)};else{if(!(e instanceof wj))return Z(16599,{dt:e.type});n={verify:Dp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ll)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ul)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ou)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jj(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(t,e.precondition)),n}function Vj(t,e){return t&&t.length>0?(xe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Yn(s.updateTime):Yn(i);return o.isEqual(ee.min())&&(o=Yn(i)),new vj(o,s.transformResults||[])}(n,e))):[]}function Fj(t,e){return{documents:[YS(t,e.path)]}}function Uj(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=YS(t,s);const i=function(u){if(u.length!==0)return ZS(jn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:di(m.field),direction:zj(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ap(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function Bj(t){let e=Lj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=JS(f);return m instanceof jn&&IS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new al(hi(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Nd(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,y=f.values||[];return new Lu(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,y=f.values||[];return new Lu(y,m)}(n.endAt)),rj(e,s,o,i,a,"F",c,u)}function $j(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function JS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hi(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hi(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hi(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(hi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>JS(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function zj(t){return Rj[t]}function Wj(t){return Aj[t]}function Hj(t){return Pj[t]}function di(t){return{fieldPath:t.canonicalString()}}function hi(t){return gt.fromServerFormat(t.fieldPath)}function ZS(t){return t instanceof Je?function(n){if(n.op==="=="){if(Kv(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if(qv(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kv(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if(qv(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:Wj(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(s=>ZS(s));return r.length===1?r[0]:{compositeFilter:{op:Hj(n.op),filters:r}}}(t):Z(54877,{filter:t})}function Gj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function tT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=xt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(e){this.yt=e}}function Kj(t){const e=Bj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(){this.Sn=new Yj}addToCollectionParentIndex(e,n){return this.Sn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(os.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(os.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class Yj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nT=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(nT,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new to(0)}static ar(){return new to(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="LruGarbageCollector",Xj=1048576;function ux([t,e],[n,r]){const s=de(t,n);return s===0?de(e,r):s}class Jj{constructor(e){this.Pr=e,this.buffer=new ot(ux),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ux(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Zj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(cx,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){yo(n)?H(cx,"Ignoring IndexedDB error during garbage collection: ",n):await go(n)}await this.Ar(3e5)})}}class eL{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(kd.ce);const r=new Jj(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(lx)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lx):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),ci()<=fe.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function tL(t,e){return new eL(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(){this.changes=new ni(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ca(r.mutation,s,nn.empty(),De.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=sa();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ls();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=xr();const o=Ta(),a=function(){return Ta()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof _s)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ca(h.mutation,u,h.mutation.getFieldMask(),De.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>a.set(u,new rL(h,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Ta();let s=new Be((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||nn.empty();h=a.applyToLocalView(u,h),r.set(c,h);const f=(s.get(a.batchId)||he()).add(c);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=MS();h.forEach(m=>{if(!i.has(m)){const y=$S(n.get(m),r.get(m));y!==null&&f.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return sj(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Ls());let a=rl,c=i;return o.next(u=>U.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,he())).next(h=>({batchId:a,changes:LS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=sa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=sa();return this.indexManager.getCollectionParents(e,i).next(a=>U.forEach(a,c=>{const u=function(f,m){return new _o(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,kt.newInvalidDocument(h)))});let a=sa();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Ca(h.mutation,u,nn.empty(),De.now()),Pd(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Yn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Kj(s.bundledQuery),readTime:Yn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(){this.overlays=new Be(Y.comparator),this.Lr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ls();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Ls(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Ls(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ls(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return U.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Sj(n,r));let i=this.Lr.get(n);i===void 0&&(i=he(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.kr=new ot(ut.Kr),this.qr=new ot(ut.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ut(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Y(new Ne([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Y(new Ne([])),r=new ut(n,e),s=new ut(n,e+1);let i=he();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Y.comparator(e.key,n.key)||de(e.Hr,n.Hr)}static Ur(e,n){return de(e.Hr,n.Hr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new ot(ut.Kr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ej(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new ut(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Mg:this.Yn-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(de);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),U.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new ut(new Y(i),0);let a=new ot(de);return this.Jr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Hr)),!0)},o),U.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return U.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new ut(n,0),s=this.Jr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.ti=e,this.docs=function(){return new Be(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=xr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():kt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xr();const o=n.path,a=new Y(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||j5(D5(h),r)<=0||(s.has(h.key)||Pd(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z(9500)}ni(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uL(this)}getSize(e){return U.resolve(this.size)}}class uL extends nL{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.persistence=e,this.ri=new ni(n=>Fg(n),Ug),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new Gg,this.targetCount=0,this.oi=to._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),U.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new to(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.lr(n),U.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n){this._i={},this.overlays={},this.ai=new kd(0),this.ui=!1,this.ui=!0,this.ci=new aL,this.referenceDelegate=e(this),this.li=new dL(this),this.indexManager=new Qj,this.remoteDocumentCache=function(s){return new cL(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new qj(n),this.Pi=new iL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new lL(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new hL(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return U.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class hL extends M5{constructor(e){super(),this.currentSequenceNumber=e}}class qg{constructor(e){this.persistence=e,this.Ri=new Gg,this.Ai=null}static Vi(e){return new qg(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,r=>{const s=Y.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Fu{constructor(e,n){this.persistence=e,this.fi=new ni(r=>F5(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=tL(this,n)}static Vi(e,n){return new Fu(e,n)}Ti(){}Ii(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return U.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ee.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fc(e.data.value)),n}wr(e,n,r){return U.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kg(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return B2()?8:O5(D1())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fL;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ci()<=fe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(ci()<=fe.DEBUG&&H("QueryEngine","Query:",ui(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ci()<=fe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):U.resolve())}gs(e,n){if(Jv(n))return U.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Mu(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,a);return this.Ss(n,u,o,c.readTime)?this.gs(e,Mu(n,null,"F")):this.Ds(e,u,n,c)}))})))}ps(e,n,r,s){return Jv(n)||s.isEqual(ee.min())?U.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?U.resolve(null):(ci()<=fe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ui(n)),this.Ds(e,o,n,P5(s,rl)).next(a=>a))})}bs(e,n){let r=new ot(DS(e));return n.forEach((s,i)=>{Pd(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ci()<=fe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ui(n)),this.fs.getDocumentsMatchingQuery(e,n,os.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="LocalStore",mL=3e8;class gL{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Be(de),this.Fs=new ni(i=>Fg(i),Ug),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sL(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function yL(t,e,n,r){return new gL(t,e,n,r)}async function sT(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=he();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function _L(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,m=f.keys();let y=U.resolve();return m.forEach(S=>{y=y.next(()=>h.getEntry(c,S)).next(I=>{const k=u.docVersions.get(S);xe(k!==null,48541),I.version.compareTo(k)<0&&(f.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),h.addEntry(I)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=he();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function iT(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function vL(t,e){const n=te(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,f)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(xt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(f,y),function(I,k,b){return I.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=mL?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(m,y,h)&&a.push(n.li.updateTargetData(i,y))});let c=xr(),u=he();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(xL(i,o,e.documentUpdates).next(h=>{c=h.Bs,u=h.Ls})),!r.isEqual(ee.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.vs=s,i))}function xL(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=xr();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H(Qg,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function bL(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Mg),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wL(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Lp(t,e,n){const r=te(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yo(o))throw o;H(Qg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function dx(t,e,n){const r=te(t);let s=ee.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=te(c),m=f.Fs.get(h);return m!==void 0?U.resolve(f.vs.get(m)):f.li.getTargetData(u,h)}(r,o,Kn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:he())).next(a=>(EL(r,aj(e),a),{documents:a,ks:i})))}function EL(t,e,n){let r=t.Ms.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class hx{constructor(){this.activeTargetIds=fj()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SL{constructor(){this.vo=new hx,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new hx,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx="ConnectivityMonitor";class px{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(fx,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(fx,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc=null;function Mp(){return vc===null?vc=function(){return 268435456+Math.round(2147483648*Math.random())}():vc++,"0x"+vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="RestConnection",CL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class IL{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Du?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Mp(),a=this.Qo(e,n.toUriEncodedString());H(Jh,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:u}=new URL(a),h=bl(u);return this.zo(e,a,c,r,h).then(f=>(H(Jh,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Ks(Jh,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=CL[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection",Qo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Li extends IL{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Li.c_){const e=cS();Qo(e,lS.STAT_EVENT,n=>{n.stat===Sp.PROXY?H(Tt,"STAT_EVENT: detected buffering proxy"):n.stat===Sp.NOPROXY&&H(Tt,"STAT_EVENT: detected no buffering proxy")}),Li.c_=!0}}zo(e,n,r,s,i){const o=Mp();return new Promise((a,c)=>{const u=new oS;u.setWithCredentials(!0),u.listenOnce(aS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vc.NO_ERROR:const f=u.getResponseJson();H(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Vc.TIMEOUT:H(Tt,`RPC '${e}' ${o} timed out`),c(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Vc.HTTP_ERROR:const m=u.getStatus();if(H(Tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const I=function(b){const v=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(S.status);c(new W(I,S.message))}else c(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new W(V.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(Tt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);H(Tt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}T_(e,n,r){const s=Mp(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");H(Tt,`Creating RPC '${e}' stream ${s}: ${u}`,a);const h=o.createWebChannel(u,a);this.I_(h);let f=!1,m=!1;const y=new kL({Ho:S=>{m?H(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(f||(H(Tt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),H(Tt,`RPC '${e}' stream ${s} sending:`,S),h.send(S))},Jo:()=>h.close()});return Qo(h,ra.EventType.OPEN,()=>{m||(H(Tt,`RPC '${e}' stream ${s} transport opened.`),y.i_())}),Qo(h,ra.EventType.CLOSE,()=>{m||(m=!0,H(Tt,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.E_(h))}),Qo(h,ra.EventType.ERROR,S=>{m||(m=!0,Ks(Tt,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),y.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),Qo(h,ra.EventType.MESSAGE,S=>{var I;if(!m){const k=S.data[0];xe(!!k,16349);const b=k,v=(b==null?void 0:b.error)||((I=b[0])==null?void 0:I.error);if(v){H(Tt,`RPC '${e}' stream ${s} received error:`,v);const w=v.status;let D=function(E){const _=Ye[E];if(_!==void 0)return HS(_)}(w),j=v.message;w==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&Ks(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,j="Unknown error status: "+w+" with message "+v.message),m=!0,y.o_(new W(D,j)),h.close()}else H(Tt,`RPC '${e}' stream ${s} received:`,k),y.__(k)}}),Li.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return uS()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(t){return new Li(t)}function Zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){return new Dj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li.c_=!1;class oT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="PersistentStream";class aT{constructor(e,n,r,s,i,o,a,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new oT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(mx,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(mx,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RL extends aT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Mj(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Yn(o.readTime):ee.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=jp(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Np(c)?{documents:Fj(i,c)}:{query:Uj(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KS(i,o.resumeToken);const u=Ap(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Vu(i,o.snapshotVersion.toTimestamp());const u=Ap(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=$j(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=jp(this.serializer),n.removeTarget=e,this.K_(n)}}class AL extends aT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Vj(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=jp(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Oj(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{}class DL extends PL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Pp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Pp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function jL(t,e,n,r){return new DL(t,e,n,r)}class LL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_r(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="RemoteStore";class ML{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ri(this)&&(H(Qs,"Restarting streams for network reachability change."),await async function(c){const u=te(c);u.Ea.add(4),await Al(u),u.Va.set("Unknown"),u.Ea.delete(4),await Od(u)}(this))})}),this.Va=new LL(r,s)}}async function Od(t){if(ri(t))for(const e of t.Ra)await e(!0)}async function Al(t){for(const e of t.Ra)await e(!1)}function lT(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Zg(n)?Jg(n):vo(n).O_()&&Xg(n,e))}function Yg(t,e){const n=te(t),r=vo(n);n.Ia.delete(e),r.O_()&&cT(n,e),n.Ia.size===0&&(r.O_()?r.L_():ri(n)&&n.Va.set("Unknown"))}function Xg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vo(t).Z_(e)}function cT(t,e){t.da.$e(e),vo(t).X_(e)}function Jg(t){t.da=new Nj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),vo(t).start(),t.Va.ua()}function Zg(t){return ri(t)&&!vo(t).x_()&&t.Ia.size>0}function ri(t){return te(t).Ea.size===0}function uT(t){t.da=void 0}async function OL(t){t.Va.set("Online")}async function VL(t){t.Ia.forEach((e,n)=>{Xg(t,e)})}async function FL(t,e){uT(t),Zg(t)?(t.Va.ha(e),Jg(t)):t.Va.set("Unknown")}async function UL(t,e,n){if(t.Va.set("Online"),e instanceof qS&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){H(Qs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uu(t,r)}else if(e instanceof $c?t.da.Xe(e):e instanceof GS?t.da.st(e):t.da.tt(e),!n.isEqual(ee.min()))try{const r=await iT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(xt.EMPTY_BYTE_STRING,h.snapshotVersion)),cT(i,c);const f=new Vr(h.target,c,u,h.sequenceNumber);Xg(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H(Qs,"Failed to raise snapshot:",r),await Uu(t,r)}}async function Uu(t,e,n){if(!yo(e))throw e;t.Ea.add(1),await Al(t),t.Va.set("Offline"),n||(n=()=>iT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Qs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Od(t)})}function dT(t,e){return e().catch(n=>Uu(t,n,e))}async function Vd(t){const e=te(t),n=us(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Mg;for(;BL(e);)try{const s=await bL(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,$L(e,s)}catch(s){await Uu(e,s)}hT(e)&&fT(e)}function BL(t){return ri(t)&&t.Ta.length<10}function $L(t,e){t.Ta.push(e);const n=us(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function hT(t){return ri(t)&&!us(t).x_()&&t.Ta.length>0}function fT(t){us(t).start()}async function zL(t){us(t).ra()}async function WL(t){const e=us(t);for(const n of t.Ta)e.ea(n.mutations)}async function HL(t,e,n){const r=t.Ta.shift(),s=zg.from(r,e,n);await dT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Vd(t)}async function GL(t,e){e&&us(t).Y_&&await async function(r,s){if(function(o){return Cj(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();us(r).B_(),await dT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vd(r)}}(t,e),hT(t)&&fT(t)}async function gx(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H(Qs,"RemoteStore received new credentials");const r=ri(n);n.Ea.add(3),await Al(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Od(n)}async function qL(t,e){const n=te(t);e?(n.Ea.delete(2),await Od(n)):e||(n.Ea.add(2),await Al(n),n.Va.set("Unknown"))}function vo(t){return t.ma||(t.ma=function(n,r,s){const i=te(n);return i.sa(),new RL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:OL.bind(null,t),Yo:VL.bind(null,t),t_:FL.bind(null,t),J_:UL.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Zg(t)?Jg(t):t.Va.set("Unknown")):(await t.ma.stop(),uT(t))})),t.ma}function us(t){return t.fa||(t.fa=function(n,r,s){const i=te(n);return i.sa(),new AL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:zL.bind(null,t),t_:GL.bind(null,t),ta:WL.bind(null,t),na:HL.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Vd(t)):(await t.fa.stop(),t.Ta.length>0&&(H(Qs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ey(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ty(t,e){if(_r("AsyncQueue",`${e}: ${t}`),yo(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{static emptySet(e){return new Mi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=sa(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.ga=new Be(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class no{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new no(e,n,Mi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class QL{constructor(){this.queries=_x(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=te(n),i=s.queries;s.queries=_x(),i.forEach((o,a)=>{for(const c of a.ba)c.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function _x(){return new ni(t=>PS(t),Ad)}async function pT(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new KL,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=ty(o,`Initialization of query '${ui(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ny(n)}async function mT(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function YL(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&ny(n)}function XL(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function ny(t){t.Ca.forEach(e=>{e.next()})}var Op,vx;(vx=Op||(Op={})).Ma="default",vx.Cache="cache";class gT{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new no(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=no.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Op.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.key=e}}class _T{constructor(e){this.key=e}}class JL{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=he(),this.mutatedKeys=he(),this.eu=DS(e),this.tu=new Mi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new yx,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),y=Pd(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),I=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;m&&y?m.data.isEqual(y.data)?S!==I&&(r.track({type:3,doc:y}),k=!0):this.su(m,y)||(r.track({type:2,doc:y}),k=!0,(c&&this.eu(y,c)>0||u&&this.eu(y,u)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),k=!0):m&&!y&&(r.track({type:1,doc:m}),k=!0,(c||u)&&(a=!0)),k&&(y?(o=o.add(y),i=I?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(y,S){const I=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:k})}};return I(y)-I(S)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new no(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yx,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=he(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new _T(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new yT(r))}),n}cu(e){this.Za=e.ks,this.Ya=he();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return no.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ry="SyncEngine";class ZL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class e3{constructor(e){this.key=e,this.hu=!1}}class t3{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ni(a=>PS(a),Ad),this.Iu=new Map,this.Eu=new Set,this.Ru=new Be(Y.comparator),this.Au=new Map,this.Vu=new Gg,this.du={},this.mu=new Map,this.fu=to.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function n3(t,e,n=!0){const r=ST(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await vT(r,e,n,!0),s}async function r3(t,e){const n=ST(t);await vT(n,e,!0,!1)}async function vT(t,e,n,r){const s=await wL(t.localStore,Kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await s3(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&lT(t.remoteStore,s),a}async function s3(t,e,n,r,s){t.pu=(f,m,y)=>async function(I,k,b,v){let w=k.view.ru(b);w.Ss&&(w=await dx(I.localStore,k.query,!1).then(({documents:E})=>k.view.ru(E,w)));const D=v&&v.targetChanges.get(k.targetId),j=v&&v.targetMismatches.get(k.targetId)!=null,O=k.view.applyChanges(w,I.isPrimaryClient,D,j);return bx(I,k.targetId,O.au),O.snapshot}(t,f,m,y);const i=await dx(t.localStore,e,!0),o=new JL(e,i.ks),a=o.ru(i.documents),c=Rl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);bx(t,n,u.au);const h=new ZL(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function i3(t,e,n){const r=te(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Ad(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yg(r.remoteStore,s.targetId),Vp(r,s.targetId)}).catch(go)):(Vp(r,s.targetId),await Lp(r.localStore,s.targetId,!0))}async function o3(t,e){const n=te(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yg(n.remoteStore,r.targetId))}async function a3(t,e,n){const r=p3(t);try{const s=await function(o,a){const c=te(o),u=De.now(),h=a.reduce((y,S)=>y.add(S.key),he());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let S=xr(),I=he();return c.xs.getEntries(y,h).next(k=>{S=k,S.forEach((b,v)=>{v.isValidDocument()||(I=I.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,S)).next(k=>{f=k;const b=[];for(const v of a){const w=bj(v,f.get(v.key).overlayedDocument);w!=null&&b.push(new _s(v.key,w,SS(w.value.mapValue),Qn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,b,a)}).next(k=>{m=k;const b=k.applyToLocalDocumentSet(f,I);return c.documentOverlayCache.saveOverlays(y,k.batchId,b)})}).then(()=>({batchId:m.batchId,changes:LS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.du[o.currentUser.toKey()];u||(u=new Be(de)),u=u.insert(a,c),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await Pl(r,s.changes),await Vd(r.remoteStore)}catch(s){const i=ty(s,"Failed to persist write");n.reject(i)}}async function xT(t,e){const n=te(t);try{const r=await vL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?xe(o.hu,14607):s.removedDocuments.size>0&&(xe(o.hu,42227),o.hu=!1))}),await Pl(n,r,e)}catch(r){await go(r)}}function xx(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=te(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.ba)m.va(a)&&(u=!0)}),u&&ny(c)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function l3(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Be(Y.comparator);o=o.insert(i,kt.newNoDocument(i,ee.min()));const a=he().add(i),c=new Ld(ee.min(),new Map,new Be(de),o,a);await xT(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),sy(r)}else await Lp(r.localStore,e,!1).then(()=>Vp(r,e,n)).catch(go)}async function c3(t,e){const n=te(t),r=e.batch.batchId;try{const s=await _L(n.localStore,e);wT(n,r,null),bT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pl(n,s)}catch(s){await go(s)}}async function u3(t,e,n){const r=te(t);try{const s=await function(o,a){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(xe(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);wT(r,e,n),bT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pl(r,s)}catch(s){await go(s)}}function bT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function wT(t,e,n){const r=te(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Vp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||ET(t,r)})}function ET(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Yg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),sy(t))}function bx(t,e,n){for(const r of n)r instanceof yT?(t.Vu.addReference(r.key,e),d3(t,r)):r instanceof _T?(H(ry,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||ET(t,r.key)):Z(19791,{wu:r})}function d3(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(ry,"New document in limbo: "+n),t.Eu.add(r),sy(t))}function sy(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(Ne.fromString(e)),r=t.fu.next();t.Au.set(r,new e3(n)),t.Ru=t.Ru.insert(n,r),lT(t.remoteStore,new Vr(Kn(Bg(n.path)),r,"TargetPurposeLimboResolution",kd.ce))}}async function Pl(t,e,n){const r=te(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,c)=>{o.push(r.pu(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Kg.Es(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(c,u){const h=te(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(u,m=>U.forEach(m.Ts,y=>h.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>U.forEach(m.Is,y=>h.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!yo(f))throw f;H(Qg,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const y=h.vs.get(m),S=y.snapshotVersion,I=y.withLastLimboFreeSnapshotVersion(S);h.vs=h.vs.insert(m,I)}}}(r.localStore,i))}async function h3(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H(ry,"User change. New user:",e.toKey());const r=await sT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(c=>{c.reject(new W(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pl(n,r.Ns)}}function f3(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return he().add(r.key);{let s=he();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function ST(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=f3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=l3.bind(null,e),e.Pu.J_=YL.bind(null,e.eventManager),e.Pu.yu=XL.bind(null,e.eventManager),e}function p3(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=c3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=u3.bind(null,e),e}class Bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Md(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return yL(this.persistence,new pL,e.initialUser,this.serializer)}Cu(e){return new rT(qg.Vi,this.serializer)}Du(e){return new SL}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bu.provider={build:()=>new Bu};class m3 extends Bu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){xe(this.persistence.referenceDelegate instanceof Fu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Zj(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new rT(r=>Fu.Vi(r,n),this.serializer)}}class Fp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h3.bind(null,this.syncEngine),await qL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QL}()}createDatastore(e){const n=Md(e.databaseInfo.databaseId),r=NL(e.databaseInfo);return jL(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new ML(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>xx(this.syncEngine,n,0),function(){return px.v()?new px:new TL}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,h){const f=new t3(s,i,o,a,c,u);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=te(s);H(Qs,"RemoteStore shutting down."),i.Ea.add(5),await Al(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Fp.provider={build:()=>new Fp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="FirestoreClient";class g3{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=Lg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(ds,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(ds,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ty(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ef(t,e){t.asyncQueue.verifyOperationInProgress(),H(ds,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await sT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await y3(t);H(ds,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>gx(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>gx(e.remoteStore,s)),t._onlineComponents=e}async function y3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(ds,"Using user provided OfflineComponentProvider");try{await ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await ef(t,new Bu)}}else H(ds,"Using default OfflineComponentProvider"),await ef(t,new m3(void 0));return t._offlineComponents}async function CT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(ds,"Using user provided OnlineComponentProvider"),await wx(t,t._uninitializedComponentsProvider._online)):(H(ds,"Using default OnlineComponentProvider"),await wx(t,new Fp))),t._onlineComponents}function _3(t){return CT(t).then(e=>e.syncEngine)}async function IT(t){const e=await CT(t),n=e.eventManager;return n.onListen=n3.bind(null,e.syncEngine),n.onUnlisten=i3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=r3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=o3.bind(null,e.syncEngine),n}function v3(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new TT({next:m=>{h.Nu(),o.enqueueAndForget(()=>mT(i,f));const y=m.docs.has(a);!y&&m.fromCache?u.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new gT(Bg(a.path),h,{includeMetadataChanges:!0,Ka:!0});return pT(i,f)}(await IT(t),t.asyncQueue,e,n,r)),r.promise}function x3(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new TT({next:m=>{h.Nu(),o.enqueueAndForget(()=>mT(i,f)),m.fromCache&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new gT(a,h,{includeMetadataChanges:!0,Ka:!0});return pT(i,f)}(await IT(t),t.asyncQueue,e,n,r)),r.promise}function b3(t,e){const n=new cr;return t.asyncQueue.enqueueAndForget(async()=>a3(await _3(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w3="ComponentProvider",Ex=new Map;function E3(t,e,n,r,s){return new $5(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,kT(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="firestore.googleapis.com",Sx=!0;class Tx{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=NT,this.ssl=Sx}else this.host=e.host,this.ssl=e.ssl??Sx;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xj)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fd{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tx(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new b5;switch(r.type){case"firstParty":return new T5(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ex.get(n);r&&(H(w3,"Removing Datastore"),Ex.delete(n),r.terminate())}(this),Promise.resolve()}}function S3(t,e,n,r={}){var u;t=vr(t,Fd);const s=bl(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(R1(`https://${a}`),P1("Firestore",!0)),i.host!==NT&&i.host!==a&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:s,emulatorOptions:r};if(!Ga(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Ct.MOCK_USER;else{h=A1(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ct(m)}t._authCredentials=new w5(new hS(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(kl(n,Ke._jsonSchema))return new Ke(e,r||null,new Y(Ne.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:Ze("string",Ke._jsonSchemaVersion),referencePath:Ze("string")};class es extends vs{constructor(e,n,r){super(e,n,Bg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new Y(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function iy(t,e,...n){if(t=Ft(t),fS("collection","path",e),t instanceof Fd){const r=Ne.fromString(e,...n);return Vv(r),new es(t,null,r)}{if(!(t instanceof Ke||t instanceof es))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Vv(r),new es(t.firestore,null,r)}}function Dl(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=Lg.newId()),fS("doc","path",e),t instanceof Fd){const r=Ne.fromString(e,...n);return Ov(r),new Ke(t,null,new Y(r))}{if(!(t instanceof Ke||t instanceof es))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Ov(r),new Ke(t.firestore,t instanceof es?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx="AsyncQueue";class Ix{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new oT(this,"async_queue_retry"),this._c=()=>{const r=Zh();r&&H(Cx,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Zh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new cr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!yo(e))throw e;H(Cx,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,_r("INTERNAL UNHANDLED ERROR: ",kx(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ey.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Z(47125,{Pc:kx(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function kx(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class jl extends Fd{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ix,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ix(e),this._firestoreClient=void 0,await e}}}function T3(t,e){const n=typeof t=="object"?t:z1(),r=typeof t=="string"?t:Du,s=F1(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=k1("firestore");i&&S3(s,...i)}return s}function oy(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||C3(t),t._firestoreClient}function C3(t){var r,s,i,o;const e=t._freezeSettings(),n=E3(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new g3(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(xt.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kl(e,fn._jsonSchema))return fn.fromBase64String(e.bytes)}}fn._jsonSchemaVersion="firestore/bytes/1.0",fn._jsonSchema={type:Ze("string",fn._jsonSchemaVersion),bytes:Ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(kl(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:Ze("string",Xn._jsonSchemaVersion),latitude:Ze("number"),longitude:Ze("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kl(e,Pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Pn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pn._jsonSchemaVersion="firestore/vectorValue/1.0",Pn._jsonSchema={type:Ze("string",Pn._jsonSchemaVersion),vectorValues:Ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3=/^__.*__$/;class k3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,n,this.fieldTransforms):new Nl(e,this.data,n,this.fieldTransforms)}}class RT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _s(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function AT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:t})}}class ly{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ly({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return $u(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(AT(this.dataSource)&&I3.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class N3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Md(e)}createContext(e,n,r,s=!1){return new ly({dataSource:e,methodName:n,targetDoc:r,path:gt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cy(t){const e=t._freezeSettings(),n=Md(t._databaseId);return new N3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function R3(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);dy("Data must be an object, but it was:",o,r);const a=PT(r,o);let c,u;if(i.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=Ys(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);LT(h,m)||h.push(m)}c=new nn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new k3(new Ht(a),c,u)}class Bd extends Ud{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bd}}class uy extends Ud{_toFieldTransform(e){return new yj(e.path,new ll)}isEqual(e){return e instanceof uy}}function A3(t,e,n,r){const s=t.createContext(1,e,n);dy("Data must be an object, but it was:",s,r);const i=[],o=Ht.empty();ys(r,(c,u)=>{const h=jT(e,c,n);u=Ft(u);const f=s.childContextForFieldPath(h);if(u instanceof Bd)i.push(h);else{const m=Ll(u,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new nn(i);return new RT(o,a,s.fieldTransforms)}function P3(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[Ys(e,r,n)],c=[s];if(i.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(Ys(e,i[m])),c.push(i[m+1]);const u=[],h=Ht.empty();for(let m=a.length-1;m>=0;--m)if(!LT(u,a[m])){const y=a[m];let S=c[m];S=Ft(S);const I=o.childContextForFieldPath(y);if(S instanceof Bd)u.push(y);else{const k=Ll(S,I);k!=null&&(u.push(y),h.set(y,k))}}const f=new nn(u);return new RT(h,f,o.fieldTransforms)}function D3(t,e,n,r=!1){return Ll(n,t.createContext(r?4:3,e))}function Ll(t,e){if(DT(t=Ft(t)))return dy("Unsupported field value:",e,t),PT(t,e);if(t instanceof Ud)return function(r,s){if(!AT(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ll(a,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pj(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:Vu(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vu(s.serializer,i)}}if(r instanceof Xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:KS(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pn)return function(o,a){const c=o instanceof Pn?o.toArray():o;return{mapValue:{fields:{[wS]:{stringValue:ES},[ju]:{arrayValue:{values:c.map(h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return $g(a.serializer,h)})}}}}}}(r,s);if(tT(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Id(r)}`)}(t,e)}function PT(t,e){const n={};return gS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,s)=>{const i=Ll(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function DT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Xn||t instanceof fn||t instanceof Ke||t instanceof Ud||t instanceof Pn||tT(t))}function dy(t,e,n){if(!DT(n)||!pS(n)){const r=Id(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ys(t,e,n){if((e=Ft(e))instanceof ay)return e._internalPath;if(typeof e=="string")return jT(t,e);throw $u("Field path arguments must be of type string or ",t,!1,void 0,n)}const j3=new RegExp("[~\\*/\\[\\]]");function jT(t,e,n){if(e.search(j3)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ay(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $u(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new W(V.INVALID_ARGUMENT,a+t+c)}function LT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ju].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ge(o.doubleValue));return new Pn(n)}convertGeoPoint(e){return new Xn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const n=as(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);xe(eT(r),9688,{name:e});const s=new il(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||_r(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends L3{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function M3(){return new uy("serverTimestamp")}const Nx="@firebase/firestore",Rx="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new O3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ys("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O3 extends OT{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hy{}class fy extends hy{}function py(t,e,...n){let r=[];e instanceof hy&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof my).length,a=i.filter(c=>c instanceof $d).length;if(o>1||o>0&&a>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class $d extends fy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $d(e,n,r)}_apply(e){const n=this._parse(e);return FT(e._query,n),new vs(e.firestore,e.converter,Rp(e._query,n))}_parse(e){const n=cy(e.firestore);return function(i,o,a,c,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Px(f,h);const S=[];for(const I of f)S.push(Ax(c,i,I));m={arrayValue:{values:S}}}else m=Ax(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Px(f,h),m=D3(a,o,f,h==="in"||h==="not-in");return Je.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function VT(t,e,n){const r=e,s=Ys("where",t);return $d._create(s,r,n)}class my extends hy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new my(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)FT(o,c),o=Rp(o,c)}(e._query,n),new vs(e.firestore,e.converter,Rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gy extends fy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gy(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new al(i,o)}(e._query,this._field,this._direction);return new vs(e.firestore,e.converter,oj(e._query,n))}}function F3(t,e="asc"){const n=e,r=Ys("orderBy",t);return gy._create(r,n)}class yy extends fy{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new yy(e,n,r)}_apply(e){return new vs(e.firestore,e.converter,Mu(e._query,this._limit,this._limitType))}}function U3(t){return yy._create("limit",t,"F")}function Ax(t,e,n){if(typeof(n=Ft(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!AS(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!Y.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gv(t,new Y(r))}if(n instanceof Ke)return Gv(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Id(n)}.`)}function Px(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FT(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function B3(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class oa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vs extends OT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ys("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Vs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vs._jsonSchema={type:Ze("string",Vs._jsonSchemaVersion),bundleSource:Ze("string","DocumentSnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class zc extends Vs{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zc(this._firestore,this._userDataWriter,r.key,r,new oa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new zc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new zc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:$3(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:Ze("string",Oi._jsonSchemaVersion),bundleSource:Ze("string","QuerySnapshot"),bundleName:Ze("string"),bundle:Ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){t=vr(t,Ke);const e=vr(t.firestore,jl),n=oy(e);return v3(n,t._key).then(r=>H3(e,t,r))}function _y(t){t=vr(t,vs);const e=vr(t.firestore,jl),n=oy(e),r=new MT(e);return V3(t._query),x3(n,t._query).then(s=>new Oi(e,r,t,s))}function z3(t,e,n){t=vr(t,Ke);const r=vr(t.firestore,jl),s=B3(t.converter,e),i=cy(r);return UT(r,[R3(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Qn.none())])}function W3(t,e,n,...r){t=vr(t,Ke);const s=vr(t.firestore,jl),i=cy(s);let o;return o=typeof(e=Ft(e))=="string"||e instanceof ay?P3(i,"updateDoc",t._key,e,n,r):A3(i,"updateDoc",t._key,e),UT(s,[o.toMutation(t._key,Qn.exists(!0))])}function UT(t,e){const n=oy(t);return b3(n,e)}function H3(t,e,n){const r=n.docs.get(e._key),s=new MT(t);return new Vs(t,s,e._key,r,new oa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){x5(B1),qa(new Gi("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new jl(new E5(r.getProvider("auth-internal")),new C5(o,r.getProvider("app-check-internal")),z5(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Yr(Nx,Rx,e),Yr(Nx,Rx,"esm2020")})();const G3={apiKey:"AIzaSyDC0N0W9RRaf8ouVV4nJej8khPGVv3vywI",authDomain:"bbl-legends.firebaseapp.com",projectId:"bbl-legends",storageBucket:"YOUR_PROJECT.appspot.com",messagingSenderId:"711744045780",appId:"1:711744045780:web:27691c4d7556e58f32b141",databaseURL:"https://bbl-legends-default-rtdb.asia-southeast1.firebasedatabase.app"},BT=$1(G3),Ee=y5(BT),xs=T3(BT),Yo=[{name:"Warrior",minStars:0,badge:"⚔️",color:"#CD7F32"},{name:"Elite",minStars:11,badge:"🛡️",color:"#C0C0C0"},{name:"Master",minStars:21,badge:"🏅",color:"#FFD700"},{name:"Grandmaster",minStars:36,badge:"💎",color:"#B9F2FF"},{name:"Epic",minStars:51,badge:"👑",color:"#9B59B6"},{name:"Legend",minStars:66,badge:"🌟",color:"#F1C40F"},{name:"Mythic",minStars:81,badge:"🔥",color:"#E74C3C"},{name:"Mythical Honor",minStars:91,badge:"✨",color:"#3498DB"},{name:"Mythical Glory",minStars:96,badge:"🌌",color:"#8E44AD"},{name:"Mythical Immortal",minStars:101,badge:"🏆",color:"#F39C12"}];function _e(t=0){const e=Math.max(0,t);let n=Yo[0],r=0;for(let a=Yo.length-1;a>=0;a--)if(e>=Yo[a].minStars){n=Yo[a],r=a;break}const s=Yo[r+1],i=e-n.minStars,o=s?s.minStars-e:0;return{name:n.name,badge:n.badge,color:n.color,tier:r,stars:e,starsInTier:i,starsToNext:o}}const $T="bbl_user";function zT(){try{const t=localStorage.getItem($T);return t?JSON.parse(t):null}catch{return null}}function vy(t){localStorage.setItem($T,JSON.stringify(t))}async function q3(t){return(await zd(Dl(xs,"players",t.toLowerCase()))).exists()}async function K3(t){const e=await zd(Dl(xs,"players",t.toLowerCase()));if(!e.exists())return null;const n=e.data(),r=n.basketballStars??0,s=n.badmintonStars??(n.stars||0),i={userId:n.userId,username:n.username,avatar:n.avatar,stars:n.stars||0,basketballStars:r,badmintonStars:s,wins:n.wins||0,losses:n.losses||0,basketballWins:n.basketballWins||0,basketballLosses:n.basketballLosses||0,badmintonWins:n.badmintonWins||0,badmintonLosses:n.badmintonLosses||0,basketballRankInfo:_e(r),badmintonRankInfo:_e(s),rankInfo:_e(r)};return vy(i),i}async function Q3(t,e){const n=t.toLowerCase(),r={userId:n,username:t,avatar:e,stars:0,basketballStars:0,badmintonStars:0,wins:0,losses:0,basketballWins:0,basketballLosses:0,badmintonWins:0,badmintonLosses:0};return await z3(Dl(xs,"players",n),{...r,basketballRank:"Warrior",badmintonRank:"Warrior",rank:"Warrior",currentMatchId:null,currentLobbyId:null,createdAt:M3()}),vy(r),r}async function WT(t){const e=await zd(Dl(xs,"players",t));if(!e.exists())return null;const n=e.data(),r=n.basketballStars??0,s=n.badmintonStars??(n.stars||0),i=_e(r),o=_e(s);return{...n,basketballStars:r,badmintonStars:s,basketballRankInfo:i,badmintonRankInfo:o,rankInfo:i}}async function Y3(t){const e=t==="basketball"?"basketballStars":"badmintonStars",n=t==="basketball"?"basketballWins":"badmintonWins",r=py(iy(xs,"players"),F3(e,"desc"),U3(20)),i=(await _y(r)).docs.map(o=>{const a=o.data(),c=a[e]??0,u=a[n]??0;return{userId:o.id,username:a.username||o.id,avatar:a.avatar??0,stars:c,wins:u,rankInfo:_e(c)}});return i.sort((o,a)=>a.stars-o.stars||a.wins-o.wins),i.slice(0,10)}async function X3(t,e,n){const r=Dl(xs,"players",t),s=await zd(r);if(!s.exists())return;const i=s.data(),o=n==="basketball"?"basketballStars":"badmintonStars",a=n==="basketball"?"basketballRank":"badmintonRank",c=n==="basketball"?"basketballWins":"badmintonWins",u=n==="basketball"?"basketballLosses":"badmintonLosses",h=i[o]??(n==="badminton"&&i.stars||0),f=Math.max(0,h+e),m=_e(f),y={[o]:f,[a]:m.name,wins:(i.wins||0)+(e>0?1:0),losses:(i.losses||0)+(e<0?1:0)};e>0&&(y[c]=(i[c]||0)+1),e<0&&(y[u]=(i[u]||0)+1),await W3(r,y);const S=zT();return S&&S.userId===t&&vy({...S,[o]:f,stars:n==="badminton"?f:S.stars||0}),{stars:f,rank:m,sport:n}}const Yt=fd((t,e)=>({userId:null,username:null,avatar:null,stars:0,basketballStars:0,badmintonStars:0,wins:0,losses:0,basketballWins:0,basketballLosses:0,badmintonWins:0,badmintonLosses:0,basketballRankInfo:_e(0),badmintonRankInfo:_e(0),rankInfo:_e(0),isRegistered:!1,hydrate:()=>{const n=zT();if(n){const r=n.basketballStars??0,s=n.badmintonStars??(n.stars||0);t({userId:n.userId,username:n.username,avatar:n.avatar,stars:n.stars||0,basketballStars:r,badmintonStars:s,wins:n.wins||0,losses:n.losses||0,basketballWins:n.basketballWins||0,basketballLosses:n.basketballLosses||0,badmintonWins:n.badmintonWins||0,badmintonLosses:n.badmintonLosses||0,basketballRankInfo:_e(r),badmintonRankInfo:_e(s),rankInfo:_e(r),isRegistered:!0})}},setUser:n=>{const r=n.basketballStars??0,s=n.badmintonStars??0;t({userId:n.userId,username:n.username,avatar:n.avatar,stars:n.stars||0,basketballStars:r,badmintonStars:s,basketballRankInfo:_e(r),badmintonRankInfo:_e(s),rankInfo:_e(r),isRegistered:!0})},updateSportStars:(n,r)=>{t(n==="basketball"?{basketballStars:r,basketballRankInfo:_e(r),rankInfo:_e(r)}:{badmintonStars:r,badmintonRankInfo:_e(r)})},updateStars:n=>{t({stars:n,basketballStars:n,basketballRankInfo:_e(n),rankInfo:_e(n)})},logout:()=>{localStorage.removeItem("bbl_user"),t({userId:null,username:null,avatar:null,stars:0,basketballStars:0,badmintonStars:0,wins:0,losses:0,basketballWins:0,basketballLosses:0,badmintonWins:0,badmintonLosses:0,basketballRankInfo:_e(0),badmintonRankInfo:_e(0),rankInfo:_e(0),isRegistered:!1})}})),ie="/bbl-legends",hs={BASKETBALL:"basketball",BADMINTON:"badminton"},HT={[hs.BASKETBALL]:5,[hs.BADMINTON]:2},Dx={[hs.BASKETBALL]:["1v1","2v2","3v3","4v4","5v5"],[hs.BADMINTON]:["1v1","2v2"]},GT={"1v1":1,"2v2":2,"3v3":3,"4v4":4,"5v5":5},xy={MATCH_ACCEPT:15,VOTE_DURATION:300},Fr={WIN:1,LOSS:-1,NON_VOTER_WIN:0,NON_VOTER_LOSS:-2},zt={WAITING:"waiting",QUEUED:"queued",MATCHED:"matched"},Xs={PENDING_ACCEPT:"pending_accept",IN_PROGRESS:"in_progress",VOTING:"voting",COMPLETED:"completed"},Up=[{id:"ranked",name:"Ranked",tag:"Competitive · Season 4",description:"Win stars, climb the ladder. Every match counts.",color:"#ec5b13",backgroundUrl:`${ie}/game_modes/ranked.jpg`,backgroundPosition:"left top"},{id:"classic",name:"Classic",tag:"Old School",description:"Traditional rules. No gimmicks. Just basketball.",color:"#f59e0b",backgroundUrl:`${ie}/game_modes/classic.jpg`,backgroundPosition:"center"},{id:"rainbow",name:"Rainbow",tag:"Special Mode",description:"Chaos rules. Expect the unexpected every possession.",color:"#a78bfa",backgroundUrl:`${ie}/game_modes/rainbow.jpg`,backgroundPosition:"center top"},{id:"onse_onse",name:"Onse Onse",tag:"Street Rules",description:"Filipino street ball. One shot, one chance.",color:"#10b981",backgroundUrl:`${ie}/game_modes/onse_onse.jpg`,backgroundPosition:"center top"}],aa="ranked",Qe=[`${ie}/avatars/avatar1.jpg`,`${ie}/avatars/avatar2.jpg`,`${ie}/avatars/avatar3.jpg`,`${ie}/avatars/avatar4.jpg`,`${ie}/avatars/avatar5.jpg`,`${ie}/avatars/avatar6.jpg`,`${ie}/avatars/avatar7.jpg`,`${ie}/avatars/avatar8.jpg`,`${ie}/avatars/avatar9.jpg`,`${ie}/avatars/avatar10.jpg`,`${ie}/avatars/avatar11.jpg`,`${ie}/avatars/avatar12.jpg`,`${ie}/avatars/avatar13.jpg`,`${ie}/avatars/avatar14.jpg`,`${ie}/avatars/avatar15.jpg`],jx=4,xc=16,J3=/^[a-zA-Z0-9_]+$/,Z3="https://lh3.googleusercontent.com/aida-public/AB6AXuBQi6XbHfLEpG4vWWe8gJ96-qS0ZbVd2GC7BC2aOSqjxq5Wca7aLuFzSzhmIaeAY8IIsr89R86eon-hdt_IKZboUj9MXvtGjW-0x9Sz_Ud17ripaXeWBBkVeikhCipD6osKYwLQM-UFOhhMkVtZg8cWd8f7ctjcpx0835qjWlxoS9DFztyoipVhdqfgC4UgX2GgxI36XsvmUje7co2RvLhM1O20hOb4VXXSNZBkBr66q77JI5O7ZX-U2q4Ejpvynyg1AlbOw7TRRMQ",tf="new",eM="returning";function tM(){const[t,e]=R.useState(tf),[n,r]=R.useState(""),[s,i]=R.useState(0),[o,a]=R.useState(!1),c=Yt(I=>I.setUser),u=Xt(),h=n.length>=jx&&n.length<=xc&&J3.test(n),f=async()=>{if(!h){se.error("Invalid username. 4-16 chars, alphanumeric + underscore only.");return}a(!0);try{if(await q3(n)){se.error("That IGN is already taken. Choose another.");return}const k=await Q3(n,s);c(k),se.success("Welcome to BBL Legends!"),u("/home")}catch(I){se.error("Registration failed. Try again."),console.error(I)}finally{a(!1)}},m=async()=>{if(!h){se.error("Enter a valid IGN to look up.");return}a(!0);try{const I=await K3(n);if(!I){se.error("No account found with that IGN.");return}c(I),se.success(`Welcome back, ${I.username}!`),u("/home")}catch(I){se.error("Lookup failed. Try again."),console.error(I)}finally{a(!1)}},y=I=>{e(I),r("")},S=t===tf;return d.jsxs("div",{className:"relative flex h-full min-h-screen w-full flex-col moba-gradient overflow-x-hidden max-w-md mx-auto border-x border-primary/10",children:[d.jsxs("div",{className:"flex items-center p-4 pb-2 justify-between",children:[d.jsx("div",{className:"text-white flex size-12 shrink-0 items-center cursor-pointer",onClick:()=>u(-1),children:d.jsx("span",{className:"material-symbols-outlined text-3xl",children:"arrow_back"})}),d.jsxs("div",{className:"flex flex-col items-center flex-1 pr-12",children:[d.jsx("div",{className:"w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-1 shadow-lg shadow-primary/50",children:d.jsx("span",{className:"material-symbols-outlined text-white text-3xl",children:"sports_esports"})}),d.jsx("h2",{className:"text-white text-xs font-black leading-tight tracking-[0.1em] uppercase",children:"BBL LEGENDS"})]})]}),d.jsxs("div",{className:"px-6 pt-4 pb-2 text-center",children:[d.jsx("h1",{className:"text-moba-accent text-3xl font-black italic tracking-tighter uppercase gold-text-glow",children:"WELCOME TO BBL LEGENDS"}),d.jsx("p",{className:"text-slate-300 text-xs mt-1 font-semibold uppercase tracking-widest opacity-80",children:S?"Create your legend today":"Continue your legacy"})]}),d.jsx("div",{className:"px-6 pt-2 pb-4",children:d.jsxs("div",{className:"flex rounded-xl overflow-hidden border-2 border-primary/30 bg-black/40 p-1 gap-1",children:[d.jsxs("button",{onClick:()=>y(tf),className:`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-200
              ${S?"bg-primary text-white shadow-[0_4px_15px_-3px_rgba(236,91,19,0.6)]":"text-slate-400 hover:text-white"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"add_circle"}),"New Legend"]}),d.jsxs("button",{onClick:()=>y(eM),className:`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-200
              ${S?"text-slate-400 hover:text-white":"bg-primary text-white shadow-[0_4px_15px_-3px_rgba(236,91,19,0.6)]"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"login"}),"Returning"]})]})}),d.jsx("div",{className:"px-6 pb-4",children:d.jsxs("div",{className:"flex flex-col gap-2",children:[d.jsxs("div",{className:"flex justify-between items-end",children:[d.jsx("p",{className:"text-white text-sm font-bold uppercase tracking-wider",children:S?"Username":"Your IGN"}),S&&d.jsxs("span",{className:"text-moba-accent text-[10px] font-bold",children:[n.length,"/",xc]})]}),d.jsxs("div",{className:"flex w-full items-stretch rounded-xl overflow-hidden border-2 border-primary/30 bg-black/40 focus-within:border-moba-accent transition-all",children:[d.jsx("input",{className:"bg-transparent flex w-full min-w-0 flex-1 border-none text-white focus:ring-0 h-14 placeholder:text-slate-500 p-4 text-base font-bold italic",placeholder:S?"ENTER YOUR IGN...":"TYPE YOUR IGN...",type:"text",value:n,onChange:I=>r(I.target.value.replace(/\s/g,"")),maxLength:xc}),d.jsx("div",{className:"text-moba-accent flex items-center justify-center pr-4",children:d.jsx("span",{className:"material-symbols-outlined",children:h?"verified_user":"info"})})]}),d.jsxs("p",{className:"text-slate-400 text-[10px] font-medium leading-normal flex items-center gap-1 px-1 italic",children:[d.jsx("span",{className:"material-symbols-outlined text-xs",children:"info"}),S?`IGN must be ${jx}-${xc} characters. No special symbols allowed.`:"Enter the exact IGN you registered with to restore your account."]})]})}),S&&d.jsxs("div",{className:"px-6 flex-1 flex flex-col",children:[d.jsxs("p",{className:"text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2",children:["Choose your Avatar",d.jsx("span",{className:"h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"})]}),d.jsx("div",{className:"grid grid-cols-4 gap-3 mb-6",children:Qe.map((I,k)=>d.jsxs("div",{onClick:()=>i(k),className:`aspect-square rounded-lg overflow-hidden relative bg-moba-purple cursor-pointer ${s===k?"glowing-border":"border-2 border-white/10 hover:border-white/30"} transition-all`,children:[d.jsx("img",{className:`w-full h-full object-cover ${s===k?"":"grayscale opacity-60 hover:grayscale-0 hover:opacity-100"}`,src:I,alt:`Avatar ${k+1}`}),s===k&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"absolute inset-0 bg-moba-accent/20"}),d.jsx("div",{className:"absolute bottom-0 right-0 p-0.5 bg-moba-accent",children:d.jsx("span",{className:"material-symbols-outlined text-[10px] text-black font-black",children:"check"})})]})]},k))})]}),!S&&d.jsx("div",{className:"px-6 flex-1 flex flex-col justify-center pb-4",children:d.jsxs("div",{className:"bg-black/30 rounded-xl p-5 border border-white/5 flex flex-col items-center gap-3 text-center",children:[d.jsx("div",{className:"w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30",children:d.jsx("span",{className:"material-symbols-outlined text-primary text-3xl",children:"manage_accounts"})}),d.jsxs("div",{children:[d.jsx("p",{className:"text-white text-sm font-black uppercase tracking-wider",children:"Restore Your Account"}),d.jsx("p",{className:"text-slate-400 text-xs mt-1 leading-relaxed",children:"Your profile, rank, and stats will be loaded from the cloud using your IGN."})]}),d.jsx("div",{className:"flex items-center gap-4 w-full mt-1",children:[{icon:"emoji_events",label:"Rank"},{icon:"star",label:"Stars"},{icon:"sports_score",label:"W/L"}].map(({icon:I,label:k})=>d.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1 bg-white/5 rounded-lg py-2",children:[d.jsx("span",{className:"material-symbols-outlined text-moba-accent text-lg",children:I}),d.jsx("span",{className:"text-white text-[10px] font-bold uppercase tracking-wider",children:k})]},k))})]})}),S&&d.jsx("div",{className:"px-6 pb-8",children:d.jsxs("div",{className:"bg-black/30 rounded-xl p-4 border border-white/5 flex items-center gap-4",children:[d.jsxs("div",{className:"w-16 h-16 flex-shrink-0 relative",children:[d.jsx("div",{className:"absolute inset-0 bg-moba-gold/20 blur-lg rounded-full"}),d.jsx("img",{className:"w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]",src:Z3,alt:"Warrior rank badge icon"})]}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("p",{className:"text-white text-[10px] font-bold uppercase tracking-widest opacity-60",children:"Starting Rank"}),d.jsx("p",{className:"text-moba-gold text-xl font-black italic tracking-tight",children:"WARRIOR"}),d.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[d.jsx("span",{className:"material-symbols-outlined text-moba-accent text-sm",children:"star_outline"}),d.jsx("span",{className:"text-moba-accent text-xs font-bold",children:"0 Stars"})]})]})]})}),d.jsxs("div",{className:"px-6 pb-10 mt-auto",children:[d.jsxs("button",{onClick:S?f:m,disabled:!h||o,className:"w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-xl text-xl italic tracking-tighter uppercase shadow-[0_8px_25px_-5px_rgba(236,91,19,0.5)] active:scale-[0.98] transition-all border-b-4 border-black/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed",children:[o?S?"CREATING...":"SEARCHING...":S?"START YOUR JOURNEY":"RESTORE MY ACCOUNT",d.jsx("span",{className:"material-symbols-outlined font-black",children:S?"bolt":"download"})]}),d.jsx("p",{className:"text-center text-white/40 text-[10px] mt-4 font-bold uppercase tracking-widest",children:S?"By starting, you agree to our terms of battle":"Your progress will be restored from the cloud"})]})]})}const nM=[{label:"Home",icon:"home",path:"/home"},{label:"Ranks",icon:"military_tech",path:"/ranks"},{label:"Profile",icon:"person",path:"/profile"}];function by(){const t=Xt(),e=Mn();return d.jsx("nav",{className:"flex justify-around border-t border-slate-200 dark:border-primary/20 bg-[#f8f6f6] dark:bg-[#221610] px-4 pb-6 pt-2",children:nM.map(n=>{const r=e.pathname===n.path;return d.jsxs("button",{onClick:()=>t(n.path),className:`flex flex-col items-center gap-1 transition-colors ${r?"text-primary":"text-slate-400 dark:text-slate-500 hover:text-primary"}`,children:[d.jsx("span",{className:"material-symbols-outlined text-[28px]",children:n.icon}),d.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest",children:n.label})]},n.label)})})}const rM="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let sM=t=>crypto.getRandomValues(new Uint8Array(t)),iM=(t,e,n)=>{let r=(2<<Math.log2(t.length-1))-1,s=-~(1.6*r*e/t.length);return(i=e)=>{let o="";for(;;){let a=n(s),c=s|0;for(;c--;)if(o+=t[a[c]&r]||"",o.length>=i)return o}}},oM=(t,e=21)=>iM(t,e|0,sM),aM=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=rM[n[t]&63];return e};const lM=oM("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",5);async function cM(t,e,n){const r=lM(),s=we(Ee,`lobbies/${r}`),i=t==="basketball"?n.basketballStars??n.stars??0:n.badmintonStars??n.stars??0,o={code:r,host:n.userId,sport:t,location:e,status:zt.WAITING,selectedFormat:null,gameMode:aa,playerCount:1,players:{[n.userId]:{username:n.username,avatar:n.avatar,stars:i,basketballStars:n.basketballStars??0,badmintonStars:n.badmintonStars??0,ready:!0,joinedAt:Date.now()}},createdAt:Date.now()};return await Ag(s,o),{code:r,...o}}async function uM(t,e){var a;const n=we(Ee,`lobbies/${t}`),r=await wn(n);if(!r.exists())throw new Error("Lobby not found");const s=r.val();if(s.status===zt.QUEUED)throw new Error("Cannot join - lobby is currently in queue");if(s.status!==zt.WAITING)throw new Error("Lobby is no longer accepting players");const i=HT[s.sport]||5;if(s.playerCount>=i)throw new Error("Lobby is full");if((a=s.players)!=null&&a[e.userId])throw new Error("You are already in this lobby");const o=s.sport==="basketball"?e.basketballStars??e.stars??0:e.badmintonStars??e.stars??0;return await Nt(n,{[`players/${e.userId}`]:{username:e.username,avatar:e.avatar,stars:o,basketballStars:e.basketballStars??0,badmintonStars:e.badmintonStars??0,ready:!0,joinedAt:Date.now()},playerCount:s.playerCount+1}),{code:t,...s}}async function dM(t,e){const n=we(Ee,`lobbies/${t}`),r=await wn(n);if(!r.exists())return;const s=r.val();if(await Dv(we(Ee,`lobbies/${t}/players/${e}`)),await Nt(n,{playerCount:Math.max(0,s.playerCount-1)}),s.host===e){const i=Object.keys(s.players||{}).filter(o=>o!==e);i.length>0?await Nt(n,{host:i[0]}):await Dv(n)}}async function Lx(t,e,n={}){await Nt(we(Ee,`lobbies/${t}`),{status:e,...n})}async function hM(t,e){await Nt(we(Ee,`lobbies/${t}`),{location:e})}async function fM(t,e){await Nt(we(Ee,`lobbies/${t}`),{gameMode:e})}function pM(t,e){const n=we(Ee,`lobbies/${t}`);return Pg(n,r=>{e(r.exists()?{code:t,...r.val()}:null)}),()=>Dg(n)}async function mM(t){const e=we(Ee,`lobbies/${t}`),n=await wn(e);return n.exists()?n.val():null}function gM({onClose:t}){const[e,n]=R.useState(""),[r,s]=R.useState(!1),i=Xt(),o=async()=>{if(!e.trim()){se.error("Please enter a lobby code");return}if(e.length!==5){se.error("Lobby code must be 5 characters");return}s(!0);try{const c=Yt.getState();await uM(e.toUpperCase(),{userId:c.userId,username:c.username,avatar:c.avatar,stars:c.stars||0}),se.success("Joined lobby successfully!"),i(`/lobby/${e.toUpperCase()}`),t()}catch(c){console.error("Failed to join lobby:",c),c.message.includes("not found")?se.error("Lobby not found. Check the code and try again."):c.message.includes("full")?se.error("This lobby is full."):c.message.includes("already in")?se.error("You are already in this lobby."):c.message.includes("no longer accepting")?se.error("This lobby is no longer accepting players."):se.error("Failed to join lobby. Please try again.")}finally{s(!1)}},a=c=>{c.key==="Enter"&&!r&&o()};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-[#f8f6f6] dark:bg-[#221610] rounded-2xl p-6 w-[90%] max-w-md border-2 border-primary/30 shadow-[0_0_40px_rgba(236,91,19,0.4)]",children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsxs("h2",{className:"text-2xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white",children:["Join ",d.jsx("span",{className:"text-primary",children:"Lobby"})]}),d.jsx("button",{onClick:t,disabled:r,className:"size-10 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-colors",children:d.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),d.jsx("div",{className:"space-y-4 mb-6",children:d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide",children:"Enter Lobby Code"}),d.jsx("input",{type:"text",value:e,onChange:c=>n(c.target.value.toUpperCase()),onKeyPress:a,placeholder:"ABC12",maxLength:5,disabled:r,className:"w-full px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-center text-2xl tracking-[0.3em] uppercase focus:outline-none focus:border-primary transition-colors disabled:opacity-50",autoFocus:!0}),d.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-2 text-center",children:"5-character code from your friend"})]})}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:t,disabled:r,className:"flex-1 px-6 py-3 rounded-xl font-bold uppercase italic tracking-tighter bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors disabled:opacity-50",children:"Cancel"}),d.jsx("button",{onClick:o,disabled:r||!e.trim(),className:"flex-1 px-6 py-3 rounded-xl font-bold uppercase italic tracking-tighter bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 active:translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:r?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"material-symbols-outlined animate-spin",children:"refresh"}),d.jsx("span",{children:"Joining..."})]}):d.jsxs(d.Fragment,{children:[d.jsx("span",{children:"Join"}),d.jsx("span",{className:"material-symbols-outlined",children:"login"})]})})]})]})})}function yM(t,e){let n;try{n=t()}catch{return}return{getItem:s=>{var i;const o=c=>c===null?null:JSON.parse(c,void 0),a=(i=n.getItem(s))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>n.removeItem(s)}}const Bp=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Bp(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Bp(r)(n)}}}},_M=(t,e)=>(n,r,s)=>{let i={storage:yM(()=>window.localStorage),partialize:k=>k,version:0,merge:(k,b)=>({...b,...k}),...e},o=!1,a=0;const c=new Set,u=new Set;let h=i.storage;if(!h)return t((...k)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...k)},r,s);const f=()=>{const k=i.partialize({...r()});return h.setItem(i.name,{state:k,version:i.version})},m=s.setState;s.setState=(k,b)=>(m(k,b),f());const y=t((...k)=>(n(...k),f()),r,s);s.getInitialState=()=>y;let S;const I=()=>{var k,b;if(!h)return;const v=++a;o=!1,c.forEach(D=>{var j;return D((j=r())!=null?j:y)});const w=((b=i.onRehydrateStorage)==null?void 0:b.call(i,(k=r())!=null?k:y))||void 0;return Bp(h.getItem.bind(h))(i.name).then(D=>{if(D)if(typeof D.version=="number"&&D.version!==i.version){if(i.migrate){const j=i.migrate(D.state,D.version);return j instanceof Promise?j.then(O=>[!0,O]):[!0,j]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,D.state];return[!1,void 0]}).then(D=>{var j;if(v!==a)return;const[O,E]=D;if(S=i.merge(E,(j=r())!=null?j:y),n(S,!0),O)return f()}).then(()=>{v===a&&(w==null||w(S,void 0),S=r(),o=!0,u.forEach(D=>D(S)))}).catch(D=>{v===a&&(w==null||w(void 0,D))})};return s.persist={setOptions:k=>{i={...i,...k},k.storage&&(h=k.storage)},clearStorage:()=>{h==null||h.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>I(),hasHydrated:()=>o,onHydrate:k=>(c.add(k),()=>{c.delete(k)}),onFinishHydration:k=>(u.add(k),()=>{u.delete(k)})},i.skipHydration||I(),S||y},vM=_M,Ci=fd(vM((t,e)=>({bgmVolume:.5,sfxVolume:.8,isMuted:!1,currentBgm:null,setBgmVolume:n=>t({bgmVolume:Math.min(1,Math.max(0,n))}),setSfxVolume:n=>t({sfxVolume:Math.min(1,Math.max(0,n))}),toggleMute:()=>t(n=>({isMuted:!n.isMuted})),setMuted:n=>t({isMuted:n}),setCurrentBgm:n=>t({currentBgm:n})}),{name:"bbl-audio-settings",partialState:t=>({bgmVolume:t.bgmVolume,sfxVolume:t.sfxVolume,isMuted:t.isMuted})})),qT={HOME_BGM:`${ie}/sounds/home_bg.mp3`,LOBBY_BGM:`${ie}/sounds/lobby_bg.mp3`,COURT_BGM:`${ie}/sounds/court_bg.mp3`,MATCH_FOUND:`${ie}/sounds/match_found.mp3`,WELCOME_BBL:`${ie}/sounds/welcome_bbl.mp3`,BTN_CLICK:`${ie}/sounds/sfx_click.wav`,BASKETBALL:`${ie}/sounds/sfx_basketball.wav`,BADMINTON:`${ie}/sounds/sfx_badminton.wav`,ACCEPT:`${ie}/sounds/sfx_accept.mp3`,DECLINE:`${ie}/sounds/sfx_decline.mp3`,VOTE:`${ie}/sounds/sfx_vote.mp3`};let Lt=null,$p=null,zu=!1,zp=.5,KT=.8;const nf=20,xM=400;function Wp(t){return Math.min(1,Math.max(0,t))}function bM(t,e=xM){return new Promise(n=>{if(!t){n();return}const r=t.volume,s=e/nf,i=r/nf;let o=0;const a=setInterval(()=>{o++,t.volume=Wp(r-i*o),o>=nf&&(clearInterval(a),t.pause(),t.currentTime=0,n())},s)})}function wM({isMuted:t,bgmVolume:e,sfxVolume:n}){zu=t,zp=Wp(e),KT=Wp(n),Lt&&(Lt.volume=t?0:zp,t?Lt.pause():Lt.paused&&Lt.play().catch(()=>{}))}async function wy(t){if($p===t&&Lt&&!Lt.paused)return;const e=qT[t];if(!e)return;Lt&&(Lt.pause(),Lt.currentTime=0,Lt.src="");const n=new Audio(e);n.loop=!0,n.volume=zu?0:zp,Lt=n,$p=t,zu||n.play().catch(()=>{})}async function EM(){if(!Lt)return;const t=Lt;Lt=null,$p=null,await bM(t),t.src=""}function rn(t){if(zu)return;const e=qT[t];if(!e)return;const n=new Audio(e);n.volume=KT,n.play().catch(()=>{})}function Mx({label:t,icon:e,value:n,onChange:r,color:s="#ec5b13",disabled:i}){const o=Math.round(n*100);return d.jsxs("div",{className:`vol-row ${i?"vol-row--disabled":""}`,children:[d.jsxs("div",{className:"vol-label-row",children:[d.jsx("div",{className:"vol-icon-wrap",style:{"--accent":s},children:d.jsx("span",{className:"material-symbols-outlined",children:e})}),d.jsxs("div",{className:"vol-text",children:[d.jsx("p",{className:"vol-name",children:t}),d.jsxs("p",{className:"vol-pct",style:{color:s},children:[o,"%"]})]})]}),d.jsxs("div",{className:"slider-track-wrap",children:[d.jsx("div",{className:"slider-fill",style:{width:`${o}%`,background:s}}),d.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:n,disabled:i,onChange:a=>r(parseFloat(a.target.value)),className:"slider-input",style:{"--thumb-color":s}})]}),d.jsxs("div",{className:"slider-landmarks",children:[d.jsx("span",{className:"material-symbols-outlined landmark-icon",children:"volume_mute"}),d.jsx("span",{className:"landmark-dots",children:[0,25,50,75,100].map(a=>d.jsx("span",{className:"landmark-dot",style:{background:o>=a?s:"rgba(255,255,255,0.12)"}},a))}),d.jsx("span",{className:"material-symbols-outlined landmark-icon",children:"volume_up"})]})]})}function SM({onClose:t}){const{bgmVolume:e,sfxVolume:n,isMuted:r,setBgmVolume:s,setSfxVolume:i,toggleMute:o}=Ci(),a=R.useRef(null),c=R.useRef(null);R.useEffect(()=>{requestAnimationFrame(()=>{var f,m;(f=a.current)==null||f.classList.add("asm-overlay--visible"),(m=c.current)==null||m.classList.add("asm-sheet--visible")})},[]);const u=()=>{var f,m;(f=a.current)==null||f.classList.remove("asm-overlay--visible"),(m=c.current)==null||m.classList.remove("asm-sheet--visible"),setTimeout(t,320)},h=()=>{o(),rn("BTN_CLICK")};return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,700;1,900&family=Barlow:wght@400;500;600;700&display=swap');

        /* ── Overlay ── */
        .asm-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(10, 5, 2, 0);
          backdrop-filter: blur(0px);
          transition: background 0.32s ease, backdrop-filter 0.32s ease;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .asm-overlay--visible {
          background: rgba(10, 5, 2, 0.72);
          backdrop-filter: blur(8px);
        }

        /* ── Sheet ── */
        .asm-sheet {
          font-family: 'Barlow', sans-serif;
          width: 100%;
          max-width: 480px;
          background: linear-gradient(170deg, #1e110a 0%, #19100c 60%, #150e0c 100%);
          border-top: 1.5px solid rgba(236,91,19,0.35);
          border-radius: 28px 28px 0 0;
          padding: 0 0 env(safe-area-inset-bottom, 20px);
          transform: translateY(100%);
          transition: transform 0.32s cubic-bezier(0.34, 1.22, 0.64, 1);
          box-shadow: 0 -20px 60px rgba(0,0,0,0.6), 0 -4px 20px rgba(236,91,19,0.12);
          overflow: hidden;
        }
        .asm-sheet--visible {
          transform: translateY(0);
        }

        /* ── Drag handle ── */
        .asm-handle {
          width: 40px;
          height: 4px;
          border-radius: 100px;
          background: rgba(255,255,255,0.15);
          margin: 14px auto 0;
        }

        /* ── Header ── */
        .asm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px 12px;
        }
        .asm-title-block {}
        .asm-eyebrow {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(236,91,19,0.7);
          margin-bottom: 2px;
        }
        .asm-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.55rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #f5ece5;
          line-height: 1;
        }
        .asm-title span { color: #ec5b13; }

        .asm-close {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(236,91,19,0.25);
          background: rgba(236,91,19,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(200,170,150,0.7);
          transition: all 0.2s;
        }
        .asm-close:hover {
          background: rgba(236,91,19,0.15);
          border-color: rgba(236,91,19,0.5);
          color: #ec5b13;
        }
        .asm-close .material-symbols-outlined { font-size: 1.1rem; }

        /* ── Mute toggle card ── */
        .asm-mute-card {
          margin: 0 16px 20px;
          border-radius: 16px;
          border: 1.5px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          user-select: none;
        }
        .asm-mute-card:hover {
          background: rgba(255,255,255,0.06);
        }
        .asm-mute-card--muted {
          border-color: rgba(236,91,19,0.4);
          background: rgba(236,91,19,0.06);
        }
        .asm-mute-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .asm-mute-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(236,91,19,0.12);
          color: #ec5b13;
          transition: background 0.2s;
        }
        .asm-mute-card--muted .asm-mute-icon {
          background: rgba(236,91,19,0.25);
        }
        .asm-mute-icon .material-symbols-outlined { font-size: 1.3rem; }
        .asm-mute-info {}
        .asm-mute-label {
          font-weight: 700;
          font-size: 0.9rem;
          color: #f0e8e0;
        }
        .asm-mute-sub {
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(180,160,140,0.6);
          margin-top: 1px;
        }

        /* ── Toggle pill ── */
        .asm-toggle {
          width: 50px;
          height: 28px;
          border-radius: 100px;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.1);
          position: relative;
          transition: background 0.25s, border-color 0.25s;
          flex-shrink: 0;
        }
        .asm-toggle--on {
          background: #ec5b13;
          border-color: #ec5b13;
          box-shadow: 0 0 14px rgba(236,91,19,0.5);
        }
        .asm-toggle-thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.4);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .asm-toggle--on .asm-toggle-thumb {
          transform: translateX(22px);
        }

        /* ── Divider ── */
        .asm-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent);
          margin: 0 16px 20px;
        }

        /* ── Volume rows ── */
        .vol-row {
          padding: 0 16px;
          margin-bottom: 22px;
          transition: opacity 0.25s;
        }
        .vol-row--disabled {
          opacity: 0.35;
          pointer-events: none;
        }
        .vol-label-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .vol-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: color-mix(in srgb, var(--accent) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .vol-icon-wrap .material-symbols-outlined { font-size: 1.1rem; }
        .vol-text { flex: 1; }
        .vol-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: #f0e8e0;
        }
        .vol-pct {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

        /* ── Slider ── */
        .slider-track-wrap {
          position: relative;
          height: 8px;
          border-radius: 100px;
          background: rgba(255,255,255,0.07);
          margin-bottom: 8px;
        }
        .slider-fill {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          border-radius: 100px;
          transition: width 0.05s linear;
          box-shadow: 0 0 8px currentColor;
        }
        .slider-input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
          margin: 0;
          -webkit-appearance: none;
          appearance: none;
        }
        /* Invisible but functional native range on top of the visual track */

        .slider-landmarks {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .landmark-icon {
          font-family: 'Material Symbols Outlined';
          font-size: 0.85rem;
          color: rgba(255,255,255,0.25);
        }
        .landmark-dots {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .landmark-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          transition: background 0.15s;
        }

        /* ── Preset buttons ── */
        .asm-presets {
          padding: 0 16px 24px;
        }
        .asm-presets-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(180,150,130,0.5);
          margin-bottom: 10px;
        }
        .asm-preset-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .asm-preset-btn {
          border-radius: 12px;
          border: 1.5px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          padding: 10px 6px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          color: rgba(200,180,160,0.7);
        }
        .asm-preset-btn:hover {
          border-color: rgba(236,91,19,0.35);
          background: rgba(236,91,19,0.06);
          color: #ec5b13;
        }
        .asm-preset-btn .material-symbols-outlined {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 4px;
        }
        .asm-preset-btn span:last-child {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
      `}),d.jsx("div",{ref:a,className:"asm-overlay",onClick:u,children:d.jsxs("div",{ref:c,className:"asm-sheet",onClick:f=>f.stopPropagation(),children:[d.jsx("div",{className:"asm-handle"}),d.jsxs("div",{className:"asm-header",children:[d.jsxs("div",{className:"asm-title-block",children:[d.jsx("p",{className:"asm-eyebrow",children:"Settings"}),d.jsxs("h2",{className:"asm-title",children:["Audio ",d.jsx("span",{children:"Control"})]})]}),d.jsx("button",{className:"asm-close",onClick:u,children:d.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),d.jsxs("div",{className:`asm-mute-card ${r?"asm-mute-card--muted":""}`,onClick:h,children:[d.jsxs("div",{className:"asm-mute-left",children:[d.jsx("div",{className:"asm-mute-icon",children:d.jsx("span",{className:"material-symbols-outlined",children:r?"volume_off":"volume_up"})}),d.jsxs("div",{className:"asm-mute-info",children:[d.jsx("p",{className:"asm-mute-label",children:"Master Sound"}),d.jsx("p",{className:"asm-mute-sub",children:r?"All audio is muted":"All audio active"})]})]}),d.jsx("div",{className:`asm-toggle ${r?"":"asm-toggle--on"}`,children:d.jsx("div",{className:"asm-toggle-thumb"})})]}),d.jsx("div",{className:"asm-divider"}),d.jsx(Mx,{label:"Background Music",icon:"music_note",value:e,onChange:s,color:"#ec5b13",disabled:r}),d.jsx(Mx,{label:"Sound Effects",icon:"touch_app",value:n,onChange:i,color:"#60a5fa",disabled:r}),d.jsx("div",{className:"asm-divider"}),d.jsxs("div",{className:"asm-presets",children:[d.jsx("p",{className:"asm-presets-label",children:"Quick Presets"}),d.jsxs("div",{className:"asm-preset-row",children:[d.jsxs("button",{className:"asm-preset-btn",onClick:()=>{s(.4),i(.8),Ci.getState().setMuted(!1),rn("BTN_CLICK")},children:[d.jsx("span",{className:"material-symbols-outlined",children:"home"}),d.jsx("span",{children:"Default"})]}),d.jsxs("button",{className:"asm-preset-btn",onClick:()=>{s(.15),i(.5),Ci.getState().setMuted(!1),rn("BTN_CLICK")},children:[d.jsx("span",{className:"material-symbols-outlined",children:"bedtime"}),d.jsx("span",{children:"Low Key"})]}),d.jsxs("button",{className:"asm-preset-btn",onClick:()=>{s(.8),i(1),Ci.getState().setMuted(!1),rn("BTN_CLICK")},children:[d.jsx("span",{className:"material-symbols-outlined",children:"bolt"}),d.jsx("span",{children:"Hype"})]})]})]})]})})]})}function TM(){const{isMuted:t,bgmVolume:e,sfxVolume:n}=Ci();R.useEffect(()=>{wM({isMuted:t,bgmVolume:e,sfxVolume:n})},[t,e,n]);const r=R.useCallback(o=>{rn(o)},[]),s=R.useCallback(o=>{wy(o)},[]),i=R.useCallback(()=>{EM()},[]);return{playSfx:r,playBgm:s,stopBgm:i}}const Ey="bbl_session";function Wu(t){try{const e=QT()||{};localStorage.setItem(Ey,JSON.stringify({...e,...t}))}catch{}}function QT(){try{const t=localStorage.getItem(Ey);return t?JSON.parse(t):null}catch{return null}}function dl(){try{localStorage.removeItem(Ey)}catch{}}function CM(){const{username:t,avatar:e,userId:n,basketballStars:r,badmintonStars:s,updateSportStars:i,logout:o}=Yt(),a=Xt(),c=Qe[e]||Qe[0],[u,h]=R.useState(!1),[f,m]=R.useState(!1),[y,S]=R.useState(!1),[I,k]=R.useState(!0),[b,v]=R.useState(!1),[w,D]=R.useState(null),[j,O]=R.useState(!1),{playSfx:E,playBgm:_}=TM(),T=Ci(X=>X.isMuted),A=_e(r??0),C=_e(s??0);R.useEffect(()=>{_("HOME_BGM")},[]),R.useEffect(()=>{async function X(){var q,Q,ue,ve;if(!n)return;k(!0);try{const Le=await WT(n);if(!Le){se.error("Your account was not found. Please register again."),o(),a("/",{replace:!0});return}i("basketball",Le.basketballStars??0),i("badminton",Le.badmintonStars??0)}catch(Le){console.error("Failed to fetch user profile:",Le)}finally{k(!1)}const F=QT();if(F!=null&&F.lobbyCode){O(!0);try{if(F.matchId){const Ce=await wn(we(Ee,`matches/${F.matchId}`));if(Ce.exists()){const at=Ce.val();if([...((Q=(q=at.teams)==null?void 0:q.blue)==null?void 0:Q.players)||[],...((ve=(ue=at.teams)==null?void 0:ue.red)==null?void 0:ve.players)||[]].includes(n)&&at.status!=="cancelled"&&at.status!=="completed"){let bt=`/match?id=${F.matchId}`,bs="Match Pending";at.status==="in_progress"?(bt=`/court?id=${F.matchId}`,bs="Match In Progress"):at.status==="voting"&&(bt=`/vote?id=${F.matchId}`,bs="Voting In Progress"),D({lobbyCode:F.lobbyCode,sport:F.sport,matchId:F.matchId,route:bt,label:bs});return}}}const Le=await wn(we(Ee,`lobbies/${F.lobbyCode}`));if(Le.exists()){const Ce=Le.val();if((Ce.players||{})[n]&&Ce.status!=="cancelled"){let At=`/lobby/${F.lobbyCode}`,bt="Lobby Open";Ce.status==="matched"&&Ce.matchId?(At=`/match?id=${Ce.matchId}`,bt="Match Pending"):Ce.status==="queued"&&(bt="In Queue"),D({lobbyCode:F.lobbyCode,sport:F.sport,matchId:Ce.matchId||null,route:At,label:bt});return}}dl()}catch(Le){console.error("Session check failed:",Le),dl()}finally{O(!1)}}}X()},[n]);const P=()=>{w&&(E("BTN_CLICK"),a(w.route))},N=async X=>{S(!0);try{const F=Yt.getState(),q=await cM(X,"default",{userId:F.userId,username:F.username,avatar:F.avatar,stars:F.basketballStars??0,basketballStars:F.basketballStars??0,badmintonStars:F.badmintonStars??0});se.success(`${X==="basketball"?"Basketball":"Badminton"} lobby created!`),a(`/lobby/${q.code}`)}catch(F){console.error("Failed to create lobby:",F),se.error("Failed to create lobby. Please try again.")}finally{S(!1)}},ne=X=>{E(X==="basketball"?"BASKETBALL":"BADMINTON"),N(X)},ye=(w==null?void 0:w.sport)==="basketball"?"sports_basketball":"sports_tennis",K=(w==null?void 0:w.sport)==="basketball"?"#ec5b13":"#3b82f6";return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Barlow:wght@400;500;600&display=swap');

        .home-root {
          font-family: 'Barlow', sans-serif;
        }

        .home-root * {
          box-sizing: border-box;
        }

        /* === BACKGROUND === */
        .court-bg {
          background:
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(180, 80, 10, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(40, 20, 5, 0.9) 0%, transparent 70%),
            linear-gradient(
              170deg,
              #1a0e08 0%,
              #1f1108 18%,
              #231410 35%,
              #1c1210 55%,
              #16100e 72%,
              #1a1418 88%,
              #141218 100%
            );
          min-height: 100vh;
        }

        .court-bg::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }

        .court-bg::after {
          content: '';
          position: fixed;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(236, 91, 19, 0.12) 0%, transparent 70%);
          animation: emberPulse 6s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes emberPulse {
          0%   { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
          100% { opacity: 1;   transform: translateX(-50%) scaleX(1.15); }
        }

        /* === HEADER === */
        .header-bar {
          position: sticky;
          top: 0;
          z-index: 20;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(180deg, rgba(26,14,8,0.95) 0%, rgba(26,14,8,0) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .header-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid rgba(236,91,19,0.8);
          overflow: hidden;
          box-shadow: 0 0 14px rgba(236,91,19,0.4);
        }

        .header-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #f0ece8;
        }

        .header-logo span {
          color: #ec5b13;
        }

        /* === SPORT CARDS === */
        .cards-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 10px 16px 16px;
        }

        .sport-card {
          position: relative;
          flex: 1;
          min-height: 210px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.18s ease;
          will-change: transform;
        }

        .sport-card:active {
          transform: scale(0.97);
        }

        .sport-card-basketball {
          border: 1.5px solid rgba(236,91,19,0.45);
          box-shadow:
            0 0 0 1px rgba(236,91,19,0.1),
            0 8px 40px rgba(236,91,19,0.25),
            0 2px 8px rgba(0,0,0,0.5);
        }

        .sport-card-badminton {
          border: 1.5px solid rgba(180,160,130,0.3);
          box-shadow:
            0 0 0 1px rgba(180,160,130,0.08),
            0 8px 40px rgba(100,80,50,0.2),
            0 2px 8px rgba(0,0,0,0.5);
        }

        .sport-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .sport-card:hover .sport-card-bg {
          transform: scale(1.04);
        }

        .sport-card-overlay-basketball {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(0deg, rgba(20,8,2,0.92) 0%, rgba(20,8,2,0.4) 45%, rgba(0,0,0,0.05) 100%),
            linear-gradient(135deg, rgba(236,91,19,0.15) 0%, transparent 60%);
        }

        .sport-card-overlay-badminton {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(0deg, rgba(14,10,8,0.92) 0%, rgba(14,10,8,0.4) 45%, rgba(0,0,0,0.05) 100%),
            linear-gradient(135deg, rgba(140,120,90,0.1) 0%, transparent 60%);
        }

        .sport-card-glint {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(236,91,19,0.8) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sport-card:hover .sport-card-glint {
          opacity: 1;
        }

        .sport-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 22px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .sport-label-sub {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .sport-label-main {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 2.8rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #ffffff;
          text-shadow: 0 2px 20px rgba(0,0,0,0.6);
        }

        .sport-card-arrow {
          font-size: 1.6rem;
          color: rgba(255,255,255,0.35);
          transition: color 0.2s, transform 0.2s;
          font-family: 'Material Symbols Outlined', sans-serif;
        }

        .sport-card:hover .sport-card-arrow {
          color: rgba(255,255,255,0.9);
          transform: translateX(3px);
        }

        .sport-card-creating {
          position: absolute;
          inset: 0;
          background: rgba(26,14,8,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          z-index: 10;
        }

        .spinner {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 3px solid rgba(236,91,19,0.2);
          border-top-color: #ec5b13;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* === PLAYER BAR === */
        .player-bar {
          padding: 16px;
          background: linear-gradient(180deg, rgba(26,18,12,0) 0%, rgba(18,12,10,0.98) 30%);
          border-top: 1px solid rgba(236,91,19,0.12);
          position: relative;
        }

        .player-bar::before {
          content: '';
          position: absolute;
          top: 0; left: 16px; right: 16px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(236,91,19,0.3), transparent);
        }

        .player-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 0;
        }

        .player-identity {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }

        .player-avatar-wrap {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          overflow: hidden;
          border: 2px solid rgba(236,91,19,0.6);
          background: rgba(236,91,19,0.1);
          box-shadow: 0 0 16px rgba(236,91,19,0.25);
          flex-shrink: 0;
        }

        .player-avatar-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
        }

        .player-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          color: #f5f0eb;
          line-height: 1;
          margin-bottom: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* === JOIN BUTTON === */
        .join-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 11px 18px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #f06020 0%, #c94a08 100%);
          box-shadow:
            0 4px 20px rgba(236,91,19,0.45),
            0 1px 3px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .join-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            0 6px 28px rgba(236,91,19,0.55),
            0 2px 6px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .join-btn:active {
          transform: translateY(1px);
          box-shadow: 0 2px 12px rgba(236,91,19,0.35);
        }

        .join-btn-icon {
          font-family: 'Material Symbols Outlined', sans-serif;
          font-size: 1.1rem;
          line-height: 1;
        }

        /* === LOADING === */
        .loading-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }

        /* === MOUNT ANIMATION === */
        .fade-up {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.5s ease forwards;
        }

        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* === SESSION POPUP OVERLAY === */
        .session-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(10, 6, 4, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 0;
          animation: overlayFadeIn 0.3s ease forwards;
        }

        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .session-sheet {
          width: 100%;
          max-width: 448px;
          background: linear-gradient(160deg, #1e1008 0%, #18100c 60%, #140e10 100%);
          border-top: 1px solid rgba(236,91,19,0.35);
          border-radius: 28px 28px 0 0;
          padding: 28px 24px 44px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: sheetSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          box-shadow: 0 -16px 60px rgba(0,0,0,0.6);
        }

        @keyframes sheetSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .session-pill {
          width: 36px; height: 4px;
          border-radius: 2px;
          background: rgba(236,91,19,0.3);
          margin: 0 auto -8px;
        }

        .session-icon-wrap {
          width: 56px; height: 56px;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .session-pulse {
          animation: sessionPulse 2s ease-in-out infinite;
        }

        @keyframes sessionPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236,91,19,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(236,91,19,0); }
        }

        .session-rejoin-btn {
          width: 100%;
          padding: 16px;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.15rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #f06020 0%, #c94a08 100%);
          box-shadow:
            0 4px 24px rgba(236,91,19,0.5),
            inset 0 1px 0 rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .session-rejoin-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 32px rgba(236,91,19,0.6), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .session-rejoin-btn:active {
          transform: scale(0.98);
        }
      `}),d.jsxs("div",{className:"home-root court-bg relative flex flex-col max-w-md mx-auto min-h-screen overflow-x-hidden shadow-2xl",children:[d.jsxs("header",{className:"header-bar",children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx("div",{className:"header-avatar",children:d.jsx("img",{src:c,alt:"Profile"})}),d.jsxs("span",{className:"header-logo",children:["BBL ",d.jsx("span",{children:"Legends"})]})]}),d.jsxs("button",{onClick:()=>{E("BTN_CLICK"),m(!0)},style:{width:"40px",height:"40px",borderRadius:"50%",border:"1.5px solid rgba(236,91,19,0.35)",background:"rgba(236,91,19,0.08)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:T?"rgba(180,130,100,0.5)":"#ec5b13",transition:"all 0.2s",flexShrink:0,position:"relative"},title:"Audio Settings",children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1.2rem"},children:T?"volume_off":"music_note"}),T&&d.jsx("span",{style:{position:"absolute",top:"4px",right:"4px",width:"7px",height:"7px",borderRadius:"50%",background:"#ef4444",border:"1.5px solid #1a0e08"}})]})]}),d.jsxs("main",{className:`cards-wrapper ${b?"fade-up fade-up-1":""}`,style:{zIndex:1,position:"relative"},children:[d.jsxs("div",{className:`sport-card sport-card-basketball ${b?"fade-up fade-up-2":""}`,onClick:()=>!y&&ne("basketball"),children:[d.jsx("div",{className:"sport-card-bg",style:{backgroundImage:`url('${ie}/main/basketball.jpg')`}}),d.jsx("div",{className:"sport-card-overlay-basketball"}),d.jsx("div",{className:"sport-card-glint"}),d.jsxs("div",{className:"sport-card-content",children:[d.jsxs("div",{children:[d.jsx("p",{className:"sport-label-sub",style:{color:"#ec5b13"},children:"Competitive Season 4"}),d.jsx("h2",{className:"sport-label-main",children:"Basketball"})]}),d.jsx("span",{className:"material-symbols-outlined sport-card-arrow",children:"arrow_forward_ios"})]}),y&&d.jsx("div",{className:"sport-card-creating",children:d.jsx("div",{className:"spinner"})})]}),d.jsxs("div",{className:`sport-card sport-card-badminton ${b?"fade-up fade-up-3":""}`,onClick:()=>!y&&ne("badminton"),children:[d.jsx("div",{className:"sport-card-bg",style:{backgroundImage:`url('${ie}/main/badminton.jpg')`,backgroundPosition:"center top"}}),d.jsx("div",{className:"sport-card-overlay-badminton"}),d.jsx("div",{className:"sport-card-glint",style:{background:"linear-gradient(90deg, transparent 0%, rgba(180,150,100,0.6) 50%, transparent 100%)"}}),d.jsxs("div",{className:"sport-card-content",children:[d.jsxs("div",{children:[d.jsx("p",{className:"sport-label-sub",style:{color:"#b4a082"},children:"Casual & Ranked"}),d.jsx("h2",{className:"sport-label-main",children:"Badminton"})]}),d.jsx("span",{className:"material-symbols-outlined sport-card-arrow",children:"arrow_forward_ios"})]}),y&&d.jsx("div",{className:"sport-card-creating",children:d.jsx("div",{className:"spinner"})})]})]}),d.jsx("section",{className:`player-bar ${b?"fade-up fade-up-4":""}`,style:{zIndex:1,position:"relative"},children:I?d.jsx("div",{className:"loading-wrap",children:d.jsx("div",{className:"spinner"})}):d.jsx(d.Fragment,{children:d.jsxs("div",{className:"player-row",children:[d.jsxs("div",{className:"player-identity",children:[d.jsx("div",{className:"player-avatar-wrap",children:d.jsx("img",{src:c,alt:t})}),d.jsxs("div",{style:{flex:1,minWidth:0},children:[d.jsx("p",{className:"player-name",children:t||"Player"}),d.jsxs("div",{style:{display:"flex",gap:"6px",marginTop:"4px",flexWrap:"wrap"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",background:"rgba(236,91,19,0.12)",border:"1px solid rgba(236,91,19,0.3)",borderRadius:"8px",padding:"2px 7px"},children:[d.jsx("span",{style:{fontFamily:"Material Symbols Outlined",fontSize:"11px",color:"#ec5b13",lineHeight:1},children:"sports_basketball"}),d.jsx("span",{style:{fontSize:"11px"},children:A.badge}),d.jsx("span",{style:{fontFamily:"Barlow Condensed, sans-serif",fontStyle:"italic",fontWeight:900,fontSize:"11px",color:A.color,textTransform:"uppercase",letterSpacing:"0.03em",lineHeight:1},children:A.name}),d.jsxs("span",{style:{fontSize:"10px",color:"rgba(236,91,19,0.7)",fontWeight:700},children:[r??0,"★"]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",background:"rgba(59,130,246,0.12)",border:"1px solid rgba(59,130,246,0.3)",borderRadius:"8px",padding:"2px 7px"},children:[d.jsx("span",{style:{fontFamily:"Material Symbols Outlined",fontSize:"11px",color:"#3b82f6",lineHeight:1},children:"sports_tennis"}),d.jsx("span",{style:{fontSize:"11px"},children:C.badge}),d.jsx("span",{style:{fontFamily:"Barlow Condensed, sans-serif",fontStyle:"italic",fontWeight:900,fontSize:"11px",color:C.color,textTransform:"uppercase",letterSpacing:"0.03em",lineHeight:1},children:C.name}),d.jsxs("span",{style:{fontSize:"10px",color:"rgba(59,130,246,0.7)",fontWeight:700},children:[s??0,"★"]})]})]})]})]}),d.jsxs("button",{className:"join-btn",onClick:()=>{E("BTN_CLICK"),h(!0)},children:[d.jsx("span",{children:"Join Match"}),d.jsx("span",{className:"join-btn-icon material-symbols-outlined",children:"login"})]})]})})}),d.jsx(by,{}),u&&d.jsx(gM,{onClose:()=>h(!1)}),f&&d.jsx(SM,{onClose:()=>m(!1)}),(j||w)&&d.jsx("div",{className:"session-overlay",children:d.jsxs("div",{className:"session-sheet",children:[d.jsx("div",{className:"session-pill"}),j?d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"14px",padding:"12px 0"},children:[d.jsx("div",{className:"spinner",style:{width:"36px",height:"36px"}}),d.jsx("p",{style:{fontFamily:"Barlow Condensed, sans-serif",fontStyle:"italic",fontWeight:700,fontSize:"1rem",color:"rgba(240,220,200,0.6)",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Checking session..."})]}):w&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[d.jsx("div",{className:"session-icon-wrap session-pulse",style:{background:`${K}18`,border:`1.5px solid ${K}50`},children:d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1.6rem",color:K},children:ye})}),d.jsxs("div",{style:{flex:1},children:[d.jsx("p",{style:{fontFamily:"Barlow Condensed, sans-serif",fontStyle:"italic",fontWeight:900,fontSize:"1.35rem",textTransform:"uppercase",color:"#f5f0eb",letterSpacing:"0.01em",lineHeight:1,marginBottom:"5px"},children:"Unfinished Match"}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx("span",{style:{display:"inline-block",width:"7px",height:"7px",borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 6px rgba(34,197,94,0.8)",animation:"sessionPulse 1.5s ease-in-out infinite"}}),d.jsx("span",{style:{fontFamily:"Barlow Condensed, sans-serif",fontWeight:700,fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.15em",color:"#22c55e"},children:w.label})]})]})]}),d.jsxs("div",{style:{background:"rgba(236,91,19,0.06)",border:"1px solid rgba(236,91,19,0.2)",borderRadius:"14px",padding:"14px 16px",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(240,220,200,0.45)"},children:"Sport"}),d.jsx("span",{style:{fontFamily:"Barlow Condensed, sans-serif",fontStyle:"italic",fontWeight:900,fontSize:"0.95rem",textTransform:"uppercase",color:K},children:w.sport==="basketball"?"🏀 Basketball":"🏸 Badminton"})]}),d.jsx("div",{style:{height:"1px",background:"rgba(236,91,19,0.12)"}}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(240,220,200,0.45)"},children:"Lobby"}),d.jsx("span",{style:{fontFamily:"Barlow Condensed, sans-serif",fontWeight:900,fontSize:"0.95rem",color:"#f5f0eb",letterSpacing:"0.08em"},children:w.lobbyCode})]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1rem",color:"#f59e0b",flexShrink:0,marginTop:"1px"},children:"warning"}),d.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(240,220,200,0.5)",lineHeight:1.5},children:"You have an active session. Leaving it unattended may affect your match result."})]}),d.jsxs("button",{className:"session-rejoin-btn",onClick:P,children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1.2rem"},children:"sports"}),"Return to Match",d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1rem"},children:"arrow_forward"})]})]})]})})]})]})}function IM(){const{username:t,avatar:e,userId:n,updateSportStars:r}=Yt(),s=Xt(),i=Qe[e]||Qe[0],[o,a]=R.useState(!0),[c,u]=R.useState(0),[h,f]=R.useState(0),[m,y]=R.useState(0),[S,I]=R.useState(0),[k,b]=R.useState(0),[v,w]=R.useState(0);R.useEffect(()=>{async function O(){if(n){a(!0);try{const E=await WT(n);if(E){const _=E.basketballStars??0,T=E.badmintonStars??0;b(_),w(T),r("basketball",_),r("badminton",T);const A=E.wins||0,C=E.losses||0,P=A+C;u(A),f(C),y(P),I(P>0?Math.round(A/P*100):0)}}catch(E){console.error("Failed to fetch user profile:",E)}finally{a(!1)}}}O()},[n,r]);const D=_e(k),j=_e(v);return d.jsxs("div",{className:"relative flex min-h-screen w-full flex-col max-w-md mx-auto overflow-x-hidden bg-[#f8f6f6] dark:bg-[#221610] shadow-2xl",children:[d.jsxs("header",{className:"flex items-center p-4 justify-between sticky top-0 z-20 bg-[#f8f6f6]/80 dark:bg-[#221610]/80 backdrop-blur-md border-b border-slate-200 dark:border-primary/20",children:[d.jsx("button",{onClick:()=>s("/home"),className:"size-10 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors",children:d.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"})}),d.jsx("h1",{className:"text-xl font-extrabold tracking-tighter italic text-slate-900 dark:text-slate-100 uppercase",children:"Profile"}),d.jsx("div",{className:"size-10"})]}),d.jsx("main",{className:"flex-1 flex flex-col items-center p-6 pb-28",children:o?d.jsx("div",{className:"flex items-center justify-center py-20",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary"})}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"size-28 rounded-full border-4 border-primary bg-primary/20 overflow-hidden mb-4 shadow-[0_0_30px_rgba(236,91,19,0.4)]",children:d.jsx("img",{src:i,alt:t,className:"w-full h-full object-cover"})}),d.jsx("h2",{className:"text-3xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white mb-6",children:t||"Player"}),d.jsxs("div",{className:"w-full mb-6",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[d.jsx("div",{className:"h-px flex-1 bg-slate-200 dark:bg-slate-700"}),d.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500",children:"Rank by Sport"}),d.jsx("div",{className:"h-px flex-1 bg-slate-200 dark:bg-slate-700"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[d.jsx(Ox,{sport:"basketball",label:"Basketball",icon:"sports_basketball",accentColor:"#ec5b13",bgFrom:"rgba(236,91,19,0.15)",bgTo:"rgba(236,91,19,0.03)",borderColor:"rgba(236,91,19,0.3)",stars:k,rank:D}),d.jsx(Ox,{sport:"badminton",label:"Badminton",icon:"sports_tennis",accentColor:"#3b82f6",bgFrom:"rgba(59,130,246,0.15)",bgTo:"rgba(59,130,246,0.03)",borderColor:"rgba(59,130,246,0.3)",stars:v,rank:j})]})]}),d.jsxs("div",{className:"w-full mb-6 grid grid-cols-3 gap-3",children:[d.jsxs("div",{className:"bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/30 rounded-xl p-4 text-center",children:[d.jsx("p",{className:"text-3xl font-black text-emerald-600 dark:text-emerald-400",children:c}),d.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide mt-1",children:"Wins"})]}),d.jsxs("div",{className:"bg-gradient-to-br from-slate-500/20 to-slate-500/5 border-2 border-slate-500/30 rounded-xl p-4 text-center",children:[d.jsx("p",{className:"text-3xl font-black text-slate-900 dark:text-white",children:m}),d.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide mt-1",children:"Games"})]}),d.jsxs("div",{className:"bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-xl p-4 text-center",children:[d.jsxs("p",{className:"text-3xl font-black text-primary",children:[S,"%"]}),d.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide mt-1",children:"Win Rate"})]})]}),d.jsxs("div",{className:"w-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 text-center",children:[d.jsx("div",{className:"size-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/20",children:d.jsx("span",{className:"material-symbols-outlined text-primary text-5xl",children:"construction"})}),d.jsxs("h3",{className:"text-2xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white mb-3",children:["Coming ",d.jsx("span",{className:"text-primary",children:"Soon"})]}),d.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm leading-relaxed",children:"Match history, achievements, and more features are on the way!"})]})]})}),d.jsx(by,{})]})}function Ox({label:t,icon:e,accentColor:n,bgFrom:r,bgTo:s,borderColor:i,stars:o,rank:a}){const c=a.starsToNext>0?Math.round(a.starsInTier/(a.starsInTier+a.starsToNext)*100):100;return d.jsxs("div",{className:"relative rounded-2xl p-4 flex flex-col gap-2 overflow-hidden",style:{background:`linear-gradient(135deg, ${r} 0%, ${s} 100%)`,border:`2px solid ${i}`},children:[d.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[d.jsx("span",{className:"material-symbols-outlined text-base",style:{color:n,fontSize:"1rem"},children:e}),d.jsx("p",{className:"text-[10px] font-black uppercase tracking-widest",style:{color:n},children:t})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-3xl leading-none",children:a.badge}),d.jsxs("div",{className:"min-w-0",children:[d.jsx("p",{className:"text-base font-black italic uppercase tracking-tight leading-none truncate",style:{color:a.color},children:a.name}),d.jsxs("p",{className:"text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5",children:[o," ⭐"]})]})]}),d.jsxs("div",{className:"mt-1",children:[d.jsx("div",{className:"h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden",children:d.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${c}%`,backgroundColor:n}})}),a.starsToNext>0&&d.jsxs("p",{className:"text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-1",children:[a.starsToNext," to next rank"]})]})]})}const rf=[{rank:1,label:"1st",icon:"🥇",color:"#FFD700",glow:"rgba(255,215,0,0.35)",border:"rgba(255,215,0,0.6)",bg:"rgba(255,215,0,0.1)"},{rank:2,label:"2nd",icon:"🥈",color:"#C0C0C0",glow:"rgba(192,192,192,0.25)",border:"rgba(192,192,192,0.5)",bg:"rgba(192,192,192,0.08)"},{rank:3,label:"3rd",icon:"🥉",color:"#CD7F32",glow:"rgba(205,127,50,0.25)",border:"rgba(205,127,50,0.5)",bg:"rgba(205,127,50,0.08)"}];function kM(){const t=Xt(),e=Yt(k=>k.userId),[n,r]=R.useState("basketball"),[s,i]=R.useState([]),[o,a]=R.useState(!0),[c,u]=R.useState(null),h=n==="basketball"?"#ec5b13":"#3b82f6",f=R.useCallback(async k=>{a(!0),u(null);try{const b=await Y3(k);i(b)}catch(b){console.error("Failed to load leaderboard:",b),u("Failed to load leaderboard. Please try again.")}finally{a(!1)}},[]);R.useEffect(()=>{f(n)},[n,f]);const m=s.slice(0,3),y=s.slice(3),S=[m[1]?{...m[1],medal:rf[1]}:null,m[0]?{...m[0],medal:rf[0]}:null,m[2]?{...m[2],medal:rf[2]}:null].filter(Boolean),I=k=>k.userId===e;return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Barlow:wght@400;500;600&display=swap');

        .lb-root { font-family: 'Barlow', sans-serif; }
        .lb-root * { box-sizing: border-box; }

        /* ── Background ── */
        .lb-bg {
          background:
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(180,80,10,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(40,20,5,0.9) 0%, transparent 70%),
            linear-gradient(170deg,
              #1a0e08 0%, #1f1108 18%, #231410 35%,
              #1c1210 55%, #16100e 72%, #1a1418 88%, #141218 100%
            );
          min-height: 100vh;
        }
        .lb-bg::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35; pointer-events: none; z-index: 0;
        }
        .lb-bg::after {
          content: '';
          position: fixed; top: -20%; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(236,91,19,0.1) 0%, transparent 70%);
          animation: emberPulse 6s ease-in-out infinite alternate;
          pointer-events: none; z-index: 0;
        }
        @keyframes emberPulse {
          0%   { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
          100% { opacity: 1;   transform: translateX(-50%) scaleX(1.15); }
        }

        /* ── Header ── */
        .lb-header {
          position: sticky; top: 0; z-index: 20;
          padding: 14px 18px;
          display: flex; align-items: center; justify-content: space-between;
          background: linear-gradient(180deg, rgba(26,14,8,0.97) 0%, rgba(26,14,8,0) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .icon-btn {
          width: 38px; height: 38px; border-radius: 12px;
          border: 1.5px solid rgba(236,91,19,0.3);
          background: rgba(236,91,19,0.08);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #ec5b13; transition: all 0.2s;
        }
        .icon-btn:hover { background: rgba(236,91,19,0.16); border-color: rgba(236,91,19,0.6); }

        .lb-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900;
          font-size: 1.4rem; letter-spacing: -0.02em;
          text-transform: uppercase; color: #f0ece8;
        }

        /* ── Tabs ── */
        .tab-bar {
          position: relative; z-index: 1;
          display: flex; gap: 10px; padding: 0 16px 18px;
        }
        .tab-btn {
          flex: 1; display: flex; align-items: center; justify-content: center;
          gap: 7px; padding: 11px 0; border-radius: 14px;
          border: 1.5px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04); cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900;
          font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em;
          color: rgba(240,220,200,0.45); transition: all 0.22s ease;
        }
        .tab-btn.active-bball {
          background: rgba(236,91,19,0.14); border-color: rgba(236,91,19,0.55);
          color: #ec5b13;
          box-shadow: 0 0 20px rgba(236,91,19,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .tab-btn.active-bady {
          background: rgba(59,130,246,0.14); border-color: rgba(59,130,246,0.55);
          color: #3b82f6;
          box-shadow: 0 0 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* ── Podium ── */
        .podium-wrap {
          position: relative; z-index: 1;
          padding: 0 16px 24px;
          display: flex; align-items: flex-end;
          justify-content: center; gap: 10px;
        }
        .podium-card {
          border-radius: 18px; border: 1.5px solid;
          display: flex; flex-direction: column; align-items: center;
          padding: 14px 10px 20px;
          position: relative; overflow: hidden; flex: 1;
          animation: podiumRise 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .podium-card-glow {
          position: absolute; inset: 0; border-radius: 18px;
          opacity: 0.07; pointer-events: none;
        }
        .podium-card-glint {
          position: absolute; top: 0; left: 0; right: 0;
          height: 1.5px; pointer-events: none;
        }
        .podium-bottom-bar {
          position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
        }
        @keyframes podiumRise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .podium-avatar-wrap { position: relative; margin-bottom: 8px; }
        .podium-avatar {
          border-radius: 50%; object-fit: cover; border: 2.5px solid;
          display: block;
        }
        .me-dot {
          position: absolute; bottom: 1px; right: 1px;
          width: 10px; height: 10px; border-radius: 50%;
          background: #22c55e; border: 1.5px solid #1a0e08;
          box-shadow: 0 0 6px rgba(34,197,94,0.8);
        }
        .podium-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900; font-size: 0.82rem;
          text-transform: uppercase; color: #f0ece8; letter-spacing: 0.02em;
          text-align: center; width: 100%; position: relative; z-index: 1;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          margin-bottom: 3px;
        }
        .rank-pill {
          display: flex; align-items: center; gap: 3px;
          position: relative; z-index: 1; margin-bottom: 5px;
        }
        .podium-stars {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; font-size: 1rem;
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 3px;
        }

        /* ── Divider ── */
        .lb-divider {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 10px;
          padding: 0 16px 12px;
        }
        .lb-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(236,91,19,0.2), transparent);
        }
        .lb-divider-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 700; font-size: 0.7rem;
          text-transform: uppercase; letter-spacing: 0.18em;
          color: rgba(240,220,200,0.3);
        }

        /* ── List rows ── */
        .lb-list {
          position: relative; z-index: 1;
          padding: 0 16px 100px;
          display: flex; flex-direction: column; gap: 8px;
        }
        .lb-row {
          border-radius: 14px; border: 1.5px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          padding: 11px 14px;
          display: flex; align-items: center; gap: 12px;
          position: relative; overflow: hidden;
          animation: rowFadeUp 0.35s ease both;
        }
        .lb-row.is-me {
          border-color: rgba(34,197,94,0.4);
          background: rgba(34,197,94,0.06);
          box-shadow: 0 0 16px rgba(34,197,94,0.1);
        }
        @keyframes rowFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lb-pos {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900; font-size: 1.1rem;
          color: rgba(240,220,200,0.35);
          width: 28px; text-align: center; flex-shrink: 0;
        }
        .lb-avatar {
          width: 42px; height: 42px; border-radius: 50%; object-fit: cover;
          border: 2px solid rgba(255,255,255,0.1); flex-shrink: 0;
        }
        .lb-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 900; font-size: 1rem;
          text-transform: uppercase; color: #f0ece8; letter-spacing: 0.02em;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .lb-stars {
          margin-left: auto;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; font-size: 1rem;
          display: flex; align-items: center; gap: 4px; flex-shrink: 0;
        }

        /* ── States ── */
        .lb-state {
          position: relative; z-index: 1;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 60px 16px; gap: 14px;
        }
        .spinner {
          width: 36px; height: 36px; border-radius: 50%;
          border: 3px solid rgba(236,91,19,0.2);
          border-top-color: #ec5b13;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .state-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic; font-weight: 700; font-size: 0.9rem;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(240,220,200,0.4); text-align: center;
        }
        .retry-btn {
          padding: 10px 24px; border-radius: 12px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-style: italic;
          font-weight: 900; font-size: 0.9rem; text-transform: uppercase;
          letter-spacing: 0.08em;
        }
      `}),d.jsxs("div",{className:"lb-root lb-bg relative flex flex-col max-w-md mx-auto min-h-screen overflow-x-hidden shadow-2xl",children:[d.jsxs("header",{className:"lb-header",children:[d.jsx("button",{className:"icon-btn",onClick:()=>t("/home"),children:d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1.2rem"},children:"arrow_back"})}),d.jsxs("span",{className:"lb-title",children:[d.jsx("span",{style:{color:h},children:"Top"})," Players"]}),d.jsx("button",{className:"icon-btn",onClick:()=>f(n),title:"Refresh",style:{color:h,borderColor:`${h}50`,background:`${h}12`},children:d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1.1rem"},children:"refresh"})})]}),d.jsxs("div",{className:"tab-bar",children:[d.jsxs("button",{className:`tab-btn ${n==="basketball"?"active-bball":""}`,onClick:()=>r("basketball"),children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1.1rem"},children:"sports_basketball"}),"Basketball"]}),d.jsxs("button",{className:`tab-btn ${n==="badminton"?"active-bady":""}`,onClick:()=>r("badminton"),children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1.1rem"},children:"sports_tennis"}),"Badminton"]})]}),o&&d.jsxs("div",{className:"lb-state",children:[d.jsx("div",{className:"spinner"}),d.jsx("p",{className:"state-label",children:"Loading leaderboard..."})]}),!o&&c&&d.jsxs("div",{className:"lb-state",children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"2.5rem",color:"rgba(236,91,19,0.5)"},children:"wifi_off"}),d.jsx("p",{className:"state-label",children:c}),d.jsx("button",{className:"retry-btn",onClick:()=>f(n),style:{border:`1.5px solid ${h}50`,background:`${h}14`,color:h},children:"Try Again"})]}),!o&&!c&&s.length===0&&d.jsxs("div",{className:"lb-state",children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"2.5rem",color:"rgba(236,91,19,0.4)"},children:"leaderboard"}),d.jsx("p",{className:"state-label",children:"No players yet. Be the first!"})]}),!o&&!c&&s.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"podium-wrap",children:S.map((k,b)=>{const{medal:v}=k,w=v.rank===1,D=w?60:48;return d.jsxs("div",{className:"podium-card",style:{borderColor:v.border,boxShadow:`0 0 28px ${v.glow}, inset 0 0 0 1px ${v.bg}`,marginBottom:w?0:v.rank===2?12:20,animationDelay:`${b*.08}s`},children:[d.jsx("div",{className:"podium-card-glow",style:{background:v.color}}),d.jsx("div",{className:"podium-card-glint",style:{background:`linear-gradient(90deg, transparent, ${v.color}90, transparent)`}}),d.jsx("span",{style:{fontSize:"1.4rem",marginBottom:"8px",position:"relative",zIndex:1},children:v.icon}),d.jsxs("div",{className:"podium-avatar-wrap",children:[d.jsx("img",{src:Qe[k.avatar]||Qe[0],alt:k.username,className:"podium-avatar",style:{width:D,height:D,borderColor:v.border,boxShadow:`0 0 14px ${v.glow}`}}),I(k)&&d.jsx("div",{className:"me-dot"})]}),d.jsx("p",{className:"podium-name",style:I(k)?{color:"#22c55e"}:{},children:k.username}),d.jsxs("div",{className:"rank-pill",children:[d.jsx("span",{style:{fontSize:"0.72rem"},children:k.rankInfo.badge}),d.jsx("span",{style:{fontFamily:"Barlow Condensed, sans-serif",fontStyle:"italic",fontWeight:900,fontSize:"0.62rem",textTransform:"uppercase",letterSpacing:"0.04em",color:k.rankInfo.color},children:k.rankInfo.name})]}),d.jsxs("div",{className:"podium-stars",style:{color:v.color},children:[d.jsx("span",{children:k.stars}),d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"0.85rem"},children:"star"})]}),d.jsx("div",{className:"podium-bottom-bar",style:{background:`linear-gradient(90deg, transparent, ${v.color}60, transparent)`}})]},k.userId)})}),y.length>0&&d.jsxs("div",{className:"lb-divider",children:[d.jsx("div",{className:"lb-divider-line"}),d.jsx("span",{className:"lb-divider-label",children:"Rankings 4 – 10"}),d.jsx("div",{className:"lb-divider-line"})]}),d.jsx("div",{className:"lb-list",children:y.map((k,b)=>{const v=b+4,w=I(k);return d.jsxs("div",{className:`lb-row ${w?"is-me":""}`,style:{animationDelay:`${b*.05}s`},children:[d.jsx("span",{className:"lb-pos",style:w?{color:"#22c55e"}:{},children:v}),d.jsxs("div",{style:{position:"relative",flexShrink:0},children:[d.jsx("img",{src:Qe[k.avatar]||Qe[0],alt:k.username,className:"lb-avatar",style:w?{borderColor:"rgba(34,197,94,0.5)"}:{}}),w&&d.jsx("div",{style:{position:"absolute",bottom:1,right:1,width:9,height:9,borderRadius:"50%",background:"#22c55e",border:"1.5px solid #1a0e08",boxShadow:"0 0 5px rgba(34,197,94,0.8)"}})]}),d.jsxs("div",{style:{flex:1,minWidth:0},children:[d.jsxs("p",{className:"lb-name",style:w?{color:"#22c55e"}:{},children:[k.username,w&&d.jsx("span",{style:{fontSize:"0.58rem",fontWeight:700,marginLeft:"5px",color:"#22c55e",letterSpacing:"0.1em"},children:"YOU"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",marginTop:"2px"},children:[d.jsx("span",{style:{fontSize:"0.72rem"},children:k.rankInfo.badge}),d.jsx("span",{style:{fontFamily:"Barlow Condensed, sans-serif",fontStyle:"italic",fontWeight:900,fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.04em",color:k.rankInfo.color},children:k.rankInfo.name})]})]}),d.jsxs("div",{className:"lb-stars",style:{color:h},children:[d.jsx("span",{children:k.stars}),d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"0.9rem"},children:"star"})]})]},k.userId)})})]}),d.jsx("div",{style:{flex:1}}),d.jsx(by,{})]})]})}function NM({player:t,isHost:e=!1,status:n="ready",borderColor:r="primary"}){const s=Qe[t.avatar]||Qe[0],i=_e(t.stars||0),o={ready:"text-emerald-500",preparing:"text-amber-500",connecting:"text-slate-500","in-game":"text-green-500"},a={ready:"● READY",preparing:"PREPARING...",connecting:"[CONNECTING]","in-game":"[IN-GAME]"};return d.jsxs("div",{className:`flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900 shadow-sm transition-all ${e?"border-l-4 border-primary":"border-l-4 border-slate-300 dark:border-slate-700"}`,children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:`size-12 rounded-full p-0.5 shadow-lg ${e?"bg-gradient-to-tr from-primary to-orange-400 shadow-primary/20":"bg-slate-200 dark:bg-slate-800"}`,children:d.jsx("div",{className:"size-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden",children:d.jsx("img",{src:s,alt:t.username,className:"w-full h-full object-cover"})})}),e&&d.jsx("div",{className:"absolute -bottom-1 -right-1 size-5 rounded-full bg-primary border-2 border-white dark:border-slate-900 flex items-center justify-center",children:d.jsx("span",{className:"material-symbols-outlined text-[10px] text-white",children:"crown"})})]}),d.jsxs("div",{children:[d.jsxs("p",{className:"text-slate-900 dark:text-slate-100 font-bold text-sm flex items-center gap-2",children:[t.username,e&&d.jsx("span",{className:"text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase",children:"Host"})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"material-symbols-outlined text-amber-500 text-xs",children:"star"}),d.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase",children:i.name})]})]})]}),d.jsx("div",{className:"flex items-center",children:d.jsx("span",{className:`text-[10px] font-bold uppercase ${o[n]||"text-slate-400"} ${n==="ready"?"animate-pulse":""}`,children:a[n]||n})})]})}const RM={"1v1":{label:"1v1",tag:"Solo Duel",description:"One-on-one. Pure skill. No excuses.",color:"#ec5b13",icon:"person",backgroundUrl:`${ie}/format/1v1.jpg`},"2v2":{label:"2v2",tag:"Duo Battle",description:"Chemistry over everything. Find your partner.",color:"#f59e0b",icon:"group",backgroundUrl:`${ie}/format/2v2.jpg`},"3v3":{label:"3v3",tag:"Street Squad",description:"Half-court chaos. Three is the magic number.",color:"#10b981",icon:"groups",backgroundUrl:`${ie}/format/3v3.jpg`},"4v4":{label:"4v4",tag:"Crew Game",description:"Teamwork starts to matter. Get organized.",color:"#6366f1",icon:"diversity_3",backgroundUrl:`${ie}/format/4v4.jpg`},"5v5":{label:"5v5",tag:"Full Court",description:"The real deal. Five vs five, all positions.",color:"#ec5b13",icon:"stadium",backgroundUrl:`${ie}/format/5v5.jpg`}};function AM({options:t=[],onSelect:e,onClose:n,sport:r}){const[s,i]=R.useState(null),o=t.length<=2;return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,700;1,900&family=Barlow:wght@400;500;600&display=swap');

        .fs-root { font-family: 'Barlow', sans-serif; }

        .fs-backdrop {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: rgba(8, 4, 2, 0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          display: flex;
          flex-direction: column;
          max-width: 480px;
          margin: 0 auto;
          animation: fsSlideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes fsSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fs-header {
          padding: 20px 18px 12px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .fs-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.6rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #f5f0eb;
          line-height: 1;
        }

        .fs-title em { color: #ec5b13; font-style: normal; }

        .fs-subtitle {
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(200,175,150,0.45);
          margin-top: 4px;
        }

        .fs-close {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(236,91,19,0.3);
          background: rgba(236,91,19,0.07);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #ec5b13;
          transition: all 0.18s ease;
          flex-shrink: 0;
        }
        .fs-close:hover { background: rgba(236,91,19,0.18); border-color: rgba(236,91,19,0.6); }

        /* Divider */
        .fs-divider {
          height: 1px;
          margin: 0 18px;
          background: linear-gradient(90deg, transparent, rgba(236,91,19,0.25), transparent);
          flex-shrink: 0;
        }

        /* Cards area */
        .fs-cards {
          flex: 1;
          overflow-y: auto;
          padding: 14px 14px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fs-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        /* Individual card */
        .fs-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          border: 1.5px solid rgba(255,255,255,0.07);
          transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.18s ease;
          will-change: transform;
        }

        .fs-card:active { transform: scale(0.96) !important; }

        .fs-card.fs-hero { height: 170px; }
        .fs-card.fs-small { height: 120px; }
        .fs-card.fs-medium { height: 145px; }

        /* BG */
        .fs-card-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          transition: transform 0.4s ease;
        }
        .fs-card:hover .fs-card-bg { transform: scale(1.07); }

        /* Overlays */
        .fs-card-dark {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(8,4,2,0.94) 0%, rgba(8,4,2,0.45) 50%, rgba(0,0,0,0.05) 100%);
        }

        .fs-card-tint {
          position: absolute; inset: 0;
          opacity: 0.15;
          transition: opacity 0.3s ease;
        }
        .fs-card:hover .fs-card-tint { opacity: 0.27; }

        .fs-card-glint {
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .fs-card:hover .fs-card-glint { opacity: 1; }

        /* Content */
        .fs-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 12px 14px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .fs-card-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.57rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .fs-card-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          text-transform: uppercase;
          color: #fff;
          line-height: 1;
          text-shadow: 0 2px 12px rgba(0,0,0,0.8);
        }

        .fs-card.fs-hero .fs-card-label { font-size: 2.8rem; }
        .fs-card.fs-medium .fs-card-label { font-size: 2.2rem; }
        .fs-card.fs-small .fs-card-label { font-size: 1.8rem; }

        .fs-card-arrow {
          font-family: 'Material Symbols Outlined', sans-serif;
          font-size: 1.2rem;
          color: rgba(255,255,255,0.3);
          transition: color 0.2s, transform 0.2s;
          line-height: 1;
        }
        .fs-card:hover .fs-card-arrow {
          color: rgba(255,255,255,0.85);
          transform: translateX(2px);
        }

        .fs-card-desc {
          font-size: 0.67rem;
          font-weight: 500;
          color: rgba(215,195,170,0.6);
          margin-top: 4px;
          line-height: 1.4;
          max-width: 85%;
        }

        .fs-card.fs-small .fs-card-desc { display: none; }
      `}),d.jsxs("div",{className:"fs-root fs-backdrop",children:[d.jsxs("div",{className:"fs-header",children:[d.jsxs("div",{children:[d.jsxs("h2",{className:"fs-title",children:["Match ",d.jsx("em",{children:"Format"})]}),d.jsxs("p",{className:"fs-subtitle",children:[r," · Choose your match type"]})]}),d.jsx("button",{className:"fs-close",onClick:n,children:d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1rem"},children:"close"})})]}),d.jsx("div",{className:"fs-divider"}),d.jsx("div",{className:"fs-cards",children:o?d.jsx("div",{className:t.length===1?"":"fs-row",children:t.map(a=>d.jsx(sf,{format:a,size:t.length===1?"fs-hero":"fs-medium",onSelect:e},a))}):d.jsxs(d.Fragment,{children:[d.jsx(sf,{format:t[0],size:"fs-hero",onSelect:e}),PM(t.slice(1),2).map((a,c)=>d.jsx("div",{className:"fs-row",children:a.map(u=>d.jsx(sf,{format:u,size:"fs-small",onSelect:e},u))},c))]})})]})]})}function sf({format:t,size:e,onSelect:n}){const r=RM[t]||{label:t,tag:"Format",description:"",color:"#ec5b13",backgroundUrl:`${ie}/format/1v1.jpg`};return d.jsxs("div",{className:`fs-card ${e}`,style:{boxShadow:`0 4px 24px rgba(0,0,0,0.45), 0 0 0 1px ${r.color}18`},onClick:()=>n(t),children:[d.jsx("div",{className:"fs-card-bg",style:{backgroundImage:`url('${r.backgroundUrl}')`}}),d.jsx("div",{className:"fs-card-dark"}),d.jsx("div",{className:"fs-card-tint",style:{background:`radial-gradient(ellipse at bottom left, ${r.color} 0%, transparent 70%)`}}),d.jsx("div",{className:"fs-card-glint",style:{background:`linear-gradient(90deg, transparent 0%, ${r.color}bb 50%, transparent 100%)`}}),d.jsxs("div",{className:"fs-card-content",children:[d.jsxs("div",{children:[d.jsx("p",{className:"fs-card-tag",style:{color:r.color},children:r.tag}),d.jsx("h3",{className:"fs-card-label",children:r.label}),d.jsx("p",{className:"fs-card-desc",children:r.description})]}),d.jsx("span",{className:"material-symbols-outlined fs-card-arrow",children:"arrow_forward_ios"})]})]})}function PM(t,e){const n=[];for(let r=0;r<t.length;r+=e)n.push(t.slice(r,r+e));return n}function DM({currentMode:t,onSelect:e,onClose:n}){const[r,s]=R.useState(null),i=c=>{e(c),n()},[o,...a]=Up;return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Barlow:wght@400;500;600&display=swap');

        .gm-root {
          font-family: 'Barlow', sans-serif;
        }

        .gm-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: rgba(10, 6, 4, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          max-width: 480px;
          margin: 0 auto;
          animation: gmSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes gmSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .gm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 18px 10px;
          flex-shrink: 0;
        }

        .gm-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          font-size: 1.55rem;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #f5f0eb;
          line-height: 1;
        }

        .gm-title span {
          color: #ec5b13;
        }

        .gm-subtitle {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(200,180,160,0.5);
          margin-top: 3px;
        }

        .gm-close {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(236,91,19,0.3);
          background: rgba(236,91,19,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #ec5b13;
        }

        .gm-close:hover {
          background: rgba(236,91,19,0.18);
          border-color: rgba(236,91,19,0.6);
        }

        /* Bento grid */
        .gm-grid {
          flex: 1;
          overflow-y: auto;
          padding: 8px 14px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Individual card */
        .gm-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
          border: 1.5px solid rgba(255,255,255,0.08);
          will-change: transform;
        }

        .gm-card:active {
          transform: scale(0.97) !important;
        }

        .gm-card.hero {
          height: 200px;
        }

        .gm-card.small {
          height: 130px;
        }

        .gm-card.selected {
          border-color: #ec5b13 !important;
          box-shadow: 0 0 0 2px rgba(236,91,19,0.4), 0 8px 30px rgba(236,91,19,0.3) !important;
        }

        /* Two-column row for small cards */
        .gm-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        /* Background image */
        .gm-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .gm-card:hover .gm-card-bg {
          transform: scale(1.06);
        }

        /* Dark cinematic overlay */
        .gm-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(10,5,2,0.93) 0%,
            rgba(10,5,2,0.5) 45%,
            rgba(0,0,0,0.1) 100%
          );
        }

        /* Accent color tint overlay per card */
        .gm-card-tint {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          transition: opacity 0.3s ease;
        }

        .gm-card:hover .gm-card-tint {
          opacity: 0.28;
        }

        /* Selected checkmark */
        .gm-selected-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 26px;
          height: 26px;
          background: #ec5b13;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(236,91,19,0.6);
          animation: popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }

        /* Glint line */
        .gm-card-glint {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gm-card:hover .gm-card-glint,
        .gm-card.selected .gm-card-glint {
          opacity: 1;
        }

        /* Content */
        .gm-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 14px 16px;
        }

        .gm-card-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .gm-card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #ffffff;
          line-height: 1;
          text-shadow: 0 2px 12px rgba(0,0,0,0.7);
        }

        .gm-card.hero .gm-card-name { font-size: 2.6rem; }
        .gm-card.small .gm-card-name { font-size: 1.6rem; }

        .gm-card-desc {
          font-size: 0.68rem;
          font-weight: 500;
          color: rgba(220,200,180,0.65);
          margin-top: 4px;
          line-height: 1.4;
        }

        .gm-card.small .gm-card-desc {
          display: none;
        }
      `}),d.jsxs("div",{className:"gm-root gm-overlay",children:[d.jsxs("div",{className:"gm-header",children:[d.jsxs("div",{children:[d.jsxs("h2",{className:"gm-title",children:["Game ",d.jsx("span",{children:"Mode"})]}),d.jsx("p",{className:"gm-subtitle",children:"Basketball · Select your format"})]}),d.jsx("button",{className:"gm-close",onClick:n,children:d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"1.1rem"},children:"close"})})]}),d.jsxs("div",{className:"gm-grid",children:[d.jsx(Vx,{mode:o,isSelected:t===o.id,isHovered:r===o.id,size:"hero",onHover:s,onSelect:i}),jM(a,2).map((c,u)=>d.jsx("div",{className:"gm-row",children:c.map(h=>d.jsx(Vx,{mode:h,isSelected:t===h.id,isHovered:r===h.id,size:"small",onHover:s,onSelect:i},h.id))},u))]})]})]})}function Vx({mode:t,isSelected:e,size:n,onHover:r,onSelect:s}){return d.jsxs("div",{className:`gm-card ${n} ${e?"selected":""}`,style:{boxShadow:e?void 0:`0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px ${t.color}22`},onClick:()=>s(t.id),onMouseEnter:()=>r(t.id),onMouseLeave:()=>r(null),children:[d.jsx("div",{className:"gm-card-bg",style:{backgroundImage:`url('${t.backgroundUrl}')`,backgroundPosition:t.backgroundPosition||"center"}}),d.jsx("div",{className:"gm-card-overlay"}),d.jsx("div",{className:"gm-card-tint",style:{background:`radial-gradient(ellipse at bottom left, ${t.color} 0%, transparent 70%)`}}),d.jsx("div",{className:"gm-card-glint",style:{background:`linear-gradient(90deg, transparent 0%, ${t.color}cc 50%, transparent 100%)`}}),e&&d.jsx("div",{className:"gm-selected-badge",children:d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"0.85rem",color:"#fff"},children:"check"})}),d.jsxs("div",{className:"gm-card-content",children:[d.jsx("p",{className:"gm-card-tag",style:{color:t.color},children:t.tag}),d.jsx("h3",{className:"gm-card-name",children:t.name}),n==="hero"&&d.jsx("p",{className:"gm-card-desc",children:t.description})]})]})}function jM(t,e){const n=[];for(let r=0;r<t.length;r+=e)n.push(t.slice(r,r+e));return n}const Hp=fd(t=>({lobbyCode:null,sport:null,location:null,status:null,players:{},playerCount:0,host:null,selectedFormat:null,matchId:null,gameMode:aa,setLobby:e=>{if(!e){t({lobbyCode:null,sport:null,location:null,status:null,players:{},playerCount:0,host:null,selectedFormat:null,matchId:null,gameMode:aa});return}t({lobbyCode:e.code,sport:e.sport,location:e.location,status:e.status,players:e.players||{},playerCount:e.playerCount||0,host:e.host,selectedFormat:e.selectedFormat,matchId:e.matchId||null,gameMode:e.gameMode||aa})},clearLobby:()=>{t({lobbyCode:null,sport:null,location:null,status:null,players:{},playerCount:0,host:null,selectedFormat:null,matchId:null,gameMode:aa})},setFormat:e=>t({selectedFormat:e}),setGameMode:e=>t({gameMode:e})}));function LM(t){const e=Hp(n=>n.setLobby);R.useEffect(()=>{if(!t)return;let n=!0;const r=pM(t,s=>{n&&e(s)});return()=>{n=!1,r()}},[t,e])}function MM(t,e){if(t===hs.BADMINTON){if(e===2)return{auto:!0,format:"2v2",options:[]};if(e===1)return{auto:!1,format:null,options:["1v1","2v2"]}}if(t===hs.BASKETBALL){if(e===5)return{auto:!0,format:"5v5",options:[]};const n=Dx[t].filter(r=>GT[r]>=e);return n.length===1?{auto:!0,format:n[0],options:[]}:{auto:!1,format:null,options:n}}return{auto:!1,format:null,options:Dx[t]||[]}}function OM(t){return GT[t]||1}async function VM(t,e){const n=we(Ee,`lobbies/${t}`),r=await wn(n);if(!r.exists())throw new Error("Lobby not found");const s=r.val(),i=OM(e);await Nt(n,{status:zt.QUEUED,selectedFormat:e});const o=we(Ee,"lobbies"),a=await wn(o);if(!a.exists())return null;const c=a.val(),u=Object.keys(s.players||{}),h=[];for(const[E,_]of Object.entries(c))E!==t&&_.status===zt.QUEUED&&_.sport===s.sport&&_.location===s.location&&_.selectedFormat===e&&h.push({code:E,..._});if(h.length===0)return null;const f=[{code:t,...s}];let m=u.length;const y=[];let S=0;for(const E of h){const _=E.playerCount||Object.keys(E.players||{}).length;if(m<i&&m+_<=i?(f.push(E),m+=_):S+_<=i&&(y.push(E),S+=_),m>=i&&S>=i)break}if(m<i||S<i)return null;const I=`match_${aM(8)}`,k=[],b=[],v=[],w=[];for(const E of f){v.push(E.code);for(const _ of Object.keys(E.players||{}))k.push(_)}for(const E of y){w.push(E.code);for(const _ of Object.keys(E.players||{}))b.push(_)}const D={};for(const E of[...f,...y])for(const[_,T]of Object.entries(E.players||{}))D[_]=T;const j=await zM(s.sport,s.location),O={matchId:I,sport:s.sport,format:e,gameMode:s.gameMode||"ranked",location:s.location,courtId:j,status:Xs.PENDING_ACCEPT,expiresAt:Date.now()+xy.MATCH_ACCEPT*1e3,teams:{blue:{players:k,lobbies:v},red:{players:b,lobbies:w}},players:D,acceptances:{},votes:{},voteCount:{blue:0,red:0,pending:k.length+b.length},result:null,createdAt:Date.now()};await Ag(we(Ee,`matches/${I}`),O);for(const E of[...f,...y])await Nt(we(Ee,`lobbies/${E.code}`),{status:zt.MATCHED,matchId:I});return O}async function FM(t,e){await Nt(we(Ee,`matches/${t}/acceptances`),{[e]:!0});const n=await wn(we(Ee,`matches/${t}`));if(!n.exists())return!1;const r=n.val(),s=[...r.teams.blue.players||[],...r.teams.red.players||[]],i=r.acceptances||{},o=s.every(a=>i[a]);return o&&await Nt(we(Ee,`matches/${t}`),{status:Xs.IN_PROGRESS}),o}async function UM(t,e){await Nt(we(Ee,`matches/${t}/acceptances`),{[e]:!1});const n=await wn(we(Ee,`matches/${t}`));if(!n.exists())return;const r=n.val(),s=[...r.teams.blue.lobbies||[],...r.teams.red.lobbies||[]];await Nt(we(Ee,`matches/${t}`),{status:"cancelled"});const i=s.map(o=>Nt(we(Ee,`lobbies/${o}`),{status:zt.WAITING,matchId:null,selectedFormat:null}));await Promise.all(i)}async function BM(t){await Nt(we(Ee,`matches/${t}`),{status:Xs.VOTING,voteExpiresAt:Date.now()+xy.VOTE_DURATION*1e3})}function YT(t,e){const n=we(Ee,`matches/${t}`);return Pg(n,r=>{e(r.exists()?r.val():null)}),()=>Dg(n)}async function $M(t){const e=await wn(we(Ee,`matches/${t}`));return e.exists()?e.val():null}async function zM(t,e){var n;try{const r=iy(xs,"courts"),s=py(r,VT("sport","==",t)),i=await _y(s);if(!i.empty){const o=i.docs.map(u=>({id:u.id,...u.data()})),a=o[Math.floor(Math.random()*o.length)],c=((n=a.active_courts)==null?void 0:n[Math.floor(Math.random()*a.active_courts.length)])||1;return`${a.id}#${c}`}}catch(r){console.warn("Court assignment failed, using default:",r)}return"default_court#1"}function Fx(){const{lobbyId:t}=IR(),e=Xt(),n=Yt(),r=Hp(),[s,i]=R.useState([]),[o,a]=R.useState(!1),[c,u]=R.useState(!1),[h,f]=R.useState([]),[m,y]=R.useState(!1),[S,I]=R.useState(0),k=R.useRef(!1);LM(t),R.useEffect(()=>{wy("LOBBY_BGM")},[]),R.useEffect(()=>{!t||!r.sport||Wu({lobbyCode:t,sport:r.sport,matchId:null})},[t,r.sport]),R.useEffect(()=>{!t||!r.matchId||Wu({matchId:r.matchId})},[t,r.matchId]),R.useEffect(()=>{k.current=!1},[t]),R.useEffect(()=>{let K;return r.status===zt.QUEUED?(I(0),K=setInterval(()=>{I(X=>X+1)},1e3)):I(0),()=>clearInterval(K)},[r.status]),R.useEffect(()=>{(async()=>{if(r.sport)try{const X=iy(xs,"courts"),F=py(X,VT("sport","==",r.sport)),Q=(await _y(F)).docs.map(ue=>({id:ue.id,...ue.data()}));i(Q)}catch(X){console.error("Failed to fetch courts:",X)}})()},[r.sport]),R.useEffect(()=>{r.lobbyCode===t&&(k.current||r.status===zt.MATCHED&&r.matchId&&(async()=>{try{const X=await $M(r.matchId);if(!X||X.status==="cancelled")return;k.current=!0,e(`/match?id=${r.matchId}`)}catch(X){console.error("❌ Failed to verify match status:",X)}})())},[r.status,r.matchId,r.lobbyCode,t,e]);const b=()=>{rn("BTN_CLICK"),r.lobbyCode&&(navigator.clipboard.writeText(r.lobbyCode),se.success("Lobby code copied!"))},v=async K=>{const X=K.target.value;if(r.lobbyCode&&n.userId===r.host)try{await hM(r.lobbyCode,X),se.success("Location updated!")}catch(F){se.error("Failed to update location"),console.error(F)}},w=async K=>{if(rn("BTN_CLICK"),!(!_||r.sport!==hs.BASKETBALL))try{await fM(r.lobbyCode,K),se.success("Game mode updated!")}catch(X){se.error("Failed to update game mode"),console.error(X)}},D=()=>{rn("BTN_CLICK");const K=r.playerCount,{auto:X,format:F,options:q}=MM(r.sport,K);X&&F?j(F):(f(q),a(!0))},j=async K=>{a(!1),y(!0);try{await VM(r.lobbyCode,K)||se("Searching for opponents... stay in queue!",{icon:"🔍"})}catch(X){se.error("Matchmaking failed"),console.error(X)}finally{y(!1)}},O=async()=>{rn("DECLINE");try{await Lx(r.lobbyCode,zt.WAITING,{selectedFormat:null}),se.success("Queue cancelled")}catch(K){se.error("Failed to cancel queue"),console.error(K)}},E=async()=>{try{r.status===zt.QUEUED&&await Lx(r.lobbyCode,zt.WAITING),r.lobbyCode&&(await dM(r.lobbyCode,n.userId),Hp.getState().clearLobby(),dl(),e("/home"))}catch(K){se.error("Failed to leave lobby"),console.error(K)}},_=n.userId===r.host,T=r.status===zt.QUEUED,A=r.sport===hs.BASKETBALL,C=Object.entries(r.players||{}),P=HT[r.sport]||5,N=Math.max(0,P-C.length),ne=Up.find(K=>K.id===r.gameMode)||Up[0],ye=K=>{const X=Math.floor(K/60),F=K%60;return`${X}:${F.toString().padStart(2,"0")}`};return d.jsxs("div",{className:"relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-[#f8f6f6] dark:bg-[#221610] shadow-2xl",children:[d.jsxs("div",{className:"flex items-center bg-[#f8f6f6] dark:bg-[#221610] p-4 border-b border-primary/10 justify-between sticky top-0 z-10 backdrop-blur-md",children:[r.status!==zt.MATCHED?d.jsx("button",{onClick:E,className:"flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors",children:d.jsx("span",{className:"material-symbols-outlined text-primary",children:"arrow_back"})}):d.jsx("div",{className:"size-10"}),d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsxs("h2",{className:"text-slate-900 dark:text-slate-100 text-lg font-extrabold leading-tight tracking-tight",children:["LOBBY: ",r.lobbyCode||"..."]}),d.jsxs("span",{className:"text-[10px] uppercase tracking-widest text-primary font-bold",children:[r.sport||""," ",r.selectedFormat||""]}),T&&d.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[d.jsx("span",{className:"material-symbols-outlined text-primary text-xs animate-pulse",children:"schedule"}),d.jsx("span",{className:"text-xs font-bold text-primary",children:ye(S)})]})]}),d.jsx("div",{className:"size-10"})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto pb-32",children:[d.jsxs("div",{className:"relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#221610] to-transparent z-0"}),d.jsx("img",{src:"https://lh3.googleusercontent.com/aida-public/AB6AXuDMN1rz67SSO3kChwmw8lDqyfB2AOi-uTB-185wKdZFVmgMc2vveNXDDbUX9Um-pViK5Kzy15ehQfIm2Pu4k6uI-9Rx4ISV9KXpc-iSYvNgGBxFJaGWbmgeddH0xJV2LrtD7ILBD7E4SVbyHqVn4NsfhQlf0P1UD0t1dPPDDjGCagfU6B2NGCqJV-06cQjkdJViCVEhf9jFjcbm71J0qVViphUsk17lAPTyDoICtHisHK7ZVFU2C7J1PP1bk9lIHcTGJYWhkMDk1Rc",alt:"Court",className:"w-full h-full object-cover opacity-60"}),d.jsx("div",{className:"absolute bottom-4 left-4 z-10",children:d.jsxs("div",{className:"flex items-center gap-2 bg-primary px-3 py-1 rounded-full",children:[d.jsx("span",{className:"material-symbols-outlined text-sm text-white",children:"location_on"}),d.jsx("span",{className:"text-xs font-bold text-white uppercase tracking-wider",children:"Active Map"})]})})]}),d.jsx("div",{className:"p-4 -mt-6 relative z-20",children:d.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl p-4 shadow-xl border border-primary/20",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx("span",{className:"material-symbols-outlined text-primary text-sm",children:"map"}),d.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider",children:"Select Arena"}),_&&d.jsx("span",{className:"text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase",children:"Host"})]}),d.jsx("select",{value:r.location||"",onChange:v,disabled:!_||T,className:"w-full rounded-lg border-primary/30 bg-[#f8f6f6] dark:bg-slate-800 text-slate-900 dark:text-slate-100 h-12 px-4 disabled:opacity-50 disabled:cursor-not-allowed",children:s.length===0?d.jsx("option",{value:"",children:"Loading courts..."}):s.map(K=>d.jsx("option",{value:K.id,children:K.name||K.id},K.id))})]})}),A&&d.jsx("div",{className:"px-4 pb-2",children:d.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-primary/20",children:[d.jsxs("div",{className:"flex items-center gap-2 px-4 pt-3 pb-2",children:[d.jsx("span",{className:"material-symbols-outlined text-primary text-sm",children:"sports_basketball"}),d.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider flex-1",children:"Game Mode"}),_&&d.jsx("span",{className:"text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase",children:"Host"})]}),d.jsxs("button",{onClick:()=>_&&!T&&u(!0),disabled:!_||T,className:"relative w-full h-24 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed group",children:[d.jsx("div",{className:"absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105",style:{backgroundImage:`url('${ne.backgroundUrl}')`}}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"}),d.jsx("div",{className:"absolute inset-0 opacity-20",style:{background:`radial-gradient(ellipse at left, ${ne.color} 0%, transparent 70%)`}}),d.jsxs("div",{className:"absolute inset-0 flex items-center justify-between px-4",children:[d.jsxs("div",{className:"text-left",children:[d.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] mb-1",style:{color:ne.color},children:ne.tag}),d.jsx("p",{className:"font-black uppercase italic leading-none",style:{fontFamily:"'Barlow Condensed', sans-serif",fontSize:"1.6rem",color:"#ffffff",textShadow:"0 2px 12px rgba(0,0,0,0.7)"},children:ne.name})]}),_&&!T&&d.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all group-hover:scale-105",style:{borderColor:`${ne.color}60`,background:`${ne.color}18`,color:ne.color},children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"0.9rem"},children:"tune"}),d.jsx("span",{children:"Change"})]}),T&&d.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-500/40 bg-slate-700/30 text-xs font-bold uppercase tracking-wider text-slate-400",children:[d.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"0.9rem"},children:"lock"}),d.jsx("span",{children:"Locked"})]})]})]})]})}),d.jsx("div",{className:"px-4 py-2",children:d.jsxs("div",{className:"flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 backdrop-blur-sm",children:[d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{className:"flex flex-col gap-0.5",children:[d.jsx("p",{className:"text-primary text-[10px] font-bold uppercase tracking-[0.1em]",children:"Lobby Access"}),d.jsx("p",{className:"text-slate-900 dark:text-slate-100 text-xl font-black tracking-widest",children:r.lobbyCode||"..."})]}),d.jsx("div",{className:"flex gap-2",children:d.jsxs("button",{onClick:b,className:"flex items-center gap-2 px-4 h-10 rounded-lg bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all",children:[d.jsx("span",{className:"material-symbols-outlined text-sm",children:"content_copy"}),d.jsx("span",{children:"COPY"})]})})]}),d.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-xs leading-normal",children:T?"Lobby locked while in queue":"Invite teammates by sharing this unique lobby ID."})]})}),d.jsxs("div",{className:"px-4 py-4",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsxs("h3",{className:"text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-widest flex items-center gap-2",children:[d.jsx("span",{className:"material-symbols-outlined text-primary",children:"groups"}),"Team Roster"]}),d.jsxs("span",{className:"text-primary font-black text-sm px-3 py-1 bg-primary/10 rounded-full",children:[C.length," / ",P]})]}),d.jsxs("div",{className:"space-y-3",children:[C.map(([K,X])=>d.jsx(NM,{player:{...X,userId:K},isHost:K===r.host,status:X.ready?"ready":"preparing"},K)),N>0&&Array.from({length:N}).map((K,X)=>d.jsxs("div",{className:`flex items-center justify-between p-3 rounded-xl border-2 border-dashed ${T?"border-slate-400/30 bg-slate-200/30 dark:bg-slate-800/30":"border-primary/20 bg-primary/5"}`,children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:`size-12 rounded-full flex items-center justify-center border-2 border-dashed ${T?"bg-slate-300/50 dark:bg-slate-700/50 border-slate-400/50":"bg-slate-200/50 dark:bg-slate-800/50 border-primary/30"}`,children:d.jsx("span",{className:`material-symbols-outlined ${T?"text-slate-400":"text-primary/40"}`,children:T?"lock":"person_add"})}),d.jsx("p",{className:`font-bold text-sm italic ${T?"text-slate-400":"text-primary/60 dark:text-primary/40"}`,children:T?"Locked during queue":"Waiting for players..."})]}),d.jsx("span",{className:`material-symbols-outlined ${T?"text-slate-400":"text-primary/60"}`,children:T?"lock":"add_circle"})]},`empty-${X}`))]})]})]}),d.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-30",children:[d.jsx("div",{className:"absolute -top-16 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-primary/20 blur-3xl pointer-events-none"}),d.jsx("div",{className:"bg-[#f8f6f6] dark:bg-[#221610]/95 border-t border-primary/20 px-4 pb-8 pt-4 backdrop-blur-md",children:T?d.jsxs("button",{onClick:O,className:"relative w-full h-16 rounded-xl bg-red-600 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_25px_rgba(220,38,38,0.4)]",children:[d.jsx("span",{className:"material-symbols-outlined text-white text-3xl font-bold",children:"cancel"}),d.jsx("span",{className:"text-white text-xl font-black tracking-widest",children:"CANCEL QUEUE"})]}):d.jsxs("button",{onClick:D,disabled:!_||m||C.length<1,className:"relative w-full h-16 rounded-xl bg-primary flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_25px_rgba(236,91,19,0.4)] disabled:opacity-50 disabled:cursor-not-allowed",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"}),d.jsx("span",{className:"material-symbols-outlined text-white text-3xl font-bold",children:"stadium"}),d.jsx("span",{className:"text-white text-xl font-black tracking-widest",children:m?"SEARCHING...":_?"FIND MATCH":"WAITING FOR HOST"})]})})]}),o&&d.jsx(AM,{options:h,sport:r.sport,onSelect:j,onClose:()=>a(!1)}),c&&A&&_&&d.jsx(DM,{currentMode:r.gameMode,onSelect:w,onClose:()=>u(!1)})]})}function Ux({team:t="blue",players:e=[],playerData:n={},acceptances:r={},showStars:s=!0}){const i=t==="blue",o=i?"border-blue-500":"border-red-500",a=i?"bg-blue-600/20":"bg-red-600/20",c=i?"text-blue-400":"text-red-400",u=i?"BLUE TEAM":"RED TEAM";return d.jsxs("div",{className:"space-y-1",children:[d.jsx("div",{className:`flex items-center justify-between px-2 py-1 ${a} border-l-4 ${o} rounded-sm`,children:d.jsx("h4",{className:`${c} text-xs font-black tracking-widest uppercase`,children:u})}),e.map(h=>{const f=n[h]||{},m=Qe[f.avatar]||Qe[0],y=_e(f.stars||0),S=r[h]===!0;return d.jsxs("div",{className:`flex items-center gap-3 bg-slate-800/50 p-2 rounded-lg border transition-all ${S?"border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]":"border-slate-700/50"}`,children:[d.jsx("div",{className:`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 border ${i?"border-blue-500/50":"border-red-500/50"}`,style:{backgroundImage:`url("${m}")`}}),d.jsxs("div",{className:"flex flex-col flex-1",children:[d.jsx("p",{className:"text-slate-100 text-sm font-bold leading-none",children:f.username||"Unknown"}),d.jsx("p",{className:"text-slate-400 text-[10px] font-medium",children:y.name})]}),s&&d.jsx("div",{className:"text-primary text-xs",children:"⭐".repeat(Math.min(5,Math.max(1,Math.ceil((f.stars||0)/10))))}),S&&d.jsxs("div",{className:"flex items-center gap-1 bg-emerald-500/20 px-2 py-1 rounded",children:[d.jsx("span",{className:"material-symbols-outlined text-emerald-500 text-sm",children:"check_circle"}),d.jsx("span",{className:"text-emerald-500 text-[10px] font-bold",children:"READY"})]})]},h)})]})}function WM({expiresAt:t,onExpire:e,className:n=""}){const[r,s]=R.useState(0);R.useEffect(()=>{if(!t)return;const u=()=>{const f=Math.max(0,Math.floor((t-Date.now())/1e3));s(f),f<=0&&e&&e()};u();const h=setInterval(u,1e3);return()=>clearInterval(h)},[t,e]);const i=Math.floor(r/60),o=r%60,a=`${i}:${String(o).padStart(2,"0")}`,c=r<=10;return d.jsxs("div",{className:`flex items-center justify-center gap-2 ${n}`,children:[d.jsx("span",{className:`material-symbols-outlined text-sm ${c?"text-red-500 animate-pulse":"text-primary"}`,children:"schedule"}),d.jsx("span",{className:`font-black text-xl leading-none ${c?"text-red-500":"text-primary"}`,children:a})]})}const pn=fd(t=>({matchId:null,sport:null,format:null,gameMode:"ranked",courtId:null,status:null,teams:{blue:{players:[],lobbies:[]},red:{players:[],lobbies:[]}},players:{},acceptances:{},votes:{},voteCount:{blue:0,red:0,pending:0},result:null,expiresAt:null,voteExpiresAt:null,setMatch:e=>{if(!e){t({matchId:null,sport:null,format:null,gameMode:"ranked",courtId:null,status:null,teams:{blue:{players:[],lobbies:[]},red:{players:[],lobbies:[]}},players:{},acceptances:{},votes:{},voteCount:{blue:0,red:0,pending:0},result:null,expiresAt:null,voteExpiresAt:null});return}t({matchId:e.matchId,sport:e.sport,format:e.format,gameMode:e.gameMode||"ranked",courtId:e.courtId,status:e.status,teams:e.teams||{blue:{players:[],lobbies:[]},red:{players:[],lobbies:[]}},players:e.players||{},acceptances:e.acceptances||{},votes:e.votes||{},voteCount:e.voteCount||{blue:0,red:0,pending:0},result:e.result||null,expiresAt:e.expiresAt||null,voteExpiresAt:e.voteExpiresAt||null})},clearMatch:()=>{t({matchId:null,sport:null,format:null,gameMode:"ranked",courtId:null,status:null,teams:{blue:{players:[],lobbies:[]},red:{players:[],lobbies:[]}},players:{},acceptances:{},votes:{},voteCount:{blue:0,red:0,pending:0},result:null,expiresAt:null,voteExpiresAt:null})}}));function HM(){var I,k,b,v,w;const[t]=hd(),e=t.get("id"),n=Xt(),r=pn(),s=Yt(D=>D.userId),i=R.useRef(!1),o=R.useRef(null),a=R.useRef(!0),c=R.useRef(null);R.useEffect(()=>{rn("MATCH_FOUND")},[]),R.useEffect(()=>(a.current=!0,()=>{a.current=!1,c.current&&clearTimeout(c.current)}),[]),R.useEffect(()=>{e&&Wu({matchId:e})},[e]);const u=R.useCallback(D=>{var j,O;if(!(D!=null&&D.teams))return null;if((j=D.teams.blue)!=null&&j.lobbies){for(const E of D.teams.blue.lobbies)if((D.teams.blue.players||[]).includes(s))return E}if((O=D.teams.red)!=null&&O.lobbies){for(const E of D.teams.red.lobbies)if((D.teams.red.players||[]).includes(s))return E}return null},[s]),h=R.useCallback(D=>{if(i.current)return;i.current=!0,o.current&&(o.current(),o.current=null),se.error("Match was cancelled");const j=u(D);pn.getState().clearMatch(),Wu({matchId:null}),c.current=setTimeout(()=>{a.current&&n(j?`/lobby/${j}`:"/home"),c.current=null},500)},[u,n]);R.useEffect(()=>{if(!e)return;i.current=!1;const D=YT(e,j=>{if(!i.current&&j){if(j.status==="cancelled"){h(j);return}pn.getState().setMatch(j)}});return o.current=D,()=>{o.current&&(o.current(),o.current=null)}},[e,h]),R.useEffect(()=>{!e||r.matchId!==e||i.current||r.status==="cancelled"&&h(r)},[r.status,r.matchId,e,h]),R.useEffect(()=>{!e||r.matchId!==e||i.current||r.status===Xs.IN_PROGRESS&&n(`/court?id=${e}`)},[r.status,r.matchId,e,n]);const f=async()=>{rn("ACCEPT");try{await FM(e,s),se.success("Match accepted!")}catch(D){console.error("❌ Accept failed:",D),se.error("Failed to accept")}},m=async()=>{if(rn("DECLINE"),!!e&&!i.current){i.current=!0,o.current&&(o.current(),o.current=null);try{se("Match declined");const D=pn.getState(),j=u(D);await UM(e,s),pn.getState().clearMatch(),dl(),c.current=setTimeout(()=>{a.current&&n(j?`/lobby/${j}`:"/home"),c.current=null},500)}catch(D){console.error("❌ Decline failed:",D),se.error("Failed to decline"),i.current=!1}}},y=()=>{m()},S=(I=r.acceptances)==null?void 0:I[s];return d.jsxs("div",{className:"relative flex h-screen w-full flex-col max-w-md mx-auto shadow-2xl bg-slate-900 overflow-hidden",children:[d.jsxs("div",{className:"relative flex flex-col items-center pt-8 pb-4 bg-gradient-to-b from-primary/20 to-transparent",children:[d.jsxs("div",{className:"relative w-24 h-24 mb-4 flex items-center justify-center",children:[d.jsx("div",{className:"absolute inset-0 border-4 border-primary/30 rounded-full"}),d.jsx("div",{className:"absolute inset-0 border-t-4 border-primary rounded-full animate-spin",style:{animationDuration:"3s"}}),d.jsx("span",{className:"material-symbols-outlined text-primary text-5xl",children:"radar"})]}),d.jsx("h2",{className:"text-white text-3xl font-black italic leading-tight tracking-tighter uppercase",children:"Match Found!"}),d.jsx("p",{className:"text-primary text-xs font-bold tracking-[0.2em] mt-1",children:"COMPETITIVE QUEUE"})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto px-4 space-y-2 pb-24",children:[d.jsx(Ux,{team:"blue",players:((b=(k=r.teams)==null?void 0:k.blue)==null?void 0:b.players)||[],playerData:r.players,acceptances:r.acceptances}),d.jsxs("div",{className:"relative py-2 flex items-center justify-center",children:[d.jsx("div",{className:"h-[1px] w-full bg-slate-700"}),d.jsx("div",{className:"absolute bg-slate-900 px-4",children:d.jsx("span",{className:"text-2xl font-black italic text-primary/80 tracking-tighter",children:"VS"})})]}),d.jsx(Ux,{team:"red",players:((w=(v=r.teams)==null?void 0:v.red)==null?void 0:w.players)||[],playerData:r.players,acceptances:r.acceptances})]}),d.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800",children:[d.jsxs("div",{className:"text-center mb-4",children:[d.jsx("p",{className:"text-slate-400 text-xs font-bold uppercase tracking-widest mb-1",children:"Accept to join match"}),d.jsx(WM,{expiresAt:r.expiresAt,onExpire:y})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsx("button",{onClick:m,disabled:S||i.current,className:"flex-1 bg-red-600/10 border-2 border-red-600/40 hover:bg-red-600/20 text-red-500 font-black py-4 rounded-xl uppercase tracking-tighter shadow-[0_0_15px_rgba(220,38,38,0.2)] disabled:opacity-30",children:"Decline"}),d.jsxs("button",{onClick:f,disabled:S,className:"flex-1 bg-emerald-600 border-2 border-emerald-400 text-white font-black py-4 rounded-xl uppercase tracking-tighter shadow-[0_0_25px_rgba(16,185,129,0.4)] relative overflow-hidden disabled:opacity-50",children:[S?"Accepted ✓":"Accept",d.jsx("div",{className:"absolute top-0 left-0 w-full h-1/2 bg-white/10"})]})]})]})]})}function GM(t){const e=pn(n=>n.setMatch);R.useEffect(()=>{if(!t)return;let n=!0;const r=YT(t,s=>{n&&e(s)});return()=>{n=!1,r()}},[t,e])}function qM(){var S,I,k,b,v;const[t]=hd(),e=t.get("id"),n=Xt(),r=pn(),s=Yt(w=>w.userId),[i,o]=R.useState(!1),[a,c]=R.useState(!1);GM(e),R.useEffect(()=>{wy("COURT_BGM"),rn("WELCOME_BBL")},[]),R.useEffect(()=>{async function w(){var E,_,T,A;if(!r.teams||!s)return;const D=((E=r.teams.blue)==null?void 0:E.players)||[],j=((_=r.teams.red)==null?void 0:_.players)||[];let O=[];D.includes(s)?O=((T=r.teams.blue)==null?void 0:T.lobbies)||[]:j.includes(s)&&(O=((A=r.teams.red)==null?void 0:A.lobbies)||[]);for(const C of O)try{const P=await mM(C);if(P&&P.host===s){o(!0);return}}catch(P){console.error("Error checking lobby host:",P)}o(!1)}w()},[r.teams,s]),R.useEffect(()=>{r.status==="voting"&&n(`/vote?id=${e}`)},[r.status,e,n]);const u=(r.courtId||"").split("#"),h=((S=u[0])==null?void 0:S.replace(/_/g," "))||"BBL Legends Court",f=u[1]||"1",m=async()=>{if(i){c(!0);try{await BM(e),se.success("Match ended - proceeding to voting")}catch(w){se.error("Failed to end match"),console.error(w),c(!1)}}},y=(w,D)=>{var T;const j=((T=r.players)==null?void 0:T[w])||{},O=Qe[j.avatar]||Qe[0],E=_e(j.stars||0),_=D==="blue"?"border-blue-500":"border-red-500";return d.jsxs("div",{className:"flex items-center gap-4 bg-white dark:bg-primary/5 p-3 rounded-xl border border-primary/10 shadow-sm",children:[d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 ${_}`,style:{backgroundImage:`url("${O}")`}}),d.jsx("div",{className:"absolute -bottom-1 -right-1 size-5 rounded-full bg-green-500 border-2 border-white dark:border-[#221610]"})]}),d.jsxs("div",{className:"flex flex-col flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("p",{className:"text-slate-900 dark:text-white text-base font-bold",children:j.username||"Player"}),d.jsx("span",{className:"text-[10px] font-bold text-green-500 uppercase",children:"[In-Game]"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("p",{className:"text-slate-500 dark:text-primary/60 text-xs font-semibold uppercase tracking-tight",children:["Rank: ",E.name]}),d.jsx("div",{className:"flex text-primary",children:Array.from({length:Math.min(5,Math.max(1,Math.ceil((j.stars||1)/10)))}).map((A,C)=>d.jsx("span",{className:"material-symbols-outlined text-xs",children:"star"},C))})]})]})]},w)};return d.jsxs("div",{className:"relative flex h-screen w-full flex-col bg-[#f8f6f6] dark:bg-[#221610]",children:[d.jsxs("header",{className:"flex items-center p-4 pb-2 justify-between border-b border-primary/10",children:[d.jsx("button",{onClick:()=>n("/home"),className:"text-primary flex size-12 shrink-0 items-center justify-start",children:d.jsx("span",{className:"material-symbols-outlined text-[24px]",children:"arrow_back"})}),d.jsx("h2",{className:"text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-wider flex-1 text-center uppercase",children:"Match In Progress"}),d.jsx("div",{className:"flex w-12 items-center justify-end",children:d.jsx("span",{className:"material-symbols-outlined text-primary text-[24px]",children:"info"})})]}),d.jsxs("div",{className:"px-4 py-6 bg-gradient-to-b from-primary/5 to-transparent text-center",children:[d.jsxs("h2",{className:"text-slate-900 dark:text-white text-2xl font-extrabold leading-tight tracking-tight capitalize",children:[h," #",f]}),d.jsxs("div",{className:"flex items-center justify-center gap-2 mt-1",children:[d.jsx("span",{className:"material-symbols-outlined text-primary text-sm",children:"location_on"}),d.jsx("p",{className:"text-slate-600 dark:text-primary/70 text-sm font-medium uppercase tracking-widest",children:"Downtown Arena"})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pb-32",children:[d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex items-center justify-between border-b-2 border-blue-500/30 pb-2 mb-4",children:[d.jsx("h3",{className:"text-blue-600 dark:text-blue-400 text-lg font-black italic tracking-tighter",children:"BLUE TEAM"}),d.jsx("span",{className:"text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20",children:"TEAM A"})]}),d.jsx("div",{className:"space-y-3",children:(((k=(I=r.teams)==null?void 0:I.blue)==null?void 0:k.players)||[]).map(w=>y(w,"blue"))})]}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex items-center justify-between border-b-2 border-red-500/30 pb-2 mb-4",children:[d.jsx("h3",{className:"text-red-600 dark:text-red-400 text-lg font-black italic tracking-tighter",children:"RED TEAM"}),d.jsx("span",{className:"text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20",children:"TEAM B"})]}),d.jsx("div",{className:"space-y-3",children:(((v=(b=r.teams)==null?void 0:b.red)==null?void 0:v.players)||[]).map(w=>y(w,"red"))})]})]}),d.jsxs("div",{className:"fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#f8f6f6] dark:from-[#221610] via-[#f8f6f6] dark:via-[#221610]/95 to-transparent max-w-md mx-auto",children:[d.jsx("button",{onClick:m,disabled:!i||a,className:`w-full font-black text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(236,91,19,0.4)] tracking-widest uppercase transition-all ${i?"bg-primary hover:bg-primary/90 text-white cursor-pointer":"bg-gray-400 text-gray-200 cursor-not-allowed opacity-50"}`,children:a?"Ending Match...":i?"Match Over":"Match Over (Host Only)"}),!i&&d.jsx("p",{className:"text-center text-slate-500 dark:text-primary/40 text-[10px] mt-3 font-bold uppercase tracking-tighter",children:"Only team captains can end the match"})]})]})}async function KM(t,e,n){var m,y,S,I,k;const r=we(Ee,`matches/${t}`),s=await wn(r);if(!s.exists())throw new Error("Match not found");const i=s.val();if(i.status!==Xs.VOTING)throw new Error("Voting is not active");const o=(m=i.votes)==null?void 0:m[e],a={[`votes/${e}`]:n},c={...i.voteCount};o?(c[o]=Math.max(0,(c[o]||0)-1),c.pending=c.pending||0):c.pending=Math.max(0,(c.pending||0)-1),c[n]=(c[n]||0)+1,a.voteCount=c,await Nt(r,a);const u=[...((S=(y=i.teams)==null?void 0:y.blue)==null?void 0:S.players)||[],...((k=(I=i.teams)==null?void 0:I.red)==null?void 0:k.players)||[]],h={...i.votes||{},[e]:n},f=u.every(b=>h[b]);return f&&await QM(t),{allVoted:f,counts:c}}async function QM(t){var I,k,b,v;const e=we(Ee,`matches/${t}`),n=await wn(e);if(!n.exists())return null;const r=n.val();if(r.status===Xs.COMPLETED)return r.result;const s=r.sport||"basketball",i=(r.gameMode||"ranked")==="ranked",o=r.votes||{},a=Object.values(o).filter(w=>w==="blue").length,c=Object.values(o).filter(w=>w==="red").length;let u=null;a>c?u="blue":c>a&&(u="red");const h=((k=(I=r.teams)==null?void 0:I.blue)==null?void 0:k.players)||[],f=((v=(b=r.teams)==null?void 0:b.red)==null?void 0:v.players)||[],m=[...h,...f],y={};for(const w of m){if(!i){y[w]=0;continue}const D=h.includes(w)?"blue":"red",O=!!o[w];u?D===u?y[w]=O?Fr.WIN:Fr.NON_VOTER_WIN:y[w]=O?Fr.LOSS:Fr.NON_VOTER_LOSS:y[w]=0}await Nt(e,{status:Xs.COMPLETED,result:{winner:u,blueVotes:a,redVotes:c,starDeltas:y,sport:s,deadlock:!u,completedAt:Date.now()}});const S=i?Object.entries(y).map(([w,D])=>D!==0?X3(w,D,s):Promise.resolve()):[];return await Promise.allSettled(S),{winner:u,blueVotes:a,redVotes:c,starDeltas:y,sport:s}}function YM(t,e){const n=we(Ee,`matches/${t}`);return Pg(n,r=>{if(r.exists()){const s=r.val();e({votes:s.votes||{},voteCount:s.voteCount||{},status:s.status,result:s.result,voteExpiresAt:s.voteExpiresAt})}}),()=>Dg(n)}function XM(t){pn(e=>e.setMatch),R.useEffect(()=>{if(!t)return;const e=YM(t,n=>{pn.setState(r=>({...r,votes:n.votes,voteCount:n.voteCount,status:n.status,result:n.result,voteExpiresAt:n.voteExpiresAt}))});return()=>e()},[t])}function JM(){var v,w,D;const[t]=hd(),e=t.get("id"),n=Xt(),r=Yt(j=>j.userId),s=pn(),[i,o]=R.useState(null),[a,c]=R.useState(xy.VOTE_DURATION);XM(e),R.useEffect(()=>{s.votes&&s.votes[r]&&o(s.votes[r])},[s.votes,r]),R.useEffect(()=>{if(!s.voteExpiresAt)return;const j=setInterval(()=>{const O=Math.max(0,Math.floor((s.voteExpiresAt-Date.now())/1e3));c(O),O<=0&&(clearInterval(j),n(`/results?id=${e}`))},1e3);return()=>clearInterval(j)},[s.voteExpiresAt,e,n]),R.useEffect(()=>{s.status==="completed"&&n(`/results?id=${e}`)},[s.status,e,n]);const u=j=>{const O=Math.floor(j/60),E=j%60;return`${O}:${E.toString().padStart(2,"0")}`},h=(D=(w=(v=s.teams)==null?void 0:v.blue)==null?void 0:w.players)!=null&&D.includes(r)?"blue":"red",f=h==="blue"?"red":"blue",m=async j=>{const O=j==="my_team"?h:f;try{await KM(e,r,O),o(O),se.success(j==="my_team"?"Voted: My Team Won!":"Voted: Enemy Team Won")}catch(E){se.error("Failed to submit vote"),console.error(E)}},y=s.voteCount||{blue:0,red:0,pending:0},S=j=>{var E,_;return(((_=(E=s.teams)==null?void 0:E[j])==null?void 0:_.players)||[]).map(T=>{var A,C;return{id:T,...((A=s.players)==null?void 0:A[T])||{},vote:((C=s.votes)==null?void 0:C[T])||null}})},I=S("blue"),k=S("red"),b=j=>j?d.jsx("span",{className:"material-symbols-outlined text-green-500 font-bold",children:"check_circle"}):d.jsx("span",{className:"material-symbols-outlined text-slate-400 animate-pulse",children:"schedule"});return d.jsxs("div",{className:"relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto border-x border-primary/10 bg-[#f8f6f6] dark:bg-[#221610]",children:[d.jsxs("header",{className:"flex items-center p-4 justify-between bg-white/50 dark:bg-black/20 backdrop-blur-sm sticky top-0 z-10",children:[d.jsx("div",{onClick:()=>n(-1),className:"text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer",children:d.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"})}),d.jsx("h1",{className:"text-slate-900 dark:text-slate-100 text-lg font-extrabold leading-tight tracking-tight flex-1 text-center pr-10 uppercase italic",children:"MATCH RESULTS - Who won?"})]}),d.jsxs("div",{className:"flex flex-col flex-1 overflow-y-auto pb-44",children:[d.jsxs("div",{className:"px-4 py-6",children:[d.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[d.jsx("span",{className:"material-symbols-outlined text-primary text-sm",children:"timer"}),d.jsxs("span",{className:"text-primary font-bold tracking-widest uppercase text-sm",children:[u(a)," remaining"]})]}),d.jsxs("div",{className:"flex items-center justify-between gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl shadow-lg border border-primary/20",children:[d.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center py-4 rounded-lg bg-blue-600/10 border-b-4 border-blue-600",children:[d.jsx("p",{className:"text-blue-600 text-xs font-bold uppercase tracking-wider",children:"Blue"}),d.jsx("p",{className:"text-slate-900 dark:text-slate-100 text-3xl font-black italic",children:y.blue||0})]}),d.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center py-4 rounded-lg bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-400",children:[d.jsx("p",{className:"text-slate-500 text-xs font-bold uppercase tracking-wider",children:"Pending"}),d.jsx("p",{className:"text-slate-900 dark:text-slate-100 text-3xl font-black italic",children:y.pending||0})]}),d.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center py-4 rounded-lg bg-red-600/10 border-b-4 border-red-600",children:[d.jsx("p",{className:"text-red-600 text-xs font-bold uppercase tracking-wider",children:"Red"}),d.jsx("p",{className:"text-slate-900 dark:text-slate-100 text-3xl font-black italic",children:y.red||0})]})]})]}),d.jsxs("section",{className:"px-4 mb-6",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[d.jsx("div",{className:"h-6 w-1 bg-blue-600 rounded-full"}),d.jsx("h3",{className:"text-blue-600 text-sm font-black uppercase tracking-widest italic",children:"Blue Team"})]}),d.jsx("div",{className:"space-y-2",children:I.map(j=>d.jsxs("div",{className:"flex items-center gap-3 bg-white dark:bg-slate-900/50 p-3 rounded-lg border border-blue-600/20",children:[d.jsx("div",{className:"bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-10 w-10 border border-blue-600/30",style:{backgroundImage:`url("${Qe[j.avatar]||Qe[0]}")`}}),d.jsxs("p",{className:"text-slate-900 dark:text-slate-100 font-bold flex-1",children:[j.name||j.username||"Player",j.id===r&&d.jsx("span",{className:"text-primary text-xs ml-1",children:"(You)"})]}),b(j.vote)]},j.id))})]}),d.jsxs("section",{className:"px-4 mb-6",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[d.jsx("div",{className:"h-6 w-1 bg-red-600 rounded-full"}),d.jsx("h3",{className:"text-red-600 text-sm font-black uppercase tracking-widest italic",children:"Red Team"})]}),d.jsx("div",{className:"space-y-2",children:k.map(j=>d.jsxs("div",{className:"flex items-center gap-3 bg-white dark:bg-slate-900/50 p-3 rounded-lg border border-red-600/20",children:[d.jsx("div",{className:"bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-10 w-10 border border-red-600/30",style:{backgroundImage:`url("${Qe[j.avatar]||Qe[0]}")`}}),d.jsxs("p",{className:"text-slate-900 dark:text-slate-100 font-bold flex-1",children:[j.name||j.username||"Player",j.id===r&&d.jsx("span",{className:"text-primary text-xs ml-1",children:"(You)"})]}),b(j.vote)]},j.id))})]}),d.jsx("div",{className:"px-6 py-4",children:d.jsxs("div",{className:"flex items-center justify-center gap-2 text-primary bg-primary/10 p-3 rounded-lg border border-primary/20",children:[d.jsx("span",{className:"material-symbols-outlined text-lg",children:"warning"}),d.jsx("p",{className:"text-xs font-bold uppercase tracking-tight",children:"Non-voters lose 2 stars"})]})})]}),d.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#f8f6f6] dark:from-[#221610] via-[#f8f6f6] dark:via-[#221610] to-transparent pt-10",children:d.jsxs("div",{className:"flex flex-col gap-3",children:[d.jsxs("button",{onClick:()=>m("my_team"),disabled:!!i,className:`w-full py-4 rounded-xl font-black uppercase tracking-widest italic shadow-lg transition-all flex items-center justify-center gap-2 group ${i===h?"bg-blue-800 text-white ring-2 ring-blue-400":i?"bg-blue-600/30 text-white/50 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20"}`,children:[d.jsx("span",{className:"material-symbols-outlined group-hover:scale-110 transition-transform",children:"military_tech"}),i===h?"VOTED: MY TEAM ✓":"MY TEAM WON"]}),d.jsxs("button",{onClick:()=>m("enemy_team"),disabled:!!i,className:`w-full py-4 rounded-xl font-black uppercase tracking-widest italic shadow-lg transition-all flex items-center justify-center gap-2 group ${i===f?"bg-red-800 text-white ring-2 ring-red-400":i?"bg-red-600/30 text-white/50 cursor-not-allowed":"bg-red-600 hover:bg-red-700 text-white shadow-red-600/20"}`,children:[d.jsx("span",{className:"material-symbols-outlined group-hover:scale-110 transition-transform",children:"close"}),i===f?"VOTED: ENEMY TEAM ✓":"ENEMY TEAM WON"]})]})})]})}function ZM(){const[t]=hd();t.get("id");const e=Xt(),n=Yt(C=>C.userId),r=pn(),s=(r.gameMode||"ranked")==="ranked",[i,o]=R.useState(90);R.useEffect(()=>{dl()},[]),R.useEffect(()=>{if(i<=0){a();return}const C=setTimeout(()=>o(P=>P-1),1e3);return()=>clearTimeout(C)},[i]);const a=()=>{var ne,ye,K,X,F,q,Q,ue,ve,Le;pn.getState().clearMatch();const C=((ye=(ne=r.teams)==null?void 0:ne.blue)==null?void 0:ye.players)||[],P=((X=(K=r.teams)==null?void 0:K.red)==null?void 0:X.players)||[];let N=null;C.includes(n)?N=(Q=(q=(F=r.teams)==null?void 0:F.blue)==null?void 0:q.lobbies)==null?void 0:Q[0]:P.includes(n)&&(N=(Le=(ve=(ue=r.teams)==null?void 0:ue.red)==null?void 0:ve.lobbies)==null?void 0:Le[0]),e(N?`/lobby/${N}`:"/home")},u=(r.result||{}).winner,h=u==="deadlock",m=h?"MATCH VOIDED - DEADLOCK!":`MATCH COMPLETE - ${u==="blue"?"BLUE TEAM":u==="red"?"RED TEAM":"NOBODY"} WINS!`,y=r.voteCount||{blue:0,red:0,pending:0},S=C=>{var ne,ye,K,X,F,q,Q;const P=(ne=r.votes)==null?void 0:ne[C],N=u==="blue"&&((X=(K=(ye=r.teams)==null?void 0:ye.blue)==null?void 0:K.players)==null?void 0:X.includes(C))||u==="red"&&((Q=(q=(F=r.teams)==null?void 0:F.red)==null?void 0:q.players)==null?void 0:Q.includes(C));return h?0:P?N?Fr.WIN:Fr.LOSS:N?Fr.NON_VOTER_WIN:Fr.NON_VOTER_LOSS},I=C=>{var N;const P=(N=r.votes)==null?void 0:N[C];return P?P==="blue"?"Voted: Blue Team":"Voted: Red Team":"Vote Pending..."},b=(()=>{var P,N,ne,ye;return[...((N=(P=r.teams)==null?void 0:P.blue)==null?void 0:N.players)||[],...((ye=(ne=r.teams)==null?void 0:ne.red)==null?void 0:ye.players)||[]].map(K=>{var ue,ve,Le,Ce,at;const X=((ue=r.players)==null?void 0:ue[K])||{},F=S(K),q=(ve=r.votes)==null?void 0:ve[K],Q=(at=(Ce=(Le=r.teams)==null?void 0:Le.blue)==null?void 0:Ce.players)==null?void 0:at.includes(K);return{id:K,name:X.name||X.username||"Player",avatar:X.avatar||0,vote:q,voteLabel:I(K),starChange:F,teamKey:Q?"blue":"red",isWinner:!h&&(u==="blue"&&Q||u==="red"&&!Q),isNonVoter:!q}})})(),v=C=>{if(C>0)return{text:`+${C}`,color:"text-emerald-600 dark:text-emerald-400",animation:"animate-bounce"};if(C<0){const P=C<=-2?"severe":"normal";return{text:`${C}`,color:P==="severe"?"text-rose-800 dark:text-rose-600 font-extrabold":"text-rose-600 dark:text-rose-400",animation:"animate-pulse"}}return{text:"0",color:"text-slate-500 dark:text-slate-400",animation:""}},w=C=>C.isNonVoter?"bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 grayscale":C.isWinner?"bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50":"bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/50 opacity-90",D=C=>C.isNonVoter?"border-slate-400":C.isWinner?"border-emerald-500":C.starChange<=-2?"border-rose-800":"border-rose-500/50",j=C=>C.isNonVoter?"text-slate-500 dark:text-slate-400":C.isWinner?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400",O=C=>C.isNonVoter?"timer":"how_to_vote",E=y.blue||0,_=y.red||0,T=u==="blue"?E:_,A=u==="blue"?_:E;return d.jsxs("div",{className:"relative flex h-screen w-full max-w-[480px] mx-auto flex-col overflow-hidden border-x border-slate-200 dark:border-slate-800 shadow-2xl",children:[d.jsxs("div",{className:"flex items-center bg-primary p-4 pb-4 justify-between shadow-lg",children:[d.jsx("div",{onClick:a,className:"text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 cursor-pointer",children:d.jsx("span",{className:"material-symbols-outlined",children:"close"})}),d.jsx("h2",{className:"text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center px-2",children:m}),d.jsx("div",{className:"size-10"})]}),d.jsxs("div",{className:"flex flex-wrap gap-3 p-4 bg-[#f8f6f6] dark:bg-[#221610] border-b border-slate-200 dark:border-slate-800",children:[d.jsxs("div",{className:"flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-emerald-500/10 border border-emerald-500/20 text-center",children:[d.jsx("p",{className:"text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider",children:u==="blue"?"Blue Team":"Red Team"}),d.jsx("p",{className:"text-slate-900 dark:text-white text-3xl font-bold leading-tight",children:T}),s&&d.jsxs("p",{className:"text-emerald-600 dark:text-emerald-400 text-sm font-bold",children:["+",T," pts"]})]}),d.jsxs("div",{className:"flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-rose-500/10 border border-rose-500/20 text-center",children:[d.jsx("p",{className:"text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider",children:u==="blue"?"Red Team":"Blue Team"}),d.jsx("p",{className:"text-slate-900 dark:text-white text-3xl font-bold leading-tight",children:A}),s&&d.jsxs("p",{className:"text-rose-600 dark:text-rose-400 text-sm font-bold",children:["-",A," pts"]})]}),d.jsxs("div",{className:"flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-slate-500/10 border border-slate-500/20 text-center",children:[d.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider",children:"Pending"}),d.jsx("p",{className:"text-slate-900 dark:text-white text-3xl font-bold leading-tight",children:y.pending||0}),d.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-sm font-bold",children:"0"})]})]}),!s&&d.jsx("div",{className:"px-4 pt-3 pb-1",children:d.jsxs("div",{className:"flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3",children:[d.jsx("span",{className:"material-symbols-outlined text-slate-500 dark:text-slate-400 text-base",children:"sports_basketball"}),d.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest",children:"Casual Match — No Stars Awarded"})]})}),d.jsxs("div",{className:"px-4 pt-6 pb-2",children:[d.jsx("h2",{className:"text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight",children:"Player Performance & Votes"}),d.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-sm",children:"Detailed match breakdown"})]}),d.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-2 space-y-3 pb-32",children:b.map(C=>{const P=v(C.starChange);return d.jsxs("div",{className:`flex items-center gap-4 border rounded-xl p-3 ${w(C)}`,children:[d.jsx("div",{className:"relative",children:d.jsx("div",{className:`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 ${D(C)}`,style:{backgroundImage:`url("${Qe[C.avatar]||Qe[0]}")`}})}),d.jsxs("div",{className:"flex flex-col flex-1",children:[d.jsxs("p",{className:"text-slate-900 dark:text-white text-base font-bold leading-none",children:[C.name,C.id===n&&d.jsx("span",{className:"text-primary text-xs ml-1",children:"(You)"})]}),d.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[d.jsx("span",{className:`material-symbols-outlined text-xs ${j(C)}`,children:O(C)}),d.jsx("p",{className:`text-xs font-medium ${j(C)}`,children:C.voteLabel})]})]}),s&&d.jsx("div",{className:"flex flex-col items-end",children:d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("p",{className:`text-2xl font-black ${P.color} ${P.animation}`,children:P.text}),d.jsx("span",{className:"material-symbols-outlined text-primary text-lg",children:"star"})]})})]},C.id)})}),d.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-6 bg-[#f8f6f6] dark:bg-[#221610] border-t border-slate-200 dark:border-slate-800 max-w-[480px] mx-auto",children:d.jsxs("div",{className:"flex flex-col gap-3",children:[d.jsxs("div",{className:"flex justify-center items-center gap-2 mb-2",children:[d.jsx("span",{className:"material-symbols-outlined text-primary text-sm animate-pulse",children:"refresh"}),d.jsxs("p",{className:"text-slate-600 dark:text-slate-400 text-sm font-medium",children:["Returning to lobby in ",d.jsxs("span",{className:"text-primary font-bold",children:[i,"..."]})]})]}),d.jsxs("button",{onClick:a,className:"w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2",children:[d.jsx("span",{className:"material-symbols-outlined",children:"logout"}),"RETURN TO LOBBY NOW"]})]})})]})}function tr({children:t}){return Yt(n=>n.userId)?t:d.jsx(Hm,{to:"/",replace:!0})}function eO({children:t}){return Yt(n=>n.userId)?d.jsx(Hm,{to:"/home",replace:!0}):t}function tO(){return d.jsxs(f2,{children:[d.jsx(WN,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#1a0b2e",color:"#fff",border:"1px solid rgba(236, 91, 19, 0.3)",fontWeight:700,fontSize:"14px"},success:{iconTheme:{primary:"#ec5b13",secondary:"#fff"}},error:{iconTheme:{primary:"#dc2626",secondary:"#fff"}}}}),d.jsxs($R,{children:[d.jsx(un,{path:"/",element:d.jsx(eO,{children:d.jsx(tM,{})})}),d.jsx(un,{path:"/home",element:d.jsx(tr,{children:d.jsx(CM,{})})}),d.jsx(un,{path:"/profile",element:d.jsx(tr,{children:d.jsx(IM,{})})}),d.jsx(un,{path:"/ranks",element:d.jsx(tr,{children:d.jsx(kM,{})})}),d.jsx(un,{path:"/lobby/new",element:d.jsx(tr,{children:d.jsx(Fx,{})})}),d.jsx(un,{path:"/lobby/:lobbyId",element:d.jsx(tr,{children:d.jsx(Fx,{})})}),d.jsx(un,{path:"/match",element:d.jsx(tr,{children:d.jsx(HM,{})})}),d.jsx(un,{path:"/court",element:d.jsx(tr,{children:d.jsx(qM,{})})}),d.jsx(un,{path:"/vote",element:d.jsx(tr,{children:d.jsx(JM,{})})}),d.jsx(un,{path:"/results",element:d.jsx(tr,{children:d.jsx(ZM,{})})}),d.jsx(un,{path:"*",element:d.jsx(Hm,{to:"/",replace:!0})})]})]})}Yt.getState().hydrate();const nO=nN({onNeedRefresh(){se("New update available!",{icon:"🔄",duration:5e3,onClick:()=>nO(!0)})},onOfflineReady(){console.log("BBL Legends is ready to work offline!")}});of.createRoot(document.getElementById("root")).render(d.jsx(Xo.StrictMode,{children:d.jsx(tO,{})}));
