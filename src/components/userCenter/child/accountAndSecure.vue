<template>
<section>
    <h3>安全等级：</h3>
    <ul>
        <li>弱</li>
        <li>中</li>
        <li>强</li>
    </ul>
    <h3>完成下列任务可提高账户安全等级</h3>
    
    <footer>
        <div>
            <span>1. 实名认证-L1</span>
            <span>2. 设置资金密码</span>
        </div>
        <router-link to="/accountAndSecure">更改设置 > </router-link></footer>
    </section>
</template>
<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>
<style scoped lang="less">
section {
    width: 480px;
    text-align: left;
}
ul {
    margin: 10px 0 20px;
    color: #fff;
    li {
        display: inline-block;
        width: 91px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        &:nth-child(1) {
            background-color: rgba(65, 130, 239, 0.4);
        }
        &:nth-child(2) {
            background-color: rgba(65, 130, 239, 0.7);
        }
        &:nth-child(3) {
            background-color: #4182ef;
        }
    }
}
footer {
    color: #1793e6;
    >div {
        margin: 10px 0 20px;
        span {
            padding-right: 20px;
        }
    }
}
h3 {
    font-size: 14px;
}
</style>