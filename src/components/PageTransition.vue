<template>
  <div class="pageTransition">
    <router-view class="child-view"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route'(to, from) {
        let isBack = this.$router.isBack;  //  监听路由变化时的状态为前进还是后退
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/common";

  .pageTransition {
    position: relative;
    height: 100%;
  }

  .child-view {
    box-shadow: pxToRem(-10) 0 pxToRem(15) rgba(0, 0, 0, 0.1);
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
    transform: scale(1, 1) translateX(0);
    z-index: 1;
    /*transition: all 3s cubic-bezier(.55,0,.1,1);*/
    transition: all 0.5s cubic-bezier(.55, 0, .1, 1);
    overflow: auto;
  }

  .slide-left-enter, .slide-right-leave-active {
    /*opacity: 0;*/
    transform : translateX(100%);
    z-index: 0;
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    z-index: 0;
    transform: scale(0.9, 0.9);
  }
</style>
