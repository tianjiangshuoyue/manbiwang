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
                    <buy></buy>
                </el-tab-pane>
                <el-tab-pane label="卖出" name="second">
                    <buy></buy>
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
import buy from './child/buy.vue';
export default {
    data () {
        return {
            activeName: '',
            fiveActiveName: 'first',
            operateActiveName: 'first', // 是买入还是卖出的切换
            entrustActiveName: 'first', // 是当前委托还是历史委托／持仓的tab切换
            
            form: {

            }
        }
    }, methods: {
        handleClick () {

        },
        
    },
    components: {
        entrustWrap,
        five,
        buy
    }
}
</script>
<style scoped lang="less">
@import './css/trade.less';
</style>