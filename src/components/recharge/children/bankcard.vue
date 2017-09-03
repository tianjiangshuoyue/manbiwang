<template>
  <div id="bankcardRecharge">
    <div id="bankcardProcess">
      <div>充值只需2步 :</div>
      <div class="active"><span>1</span>绑定银行卡</div>
      <div>→</div>
      <div :class="{active:isBinding}"><span>2</span>转账充值</div>
    </div>
    <div v-if="!isBinding" id="bindCardForm">
      <div class="row">
        <label>汇款人:</label>
        <el-input v-if="!isFilledInfo" v-model="name" placeholder="您的真实姓名"></el-input>
        <div v-if="isFilledInfo" class="text-only">{{name}}</div>
      </div>
      <div v-if="!isFilledInfo" v-show="false" class="warning">请输入正确的</div>
      <div v-if="!isFilledInfo" class="row">
        <label>身份证号:</label>
        <el-input :class="{warningBorder:idCardWrong}" v-model="idCardNum" placeholder="您的身份证号"></el-input>
      </div>
      <div v-if="!isFilledInfo" v-show="true" class="warning">请输入正确的身份证号</div>
      <div class="row">
        <label>开户行:</label>
        <el-select v-model="bankCode" placeholder="请选择开户行">
          <el-option
            v-for="item in bankCodeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div v-show="false" class="warning">请输入正确的</div>
      <div class="row">
        <label>银行卡号:</label>
        <el-input v-model="bankcardNum" placeholder="您的银行卡号"></el-input>
      </div>
      <div v-show="false" class="warning">请输入正确的</div>
      <el-button type="primary">确定</el-button>
    </div>
    <div v-if="isBinding" id="useBankCard">
      <div class="leftBox">
        <h2>使用绑定的银行卡</h2>
        <div class="row">
          <label style="padding-top:10px;">银行卡 :</label>
          <el-select id="chooseBankcard" v-model="chosenBankcard" :placeholder="chosenBankcard">
            <el-option
              v-for="item in cardOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="someTip">
          请选择银行并使用相应网银/手机银行进行转账充值
        </div>
      </div>
      <div class="leftBox rightBox">
        <h2>向下列账户转账</h2>
        <div class="row">
          <label>收款人 :</label>
          <div class="text-only">{{receiveMan}}</div>
          <button v-clipboard:copy="receiveMan"
                  v-clipboard:success="onCopy" class="copyText">复制
          </button>
        </div>
        <div class="row">
          <label>收款账号 :</label>
          <div class="text-only">{{receiveAccount}}</div>
          <button v-clipboard:copy="receiveAccount"
                  v-clipboard:success="onCopy" class="copyText">复制
          </button>
        </div>
        <div class="row">
          <label>收款行 :</label>
          <div class="text-only">{{receiveBankCode}}</div>
          <button v-clipboard:copy="receiveBankCode"
                  v-clipboard:success="onCopy" class="copyText">复制
          </button>
        </div>
      </div>

    </div>
    <div id="underLine"></div>
    <div id="declare">
      <h2>充值教程 :<span v-show="!showDeclare&&isBinding" @click="switchDeclare">展开 <span class="el-icon-arrow-up"></span></span><span
        v-show="showDeclare&&isBinding" @click="switchDeclare">收起 <span class="el-icon-arrow-down"></span></span></h2>
      <div v-show="showDeclare">
        1. 您可用已绑定的银行卡将充值金额转账到满币网的收款账户。转账后，如信息无误，您的资金将在半小时内入账。<br>
        2. 请在每次充值前查看并仔细核对收款信息，我们可能不定期更换收款账户。客服 <a>010-1234-5678</a><br>
        <h4>手机银行转账示意图</h4>
        <img src="">
        <h4>网银转账示意图</h4>
        <img src="">
      </div>
    </div>
    <div v-if="isBinding" id="rechargeLog">
      <h2>充值记录</h2>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="账单时间"
          width="135">
        </el-table-column>
        <el-table-column
          prop="payWay"
          label="类型"
          width="135">
        </el-table-column>
        <el-table-column
          prop="cashNum"
          label="金额/数量"
          width="135">
        </el-table-column>
        <el-table-column
          prop="detail"
          label="详情"
          width="135">
        </el-table-column>
        <el-table-column
          prop="tips"
          label="备注"
          width="135">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="135">
        </el-table-column>
        <el-table-column
          prop="option"
          label="操作">
          <template scope="scope">
            <span class="tBtn">撤销</span>
            <span class="tBtn">去认证</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="showRecordText">仅显示最新5条充值记录，如需查询全部充值记录，请去<a href="#/userCenter/rechargeWithdrawRecordList">充值/提现记录</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        //是否已经实名
        isFilledInfo: false,
        //绑定以后的属性
        chosenBankcard: '工商银行 尾号8776',
        receiveMan: '北京必满盆投资咨询有限公司',
        receiveAccount: '6212 2000 0010 300 5282',
        receiveBankCode: '工商银行海淀西区支行',
        cardOptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        //未绑定状态属性
        showDeclare: true,
        isBinding: true,
        name: '',
        idCardNum: '',
        bankcardNum: '',
        idCardWrong: true,
        bankCodeOptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        tableData: [{
          date: '2016-05-02',
          payWay: '王小虎',
          cashNum: '￥1000',
          detail: '上海市普陀区金沙江路',
          tips: '1518 弄',
          status: '等待汇出',
          option: ''
        }, {
          date: '2016-05-04',
          payWay: '王小虎',
          cashNum: ''
        }, {
          date: '2016-05-01',
          payWay: '王小虎',
          cashNum: ''
        }, {
          date: '2016-05-03',
          payWay: '王小虎',
          cashNum: ''
        }],
        bankCode: ''
      }
    },
    methods: {
      onCopy(){
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '复制成功!'),
          ]),
          type: 'success'
        });
      },
      switchDeclare(){
        this.showDeclare = !this.showDeclare;
      }
    },
    components: {},
    mounted(){
      document.addEventListener('keydown', (e)=> {
        console.log(e.keyCode);
        if (e.keyCode == 16) {
          this.isBinding = !this.isBinding;
        }
        if (e.keyCode == 191) {
          this.isFilledInfo = !this.isFilledInfo;
        }
      }, false)
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .leftBox {
    width: 440px;
    min-height: 177px;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), inset 0 4px 0 0 #4182ef;
    float: left;
    h2 {
      font-size: 12px;
      color: #666;
      height: 38px;
      line-height: 38px;
      width: 90%;
      margin: 0 auto;
      border-bottom: dashed 1px #d9d9d9;
    }
    .row {
      margin-top: 20px;
      height: 16px;
      line-height: 16px;
    }
    .copyText {
      float: right;
      margin-right: 20px;
      font-size: 14px;
      color: #1793e6;
      cursor: pointer;
      background: none;
      font-family: '微软雅黑';
      border: none;
      height: 16px;
      line-height: 16px;
      outline: none;
    }
    .someTip {
      font-family: '微软雅黑';
      font-size: 12px;
      text-align: left;
      color: #ff4033;
      float: left;
      margin-left: 75px;
      margin-top: 20px;
    }
  }

  .rightBox {
    margin-left: 50px;
  }

  #rechargeLog {
    width: 100%;
    float: left;
    h2 {
      height: 19px;
      font-size: 14px;
      color: #222;
      font-family: '微软雅黑';
      text-align: left;
      margin-bottom: 10px;
    }
    table {
      background: red;
      text-align: center;
      font-size: 12px;
      thead {
        height: 36px;
      }
      tr {
        height: 48px;
      }
      th {
        text-align: center;
      }
      td {
      }
      .tBtn {
        color: #1793e6;
        margin: 0 3px;
        cursor: pointer;
      }
    }
  }

  .showRecordText {
    width: 940px;
    height: 56px;
    line-height: 56px;
    background-color: #f5f9ff;
    border: solid 1px #d7e5f4;
    font-size: 12px;
    color: #666;
    margin-top: 10px;
    text-align: left;
    text-indent: 20px;
    a {

    }
  }
</style>
<style lang="less" rel="stylesheet/less" scoped>
  .el-select {
    width: auto;
  }

  #bankcardRecharge {
    padding: 5px;
    #bankcardProcess {
      width: 740px;
      border-bottom: solid 2px #e7ecf0;
      padding-bottom: 20px;
      overflow: hidden;
      div {
        float: left;
        font-size: 14px;
        margin: 0 8px;
        color: #ddd;
        &:nth-child(1) {
          color: #222;
          margin-right: 12px;
        }
        span {
          display: inline-block;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          line-height: 22px;
          /*background: #4182ef;*/
          background: #ddd;
          color: #fff;
          font-weight: bold;
          margin-right: 8px;
        }
        &.active {
          color: #4182ef;
          span {
            background: #4182ef;
          }
        }
      }
    }
    #bindCardForm {
      text-align: left;
      padding-top: 40px;
      .warningBorder {
        input {
          border-color: #ff4033;
        }
      }
      .row {
        height: 34px;
        margin-top: 20px;
        margin-bottom: 10px;
        input {
          float: left;
          font-size: 14px;
          padding-left: 15px;
          border-radius: 2px;
          font-family: '微软雅黑';
        }
        label, .el-input, .el-select {
          float: left;
          height: 34px;
          line-height: 34px;
          font-size: 14px;
        }
        label {
          width: 170px;
          text-align: right;
          margin-right: 20px;
        }
        .el-input {
          width: 280px;
        }
        .el-select {
          width: 280px;
        }
        .text-only {
          float: left;
          line-height: 34px;
          font-size: 14px;
        }
      }
      .warning {
        font-size: 12px;
        color: #ff4033;
        text-align: left;
        height: auto;
        margin: 0;
        text-indent: 190px;
      }
      button {
        width: 150px;
        height: 36px;
        border-radius: 4px;
        background-color: #4182ef;
        margin-left: 190px;
        font-family: '微软雅黑';
        font-size: 15px;
        margin-top: 20px;
        &:hover {
          opacity: 0.8;
        }
        &:active {
          opacity: 1;
        }
      }
    }
    #underLine {
      width: 940px;
      border: solid 1px #e7ecf0;
      margin-top: 40px;
      float: left;
    }
    #declare {
      width: 100%;
      float: left;
      padding-top: 10px;
      padding-bottom: 20px;
      text-align: left;
      h2 {
        height: 19px;
        font-size: 14px;
        color: #222;
        font-family: '微软雅黑';
        margin-bottom: 10px;
        span {
          float: right;
          color: #4182ef;
          cursor: pointer;
          font-size: 14px;
          font-family: '微软雅黑';
          span {
            float: none;
            font-size: 12px;
          }
        }
      }
      div {
        font-size: 12px;
        font-family: '微软雅黑';
        line-height: 20px;
      }
      h4 {
        font-size: 14px;
        margin-top: 20px;
        margin-bottom: 10px;
        color: #222222;
      }
      img {
        width: 500px;
        height: 300px;
      }
    }
    #useBankCard {
      padding-top: 40px;
      .row {
        label {
          width: 100px;
          margin-right: 20px;
          float: left;
          text-align: right;
          font-size: 14px;
          color: #222;
          font-family: '微软雅黑';
        }
        .text-only {
          font-family: '微软雅黑';
          float: left;
          font-size: 14px;
          color: #222;
        }
        #chooseBankcard {
          font-family: '微软雅黑';
          float: left;
          width: 280px;
          height: 34px;
          font-size: 14px;

        }
      }
      ::-webkit-input-placeholder {
        font-family: '微软雅黑';
        color: #222;
      }

    }

  }


</style>
