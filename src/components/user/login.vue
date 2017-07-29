<template>
<vodal
  :width="320"
  :height="357+61"
  :show="show" animation="rotate" @hide="show = false">
    <header class="vodal-title">登陆</header>
    <form class="vodal-content form">
      <ul>
        <li>
          <label for="">登录账号</label>
          <input placeholder="请输入手机号码" type="phone">
        </li>
        <li>
          <label for="">登陆密码</label>
          <input placeholder="6-20位数字、字符" type="password">
        </li>
       
      </ul>
       <button class="btn large long">登陆</button>
      <footer class="item">
        <router-link to="/register" class="left btn text">新用户注册</router-link>
        <router-link to="/" class="right btn text">忘记密码</router-link>
      </footer>
     
       
    </form>
</vodal>
</template>
<script>
import Vodal from '../../components/common/vodal.vue';
export default {
  data () {
    return {
      show: true,
      start1: false,
    }
  },
  components: {
    Vodal
  }
}
</script>
<style>
</style>