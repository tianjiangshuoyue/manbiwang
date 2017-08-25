<template>
  <div class="hello">
    热烈庆祝满币网上线
    <p>注册就送1（最高）比特币</p>
    <button>注册</button>
    <p>满币网关于比特币和BCC(Bitcoin Cash)的处理方案公告
      <span>更多</span>
    </p>
    <div>
      <section>
        <h3>数字资产交易</h3>
        <div>
          <ul>
            <li>
              <span>最新价</span>
              <span>涨跌</span>
              <span>24小时量</span>
            </li>
             <li v-for="item in 4">
              <span>4000.00</span>
              <span>+10.00 / 10.00%</span>
              <span>20,000</span>
            </li>
            </ul>
        </div>
        <div></div>
      </section>
      <section>
         <h3>数字资产兑换</h3>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
