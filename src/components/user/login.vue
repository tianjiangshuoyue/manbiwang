<template>
  <vodal :width="320" :height="357+61" :show="show" animation="rotate" @hide="show = false">
    <header class="vodal-title">登陆</header>
    <form class="vodal-content form block" >
      <ul>
        <li>
          <label class="label" for="mobile">登录名</label>
          <p>
            <input v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile') }" name="mobile" type="text" placeholder="您注册的手机号">
            <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
          </p>
        </li>
        <li>
          <label class="label" for="password">登陆密码</label>
          <Password></Password>
        </li>

      </ul>
      <button @click="validateLogin" type="button" class="btn large long">登陆</button>
      <footer class="item">
        <router-link to="/register" class="left btn text">新用户注册</router-link>
        <router-link to="/" class="right btn text">忘记密码</router-link>
      </footer>

    </form>
  </vodal>
</template>
<script>
/**
 * file 登录
 */
import Vodal from '../../components/common/vodal.vue';
import Password from '../../components/common/form/passwordStrong.vue';
export default {
  data() {
    return {
      show: true,
      start1: false,
      password: ''
    }
  },
  methods: {
    validateLogin(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (this.errors.items.length) {

          // eslint-disable-next-line
          this.$message(this.errors.items[0].msg);
          debugger;
        }
      });
    },
  },
  components: {
    Vodal,
    Password
  }
}
</script>
<style>

</style>