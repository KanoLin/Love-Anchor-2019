(function(t){function e(e){for(var r,a,u=e[0],c=e[1],s=e[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function u(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"982103a7"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"f0e25d78"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://hemc.100steps.net/2019/anchor-vote/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"14ac":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return d}));var r="http://localhost/2019/love-anchor2019-backend/api",a="".concat(r,"/"),o=1234,i="".concat(r,"/info"),u="".concat(r,"/vote/"),c=("".concat(r,"/setuserid/"),"".concat(r,"/clearuserid"),"https://hemc.100steps.net/2019/anchor-vote"),s="https://hemc.100steps.net/2019/anchor-vote/img/shareimg.jpg",l="https://hemc.100steps.net/2018/fireman/auth.php?redirect="+encodeURIComponent(location.href),f=("".concat(r,"/checkSubscribe"),"https://hemc.100steps.net/2017/wechat/Home/Public/getJsApi"),d={method:"GET",transformRequest:[function(t){return t=JSON.stringify(t),t}],url:i}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},nativeOn:{touchmove:function(e){return t.prevent(t.e)}}},[n("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[n("router-view")],1)],1)},o=[],i=(n("ac1f"),n("1276"),n("d3b7"),n("466d"),n("18a0")),u=n.n(i),c=n("bc3a"),s=n.n(c),l=n("4328"),f=n.n(l),d=n("14ac");function p(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}function h(){if(0==p())return alert("请使用微信浏览器"),!1;fetch(d["b"],{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:f.a.stringify({url:location.href.split("#")[0]})}).then((function(t){return t.json()})).then((function(t){u.a.config({appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["updateTimelineShareData","updateAppMessageShareData"],debug:!1}),u.a.ready((function(){u.a.updateTimelineShareData({title:"爱上你主播：投票现场",link:d["f"],imgUrl:d["e"],success:function(){},cancel:function(){alert("取消了分享~")}})})),u.a.updateAppMessageShareData({title:"爱上你主播：投票现场",desc:"",link:d["f"],imgUrl:d["e"],success:function(){},cancel:function(){alert("取消了分享~")}}),u.a.error((function(){}))}))}window.onload=function(){document.addEventListener("touchstart",(function(t){t.touches.length>1&&t.preventDefault()})),document.addEventListener("gesturestart",(function(t){t.preventDefault()}))};var m={data:function(){return{transitionName:"slide-down"}},watch:{$route:function(t,e){var n=t.path.split("/").length,r=e.path.split("/").length;this.transitionName=n<r?"slide-up":"slide-down"}},mounted:function(){h()},methods:{prevent:function(t){t.preventDefault()}}},v=m,g=(n("034f"),n("2877")),b=Object(g["a"])(v,a,o,!1,null,null,null),y=b.exports,w=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{attrs:{id:"title"}}),n("h1",{staticClass:"title"},[t._v("这里是爱上你主播大赛投票通道")]),n("h2",{staticClass:"title"},[t._v("你的投票对选手们至关重要")]),n("h3",{staticClass:"title"},[t._v("快去给心仪选手投票打call吧！")]),n("div",{attrs:{id:"left"}}),n("h3",{staticClass:"title"},[t._v("每天可以投一票哦~")]),n("div",{attrs:{id:"change"}},[n("router-link",{staticClass:"changepage",attrs:{to:"/votepage"}},[t._v("去投票")])],1),n("div",{attrs:{id:"bottom"}})])},_=[],O={name:"home",mounted:function(){}},j=O,C=(n("6879"),Object(g["a"])(j,S,_,!1,null,"76f187aa",null)),E=C.exports;r["a"].use(w["a"]);var k=[{path:"/",name:"home",component:E},{path:"/votepage",name:"votepage",component:function(){return n.e("about").then(n.bind(null,"58d2"))}},{path:"/alert",name:"alert",component:function(){return n.e("about").then(n.bind(null,"475a"))}}],T=new w["a"]({routes:k}),P=T;r["a"].prototype.axios=s.a,s.a.defaults.timeout=3e4,s.a.defaults.withCredentials=!0,r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(t){return t(y)}}).$mount("#app")},"5d94":function(t,e,n){},6879:function(t,e,n){"use strict";var r=n("5d94"),a=n.n(r);a.a},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.52199998.js.map