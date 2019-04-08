import utils from "utils";

/**
 * etc车宝，指令对象
 * @type {{goToApp: etccb.goToApp, login: (function(*=, *=)), getLocation: (function(*=)), openWithApp: (function(*=, *=, *))}}
 */
const etccb = {
  jsonToAppParams(json) {
    let result = "";
    for (let key in json) {
      if (json[key]) {
        result += `||${key}==${json[key]}`;
      }
    }
    result = result.substring(2);
    result = result || "-1";
    return result;
  },
  /**
   * 执行指令
   * @param cmd，必填，String
   * @param param 可选，json
   */
  goToApp(cmd, param) {
    param = etccb.jsonToAppParams(param);
    //跟app的交互
    if (utils.isAndroid()) {
      console.log('执行安卓指令:' + cmd, param);
      window.JavaScriptHelper.sendCommand(cmd, param);
    } else if (utils.isIos()) {
      console.log('执行IOS指令:' + cmd, param);
      window.location = cmd + ":" + param;
    }
  },
  /**
   * app登录
   * @param url
   * @param title
   */
  login(url, title) {
    if (!url) {
      alert("APP指令-登录：url不能为空");
      return;
    }
    url = encodeURIComponent(url);
    etccb.goToApp("login", {url: url, title: title});
  },
  /**
   * 获取地理位置(call调用)
   * @param type String 返回的坐标类型，BAIDU（默认），GAODE
   * @param isSilent Boolean 是否隐藏加载吐司
   * @param debugLngLat Array 测试经纬度数据（百度定位）
   */
  getLocation(type, isSilent, debugLngLat) {
    const self = this;
    return new Promise((resolve, reject) => {
      let timer = 10;
      // 如果定位失败，第二次定位超时变为3秒
      if (sessionStorage.getItem("LOCATION_ERROR")) {
        timer = 3;
        sessionStorage.removeItem("LOCATION_ERROR")
      }
      let inte = setInterval(() => {
        if (timer < 1) {
          window.setLocationError(11);
        } else {
          if (!isSilent) {
            self.$toast.loading(`定位中...${timer}s`);
          }
        }
        timer--;
      }, 1000);
      window.setLocationError = (errorCode) => {
        if (timer < 1) {
          reject(new Error("APP定位超时"));
        } else {
          reject(new Error("APP定位失败：" + errorCode));
        }
        sessionStorage.setItem("LOCATION_ERROR", "1");
        timer = 10;
        clearInterval(inte);
        if (!isSilent) {
          self.$toast.close();
        }
      };
      window.setLocation = (lng, lat) => {
        timer = 10;
        clearInterval(inte);
        if (!isSilent) {
          self.$toast.close();
        }
        if (lng === 0 && lat === 0) {
          window.setLocationError(11);
          return;
        }
        switch (type) {
          case "GAODE": {
            if (window.AMap) {
              AMap.convertFrom([lng, lat], 'baidu', function (status, result) {
                if (result.info === 'ok') {
                  var lnglats = result.locations; // Array.<LngLat>
                  resolve([lnglats[0].lng, lnglats[0].lat]);
                } else {
                  reject(new Error("高德地图坐标转化失败"));
                }
              });
            } else {
              reject(new Error("高德地图加载失败"));
            }
            break;
          }
          case "BAIDU":
          default:
            if(window.BMap){
              let myGeo = new BMap.Geocoder;
              myGeo.getLocation(new BMap.Point(lng, lat), function(result){
                if (result){
                  resolve(result);
                }
              });
            }else{
              resolve([lng, lat]);
              console.warn('百度地图加载失败');
            }
            break;
        }
      };

      if (debugLngLat) {
        setTimeout(() => {
          window.setLocation(debugLngLat[0], debugLngLat[1]);//百度地图坐标
        }, 1000);
      } else {
        etccb.goToApp("getLocation");
      }

    });
  },
  /**
   * 打开webview
   * @param url
   * @param title
   * @param isEncoding
   */
  openWithApp(url, title, isEncoding) {
    if (!url) {
      alert("APP指令-打开新页面：url不能为空");
      return;
    }
    if (isEncoding !== 1) {
      url = encodeURIComponent(url);
    }
    let param = {
      url: url,
      title: title,
    };
    if (isEncoding === 1) {
      param.isEncoding = 1;
    }
    etccb.goToApp("openWithApp", param);
  },
  /**
   * 关闭webview
   */
  closeWebView() {
    etccb.goToApp("closeWebView");
  },
  /**
   * 打开收银台
   * @param tradeID
   * @param payMoney
   * @param partnerID
   * @param isUbiPay
   */
  openCheckout(tradeID, payMoney, partnerID, isUbiPay) {
    if(payMoney == 0){//0元支付
      isUbiPay = 1;
    }
    etccb.goToApp('openCheckout', {
      tradeID: tradeID,
      payMoney: payMoney,
      partnerID: partnerID,
      isUbiPay: isUbiPay,
    });
  },
  /**
   * 七鱼客服
   * @param type 1：商品跳转，2：订单跳转
   * @param obj
   * 1：productTitle==粤通卡充值神器||productDesc==体积小、功耗低携带方便购买充值易||productNote==¥99||productPicture==www.baidu.com||productUrl==www.baidu.com
   * 2：orderId==1607191703194338||orderType==11
   */
  qiYuService(type, obj) {
    if (type == 1) {
      etccb.goToApp('toQiYuService', obj);
    } else if (type == 2) {
      etccb.goToApp('orderDetailToQiYuService', obj);
    }
  },

  /**
   * 订单列表
   * @param type
   *  0洗车，8违章，9钱包充值，10商城，3车险，
   *  11粤通卡充值，15车牌认证，16微信发卡，
   *  17广发发卡，24车主卡，25车险商城，32停车，33加油，38违章年审
   */
  myOrderlist(type){
    etccb.goToApp('myOrderlist', {
      type: type
    });
  }
};


export default etccb;
