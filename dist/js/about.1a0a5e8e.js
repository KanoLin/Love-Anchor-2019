(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"07ac":function(t,e,n){var i=n("23e7"),s=n("6f53").values;i({target:"Object",stat:!0},{values:function(t){return s(t)}})},"475a":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"alert"}},[n("transition",{attrs:{id:"attention2"}},[n("div",{attrs:{id:"alertbox"}},[n("div",{attrs:{id:"title"}}),n("p",{staticClass:"attentiontext"},[t._v(t._s(t.line1)),n("br"),t._v(t._s(t.line2))])])]),n("div",{attrs:{id:"bottom"}})],1)},s=[],r={name:"alert",data:function(){return{line1:"你已经投过票了",line2:"记得明天再来哦"}},mounted:function(){""!=sessionStorage.getItem("line1")&&(this.line1=sessionStorage.getItem("line1")),""!=sessionStorage.getItem("line2")&&(this.line2=sessionStorage.getItem("line2")),void 0==sessionStorage.getItem("line1")&&(this.line1="你已经投过票了",this.line2="记得明天再来哦")}},o=r,a=(n("6392"),n("2877")),c=Object(a["a"])(o,i,s,!1,null,"255d4f1c",null);e["default"]=c.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),s=n("5899"),r="["+s+"]",o=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"58d2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"votepage"}},[n("div",{attrs:{id:"cardcontain"}},t._l(t.test,(function(e,i,s){return n("card",{key:s,attrs:{info:e,Player:t.Player,ifCheck:t.ifCheck},on:{goback:t.choose,changePlayer:t.changePlayer}})})),1),n("div",{attrs:{id:"final-btn"}},[n("input",{staticClass:"queren",attrs:{type:"submit",id:"final",value:" ",ifClick:t.ifClick},on:{click:t.submit}})]),n("div",{attrs:{id:"attention"}},[t._v(t._s(t.errmsg))]),n("div",{attrs:{id:"bottom2"}})])},s=[],r=(n("07ac"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cardbox",attrs:{id:"card"+t.info.index},on:{click:t.change}},[n("h1",{staticClass:"name",attrs:{id:"user"+t.info.index}},[t._v(t._s(t.info.index))]),n("div",{staticClass:"icon-container",style:"backgroundImage:url("+t.info.iconsrc+")",attrs:{id:"box"+t.info.index}},[n("audio",{attrs:{id:"audio"+t.info.index,src:t.info.audiosrc,controlslist:"nodownload"}})]),n("div",{staticClass:"info"},[n("h2",{staticClass:"name"},[t._v(t._s(t.info.name))]),n("input",{ref:"play",class:t.audiobtn,attrs:{type:"submit",id:"play",muted:"muted",value:"",ifChecked:t.ifChecked},on:{click:t.control}}),n("div",{staticClass:"piao"},[t._v(t._s(t.info.number)+"票")]),n("p",{staticClass:"intro"},[t._v(t._s(t.info.text))]),n("div",{ref:"btn"+t.info.index,class:t.btnname,attrs:{id:"btn"+t.info.index}})])])}),o=[],a=(n("a9e3"),{name:"card",props:{info:Object,index:Number,name:String,num:Number,text:String,iconsrc:String,audiosrc:String,ifCheck:Number,ifChecked:Boolean,Player:Number},data:function(){return{boxidx:0,show:!0,ifPlay:!1}},computed:{boxindex:function(){return"box"+this.index},btnname:function(){return this.info.index==this.ifCheck?"button_active":"button"},audiobtn:function(){return this.Player==this.info.index?"playbtn_active":"playbtn"}},mounted:function(){},watch:{},methods:{change:function(){sessionStorage.setItem("choose",this.info.index),this.$emit("goback",this.info.index),window.console.log("正在播放的是"+this.Player)},control:function(){window.console.log("正在播放的是"+this.Player),this.$emit("changePlayer",this.info.index)}}}),c=a,u=(n("f33f"),n("2877")),l=Object(u["a"])(c,r,o,!1,null,null,null),f=l.exports,d=n("14ac"),h={data:function(){return{test:[{}],index:0,ifCheck:0,ifClick:!1,Player:0,errmsg:""}},components:{card:f},mounted:function(){var t=this;this.axios(d["g"]).then((function(e){t.test=Object.values(e.data),sessionStorage.setItem("line1",""),sessionStorage.setItem("line2","")})).catch((function(t){window.console.log(t),401!==t.response.status?(sessionStorage.setItem("line2","似乎网络出错了"),sessionStorage.setItem("line1","请稍候再试"),this.$router.push("/alert")):window.location.href=d["c"]}))},computed:{},watch:{ifCheck:function(){this.errmsg="你选择的是第"+this.ifCheck+"号选手"}},methods:{changePlayer:function(t){var e=this.Player;this.Player=t,document.querySelector("#audio"+e).pause(),document.querySelector("#audio"+e).currentTime=0,document.querySelector("#audio"+t).play()},choose:function(t){this.ifCheck=t,this.ifClick=!1},submit:function(){var t=this;if(this.errmsg="",0!=this.ifCheck)if(1!=this.ifClick){if(this.ifClick=!0,0!=this.ifCheck){var e={method:"POST",data:this.ifCheck,transformRequest:[function(t){return t=JSON.stringify(t),t}],url:d["d"]+this.ifCheck};this.axios(e).then((function(e){window.console.log(e),3==e.data.errcode?t.$router.push("/alert"):0==e.data.errcode?(t.ifClick=!0,t.errmsg="感谢投票！"):t.errmsg=e.data.errmsg})).catch((function(t){t.response?(window.console.log(t.response.data),this.errmsg="请求中……",401===t.response.status&&(window.location.href=d["c"]),this.errmsg=t.response.data):this.errmsg=t.message,window.console.log(t.config)}))}}else this.errmsg="点太快啦！";else this.errmsg="请选择选手！"}}},m=h,g=(n("c05b"),Object(u["a"])(m,i,s,!1,null,null,null));e["default"]=g.exports},6392:function(t,e,n){"use strict";var i=n("e319"),s=n.n(i);s.a},"6f53":function(t,e,n){var i=n("83ab"),s=n("df75"),r=n("fc6a"),o=n("d1e7").f,a=function(t){return function(e){var n,a=r(e),c=s(a),u=c.length,l=0,f=[];while(u>l)n=c[l++],i&&!o.call(a,n)||f.push(t?[n,a[n]]:a[n]);return f}};t.exports={entries:a(!0),values:a(!1)}},7156:function(t,e,n){var i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var r,o;return s&&"function"==typeof(r=e.constructor)&&r!==n&&i(o=r.prototype)&&o!==n.prototype&&s(t,o),t}},a9e3:function(t,e,n){"use strict";var i=n("83ab"),s=n("da84"),r=n("94ca"),o=n("6eeb"),a=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),h=n("241c").f,m=n("06cf").f,g=n("9bf2").f,p=n("58a8").trim,v="Number",b=s[v],x=b.prototype,C=c(d(x))==v,k=function(t){var e,n,i,s,r,o,a,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=p(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+u}for(r=u.slice(2),o=r.length,a=0;a<o;a++)if(c=r.charCodeAt(a),c<48||c>s)return NaN;return parseInt(r,i)}return+u};if(r(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(C?f((function(){x.valueOf.call(n)})):c(n)!=v)?u(new b(k(e)),n,_):k(e)},I=i?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;I.length>w;w++)a(b,y=I[w])&&!a(_,y)&&g(_,y,m(b,y));_.prototype=x,x.constructor=_,o(s,v,_)}},c05b:function(t,e,n){"use strict";var i=n("c95a"),s=n.n(i);s.a},c95a:function(t,e,n){},d506:function(t,e,n){},e319:function(t,e,n){},f33f:function(t,e,n){"use strict";var i=n("d506"),s=n.n(i);s.a}}]);
//# sourceMappingURL=about.1a0a5e8e.js.map