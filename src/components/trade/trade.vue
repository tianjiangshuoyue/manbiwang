<template>
<div id="trade-wrap" class="main-w">
    <header >
        <ul id="coin-list">
            <li>比特币BTC</li>
        </ul>
        <ul id="price-list">
            <li id="new-price"><span>最新价</span><em>¥ 16000.00</em></li>
            <li id="change-price"><span>涨跌</span><em>+16000.00</em></li>
            <li id="open-price"><span>开</span><em>￥10.00 10.00%</em></li>
            <li id="hight-price"><span>高</span><em>￥20000.00</em></li>
            <li id="low-price"><span>低</span><em>￥20000.00</em></li>
        </ul>
       
    </header>
    <div id="trade-main-wrap">
        <figure id="chart"></figure>
        <div id="tab-wrap">
              <el-tabs v-model="fiveActiveName" @tab-click="handleClick" >
                <el-tab-pane label="五档" name="first">
                   <five></five>
                </el-tab-pane>
                <el-tab-pane label="成交" name="second">
                    <five></five>
                </el-tab-pane>
                
            </el-tabs>
            <el-tabs v-model="operateActiveName" @tab-click="handleClick">
                <el-tab-pane label="买入" name="first">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="买入价">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="买入量">
                            <el-input v-model="form.name"></el-input>
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
                </el-tab-pane>
                <el-tab-pane label="卖出" name="second">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="买入价">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="买入量">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-form>
                    <ul class="holding-list">
                        <li>1/41</li>
                        <li>1/2</li>
                        <li>满仓</li>
                    </ul>
                    <div>
                        <section>
                            <span>可用</span>
                            <span>交易额</span>
                        </section>
                        <section>
                            <span>B10.0000</span>
                            <span>￥1000.00</span>
                        </section>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
  
    <el-tabs v-model="entrustActiveName" @tab-click="handleClick">
        <el-tab-pane label="当前委托" name="first">
            <entrust-wrap></entrust-wrap>
        </el-tab-pane>
        <el-tab-pane label="历史委托" name="second">
            <entrust-wrap></entrust-wrap>
        </el-tab-pane>
        <el-tab-pane label="持仓" name="second">配置管理</el-tab-pane>
    </el-tabs>
    
</div>
</template>
<script>
import five from './child/wudang.vue';
import entrustWrap from './child/entrust-wrap.vue';
export default {
    data () {
        return {
            activeName: '',
            fiveActiveName: 'first',
            operateActiveName: 'first', // 是买入还是卖出的切换
            entrustActiveName: 'first', // 是当前委托还是历史委托／持仓的tab切换
            holdingList: ['1/4', '1/2', '满仓'],
            activeHoldingName: '',
            form: {

            }
        }
    }, methods: {
        handleClick () {

        },
        selected(holdingName) {
            this.activeHoldingName = holdingName;
        }
    },
    components: {
        entrustWrap,
        five
    }
}
</script>
<style scoped lang="less">
@import './css/trade.less';
</style>