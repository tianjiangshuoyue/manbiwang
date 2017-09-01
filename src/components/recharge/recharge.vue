<template>
  <div id="user-wrap">
    <main>
      <el-tabs @tab-click="tabClick" v-model="activeTab" id="rechargeTabWrap" type="border-card">
        <el-tab-pane name="bankcard" label="银行转账">
          <bankcard></bankcard>
        </el-tab-pane>
        <el-tab-pane name="alipay" label="支付宝转账">
          <alipay></alipay>
        </el-tab-pane>
        <el-tab-pane name="coin">
          <span slot="label">
            <el-dropdown>
              <span class="el-dropdown-link">
                数字货币 <i style="font-size: 12px;" class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="tabClick({name:'coin',type:'bite'})" data-name="bite">比特币</el-dropdown-item>
                <el-dropdown-item>莱特币</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <bite></bite>
        </el-tab-pane>
      </el-tabs>
    </main>
  </div>
</template>
<script>
  /**
   * @file: 充值
   */
  import bankcard from './children/bankcard.vue';
  import alipay from './children/alipay.vue';
  import bite from './children/bite.vue';
  let body = document.querySelector('body');
  export default {
    data() {
      return {
        activeTab: this.$router.currentRoute.query['payWay'],
        coinType:this.$router.currentRoute.query['coinType'],
      }
    }, methods: {
      tabClick(tab) {
        console.log(tab)
        this.$router.push('/recharge?payWay=' + tab.name);
      }

    }, components: {
      bankcard,
      alipay,
      bite
    },
    beforeCreate(){
      body.className = body.className + (body.className ? ' ' : '') + 'rechargeArea';
    },
    beforeDestroy(){
      body.className = body.className.replace(/\s?rechargeArea\s?/, '')
    },
    mounted() {
    },
    beforeRouteUpdate(to, from, next) {
      this.activeTab = to.query['payWay'];
      next();
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .el-select {
    width: auto;
  }

  aside {
    width: 180px;
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
  ::-webkit-scrollbar {display:none}
  .rechargeArea .el-dropdown-menu {
    width: 137px;
    transform: translate(34px, -4px);
    border-top: 0;
    li {
      padding-left: 20px;
      font-size: 14px;
      height: 36px;
      font-family: "微软雅黑";
      color: #333;
      &:hover {
        color: #4182ef;
      }
    }
  }

  #rechargeTabWrap {
    .el-tabs__item.is-disabled {
      cursor: pointer;
    }
    min-height: 660px;
    font-family: "微软雅黑";
    border: none;
    width: 980px;
    .el-tabs__header {
      background-color: #f7f7f7;
    }
    .el-tabs__item {
      width: 140px;
      height: 37px;
      border: none;
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
