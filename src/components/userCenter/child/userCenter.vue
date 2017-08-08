<template>
<div>
    欢迎您，尊敬的<div class="level"><em>V</em><span>2</span></div>黄金会员，张小姐。<br>
    当前手续费优惠(8折)，会员有效期2017.7.31<br>
    本月交易额 <span class="money">32985</span> 元，还差 <span class="money">48762</span> 元可升为         白金会员。
    <ul id="menber-list">
        <li class="title">
            <span>会员等级</span> <span>月交易额（￥）</span><span>交易手续费优惠</span><span>提现(人民币)费率</span>
        </li>
        <li>
            <span>普通会员</span> <span>100万</span><span>8折</span><span>5%</span>
        </li>
        <li>
            <span>普通会员</span> <span>100万</span><span>8折</span><span>5%</span>
        </li>
    </ul>
</div>
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
div {
    text-align: left;
}
.level {
    display: inline-block;
    span {
        font-size: 5px;
    }
    
}
#menber-list {
    padding-top: 20px;
    border-top: solid 1px #f2f2f2;
    li {
        padding: 5px 0;
        span {
            &:first-child {
                color: #b0989b;
            }
        }
        &.title {
            color: #666;
        }
    }
    span {
        display: inline-block;
        width: 19%;
    }
}
</style>
