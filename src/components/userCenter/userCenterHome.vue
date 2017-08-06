<template>
    <div>
        <main>
            <section>
                <header id="assets-wrap">
                    <h2>我的资产</h2>
                    
                </header>
                <my-assets></my-assets>
            </section>
            
            <section>
                <header>
                <h2>会员中心</h2>
            </header>
            </section>
            <header><h2>账户与安全</h2></header>
        </main>
        <sidebar></sidebar>
    
    </div>
</template>
<script>
import myAssets from './child/myAssets.vue';
import sidebar from '../common/leftSideBar.vue';
export default {
    data () {
        return {

        }
    }, methods: {

    },components: {
        myAssets,
        sidebar
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
