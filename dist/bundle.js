!function(e){function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t=window.webpackJsonp;window.webpackJsonp=function(n,o,c){for(var i,u,a=0,l=[];a<n.length;a++)u=n[a],r[u]&&l.push(r[u][0]),r[u]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(t&&t(n,o,c);l.length;)l.shift()()};var o={},r={2:0};n.e=function(e){function t(){u.onerror=u.onload=null,clearTimeout(a);var n=r[e];0!==n&&(n&&n[1](new Error("Loading chunk "+e+" failed.")),r[e]=void 0)}var o=r[e];if(0===o)return new Promise(function(e){e()});if(o)return o[2];var c=new Promise(function(n,t){o=r[e]=[n,t]});o[2]=c;var i=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,n.nc&&u.setAttribute("nonce",n.nc),u.src=n.p+""+e+".bundle.js";var a=setTimeout(t,12e4);return u.onerror=u.onload=t,i.appendChild(u),c},n.m=e,n.c=o,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n.oe=function(e){throw console.error(e),e},n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),r=t(2);Object(o.a)(function(){var e=document.createElement("h1");return e.innerText="Vanilla JS ftw",e}()),Object(o.a)(function(){var e=document.createElement("div");return e.innerText="The total of 56 and 82 is "+Object(r.a)(56,82),e}()),Object(o.a)(function(){var e=document.createElement("button");return e.innerText="Click to subtract",e.onclick=function(){console.log("Alas poor yorick, i knew him, Horatio!"),t.e(0).then(t.bind(null,3)).then(function(e){console.log("27-12 = ",e.default(27,12))})},e}()),Object(o.a)(function(){var e=document.createElement("button");return e.innerText="Divide something by zero",e.onclick=function(){console.log("et tu, brute"),t.e(1).then(t.bind(null,4)).then(function(e){console.log("6/0 = ",e.divide(6,0))})},e}())},function(e,n,t){"use strict";function o(e){document.body.appendChild(e)}n.a=o},function(e,n,t){"use strict";n.a=function(e,n){return e+n}}]);