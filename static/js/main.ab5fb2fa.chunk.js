(this["webpackJsonpreact-password-generator"]=this["webpackJsonpreact-password-generator"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(9),n(1));n(10);var l=function(e){for(var t="",n=["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","123456789","!@#$%^&*()_+{}|[]:\";'<>?,./"];e>0;){var a=Math.floor(Math.random()*n.length),o=Math.floor(Math.random()*n[a].length);t+=n[a][o],e-=1}return t};var s=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1];return o.a.createElement("div",{className:"App"},o.a.createElement("input",{type:"number",min:0,max:100,value:n,onChange:function(e){e.preventDefault(),r(e.target.value)}}),o.a.createElement("button",{onClick:function(){m(l(n))}},"Generate Password"),u&&o.a.createElement("h3",null,u))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.ab5fb2fa.chunk.js.map