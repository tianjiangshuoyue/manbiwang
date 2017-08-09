<template>
  <div id="app">
    <header>欢迎您，<span>123@manbi.wang </span><span>退出</span>
      <div>满币网
        <router-link to="/">首页</router-link>
        <router-link to="/">用户中心</router-link>
      </div>
    </header>
    <router-view></router-view>
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
#app>header {
  height: 30px;
  margin-bottom: 80px;
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
</style>
