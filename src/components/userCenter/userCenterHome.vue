<template>
    <div>
        <main>
            <section>
                <header id="assets-wrap" class="active-tab">
                    <h2 >我的资产</h2>
                    
                </header>
                <my-assets></my-assets>
            </section>
            <div id="center-wrap">
                <section>
                    <header class="active-tab">
                        <h2 >会员中心</h2>
                        
                    </header>
                    <user-center></user-center>
                </section>
                <section>
                    <header class="active-tab"><h2 >账户与安全</h2></header>
                </section>
            </div>
        </main>
        <sidebar></sidebar>
    
    </div>
</template>
<script>
/**
 * file 用户中心首页-资产管理
 */
import myAssets from './child/myAssets.vue';
import userCenter from './child/userCenter.vue';
import sidebar from '../common/leftSideBar.vue';
export default {
    data () {
        return {

        }
    }, methods: {

    },components: {
        myAssets,
        sidebar,
        userCenter
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
#center-wrap {
    display: flex;
}
</style>
