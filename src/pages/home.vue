<template>
  <div id="home">
    <header>
      <div class="container">
        <div class="logo">
          LOGO
        </div>
        <nav>
          <ul>
            <li>
              <div class="link">导航</div>
            </li>
            <li>
              <div class="link">导航</div>
            </li>
            <li>
              <div class="link">导航</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!--轮播-->
    <div class="carousel">
      <div class="carousel-item">
        <div class="img" style="background-image: url('http://jumpserver.org/img/header_one.jpg');"></div>
      </div>
    </div>
    <main>
      <div class="container">
        内容
      </div>
    </main>
    <footer>
      <div class="container">
        页脚
      </div>
    </footer>
  </div>
</template>
<script>
  import utils from 'utils'
  import http from 'http'

  export default {
    data() {
      return {}
    },
    beforeCreate() {
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>

<style lang="scss">
  @import "~@/assets/css/utils";

  #home {
    .container {
      width: 1170px;
      margin: 0 auto;
      position: relative;
    }
    header {
      .logo {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        color: #ffffff;
        background: $main_color;
        text-align: center;
        height: 100%;
        border-radius: 0 0 5px 5px;
      }
      nav {
        width: 100%;
        text-align: right;
        height: 66px;
        li {
          display: inline-block;
          padding: 20px 10px;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }
    .carousel {
      margin-top: -66px;
      &-item {
        text-align: center;
        .img {
          height: 444px;
          background-position: center;
          background-size: cover;
        }
      }
    }
  }
</style>
