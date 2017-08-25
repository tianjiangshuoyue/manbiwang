<template>
  <vodal  :height="357+61" :show="show" animation="rotate" @hide="show = false">
    <header class="vodal-title">忘记密码</header>
    <form class="vodal-content form" >
      <ul>
        <li>
          <label class="label" for="mobile">登录名</label>
          <p v-if="step == 1">
            <input
                v-validate="'required|mobile'"
                :class="{'input': true, 'is-danger': errors.has('mobile') }"
                name="mobile" type="phone"
                v-model="mobile"
                placeholder="您注册的手机号">
            <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
          </p>
          <p v-else>{{ mobile }}</p>
        </li>
        <li v-if="step == 3">
          <label class="label" for="mobile">身份证号</label>
          <p >
            <input
                :class="{'input': true, 'is-danger': errors.has('mobile') }"
                name="mobile" type="phone"
                
                placeholder="您实名认证的号码">
            <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
          </p>
        </li>
        <li>
          <label class="label" for="password">新密码</label>
          <Password></Password>
        </li>
        
        

      </ul>
      <button v-if="step == 1" @click="validateLogin" type="button" class="btn large long">下一步</button>
      <button v-if="step == 2" @click="validateLogin" type="button" class="btn large long">重置密码</button>
      <!-- <footer class="item">
        <router-link to="/register" class="left btn text">新用户注册</router-link>
        <router-link to="/" class="right btn text">忘记密码</router-link>
      </footer> -->

    </form>
  </vodal>
</template>
<script>
/**
 * file 忘记密码
 */
import Vodal from '../../components/common/vodal.vue';
import Password from '../../components/common/form/passwordStrong.vue';
export default {
  data() {
    return {
        show: true,
        mobile: '',
        password: '',
        step: 1, // 
    }
  },
  methods: {
    validateLogin(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (this.errors.items.length) {

          // eslint-disable-next-line
          this.$message(this.errors.items[0].msg);
          debugger;
        } else {
            this.step = 2;
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