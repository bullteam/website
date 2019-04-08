<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import utils from 'utils';
  import './assets/css/common.scss';

  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    mounted() {
    },
    methods: {},
    watch: {
      /*'$route'(to, from) {
//        console.log('路由监听',to,from);
        // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
        let isBack = this.$router.isBack;
        if (isBack) {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
        // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
        this.$router.isBack = false;
      }*/
    }
  }
</script>

<style lang="scss">
</style>
