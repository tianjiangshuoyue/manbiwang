<template>
    <vodal :width="320" :height="357+161" :show="show" animation="rotate" @hide="show = false">
        <header class="vodal-title">注册</header>
        <!-- <div class="column is-12">
        <label class="label" for="mobile">Email</label>
        <p :class="{ 'control': true }">
            <input v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile') }" name="mobile" type="text" placeholder="mobile">
            <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
        </p>
    </div> -->
        <form class="vodal-content form block">
            <ul>
                <li>
                    <label class="label" for="mobile">手机号</label>
                    <p :class="{ 'control': true }">
                        <input
                            v-validate="'required|mobile'"
                            v-model="mobile"
                            :class="{'input': true, 'is-danger': errors.has('mobile') }"
                            autocomplete="false" name="mobile" type="text" placeholder="请输入手机号码">
                        <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
                    </p>
                </li>
                <li>
                    <label class="label" for="password">登陆密码</label>
                    <!-- <input 
                type="password"
                :class="{'input': true, 'is-danger': errors.has('password') }"
                v-validate="'required|password'"
                v-model="password"
                maxlength="20"
                placeholder="6-20位字母和数字" /> -->
                    <!-- <p>
                        <div class="password-wrap">
                            <input v-if="passwordType == 'password'" :class="{'input': true, 'is-danger': errors.has('password') }" v-validate="'required|password'" v-model="password" autocomplete="off" name="password" type="password" placeholder="6-20位数字、字符">
                            <input v-if="passwordType == 'input'" :class="{'input': true, 'is-danger': errors.has('password') }" v-validate="'required|password'" v-model="password" name="password" type="input" autocomplete="off" placeholder="6-20位数字、字符">
                            <i :class="['iconfont', passwordType == 'password' ? 'icon-see-close' : 'icon-see-show']" @click="changePassword"></i>
                        </div>
                        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                    </p> -->
                    <password-strong password.sync=password v-on:changePwd="changePwd"></password-strong>
                </li>
                <li class="send-code">
                    <label for="sendCode">验证码</label>
                    <p>
                        <input placeholder="短信验证" v-validate="'required|sendCode'" :class="{'input': true, 'is-danger': errors.has('sendCode') }" name="sendCode" type="phone" />
                        <send-code slot="right" :initStr="'获取验证码'" :runStr="'{%s}秒后重试'" v-model="start1" @click.native="sendCode1" type="warning"></send-code>
                        <span v-show="errors.has('sendCode')" class="help is-danger">{{ errors.first('sendCode') }}</span>
                    </p>

                </li>

            </ul>
            <p class="tip">点击注册即代表已同意
                <router-link to="/">《满币网用户协议》</router-link>
            </p>
            <button type="button" @click="validateForm" class="btn large long">注册</button>
            <router-link to="/login" class="btn text">老用户登陆</router-link>

        </form>
    </vodal>
</template>
<script>
/**
 * file 注册
 */
import SendCode from '../../components/common/form/sendCode.vue';
import PasswordStrong from '../../components/common/form/passwordStrong.vue';
export default {
    data() {
        return {
            show: true,
            start1: false,
            mobile: '',
            email: '',
            password: '',
            passwordType: 'password',
        }
    },
    watch: {

    },
    methods: {
        changePwd (newPwd) {
            this.password = newPwd;
        },
        validateForm(scope) {
            this.$validator.validateAll().then(result => {
                console.log(this.errors);
                if (result) {
                    console.log('From Submitted!');
                    return;
                    // eslint-disable-next-line
                    // this.$message(this.errors.items[0].msg);
                }
                console.log('Correct them errors!');
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
.tip {
    padding-top: 10px;
}
</style>