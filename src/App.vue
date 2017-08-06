<template>
  <div id="app">
    <header>欢迎您，123@manbi.wang <span>退出</span></header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
<style lang="less" src="./assets/css/common.less"></style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app>header {
  height: 30px;
  padding-right: 130px;
  line-height: 30px;
  background-color: #4c5861;
  text-align: right;
  color: #aeaeae;
}
</style>
