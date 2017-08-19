<template>
  <div>
    <main>
      <el-tabs @tab-click="tabClick" v-model="activeTab" id="rechargeTabWrap" type="border-card">
        <el-tab-pane name="bankcard" label="银行转账">
          <bankcard></bankcard>
        </el-tab-pane>
        <el-tab-pane name="alipay" label="支付宝转账">
          <alipay></alipay>
        </el-tab-pane>
        <el-tab-pane name="bite" label="比特币">
          <bite></bite>
        </el-tab-pane>
        <el-tab-pane name="more" label="更多..."></el-tab-pane>
      </el-tabs>
    </main>
    <sidebar></sidebar>
  </div>
</template>
<script>
  /**
   * @file: 充值
   */
  import sidebar from '../common/leftSideBar.vue';
  import bankcard from './children/bankcard.vue';
  import alipay from './children/alipay.vue';
  import bite from './children/bite.vue';
  export default {
    data () {
      return {
        activeTab: this.$router.currentRoute.query['payWay']
      }
    }, methods: {
      tabClick(tab){
        this.$router.push('/recharge?payWay='+tab.name);
      }

    }, components: {
      sidebar,
      bankcard,
      alipay,
      bite
    },
    mounted(){
    },
    beforeRouteUpdate(to, from, next){
      this.activeTab = to.query['payWay'];
      next();
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  aside {
    width: 180px;
  }

  main {
    position: absolute;
    left: 200px;
    right: 0;
  }

  header {
    height: 36px;
    background-color: #f7f7f7;
  }

  #assets-wrap {
    width: 100%;
  }

  h2 {
    width: 140px;
    height: 37px;
    line-height: 37px;
    background-color: #ffffff;
    box-shadow: inset -1px 0 0 0 #d9d9d9, inset 1px 0 0 0 #d9d9d9, inset 0 3px 0 0 #4182ef;
    color: #666;
    font-size: 14px;
  }


</style>
<style lang="less" rel="stylesheet/less">
  #rechargeTabWrap {
    font-family: "微软雅黑";
    border:none;
    margin-top: 20px;
    width: 980px;
    .el-tabs__header {
      background-color: #f7f7f7;
    }
    .el-tabs__item {
      width: 140px;
      height: 37px;
      border:none;
      font-size: 14px;
      line-height: 37px;
      text-align: center;
      color: #666666;
    }
    .el-tabs__item.is-active {
      box-shadow: inset -1px 0 0 0 #d9d9d9, inset 1px 0 0 0 #d9d9d9, inset 0 3px 0 0 #4182ef;
    }
  }
</style>
