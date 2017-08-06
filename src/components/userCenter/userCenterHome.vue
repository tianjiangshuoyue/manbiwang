<template>
    <div>
        <main>
            <section>
                <header id="assets-wrap">
                    <h2>我的资产</h2>
                    
                </header>
                <span>总资产</span>
                <my-assets></my-assets>
            </section>
            
            <section>
                <header>
                <h2>会员中心</h2>
            </header>
            </section>
            <header><h2>账户与安全</h2></header>
        </main>
        <aside>
            <section class="menu">
                Nikita 先生您好，
                <p>欢迎使用满币网 注册。
                </p>
                <p class="item">
                    安全设置
                </p>
            </section>
            <ul class="menu">
                <li>资产管理</li>
                <li>充值</li>
                <li>提现</li>
                <li>充值/提现记录</li>
                <li>账单流水</li>
                <li>银地址/地址管理</li>
            </ul>
            <ul class="menu">
                <li>会员等级</li>
                <li>VIP等级</li>
            </ul>
            <ul class="menu">
                <li>API管理</li>
                <li>我的API</li>
            </ul>
        </aside>
    
    </div>
</template>
<script>
import myAssets from './child/myAssets.vue';
export default {
    data () {
        return {

        }
    }, methods: {

    },components: {
        myAssets
    }
}
</script>
<style lang="less" scoped>
aside {
    width: 180px;
}
main {
    position: absolute;
    left: 200px;
    right: 0;
}
header {
    height: 36px;
    background-color: #f7f7f7;
}
#assets-wrap {
    width: 100%;
}
h2 {
    width: 140px;
    height: 37px;
    line-height: 37px;
    background-color: #ffffff;
    box-shadow: inset -1px 0 0 0 #d9d9d9, inset 1px 0 0 0 #d9d9d9, inset 0 3px 0 0 #4182ef;
    color: #666;
    font-size: 14px;
}
</style>
