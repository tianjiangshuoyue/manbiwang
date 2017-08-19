<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="提现类型">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="人民币" value="shanghai"></el-option>
      <el-option label="比特币" value="beijing"></el-option>
      <el-option label="莱特币" value="beijing"></el-option>

    </el-select>
  </el-form-item>
  <el-form-item label="提现数量:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="区块费用:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="提现地址:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="资金密码:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="验证码:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
</el-form>
</template>
<script>
/**
 * 提现
 */
export default {
    data () {
        return {
            form: {
                name: ''
            }
        }
    }
}
</script>