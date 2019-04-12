<template>
  <div id="home">
    <header :class="{solid:solid_header}">
      <div class="container">
        <div class="logo">
          公牛联盟
        </div>
        <nav>
          <ul>
            <li>
              <div class="link">GITHUB</div>
            </li>
            <li>
              <div class="link">演示体验</div>
            </li>
            <li>
              <div class="link">文档</div>
            </li>
            <li>
              <div class="link">软件订阅服务</div>
            </li>
            <li>
              <div class="link">一体机</div>
            </li>
            <li>
              <div class="link">技术咨询</div>
            </li>
            <li>
              <div class="link">联系我们</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!--轮播-->
    <div class="carousel">
      <div class="carousel-main">
        <div class="carousel-item" :class="{active: index == carousel_index}" v-for="(item,index) in carousels">
          <div class="img" :style="'background-image: url('+item+');'"></div>
        </div>
      </div>
      <div class="carousel-arrow">
        <div class="carousel-arrow-left" @click="carouselChange(-1)">

        </div>
        <div class="carousel-arrow-right" @click="carouselChange(1)">

        </div>
      </div>
      <div class="carousel-nav">
        <div class="carousel-nav-item" @click="carousel_index = index" :class="{active: index == carousel_index}"
             v-for="(item,index) in carousels">

        </div>
      </div>
    </div>
    <section class="properties">
      <div class="row container">
        <div class="col col-8">
          <h2>多云环境下更好用的堡垒机</h2>
          <p>1. 分布式架构设计无限扩展，轻松对接多云资产；</p>
          <p>2. 支持使用云存储（AWS S3, ES等）存储录像、命令；</p>
        </div>
        <div class="col col-8">
          <h2>多云环境下更好用的堡垒机</h2>
          <p>1. 分布式架构设计无限扩展，轻松对接多云资产；</p>
          <p>2. 支持使用云存储（AWS S3, ES等）存储录像、命令；</p>
        </div>
        <div class="col col-8">
          <h2>多云环境下更好用的堡垒机</h2>
          <p>1. 分布式架构设计无限扩展，轻松对接多云资产；</p>
          <p>2. 支持使用云存储（AWS S3, ES等）存储录像、命令；</p>
        </div>
      </div>
    </section>
    <section class="speciality">
      <div class="container">
        <div class="title">
          <span>让你体验不一样的跳板机</span>
          <p>With automated operations blood, let you experience the different feelling.</p>
        </div>
        <div class="speciality-content">
          <div class="row">
            <div class="col col-6">
              <div class="speciality-item">
                <span class="iconfont">&#xe7b4;</span>
                <div class="top">用户/用户组</div>
                <p>用户是授权和登录的主体，用户组方便组织授权</p>
              </div>
              <div class="speciality-item">
                <span class="iconfont">&#xe7b4;</span>
                <div class="top">用户/用户组</div>
                <p>用户是授权和登录的主体，用户组方便组织授权</p>
              </div>
              <div class="speciality-item">
                <span class="iconfont">&#xe7b4;</span>
                <div class="top">用户/用户组</div>
                <p>用户是授权和登录的主体，用户组方便组织授权</p>
              </div>
            </div>
            <div class="col col-12">
              中间
            </div>
            <div class="col col-6">
              <div class="speciality-item">
                <span class="iconfont">&#xe7b4;</span>
                <div class="top">用户/用户组</div>
                <p>用户是授权和登录的主体，用户组方便组织授权</p>
              </div>
              <div class="speciality-item">
                <span class="iconfont">&#xe7b4;</span>
                <div class="top">用户/用户组</div>
                <p>用户是授权和登录的主体，用户组方便组织授权</p>
              </div>
              <div class="speciality-item">
                <span class="iconfont">&#xe7b4;</span>
                <div class="top">用户/用户组</div>
                <p>用户是授权和登录的主体，用户组方便组织授权</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partner">
      <div class="container">
        <div class="title">
          <span>他们都在用</span>
          <p>累计安装量超过25000次.</p>
        </div>
        <div class="partner-content">
          <div class="row">
            <div class="col col-6" v-for="item in 4">
              <div class="partner-item">
                <div class="mask">
                  <span>
                    LENOVO
                  </span>
                  <p>
                    在信息产业内多元化发展的大型企业集团，和富有创新性的国际化的科技公司。
                  </p>
                </div>
                <img src="http://jumpserver.org/img/c15.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="function">
      <div class="container">
        <div class="title">
          <span>功能描述</span>
        </div>
        <div class="function-content">
          <div class="row">
            <div class="col col-12" v-for="item in 4">
              <div class="function-title">
                用户管理
              </div>
              <div class="function-text">
                用户管理模块，负责添加修改删除用户，把用户划分不同的用户组，方便将来授权主机.
              </div>
              <span class="iconfont">&#xe7b4;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="demo">
      <div class="container">
        <div class="title">
          <span>演示体验</span>
        </div>
        <div class="video-mod">
          <video style="max-width: 100%" id="intro-video" class="" controlslist="nodownload" preload="" controls=""
                 src="https://fit2cloud2-offline-installer.oss-cn-beijing.aliyuncs.com/tools/Jumpserver%20%E4%BB%8B%E7%BB%8Dv1.4.mp4"></video>
        </div>
        <div class="btn-mod">
          <div class="btn">在线体验</div>
        </div>
      </div>
    </section>
    <section class="team">
      <div class="container">
        <div class="title">
          <span>团队成员</span>
          <p>感谢团队成员付出，才有了Bullteam.</p>
        </div>
        <div class="row">
          <div class="col col-8" v-for="item in 6">
            <img src="http://jumpserver.org/img/wuhanxiaobai.jpeg" alt="">
            <div class="name">
              <span>原名</span>
              (昵称)
            </div>
            <p>Jumpserver项目发起者，资深运维工程师，毕业于著名的新东方烹饪学校，精通八大菜系.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="history">
      <div class="container">
        <div class="title">
          <span>一路走来的我们</span>
          <p>我们不断在改进，同时也在不断发现bug!</p>
        </div>
        <div class="flow">
          <div class="flow-item" v-for="item in 4">
            <div class="flow-icon">
              <span class="iconfont">&#xe7b4;</span>
            </div>
            <div class="flow-content">
              <div>新的征程</div>
              <p>此时此刻只有老广一个人在凌晨一点钟的北京的某个角落默默地撸着代码，进行第一版本jumpserver的构建！</p>
            </div>
            <div class="flow-date">
              v1.0.0
              <p>2019-01-01</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="postscript">
    </section>
    <footer>
      <div class="container">
        <div>
          © 2018-2019 XXXX有限公司, All Rights Reserved. 粤ICP备XXXX号
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import utils from 'utils'
  import http from 'http'

  export default {
    data() {
      return {
        scroll_top: document.querySelector('#app').scrollTop,
        carousel_index: 0,
        carousels: [
          'http://jumpserver.org/img/header_one.jpg',
          'http://jumpserver.org/img/header_two.jpg',
          'http://jumpserver.org/img/header_three.jpg',
          'http://jumpserver.org/img/header_four.jpg',
        ],
      }
    },
    beforeCreate() {
    },
    mounted() {
      this.init();
    },
    beforeDestroy() {
    },
    methods: {
      init() {
        window.addEventListener('scroll', (e) => {
          this.scroll_top = document.querySelector('#app').scrollTop;
        }, true);
        setInterval(()=>{
          this.carouselChange(1);
        },5000);
      },
      carouselChange(step){
        this.carousel_index = (this.carousel_index+step>(this.carousels.length-1)?0:this.carousel_index+step<0?this.carousels.length-1:this.carousel_index+step);
      }
    },
    computed: {
      solid_header() {
        return this.scroll_top > 200;
      }
    },
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
      position: fixed;
      top: 0;
      width: 100%;
      height: 66px;
      z-index: 100;
      transition: all 0.4s;
      nav li {
        transition: all 0.4s;
      }
      &.solid {
        background: #ffffff;
        box-shadow: 0 1px 1px #ddd;
        padding: 5px 0;
        .logo {
          border-radius: 5px;
        }
        nav li {
          color: #676a6c;
        }
      }
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
        line-height: 66px;
      }
      nav {
        width: 100%;
        text-align: right;
        height: 66px;
        li {
          display: inline-block;
          font-weight: bold;
          color: #ffffff;
          font-size: 14px;
          .link {
            padding: 20px 10px;
          }
        }
      }
    }
    .title {
      text-align: center;
      padding-bottom: 30px;
      &::before {
        content: "";
        display: block;
        height: 2px;
        background: $main_color;
        width: 50px;
        margin: 0 auto;
      }
      span {
        color: #676a6c;
        font-size: 30px;
      }
      p {
        color: #aeaeae;
        font-size: 13px;
      }
    }
    section {
      padding: 50px 0;
    }
    .carousel {
      position: relative;
      &-main {
        height: 444px;
      }
      &-item {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        width: 100%;
        height: 444px;
        transition: opacity 0.3s;
        .img {
          height: 100%;
          background-position: center;
          background-size: cover;
        }
        &.active {
          opacity: 1;
        }
      }
      &-arrow {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        height: 49.49px;
        width: 100%;
        margin: auto 0;
        &-left,&-right {
          position: absolute;
          border-top: 10px solid #ffffff;
          border-left: 10px solid #ffffff;
          border-right: 10px solid transparent;
          border-bottom: 10px solid transparent;
          width: 15px;
          height: 15px;
          opacity: 0.5;
          cursor: pointer;
          transition: opacity 0.3s;
          &:hover{
            opacity: 1;
          }
        }
        &-left{
          left: 40px;
          transform: rotate(-45deg);
        }
        &-right {
          right: 40px;
          transform: rotate(135deg);
        }
      }
      &-nav {
        text-align: center;
        position: absolute;
        bottom: 20px;
        width: 100%;
        &-item {
          border: 1px solid #ffffff;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          &.active {
            background: #ffffff;
          }
        }
        .carousel-nav-item + .carousel-nav-item {
          margin-left: 10px;
        }
      }
    }
    .properties {
      .row {
        padding: 50px 0 50px;
        h2 {
          font-size: 20px;
          color: #676a6c;
          margin-bottom: 10px;
        }
        p {
          font-size: 13px;
          color: #aeaeae;
          margin-bottom: 5px;
        }
      }
    }
    .speciality {
      padding-bottom: 100px;
      .title {
        span {
          color: $main_color;
          font-size: 14px;
          font-weight: 500;
        }
      }
      &-item {
        text-align: center;
        .iconfont {
          color: $main_color;
          font-size: 32px;
        }
        .top {
          font-size: 18px;
          margin: 5px 0 5px;
        }
        p {
          color: #aeaeae;
          font-size: 13px;
        }
      }
      .speciality-item + .speciality-item {
        margin-top: 30px;
      }
    }
    .partner {
      background: #f4f4f4;
      padding: 50px 0 0;
      &-content {
        margin-left: -15px;
        margin-right: -15px;
      }
      .row {
        .col {
          box-sizing: border-box;
          padding: 0 15px;
        }
      }
      &-item {
        position: relative;
        background: #ffffff;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        /*width: 260px;*/
        height: 148px;
        margin-bottom: 30px;
        img {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: inline-block;
          margin: auto auto;
          max-width: 200px;
          max-height: 52px;
        }
        .mask {
          opacity: 0;
          transition: opacity 0.3s;
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 10;
          color: #ffffff;
          text-align: center;
          span {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 10px;
            margin-top: 20px;
            display: inline-block;
          }
          p {
            font-size: 12px;
            padding: 0 20px;
          }
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    .function {
      .row {
        width: 1000px;
        margin: 0 auto;
      }
      .col {
        margin-bottom: 30px;
      }
      &-title {
        font-size: 18px;
        margin-bottom: 15px;
      }
      &-text {
        display: inline-block;
        width: 400px;
        color: #aeaeae;
        font-size: 13px;
      }
      .iconfont {
        vertical-align: top;
        font-size: 50px;
        color: $main_color;
      }
    }
    .demo {
      background: #f4f4f4;
      .video-mod {
        width: 800px;
        margin: 0 auto;
      }
      .btn-mod {
        margin-top: 15px;
        text-align: center;
      }
    }
    .team {
      .row {
        .col {
          text-align: center;
          img {
            height: 88px;
            width: 88px;
            border-radius: 50%;
          }
          .name {
            span {
              color: $main_color;
            }
          }
          p {
            color: #aeaeae;
            font-size: 13px;
            margin: 10px 15px;
          }
        }
      }
    }
    .history {
      background: #f4f4f4;
      .flow {
        color: #676a6c;
        &-item {
          position: relative;
          margin-bottom: 50px;
          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 5px;
            background: #e7eaec;
            height: 100%;
            top: 50px;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 0;
          }
          &:last-of-type::before {
            display: none;
          }
          &::after {
            content: "";
            display: table;
            clear: both;
          }
        }
        &-icon {
          position: absolute;
          display: inline-block;
          width: 50px;
          height: 50px;
          color: #fff;
          border-radius: 50%;
          background: $main_color;
          text-align: center;
          left: 0;
          right: 0;
          margin: 0 auto;
          span.iconfont {
            line-height: 50px;
            font-size: 25px;
          }
          z-index: 1;
        }
        &-content {
          position: relative;
          background: #fff;
          width: 45%;
          display: inline-block;
          top: 0;
          vertical-align: top;
          float: left;
          box-sizing: border-box;
          padding: 20px;
          border-radius: 5px;
          div {
            margin-bottom: 10px;
          }
          p {
            font-size: 13px;
            color: #aeaeae;
          }
          &::after {
            position: absolute;
            content: '';
            display: inline-block;
            border-left: 10px solid #fff;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            top: 10px;
            right: -10px;
          }
        }
        &-date {
          position: relative;
          width: 45%;
          display: inline-block;
          vertical-align: top;
          left: 10%;
          float: left;
          font-size: 14px;
          p {
            color: $main_color;
          }
        }

        &-item:nth-child(even) {
          .flow-content {
            left: 55%;
            &::after {
              border-right: 10px solid #fff;
              border-left: 0;
              top: 10px;
              left: -10px;
              right: auto;
            }
          }
          .flow-date {
            position: relative;
            left: -45%;
            text-align: right;
          }
        }
      }
    }
    .postscript {
      background-color: $main_color;
      background-image: url('http://jumpserver.org/img/avatar_all.png');
      box-sizing: border-box;
      height: 268px;
    }
    footer {
      height: 400px;
      background: #f4f4f4;
      text-align: center;
      .container {
        height: 100%;
        background-image: url('/static/img/bg_map.png');
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
</style>
