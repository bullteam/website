import utils from "utils";

const http = {
  fld: '.etcchebao.com',
  /**
   * jsonp请求（call调用）
   * @param obj
   *  sld: 二级域名
   *  path: 路径
   *  params: 参数obj，可选
   *  isSilent: 是否静默请求
   *  debugData：测试数据
   */
  jsonp(obj) {
    const self = this;
    return new Promise((resolve, reject) => {
      obj.sld = obj.sld || document.domain.split(this.fld)[0];
      obj.host = obj.host || "";
      obj.path = obj.path || "";
      obj.hide_error = obj.hide_error || false;
      if (obj.debugData && utils.debugger) {
        obj.sld = obj.sld + utils.getPrefix();
        console.info("http-jsonp：", obj);
        if (!obj.isSilent) {
          self.$toast.loading();
        }
        let resp = {
          body: {
            data: obj.debugData
          }
        }
        setTimeout(() => {
          if (!obj.isSilent) {
            self.$toast.close();
          }
          if (resp.body.data.code === 0) {
            resolve(resp.body.data.data);
          } else {
            if(!obj.hide_error){
              this.$toast.show(resp.body.data.msg);
            }
            console.log("[" + resp.body.data.code + "]" + resp.body.data.msg);
            reject({
              code: resp.body.data.code,
              msg: resp.body.data.msg,
            });
          }
        }, 300);
        return;
      }
      let options = obj.params && {params: obj.params};
      let host = `${obj.sld}${utils.getPrefix()}${http.fld}`;
      if (obj.host) {
        host = obj.host;
      }
      this.$http.jsonp(`https://${host}${obj.path}`, options)
        .then((resp) => {
          if (resp.body.code === 0) {
            resolve(resp.body.data);
          } else {
            if(!obj.hide_error){
              this.$toast.show(resp.body.msg);
            }
            console.log("[" + resp.body.code + "]" + resp.body.msg);
            reject({
              code: resp.body.code,
              msg: resp.body.msg,
            });
          }
        }).catch((e) => {
        reject({
          code: e.name,
          msg: e,
        });
      });
    })
  },
  /**
   * post请求（call调用）
   * @param obj
   *  sld: 二级域名
   *  path: 路径
   *  params: 参数obj，可选
   *  isSilent: 是否静默请求
   *  debugData：测试数据
   */
  post(obj) {
    const self = this;
    return new Promise((resolve, reject) => {
      obj.sld = obj.sld || document.domain.split(this.fld)[0];
      obj.host = obj.host || "";
      obj.path = obj.path || "";
      obj.hide_error = obj.hide_error || false;
      if (obj.debugData && utils.debugger) {
        obj.sld = obj.sld + utils.getPrefix();
        console.info("http-post：", obj);
        if (!obj.isSilent) {
          self.$toast.loading();
        }
        let resp = {
          body: {
            data: obj.debugData
          }
        }
        setTimeout(() => {
          if (!obj.isSilent) {
            self.$toast.close();
          }
          if (resp.body.data.code === 0) {
            resolve(resp.body.data.data);
          } else {
            if(!obj.hide_error){
              this.$toast.show(resp.body.data.msg);
            }
            console.log("[" + resp.body.data.code + "]" + resp.body.data.msg);
            reject({
              code: resp.body.data.code,
              msg: resp.body.data.msg,
            });
          }
        }, 1000);
        return;
      }
      let host = `${obj.sld}${utils.getPrefix()}${http.fld}`;
      if (obj.host) {
        host = obj.host;
      }
      this.$http.post(`https://${host}${obj.path}`, obj.params,
        {
          emulateJSON : true,
        })
        .then((resp) => {
          if (resp.body.code === 0) {
            resolve(resp.body.data);
          } else {
            if(!obj.hide_error){
              this.$toast.show(resp.body.msg);
            }
            console.log("[" + resp.body.code + "]" + resp.body.msg);
            reject({
              code: resp.body.code,
              msg: resp.body.msg,
            });
          }
        }).catch((e) => {
        reject({
          code: e.name,
          msg: e,
        });
      });
    })
  },
};


export default http;
