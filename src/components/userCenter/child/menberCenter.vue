<template>
    <div >
        <header>
            欢迎您，尊敬的<div class="level">
                <section class="v2">
                    <div class="icon-v big v2"><em >2</em></div>
                    <span class="menber-level">黄金会员</span>
                </section>
                </div>，张小姐。<br>
            当前手续费优惠(8折)，会员有效期2017.7.31<br>
            本月交易额 <span class="money">32985</span> 元，还差 <span class="money">48762</span> 元可升为
            <span id="upgrade-level">白金会员。</span>
            </header>
        <ul id="menber-list">
            <li class="title">
                <span>会员等级</span> <span>月交易额（￥）</span><span>交易手续费优惠</span><span>提现(人民币)费率</span>
            </li>
            <li>
                <div class="v0">
                    <div class="icon-v"><em >0</em></div>
                    <span class="menber-level">黄金会员</span>
                </div>
                 <span>100万</span><span>8折</span><span>5%</span>
            </li>
            <li>
                <div class="v1">
                    <div class="icon-v"><em >1</em></div>
                    <span class="menber-level">黄金会员</span>
                </div>
                 <span>100万</span><span>8折</span><span>5%</span>
            </li>
             <li>
                <div class="v2">
                    <div class="icon-v"><em >2</em></div>
                    <span class="menber-level">黄金会员</span>
                </div>
                 <span>100万</span><span>8折</span><span>5%</span>
            </li>
             <li>
                <div class="v3">
                    <div class="icon-v"><em >3</em></div>
                    <span class="menber-level">黄金会员</span>
                </div>
                <span>100万</span><span>8折</span><span>5%</span>
            </li>
            <li>
                <div class="v4">
                    <div class="icon-v"><em >3</em></div>
                    <span class="menber-level">黄金会员</span>
                </div>
                <span>100万</span><span>8折</span><span>5%</span>
            </li>
        </ul>
        <footer>
            <span class="a">更多 > </span>
        </footer>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeName: 'first'
        }
    }
}
</script>
<style scoped lang="less">
header {
    padding-bottom: 20px;
}
#user-center-wrap {
    width: 480px;
    margin-right: 20px;
}
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
    margin-bottom: 21px;
    padding-top: 20px;
    border-top: solid 1px #f2f2f2;
    .icon-v {
        background-size: 8px;
    }
    li {
        padding: 5px 0;
        div {
            
                color: #b0989b;
        }
        &.title {
            color: #666;
        }
        >div, >span {
        display: inline-block;
        width: 24%;
    }
    }
    
}
#upgrade-level {
    color: #999;
}
#menber-list {
    font-size: 10px;
    .icon-v {
        display: inline-block;
        width: 16px;
        height: 16px;
        em {
            font-size: 4px;
        }
    }
}
.icon-v {
    background: url(/static/img/icon/v.png);
    background-repeat: no-repeat;
    
    background-position: 4px 4px;
    text-align: right;
    
    &.big {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-size: 10px;
        box-shadow: 0 1.5px 0 0 #daa704;
        em {
            vertical-align: -2px;
        }
    }

    em {
        font-size: 5px;
        
        color: #fff;
    }
}
.v0 {
    .icon-v {
        background-color: #8d6f73;
    }
    
}
.v1 {
    .icon-v {
        background-color: #bd773a;
    }
    
}
.v2 {
    .icon-v {
        background-color: #daa704;
    }
    
}
.v3 {
    .icon-v {
        background-color: #ccc7c7;
    }
    span {
        color: #fdc000;
    }
}
.v4 {
    .icon-v {
        background-color: #a90066;
    }
    span {
        color: #fdc000;
    }
}
</style>
