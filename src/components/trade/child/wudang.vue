<template>
<div class="wrap">
    <ul class="five-list">
        <li class="up">
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
        <li class="down">
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
        <li class="up">
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
         <li>
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
         <li class="up">
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
    </ul>
    <section id="current-price">2900.00</section>
        <ul class="five-list">
        <li class="up">
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
        <li class="down">
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
        <li class="up">
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
         <li>
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
        </li>
         <li class="up">
            <span>卖5</span>
            <span>2968.01</span>
            <span>2968.01</span>
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
ul {
    li {
        height: 20px;
        &:hover {
            background: #f8f8fd;
        }
        &:active {
            background-color: #e9f0f5;
        }
        span {
            display: inline-block;
            width: 29%;
            &:nth-child(1) {
                text-align: left;
            }
            &:nth-child(3) {
                text-align: right;
            }
            
        }
        
    }
    .up {
        color: #de2e22;
    }
    .down {
        color: #15893b;
    }
    
}
#current-price {
    margin: 10px auto;
    color: #222;
    font-size: 14px;
    font-weight: bold;
}
.wrap {
    padding: 13px 10px;
    border: solid 1px #d9d9d9;
    border-top: none;
}
</style>