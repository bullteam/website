webpackJsonp([1],{0:function(t,e){},HQrY:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("mvHQ"),i=n.n(r),a=n("//Fk"),s=n.n(a),c={jsonToAppParams:function(t){var e="";for(var n in t)t[n]&&(e+="||"+n+"=="+t[n]);return e=(e=e.substring(2))||"-1"},goToApp:function(t,e){e=c.jsonToAppParams(e),l.isAndroid()?(console.log("执行安卓指令:"+t,e),window.JavaScriptHelper.sendCommand(t,e)):l.isIos()&&(console.log("执行IOS指令:"+t,e),window.location=t+":"+e)},login:function(t,e){t?(t=encodeURIComponent(t),c.goToApp("login",{url:t,title:e})):alert("APP指令-登录：url不能为空")},getLocation:function(t,e,n){var o=this;return new s.a(function(r,i){var a=10;sessionStorage.getItem("LOCATION_ERROR")&&(a=3,sessionStorage.removeItem("LOCATION_ERROR"));var s=setInterval(function(){a<1?window.setLocationError(11):e||o.$toast.loading("定位中..."+a+"s"),a--},1e3);window.setLocationError=function(t){i(a<1?new Error("APP定位超时"):new Error("APP定位失败："+t)),sessionStorage.setItem("LOCATION_ERROR","1"),a=10,clearInterval(s),e||o.$toast.close()},window.setLocation=function(n,c){if(a=10,clearInterval(s),e||o.$toast.close(),0!==n||0!==c)switch(t){case"GAODE":window.AMap?AMap.convertFrom([n,c],"baidu",function(t,e){if("ok"===e.info){var n=e.locations;r([n[0].lng,n[0].lat])}else i(new Error("高德地图坐标转化失败"))}):i(new Error("高德地图加载失败"));break;case"BAIDU":default:if(window.BMap)(new BMap.Geocoder).getLocation(new BMap.Point(n,c),function(t){t&&r(t)});else r([n,c]),console.warn("百度地图加载失败")}else window.setLocationError(11)},n?setTimeout(function(){window.setLocation(n[0],n[1])},1e3):c.goToApp("getLocation")})},openWithApp:function(t,e,n){if(t){1!==n&&(t=encodeURIComponent(t));var o={url:t,title:e};1===n&&(o.isEncoding=1),c.goToApp("openWithApp",o)}else alert("APP指令-打开新页面：url不能为空")},closeWebView:function(){c.goToApp("closeWebView")},openCheckout:function(t,e,n,o){0==e&&(o=1),c.goToApp("openCheckout",{tradeID:t,payMoney:e,partnerID:n,isUbiPay:o})},qiYuService:function(t,e){1==t?c.goToApp("toQiYuService",e):2==t&&c.goToApp("orderDetailToQiYuService",e)},myOrderlist:function(t){c.goToApp("myOrderlist",{type:t})}},u=c;Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},String.prototype.repeat||(String.prototype.repeat=function(t){if(null==this)throw new TypeError("can't convert "+this+" to object");var e=""+this;if((t=+t)!=t&&(t=0),t<0)throw new RangeError("repeat count must be non-negative");if(t==1/0)throw new RangeError("repeat count must be less than infinity");if(t=Math.floor(t),0==e.length||0==t)return"";if(e.length*t>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var n=e.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)e+=e,t--;return e+=e.substring(0,n-e.length)}),String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>=t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))});var p={adaptive:function(){var t=document.documentElement.clientWidth,e=(t=t>750?750:t)/375*20;document.documentElement.style.fontSize=parseInt(e)+"px"},getToken:function(t){var e=p.queryString("token");if(!e){if(t)return void p.removeCookie("token");e=p.getCookie("token")}if(e)return p.setCookie("token",e,1),e},loadFile:function(t,e,n){var o=void 0;if("js"==e)(o=document.createElement("script")).src=t,document.body.appendChild(o);else{if("css"!=e)throw new Error("utils.loadFile读取文件类型错误");(o=document.createElement("link")).href=t,o.rel="stylesheet",document.head.appendChild(o)}n&&(o.onload=o.onreadystatechange=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||n()})},setCookie:function(t,e,n){var o=new Date;n=n||1,o.setDate(o.getDate()+n),document.cookie=t+"="+e+";path=/;domain=etcchebao.com;expires="+o},getCookie:function(t){for(var e=document.cookie.split("; "),n=0;n<e.length;n++){var o=e[n].split("=");if(o[0]===t)return o[1]}return""},removeCookie:function(t){p.setCookie(t,"",-1)},queryString:function(t){return(document.location.search.match(new RegExp("(?:^\\?|&)"+t+"=(.*?)(?=&|$)"))||["",null])[1]},setAppInfo:function(){if(this.$route.query.platform){var t=this.$route.query.token,e=this.$route.query.clientVersion,n=this.$route.query.platform,o=this.$route.query.udid;t?p.setCookie("token",t):p.removeCookie("token"),e&&p.setCookie("clientVersion",e),n&&p.setCookie("platform",n),o&&p.setCookie("udid",o)}},ua:navigator.userAgent,isIos:function(){return p.ua.match(/iPhone|iPod|iPad/i)},isAndroid:function(){return p.ua.match(/Android/i)},isIphoneX:function(){return!!p.isIos()&&(/iphone/gi.test(navigator.userAgent)&&812==screen.height&&375==screen.width)},isWeixin:function(){return p.ua.match(/MicroMessenger/i)},getPrefix:function(){var t=window.location.host.toString(),e="";return-1!==t.indexOf("-dev")?e="-dev":-1!==t.indexOf("-test")&&(e="-test"),e},computeDistance:function(t){return(t=parseInt(t))<1e3?t+"m":(t/1e3).toFixed(2)+"km"},formatTime:function(t){var e=36e5,n=864e5,o=parseInt(t/n),r=parseInt((t-o*n)/e),i=parseInt((t-o*n-r*e)/6e4),a=parseInt((t-o*n-r*e-6e4*i)/1e3);return{d:o,h:r,mi:i,s:a,ms:parseInt(t-o*n-r*e-6e4*i-1e3*a)}},formatTime_zero:function(t){var e=p.formatTime(t);return{d:e.d.toString().padStart(2,"0"),h:e.h.toString().padStart(2,"0"),mi:e.mi.toString().padStart(2,"0"),s:e.s.toString().padStart(2,"0"),ms:e.ms.toString().padStart(3,"0")}},eventMonitor:function(t,e,n,o,r){if(p.debugger&&console.log("事件监控",t,e,n,o,r),e&&!p.isWeixin()){window.setDeviceInfo=function(a,s,c,u,l,d,f){localStorage.setItem("deviceInfo",i()({udid:c,idfa:l})),$.ajax({url:"https://api-monitor"+p.getPrefix()+".etcchebao.com/v1/listen/event",dataType:"jsonp",data:{udid:c||l,token:t,event_type:n||1,event:e,come_from:1,last_event:r||""},success:function(t){o&&o(),0==t.code?console.log("事件监控-请求成功"):console.error("事件监控-请求失败")},error:function(){o&&o(),console.error("事件监控-请求失败")}})};var a=localStorage.getItem("deviceInfo");(a=JSON.parse(a))?window.setDeviceInfo("","",a.udid,"",a.idfa):u.goToApp("getDeviceInfo")}else o&&o()},baiduMap:function(t,e,n,o){if(BMap){var r=new BMap.Map(t||"baidu_map"),i=new BMap.Point(116.331398,39.897445);r.centerAndZoom(i,12),(new BMap.Geocoder).getPoint(n,function(t){t&&(r.centerAndZoom(t,16),r.addOverlay(new BMap.Marker(t))),null!=o&&o(!!t)},e||"中国")}else console.error("未引入百度地图")},monitor_start_time:0,monitorEvent:function(t,e,n){var o="",r={udid:p.getCookie("udid"),token:p.getCookie("token"),event:e,come_from:1},a=function(){$.ajax({url:o,dataType:"jsonp",data:r,success:function(t){0==t.code||console.error(t.msg)}})};switch(t){case 1:o="https://api-monitor"+p.getPrefix()+".etcchebao.com/v1/listen/event",r.event_type=1;var s={};switch(n){case"IN":case"OUT":s[n]=(new Date).Format("yyyy-MM-dd hh:mm:ss");break;case"JUMP":case"QUIT":s[n]=1;break;default:s=null}s&&(r.extra=i()(s)),a();break;case 2:if(o="https://api-monitor"+p.getPrefix()+".etcchebao.com/v1/listen/timestay",this.monitor_start_time){var c=(new Date).getTime()-this.monitor_start_time;r.stay_time=c/1e3,this.monitor_start_time=0,a()}else this.monitor_start_time=(new Date).getTime()}},isGtEqVer:function(t){var e=p.getCookie("clientVersion");return!e||!t||parseInt(e.replace(/\./g,""))>=parseInt(t.replace(/\./g,""))}},l=p,d=(n("ksBL"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",[e("router-view")],1)],1)},staticRenderFns:[]});var f=n("VU/8")({name:"App",data:function(){return{transitionName:"slide-left"}},mounted:function(){},methods:{},watch:{}},d,!1,function(t){n("pm6D")},null,null).exports,h=n("/ocq"),g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("main",[this._v("\n    首页\n  ")]),this._v(" "),e("footer")])}]};var m=n("VU/8")({data:function(){return{}},beforeCreate:function(){},mounted:function(){},beforeDestroy:function(){},methods:{},computed:{},watch:{}},g,!1,function(t){n("HQrY")},null,null).exports;h.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)},o.a.use(h.a);var v=new h.a({transitionOnLoad:!0,routes:[{path:"/",name:"home",component:m}]}),w=n("8+8L");o.a.use(w.a),o.a.config.productionTip=!1,String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t||""===e?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))}),String.prototype.padEnd||(String.prototype.padEnd=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t||""===e?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),String(this)+e.slice(0,t))}),window.vue=new o.a({el:"#app",router:v,components:{App:f},template:"<App/>",beforeCreate:function(){var t=this;o.a.http.interceptors.push(function(e,n){t.$toast.loading(),n(function(e){return e.status<400?t.$toast.close():t.$toast.fail("请求失败：["+e.status+"]"),e})})},mounted:function(){}})},ksBL:function(t,e){},pm6D:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.878d5cfb05b4da6b7957.js.map