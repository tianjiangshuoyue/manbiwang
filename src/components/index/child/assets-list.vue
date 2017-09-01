<template>
 <div id="assets-wrap">
    <section id="title-list">
      <h3>数字资产交易</h3>
      <h3 class="active">数字资产兑换</h3>
    </section>
      <section>
        <div>
          <ul>
            <li id="title">
              <span>交易对</span>
              <span>最新价</span>
              <span>涨跌</span>
              <span>24小时量</span>
              <span>5日趋势</span>
              <span></span>
            </li>
            <li v-for="item in 4">
              <span>4000.00</span>
              <span>+10.00 / 10.00%</span>
              <span>20,000</span>
              <span>20,000</span>
              <span>去交易</span>
            </li>
            </ul>
        </div>
        <div></div>
      </section>
      <section>
      </section>
    </div>
</template>
<script>
/**
 * @file 首页的数字资产交易列表，数字资产兑换列表
 */
</script>
<style scoped lang="less">
#assets-wrap {
  margin-top: 60px;
  h3 {
    display: inline-block;
    width: 49%;
    padding-bottom: 13px;
  }
}
#title-list {
  margin-bottom: 40px;
  border-bottom: solid 2px #e7ecf0;
}
#title {
  font-size: 15px;
  color: #222;
}
#section-list {
  h3 {
    display: inline-block;
  }
}
h3 {
  font-size: 17px;
  line-height: 1.18;
  color: #222;
  &.active {
    border-bottom: 4px solid #4182ef;
    color: #4182ef;
  }
}
ul {
  li {

  }
}
</style>