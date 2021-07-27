(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/* Reset */\n* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nli {\n  list-style-type: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/* Default Layout */\nbody, #root {\n  background-color: bisque;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-bar {\n  background-color: bisque;\n  padding: 8px 16px;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.app-body {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin-top: 48px;\n}\n\n.app-footer {\n  padding: 8px 16px;\n}",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},91:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),n.hash&&(e+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var l=t(p),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(n[l].references++,n[l].updater(f)):n.push({identifier:p,updater:o(f,r),references:1}),i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},546:(e,n,t)=>{e.exports=t.p+"1fcab817090e78435061.svg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(91),n=t.n(e),r=new URL(t(546),t.b);const o='<header class="app-bar"> <h1>Header</h1> </header> <main class="app-body"> <img src="'+n()(r)+'"/> <h1>Hello Webpack!</h1> </main> <footer class="app-footer">Footer</footer> ';var a=t(379),i=t.n(a),c=t(795),s=t.n(c),u=t(695),d=t.n(u),p=t(216),l=t.n(p),f=t(426),h={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=d()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};h.domAPI=s(),h.insertStyleElement=l(),i()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,document.getElementById("root").innerHTML=o,window.addEventListener("load",(()=>{document.querySelector("main").appendChild(document.createTextNode("Microverse Project"))}))})()})();