<template>
  <div id="home">
    <header :class="{solid:solid_header}">
      <div class="container">
        <div class="logo">
          <img src="/static/img/icons/favicon-32x32.png" alt="">
          <div>公牛开源联盟</div>
        </div>
        <nav>
          <ul class="nav">
            <li>
              <div class="link" @click="toLink('https://github.com/bullteam',true)">GITHUB</div>
            </li>
            <li>
              <div class="link" @click="toLink('http://doc.bullteam.cn/',true)">文档</div>
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
          <h2>多租户更好用的权限管理中心</h2>
          <p>1. 基于casbin作为核心存储和权限引擎</p>
          <p>2. 支持多租户多项目统一管理菜单和权限</p>
        </div>
        <div class="col col-8">
          <h2>颠覆传统的后台系统架构</h2>
          <p>1. 以beego框架为基础，使用jwt做认证，实现跨语言平台协作。</p>
          <p>2. 完全前后端分离</p>
        </div>
        <div class="col col-8">
          <h2>完全免费开源，追求极致用户体验</h2>
          <p>1. 以公牛开源组织以非营利性为目的对外开源，以MIT许可协议开源。</p>
          <p>2. 号召所有开发者一起维护，打造企业级后台开发平台Pass生态，减少重复建设。</p>
        </div>
      </div>
    </section>
    <section class="speciality" :class="{show:is_show_speciality}">
      <div class="container">
        <div class="title">
          <span>让你享受不一样的后台开发体验</span>
          <p>Enjoy a different background development experience </p>
        </div>
        <div class="speciality-content">
          <div class="row">
            <div class="col col-6">
              <div class="speciality-item">
                <span class="iconfont">&#xe645;</span>
                <div class="top">用户/组织架构</div>
                <p>用户是企业员工，授权登陆的主题，组织架构同步钉钉等OA组织架构</p>
              </div>
              <div class="speciality-item">
                <span class="iconfont">&#xe604;</span>
                <div class="top">应用（项目管理）</div>
                <p>应用实现权限中心多租户的单位</p>
              </div>
              <div class="speciality-item">
                <span class="iconfont">&#xe62a;</span>
                <div class="top">菜单管理</div>
                <p>菜单按照应用分类别集中管理，实现菜单，路由，授权规则统一管理</p>
              </div>
            </div>
            <div class="col col-12">
              <img src="/static/img/zeus_index.jpg" alt="">
            </div>
            <div class="col col-6">
              <div class="speciality-item">
                <span class="iconfont">&#xe611;</span>
                <div class="top">数据管理</div>
                <p>实现数据规则统一设置</p>
              </div>
              <div class="speciality-item">
                <span class="iconfont">&#xe64d;</span>
                <div class="top">角色管理</div>
                <p>按应用对各个系统进行统一角色管理，自由配置用户多角色授权</p>
              </div>
              <div class="speciality-item">
                <span class="iconfont">&#xe69d;</span>
                <div class="top">日志管理</div>
                <p>统一登陆、操作、异常登陆日志</p>
              </div>
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
                 src="/static/video/20190508_113116.mp4"></video>
        </div>
        <div class="btn-mod">
          <div class="btn" @click="toLink('http://admin.bullteam.cn',true)">在线体验</div>
        </div>
      </div>
    </section>
    <section class="team">
      <div class="container">
        <div class="title">
          <span>团队成员</span>
          <p>有你们才有Bullteam</p>
        </div>
        <div class="row">
          <div class="col col-8" v-for="item in team">
            <img :src="item.avatar" alt="">
            <div class="name">
              <span>{{item.name}}</span>
              <template v-if="item.nickname">
                ({{item.nickname}})
              </template>
            </div>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="history">
      <div class="container">
        <div class="title">
          <span>我们的历史</span>
          <p>一路走来，征服bug</p>
        </div>
        <div class="flow">
          <div class="flow-item" v-for="item in history">
            <div class="flow-icon">
              <span class="iconfont" v-html="item.icon"></span>
            </div>
            <div class="flow-content">
              <div>{{item.title}}</div>
              <p>{{item.text}}</p>
            </div>
            <div class="flow-date">
              {{item.version}}
              <p>{{item.date}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--<section class="postscript">
    </section>-->
    <footer>
      <div class="container">
        <div class="qrcode">

        </div>
        <div class="record-info">
          © 2018-2019 bullteam  公牛开源联盟, All Rights Reserved. 粤ICP备14078736号-1
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
          '/static/img/banner_01.jpg',
          '/static/img/banner_02.jpg',
        ],
        team: [
          {
            name: '黄福祥',
            nickname: '梧桐',
            text: '公牛开源联盟发起人、Zeus 项目发起人、资深架构师，历经19楼、广州菲音、唯品会、汇量科技等知名企业',
            avatar: '/static/img/avatar_hfx.jpg'
          },
          {
            name: '符亮',
            nickname: '',
            text: '公牛开源联盟资深开发工程师、Zeus项目C位coder，超强代码输出。',
            avatar: '/static/img/avatar_fl.jpg'
          },
          {
            name: '董南香',
            nickname: '董小姐',
            text: '公牛开源联盟首席产品经理，专注B端后台产品策划。',
            avatar: '/static/img/avatar_dxj.jpg'
          },
          {
            name: '刘德龙',
            nickname: '南离燊',
            text: '专职厕所清扫人员，擅长各种疏通管道。善于干翻整个集群，搞垮架构，以及经典的删库跑路。',
            avatar: '/static/img/avatar_ldl.jpg'
          },
          {
            name: '郑丛广',
            nickname: 'Hyman',
            text: 'Zeus 后端开发主力，擅长各种加班熬夜007，敲代码一把梭',
            avatar: '/static/img/avatar_zcg.jpg'
          },
          {
            name: '阳九零',
            nickname: '90',
            text: '切图佬一个，将设计稿转换成HTML页面，H5没什么擅长的，你敢设计我就敢切，包括切产品经理',
            avatar: '/static/img/avatar_yjl.jpg'
          },
          {
            name: '何世华',
            nickname: 'Sever',
            text: '公牛开源联盟FrontEnd长方形固体物质空间移动工程师，资深打字员。',
            avatar: '/static/img/avatar_hsh.jpg'
          }
        ],
        history: [
          {
            icon: '&#xe7b4;',
            title: 'Zeus v1.1 提供数据权限管理',
            text: '提供数据权限管理，支持统一数据管理',
            version: 'v1.1',
            date: '2019-05-15',
          },
          {
            icon: '&#xe716;',
            title: 'Zeus V1.0 beta 版本发布',
            text: '为企业用户提供统一后台功能权限管理',
            version: 'v1.0 beta',
            date: '2019-03-04',
          }
        ],
        banner_interval: null,
        is_show_speciality: false,
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
        this.banner_interval = setInterval(() => {
          this.carouselChange(1);
        }, 5000);
      },
      carouselChange(step) {
        this.carousel_index = (this.carousel_index + step > (this.carousels.length - 1) ? 0 : this.carousel_index + step < 0 ? this.carousels.length - 1 : this.carousel_index + step);
        clearInterval(this.banner_interval);
        this.banner_interval = setInterval(() => {
          this.carouselChange(1);
        }, 5000);
      },
      toLink(link, isOpen) {
        if (isOpen) {
          window.open(link);
        } else {
          location.href = "http://admin.bullteam.cn";
        }

      }
    },
    computed: {
      solid_header() {
        return this.scroll_top > 200;
      }
    },
    watch: {
      scroll_top(val) {
        (val > 100) && (this.is_show_speciality = true);
      }
    }
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
        box-sizing: border-box;
        padding: 16px 0;
        img {
          vertical-align: middle;
          height: 32px;
          display: inline-block;
        }
        div {
          vertical-align: middle;
          height: 32px;
          line-height: 32px;
          display: inline-block;
        }
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
            padding: 15px 10px 20px;
            border-top: 5px solid transparent;
            &:hover {
              border-top: 5px solid $main_color;
            }
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
        &-left, &-right {
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
          &:hover {
            opacity: 1;
          }
        }
        &-left {
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
      overflow: hidden;
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

      $transition_time: 1s;
      $transition_delay: 0.2s;
      .col-12 {
        padding: 20px;
        opacity: 0;
        transition: all $transition_time;
        transform: translate(0, 100%);
      }

      .col-6{
        .speciality-item {
          transition: all $transition_time;
        }
      }
      .col-6:nth-child(1) {
        .speciality-item {
          opacity: 0;
          transform: translate(-100%, 0);
        }
        .speciality-item:nth-child(2){
          transition: all $transition_time $transition_delay;
        }
        .speciality-item:nth-child(3){
          transition: all $transition_time $transition_delay*2;
        }
      }
      .col-6:nth-child(3) {
        .speciality-item {
          opacity: 0;
          transform: translate(100%, 0);
        }
        .speciality-item:nth-child(2){
          transition: all $transition_time $transition_delay;
        }
        .speciality-item:nth-child(3){
          transition: all $transition_time $transition_delay*2;
        }
      }

      &.show {
        .col-12{
          opacity: 1;
          transform: translate(0, 0);
        }
        .col-6{
          .speciality-item {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
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
          height: 200px;
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
      background-image: url('/static/img/avatars.png');
      box-sizing: border-box;
      height: 268px;
    }
    footer {
      height: 400px;
      background: #ffffff;
      text-align: center;
      .container {
        position: relative;
        height: 100%;
        background-image: url('/static/img/bg_map.png');
        background-position: center;
        background-repeat: no-repeat;
        .qrcode{
          height: 350px;
        }
        .record-info{
          color: #888;
          font-size: 16px;
        }
      }
    }
  }
</style>
