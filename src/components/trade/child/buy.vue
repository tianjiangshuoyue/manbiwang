<template>
<div>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="买入价">
            <el-input v-model="form.name" placeholder="100.00"></el-input>
        </el-form-item>
        <el-form-item label="买入量">
            <el-input v-model="form.name" placeholder="当前可买B12"></el-input>
        </el-form-item>
    </el-form>
    <ul class="holding-list" >
        <li
        v-for="item in holdingList"
        @click="selected(item)"
        :class="{active: activeHoldingName == item}">{{ item }}</li>
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
</style>