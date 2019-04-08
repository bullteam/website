import Vue from 'vue'
import Router from 'vue-router'
//组件
// import PageTransition from '@/components/PageTransition'

//页面
import home from '@/pages/home'

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};

Vue.use(Router);

export default new Router({
  // mode: 'history',
  transitionOnLoad: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    }
  ]
})
