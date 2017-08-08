<template>
  <div id="bankcardRecharge">
    <div id="bankcardProcess">
      <div>充值只需2步 :</div>
      <div class="active"><span>1</span>绑定银行卡</div>
      <div>→</div>
      <div :class="{active:isBinding}"><span>2</span>转账充值</div>
    </div>
    <div v-if="!isBinding" id="bindCardForm">
      <p>
        <label>汇款人:</label>
        <el-input v-model="name" placeholder="您的真实姓名"></el-input>
      </p>
      <div v-show="false" class="warning">请输入正确的</div>
      <p>
        <label>身份证:</label>
        <el-input :class="{warningBorder:idCardWrong}" v-model="idCardNum" placeholder="您的身份证号"></el-input>
      </p>
      <div v-show="true" class="warning">请输入正确的身份证号</div>
      <p>
        <label>开户行:</label>
        <el-select v-model="bankCode" placeholder="请选择开户行">
          <el-option
            v-for="item in bankCodeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </p>
      <div v-show="false" class="warning">请输入正确的</div>
      <p>
        <label>银行卡号:</label>
        <el-input v-model="bankcardNum" placeholder="您的银行卡号"></el-input>
      </p>
      <div v-show="false" class="warning">请输入正确的</div>
      <el-button type="primary">确定</el-button>
    </div>
    <div v-if="isBinding" id="useBankCard">
      <div class="row">
        <label>银行卡 :</label>
        <el-select id="chooseBankcard" v-model="chosenBankcard" :placeholder="chosenBankcard">
          <el-option
            v-for="item in cardOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="row">
        <label>收款人 :</label>
        <div>{{receiveMan}}</div>
      </div>
      <div class="row">
        <label>收款账号 :</label>
        <div>{{receiveAccount}}</div>
      </div>
      <div class="row">
        <label>收款行 :</label>
        <div>{{receiveBankCode}}</div>
      </div>
    </div>
    <div id="underLine"></div>
    <div id="declare">
      <h2>充值须知 :<span v-show="!showDeclare&&isBinding" @click="switchDeclare">展开 <span class="el-icon-arrow-up"></span></span><span
        v-show="showDeclare&&isBinding" @click="switchDeclare">收起 <span class="el-icon-arrow-down"></span></span></h2>
      <div v-show="showDeclare">
        1. 仅限您本人并且已绑定的银行卡汇款充值。<br>
        2. 绑卡成功后，请您根据提示的信息，将您要充值的金额汇入指定的收款账户。我们在收到款项后30分钟内会为您完成充值入账。<br>
        3. 请在每次充值前查看并仔细核对收款信息，我们可能不定期更换收款账户。<br>
        4. 不符合上述规定的充值，将于10个工作日内原路退回，如果您的资金超过10个工作日尚未退回，请联系客服 <a>010-1234-5678</a>。
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
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
        isBinding: false,
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
        bankCode: ''
      }
    },
    methods: {
      switchDeclare(){
        this.showDeclare = !this.showDeclare;
      }
    },
    components: {

    },
    mounted(){
      document.addEventListener('keydown',(e)=>{
        console.log(e.keyCode);
        if(e.keyCode==16){
          this.isBinding = !this.isBinding;
        }
      },false)
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
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
      .warningBorder {
        input {
          border-color: #ff4033;
        }
      }
      text-align: left;
      padding-top: 40px;
      p {
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
      div {
        font-size: 12px;
        color: #ff4033;
        text-align: left;
      }
      .warning {
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
    #useBankCard {
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
        div {
          float: left;
          line-height: 34px;
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
    }

  }


</style>
