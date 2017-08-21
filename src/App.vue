<template>
  <div id="app">
      <header>欢迎您，<span>123@manbi.wang </span><span>退出</span></header>
      
    
      <div id="main-wrap">
        <header>
          <h1>满币网</h1>
          <section>
            <router-link to="/">首页</router-link>
            <router-link id="usercenter-forward" to="/">用户中心</router-link>
            </section>
        </header>
        
        <router-view></router-view>
      </div>
    
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
}
#main-wrap {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  >header {
    position: relative;
    margin-bottom: 20px;
    height: 60px;
    line-height: 60px;
    text-align: right;
    color: #333;
    box-shadow: 0 2px 4px 0 #e7ecf0;
    >h1 {
      position: absolute;
      left: 0;
    }
    >section {
      font-weight: bold;
    }
  }
}
#app>header {
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
#usercenter-forward {
  color: #4182ef;
}
</style>
