!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Zooom",[],e):"object"==typeof exports?exports.Zooom=e():t.Zooom=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(32))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(5),o=n(10),i=n(7);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(36),o=n(37);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.0",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(15),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(5),o=n(18),i=n(19),c=n(9),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(4);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0),o=n(6),i=n(21),c=n(52),a=r.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},function(t,e,n){var r=n(5),o=n(33),i=n(7),c=n(8),a=n(9),u=n(3),f=n(18),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=a(e,!0),f)try{return s(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(1),o=n(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(5),o=n(1),i=n(34);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(6);t.exports=r("native-function-to-string",Function.toString)},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(43),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(2),o=n(25),i=n(13)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r,o,i=n(0),c=n(54),a=i.process,u=a&&a.versions,f=u&&u.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";n.r(e);n(30),n(55),n(62);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e.element,this.padding=e.padding||80,this.wrap="zooom-wrap",this.img="zooom-img",this.overlay="zooom-overlay",void 0===e.overlay)this.color="#fff",this.opacity="1";else{var n=e.overlay,r=n.color,o=n.opacity;this.color=r,this.opacity=o}this.addEventImage()}var e,n,o;return e=t,(n=[{key:"addEventImage",value:function(){var t=this;document.querySelectorAll(this.element).forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),t.imageZooom=e.currentTarget,t.zooomInit()}))}))}},{key:"createWrapper",value:function(){this.wrapper=document.createElement("div"),this.wrapper.classList.add(this.wrap),this.wrapImage(this.imageZooom,this.wrapper),this.imageZooom.classList.add(this.img),this.overlayAdd()}},{key:"removeWrapper",value:function(){var t=this,e=document.querySelector(".".concat(this.wrap)),n=this.transitionEvent();if(e){var r=document.querySelector(".".concat(this.img));r.removeAttribute("style"),e.removeAttribute("style"),e.addEventListener(n,(function(e){var n=e.currentTarget.parentNode;n&&n.replaceChild(r,e.currentTarget),r.classList.remove(t.img),t.overlayRemove()}))}}},{key:"zooomInit",value:function(){var t=this;null===document.querySelector(".".concat(this.wrap))?(this.createWrapper(),this.imageTranslate(this.imageProperty()),this.imageScale(this.imageProperty())):this.removeWrapper(),window.addEventListener("scroll",(function(e){console.log(e),t.removeWrapper(),window.removeEventListener("scroll",t.removeWrapper,!0)})),document.body.addEventListener("click",(function(){t.removeWrapper()}))}},{key:"overlayAdd",value:function(){var t=document.createElement("div");t.id=this.overlay,t.setAttribute("style","background-color: ".concat(this.color,"; opacity: ").concat(this.opacity)),document.body.appendChild(t)}},{key:"overlayRemove",value:function(){var t=document.getElementById(this.overlay);t&&t.parentNode.removeChild(t)}},{key:"transitionEvent",value:function(){var t=document.createElement("fakeelement"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return e[n]}},{key:"wrapImage",value:function(t,e){t.parentNode.insertBefore(e,t),e.appendChild(t)}},{key:"imageProperty",value:function(){return{targetWidth:this.imageZooom.clientWidth,targetHeight:this.imageZooom.clientHeight,imageWidth:this.imageZooom.naturalWidth,imageHeight:this.imageZooom.naturalHeight}}},{key:"imageScale",value:function(t){var e=t.imageWidth,n=t.imageHeight,r=e/t.targetWidth,o=window.innerHeight-this.padding,i=document.documentElement.clientWidth-this.padding,c=1;c=e<i&&n<o?r:e/n<i/o?o/n*r:i/e*r,c<=1&&(c=1),this.imageZooom.setAttribute("style","transform: scale(".concat(c,") translateZ(0);"))}},{key:"imageTranslate",value:function(t){var e=t.targetWidth,n=t.targetHeight,r=this.imageZooom.getBoundingClientRect(),o=window.innerHeight/2,i=document.documentElement.clientWidth/2,c=o-(r.top+n/2),a=i-(r.left+e/2);this.wrapper.setAttribute("style","transform: translate(".concat(a,"px, ").concat(c,"px) translateZ(0px);"))}}])&&r(e.prototype,n),o&&r(e,o),t}();e.default=o},function(t,e,n){"use strict";var r=n(31),o=n(1),i=n(25),c=n(2),a=n(26),u=n(12),f=n(51),s=n(27),l=n(53),p=n(13),v=n(28),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),m=l("concat"),y=function(t){if(!c(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!m},{concat:function(t){var e,n,r,o,i,c=a(this),l=s(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],y(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,e,n){var r=n(0),o=n(14).f,i=n(4),c=n(35),a=n(11),u=n(41),f=n(50);t.exports=function(t,e){var n,s,l,p,v,d=t.target,h=t.global,m=t.stat;if(n=h?r:m?r[d]||a(d,{}):(r[d]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(h?s:d+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(2),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(6),i=n(4),c=n(3),a=n(11),u=n(20),f=n(38),s=f.get,l=f.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,n,o){var u=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!s&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u.call(this)}))},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(11),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r,o,i,c=n(39),a=n(0),u=n(2),f=n(4),s=n(3),l=n(40),p=n(22),v=a.WeakMap;if(c){var d=new v,h=d.get,m=d.has,y=d.set;r=function(t,e){return y.call(d,t,e),e},o=function(t){return h.call(d,t)||{}},i=function(t){return m.call(d,t)}}else{var g=l("state");p[g]=!0,r=function(t,e){return f(t,g,e),e},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(20),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(6),o=n(21),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(3),o=n(42),i=n(14),c=n(10);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||a(t,s,u(e,s))}}},function(t,e,n){var r=n(23),o=n(44),i=n(49),c=n(19);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){t.exports=n(0)},function(t,e,n){var r=n(45),o=n(48).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(3),o=n(8),i=n(46).indexOf,c=n(22);t.exports=function(t,e){var n,a=o(t),u=0,f=[];for(n in a)!r(c,n)&&r(a,n)&&f.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(8),o=n(12),i=n(47),c=function(t){return function(e,n,c){var a,u=r(e),f=o(u.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==f||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(9),o=n(10),i=n(7);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(1),o=n(13),i=n(28),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(23);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(0),o=n(56),i=n(57),c=n(4);for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(58).forEach,o=n(61);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(59),o=n(15),i=n(26),c=n(12),a=n(27),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,m){for(var y,g,x=i(v),b=o(x),w=r(d,h,3),S=c(b.length),E=0,L=m||a,T=e?L(v,S):n?L(v,0):void 0;S>E;E++)if((p||E in b)&&(g=w(y=b[E],E,x),t))if(e)T[E]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:u.call(T,y)}else if(s)return!1;return l?-1:f||s?s:T}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,e,n){var r=n(60);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){}]).default}));