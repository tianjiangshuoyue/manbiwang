<template>
  <div id="app">
      <header>
          <div>
            <ul id="broadcast-list">
              <li class="up">
                BTCCNY: <em>￥7000.00<i></i></em>
              </li>
              <li class="down">
                LTCCNY: <em>￥27.00</em><i></i>
              </li>
              <li class="down">
                ETHCNY: <em>￥27.00</em><i></i>
              </li>
              <li class="down">
                ETHCNY: <em>￥26.00</em><i></i>
              </li>
            </ul>
          </div>
          欢迎您，<span>123@manbi.wang </span><span>退出</span></header>
      
    
      <div id="main-wrap">
        <header>
            <div id="logo"></div>
          <section>
            <router-link to="/">首页</router-link>
            <router-link to="/trade">行情交易</router-link>
            <router-link id="usercenter-forward" to="/userCenter/home">用户中心</router-link>
            </section>
        </header>
        
        <router-view></router-view>
      </div>
    <footer>
      <span id="contact-us">联系我们：  info@xatom.io</span>
      <span id="copyright">X-Atom Chain版权所有</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
<style lang="less" src="./assets/css/common.less"></style>

<style lang="less">
#app {
  font-family: MicrosoftYaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  >header {
    ul {
      position: absolute;
      left: 0;
      font-size: 12px;
      li {
        display: inline-block;
        margin-right: 40px;
      }
    }
    em {
      color: #15893b;
      font-style: normal;
    }
  }
}
#logo {
  position: absolute;
  left: 0;
  letter-spacing: 13.1px;
  width: 110px;
  height: 40px;
  margin: 10px 0;
  background: url(/static/img/logo.png) no-repeat;
  background-size: contain;
}
#main-wrap {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  >header {
    position: relative;
    height: 60px;
    margin-bottom: 20px;
    line-height: 60px;
    text-align: right;
    color: #414141;
    box-shadow: 0 2px 4px 0 #e7ecf0;
    >section {
      
      font-weight: bold;
      >a {
        display: inline-block;
        margin-right: 60px;
        color: #222;
      }
    }
  }
}
#broadcast-list {
    color: #fff;
  li {
    em {
      color: #15893b;
      vertical-align: middle;
    }
    .i {

    }
  }
  .down, .up {
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-size: contain;
      background-repeat: no-repeat;
      vertical-align: text-bottom;
    }
    
  }
  .down {
    i {
      background-image: url(/static/img/arrow/fall.png);
    }
  }
  .up {
    em {
      color: #fa5757;
    }
    i {
      background-image: url(/static/img/arrow/rise.png);
    }
  }
}
#app {
  >header {
    height: 30px;
    padding-right: 130px;
    line-height: 30px;
    background-color: #4c5861;
    text-align: right;
    font-size: 12px;
    color: #aeaeae;
    >span {
      color: #fff;
    }
  }
  >footer {
    margin-top: 20px;
    background-color: #4c5861;
    line-height: 60px;
    #contact-us {
      padding-right: 49px;
      opacity: 0.9;
      color: #fff;
    }
    #copyright {
      opacity: 0.6;
      color: #fff;
    }
  }
}
#usercenter-forward {
  color: #4182ef;
}
</style>
