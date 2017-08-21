<template>
<div id="add-withdraw">
  <header class="nav-title">发起提现</header>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="提现类型:">
      <el-select v-model="form.type" placeholder="请选择提现类型">
        <el-option label="人民币" value="1"></el-option>
        <el-option label="比特币" value="2"></el-option>
        <el-option label="莱特币" value="3"></el-option>

      </el-select>
    </el-form-item>
    <el-form-item  v-if="type == 1" label="提现金额:">
      <el-input v-model="form.name" placeholder="可用￥1,000,0000.00"></el-input>
    </el-form-item>
   <el-form-item v-if="type == 1" label="银行卡:">
      <el-select v-model="form.region" placeholder="请选择银行卡">
        <el-option label="人民币" value="shanghai"></el-option>
        <el-option label="比特币" value="beijing"></el-option>
        <el-option label="莱特币" value="beijing"></el-option>

      </el-select>
    </el-form-item>
    <el-form-item  v-if="type == 2 || type == 3" label="提现数量:">
      <el-input v-model="form.name" placeholder="可用￥1,000,0000.00"></el-input>
    </el-form-item>
    <el-form-item  v-if="type == 2 || type == 3" label="区块费用:">
      <el-input v-model="form.name" placeholder="可用￥1,000,0000.00"></el-input>
    </el-form-item>
    <el-form-item  v-if="type == 2 || type == 3" label="提现地址:">
      <el-input v-model="form.name" placeholder="仅支持比特币地址"></el-input>
    </el-form-item>
    <el-form-item label="资金密码:">
      <el-input v-model="form.name" placeholder="请输入"></el-input>
    </el-form-item>
  <el-form-item v-if="type != 1" label="验证码:" class="send-code">
    <p>
        <input placeholder="短信验证" v-validate="'required|sendCode'" :class="{'input': true,
                        'is-danger': errors.has('sendCode') }" name="sendCode" type="phone" />
        <send-code slot="right" :initStr="'获取验证码'" :runStr="'{%s}秒后重试'" v-model="start1" @click.native="sendCode1" type="warning"></send-code>
        <span v-show="errors.has('sendCode')" class="help is-danger">{{ errors.first('sendCode') }}</span>
    </p>

  </el-form-item>
    <el-form-item>
      <el-button type="primary">提交</el-button>
    </el-form-item>
  </el-form>
  <p class="tip">请提交提现申请后耐心等待，提现汇出后我们将短信通知。</p>
    <withdraw-record-list></withdraw-record-list>

</div>
</template>
<script>
/**
 * 发起提现表单
 */
import withdrawRecordList from './child/withdrawRecordList.vue';
import SendCode from '../../components/common/form/sendCode.vue';
export default {
    data () {
        return {
          start1: false,
          type: 2, //1 人民币 2比特币 3莱特币
          form: {
            name: ''
          }
        }
    },
    methods: {
      sendCode1() {
            this.$message('发送中...');
            setTimeout(() => {
                this.start1 = true;
                // this.$dialog.loading.close();

                this.$message('已发送');

            }, 1000);
        }
    },
    components: {
      withdrawRecordList,
      SendCode

    }
}
</script>
<style scoped lang="less">
form {
  padding-top: 40px;
  padding-left: 135px;
}
#add-withdraw {
  padding: 0 20px;
   border: solid 1px #d9d9d9;
}
.tip {
  margin-bottom: 40px;
  color: #ff9419;
  font-size: 12px;
}
</style>