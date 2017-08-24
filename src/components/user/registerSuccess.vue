<template>
    <vodal :width="320" :height="283" :show="show" animation="rotate" @hide="show = false">
        <header class="vodal-title">注册成功</header>
        <i class="right"></i>
        <p id="tip-title">注册成功</p>
        <p id="go-tip">马上充值开始交易</p>
        <div>
            <button id="go-recharge" @click="$router.push('/recharge?payWay=bankcard')" type="button" class="btn large long">去充值</button>
            <router-link to="/userCenter／home" class="btn text">跳过</router-link>
        </div>
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
#tip-title {
    font-size: 17px;
    color: #222;
}
#go-tip {
    font-size: 12px;
    color: #666;
}
.tip {
    padding-top: 10px;
}
.right {
    display: block;
    width: 40px;
    height: 40px;
    margin: 40px auto 10px;
    background: #4182ef;
}
#bo-recharge {
    margin-top: 40px;
}
</style>