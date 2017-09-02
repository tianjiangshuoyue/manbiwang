<template>
<div>
    <form class="form inline">
        <ul>
            <li class="form-item">
                <label for="">买入价</label>
                <input type="phone" placeholder="请输入买入价">
            </li>
            <li class="form-item">
                <label for="">买入量</label>
                <input type="phone" placeholder="当前可买B12">
            </li>
        </ul>
    </form>
    <ul class="holding-list" >
        <li
            v-for="item in holdingList"
            @click="selected(item)"
            :class="{active: activeHoldingName == item}">{{ item }}
        </li>
    </ul>
    <div id="my-coin">
        <section>
            <span>可用</span>
            <span>B10.0000</span>
        </section>
        <section>
            <span>交易额</span>
            <span>￥1000.00</span>
        </section>
        <footer>
            <button>买入</button>
            </footer>
    </div>
</div>
</template>
<script>
/**
 * @file: 买入，卖出表单模块
 */
export default {
    data () {
        return {
            form: {
                name: ''
            },
            holdingList: ['1/4', '1/2', '满仓'],
            activeHoldingName: '',
        }
    },
    methods: {
        selected(holdingName) {
            this.activeHoldingName = holdingName;
        }
    }
}
</script>
<style scoped lang="less">
.form {
    .form-item {
        margin-top: 10px;
    }
    label {
        font-size: 12px;
    }
    input {
        width: 214px;
        height: 26px;

    }
}
.el-form-item__label {
    text-align: center;
    font-size: 12px;
}
.el-input__inner {
    width: 214px;
    height: 26px;
}
.el-form {
    width: 280px;
}
// 仓位
.holding-list {
    width: 50%;
    margin-left: 38%;
    li {
        display: inline-block;
        width: 40px;
        cursor: pointer;
        &.active {
            background-color: #4182ef;
            color: #fff;
            
        }
    }
}
#my-coin {
    section {
        display: flex;
        span {
            display: inline-block;
            width: 49%;
            font-size: 12px;
            
            &:nth-child(1) {
                text-align: left;
                color: #666;
            }
            &:nth-child(2) {
                text-align: right;
                color: #222;
            }
        }
        
    }
}
footer {
    button {
        width: 260px;
        height: 36px;
        margin-top: 5px;
        margin-bottom: 10px;
        border-radius: 2px;
        border: none;
        background-color: #de2e22;
        font-size: 15px;
        color: #fff;
    }
}
</style>