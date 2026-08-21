(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var zI={exports:{}},Dd={},$I={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu=Symbol.for("react.element"),ER=Symbol.for("react.portal"),TR=Symbol.for("react.fragment"),SR=Symbol.for("react.strict_mode"),AR=Symbol.for("react.profiler"),xR=Symbol.for("react.provider"),RR=Symbol.for("react.context"),PR=Symbol.for("react.forward_ref"),CR=Symbol.for("react.suspense"),kR=Symbol.for("react.memo"),bR=Symbol.for("react.lazy"),F_=Symbol.iterator;function DR(n){return n===null||typeof n!="object"?null:(n=F_&&n[F_]||n["@@iterator"],typeof n=="function"?n:null)}var WI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qI=Object.assign,GI={};function Go(n,e,t){this.props=n,this.context=e,this.refs=GI,this.updater=t||WI}Go.prototype.isReactComponent={};Go.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Go.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function KI(){}KI.prototype=Go.prototype;function fm(n,e,t){this.props=n,this.context=e,this.refs=GI,this.updater=t||WI}var pm=fm.prototype=new KI;pm.constructor=fm;qI(pm,Go.prototype);pm.isPureReactComponent=!0;var M_=Array.isArray,HI=Object.prototype.hasOwnProperty,mm={current:null},QI={key:!0,ref:!0,__self:!0,__source:!0};function YI(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)HI.call(e,r)&&!QI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:eu,type:n,key:s,ref:o,props:i,_owner:mm.current}}function NR(n,e){return{$$typeof:eu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function gm(n){return typeof n=="object"&&n!==null&&n.$$typeof===eu}function VR(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var j_=/\/+/g;function Kh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?VR(""+n.key):e.toString(36)}function mc(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case eu:case ER:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+Kh(o,0):r,M_(i)?(t="",n!=null&&(t=n.replace(j_,"$&/")+"/"),mc(i,e,t,"",function(c){return c})):i!=null&&(gm(i)&&(i=NR(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(j_,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",M_(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+Kh(s,a);o+=mc(s,e,t,u,i)}else if(u=DR(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+Kh(s,a++),o+=mc(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zu(n,e,t){if(n==null)return n;var r=[],i=0;return mc(n,r,"","",function(s){return e.call(t,s,i++)}),r}function OR(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Qt={current:null},gc={transition:null},LR={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:gc,ReactCurrentOwner:mm};function JI(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:zu,forEach:function(n,e,t){zu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return zu(n,function(){e++}),e},toArray:function(n){return zu(n,function(e){return e})||[]},only:function(n){if(!gm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};me.Component=Go;me.Fragment=TR;me.Profiler=AR;me.PureComponent=fm;me.StrictMode=SR;me.Suspense=CR;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LR;me.act=JI;me.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=qI({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mm.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)HI.call(e,u)&&!QI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:eu,type:n.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(n){return n={$$typeof:RR,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:xR,_context:n},n.Consumer=n};me.createElement=YI;me.createFactory=function(n){var e=YI.bind(null,n);return e.type=n,e};me.createRef=function(){return{current:null}};me.forwardRef=function(n){return{$$typeof:PR,render:n}};me.isValidElement=gm;me.lazy=function(n){return{$$typeof:bR,_payload:{_status:-1,_result:n},_init:OR}};me.memo=function(n,e){return{$$typeof:kR,type:n,compare:e===void 0?null:e}};me.startTransition=function(n){var e=gc.transition;gc.transition={};try{n()}finally{gc.transition=e}};me.unstable_act=JI;me.useCallback=function(n,e){return Qt.current.useCallback(n,e)};me.useContext=function(n){return Qt.current.useContext(n)};me.useDebugValue=function(){};me.useDeferredValue=function(n){return Qt.current.useDeferredValue(n)};me.useEffect=function(n,e){return Qt.current.useEffect(n,e)};me.useId=function(){return Qt.current.useId()};me.useImperativeHandle=function(n,e,t){return Qt.current.useImperativeHandle(n,e,t)};me.useInsertionEffect=function(n,e){return Qt.current.useInsertionEffect(n,e)};me.useLayoutEffect=function(n,e){return Qt.current.useLayoutEffect(n,e)};me.useMemo=function(n,e){return Qt.current.useMemo(n,e)};me.useReducer=function(n,e,t){return Qt.current.useReducer(n,e,t)};me.useRef=function(n){return Qt.current.useRef(n)};me.useState=function(n){return Qt.current.useState(n)};me.useSyncExternalStore=function(n,e,t){return Qt.current.useSyncExternalStore(n,e,t)};me.useTransition=function(){return Qt.current.useTransition()};me.version="18.3.1";$I.exports=me;var ie=$I.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FR=ie,MR=Symbol.for("react.element"),jR=Symbol.for("react.fragment"),UR=Object.prototype.hasOwnProperty,BR=FR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zR={key:!0,ref:!0,__self:!0,__source:!0};function XI(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UR.call(e,r)&&!zR.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:MR,type:n,key:s,ref:o,props:i,_owner:BR.current}}Dd.Fragment=jR;Dd.jsx=XI;Dd.jsxs=XI;zI.exports=Dd;var p=zI.exports,Ff={},ZI={exports:{}},yn={},eE={exports:{}},tE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(M,H){var b=M.length;M.push(H);e:for(;0<b;){var K=b-1>>>1,le=M[K];if(0<i(le,H))M[K]=H,M[b]=le,b=K;else break e}}function t(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var H=M[0],b=M.pop();if(b!==H){M[0]=b;e:for(var K=0,le=M.length,X=le>>>1;K<X;){var ve=2*(K+1)-1,Z=M[ve],ae=ve+1,de=M[ae];if(0>i(Z,b))ae<le&&0>i(de,Z)?(M[K]=de,M[ae]=b,K=ae):(M[K]=Z,M[ve]=b,K=ve);else if(ae<le&&0>i(de,b))M[K]=de,M[ae]=b,K=ae;else break e}}return H}function i(M,H){var b=M.sortIndex-H.sortIndex;return b!==0?b:M.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,g=3,T=!1,P=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(M){for(var H=t(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=M)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=t(c)}}function N(M){if(k=!1,A(M),!P)if(t(u)!==null)P=!0,fe(U);else{var H=t(c);H!==null&&be(N,H.startTime-M)}}function U(M,H){P=!1,k&&(k=!1,S(y),y=-1),T=!0;var b=g;try{for(A(H),f=t(u);f!==null&&(!(f.expirationTime>H)||M&&!C());){var K=f.callback;if(typeof K=="function"){f.callback=null,g=f.priorityLevel;var le=K(f.expirationTime<=H);H=n.unstable_now(),typeof le=="function"?f.callback=le:f===t(u)&&r(u),A(H)}else r(u);f=t(u)}if(f!==null)var X=!0;else{var ve=t(c);ve!==null&&be(N,ve.startTime-H),X=!1}return X}finally{f=null,g=b,T=!1}}var B=!1,_=null,y=-1,I=5,R=-1;function C(){return!(n.unstable_now()-R<I)}function D(){if(_!==null){var M=n.unstable_now();R=M;var H=!0;try{H=_(!0,M)}finally{H?x():(B=!1,_=null)}}else B=!1}var x;if(typeof w=="function")x=function(){w(D)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,oe=W.port2;W.port1.onmessage=D,x=function(){oe.postMessage(null)}}else x=function(){L(D,0)};function fe(M){_=M,B||(B=!0,x())}function be(M,H){y=L(function(){M(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(M){M.callback=null},n.unstable_continueExecution=function(){P||T||(P=!0,fe(U))},n.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<M?Math.floor(1e3/M):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(M){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var b=g;g=H;try{return M()}finally{g=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(M,H){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var b=g;g=M;try{return H()}finally{g=b}},n.unstable_scheduleCallback=function(M,H,b){var K=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?K+b:K):b=K,M){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=b+le,M={id:h++,callback:H,priorityLevel:M,startTime:b,expirationTime:le,sortIndex:-1},b>K?(M.sortIndex=b,e(c,M),t(u)===null&&M===t(c)&&(k?(S(y),y=-1):k=!0,be(N,b-K))):(M.sortIndex=le,e(u,M),P||T||(P=!0,fe(U))),M},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(M){var H=g;return function(){var b=g;g=H;try{return M.apply(this,arguments)}finally{g=b}}}})(tE);eE.exports=tE;var $R=eE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WR=ie,mn=$R;function q(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nE=new Set,fl={};function Is(n,e){wo(n,e),wo(n+"Capture",e)}function wo(n,e){for(fl[n]=e,n=0;n<e.length;n++)nE.add(e[n])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,qR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U_={},B_={};function GR(n){return Mf.call(B_,n)?!0:Mf.call(U_,n)?!1:qR.test(n)?B_[n]=!0:(U_[n]=!0,!1)}function KR(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function HR(n,e,t,r){if(e===null||typeof e>"u"||KR(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Pt[n]=new Yt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Pt[e]=new Yt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Pt[n]=new Yt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Pt[n]=new Yt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Pt[n]=new Yt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Pt[n]=new Yt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Pt[n]=new Yt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Pt[n]=new Yt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Pt[n]=new Yt(n,5,!1,n.toLowerCase(),null,!1,!1)});var ym=/[\-:]([a-z])/g;function _m(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ym,_m);Pt[e]=new Yt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ym,_m);Pt[e]=new Yt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ym,_m);Pt[e]=new Yt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Pt[n]=new Yt(n,1,!1,n.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Pt[n]=new Yt(n,1,!1,n.toLowerCase(),null,!0,!0)});function vm(n,e,t,r){var i=Pt.hasOwnProperty(e)?Pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HR(e,t,i,r)&&(t=null),r||i===null?GR(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var Cr=WR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$u=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),wm=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),rE=Symbol.for("react.provider"),iE=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Em=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),sE=Symbol.for("react.offscreen"),z_=Symbol.iterator;function Ea(n){return n===null||typeof n!="object"?null:(n=z_&&n[z_]||n["@@iterator"],typeof n=="function"?n:null)}var He=Object.assign,Hh;function Ma(n){if(Hh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hh=e&&e[1]||""}return`
`+Hh+n}var Qh=!1;function Yh(n,e){if(!n||Qh)return"";Qh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{Qh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ma(n):""}function QR(n){switch(n.tag){case 5:return Ma(n.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return n=Yh(n.type,!1),n;case 11:return n=Yh(n.type.render,!1),n;case 1:return n=Yh(n.type,!0),n;default:return""}}function zf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ks:return"Fragment";case Gs:return"Portal";case jf:return"Profiler";case wm:return"StrictMode";case Uf:return"Suspense";case Bf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case iE:return(n.displayName||"Context")+".Consumer";case rE:return(n._context.displayName||"Context")+".Provider";case Im:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Em:return e=n.displayName||null,e!==null?e:zf(n.type)||"Memo";case $r:e=n._payload,n=n._init;try{return zf(n(e))}catch{}}return null}function YR(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===wm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function oE(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JR(n){var e=oE(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wu(n){n._valueTracker||(n._valueTracker=JR(n))}function aE(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=oE(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Uc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $f(n,e){var t=e.checked;return He({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function $_(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=ci(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lE(n,e){e=e.checked,e!=null&&vm(n,"checked",e,!1)}function Wf(n,e){lE(n,e);var t=ci(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?qf(n,e.type,t):e.hasOwnProperty("defaultValue")&&qf(n,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function W_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function qf(n,e,t){(e!=="number"||Uc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ja=Array.isArray;function so(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+ci(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function Gf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return He({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(q(92));if(ja(t)){if(1<t.length)throw Error(q(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ci(t)}}function uE(n,e){var t=ci(e.value),r=ci(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function G_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function cE(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?cE(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qu,dE=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(qu=qu||document.createElement("div"),qu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function pl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XR=["Webkit","ms","Moz","O"];Object.keys(Qa).forEach(function(n){XR.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Qa[e]=Qa[n]})});function hE(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Qa.hasOwnProperty(n)&&Qa[n]?(""+e).trim():e+"px"}function fE(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=hE(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var ZR=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hf(n,e){if(e){if(ZR[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function Qf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=null;function Tm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Jf=null,oo=null,ao=null;function K_(n){if(n=ru(n)){if(typeof Jf!="function")throw Error(q(280));var e=n.stateNode;e&&(e=Fd(e),Jf(n.stateNode,n.type,e))}}function pE(n){oo?ao?ao.push(n):ao=[n]:oo=n}function mE(){if(oo){var n=oo,e=ao;if(ao=oo=null,K_(n),e)for(n=0;n<e.length;n++)K_(e[n])}}function gE(n,e){return n(e)}function yE(){}var Jh=!1;function _E(n,e,t){if(Jh)return n(e,t);Jh=!0;try{return gE(n,e,t)}finally{Jh=!1,(oo!==null||ao!==null)&&(yE(),mE())}}function ml(n,e){var t=n.stateNode;if(t===null)return null;var r=Fd(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(q(231,e,typeof t));return t}var Xf=!1;if(wr)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Xf=!1}function eP(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var Ya=!1,Bc=null,zc=!1,Zf=null,tP={onError:function(n){Ya=!0,Bc=n}};function nP(n,e,t,r,i,s,o,a,u){Ya=!1,Bc=null,eP.apply(tP,arguments)}function rP(n,e,t,r,i,s,o,a,u){if(nP.apply(this,arguments),Ya){if(Ya){var c=Bc;Ya=!1,Bc=null}else throw Error(q(198));zc||(zc=!0,Zf=c)}}function Es(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function vE(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function H_(n){if(Es(n)!==n)throw Error(q(188))}function iP(n){var e=n.alternate;if(!e){if(e=Es(n),e===null)throw Error(q(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return H_(i),n;if(s===r)return H_(i),e;s=s.sibling}throw Error(q(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(q(189))}}if(t.alternate!==r)throw Error(q(190))}if(t.tag!==3)throw Error(q(188));return t.stateNode.current===t?n:e}function wE(n){return n=iP(n),n!==null?IE(n):null}function IE(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=IE(n);if(e!==null)return e;n=n.sibling}return null}var EE=mn.unstable_scheduleCallback,Q_=mn.unstable_cancelCallback,sP=mn.unstable_shouldYield,oP=mn.unstable_requestPaint,it=mn.unstable_now,aP=mn.unstable_getCurrentPriorityLevel,Sm=mn.unstable_ImmediatePriority,TE=mn.unstable_UserBlockingPriority,$c=mn.unstable_NormalPriority,lP=mn.unstable_LowPriority,SE=mn.unstable_IdlePriority,Nd=null,Jn=null;function uP(n){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Nd,n,void 0,(n.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:hP,cP=Math.log,dP=Math.LN2;function hP(n){return n>>>=0,n===0?32:31-(cP(n)/dP|0)|0}var Gu=64,Ku=4194304;function Ua(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wc(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=Ua(a):(s&=o,s!==0&&(r=Ua(s)))}else o=t&~i,o!==0?r=Ua(o):s!==0&&(r=Ua(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-On(e),i=1<<t,r|=n[t],e&=~i;return r}function fP(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pP(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-On(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=fP(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function ep(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function AE(){var n=Gu;return Gu<<=1,!(Gu&4194240)&&(Gu=64),n}function Xh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function tu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-On(e),n[e]=t}function mP(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-On(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function Am(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-On(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var Pe=0;function xE(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var RE,xm,PE,CE,kE,tp=!1,Hu=[],Zr=null,ei=null,ti=null,gl=new Map,yl=new Map,qr=[],gP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y_(n,e){switch(n){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":gl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(e.pointerId)}}function Sa(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ru(e),e!==null&&xm(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function yP(n,e,t,r,i){switch(e){case"focusin":return Zr=Sa(Zr,n,e,t,r,i),!0;case"dragenter":return ei=Sa(ei,n,e,t,r,i),!0;case"mouseover":return ti=Sa(ti,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return gl.set(s,Sa(gl.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yl.set(s,Sa(yl.get(s)||null,n,e,t,r,i)),!0}return!1}function bE(n){var e=Gi(n.target);if(e!==null){var t=Es(e);if(t!==null){if(e=t.tag,e===13){if(e=vE(t),e!==null){n.blockedOn=e,kE(n.priority,function(){PE(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=np(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Yf=r,t.target.dispatchEvent(r),Yf=null}else return e=ru(t),e!==null&&xm(e),n.blockedOn=t,!1;e.shift()}return!0}function J_(n,e,t){yc(n)&&t.delete(e)}function _P(){tp=!1,Zr!==null&&yc(Zr)&&(Zr=null),ei!==null&&yc(ei)&&(ei=null),ti!==null&&yc(ti)&&(ti=null),gl.forEach(J_),yl.forEach(J_)}function Aa(n,e){n.blockedOn===e&&(n.blockedOn=null,tp||(tp=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,_P)))}function _l(n){function e(i){return Aa(i,n)}if(0<Hu.length){Aa(Hu[0],n);for(var t=1;t<Hu.length;t++){var r=Hu[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Zr!==null&&Aa(Zr,n),ei!==null&&Aa(ei,n),ti!==null&&Aa(ti,n),gl.forEach(e),yl.forEach(e),t=0;t<qr.length;t++)r=qr[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<qr.length&&(t=qr[0],t.blockedOn===null);)bE(t),t.blockedOn===null&&qr.shift()}var lo=Cr.ReactCurrentBatchConfig,qc=!0;function vP(n,e,t,r){var i=Pe,s=lo.transition;lo.transition=null;try{Pe=1,Rm(n,e,t,r)}finally{Pe=i,lo.transition=s}}function wP(n,e,t,r){var i=Pe,s=lo.transition;lo.transition=null;try{Pe=4,Rm(n,e,t,r)}finally{Pe=i,lo.transition=s}}function Rm(n,e,t,r){if(qc){var i=np(n,e,t,r);if(i===null)uf(n,e,r,Gc,t),Y_(n,r);else if(yP(i,n,e,t,r))r.stopPropagation();else if(Y_(n,r),e&4&&-1<gP.indexOf(n)){for(;i!==null;){var s=ru(i);if(s!==null&&RE(s),s=np(n,e,t,r),s===null&&uf(n,e,r,Gc,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else uf(n,e,r,null,t)}}var Gc=null;function np(n,e,t,r){if(Gc=null,n=Tm(r),n=Gi(n),n!==null)if(e=Es(n),e===null)n=null;else if(t=e.tag,t===13){if(n=vE(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Gc=n,null}function DE(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aP()){case Sm:return 1;case TE:return 4;case $c:case lP:return 16;case SE:return 536870912;default:return 16}default:return 16}}var Qr=null,Pm=null,_c=null;function NE(){if(_c)return _c;var n,e=Pm,t=e.length,r,i="value"in Qr?Qr.value:Qr.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return _c=i.slice(n,1<r?1-r:void 0)}function vc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qu(){return!0}function X_(){return!1}function _n(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qu:X_,this.isPropagationStopped=X_,this}return He(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qu)},persist:function(){},isPersistent:Qu}),e}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cm=_n(Ko),nu=He({},Ko,{view:0,detail:0}),IP=_n(nu),Zh,ef,xa,Vd=He({},nu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:km,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xa&&(xa&&n.type==="mousemove"?(Zh=n.screenX-xa.screenX,ef=n.screenY-xa.screenY):ef=Zh=0,xa=n),Zh)},movementY:function(n){return"movementY"in n?n.movementY:ef}}),Z_=_n(Vd),EP=He({},Vd,{dataTransfer:0}),TP=_n(EP),SP=He({},nu,{relatedTarget:0}),tf=_n(SP),AP=He({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),xP=_n(AP),RP=He({},Ko,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),PP=_n(RP),CP=He({},Ko,{data:0}),ev=_n(CP),kP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NP(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=DP[n])?!!e[n]:!1}function km(){return NP}var VP=He({},nu,{key:function(n){if(n.key){var e=kP[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=vc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bP[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:km,charCode:function(n){return n.type==="keypress"?vc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),OP=_n(VP),LP=He({},Vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tv=_n(LP),FP=He({},nu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:km}),MP=_n(FP),jP=He({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),UP=_n(jP),BP=He({},Vd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zP=_n(BP),$P=[9,13,27,32],bm=wr&&"CompositionEvent"in window,Ja=null;wr&&"documentMode"in document&&(Ja=document.documentMode);var WP=wr&&"TextEvent"in window&&!Ja,VE=wr&&(!bm||Ja&&8<Ja&&11>=Ja),nv=" ",rv=!1;function OE(n,e){switch(n){case"keyup":return $P.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function LE(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function qP(n,e){switch(n){case"compositionend":return LE(e);case"keypress":return e.which!==32?null:(rv=!0,nv);case"textInput":return n=e.data,n===nv&&rv?null:n;default:return null}}function GP(n,e){if(Hs)return n==="compositionend"||!bm&&OE(n,e)?(n=NE(),_c=Pm=Qr=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return VE&&e.locale!=="ko"?null:e.data;default:return null}}var KP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!KP[n.type]:e==="textarea"}function FE(n,e,t,r){pE(r),e=Kc(e,"onChange"),0<e.length&&(t=new Cm("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Xa=null,vl=null;function HP(n){HE(n,0)}function Od(n){var e=Js(n);if(aE(e))return n}function QP(n,e){if(n==="change")return e}var ME=!1;if(wr){var nf;if(wr){var rf="oninput"in document;if(!rf){var sv=document.createElement("div");sv.setAttribute("oninput","return;"),rf=typeof sv.oninput=="function"}nf=rf}else nf=!1;ME=nf&&(!document.documentMode||9<document.documentMode)}function ov(){Xa&&(Xa.detachEvent("onpropertychange",jE),vl=Xa=null)}function jE(n){if(n.propertyName==="value"&&Od(vl)){var e=[];FE(e,vl,n,Tm(n)),_E(HP,e)}}function YP(n,e,t){n==="focusin"?(ov(),Xa=e,vl=t,Xa.attachEvent("onpropertychange",jE)):n==="focusout"&&ov()}function JP(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Od(vl)}function XP(n,e){if(n==="click")return Od(e)}function ZP(n,e){if(n==="input"||n==="change")return Od(e)}function e1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Mn=typeof Object.is=="function"?Object.is:e1;function wl(n,e){if(Mn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Mf.call(e,i)||!Mn(n[i],e[i]))return!1}return!0}function av(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lv(n,e){var t=av(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=av(t)}}function UE(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?UE(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function BE(){for(var n=window,e=Uc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Uc(n.document)}return e}function Dm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function t1(n){var e=BE(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&UE(t.ownerDocument.documentElement,t)){if(r!==null&&Dm(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=lv(t,s);var o=lv(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var n1=wr&&"documentMode"in document&&11>=document.documentMode,Qs=null,rp=null,Za=null,ip=!1;function uv(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ip||Qs==null||Qs!==Uc(r)||(r=Qs,"selectionStart"in r&&Dm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Za&&wl(Za,r)||(Za=r,r=Kc(rp,"onSelect"),0<r.length&&(e=new Cm("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Qs)))}function Yu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ys={animationend:Yu("Animation","AnimationEnd"),animationiteration:Yu("Animation","AnimationIteration"),animationstart:Yu("Animation","AnimationStart"),transitionend:Yu("Transition","TransitionEnd")},sf={},zE={};wr&&(zE=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Ld(n){if(sf[n])return sf[n];if(!Ys[n])return n;var e=Ys[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in zE)return sf[n]=e[t];return n}var $E=Ld("animationend"),WE=Ld("animationiteration"),qE=Ld("animationstart"),GE=Ld("transitionend"),KE=new Map,cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(n,e){KE.set(n,e),Is(e,[n])}for(var of=0;of<cv.length;of++){var af=cv[of],r1=af.toLowerCase(),i1=af[0].toUpperCase()+af.slice(1);Ti(r1,"on"+i1)}Ti($E,"onAnimationEnd");Ti(WE,"onAnimationIteration");Ti(qE,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(GE,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function dv(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,rP(r,e,void 0,n),n.currentTarget=null}function HE(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;dv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;dv(i,a,c),s=u}}}if(zc)throw n=Zf,zc=!1,Zf=null,n}function Le(n,e){var t=e[up];t===void 0&&(t=e[up]=new Set);var r=n+"__bubble";t.has(r)||(QE(e,n,2,!1),t.add(r))}function lf(n,e,t){var r=0;e&&(r|=4),QE(t,n,r,e)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function Il(n){if(!n[Ju]){n[Ju]=!0,nE.forEach(function(t){t!=="selectionchange"&&(s1.has(t)||lf(t,!1,n),lf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ju]||(e[Ju]=!0,lf("selectionchange",!1,e))}}function QE(n,e,t,r){switch(DE(e)){case 1:var i=vP;break;case 4:i=wP;break;default:i=Rm}t=i.bind(null,e,t,n),i=void 0,!Xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function uf(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}_E(function(){var c=s,h=Tm(t),f=[];e:{var g=KE.get(n);if(g!==void 0){var T=Cm,P=n;switch(n){case"keypress":if(vc(t)===0)break e;case"keydown":case"keyup":T=OP;break;case"focusin":P="focus",T=tf;break;case"focusout":P="blur",T=tf;break;case"beforeblur":case"afterblur":T=tf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=TP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=MP;break;case $E:case WE:case qE:T=xP;break;case GE:T=UP;break;case"scroll":T=IP;break;case"wheel":T=zP;break;case"copy":case"cut":case"paste":T=PP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=tv}var k=(e&4)!==0,L=!k&&n==="scroll",S=k?g!==null?g+"Capture":null:g;k=[];for(var w=c,A;w!==null;){A=w;var N=A.stateNode;if(A.tag===5&&N!==null&&(A=N,S!==null&&(N=ml(w,S),N!=null&&k.push(El(w,N,A)))),L)break;w=w.return}0<k.length&&(g=new T(g,P,null,t,h),f.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=n==="mouseover"||n==="pointerover",T=n==="mouseout"||n==="pointerout",g&&t!==Yf&&(P=t.relatedTarget||t.fromElement)&&(Gi(P)||P[Ir]))break e;if((T||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,T?(P=t.relatedTarget||t.toElement,T=c,P=P?Gi(P):null,P!==null&&(L=Es(P),P!==L||P.tag!==5&&P.tag!==6)&&(P=null)):(T=null,P=c),T!==P)){if(k=Z_,N="onMouseLeave",S="onMouseEnter",w="mouse",(n==="pointerout"||n==="pointerover")&&(k=tv,N="onPointerLeave",S="onPointerEnter",w="pointer"),L=T==null?g:Js(T),A=P==null?g:Js(P),g=new k(N,w+"leave",T,t,h),g.target=L,g.relatedTarget=A,N=null,Gi(h)===c&&(k=new k(S,w+"enter",P,t,h),k.target=A,k.relatedTarget=L,N=k),L=N,T&&P)t:{for(k=T,S=P,w=0,A=k;A;A=Vs(A))w++;for(A=0,N=S;N;N=Vs(N))A++;for(;0<w-A;)k=Vs(k),w--;for(;0<A-w;)S=Vs(S),A--;for(;w--;){if(k===S||S!==null&&k===S.alternate)break t;k=Vs(k),S=Vs(S)}k=null}else k=null;T!==null&&hv(f,g,T,k,!1),P!==null&&L!==null&&hv(f,L,P,k,!0)}}e:{if(g=c?Js(c):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var U=QP;else if(iv(g))if(ME)U=ZP;else{U=JP;var B=YP}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=XP);if(U&&(U=U(n,c))){FE(f,U,t,h);break e}B&&B(n,g,c),n==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&qf(g,"number",g.value)}switch(B=c?Js(c):window,n){case"focusin":(iv(B)||B.contentEditable==="true")&&(Qs=B,rp=c,Za=null);break;case"focusout":Za=rp=Qs=null;break;case"mousedown":ip=!0;break;case"contextmenu":case"mouseup":case"dragend":ip=!1,uv(f,t,h);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":uv(f,t,h)}var _;if(bm)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hs?OE(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(VE&&t.locale!=="ko"&&(Hs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Hs&&(_=NE()):(Qr=h,Pm="value"in Qr?Qr.value:Qr.textContent,Hs=!0)),B=Kc(c,y),0<B.length&&(y=new ev(y,n,null,t,h),f.push({event:y,listeners:B}),_?y.data=_:(_=LE(t),_!==null&&(y.data=_)))),(_=WP?qP(n,t):GP(n,t))&&(c=Kc(c,"onBeforeInput"),0<c.length&&(h=new ev("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:c}),h.data=_))}HE(f,e)})}function El(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Kc(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ml(n,t),s!=null&&r.unshift(El(n,s,i)),s=ml(n,e),s!=null&&r.push(El(n,s,i))),n=n.return}return r}function Vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hv(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ml(t,s),u!=null&&o.unshift(El(t,u,a))):i||(u=ml(t,s),u!=null&&o.push(El(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var o1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function fv(n){return(typeof n=="string"?n:""+n).replace(o1,`
`).replace(a1,"")}function Xu(n,e,t){if(e=fv(e),fv(n)!==e&&t)throw Error(q(425))}function Hc(){}var sp=null,op=null;function ap(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lp=typeof setTimeout=="function"?setTimeout:void 0,l1=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(n){return pv.resolve(null).then(n).catch(c1)}:lp;function c1(n){setTimeout(function(){throw n})}function cf(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),_l(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);_l(e)}function ni(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function mv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ho,Tl="__reactProps$"+Ho,Ir="__reactContainer$"+Ho,up="__reactEvents$"+Ho,d1="__reactListeners$"+Ho,h1="__reactHandles$"+Ho;function Gi(n){var e=n[$n];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ir]||t[$n]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=mv(n);n!==null;){if(t=n[$n])return t;n=mv(n)}return e}n=t,t=n.parentNode}return null}function ru(n){return n=n[$n]||n[Ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(q(33))}function Fd(n){return n[Tl]||null}var cp=[],Xs=-1;function Si(n){return{current:n}}function je(n){0>Xs||(n.current=cp[Xs],cp[Xs]=null,Xs--)}function Ne(n,e){Xs++,cp[Xs]=n.current,n.current=e}var di={},Ft=Si(di),sn=Si(!1),is=di;function Io(n,e){var t=n.type.contextTypes;if(!t)return di;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function on(n){return n=n.childContextTypes,n!=null}function Qc(){je(sn),je(Ft)}function gv(n,e,t){if(Ft.current!==di)throw Error(q(168));Ne(Ft,e),Ne(sn,t)}function YE(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,YR(n)||"Unknown",i));return He({},t,r)}function Yc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||di,is=Ft.current,Ne(Ft,n),Ne(sn,sn.current),!0}function yv(n,e,t){var r=n.stateNode;if(!r)throw Error(q(169));t?(n=YE(n,e,is),r.__reactInternalMemoizedMergedChildContext=n,je(sn),je(Ft),Ne(Ft,n)):je(sn),Ne(sn,t)}var cr=null,Md=!1,df=!1;function JE(n){cr===null?cr=[n]:cr.push(n)}function f1(n){Md=!0,JE(n)}function Ai(){if(!df&&cr!==null){df=!0;var n=0,e=Pe;try{var t=cr;for(Pe=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}cr=null,Md=!1}catch(i){throw cr!==null&&(cr=cr.slice(n+1)),EE(Sm,Ai),i}finally{Pe=e,df=!1}}return null}var Zs=[],eo=0,Jc=null,Xc=0,vn=[],wn=0,ss=null,dr=1,hr="";function Fi(n,e){Zs[eo++]=Xc,Zs[eo++]=Jc,Jc=n,Xc=e}function XE(n,e,t){vn[wn++]=dr,vn[wn++]=hr,vn[wn++]=ss,ss=n;var r=dr;n=hr;var i=32-On(r)-1;r&=~(1<<i),t+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dr=1<<32-On(e)+i|t<<i|r,hr=s+n}else dr=1<<s|t<<i|r,hr=n}function Nm(n){n.return!==null&&(Fi(n,1),XE(n,1,0))}function Vm(n){for(;n===Jc;)Jc=Zs[--eo],Zs[eo]=null,Xc=Zs[--eo],Zs[eo]=null;for(;n===ss;)ss=vn[--wn],vn[wn]=null,hr=vn[--wn],vn[wn]=null,dr=vn[--wn],vn[wn]=null}var pn=null,hn=null,Be=!1,Vn=null;function ZE(n,e){var t=In(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function _v(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,pn=n,hn=ni(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,pn=n,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ss!==null?{id:dr,overflow:hr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=In(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,pn=n,hn=null,!0):!1;default:return!1}}function dp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hp(n){if(Be){var e=hn;if(e){var t=e;if(!_v(n,e)){if(dp(n))throw Error(q(418));e=ni(t.nextSibling);var r=pn;e&&_v(n,e)?ZE(r,t):(n.flags=n.flags&-4097|2,Be=!1,pn=n)}}else{if(dp(n))throw Error(q(418));n.flags=n.flags&-4097|2,Be=!1,pn=n}}}function vv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pn=n}function Zu(n){if(n!==pn)return!1;if(!Be)return vv(n),Be=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ap(n.type,n.memoizedProps)),e&&(e=hn)){if(dp(n))throw e0(),Error(q(418));for(;e;)ZE(n,e),e=ni(e.nextSibling)}if(vv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(q(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){hn=ni(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}hn=null}}else hn=pn?ni(n.stateNode.nextSibling):null;return!0}function e0(){for(var n=hn;n;)n=ni(n.nextSibling)}function Eo(){hn=pn=null,Be=!1}function Om(n){Vn===null?Vn=[n]:Vn.push(n)}var p1=Cr.ReactCurrentBatchConfig;function Ra(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(q(309));var r=t.stateNode}if(!r)throw Error(q(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(q(284));if(!t._owner)throw Error(q(290,n))}return n}function ec(n,e){throw n=Object.prototype.toString.call(e),Error(q(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function wv(n){var e=n._init;return e(n._payload)}function t0(n){function e(S,w){if(n){var A=S.deletions;A===null?(S.deletions=[w],S.flags|=16):A.push(w)}}function t(S,w){if(!n)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=oi(S,w),S.index=0,S.sibling=null,S}function s(S,w,A){return S.index=A,n?(A=S.alternate,A!==null?(A=A.index,A<w?(S.flags|=2,w):A):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return n&&S.alternate===null&&(S.flags|=2),S}function a(S,w,A,N){return w===null||w.tag!==6?(w=_f(A,S.mode,N),w.return=S,w):(w=i(w,A),w.return=S,w)}function u(S,w,A,N){var U=A.type;return U===Ks?h(S,w,A.props.children,N,A.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$r&&wv(U)===w.type)?(N=i(w,A.props),N.ref=Ra(S,w,A),N.return=S,N):(N=xc(A.type,A.key,A.props,null,S.mode,N),N.ref=Ra(S,w,A),N.return=S,N)}function c(S,w,A,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=vf(A,S.mode,N),w.return=S,w):(w=i(w,A.children||[]),w.return=S,w)}function h(S,w,A,N,U){return w===null||w.tag!==7?(w=Zi(A,S.mode,N,U),w.return=S,w):(w=i(w,A),w.return=S,w)}function f(S,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=_f(""+w,S.mode,A),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $u:return A=xc(w.type,w.key,w.props,null,S.mode,A),A.ref=Ra(S,null,w),A.return=S,A;case Gs:return w=vf(w,S.mode,A),w.return=S,w;case $r:var N=w._init;return f(S,N(w._payload),A)}if(ja(w)||Ea(w))return w=Zi(w,S.mode,A,null),w.return=S,w;ec(S,w)}return null}function g(S,w,A,N){var U=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:a(S,w,""+A,N);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case $u:return A.key===U?u(S,w,A,N):null;case Gs:return A.key===U?c(S,w,A,N):null;case $r:return U=A._init,g(S,w,U(A._payload),N)}if(ja(A)||Ea(A))return U!==null?null:h(S,w,A,N,null);ec(S,A)}return null}function T(S,w,A,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return S=S.get(A)||null,a(w,S,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case $u:return S=S.get(N.key===null?A:N.key)||null,u(w,S,N,U);case Gs:return S=S.get(N.key===null?A:N.key)||null,c(w,S,N,U);case $r:var B=N._init;return T(S,w,A,B(N._payload),U)}if(ja(N)||Ea(N))return S=S.get(A)||null,h(w,S,N,U,null);ec(w,N)}return null}function P(S,w,A,N){for(var U=null,B=null,_=w,y=w=0,I=null;_!==null&&y<A.length;y++){_.index>y?(I=_,_=null):I=_.sibling;var R=g(S,_,A[y],N);if(R===null){_===null&&(_=I);break}n&&_&&R.alternate===null&&e(S,_),w=s(R,w,y),B===null?U=R:B.sibling=R,B=R,_=I}if(y===A.length)return t(S,_),Be&&Fi(S,y),U;if(_===null){for(;y<A.length;y++)_=f(S,A[y],N),_!==null&&(w=s(_,w,y),B===null?U=_:B.sibling=_,B=_);return Be&&Fi(S,y),U}for(_=r(S,_);y<A.length;y++)I=T(_,S,y,A[y],N),I!==null&&(n&&I.alternate!==null&&_.delete(I.key===null?y:I.key),w=s(I,w,y),B===null?U=I:B.sibling=I,B=I);return n&&_.forEach(function(C){return e(S,C)}),Be&&Fi(S,y),U}function k(S,w,A,N){var U=Ea(A);if(typeof U!="function")throw Error(q(150));if(A=U.call(A),A==null)throw Error(q(151));for(var B=U=null,_=w,y=w=0,I=null,R=A.next();_!==null&&!R.done;y++,R=A.next()){_.index>y?(I=_,_=null):I=_.sibling;var C=g(S,_,R.value,N);if(C===null){_===null&&(_=I);break}n&&_&&C.alternate===null&&e(S,_),w=s(C,w,y),B===null?U=C:B.sibling=C,B=C,_=I}if(R.done)return t(S,_),Be&&Fi(S,y),U;if(_===null){for(;!R.done;y++,R=A.next())R=f(S,R.value,N),R!==null&&(w=s(R,w,y),B===null?U=R:B.sibling=R,B=R);return Be&&Fi(S,y),U}for(_=r(S,_);!R.done;y++,R=A.next())R=T(_,S,y,R.value,N),R!==null&&(n&&R.alternate!==null&&_.delete(R.key===null?y:R.key),w=s(R,w,y),B===null?U=R:B.sibling=R,B=R);return n&&_.forEach(function(D){return e(S,D)}),Be&&Fi(S,y),U}function L(S,w,A,N){if(typeof A=="object"&&A!==null&&A.type===Ks&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case $u:e:{for(var U=A.key,B=w;B!==null;){if(B.key===U){if(U=A.type,U===Ks){if(B.tag===7){t(S,B.sibling),w=i(B,A.props.children),w.return=S,S=w;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$r&&wv(U)===B.type){t(S,B.sibling),w=i(B,A.props),w.ref=Ra(S,B,A),w.return=S,S=w;break e}t(S,B);break}else e(S,B);B=B.sibling}A.type===Ks?(w=Zi(A.props.children,S.mode,N,A.key),w.return=S,S=w):(N=xc(A.type,A.key,A.props,null,S.mode,N),N.ref=Ra(S,w,A),N.return=S,S=N)}return o(S);case Gs:e:{for(B=A.key;w!==null;){if(w.key===B)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){t(S,w.sibling),w=i(w,A.children||[]),w.return=S,S=w;break e}else{t(S,w);break}else e(S,w);w=w.sibling}w=vf(A,S.mode,N),w.return=S,S=w}return o(S);case $r:return B=A._init,L(S,w,B(A._payload),N)}if(ja(A))return P(S,w,A,N);if(Ea(A))return k(S,w,A,N);ec(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(t(S,w.sibling),w=i(w,A),w.return=S,S=w):(t(S,w),w=_f(A,S.mode,N),w.return=S,S=w),o(S)):t(S,w)}return L}var To=t0(!0),n0=t0(!1),Zc=Si(null),ed=null,to=null,Lm=null;function Fm(){Lm=to=ed=null}function Mm(n){var e=Zc.current;je(Zc),n._currentValue=e}function fp(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function uo(n,e){ed=n,Lm=to=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(en=!0),n.firstContext=null)}function Rn(n){var e=n._currentValue;if(Lm!==n)if(n={context:n,memoizedValue:e,next:null},to===null){if(ed===null)throw Error(q(308));to=n,ed.dependencies={lanes:0,firstContext:n}}else to=to.next=n;return e}var Ki=null;function jm(n){Ki===null?Ki=[n]:Ki.push(n)}function r0(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,jm(e)):(t.next=i.next,i.next=t),e.interleaved=t,Er(n,r)}function Er(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Wr=!1;function Um(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ri(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,Te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(n,t)}return i=r.interleaved,i===null?(e.next=e,jm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(n,t)}function wc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Am(n,t)}}function Iv(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function td(n,e,t,r){var i=n.updateQueue;Wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var g=a.lane,T=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var P=n,k=a;switch(g=e,T=t,k.tag){case 1:if(P=k.payload,typeof P=="function"){f=P.call(T,f,g);break e}f=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=k.payload,g=typeof P=="function"?P.call(T,f,g):P,g==null)break e;f=He({},f,g);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else T={eventTime:T,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=T,u=f):h=h.next=T,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);as|=o,n.lanes=o,n.memoizedState=f}}function Ev(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var iu={},Xn=Si(iu),Sl=Si(iu),Al=Si(iu);function Hi(n){if(n===iu)throw Error(q(174));return n}function Bm(n,e){switch(Ne(Al,e),Ne(Sl,n),Ne(Xn,iu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Kf(e,n)}je(Xn),Ne(Xn,e)}function So(){je(Xn),je(Sl),je(Al)}function s0(n){Hi(Al.current);var e=Hi(Xn.current),t=Kf(e,n.type);e!==t&&(Ne(Sl,n),Ne(Xn,t))}function zm(n){Sl.current===n&&(je(Xn),je(Sl))}var qe=Si(0);function nd(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hf=[];function $m(){for(var n=0;n<hf.length;n++)hf[n]._workInProgressVersionPrimary=null;hf.length=0}var Ic=Cr.ReactCurrentDispatcher,ff=Cr.ReactCurrentBatchConfig,os=0,Ge=null,ft=null,_t=null,rd=!1,el=!1,xl=0,m1=0;function Nt(){throw Error(q(321))}function Wm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Mn(n[t],e[t]))return!1;return!0}function qm(n,e,t,r,i,s){if(os=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ic.current=n===null||n.memoizedState===null?v1:w1,n=t(r,i),el){s=0;do{if(el=!1,xl=0,25<=s)throw Error(q(301));s+=1,_t=ft=null,e.updateQueue=null,Ic.current=I1,n=t(r,i)}while(el)}if(Ic.current=id,e=ft!==null&&ft.next!==null,os=0,_t=ft=Ge=null,rd=!1,e)throw Error(q(300));return n}function Gm(){var n=xl!==0;return xl=0,n}function Bn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ge.memoizedState=_t=n:_t=_t.next=n,_t}function Pn(){if(ft===null){var n=Ge.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var e=_t===null?Ge.memoizedState:_t.next;if(e!==null)_t=e,ft=n;else{if(n===null)throw Error(q(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},_t===null?Ge.memoizedState=_t=n:_t=_t.next=n}return _t}function Rl(n,e){return typeof e=="function"?e(n):e}function pf(n){var e=Pn(),t=e.queue;if(t===null)throw Error(q(311));t.lastRenderedReducer=n;var r=ft,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((os&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ge.lanes|=h,as|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Mn(r,e.memoizedState)||(en=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,Ge.lanes|=s,as|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function mf(n){var e=Pn(),t=e.queue;if(t===null)throw Error(q(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);Mn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function o0(){}function a0(n,e){var t=Ge,r=Pn(),i=e(),s=!Mn(r.memoizedState,i);if(s&&(r.memoizedState=i,en=!0),r=r.queue,Km(c0.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||_t!==null&&_t.memoizedState.tag&1){if(t.flags|=2048,Pl(9,u0.bind(null,t,r,i,e),void 0,null),wt===null)throw Error(q(349));os&30||l0(t,e,i)}return i}function l0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function u0(n,e,t,r){e.value=t,e.getSnapshot=r,d0(e)&&h0(n)}function c0(n,e,t){return t(function(){d0(e)&&h0(n)})}function d0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Mn(n,t)}catch{return!0}}function h0(n){var e=Er(n,1);e!==null&&Ln(e,n,1,-1)}function Tv(n){var e=Bn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:n},e.queue=n,n=n.dispatch=_1.bind(null,Ge,n),[e.memoizedState,n]}function Pl(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function f0(){return Pn().memoizedState}function Ec(n,e,t,r){var i=Bn();Ge.flags|=n,i.memoizedState=Pl(1|e,t,void 0,r===void 0?null:r)}function jd(n,e,t,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,r!==null&&Wm(r,o.deps)){i.memoizedState=Pl(e,t,s,r);return}}Ge.flags|=n,i.memoizedState=Pl(1|e,t,s,r)}function Sv(n,e){return Ec(8390656,8,n,e)}function Km(n,e){return jd(2048,8,n,e)}function p0(n,e){return jd(4,2,n,e)}function m0(n,e){return jd(4,4,n,e)}function g0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function y0(n,e,t){return t=t!=null?t.concat([n]):null,jd(4,4,g0.bind(null,e,n),t)}function Hm(){}function _0(n,e){var t=Pn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function v0(n,e){var t=Pn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function w0(n,e,t){return os&21?(Mn(t,e)||(t=AE(),Ge.lanes|=t,as|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,en=!0),n.memoizedState=t)}function g1(n,e){var t=Pe;Pe=t!==0&&4>t?t:4,n(!0);var r=ff.transition;ff.transition={};try{n(!1),e()}finally{Pe=t,ff.transition=r}}function I0(){return Pn().memoizedState}function y1(n,e,t){var r=si(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},E0(n))T0(e,t);else if(t=r0(n,e,t,r),t!==null){var i=Wt();Ln(t,n,r,i),S0(t,e,r)}}function _1(n,e,t){var r=si(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(E0(n))T0(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,Mn(a,o)){var u=e.interleaved;u===null?(i.next=i,jm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}t=r0(n,e,i,r),t!==null&&(i=Wt(),Ln(t,n,r,i),S0(t,e,r))}}function E0(n){var e=n.alternate;return n===Ge||e!==null&&e===Ge}function T0(n,e){el=rd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function S0(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Am(n,t)}}var id={readContext:Rn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},v1={readContext:Rn,useCallback:function(n,e){return Bn().memoizedState=[n,e===void 0?null:e],n},useContext:Rn,useEffect:Sv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ec(4194308,4,g0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ec(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ec(4,2,n,e)},useMemo:function(n,e){var t=Bn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Bn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=y1.bind(null,Ge,n),[r.memoizedState,n]},useRef:function(n){var e=Bn();return n={current:n},e.memoizedState=n},useState:Tv,useDebugValue:Hm,useDeferredValue:function(n){return Bn().memoizedState=n},useTransition:function(){var n=Tv(!1),e=n[0];return n=g1.bind(null,n[1]),Bn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=Ge,i=Bn();if(Be){if(t===void 0)throw Error(q(407));t=t()}else{if(t=e(),wt===null)throw Error(q(349));os&30||l0(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,Sv(c0.bind(null,r,s,n),[n]),r.flags|=2048,Pl(9,u0.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=Bn(),e=wt.identifierPrefix;if(Be){var t=hr,r=dr;t=(r&~(1<<32-On(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=xl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=m1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},w1={readContext:Rn,useCallback:_0,useContext:Rn,useEffect:Km,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:v0,useReducer:pf,useRef:f0,useState:function(){return pf(Rl)},useDebugValue:Hm,useDeferredValue:function(n){var e=Pn();return w0(e,ft.memoizedState,n)},useTransition:function(){var n=pf(Rl)[0],e=Pn().memoizedState;return[n,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:I0,unstable_isNewReconciler:!1},I1={readContext:Rn,useCallback:_0,useContext:Rn,useEffect:Km,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:v0,useReducer:mf,useRef:f0,useState:function(){return mf(Rl)},useDebugValue:Hm,useDeferredValue:function(n){var e=Pn();return ft===null?e.memoizedState=n:w0(e,ft.memoizedState,n)},useTransition:function(){var n=mf(Rl)[0],e=Pn().memoizedState;return[n,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:I0,unstable_isNewReconciler:!1};function Dn(n,e){if(n&&n.defaultProps){e=He({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function pp(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:He({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ud={isMounted:function(n){return(n=n._reactInternals)?Es(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Wt(),i=si(n),s=yr(r,i);s.payload=e,t!=null&&(s.callback=t),e=ri(n,s,i),e!==null&&(Ln(e,n,i,r),wc(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Wt(),i=si(n),s=yr(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ri(n,s,i),e!==null&&(Ln(e,n,i,r),wc(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wt(),r=si(n),i=yr(t,r);i.tag=2,e!=null&&(i.callback=e),e=ri(n,i,r),e!==null&&(Ln(e,n,r,t),wc(e,n,r))}};function Av(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wl(t,r)||!wl(i,s):!0}function A0(n,e,t){var r=!1,i=di,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(i=on(e)?is:Ft.current,r=e.contextTypes,s=(r=r!=null)?Io(n,i):di),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ud,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function xv(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Ud.enqueueReplaceState(e,e.state,null)}function mp(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},Um(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rn(s):(s=on(e)?is:Ft.current,i.context=Io(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pp(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ud.enqueueReplaceState(i,i.state,null),td(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function Ao(n,e){try{var t="",r=e;do t+=QR(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function gf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function gp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var E1=typeof WeakMap=="function"?WeakMap:Map;function x0(n,e,t){t=yr(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){od||(od=!0,xp=r),gp(n,e)},t}function R0(n,e,t){t=yr(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){gp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){gp(n,e),typeof r!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Rv(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new E1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=L1.bind(null,n,e,t),e.then(n,n))}function Pv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Cv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=yr(-1,1),e.tag=2,ri(t,e,1))),t.lanes|=1),n)}var T1=Cr.ReactCurrentOwner,en=!1;function Bt(n,e,t,r){e.child=n===null?n0(e,null,t,r):To(e,n.child,t,r)}function kv(n,e,t,r,i){t=t.render;var s=e.ref;return uo(e,i),r=qm(n,e,t,r,s,i),t=Gm(),n!==null&&!en?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Tr(n,e,i)):(Be&&t&&Nm(e),e.flags|=1,Bt(n,e,r,i),e.child)}function bv(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!ng(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,P0(n,e,s,r,i)):(n=xc(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:wl,t(o,r)&&n.ref===e.ref)return Tr(n,e,i)}return e.flags|=1,n=oi(s,r),n.ref=e.ref,n.return=e,e.child=n}function P0(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(wl(s,r)&&n.ref===e.ref)if(en=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(en=!0);else return e.lanes=n.lanes,Tr(n,e,i)}return yp(n,e,t,r,i)}function C0(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(ro,un),un|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ne(ro,un),un|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,Ne(ro,un),un|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,Ne(ro,un),un|=r;return Bt(n,e,i,t),e.child}function k0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function yp(n,e,t,r,i){var s=on(t)?is:Ft.current;return s=Io(e,s),uo(e,i),t=qm(n,e,t,r,s,i),r=Gm(),n!==null&&!en?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Tr(n,e,i)):(Be&&r&&Nm(e),e.flags|=1,Bt(n,e,t,i),e.child)}function Dv(n,e,t,r,i){if(on(t)){var s=!0;Yc(e)}else s=!1;if(uo(e,i),e.stateNode===null)Tc(n,e),A0(e,t,r),mp(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=on(t)?is:Ft.current,c=Io(e,c));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&xv(e,o,r,c),Wr=!1;var g=e.memoizedState;o.state=g,td(e,r,o,i),u=e.memoizedState,a!==r||g!==u||sn.current||Wr?(typeof h=="function"&&(pp(e,t,h,r),u=e.memoizedState),(a=Wr||Av(e,t,a,r,g,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,i0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Dn(e.type,a),o.props=c,f=e.pendingProps,g=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Rn(u):(u=on(t)?is:Ft.current,u=Io(e,u));var T=t.getDerivedStateFromProps;(h=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==u)&&xv(e,o,r,u),Wr=!1,g=e.memoizedState,o.state=g,td(e,r,o,i);var P=e.memoizedState;a!==f||g!==P||sn.current||Wr?(typeof T=="function"&&(pp(e,t,T,r),P=e.memoizedState),(c=Wr||Av(e,t,c,r,g,P,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),r=!1)}return _p(n,e,t,r,s,i)}function _p(n,e,t,r,i,s){k0(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yv(e,t,!1),Tr(n,e,s);r=e.stateNode,T1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=To(e,n.child,null,s),e.child=To(e,null,a,s)):Bt(n,e,a,s),e.memoizedState=r.state,i&&yv(e,t,!0),e.child}function b0(n){var e=n.stateNode;e.pendingContext?gv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&gv(n,e.context,!1),Bm(n,e.containerInfo)}function Nv(n,e,t,r,i){return Eo(),Om(i),e.flags|=256,Bt(n,e,t,r),e.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function wp(n){return{baseLanes:n,cachePool:null,transitions:null}}function D0(n,e,t){var r=e.pendingProps,i=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),Ne(qe,i&1),n===null)return hp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$d(o,r,0,null),n=Zi(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=wp(t),e.memoizedState=vp,n):Qm(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return S1(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=oi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=oi(a,s):(s=Zi(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?wp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=vp,r}return s=n.child,n=s.sibling,r=oi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Qm(n,e){return e=$d({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function tc(n,e,t,r){return r!==null&&Om(r),To(e,n.child,null,t),n=Qm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function S1(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=gf(Error(q(422))),tc(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$d({mode:"visible",children:r.children},i,0,null),s=Zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&To(e,n.child,null,o),e.child.memoizedState=wp(o),e.memoizedState=vp,s);if(!(e.mode&1))return tc(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(q(419)),r=gf(s,r,void 0),tc(n,e,o,r)}if(a=(o&n.childLanes)!==0,en||a){if(r=wt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(n,i),Ln(r,n,i,-1))}return tg(),r=gf(Error(q(421))),tc(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=F1.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,hn=ni(i.nextSibling),pn=e,Be=!0,Vn=null,n!==null&&(vn[wn++]=dr,vn[wn++]=hr,vn[wn++]=ss,dr=n.id,hr=n.overflow,ss=e),e=Qm(e,r.children),e.flags|=4096,e)}function Vv(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),fp(n.return,e,t)}function yf(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function N0(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Bt(n,e,r.children,t),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vv(n,t,e);else if(n.tag===19)Vv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(Ne(qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&nd(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),yf(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&nd(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}yf(e,!0,t,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Tr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),as|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(q(153));if(e.child!==null){for(n=e.child,t=oi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=oi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function A1(n,e,t){switch(e.tag){case 3:b0(e),Eo();break;case 5:s0(e);break;case 1:on(e.type)&&Yc(e);break;case 4:Bm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ne(Zc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(qe,qe.current&1),e.flags|=128,null):t&e.child.childLanes?D0(n,e,t):(Ne(qe,qe.current&1),n=Tr(n,e,t),n!==null?n.sibling:null);Ne(qe,qe.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return N0(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,C0(n,e,t)}return Tr(n,e,t)}var V0,Ip,O0,L0;V0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ip=function(){};O0=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,Hi(Xn.current);var s=null;switch(t){case"input":i=$f(n,i),r=$f(n,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Gf(n,i),r=Gf(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Hc)}Hf(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Le("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};L0=function(n,e,t,r){t!==r&&(e.flags|=4)};function Pa(n,e){if(!Be)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function Vt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function x1(n,e,t){var r=e.pendingProps;switch(Vm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return on(e.type)&&Qc(),Vt(e),null;case 3:return r=e.stateNode,So(),je(sn),je(Ft),$m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Zu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Cp(Vn),Vn=null))),Ip(n,e),Vt(e),null;case 5:zm(e);var i=Hi(Al.current);if(t=e.type,n!==null&&e.stateNode!=null)O0(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return Vt(e),null}if(n=Hi(Xn.current),Zu(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[Tl]=s,n=(e.mode&1)!==0,t){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<Ba.length;i++)Le(Ba[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":$_(r,s),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Le("invalid",r);break;case"textarea":q_(r,s),Le("invalid",r)}Hf(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xu(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xu(r.textContent,a,n),i=["children",""+a]):fl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Le("scroll",r)}switch(t){case"input":Wu(r),W_(r,s,!0);break;case"textarea":Wu(r),G_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=cE(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[$n]=e,n[Tl]=r,V0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Qf(t,r),t){case"dialog":Le("cancel",n),Le("close",n),i=r;break;case"iframe":case"object":case"embed":Le("load",n),i=r;break;case"video":case"audio":for(i=0;i<Ba.length;i++)Le(Ba[i],n);i=r;break;case"source":Le("error",n),i=r;break;case"img":case"image":case"link":Le("error",n),Le("load",n),i=r;break;case"details":Le("toggle",n),i=r;break;case"input":$_(n,r),i=$f(n,r),Le("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),Le("invalid",n);break;case"textarea":q_(n,r),i=Gf(n,r),Le("invalid",n);break;default:i=r}Hf(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?fE(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dE(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&pl(n,u):typeof u=="number"&&pl(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Le("scroll",n):u!=null&&vm(n,s,u,o))}switch(t){case"input":Wu(n),W_(n,r,!1);break;case"textarea":Wu(n),G_(n);break;case"option":r.value!=null&&n.setAttribute("value",""+ci(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?so(n,!!r.multiple,s,!1):r.defaultValue!=null&&so(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=Hc)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(n&&e.stateNode!=null)L0(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(t=Hi(Al.current),Hi(Xn.current),Zu(e)){if(r=e.stateNode,t=e.memoizedProps,r[$n]=e,(s=r.nodeValue!==t)&&(n=pn,n!==null))switch(n.tag){case 3:Xu(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xu(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return Vt(e),null;case 13:if(je(qe),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Be&&hn!==null&&e.mode&1&&!(e.flags&128))e0(),Eo(),e.flags|=98560,s=!1;else if(s=Zu(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[$n]=e}else Eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Vn!==null&&(Cp(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||qe.current&1?pt===0&&(pt=3):tg())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return So(),Ip(n,e),n===null&&Il(e.stateNode.containerInfo),Vt(e),null;case 10:return Mm(e.type._context),Vt(e),null;case 17:return on(e.type)&&Qc(),Vt(e),null;case 19:if(je(qe),s=e.memoizedState,s===null)return Vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pa(s,!1);else{if(pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=nd(n),o!==null){for(e.flags|=128,Pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ne(qe,qe.current&1|2),e.child}n=n.sibling}s.tail!==null&&it()>xo&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304)}else{if(!r)if(n=nd(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return Vt(e),null}else 2*it()-s.renderingStartTime>xo&&t!==1073741824&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,t=qe.current,Ne(qe,r?t&1|2:t&1),e):(Vt(e),null);case 22:case 23:return eg(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function R1(n,e){switch(Vm(e),e.tag){case 1:return on(e.type)&&Qc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return So(),je(sn),je(Ft),$m(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return zm(e),null;case 13:if(je(qe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Eo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return je(qe),null;case 4:return So(),null;case 10:return Mm(e.type._context),null;case 22:case 23:return eg(),null;case 24:return null;default:return null}}var nc=!1,Lt=!1,P1=typeof WeakSet=="function"?WeakSet:Set,te=null;function no(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Je(n,e,r)}else t.current=null}function Ep(n,e,t){try{t()}catch(r){Je(n,e,r)}}var Ov=!1;function C1(n,e){if(sp=qc,n=BE(),Dm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=n,g=null;t:for(;;){for(var T;f!==t||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)g=f,f=T;for(;;){if(f===n)break t;if(g===t&&++c===i&&(a=o),g===s&&++h===r&&(u=o),(T=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=T}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(op={focusedElem:n,selectionRange:t},qc=!1,te=e;te!==null;)if(e=te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,te=n;else for(;te!==null;){e=te;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var k=P.memoizedProps,L=P.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?k:Dn(e.type,k),L);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(N){Je(e,e.return,N)}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}return P=Ov,Ov=!1,P}function tl(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ep(e,t,s)}i=i.next}while(i!==r)}}function Bd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Tp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function F0(n){var e=n.alternate;e!==null&&(n.alternate=null,F0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[$n],delete e[Tl],delete e[up],delete e[d1],delete e[h1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function M0(n){return n.tag===5||n.tag===3||n.tag===4}function Lv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||M0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Hc));else if(r!==4&&(n=n.child,n!==null))for(Sp(n,e,t),n=n.sibling;n!==null;)Sp(n,e,t),n=n.sibling}function Ap(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Ap(n,e,t),n=n.sibling;n!==null;)Ap(n,e,t),n=n.sibling}var Tt=null,Nn=!1;function Mr(n,e,t){for(t=t.child;t!==null;)j0(n,e,t),t=t.sibling}function j0(n,e,t){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Nd,t)}catch{}switch(t.tag){case 5:Lt||no(t,e);case 6:var r=Tt,i=Nn;Tt=null,Mr(n,e,t),Tt=r,Nn=i,Tt!==null&&(Nn?(n=Tt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Tt.removeChild(t.stateNode));break;case 18:Tt!==null&&(Nn?(n=Tt,t=t.stateNode,n.nodeType===8?cf(n.parentNode,t):n.nodeType===1&&cf(n,t),_l(n)):cf(Tt,t.stateNode));break;case 4:r=Tt,i=Nn,Tt=t.stateNode.containerInfo,Nn=!0,Mr(n,e,t),Tt=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ep(t,e,o),i=i.next}while(i!==r)}Mr(n,e,t);break;case 1:if(!Lt&&(no(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Je(t,e,a)}Mr(n,e,t);break;case 21:Mr(n,e,t);break;case 22:t.mode&1?(Lt=(r=Lt)||t.memoizedState!==null,Mr(n,e,t),Lt=r):Mr(n,e,t);break;default:Mr(n,e,t)}}function Fv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new P1),e.forEach(function(r){var i=M1.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function bn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Nn=!1;break e;case 3:Tt=a.stateNode.containerInfo,Nn=!0;break e;case 4:Tt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Tt===null)throw Error(q(160));j0(s,o,i),Tt=null,Nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,n),e=e.sibling}function U0(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(e,n),Un(n),r&4){try{tl(3,n,n.return),Bd(3,n)}catch(k){Je(n,n.return,k)}try{tl(5,n,n.return)}catch(k){Je(n,n.return,k)}}break;case 1:bn(e,n),Un(n),r&512&&t!==null&&no(t,t.return);break;case 5:if(bn(e,n),Un(n),r&512&&t!==null&&no(t,t.return),n.flags&32){var i=n.stateNode;try{pl(i,"")}catch(k){Je(n,n.return,k)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lE(i,s),Qf(a,o);var c=Qf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?fE(i,f):h==="dangerouslySetInnerHTML"?dE(i,f):h==="children"?pl(i,f):vm(i,h,f,c)}switch(a){case"input":Wf(i,s);break;case"textarea":uE(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?so(i,!!s.multiple,T,!1):g!==!!s.multiple&&(s.defaultValue!=null?so(i,!!s.multiple,s.defaultValue,!0):so(i,!!s.multiple,s.multiple?[]:"",!1))}i[Tl]=s}catch(k){Je(n,n.return,k)}}break;case 6:if(bn(e,n),Un(n),r&4){if(n.stateNode===null)throw Error(q(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(k){Je(n,n.return,k)}}break;case 3:if(bn(e,n),Un(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{_l(e.containerInfo)}catch(k){Je(n,n.return,k)}break;case 4:bn(e,n),Un(n);break;case 13:bn(e,n),Un(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xm=it())),r&4&&Fv(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(Lt=(c=Lt)||h,bn(e,n),Lt=c):bn(e,n),Un(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(te=n,h=n.child;h!==null;){for(f=te=h;te!==null;){switch(g=te,T=g.child,g.tag){case 0:case 11:case 14:case 15:tl(4,g,g.return);break;case 1:no(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,t=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(k){Je(r,t,k)}}break;case 5:no(g,g.return);break;case 22:if(g.memoizedState!==null){jv(f);continue}}T!==null?(T.return=g,te=T):jv(f)}h=h.sibling}e:for(h=null,f=n;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=hE("display",o))}catch(k){Je(n,n.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Je(n,n.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bn(e,n),Un(n),r&4&&Fv(n);break;case 21:break;default:bn(e,n),Un(n)}}function Un(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(M0(t)){var r=t;break e}t=t.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pl(i,""),r.flags&=-33);var s=Lv(n);Ap(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lv(n);Sp(n,a,o);break;default:throw Error(q(161))}}catch(u){Je(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function k1(n,e,t){te=n,B0(n)}function B0(n,e,t){for(var r=(n.mode&1)!==0;te!==null;){var i=te,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Lt;a=nc;var c=Lt;if(nc=o,(Lt=u)&&!c)for(te=i;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?Uv(i):u!==null?(u.return=o,te=u):Uv(i);for(;s!==null;)te=s,B0(s),s=s.sibling;te=i,nc=a,Lt=c}Mv(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):Mv(n)}}function Mv(n){for(;te!==null;){var e=te;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||Bd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:Dn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ev(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Ev(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&_l(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Lt||e.flags&512&&Tp(e)}catch(g){Je(e,e.return,g)}}if(e===n){te=null;break}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}}function jv(n){for(;te!==null;){var e=te;if(e===n){te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,te=t;break}te=e.return}}function Uv(n){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Bd(4,e)}catch(u){Je(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Je(e,i,u)}}var s=e.return;try{Tp(e)}catch(u){Je(e,s,u)}break;case 5:var o=e.return;try{Tp(e)}catch(u){Je(e,o,u)}}}catch(u){Je(e,e.return,u)}if(e===n){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var b1=Math.ceil,sd=Cr.ReactCurrentDispatcher,Ym=Cr.ReactCurrentOwner,An=Cr.ReactCurrentBatchConfig,Te=0,wt=null,ht=null,xt=0,un=0,ro=Si(0),pt=0,Cl=null,as=0,zd=0,Jm=0,nl=null,Zt=null,Xm=0,xo=1/0,ur=null,od=!1,xp=null,ii=null,rc=!1,Yr=null,ad=0,rl=0,Rp=null,Sc=-1,Ac=0;function Wt(){return Te&6?it():Sc!==-1?Sc:Sc=it()}function si(n){return n.mode&1?Te&2&&xt!==0?xt&-xt:p1.transition!==null?(Ac===0&&(Ac=AE()),Ac):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:DE(n.type)),n):1}function Ln(n,e,t,r){if(50<rl)throw rl=0,Rp=null,Error(q(185));tu(n,t,r),(!(Te&2)||n!==wt)&&(n===wt&&(!(Te&2)&&(zd|=t),pt===4&&Gr(n,xt)),an(n,r),t===1&&Te===0&&!(e.mode&1)&&(xo=it()+500,Md&&Ai()))}function an(n,e){var t=n.callbackNode;pP(n,e);var r=Wc(n,n===wt?xt:0);if(r===0)t!==null&&Q_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Q_(t),e===1)n.tag===0?f1(Bv.bind(null,n)):JE(Bv.bind(null,n)),u1(function(){!(Te&6)&&Ai()}),t=null;else{switch(xE(r)){case 1:t=Sm;break;case 4:t=TE;break;case 16:t=$c;break;case 536870912:t=SE;break;default:t=$c}t=Q0(t,z0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function z0(n,e){if(Sc=-1,Ac=0,Te&6)throw Error(q(327));var t=n.callbackNode;if(co()&&n.callbackNode!==t)return null;var r=Wc(n,n===wt?xt:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=ld(n,r);else{e=r;var i=Te;Te|=2;var s=W0();(wt!==n||xt!==e)&&(ur=null,xo=it()+500,Xi(n,e));do try{V1();break}catch(a){$0(n,a)}while(!0);Fm(),sd.current=s,Te=i,ht!==null?e=0:(wt=null,xt=0,e=pt)}if(e!==0){if(e===2&&(i=ep(n),i!==0&&(r=i,e=Pp(n,i))),e===1)throw t=Cl,Xi(n,0),Gr(n,r),an(n,it()),t;if(e===6)Gr(n,r);else{if(i=n.current.alternate,!(r&30)&&!D1(i)&&(e=ld(n,r),e===2&&(s=ep(n),s!==0&&(r=s,e=Pp(n,s))),e===1))throw t=Cl,Xi(n,0),Gr(n,r),an(n,it()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Mi(n,Zt,ur);break;case 3:if(Gr(n,r),(r&130023424)===r&&(e=Xm+500-it(),10<e)){if(Wc(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){Wt(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=lp(Mi.bind(null,n,Zt,ur),e);break}Mi(n,Zt,ur);break;case 4:if(Gr(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b1(r/1960))-r,10<r){n.timeoutHandle=lp(Mi.bind(null,n,Zt,ur),r);break}Mi(n,Zt,ur);break;case 5:Mi(n,Zt,ur);break;default:throw Error(q(329))}}}return an(n,it()),n.callbackNode===t?z0.bind(null,n):null}function Pp(n,e){var t=nl;return n.current.memoizedState.isDehydrated&&(Xi(n,e).flags|=256),n=ld(n,e),n!==2&&(e=Zt,Zt=t,e!==null&&Cp(e)),n}function Cp(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function D1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!Mn(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(n,e){for(e&=~Jm,e&=~zd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-On(e),r=1<<t;n[t]=-1,e&=~r}}function Bv(n){if(Te&6)throw Error(q(327));co();var e=Wc(n,0);if(!(e&1))return an(n,it()),null;var t=ld(n,e);if(n.tag!==0&&t===2){var r=ep(n);r!==0&&(e=r,t=Pp(n,r))}if(t===1)throw t=Cl,Xi(n,0),Gr(n,e),an(n,it()),t;if(t===6)throw Error(q(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Mi(n,Zt,ur),an(n,it()),null}function Zm(n,e){var t=Te;Te|=1;try{return n(e)}finally{Te=t,Te===0&&(xo=it()+500,Md&&Ai())}}function ls(n){Yr!==null&&Yr.tag===0&&!(Te&6)&&co();var e=Te;Te|=1;var t=An.transition,r=Pe;try{if(An.transition=null,Pe=1,n)return n()}finally{Pe=r,An.transition=t,Te=e,!(Te&6)&&Ai()}}function eg(){un=ro.current,je(ro)}function Xi(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,l1(t)),ht!==null)for(t=ht.return;t!==null;){var r=t;switch(Vm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qc();break;case 3:So(),je(sn),je(Ft),$m();break;case 5:zm(r);break;case 4:So();break;case 13:je(qe);break;case 19:je(qe);break;case 10:Mm(r.type._context);break;case 22:case 23:eg()}t=t.return}if(wt=n,ht=n=oi(n.current,null),xt=un=e,pt=0,Cl=null,Jm=zd=as=0,Zt=nl=null,Ki!==null){for(e=0;e<Ki.length;e++)if(t=Ki[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}Ki=null}return n}function $0(n,e){do{var t=ht;try{if(Fm(),Ic.current=id,rd){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rd=!1}if(os=0,_t=ft=Ge=null,el=!1,xl=0,Ym.current=null,t===null||t.return===null){pt=1,Cl=e,ht=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=xt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var T=Pv(o);if(T!==null){T.flags&=-257,Cv(T,o,a,s,e),T.mode&1&&Rv(s,c,e),e=T,u=c;var P=e.updateQueue;if(P===null){var k=new Set;k.add(u),e.updateQueue=k}else P.add(u);break e}else{if(!(e&1)){Rv(s,c,e),tg();break e}u=Error(q(426))}}else if(Be&&a.mode&1){var L=Pv(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Cv(L,o,a,s,e),Om(Ao(u,a));break e}}s=u=Ao(u,a),pt!==4&&(pt=2),nl===null?nl=[s]:nl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=x0(s,u,e);Iv(s,S);break e;case 1:a=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ii===null||!ii.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=R0(s,a,e);Iv(s,N);break e}}s=s.return}while(s!==null)}G0(t)}catch(U){e=U,ht===t&&t!==null&&(ht=t=t.return);continue}break}while(!0)}function W0(){var n=sd.current;return sd.current=id,n===null?id:n}function tg(){(pt===0||pt===3||pt===2)&&(pt=4),wt===null||!(as&268435455)&&!(zd&268435455)||Gr(wt,xt)}function ld(n,e){var t=Te;Te|=2;var r=W0();(wt!==n||xt!==e)&&(ur=null,Xi(n,e));do try{N1();break}catch(i){$0(n,i)}while(!0);if(Fm(),Te=t,sd.current=r,ht!==null)throw Error(q(261));return wt=null,xt=0,pt}function N1(){for(;ht!==null;)q0(ht)}function V1(){for(;ht!==null&&!sP();)q0(ht)}function q0(n){var e=H0(n.alternate,n,un);n.memoizedProps=n.pendingProps,e===null?G0(n):ht=e,Ym.current=null}function G0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=R1(t,e),t!==null){t.flags&=32767,ht=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ht=null;return}}else if(t=x1(t,e,un),t!==null){ht=t;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=n}while(e!==null);pt===0&&(pt=5)}function Mi(n,e,t){var r=Pe,i=An.transition;try{An.transition=null,Pe=1,O1(n,e,t,r)}finally{An.transition=i,Pe=r}return null}function O1(n,e,t,r){do co();while(Yr!==null);if(Te&6)throw Error(q(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(q(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(mP(n,s),n===wt&&(ht=wt=null,xt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||rc||(rc=!0,Q0($c,function(){return co(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=Pe;Pe=1;var a=Te;Te|=4,Ym.current=null,C1(n,t),U0(t,n),t1(op),qc=!!sp,op=sp=null,n.current=t,k1(t),oP(),Te=a,Pe=o,An.transition=s}else n.current=t;if(rc&&(rc=!1,Yr=n,ad=i),s=n.pendingLanes,s===0&&(ii=null),uP(t.stateNode),an(n,it()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(od)throw od=!1,n=xp,xp=null,n;return ad&1&&n.tag!==0&&co(),s=n.pendingLanes,s&1?n===Rp?rl++:(rl=0,Rp=n):rl=0,Ai(),null}function co(){if(Yr!==null){var n=xE(ad),e=An.transition,t=Pe;try{if(An.transition=null,Pe=16>n?16:n,Yr===null)var r=!1;else{if(n=Yr,Yr=null,ad=0,Te&6)throw Error(q(331));var i=Te;for(Te|=4,te=n.current;te!==null;){var s=te,o=s.child;if(te.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(te=c;te!==null;){var h=te;switch(h.tag){case 0:case 11:case 15:tl(8,h,s)}var f=h.child;if(f!==null)f.return=h,te=f;else for(;te!==null;){h=te;var g=h.sibling,T=h.return;if(F0(h),h===c){te=null;break}if(g!==null){g.return=T,te=g;break}te=T}}}var P=s.alternate;if(P!==null){var k=P.child;if(k!==null){P.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:tl(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,te=S;break e}te=s.return}}var w=n.current;for(te=w;te!==null;){o=te;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,te=A;else e:for(o=w;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bd(9,a)}}catch(U){Je(a,a.return,U)}if(a===o){te=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,te=N;break e}te=a.return}}if(Te=i,Ai(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Nd,n)}catch{}r=!0}return r}finally{Pe=t,An.transition=e}}return!1}function zv(n,e,t){e=Ao(t,e),e=x0(n,e,1),n=ri(n,e,1),e=Wt(),n!==null&&(tu(n,1,e),an(n,e))}function Je(n,e,t){if(n.tag===3)zv(n,n,t);else for(;e!==null;){if(e.tag===3){zv(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ii===null||!ii.has(r))){n=Ao(t,n),n=R0(e,n,1),e=ri(e,n,1),n=Wt(),e!==null&&(tu(e,1,n),an(e,n));break}}e=e.return}}function L1(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Wt(),n.pingedLanes|=n.suspendedLanes&t,wt===n&&(xt&t)===t&&(pt===4||pt===3&&(xt&130023424)===xt&&500>it()-Xm?Xi(n,0):Jm|=t),an(n,e)}function K0(n,e){e===0&&(n.mode&1?(e=Ku,Ku<<=1,!(Ku&130023424)&&(Ku=4194304)):e=1);var t=Wt();n=Er(n,e),n!==null&&(tu(n,e,t),an(n,t))}function F1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),K0(n,t)}function M1(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),K0(n,t)}var H0;H0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||sn.current)en=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return en=!1,A1(n,e,t);en=!!(n.flags&131072)}else en=!1,Be&&e.flags&1048576&&XE(e,Xc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tc(n,e),n=e.pendingProps;var i=Io(e,Ft.current);uo(e,t),i=qm(null,e,r,n,i,t);var s=Gm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(s=!0,Yc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Um(e),i.updater=Ud,e.stateNode=i,i._reactInternals=e,mp(e,r,n,t),e=_p(null,e,r,!0,s,t)):(e.tag=0,Be&&s&&Nm(e),Bt(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(Tc(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=U1(r),n=Dn(r,n),i){case 0:e=yp(null,e,r,n,t);break e;case 1:e=Dv(null,e,r,n,t);break e;case 11:e=kv(null,e,r,n,t);break e;case 14:e=bv(null,e,r,Dn(r.type,n),t);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),yp(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),Dv(n,e,r,i,t);case 3:e:{if(b0(e),n===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,i0(n,e),td(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error(q(423)),e),e=Nv(n,e,r,t,i);break e}else if(r!==i){i=Ao(Error(q(424)),e),e=Nv(n,e,r,t,i);break e}else for(hn=ni(e.stateNode.containerInfo.firstChild),pn=e,Be=!0,Vn=null,t=n0(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Eo(),r===i){e=Tr(n,e,t);break e}Bt(n,e,r,t)}e=e.child}return e;case 5:return s0(e),n===null&&hp(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,ap(r,i)?o=null:s!==null&&ap(r,s)&&(e.flags|=32),k0(n,e),Bt(n,e,o,t),e.child;case 6:return n===null&&hp(e),null;case 13:return D0(n,e,t);case 4:return Bm(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=To(e,null,r,t):Bt(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),kv(n,e,r,i,t);case 7:return Bt(n,e,e.pendingProps,t),e.child;case 8:return Bt(n,e,e.pendingProps.children,t),e.child;case 12:return Bt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ne(Zc,r._currentValue),r._currentValue=o,s!==null)if(Mn(s.value,o)){if(s.children===i.children&&!sn.current){e=Tr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yr(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),fp(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),fp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,uo(e,t),i=Rn(i),r=r(i),e.flags|=1,Bt(n,e,r,t),e.child;case 14:return r=e.type,i=Dn(r,e.pendingProps),i=Dn(r.type,i),bv(n,e,r,i,t);case 15:return P0(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),Tc(n,e),e.tag=1,on(r)?(n=!0,Yc(e)):n=!1,uo(e,t),A0(e,r,i),mp(e,r,i,t),_p(null,e,r,!0,n,t);case 19:return N0(n,e,t);case 22:return C0(n,e,t)}throw Error(q(156,e.tag))};function Q0(n,e){return EE(n,e)}function j1(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,e,t,r){return new j1(n,e,t,r)}function ng(n){return n=n.prototype,!(!n||!n.isReactComponent)}function U1(n){if(typeof n=="function")return ng(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Im)return 11;if(n===Em)return 14}return 2}function oi(n,e){var t=n.alternate;return t===null?(t=In(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function xc(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")ng(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ks:return Zi(t.children,i,s,e);case wm:o=8,i|=8;break;case jf:return n=In(12,t,e,i|2),n.elementType=jf,n.lanes=s,n;case Uf:return n=In(13,t,e,i),n.elementType=Uf,n.lanes=s,n;case Bf:return n=In(19,t,e,i),n.elementType=Bf,n.lanes=s,n;case sE:return $d(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case rE:o=10;break e;case iE:o=9;break e;case Im:o=11;break e;case Em:o=14;break e;case $r:o=16,r=null;break e}throw Error(q(130,n==null?n:typeof n,""))}return e=In(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function Zi(n,e,t,r){return n=In(7,n,r,e),n.lanes=t,n}function $d(n,e,t,r){return n=In(22,n,r,e),n.elementType=sE,n.lanes=t,n.stateNode={isHidden:!1},n}function _f(n,e,t){return n=In(6,n,null,e),n.lanes=t,n}function vf(n,e,t){return e=In(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function B1(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rg(n,e,t,r,i,s,o,a,u){return n=new B1(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Um(s),n}function z1(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function Y0(n){if(!n)return di;n=n._reactInternals;e:{if(Es(n)!==n||n.tag!==1)throw Error(q(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(n.tag===1){var t=n.type;if(on(t))return YE(n,t,e)}return e}function J0(n,e,t,r,i,s,o,a,u){return n=rg(t,r,!0,n,i,s,o,a,u),n.context=Y0(null),t=n.current,r=Wt(),i=si(t),s=yr(r,i),s.callback=e??null,ri(t,s,i),n.current.lanes=i,tu(n,i,r),an(n,r),n}function Wd(n,e,t,r){var i=e.current,s=Wt(),o=si(i);return t=Y0(t),e.context===null?e.context=t:e.pendingContext=t,e=yr(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=ri(i,e,o),n!==null&&(Ln(n,i,o,s),wc(n,i,o)),o}function ud(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $v(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ig(n,e){$v(n,e),(n=n.alternate)&&$v(n,e)}function $1(){return null}var X0=typeof reportError=="function"?reportError:function(n){console.error(n)};function sg(n){this._internalRoot=n}qd.prototype.render=sg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(q(409));Wd(n,e,null,null)};qd.prototype.unmount=sg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ls(function(){Wd(null,n,null,null)}),e[Ir]=null}};function qd(n){this._internalRoot=n}qd.prototype.unstable_scheduleHydration=function(n){if(n){var e=CE();n={blockedOn:null,target:n,priority:e};for(var t=0;t<qr.length&&e!==0&&e<qr[t].priority;t++);qr.splice(t,0,n),t===0&&bE(n)}};function og(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wv(){}function W1(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ud(o);s.call(c)}}var o=J0(e,r,n,0,null,!1,!1,"",Wv);return n._reactRootContainer=o,n[Ir]=o.current,Il(n.nodeType===8?n.parentNode:n),ls(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ud(u);a.call(c)}}var u=rg(n,0,!1,null,null,!1,!1,"",Wv);return n._reactRootContainer=u,n[Ir]=u.current,Il(n.nodeType===8?n.parentNode:n),ls(function(){Wd(e,u,t,r)}),u}function Kd(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ud(o);a.call(u)}}Wd(e,o,n,i)}else o=W1(t,e,n,i,r);return ud(o)}RE=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ua(e.pendingLanes);t!==0&&(Am(e,t|1),an(e,it()),!(Te&6)&&(xo=it()+500,Ai()))}break;case 13:ls(function(){var r=Er(n,1);if(r!==null){var i=Wt();Ln(r,n,1,i)}}),ig(n,1)}};xm=function(n){if(n.tag===13){var e=Er(n,134217728);if(e!==null){var t=Wt();Ln(e,n,134217728,t)}ig(n,134217728)}};PE=function(n){if(n.tag===13){var e=si(n),t=Er(n,e);if(t!==null){var r=Wt();Ln(t,n,e,r)}ig(n,e)}};CE=function(){return Pe};kE=function(n,e){var t=Pe;try{return Pe=n,e()}finally{Pe=t}};Jf=function(n,e,t){switch(e){case"input":if(Wf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=Fd(r);if(!i)throw Error(q(90));aE(r),Wf(r,i)}}}break;case"textarea":uE(n,t);break;case"select":e=t.value,e!=null&&so(n,!!t.multiple,e,!1)}};gE=Zm;yE=ls;var q1={usingClientEntryPoint:!1,Events:[ru,Js,Fd,pE,mE,Zm]},Ca={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G1={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wE(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Nd=ic.inject(G1),Jn=ic}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;yn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!og(e))throw Error(q(200));return z1(n,e,null,t)};yn.createRoot=function(n,e){if(!og(n))throw Error(q(299));var t=!1,r="",i=X0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rg(n,1,!1,null,null,t,!1,r,i),n[Ir]=e.current,Il(n.nodeType===8?n.parentNode:n),new sg(e)};yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(q(188)):(n=Object.keys(n).join(","),Error(q(268,n)));return n=wE(e),n=n===null?null:n.stateNode,n};yn.flushSync=function(n){return ls(n)};yn.hydrate=function(n,e,t){if(!Gd(e))throw Error(q(200));return Kd(null,n,e,!0,t)};yn.hydrateRoot=function(n,e,t){if(!og(n))throw Error(q(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=X0;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=J0(e,null,n,1,t??null,i,!1,s,o),n[Ir]=e.current,Il(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new qd(e)};yn.render=function(n,e,t){if(!Gd(e))throw Error(q(200));return Kd(null,n,e,!1,t)};yn.unmountComponentAtNode=function(n){if(!Gd(n))throw Error(q(40));return n._reactRootContainer?(ls(function(){Kd(null,null,n,!1,function(){n._reactRootContainer=null,n[Ir]=null})}),!0):!1};yn.unstable_batchedUpdates=Zm;yn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Gd(t))throw Error(q(200));if(n==null||n._reactInternals===void 0)throw Error(q(38));return Kd(n,e,t,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(n){console.error(n)}}Z0(),ZI.exports=yn;var K1=ZI.exports,qv=K1;Ff.createRoot=qv.createRoot,Ff.hydrateRoot=qv.hydrateRoot;const E={bg:"#F0EBE1",primary:"#182F24",accent:"#B5892A",accentL:"#F4EDD6",surface:"#FAFAF7",border:"#E2D9CE",text:"#161616",muted:"#7A7060",green:"#276749",red:"#A83228",blue:"#2E6BB8"},Ee={fontSize:10,fontWeight:700,color:E.muted,display:"block",textTransform:"uppercase",letterSpacing:1,marginBottom:5},Fe={width:"100%",padding:"10px 13px",border:`1.5px solid ${E.border}`,borderRadius:9,fontSize:14,color:E.text,boxSizing:"border-box",outline:"none",marginBottom:13,background:E.surface},ai={width:"100%",padding:"10px 13px",border:`1.5px solid ${E.border}`,borderRadius:9,fontSize:14,color:E.text,boxSizing:"border-box",outline:"none",marginBottom:13,background:E.surface},Sr={width:"100%",padding:"12px 0",borderRadius:10,border:"none",background:E.primary,color:"#fff",fontSize:15,fontWeight:600,cursor:"pointer",marginBottom:8},Qo={width:"100%",padding:"11px 0",borderRadius:10,border:`1.5px solid ${E.border}`,background:"transparent",color:E.text,fontSize:14,fontWeight:600,cursor:"pointer"},En={display:"inline-flex",alignItems:"center",padding:"2px 9px",borderRadius:20,fontSize:10,fontWeight:700},Ro=[{id:"c1",name:"Dad's Personal Bank",short:`Bank
(Dad)`,holder:"Dad"},{id:"c2",name:"Company Acc #1",short:`Co.
Acc #1`,holder:"Dad"},{id:"c3",name:"Cash in Hand (Dad)",short:`Cash
(Dad)`,holder:"Dad"},{id:"c4",name:"Company Acc #2",short:`Co.
Acc #2`,holder:"Brother"},{id:"c5",name:"Brother's Account",short:`Bro.
Acc`,holder:"Brother"}],kp=[{id:"c0",name:"Cash (General)",holder:"General"},{id:"c1",name:"Dad's Personal Bank",holder:"Dad"},{id:"c2",name:"Company Acc #1",holder:"Dad"},{id:"c3",name:"Cash in Hand (Dad)",holder:"Dad"},{id:"c4",name:"Company Acc #2",holder:"Brother"},{id:"c5",name:"Brother's Account",holder:"Brother"}],Gv=[...kp],Po=[{id:"Advance",label:"Advance",col:"#2E6BB8",bg:"#E6EFFA"},{id:"Partial",label:"Partial",col:"#B56010",bg:"#FAF0E2"},{id:"Final",label:"Final",col:"#276749",bg:"#E3F0E8"},{id:"Full",label:"Full Paid",col:"#276749",bg:"#E3F0E8"}],Os=["Raw Materials","Labor / Staff","Transport","Rentals","Miscellaneous"],eT=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Kv=[{id:"income",icon:"💰",label:"Income"},{id:"expenses",icon:"💸",label:"Expenses"},{id:"channels",icon:"🏦",label:"Channels"},{id:"summary",icon:"📊",label:"Summary"},{id:"cards",icon:"🃏",label:"Menu Cards"}],ne=n=>"₹"+Number(n||0).toLocaleString("en-IN"),ho=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6),_r=()=>{const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Hv=n=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,Tn=n=>{if(!n)return"";const[e,t,r]=n.split("-");return`${r} ${eT[+t-1]} ${e}`},H1=n=>{if(!n)return"";const[e,t]=n.split("-");return`${eT[+t-1]} ${e}`},Rc=n=>n&&n<_r(),bp=n=>Po.find(e=>e.id===n)||Po[0],es=n=>Gv.find(e=>e.id===n)||Gv[0];function Q1(n,e){const t=new FileReader;t.onload=r=>{const i=new Image;i.onload=()=>{const o=document.createElement("canvas");let a=i.width,u=i.height;a>600&&(u=u*600/a,a=600),u>600&&(a=a*600/u,u=600),o.width=a,o.height=u,o.getContext("2d").drawImage(i,0,0,a,u),e(o.toDataURL("image/jpeg",.5))},i.src=r.target.result},t.readAsDataURL(n)}function tT(n,e,t){const r=[...n.flatMap(s=>s.payments.map(o=>o.date)),...e.map(s=>s.date),...t.map(s=>s.date)].filter(Boolean);return[...new Set(r.map(s=>s.slice(0,7)))].sort().reverse().map(s=>{const o=[...n.flatMap(u=>u.payments.filter(c=>{var h;return(h=c.date)==null?void 0:h.startsWith(s)}).map(c=>c.amount)),...e.filter(u=>{var c;return(c=u.date)==null?void 0:c.startsWith(s)}).map(u=>u.amount)].reduce((u,c)=>u+c,0),a=t.filter(u=>{var c;return(c=u.date)==null?void 0:c.startsWith(s)}).reduce((u,c)=>u+c.amount,0);return{mo:s,label:H1(s),mIn:o,mOut:a,net:o-a}})}function Y1(){const[n,e]=ie.useState(window.innerWidth);return ie.useEffect(()=>{const t=()=>e(window.innerWidth);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),n>=1280?"desktop":n>=768?"tablet":"mobile"}var Qv={};/**
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
 */const nT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},J1=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,T=c&63;u||(T=64,o||(g=64)),r.push(t[h],t[f],t[g],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):J1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new X1;const g=s<<2|a>>4;if(r.push(g),c!==64){const T=a<<4&240|c>>2;if(r.push(T),f!==64){const P=c<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class X1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z1=function(n){const e=nT(n);return rT.encodeByteArray(e,!0)},cd=function(n){return Z1(n).replace(/\./g,"")},iT=function(n){try{return rT.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function dd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!eC(t)||(n[t]=dd(n[t],e[t]));return n}function eC(n){return n!=="__proto__"}/**
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
 */function sT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tC=()=>sT().__FIREBASE_DEFAULTS__,nC=()=>{if(typeof process>"u"||typeof Qv>"u")return;const n=Qv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&iT(n[1]);return e&&JSON.parse(e)},ag=()=>{try{return tC()||nC()||rC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oT=()=>{var n;return(n=ag())===null||n===void 0?void 0:n.config},iC=n=>{var e;return(e=ag())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class sC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function oC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cd(JSON.stringify(t)),cd(JSON.stringify(o)),""].join(".")}/**
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
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function lg(){var n;const e=(n=ag())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lC(){return typeof window<"u"||aT()}function aT(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function uC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uT(){const n=Qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cT(){return!lg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kl(){try{return typeof indexedDB=="object"}catch{return!1}}function cC(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const dC="FirebaseError";class qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=dC,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function hC(n,e){return n.replace(fC,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fC=/\{\$([^}]+)}/g;/**
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
 */function Yv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function pC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bl(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Jv(s)&&Jv(o)){if(!bl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Jv(n){return n!==null&&typeof n=="object"}/**
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
 */function Yo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function za(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dT(n,e){const t=new mC(n,e);return t.subscribe.bind(t)}class mC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gC(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=wf),i.error===void 0&&(i.error=wf),i.complete===void 0&&(i.complete=wf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wf(){}/**
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
 */function ue(n){return n&&n._delegate?n._delegate:n}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ji="[DEFAULT]";/**
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
 */class yC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vC(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_C(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _C(n){return n===ji?void 0:n}function vC(n){return n.instantiationMode==="EAGER"}/**
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
 */class hT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const cg=[];var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const fT={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},wC=pe.INFO,IC={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},EC=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=IC[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hd{constructor(e){this.name=e,this._logLevel=wC,this._logHandler=EC,this._userLogHandler=null,cg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function TC(n){cg.forEach(e=>{e.setLogLevel(n)})}function SC(n,e){for(const t of cg){let r=null;e&&e.level&&(r=fT[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:pe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const AC=(n,e)=>e.some(t=>n instanceof t);let Xv,Zv;function xC(){return Xv||(Xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RC(){return Zv||(Zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pT=new WeakMap,Dp=new WeakMap,mT=new WeakMap,If=new WeakMap,dg=new WeakMap;function PC(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(li(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pT.set(t,n)}).catch(()=>{}),dg.set(e,n),e}function CC(n){if(Dp.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Dp.set(n,e)}let Np={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Dp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return li(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kC(n){Np=n(Np)}function bC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ef(this),e,...t);return mT.set(r,e.sort?e.sort():[e]),li(r)}:RC().includes(n)?function(...e){return n.apply(Ef(this),e),li(pT.get(this))}:function(...e){return li(n.apply(Ef(this),e))}}function DC(n){return typeof n=="function"?bC(n):(n instanceof IDBTransaction&&CC(n),AC(n,xC())?new Proxy(n,Np):n)}function li(n){if(n instanceof IDBRequest)return PC(n);if(If.has(n))return If.get(n);const e=DC(n);return e!==n&&(If.set(n,e),dg.set(e,n)),e}const Ef=n=>dg.get(n);function NC(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=li(o);return r&&o.addEventListener("upgradeneeded",u=>{r(li(o.result),u.oldVersion,u.newVersion,li(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const VC=["get","getKey","getAll","getAllKeys","count"],OC=["put","add","delete","clear"],Tf=new Map;function ew(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Tf.get(e))return Tf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=OC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VC.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return Tf.set(e,s),s}kC(n=>({...n,get:(e,t,r)=>ew(e,t)||n.get(e,t,r),has:(e,t)=>!!ew(e,t)||n.has(e,t)}));/**
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
 */class LC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function FC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",Vp="0.10.13";/**
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
 */const Ar=new Hd("@firebase/app"),MC="@firebase/app-compat",jC="@firebase/analytics-compat",UC="@firebase/analytics",BC="@firebase/app-check-compat",zC="@firebase/app-check",$C="@firebase/auth",WC="@firebase/auth-compat",qC="@firebase/database",GC="@firebase/data-connect",KC="@firebase/database-compat",HC="@firebase/functions",QC="@firebase/functions-compat",YC="@firebase/installations",JC="@firebase/installations-compat",XC="@firebase/messaging",ZC="@firebase/messaging-compat",ek="@firebase/performance",tk="@firebase/performance-compat",nk="@firebase/remote-config",rk="@firebase/remote-config-compat",ik="@firebase/storage",sk="@firebase/storage-compat",ok="@firebase/firestore",ak="@firebase/vertexai-preview",lk="@firebase/firestore-compat",uk="firebase",ck="10.14.1";/**
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
 */const hi="[DEFAULT]",dk={[hd]:"fire-core",[MC]:"fire-core-compat",[UC]:"fire-analytics",[jC]:"fire-analytics-compat",[zC]:"fire-app-check",[BC]:"fire-app-check-compat",[$C]:"fire-auth",[WC]:"fire-auth-compat",[qC]:"fire-rtdb",[GC]:"fire-data-connect",[KC]:"fire-rtdb-compat",[HC]:"fire-fn",[QC]:"fire-fn-compat",[YC]:"fire-iid",[JC]:"fire-iid-compat",[XC]:"fire-fcm",[ZC]:"fire-fcm-compat",[ek]:"fire-perf",[tk]:"fire-perf-compat",[nk]:"fire-rc",[rk]:"fire-rc-compat",[ik]:"fire-gcs",[sk]:"fire-gcs-compat",[ok]:"fire-fst",[lk]:"fire-fst-compat",[ak]:"fire-vertex","fire-js":"fire-js",[uk]:"fire-js-all"};/**
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
 */const fi=new Map,Co=new Map,ko=new Map;function Dl(n,e){try{n.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gT(n,e){n.container.addOrOverwriteComponent(e)}function pi(n){const e=n.name;if(ko.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;ko.set(e,n);for(const t of fi.values())Dl(t,n);for(const t of Co.values())Dl(t,n);return!0}function yT(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function hk(n,e,t=hi){yT(n,e).clearInstance(t)}function _T(n){return n.options!==void 0}function Xe(n){return n.settings!==void 0}function fk(){ko.clear()}/**
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
 */const pk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xn=new Ts("app","Firebase",pk);/**
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
 */let vT=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}};/**
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
 */class mk extends vT{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Fn(hd,Vp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){fg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw xn.create("server-app-deleted")}}/**
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
 */const xi=ck;function hg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(t||(t=oT()),!t)throw xn.create("no-options");const s=fi.get(i);if(s){if(bl(t,s.options)&&bl(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new hT(i);for(const u of ko.values())o.addComponent(u);const a=new vT(t,r,o);return fi.set(i,a),a}function gk(n,e){if(lC()&&!aT())throw xn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;_T(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,f)=>Math.imul(31,h)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw xn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Co.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new hT(s);for(const c of ko.values())a.addComponent(c);const u=new mk(t,e,s,a);return Co.set(s,u),u}function yk(n=hi){const e=fi.get(n);if(!e&&n===hi&&oT())return hg();if(!e)throw xn.create("no-app",{appName:n});return e}function _k(){return Array.from(fi.values())}async function fg(n){let e=!1;const t=n.name;fi.has(t)?(e=!0,fi.delete(t)):Co.has(t)&&n.decRefCount()<=0&&(Co.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Fn(n,e,t){var r;let i=(r=dk[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}pi(new nr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function wT(n,e){if(n!==null&&typeof n!="function")throw xn.create("invalid-log-argument");SC(n,e)}function IT(n){TC(n)}/**
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
 */const vk="firebase-heartbeat-database",wk=1,Nl="firebase-heartbeat-store";let Sf=null;function ET(){return Sf||(Sf=NC(vk,wk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nl)}catch(t){console.warn(t)}}}}).catch(n=>{throw xn.create("idb-open",{originalErrorMessage:n.message})})),Sf}async function Ik(n){try{const t=(await ET()).transaction(Nl),r=await t.objectStore(Nl).get(TT(n));return await t.done,r}catch(e){if(e instanceof qt)Ar.warn(e.message);else{const t=xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(t.message)}}}async function tw(n,e){try{const r=(await ET()).transaction(Nl,"readwrite");await r.objectStore(Nl).put(e,TT(n)),await r.done}catch(t){if(t instanceof qt)Ar.warn(t.message);else{const r=xn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ar.warn(r.message)}}}function TT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ek=1024,Tk=30*24*60*60*1e3;class Sk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Tk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nw(),{heartbeatsToSend:r,unsentEntries:i}=Ak(this._heartbeatsCache.heartbeats),s=cd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ar.warn(t),""}}}function nw(){return new Date().toISOString().substring(0,10)}function Ak(n,e=Ek){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rw(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rw(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kl()?cC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ik(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rw(n){return cd(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Rk(n){pi(new nr("platform-logger",e=>new LC(e),"PRIVATE")),pi(new nr("heartbeat",e=>new Sk(e),"PRIVATE")),Fn(hd,Vp,n),Fn(hd,Vp,"esm2017"),Fn("fire-js","")}Rk("");const Pk=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:qt,SDK_VERSION:xi,_DEFAULT_ENTRY_NAME:hi,_addComponent:Dl,_addOrOverwriteComponent:gT,_apps:fi,_clearComponents:fk,_components:ko,_getProvider:yT,_isFirebaseApp:_T,_isFirebaseServerApp:Xe,_registerComponent:pi,_removeServiceInstance:hk,_serverApps:Co,deleteApp:fg,getApp:yk,getApps:_k,initializeApp:hg,initializeServerApp:gk,onLog:wT,registerVersion:Fn,setLogLevel:IT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Ck{constructor(e,t){this._delegate=e,this.firebase=t,Dl(e,new nr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),fg(this._delegate)))}_getService(e,t=hi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=hi){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Dl(this._delegate,e)}_addOrOverwriteComponent(e){gT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const kk={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},iw=new Ts("app-compat","Firebase",kk);/**
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
 */function bk(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Fn,setLogLevel:IT,onLog:wT,apps:null,SDK_VERSION:xi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:Pk}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||hi,!Yv(e,c))throw iw.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,h={}){const f=hg(c,h);if(Yv(e,f.name))return e[f.name];const g=new n(f,t);return e[f.name]=g,g}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,f=h.replace("-compat","");if(pi(c)&&c.type==="PUBLIC"){const g=(T=i())=>{if(typeof T[f]!="function")throw iw.create("invalid-app-argument",{appName:h});return T[f]()};c.serviceProps!==void 0&&dd(g,c.serviceProps),t[f]=g,n.prototype[f]=function(...T){return this._getService.bind(this,h).apply(this,c.multipleInstances?T:[])}}return c.type==="PUBLIC"?t[f]:null}function u(c,h){return h==="serverAuth"?null:h}return t}/**
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
 */function ST(){const n=bk(Ck);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:ST,extendNamespace:e,createSubscribe:dT,ErrorFactory:Ts,deepExtend:dd});function e(t){dd(n,t)}return n}const Dk=ST();/**
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
 */const sw=new Hd("@firebase/app-compat"),Nk="@firebase/app-compat",Vk="0.2.43";/**
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
 */function Ok(n){Fn(Nk,Vk,n)}/**
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
 */try{const n=sT();if(n.firebase!==void 0){sw.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&sw.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const dn=Dk;Ok();var Lk="firebase",Fk="10.14.1";/**
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
 */dn.registerVersion(Lk,Fk,"app-compat");var ow=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,AT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function I(){}I.prototype=y.prototype,_.D=y.prototype,_.prototype=new I,_.prototype.constructor=_,_.C=function(R,C,D){for(var x=Array(arguments.length-2),W=2;W<arguments.length;W++)x[W-2]=arguments[W];return y.prototype[C].apply(R,x)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,I){I||(I=0);var R=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)R[C]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(C=0;16>C;++C)R[C]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=_.g[0],I=_.g[1],C=_.g[2];var D=_.g[3],x=y+(D^I&(C^D))+R[0]+3614090360&4294967295;y=I+(x<<7&4294967295|x>>>25),x=D+(C^y&(I^C))+R[1]+3905402710&4294967295,D=y+(x<<12&4294967295|x>>>20),x=C+(I^D&(y^I))+R[2]+606105819&4294967295,C=D+(x<<17&4294967295|x>>>15),x=I+(y^C&(D^y))+R[3]+3250441966&4294967295,I=C+(x<<22&4294967295|x>>>10),x=y+(D^I&(C^D))+R[4]+4118548399&4294967295,y=I+(x<<7&4294967295|x>>>25),x=D+(C^y&(I^C))+R[5]+1200080426&4294967295,D=y+(x<<12&4294967295|x>>>20),x=C+(I^D&(y^I))+R[6]+2821735955&4294967295,C=D+(x<<17&4294967295|x>>>15),x=I+(y^C&(D^y))+R[7]+4249261313&4294967295,I=C+(x<<22&4294967295|x>>>10),x=y+(D^I&(C^D))+R[8]+1770035416&4294967295,y=I+(x<<7&4294967295|x>>>25),x=D+(C^y&(I^C))+R[9]+2336552879&4294967295,D=y+(x<<12&4294967295|x>>>20),x=C+(I^D&(y^I))+R[10]+4294925233&4294967295,C=D+(x<<17&4294967295|x>>>15),x=I+(y^C&(D^y))+R[11]+2304563134&4294967295,I=C+(x<<22&4294967295|x>>>10),x=y+(D^I&(C^D))+R[12]+1804603682&4294967295,y=I+(x<<7&4294967295|x>>>25),x=D+(C^y&(I^C))+R[13]+4254626195&4294967295,D=y+(x<<12&4294967295|x>>>20),x=C+(I^D&(y^I))+R[14]+2792965006&4294967295,C=D+(x<<17&4294967295|x>>>15),x=I+(y^C&(D^y))+R[15]+1236535329&4294967295,I=C+(x<<22&4294967295|x>>>10),x=y+(C^D&(I^C))+R[1]+4129170786&4294967295,y=I+(x<<5&4294967295|x>>>27),x=D+(I^C&(y^I))+R[6]+3225465664&4294967295,D=y+(x<<9&4294967295|x>>>23),x=C+(y^I&(D^y))+R[11]+643717713&4294967295,C=D+(x<<14&4294967295|x>>>18),x=I+(D^y&(C^D))+R[0]+3921069994&4294967295,I=C+(x<<20&4294967295|x>>>12),x=y+(C^D&(I^C))+R[5]+3593408605&4294967295,y=I+(x<<5&4294967295|x>>>27),x=D+(I^C&(y^I))+R[10]+38016083&4294967295,D=y+(x<<9&4294967295|x>>>23),x=C+(y^I&(D^y))+R[15]+3634488961&4294967295,C=D+(x<<14&4294967295|x>>>18),x=I+(D^y&(C^D))+R[4]+3889429448&4294967295,I=C+(x<<20&4294967295|x>>>12),x=y+(C^D&(I^C))+R[9]+568446438&4294967295,y=I+(x<<5&4294967295|x>>>27),x=D+(I^C&(y^I))+R[14]+3275163606&4294967295,D=y+(x<<9&4294967295|x>>>23),x=C+(y^I&(D^y))+R[3]+4107603335&4294967295,C=D+(x<<14&4294967295|x>>>18),x=I+(D^y&(C^D))+R[8]+1163531501&4294967295,I=C+(x<<20&4294967295|x>>>12),x=y+(C^D&(I^C))+R[13]+2850285829&4294967295,y=I+(x<<5&4294967295|x>>>27),x=D+(I^C&(y^I))+R[2]+4243563512&4294967295,D=y+(x<<9&4294967295|x>>>23),x=C+(y^I&(D^y))+R[7]+1735328473&4294967295,C=D+(x<<14&4294967295|x>>>18),x=I+(D^y&(C^D))+R[12]+2368359562&4294967295,I=C+(x<<20&4294967295|x>>>12),x=y+(I^C^D)+R[5]+4294588738&4294967295,y=I+(x<<4&4294967295|x>>>28),x=D+(y^I^C)+R[8]+2272392833&4294967295,D=y+(x<<11&4294967295|x>>>21),x=C+(D^y^I)+R[11]+1839030562&4294967295,C=D+(x<<16&4294967295|x>>>16),x=I+(C^D^y)+R[14]+4259657740&4294967295,I=C+(x<<23&4294967295|x>>>9),x=y+(I^C^D)+R[1]+2763975236&4294967295,y=I+(x<<4&4294967295|x>>>28),x=D+(y^I^C)+R[4]+1272893353&4294967295,D=y+(x<<11&4294967295|x>>>21),x=C+(D^y^I)+R[7]+4139469664&4294967295,C=D+(x<<16&4294967295|x>>>16),x=I+(C^D^y)+R[10]+3200236656&4294967295,I=C+(x<<23&4294967295|x>>>9),x=y+(I^C^D)+R[13]+681279174&4294967295,y=I+(x<<4&4294967295|x>>>28),x=D+(y^I^C)+R[0]+3936430074&4294967295,D=y+(x<<11&4294967295|x>>>21),x=C+(D^y^I)+R[3]+3572445317&4294967295,C=D+(x<<16&4294967295|x>>>16),x=I+(C^D^y)+R[6]+76029189&4294967295,I=C+(x<<23&4294967295|x>>>9),x=y+(I^C^D)+R[9]+3654602809&4294967295,y=I+(x<<4&4294967295|x>>>28),x=D+(y^I^C)+R[12]+3873151461&4294967295,D=y+(x<<11&4294967295|x>>>21),x=C+(D^y^I)+R[15]+530742520&4294967295,C=D+(x<<16&4294967295|x>>>16),x=I+(C^D^y)+R[2]+3299628645&4294967295,I=C+(x<<23&4294967295|x>>>9),x=y+(C^(I|~D))+R[0]+4096336452&4294967295,y=I+(x<<6&4294967295|x>>>26),x=D+(I^(y|~C))+R[7]+1126891415&4294967295,D=y+(x<<10&4294967295|x>>>22),x=C+(y^(D|~I))+R[14]+2878612391&4294967295,C=D+(x<<15&4294967295|x>>>17),x=I+(D^(C|~y))+R[5]+4237533241&4294967295,I=C+(x<<21&4294967295|x>>>11),x=y+(C^(I|~D))+R[12]+1700485571&4294967295,y=I+(x<<6&4294967295|x>>>26),x=D+(I^(y|~C))+R[3]+2399980690&4294967295,D=y+(x<<10&4294967295|x>>>22),x=C+(y^(D|~I))+R[10]+4293915773&4294967295,C=D+(x<<15&4294967295|x>>>17),x=I+(D^(C|~y))+R[1]+2240044497&4294967295,I=C+(x<<21&4294967295|x>>>11),x=y+(C^(I|~D))+R[8]+1873313359&4294967295,y=I+(x<<6&4294967295|x>>>26),x=D+(I^(y|~C))+R[15]+4264355552&4294967295,D=y+(x<<10&4294967295|x>>>22),x=C+(y^(D|~I))+R[6]+2734768916&4294967295,C=D+(x<<15&4294967295|x>>>17),x=I+(D^(C|~y))+R[13]+1309151649&4294967295,I=C+(x<<21&4294967295|x>>>11),x=y+(C^(I|~D))+R[4]+4149444226&4294967295,y=I+(x<<6&4294967295|x>>>26),x=D+(I^(y|~C))+R[11]+3174756917&4294967295,D=y+(x<<10&4294967295|x>>>22),x=C+(y^(D|~I))+R[2]+718787259&4294967295,C=D+(x<<15&4294967295|x>>>17),x=I+(D^(C|~y))+R[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(C+(x<<21&4294967295|x>>>11))&4294967295,_.g[2]=_.g[2]+C&4294967295,_.g[3]=_.g[3]+D&4294967295}r.prototype.u=function(_,y){y===void 0&&(y=_.length);for(var I=y-this.blockSize,R=this.B,C=this.h,D=0;D<y;){if(C==0)for(;D<=I;)i(this,_,D),D+=this.blockSize;if(typeof _=="string"){for(;D<y;)if(R[C++]=_.charCodeAt(D++),C==this.blockSize){i(this,R),C=0;break}}else for(;D<y;)if(R[C++]=_[D++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;var I=8*this.o;for(y=_.length-8;y<_.length;++y)_[y]=I&255,I/=256;for(this.u(_),_=Array(16),y=I=0;4>y;++y)for(var R=0;32>R;R+=8)_[I++]=this.g[y]>>>R&255;return _};function s(_,y){var I=a;return Object.prototype.hasOwnProperty.call(I,_)?I[_]:I[_]=y(_)}function o(_,y){this.h=y;for(var I=[],R=!0,C=_.length-1;0<=C;C--){var D=_[C]|0;R&&D==y||(I[C]=D,R=!1)}this.g=I}var a={};function u(_){return-128<=_&&128>_?s(_,function(y){return new o([y|0],0>y?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return f;if(0>_)return L(c(-_));for(var y=[],I=1,R=0;_>=I;R++)y[R]=_/I|0,I*=4294967296;return new o(y,0)}function h(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return L(h(_.substring(1),y));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),R=f,C=0;C<_.length;C+=8){var D=Math.min(8,_.length-C),x=parseInt(_.substring(C,C+D),y);8>D?(D=c(Math.pow(y,D)),R=R.j(D).add(c(x))):(R=R.j(I),R=R.add(c(x)))}return R}var f=u(0),g=u(1),T=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-L(this).m();for(var _=0,y=1,I=0;I<this.g.length;I++){var R=this.i(I);_+=(0<=R?R:4294967296+R)*y,y*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(k(this))return"-"+L(this).toString(_);for(var y=c(Math.pow(_,6)),I=this,R="";;){var C=N(I,y).g;I=S(I,C.j(y));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(_);if(I=C,P(I))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function k(_){return _.h==-1}n.l=function(_){return _=S(this,_),k(_)?-1:P(_)?0:1};function L(_){for(var y=_.g.length,I=[],R=0;R<y;R++)I[R]=~_.g[R];return new o(I,~_.h).add(g)}n.abs=function(){return k(this)?L(this):this},n.add=function(_){for(var y=Math.max(this.g.length,_.g.length),I=[],R=0,C=0;C<=y;C++){var D=R+(this.i(C)&65535)+(_.i(C)&65535),x=(D>>>16)+(this.i(C)>>>16)+(_.i(C)>>>16);R=x>>>16,D&=65535,x&=65535,I[C]=x<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(_,y){return _.add(L(y))}n.j=function(_){if(P(this)||P(_))return f;if(k(this))return k(_)?L(this).j(L(_)):L(L(this).j(_));if(k(_))return L(this.j(L(_)));if(0>this.l(T)&&0>_.l(T))return c(this.m()*_.m());for(var y=this.g.length+_.g.length,I=[],R=0;R<2*y;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(var C=0;C<_.g.length;C++){var D=this.i(R)>>>16,x=this.i(R)&65535,W=_.i(C)>>>16,oe=_.i(C)&65535;I[2*R+2*C]+=x*oe,w(I,2*R+2*C),I[2*R+2*C+1]+=D*oe,w(I,2*R+2*C+1),I[2*R+2*C+1]+=x*W,w(I,2*R+2*C+1),I[2*R+2*C+2]+=D*W,w(I,2*R+2*C+2)}for(R=0;R<y;R++)I[R]=I[2*R+1]<<16|I[2*R];for(R=y;R<2*y;R++)I[R]=0;return new o(I,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function A(_,y){this.g=_,this.h=y}function N(_,y){if(P(y))throw Error("division by zero");if(P(_))return new A(f,f);if(k(_))return y=N(L(_),y),new A(L(y.g),L(y.h));if(k(y))return y=N(_,L(y)),new A(L(y.g),y.h);if(30<_.g.length){if(k(_)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,R=y;0>=R.l(_);)I=U(I),R=U(R);var C=B(I,1),D=B(R,1);for(R=B(R,2),I=B(I,2);!P(R);){var x=D.add(R);0>=x.l(_)&&(C=C.add(I),D=x),R=B(R,1),I=B(I,1)}return y=S(_,C.j(y)),new A(C,y)}for(C=f;0<=_.l(y);){for(I=Math.max(1,Math.floor(_.m()/y.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=c(I),x=D.j(y);k(x)||0<x.l(_);)I-=R,D=c(I),x=D.j(y);P(D)&&(D=g),C=C.add(D),_=S(_,x)}return new A(C,_)}n.A=function(_){return N(this,_).h},n.and=function(_){for(var y=Math.max(this.g.length,_.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)&_.i(R);return new o(I,this.h&_.h)},n.or=function(_){for(var y=Math.max(this.g.length,_.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)|_.i(R);return new o(I,this.h|_.h)},n.xor=function(_){for(var y=Math.max(this.g.length,_.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)^_.i(R);return new o(I,this.h^_.h)};function U(_){for(var y=_.g.length+1,I=[],R=0;R<y;R++)I[R]=_.i(R)<<1|_.i(R-1)>>>31;return new o(I,_.h)}function B(_,y){var I=y>>5;y%=32;for(var R=_.g.length-I,C=[],D=0;D<R;D++)C[D]=0<y?_.i(D+I)>>>y|_.i(D+I+1)<<32-y:_.i(D+I);return new o(C,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,AT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ts=o}).apply(typeof ow<"u"?ow:typeof self<"u"?self:typeof window<"u"?window:{});var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xT,$a,RT,Pc,Op,PT,CT,kT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof sc=="object"&&sc];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var V=l[v];if(!(V in m))break e;m=m[V]}l=l[l.length-1],v=m[l],d=d(v),d!=v&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,v=!1,V={next:function(){if(!v&&m<l.length){var j=m++;return{value:d(j,l[j]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),l.apply(d,V)}}return function(){return l.apply(d,arguments)}}function g(l,d,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function T(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function P(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(v,V,j){for(var Q=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)Q[ke-2]=arguments[ke];return d.prototype[V].apply(v,Q)}}function k(l){const d=l.length;if(0<d){const m=Array(d);for(let v=0;v<d;v++)m[v]=l[v];return m}return[]}function L(l,d){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(u(v)){const V=l.length||0,j=v.length||0;l.length=V+j;for(let Q=0;Q<j;Q++)l[V+Q]=v[Q]}else l.push(v)}}class S{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var U=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function B(l,d,m){for(const v in l)d.call(m,l[v],v,l)}function _(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function y(l){const d={};for(const m in l)d[m]=l[m];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let m,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(m in v)l[m]=v[m];for(let j=0;j<I.length;j++)m=I[j],Object.prototype.hasOwnProperty.call(v,m)&&(l[m]=v[m])}}function C(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function D(l){a.setTimeout(()=>{throw l},0)}function x(){var l=H;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class W{constructor(){this.h=this.g=null}add(d,m){const v=oe.get();v.set(d,m),this.h?this.h.next=v:this.g=v,this.h=v}}var oe=new S(()=>new fe,l=>l.reset());class fe{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let be,M=!1,H=new W,b=()=>{const l=a.Promise.resolve(void 0);be=()=>{l.then(K)}};var K=()=>{for(var l;l=x();){try{l.h.call(l.g)}catch(m){D(m)}var d=oe;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}M=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function Z(l,d){if(X.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(U){e:{try{N(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ae[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Z.aa.h.call(this)}}P(Z,X);var ae={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),we=0;function xe(l,d,m,v,V){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!v,this.ha=V,this.key=++we,this.da=this.fa=!1}function lt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function De(l){this.src=l,this.g={},this.h=0}De.prototype.add=function(l,d,m,v,V){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var Q=_e(l,d,v,V);return-1<Q?(d=l[Q],m||(d.fa=!1)):(d=new xe(d,this.src,j,!!v,V),d.fa=m,l.push(d)),d};function ut(l,d){var m=d.type;if(m in l.g){var v=l.g[m],V=Array.prototype.indexOf.call(v,d,void 0),j;(j=0<=V)&&Array.prototype.splice.call(v,V,1),j&&(lt(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function _e(l,d,m,v){for(var V=0;V<l.length;++V){var j=l[V];if(!j.da&&j.listener==d&&j.capture==!!m&&j.ha==v)return V}return-1}var rt="closure_lm_"+(1e6*Math.random()|0),la={};function Au(l,d,m,v,V){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Au(l,d[j],m,v,V);return null}return m=By(m),l&&l[de]?l.K(d,m,c(v)?!!v.capture:!1,V):Kx(l,d,m,!1,v,V)}function Kx(l,d,m,v,V,j){if(!d)throw Error("Invalid event type");var Q=c(V)?!!V.capture:!!V,ke=Ch(l);if(ke||(l[rt]=ke=new De(l)),m=ke.add(d,m,v,Q,j),m.proxy)return m;if(v=Hx(),m.proxy=v,v.src=l,v.listener=m,l.addEventListener)ve||(V=Q),V===void 0&&(V=!1),l.addEventListener(d.toString(),v,V);else if(l.attachEvent)l.attachEvent(Uy(d.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Hx(){function l(m){return d.call(l.src,l.listener,m)}const d=Qx;return l}function jy(l,d,m,v,V){if(Array.isArray(d))for(var j=0;j<d.length;j++)jy(l,d[j],m,v,V);else v=c(v)?!!v.capture:!!v,m=By(m),l&&l[de]?(l=l.i,d=String(d).toString(),d in l.g&&(j=l.g[d],m=_e(j,m,v,V),-1<m&&(lt(j[m]),Array.prototype.splice.call(j,m,1),j.length==0&&(delete l.g[d],l.h--)))):l&&(l=Ch(l))&&(d=l.g[d.toString()],l=-1,d&&(l=_e(d,m,v,V)),(m=-1<l?d[l]:null)&&Ph(m))}function Ph(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[de])ut(d.i,l);else{var m=l.type,v=l.proxy;d.removeEventListener?d.removeEventListener(m,v,l.capture):d.detachEvent?d.detachEvent(Uy(m),v):d.addListener&&d.removeListener&&d.removeListener(v),(m=Ch(d))?(ut(m,l),m.h==0&&(m.src=null,d[rt]=null)):lt(l)}}}function Uy(l){return l in la?la[l]:la[l]="on"+l}function Qx(l,d){if(l.da)l=!0;else{d=new Z(d,this);var m=l.listener,v=l.ha||l.src;l.fa&&Ph(l),l=m.call(v,d)}return l}function Ch(l){return l=l[rt],l instanceof De?l:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function By(l){return typeof l=="function"?l:(l[kh]||(l[kh]=function(d){return l.handleEvent(d)}),l[kh])}function kt(){le.call(this),this.i=new De(this),this.M=this,this.F=null}P(kt,le),kt.prototype[de]=!0,kt.prototype.removeEventListener=function(l,d,m,v){jy(this,l,d,m,v)};function jt(l,d){var m,v=l.F;if(v)for(m=[];v;v=v.F)m.push(v);if(l=l.M,v=d.type||d,typeof d=="string")d=new X(d,l);else if(d instanceof X)d.target=d.target||l;else{var V=d;d=new X(v,l),R(d,V)}if(V=!0,m)for(var j=m.length-1;0<=j;j--){var Q=d.g=m[j];V=xu(Q,v,!0,d)&&V}if(Q=d.g=l,V=xu(Q,v,!0,d)&&V,V=xu(Q,v,!1,d)&&V,m)for(j=0;j<m.length;j++)Q=d.g=m[j],V=xu(Q,v,!1,d)&&V}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],v=0;v<m.length;v++)lt(m[v]);delete l.g[d],l.h--}}this.F=null},kt.prototype.K=function(l,d,m,v){return this.i.add(String(l),d,!1,m,v)},kt.prototype.L=function(l,d,m,v){return this.i.add(String(l),d,!0,m,v)};function xu(l,d,m,v){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,j=0;j<d.length;++j){var Q=d[j];if(Q&&!Q.da&&Q.capture==m){var ke=Q.listener,Et=Q.ha||Q.src;Q.fa&&ut(l.i,Q),V=ke.call(Et,v)!==!1&&V}}return V&&!v.defaultPrevented}function zy(l,d,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function $y(l){l.g=zy(()=>{l.g=null,l.i&&(l.i=!1,$y(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Yx extends le{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:$y(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(l){le.call(this),this.h=l,this.g={}}P(ua,le);var Wy=[];function qy(l){B(l.g,function(d,m){this.g.hasOwnProperty(m)&&Ph(d)},l),l.g={}}ua.prototype.N=function(){ua.aa.N.call(this),qy(this)},ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bh=a.JSON.stringify,Jx=a.JSON.parse,Xx=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Dh(){}Dh.prototype.h=null;function Gy(l){return l.h||(l.h=l.i())}function Ky(){}var ca={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nh(){X.call(this,"d")}P(Nh,X);function Vh(){X.call(this,"c")}P(Vh,X);var Di={},Hy=null;function Ru(){return Hy=Hy||new kt}Di.La="serverreachability";function Qy(l){X.call(this,Di.La,l)}P(Qy,X);function da(l){const d=Ru();jt(d,new Qy(d))}Di.STAT_EVENT="statevent";function Yy(l,d){X.call(this,Di.STAT_EVENT,l),this.stat=d}P(Yy,X);function Ut(l){const d=Ru();jt(d,new Yy(d,l))}Di.Ma="timingevent";function Jy(l,d){X.call(this,Di.Ma,l),this.size=d}P(Jy,X);function ha(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function fa(){this.g=!0}fa.prototype.xa=function(){this.g=!1};function Zx(l,d,m,v,V,j){l.info(function(){if(l.g)if(j)for(var Q="",ke=j.split("&"),Et=0;Et<ke.length;Et++){var Se=ke[Et].split("=");if(1<Se.length){var bt=Se[0];Se=Se[1];var Dt=bt.split("_");Q=2<=Dt.length&&Dt[1]=="type"?Q+(bt+"="+Se+"&"):Q+(bt+"=redacted&")}}else Q=null;else Q=j;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+d+`
`+m+`
`+Q})}function eR(l,d,m,v,V,j,Q){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+d+`
`+m+`
`+j+" "+Q})}function ks(l,d,m,v){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+nR(l,m)+(v?" "+v:"")})}function tR(l,d){l.info(function(){return"TIMEOUT: "+d})}fa.prototype.info=function(){};function nR(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var v=m[l];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var j=V[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Q=1;Q<V.length;Q++)V[Q]=""}}}}return bh(m)}catch{return d}}var Pu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oh;function Cu(){}P(Cu,Dh),Cu.prototype.g=function(){return new XMLHttpRequest},Cu.prototype.i=function(){return{}},Oh=new Cu;function Or(l,d,m,v){this.j=l,this.i=d,this.l=m,this.R=v||1,this.U=new ua(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zy}function Zy(){this.i=null,this.g="",this.h=!1}var e_={},Lh={};function Fh(l,d,m){l.L=1,l.v=Nu(ar(d)),l.m=m,l.P=!0,t_(l,null)}function t_(l,d){l.F=Date.now(),ku(l),l.A=ar(l.v);var m=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),m_(m.i,"t",v),l.C=0,m=l.j.J,l.h=new Zy,l.g=N_(l.j,m?d:null,!l.m),0<l.O&&(l.M=new Yx(g(l.Y,l,l.g),l.O)),d=l.U,m=l.g,v=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(Wy[0]=V.toString()),V=Wy);for(var j=0;j<V.length;j++){var Q=Au(m,V[j],v||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),da(),Zx(l.i,l.u,l.A,l.l,l.R,l.m)}Or.prototype.ca=function(l){l=l.target;const d=this.M;d&&lr(l)==3?d.j():this.Y(l)},Or.prototype.Y=function(l){try{if(l==this.g)e:{const Dt=lr(this.g);var d=this.g.Ba();const Ns=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||E_(this.g)))){this.J||Dt!=4||d==7||(d==8||0>=Ns?da(3):da(2)),Mh(this);var m=this.g.Z();this.X=m;t:if(n_(this)){var v=E_(this.g);l="";var V=v.length,j=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ni(this),pa(this);var Q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,l+=this.h.i.decode(v[d],{stream:!(j&&d==V-1)});v.length=0,this.h.g+=l,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,eR(this.i,this.u,this.A,this.l,this.R,Dt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Et=this.g;if((ke=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ke)){var Se=ke;break t}}Se=null}if(m=Se)ks(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jh(this,m);else{this.o=!1,this.s=3,Ut(12),Ni(this),pa(this);break e}}if(this.P){m=!0;let kn;for(;!this.J&&this.C<Q.length;)if(kn=rR(this,Q),kn==Lh){Dt==4&&(this.s=4,Ut(14),m=!1),ks(this.i,this.l,null,"[Incomplete Response]");break}else if(kn==e_){this.s=4,Ut(15),ks(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else ks(this.i,this.l,kn,null),jh(this,kn);if(n_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||Q.length!=0||this.h.h||(this.s=1,Ut(16),m=!1),this.o=this.o&&m,!m)ks(this.i,this.l,Q,"[Invalid Chunked Response]"),Ni(this),pa(this);else if(0<Q.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),qh(bt),bt.M=!0,Ut(11))}}else ks(this.i,this.l,Q,null),jh(this,Q);Dt==4&&Ni(this),this.o&&!this.J&&(Dt==4?C_(this.j,this):(this.o=!1,ku(this)))}else wR(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),Ni(this),pa(this)}}}catch{}finally{}};function n_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function rR(l,d){var m=l.C,v=d.indexOf(`
`,m);return v==-1?Lh:(m=Number(d.substring(m,v)),isNaN(m)?e_:(v+=1,v+m>d.length?Lh:(d=d.slice(v,v+m),l.C=v+m,d)))}Or.prototype.cancel=function(){this.J=!0,Ni(this)};function ku(l){l.S=Date.now()+l.I,r_(l,l.I)}function r_(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ha(g(l.ba,l),d)}function Mh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Or.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(tR(this.i,this.A),this.L!=2&&(da(),Ut(17)),Ni(this),this.s=2,pa(this)):r_(this,this.S-l)};function pa(l){l.j.G==0||l.J||C_(l.j,l)}function Ni(l){Mh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,qy(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function jh(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||Uh(m.h,l))){if(!l.K&&Uh(m.h,l)&&m.G==3){try{var v=m.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)ju(m),Fu(m);else break e;Wh(m),Ut(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=ha(g(m.Za,m),6e3));if(1>=o_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Oi(m,11)}else if((l.K||m.g==l)&&ju(m),!w(d))for(V=m.Da.g.parse(d),d=0;d<V.length;d++){let Se=V[d];if(m.T=Se[0],Se=Se[1],m.G==2)if(Se[0]=="c"){m.K=Se[1],m.ia=Se[2];const bt=Se[3];bt!=null&&(m.la=bt,m.j.info("VER="+m.la));const Dt=Se[4];Dt!=null&&(m.Aa=Dt,m.j.info("SVER="+m.Aa));const Ns=Se[5];Ns!=null&&typeof Ns=="number"&&0<Ns&&(v=1.5*Ns,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const kn=l.g;if(kn){const Bu=kn.g?kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bu){var j=v.h;j.g||Bu.indexOf("spdy")==-1&&Bu.indexOf("quic")==-1&&Bu.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Bh(j,j.h),j.h=null))}if(v.D){const Gh=kn.g?kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Gh&&(v.ya=Gh,Oe(v.I,v.D,Gh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var Q=l;if(v.qa=D_(v,v.J?v.ia:null,v.W),Q.K){a_(v.h,Q);var ke=Q,Et=v.L;Et&&(ke.I=Et),ke.B&&(Mh(ke),ku(ke)),v.g=Q}else R_(v);0<m.i.length&&Mu(m)}else Se[0]!="stop"&&Se[0]!="close"||Oi(m,7);else m.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Oi(m,7):$h(m):Se[0]!="noop"&&m.l&&m.l.ta(Se),m.v=0)}}da(4)}catch{}}var iR=class{constructor(l,d){this.g=l,this.map=d}};function i_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function s_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function o_(l){return l.h?1:l.g?l.g.size:0}function Uh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Bh(l,d){l.g?l.g.add(d):l.h=d}function a_(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}i_.prototype.cancel=function(){if(this.i=l_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function l_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return k(l.i)}function sR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,v=0;v<m;v++)d.push(l[v]);return d}d=[],m=0;for(v in l)d[m++]=l[v];return d}function oR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const v in l)d[m++]=v;return d}}}function u_(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=oR(l),v=sR(l),V=v.length,j=0;j<V;j++)d.call(void 0,v[j],m&&m[j],l)}var c_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aR(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var v=l[m].indexOf("="),V=null;if(0<=v){var j=l[m].substring(0,v);V=l[m].substring(v+1)}else j=l[m];d(j,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Vi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Vi){this.h=l.h,bu(this,l.j),this.o=l.o,this.g=l.g,Du(this,l.s),this.l=l.l;var d=l.i,m=new ya;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),d_(this,m),this.m=l.m}else l&&(d=String(l).match(c_))?(this.h=!1,bu(this,d[1]||"",!0),this.o=ma(d[2]||""),this.g=ma(d[3]||"",!0),Du(this,d[4]),this.l=ma(d[5]||"",!0),d_(this,d[6]||"",!0),this.m=ma(d[7]||"")):(this.h=!1,this.i=new ya(null,this.h))}Vi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(ga(d,h_,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(ga(d,h_,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(ga(m,m.charAt(0)=="/"?cR:uR,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",ga(m,hR)),l.join("")};function ar(l){return new Vi(l)}function bu(l,d,m){l.j=m?ma(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Du(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function d_(l,d,m){d instanceof ya?(l.i=d,fR(l.i,l.h)):(m||(d=ga(d,dR)),l.i=new ya(d,l.h))}function Oe(l,d,m){l.i.set(d,m)}function Nu(l){return Oe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ma(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ga(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,lR),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function lR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var h_=/[#\/\?@]/g,uR=/[#\?:]/g,cR=/[#\?]/g,dR=/[#\?@]/g,hR=/#/g;function ya(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Lr(l){l.g||(l.g=new Map,l.h=0,l.i&&aR(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}n=ya.prototype,n.add=function(l,d){Lr(this),this.i=null,l=bs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function f_(l,d){Lr(l),d=bs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function p_(l,d){return Lr(l),d=bs(l,d),l.g.has(d)}n.forEach=function(l,d){Lr(this),this.g.forEach(function(m,v){m.forEach(function(V){l.call(d,V,v,this)},this)},this)},n.na=function(){Lr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let v=0;v<d.length;v++){const V=l[v];for(let j=0;j<V.length;j++)m.push(d[v])}return m},n.V=function(l){Lr(this);let d=[];if(typeof l=="string")p_(this,l)&&(d=d.concat(this.g.get(bs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},n.set=function(l,d){return Lr(this),this.i=null,l=bs(this,l),p_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function m_(l,d,m){f_(l,d),0<m.length&&(l.i=null,l.g.set(bs(l,d),k(m)),l.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var v=d[m];const j=encodeURIComponent(String(v)),Q=this.V(v);for(v=0;v<Q.length;v++){var V=j;Q[v]!==""&&(V+="="+encodeURIComponent(String(Q[v]))),l.push(V)}}return this.i=l.join("&")};function bs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function fR(l,d){d&&!l.j&&(Lr(l),l.i=null,l.g.forEach(function(m,v){var V=v.toLowerCase();v!=V&&(f_(this,v),m_(this,V,m))},l)),l.j=d}function pR(l,d){const m=new fa;if(a.Image){const v=new Image;v.onload=T(Fr,m,"TestLoadImage: loaded",!0,d,v),v.onerror=T(Fr,m,"TestLoadImage: error",!1,d,v),v.onabort=T(Fr,m,"TestLoadImage: abort",!1,d,v),v.ontimeout=T(Fr,m,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else d(!1)}function mR(l,d){const m=new fa,v=new AbortController,V=setTimeout(()=>{v.abort(),Fr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:v.signal}).then(j=>{clearTimeout(V),j.ok?Fr(m,"TestPingServer: ok",!0,d):Fr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),Fr(m,"TestPingServer: error",!1,d)})}function Fr(l,d,m,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(m)}catch{}}function gR(){this.g=new Xx}function yR(l,d,m){const v=m||"";try{u_(l,function(V,j){let Q=V;c(V)&&(Q=bh(V)),d.push(v+j+"="+encodeURIComponent(Q))})}catch(V){throw d.push(v+"type="+encodeURIComponent("_badmap")),V}}function Vu(l){this.l=l.Ub||null,this.j=l.eb||!1}P(Vu,Dh),Vu.prototype.g=function(){return new Ou(this.l,this.j)},Vu.prototype.i=function(l){return function(){return l}}({});function Ou(l,d){kt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ou,kt),n=Ou.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,va(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_a(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;g_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function g_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?_a(this):va(this),this.readyState==3&&g_(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,_a(this))},n.Qa=function(l){this.g&&(this.response=l,_a(this))},n.ga=function(){this.g&&_a(this)};function _a(l){l.readyState=4,l.l=null,l.j=null,l.v=null,va(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function va(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ou.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function y_(l){let d="";return B(l,function(m,v){d+=v,d+=":",d+=m,d+=`\r
`}),d}function zh(l,d,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=y_(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Oe(l,d,m))}function Ye(l){kt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ye,kt);var _R=/^https?$/i,vR=["POST","PUT"];n=Ye.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oh.g(),this.v=this.o?Gy(this.o):Gy(Oh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(j){__(this,j);return}if(l=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)m.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())m.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(vR,d,void 0))||v||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Q]of m)this.g.setRequestHeader(j,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{I_(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){__(this,j)}};function __(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,v_(l),Lu(l)}function v_(l){l.A||(l.A=!0,jt(l,"complete"),jt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,jt(this,"complete"),jt(this,"abort"),Lu(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lu(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?w_(this):this.bb())},n.bb=function(){w_(this)};function w_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||lr(l)!=4||l.Z()!=2)){if(l.u&&lr(l)==4)zy(l.Ea,0,l);else if(jt(l,"readystatechange"),lr(l)==4){l.h=!1;try{const Q=l.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var v;if(v=Q===0){var V=String(l.D).match(c_)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),v=!_R.test(V?V.toLowerCase():"")}m=v}if(m)jt(l,"complete"),jt(l,"success");else{l.m=6;try{var j=2<lr(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",v_(l)}}finally{Lu(l)}}}}function Lu(l,d){if(l.g){I_(l);const m=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||jt(l,"ready");try{m.onreadystatechange=v}catch{}}}function I_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function lr(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Jx(d)}};function E_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function wR(l){const d={};l=(l.g&&2<=lr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(w(l[v]))continue;var m=C(l[v]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=d[V]||[];d[V]=j,j.push(m)}_(d,function(v){return v.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wa(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function T_(l){this.Aa=0,this.i=[],this.j=new fa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wa("baseRetryDelayMs",5e3,l),this.cb=wa("retryDelaySeedMs",1e4,l),this.Wa=wa("forwardChannelMaxRetries",2,l),this.wa=wa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new i_(l&&l.concurrentRequestLimit),this.Da=new gR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=T_.prototype,n.la=8,n.G=1,n.connect=function(l,d,m,v){Ut(0),this.W=l,this.H=d||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=D_(this,null,this.W),Mu(this)};function $h(l){if(S_(l),l.G==3){var d=l.U++,m=ar(l.I);if(Oe(m,"SID",l.K),Oe(m,"RID",d),Oe(m,"TYPE","terminate"),Ia(l,m),d=new Or(l,l.j,d),d.L=2,d.v=Nu(ar(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=N_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ku(d)}b_(l)}function Fu(l){l.g&&(qh(l),l.g.cancel(),l.g=null)}function S_(l){Fu(l),l.u&&(a.clearTimeout(l.u),l.u=null),ju(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Mu(l){if(!s_(l.h)&&!l.s){l.s=!0;var d=l.Ga;be||b(),M||(be(),M=!0),H.add(d,l),l.B=0}}function IR(l,d){return o_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ha(g(l.Ga,l,d),k_(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new Or(this,this.j,l);let j=this.o;if(this.S&&(j?(j=y(j),R(j,this.S)):j=this.S),this.m!==null||this.O||(V.H=j,j=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=x_(this,V,d),m=ar(this.I),Oe(m,"RID",l),Oe(m,"CVER",22),this.D&&Oe(m,"X-HTTP-Session-Id",this.D),Ia(this,m),j&&(this.O?d="headers="+encodeURIComponent(String(y_(j)))+"&"+d:this.m&&zh(m,this.m,j)),Bh(this.h,V),this.Ua&&Oe(m,"TYPE","init"),this.P?(Oe(m,"$req",d),Oe(m,"SID","null"),V.T=!0,Fh(V,m,null)):Fh(V,m,d),this.G=2}}else this.G==3&&(l?A_(this,l):this.i.length==0||s_(this.h)||A_(this))};function A_(l,d){var m;d?m=d.l:m=l.U++;const v=ar(l.I);Oe(v,"SID",l.K),Oe(v,"RID",m),Oe(v,"AID",l.T),Ia(l,v),l.m&&l.o&&zh(v,l.m,l.o),m=new Or(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=x_(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Bh(l.h,m),Fh(m,v,d)}function Ia(l,d){l.H&&B(l.H,function(m,v){Oe(d,v,m)}),l.l&&u_({},function(m,v){Oe(d,v,m)})}function x_(l,d,m){m=Math.min(l.i.length,m);var v=l.l?g(l.l.Na,l.l,l):null;e:{var V=l.i;let j=-1;for(;;){const Q=["count="+m];j==-1?0<m?(j=V[0].g,Q.push("ofs="+j)):j=0:Q.push("ofs="+j);let ke=!0;for(let Et=0;Et<m;Et++){let Se=V[Et].g;const bt=V[Et].map;if(Se-=j,0>Se)j=Math.max(0,V[Et].g-100),ke=!1;else try{yR(bt,Q,"req"+Se+"_")}catch{v&&v(bt)}}if(ke){v=Q.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,v}function R_(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;be||b(),M||(be(),M=!0),H.add(d,l),l.v=0}}function Wh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ha(g(l.Fa,l),k_(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,P_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ha(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),Fu(this),P_(this))};function qh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function P_(l){l.g=new Or(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=ar(l.qa);Oe(d,"RID","rpc"),Oe(d,"SID",l.K),Oe(d,"AID",l.T),Oe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Oe(d,"TO",l.ja),Oe(d,"TYPE","xmlhttp"),Ia(l,d),l.m&&l.o&&zh(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Nu(ar(d)),m.m=null,m.P=!0,t_(m,l)}n.Za=function(){this.C!=null&&(this.C=null,Fu(this),Wh(this),Ut(19))};function ju(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function C_(l,d){var m=null;if(l.g==d){ju(l),qh(l),l.g=null;var v=2}else if(Uh(l.h,d))m=d.D,a_(l.h,d),v=1;else return;if(l.G!=0){if(d.o)if(v==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var V=l.B;v=Ru(),jt(v,new Jy(v,m)),Mu(l)}else R_(l);else if(V=d.s,V==3||V==0&&0<d.X||!(v==1&&IR(l,d)||v==2&&Wh(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),V){case 1:Oi(l,5);break;case 4:Oi(l,10);break;case 3:Oi(l,6);break;default:Oi(l,2)}}}function k_(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Oi(l,d){if(l.j.info("Error code "+d),d==2){var m=g(l.fb,l),v=l.Xa;const V=!v;v=new Vi(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bu(v,"https"),Nu(v),V?pR(v.toString(),m):mR(v.toString(),m)}else Ut(2);l.G=0,l.l&&l.l.sa(d),b_(l),S_(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function b_(l){if(l.G=0,l.ka=[],l.l){const d=l_(l.h);(d.length!=0||l.i.length!=0)&&(L(l.ka,d),L(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function D_(l,d,m){var v=m instanceof Vi?ar(m):new Vi(m);if(v.g!="")d&&(v.g=d+"."+v.g),Du(v,v.s);else{var V=a.location;v=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var j=new Vi(null);v&&bu(j,v),d&&(j.g=d),V&&Du(j,V),m&&(j.l=m),v=j}return m=l.D,d=l.ya,m&&d&&Oe(v,m,d),Oe(v,"VER",l.la),Ia(l,v),v}function N_(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ye(new Vu({eb:m})):new Ye(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function V_(){}n=V_.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Uu(){}Uu.prototype.g=function(l,d){return new ln(l,d)};function ln(l,d){kt.call(this),this.g=new T_(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ds(this)}P(ln,kt),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){$h(this.g)},ln.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=bh(l),l=m);d.i.push(new iR(d.Ya++,l)),d.G==3&&Mu(d)},ln.prototype.N=function(){this.g.l=null,delete this.j,$h(this.g),delete this.g,ln.aa.N.call(this)};function O_(l){Nh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}P(O_,Nh);function L_(){Vh.call(this),this.status=1}P(L_,Vh);function Ds(l){this.g=l}P(Ds,V_),Ds.prototype.ua=function(){jt(this.g,"a")},Ds.prototype.ta=function(l){jt(this.g,new O_(l))},Ds.prototype.sa=function(l){jt(this.g,new L_)},Ds.prototype.ra=function(){jt(this.g,"b")},Uu.prototype.createWebChannel=Uu.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,kT=function(){return new Uu},CT=function(){return Ru()},PT=Di,Op={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pu.NO_ERROR=0,Pu.TIMEOUT=8,Pu.HTTP_ERROR=6,Pc=Pu,Xy.COMPLETE="complete",RT=Xy,Ky.EventType=ca,ca.OPEN="a",ca.CLOSE="b",ca.ERROR="c",ca.MESSAGE="d",kt.prototype.listen=kt.prototype.K,$a=Ky,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,xT=Ye}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});const aw="@firebase/firestore";/**
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
 */let vt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Jo="10.14.0";/**
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
 */const mi=new Hd("@firebase/firestore");function Bs(){return mi.logLevel}function Mk(n){mi.setLogLevel(n)}function $(n,...e){if(mi.logLevel<=pe.DEBUG){const t=e.map(pg);mi.debug(`Firestore (${Jo}): ${n}`,...t)}}function st(n,...e){if(mi.logLevel<=pe.ERROR){const t=e.map(pg);mi.error(`Firestore (${Jo}): ${n}`,...t)}}function rr(n,...e){if(mi.logLevel<=pe.WARN){const t=e.map(pg);mi.warn(`Firestore (${Jo}): ${n}`,...t)}}function pg(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ee(n="Unexpected state"){const e=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: `+n;throw st(e),new Error(e)}function re(n,e){n||ee()}function jk(n,e){n||ee()}function J(n,e){return n}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class bT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(vt.UNAUTHENTICATED))}shutdown(){}}class Bk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class zk{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new bT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new vt(e)}}class $k{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wk{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new $k(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){re(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string"),this.R=t.token,new qk(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Kk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class DT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Kk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function bo(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function NT(n){return n+"\0"}/**
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
 */class We{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new We(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new We(0,0))}static max(){return new se(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vl{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(),r===void 0?r=e.length-t:r>e.length-t&&ee(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Vl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vl?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ge extends Vl{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const Hk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Vl{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return Hk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ge.fromString(e))}static fromName(e){return new Y(ge.fromString(e).popFirst(5))}static empty(){return new Y(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ge(e.slice()))}}/**
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
 */class fd{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Lp(n){return n.fields.find(e=>e.kind===2)}function Ui(n){return n.fields.filter(e=>e.kind!==2)}fd.UNKNOWN_ID=-1;class Cc{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ol{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ol(0,gn.min())}}function VT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new We(t+1,0):new We(t,r));return new gn(i,Y.empty(),e)}function OT(n){return new gn(n.readTime,n.key,-1)}class gn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new gn(se.min(),Y.empty(),-1)}static max(){return new gn(se.max(),Y.empty(),-1)}}function mg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const LT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ri(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==LT)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(i=>i?O.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,t){return new O((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Qd{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new il(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=gg(r.target.error);this.V.reject(new il(e,i))}}static open(e,t,r,i){try{return new Qd(t,e.transaction(i,r))}catch(s){throw new il(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||($("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Yk(t)}}class Zn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Zn.S(Qe())===12.2&&st("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return $("SimpleDb","Removing database:",e),Bi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!kl())return!1;if(Zn.v())return!0;const e=Qe(),t=Zn.S(e),r=0<t&&t<10,i=MT(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||($("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new il(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new z(F.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(F.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new il(e,o))},i.onupgradeneeded=s=>{$("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{$("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Qd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if($("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function MT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Qk{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Bi(this.B.delete())}}class il extends z{constructor(e,t){super(F.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Pi(n){return n.name==="IndexedDbTransactionError"}class Yk{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?($("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):($("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Bi(r)}add(e){return $("SimpleDb","ADD",this.store.name,e,e),Bi(this.store.add(e))}get(e){return Bi(this.store.get(e)).next(t=>(t===void 0&&(t=null),$("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return $("SimpleDb","DELETE",this.store.name,e),Bi(this.store.delete(e))}count(){return $("SimpleDb","COUNT",this.store.name),Bi(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){$("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new O((r,i)=>{t.onerror=s=>{const o=gg(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new Qk(a),c=t(a.primaryKey,a.value,u);if(c instanceof O){const h=c.catch(f=>(u.done(),O.reject(f)));r.push(h)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>O.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Bi(n){return new O((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=gg(r.target.error);t(i)}})}let lw=!1;function gg(n){const e=Zn.S(Qe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return lw||(lw=!0,setTimeout(()=>{throw r},0)),r}}return n}class Jk{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){$("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{$("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Pi(t)?$("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Ri(t)}await this.X(6e4)})}}class Xk{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>($("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=OT(s);mg(o,r)>0&&(r=o)}),new gn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class tn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tn.oe=-1;function su(n){return n==null}function Ll(n){return n===0&&1/n==-1/0}function jT(n){return typeof n=="number"&&Number.isInteger(n)&&!Ll(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uw(e)),e=Zk(n.get(t),e);return uw(e)}function Zk(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function uw(n){return n+""}function Hn(n){const e=n.length;if(re(e>=2),e===2)return re(n.charAt(0)===""&&n.charAt(1)===""),ge.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&ee(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:ee()}s=o+2}return new ge(r)}/**
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
 */const cw=["userId","batchId"];/**
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
 */function kc(n,e){return[n,Gt(e)]}function UT(n,e,t){return[n,Gt(e),t]}const eb={},tb=["prefixPath","collectionGroup","readTime","documentId"],nb=["prefixPath","collectionGroup","documentId"],rb=["collectionGroup","readTime","prefixPath","documentId"],ib=["canonicalId","targetId"],sb=["targetId","path"],ob=["path","targetId"],ab=["collectionId","parent"],lb=["indexId","uid"],ub=["uid","sequenceNumber"],cb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],db=["indexId","uid","orderedDocumentKey"],hb=["userId","collectionPath","documentId"],fb=["userId","collectionPath","largestBatchId"],pb=["userId","collectionGroup","largestBatchId"],BT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mb=[...BT,"documentOverlays"],zT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$T=zT,yg=[...$T,"indexConfiguration","indexState","indexEntries"],gb=yg,yb=[...yg,"globals"];/**
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
 */class Fp extends FT{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function gt(n,e){const t=J(n);return Zn.F(t._e,e)}/**
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
 */function dw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ss(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function WT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oc(this.root,e,this.comparator,!1)}getReverseIterator(){return new oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oc(this.root,e,this.comparator,!0)}}class oc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=s??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new St(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,t,r,i,s){return this}insert(e,t,r){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hw(this.data.getIterator())}getIteratorFrom(e){return new hw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class hw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ls(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new nn([])}unionWith(e){let t=new Ce(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class qT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function _b(){return typeof atob<"u"}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qT("Invalid base64 string: "+s):s}}(e);return new Ze(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const vb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(n){if(re(!!n),typeof n=="string"){let e=0;const t=vb.exec(n);if(re(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(n.seconds),nanos:Ue(n.nanos)}}function Ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gi(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */function Yd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function _g(n){const e=n.mapValue.fields.__previous_value__;return Yd(e)?_g(e):e}function Fl(n){const e=xr(n.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class wb{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class yi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},bc={nullValue:"NULL_VALUE"};function us(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yd(n)?4:GT(n)?9007199254740991:Jd(n)?10:11:ee()}function ir(n,e){if(n===e)return!0;const t=us(n);if(t!==us(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fl(n).isEqual(Fl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xr(i.timestampValue),a=xr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return gi(i.bytesValue).isEqual(gi(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),a=Ue(s.doubleValue);return o===a?Ll(o)===Ll(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return bo(n.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dw(o)!==dw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ir(o[u],a[u])))return!1;return!0}(n,e);default:return ee()}}function Ml(n,e){return(n.values||[]).find(t=>ir(t,e))!==void 0}function _i(n,e){if(n===e)return 0;const t=us(n),r=us(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ue(s.integerValue||s.doubleValue),u=Ue(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return fw(n.timestampValue,e.timestampValue);case 4:return fw(Fl(n),Fl(e));case 5:return ce(n.stringValue,e.stringValue);case 6:return function(s,o){const a=gi(s),u=gi(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ce(a[c],u[c]);if(h!==0)return h}return ce(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(Ue(s.latitude),Ue(o.latitude));return a!==0?a:ce(Ue(s.longitude),Ue(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pw(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},g=o.fields||{},T=(a=f.value)===null||a===void 0?void 0:a.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=ce(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:pw(T,P)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Jr.mapValue&&o===Jr.mapValue)return 0;if(s===Jr.mapValue)return 1;if(o===Jr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const g=ce(u[f],h[f]);if(g!==0)return g;const T=_i(a[u[f]],c[h[f]]);if(T!==0)return T}return ce(u.length,h.length)}(n.mapValue,e.mapValue);default:throw ee()}}function fw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=xr(n),r=xr(e),i=ce(t.seconds,r.seconds);return i!==0?i:ce(t.nanos,r.nanos)}function pw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=_i(t[i],r[i]);if(s)return s}return ce(t.length,r.length)}function Do(n){return Mp(n)}function Mp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=xr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return gi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Mp(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mp(t.fields[o])}`;return i+"}"}(n.mapValue):ee()}function cs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jp(n){return!!n&&"integerValue"in n}function jl(n){return!!n&&"arrayValue"in n}function mw(n){return!!n&&"nullValue"in n}function gw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Dc(n){return!!n&&"mapValue"in n}function Jd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function sl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ss(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=sl(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=sl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function GT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const KT={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Ib(n){return"nullValue"in n?bc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?cs(yi.empty(),Y.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Jd(n)?KT:{mapValue:{}}:ee()}function Eb(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?cs(yi.empty(),Y.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?KT:"mapValue"in n?Jd(n)?{mapValue:{}}:Jr:ee()}function yw(n,e){const t=_i(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function _w(n,e){const t=_i(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Dc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sl(t)}setAll(e){let t=ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=sl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Dc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Dc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ss(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(sl(this.value))}}function HT(n){const e=[];return Ss(n.fields,(t,r)=>{const i=new ze([t]);if(Dc(r)){const s=HT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class Me{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,se.min(),se.min(),se.min(),At.empty(),0)}static newFoundDocument(e,t,r,i){return new Me(e,1,t,se.min(),r,i,0)}static newNoDocument(e,t){return new Me(e,2,t,se.min(),se.min(),At.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,se.min(),se.min(),At.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vi{constructor(e,t){this.position=e,this.inclusive=t}}function vw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),t.key):r=_i(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ww(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ir(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ul{constructor(e,t="asc"){this.field=e,this.dir=t}}function Tb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class QT{}class ye extends QT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Sb(e,t,r):t==="array-contains"?new Rb(e,r):t==="in"?new tS(e,r):t==="not-in"?new Pb(e,r):t==="array-contains-any"?new Cb(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ab(e,r):new xb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(_i(t,this.value)):t!==null&&us(this.value)===us(t)&&this.matchesComparison(_i(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Re extends QT{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Re(e,t)}matches(e){return No(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function No(n){return n.op==="and"}function Up(n){return n.op==="or"}function vg(n){return YT(n)&&No(n)}function YT(n){for(const e of n.filters)if(e instanceof Re)return!1;return!0}function Bp(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+Do(n.value);if(vg(n))return n.filters.map(e=>Bp(e)).join(",");{const e=n.filters.map(t=>Bp(t)).join(",");return`${n.op}(${e})`}}function JT(n,e){return n instanceof ye?function(r,i){return i instanceof ye&&r.op===i.op&&r.field.isEqual(i.field)&&ir(r.value,i.value)}(n,e):n instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&JT(o,i.filters[a]),!0):!1}(n,e):void ee()}function XT(n,e){const t=n.filters.concat(e);return Re.create(t,n.op)}function ZT(n){return n instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`}(n):n instanceof Re?function(t){return t.op.toString()+" {"+t.getFilters().map(ZT).join(" ,")+"}"}(n):"Filter"}class Sb extends ye{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ab extends ye{constructor(e,t){super(e,"in",t),this.keys=eS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xb extends ye{constructor(e,t){super(e,"not-in",t),this.keys=eS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Rb extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jl(t)&&Ml(t.arrayValue,this.value)}}class tS extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ml(this.value.arrayValue,t)}}class Pb extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ml(this.value.arrayValue,t)}}class Cb extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ml(this.value.arrayValue,r))}}/**
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
 */class kb{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function zp(n,e=null,t=[],r=[],i=null,s=null,o=null){return new kb(n,e,t,r,i,s,o)}function ds(n){const e=J(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Bp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),su(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Do(r)).join(",")),e.ue=t}return e.ue}function ou(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Tb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!JT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ww(n.startAt,e.startAt)&&ww(n.endAt,e.endAt)}function pd(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function md(n,e){return n.filters.filter(t=>t instanceof ye&&t.field.isEqual(e))}function Iw(n,e,t){let r=bc,i=!0;for(const s of md(n,e)){let o=bc,a=!0;switch(s.op){case"<":case"<=":o=Ib(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=bc}yw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];yw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Ew(n,e,t){let r=Jr,i=!0;for(const s of md(n,e)){let o=Jr,a=!0;switch(s.op){case">=":case">":o=Eb(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Jr}_w({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];_w({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class kr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nS(n,e,t,r,i,s,o,a){return new kr(n,e,t,r,i,s,o,a)}function Xo(n){return new kr(n)}function Tw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wg(n){return n.collectionGroup!==null}function fo(n){const e=J(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ce(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ul(s,r))}),t.has(ze.keyField().canonicalString())||e.ce.push(new Ul(ze.keyField(),r))}return e.ce}function Kt(n){const e=J(n);return e.le||(e.le=bb(e,fo(n))),e.le}function bb(n,e){if(n.limitType==="F")return zp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ul(i.field,s)});const t=n.endAt?new vi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new vi(n.startAt.position,n.startAt.inclusive):null;return zp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $p(n,e){const t=n.filters.concat([e]);return new kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function gd(n,e,t){return new kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function au(n,e){return ou(Kt(n),Kt(e))&&n.limitType===e.limitType}function rS(n){return`${ds(Kt(n))}|lt:${n.limitType}`}function zs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ZT(i)).join(", ")}]`),su(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Do(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Do(i)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function lu(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=vw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,fo(r),i)||r.endAt&&!function(o,a,u){const c=vw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,fo(r),i))}(n,e)}function iS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sS(n){return(e,t)=>{let r=!1;for(const i of fo(n)){const s=Db(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Db(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?_i(u,c):ee()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class Ci{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ss(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return WT(this.inner)}size(){return this.innerSize}}/**
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
 */const Nb=new Ve(Y.comparator);function rn(){return Nb}const oS=new Ve(Y.comparator);function Wa(...n){let e=oS;for(const t of n)e=e.insert(t.key,t);return e}function aS(n){let e=oS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Qn(){return ol()}function lS(){return ol()}function ol(){return new Ci(n=>n.toString(),(n,e)=>n.isEqual(e))}const Vb=new Ve(Y.comparator),Ob=new Ce(Y.comparator);function he(...n){let e=Ob;for(const t of n)e=e.add(t);return e}const Lb=new Ce(ce);function Ig(){return Lb}/**
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
 */function Eg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ll(e)?"-0":e}}function uS(n){return{integerValue:""+n}}function cS(n,e){return jT(e)?uS(e):Eg(n,e)}/**
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
 */class Xd{constructor(){this._=void 0}}function Fb(n,e,t){return n instanceof Vo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yd(s)&&(s=_g(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof hs?hS(n,e):n instanceof fs?fS(n,e):function(i,s){const o=dS(i,s),a=Sw(o)+Sw(i.Pe);return jp(o)&&jp(i.Pe)?uS(a):Eg(i.serializer,a)}(n,e)}function Mb(n,e,t){return n instanceof hs?hS(n,e):n instanceof fs?fS(n,e):t}function dS(n,e){return n instanceof Oo?function(r){return jp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vo extends Xd{}class hs extends Xd{constructor(e){super(),this.elements=e}}function hS(n,e){const t=pS(e);for(const r of n.elements)t.some(i=>ir(i,r))||t.push(r);return{arrayValue:{values:t}}}class fs extends Xd{constructor(e){super(),this.elements=e}}function fS(n,e){let t=pS(e);for(const r of n.elements)t=t.filter(i=>!ir(i,r));return{arrayValue:{values:t}}}class Oo extends Xd{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Sw(n){return Ue(n.integerValue||n.doubleValue)}function pS(n){return jl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class uu{constructor(e,t){this.field=e,this.transform=t}}function jb(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof hs&&i instanceof hs||r instanceof fs&&i instanceof fs?bo(r.elements,i.elements,ir):r instanceof Oo&&i instanceof Oo?ir(r.Pe,i.Pe):r instanceof Vo&&i instanceof Vo}(n.transform,e.transform)}class Ub{constructor(e,t){this.version=e,this.transformResults=t}}class $e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $e}static exists(e){return new $e(void 0,e)}static updateTime(e){return new $e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zd{}function mS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ea(n.key,$e.none()):new Zo(n.key,n.data,$e.none());{const t=n.data,r=At.empty();let i=new Ce(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(n.key,r,new nn(i.toArray()),$e.none())}}function Bb(n,e,t){n instanceof Zo?function(i,s,o){const a=i.value.clone(),u=xw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof br?function(i,s,o){if(!Nc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=xw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(gS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function al(n,e,t,r){return n instanceof Zo?function(s,o,a,u){if(!Nc(s.precondition,o))return a;const c=s.value.clone(),h=Rw(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof br?function(s,o,a,u){if(!Nc(s.precondition,o))return a;const c=Rw(s.fieldTransforms,u,o),h=o.data;return h.setAll(gS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,a){return Nc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function zb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=dS(r.transform,i||null);s!=null&&(t===null&&(t=At.empty()),t.set(r.field,s))}return t||null}function Aw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bo(r,i,(s,o)=>jb(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zo extends Zd{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends Zd{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function xw(n,e,t){const r=new Map;re(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Mb(o,a,t[i]))}return r}function Rw(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Fb(s,o,e))}return r}class ea extends Zd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tg extends Zd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Sg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Bb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=al(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=al(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=lS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=mS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(t,r)=>Aw(t,r))&&bo(this.baseMutations,e.baseMutations,(t,r)=>Aw(t,r))}}class Ag{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){re(e.mutations.length===r.length);let i=function(){return Vb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ag(e,t,r,i)}}/**
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
 */class xg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $b{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Ie;function yS(n){switch(n){default:return ee();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function _S(n){if(n===void 0)return st("GRPC error has no .code"),F.UNKNOWN;switch(n){case ct.OK:return F.OK;case ct.CANCELLED:return F.CANCELLED;case ct.UNKNOWN:return F.UNKNOWN;case ct.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ct.INTERNAL:return F.INTERNAL;case ct.UNAVAILABLE:return F.UNAVAILABLE;case ct.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ct.NOT_FOUND:return F.NOT_FOUND;case ct.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ct.ABORTED:return F.ABORTED;case ct.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ct.DATA_LOSS:return F.DATA_LOSS;default:return ee()}}(Ie=ct||(ct={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vS(){return new TextEncoder}/**
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
 */const Wb=new ts([4294967295,4294967295],0);function Pw(n){const e=vS().encode(n),t=new AT;return t.update(e),new Uint8Array(t.digest())}function Cw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ts([t,r],0),new ts([i,s],0)]}class Rg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new qa(`Invalid padding: ${t}`);if(r<0)throw new qa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qa(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new qa(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ts.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(ts.fromNumber(r)));return i.compare(Wb)===1&&(i=new ts([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Pw(e),[r,i]=Cw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rg(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Pw(e),[r,i]=Cw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,du.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new cu(se.min(),i,new Ve(ce),rn(),he())}}class du{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new du(r,t,he(),he(),he())}}/**
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
 */class Vc{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class wS{constructor(e,t){this.targetId=e,this.me=t}}class IS{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class kw{constructor(){this.fe=0,this.ge=Dw(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),t=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new du(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Dw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qb{constructor(e){this.Le=e,this.Be=new Map,this.ke=rn(),this.qe=bw(),this.Qe=new Ve(ce)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(pd(s))if(r===0){const o=new Y(s.path);this.Ue(t,o,Me.newNoDocument(o,se.min()))}else re(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=gi(r).toUint8Array()}catch(u){if(u instanceof qT)return rr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Rg(o,i,s)}catch(u){return rr(u instanceof qa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&pd(a.target)){const u=new Y(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Me.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=he();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new cu(e,t,this.Qe,this.ke,r);return this.ke=rn(),this.qe=bw(),this.Qe=new Ve(ce),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new kw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ce(ce),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new kw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function bw(){return new Ve(Y.comparator)}function Dw(){return new Ve(Y.comparator)}const Gb={asc:"ASCENDING",desc:"DESCENDING"},Kb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hb={and:"AND",or:"OR"};class Qb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wp(n,e){return n.useProto3Json||su(e)?e:{value:e}}function Lo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ES(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Yb(n,e){return Lo(n,e.toTimestamp())}function ot(n){return re(!!n),se.fromTimestamp(function(t){const r=xr(t);return new We(r.seconds,r.nanos)}(n))}function Pg(n,e){return qp(n,e).canonicalString()}function qp(n,e){const t=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function TS(n){const e=ge.fromString(n);return re(NS(e)),e}function Bl(n,e){return Pg(n.databaseId,e.path)}function er(n,e){const t=TS(e);if(t.get(1)!==n.databaseId.projectId)throw new z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(xS(t))}function SS(n,e){return Pg(n.databaseId,e)}function AS(n){const e=TS(n);return e.length===4?ge.emptyPath():xS(e)}function Gp(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xS(n){return re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Nw(n,e,t){return{name:Bl(n,e),fields:t.value.mapValue.fields}}function RS(n,e,t){const r=er(n,e.name),i=ot(e.updateTime),s=e.createTime?ot(e.createTime):se.min(),o=new At({mapValue:{fields:e.fields}}),a=Me.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Jb(n,e){return"found"in e?function(r,i){re(!!i.found),i.found.name,i.found.updateTime;const s=er(r,i.found.name),o=ot(i.found.updateTime),a=i.found.createTime?ot(i.found.createTime):se.min(),u=new At({mapValue:{fields:i.found.fields}});return Me.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){re(!!i.missing),re(!!i.readTime);const s=er(r,i.missing),o=ot(i.readTime);return Me.newNoDocument(s,o)}(n,e):ee()}function Xb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(re(h===void 0||typeof h=="string"),Ze.fromBase64String(h||"")):(re(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ze.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?F.UNKNOWN:_S(c.code);return new z(h,c.message||"")}(o);t=new IS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=er(n,r.document.name),s=ot(r.document.updateTime),o=r.document.createTime?ot(r.document.createTime):se.min(),a=new At({mapValue:{fields:r.document.fields}}),u=Me.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];t=new Vc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=er(n,r.document),s=r.readTime?ot(r.readTime):se.min(),o=Me.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Vc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=er(n,r.document),s=r.removedTargetIds||[];t=new Vc([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $b(i,s),a=r.targetId;t=new wS(a,o)}}return t}function zl(n,e){let t;if(e instanceof Zo)t={update:Nw(n,e.key,e.value)};else if(e instanceof ea)t={delete:Bl(n,e.key)};else if(e instanceof br)t={update:Nw(n,e.key,e.data),updateMask:iD(e.fieldMask)};else{if(!(e instanceof Tg))return ee();t={verify:Bl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Yb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(n,e.precondition)),t}function Kp(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?$e.updateTime(ot(s.updateTime)):s.exists!==void 0?$e.exists(s.exists):$e.none()}(e.currentDocument):$e.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)re(a.setToServerValue==="REQUEST_TIME"),u=new Vo;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];u=new hs(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];u=new fs(h)}else"increment"in a?u=new Oo(o,a.increment):ee();const c=ze.fromServerFormat(a.fieldPath);return new uu(c,u)}(n,i)):[];if(e.update){e.update.name;const i=er(n,e.update.name),s=new At({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new nn(c.map(h=>ze.fromServerFormat(h)))}(e.updateMask);return new br(i,s,o,t,r)}return new Zo(i,s,t,r)}if(e.delete){const i=er(n,e.delete);return new ea(i,t)}if(e.verify){const i=er(n,e.verify);return new Tg(i,t)}return ee()}function Zb(n,e){return n&&n.length>0?(re(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?ot(i.updateTime):ot(s);return o.isEqual(se.min())&&(o=ot(s)),new Ub(o,i.transformResults||[])}(t,e))):[]}function PS(n,e){return{documents:[SS(n,e.path)]}}function CS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=SS(n,i);const s=function(c){if(c.length!==0)return DS(Re.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:$s(g.field),direction:tD(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Wp(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function kS(n){let e=AS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){re(r===1);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(f){const g=bS(f);return g instanceof Re&&vg(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(P){return new Ul(Ws(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,su(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(f){const g=!!f.before,T=f.values||[];return new vi(T,g)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const g=!f.before,T=f.values||[];return new vi(T,g)}(t.endAt)),nS(e,i,o,s,a,"F",u,c)}function eD(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ws(t.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ws(t.unaryFilter.field);return ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ws(t.unaryFilter.field);return ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ws(t.unaryFilter.field);return ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(n):n.fieldFilter!==void 0?function(t){return ye.create(Ws(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Re.create(t.compositeFilter.filters.map(r=>bS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(t.compositeFilter.op))}(n):ee()}function tD(n){return Gb[n]}function nD(n){return Kb[n]}function rD(n){return Hb[n]}function $s(n){return{fieldPath:n.canonicalString()}}function Ws(n){return ze.fromServerFormat(n.fieldPath)}function DS(n){return n instanceof ye?function(t){if(t.op==="=="){if(gw(t.value))return{unaryFilter:{field:$s(t.field),op:"IS_NAN"}};if(mw(t.value))return{unaryFilter:{field:$s(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gw(t.value))return{unaryFilter:{field:$s(t.field),op:"IS_NOT_NAN"}};if(mw(t.value))return{unaryFilter:{field:$s(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(t.field),op:nD(t.op),value:t.value}}}(n):n instanceof Re?function(t){const r=t.getFilters().map(i=>DS(i));return r.length===1?r[0]:{compositeFilter:{op:rD(t.op),filters:r}}}(n):ee()}function iD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function NS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class fr{constructor(e,t,r,i,s=se.min(),o=se.min(),a=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VS{constructor(e){this.ct=e}}function sD(n,e){let t;if(e.document)t=RS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Y.fromSegments(e.noDocument.path),i=ms(e.noDocument.readTime);t=Me.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ee();{const r=Y.fromSegments(e.unknownDocument.path),i=ms(e.unknownDocument.version);t=Me.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new We(i[0],i[1]);return se.fromTimestamp(s)}(e.readTime)),t}function Vw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:yd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Bl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Lo(s,o.version.toTimestamp()),createTime:Lo(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:ps(e.version)};else{if(!e.isUnknownDocument())return ee();r.unknownDocument={path:t.path.toArray(),version:ps(e.version)}}return r}function yd(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function ps(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ms(n){const e=new We(n.seconds,n.nanoseconds);return se.fromTimestamp(e)}function zi(n,e){const t=(e.baseMutations||[]).map(s=>Kp(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Kp(n.ct,s)),i=We.fromMillis(e.localWriteTimeMs);return new Sg(e.batchId,i,t,r)}function Ga(n){const e=ms(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ms(n.lastLimboFreeSnapshotVersion):se.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return re(s.documents.length===1),Kt(Xo(AS(s.documents[0])))}(n.query):function(s){return Kt(kS(s))}(n.query),new fr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ze.fromBase64String(n.resumeToken))}function OS(n,e){const t=ps(e.snapshotVersion),r=ps(e.lastLimboFreeSnapshotVersion);let i;i=pd(e.target)?PS(n.ct,e.target):CS(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ds(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Cg(n){const e=kS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gd(e,e.limit,"L"):e}function Af(n,e){return new xg(e.largestBatchId,Kp(n.ct,e.overlayMutation))}function Ow(n,e){const t=e.path.lastSegment();return[n,Gt(e.path.popLast()),t]}function Lw(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:ps(r.readTime),documentKey:Gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class oD{getBundleMetadata(e,t){return Fw(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ms(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Fw(e).put(function(i){return{bundleId:i.id,createTime:ps(ot(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Mw(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Cg(s.bundledQuery),readTime:ms(s.readTime)}}(r)})}saveNamedQuery(e,t){return Mw(e).put(function(i){return{name:i.name,readTime:ps(ot(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Fw(n){return gt(n,"bundles")}function Mw(n){return gt(n,"namedQueries")}/**
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
 */class eh{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new eh(e,r)}getOverlay(e,t){return ka(e).get(Ow(this.userId,t)).next(r=>r?Af(this.serializer,r):null)}getOverlays(e,t){const r=Qn();return O.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new xg(t,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Gt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ka(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Qn(),s=Gt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ka(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Af(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Qn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ka(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const f=Af(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,t){return ka(e).put(function(i,s,o){const[a,u,c]=Ow(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:zl(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ka(n){return gt(n,"documentOverlays")}/**
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
 */class aD{Pt(e){return gt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ze.fromUint8Array(r):Ze.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class $i{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ue(e.integerValue));else if("doubleValue"in e){const r=Ue(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Ll(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=xr(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(gi(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?GT(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Jd(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):ee()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(Ue(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),Y.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}$i.vt=new $i;function lD(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function jw(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=lD(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class uD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=jw(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=jw(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class cD{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class dD{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ba{constructor(){this.jt=new uD,this.Ht=new cD(this.jt),this.Jt=new dD(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Wi{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Wi(this.indexId,this.documentKey,this.arrayValue,r)}}function jr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Uw(n.arrayValue,e.arrayValue),t!==0?t:(t=Uw(n.directionalValue,e.directionalValue),t!==0?t:Y.comparator(n.documentKey,e.documentKey)))}function Uw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Bw{constructor(e){this.Xt=new Ce((t,r)=>ze.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(re(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Lp(e);if(t!==void 0&&!this.sn(t))return!1;const r=Ui(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new Ce(ze.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Cc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Cc(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Cc(r.field,r.dir==="asc"?0:1)));return new fd(fd.UNKNOWN_ID,this.collectionId,t,Ol.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function LS(n){var e,t;if(re(n instanceof ye||n instanceof Re),n instanceof ye){if(n instanceof tS){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ye.create(n.field,"==",s)))||[];return Re.create(i,"or")}return n}const r=n.filters.map(i=>LS(i));return Re.create(r,n.op)}function hD(n){if(n.getFilters().length===0)return[];const e=Yp(LS(n));return re(FS(e)),Hp(e)||Qp(e)?[e]:e.getFilters()}function Hp(n){return n instanceof ye}function Qp(n){return n instanceof Re&&vg(n)}function FS(n){return Hp(n)||Qp(n)||function(t){if(t instanceof Re&&Up(t)){for(const r of t.getFilters())if(!Hp(r)&&!Qp(r))return!1;return!0}return!1}(n)}function Yp(n){if(re(n instanceof ye||n instanceof Re),n instanceof ye)return n;if(n.filters.length===1)return Yp(n.filters[0]);const e=n.filters.map(r=>Yp(r));let t=Re.create(e,n.op);return t=_d(t),FS(t)?t:(re(t instanceof Re),re(No(t)),re(t.filters.length>1),t.filters.reduce((r,i)=>kg(r,i)))}function kg(n,e){let t;return re(n instanceof ye||n instanceof Re),re(e instanceof ye||e instanceof Re),t=n instanceof ye?e instanceof ye?function(i,s){return Re.create([i,s],"and")}(n,e):zw(n,e):e instanceof ye?zw(e,n):function(i,s){if(re(i.filters.length>0&&s.filters.length>0),No(i)&&No(s))return XT(i,s.getFilters());const o=Up(i)?i:s,a=Up(i)?s:i,u=o.filters.map(c=>kg(c,a));return Re.create(u,"or")}(n,e),_d(t)}function zw(n,e){if(No(e))return XT(e,n.getFilters());{const t=e.filters.map(r=>kg(n,r));return Re.create(t,"or")}}function _d(n){if(re(n instanceof ye||n instanceof Re),n instanceof ye)return n;const e=n.getFilters();if(e.length===1)return _d(e[0]);if(YT(n))return n;const t=e.map(i=>_d(i)),r=[];return t.forEach(i=>{i instanceof ye?r.push(i):i instanceof Re&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Re.create(r,n.op)}/**
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
 */class fD{constructor(){this.un=new bg}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(gn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(gn.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class bg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ce(ge.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(ge.comparator)).toArray()}}/**
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
 */const ac=new Uint8Array(0);class pD{constructor(e,t){this.databaseId=t,this.cn=new bg,this.ln=new Ci(r=>ds(r),(r,i)=>ou(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Gt(i)};return $w(e).put(s)}return O.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[NT(t),""],!1,!0);return $w(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Hn(o.parent))}return r})}addFieldIndex(e,t){const r=Da(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Ms(e);return s.next(a=>{o.put(Lw(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Da(e),i=Ms(e),s=Fs(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Da(e),r=Fs(e),i=Ms(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return O.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Bw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=Fs(e);let i=!0;const s=new Map;return O.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=he();const a=[];return O.forEach(s,(u,c)=>{$("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(u)} to execute ${ds(t)}`);const h=function(A,N){const U=Lp(N);if(U===void 0)return null;for(const B of md(A,U.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(c,u),f=function(A,N){const U=new Map;for(const B of Ui(N))for(const _ of md(A,B.fieldPath))switch(_.op){case"==":case"in":U.set(B.fieldPath.canonicalString(),_.value);break;case"not-in":case"!=":return U.set(B.fieldPath.canonicalString(),_.value),Array.from(U.values())}return null}(c,u),g=function(A,N){const U=[];let B=!0;for(const _ of Ui(N)){const y=_.kind===0?Iw(A,_.fieldPath,A.startAt):Ew(A,_.fieldPath,A.startAt);U.push(y.value),B&&(B=y.inclusive)}return new vi(U,B)}(c,u),T=function(A,N){const U=[];let B=!0;for(const _ of Ui(N)){const y=_.kind===0?Ew(A,_.fieldPath,A.endAt):Iw(A,_.fieldPath,A.endAt);U.push(y.value),B&&(B=y.inclusive)}return new vi(U,B)}(c,u),P=this.In(u,c,g),k=this.In(u,c,T),L=this.Tn(u,c,f),S=this.En(u.indexId,h,P,g.inclusive,k,T.inclusive,L);return O.forEach(S,w=>r.G(w,t.limit).next(A=>{A.forEach(N=>{const U=Y.fromSegments(N.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return O.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=hD(Re.create(e.filters,"and")).map(r=>zp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),h=[];for(let f=0;f<u;++f){const g=t?this.dn(t[f/c]):ac,T=this.An(e,g,r[f%c],i),P=this.Rn(e,g,s[f%c],o),k=a.map(L=>this.An(e,g,L,!0));h.push(...this.createRange(T,P,k))}return h}An(e,t,r,i){const s=new Wi(e,Y.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new Wi(e,Y.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new Bw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return O.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new Ce(ze.comparator),h=!1;for(const f of u.filters)for(const g of f.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:c=c.add(g.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new ba;for(const i of Ui(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);$i.vt.It(s,o)}return r.zt()}dn(e){const t=new ba;return $i.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new ba;return $i.vt.It(cs(this.databaseId,t),r.Yt(function(s){const o=Ui(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new ba);let s=0;for(const o of Ui(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&jl(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);$i.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new ba;u.seed(a.zt()),$i.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof ye&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Da(e),i=Ms(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(h,f){const g=f?new Ol(f.sequenceNumber,new gn(ms(f.readTime),new Y(Hn(f.documentKey)),f.largestBatchId)):Ol.empty(),T=h.fields.map(([P,k])=>new Cc(ze.fromServerFormat(P),k));return new fd(h.indexId,h.collectionGroup,T,g)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ce(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Da(e),s=Ms(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>O.forEach(a,u=>s.put(Lw(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return O.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,u=>this.wn(e,i,u).next(c=>{const h=this.Sn(s,u);return c.isEqual(h)?O.resolve():this.bn(e,s,u,c,h)}))))})}Dn(e,t,r,i){return Fs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return Fs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=Fs(e);let s=new Ce(jr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new Wi(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new Ce(jr);const i=this.Vn(t,e);if(i==null)return r;const s=Lp(t);if(s!=null){const o=e.data.field(s.fieldPath);if(jl(o))for(const a of o.arrayValue.values||[])r=r.add(new Wi(t.indexId,e.key,this.dn(a),i))}else r=r.add(new Wi(t.indexId,e.key,ac,i));return r}bn(e,t,r,i,s){$("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,h,f,g){const T=u.getIterator(),P=c.getIterator();let k=Ls(T),L=Ls(P);for(;k||L;){let S=!1,w=!1;if(k&&L){const A=h(k,L);A<0?w=!0:A>0&&(S=!0)}else k!=null?w=!0:S=!0;S?(f(L),L=Ls(P)):w?(g(k),k=Ls(T)):(k=Ls(T),L=Ls(P))}}(i,s,jr,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),O.waitFor(o)}yn(e){let t=1;return Ms(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>jr(o,a)).filter((o,a,u)=>!a||jr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=jr(o,e),u=jr(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ac,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ac,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return jr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ww)}getMinOffset(e,t){return O.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||ee())).next(Ww)}}function $w(n){return gt(n,"collectionParents")}function Fs(n){return gt(n,"indexEntries")}function Da(n){return gt(n,"indexConfiguration")}function Ms(n){return gt(n,"indexState")}function Ww(n){re(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;mg(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new gn(e.readTime,e.documentKey,t)}/**
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
 */const qw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Jt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function MS(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(h,f,g)=>(a++,g.delete()));s.push(u.next(()=>{re(a===1)}));const c=[];for(const h of t.mutations){const f=UT(e,h.key.path,t.batchId);s.push(i.delete(f)),c.push(h.key)}return O.waitFor(s).next(()=>c)}function vd(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ee();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(41943040,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);class th{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){re(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new th(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=qs(e),o=Ur(e);return o.add({}).next(a=>{re(typeof a=="number");const u=new Sg(a,t,r,i),c=function(T,P,k){const L=k.baseMutations.map(w=>zl(T.ct,w)),S=k.mutations.map(w=>zl(T.ct,w));return{userId:P,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:L,mutations:S}}(this.serializer,this.userId,u),h=[];let f=new Ce((g,T)=>ce(g.canonicalString(),T.canonicalString()));for(const g of i){const T=UT(this.userId,g.key.path,a);f=f.add(g.key.path.popLast()),h.push(o.put(c)),h.push(s.put(T,eb))}return f.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),O.waitFor(h).next(()=>u)})}lookupMutationBatch(e,t){return Ur(e).get(t).next(r=>r?(re(r.userId===this.userId),zi(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?O.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ur(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(re(a.batchId>=r),s=zi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ur(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).U("userMutationsIndex",t).next(r=>r.map(i=>zi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=kc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return qs(e).J({range:i},(o,a,u)=>{const[c,h,f]=o,g=Hn(h);if(c===this.userId&&t.path.isEqual(g))return Ur(e).get(f).next(T=>{if(!T)throw ee();re(T.userId===this.userId),s.push(zi(this.serializer,T))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(ce);const i=[];return t.forEach(s=>{const o=kc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=qs(e).J({range:a},(c,h,f)=>{const[g,T,P]=c,k=Hn(T);g===this.userId&&s.path.isEqual(k)?r=r.add(P):f.done()});i.push(u)}),O.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=kc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ce(ce);return qs(e).J({range:o},(u,c,h)=>{const[f,g,T]=u,P=Hn(g);f===this.userId&&r.isPrefixOf(P)?P.length===i&&(a=a.add(T)):h.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Ur(e).get(s).next(o=>{if(o===null)throw ee();re(o.userId===this.userId),r.push(zi(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return MS(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return qs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Hn(s[1]);i.push(u)}else a.done()}).next(()=>{re(i.length===0)})})}containsKey(e,t){return jS(e,this.userId,t)}Nn(e){return US(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function jS(n,e,t){const r=kc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return qs(n).J({range:s,H:!0},(a,u,c)=>{const[h,f,g]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Ur(n){return gt(n,"mutations")}function qs(n){return gt(n,"documentMutations")}function US(n){return gt(n,"mutationQueues")}/**
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
 */class gs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new gs(0)}static kn(){return new gs(-1)}}/**
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
 */class mD{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new gs(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>se.fromTimestamp(new We(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>js(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(re(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return js(e).J((o,a)=>{const u=Ga(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,t){return js(e).J((r,i)=>{const s=Ga(i);t(s)})}qn(e){return Gw(e).get("targetGlobalKey").next(t=>(re(t!==null),t))}Qn(e,t){return Gw(e).put("targetGlobalKey",t)}Kn(e,t){return js(e).put(OS(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=ds(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return js(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=Ga(a);ou(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Kr(e);return t.forEach(o=>{const a=Gt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,t,r){const i=Kr(e);return O.forEach(t,s=>{const o=Gt(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Kr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Kr(e);let s=he();return i.J({range:r,H:!0},(o,a,u)=>{const c=Hn(o[1]),h=new Y(c);s=s.add(h)}).next(()=>s)}containsKey(e,t){const r=Gt(t.path),i=IDBKeyRange.bound([r],[NT(r)],!1,!0);let s=0;return Kr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return js(e).get(t).next(r=>r?Ga(r):null)}}function js(n){return gt(n,"targets")}function Gw(n){return gt(n,"targetGlobal")}function Kr(n){return gt(n,"targetDocuments")}/**
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
 */function Kw([n,e],[t,r]){const i=ce(n,t);return i===0?ce(e,r):i}class gD{constructor(e){this.Un=e,this.buffer=new Ce(Kw),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Kw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){$("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pi(t)?$("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ri(t)}await this.Hn(3e5)})}}class _D{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return O.resolve(tn.oe);const r=new gD(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(qw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qw):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Bs()<=pe.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function vD(n,e){return new _D(n,e)}/**
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
 */class wD{constructor(e,t){this.db=e,this.garbageCollector=vD(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return lc(e,r)}removeReference(e,t,r){return lc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return lc(e,t)}nr(e,t){return function(i,s){let o=!1;return US(i).Y(a=>jS(i,a,s).next(u=>(u&&(o=!0),O.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,se.min()),Kr(e).delete(function(f){return[0,Gt(f.path)]}(o))))});i.push(u)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return lc(e,t)}tr(e,t){const r=Kr(e);let i,s=tn.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==tn.oe&&t(new Y(Hn(i)),s),s=c,i=u):s=tn.oe}).next(()=>{s!==tn.oe&&t(new Y(Hn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function lc(n,e){return Kr(n).put(function(r,i){return{targetId:0,path:Gt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class BS{constructor(){this.changes=new Ci(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ID{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Li(e).put(r)}removeEntry(e,t,r){return Li(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],yd(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Me.newInvalidDocument(t);return Li(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Na(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Me.newInvalidDocument(t)};return Li(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Na(t))},(i,s)=>{r={document:this.ir(t,s),size:vd(s)}}).next(()=>r)}getEntries(e,t){let r=rn();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=rn(),i=new Ve(Y.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,vd(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return O.resolve();let i=new Ce(Yw);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Na(i.first()),Na(i.last())),o=i.getIterator();let a=o.getNext();return Li(e).J({index:"documentKeyIndex",range:s},(u,c,h)=>{const f=Y.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Yw(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Na(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),yd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Li(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=rn();for(const f of c){const g=this.ir(Y.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);g.isFoundDocument()&&(lu(t,g)||i.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,t,r,i){let s=rn();const o=Qw(t,r),a=Qw(t,gn.max());return Li(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const f=this.ir(Y.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new ED(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hw(e).get("remoteDocumentGlobalKey").next(t=>(re(!!t),t))}rr(e,t){return Hw(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=sD(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(se.min())))return r}return Me.newInvalidDocument(e)}}function zS(n){return new ID(n)}class ED extends BS{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Ci(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Ce((s,o)=>ce(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Vw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=vd(u);r+=c-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Vw(this.cr.serializer,o.convertToNoDocument(se.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),O.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Hw(n){return gt(n,"remoteDocumentGlobal")}function Li(n){return gt(n,"remoteDocumentsV14")}function Na(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Qw(n,e){const t=e.documentKey.path.toArray();return[n,yd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Yw(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=ce(t[s],r[s]),i)return i;return i=ce(t.length,r.length),i||(i=ce(t[t.length-2],r[r.length-2]),i||ce(t[t.length-1],r[r.length-1]))}/**
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
 */class TD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $S{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&al(r.mutation,i,nn.empty(),We.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const i=Qn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Wa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Qn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=rn();const o=ol(),a=function(){return ol()}();return t.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof br)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),al(h.mutation,c,h.mutation.getFieldMask(),We.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var f;return a.set(c,new TD(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=ol();let i=new Ve((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||nn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||he()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=lS();h.forEach(g=>{if(!s.has(g)){const T=mS(t.get(g),r.get(g));T!==null&&f.set(g,T),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):O.resolve(Qn());let a=-1,u=s;return o.next(c=>O.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?O.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,he())).next(h=>({batchId:a,changes:aS(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=Wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Wa();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,u=>{const c=function(f,g){return new kr(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Me.newInvalidDocument(h)))});let a=Wa();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&al(h.mutation,c,nn.empty(),We.now()),lu(t,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class SD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ot(i.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Cg(i.bundledQuery),readTime:ot(i.readTime)}}(t)),O.resolve()}}/**
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
 */class AD{constructor(){this.overlays=new Ve(Y.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qn();return O.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const i=Qn(),s=t.length+1,o=new Y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ve((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Qn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Qn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return O.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xg(t,r));let s=this.Ir.get(t);s===void 0&&(s=he(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class xD{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class Dg{constructor(){this.Tr=new Ce(yt.Er),this.dr=new Ce(yt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new yt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new yt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Y(new ge([])),r=new yt(t,e),i=new yt(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Y(new ge([])),r=new yt(t,e),i=new yt(t,e+1);let s=he();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new yt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Y.comparator(e.key,t.key)||ce(e.wr,t.wr)}static Ar(e,t){return ce(e.wr,t.wr)||Y.comparator(e.key,t.key)}}/**
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
 */class RD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ce(yt.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sg(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new yt(t,0),i=new yt(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(ce);return t.forEach(i=>{const s=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new yt(new Y(s),0);let a=new Ce(ce);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),O.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){re(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,i=>{const s=new yt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new yt(t,0),i=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class PD{constructor(e){this.Mr=e,this.docs=function(){return new Ve(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=rn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=rn();const o=t.path,a=new Y(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mg(OT(h),r)<=0||(i.has(h.key)||lu(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ee()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new CD(this)}getSize(e){return O.resolve(this.size)}}class CD extends BS{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class kD{constructor(e){this.persistence=e,this.Nr=new Ci(t=>ds(t),ou),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Dg,this.targetCount=0,this.kr=gs.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new gs(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
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
 */class WS{constructor(e,t){this.qr={},this.overlays={},this.Qr=new tn(0),this.Kr=!1,this.Kr=!0,this.$r=new xD,this.referenceDelegate=e(this),this.Ur=new kD(this),this.indexManager=new fD,this.remoteDocumentCache=function(i){return new PD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VS(t),this.Gr=new SD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new AD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new RD(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const i=new bD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class bD extends FT{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.Jr=new Dg,this.Yr=null}static Zr(e){return new nh(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=Y.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class DD{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Qd("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cw,{unique:!0}),u.createObjectStore("documentMutations")}(e),Jw(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Jw(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:se.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(h=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cw,{unique:!0});const f=c.store("mutations"),g=h.map(T=>f.put(T));return O.waitFor(g)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:hb});c.createIndex("collectionPathOverlayIndex",fb,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",pb,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:tb});c.createIndex("documentKeyIndex",nb),c.createIndex("collectionGroupIndex",rb)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:lb}).createIndex("sequenceNumberIndex",ub,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:cb}).createIndex("documentKeyIndex",db,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=vd(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,u=>{re(u.userId===s.userId);const c=zi(this.serializer,u);return MS(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new ge(o),c=function(f){return[0,Gt(f)]}(u);s.push(t.get(c).next(h=>h?O.resolve():(f=>t.put({targetId:0,path:Gt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>O.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:ab});const r=t.store("collectionParents"),i=new bg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Gt(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new ge(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=Hn(a);return s(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=Ga(i),o=OS(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(f){return f.document?new Y(ge.fromString(f.document.name).popFirst(5)):f.noDocument?Y.fromSegments(f.noDocument.path):f.unknownDocument?Y.fromSegments(f.unknownDocument.path):ee()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=zS(this.serializer),s=new WS(nh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:he();zi(this.serializer,u).keys().forEach(f=>h=h.add(f)),a.set(u.userId,h)}),O.forEach(a,(u,c)=>{const h=new vt(c),f=eh.lt(this.serializer,h),g=s.getIndexManager(h),T=th.lt(h,this.serializer,g,s.referenceDelegate);return new $S(i,T,f,g).recalculateAndSaveOverlaysForDocumentKeys(new Fp(t,tn.oe),u).next()})})}}function Jw(n){n.createObjectStore("targetDocuments",{keyPath:sb}).createIndex("documentTargetsIndex",ob,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ib,{unique:!0}),n.createObjectStore("targetGlobal")}const xf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ng{constructor(e,t,r,i,s,o,a,u,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!Ng.D())throw new z(F.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new wD(this,i),this.Ai=t+"main",this.serializer=new VS(u),this.Ri=new Zn(this.Ai,this.hi,new DD(this.serializer)),this.$r=new aD,this.Ur=new mD(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zS(this.serializer),this.Gr=new oD,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&st("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(F.FAILED_PRECONDITION,xf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new tn(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>uc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Pi(e))return $("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Va(e).get("owner").next(t=>O.resolve(this.vi(t)))}Ci(e){return uc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=gt(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?O.resolve(!0):Va(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new z(F.FAILED_PRECONDITION,xf);return!1}}return!(!this.networkEnabled||!this.inForeground)||uc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&$("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Fp(e,tn.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>uc(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return th.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new pD(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return eh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?yb:u===16?gb:u===15?yg:u===14?$T:u===13?zT:u===12?mb:u===11?BT:void ee()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Fp(a,this.Qr?this.Qr.next():tn.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw st(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new z(F.FAILED_PRECONDITION,LT);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Va(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new z(F.FAILED_PRECONDITION,xf)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Va(e).put("owner",t)}static D(){return Zn.D()}bi(e){const t=Va(e);return t.get("owner").next(r=>this.vi(r)?($("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):O.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(st(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;cT()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return $("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return st("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){st("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Va(n){return gt(n,"owner")}function uc(n){return gt(n,"clientMetadata")}function Vg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Og{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=he(),i=he();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Og(e,t.fromCache,r,i)}}/**
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
 */class ND{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return cT()?8:MT(Qe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ND;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Bs()<=pe.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",zs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Bs()<=pe.DEBUG&&$("QueryEngine","Query:",zs(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Bs()<=pe.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",zs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):O.resolve())}Yi(e,t){if(Tw(t))return O.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=gd(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,gd(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return Tw(t)||i.isEqual(se.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?O.resolve(null):(Bs()<=pe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zs(t)),this.rs(e,o,t,VT(i,-1)).next(a=>a))})}ts(e,t){let r=new Ce(sS(e));return t.forEach((i,s)=>{lu(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Bs()<=pe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",zs(t)),this.Ji.getDocumentsMatchingQuery(e,t,gn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class VD{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new Ve(ce),this._s=new Ci(s=>ds(s),ou),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $S(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function GS(n,e,t,r){return new VD(n,e,t,r)}async function KS(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=he();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function OD(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,g=f.keys();let T=O.resolve();return g.forEach(P=>{T=T.next(()=>h.getEntry(u,P)).next(k=>{const L=c.docVersions.get(P);re(L!==null),k.version.compareTo(L)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),T.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=he();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function HS(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function LD(n,e){const t=J(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((h,f)=>{const g=i.get(f);if(!g)return;a.push(t.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>t.Ur.addMatchingKeys(s,h.addedDocuments,f)));let T=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(Ze.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):h.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(h.resumeToken,r)),i=i.insert(f,T),function(k,L,S){return k.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,T,h)&&a.push(t.Ur.updateTargetData(s,T))});let u=rn(),c=he();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(QS(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(se.min())){const h=t.Ur.getLastRemoteSnapshotVersion(s).next(f=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function QS(n,e,t){let r=he(),i=he();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=rn();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function FD(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Fo(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Mo(n,e,t){const r=J(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function wd(n,e,t){const r=J(n);let i=se.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=J(u),g=f._s.get(h);return g!==void 0?O.resolve(f.os.get(g)):f.Ur.getTargetData(c,h)}(r,o,Kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:se.min(),t?s:he())).next(a=>(XS(r,iS(e),a),{documents:a,Ts:s})))}function YS(n,e){const t=J(n),r=J(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function JS(n,e){const t=J(n),r=t.us.get(e)||se.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,VT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(XS(t,e,i),i))}function XS(n,e,t){let r=n.us.get(e)||se.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function MD(n,e,t,r){const i=J(n);let s=he(),o=rn();for(const c of t){const h=e.Es(c.metadata.name);c.document&&(s=s.add(h));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(h,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await Fo(i,function(h){return Kt(Xo(ge.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>QS(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.Ps,h.Is)).next(()=>h.Ps)))}async function jD(n,e,t=he()){const r=await Fo(n,Kt(Cg(e.bundledQuery))),i=J(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ot(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Ze.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function Xw(n,e){return`firestore_clients_${n}_${e}`}function Zw(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Rf(n,e){return`firestore_targets_${n}_${e}`}class Id{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new z(i.error.code,i.error.message))),o?new Id(e,t,i.state,s):(st("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ll{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new z(r.error.code,r.error.message))),s?new ll(e,r.state,i):(st("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ed{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ig();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=jT(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ed(e,s):(st("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Lg{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Lg(t.clientId,t.onlineState):(st("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Jp{constructor(){this.activeTargetIds=Ig()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pf{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Ve(ce),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Xw(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Jp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(Xw(this.persistenceKey,r));if(i){const s=Ed.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Rf(this.persistenceKey,e));if(i){const s=ll.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Rf(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return $("SharedClientState","READ",e,t),t}setItem(e,t){$("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){$("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if($("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void st("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=tn.oe;if(s!=null)try{const a=JSON.parse(s);re(typeof a=="number"),o=a}catch(a){st("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==tn.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new Id(this.currentUser,e,t,r),s=Zw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=Zw(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=Rf(this.persistenceKey,e),s=new ll(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Ed.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Id.Rs(new vt(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return ll.Rs(i,t)}Ls(e){return Lg.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);$("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Ig();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class ZS{constructor(){this.so=new Jp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Jp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UD{_o(e){}shutdown(){}}/**
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
 */class eI{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cc=null;function Cf(){return cc===null?cc=function(){return 268435456+Math.round(2147483648*Math.random())}():cc++,"0x"+cc.toString(16)}/**
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
 */const BD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ot="WebChannelConnection";class $D extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=Cf(),u=this.xo(t,r.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(h=>($("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw rr("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=BD[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Cf();return new Promise((o,a)=>{const u=new xT;u.setWithCredentials(!0),u.listenOnce(RT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pc.NO_ERROR:const h=u.getResponseJson();$(Ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Pc.TIMEOUT:$(Ot,`RPC '${e}' ${s} timed out`),a(new z(F.DEADLINE_EXCEEDED,"Request time out"));break;case Pc.HTTP_ERROR:const f=u.getStatus();if($(Ot,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const P=function(L){const S=L.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(S)>=0?S:F.UNKNOWN}(T.status);a(new z(P,T.message))}else a(new z(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new z(F.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{$(Ot,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);$(Ot,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=Cf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kT(),a=CT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const h=s.join("");$(Ot,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let g=!1,T=!1;const P=new zD({Io:L=>{T?$(Ot,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(g||($(Ot,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),$(Ot,`RPC '${e}' stream ${i} sending:`,L),f.send(L))},To:()=>f.close()}),k=(L,S,w)=>{L.listen(S,A=>{try{w(A)}catch(N){setTimeout(()=>{throw N},0)}})};return k(f,$a.EventType.OPEN,()=>{T||($(Ot,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),k(f,$a.EventType.CLOSE,()=>{T||(T=!0,$(Ot,`RPC '${e}' stream ${i} transport closed`),P.So())}),k(f,$a.EventType.ERROR,L=>{T||(T=!0,rr(Ot,`RPC '${e}' stream ${i} transport errored:`,L),P.So(new z(F.UNAVAILABLE,"The operation could not be completed")))}),k(f,$a.EventType.MESSAGE,L=>{var S;if(!T){const w=L.data[0];re(!!w);const A=w,N=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(N){$(Ot,`RPC '${e}' stream ${i} received error:`,N);const U=N.status;let B=function(I){const R=ct[I];if(R!==void 0)return _S(R)}(U),_=N.message;B===void 0&&(B=F.INTERNAL,_="Unknown error status: "+U+" with message "+N.message),T=!0,P.So(new z(B,_)),f.close()}else $(Ot,`RPC '${e}' stream ${i} received:`,w),P.bo(w)}}),k(a,PT.STAT_EVENT,L=>{L.stat===Op.PROXY?$(Ot,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Op.NOPROXY&&$(Ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}/**
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
 */function eA(){return typeof window<"u"?window:null}function Oc(){return typeof document<"u"?document:null}/**
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
 */function hu(n){return new Qb(n,!0)}/**
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
 */class Fg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class tA{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(st(t.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new z(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WD extends tA{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Xb(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?ot(o.readTime):se.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Gp(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=pd(u)?{documents:PS(s,u)}:{query:CS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ES(s,o.resumeToken);const c=Wp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=Lo(s,o.snapshotVersion.toTimestamp());const c=Wp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=eD(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Gp(this.serializer),t.removeTarget=e,this.a_(t)}}class qD extends tA{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return re(!!e.streamToken),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Zb(e.writeResults,e.commitTime),r=ot(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Gp(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>zl(this.serializer,r))};this.a_(t)}}/**
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
 */class GD extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qp(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(F.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,qp(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class KD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(st(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class HD{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ki(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await ta(c),c.q_.set("Unknown"),c.L_.delete(4),await fu(c)}(this))})}),this.q_=new KD(r,i)}}async function fu(n){if(ki(n))for(const e of n.B_)await e(!0)}async function ta(n){for(const e of n.B_)await e(!1)}function rh(n,e){const t=J(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ug(t)?jg(t):ra(t).r_()&&Mg(t,e))}function jo(n,e){const t=J(n),r=ra(t);t.N_.delete(e),r.r_()&&nA(t,e),t.N_.size===0&&(r.r_()?r.o_():ki(t)&&t.q_.set("Unknown"))}function Mg(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ra(n).A_(e)}function nA(n,e){n.Q_.xe(e),ra(n).R_(e)}function jg(n){n.Q_=new qb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ra(n).start(),n.q_.v_()}function Ug(n){return ki(n)&&!ra(n).n_()&&n.N_.size>0}function ki(n){return J(n).L_.size===0}function rA(n){n.Q_=void 0}async function QD(n){n.q_.set("Online")}async function YD(n){n.N_.forEach((e,t)=>{Mg(n,e)})}async function JD(n,e){rA(n),Ug(n)?(n.q_.M_(e),jg(n)):n.q_.set("Unknown")}async function XD(n,e,t){if(n.q_.set("Online"),e instanceof IS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Td(n,r)}else if(e instanceof Vc?n.Q_.Ke(e):e instanceof wS?n.Q_.He(e):n.Q_.We(e),!t.isEqual(se.min()))try{const r=await HS(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Ze.EMPTY_BYTE_STRING,h.snapshotVersion)),nA(s,u);const f=new fr(h.target,u,c,h.sequenceNumber);Mg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Td(n,r)}}async function Td(n,e,t){if(!Pi(e))throw e;n.L_.add(1),await ta(n),n.q_.set("Offline"),t||(t=()=>HS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await fu(n)})}function iA(n,e){return e().catch(t=>Td(n,t,e))}async function na(n){const e=J(n),t=wi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ZD(e);)try{const i=await FD(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,eN(e,i)}catch(i){await Td(e,i)}sA(e)&&oA(e)}function ZD(n){return ki(n)&&n.O_.length<10}function eN(n,e){n.O_.push(e);const t=wi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function sA(n){return ki(n)&&!wi(n).n_()&&n.O_.length>0}function oA(n){wi(n).start()}async function tN(n){wi(n).p_()}async function nN(n){const e=wi(n);for(const t of n.O_)e.m_(t.mutations)}async function rN(n,e,t){const r=n.O_.shift(),i=Ag.from(r,e,t);await iA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await na(n)}async function iN(n,e){e&&wi(n).V_&&await async function(r,i){if(function(o){return yS(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();wi(r).s_(),await iA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await na(r)}}(n,e),sA(n)&&oA(n)}async function tI(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=ki(t);t.L_.add(3),await ta(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await fu(t)}async function Xp(n,e){const t=J(n);e?(t.L_.delete(2),await fu(t)):e||(t.L_.add(2),await ta(t),t.q_.set("Unknown"))}function ra(n){return n.K_||(n.K_=function(t,r,i){const s=J(t);return s.w_(),new WD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:QD.bind(null,n),Ro:YD.bind(null,n),mo:JD.bind(null,n),d_:XD.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Ug(n)?jg(n):n.q_.set("Unknown")):(await n.K_.stop(),rA(n))})),n.K_}function wi(n){return n.U_||(n.U_=function(t,r,i){const s=J(t);return s.w_(),new qD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tN.bind(null,n),mo:iN.bind(null,n),f_:nN.bind(null,n),g_:rN.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await na(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Bg{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Bg(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ia(n,e){if(st("AsyncQueue",`${e}: ${n}`),Pi(n))return new z(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class po{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Wa(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class nI{constructor(){this.W_=new Ve(Y.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Uo{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Uo(e,t,po.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class sN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oN{constructor(){this.queries=rI(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=rI(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new z(F.ABORTED,"Firestore shutting down"))}}function rI(){return new Ci(n=>rS(n),au)}async function zg(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new sN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=ia(o,`Initialization of query '${zs(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Wg(t)}async function $g(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function aN(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Wg(t)}function lN(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Wg(n){n.Y_.forEach(e=>{e.next()})}var Zp,iI;(iI=Zp||(Zp={})).ea="default",iI.Cache="cache";class qg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zp.Cache}}/**
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
 */class uN{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class sI{constructor(e){this.serializer=e}Es(e){return er(this.serializer,e)}ds(e){return e.metadata.exists?RS(this.serializer,e.document,!1):Me.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return ot(e)}}class cN{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=aA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=ge.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new sI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||he()).add(s);t.set(o,a)}}return t}async complete(){const e=await MD(this.localStore,new sI(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await jD(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function aA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class lA{constructor(e){this.key=e}}class uA{constructor(e){this.key=e}}class cA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=sS(e),this.Ra=new po(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new nI,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const g=i.get(h),T=lu(this.query,f)?f:null,P=!!g&&this.mutatedKeys.has(g.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let L=!1;g&&T?g.data.isEqual(T.data)?P!==k&&(r.track({type:3,doc:T}),L=!0):this.ga(g,T)||(r.track({type:2,doc:T}),L=!0,(u&&this.Aa(T,u)>0||c&&this.Aa(T,c)<0)&&(a=!0)):!g&&T?(r.track({type:0,doc:T}),L=!0):g&&!T&&(r.track({type:1,doc:g}),L=!0,(u||c)&&(a=!0)),L&&(T?(o=o.add(T),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(T,P){const k=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return k(T)-k(P)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Uo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new nI,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new uA(r))}),this.da.forEach(r=>{e.has(r)||t.push(new lA(r))}),t}ba(e){this.Ta=e.Ts,this.da=he();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Uo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class dN{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class hN{constructor(e){this.key=e,this.va=!1}}class fN{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ci(a=>rS(a),au),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(Y.comparator),this.Na=new Map,this.La=new Dg,this.Ba={},this.ka=new Map,this.qa=gs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pN(n,e,t=!0){const r=ih(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await dA(r,e,t,!0),i}async function mN(n,e){const t=ih(n);await dA(t,e,!0,!1)}async function dA(n,e,t,r){const i=await Fo(n.localStore,Kt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Gg(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&rh(n.remoteStore,i),a}async function Gg(n,e,t,r,i){n.Ka=(f,g,T)=>async function(k,L,S,w){let A=L.view.ma(S);A.ns&&(A=await wd(k.localStore,L.query,!1).then(({documents:_})=>L.view.ma(_,A)));const N=w&&w.targetChanges.get(L.targetId),U=w&&w.targetMismatches.get(L.targetId)!=null,B=L.view.applyChanges(A,k.isPrimaryClient,N,U);return em(k,L.targetId,B.wa),B.snapshot}(n,f,g,T);const s=await wd(n.localStore,e,!0),o=new cA(e,s.Ts),a=o.ma(s.documents),u=du.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);em(n,t,c.wa);const h=new dN(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function gN(n,e,t){const r=J(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!au(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Mo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&jo(r.remoteStore,i.targetId),Bo(r,i.targetId)}).catch(Ri)):(Bo(r,i.targetId),await Mo(r.localStore,i.targetId,!0))}async function yN(n,e){const t=J(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jo(t.remoteStore,r.targetId))}async function _N(n,e,t){const r=Yg(n);try{const i=await function(o,a){const u=J(o),c=We.now(),h=a.reduce((T,P)=>T.add(P.key),he());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let P=rn(),k=he();return u.cs.getEntries(T,h).next(L=>{P=L,P.forEach((S,w)=>{w.isValidDocument()||(k=k.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,P)).next(L=>{f=L;const S=[];for(const w of a){const A=zb(w,f.get(w.key).overlayedDocument);A!=null&&S.push(new br(w.key,A,HT(A.value.mapValue),$e.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,S,a)}).next(L=>{g=L;const S=L.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(T,L.batchId,S)})}).then(()=>({batchId:g.batchId,changes:aS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ve(ce)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await Dr(r,i.changes),await na(r.remoteStore)}catch(i){const s=ia(i,"Failed to persist write");t.reject(s)}}async function hA(n,e){const t=J(n);try{const r=await LD(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?re(o.va):i.removedDocuments.size>0&&(re(o.va),o.va=!1))}),await Dr(t,r,e)}catch(r){await Ri(r)}}function oI(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=J(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const g of f.j_)g.Z_(a)&&(c=!0)}),c&&Wg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vN(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ve(Y.comparator);o=o.insert(s,Me.newNoDocument(s,se.min()));const a=he().add(s),u=new cu(se.min(),new Map,new Ve(ce),o,a);await hA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Qg(r)}else await Mo(r.localStore,e,!1).then(()=>Bo(r,e,t)).catch(Ri)}async function wN(n,e){const t=J(n),r=e.batch.batchId;try{const i=await OD(t.localStore,e);Hg(t,r,null),Kg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Dr(t,i)}catch(i){await Ri(i)}}async function IN(n,e,t){const r=J(n);try{const i=await function(o,a){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(re(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Hg(r,e,t),Kg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Dr(r,i)}catch(i){await Ri(i)}}async function EN(n,e){const t=J(n);ki(t.remoteStore)||$("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=J(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=ia(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Kg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Hg(n,e,t){const r=J(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||fA(n,r)})}function fA(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(jo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Qg(n))}function em(n,e,t){for(const r of t)r instanceof lA?(n.La.addReference(r.key,e),TN(n,r)):r instanceof uA?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||fA(n,r.key)):ee()}function TN(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+t),n.xa.add(r),Qg(n))}function Qg(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Y(ge.fromString(e)),r=n.qa.next();n.Na.set(r,new hN(t)),n.Oa=n.Oa.insert(t,r),rh(n.remoteStore,new fr(Kt(Xo(t.path)),r,"TargetPurposeLimboResolution",tn.oe))}}async function Dr(n,e,t){const r=J(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(c=>{var h;if((c||t)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Og.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=J(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>O.forEach(c,g=>O.forEach(g.$i,T=>h.persistence.referenceDelegate.addReference(f,g.targetId,T)).next(()=>O.forEach(g.Ui,T=>h.persistence.referenceDelegate.removeReference(f,g.targetId,T)))))}catch(f){if(!Pi(f))throw f;$("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const T=h.os.get(g),P=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(P);h.os=h.os.insert(g,k)}}}(r.localStore,s))}async function SN(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await KS(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new z(F.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Dr(t,r.hs)}}function AN(n,e){const t=J(n),r=t.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function xN(n,e){const t=J(n),r=await wd(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&em(t,e.targetId,i.wa),i}async function RN(n,e){const t=J(n);return JS(t.localStore,e).then(r=>Dr(t,r))}async function PN(n,e,t,r){const i=J(n),s=await function(a,u){const c=J(a),h=J(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.Mn(f,u).next(g=>g?c.localDocuments.getDocuments(f,g):O.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await na(i.remoteStore):t==="acknowledged"||t==="rejected"?(Hg(i,e,r||null),Kg(i,e),function(a,u){J(J(a).mutationQueue).On(u)}(i.localStore,e)):ee(),await Dr(i,s)):$("SyncEngine","Cannot apply mutation batch with id: "+e)}async function CN(n,e){const t=J(n);if(ih(t),Yg(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await aI(t,r.toArray());t.Qa=!0,await Xp(t.remoteStore,!0);for(const s of i)rh(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Bo(t,o),Mo(t.localStore,o,!0))),jo(t.remoteStore,o)}),await i,await aI(t,r),function(o){const a=J(o);a.Na.forEach((u,c)=>{jo(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Ve(Y.comparator)}(t),t.Qa=!1,await Xp(t.remoteStore,!1)}}async function aI(n,e,t){const r=J(n),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await Fo(r.localStore,Kt(u[0]));for(const c of u){const h=r.Fa.get(c),f=await xN(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await YS(r.localStore,o);a=await Fo(r.localStore,c),await Gg(r,pA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function pA(n){return nS(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function kN(n){return function(t){return J(J(t).persistence).Qi()}(J(n).localStore)}async function bN(n,e,t,r){const i=J(n);if(i.Qa)return void $("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await JS(i.localStore,iS(s[0])),a=cu.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ze.EMPTY_BYTE_STRING);await Dr(i,o,a);break}case"rejected":await Mo(i.localStore,e,!0),Bo(i,e,r);break;default:ee()}}async function DN(n,e,t){const r=ih(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){$("SyncEngine","Adding an already active target "+i);continue}const s=await YS(r.localStore,i),o=await Fo(r.localStore,s);await Gg(r,pA(s),o.targetId,!1,o.resumeToken),rh(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await Mo(r.localStore,i,!1).then(()=>{jo(r.remoteStore,i),Bo(r,i)}).catch(Ri)}}function ih(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vN.bind(null,e),e.Ca.d_=aN.bind(null,e.eventManager),e.Ca.$a=lN.bind(null,e.eventManager),e}function Yg(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IN.bind(null,e),e}function NN(n,e,t){const r=J(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(T,P){const k=J(T),L=ot(P.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",S=>k.Gr.getBundleMetadata(S,P.id)).then(S=>!!S&&S.createTime.compareTo(L)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(T){return{taskState:"Success",documentsLoaded:T.totalDocuments,bytesLoaded:T.totalBytes,totalDocuments:T.totalDocuments,totalBytes:T.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(aA(u));const c=new cN(u,s.localStore,o.serializer);let h=await o.Ua();for(;h;){const g=await c.la(h);g&&a._updateProgress(g),h=await o.Ua()}const f=await c.complete();return await Dr(s,f.Ia,void 0),await function(T,P){const k=J(T);return k.persistence.runTransaction("Save bundle","readwrite",L=>k.Gr.saveBundleMetadata(L,P))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(u){return rr("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class $l{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return GS(this.persistence,new qS,e.initialUser,this.serializer)}Ga(e){return new WS(nh.Zr,this.serializer)}Wa(e){return new ZS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$l.provider={build:()=>new $l};class mA extends $l{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Yg(this.Ja.syncEngine),await na(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return GS(this.persistence,new qS,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new yD(r,e.asyncQueue,t)}Ha(e,t){const r=new Xk(t,this.persistence);return new Jk(e.asyncQueue,r)}Ga(e){const t=Vg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Ng(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,eA(),Oc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new ZS}}class VN extends mA{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Pf&&(this.sharedClientState.syncEngine={no:PN.bind(null,t),ro:bN.bind(null,t),io:DN.bind(null,t),Qi:kN.bind(null,t),eo:RN.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await CN(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=eA();if(!Pf.D(t))throw new z(F.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Vg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Pf(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Wl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SN.bind(null,this.syncEngine),await Xp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oN}()}createDatastore(e){const t=hu(e.databaseInfo.databaseId),r=function(s){return new $D(s)}(e.databaseInfo);return function(s,o,a,u){return new GD(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new HD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>oI(this.syncEngine,t,0),function(){return eI.D()?new eI:new UD}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,h){const f=new fN(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=J(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ta(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wl.provider={build:()=>new Wl};function lI(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class sh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):st("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class ON{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new Rt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new uN(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class LN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(F.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=J(i),a={documents:s.map(f=>Bl(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ge.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const g=Jb(o.serializer,f);c.set(g.key.toString(),g)});const h=[];return s.forEach(f=>{const g=c.get(f.toString());re(!!g),h.push(g)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ea(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=Y.fromPath(r);this.mutations.push(new Tg(i,this.precondition(i)))}),await async function(r,i){const s=J(r),o={writes:i.map(a=>zl(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ge.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ee();t=se.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new z(F.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(se.min())?$e.exists(!1):$e.updateTime(t):$e.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(se.min()))throw new z(F.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return $e.updateTime(t)}return $e.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class FN{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Fg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new LN(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!su(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!yS(t)}return!1}}/**
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
 */class MN{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=DT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ia(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kf(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await KS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function uI(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jg(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>tI(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>tI(e.remoteStore,i)),n._onlineComponents=e}async function Jg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await kf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;rr("Error using user provided cache. Falling back to memory cache: "+t),await kf(n,new $l)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await kf(n,new $l);return n._offlineComponents}async function oh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await uI(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await uI(n,new Wl))),n._onlineComponents}function gA(n){return Jg(n).then(e=>e.persistence)}function Xg(n){return Jg(n).then(e=>e.localStore)}function yA(n){return oh(n).then(e=>e.remoteStore)}function Zg(n){return oh(n).then(e=>e.syncEngine)}function jN(n){return oh(n).then(e=>e.datastore)}async function zo(n){const e=await oh(n),t=e.eventManager;return t.onListen=pN.bind(null,e.syncEngine),t.onUnlisten=gN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yN.bind(null,e.syncEngine),t}function UN(n){return n.asyncQueue.enqueue(async()=>{const e=await gA(n),t=await yA(n);return e.setNetworkEnabled(!0),function(i){const s=J(i);return s.L_.delete(0),fu(s)}(t)})}function BN(n){return n.asyncQueue.enqueue(async()=>{const e=await gA(n),t=await yA(n);return e.setNetworkEnabled(!1),async function(i){const s=J(i);s.L_.add(0),await ta(s),s.q_.set("Offline")}(t)})}function zN(n,e){const t=new Rt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const f=J(c);return f.persistence.runTransaction("read document","readonly",g=>f.localDocuments.getDocument(g,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new z(F.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=ia(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Xg(n),e,t)),t.promise}function _A(n,e,t={}){const r=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new sh({next:g=>{h.Za(),o.enqueueAndForget(()=>$g(s,f));const T=g.docs.has(a);!T&&g.fromCache?c.reject(new z(F.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&u&&u.source==="server"?c.reject(new z(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new qg(Xo(a.path),h,{includeMetadataChanges:!0,_a:!0});return zg(s,f)}(await zo(n),n.asyncQueue,e,t,r)),r.promise}function $N(n,e){const t=new Rt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await wd(i,s,!0),u=new cA(s,a.Ts),c=u.ma(a.documents),h=u.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const u=ia(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Xg(n),e,t)),t.promise}function vA(n,e,t={}){const r=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new sh({next:g=>{h.Za(),o.enqueueAndForget(()=>$g(s,f)),g.fromCache&&u.source==="server"?c.reject(new z(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new qg(a,h,{includeMetadataChanges:!0,_a:!0});return zg(s,f)}(await zo(n),n.asyncQueue,e,t,r)),r.promise}function WN(n,e){const t=new sh(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){J(i).Y_.add(s),s.next()}(await zo(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){J(i).Y_.delete(s)}(await zo(n),t))}}function qN(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?vS().encode(o):o,function(h,f){return new ON(h,f)}(function(h,f){if(h instanceof Uint8Array)return lI(h,f);if(h instanceof ArrayBuffer)return lI(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,hu(e));n.asyncQueue.enqueueAndForget(async()=>{NN(await Zg(n),i,r)})}function GN(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=J(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Xg(n),e))}/**
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
 */function wA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const cI=new Map;/**
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
 */function ey(n,e,t){if(!t)throw new z(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function IA(n,e,t,r){if(e===!0&&r===!0)throw new z(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dI(n){if(!Y.isDocumentKey(n))throw new z(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hI(n){if(Y.isDocumentKey(n))throw new z(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ah(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee()}function Ae(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ah(n);throw new z(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function EA(n,e){if(e<=0)throw new z(F.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class fI{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pu{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Uk;switch(r.type){case"firstParty":return new Wk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=cI.get(t);r&&($("ComponentProvider","Removing Datastore"),cI.delete(t),r.terminate())}(this),Promise.resolve()}}function KN(n,e,t,r={}){var i;const s=(n=Ae(n,pu))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=vt.MOCK_USER;else{a=oC(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new vt(c)}n._authCredentials=new Bk(new bT(a,u))}}/**
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
 */let Ht=class TA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new TA(this.firestore,e,this._query)}},Ke=class SA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new SA(this.firestore,e,this._key)}},ui=class AA extends Ht{constructor(e,t,r){super(e,t,Xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new Y(e))}withConverter(e){return new AA(this.firestore,e,this._path)}};function xA(n,e,...t){if(n=ue(n),ey("collection","path",e),n instanceof pu){const r=ge.fromString(e,...t);return hI(r),new ui(n,null,r)}{if(!(n instanceof Ke||n instanceof ui))throw new z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return hI(r),new ui(n.firestore,null,r)}}function HN(n,e){if(n=Ae(n,pu),ey("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new z(F.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ht(n,null,function(r){return new kr(ge.emptyPath(),r)}(e))}function Sd(n,e,...t){if(n=ue(n),arguments.length===1&&(e=DT.newId()),ey("doc","path",e),n instanceof pu){const r=ge.fromString(e,...t);return dI(r),new Ke(n,null,new Y(r))}{if(!(n instanceof Ke||n instanceof ui))throw new z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return dI(r),new Ke(n.firestore,n instanceof ui?n.converter:null,new Y(r))}}function RA(n,e){return n=ue(n),e=ue(e),(n instanceof Ke||n instanceof ui)&&(e instanceof Ke||e instanceof ui)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function PA(n,e){return n=ue(n),e=ue(e),n instanceof Ht&&e instanceof Ht&&n.firestore===e.firestore&&au(n._query,e._query)&&n.converter===e.converter}/**
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
 */class pI{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fg(this,"async_queue_retry"),this.Vu=()=>{const r=Oc();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Oc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Oc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Rt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Pi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw st("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Bg.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function tm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class QN{constructor(){this._progressObserver={},this._taskCompletionResolver=new Rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const YN=-1;let at=class extends pu{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new pI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pI(e),this._firestoreClient=void 0,await e}}};function Mt(n){if(n._terminated)throw new z(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||CA(n),n._firestoreClient}function CA(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,h){return new wb(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,wA(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new MN(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function JN(n,e){rr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return kA(n,Wl.provider,{build:r=>new mA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function XN(n){rr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();kA(n,Wl.provider,{build:t=>new VN(t,e.cacheSizeBytes)})}function kA(n,e,t){if((n=Ae(n,at))._firestoreClient||n._terminated)throw new z(F.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new z(F.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},CA(n)}function ZN(n){if(n._initialized&&!n._terminated)throw new z(F.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Rt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Zn.D())return Promise.resolve();const i=r+"main";await Zn.delete(i)}(Vg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function eV(n){return function(t){const r=new Rt;return t.asyncQueue.enqueueAndForget(async()=>EN(await Zg(t),r)),r.promise}(Mt(n=Ae(n,at)))}function tV(n){return UN(Mt(n=Ae(n,at)))}function nV(n){return BN(Mt(n=Ae(n,at)))}function rV(n,e){const t=Mt(n=Ae(n,at)),r=new QN;return qN(t,n._databaseId,e,r),r}function iV(n,e){return GN(Mt(n=Ae(n,at)),e).then(t=>t?new Ht(n,null,t.query):null)}/**
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
 */class sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sr(Ze.fromBase64String(e))}catch(t){throw new z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sr(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Ii=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let As=class{constructor(e){this._methodName=e}};/**
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
 */class lh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class ty{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const sV=/^__.*__$/;class oV{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zo(e,this.data,t,this.fieldTransforms)}}class bA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new br(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function DA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class uh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ad(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(DA(this.Cu)&&sV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class aV{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||hu(e)}Qu(e,t,r,i=!1){return new uh({Cu:e,methodName:t,qu:r,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xs(n){const e=n._freezeSettings(),t=hu(n._databaseId);return new aV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ch(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);ly("Data must be an object, but it was:",o,r);const a=OA(r,o);let u,c;if(s.merge)u=new nn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const g=nm(e,f,t);if(!o.contains(g))throw new z(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);FA(h,g)||h.push(g)}u=new nn(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new oV(new At(a),u,c)}class mu extends As{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mu}}function NA(n,e,t){return new uh({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ny extends As{_toFieldTransform(e){return new uu(e.path,new Vo)}isEqual(e){return e instanceof ny}}class ry extends As{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=NA(this,e,!0),r=this.Ku.map(s=>Rs(s,t)),i=new hs(r);return new uu(e.path,i)}isEqual(e){return e instanceof ry&&bl(this.Ku,e.Ku)}}class iy extends As{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=NA(this,e,!0),r=this.Ku.map(s=>Rs(s,t)),i=new fs(r);return new uu(e.path,i)}isEqual(e){return e instanceof iy&&bl(this.Ku,e.Ku)}}class sy extends As{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Oo(e.serializer,cS(e.serializer,this.$u));return new uu(e.path,t)}isEqual(e){return e instanceof sy&&this.$u===e.$u}}function oy(n,e,t,r){const i=n.Qu(1,e,t);ly("Data must be an object, but it was:",i,r);const s=[],o=At.empty();Ss(r,(u,c)=>{const h=uy(e,u,t);c=ue(c);const f=i.Nu(h);if(c instanceof mu)s.push(h);else{const g=Rs(c,f);g!=null&&(s.push(h),o.set(h,g))}});const a=new nn(s);return new bA(o,a,i.fieldTransforms)}function ay(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[nm(e,r,t)],u=[i];if(s.length%2!=0)throw new z(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(nm(e,s[g])),u.push(s[g+1]);const c=[],h=At.empty();for(let g=a.length-1;g>=0;--g)if(!FA(c,a[g])){const T=a[g];let P=u[g];P=ue(P);const k=o.Nu(T);if(P instanceof mu)c.push(T);else{const L=Rs(P,k);L!=null&&(c.push(T),h.set(T,L))}}const f=new nn(c);return new bA(h,f,o.fieldTransforms)}function VA(n,e,t,r=!1){return Rs(t,n.Qu(r?4:3,e))}function Rs(n,e){if(LA(n=ue(n)))return ly("Unsupported field value:",e,n),OA(n,e);if(n instanceof As)return function(r,i){if(!DA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Rs(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=We.fromDate(r);return{timestampValue:Lo(i.serializer,s)}}if(r instanceof We){const s=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lo(i.serializer,s)}}if(r instanceof lh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sr)return{bytesValue:ES(i.serializer,r._byteString)};if(r instanceof Ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Pg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ty)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Eg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ah(r)}`)}(n,e)}function OA(n,e){const t={};return WT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ss(n,(r,i)=>{const s=Rs(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function LA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof We||n instanceof lh||n instanceof sr||n instanceof Ke||n instanceof As||n instanceof ty)}function ly(n,e,t){if(!LA(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ah(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function nm(n,e,t){if((e=ue(e))instanceof Ii)return e._internalPath;if(typeof e=="string")return uy(n,e);throw Ad("Field path arguments must be of type string or ",n,!1,void 0,t)}const lV=new RegExp("[~\\*/\\[\\]]");function uy(n,e,t){if(e.search(lV)>=0)throw Ad(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ii(...e.split("."))._internalPath}catch{throw Ad(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ad(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(F.INVALID_ARGUMENT,a+n+u)}function FA(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ql{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uV extends ql{data(){return super.data()}}function dh(n,e){return typeof e=="string"?uy(n,e):e instanceof Ii?e._internalPath:e._delegate._internalPath}/**
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
 */function MA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cy{}class gu extends cy{}function Br(n,e,...t){let r=[];e instanceof cy&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof dy).length,a=s.filter(u=>u instanceof hh).length;if(o>1||o>0&&a>0)throw new z(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class hh extends gu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new hh(e,t,r)}_apply(e){const t=this._parse(e);return UA(e._query,t),new Ht(e.firestore,e.converter,$p(e._query,t))}_parse(e){const t=xs(e.firestore);return function(s,o,a,u,c,h,f){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){gI(f,h);const T=[];for(const P of f)T.push(mI(u,s,P));g={arrayValue:{values:T}}}else g=mI(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||gI(f,h),g=VA(a,o,f,h==="in"||h==="not-in");return ye.create(c,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cV(n,e,t){const r=e,i=dh("where",n);return hh._create(i,r,t)}class dy extends cy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dy(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)UA(o,u),o=$p(o,u)}(e._query,t),new Ht(e.firestore,e.converter,$p(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hy extends gu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new hy(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new z(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ul(s,o)}(e._query,this._field,this._direction);return new Ht(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new kr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function dV(n,e="asc"){const t=e,r=dh("orderBy",n);return hy._create(r,t)}class fh extends gu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new fh(e,t,r)}_apply(e){return new Ht(e.firestore,e.converter,gd(e._query,this._limit,this._limitType))}}function hV(n){return EA("limit",n),fh._create("limit",n,"F")}function fV(n){return EA("limitToLast",n),fh._create("limitToLast",n,"L")}class ph extends gu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ph(e,t,r)}_apply(e){const t=jA(e,this.type,this._docOrFields,this._inclusive);return new Ht(e.firestore,e.converter,function(i,s){return new kr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function pV(...n){return ph._create("startAt",n,!0)}function mV(...n){return ph._create("startAfter",n,!1)}class mh extends gu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new mh(e,t,r)}_apply(e){const t=jA(e,this.type,this._docOrFields,this._inclusive);return new Ht(e.firestore,e.converter,function(i,s){return new kr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function gV(...n){return mh._create("endBefore",n,!1)}function yV(...n){return mh._create("endAt",n,!0)}function jA(n,e,t,r){if(t[0]=ue(t[0]),t[0]instanceof ql)return function(s,o,a,u,c){if(!u)throw new z(F.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of fo(s))if(f.field.isKeyField())h.push(cs(o,u.key));else{const g=u.data.field(f.field);if(Yd(g))throw new z(F.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const T=f.field.canonicalString();throw new z(F.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${T}' (used as the orderBy) does not exist.`)}h.push(g)}return new vi(h,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=xs(n.firestore);return function(o,a,u,c,h,f){const g=o.explicitOrderBy;if(h.length>g.length)throw new z(F.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const T=[];for(let P=0;P<h.length;P++){const k=h[P];if(g[P].field.isKeyField()){if(typeof k!="string")throw new z(F.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!wg(o)&&k.indexOf("/")!==-1)throw new z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const L=o.path.child(ge.fromString(k));if(!Y.isDocumentKey(L))throw new z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const S=new Y(L);T.push(cs(a,S))}else{const L=VA(u,c,k);T.push(L)}}return new vi(T,f)}(n._query,n.firestore._databaseId,i,e,t,r)}}function mI(n,e,t){if(typeof(t=ue(t))=="string"){if(t==="")throw new z(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wg(e)&&t.indexOf("/")!==-1)throw new z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!Y.isDocumentKey(r))throw new z(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cs(n,new Y(r))}if(t instanceof Ke)return cs(n,t._key);throw new z(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ah(t)}.`)}function gI(n,e){if(!Array.isArray(n)||n.length===0)throw new z(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function UA(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new z(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class fy{convertValue(e,t="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ss(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ue(o.doubleValue));return new ty(s)}convertGeoPoint(e){return new lh(Ue(e.latitude),Ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_g(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fl(e));default:return null}}convertTimestamp(e){const t=xr(e);return new We(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);re(NS(r));const i=new yi(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(t)||st(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function gh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class _V extends fy{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}/**
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
 */class Qi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Rr=class extends ql{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(dh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},ul=class extends Rr{data(e={}){return super.data(e)}},Ei=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ul(this._firestore,this._userDataWriter,r.key,r,new Qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ul(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ul(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:vV(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function vV(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}function BA(n,e){return n instanceof Rr&&e instanceof Rr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ei&&e instanceof Ei&&n._firestore===e._firestore&&PA(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function wV(n){n=Ae(n,Ke);const e=Ae(n.firestore,at);return _A(Mt(e),n._key).then(t=>py(e,n,t))}class Ps extends fy{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}function IV(n){n=Ae(n,Ke);const e=Ae(n.firestore,at),t=Mt(e),r=new Ps(e);return zN(t,n._key).then(i=>new Rr(e,r,n._key,i,new Qi(i!==null&&i.hasLocalMutations,!0),n.converter))}function EV(n){n=Ae(n,Ke);const e=Ae(n.firestore,at);return _A(Mt(e),n._key,{source:"server"}).then(t=>py(e,n,t))}function TV(n){n=Ae(n,Ht);const e=Ae(n.firestore,at),t=Mt(e),r=new Ps(e);return MA(n._query),vA(t,n._query).then(i=>new Ei(e,r,n,i))}function SV(n){n=Ae(n,Ht);const e=Ae(n.firestore,at),t=Mt(e),r=new Ps(e);return $N(t,n._query).then(i=>new Ei(e,r,n,i))}function AV(n){n=Ae(n,Ht);const e=Ae(n.firestore,at),t=Mt(e),r=new Ps(e);return vA(t,n._query,{source:"server"}).then(i=>new Ei(e,r,n,i))}function yI(n,e,t){n=Ae(n,Ke);const r=Ae(n.firestore,at),i=gh(n.converter,e,t);return yu(r,[ch(xs(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,$e.none())])}function _I(n,e,t,...r){n=Ae(n,Ke);const i=Ae(n.firestore,at),s=xs(i);let o;return o=typeof(e=ue(e))=="string"||e instanceof Ii?ay(s,"updateDoc",n._key,e,t,r):oy(s,"updateDoc",n._key,e),yu(i,[o.toMutation(n._key,$e.exists(!0))])}function xV(n){return yu(Ae(n.firestore,at),[new ea(n._key,$e.none())])}function RV(n,e){const t=Ae(n.firestore,at),r=Sd(n),i=gh(n.converter,e);return yu(t,[ch(xs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,$e.exists(!1))]).then(()=>r)}function zA(n,...e){var t,r,i;n=ue(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||tm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(tm(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(n instanceof Ke)c=Ae(n.firestore,at),h=Xo(n._key.path),u={next:f=>{e[o]&&e[o](py(c,n,f))},error:e[o+1],complete:e[o+2]};else{const f=Ae(n,Ht);c=Ae(f.firestore,at),h=f._query;const g=new Ps(c);u={next:T=>{e[o]&&e[o](new Ei(c,g,f,T))},error:e[o+1],complete:e[o+2]},MA(n._query)}return function(g,T,P,k){const L=new sh(k),S=new qg(T,L,P);return g.asyncQueue.enqueueAndForget(async()=>zg(await zo(g),S)),()=>{L.Za(),g.asyncQueue.enqueueAndForget(async()=>$g(await zo(g),S))}}(Mt(c),h,a,u)}function PV(n,e){return WN(Mt(n=Ae(n,at)),tm(e)?e:{next:e})}function yu(n,e){return function(r,i){const s=new Rt;return r.asyncQueue.enqueueAndForget(async()=>_N(await Zg(r),i,s)),s.promise}(Mt(n),e)}function py(n,e,t){const r=t.docs.get(e._key),i=new Ps(n);return new Rr(n,i,e._key,r,new Qi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const CV={maxAttempts:5};/**
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
 */let kV=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=xs(e)}set(e,t,r){this._verifyNotCommitted();const i=Hr(e,this._firestore),s=gh(i.converter,t,r),o=ch(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,$e.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Hr(e,this._firestore);let o;return o=typeof(t=ue(t))=="string"||t instanceof Ii?ay(this._dataReader,"WriteBatch.update",s._key,t,r,i):oy(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,$e.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Hr(e,this._firestore);return this._mutations=this._mutations.concat(new ea(t._key,$e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Hr(n,e){if((n=ue(n)).firestore!==e)throw new z(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let bV=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=xs(t)}get(t){const r=Hr(t,this._firestore),i=new _V(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return ee();const o=s[0];if(o.isFoundDocument())return new ql(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ql(this._firestore,i,r._key,null,r.converter);throw ee()})}set(t,r,i){const s=Hr(t,this._firestore),o=gh(s.converter,r,i),a=ch(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=Hr(t,this._firestore);let a;return a=typeof(r=ue(r))=="string"||r instanceof Ii?ay(this._dataReader,"Transaction.update",o._key,r,i,s):oy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Hr(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Hr(e,this._firestore),r=new Ps(this._firestore);return super.get(e).then(i=>new Rr(this._firestore,r,t._key,i._document,new Qi(!1,!1),t.converter))}};function DV(n,e,t){n=Ae(n,at);const r=Object.assign(Object.assign({},CV),t);return function(s){if(s.maxAttempts<1)throw new z(F.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new Rt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await jN(s);new FN(s.asyncQueue,c,a,o,u).au()}),u.promise}(Mt(n),i=>e(new bV(n,i)),r)}/**
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
 */function NV(){return new mu("deleteField")}function VV(){return new ny("serverTimestamp")}function OV(...n){return new ry("arrayUnion",n)}function LV(...n){return new iy("arrayRemove",n)}function FV(n){return new sy("increment",n)}(function(e,t=!0){(function(i){Jo=i})(xi),pi(new nr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new at(new zk(r.getProvider("auth-internal")),new Gk(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Fn(aw,"4.7.3",e),Fn(aw,"4.7.3","esm2017")})();const MV="@firebase/firestore-compat",jV="0.3.38";/**
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
 */function my(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new z("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function vI(){if(typeof Uint8Array>"u")throw new z("unimplemented","Uint8Arrays are not available in this environment.")}function wI(){if(!_b())throw new z("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Gl{constructor(e){this._delegate=e}static fromBase64String(e){return wI(),new Gl(sr.fromBase64String(e))}static fromUint8Array(e){return vI(),new Gl(sr.fromUint8Array(e))}toBase64(){return wI(),this._delegate.toBase64()}toUint8Array(){return vI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function rm(n){return UV(n,["next","error","complete"])}function UV(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class BV{enableIndexedDbPersistence(e,t){return JN(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return XN(e._delegate)}clearIndexedDbPersistence(e){return ZN(e._delegate)}}class $A{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof yi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&rr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){KN(this._delegate,e,t,r)}enableNetwork(){return tV(this._delegate)}disableNetwork(){return nV(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,IA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return eV(this._delegate)}onSnapshotsInSync(e){return PV(this._delegate,e)}get app(){if(!this._appCompat)throw new z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new $o(this,xA(this._delegate,e))}catch(t){throw $t(t,"collection()","Firestore.collection()")}}doc(e){try{return new Sn(this,Sd(this._delegate,e))}catch(t){throw $t(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new zt(this,HN(this._delegate,e))}catch(t){throw $t(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return DV(this._delegate,t=>e(new WA(this,t)))}batch(){return Mt(this._delegate),new qA(new kV(this._delegate,e=>yu(this._delegate,e)))}loadBundle(e){return rV(this._delegate,e)}namedQuery(e){return iV(this._delegate,e).then(t=>t?new zt(this,t):null)}}class yh extends fy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gl(new sr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Sn.forKey(t,this.firestore,null)}}function zV(n){Mk(n)}class WA{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new yh(e)}get(e){const t=Yi(e);return this._delegate.get(t).then(r=>new Kl(this._firestore,new Rr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Yi(e);return r?(my("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Yi(e);return this._delegate.delete(t),this}}class qA{constructor(e){this._delegate=e}set(e,t,r){const i=Yi(e);return r?(my("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Yi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ys{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new ul(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Hl(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ys.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new ys(e,new yh(e),t),i.set(t,s)),s}}ys.INSTANCES=new WeakMap;class Sn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new yh(e)}static forPath(e,t,r){if(e.length%2!==0)throw new z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Sn(t,new Ke(t._delegate,r,new Y(e)))}static forKey(e,t,r){return new Sn(t,new Ke(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new $o(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new $o(this.firestore,xA(this._delegate,e))}catch(t){throw $t(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ue(e),e instanceof Ke?RA(this._delegate,e):!1}set(e,t){t=my("DocumentReference.set",t);try{return t?yI(this._delegate,e,t):yI(this._delegate,e)}catch(r){throw $t(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?_I(this._delegate,e):_I(this._delegate,e,t,...r)}catch(i){throw $t(i,"updateDoc()","DocumentReference.update()")}}delete(){return xV(this._delegate)}onSnapshot(...e){const t=GA(e),r=KA(e,i=>new Kl(this.firestore,new Rr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return zA(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=IV(this._delegate):(e==null?void 0:e.source)==="server"?t=EV(this._delegate):t=wV(this._delegate),t.then(r=>new Kl(this.firestore,new Rr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Sn(this.firestore,e?this._delegate.withConverter(ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $t(n,e,t){return n.message=n.message.replace(e,t),n}function GA(n){for(const e of n)if(typeof e=="object"&&!rm(e))return e;return{}}function KA(n,e){var t,r;let i;return rm(n[0])?i=n[0]:rm(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Kl{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Sn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return BA(this._delegate,e._delegate)}}class Hl extends Kl{data(e){const t=this._delegate.data(e);return this._delegate._converter||jk(t!==void 0),t}}class zt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new yh(e)}where(e,t,r){try{return new zt(this.firestore,Br(this._delegate,cV(e,t,r)))}catch(i){throw $t(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new zt(this.firestore,Br(this._delegate,dV(e,t)))}catch(r){throw $t(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new zt(this.firestore,Br(this._delegate,hV(e)))}catch(t){throw $t(t,"limit()","Query.limit()")}}limitToLast(e){try{return new zt(this.firestore,Br(this._delegate,fV(e)))}catch(t){throw $t(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new zt(this.firestore,Br(this._delegate,pV(...e)))}catch(t){throw $t(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new zt(this.firestore,Br(this._delegate,mV(...e)))}catch(t){throw $t(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new zt(this.firestore,Br(this._delegate,gV(...e)))}catch(t){throw $t(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new zt(this.firestore,Br(this._delegate,yV(...e)))}catch(t){throw $t(t,"endAt()","Query.endAt()")}}isEqual(e){return PA(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=SV(this._delegate):(e==null?void 0:e.source)==="server"?t=AV(this._delegate):t=TV(this._delegate),t.then(r=>new im(this.firestore,new Ei(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=GA(e),r=KA(e,i=>new im(this.firestore,new Ei(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return zA(this._delegate,t,r)}withConverter(e){return new zt(this.firestore,e?this._delegate.withConverter(ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class $V{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Hl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class im{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new zt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Hl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new $V(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Hl(this._firestore,r))})}isEqual(e){return BA(this._delegate,e._delegate)}}class $o extends zt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Sn(this.firestore,e):null}doc(e){try{return e===void 0?new Sn(this.firestore,Sd(this._delegate)):new Sn(this.firestore,Sd(this._delegate,e))}catch(t){throw $t(t,"doc()","CollectionReference.doc()")}}add(e){return RV(this._delegate,e).then(t=>new Sn(this.firestore,t))}isEqual(e){return RA(this._delegate,e._delegate)}withConverter(e){return new $o(this.firestore,e?this._delegate.withConverter(ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Yi(n){return Ae(n,Ke)}/**
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
 */class gy{constructor(...e){this._delegate=new Ii(...e)}static documentId(){return new gy(ze.keyField().canonicalString())}isEqual(e){return e=ue(e),e instanceof Ii?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class qi{constructor(e){this._delegate=e}static serverTimestamp(){const e=VV();return e._methodName="FieldValue.serverTimestamp",new qi(e)}static delete(){const e=NV();return e._methodName="FieldValue.delete",new qi(e)}static arrayUnion(...e){const t=OV(...e);return t._methodName="FieldValue.arrayUnion",new qi(t)}static arrayRemove(...e){const t=LV(...e);return t._methodName="FieldValue.arrayRemove",new qi(t)}static increment(e){const t=FV(e);return t._methodName="FieldValue.increment",new qi(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const WV={Firestore:$A,GeoPoint:lh,Timestamp:We,Blob:Gl,Transaction:WA,WriteBatch:qA,DocumentReference:Sn,DocumentSnapshot:Kl,Query:zt,QueryDocumentSnapshot:Hl,QuerySnapshot:im,CollectionReference:$o,FieldPath:gy,FieldValue:qi,setLogLevel:zV,CACHE_SIZE_UNLIMITED:YN};function qV(n,e){n.INTERNAL.registerComponent(new nr("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},WV)))}/**
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
 */function GV(n){qV(n,(e,t)=>new $A(e,t,new BV)),n.registerVersion(MV,jV)}GV(dn);function yy(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Oa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Us={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function KV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function HA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HV=KV,QV=HA,QA=new Ts("auth","Firebase",HA());/**
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
 */const xd=new Hd("@firebase/auth");function YV(n,...e){xd.logLevel<=pe.WARN&&xd.warn(`Auth (${xi}): ${n}`,...e)}function Lc(n,...e){xd.logLevel<=pe.ERROR&&xd.error(`Auth (${xi}): ${n}`,...e)}/**
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
 */function Ct(n,...e){throw vy(n,...e)}function mt(n,...e){return vy(n,...e)}function _y(n,e,t){const r=Object.assign(Object.assign({},QV()),{[e]:t});return new Ts("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return _y(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sa(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ct(n,"argument-error"),_y(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vy(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return QA.create(n,...e)}function G(n,e,...t){if(!n)throw vy(e,...t)}function Yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Lc(e),new Error(e)}function jn(n,e){n||Yn(e)}/**
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
 */function Ql(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wy(){return II()==="http:"||II()==="https:"}function II(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function JV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wy()||lT()||"connection"in navigator)?navigator.onLine:!0}function XV(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class _u{constructor(e,t){this.shortDelay=e,this.longDelay=t,jn(t>e,"Short delay should be less than long delay!"),this.isMobile=aC()||ug()}get(){return JV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Iy(n,e){jn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class YA{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eO=new _u(3e4,6e4);function tt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function nt(n,e,t,r,i={}){return JA(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yo(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return uC()||(c.referrerPolicy="no-referrer"),YA.fetch()(XA(n,n.config.apiHost,t,a),c)})}async function JA(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZV),e);try{const i=new nO(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ka(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ka(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ka(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _y(n,h,c);Ct(n,h)}}catch(i){if(i instanceof qt)throw i;Ct(n,"network-request-failed",{message:String(i)})}}async function Nr(n,e,t,r,i={}){const s=await nt(n,e,t,r,i);return"mfaPendingCredential"in s&&Ct(n,"multi-factor-auth-required",{_serverResponse:s}),s}function XA(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Iy(n.config,i):`${n.config.apiScheme}://${i}`}function tO(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),eO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ka(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=mt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */function EI(n){return n!==void 0&&n.getResponse!==void 0}function TI(n){return n!==void 0&&n.enterprise!==void 0}class rO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tO(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function iO(n){return(await nt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function sO(n,e){return nt(n,"GET","/v2/recaptchaConfig",tt(n,e))}/**
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
 */async function oO(n,e){return nt(n,"POST","/v1/accounts:delete",e)}async function aO(n,e){return nt(n,"POST","/v1/accounts:update",e)}async function ZA(n,e){return nt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function cl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lO(n,e=!1){const t=ue(n),r=await t.getIdToken(e),i=_h(r);G(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cl(bf(i.auth_time)),issuedAtTime:cl(bf(i.iat)),expirationTime:cl(bf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bf(n){return Number(n)*1e3}function _h(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const i=iT(t);return i?JSON.parse(i):(Lc("Failed to decode base64 JWT payload"),null)}catch(i){return Lc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function SI(n){const e=_h(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qt&&uO(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class cO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yl(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Pr(n,ZA(t,{idToken:r}));G(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ex(s.providerUserInfo):[],a=hO(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function dO(n){const e=ue(n);await Yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hO(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ex(n){return n.map(e=>{var{providerId:t}=e,r=yy(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fO(n,e){const t=await JA(n,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=XA(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",YA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pO(n,e){return nt(n,"POST","/v2/accounts:revokeToken",tt(n,e))}/**
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
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):SI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=SI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await fO(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new mo;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function zr(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=yy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lO(this,e)}reload(){return dO(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Pr(this,oO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,h;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,T=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(a=t.tenantId)!==null&&a!==void 0?a:void 0,L=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:N,isAnonymous:U,providerData:B,stsTokenManager:_}=t;G(A&&_,e,"internal-error");const y=mo.fromJSON(this.name,_);G(typeof A=="string",e,"internal-error"),zr(f,e.name),zr(g,e.name),G(typeof N=="boolean",e,"internal-error"),G(typeof U=="boolean",e,"internal-error"),zr(T,e.name),zr(P,e.name),zr(k,e.name),zr(L,e.name),zr(S,e.name),zr(w,e.name);const I=new pr({uid:A,auth:e,email:g,emailVerified:N,displayName:f,isAnonymous:U,photoURL:P,phoneNumber:T,tenantId:k,stsTokenManager:y,createdAt:S,lastLoginAt:w});return B&&Array.isArray(B)&&(I.providerData=B.map(R=>Object.assign({},R))),L&&(I._redirectEventId=L),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new mo;i.updateFromServerResponse(t);const s=new pr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yl(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ex(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new mo;a.updateFromIdToken(r);const u=new pr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const AI=new Map;function fn(n){jn(n instanceof Function,"Expected a class definition");let e=AI.get(n);return e?(jn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,AI.set(n,e),e)}/**
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
 */class tx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tx.type="NONE";const Wo=tx;/**
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
 */function ns(n,e,t){return`firebase:${n}:${e}:${t}`}class go{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ns(this.userKey,i.apiKey,s),this.fullPersistenceKey=ns("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new go(fn(Wo),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||fn(Wo);const o=ns(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const f=pr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new go(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new go(s,e,r))}}/**
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
 */function xI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ox(e))return"Blackberry";if(ax(e))return"Webos";if(rx(e))return"Safari";if((e.includes("chrome/")||ix(e))&&!e.includes("edge/"))return"Chrome";if(vu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nx(n=Qe()){return/firefox\//i.test(n)}function rx(n=Qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ix(n=Qe()){return/crios\//i.test(n)}function sx(n=Qe()){return/iemobile/i.test(n)}function vu(n=Qe()){return/android/i.test(n)}function ox(n=Qe()){return/blackberry/i.test(n)}function ax(n=Qe()){return/webos/i.test(n)}function wu(n=Qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mO(n=Qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function gO(n=Qe()){var e;return wu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yO(){return uT()&&document.documentMode===10}function lx(n=Qe()){return wu(n)||vu(n)||ax(n)||ox(n)||/windows phone/i.test(n)||sx(n)}/**
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
 */function ux(n,e=[]){let t;switch(n){case"Browser":t=xI(Qe());break;case"Worker":t=`${xI(Qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xi}/${r}`}/**
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
 */class _O{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vO(n,e={}){return nt(n,"GET","/v2/passwordPolicy",tt(n,e))}/**
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
 */const wO=6;class IO{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:wO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class EO{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new RI(this),this.idTokenSubscription=new RI(this),this.beforeStateQueue=new _O(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await go.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ZA(this,{idToken:e}),r=await pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(It(this));const t=e?ue(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vO(this),t=new IO(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fn(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await go.create(this,[fn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ux(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&YV(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function et(n){return ue(n)}class RI{constructor(e){this.auth=e,this.observer=null,this.addObserver=dT(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TO(n){Iu=n}function Ey(n){return Iu.loadJS(n)}function SO(){return Iu.recaptchaV2Script}function AO(){return Iu.recaptchaEnterpriseScript}function xO(){return Iu.gapiScript}function cx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const RO="recaptcha-enterprise",PO="NO_RECAPTCHA";class CO{constructor(e){this.type=RO,this.auth=et(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{sO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new rO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;TI(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(PO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&TI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=AO();u.length!==0&&(u+=a),Ey(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function PI(n,e,t,r=!1){const i=new CO(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jl(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await PI(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await PI(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function kO(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(fn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bO(n,e,t){const r=et(n);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=dx(e),{host:o,port:a}=DO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NO()}function dx(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function DO(n){const e=dx(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:CI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:CI(o)}}}function CI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function NO(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class oa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,t){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
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
 */async function hx(n,e){return nt(n,"POST","/v1/accounts:resetPassword",tt(n,e))}async function VO(n,e){return nt(n,"POST","/v1/accounts:update",e)}async function OO(n,e){return nt(n,"POST","/v1/accounts:signUp",e)}async function LO(n,e){return nt(n,"POST","/v1/accounts:update",tt(n,e))}/**
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
 */async function FO(n,e){return Nr(n,"POST","/v1/accounts:signInWithPassword",tt(n,e))}async function vh(n,e){return nt(n,"POST","/v1/accounts:sendOobCode",tt(n,e))}async function MO(n,e){return vh(n,e)}async function jO(n,e){return vh(n,e)}async function UO(n,e){return vh(n,e)}async function BO(n,e){return vh(n,e)}/**
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
 */async function zO(n,e){return Nr(n,"POST","/v1/accounts:signInWithEmailLink",tt(n,e))}async function $O(n,e){return Nr(n,"POST","/v1/accounts:signInWithEmailLink",tt(n,e))}/**
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
 */class Xl extends oa{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Xl(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Xl(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jl(e,t,"signInWithPassword",FO);case"emailLink":return zO(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jl(e,r,"signUpPassword",OO);case"emailLink":return $O(e,{idToken:t,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vr(n,e){return Nr(n,"POST","/v1/accounts:signInWithIdp",tt(n,e))}/**
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
 */const WO="http://localhost";class or extends oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=yy(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vr(e,t)}buildRequest(){const e={requestUri:WO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yo(t)}return e}}/**
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
 */async function qO(n,e){return nt(n,"POST","/v1/accounts:sendVerificationCode",tt(n,e))}async function GO(n,e){return Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,e))}async function KO(n,e){const t=await Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,e));if(t.temporaryProof)throw Ka(n,"account-exists-with-different-credential",t);return t}const HO={USER_NOT_FOUND:"user-not-found"};async function QO(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,t),HO)}/**
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
 */class rs extends oa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new rs({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new rs({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return GO(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return KO(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return QO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new rs({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function YO(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JO(n){const e=io(za(n)).link,t=e?io(za(e)).deep_link_id:null,r=io(za(n)).deep_link_id;return(r?io(za(r)).link:null)||r||t||e||n}class wh{constructor(e){var t,r,i,s,o,a;const u=io(za(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=YO((i=u.mode)!==null&&i!==void 0?i:null);G(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=JO(e);try{return new wh(t)}catch{return null}}}/**
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
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,t){return Xl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wh.parseLink(t);return G(r,"argument-error"),Xl._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class aa extends Vr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class yo extends aa{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return G("providerId"in t&&"signInMethod"in t,"argument-error"),or._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),or._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return yo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return yo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new yo(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Wn extends aa{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return or._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return qn.credential(t,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Gn extends aa{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */const XO="http://localhost";class qo extends oa{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new qo(r,s)}static _create(e,t){return new qo(e,t)}buildRequest(){return{requestUri:XO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const ZO="saml.";class Rd extends Vr{constructor(e){G(e.startsWith(ZO),"argument-error"),super(e)}static credentialFromResult(e){return Rd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Rd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=qo.fromJSON(e);return G(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return qo._create(r,t)}catch{return null}}}/**
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
 */class Kn extends aa{constructor(){super("twitter.com")}static credential(e,t){return or._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kn.credential(t,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */async function fx(n,e){return Nr(n,"POST","/v1/accounts:signUp",tt(n,e))}/**
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
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await pr._fromIdTokenResponse(e,r,i),o=kI(r);return new Cn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=kI(r);return new Cn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function kI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function e2(n){var e;if(Xe(n.app))return Promise.reject(It(n));const t=et(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Cn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await fx(t,{returnSecureToken:!0}),i=await Cn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Pd extends qt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Pd(e,t,r,i)}}function px(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pd._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function mx(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function t2(n,e){const t=ue(n);await Ih(!0,t,e);const{providerUserInfo:r}=await aO(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=mx(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ty(n,e,t=!1){const r=await Pr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Cn._forOperation(n,"link",r)}async function Ih(n,e,t){await Yl(e);const r=mx(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";G(r.has(t)===n,e.auth,i)}/**
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
 */async function gx(n,e,t=!1){const{auth:r}=n;if(Xe(r.app))return Promise.reject(It(r));const i="reauthenticate";try{const s=await Pr(n,px(r,i,e,n),t);G(s.idToken,r,"internal-error");const o=_h(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(n.uid===a,r,"user-mismatch"),Cn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),s}}/**
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
 */async function yx(n,e,t=!1){if(Xe(n.app))return Promise.reject(It(n));const r="signIn",i=await px(n,r,e),s=await Cn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Eh(n,e){return yx(et(n),e)}async function _x(n,e){const t=ue(n);return await Ih(!1,t,e.providerId),Ty(t,e)}async function vx(n,e){return gx(ue(n),e)}/**
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
 */async function n2(n,e){return Nr(n,"POST","/v1/accounts:signInWithCustomToken",tt(n,e))}/**
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
 */async function r2(n,e){if(Xe(n.app))return Promise.reject(It(n));const t=et(n),r=await n2(t,{token:e,returnSecureToken:!0}),i=await Cn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Eu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Sy._fromServerResponse(e,t):"totpInfo"in t?Ay._fromServerResponse(e,t):Ct(e,"internal-error")}}class Sy extends Eu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Sy(t)}}class Ay extends Eu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ay(t)}}/**
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
 */function Th(n,e,t){var r;G(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),G(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(G(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(G(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function xy(n){const e=et(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function i2(n,e,t){const r=et(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Th(r,i,t),await Jl(r,i,"getOobCode",jO)}async function s2(n,e,t){await hx(ue(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xy(n),r})}async function o2(n,e){await LO(ue(n),{oobCode:e})}async function wx(n,e){const t=ue(n),r=await hx(t,{oobCode:e}),i=r.requestType;switch(G(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":G(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":G(r.mfaInfo,t,"internal-error");default:G(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Eu._fromServerResponse(et(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function a2(n,e){const{data:t}=await wx(ue(n),e);return t.email}async function l2(n,e,t){if(Xe(n.app))return Promise.reject(It(n));const r=et(n),o=await Jl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&xy(n),u}),a=await Cn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function u2(n,e,t){return Xe(n.app)?Promise.reject(It(n)):Eh(ue(n),bi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xy(n),r})}/**
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
 */async function c2(n,e,t){const r=et(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){G(a.handleCodeInApp,r,"argument-error"),a&&Th(r,o,a)}s(i,t),await Jl(r,i,"getOobCode",UO)}function d2(n,e){const t=wh.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function h2(n,e,t){if(Xe(n.app))return Promise.reject(It(n));const r=ue(n),i=bi.credentialWithLink(e,t||Ql());return G(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Eh(r,i)}/**
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
 */async function f2(n,e){return nt(n,"POST","/v1/accounts:createAuthUri",tt(n,e))}/**
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
 */async function p2(n,e){const t=wy()?Ql():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await f2(ue(n),r);return i||[]}async function m2(n,e){const t=ue(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Th(t.auth,i,e);const{email:s}=await MO(t.auth,i);s!==n.email&&await n.reload()}async function g2(n,e,t){const r=ue(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Th(r.auth,s,t);const{email:o}=await BO(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function y2(n,e){return nt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function _2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ue(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Pr(r,y2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function v2(n,e){const t=ue(n);return Xe(t.auth.app)?Promise.reject(It(t.auth)):Ix(t,e,null)}function w2(n,e){return Ix(ue(n),null,e)}async function Ix(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Pr(n,VO(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function I2(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=_h(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new _o(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new E2(s,i);case"github.com":return new T2(s,i);case"google.com":return new S2(s,i);case"twitter.com":return new A2(s,i,n.screenName||null);case"custom":case"anonymous":return new _o(s,null);default:return new _o(s,r,i)}}class _o{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Ex extends _o{constructor(e,t,r,i){super(e,t,r),this.username=i}}class E2 extends _o{constructor(e,t){super(e,"facebook.com",t)}}class T2 extends Ex{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class S2 extends _o{constructor(e,t){super(e,"google.com",t)}}class A2 extends Ex{constructor(e,t,r){super(e,"twitter.com",t,r)}}function x2(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:I2(t)}/**
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
 */class Ji{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Ji("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ji("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Ji._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ji._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Ry{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=et(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Eu._fromServerResponse(r,a));G(i.mfaPendingCredential,r,"internal-error");const o=Ji._fromMfaPendingCredential(i.mfaPendingCredential);return new Ry(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const h=await Cn._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return G(t.user,r,"internal-error"),Cn._forOperation(t.user,t.operationType,c);default:Ct(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function R2(n,e){var t;const r=ue(n),i=e;return G(e.customData.operationType,r,"argument-error"),G((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Ry._fromError(r,i)}/**
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
 */function P2(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:start",tt(n,e))}function C2(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:finalize",tt(n,e))}function k2(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",tt(n,e))}class Py{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Eu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Py(e)}async getSession(){return Ji._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Pr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Pr(this.user,k2(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Df=new WeakMap;function b2(n){const e=ue(n);return Df.has(e)||Df.set(e,Py._fromUser(e)),Df.get(e)}const Cd="__sak";/**
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
 */class Tx{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cd,"1"),this.storage.removeItem(Cd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const D2=1e3,N2=10;class Sx extends Tx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,N2):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},D2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sx.type="LOCAL";const Cy=Sx;/**
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
 */class Ax extends Tx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ax.type="SESSION";const _s=Ax;/**
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
 */function V2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await V2(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
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
 */function Tu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class O2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Tu("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dt(){return window}function L2(n){dt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function ky(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function F2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M2(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function j2(){return ky()?self:null}/**
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
 */const xx="firebaseLocalStorageDb",U2=1,kd="firebaseLocalStorage",Rx="fbase_key";class Su{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ah(n,e){return n.transaction([kd],e?"readwrite":"readonly").objectStore(kd)}function B2(){const n=indexedDB.deleteDatabase(xx);return new Su(n).toPromise()}function om(){const n=indexedDB.open(xx,U2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(kd,{keyPath:Rx})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(kd)?e(r):(r.close(),await B2(),e(await om()))})})}async function bI(n,e,t){const r=Ah(n,!0).put({[Rx]:e,value:t});return new Su(r).toPromise()}async function z2(n,e){const t=Ah(n,!1).get(e),r=await new Su(t).toPromise();return r===void 0?null:r.value}function DI(n,e){const t=Ah(n,!0).delete(e);return new Su(t).toPromise()}const $2=800,W2=3;class Px{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await om(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>W2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(j2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await F2(),!this.activeServiceWorker)return;this.sender=new O2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await om();return await bI(e,Cd,"1"),await DI(e,Cd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>bI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>z2(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>DI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ah(i,!1).getAll();return new Su(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Px.type="LOCAL";const Zl=Px;/**
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
 */function q2(n,e){return nt(n,"POST","/v2/accounts/mfaSignIn:start",tt(n,e))}function G2(n,e){return nt(n,"POST","/v2/accounts/mfaSignIn:finalize",tt(n,e))}/**
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
 */const K2=500,H2=6e4,dc=1e12;class Q2{constructor(e){this.auth=e,this.counter=dc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Y2(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||dc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||dc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||dc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Y2{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;G(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=J2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},H2)},K2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function J2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Nf=cx("rcb"),X2=new _u(3e4,6e4);class Z2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=dt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return G(eL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&EI(dt().grecaptcha)?Promise.resolve(dt().grecaptcha):new Promise((r,i)=>{const s=dt().setTimeout(()=>{i(mt(e,"network-request-failed"))},X2.get());dt()[Nf]=()=>{dt().clearTimeout(s),delete dt()[Nf];const a=dt().grecaptcha;if(!a||!EI(a)){i(mt(e,"internal-error"));return}const u=a.render;a.render=(c,h)=>{const f=u(c,h);return this.counter++,f},this.hostLanguage=t,r(a)};const o=`${SO()}?${Yo({onload:Nf,render:"explicit",hl:t})}`;Ey(o).catch(()=>{clearTimeout(s),i(mt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=dt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function eL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class tL{async load(e){return new Q2(e)}clearedOneInstance(){}}/**
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
 */const Cx="recaptcha",nL={theme:"light",type:"image"};let rL=class{constructor(e,t,r=Object.assign({},nL)){this.parameters=r,this.type=Cx,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=et(e),this.isInvisible=this.parameters.size==="invisible",G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;G(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tL:new Z2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){G(!this.parameters.sitekey,this.auth,"argument-error"),G(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=dt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){G(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){G(wy()&&!ky(),this.auth,"internal-error"),await iL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await iO(this.auth);G(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return G(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function iL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class by{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=rs._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function sL(n,e,t){if(Xe(n.app))return Promise.reject(It(n));const r=et(n),i=await xh(r,e,ue(t));return new by(i,s=>Eh(r,s))}async function oL(n,e,t){const r=ue(n);await Ih(!1,r,"phone");const i=await xh(r.auth,e,ue(t));return new by(i,s=>_x(r,s))}async function aL(n,e,t){const r=ue(n);if(Xe(r.auth.app))return Promise.reject(It(r.auth));const i=await xh(r.auth,e,ue(t));return new by(i,s=>vx(r,s))}async function xh(n,e,t){var r;const i=await t.verify();try{G(typeof i=="string",n,"argument-error"),G(t.type===Cx,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return G(o.type==="enroll",n,"internal-error"),(await P2(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{G(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return G(a,n,"missing-multi-factor-info"),(await q2(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await qO(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function lL(n,e){const t=ue(n);if(Xe(t.auth.app))return Promise.reject(It(t.auth));await Ty(t,e)}/**
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
 */let vs=class Fc{constructor(e){this.providerId=Fc.PROVIDER_ID,this.auth=et(e)}verifyPhoneNumber(e,t){return xh(this.auth,e,ue(t))}static credential(e,t){return rs._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Fc.credentialFromTaggedObject(t)}static credentialFromError(e){return Fc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?rs._fromTokenResponse(t,r):null}};vs.PROVIDER_ID="phone";vs.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Cs(n,e){return e?fn(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Dy extends oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uL(n){return yx(n.auth,new Dy(n),n.bypassAuthState)}function cL(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),gx(t,new Dy(n),n.bypassAuthState)}async function dL(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),Ty(t,new Dy(n),n.bypassAuthState)}/**
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
 */class kx{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uL;case"linkViaPopup":case"linkViaRedirect":return dL;case"reauthViaPopup":case"reauthViaRedirect":return cL;default:Ct(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hL=new _u(2e3,1e4);async function fL(n,e,t){if(Xe(n.app))return Promise.reject(mt(n,"operation-not-supported-in-this-environment"));const r=et(n);sa(n,e,Vr);const i=Cs(r,t);return new mr(r,"signInViaPopup",e,i).executeNotNull()}async function pL(n,e,t){const r=ue(n);if(Xe(r.auth.app))return Promise.reject(mt(r.auth,"operation-not-supported-in-this-environment"));sa(r.auth,e,Vr);const i=Cs(r.auth,t);return new mr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function mL(n,e,t){const r=ue(n);sa(r.auth,e,Vr);const i=Cs(r.auth,t);return new mr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class mr extends kx{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hL.get())};e()}}mr.currentPopupAction=null;/**
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
 */const gL="pendingRedirect",dl=new Map;class yL extends kx{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=dl.get(this.auth._key());if(!e){try{const r=await _L(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}dl.set(this.auth._key(),e)}return this.bypassAuthState||dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _L(n,e){const t=Dx(e),r=bx(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Ny(n,e){return bx(n)._set(Dx(e),"true")}function vL(){dl.clear()}function Vy(n,e){dl.set(n._key(),e)}function bx(n){return fn(n._redirectPersistence)}function Dx(n){return ns(gL,n.config.apiKey,n.name)}/**
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
 */function wL(n,e,t){return IL(n,e,t)}async function IL(n,e,t){if(Xe(n.app))return Promise.reject(It(n));const r=et(n);sa(n,e,Vr),await r._initializationPromise;const i=Cs(r,t);return await Ny(i,r),i._openRedirect(r,e,"signInViaRedirect")}function EL(n,e,t){return TL(n,e,t)}async function TL(n,e,t){const r=ue(n);if(sa(r.auth,e,Vr),Xe(r.auth.app))return Promise.reject(It(r.auth));await r.auth._initializationPromise;const i=Cs(r.auth,t);await Ny(i,r.auth);const s=await Nx(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function SL(n,e,t){return AL(n,e,t)}async function AL(n,e,t){const r=ue(n);sa(r.auth,e,Vr),await r.auth._initializationPromise;const i=Cs(r.auth,t);await Ih(!1,r,e.providerId),await Ny(i,r.auth);const s=await Nx(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function xL(n,e){return await et(n)._initializationPromise,Rh(n,e,!1)}async function Rh(n,e,t=!1){if(Xe(n.app))return Promise.reject(It(n));const r=et(n),i=Cs(r,e),o=await new yL(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Nx(n){const e=Tu(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const RL=10*60*1e3;class Vx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ox(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RL&&this.cachedEventUids.clear(),this.cachedEventUids.has(NI(e))}saveEventToCache(e){this.cachedEventUids.add(NI(e)),this.lastProcessedEventTime=Date.now()}}function NI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ox({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ox(n);default:return!1}}/**
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
 */async function Lx(n,e={}){return nt(n,"GET","/v1/projects",e)}/**
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
 */const CL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kL=/^https?/;async function bL(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Lx(n);for(const t of e)try{if(DL(t))return}catch{}Ct(n,"unauthorized-domain")}function DL(n){const e=Ql(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!kL.test(t))return!1;if(CL.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const NL=new _u(3e4,6e4);function VI(){const n=dt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VL(n){return new Promise((e,t)=>{var r,i,s;function o(){VI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{VI(),t(mt(n,"network-request-failed"))},timeout:NL.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)o();else{const a=cx("iframefcb");return dt()[a]=()=>{gapi.load?o():t(mt(n,"network-request-failed"))},Ey(`${xO()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Mc=null,e})}let Mc=null;function OL(n){return Mc=Mc||VL(n),Mc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const LL=new _u(5e3,15e3),FL="__/auth/iframe",ML="emulator/auth/iframe",jL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BL(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Iy(e,ML):`https://${n.config.authDomain}/${FL}`,r={apiKey:e.apiKey,appName:n.name,v:xi},i=UL.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Yo(r).slice(1)}`}async function zL(n){const e=await OL(n),t=dt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:BL(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(n,"network-request-failed"),a=dt().setTimeout(()=>{s(o)},LL.get());function u(){dt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $L={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WL=500,qL=600,GL="_blank",KL="http://localhost";class OI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HL(n,e,t,r=WL,i=qL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},$L),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Qe().toLowerCase();t&&(a=ix(c)?GL:t),nx(c)&&(e=e||KL,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[T,P])=>`${g}${T}=${P},`,"");if(gO(c)&&a!=="_self")return QL(e||"",a),new OI(null);const f=window.open(e||"",a,h);G(f,n,"popup-blocked");try{f.focus()}catch{}return new OI(f)}function QL(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const YL="__/auth/handler",JL="emulator/auth/handler",XL=encodeURIComponent("fac");async function am(n,e,t,r,i,s){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xi,eventId:i};if(e instanceof Vr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",pC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof aa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await n._getAppCheckToken(),c=u?`#${XL}=${encodeURIComponent(u)}`:"";return`${ZL(n)}?${Yo(a).slice(1)}${c}`}function ZL({config:n}){return n.emulator?Iy(n,JL):`https://${n.authDomain}/${YL}`}/**
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
 */const Vf="webStorageSupport";class eF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_s,this._completeRedirectFn=Rh,this._overrideRedirectResult=Vy}async _openPopup(e,t,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await am(e,t,r,Ql(),i);return HL(e,o,Tu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await am(e,t,r,Ql(),i);return L2(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await zL(e),r=new Vx(e);return t.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vf,{type:Vf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vf];o!==void 0&&t(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bL(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lx()||rx()||wu()}}const tF=eF;class nF{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Yn("unexpected MultiFactorSessionType")}}}class Oy extends nF{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Oy(e)}_finalizeEnroll(e,t,r){return C2(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return G2(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Fx{constructor(){}static assertion(e){return Oy._fromCredential(e)}}Fx.FACTOR_ID="phone";var LI="@firebase/auth",FI="1.7.9";/**
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
 */class rF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iF(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sF(n){pi(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ux(n)},c=new EO(r,i,s,u);return kO(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pi(new nr("auth-internal",e=>{const t=et(e.getProvider("auth").getImmediate());return(r=>new rF(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(LI,FI,iF(n)),Fn(LI,FI,"esm2017")}/**
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
 */const oF=5*60;iC("authIdTokenMaxAge");function aF(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}TO({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=mt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",aF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sF("Browser");/**
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
 */function ws(){return window}/**
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
 */const lF=2e3;async function uF(n,e,t){var r;const{BuildInfo:i}=ws();jn(e.sessionId,"AuthEvent did not contain a session ID");const s=await pF(e.sessionId),o={};return wu()?o.ibi=i.packageName:vu()?o.apn=i.packageName:Ct(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,am(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function cF(n){const{BuildInfo:e}=ws(),t={};wu()?t.iosBundleId=e.packageName:vu()?t.androidPackageName=e.packageName:Ct(n,"operation-not-supported-in-this-environment"),await Lx(n,t)}function dF(n){const{cordova:e}=ws();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,mO()?"_blank":"_system","location=yes"),t(i)})})}async function hF(n,e,t){const{cordova:r}=ws();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var f;s();const g=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof g=="function"&&g(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(mt(n,"redirect-cancelled-by-user"))},lF))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),vu()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function fF(n){var e,t,r,i,s,o,a,u,c,h;const f=ws();G(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),G(typeof((t=f==null?void 0:f.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),G(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),G(typeof((u=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),G(typeof((h=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function pF(n){const e=mF(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function mF(n){if(jn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const gF=20;class yF extends Vx{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _F(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:IF(),postBody:null,tenantId:n.tenantId,error:mt(n,"no-auth-event")}}function vF(n,e){return lm()._set(um(n),e)}async function MI(n){const e=await lm()._get(um(n));return e&&await lm()._remove(um(n)),e}function wF(n,e){var t,r;const i=TF(e);if(i.includes("/__/auth/callback")){const s=jc(i),o=s.firebaseError?EF(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?mt(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function IF(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<gF;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function lm(){return fn(Cy)}function um(n){return ns("authEvent",n.config.apiKey,n.name)}function EF(n){try{return JSON.parse(n)}catch{return null}}function TF(n){const e=jc(n),t=e.link?decodeURIComponent(e.link):void 0,r=jc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return jc(i).link||i||r||t||n}function jc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return io(t.join("?"))}/**
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
 */const SF=500;class AF{constructor(){this._redirectPersistence=_s,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Rh,this._overrideRedirectResult=Vy}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new yF(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ct(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){fF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),vL(),await this._originValidation(e);const o=_F(e,r,i);await vF(e,o);const a=await uF(e,o,t),u=await dF(a);return hF(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cF(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ws(),o=setTimeout(async()=>{await MI(e),t.onEvent(jI())},SF),a=async h=>{clearTimeout(o);const f=await MI(e);let g=null;f&&(h!=null&&h.url)&&(g=wF(f,h.url)),t.onEvent(g||jI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;ws().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof u=="function")try{u(h)}catch(f){console.error(f)}}}}const xF=AF;function jI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:mt("no-auth-event")}}/**
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
 */function RF(n,e){et(n)._logFramework(e)}var PF="@firebase/auth-compat",CF="0.5.14";/**
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
 */const kF=1e3;function hl(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function bF(){return hl()==="http:"||hl()==="https:"}function Mx(n=Qe()){return!!((hl()==="file:"||hl()==="ionic:"||hl()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function DF(){return ug()||lg()}function NF(){return uT()&&(document==null?void 0:document.documentMode)===11}function VF(n=Qe()){return/Edge\/\d+/.test(n)}function OF(n=Qe()){return NF()||VF(n)}function jx(){try{const n=self.localStorage,e=Tu();if(n)return n.setItem(e,"1"),n.removeItem(e),OF()?kl():!0}catch{return Ly()&&kl()}return!1}function Ly(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Of(){return(bF()||lT()||Mx())&&!DF()&&jx()&&!Ly()}function Ux(){return Mx()&&typeof document<"u"}async function LF(){return Ux()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},kF);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function FF(){return typeof window<"u"?window:null}/**
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
 */const cn={LOCAL:"local",NONE:"none",SESSION:"session"},La=G,Bx="persistence";function MF(n,e){if(La(Object.values(cn).includes(e),n,"invalid-persistence-type"),ug()){La(e!==cn.SESSION,n,"unsupported-persistence-type");return}if(lg()){La(e===cn.NONE,n,"unsupported-persistence-type");return}if(Ly()){La(e===cn.NONE||e===cn.LOCAL&&kl(),n,"unsupported-persistence-type");return}La(e===cn.NONE||jx(),n,"unsupported-persistence-type")}async function cm(n){await n._initializationPromise;const e=zx(),t=ns(Bx,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function jF(n,e){const t=zx();if(!t)return[];const r=ns(Bx,n,e);switch(t.getItem(r)){case cn.NONE:return[Wo];case cn.LOCAL:return[Zl,_s];case cn.SESSION:return[_s];default:return[]}}function zx(){var n;try{return((n=FF())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const UF=G;class Xr{constructor(){this.browserResolver=fn(tF),this.cordovaResolver=fn(xF),this.underlyingResolver=null,this._redirectPersistence=_s,this._completeRedirectFn=Rh,this._overrideRedirectResult=Vy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Ux()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return UF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await LF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function $x(n){return n.unwrap()}function BF(n){return n.wrapped()}/**
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
 */function zF(n){return Wx(n)}function $F(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new WF(n,R2(n,e))}else if(r){const i=Wx(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Wx(n){const{_tokenResponse:e}=n instanceof qt?n.customData:n;if(!e)return null;if(!(n instanceof qt)&&"temporaryProof"in e&&"phoneNumber"in e)return vs.credentialFromResult(n);const t=e.providerId;if(!t||t===Oa.PASSWORD)return null;let r;switch(t){case Oa.GOOGLE:r=qn;break;case Oa.FACEBOOK:r=Wn;break;case Oa.GITHUB:r=Gn;break;case Oa.TWITTER:r=Kn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?qo._create(t,a):or._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new yo(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof qt?r.credentialFromError(n):r.credentialFromResult(n)}function Xt(n,e){return e.catch(t=>{throw t instanceof qt&&$F(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:zF(t),additionalUserInfo:x2(t),user:gr.getOrCreate(i)}})}async function dm(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Xt(n,t.confirm(r))}}class WF{constructor(e,t){this.resolver=t,this.auth=BF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Xt($x(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class gr{constructor(e){this._delegate=e,this.multiFactor=b2(e)}static getOrCreate(e){return gr.USER_MAP.has(e)||gr.USER_MAP.set(e,new gr(e)),gr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Xt(this.auth,_x(this._delegate,e))}async linkWithPhoneNumber(e,t){return dm(this.auth,oL(this._delegate,e,t))}async linkWithPopup(e){return Xt(this.auth,mL(this._delegate,e,Xr))}async linkWithRedirect(e){return await cm(et(this.auth)),SL(this._delegate,e,Xr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Xt(this.auth,vx(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return dm(this.auth,aL(this._delegate,e,t))}reauthenticateWithPopup(e){return Xt(this.auth,pL(this._delegate,e,Xr))}async reauthenticateWithRedirect(e){return await cm(et(this.auth)),EL(this._delegate,e,Xr)}sendEmailVerification(e){return m2(this._delegate,e)}async unlink(e){return await t2(this._delegate,e),this}updateEmail(e){return v2(this._delegate,e)}updatePassword(e){return w2(this._delegate,e)}updatePhoneNumber(e){return lL(this._delegate,e)}updateProfile(e){return _2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return g2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}gr.USER_MAP=new WeakMap;/**
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
 */const Fa=G;class hm{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Fa(r,"invalid-api-key",{appName:e.name}),Fa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Xr:void 0;this._delegate=t.initialize({options:{persistence:qF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(HV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?gr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){bO(this._delegate,e,t)}applyActionCode(e){return o2(this._delegate,e)}checkActionCode(e){return wx(this._delegate,e)}confirmPasswordReset(e,t){return s2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Xt(this._delegate,l2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return p2(this._delegate,e)}isSignInWithEmailLink(e){return d2(this._delegate,e)}async getRedirectResult(){Fa(Of(),this._delegate,"operation-not-supported-in-this-environment");const e=await xL(this._delegate,Xr);return e?Xt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){RF(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=UI(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=UI(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return c2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return i2(this._delegate,e,t||void 0)}async setPersistence(e){MF(this._delegate,e);let t;switch(e){case cn.SESSION:t=_s;break;case cn.LOCAL:t=await fn(Zl)._isAvailable()?Zl:Cy;break;case cn.NONE:t=Wo;break;default:return Ct("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Xt(this._delegate,e2(this._delegate))}signInWithCredential(e){return Xt(this._delegate,Eh(this._delegate,e))}signInWithCustomToken(e){return Xt(this._delegate,r2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Xt(this._delegate,u2(this._delegate,e,t))}signInWithEmailLink(e,t){return Xt(this._delegate,h2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return dm(this._delegate,sL(this._delegate,e,t))}async signInWithPopup(e){return Fa(Of(),this._delegate,"operation-not-supported-in-this-environment"),Xt(this._delegate,fL(this._delegate,e,Xr))}async signInWithRedirect(e){return Fa(Of(),this._delegate,"operation-not-supported-in-this-environment"),await cm(this._delegate),wL(this._delegate,e,Xr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return a2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}hm.Persistence=cn;function UI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&gr.getOrCreate(o)),error:e,complete:t}}function qF(n,e){const t=jF(n,e);if(typeof self<"u"&&!t.includes(Zl)&&t.push(Zl),typeof window<"u")for(const r of[Cy,_s])t.includes(r)||t.push(r);return t.includes(Wo)||t.push(Wo),t}/**
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
 */class Fy{constructor(){this.providerId="phone",this._delegate=new vs($x(dn.auth()))}static credential(e,t){return vs.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Fy.PHONE_SIGN_IN_METHOD=vs.PHONE_SIGN_IN_METHOD;Fy.PROVIDER_ID=vs.PROVIDER_ID;/**
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
 */const GF=G;class KF{constructor(e,t,r=dn.app()){var i;GF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new rL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const HF="auth-compat";function QF(n){n.INTERNAL.registerComponent(new nr(HF,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new hm(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Us.EMAIL_SIGNIN,PASSWORD_RESET:Us.PASSWORD_RESET,RECOVER_EMAIL:Us.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Us.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Us.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Us.VERIFY_EMAIL}},EmailAuthProvider:bi,FacebookAuthProvider:Wn,GithubAuthProvider:Gn,GoogleAuthProvider:qn,OAuthProvider:yo,SAMLAuthProvider:Rd,PhoneAuthProvider:Fy,PhoneMultiFactorGenerator:Fx,RecaptchaVerifier:KF,TwitterAuthProvider:Kn,Auth:hm,AuthCredential:oa,Error:qt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(PF,CF)}QF(dn);const YF={apiKey:"AIzaSyBDAUw6YzOih5JIGPhgGp1Qb_Lpet3OlJ8",authDomain:"sooraj-caterers.firebaseapp.com",projectId:"sooraj-caterers",storageBucket:"sooraj-caterers.firebasestorage.app",messagingSenderId:"1052370335653",appId:"1:1052370335653:web:6373e663d7ccbd56ce1a4c"};dn.initializeApp(YF);const Ha=dn.firestore(),vo=Ha.collection("sooraj-caterers").doc("main"),hc=vo.collection("events"),fc=vo.collection("income"),pc=vo.collection("expenses");function JF({events:n,income:e,expenses:t}){const r=_r(),i=[...n.flatMap(a=>a.payments.filter(u=>u.date===r).map(u=>u.amount)),...e.filter(a=>a.date===r).map(a=>a.amount)].reduce((a,u)=>a+u,0),s=t.filter(a=>a.date===r).reduce((a,u)=>a+u.amount,0),o=i-s;return p.jsxs("div",{style:{background:E.primary,borderRadius:12,padding:"12px 16px",marginBottom:16,display:"flex",alignItems:"center",gap:0},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontSize:9,color:"rgba(246,242,234,0.45)",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:2},children:"Today"}),p.jsx("div",{style:{fontSize:11,color:"rgba(246,242,234,0.35)"},children:Tn(r)})]}),[{lbl:"In",val:i,co:"#6FDDAA"},{lbl:"Out",val:s,co:"#FF8080"},{lbl:"Net",val:o,co:o>=0?"#6FDDAA":"#FF8080"}].map((a,u)=>p.jsxs("div",{style:{textAlign:"right",paddingLeft:16,marginLeft:16,borderLeft:u>0?"1px solid rgba(255,255,255,0.08)":"none"},children:[p.jsx("div",{style:{fontSize:9,color:"rgba(246,242,234,0.4)",fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:2},children:a.lbl}),p.jsx("div",{style:{fontSize:15,fontWeight:700,color:a.co,fontFamily:"'Playfair Display',serif"},children:ne(a.val)})]},a.lbl))]})}function zn({title:n,onClose:e,children:t,bp:r}){const i=r==="mobile";return p.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:400,display:"flex",alignItems:i?"flex-end":"center",justifyContent:"center",padding:i?0:24},onMouseDown:s=>s.target===s.currentTarget&&e(),children:p.jsxs("div",{style:{background:E.bg,borderRadius:i?"18px 18px 0 0":"16px",padding:"20px 22px 28px",width:"100%",maxWidth:i?"100%":520,maxHeight:"90vh",overflowY:"auto",position:"relative",boxSizing:"border-box"},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:19,fontWeight:700,color:E.text,marginBottom:16,paddingRight:36},children:n}),p.jsx("button",{onClick:e,style:{position:"absolute",right:16,top:16,background:E.border,border:"none",borderRadius:"50%",width:30,height:30,cursor:"pointer",fontSize:14},children:"✕"}),t]})})}function My({options:n,value:e,onChange:t,labelKey:r="label",valueKey:i="id",colorKey:s=null,bgKey:o=null}){return p.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:13},children:n.map(a=>{const u=e===a[i];return p.jsx("button",{onClick:()=>t(a[i]),style:{padding:"6px 13px",borderRadius:20,cursor:"pointer",fontSize:12,fontWeight:600,whiteSpace:"nowrap",border:`1.5px solid ${u?s?a[s]:E.primary:E.border}`,background:u?o?a[o]:E.primary:E.surface,color:u?s?a[s]:"#fff":E.muted},children:a[r]},a[i])})})}function tr({children:n,style:e={}}){return p.jsx("div",{style:{background:E.surface,borderRadius:13,padding:16,marginBottom:12,border:`1px solid ${E.border}`,...e},children:n})}function qx({typeId:n}){const e=bp(n);return p.jsx("span",{style:{...En,background:e.bg,color:e.col},children:e.label})}function Gx({chanId:n}){const e=es(n);return p.jsx("span",{style:{...En,background:"#EEEAE3",color:E.primary,fontSize:10},children:e.name})}function bd({onEdit:n,onDelete:e,confirmId:t,setConfirmId:r,myId:i}){const s={fontSize:12,fontWeight:600,cursor:"pointer",padding:"5px 14px",borderRadius:7,border:"none"};return t===i?p.jsxs("div",{style:{display:"flex",gap:8,marginTop:9,paddingTop:9,borderTop:`1px solid ${E.border}`,alignItems:"center"},children:[p.jsx("span",{style:{fontSize:12,color:E.red,fontWeight:600,flex:1},children:"Delete this?"}),p.jsx("button",{onClick:e,style:{...s,background:"#FAEAEA",color:E.red},children:"Yes"}),p.jsx("button",{onClick:()=>r(null),style:{...s,background:E.border,color:E.text},children:"No"})]}):p.jsxs("div",{style:{display:"flex",gap:6,marginTop:9,paddingTop:9,borderTop:`1px solid ${E.border}`},children:[p.jsx("button",{onClick:n,style:{...s,flex:1,background:"#EEEAE3",color:E.text},children:"✏️ Edit"}),p.jsx("button",{onClick:()=>r(i),style:{...s,flex:1,background:"#FAEAEA",color:E.red},children:"🗑️ Delete"})]})}function Lf({initial:n,onSave:e,onCancel:t}){const[r,i]=ie.useState(n);return p.jsxs(p.Fragment,{children:[p.jsx("label",{style:Ee,children:"Event / Job Name"}),p.jsx("input",{style:Fe,placeholder:"e.g. Ahmed Wedding",value:r.name,onChange:s=>i(o=>({...o,name:s.target.value}))}),p.jsx("label",{style:Ee,children:"Customer Name"}),p.jsx("input",{style:Fe,placeholder:"Customer",value:r.customer,onChange:s=>i(o=>({...o,customer:s.target.value}))}),p.jsx("label",{style:Ee,children:"Event Date"}),p.jsx("input",{style:Fe,type:"date",value:r.date,onChange:s=>i(o=>({...o,date:s.target.value}))}),p.jsx("label",{style:Ee,children:"Total Bill (₹)"}),p.jsx("input",{style:Fe,type:"number",placeholder:"0",value:r.totalBill,onChange:s=>i(o=>({...o,totalBill:s.target.value}))}),p.jsx("label",{style:Ee,children:"Notes (optional)"}),p.jsx("textarea",{style:{...Fe,resize:"vertical",minHeight:60},placeholder:"Any notes...",value:r.notes,onChange:s=>i(o=>({...o,notes:s.target.value}))}),p.jsx("button",{style:Sr,onClick:()=>r.name.trim()&&r.totalBill&&e(r),children:"Save"}),p.jsx("button",{style:Qo,onClick:t,children:"Cancel"})]})}function BI({initial:n,onSave:e,onCancel:t}){const[r,i]=ie.useState(n);return p.jsxs(p.Fragment,{children:[p.jsx("label",{style:Ee,children:"Amount (₹)"}),p.jsx("input",{style:Fe,type:"number",placeholder:"0",value:r.amount,onChange:s=>i(o=>({...o,amount:s.target.value}))}),p.jsx("label",{style:Ee,children:"Payment Type"}),p.jsx(My,{options:Po,value:r.payType,onChange:s=>i(o=>({...o,payType:s})),colorKey:"col",bgKey:"bg"}),p.jsx("label",{style:Ee,children:"Channel Received"}),p.jsx("select",{style:ai,value:r.channel,onChange:s=>i(o=>({...o,channel:s.target.value})),children:Ro.map(s=>p.jsxs("option",{value:s.id,children:[s.name," (",s.holder,")"]},s.id))}),p.jsx("label",{style:Ee,children:"Date"}),p.jsx("input",{style:Fe,type:"date",value:r.date,onChange:s=>i(o=>({...o,date:s.target.value}))}),p.jsx("label",{style:Ee,children:"Note (optional)"}),p.jsx("input",{style:Fe,placeholder:"e.g. Advance before event",value:r.note,onChange:s=>i(o=>({...o,note:s.target.value}))}),p.jsx("button",{style:Sr,onClick:()=>r.amount&&e(r),children:"Save"}),p.jsx("button",{style:Qo,onClick:t,children:"Cancel"})]})}function XF({events:n,onSave:e,withUndo:t,bp:r}){const[i,s]=ie.useState("list"),[o,a]=ie.useState(null),[u,c]=ie.useState(null),[h,f]=ie.useState(null),[g,T]=ie.useState("c1"),[P,k]=ie.useState(""),[L,S]=ie.useState("all"),w={name:"",customer:"",date:_r(),totalBill:"",notes:""},A={amount:"",channel:"c1",payType:"Advance",date:_r(),note:""},N=n.find(M=>M.id===i),U=M=>{e([{id:ho(),...M,totalBill:Number(M.totalBill),payments:[]},...n]),a(null)},B=M=>{e(n.map(H=>H.id===i?{...H,...M,totalBill:Number(M.totalBill)}:H)),a(null)},_=M=>{const H=n;e(n.filter(b=>b.id!==M)),s("list"),f(null),t("Event deleted.",()=>e(H))},y=M=>{e(n.map(H=>H.id===i?{...H,payments:[...H.payments,{id:ho(),...M,amount:Number(M.amount)}]}:H)),a(null)},I=M=>{e(n.map(H=>H.id===i?{...H,payments:H.payments.map(b=>b.id===u.id?{...b,...M,amount:Number(M.amount)}:b)}:H)),a(null)},R=M=>{const H=n;e(n.map(b=>b.id===i?{...b,payments:b.payments.filter(K=>K.id!==M)}:b)),f(null),t("Payment deleted.",()=>e(H))},C=()=>{if(!N)return;const M=N.payments.reduce((b,K)=>b+K.amount,0),H=N.totalBill-M;H<=0||(e(n.map(b=>b.id===i?{...b,payments:[...b.payments,{id:ho(),amount:H,channel:g,payType:"Full",date:_r(),note:"Marked as fully paid"}]}:b)),a(null))},D=r==="desktop"?3:r==="tablet"?2:1,x=[{id:"all",label:"All"},{id:"unpaid",label:"Unpaid"},{id:"overdue",label:"Overdue"},{id:"paid",label:"Paid"}];if(i==="list"){const M=P.toLowerCase(),H=[...n].sort((b,K)=>K.date>b.date?1:K.date<b.date?-1:K.id>b.id?1:-1).filter(b=>{const K=b.payments.reduce((X,ve)=>X+ve.amount,0),le=b.totalBill-K;return!(M&&!(b.name.toLowerCase().includes(M)||(b.customer||"").toLowerCase().includes(M))||L==="paid"&&le>0||L==="unpaid"&&le<=0||L==="overdue"&&!(Rc(b.date)&&le>0))});return p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700},children:"Events"}),p.jsx("button",{onClick:()=>a("addEvent"),style:{background:E.primary,color:"#fff",border:"none",borderRadius:9,padding:"8px 18px",fontSize:13,fontWeight:600,cursor:"pointer"},children:"+ New Event"})]}),p.jsx("input",{style:{...Fe,marginBottom:10},placeholder:"Search by name or customer…",value:P,onChange:b=>k(b.target.value)}),p.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14},children:x.map(b=>{const K=L===b.id;return p.jsx("button",{onClick:()=>S(b.id),style:{padding:"5px 13px",borderRadius:20,cursor:"pointer",fontSize:12,fontWeight:600,border:`1.5px solid ${K?E.primary:E.border}`,background:K?E.primary:E.surface,color:K?"#fff":E.muted},children:b.label},b.id)})}),H.length===0&&p.jsxs("div",{style:{textAlign:"center",padding:"48px 0",color:E.muted},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"📋"}),p.jsx("div",{style:{fontSize:14},children:n.length===0?"No events yet.":"No events match your filter."})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${D},1fr)`,gap:12},children:H.map(b=>{const K=b.payments.reduce((Z,ae)=>Z+ae.amount,0),le=b.totalBill-K,X=b.totalBill?Math.min(100,K/b.totalBill*100):0,ve=Rc(b.date)&&le>0;return p.jsx(tr,{style:{cursor:"pointer",marginBottom:0},children:p.jsxs("div",{onClick:()=>s(b.id),children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,flex:1,lineHeight:1.3},children:b.name}),ve&&p.jsx("span",{style:{...En,background:"#FAEAEA",color:E.red,fontSize:9,marginLeft:6,flexShrink:0},children:"OVERDUE"})]}),p.jsxs("div",{style:{fontSize:11,color:E.muted,marginBottom:12},children:[b.customer," · ",Tn(b.date)]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:600},children:"BILL"}),p.jsx("div",{style:{fontSize:16,fontWeight:700},children:ne(b.totalBill)})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:600},children:"DUE"}),p.jsx("div",{style:{fontSize:16,fontWeight:700,color:le>0?E.red:E.green},children:ne(le)})]})]}),p.jsx("div",{style:{height:5,borderRadius:3,background:E.border,overflow:"hidden",margin:"6px 0 4px"},children:p.jsx("div",{style:{height:"100%",borderRadius:3,background:E.green,width:`${X}%`}})}),p.jsxs("div",{style:{fontSize:11,color:E.muted},children:[ne(K)," received · ",X.toFixed(0),"%"]})]})},b.id)})}),o==="addEvent"&&p.jsx(zn,{title:"New Event",bp:r,onClose:()=>a(null),children:p.jsx(Lf,{initial:w,onSave:U,onCancel:()=>a(null)})})]})}if(!N)return null;const W=N.payments.reduce((M,H)=>M+H.amount,0),oe=N.totalBill-W,fe=N.totalBill?Math.min(100,W/N.totalBill*100):0,be=Rc(N.date)&&oe>0;return p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[p.jsx("button",{onClick:()=>{s("list"),f(null)},style:{background:E.surface,border:`1px solid ${E.border}`,borderRadius:8,padding:"6px 14px",fontSize:13,fontWeight:600,cursor:"pointer",color:E.text},children:"← Back"}),p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx("span",{style:{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700},children:N.name}),be&&p.jsx("span",{style:{...En,background:"#FAEAEA",color:E.red,fontSize:9},children:"OVERDUE"})]}),p.jsxs("div",{style:{fontSize:12,color:E.muted},children:[N.customer," · ",Tn(N.date)]})]}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx("button",{onClick:()=>{const M=`*${N.name}*
${N.customer?`Customer: ${N.customer}
`:""}Date: ${Tn(N.date)}

Total Bill: ${ne(N.totalBill)}
Received: ${ne(W)}
Outstanding: ${ne(oe)}
${oe<=0?"✅ Fully paid":"⏳ Payment pending"}`;navigator.clipboard.writeText(M).catch(()=>{}),window.open(`https://wa.me/?text=${encodeURIComponent(M)}`,"_blank")},style:{background:"#E6F3EC",border:"none",borderRadius:8,padding:"7px 12px",fontSize:13,fontWeight:600,cursor:"pointer",color:E.green},title:"Share on WhatsApp",children:"📲"}),p.jsx("button",{onClick:()=>{c(N),a("editEvent")},style:{background:E.accentL,border:"none",borderRadius:8,padding:"7px 16px",fontSize:13,fontWeight:600,cursor:"pointer",color:E.accent},children:"✏️ Edit"})]})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:r==="mobile"?"1fr 1fr":"repeat(4,1fr)",gap:10,marginBottom:14},children:[{lbl:"Total Bill",val:ne(N.totalBill),bg:"#EEF5F0",co:E.text},{lbl:"Received",val:ne(W),bg:"#E6F3EC",co:E.green},{lbl:"Outstanding",val:ne(oe),bg:oe>0?"#FAEAEA":"#E6F3EC",co:oe>0?E.red:E.green},{lbl:"Payments",val:N.payments.length+" entries",bg:E.accentL,co:E.accent}].map(M=>p.jsxs("div",{style:{background:M.bg,borderRadius:10,padding:"10px 12px"},children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:3},children:M.lbl}),p.jsx("div",{style:{fontSize:15,fontWeight:700,color:M.co},children:M.val})]},M.lbl))}),p.jsx("div",{style:{height:5,borderRadius:3,background:E.border,overflow:"hidden",marginBottom:4},children:p.jsx("div",{style:{height:"100%",borderRadius:3,background:E.green,width:`${fe}%`}})}),p.jsxs("div",{style:{fontSize:11,color:E.muted,marginBottom:14},children:[fe.toFixed(0),"% collected"]}),oe>0&&p.jsxs("button",{onClick:()=>a("markPaid"),style:{width:"100%",padding:"11px 0",borderRadius:10,border:"none",background:"#E6F3EC",color:E.green,fontSize:14,fontWeight:700,cursor:"pointer",marginBottom:14},children:["✅ Mark as Fully Paid — ",ne(oe)," remaining"]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700},children:"Payments"}),p.jsx("button",{onClick:()=>a("addPay"),style:{background:E.primary,color:"#fff",border:"none",borderRadius:8,padding:"7px 16px",fontSize:12,fontWeight:600,cursor:"pointer"},children:"+ Add"})]}),N.payments.length===0&&p.jsx("div",{style:{textAlign:"center",padding:"20px",color:E.muted,fontSize:13},children:"No payments yet."}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:r==="desktop"?"1fr 1fr 1fr":r==="tablet"?"1fr 1fr":"1fr",gap:10},children:[...N.payments].sort((M,H)=>H.date>M.date?1:H.date<M.date?-1:H.id>M.id?1:-1).map(M=>p.jsxs(tr,{style:{marginBottom:0},children:[p.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6},children:[p.jsx(qx,{typeId:M.payType}),p.jsx(Gx,{chanId:M.channel})]}),p.jsx("div",{style:{fontWeight:700,fontSize:18,color:E.green},children:ne(M.amount)}),p.jsx("div",{style:{fontSize:11,color:E.muted,marginTop:2},children:Tn(M.date)}),M.note&&p.jsx("div",{style:{fontSize:12,color:E.text,marginTop:3},children:M.note}),p.jsx(bd,{onEdit:()=>{c(M),a("editPay")},onDelete:()=>R(M.id),confirmId:h,setConfirmId:f,myId:M.id})]},M.id))}),p.jsxs("div",{style:{marginTop:16},children:[p.jsx(bd,{onEdit:()=>{c(N),a("editEvent")},onDelete:()=>_(N.id),confirmId:h,setConfirmId:f,myId:"evt_"+N.id}),p.jsx("div",{style:{fontSize:11,color:E.muted,textAlign:"center",marginTop:5},children:"↑ Edit or delete this entire event"})]}),o==="addEvent"&&p.jsx(zn,{title:"New Event",bp:r,onClose:()=>a(null),children:p.jsx(Lf,{initial:w,onSave:U,onCancel:()=>a(null)})}),o==="editEvent"&&p.jsx(zn,{title:"Edit Event",bp:r,onClose:()=>a(null),children:p.jsx(Lf,{initial:{...u,totalBill:String(u.totalBill)},onSave:B,onCancel:()=>a(null)})}),o==="addPay"&&p.jsx(zn,{title:"Add Payment",bp:r,onClose:()=>a(null),children:p.jsx(BI,{initial:A,onSave:y,onCancel:()=>a(null)})}),o==="editPay"&&p.jsx(zn,{title:"Edit Payment",bp:r,onClose:()=>a(null),children:p.jsx(BI,{initial:{...u,amount:String(u.amount)},onSave:I,onCancel:()=>a(null)})}),o==="markPaid"&&p.jsxs(zn,{title:"Mark as Fully Paid",bp:r,onClose:()=>a(null),children:[p.jsxs("div",{style:{background:"#E6F3EC",borderRadius:10,padding:"14px 16px",marginBottom:16},children:[p.jsx("div",{style:{fontSize:12,color:E.muted},children:"Remaining balance"}),p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:30,fontWeight:700,color:E.green},children:ne(oe)}),p.jsx("div",{style:{fontSize:11,color:E.muted,marginTop:3},children:"Will be logged as Full Payment with today's date"})]}),p.jsx("label",{style:Ee,children:"Which channel received this?"}),p.jsx("select",{style:ai,value:g,onChange:M=>T(M.target.value),children:Ro.map(M=>p.jsxs("option",{value:M.id,children:[M.name," (",M.holder,")"]},M.id))}),p.jsx("button",{style:{...Sr,background:E.green},onClick:C,children:"✅ Confirm Full Payment"}),p.jsx("button",{style:Qo,onClick:()=>a(null),children:"Cancel"})]})]})}function ZF({initial:n,onSave:e,onCancel:t,events:r}){const[i,s]=ie.useState(n);return p.jsxs(p.Fragment,{children:[p.jsx("label",{style:Ee,children:"Amount (₹)"}),p.jsx("input",{style:{...Fe,fontSize:20,fontWeight:700},type:"number",placeholder:"0",value:i.amount,onChange:o=>s(a=>({...a,amount:o.target.value}))}),p.jsx("label",{style:Ee,children:"Payment Type"}),p.jsx(My,{options:Po,value:i.payType,onChange:o=>s(a=>({...a,payType:o})),colorKey:"col",bgKey:"bg"}),p.jsx("label",{style:Ee,children:"Channel Received"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:5,marginBottom:13},children:Ro.map(o=>{const a=i.channel===o.id;return p.jsx("button",{onClick:()=>s(u=>({...u,channel:o.id})),style:{padding:"7px 4px",borderRadius:9,border:`1.5px solid ${a?E.primary:E.border}`,background:a?E.primary:E.surface,color:a?"#fff":E.muted,fontSize:10,fontWeight:600,cursor:"pointer",lineHeight:1.4,textAlign:"center",whiteSpace:"pre-line"},children:o.short},o.id)})}),p.jsx("label",{style:Ee,children:"Date"}),p.jsx("input",{style:Fe,type:"date",value:i.date,onChange:o=>s(a=>({...a,date:o.target.value}))}),p.jsx("label",{style:Ee,children:"Link to Event (optional)"}),p.jsxs("select",{style:ai,value:i.eventId,onChange:o=>s(a=>({...a,eventId:o.target.value})),children:[p.jsx("option",{value:"",children:"— Not linked —"}),(r||[]).map(o=>p.jsxs("option",{value:o.id,children:[o.name," (",o.customer,")"]},o.id))]}),p.jsx("label",{style:Ee,children:"Note (optional)"}),p.jsx("input",{style:Fe,placeholder:"e.g. Cash from Dad",value:i.note,onChange:o=>s(a=>({...a,note:o.target.value}))}),p.jsx("button",{style:Sr,onClick:()=>i.amount&&e(i),children:"Save"}),p.jsx("button",{style:Qo,onClick:t,children:"Cancel"})]})}function eM({income:n,events:e,onSave:t,withUndo:r,bp:i}){const s={amount:"",channel:"c3",payType:"Advance",date:_r(),eventId:"",note:""},[o,a]=ie.useState(s),[u,c]=ie.useState(null),[h,f]=ie.useState(null),[g,T]=ie.useState(null),[P,k]=ie.useState(""),L=()=>{o.amount&&(t([{id:ho(),...o,amount:Number(o.amount)},...n]),a(s))},S=_=>{t(n.map(y=>y.id===h.id?{...y,..._,amount:Number(_.amount)}:y)),c(null)},w=_=>{const y=n;t(n.filter(I=>I.id!==_)),T(null),r("Income entry deleted.",()=>t(y))},A=n.reduce((_,y)=>_+y.amount,0),N=i!=="mobile"?p.jsxs("div",{style:{background:E.surface,borderRadius:13,border:`1.5px solid ${E.primary}`,padding:"14px 18px",marginBottom:16},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,marginBottom:12},children:"Record Money Received"}),p.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end",marginBottom:10,flexWrap:"wrap"},children:[p.jsxs("div",{style:{flexShrink:0},children:[p.jsx("div",{style:Ee,children:"Amount (₹)"}),p.jsx("input",{style:{...Fe,fontSize:20,fontWeight:700,width:160,marginBottom:0},type:"number",placeholder:"0",value:o.amount,onChange:_=>a(y=>({...y,amount:_.target.value}))})]}),p.jsxs("div",{style:{flex:1,minWidth:200},children:[p.jsx("div",{style:Ee,children:"Payment Type"}),p.jsx("div",{style:{display:"flex",gap:5,flexWrap:"wrap"},children:Po.map(_=>{const y=o.payType===_.id;return p.jsx("button",{onClick:()=>a(I=>({...I,payType:_.id})),style:{padding:"7px 12px",borderRadius:8,border:`1.5px solid ${y?_.col:E.border}`,background:y?_.bg:"transparent",color:y?_.col:E.muted,fontSize:12,fontWeight:600,cursor:"pointer"},children:_.label},_.id)})})]}),p.jsx("button",{onClick:L,style:{flexShrink:0,padding:"10px 22px",borderRadius:10,border:"none",background:E.primary,color:"#fff",fontSize:14,fontWeight:600,cursor:"pointer"},children:"Save Entry"})]}),p.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"},children:[p.jsx("span",{style:{fontSize:11,fontWeight:700,color:E.muted,flexShrink:0},children:"Via:"}),Ro.map(_=>{const y=o.channel===_.id;return p.jsx("button",{onClick:()=>a(I=>({...I,channel:_.id})),style:{padding:"5px 10px",borderRadius:7,border:`1.5px solid ${y?E.primary:E.border}`,background:y?E.primary:"transparent",color:y?"#fff":E.muted,fontSize:11,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap"},children:_.short.replace(`
`," ")},_.id)}),p.jsx("span",{style:{color:E.border,flexShrink:0},children:"·"}),p.jsx("input",{style:{...Fe,margin:0,width:140,fontSize:12,padding:"6px 10px"},type:"date",value:o.date,onChange:_=>a(y=>({...y,date:_.target.value}))}),p.jsx("input",{style:{...Fe,margin:0,flex:"1 1 140px",fontSize:12,padding:"6px 10px"},placeholder:"Note (optional)",value:o.note,onChange:_=>a(y=>({...y,note:_.target.value}))}),p.jsxs("select",{style:{...ai,margin:0,fontSize:12,padding:"6px 10px",flex:"1 1 150px"},value:o.eventId,onChange:_=>a(y=>({...y,eventId:_.target.value})),children:[p.jsx("option",{value:"",children:"— No event —"}),e.map(_=>p.jsx("option",{value:_.id,children:_.name},_.id))]})]})]}):p.jsxs(tr,{style:{border:`1.5px solid ${E.primary}`,marginBottom:14},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,marginBottom:12},children:"Record Money Received"}),p.jsx("label",{style:Ee,children:"Amount (₹)"}),p.jsx("input",{style:{...Fe,fontSize:22,fontWeight:700},type:"number",placeholder:"0",value:o.amount,onChange:_=>a(y=>({...y,amount:_.target.value}))}),p.jsx("label",{style:Ee,children:"Payment Type"}),p.jsx(My,{options:Po,value:o.payType,onChange:_=>a(y=>({...y,payType:_})),colorKey:"col",bgKey:"bg"}),p.jsx("label",{style:Ee,children:"Received Via"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:5,marginBottom:13},children:Ro.map(_=>{const y=o.channel===_.id;return p.jsx("button",{onClick:()=>a(I=>({...I,channel:_.id})),style:{padding:"7px 4px",borderRadius:9,border:`1.5px solid ${y?E.primary:E.border}`,background:y?E.primary:E.surface,color:y?"#fff":E.muted,fontSize:10,fontWeight:600,cursor:"pointer",lineHeight:1.4,textAlign:"center",whiteSpace:"pre-line"},children:_.short},_.id)})}),p.jsx("label",{style:Ee,children:"Date"}),p.jsx("input",{style:Fe,type:"date",value:o.date,onChange:_=>a(y=>({...y,date:_.target.value}))}),p.jsx("label",{style:Ee,children:"Link to Event (optional)"}),p.jsxs("select",{style:ai,value:o.eventId,onChange:_=>a(y=>({...y,eventId:_.target.value})),children:[p.jsx("option",{value:"",children:"— Not linked —"}),e.map(_=>p.jsxs("option",{value:_.id,children:[_.name," (",_.customer,")"]},_.id))]}),p.jsx("label",{style:Ee,children:"Note (optional)"}),p.jsx("input",{style:Fe,placeholder:"e.g. Cash from Dad",value:o.note,onChange:_=>a(y=>({...y,note:_.target.value}))}),p.jsx("button",{style:Sr,onClick:L,children:"Save Entry"})]}),U=[...n].sort((_,y)=>y.date>_.date?1:y.date<_.date?-1:y.id>_.id?1:-1),B=P?U.filter(_=>{const y=P.toLowerCase();return(_.note||"").toLowerCase().includes(y)||es(_.channel).name.toLowerCase().includes(y)||_.payType.toLowerCase().includes(y)}):U;return p.jsxs("div",{children:[N,p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:i==="mobile"?17:22,fontWeight:700},children:"Income Log"}),p.jsxs("span",{style:{fontSize:13,color:E.muted,fontWeight:600},children:[ne(A)," total"]})]}),p.jsx("input",{style:{...Fe,marginBottom:10},placeholder:"Search by note, channel or type…",value:P,onChange:_=>k(_.target.value)}),n.length===0&&p.jsxs("div",{style:{textAlign:"center",padding:"40px 0",color:E.muted},children:[p.jsx("div",{style:{fontSize:36,marginBottom:8},children:"⚡"}),p.jsx("div",{style:{fontSize:13},children:"No entries yet."})]}),B.length===0&&n.length>0&&p.jsxs("div",{style:{textAlign:"center",padding:"40px 0",color:E.muted},children:[p.jsx("div",{style:{fontSize:36,marginBottom:8},children:"🔍"}),p.jsx("div",{style:{fontSize:13},children:"No entries match your search."})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:i==="desktop"?"1fr 1fr 1fr":i==="tablet"?"1fr 1fr":"1fr",gap:10},children:B.map(_=>{const y=e.find(I=>I.id===_.eventId);return p.jsxs(tr,{style:{marginBottom:0},children:[p.jsxs("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:6},children:[p.jsx(qx,{typeId:_.payType}),p.jsx(Gx,{chanId:_.channel}),y&&p.jsx("span",{style:{...En,background:"#EDF4EC",color:E.green},children:y.name})]}),p.jsx("div",{style:{fontWeight:700,fontSize:18,color:E.green},children:ne(_.amount)}),p.jsx("div",{style:{fontSize:11,color:E.muted,marginTop:2},children:Tn(_.date)}),_.note&&p.jsx("div",{style:{fontSize:12,color:E.text,marginTop:3},children:_.note}),p.jsx(bd,{onEdit:()=>{f(_),c("edit")},onDelete:()=>w(_.id),confirmId:g,setConfirmId:T,myId:_.id})]},_.id)})})]}),u==="edit"&&p.jsx(zn,{title:"Edit Entry",bp:i,onClose:()=>c(null),children:p.jsx(ZF,{initial:{...h,amount:String(h.amount)},onSave:S,onCancel:()=>c(null),events:e})})]})}function tM({events:n,income:e,onSaveEvents:t,onSaveIncome:r,withUndo:i,bp:s}){const[o,a]=ie.useState("events");return p.jsxs("div",{children:[p.jsx("div",{style:{display:"flex",background:E.border,borderRadius:11,padding:3,marginBottom:18,maxWidth:320},children:[{id:"events",label:"📋 By Event"},{id:"log",label:"⚡ Quick Log"}].map(u=>p.jsx("button",{onClick:()=>a(u.id),style:{flex:1,padding:"8px 0",border:"none",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",background:o===u.id?E.surface:"transparent",color:o===u.id?E.primary:E.muted,boxShadow:o===u.id?"0 1px 4px rgba(0,0,0,0.1)":"none"},children:u.label},u.id))}),o==="events"?p.jsx(XF,{events:n,onSave:t,withUndo:i,bp:s}):p.jsx(eM,{income:e,events:n,onSave:r,withUndo:i,bp:s})]})}function nM({expenses:n,events:e,income:t,onSave:r,withUndo:i,bp:s,addTrigger:o}){const[a,u]=ie.useState(null),[c,h]=ie.useState(null),[f,g]=ie.useState(null),[T,P]=ie.useState(null),[k,L]=ie.useState(""),S=ie.useRef(!0);ie.useEffect(()=>{if(S.current){S.current=!1;return}u("add")},[o]);const w={amount:"",category:Os[0],channel:"c0",eventId:"",date:_r(),note:"",photo:"",recurring:!1},A=b=>{b.amount&&(r([{id:ho(),...b,amount:Number(b.amount)},...n]),u(null))},N=b=>{b.amount&&(r(n.map(K=>K.id===c.id?{...K,...b,amount:Number(b.amount)}:K)),u(null))},U=b=>{const K=n;r(n.filter(le=>le.id!==b)),g(null),i("Expense deleted.",()=>r(K))},B=[...e.flatMap(b=>b.payments),...t||[]],_=kp.filter(b=>b.id!=="c0").reduce((b,K)=>{const le=B.filter(ve=>ve.channel===K.id).reduce((ve,Z)=>ve+Z.amount,0),X=n.filter(ve=>ve.channel===K.id).reduce((ve,Z)=>ve+Z.amount,0);return b[K.id]=le-X,b},{}),y=B.filter(b=>b.channel==="c3").reduce((b,K)=>b+K.amount,0),I=n.filter(b=>b.channel==="c3").reduce((b,K)=>b+K.amount,0),R=n.filter(b=>b.channel==="c0").reduce((b,K)=>b+K.amount,0);_.c0=y-I-R;const C=Os.reduce((b,K)=>(b[K]=n.filter(le=>le.category===K).reduce((le,X)=>le+X.amount,0),b),{});function D({initial:b,onSave:K,onCancel:le}){const[X,ve]=ie.useState(b),[Z,ae]=ie.useState(!1),de=()=>{if(X.amount){if(X.channel==="c0"&&!X.note.trim()){ae(!0);return}ae(!1),K(X)}},we=_e=>{const rt=_e.target.files[0];rt&&Q1(rt,la=>ve(Au=>({...Au,photo:la})))},xe=_[X.channel]!==void 0?_[X.channel]:null,lt=Number(X.amount||0),De=xe!==null&&lt>0&&xe-lt<0,ut=X.channel==="c0";return p.jsxs(p.Fragment,{children:[p.jsx("label",{style:Ee,children:"Amount (₹)"}),p.jsx("input",{style:Fe,autoFocus:!0,type:"number",placeholder:"0",value:X.amount,onChange:_e=>ve(rt=>({...rt,amount:_e.target.value}))}),p.jsx("label",{style:Ee,children:"Category"}),p.jsx("select",{style:ai,value:X.category,onChange:_e=>ve(rt=>({...rt,category:_e.target.value})),children:Os.map(_e=>p.jsx("option",{children:_e},_e))}),p.jsx("label",{style:Ee,children:"Paid From Channel"}),p.jsx("select",{style:{...ai,borderColor:De?E.red:ut?E.accent:E.border},value:X.channel,onChange:_e=>ve(rt=>({...rt,channel:_e.target.value})),children:kp.map(_e=>p.jsxs("option",{value:_e.id,children:[_e.name,_e.holder!=="General"?` (${_e.holder})`:""]},_e.id))}),xe!==null&&lt===0&&p.jsxs("div",{style:{fontSize:11,color:E.muted,marginTop:-10,marginBottom:10},children:[ut?"Cash in Hand remaining":"Available",": ",ne(xe)]}),De&&p.jsxs("div",{style:{background:"#FAEAEA",border:`1.5px solid ${E.red}`,borderRadius:9,padding:"10px 13px",marginBottom:13},children:[p.jsxs("div",{style:{fontSize:13,fontWeight:700,color:E.red},children:["⚠ ",ut?"Cash in Hand exhausted":"Channel exhausted"," — balance will go negative"]}),p.jsxs("div",{style:{fontSize:11,color:E.muted,marginTop:4},children:[ut?"Cash in Hand remaining":"Available",": ",ne(xe),"  ·  After this expense: ",ne(xe-lt)]}),p.jsx("div",{style:{fontSize:11,color:E.muted,marginTop:3},children:"You can still save — the balance will go into deficit."})]}),p.jsx("label",{style:{...Ee,color:Z?E.red:X.channel==="c0"?E.accent:E.muted},children:X.channel==="c0"?"Note — required for Cash (what was this for?)":"Note (optional)"}),p.jsx("input",{style:{...Fe,borderColor:Z?E.red:X.channel==="c0"?E.accent:E.border},placeholder:X.channel==="c0"?"e.g. Vegetables for Ahmed wedding":"e.g. Chicken from supplier",value:X.note,onChange:_e=>{ve(rt=>({...rt,note:_e.target.value})),Z&&ae(!1)}}),Z&&p.jsx("div",{style:{fontSize:11,color:E.red,marginTop:-10,marginBottom:10,fontWeight:600},children:"⚠ Please describe what this cash was spent on."}),p.jsx("label",{style:Ee,children:"Linked Event (optional)"}),p.jsxs("select",{style:ai,value:X.eventId,onChange:_e=>ve(rt=>({...rt,eventId:_e.target.value})),children:[p.jsx("option",{value:"",children:"— General expense —"}),e.map(_e=>p.jsx("option",{value:_e.id,children:_e.name},_e.id))]}),p.jsx("label",{style:Ee,children:"Date"}),p.jsx("input",{style:Fe,type:"date",value:X.date,onChange:_e=>ve(rt=>({...rt,date:_e.target.value}))}),p.jsx("label",{style:Ee,children:"Attach Receipt Photo (optional)"}),p.jsx("input",{type:"file",accept:"image/*",capture:"environment",onChange:we,style:{marginBottom:13,fontSize:13,color:E.text,width:"100%"}}),X.photo&&p.jsx("img",{src:X.photo,style:{width:"100%",borderRadius:8,marginBottom:13,maxHeight:160,objectFit:"cover"},alt:"receipt"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,background:E.accentL,borderRadius:9,padding:"10px 13px",marginBottom:13,cursor:"pointer"},onClick:()=>ve(_e=>({..._e,recurring:!_e.recurring})),children:[p.jsx("div",{style:{width:20,height:20,borderRadius:5,border:`2px solid ${E.accent}`,background:X.recurring?E.accent:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:X.recurring&&p.jsx("span",{style:{color:"#fff",fontSize:13,fontWeight:900},children:"✓"})}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:13,fontWeight:600,color:E.text},children:"Repeat monthly"}),p.jsx("div",{style:{fontSize:11,color:E.muted},children:"Get a reminder to log this expense each month"})]})]}),p.jsx("button",{style:Sr,onClick:de,children:"Save"}),p.jsx("button",{style:Qo,onClick:le,children:"Cancel"})]})}const x=s!=="mobile"?p.jsxs("div",{style:{background:E.primary,borderRadius:13,padding:"12px 18px",marginBottom:16,display:"flex",alignItems:"center",flexWrap:"wrap",gap:0},children:[Os.map((b,K)=>p.jsxs("div",{style:{display:"flex",flexDirection:"column",padding:"4px 16px",borderRight:K<Os.length-1?"1px solid rgba(255,255,255,0.12)":"none"},children:[p.jsx("span",{style:{fontSize:10,fontWeight:700,color:"rgba(246,242,234,0.5)",textTransform:"uppercase",letterSpacing:.8,whiteSpace:"nowrap"},children:b}),p.jsx("span",{style:{fontSize:14,fontWeight:700,color:"#F6F2EA",marginTop:2},children:ne(C[b])})]},b)),p.jsxs("div",{style:{display:"flex",flexDirection:"column",padding:"4px 16px",marginLeft:"auto"},children:[p.jsx("span",{style:{fontSize:10,fontWeight:700,color:E.accent,textTransform:"uppercase",letterSpacing:.8},children:"Total"}),p.jsx("span",{style:{fontSize:17,fontWeight:700,color:"#F6F2EA",marginTop:2},children:ne(n.reduce((b,K)=>b+K.amount,0))})]})]}):p.jsxs("div",{style:{background:E.primary,borderRadius:13,padding:18,marginBottom:14},children:[p.jsx("div",{style:{color:E.accent,fontSize:10,fontWeight:700,letterSpacing:1.4,textTransform:"uppercase",marginBottom:12},children:"By Category"}),Os.map(b=>p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:9},children:[p.jsx("span",{style:{fontSize:13,color:"rgba(246,242,234,0.7)"},children:b}),p.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#F6F2EA"},children:ne(C[b])})]},b)),p.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.12)",marginTop:10,paddingTop:10,display:"flex",justifyContent:"space-between"},children:[p.jsx("span",{style:{fontSize:13,fontWeight:700,color:E.accent},children:"Total"}),p.jsx("span",{style:{fontSize:17,fontWeight:700,color:"#F6F2EA"},children:ne(n.reduce((b,K)=>b+K.amount,0))})]})]}),W=_r().slice(0,7),fe=n.filter(b=>b.recurring).filter(b=>!n.some(K=>{var le;return K.id!==b.id&&K.category===b.category&&K.channel===b.channel&&K.amount===b.amount&&((le=K.date)==null?void 0:le.startsWith(W))})),be=()=>{const b=fe.map(K=>({...K,id:ho(),date:_r(),recurring:!1,photo:"",photoPath:""}));r([...b,...n])},M=[...n].sort((b,K)=>K.date>b.date?1:K.date<b.date?-1:K.id>b.id?1:-1),H=k?M.filter(b=>{const K=k.toLowerCase();return(b.note||"").toLowerCase().includes(K)||b.category.toLowerCase().includes(K)||es(b.channel).name.toLowerCase().includes(K)}):M;return p.jsxs("div",{children:[x,p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:s==="mobile"?17:22,fontWeight:700},children:"All Expenses"}),p.jsx("button",{onClick:()=>u("add"),style:{background:E.primary,color:"#fff",border:"none",borderRadius:9,padding:"8px 18px",fontSize:13,fontWeight:600,cursor:"pointer"},children:"+ Add"})]}),p.jsx("input",{style:{...Fe,marginBottom:10},placeholder:"Search by note, category or channel…",value:k,onChange:b=>L(b.target.value)}),fe.length>0&&p.jsxs("div",{style:{background:E.accentL,borderRadius:10,padding:"12px 14px",marginBottom:14,display:"flex",justifyContent:"space-between",alignItems:"center",gap:12},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{fontSize:13,fontWeight:700,color:E.text},children:["🔁 ",fe.length," recurring expense",fe.length>1?"s":""," not yet logged this month"]}),p.jsx("div",{style:{fontSize:11,color:E.muted,marginTop:2},children:fe.map(b=>b.note||b.category).join(", ")})]}),p.jsx("button",{onClick:be,style:{background:E.accent,color:E.primary,border:"none",borderRadius:8,padding:"7px 14px",fontSize:12,fontWeight:700,cursor:"pointer",flexShrink:0},children:"Log All"})]}),n.length===0&&p.jsxs("div",{style:{textAlign:"center",padding:"40px 0",color:E.muted},children:[p.jsx("div",{style:{fontSize:36,marginBottom:8},children:"💸"}),p.jsx("div",{style:{fontSize:13},children:"No expenses yet."})]}),H.length===0&&n.length>0&&p.jsxs("div",{style:{textAlign:"center",padding:"40px 0",color:E.muted},children:[p.jsx("div",{style:{fontSize:36,marginBottom:8},children:"🔍"}),p.jsx("div",{style:{fontSize:13},children:"No expenses match your search."})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:s==="desktop"?"1fr 1fr 1fr":s==="tablet"?"1fr 1fr":"1fr",gap:10},children:H.map(b=>{const K=es(b.channel),le=e.find(X=>X.id===b.eventId);return p.jsxs(tr,{style:{marginBottom:0},children:[b.photo&&p.jsx("img",{src:b.photo,onClick:()=>P(b.photo),style:{width:"100%",borderRadius:8,marginBottom:10,maxHeight:110,objectFit:"cover",cursor:"pointer"},alt:"receipt"}),p.jsxs("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:6},children:[p.jsx("span",{style:{...En,background:E.accentL,color:E.accent},children:b.category}),b.recurring&&p.jsx("span",{style:{...En,background:"#E8F0FA",color:E.blue,fontSize:9},children:"🔁 RECURRING"}),b.channel==="c0"&&p.jsx("span",{style:{...En,background:"#FFF3E0",color:"#E65100",fontSize:9},children:"CASH"}),le&&p.jsx("span",{style:{...En,background:"#EDF4EC",color:E.green},children:le.name})]}),p.jsx("div",{style:{fontWeight:700,fontSize:18,color:E.red},children:ne(b.amount)}),p.jsxs("div",{style:{fontSize:11,color:E.muted,marginTop:2},children:[Tn(b.date)," · ",K.name]}),b.note&&p.jsx("div",{style:{fontSize:12,color:E.text,marginTop:3},children:b.note}),p.jsx(bd,{onEdit:()=>{h(b),u("edit")},onDelete:()=>U(b.id),confirmId:f,setConfirmId:g,myId:b.id})]},b.id)})})]}),a==="add"&&p.jsx(zn,{title:"Add Expense",bp:s,onClose:()=>u(null),children:p.jsx(D,{initial:w,onSave:A,onCancel:()=>u(null)})}),a==="edit"&&p.jsx(zn,{title:"Edit Expense",bp:s,onClose:()=>u(null),children:p.jsx(D,{initial:{...c,amount:String(c.amount)},onSave:N,onCancel:()=>u(null)})}),T&&p.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>P(null),children:p.jsx("img",{src:T,style:{maxWidth:"100%",maxHeight:"90vh",borderRadius:10,objectFit:"contain"},alt:"receipt"})})]})}function rM({events:n,income:e,expenses:t,bp:r}){const i=[...n.flatMap(u=>u.payments.map(c=>({...c,label:u.name}))),...e.map(u=>{var c;return{...u,label:((c=n.find(h=>h.id===u.eventId))==null?void 0:c.name)||u.note||"Quick entry"}})],s=t.filter(u=>u.channel==="c0").reduce((u,c)=>u+c.amount,0),o=t.filter(u=>u.channel==="c0").slice(-3).reverse(),a=r==="desktop"?3:r==="tablet"?2:1;return p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700,marginBottom:18},children:"Payment Channels"}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:`repeat(${a},1fr)`,gap:12},children:[p.jsxs(tr,{style:{marginBottom:0},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:"Cash (General)"}),p.jsx("div",{style:{fontSize:11,color:E.muted},children:"Unattributed cash"})]}),p.jsx("span",{style:{...En,background:"#FAEAEA",color:E.red,fontSize:13,padding:"4px 12px"},children:ne(s)})]}),p.jsxs("div",{style:{background:"#FAEAEA",borderRadius:8,padding:"10px 12px",marginBottom:o.length?10:0},children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:600},children:"TOTAL SPENT"}),p.jsx("div",{style:{fontWeight:700,color:E.red,fontSize:15,marginTop:2},children:ne(s)})]}),o.map(u=>p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,borderTop:`1px solid ${E.border}`,padding:"5px 0"},children:[p.jsx("span",{style:{color:E.muted,flex:1,marginRight:6,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.note||u.category}),p.jsx("span",{style:{fontWeight:700,color:E.red},children:ne(u.amount)})]},u.id))]}),Ro.map(u=>{const c=i.filter(g=>g.channel===u.id).reduce((g,T)=>g+T.amount,0),h=t.filter(g=>g.channel===u.id).reduce((g,T)=>g+T.amount,0),f=i.filter(g=>g.channel===u.id).slice(-3).reverse();return p.jsxs(tr,{style:{marginBottom:0},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:u.name}),p.jsx("div",{style:{fontSize:11,color:E.muted},children:u.holder})]}),p.jsx("span",{style:{...En,background:E.primary,color:"#F6F2EA",fontSize:13,padding:"4px 12px"},children:ne(c-h)})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:f.length?10:0},children:[p.jsxs("div",{style:{background:"#E6F3EC",borderRadius:8,padding:"9px 10px"},children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:600},children:"RECEIVED"}),p.jsx("div",{style:{fontWeight:700,color:E.green,fontSize:14,marginTop:2},children:ne(c)})]}),p.jsxs("div",{style:{background:"#FAEAEA",borderRadius:8,padding:"9px 10px"},children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:600},children:"PAID OUT"}),p.jsx("div",{style:{fontWeight:700,color:E.red,fontSize:14,marginTop:2},children:ne(h)})]})]}),f.map(g=>p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,borderTop:`1px solid ${E.border}`,padding:"5px 0"},children:[p.jsx("span",{style:{color:E.muted,flex:1,marginRight:6,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:g.label}),p.jsx("span",{style:{fontWeight:700,color:E.green},children:ne(g.amount)})]},g.id))]},u.id)})]})]})}function iM(n,e,t,r,i="All Time"){const s=new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}),o=e.reduce((w,A)=>w+A.payments.reduce((N,U)=>N+U.amount,0),0),a=t.reduce((w,A)=>w+A.amount,0),u=e.reduce((w,A)=>w+(A.totalBill||0),0),c=r.reduce((w,A)=>w+A.amount,0),h=o+a-c,f=u-o,g=tT(e,t,r),T=Math.max(...g.map(w=>Math.max(w.mIn,w.mOut)),1),P="@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'DM Sans',sans-serif;color:#161616;background:#fff;padding:36px;max-width:820px;margin:0 auto;font-size:13px;}h1{font-family:'Playfair Display',serif;color:#182F24;font-size:26px;margin-bottom:3px;}.sub{color:#B5892A;font-size:10px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;margin-bottom:6px;}.dt{color:#7A7060;font-size:12px;margin-bottom:28px;}.net{background:#182F24;border-radius:10px;padding:20px 24px;margin-bottom:20px;}.nl{font-size:10px;color:rgba(255,255,255,0.5);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;}.nv{font-family:'Playfair Display',serif;font-size:38px;font-weight:700;}.ns{font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px;}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;}.stat{background:#F6F2EA;border-radius:8px;padding:12px 14px;}.sl{font-size:9px;color:#7A7060;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;}.sv{font-size:18px;font-weight:700;}h2{font-family:'Playfair Display',serif;color:#182F24;font-size:17px;margin:24px 0 10px;padding-bottom:6px;border-bottom:1px solid #E2D9CE;}table{width:100%;border-collapse:collapse;font-size:12px;margin-bottom:14px;}th{text-align:left;padding:7px 10px;background:#F6F2EA;color:#7A7060;font-size:10px;text-transform:uppercase;letter-spacing:0.4px;font-weight:700;}td{padding:7px 10px;border-bottom:1px solid #F0EBE1;vertical-align:top;}.g{color:#276749;font-weight:700;}.r{color:#A83228;font-weight:700;}.sr td{background:#FAFAF7;padding-left:22px;color:#7A7060;}.mb{display:flex;align-items:center;gap:12px;margin-bottom:10px;padding:10px 12px;background:#F6F2EA;border-radius:6px;}.mbl{font-weight:700;font-size:13px;width:90px;flex-shrink:0;}.mbt{flex:1;background:#E2D9CE;height:6px;border-radius:3px;overflow:hidden;}.mbf{height:100%;border-radius:3px;background:#276749;}@media print{body{padding:16px;}@page{margin:1cm;}}";let k=`<div class="net"><div class="nl">Net Position</div><div class="nv" style="color:${h>=0?"#6FDDAA":"#FF7B7B"}">${ne(h)}</div><div class="ns">Total income minus all expenses</div></div><div class="grid"><div class="stat"><div class="sl">Total Billed</div><div class="sv">${ne(u)}</div></div><div class="stat"><div class="sl">Event Payments</div><div class="sv" style="color:#276749">${ne(o)}</div></div><div class="stat"><div class="sl">Quick Log Income</div><div class="sv" style="color:#2E6BB8">${ne(a)}</div></div><div class="stat"><div class="sl">Total Expenses</div><div class="sv" style="color:#A83228">${ne(c)}</div></div><div class="stat"><div class="sl">Outstanding</div><div class="sv" style="color:#A83228">${ne(f)}</div></div><div class="stat"><div class="sl">Events</div><div class="sv">${e.length}</div></div></div>`;g.length&&(k+="<h2>Monthly Breakdown</h2>",g.forEach(w=>{k+=`<div class="mb"><div class="mbl">${w.label}</div><div style="flex:1"><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span class="g">↑ ${ne(w.mIn)}</span><span class="r">↓ ${ne(w.mOut)}</span></div><div class="mbt"><div class="mbf" style="width:${(w.mIn/T*100).toFixed(0)}%"></div></div></div><div style="font-weight:700;font-size:13px;color:${w.net>=0?"#276749":"#A83228"};width:80px;text-align:right">${ne(w.net)}</div></div>`})),(n==="standard"||n==="full")&&(k+="<h2>Events</h2><table><tr><th>Event</th><th>Customer</th><th>Date</th><th>Bill</th><th>Received</th><th>Due</th></tr>",e.forEach(w=>{const A=w.payments.reduce((U,B)=>U+B.amount,0),N=w.totalBill-A;k+=`<tr><td><strong>${w.name}</strong></td><td>${w.customer||"—"}</td><td>${Tn(w.date)}</td><td>${ne(w.totalBill)}</td><td class="g">${ne(A)}</td><td class="${N>0?"r":"g"}">${ne(N)}</td></tr>`,n==="full"&&w.payments.forEach(U=>{k+=`<tr class="sr"><td>↳ ${bp(U.payType).label}</td><td colspan="2">${es(U.channel).name} · ${Tn(U.date)}</td><td></td><td class="g">${ne(U.amount)}</td><td></td></tr>`})}),k+="</table><h2>Expenses</h2><table><tr><th>Category</th><th>Channel</th><th>Date</th><th>Note</th><th>Amount</th></tr>",r.forEach(w=>{k+=`<tr><td>${w.category}</td><td>${es(w.channel).name}</td><td>${Tn(w.date)}</td><td>${w.note||"—"}</td><td class="r">${ne(w.amount)}</td></tr>`}),k+="</table>"),n==="full"&&t.length&&(k+="<h2>Quick Income Log</h2><table><tr><th>Type</th><th>Channel</th><th>Date</th><th>Note</th><th>Amount</th></tr>",t.forEach(w=>{k+=`<tr><td>${bp(w.payType).label}</td><td>${es(w.channel).name}</td><td>${Tn(w.date)}</td><td>${w.note||"—"}</td><td class="g">${ne(w.amount)}</td></tr>`}),k+="</table>");const L=n==="summary"?"Summary Only":n==="standard"?"Standard Report":"Full Detail",S=window.open("","_blank");S.document.write(`<!DOCTYPE html><html><head><title>Sooraj Caterers Report</title><style>${P}</style></head><body><h1>Sooraj Caterers & Events</h1><div class="sub">Account Report · ${L} · ${i}</div><div class="dt">Generated ${s}</div>${k}<div style="color:#ccc;font-size:10px;text-align:center;margin-top:32px">Sooraj Caterers & Events – Est. 1989 · Calicut, Kerala</div></body></html>`),S.document.close(),setTimeout(()=>S.print(),600)}function sM({events:n,income:e,expenses:t,bp:r}){const[i,s]=ie.useState(!1),[o,a]=ie.useState(!1),[u,c]=ie.useState("all"),h=[{id:"all",label:"All Time"},{id:"month",label:"This Month"},{id:"q3",label:"Last 3 Mo."},{id:"year",label:"This Year"}],f=(()=>{const W=new Date;if(u==="month")return Hv(new Date(W.getFullYear(),W.getMonth(),1));if(u==="q3"){const oe=new Date(W);return oe.setMonth(oe.getMonth()-3),Hv(oe)}return u==="year"?`${W.getFullYear()}-01-01`:null})(),g=W=>!f||W&&W>=f,T=n.map(W=>({...W,payments:W.payments.filter(oe=>g(oe.date))})),P=e.filter(W=>g(W.date)),k=t.filter(W=>g(W.date)),L=u==="all"?n:n.filter(W=>g(W.date)),S=T.reduce((W,oe)=>W+oe.payments.reduce((fe,be)=>fe+be.amount,0),0),w=P.reduce((W,oe)=>W+oe.amount,0),A=L.reduce((W,oe)=>W+(oe.totalBill||0),0),N=L.reduce((W,oe)=>W+oe.payments.reduce((fe,be)=>fe+be.amount,0),0),U=k.reduce((W,oe)=>W+oe.amount,0),B=A-N,_=S+w-U,y=A?(N/A*100).toFixed(0):0,I=L.filter(W=>W.payments.reduce((fe,be)=>fe+be.amount,0)<W.totalBill),R=tT(T,P,k),C=Math.max(...R.map(W=>Math.max(W.mIn,W.mOut)),1),D=()=>{let oe=`*Sooraj Caterers & Events*
📊 Account Summary – ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}

Total Billed: ${ne(A)}
Collected (Events): ${ne(S)} (${y}%)
Quick Log Income: ${ne(w)}
Outstanding: ${ne(B)}
Total Expenses: ${ne(U)}
*Net Position: ${ne(_)}*
`;I.length&&(oe+=`
📌 Pending:
`,I.forEach(fe=>{const be=fe.payments.reduce((M,H)=>M+H.amount,0);oe+=`• ${fe.name} (${fe.customer}) – ${ne(fe.totalBill-be)} due
`})),navigator.clipboard.writeText(oe).then(()=>{s(!0),setTimeout(()=>s(!1),2500)}).catch(()=>{})},x=r==="desktop"?4:2;return p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700},children:"Summary"}),p.jsx("button",{onClick:()=>a(!0),style:{background:E.accent,color:E.primary,border:"none",borderRadius:9,padding:"8px 18px",fontSize:13,fontWeight:700,cursor:"pointer"},children:"📄 Export"})]}),p.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},children:h.map(W=>{const oe=u===W.id;return p.jsx("button",{onClick:()=>c(W.id),style:{padding:"5px 13px",borderRadius:20,cursor:"pointer",fontSize:12,fontWeight:600,border:`1.5px solid ${oe?E.primary:E.border}`,background:oe?E.primary:E.surface,color:oe?"#fff":E.muted},children:W.label},W.id)})}),p.jsxs("div",{style:{background:E.primary,borderRadius:14,padding:"22px 24px",marginBottom:14},children:[p.jsx("div",{style:{color:E.accent,fontSize:10,fontWeight:700,letterSpacing:1.4,textTransform:"uppercase",marginBottom:6},children:"Net Position"}),p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:r==="mobile"?36:48,fontWeight:700,color:_>=0?"#6FDDAA":"#FF7B7B",lineHeight:1},children:ne(_)}),p.jsxs("div",{style:{fontSize:12,color:"rgba(246,242,234,0.5)",marginTop:8},children:["income minus all expenses · ",y,"% of events collected"]})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${x},1fr)`,gap:10,marginBottom:14},children:[{lbl:"Total Billed",val:ne(A),bg:"#EDF3EF",co:E.text},{lbl:"Event Payments",val:ne(S),bg:"#E6F3EC",co:E.green},{lbl:"Quick Log Income",val:ne(w),bg:"#E8F0FA",co:E.blue},{lbl:"Total Expenses",val:ne(U),bg:E.accentL,co:E.accent}].map(W=>p.jsxs("div",{style:{background:W.bg,borderRadius:11,padding:"11px 13px"},children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:600,textTransform:"uppercase",letterSpacing:.5,marginBottom:3},children:W.lbl}),p.jsx("div",{style:{fontSize:16,fontWeight:700,color:W.co},children:W.val})]},W.lbl))}),p.jsx(tr,{children:[{lbl:"Total Events",val:L.length,co:E.text},{lbl:"Fully Paid",val:L.length-I.length,co:E.green},{lbl:"Pending Payment",val:I.length,co:E.red},{lbl:"Outstanding",val:ne(B),co:E.red}].map(W=>p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${E.border}`},children:[p.jsx("span",{style:{fontSize:13,color:E.muted},children:W.lbl}),p.jsx("span",{style:{fontSize:14,fontWeight:700,color:W.co},children:W.val})]},W.lbl))}),R.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700,margin:"18px 0 12px"},children:"Monthly Breakdown"}),p.jsx(tr,{children:R.map(W=>p.jsxs("div",{style:{marginBottom:16},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[p.jsx("span",{style:{fontWeight:700,fontSize:13},children:W.label}),p.jsx("span",{style:{fontWeight:700,fontSize:13,color:W.net>=0?E.green:E.red},children:ne(W.net)})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:600,marginBottom:3},children:"IN"}),p.jsx("div",{style:{height:6,borderRadius:3,background:E.border,overflow:"hidden",marginBottom:2},children:p.jsx("div",{style:{height:"100%",borderRadius:3,background:E.green,width:`${(W.mIn/C*100).toFixed(0)}%`}})}),p.jsx("div",{style:{fontSize:12,fontWeight:700,color:E.green},children:ne(W.mIn)})]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:10,color:E.muted,fontWeight:600,marginBottom:3},children:"OUT"}),p.jsx("div",{style:{height:6,borderRadius:3,background:E.border,overflow:"hidden",marginBottom:2},children:p.jsx("div",{style:{height:"100%",borderRadius:3,background:E.red,width:`${(W.mOut/C*100).toFixed(0)}%`}})}),p.jsx("div",{style:{fontSize:12,fontWeight:700,color:E.red},children:ne(W.mOut)})]})]})]},W.mo))})]}),I.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700,margin:"16px 0 10px"},children:"Pending Collections"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:r==="desktop"?"1fr 1fr 1fr":r==="tablet"?"1fr 1fr":"1fr",gap:10},children:[...I].sort((W,oe)=>{const fe=W.totalBill-W.payments.reduce((M,H)=>M+H.amount,0);return oe.totalBill-oe.payments.reduce((M,H)=>M+H.amount,0)-fe}).map(W=>{const oe=W.payments.reduce((fe,be)=>fe+be.amount,0);return p.jsx(tr,{style:{marginBottom:0},children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[p.jsx("span",{style:{fontWeight:700,fontSize:14},children:W.name}),Rc(W.date)&&p.jsx("span",{style:{...En,background:"#FAEAEA",color:E.red,fontSize:9},children:"OVERDUE"})]}),p.jsxs("div",{style:{fontSize:11,color:E.muted,marginTop:2},children:[W.customer," · ",Tn(W.date)]})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("div",{style:{fontWeight:700,color:E.red,fontSize:16},children:ne(W.totalBill-oe)}),p.jsx("div",{style:{fontSize:10,color:E.muted},children:"due"})]})]})},W.id)})})]}),p.jsxs("div",{style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:[p.jsx("button",{onClick:D,style:{...Sr,background:i?E.green:E.accent,color:E.primary,fontWeight:700,flex:1,marginBottom:0,minWidth:180},children:i?"✓ Copied!":"📲 Copy for WhatsApp"}),p.jsx("button",{onClick:()=>a(!0),style:{...Sr,background:"#EDF3EF",color:E.primary,flex:1,marginBottom:0,minWidth:180},children:"📄 Export Report"})]}),o&&p.jsxs(zn,{title:"Export Report",bp:r,onClose:()=>a(!1),children:[p.jsx("div",{style:{fontSize:13,color:E.muted,marginBottom:16,lineHeight:1.6},children:"Pick a detail level. A print dialog will open — save as PDF from there."}),[{id:"summary",icon:"📋",label:"Summary Only",desc:"Net position, totals, pending collections. One clean page."},{id:"standard",icon:"📊",label:"Standard Report",desc:"Summary + monthly breakdown + all events + expenses by category."},{id:"full",icon:"📁",label:"Full Detail",desc:"Everything — every payment, log entry, and expense with all fields."}].map(W=>p.jsxs("button",{onClick:()=>{var oe;iM(W.id,T,P,k,((oe=h.find(fe=>fe.id===u))==null?void 0:oe.label)||"All Time"),a(!1)},style:{width:"100%",padding:"14px 16px",borderRadius:11,border:`1.5px solid ${E.border}`,background:E.surface,cursor:"pointer",textAlign:"left",marginBottom:10,display:"flex",gap:14,alignItems:"center"},children:[p.jsx("span",{style:{fontSize:26},children:W.icon}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,fontSize:14,color:E.text,marginBottom:2},children:W.label}),p.jsx("div",{style:{fontSize:12,color:E.muted},children:W.desc})]})]},W.id)),p.jsx("button",{style:Qo,onClick:()=>a(!1),children:"Cancel"})]})]})}function oM(){const[n,e]=ie.useState(""),[t,r]=ie.useState(""),[i,s]=ie.useState(""),[o,a]=ie.useState(!1),u=async c=>{if(c.preventDefault(),!(!n.trim()||!t)){s(""),a(!0);try{await dn.auth().signInWithEmailAndPassword(n.trim(),t)}catch(h){const f={"auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password. Please try again.","auth/invalid-email":"Please enter a valid email address.","auth/too-many-requests":"Too many attempts. Please wait a moment.","auth/invalid-credential":"Incorrect email or password."}[h.code]||"Sign-in failed. Please try again.";s(f)}a(!1)}};return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:E.bg,padding:24},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:700,color:E.primary,marginBottom:4},children:"Sooraj Caterers"}),p.jsx("div",{style:{color:E.accent,fontSize:10,fontWeight:700,letterSpacing:1.6,textTransform:"uppercase",marginBottom:40},children:"& Events · Accounts"}),p.jsxs("form",{onSubmit:u,style:{background:E.surface,borderRadius:16,padding:"32px 28px",width:"100%",maxWidth:360,border:`1px solid ${E.border}`},children:[p.jsx("div",{style:{fontSize:16,fontWeight:700,color:E.text,marginBottom:20,textAlign:"center"},children:"Sign in"}),p.jsx("label",{style:Ee,children:"Email"}),p.jsx("input",{style:Fe,type:"email",placeholder:"you@example.com",value:n,onChange:c=>e(c.target.value),autoComplete:"email"}),p.jsx("label",{style:Ee,children:"Password"}),p.jsx("input",{style:Fe,type:"password",placeholder:"••••••••",value:t,onChange:c=>r(c.target.value),autoComplete:"current-password"}),i&&p.jsx("div",{style:{fontSize:12,color:E.red,marginBottom:12,fontWeight:600},children:i}),p.jsx("button",{type:"submit",disabled:o,style:{...Sr,opacity:o?.6:1,marginBottom:0},children:o?"Signing in…":"Sign In"})]})]})}function aM(){const n=Y1(),[e,t]=ie.useState("income"),[r,i]=ie.useState([]),[s,o]=ie.useState([]),[a,u]=ie.useState([]),[c,h]=ie.useState(!0),[f,g]=ie.useState(!1),[T,P]=ie.useState(null),[k,L]=ie.useState(!1),[S,w]=ie.useState(null),[A,N]=ie.useState(!0),[U,B]=ie.useState(null),[_,y]=ie.useState(null),[I,R]=ie.useState({events:0,income:0,expenses:0}),[C,D]=ie.useState(0),x=ie.useRef({events:r,income:s,expenses:a}),W=ie.useRef(0),oe=ie.useRef(null),fe=(Z,ae)=>{oe.current&&clearTimeout(oe.current),B({label:Z,restore:ae}),oe.current=setTimeout(()=>B(null),5e3)},be=()=>{U&&(clearTimeout(oe.current),U.restore&&U.restore(),B(null))};ie.useEffect(()=>{x.current={events:r,income:s,expenses:a}},[r,s,a]),ie.useEffect(()=>{const Z=dn.auth().onAuthStateChanged(de=>{w(de),N(!1)}),ae=setTimeout(()=>N(!1),1e4);return()=>{Z(),clearTimeout(ae)}},[]),ie.useEffect(()=>{S&&vo.get().then(Z=>{if(!Z.exists){y("done");return}const ae=Z.data()||{},de=ae.events||[],we=ae.income||[],xe=ae.expenses||[];de.length||we.length||xe.length?(R({events:de.length,income:we.length,expenses:xe.length}),y("needed")):y("done")}).catch(()=>y("done"))},[S]);const M=async()=>{y("migrating");try{const ae=(await vo.get()).data()||{},de=ae.events||[],we=ae.income||[],xe=ae.expenses||[],lt=[...de.map(De=>({col:hc,doc:De})),...we.map(De=>({col:fc,doc:De})),...xe.map(De=>({col:pc,doc:De}))];for(let De=0;De<lt.length;De+=400){const ut=Ha.batch();lt.slice(De,De+400).forEach(({col:_e,doc:rt})=>ut.set(_e.doc(rt.id),rt)),await ut.commit()}await vo.update({events:dn.firestore.FieldValue.delete(),income:dn.firestore.FieldValue.delete(),expenses:dn.firestore.FieldValue.delete()}),y("done")}catch(Z){console.error(Z),y("error")}};ie.useEffect(()=>{const Z=ae=>{ae.altKey&&(ae.key==="e"||ae.key==="E")&&(ae.preventDefault(),t("expenses"),D(de=>de+1))};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[]);const H=Z=>{const ae=Z.target.scrollTop;ae>W.current+10?L(!0):ae<W.current-10&&L(!1),W.current=ae};ie.useEffect(()=>{if(!S){h(!0),g(!1);return}const Z={events:!1,income:!1,expenses:!1},ae=()=>{Z.events&&Z.income&&Z.expenses&&(h(!1),g(!0))},de=De=>{console.error(De),P("Cannot connect to Firebase. Check your config."),h(!1)},we=hc.onSnapshot(De=>{i(De.docs.map(ut=>({...ut.data(),id:ut.id}))),Z.events=!0,ae()},de),xe=fc.onSnapshot(De=>{o(De.docs.map(ut=>({...ut.data(),id:ut.id}))),Z.income=!0,ae()},de),lt=pc.onSnapshot(De=>{u(De.docs.map(ut=>({...ut.data(),id:ut.id}))),Z.expenses=!0,ae()},de);return()=>{we(),xe(),lt()}},[S]);const b=async Z=>{const ae=x.current.events;i(Z);try{const de=Ha.batch();ae.forEach(we=>{Z.find(xe=>xe.id===we.id)||de.delete(hc.doc(we.id))}),Z.forEach(we=>{const xe=ae.find(lt=>lt.id===we.id);(!xe||JSON.stringify(xe)!==JSON.stringify(we))&&de.set(hc.doc(we.id),we)}),await de.commit()}catch(de){console.error(de),i(ae),fe("Save failed — check your connection.",null)}},K=async Z=>{const ae=x.current.income;o(Z);try{const de=Ha.batch();ae.forEach(we=>{Z.find(xe=>xe.id===we.id)||de.delete(fc.doc(we.id))}),Z.forEach(we=>{const xe=ae.find(lt=>lt.id===we.id);(!xe||JSON.stringify(xe)!==JSON.stringify(we))&&de.set(fc.doc(we.id),we)}),await de.commit()}catch(de){console.error(de),o(ae),fe("Save failed — check your connection.",null)}},le=async Z=>{const ae=x.current.expenses;u(Z);try{const de=Ha.batch();ae.forEach(we=>{Z.find(xe=>xe.id===we.id)||de.delete(pc.doc(we.id))}),Z.forEach(we=>{const xe=ae.find(lt=>lt.id===we.id);(!xe||JSON.stringify(xe)!==JSON.stringify(we))&&de.set(pc.doc(we.id),we)}),await de.commit()}catch(de){console.error(de),fe("Save failed — retrying…",null)}},X=n==="mobile",ve=n==="desktop"?220:68;return A?p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:E.bg,gap:10},children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:24,color:E.primary,fontWeight:700},children:"Sooraj Caterers"}),p.jsx("div",{style:{fontSize:12,color:E.muted},children:"Checking credentials…"})]}):S?c?p.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:E.bg},children:[p.jsx("div",{style:{background:E.primary,padding:X?"12px 16px":"14px 28px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",color:"#F6F2EA",fontSize:X?18:22,fontWeight:700},children:"Sooraj Caterers"}),p.jsx("div",{style:{color:E.accent,fontSize:9,fontWeight:700,letterSpacing:1.6,textTransform:"uppercase",marginTop:2},children:"& Events · Accounts"})]})}),p.jsxs("div",{style:{padding:X?"14px":"24px 28px",flex:1},children:[p.jsx("div",{className:"sk",style:{height:72,borderRadius:12,marginBottom:16}}),[1,2,3].map(Z=>p.jsx("div",{className:"sk",style:{height:110,borderRadius:13,marginBottom:12}},Z))]})]}):!c&&(_==="needed"||_==="migrating"||_==="error")?p.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:E.bg,padding:24},children:p.jsxs("div",{style:{background:E.surface,borderRadius:16,padding:"32px 28px",width:"100%",maxWidth:440,border:`1px solid ${E.border}`,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:42,marginBottom:14},children:"📦"}),p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700,color:E.primary,marginBottom:10},children:"One-time data migration"}),p.jsxs("div",{style:{fontSize:13,color:E.muted,lineHeight:1.8,marginBottom:20},children:["Your existing data is safe and just needs to be moved to the new format.",p.jsx("br",{}),p.jsxs("strong",{style:{color:E.text},children:[I.events," events · ",I.income," income entries · ",I.expenses," expenses"]})," found."]}),_==="error"&&p.jsx("div",{style:{fontSize:12,color:E.red,marginBottom:14,fontWeight:600},children:"⚠ Something went wrong. Please try again."}),p.jsx("button",{onClick:M,disabled:_==="migrating",style:{width:"100%",padding:"12px 0",borderRadius:10,border:"none",background:_==="migrating"?E.muted:E.green,color:"#fff",fontSize:15,fontWeight:600,cursor:"pointer",marginBottom:10},children:_==="migrating"?"⏳  Migrating your data, please wait…":"✅  Migrate My Data Now"}),p.jsx("div",{style:{fontSize:11,color:E.muted},children:"This runs once and will not delete any data."})]})}):T?p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:E.bg,gap:12,padding:24},children:[p.jsx("div",{style:{fontSize:36},children:"⚠️"}),p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:20,color:E.primary,fontWeight:700,textAlign:"center"},children:"Connection Error"}),p.jsx("div",{style:{fontSize:13,color:E.muted,textAlign:"center",lineHeight:1.7},children:T})]}):p.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:E.bg},children:[p.jsxs("header",{style:{background:E.primary,padding:X?"12px 16px":"14px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,position:"sticky",top:0,zIndex:100},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"'Playfair Display',serif",color:"#F6F2EA",fontSize:X?18:22,fontWeight:700,lineHeight:1.1},children:"Sooraj Caterers"}),p.jsx("div",{style:{color:E.accent,fontSize:9,fontWeight:700,letterSpacing:1.6,textTransform:"uppercase",marginTop:2},children:"& Events · Accounts"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[p.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:f?"#6FDDAA":"#FFD166"}}),p.jsx("span",{style:{fontSize:10,color:"rgba(246,242,234,0.5)",fontWeight:600},children:f?"LIVE":""})]}),p.jsx("button",{onClick:()=>dn.auth().signOut(),title:`Signed in as ${S.email}
Click to sign out`,style:{background:"none",border:"none",cursor:"pointer",padding:0},children:p.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:E.accent,color:E.primary,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:15},children:(S.email||"?")[0].toUpperCase()})})]})]}),p.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[!X&&p.jsxs("aside",{style:{width:ve,background:E.surface,borderRight:`1px solid ${E.border}`,display:"flex",flexDirection:"column",flexShrink:0,padding:"16px 0",position:"sticky",top:56,height:"calc(100vh - 56px)",overflowY:"auto"},children:[n==="desktop"&&p.jsx("div",{style:{padding:"0 18px 20px",borderBottom:`1px solid ${E.border}`,marginBottom:8},children:p.jsx("div",{style:{fontSize:10,fontWeight:700,color:E.muted,textTransform:"uppercase",letterSpacing:1},children:"Navigation"})}),Kv.map(Z=>{const ae=e===Z.id;return p.jsxs("button",{onClick:()=>t(Z.id),style:{display:"flex",alignItems:"center",gap:n==="desktop"?12:0,justifyContent:n==="tablet"?"center":"flex-start",padding:n==="desktop"?"11px 18px":"12px 0",border:"none",background:ae?E.accentL:"transparent",cursor:"pointer",width:"100%",borderLeft:ae?`3px solid ${E.accent}`:"3px solid transparent",marginBottom:2},children:[p.jsx("span",{style:{fontSize:20},children:Z.icon}),n==="desktop"&&p.jsx("span",{style:{fontSize:13,fontWeight:ae?700:500,color:ae?E.accent:E.muted},children:Z.label})]},Z.id)})]}),p.jsxs("main",{onScroll:H,style:{flex:1,overflowY:"auto",padding:e==="cards"?0:X?"14px 14px calc(80px + env(safe-area-inset-bottom))":"24px 28px"},children:[e!=="cards"&&p.jsx(JF,{events:r,income:s,expenses:a}),e==="income"&&p.jsx(tM,{events:r,income:s,onSaveEvents:b,onSaveIncome:K,withUndo:fe,bp:n}),e==="expenses"&&p.jsx(nM,{expenses:a,events:r,income:s,onSave:le,withUndo:fe,bp:n,addTrigger:C}),e==="channels"&&p.jsx(rM,{events:r,income:s,expenses:a,bp:n}),e==="summary"&&p.jsx(sM,{events:r,income:s,expenses:a,bp:n}),e==="cards"&&p.jsx("iframe",{src:"/Sooraj-Accounts/tools/menu-card-generator/dist/index.html",title:"Menu Card Generator",style:{position:"fixed",top:56,left:X?0:ve,right:0,bottom:X?"calc(62px + env(safe-area-inset-bottom))":0,border:"none",width:X?"100%":`calc(100% - ${ve}px)`,height:X?"calc(100vh - 56px - 62px - env(safe-area-inset-bottom))":"calc(100vh - 56px)"}})]})]}),X&&p.jsxs("nav",{style:{position:"fixed",bottom:0,left:0,right:0,background:E.surface,borderTop:`1px solid ${E.border}`,display:"flex",flexDirection:"column",zIndex:200,transform:k?"translateY(100%)":"translateY(0)",transition:"transform 0.28s ease"},children:[p.jsx("div",{style:{display:"flex",height:62},children:Kv.map(Z=>p.jsxs("button",{onClick:()=>{t(Z.id),L(!1)},style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",cursor:"pointer",gap:2},children:[p.jsx("span",{style:{fontSize:20},children:Z.icon}),p.jsx("span",{style:{fontSize:10,fontWeight:e===Z.id?700:500,color:e===Z.id?E.primary:E.muted},children:Z.label})]},Z.id))}),p.jsx("div",{style:{height:"env(safe-area-inset-bottom)",background:E.surface}})]}),U&&p.jsxs("div",{style:{position:"fixed",bottom:X?78:24,left:"50%",transform:"translateX(-50%)",background:U.restore?E.primary:E.red,color:"#F6F2EA",borderRadius:12,padding:"12px 18px",display:"flex",alignItems:"center",gap:14,zIndex:1e3,boxShadow:"0 4px 24px rgba(0,0,0,0.35)",whiteSpace:"nowrap"},children:[p.jsx("span",{style:{fontSize:13},children:U.label}),U.restore&&p.jsx("button",{onClick:be,style:{background:E.accent,color:E.primary,border:"none",borderRadius:7,padding:"6px 14px",fontSize:12,fontWeight:700,cursor:"pointer"},children:"Undo"})]})]}):p.jsx(oM,{})}Ff.createRoot(document.getElementById("root")).render(p.jsx(aM,{}));
