<template>
  <div id="biteRecharge">
    <div id="bankcardProcess">
      <div>比特币充值地址 :</div>
    </div>
    <div id="biteCode">{{biteCode}}<span>历史地址</span><span>更换</span></div>
    <div class="erweima">
      <img src="../../../assets/img/erweima.png">
    </div>
    <div class="p1">请向该地址转入您需充值的比特币，比特币充值在1个区块确认后可入账。</div>
    <div class="p2">请勿向比特币地址充值任何其他数字资产，因您向比特币地址充值其他数字资产造成的损失，满币网概不负责。</div>
    <div class="underLine"></div>
    <div id="rechargeLog">
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
        biteCode:`2132131231231sadsad`,
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
  #biteRecharge {
    padding: 5px;
    #bankcardProcess {
      width: 740px;
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

    #biteCode{
      width: 940px;
      height: 59px;
      border-radius: 2px;
      background-color: #f6f7fc;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
      line-height: 60px;
      text-align: left;
      text-indent: 20px;
      span{
        float: right;
        width:auto;
        font-size: 14px;
        text-indent: 0;
        text-align: center;
        color: #1793e6;
        cursor: pointer;
        &:nth-child(1){
          margin-right: 20px;
          margin-left:20px;
        }
      }
      margin-bottom:20px;
    }

    .erweima{
      float: left;
      width:100px;
      height:100px;
      margin-right:20px;
      img{
        width:100%;
        height:100%;
      }
    }

    .p1{
      float: left;
      font-size: 12px;
      color: #666666;
      text-align: left;
      margin-top:30px;
      margin-bottom:10px;
    }

    .p2{
      float: left;
      font-size: 12px;
      color: #ff4033;
    }

    .underLine{
      width: 940px;
      height: 1px;
      background: #e7ecf0;
      float: left;
      margin-top:40px;
    }

    #rechargeLog {
      float: left;
      h2 {
        height: 19px;
        font-size: 14px;
        color: #222;
        font-family: '微软雅黑';
        text-align: left;
        margin-top: 20px;
        margin-bottom:10px;
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
