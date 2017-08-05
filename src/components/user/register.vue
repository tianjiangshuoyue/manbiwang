<template>
    <vodal :width="320" :height="357+161" :show="show" animation="rotate" @hide="show = false">
        <header class="vodal-title">注册</header>
        <form class="vodal-content form" data-vv-scope="form-register">
            <ul>
    
                <li>
                    <label class="label" for="mobile">手机号</label>
                    <p>
                        <input v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile') }" name="mobile" type="text" placeholder="Mobile">
                        <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
                    </p>
                </li>
                <li>
                    <label class="label" for="password">登陆密码</label>
                    <p>
                        <input v-validate="'required|password'" :class="{'input': true, 'is-danger': errors.has('password') }" name="password" type="password" placeholder="6-20位数字、字符">
                        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                    </p>
                </li>
                <li>
                    <li class="send-code">
                        <label for="sendCode">验证码</label>
                        <p>
                            <input placeholder="短信验证"
                                v-validate="'required|sendCode'"
                                :class="{'input': true,
                                'is-danger': errors.has('sendCode') }"
                                name="sendCode" type="phone" />
                            <send-code slot="right" :initStr="'获取验证码'" :runStr="'{%s}秒后重试'" v-model="start1" @click.native="sendCode1" type="warning"></send-code>
                            <span v-show="errors.has('sendCode')" class="help is-danger">{{ errors.first('sendCode') }}</span>
                        </p>
    
                    </li>
    
            </ul>
            <button @click="validateForm" type="button" class="btn large long">注册</button>
            <router-link to="/login" class="btn text">老用户登陆</router-link>
    
        </form>
    </vodal>
</template>
<script>
import Vodal from '../../components/common/vodal.vue';
import SendCode from '../../components/common/form/sendCode.vue';
import PasswordStrong from '../../components/common/form/passwordStrong.vue';
export default {
    data() {
        return {
            show: true,
            start1: false,
            mobile: '',
            email: ''
        }
    },
    watch: {
        
    },
    methods: {
        validateForm(scope) {
            this.$validator.validateAll(scope).then(result => {
                if (this.errors.items.length) {
                    
                    // eslint-disable-next-line
                    this.$message(this.errors.items[0].msg);
                    debugger;
                }
            });
        },
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
        Vodal,
        SendCode,
        PasswordStrong
    }
}
</script>
<style>
.send-code input {
    display: inline-block;
    width: 135px;
}
</style>