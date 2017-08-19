<template>
<aside>
    <section class="menu">
        Nikita 先生您好，
        <p>
            欢迎使用满币网<br>
            注册。
        </p>
        <p class="item">
            <router-link to="/userCenter/secureSetting">安全设置</router-link>
        </p>
    </section>
    <ul class="menu">
        <li><router-link to="/userCenter/home">资产管理</router-link></li>
        <li><router-link to="/recharge??payWay=bankcard">充值</router-link></li>
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
  
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
aside {
    width: 180px;
    text-align: left;
    color: #222;
    
}
.menu {
    box-sizing: border-box;
    padding-left: 27px;
}
</style>
