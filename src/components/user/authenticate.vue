<template>
<div>
    <vodal v-if="step == 1" :height="357+61" :show="show1" animation="rotate" @hide="show = false">
        <header class="vodal-title">实名认证-L1</header>
        <form class="vodal-content form" >
        <ul>
            <li>
            <label class="label" for="mobile">姓名:</label>
            <p v-if="step == 1">
                <input
                    v-validate="'required'"
                    name="username"
                    type="text"
                    v-model="mobile"
                    placeholder="您的真实姓名">
                <!-- <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span> -->
            </p>
            <p v-else>{{ mobile }}</p>
            </li>
            <li v-if="step == 3">
            <label class="label" for="mobile">身份证号</label>
            <p >
                <input
                    :class="{'input': true, 'is-danger': errors.has('mobile') }"
                    name="mobile"
                    type="text"
                    placeholder="您的身份证号">
                <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
            </p>
            </li>
        </ul>
        <button v-if="step == 1" @click="validateLogin" type="button" class="btn large long">确定</button>
        <p class="tip">请务必使用您本人信息。因使用他人信息造成任何损失，满币网概不负责。</p>
        <!-- <footer class="item">
            <router-link to="/register" class="left btn text">新用户注册</router-link>
            <router-link to="/" class="right btn text">忘记密码</router-link>
        </footer> -->

        </form>
    </vodal>
    <vodal  v-if="step == 2" :height="357+61" :show="show2" animation="rotate" @hide="show = false">
        <header class="vodal-title">实名认证-L1</header>
        <form class="vodal-content form" >
        <ul>
            <li>
            <label class="label" for="mobile">姓名:</label>
            <p v-if="step == 1">
                <input
                    v-validate="'required'"
                    name="username"
                    type="text"
                    v-model="mobile"
                    placeholder="您的真实姓名">
                <!-- <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span> -->
            </p>
            <p v-else>{{ mobile }}</p>
            </li>
            <li v-if="step == 3">
            <label class="label" for="mobile">身份证号</label>
            <p >
                <input
                    :class="{'input': true, 'is-danger': errors.has('mobile') }"
                    name="mobile"
                    type="text"
                    placeholder="您的身份证号">
                <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
            </p>
            </li>
        </ul>
        <button v-if="step == 1" @click="validateLogin" type="button" class="btn large long">确定</button>
        <p class="tip">请务必使用您本人信息。因使用他人信息造成任何损失，满币网概不负责。</p>
        <!-- <footer class="item">
            <router-link to="/register" class="left btn text">新用户注册</router-link>
            <router-link to="/" class="right btn text">忘记密码</router-link>
        </footer> -->

        </form>
    </vodal>
</div>
</template>
<script>
export default {
    data () {
        {
            step: 1,
            show1: true,
            show2: false
        }
    }
}
</script>
<style>
.tip {
    margin-top: 10px;
    color: #ff4033;
}
</style>
