webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s=i("mvHQ"),o=i.n(s),a=i("//Fk"),r=i.n(a),c={jsonToAppParams:function(t){var e="";for(var i in t)t[i]&&(e+="||"+i+"=="+t[i]);return e=(e=e.substring(2))||"-1"},goToApp:function(t,e){e=c.jsonToAppParams(e),u.isAndroid()?(console.log("执行安卓指令:"+t,e),window.JavaScriptHelper.sendCommand(t,e)):u.isIos()&&(console.log("执行IOS指令:"+t,e),window.location=t+":"+e)},login:function(t,e){t?(t=encodeURIComponent(t),c.goToApp("login",{url:t,title:e})):alert("APP指令-登录：url不能为空")},getLocation:function(t,e,i){var n=this;return new r.a(function(s,o){var a=10;sessionStorage.getItem("LOCATION_ERROR")&&(a=3,sessionStorage.removeItem("LOCATION_ERROR"));var r=setInterval(function(){a<1?window.setLocationError(11):e||n.$toast.loading("定位中..."+a+"s"),a--},1e3);window.setLocationError=function(t){o(a<1?new Error("APP定位超时"):new Error("APP定位失败："+t)),sessionStorage.setItem("LOCATION_ERROR","1"),a=10,clearInterval(r),e||n.$toast.close()},window.setLocation=function(i,c){if(a=10,clearInterval(r),e||n.$toast.close(),0!==i||0!==c)switch(t){case"GAODE":window.AMap?AMap.convertFrom([i,c],"baidu",function(t,e){if("ok"===e.info){var i=e.locations;s([i[0].lng,i[0].lat])}else o(new Error("高德地图坐标转化失败"))}):o(new Error("高德地图加载失败"));break;case"BAIDU":default:if(window.BMap)(new BMap.Geocoder).getLocation(new BMap.Point(i,c),function(t){t&&s(t)});else s([i,c]),console.warn("百度地图加载失败")}else window.setLocationError(11)},i?setTimeout(function(){window.setLocation(i[0],i[1])},1e3):c.goToApp("getLocation")})},openWithApp:function(t,e,i){if(t){1!==i&&(t=encodeURIComponent(t));var n={url:t,title:e};1===i&&(n.isEncoding=1),c.goToApp("openWithApp",n)}else alert("APP指令-打开新页面：url不能为空")},closeWebView:function(){c.goToApp("closeWebView")},openCheckout:function(t,e,i,n){0==e&&(n=1),c.goToApp("openCheckout",{tradeID:t,payMoney:e,partnerID:i,isUbiPay:n})},qiYuService:function(t,e){1==t?c.goToApp("toQiYuService",e):2==t&&c.goToApp("orderDetailToQiYuService",e)},myOrderlist:function(t){c.goToApp("myOrderlist",{type:t})}},l=c;Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t},String.prototype.repeat||(String.prototype.repeat=function(t){if(null==this)throw new TypeError("can't convert "+this+" to object");var e=""+this;if((t=+t)!=t&&(t=0),t<0)throw new RangeError("repeat count must be non-negative");if(t==1/0)throw new RangeError("repeat count must be less than infinity");if(t=Math.floor(t),0==e.length||0==t)return"";if(e.length*t>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var i=e.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)e+=e,t--;return e+=e.substring(0,i-e.length)}),String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>=t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))});var v={adaptive:function(){var t=document.documentElement.clientWidth,e=(t=t>750?750:t)/375*20;document.documentElement.style.fontSize=parseInt(e)+"px"},getToken:function(t){var e=v.queryString("token");if(!e){if(t)return void v.removeCookie("token");e=v.getCookie("token")}if(e)return v.setCookie("token",e,1),e},loadFile:function(t,e,i){var n=void 0;if("js"==e)(n=document.createElement("script")).src=t,document.body.appendChild(n);else{if("css"!=e)throw new Error("utils.loadFile读取文件类型错误");(n=document.createElement("link")).href=t,n.rel="stylesheet",document.head.appendChild(n)}i&&(n.onload=n.onreadystatechange=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||i()})},setCookie:function(t,e,i){var n=new Date;i=i||1,n.setDate(n.getDate()+i),document.cookie=t+"="+e+";path=/;domain=etcchebao.com;expires="+n},getCookie:function(t){for(var e=document.cookie.split("; "),i=0;i<e.length;i++){var n=e[i].split("=");if(n[0]===t)return n[1]}return""},removeCookie:function(t){v.setCookie(t,"",-1)},queryString:function(t){return(document.location.search.match(new RegExp("(?:^\\?|&)"+t+"=(.*?)(?=&|$)"))||["",null])[1]},setAppInfo:function(){if(this.$route.query.platform){var t=this.$route.query.token,e=this.$route.query.clientVersion,i=this.$route.query.platform,n=this.$route.query.udid;t?v.setCookie("token",t):v.removeCookie("token"),e&&v.setCookie("clientVersion",e),i&&v.setCookie("platform",i),n&&v.setCookie("udid",n)}},ua:navigator.userAgent,isIos:function(){return v.ua.match(/iPhone|iPod|iPad/i)},isAndroid:function(){return v.ua.match(/Android/i)},isIphoneX:function(){return!!v.isIos()&&(/iphone/gi.test(navigator.userAgent)&&812==screen.height&&375==screen.width)},isWeixin:function(){return v.ua.match(/MicroMessenger/i)},getPrefix:function(){var t=window.location.host.toString(),e="";return-1!==t.indexOf("-dev")?e="-dev":-1!==t.indexOf("-test")&&(e="-test"),e},computeDistance:function(t){return(t=parseInt(t))<1e3?t+"m":(t/1e3).toFixed(2)+"km"},formatTime:function(t){var e=36e5,i=864e5,n=parseInt(t/i),s=parseInt((t-n*i)/e),o=parseInt((t-n*i-s*e)/6e4),a=parseInt((t-n*i-s*e-6e4*o)/1e3);return{d:n,h:s,mi:o,s:a,ms:parseInt(t-n*i-s*e-6e4*o-1e3*a)}},formatTime_zero:function(t){var e=v.formatTime(t);return{d:e.d.toString().padStart(2,"0"),h:e.h.toString().padStart(2,"0"),mi:e.mi.toString().padStart(2,"0"),s:e.s.toString().padStart(2,"0"),ms:e.ms.toString().padStart(3,"0")}},eventMonitor:function(t,e,i,n,s){if(v.debugger&&console.log("事件监控",t,e,i,n,s),e&&!v.isWeixin()){window.setDeviceInfo=function(a,r,c,l,u,d,p){localStorage.setItem("deviceInfo",o()({udid:c,idfa:u})),$.ajax({url:"https://api-monitor"+v.getPrefix()+".etcchebao.com/v1/listen/event",dataType:"jsonp",data:{udid:c||u,token:t,event_type:i||1,event:e,come_from:1,last_event:s||""},success:function(t){n&&n(),0==t.code?console.log("事件监控-请求成功"):console.error("事件监控-请求失败")},error:function(){n&&n(),console.error("事件监控-请求失败")}})};var a=localStorage.getItem("deviceInfo");(a=JSON.parse(a))?window.setDeviceInfo("","",a.udid,"",a.idfa):l.goToApp("getDeviceInfo")}else n&&n()},baiduMap:function(t,e,i,n){if(BMap){var s=new BMap.Map(t||"baidu_map"),o=new BMap.Point(116.331398,39.897445);s.centerAndZoom(o,12),(new BMap.Geocoder).getPoint(i,function(t){t&&(s.centerAndZoom(t,16),s.addOverlay(new BMap.Marker(t))),null!=n&&n(!!t)},e||"中国")}else console.error("未引入百度地图")},monitor_start_time:0,monitorEvent:function(t,e,i){var n="",s={udid:v.getCookie("udid"),token:v.getCookie("token"),event:e,come_from:1},a=function(){$.ajax({url:n,dataType:"jsonp",data:s,success:function(t){0==t.code||console.error(t.msg)}})};switch(t){case 1:n="https://api-monitor"+v.getPrefix()+".etcchebao.com/v1/listen/event",s.event_type=1;var r={};switch(i){case"IN":case"OUT":r[i]=(new Date).Format("yyyy-MM-dd hh:mm:ss");break;case"JUMP":case"QUIT":r[i]=1;break;default:r=null}r&&(s.extra=o()(r)),a();break;case 2:if(n="https://api-monitor"+v.getPrefix()+".etcchebao.com/v1/listen/timestay",this.monitor_start_time){var c=(new Date).getTime()-this.monitor_start_time;s.stay_time=c/1e3,this.monitor_start_time=0,a()}else this.monitor_start_time=(new Date).getTime()}},isGtEqVer:function(t){var e=v.getCookie("clientVersion");return!e||!t||parseInt(e.replace(/\./g,""))>=parseInt(t.replace(/\./g,""))}},u=v,d=(i("ksBL"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",[e("router-view")],1)],1)},staticRenderFns:[]});var p=i("VU/8")({name:"App",data:function(){return{transitionName:"slide-left"}},mounted:function(){},methods:{},watch:{}},d,!1,function(t){i("pm6D")},null,null).exports,h=i("/ocq"),_={data:function(){return{scroll_top:document.querySelector("#app").scrollTop,carousel_index:0,carousels:["http://jumpserver.org/img/header_one.jpg","http://jumpserver.org/img/header_two.jpg"],team:[{name:"黄福祥",nickname:"梧桐",text:"公牛开源联盟发起人、Zeus 项目发起人、资深架构师，历经19楼、广州菲音、唯品会、汇量科技等知名企业",avatar:"/static/img/avatar_hfx.jpg"}],history:[{icon:"&#xe7b4;",title:"标题",text:"内容内容内容内容内容内容内容内容",version:"v1.0",date:"2019-01-01"},{icon:"&#xe7b4;",title:"标题",text:"内容内容内容内容内容内容内容内容",version:"v1.0",date:"2019-01-01"}]}},beforeCreate:function(){},mounted:function(){this.init()},beforeDestroy:function(){},methods:{init:function(){var t=this;window.addEventListener("scroll",function(e){t.scroll_top=document.querySelector("#app").scrollTop},!0),setInterval(function(){t.carouselChange(1)},5e3)},carouselChange:function(t){this.carousel_index=this.carousel_index+t>this.carousels.length-1?0:this.carousel_index+t<0?this.carousels.length-1:this.carousel_index+t}},computed:{solid_header:function(){return this.scroll_top>200}},watch:{}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("header",{class:{solid:t.solid_header}},[t._m(0)]),t._v(" "),i("div",{staticClass:"carousel"},[i("div",{staticClass:"carousel-main"},t._l(t.carousels,function(e,n){return i("div",{staticClass:"carousel-item",class:{active:n==t.carousel_index}},[i("div",{staticClass:"img",style:"background-image: url("+e+");"})])})),t._v(" "),i("div",{staticClass:"carousel-arrow"},[i("div",{staticClass:"carousel-arrow-left",on:{click:function(e){t.carouselChange(-1)}}}),t._v(" "),i("div",{staticClass:"carousel-arrow-right",on:{click:function(e){t.carouselChange(1)}}})]),t._v(" "),i("div",{staticClass:"carousel-nav"},t._l(t.carousels,function(e,n){return i("div",{staticClass:"carousel-nav-item",class:{active:n==t.carousel_index},on:{click:function(e){t.carousel_index=n}}})}))]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("section",{staticClass:"partner"},[i("div",{staticClass:"container"},[t._m(3),t._v(" "),i("div",{staticClass:"partner-content"},[i("div",{staticClass:"row"},t._l(4,function(e){return i("div",{staticClass:"col col-6"},[t._m(4,!0)])}))])])]),t._v(" "),i("section",{staticClass:"function"},[i("div",{staticClass:"container"},[t._m(5),t._v(" "),i("div",{staticClass:"function-content"},[i("div",{staticClass:"row"},t._l(4,function(e){return i("div",{staticClass:"col col-12"},[i("div",{staticClass:"function-title"},[t._v("\n              标题标题标题\n            ")]),t._v(" "),i("div",{staticClass:"function-text"},[t._v("\n              内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n            ")]),t._v(" "),i("span",{staticClass:"iconfont"},[t._v("")])])}))])])]),t._v(" "),t._m(6),t._v(" "),i("section",{staticClass:"team"},[i("div",{staticClass:"container"},[t._m(7),t._v(" "),i("div",{staticClass:"row"},t._l(t.team,function(e){return i("div",{staticClass:"col col-8"},[i("img",{attrs:{src:e.avatar,alt:""}}),t._v(" "),i("div",{staticClass:"name"},[i("span",[t._v(t._s(e.name))]),t._v("\n            ("+t._s(e.nickname)+")\n          ")]),t._v(" "),i("p",[t._v(t._s(e.text))])])}))])]),t._v(" "),i("section",{staticClass:"history"},[i("div",{staticClass:"container"},[t._m(8),t._v(" "),i("div",{staticClass:"flow"},t._l(t.history,function(e){return i("div",{staticClass:"flow-item"},[i("div",{staticClass:"flow-icon"},[i("span",{staticClass:"iconfont",domProps:{innerHTML:t._s(e.icon)}})]),t._v(" "),i("div",{staticClass:"flow-content"},[i("div",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.text))])]),t._v(" "),i("div",{staticClass:"flow-date"},[t._v("\n            "+t._s(e.version)+"\n            "),i("p",[t._v(t._s(e.date))])])])}))])]),t._v(" "),i("section",{staticClass:"postscript"}),t._v(" "),t._m(9)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"logo"},[this._v("\n        公牛联盟\n      ")]),this._v(" "),e("nav",[e("ul",[e("li",[e("div",{staticClass:"link"},[this._v("GITHUB")])]),this._v(" "),e("li",[e("div",{staticClass:"link"},[this._v("文档")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"properties"},[i("div",{staticClass:"row container"},[i("div",{staticClass:"col col-8"},[i("h2",[t._v("标题标题标题标题标题")]),t._v(" "),i("p",[t._v("1. 内容内容内容内容内容内容内容内容")]),t._v(" "),i("p",[t._v("2. 内容内容内容内容内容内容内容内容内容内容")])]),t._v(" "),i("div",{staticClass:"col col-8"},[i("h2",[t._v("标题标题标题标题标题")]),t._v(" "),i("p",[t._v("1. 内容内容内容内容内容内容内容内容")]),t._v(" "),i("p",[t._v("2. 内容内容内容内容内容内容内容内容内容内容")])]),t._v(" "),i("div",{staticClass:"col col-8"},[i("h2",[t._v("标题标题标题标题标题")]),t._v(" "),i("p",[t._v("1. 内容内容内容内容内容内容内容内容")]),t._v(" "),i("p",[t._v("2. 内容内容内容内容内容内容内容内容内容内容")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"speciality"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[i("span",[t._v("标题标题标题标题标题标题标题")]),t._v(" "),i("p",[t._v("English Title English Title English Title English Title English Title ")])]),t._v(" "),i("div",{staticClass:"speciality-content"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col col-6"},[i("div",{staticClass:"speciality-item"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("div",{staticClass:"top"},[t._v("标题标题标题")]),t._v(" "),i("p",[t._v("副标题副标题副标题副标题副标题副标题副标题")])]),t._v(" "),i("div",{staticClass:"speciality-item"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("div",{staticClass:"top"},[t._v("标题标题标题")]),t._v(" "),i("p",[t._v("副标题副标题副标题副标题副标题副标题副标题")])]),t._v(" "),i("div",{staticClass:"speciality-item"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("div",{staticClass:"top"},[t._v("标题标题标题")]),t._v(" "),i("p",[t._v("副标题副标题副标题副标题副标题副标题副标题")])])]),t._v(" "),i("div",{staticClass:"col col-12"},[t._v("\n            中间\n          ")]),t._v(" "),i("div",{staticClass:"col col-6"},[i("div",{staticClass:"speciality-item"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("div",{staticClass:"top"},[t._v("标题标题标题")]),t._v(" "),i("p",[t._v("副标题副标题副标题副标题副标题副标题副标题")])]),t._v(" "),i("div",{staticClass:"speciality-item"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("div",{staticClass:"top"},[t._v("标题标题标题")]),t._v(" "),i("p",[t._v("副标题副标题副标题副标题副标题副标题副标题")])]),t._v(" "),i("div",{staticClass:"speciality-item"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("div",{staticClass:"top"},[t._v("标题标题标题")]),t._v(" "),i("p",[t._v("副标题副标题副标题副标题副标题副标题副标题")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("鸣谢")]),this._v(" "),e("p",[this._v("副标题")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"partner-item"},[e("div",{staticClass:"mask"},[e("span",[this._v("\n                  LENOVO\n                ")]),this._v(" "),e("p",[this._v("\n                  在信息产业内多元化发展的大型企业集团，和富有创新性的国际化的科技公司。\n                ")])]),this._v(" "),e("img",{attrs:{src:"http://jumpserver.org/img/c15.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("功能描述")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"demo"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[e("span",[this._v("演示体验")])]),this._v(" "),e("div",{staticClass:"video-mod"},[e("video",{staticStyle:{"max-width":"100%"},attrs:{id:"intro-video",controlslist:"nodownload",preload:"",controls:"",src:"/static/video/20190412_155226.mp4"}})]),this._v(" "),e("div",{staticClass:"btn-mod"},[e("div",{staticClass:"btn"},[this._v("在线体验")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("团队成员")]),this._v(" "),e("p",[this._v("有你们才有Bullteam")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("我们的历史")]),this._v(" "),e("p",[this._v("一路走来，征服bug")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"container"},[e("div",[this._v("\n        © 2018-2019 bullteam  公牛战队, All Rights Reserved. 粤ICP备14078736号-1\n      ")])])])}]};var m=i("VU/8")(_,f,!1,function(t){i("g8Fa")},null,null).exports;h.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)},n.a.use(h.a);var g=new h.a({transitionOnLoad:!0,routes:[{path:"/",name:"home",component:m}]}),C=i("8+8L");n.a.use(C.a),n.a.config.productionTip=!1,String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t||""===e?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))}),String.prototype.padEnd||(String.prototype.padEnd=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t||""===e?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),String(this)+e.slice(0,t))}),window.vue=new n.a({el:"#app",router:g,components:{App:p},template:"<App/>",beforeCreate:function(){var t=this;n.a.http.interceptors.push(function(e,i){t.$toast.loading(),i(function(e){return e.status<400?t.$toast.close():t.$toast.fail("请求失败：["+e.status+"]"),e})})},mounted:function(){}})},g8Fa:function(t,e){},ksBL:function(t,e){},pm6D:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3ec3a47ed3cd8c09fff2.js.map