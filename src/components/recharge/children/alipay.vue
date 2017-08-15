<template>
  <div id="aliPayRecharge">
    <div id="bankcardProcess">
      <div>充值只需2步 :</div>
      <div class="active"><span>1</span>绑定支付宝</div>
      <div>→</div>
      <div :class="{active:!isFirst}"><span>2</span>转账充值</div>
    </div>
    <div v-if="isFirst" id="bindCardForm">
      <div class="row">
        <label>汇款人:</label>
        <el-input v-if="!isFilledInfo" v-model="name" placeholder="您的真实姓名"></el-input>
        <div v-if="isFilledInfo" class="text-only">{{name}}</div>
      </div>
      <div v-if="!isFilledInfo" v-show="false" class="warning">请输入正确的</div>
      <div v-if="!isFilledInfo" class="row">
        <label>身份证:</label>
        <el-input :class="{warningBorder:idCardWrong}" v-model="idCardNum" placeholder="您的身份证号"></el-input>
      </div>
      <div v-if="!isFilledInfo" v-show="true" class="warning">请输入正确的身份证号</div>
      <div class="row">
        <label>支付宝号:</label>
        <el-input v-model="alipayAccount" placeholder="优先填写邮箱账号"></el-input>
      </div>
      <div v-show="false" class="warning">请输入正确的</div>
      <div class="row">
        <label>充值金额:</label>
        <el-input v-model="rechargeNum" placeholder="100-5000元"></el-input>
      </div>
      <div v-show="false" class="warning">请输入正确的</div>
      <el-button type="primary">生成订单</el-button>
    </div>
    <div v-if="!isFirst" id="useAlipay">
      <div class="row">
        <label>收款人 :</label>
        <div class="text-only">{{receiveMan}}</div>
      </div>
      <div class="row">
        <label>收款账号 :</label>
        <div class="text-only">{{receiveAccount}}</div>
      </div>
      <div class="row">
        <label>汇款账号 :</label>
        <div class="text-only">{{alipayAccount}}</div>
      </div>
      <div class="erweima">
        <img src="../../../assets/img/erweima.png">
      </div>
      <div class="row">
        <label>汇款金额 :</label>
        <div class="text-only cashNum">￥{{payNum|currency}}</div>
      </div>
    </div>
    <div id="underLine"></div>
    <div id="declare">
      <h2>充值须知 :</h2>
      <div v-show="showDeclare">
        1. 仅限您本人的支付宝汇款充值。<br>
        2. 生成订单后，请您根据提示的信息，将您要充值的金额汇入指定的支付宝账户。我们在收到款项后30分钟内会为您完成充值入账。<br>
        3. 请务必按照生成订单的充值金额充值，金额不匹配将造成无法入账。<br>
        4. 不符合上述规定的充值，将于10个工作日内原路退回，如果您的资金超过10个工作日尚未退回，请联系客服010-1234-5678。
      </div>
    </div>
    <div v-if="!isFirst" id="rechargeLog">
      <h2>充值记录</h2>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="入账时间"
          width="135">
        </el-table-column>
        <el-table-column
          prop="payWay"
          label="充值方式"
          width="135">
        </el-table-column>
        <el-table-column
          prop="cashNum"
          label="金额"
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
            <span class="tBtn">认证</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="showRecordText">仅显示最新10条充值记录，如需查询全部充值记录，请去<a href="">充值/提现记录</a></div>
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
        receiveMan: '北京必满盆投资咨询有限公司',
        receiveAccount: 'manbiwang@alipay.com',
        payNum: 0,
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
        //首次支付宝充值
        showDeclare: true,
        isFirst: true,
        name: '',
        idCardNum: '',
        idCardWrong: true,
        alipayAccount: '',
        rechargeNum: '',
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
        bankCode: ''
      }
    },
    methods: {
      switchDeclare(){
        this.showDeclare = !this.showDeclare;
      }
    },
    components: {},
    mounted(){
      document.addEventListener('keydown', (e)=> {
        console.log(e.keyCode);
        if (e.keyCode == 16) {
          this.isFirst = !this.isFirst;
        }
      }, false)
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  #aliPayRecharge {
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
      .warningBorder {
        input {
          border-color: #ff4033;
        }
      }
      text-align: left;
      padding-top: 40px;
      .row {
        height: 34px;
        margin-top: 20px;
        margin-bottom: 10px;
        input {
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
      }
      .warning {
        font-size: 12px;
        color: #ff4033;
        text-align: left;
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
    }
    #declare {
      padding-top: 10px;
      padding-bottom: 20px;
      text-align: left;
      h2 {
        height: 19px;
        font-size: 14px;
        color: #222;
        font-family: '微软雅黑';
        span {
          float: right;
          color: #4182ef;
          cursor: pointer;
          font-size: 14px;
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
    }
    #useAlipay {
      padding-top: 40px;
      .row {
        margin-top: 20px;
        height: 34px;
        label {
          width: 170px;
          margin-right: 20px;
          float: left;
          text-align: right;
          font-size: 14px;
          line-height: 34px;
        }
        .text-only {
          float: left;
          line-height: 34px;
          font-size: 14px;
        }
        .cashNum {
          color: #ff5722;
          font-size: 14px;
        }

        #chooseBankcard {
          float: left;
          width: 280px;
          height: 34px;
          font-size: 14px;

        }
      }
      ::-webkit-input-placeholder {
        color: #222;
      }
      .erweima {
        margin-left: 190px;
        text-align: left;
        margin-top: 20px;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }

    #rechargeLog {

      h2 {
        height: 19px;
        font-size: 14px;
        color: #222;
        font-family: '微软雅黑';
        text-align: left;
        margin-top: 0;
      }
      table {
        text-align: center;
        font-size: 12px;
        thead{
          height:36px;
        }
        tr{
          height:48px;
        }
        th {
          text-align: center;
        }
        td{
        }
        .tBtn{
          color:#1793e6;
          margin:0 3px;
          cursor:pointer;
        }
      }
    }

    .showRecordText{
      width: 940px;
      height: 56px;
      line-height: 56px;
      background-color: #f5f9ff;
      border: solid 1px #d7e5f4;
      font-size: 12px;
      color:#666;
      margin-top:10px;
      text-align: left;
      text-indent: 20px;
      a{

      }
    }

  }


</style>
