<template>
    <vodal :width="320" :height="357+161" :show="show" animation="rotate" @hide="show = false">
        <header class="vodal-title">注册</header>
        <p>注册成功</p>
        <p>马上充值开始交易
        <div><button @click="validateForm" type="button" class="btn large long">去充值</button>
            <router-link to="/login" class="btn text">跳过</router-link></div>
        </p>
    </vodal>
</template>
<script>
/**
 * file 注册成功
 */
import Vodal from '../../components/common/vodal.vue';
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
        Vodal
    }
}
</script>
<style>
.tip {
    padding-top: 10px;
}
</style>