import Vue from 'vue'
import etccb from './etccb'

// date扩展格式化日期 | author:Meizz
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

//String.prototype.repeat兼容处理
if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    // To convert string to integer.
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
      str += str;
      count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
}
//String.prototype.padStart兼容处理
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length >= targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

const utils = {
  //TODO 调试模式
  // debugger: true,
  /**
   * 字体自适应
   */
  adaptive() {
    let screenWid = document.documentElement.clientWidth;
    let fixWid = 375;
    screenWid = screenWid > 750 ? 750 : screenWid;
    let htmlFontSize = (screenWid / fixWid) * 20;
    document.documentElement.style.fontSize = parseInt(htmlFontSize) + 'px';
  },
  /**
   * 获取token并存入cookie
   * @param isFromApp 页面是否从app打开，从app打开的链接不存在token，会清空cookie
   */
  getToken(isFromApp) {
    let token = utils.queryString('token');
    if (!token) {
      if (isFromApp) {
        utils.removeCookie("token");
        return;
      }
      token = utils.getCookie('token');
    }
    if (token) {
      utils.setCookie('token', token, 1);
      return token;
    }
    return;
  },
  /**
   * 读取文件
   * @param url
   * @param type
   * @param callback
   */
  loadFile(url, type, callback) {
    let elem;
    if (type == 'js') {
      elem = document.createElement("script");
      elem.src = url;
      document.body.appendChild(elem);
    } else if (type == 'css') {
      elem = document.createElement("link");
      elem.href = url;
      elem.rel = "stylesheet";
      document.head.appendChild(elem);
    } else {
      throw new Error('utils.loadFile读取文件类型错误');
    }
    if (callback) {
      elem.onload = elem.onreadystatechange = function () {
        if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
          callback();
        }
      };
    }
  },
  /**
   * cookie
   * @param name
   * @param value
   * @param time 时间[单位：天]
   */
  setCookie(name, value, time) {
    let date = new Date();
    time = time || 1;
    date.setDate(date.getDate() + time);
    document.cookie = name + "=" + value + ";path=/;domain=e.com;expires=" + date;
  },
  getCookie(name) {
    let arr = document.cookie.split("; ");
    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr[i].split("=");
      if (arr2[0] === name) {
        return arr2[1];
      }
    }
    return "";
  },
  removeCookie(name) {
    utils.setCookie(name, "", -1);
  },

  //获取url查询字符串
  queryString(key) {
    return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
  },
  /**
   * call调用-从APP进入页面，设置APP信息到cookies
   */
  setAppInfo() {
    //非APP进入不处理
    if (!this.$route.query.platform) {
      return;
    }
    //首页处理token
    let token = this.$route.query.token;
    let clientVersion = this.$route.query.clientVersion;
    let platform = this.$route.query.platform;
    let udid = this.$route.query.udid;
    if (token) {
      utils.setCookie("token", token);
    } else {
      utils.removeCookie("token");
    }
    clientVersion && utils.setCookie("clientVersion", clientVersion);
    platform && utils.setCookie("platform", platform);
    udid && utils.setCookie("udid", udid);
  },

  ua: navigator.userAgent,
  //ios
  isIos() {
    return utils.ua.match(/iPhone|iPod|iPad/i);
  },
  //安卓
  isAndroid() {
    return utils.ua.match(/Android/i)
  },
  //iphoneX
  isIphoneX() {
    if (utils.isIos()) {
      return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375);
    } else {
      return false;
    }
  },
  //微信
  isWeixin() {
    return utils.ua.match(/MicroMessenger/i);
  },
  //获取前缀（其实是后缀）
  getPrefix() { //截取当前host有没有后缀 如-dev 、-test等
    let wlh = window.location.host.toString();
    let prefix = '';
    if (wlh.indexOf('-dev') !== -1) {
      prefix = '-dev';
    } else if (wlh.indexOf('-test') !== -1) {
      prefix = '-test';
    }
    return prefix;
  },
  /**
   * 计算距离
   * @param distance
   * @returns {string}
   */
  computeDistance(distance) {
    distance = parseInt(distance);
    if (distance < 1000) {
      return distance + 'm';
    } else {
      return (distance / 1000).toFixed(2) + 'km';
    }
  },
  //格式化时间（毫秒）
  formatTime(ms) {
    let ss = 1000;
    let mi = ss * 60;
    let hh = mi * 60;
    let dd = hh * 24;

    let day = parseInt(ms / dd);
    let hour = parseInt((ms - day * dd) / hh);
    let minute = parseInt((ms - day * dd - hour * hh) / mi);
    let second = parseInt((ms - day * dd - hour * hh - minute * mi) / ss);
    let milliSecond = parseInt(ms - day * dd - hour * hh - minute * mi - second * ss);

    let result = {
      d: day,
      h: hour,
      mi: minute,
      s: second,
      ms: milliSecond
    };

    return result;

  },
  //格式化时间_补零（毫秒）
  formatTime_zero(ms) {
    let temp = utils.formatTime(ms);
    let result = {
      d: temp.d.toString().padStart(2, '0'),
      h: temp.h.toString().padStart(2, '0'),
      mi: temp.mi.toString().padStart(2, '0'),
      s: temp.s.toString().padStart(2, '0'),
      ms: temp.ms.toString().padStart(3, '0')
    };
    return result;
  },

  /**
   * 事件监控
   * @param token
   * @param eventId 统计事件ID
   * @param event_type 事件类型：1：页面，2：事件
   * @param last_event 来源事件
   */
  eventMonitor: function (token, eventId, event_type, cb, last_event) {
    if (utils.debugger) {
      console.log('事件监控', token, eventId, event_type, cb, last_event);
    }
    if (!eventId || utils.isWeixin()) {
      cb ? cb() : '';
      return;
    }
    window.setDeviceInfo = function (imei, macad, udid, netstatus, idfa, operation, registrationID) {
      localStorage.setItem("deviceInfo", JSON.stringify({udid: udid, idfa: idfa}));
      $.ajax({
        url: 'https://api-monitor' + utils.getPrefix() + '.e.com/v1/listen/event',
        dataType: 'jsonp',
        data: {
          udid: udid || idfa,
          token: token,
          event_type: event_type || 1,//事件类型：1：页面，2：事件
          event: eventId,//统计事件
          come_from: 1,//来源：1：其他，2：推送，3：智能投放
          last_event: last_event || '',//来源事件
        },
        success: function (json) {
          cb ? cb() : '';
          if (json.code == 0) {
            console.log('事件监控-请求成功');
          } else {
            console.error('事件监控-请求失败');
          }
        },
        error: function () {
          cb ? cb() : '';
          console.error('事件监控-请求失败');
        }
      });
    };
    let deviceInfo = localStorage.getItem("deviceInfo");
    deviceInfo = JSON.parse(deviceInfo);
    if (!deviceInfo) {
      etccb.goToApp('getDeviceInfo');
    } else {
      window.setDeviceInfo("", "", deviceInfo.udid, "", deviceInfo.idfa);
    }
  },
  /**
   * 百度地图定位（城市，地址，回调【是否定位成功】）
   * @param id
   * @param city
   * @param addr
   * @param callback
   */
  baiduMap(id, city, addr, callback) {
    if (!BMap) {
      console.error('未引入百度地图');
      return;
    }
    var map = new BMap.Map(id || "baidu_map"),
      defaultPoint = new BMap.Point(116.331398, 39.897445);//默认地址
    map.centerAndZoom(defaultPoint, 12);
    // map.disableDragging();
    var myGeo = new BMap.Geocoder;
    myGeo.getPoint(addr, function (e) {
      e && (map.centerAndZoom(e, 16), map.addOverlay(new BMap.Marker(e)));
      if (callback != null) {
        callback(e ? true : false);
      }
    }, city || '中国');
  },

  //统计相关
  monitor_start_time: 0,
  /**
   * 时间统计
   * @param type
   * @param event_id
   * @param extra_type
   */
  monitorEvent(type, event_id, extra_type) {
    let url = ``;
    let data = {
      udid: utils.getCookie("udid"),
      token: utils.getCookie("token"),
      event: event_id,
      come_from: 1,
    };
    let submit = () => {
      // console.log(url,data);
      $.ajax({
        url: url,
        dataType: "jsonp",
        data: data,
        success(json) {
          if (json.code == 0) {

          } else {
            console.error(json.msg);
          }
        }
      });
    };
    switch (type) {
      case 1://事件
        url = `https://api-monitor${utils.getPrefix()}.e.com/v1/listen/event`;
        data.event_type = 1;//事件类型：1：页面，2：事件
        let extra = {};
        switch (extra_type) {
          case "IN"://进入时间
            extra[extra_type] = new Date().Format('yyyy-MM-dd hh:mm:ss');
            break;
          case "OUT"://离开时间
            extra[extra_type] = new Date().Format('yyyy-MM-dd hh:mm:ss');
            break;
          case "JUMP"://跳出
            extra[extra_type] = 1;
            break;
          case "QUIT"://退出
            extra[extra_type] = 1;
            break;
          default:
            extra = null;
            break;
        }
        if (extra) {
          data.extra = JSON.stringify(extra);
        }
        submit();
        break;
      case 2://停留时长
        url = `https://api-monitor${utils.getPrefix()}.e.com/v1/listen/timestay`;
        if (!this.monitor_start_time) {
          this.monitor_start_time = new Date().getTime();
        } else {
          let space = new Date().getTime() - this.monitor_start_time;
          data.stay_time = space / 1000;
          this.monitor_start_time = 0;
          submit();
        }
        break;
    }
  },
  /**
   * 判断当前版本是否大于等于某版本（version格式[1.0.0]）
   * @param version
   * @returns {boolean}
   */
  isGtEqVer: function (version) {
    let curVer = utils.getCookie('clientVersion');
    if (!curVer || !version) {
      return true;
    }
    let curVerInt = parseInt(curVer.replace(/\./g, ''));
    let verInt = parseInt(version.replace(/\./g, ''));

    return curVerInt >= verInt;
  },
};
// Vue.prototype.$utils = utils;

export default utils;
