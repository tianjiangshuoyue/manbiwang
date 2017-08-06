<template>
<vodal
  :width="320"
  :height="357+61"
  :show="show" animation="rotate" @hide="show = false">
    <header class="vodal-title">登陆</header>
    <form class="vodal-content form" ata-vv-scope="form-login">
      <ul>
         <li>
                    <label class="label" for="mobile">登录名</label>
                    <p>
                        <input v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile') }" name="mobile" type="text"
                          placeholder="您注册的手机号">
                        <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
                    </p>
                </li>
         <li>
              <label class="label" for="password">登陆密码</label>
              <p>
                  <input v-validate="'required|password'" :class="{'input': true, 'is-danger': errors.has('password') }" name="password"
                    type="password" placeholder="请输入">
                  <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
              </p>
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
export default {
  data () {
    return {
      show: true,
      start1: false,
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
    Vodal
  }
}
</script>
<style>
</style>