import Vue from 'vue'
import App from './App'
import router from './router'
import utils from 'utils';
import VueResource from 'vue-resource';
// import IScroll from 'iscroll';


// Vue.use(Shui,IScroll);
Vue.use(VueResource);

Vue.config.productionTip = false;

// padStart()方法的polyfill
if (!String.prototype.padStart) {
  String.prototype.padStart = function (targetLength, padString) {
    // 截断数字或将非数字转换为0
    targetLength = targetLength>>0;
    padString = String((typeof padString !== 'undefined' ? padString : ' '));
    if (this.length > targetLength || padString === '') {
      return String(this);
    }
    targetLength = targetLength-this.length;
    if (targetLength > padString.length) {
      // 添加到初始值以确保长度足够
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(this);
  };
}
// padEnd()方法的polyfill
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function (targetLength, padString) {
    // 转数值或者非数值转换成0
    targetLength = targetLength >> 0;
    padString = String((typeof padString !== 'undefined' ? padString : ' '));
    if (this.length > targetLength || padString === '') {
      return String(this);
    }
    targetLength = targetLength - this.length;
    if (targetLength > padString.length) {
      // 添加到初始值以确保长度足够
      padString += padString.repeat(targetLength / padString.length);
    }
    return String(this) + padString.slice(0, targetLength);
  };
}

window.vue = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  beforeCreate() {
    // utils.adaptive();

    // vueResource配置
    Vue.http.interceptors.push((request, next) => {
      // request.headers.set('token', token); //setting request.headers
      // console.log(request);
      this.$toast.loading();
      next((response) => {
        // console.log(response);
        if (response.status < 400) {
          this.$toast.close();
          /*if (response.data) {
            if (response.data.code !== 0) {
              // this.$dialog.alert("[" + response.data.code + "]" + response.data.msg);
              this.$toast.show(response.data.msg);
              console.log("[" + response.data.code + "]" + response.data.msg);
            }
          }*/
        } else {
          this.$toast.fail("请求失败：[" + response.status + "]");
          // this.$dialog.alert("请求失败：["+response.status + "]");
        }
        return response;
      })
    });
  },
  mounted() {
  }
});
