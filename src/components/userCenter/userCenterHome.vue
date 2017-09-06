<template>
    <div>
        <main>
            <section>
                <el-tabs v-model="activeName" >
                    <el-tab-pane label="我的资产" name="first">
                        <my-assets></my-assets>
                    </el-tab-pane>
                    
                </el-tabs>
                <!-- <header id="assets-wrap" class="active-tab">
                    <h2 >我的资产</h2>
                    
                </header> -->
                
            </section>
            <div id="center-wrap">
                    <div id="user-center-wrap">
                        <el-tabs v-model="userCenterActiveName">
                            <el-tab-pane label="会员中心" name="first">
                                <div id="user-center-content">
                                    <menber-center></menber-center>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                <section>
                    <header class="active-tab"><h2 >账户与安全</h2></header>
                    <account-and-secure></account-and-secure>
                </section>
            </div>
        </main>
    
    </div>
</template>
<script>
/**
 * file 用户中心首页-资产管理
 */
import myAssets from './child/myAssets.vue';
import menberCenter from './child/menberCenter.vue';
import accountAndSecure from './child/accountAndSecure.vue';
export default {
    data () {
        return {
            activeName: 'first',
            userCenterActiveName: 'first'
        }
    }, methods: {

    },components: {
        myAssets,
        menberCenter,
        accountAndSecure
    }
}
</script>
<style lang="less" scoped>
.el-tabs__content {
    padding-left: 20px;
}
aside {
    width: 180px;
}
main {
    // position: absolute;
    // left: 200px;
    // right: 0;
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
    margin-top: 20px;
}
#user-center-content {
    padding-left: 20px;
    padding-bottom: 20px;
}
#user-center-wrap {
    width: 480px;
    margin-right: 20px;
}
</style>
