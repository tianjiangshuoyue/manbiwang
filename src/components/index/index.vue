<template>
<div id="idnex">
  <section id="welcome">
    <h1>热烈庆祝满币网上线</h1>
    <p id="send">注册就送1（最高）比特币</p>
    <button>注册</button>
    <p id="advice"><i id="trumpet"></i>满币网关于比特币和BCC(Bitcoin Cash)的处理方案公告
      <span>更多</span>
    </p>
    </section>
   <assets-list></assets-list>
  </div>
</template>

<script>
import assetsList from './child/assets-list.vue';
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
      assetsList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#index {

}
#welcome {
  padding-top: 80px;
  
  background-color: #1770e6;
  color: #fff;
  button {
    width: 160px;
    height: 44px;
    margin: 40px auto;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #fbfbfb;
    color: #fff;
    font-size: 22px;
  }
}
h1 {
  padding-bottom: 21px;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 13.1px;
}
#send {
  font-size: 32px;
  line-height: 44px;
}
#advice {
  height: 50px;
  line-height: 50px;
  background-color: rgba(246, 249, 252, 0.1);
  font-size: 14px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#trumpet {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background: url(/static/img/icon/trumpet.png) no-repeat;
  background-size: contain;
  vertical-align: middle;
}
</style>
