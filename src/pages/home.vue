<template>
  <div id="home">
    <header>
      <div class="container">
        <div class="logo">
          公牛联盟
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

      </div>
    </section>
    <section class="helper">
      <div class="container">
        <div class="title">
          <span>一路走来的我们</span>
          <p>我们不断在改进，同时也在不断发现bug!</p>
        </div>

      </div>
    </section>
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
    .properties {
      .row {
        padding: 100px 0 130px;
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
        .col{
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
    }
    footer{
      height: 400px;
      background: #f4f4f4;
      .container{
        height: 100%;
        background-image: url('/static/img/bg_map.png');
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
</style>
