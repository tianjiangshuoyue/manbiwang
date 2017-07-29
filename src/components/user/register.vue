<template>
<vodal
  :width="320"
  :height="357+61"
  :show="show" animation="rotate" @hide="show = false">
    <header class="vodal-title">注册</header>
    <form class="vodal-content form">
      <ul>
        <li>
          <label for="">手机号</label>
          <input placeholder="请输入手机号码" type="phone">
        </li>
        <li>
          <label for="">登陆密码</label>
          <input placeholder="6-20位数字、字符" type="password">
        </li>
        <li>
          <label for="">验证码</label>
            <send-code slot="right" 
              :initStr="'获取验证码'"
              v-model="start1" 
              @click.native="sendCode1" 
              type="warning"
            ></send-code>
        </li>
      </ul>
       <button class="btn large long">注册</button>
      <router-link to="/login" class="btn text">老用户登陆</router-link>
       
    </form>
</vodal>
</template>
<script>
import Vodal from '../../components/common/vodal.vue';
import SendCode from '../../components/common/sendCode.vue';
export default {
  data () {
    return {
      show: true,
      start1: false,
    }
  },
  components: {
    Vodal,
    SendCode,
  }
}
</script>
<style>
</style>